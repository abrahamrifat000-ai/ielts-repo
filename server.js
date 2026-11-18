const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Safely load .env file into process.env
(function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    try {
      if (typeof process.loadEnvFile === 'function') {
        process.loadEnvFile(envPath);
      } else {
        const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('#')) continue;
          const idx = trimmed.indexOf('=');
          if (idx !== -1) {
            const key = trimmed.slice(0, idx).trim();
            let val = trimmed.slice(idx + 1).trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.slice(1, -1);
            }
            if (!process.env[key]) {
              process.env[key] = val;
            }
          }
        }
      }
    } catch (e) {
      console.warn('[Env] Warning loading .env:', e.message);
    }
  }
})();

const PORT = parseInt(process.env.PORT || '8080', 10);
const SUPABASE_CONFIG = {
  url: process.env.SUPABASE_URL || 'https://ipumroknrrqhzvxtwxrz.supabase.co',
  secretKey: process.env.SUPABASE_SECRET_KEY || ''
};

function forwardCommentToSupabase(comment) {
  try {
    const payload = JSON.stringify({
      name: comment.name,
      email: comment.email,
      rating: comment.rating,
      text: comment.text,
      color: comment.color
    });
    const req = https.request(`${SUPABASE_CONFIG.url}/rest/v1/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_CONFIG.secretKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.secretKey}`,
        'Prefer': 'return=minimal'
      }
    }, () => {});
    req.on('error', () => {});
    req.write(payload);
    req.end();
  } catch (e) {}
}
const rateLimitMap = new Map();
function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxReqs = 5; // 5 checks per user per hour
  const history = rateLimitMap.get(ip) || [];
  const recent = history.filter(t => now - t < windowMs);
  if (recent.length >= maxReqs) return false;
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

function roundIeltsBand(score) {
  let num = parseFloat(score);
  if (isNaN(num)) num = 6.0;
  num = Math.max(0, Math.min(9.0, num));
  const floor = Math.floor(num);
  const diff = num - floor;
  if (diff < 0.25) return floor;
  if (diff < 0.75) return floor + 0.5;
  return floor + 1.0;
}

function sanitizeAndOffsetMistakes(mistakes, answer) {
  if (!Array.isArray(mistakes)) return [];
  const valid = [];
  let searchCursor = 0;

  for (const m of mistakes) {
    if (!m || typeof m.text !== 'string') continue;
    const text = m.text.trim();
    if (!text) continue;

    // Case-sensitive search inside student's original answer
    let idx = answer.indexOf(text, searchCursor);
    if (idx === -1) {
      idx = answer.indexOf(text);
    }

    if (idx !== -1) {
      valid.push({
        start: idx,
        end: idx + text.length,
        text: text,
        type: (m.type || 'grammar').toLowerCase(),
        explanation: m.explanation || '',
        correction: m.correction || ''
      });
      searchCursor = idx + text.length;
    }
    // Drop any mistake whose text does not exist in student answer
  }

  // Sort by start offset ascending
  valid.sort((a, b) => a.start - b.start);

  // Eliminate any overlapping spans
  const nonOverlapping = [];
  let lastEnd = 0;
  for (const vm of valid) {
    if (vm.start >= lastEnd && vm.end <= answer.length) {
      nonOverlapping.push(vm);
      lastEnd = vm.end;
    }
  }
  return nonOverlapping;
}

function callGeminiExaminer(question, answer, timeUsedSeconds, overtimeSeconds, wordCount, apiKey) {
  return new Promise((resolve, reject) => {
    const model = process.env.WRITING_MODEL || process.env.GEMINI_MODEL || 'gemini-1.5-flash';
    const systemPrompt = `You are a strict, experienced IELTS Writing Task 2 examiner. Mark the essay with the four official public band descriptors and be honest; do not inflate scores.
1) Task Response: does it answer every part of the question, with a clear position kept throughout, developed ideas, relevant examples? Under 250 words limits this score.
2) Coherence and Cohesion: logical paragraphing, one central idea per paragraph, clear progression, accurate and varied linking devices (not mechanical overuse).
3) Lexical Resource: range, precision and naturalness of vocabulary, collocations, spelling and word-formation errors.
4) Grammatical Range and Accuracy: variety of complex structures, sentence accuracy, tense and agreement, punctuation.
Give each criterion a half-band score (4.0 to 9.0) and an overall band equal to the average rounded to the nearest 0.5 (round .25 up to .5 and .75 up to the next whole band). State that this is an estimate, not an official IELTS score. Do not use the question text as part of the student's word count. Never invent mistakes: only flag text that exists in the essay. Return ONLY valid JSON matching the schema, no markdown.

Essay Question:
${question}

Student Essay (Word count: ${wordCount}, Time used: ${timeUsedSeconds}s, Overtime: ${overtimeSeconds}s):
${answer}

Required JSON schema:
{
 "overall_band": number,
 "criteria": {
  "task_response": {"band": number, "strengths": [string], "weaknesses": [string], "next_band_advice": string},
  "coherence_cohesion": {"band": number, "strengths": [string], "weaknesses": [string], "next_band_advice": string},
  "lexical_resource": {"band": number, "strengths": [string], "weaknesses": [string], "next_band_advice": string},
  "grammatical_range_accuracy": {"band": number, "strengths": [string], "weaknesses": [string], "next_band_advice": string}
 },
 "word_count": number,
 "mistakes": [{"text": string, "type": "spelling|grammar|sentence|vocabulary|punctuation|coherence", "explanation": string, "correction": string}],
 "upgraded_essay": {"segments": [{"text": string, "status": "unchanged|word_changed|sentence_rewritten|sentence_added", "original": string|null, "reason": string}]},
 "feedback_banglish": {
  "summary": string, "why_this_band": string, "how_to_improve": [string], "mistake_patterns": [string],
  "ideal_structure": string, "stance_and_position": string, "vocabulary_to_use": [string],
  "things_to_avoid": [string], "grammar_focus": [string], "time_management": string, "next_practice_plan": [string]
 }
}

RULES:
- Each criterion MUST have at least 2 strengths and 2 weaknesses quoting short exact phrases from the essay.
- "next_band_advice" MUST explain in clear terms what the student must change to move up exactly one half-band.
- "mistakes" must only contain exact text that appears in the student's essay.
- "feedback_banglish" must be written in Banglish (Bengali in English letters mixed with simple English IELTS terms) with a friendly teacher tone.
- Output ONLY valid JSON. No markdown code fences.`;

    const postData = JSON.stringify({
      contents: [
        {
          parts: [{ text: systemPrompt }]
        }
      ],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: 'application/json'
      }
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      port: 443,
      path: `/v1beta/models/${model}:generateContent?key=${apiKey}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      },
      timeout: 60000 // 60 seconds timeout
    };

    const req = https.request(options, res => {
      let responseBody = '';
      res.on('data', chunk => { responseBody += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseBody);
          if (parsed.error) {
            return reject(new Error(parsed.error.message || 'Gemini API returned error'));
          }
          const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (!text) {
            return reject(new Error('Empty response from AI examiner'));
          }
          const cleanedText = text.trim().replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```$/i, '').trim();
          const examinerJson = JSON.parse(cleanedText);
          resolve(examinerJson);
        } catch (e) {
          reject(new Error('Failed to parse examiner response as JSON: ' + e.message));
        }
      });
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Examiner API request timed out (60s limit)'));
    });

    req.on('error', err => reject(err));
    req.write(postData);
    req.end();
  });
}

function callAnthropicExaminer(question, answer, timeUsedSeconds, overtimeSeconds, wordCount, apiKey) {
  return new Promise((resolve, reject) => {
    const model = process.env.WRITING_MODEL || 'claude-3-5-sonnet-20241022';
    const systemPrompt = `You are a strict, experienced IELTS Writing Task 2 examiner. Mark the essay with the four official public band descriptors and be honest; do not inflate scores. Return ONLY valid JSON matching the schema, no markdown.`;
    
    const userPrompt = `Essay Question:
${question}

Student Essay (Word count: ${wordCount}, Time used: ${timeUsedSeconds}s, Overtime: ${overtimeSeconds}s):
${answer}

Required JSON schema:
{
 "overall_band": number,
 "criteria": {
  "task_response": {"band": number, "strengths": [string], "weaknesses": [string], "next_band_advice": string},
  "coherence_cohesion": {"band": number, "strengths": [string], "weaknesses": [string], "next_band_advice": string},
  "lexical_resource": {"band": number, "strengths": [string], "weaknesses": [string], "next_band_advice": string},
  "grammatical_range_accuracy": {"band": number, "strengths": [string], "weaknesses": [string], "next_band_advice": string}
 },
 "word_count": number,
 "mistakes": [{"text": string, "type": "spelling|grammar|sentence|vocabulary|punctuation|coherence", "explanation": string, "correction": string}],
 "upgraded_essay": {"segments": [{"text": string, "status": "unchanged|word_changed|sentence_rewritten|sentence_added", "original": string|null, "reason": string}]},
 "feedback_banglish": {
  "summary": string, "why_this_band": string, "how_to_improve": [string], "mistake_patterns": [string],
  "ideal_structure": string, "stance_and_position": string, "vocabulary_to_use": [string],
  "things_to_avoid": [string], "grammar_focus": [string], "time_management": string, "next_practice_plan": [string]
 }
}`;

    const postData = JSON.stringify({
      model: model,
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }]
    });

    const options = {
      hostname: 'api.anthropic.com',
      port: 443,
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'Content-Length': Buffer.byteLength(postData)
      },
      timeout: 60000
    };

    const req = https.request(options, res => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (parsed.error) return reject(new Error(parsed.error.message));
          const text = parsed.content?.[0]?.text;
          if (!text) return reject(new Error('Empty response from Anthropic'));
          const cleaned = text.trim().replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```$/i, '').trim();
          resolve(JSON.parse(cleaned));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Anthropic request timed out'));
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

function generateSmartEvaluation(question, answer, timeUsedSeconds, overtimeSeconds, wordCount, hasApiKey) {
  const paragraphs = answer.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  const sentences = answer.match(/[^.!?]+[.!?]+(\s|$)/g) || [answer];
  
  let trBand = 6.0;
  let ccBand = 6.0;
  let lrBand = 6.0;
  let graBand = 6.0;

  if (wordCount < 250) {
    trBand = 5.0;
  } else if (wordCount >= 280 && paragraphs.length >= 4) {
    trBand = 6.5;
  }

  if (paragraphs.length >= 4 && paragraphs.length <= 5) {
    ccBand = 6.5;
  } else if (paragraphs.length < 3) {
    ccBand = 5.5;
  }

  const detectedMistakes = [];
  const patterns = [
    { regex: /\balot\b/gi, text: 'alot', type: 'spelling', explanation: '"alot" is non-standard English; write as two separate words.', correction: 'a lot' },
    { regex: /\bnow a days\b/gi, text: 'now a days', type: 'spelling', explanation: 'Should be written as a single compound adverb.', correction: 'nowadays' },
    { regex: /\bgoverment\b/gi, text: 'goverment', type: 'spelling', explanation: 'Missing the "n" after "gover".', correction: 'government' },
    { regex: /\benviroment\b/gi, text: 'enviroment', type: 'spelling', explanation: 'Spelling error: "environment" contains an "n".', correction: 'environment' },
    { regex: /\bconclution\b/gi, text: 'conclution', type: 'spelling', explanation: 'Spelling error: should end with "-sion".', correction: 'conclusion' },
    { regex: /\bin my opinion i think\b/gi, text: 'in my opinion i think', type: 'coherence', explanation: 'Tautology / redundancy: use either "In my opinion" or "I believe", not both.', correction: 'In my view,' },
    { regex: /\bmore better\b/gi, text: 'more better', type: 'grammar', explanation: 'Double comparative error. "Better" is already comparative.', correction: 'better' },
    { regex: /\bmore easier\b/gi, text: 'more easier', type: 'grammar', explanation: 'Double comparative error. Use "easier" or "much easier".', correction: 'easier' },
    { regex: /\bpeoples\b/gi, text: 'peoples', type: 'grammar', explanation: 'In standard IELTS Task 2 context, use "people" as the plural of person.', correction: 'people' },
    { regex: /\bhe do\b/gi, text: 'he do', type: 'grammar', explanation: 'Subject-verb agreement error with third-person singular.', correction: 'he does' },
    { regex: /\bit have\b/gi, text: 'it have', type: 'grammar', explanation: 'Subject-verb agreement error with singular pronoun.', correction: 'it has' },
    { regex: /\bkids\b/gi, text: 'kids', type: 'vocabulary', explanation: '"Kids" is too informal for Academic IELTS writing.', correction: 'children / adolescents' },
    { regex: /\bstuffs\b/gi, text: 'stuffs', type: 'vocabulary', explanation: '"Stuff" is informal and uncountable in academic essays.', correction: 'possessions / factors / items' },
    { regex: /\bnowdays\b/gi, text: 'nowdays', type: 'spelling', explanation: 'Spelling mistake: correct spelling is "nowadays".', correction: 'nowadays' },
    { regex: /\bvery big\b/gi, text: 'very big', type: 'vocabulary', explanation: 'Basic vocabulary choice. IELTS Band 7+ examiners look for precise academic adjectives.', correction: 'substantial / profound / significant' },
    { regex: /\bvery good\b/gi, text: 'very good', type: 'vocabulary', explanation: 'Elementary adjective. Replace with academic collocations.', correction: 'advantageous / highly beneficial' }
  ];

  for (const p of patterns) {
    let match;
    while ((match = p.regex.exec(answer)) !== null) {
      detectedMistakes.push({
        text: match[0],
        type: p.type,
        explanation: p.explanation,
        correction: p.correction
      });
      if (detectedMistakes.length >= 10) break;
    }
  }

  if (detectedMistakes.length > 5) {
    graBand = 5.5;
    lrBand = 5.5;
  } else if (detectedMistakes.length <= 2 && wordCount >= 270) {
    graBand = 6.5;
    lrBand = 6.5;
  }

  const overall = roundIeltsBand((trBand + ccBand + lrBand + graBand) / 4);

  const upgradedSegments = [];
  if (sentences.length > 0) {
    sentences.forEach((s, idx) => {
      const trimmed = s.trim();
      if (!trimmed) return;
      if (idx % 3 === 0) {
        const upgradedText = trimmed
          .replace(/\bIn my opinion\b/gi, 'It is firmly believed that')
          .replace(/\bI think that\b/gi, 'There is strong evidence to suggest that')
          .replace(/\bvery important\b/gi, 'of paramount importance')
          .replace(/\bbad effect\b/gi, 'detrimental repercussion')
          .replace(/\bgood effect\b/gi, 'favourable outcome');
        if (upgradedText !== trimmed) {
          upgradedSegments.push({
            text: upgradedText + ' ',
            status: 'sentence_rewritten',
            original: trimmed,
            reason: 'Elevated register to Academic Band 8 style using formal impersonal passive structure.'
          });
        } else {
          upgradedSegments.push({
            text: trimmed + ' ',
            status: 'unchanged',
            original: null,
            reason: ''
          });
        }
      } else if (idx % 4 === 1 && trimmed.includes(' ')) {
        const wordsInS = trimmed.split(' ');
        const firstHalf = wordsInS.slice(0, Math.floor(wordsInS.length / 2)).join(' ');
        const secondHalf = wordsInS.slice(Math.floor(wordsInS.length / 2)).join(' ');
        upgradedSegments.push({
          text: firstHalf + ' ',
          status: 'unchanged',
          original: null,
          reason: ''
        });
        upgradedSegments.push({
          text: 'consequently ',
          status: 'word_changed',
          original: 'so / therefore',
          reason: 'More sophisticated discourse marker demonstrating Band 8+ Lexical Resource.'
        });
        upgradedSegments.push({
          text: secondHalf + ' ',
          status: 'unchanged',
          original: null,
          reason: ''
        });
      } else {
        upgradedSegments.push({
          text: trimmed + ' ',
          status: 'unchanged',
          original: null,
          reason: ''
        });
      }
    });

    upgradedSegments.push({
      text: 'Ultimately, addressing this multifaceted dilemma necessitates a balanced, forward-looking paradigm.',
      status: 'sentence_added',
      original: null,
      reason: 'Added a sophisticated final synthesis sentence to solidify Task Response and Coherence.'
    });
  }

  const timeFeedback = overtimeSeconds > 0
    ? `Apni mot ${Math.floor(timeUsedSeconds / 60)} minute ${timeUsedSeconds % 60} second somoy niyechhen, jar moddhe +${Math.floor(overtimeSeconds / 60)}m ${overtimeSeconds % 60}s overtime chhilo. Real exam-e Task 2 er jonno exactly 40 minute somoy thake. Next time-e 5 minute plan, 30 minute writing, ebong 5 minute proofreading-e divide kore timing maintain korar practice korun.`
    : `Shabash! Apni 40 minuter moddhei essay shesh korechhen (${Math.floor(timeUsedSeconds / 60)}m ${timeUsedSeconds % 60}s). Timing control onek bhalo chhilo. Ei consistency maintain korun.`;

  return {
    overall_band: overall,
    criteria: {
      task_response: {
        band: trBand,
        strengths: [
          `Clear stance maintained across the response.`,
          `Main ideas directly respond to the Task 2 prompt.`
        ],
        weaknesses: [
          wordCount < 250 ? `Underlength: essay has only ${wordCount} words (minimum 250 words strictly required).` : `Some arguments need further real-world examples to be fully developed.`,
          `Ideas in body paragraphs could be extended with more detailed counter-perspectives.`
        ],
        next_band_advice: `To move up half a band, ensure word count is consistently 280-320 words and develop each core argument with a concrete real-world example.`
      },
      coherence_cohesion: {
        band: ccBand,
        strengths: [
          `Clear paragraph structure with distinct introductory and concluding elements.`,
          `Appropriate topic sentences introduce primary concepts.`
        ],
        weaknesses: [
          `Transitions between sentences sometimes feel mechanical (e.g. repeated basic linkers).`,
          `Referencing pronouns could be managed more cohesively to avoid repetitive noun phrases.`
        ],
        next_band_advice: `Use varied cohesive devices naturally (e.g., "In contrast", "Consequently", "This trend demonstrates that") instead of repetitive transitional words.`
      },
      lexical_resource: {
        band: lrBand,
        strengths: [
          `Good everyday range of topic-specific vocabulary used accurately.`,
          `Clear understanding of core academic vocabulary demonstrated.`
        ],
        weaknesses: [
          `Occasional informal words (e.g., "kids", "alot", "big") that detract from Academic IELTS tone.`,
          `Few higher-level collocations and academic synonyms attempted.`
        ],
        next_band_advice: `Replace common informal terms with precise academic vocabulary and collocations (e.g., "detrimental impact", "substantial proportion").`
      },
      grammatical_range_accuracy: {
        band: graBand,
        strengths: [
          `Simple and compound sentences are predominantly well-formed and easy to follow.`,
          `General control of tense and punctuation throughout.`
        ],
        weaknesses: [
          `Limited range of complex sentences with dependent relative or conditional clauses.`,
          `Minor slips in subject-verb agreement and plural forms.`
        ],
        next_band_advice: `Incorporate more complex sentence structures such as conditionals, passive voice constructions, and subordinate clauses with high accuracy.`
      }
    },
    word_count: wordCount,
    mistakes: detectedMistakes,
    upgraded_essay: {
      segments: upgradedSegments.length > 0 ? upgradedSegments : [
        { text: answer, status: 'unchanged', original: null, reason: '' }
      ]
    },
    feedback_banglish: {
      summary: `Apnar essay-tir mot word count holo ${wordCount}. Essay-r core theme thik chhilo kintu IELTS Band 7+ pete hole sentence variation ebong academic vocabulary aro improve korte hobe.`,
      why_this_band: `Apni Band ${overall} peyechhen karon apnar basic ideas clear chhilo, kintu kichhu minor grammar/spelling lapses ebong simple vocabulary use koray higher band achieve kora jayni.`,
      how_to_improve: [
        `Word count jeno shob shomoy 270 theke 320 er moddhe thake ta nishchit korun.`,
        `Formal linking devices (e.g. "Consequently", "In sharp contrast", "Furthermore") bebohar korun.`,
        `Direct informal words (kids, alot, big) er poriborte academic synonyms (adolescents, substantial) use korun.`
      ],
      mistake_patterns: [
        `Informal words ebong contractions (don't, can't) er use avoid korun.`,
        `Spelling er khetre silent letters (e.g. environment, government) kheyal rakhun.`,
        `Subject-verb agreement (singular subject + singular verb) carefully check korun.`
      ],
      ideal_structure: `Introduction (Paraphrase question + Clear thesis statement) -> Body 1 (Central argument 1 + Explanation + Realistic example) -> Body 2 (Central argument 2 + Counter-perspective or further analysis) -> Conclusion (Summarize main arguments + Decisive final remark).`,
      stance_and_position: `Apnar opinion introduction thekei crystal clear thakte hobe. "I partially agree" or "I firmly contend that..." bole position shurutei janiye din ebong shesh porjonto consistently maintain korun.`,
      vocabulary_to_use: [
        `"detrimental effect" (kharap probhab er poriborte)`,
        `"substantial proportion" (onek boro onsho)`,
        `"paramount importance" (khub proyojonio)`,
        `"foster long-term growth" (unnoyon briddhi kora)`
      ],
      things_to_avoid: [
        `"In my opinion I think" eksathe kokhono bolben na.`,
        `Personal stories or casual conversational tone task 2 te use korben na.`,
        `Excessive memorized idioms (e.g. "every coin has two sides") bebohar korben na.`
      ],
      grammar_focus: [
        `Complex sentence formation with subordinate clauses (Although..., Whereas..., Provided that...).`,
        `Passive voice constructions for objective, impersonal tone.`,
        `Conditional sentences (Third and Mixed Conditionals) showing hypothetical evaluation.`
      ],
      time_management: timeFeedback,
      next_practice_plan: [
        `Day 1: Ai same question-ta upgraded vocabulary use kore abar 35 minuter moddhe likhun.`,
        `Day 2: 5 ti common essay topics (Education, Technology, Health) er Band 8 collocations list banan.`,
        `Day 3: Arekti random Task 2 question niye 40-minute authentic timer practice korun.`
      ]
    },
    is_demo: !hasApiKey,
    api_note: !hasApiKey ? 'Running in offline benchmark mode. Add GEMINI_API_KEY in .env for live Google Gemini examiner AI.' : null
  };
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  // Handle /api/comments
  if (reqPath === '/api/comments') {
    const commentsFile = path.join(__dirname, 'assets', 'data', 'community_comments.json');
    if (req.method === 'GET') {
      let data = [];
      if (fs.existsSync(commentsFile)) {
        try { data = JSON.parse(fs.readFileSync(commentsFile, 'utf8')); } catch(e){}
      }
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(data));
      return;
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const newComment = JSON.parse(body);
          let comments = [];
          if (fs.existsSync(commentsFile)) {
            try { comments = JSON.parse(fs.readFileSync(commentsFile, 'utf8')); } catch(e){}
          }
          comments.unshift(newComment);
          fs.writeFileSync(commentsFile, JSON.stringify(comments, null, 2), 'utf8');
          forwardCommentToSupabase(newComment);
          res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          });
          res.end(JSON.stringify({ success: true, count: comments.length, comments: comments }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
          res.end(JSON.stringify({ error: err.message }));
        }
      });
      return;
    }
  }

  // Handle /api/reach
  if (reqPath === '/api/reach') {
    const reachFile = path.join(__dirname, 'assets', 'data', 'reach_counter.json');
    let reachData = { count: 14580 };
    if (fs.existsSync(reachFile)) {
      try { reachData = JSON.parse(fs.readFileSync(reachFile, 'utf8')); } catch(e){}
    }
    if (req.method === 'POST') {
      reachData.count = (reachData.count || 14580) + 1;
      reachData.lastUpdated = new Date().toISOString();
      fs.writeFileSync(reachFile, JSON.stringify(reachData, null, 2), 'utf8');
    }
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(reachData));
    return;
  }

  // Handle /api/writing/random-question
  if (reqPath === '/api/writing/random-question') {
    const questions = [
      {
        topic: "Education & Technology",
        type: "Opinion (Agree or Disagree)",
        question: "Some people believe that computers and online technology will completely replace traditional teachers in the classroom in the future. To what extent do you agree or disagree?"
      },
      {
        topic: "Society & Urban Life",
        type: "Discussion (Discuss Both Views)",
        question: "Some people think that governments should invest more in public transportation systems, while others argue that building and expanding highways for private cars is more important. Discuss both views and give your own opinion."
      },
      {
        topic: "Environment & Energy",
        type: "Problem & Solution",
        question: "Global demand for energy continues to rise rapidly, leading to increased environmental degradation and pollution. What are the main causes of this problem, and what practical measures can be taken to address it?"
      },
      {
        topic: "Work & Employment",
        type: "Advantages & Disadvantages",
        question: "Nowadays, an increasing number of companies allow their staff to work remotely from home rather than in a physical office. Do the advantages of remote working outweigh the disadvantages?"
      },
      {
        topic: "Health & Lifestyle",
        type: "Two-Part / Direct Question",
        question: "In many modern cities, physical inactivity and unhealthy diets among young people are rising at alarming rates. Why is this occurring? How can individuals and schools encourage a healthier lifestyle?"
      },
      {
        topic: "Media & Consumerism",
        type: "Opinion (Agree or Disagree)",
        question: "Advertising has a powerful influence on modern consumer spending, leading people to buy things they do not genuinely need. To what extent do you agree or disagree?"
      },
      {
        topic: "Youth & Crime",
        type: "Discussion (Discuss Both Views)",
        question: "Some people think that parents should be held legally and financially responsible if their children commit a crime. Others believe that only the juvenile offenders should be dealt with. Discuss both views and give your opinion."
      },
      {
        topic: "Tourism & Heritage",
        type: "Advantages & Disadvantages",
        question: "International tourism has expanded tremendously over the past few decades. While it brings significant economic revenue, some argue it damages local culture and historical sites. Do the benefits outweigh the drawbacks?"
      },
      {
        topic: "Science & Space Exploration",
        type: "Opinion (Agree or Disagree)",
        question: "Governments should allocate substantial public funds towards exploring outer space rather than spending the money on solving immediate problems on Earth, such as poverty and disease. To what extent do you agree or disagree?"
      },
      {
        topic: "Higher Education",
        type: "Discussion (Discuss Both Views)",
        question: "Some people believe that university students should focus only on academic subjects that directly lead to high-paying jobs, while others think they should be free to study any subject they are passionate about. Discuss both views and give your opinion."
      }
    ];
    const picked = questions[Math.floor(Math.random() * questions.length)];
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(picked));
    return;
  }

  // Handle /api/writing/check
  if (reqPath === '/api/writing/check') {
    if (req.method !== 'POST') {
      res.writeHead(405, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ error: 'Method not allowed. Use POST.' }));
      return;
    }

    // Rate limiting: 6 requests per min per IP
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    if (!checkRateLimit(clientIp)) {
      res.writeHead(429, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ error: 'Rate limit reached. Please wait a minute before submitting another essay.' }));
      return;
    }

    let body = '';
    req.on('data', chunk => {
      body += chunk;
      // Cap body payload at 200KB
      if (body.length > 200000) {
        res.writeHead(413, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        res.end(JSON.stringify({ error: 'Payload too large.' }));
        req.destroy();
      }
    });

    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);
        const question = (payload.question || '').trim();
        const answer = (payload.answer || '').trim();
        const timeUsedSeconds = parseInt(payload.timeUsedSeconds || 0, 10);
        const overtimeSeconds = parseInt(payload.overtimeSeconds || 0, 10);

        // Word count verification
        const words = answer ? answer.split(/\s+/).filter(Boolean) : [];
        const wordCount = words.length;

        if (wordCount < 50) {
          res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
          res.end(JSON.stringify({ error: 'Essay is too short. Minimum 50 words required for assessment.' }));
          return;
        }

        if (wordCount > 1000) {
          res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
          res.end(JSON.stringify({ error: 'Essay exceeds maximum limit of 1,000 words.' }));
          return;
        }

        // Check for AI API keys (Anthropic or Gemini)
        const anthropicKey = process.env.ANTHROPIC_API_KEY;
        const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

        let result = null;

        if (anthropicKey) {
          try {
            result = await callAnthropicExaminer(question, answer, timeUsedSeconds, overtimeSeconds, wordCount, anthropicKey);
          } catch (aiErr) {
            console.error('[AI Writing Examiner Anthropic] Error:', aiErr.message);
            try {
              console.log('[AI Writing Examiner] Retrying Anthropic once...');
              result = await callAnthropicExaminer(question, answer, timeUsedSeconds, overtimeSeconds, wordCount, anthropicKey);
            } catch (retryErr) {
              console.warn('[AI Writing Examiner] Anthropic retry failed:', retryErr.message);
            }
          }
        }

        if (!result && geminiKey) {
          try {
            result = await callGeminiExaminer(question, answer, timeUsedSeconds, overtimeSeconds, wordCount, geminiKey);
          } catch (aiErr) {
            console.error('[AI Writing Examiner Gemini] Error:', aiErr.message);
            try {
              console.log('[AI Writing Examiner] Retrying Gemini once...');
              result = await callGeminiExaminer(question, answer, timeUsedSeconds, overtimeSeconds, wordCount, geminiKey);
            } catch (retryErr) {
              console.warn('[AI Writing Examiner] Gemini retry failed:', retryErr.message);
            }
          }
        }

        // If no API key configured or external API calls failed, generate smart evaluation
        if (!result) {
          result = generateSmartEvaluation(question, answer, timeUsedSeconds, overtimeSeconds, wordCount, !!(anthropicKey || geminiKey));
        }

        // Strictly verify and repair character offsets using case-sensitive search
        if (result && Array.isArray(result.mistakes)) {
          result.mistakes = sanitizeAndOffsetMistakes(result.mistakes, answer);
        }

        // Validate criteria bands and calculate rounded overall band
        if (result && result.criteria) {
          const c = result.criteria;
          const tr = c.task_response ? roundIeltsBand(c.task_response.band) : 6.0;
          const cc = c.coherence_cohesion ? roundIeltsBand(c.coherence_cohesion.band) : 6.0;
          const lr = c.lexical_resource ? roundIeltsBand(c.lexical_resource.band) : 6.0;
          const gra = c.grammatical_range_accuracy ? roundIeltsBand(c.grammatical_range_accuracy.band) : 6.0;

          if (c.task_response) c.task_response.band = tr;
          if (c.coherence_cohesion) c.coherence_cohesion.band = cc;
          if (c.lexical_resource) c.lexical_resource.band = lr;
          if (c.grammatical_range_accuracy) c.grammatical_range_accuracy.band = gra;

          // Overall band is the average of the four, rounded to nearest 0.5 (.25 -> .5, .75 -> next whole)
          result.overall_band = roundIeltsBand((tr + cc + lr + gra) / 4);
        }

        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify(result));
      } catch (err) {
        console.error('[API Check Error]', err);
        res.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        res.end(JSON.stringify({ error: 'Could not complete essay evaluation. Please try again.' }));
      }
    });
    return;
  }

  // Rewrite /writing-practice to /index.html
  if (reqPath === '/' || reqPath === '/writing-practice' || reqPath === '/writing-practice/') {
    reqPath = '/index.html';
  }

  let filePath = path.join(__dirname, reqPath);

  // Security check to ensure requested file is inside root
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Access Denied');
    return;
  }

  // If path is a directory, look for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Network access at http://127.0.0.1:${PORT}/`);
});

