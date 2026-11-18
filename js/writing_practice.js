/**
 * IELTS Warrior - Writing Practice & Examiner Module
 * Fully integrated client-side logic for Task 2 practice, live timer with overtime,
 * mistake highlight engine, upgraded essay diff viewer, Banglish feedback accordions,
 * and My Progress performance analytics with SVG band-over-time chart.
 * Strictly Zero Emojis · Clean Editorial Design System
 */

(function () {
  'use strict';

  // State Management
  const state = {
    timerSeconds: 40 * 60, // 40 minutes = 2400 seconds
    elapsedSeconds: 0,
    overtimeSeconds: 0,
    timerInterval: null,
    isTimerRunning: false,
    hasStartedTyping: false,
    currentQuestion: '',
    currentAnswer: '',
    lastEvaluationResult: null,
    viewMode: 'stacked', // 'stacked' | 'side-by-side'
    showDiff: true,
    currentTab: 'practice' // 'practice' | 'progress'
  };

  const STORAGE_KEY_DRAFT = 'ielts_writing_practice_draft';
  const STORAGE_KEY_HISTORY = 'ielts_writing_practice_history';

  // DOM Elements Cache
  let dom = {};

  function initElements() {
    dom = {
      view: document.getElementById('writing-practice-view'),
      topbar: document.getElementById('wp-topbar'),
      timerDisplay: document.getElementById('wp-timer-display'),
      timerStartBtn: document.getElementById('wp-timer-start-btn'),
      timerPauseBtn: document.getElementById('wp-timer-pause-btn'),
      timerResetBtn: document.getElementById('wp-timer-reset-btn'),
      submitBtn: document.getElementById('wp-submit-btn'),
      submitTooltip: document.getElementById('wp-submit-tooltip'),

      practiceContainer: document.getElementById('wp-practice-container'),
      progressSection: document.getElementById('wp-progress-section'),

      questionTextarea: document.getElementById('wp-q-textarea'),
      questionCount: document.getElementById('wp-q-count'),
      genQuestionBtn: document.getElementById('wp-gen-question-btn'),

      answerTextarea: document.getElementById('wp-a-textarea'),
      wordCountPill: document.getElementById('wp-word-count-pill'),
      wordCountNote: document.getElementById('wp-word-count-note'),
      charCountSpan: document.getElementById('wp-char-count'),
      paraCountSpan: document.getElementById('wp-para-count'),
      clearDraftBtn: document.getElementById('wp-clear-draft-btn'),
      autosaveStatus: document.getElementById('wp-autosave-status'),

      notepadCard: document.getElementById('wp-notepad-card') || document.getElementById('wp-editor-box'),
      loadingOverlay: document.getElementById('wp-loading-overlay'),
      resultView: document.getElementById('wp-result-view'),

      // Result elements
      scoreOverallBand: document.getElementById('wp-overall-band-num'),
      scoreWords: document.getElementById('wp-score-words'),
      scoreTime: document.getElementById('wp-score-time'),
      scoreOvertime: document.getElementById('wp-score-overtime'),
      criteriaGrid: document.getElementById('wp-criteria-grid'),

      filterCheckboxes: document.querySelectorAll('.wp-filter-checkbox'),
      annotatedEssay: document.getElementById('wp-annotated-essay'),
      tooltipPopover: document.getElementById('wp-tooltip-popover'),

      upgradedEssayText: document.getElementById('wp-upgraded-text'),
      originalCompareText: document.getElementById('wp-original-compare-text'),
      compareContainer: document.getElementById('wp-compare-container'),
      toggleDiffBtn: document.getElementById('wp-toggle-diff-btn'),
      toggleLayoutBtn: document.getElementById('wp-toggle-layout-btn'),
      copyUpgradedBtn: document.getElementById('wp-copy-upgraded-btn'),

      accordionsContainer: document.getElementById('wp-accordions-group'),
      expandAllAccBtn: document.getElementById('wp-expand-all-acc'),

      tryAgainBtn: document.getElementById('wp-try-again-btn'),
      newQuestionBtn: document.getElementById('wp-new-question-btn'),
      printPdfBtn: document.getElementById('wp-print-pdf-btn'),
      saveProgressBtn: document.getElementById('wp-save-progress-btn'),
      toast: document.getElementById('wp-toast'),

      // Progress elements
      progressChartSvg: document.getElementById('wp-progress-chart-svg'),
      progressHistoryTbody: document.getElementById('wp-progress-history-tbody'),
      progressEmptyState: document.getElementById('wp-progress-empty-state'),
      progressTableWrap: document.getElementById('wp-progress-table-wrap'),
      navLinkPractice: document.querySelectorAll('.wnav-practice-link'),
      navLinkProgress: document.querySelectorAll('.wnav-progress-link')
    };
  }

  // Timer Implementation
  function formatTime(totalSeconds) {
    if (totalSeconds >= 0) {
      const m = Math.floor(totalSeconds / 60);
      const s = totalSeconds % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    } else {
      const pos = Math.abs(totalSeconds);
      const m = Math.floor(pos / 60);
      const s = pos % 60;
      return `+${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
  }

  function updateTimerUI() {
    if (!dom.timerDisplay) return;

    if (state.timerSeconds > 0) {
      dom.timerDisplay.textContent = formatTime(state.timerSeconds);
      dom.timerDisplay.classList.remove('timer-overtime');

      if (state.timerSeconds <= 300) {
        // Last 5 minutes
        dom.timerDisplay.classList.add('timer-warning');
        dom.timerDisplay.classList.remove('timer-normal');
      } else {
        dom.timerDisplay.classList.add('timer-normal');
        dom.timerDisplay.classList.remove('timer-warning');
      }
    } else {
      // Overtime
      const ot = Math.abs(state.timerSeconds);
      state.overtimeSeconds = ot;
      dom.timerDisplay.textContent = formatTime(state.timerSeconds);
      dom.timerDisplay.classList.remove('timer-normal', 'timer-warning');
      dom.timerDisplay.classList.add('timer-overtime');
    }
  }

  function startTimer() {
    if (state.isTimerRunning) return;
    state.isTimerRunning = true;
    if (dom.timerStartBtn) dom.timerStartBtn.style.display = 'none';
    if (dom.timerPauseBtn) dom.timerPauseBtn.style.display = 'inline-block';

    state.timerInterval = setInterval(() => {
      state.timerSeconds--;
      state.elapsedSeconds++;
      if (state.timerSeconds < 0) {
        state.overtimeSeconds = Math.abs(state.timerSeconds);
      }
      updateTimerUI();
    }, 1000);
  }

  function pauseTimer() {
    if (!state.isTimerRunning) return;
    state.isTimerRunning = false;
    clearInterval(state.timerInterval);
    if (dom.timerStartBtn) dom.timerStartBtn.style.display = 'inline-block';
    if (dom.timerPauseBtn) dom.timerPauseBtn.style.display = 'none';
  }

  function resetTimer(confirmFirst = false) {
    if (confirmFirst && (state.elapsedSeconds > 0 || state.timerSeconds !== 2400)) {
      if (!confirm('Are you sure you want to reset the timer to 40:00?')) return;
    }
    pauseTimer();
    state.timerSeconds = 40 * 60;
    state.elapsedSeconds = 0;
    state.overtimeSeconds = 0;
    state.hasStartedTyping = false;
    updateTimerUI();
  }

  // Live Word / Character / Paragraph Counters
  function updateQuestionStats() {
    if (!dom.questionTextarea || !dom.questionCount) return;
    const text = dom.questionTextarea.value.trim();
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    dom.questionCount.textContent = `${words} / ~80 words`;
    state.currentQuestion = dom.questionTextarea.value;
  }

  function updateAnswerStats() {
    if (!dom.answerTextarea) return;
    const val = dom.answerTextarea.value;
    state.currentAnswer = val;

    const words = val.trim() ? val.trim().split(/\s+/).filter(Boolean) : [];
    const count = words.length;
    const chars = val.length;
    const paras = val.trim() ? val.trim().split(/\n\s*\n/).filter(Boolean).length : 0;

    // Update Counts in UI
    if (dom.charCountSpan) dom.charCountSpan.textContent = `Chars: ${chars}`;
    if (dom.paraCountSpan) dom.paraCountSpan.textContent = `Paragraphs: ${paras}`;

    if (dom.wordCountPill) {
      dom.wordCountPill.classList.remove('wp-badge-red', 'wp-badge-amber', 'wp-badge-green', 'wp-words-red', 'wp-words-yellow', 'wp-words-green');
      if (count < 250) {
        dom.wordCountPill.classList.add('wp-badge-red');
        dom.wordCountPill.textContent = `${count} / 350 words (Minimum 250 words required)`;
      } else if (count < 350) {
        dom.wordCountPill.classList.add('wp-badge-amber');
        dom.wordCountPill.textContent = `${count} / 350 words (Good length)`;
      } else {
        dom.wordCountPill.classList.add('wp-badge-green');
        dom.wordCountPill.textContent = `${count} / 350 words (Target reached)`;
      }
    }

    if (dom.wordCountNote) {
      if (count > 400) {
        dom.wordCountNote.style.display = 'inline';
      } else {
        dom.wordCountNote.style.display = 'none';
      }
    }

    // Submit button state: disabled until at least 50 words
    if (dom.submitBtn) {
      if (count >= 50) {
        dom.submitBtn.disabled = false;
        if (dom.submitTooltip) dom.submitTooltip.style.display = 'none';
      } else {
        dom.submitBtn.disabled = true;
        if (dom.submitTooltip) {
          dom.submitTooltip.style.display = 'block';
          dom.submitTooltip.textContent = `Write at least 50 words to submit (${count}/50 words)`;
        }
      }
    }

    // Start timer automatically on first keystroke
    if (!state.hasStartedTyping && count > 0) {
      state.hasStartedTyping = true;
      if (!state.isTimerRunning) {
        startTimer();
      }
    }
  }

  // Draft Autosave & Restore
  function saveDraft() {
    try {
      const draft = {
        question: dom.questionTextarea ? dom.questionTextarea.value : '',
        answer: dom.answerTextarea ? dom.answerTextarea.value : '',
        timerSeconds: state.timerSeconds,
        elapsedSeconds: state.elapsedSeconds,
        overtimeSeconds: state.overtimeSeconds,
        timestamp: Date.now()
      };
      localStorage.setItem(STORAGE_KEY_DRAFT, JSON.stringify(draft));
      if (dom.autosaveStatus) {
        dom.autosaveStatus.innerHTML = '<span class="wp-dot-pulse"></span> Draft autosaved';
      }
    } catch (e) {
      console.warn('[Writing Practice] Autosave error:', e);
    }
  }

  function restoreDraft() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_DRAFT);
      if (!raw) return;
      const draft = JSON.parse(raw);
      if (draft.question && dom.questionTextarea) {
        dom.questionTextarea.value = draft.question;
      }
      if (draft.answer && dom.answerTextarea) {
        dom.answerTextarea.value = draft.answer;
      }
      if (typeof draft.timerSeconds === 'number') {
        state.timerSeconds = draft.timerSeconds;
        state.elapsedSeconds = draft.elapsedSeconds || 0;
        state.overtimeSeconds = draft.overtimeSeconds || 0;
      }
      updateQuestionStats();
      updateAnswerStats();
      updateTimerUI();
    } catch (e) {
      console.warn('[Writing Practice] Restore draft error:', e);
    }
  }

  function clearDraft() {
    if (!confirm('Are you sure you want to clear your current question and answer draft?')) return;
    if (dom.questionTextarea) dom.questionTextarea.value = '';
    if (dom.answerTextarea) dom.answerTextarea.value = '';
    localStorage.removeItem(STORAGE_KEY_DRAFT);
    resetTimer(false);
    updateQuestionStats();
    updateAnswerStats();
    showToast('Draft cleared successfully.');
  }

  // Random Question Generator
  async function generateRandomQuestion() {
    if (dom.genQuestionBtn) {
      dom.genQuestionBtn.disabled = true;
      dom.genQuestionBtn.textContent = 'Generating...';
    }
    try {
      const res = await fetch('/api/writing/random-question');
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      if (dom.questionTextarea && data.question) {
        dom.questionTextarea.value = data.question;
        updateQuestionStats();
        saveDraft();
        showToast(`Loaded Task 2 question: ${data.topic || 'Cambridge Past Paper'}`);
      }
    } catch (err) {
      console.warn('[Writing Practice] Using fallback question bank:', err.message);
      const fallbackQuestions = [
        "Some people believe that university education should be free for all students, while others think that students should pay for their higher education. Discuss both views and give your opinion.",
        "In many countries, an increasing number of young people spend hours playing computer games. What problems does this cause, and what solutions can you suggest?",
        "Some people think that governments should spend public money on railways rather than building new roads. To what extent do you agree or disagree?",
        "More and more people are choosing to eat ready-made processed food rather than cooking fresh meals at home. Do the advantages of this trend outweigh the disadvantages?",
        "As major cities expand, preserving historical architecture becomes increasingly difficult compared to constructing modern housing. Do the benefits of replacing old buildings outweigh the drawbacks?"
      ];
      const randomQ = fallbackQuestions[Math.floor(Math.random() * fallbackQuestions.length)];
      if (dom.questionTextarea) {
        dom.questionTextarea.value = randomQ;
        updateQuestionStats();
        saveDraft();
        showToast('Loaded authentic Task 2 prompt.');
      }
    } finally {
      if (dom.genQuestionBtn) {
        dom.genQuestionBtn.disabled = false;
        dom.genQuestionBtn.textContent = 'Generate a random Task 2 question';
      }
    }
  }

  // Submit & Evaluation Call
  async function submitEssayForCheck() {
    const question = dom.questionTextarea ? dom.questionTextarea.value.trim() : '';
    const answer = dom.answerTextarea ? dom.answerTextarea.value.trim() : '';
    const words = answer.split(/\s+/).filter(Boolean);

    if (words.length < 50) {
      alert('Your essay must have at least 50 words to submit for IELTS evaluation.');
      return;
    }

    // Lock textareas & stop timer
    pauseTimer();
    if (dom.questionTextarea) dom.questionTextarea.disabled = true;
    if (dom.answerTextarea) dom.answerTextarea.disabled = true;
    if (dom.submitBtn) dom.submitBtn.disabled = true;

    // Show loading state
    if (dom.notepadCard) dom.notepadCard.style.display = 'none';
    if (dom.resultView) dom.resultView.style.display = 'none';
    if (dom.loadingOverlay) dom.loadingOverlay.style.display = 'block';

    const payload = {
      question: question || 'IELTS Writing Task 2 Essay',
      answer: answer,
      timeUsedSeconds: state.elapsedSeconds,
      overtimeSeconds: state.overtimeSeconds
    };

    try {
      const response = await fetch('/api/writing/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error || 'Server evaluation failed.');
      }

      const result = await response.json();
      state.lastEvaluationResult = result;

      // Hide loading, render results
      if (dom.loadingOverlay) dom.loadingOverlay.style.display = 'none';
      renderResults(result, payload);

      // Save to history
      saveAttemptToHistory(result, payload);
    } catch (err) {
      console.error('[Writing Practice Check Error]', err);
      if (dom.loadingOverlay) dom.loadingOverlay.style.display = 'none';
      if (dom.notepadCard) dom.notepadCard.style.display = 'block';
      if (dom.questionTextarea) dom.questionTextarea.disabled = false;
      if (dom.answerTextarea) dom.answerTextarea.disabled = false;
      if (dom.submitBtn) dom.submitBtn.disabled = false;
      alert('Could not complete the essay evaluation: ' + err.message + '\n\nPlease try again.');
    }
  }

  // HTML Escape Helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Render Full Results
  function renderResults(result, payload) {
    if (!dom.resultView) return;
    dom.resultView.style.display = 'block';

    // 1. Render Card A: Score Card
    renderScoreCard(result, payload);

    // 2. Render Card B: Mistakes Highlighted
    renderMistakesCard(result, payload.answer);

    // 3. Render Card C: Upgraded Essay
    renderUpgradedCard(result, payload.answer);

    // 4. Render Card D: Banglish Feedback Accordions
    renderBanglishFeedback(result);

    // Scroll smoothly to results
    dom.resultView.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderScoreCard(result, payload) {
    if (dom.scoreOverallBand) {
      dom.scoreOverallBand.textContent = (result.overall_band || 6.0).toFixed(1);
    }
    if (dom.scoreWords) {
      const wCount = result.word_count || payload.answer.split(/\s+/).filter(Boolean).length;
      dom.scoreWords.textContent = `Words: ${wCount}`;
    }
    if (dom.scoreTime) {
      const m = Math.floor(payload.timeUsedSeconds / 60);
      const s = payload.timeUsedSeconds % 60;
      dom.scoreTime.textContent = `Time: ${m}m ${s}s`;
    }
    if (dom.scoreOvertime) {
      if (payload.overtimeSeconds > 0) {
        const om = Math.floor(payload.overtimeSeconds / 60);
        const os = payload.overtimeSeconds % 60;
        dom.scoreOvertime.textContent = `Overtime: +${om}m ${os}s`;
        dom.scoreOvertime.style.color = '#dc2626';
      } else {
        dom.scoreOvertime.textContent = 'Overtime: None (On Time)';
        dom.scoreOvertime.style.color = '#15803d';
      }
    }

    // 4 Criteria
    if (dom.criteriaGrid && result.criteria) {
      const c = result.criteria;
      const critDefs = [
        { key: 'task_response', title: 'Task Response' },
        { key: 'coherence_cohesion', title: 'Coherence & Cohesion' },
        { key: 'lexical_resource', title: 'Lexical Resource' },
        { key: 'grammatical_range_accuracy', title: 'Grammatical Range & Accuracy' }
      ];

      dom.criteriaGrid.innerHTML = critDefs.map(def => {
        const crit = c[def.key] || {};
        const bandVal = typeof crit.band === 'number' ? crit.band : 6.0;
        const bandStr = bandVal.toFixed(1);
        const nextBand = (bandVal + 0.5).toFixed(1);

        const strengthsList = Array.isArray(crit.strengths) && crit.strengths.length
          ? `<div class="wp-crit-block"><div class="wp-crit-subhead">Strengths</div><ul class="wp-crit-list">${crit.strengths.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul></div>`
          : '';

        const weaknessesList = Array.isArray(crit.weaknesses) && crit.weaknesses.length
          ? `<div class="wp-crit-block"><div class="wp-crit-subhead">Weaknesses</div><ul class="wp-crit-list">${crit.weaknesses.map(w => `<li>${escapeHtml(w)}</li>`).join('')}</ul></div>`
          : '';

        const commentBlock = crit.comment
          ? `<p style="font-size:0.83rem; color:#4b5563; margin:0 0 10px 0; line-height:1.5;">${escapeHtml(crit.comment)}</p>`
          : '';

        const adviceText = crit.next_band_advice || (crit.comment ? `Focus on addressing the weaknesses listed above to progress to Band ${nextBand}.` : '');
        const adviceBlock = adviceText
          ? `<div class="wp-crit-advice"><strong>To reach Band ${nextBand}:</strong> ${escapeHtml(adviceText)}</div>`
          : '';

        return `
          <div class="wp-criterion-card">
            <div>
              <div class="wp-crit-top">
                <span class="wp-crit-title">${escapeHtml(def.title)}</span>
                <span class="wp-crit-band">${bandStr}</span>
              </div>
              ${commentBlock}
              ${strengthsList}
              ${weaknessesList}
            </div>
            ${adviceBlock}
          </div>
        `;
      }).join('');
    }
  }

  function renderMistakesCard(result, answer) {
    if (!dom.annotatedEssay) return;
    const mistakes = Array.isArray(result.mistakes) ? result.mistakes : [];

    // Count mistakes per type
    const counts = {
      spelling: 0,
      grammar: 0,
      vocabulary: 0,
      punctuation: 0,
      coherence: 0
    };

    mistakes.forEach(m => {
      const t = (m.type || 'grammar').toLowerCase();
      if (counts[t] !== undefined) counts[t]++;
      else counts.grammar++;
    });

    // Update filter badges in UI
    const elSp = document.getElementById('wp-count-spelling');
    const elGr = document.getElementById('wp-count-grammar');
    const elVo = document.getElementById('wp-count-vocabulary');
    const elPu = document.getElementById('wp-count-punctuation');
    const elCo = document.getElementById('wp-count-coherence');

    if (elSp) elSp.textContent = counts.spelling;
    if (elGr) elGr.textContent = counts.grammar;
    if (elVo) elVo.textContent = counts.vocabulary;
    if (elPu) elPu.textContent = counts.punctuation;
    if (elCo) elCo.textContent = counts.coherence;

    // Build highlighted string
    if (mistakes.length === 0) {
      dom.annotatedEssay.innerHTML = escapeHtml(answer);
      return;
    }

    let html = '';
    let lastIdx = 0;

    for (let i = 0; i < mistakes.length; i++) {
      const m = mistakes[i];
      const start = m.start;
      const end = m.end;

      if (start > lastIdx) {
        html += escapeHtml(answer.slice(lastIdx, start));
      }

      const mistakeSlice = answer.slice(start, end);
      const mType = (m.type || 'grammar').toLowerCase();
      const explSafe = escapeHtml(m.explanation || '');
      const corrSafe = escapeHtml(m.correction || '');

      html += `<mark class="hl-${mType} wp-mistake-mark" data-m-idx="${i}" data-m-type="${mType}" data-m-expl="${explSafe}" data-m-corr="${corrSafe}">${escapeHtml(mistakeSlice)}</mark>`;
      lastIdx = end;
    }

    if (lastIdx < answer.length) {
      html += escapeHtml(answer.slice(lastIdx));
    }

    dom.annotatedEssay.innerHTML = html;

    // Attach hover/tap event listeners for interactive tooltips
    setupMistakeTooltips();
  }

  function setupMistakeTooltips() {
    const marks = dom.annotatedEssay.querySelectorAll('.wp-mistake-mark');
    const pop = dom.tooltipPopover;
    if (!pop) return;

    marks.forEach(mark => {
      const showTip = (e) => {
        const type = mark.getAttribute('data-m-type');
        const expl = mark.getAttribute('data-m-expl');
        const corr = mark.getAttribute('data-m-corr');

        pop.innerHTML = `
          <div class="wp-tp-type" style="color:#60a5fa; font-weight:700; font-size:0.75rem; text-transform:uppercase; margin-bottom:4px;">${escapeHtml(type)} MISTAKE</div>
          <div class="wp-tp-expl" style="font-size:0.85rem; color:#f3f4f6; margin-bottom:6px; line-height:1.4;">${expl}</div>
          ${corr ? `<div class="wp-tp-corr" style="font-size:0.85rem; color:#86efac;">&rarr; Suggested correction: <strong>${corr}</strong></div>` : ''}
        `;

        pop.style.display = 'block';
        const rect = mark.getBoundingClientRect();
        const top = rect.bottom + window.scrollY + 6;
        let left = rect.left + window.scrollX - 20;
        if (left + 310 > window.innerWidth) left = window.innerWidth - 320;
        if (left < 10) left = 10;

        pop.style.top = `${top}px`;
        pop.style.left = `${left}px`;
      };

      mark.addEventListener('mouseenter', showTip);
      mark.addEventListener('click', showTip);
    });

    document.addEventListener('click', (e) => {
      if (pop && !pop.contains(e.target) && !e.target.classList.contains('wp-mistake-mark')) {
        pop.style.display = 'none';
      }
    });
  }

  function renderUpgradedCard(result, answer) {
    if (!dom.upgradedEssayText) return;
    const upgraded = result.upgraded_essay || {};
    const segments = Array.isArray(upgraded.segments) ? upgraded.segments : [];

    let upgradedHtml = '';
    segments.forEach(seg => {
      const st = seg.status || 'unchanged';
      const text = escapeHtml(seg.text || '');
      const orig = escapeHtml(seg.original || '');
      const reason = escapeHtml(seg.reason || '');

      if (st === 'word_changed') {
        upgradedHtml += `<span class="diff-word-changed" title="Original: '${orig}' | Reason: ${reason}">${text}</span>`;
      } else if (st === 'sentence_rewritten') {
        upgradedHtml += `<span class="diff-sentence-rewritten" title="Original: '${orig}' | Reason: ${reason}">${text}</span>`;
      } else if (st === 'sentence_added') {
        upgradedHtml += `<span class="diff-sentence-added" title="Added: ${reason}">${text}</span>`;
      } else {
        upgradedHtml += text;
      }
    });

    dom.upgradedEssayText.innerHTML = upgradedHtml || escapeHtml(answer);

    if (dom.originalCompareText) {
      dom.originalCompareText.textContent = answer;
    }
  }

  function renderBanglishFeedback(result) {
    if (!dom.accordionsContainer) return;
    const fb = result.feedback_banglish || {};

    const items = [
      {
        id: 'acc-summary',
        title: 'Summary (Ak najore essay-tar obostha)',
        content: fb.summary ? `<p>${escapeHtml(fb.summary)}</p>` : '<p>Apnar essay-tir overall obostha bhalo, aro kichu specific improvement dorkar.</p>'
      },
      {
        id: 'acc-why-band',
        title: 'Why this band score (Keno ei band score peyechhen)',
        content: fb.why_this_band ? `<p>${escapeHtml(fb.why_this_band)}</p>` : '<p>IELTS examiner criteria onujayi apnar essay mark kora hoyeche.</p>'
      },
      {
        id: 'acc-improve',
        title: 'How to improve to the next band (Kivabe porer band-e jaben)',
        content: Array.isArray(fb.how_to_improve)
          ? `<ul>${fb.how_to_improve.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>`
          : `<p>${escapeHtml(fb.how_to_improve || '')}</p>`
      },
      {
        id: 'acc-mistakes',
        title: 'Common mistake patterns seen in your writing (Apnar lekhar bhul gular pattern)',
        content: Array.isArray(fb.mistake_patterns)
          ? `<ul>${fb.mistake_patterns.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>`
          : `<p>${escapeHtml(fb.mistake_patterns || '')}</p>`
      },
      {
        id: 'acc-structure',
        title: 'Ideal essay structure for this question (Ei proshner jonno ideal structure)',
        content: fb.ideal_structure ? `<p>${escapeHtml(fb.ideal_structure)}</p>` : ''
      },
      {
        id: 'acc-stance',
        title: 'Your stance and position (Apnar opinion/stance koto-ta porishkar chhilo)',
        content: fb.stance_and_position ? `<p>${escapeHtml(fb.stance_and_position)}</p>` : ''
      },
      {
        id: 'acc-vocab',
        title: 'High-scoring vocabulary you should have used (Je sob bhalo shobdo bebohar kora jeto)',
        content: Array.isArray(fb.vocabulary_to_use)
          ? `<ul>${fb.vocabulary_to_use.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>`
          : `<p>${escapeHtml(fb.vocabulary_to_use || '')}</p>`
      },
      {
        id: 'acc-avoid',
        title: 'Things to avoid next time (Porobortite je sob jinish avoid korben)',
        content: Array.isArray(fb.things_to_avoid)
          ? `<ul>${fb.things_to_avoid.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>`
          : `<p>${escapeHtml(fb.things_to_avoid || '')}</p>`
      },
      {
        id: 'acc-grammar',
        title: 'Grammar focus for you (Apnar grammar-er kon jaigai focus korte hobe)',
        content: Array.isArray(fb.grammar_focus)
          ? `<ul>${fb.grammar_focus.map(s => `<li>${escapeHtml(s)}</li>`).join('')}</ul>`
          : `<p>${escapeHtml(fb.grammar_focus || '')}</p>`
      },
      {
        id: 'acc-time',
        title: 'Time management feedback (Apnar shomoy bebohar niye poramorsho)',
        content: fb.time_management ? `<p>${escapeHtml(fb.time_management)}</p>` : ''
      }
    ];

    dom.accordionsContainer.innerHTML = items.map((it, idx) => `
      <div class="wp-acc-item ${idx === 0 ? 'is-open' : ''}" id="${it.id}">
        <button class="wp-acc-trigger" onclick="window.ieltsWritingPractice.toggleAccordion('${it.id}')">
          <span style="font-weight:700;">${escapeHtml(it.title)}</span>
          <span class="wp-acc-chevron">&#9660;</span>
        </button>
        <div class="wp-acc-body">
          ${it.content}
        </div>
      </div>
    `).join('');
  }

  function toggleAccordion(accId) {
    const el = document.getElementById(accId);
    if (el) {
      el.classList.toggle('is-open');
    }
  }

  function toggleAllAccordions() {
    const items = dom.accordionsContainer.querySelectorAll('.wp-acc-item');
    const anyClosed = Array.from(items).some(item => !item.classList.contains('is-open'));
    items.forEach(item => {
      if (anyClosed) item.classList.add('is-open');
      else item.classList.remove('is-open');
    });
    if (dom.expandAllAccBtn) {
      dom.expandAllAccBtn.textContent = anyClosed ? 'Collapse All' : 'Expand All';
    }
  }

  // Filter Checkbox Toggles
  function setupFilterToggles() {
    if (!dom.filterCheckboxes) return;
    dom.filterCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const type = cb.getAttribute('data-filter-type');
        const elements = dom.annotatedEssay.querySelectorAll(`.hl-${type}`);
        elements.forEach(el => {
          if (cb.checked) {
            el.classList.remove('hl-hidden');
          } else {
            el.classList.add('hl-hidden');
          }
        });
      });
    });
  }

  // Upgraded Essay Controls
  function toggleDiffMode() {
    state.showDiff = !state.showDiff;
    if (dom.upgradedEssayText) {
      dom.upgradedEssayText.classList.toggle('diff-clean', !state.showDiff);
    }
    if (dom.toggleDiffBtn) {
      dom.toggleDiffBtn.textContent = state.showDiff ? 'View Clean Version' : 'View Changes (Diff)';
    }
  }

  function toggleCompareLayout() {
    state.viewMode = state.viewMode === 'stacked' ? 'side-by-side' : 'stacked';
    if (dom.compareContainer) {
      dom.compareContainer.style.flexDirection = state.viewMode === 'side-by-side' ? 'row' : 'column';
    }
    if (dom.toggleLayoutBtn) {
      dom.toggleLayoutBtn.textContent = state.viewMode === 'side-by-side' ? 'Stacked View' : 'Side-by-Side';
    }
  }

  function copyUpgradedEssay() {
    if (!dom.upgradedEssayText) return;
    const text = dom.upgradedEssayText.innerText || dom.upgradedEssayText.textContent;
    navigator.clipboard.writeText(text).then(() => {
      showToast('Copied upgraded essay to clipboard!');
    }).catch(() => {
      showToast('Could not copy text.');
    });
  }

  // Toast Notification
  function showToast(msg) {
    if (!dom.toast) return;
    dom.toast.textContent = msg;
    dom.toast.style.display = 'block';
    setTimeout(() => {
      dom.toast.style.display = 'none';
    }, 3500);
  }

  // Attempt History Storage
  function saveAttemptToHistory(result, payload) {
    try {
      const history = JSON.parse(localStorage.getItem(STORAGE_KEY_HISTORY) || '[]');
      const attempt = {
        id: 'wp_' + Date.now(),
        date: new Date().toISOString(),
        overall_band: result.overall_band,
        criteria: result.criteria,
        word_count: result.word_count || payload.answer.split(/\s+/).filter(Boolean).length,
        timeUsedSeconds: payload.timeUsedSeconds,
        overtimeSeconds: payload.overtimeSeconds,
        question: payload.question,
        answer: payload.answer,
        evaluation: result
      };
      history.unshift(attempt);
      localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history.slice(0, 30)));
    } catch (e) {
      console.warn('[Writing Practice] History save error:', e);
    }
  }

  // My Progress Tab Logic & SVG Chart
  function showProgressView() {
    state.currentTab = 'progress';
    if (dom.practiceContainer) dom.practiceContainer.style.display = 'none';
    if (dom.progressSection) dom.progressSection.style.display = 'block';

    // Update active nav links
    document.querySelectorAll('.writing-nav-link').forEach(l => {
      l.classList.toggle('active', l.textContent.trim().toLowerCase().includes('progress'));
    });

    const wpBackBtn = document.getElementById('wp-nav-back-btn');
    if (wpBackBtn) {
      const span = wpBackBtn.querySelector('span') || wpBackBtn;
      span.innerHTML = '&larr; Back to Practice';
      wpBackBtn.setAttribute('title', 'Return to Practice Notepad');
    }

    renderProgressDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showPracticeNotepad() {
    state.currentTab = 'practice';
    if (dom.progressSection) dom.progressSection.style.display = 'none';
    if (dom.practiceContainer) dom.practiceContainer.style.display = 'block';

    // Update active nav links
    document.querySelectorAll('.writing-nav-link').forEach(l => {
      l.classList.toggle('active', l.textContent.trim().toLowerCase().includes('practice'));
    });

    const wpBackBtn = document.getElementById('wp-nav-back-btn');
    if (wpBackBtn) {
      const span = wpBackBtn.querySelector('span') || wpBackBtn;
      span.innerHTML = '&larr; Back to Writing Hub';
      wpBackBtn.setAttribute('title', 'Return to Writing Masterclass Hub');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function stepBack() {
    if (state.currentTab === 'progress') {
      showPracticeNotepad();
      return true;
    }
    const isResultVisible = dom.resultView && (
      dom.resultView.style.display === 'block' ||
      (dom.resultView.classList.contains('active') && dom.resultView.style.display !== 'none')
    );
    if (isResultVisible) {
      dom.resultView.style.display = 'none';
      if (dom.notepadCard) dom.notepadCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  }

  function renderProgressDashboard() {
    const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
    const history = raw ? JSON.parse(raw) : [];

    const emptyState = document.getElementById('wp-progress-empty-state');
    const tableWrap = document.getElementById('wp-progress-table-wrap');
    const tbody = document.getElementById('wp-progress-history-tbody');
    const chartSvg = document.getElementById('wp-progress-chart-svg');

    if (!history.length) {
      if (emptyState) emptyState.style.display = 'block';
      if (tableWrap) tableWrap.style.display = 'none';
      if (chartSvg) chartSvg.innerHTML = '<text x="400" y="110" text-anchor="middle" fill="#9ca3af" font-size="14">No evaluations yet. Complete your first practice essay to see your score trajectory!</text>';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (tableWrap) tableWrap.style.display = 'block';

    // Render Table Rows
    if (tbody) {
      tbody.innerHTML = history.map(att => {
        const d = new Date(att.date);
        const dateStr = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        const band = (att.overall_band || 6.0).toFixed(1);
        const qShort = att.question.length > 70 ? att.question.slice(0, 70) + '...' : att.question;
        const mins = Math.floor(att.timeUsedSeconds / 60);
        const secs = att.timeUsedSeconds % 60;
        const timeStr = `${mins}m ${secs}s`;
        const otStr = att.overtimeSeconds > 0 ? `+${Math.floor(att.overtimeSeconds / 60)}m` : 'None';

        return `
          <tr>
            <td><strong>${dateStr}</strong></td>
            <td title="${escapeHtml(att.question)}">${escapeHtml(qShort)}</td>
            <td><span style="display:inline-block; padding:3px 10px; border-radius:6px; background:#e8f5f1; color:#0e332d; font-weight:800; font-size:0.95rem;">${band}</span></td>
            <td>${att.word_count || '-'}</td>
            <td>${timeStr}</td>
            <td>${otStr}</td>
            <td>
              <button class="wp-tbtn" onclick="window.ieltsWritingPractice.reloadPastAttempt('${att.id}')">View Report</button>
            </td>
          </tr>
        `;
      }).join('');
    }

    // Draw SVG Line Chart
    drawBandProgressChart(history, chartSvg);
  }

  function drawBandProgressChart(history, svgEl) {
    if (!svgEl) return;

    // Chronological order (oldest to newest)
    const data = [...history].reverse();
    const width = 800;
    const height = 220;
    const padding = { top: 30, right: 30, bottom: 40, left: 50 };

    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    const minBand = 4.0;
    const maxBand = 9.0;

    const getY = (band) => {
      const clamped = Math.max(minBand, Math.min(maxBand, band));
      return padding.top + chartH - ((clamped - minBand) / (maxBand - minBand)) * chartH;
    };

    const getX = (idx, total) => {
      if (total <= 1) return padding.left + chartW / 2;
      return padding.left + (idx / (total - 1)) * chartW;
    };

    // Horizontal grid lines
    const gridBands = [4.0, 5.0, 6.0, 7.0, 8.0, 9.0];
    let gridSvg = '';
    gridBands.forEach(b => {
      const y = getY(b);
      gridSvg += `
        <line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="#e5e7eb" stroke-dasharray="3,3" />
        <text x="${padding.left - 10}" y="${y + 4}" fill="#6b7280" font-size="11" text-anchor="end" font-family="inherit">${b.toFixed(1)}</text>
      `;
    });

    // Build Points
    const points = data.map((d, i) => {
      const x = getX(i, data.length);
      const y = getY(d.overall_band || 6.0);
      return { x, y, band: (d.overall_band || 6.0).toFixed(1), date: new Date(d.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) };
    });

    let polylineSvg = '';
    let dotsSvg = '';

    if (points.length === 1) {
      const pt = points[0];
      dotsSvg += `
        <circle cx="${pt.x}" cy="${pt.y}" r="6" fill="#0e332d" />
        <text x="${pt.x}" y="${pt.y - 12}" fill="#0e332d" font-size="12" font-weight="700" text-anchor="middle">Band ${pt.band}</text>
        <text x="${pt.x}" y="${height - 15}" fill="#6b7280" font-size="11" text-anchor="middle">${pt.date}</text>
      `;
    } else {
      const pointsAttr = points.map(p => `${p.x},${p.y}`).join(' ');
      polylineSvg = `<polyline fill="none" stroke="#0e332d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${pointsAttr}" />`;

      points.forEach((pt, i) => {
        dotsSvg += `
          <circle cx="${pt.x}" cy="${pt.y}" r="5" fill="#ffffff" stroke="#0e332d" stroke-width="2.5" />
          <text x="${pt.x}" y="${pt.y - 10}" fill="#111827" font-size="11" font-weight="700" text-anchor="middle">${pt.band}</text>
          <text x="${pt.x}" y="${height - 15}" fill="#6b7280" font-size="10" text-anchor="middle">${pt.date}</text>
        `;
      });
    }

    svgEl.innerHTML = `
      <g>
        ${gridSvg}
        ${polylineSvg}
        ${dotsSvg}
      </g>
    `;
  }

  function reloadPastAttempt(attemptId) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
      if (!raw) return;
      const history = JSON.parse(raw);
      const attempt = history.find(a => a.id === attemptId);
      if (!attempt || !attempt.evaluation) {
        showToast('Past evaluation details not found.');
        return;
      }

      showPracticeNotepad();

      // Populate textareas
      if (dom.questionTextarea) dom.questionTextarea.value = attempt.question || '';
      if (dom.answerTextarea) dom.answerTextarea.value = attempt.answer || '';
      updateQuestionStats();
      updateAnswerStats();

      // Show results
      renderResults(attempt.evaluation, {
        answer: attempt.answer || '',
        timeUsedSeconds: attempt.timeUsedSeconds || 2400,
        overtimeSeconds: attempt.overtimeSeconds || 0
      });

      showToast(`Loaded evaluation for: ${new Date(attempt.date).toLocaleDateString()}`);
    } catch (e) {
      console.warn('[Writing Practice] Error reloading attempt:', e);
    }
  }

  // Actions
  function tryAgainWithSameQuestion() {
    if (dom.resultView) dom.resultView.style.display = 'none';
    if (dom.notepadCard) dom.notepadCard.style.display = 'block';
    if (dom.questionTextarea) dom.questionTextarea.disabled = false;
    if (dom.answerTextarea) {
      dom.answerTextarea.disabled = false;
      dom.answerTextarea.value = '';
    }
    resetTimer(false);
    updateAnswerStats();
    saveDraft();
    dom.notepadCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Ready for another attempt with the same question.');
  }

  function startNewQuestion() {
    showPracticeNotepad();
    if (dom.resultView) dom.resultView.style.display = 'none';
    if (dom.notepadCard) dom.notepadCard.style.display = 'block';
    if (dom.questionTextarea) {
      dom.questionTextarea.disabled = false;
      dom.questionTextarea.value = '';
    }
    if (dom.answerTextarea) {
      dom.answerTextarea.disabled = false;
      dom.answerTextarea.value = '';
    }
    resetTimer(false);
    updateQuestionStats();
    updateAnswerStats();
    saveDraft();
    dom.notepadCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Ready for a new Task 2 question.');
  }

  function printReport() {
    window.print();
  }

  function saveToProgress() {
    showToast('Essay attempt successfully saved to My Progress!');
    showProgressView();
  }

  // Initialization
  function init() {
    initElements();

    // Event listeners
    if (dom.timerStartBtn) dom.timerStartBtn.addEventListener('click', startTimer);
    if (dom.timerPauseBtn) dom.timerPauseBtn.addEventListener('click', pauseTimer);
    if (dom.timerResetBtn) dom.timerResetBtn.addEventListener('click', () => resetTimer(true));

    if (dom.questionTextarea) {
      dom.questionTextarea.addEventListener('input', () => {
        updateQuestionStats();
        saveDraft();
      });
    }

    if (dom.answerTextarea) {
      dom.answerTextarea.addEventListener('input', () => {
        updateAnswerStats();
      });
    }

    if (dom.genQuestionBtn) dom.genQuestionBtn.addEventListener('click', generateRandomQuestion);
    if (dom.clearDraftBtn) dom.clearDraftBtn.addEventListener('click', clearDraft);
    if (dom.submitBtn) dom.submitBtn.addEventListener('click', submitEssayForCheck);

    if (dom.toggleDiffBtn) dom.toggleDiffBtn.addEventListener('click', toggleDiffMode);
    if (dom.toggleLayoutBtn) dom.toggleLayoutBtn.addEventListener('click', toggleCompareLayout);
    if (dom.copyUpgradedBtn) dom.copyUpgradedBtn.addEventListener('click', copyUpgradedEssay);
    if (dom.expandAllAccBtn) dom.expandAllAccBtn.addEventListener('click', toggleAllAccordions);

    if (dom.tryAgainBtn) dom.tryAgainBtn.addEventListener('click', tryAgainWithSameQuestion);
    if (dom.newQuestionBtn) dom.newQuestionBtn.addEventListener('click', startNewQuestion);
    if (dom.printPdfBtn) dom.printPdfBtn.addEventListener('click', printReport);
    if (dom.saveProgressBtn) dom.saveProgressBtn.addEventListener('click', saveToProgress);

    setupFilterToggles();

    // Periodic draft autosave every 3.5 seconds
    setInterval(() => {
      if (state.currentAnswer || state.currentQuestion) {
        saveDraft();
      }
    }, 3500);

    // Restore draft if available
    restoreDraft();
    updateTimerUI();
  }

  // Export to window
  window.ieltsWritingPractice = {
    init,
    startTimer,
    pauseTimer,
    resetTimer,
    toggleAccordion,
    toggleAllAccordions,
    restoreDraft,
    generateRandomQuestion,
    showProgressView,
    showPracticeNotepad,
    stepBack,
    reloadPastAttempt,
    startNewQuestion
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
