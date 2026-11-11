// IELTS Grammar Mastery Lab Database
// 8 Core Academic Topics • 15 Pure Gap-Fill Questions per Topic = 120 Questions Total
// Zero Drag-and-Drop • In-depth Rules, Formulas, Examples & Explanations

const GRAMMAR_VIDEO_RESOURCES = [
  {
    "id": "class-01",
    "classNo": "Class 01",
    "num": 1,
    "title": "Pronoun A2Z & Relative Pronouns",
    "category": "FOUNDATION GRAMMAR",
    "summary": "Complete breakdown of subjective, objective, possessive pronouns, and relative pronouns (who, whom, which, that).",
    "duration": "2 Video Lectures",
    "videos": [
      {
        "title": "Pronoun A2Z Masterclass",
        "url": "https://youtu.be/0J3fOKr8rhU"
      },
      {
        "title": "Relative Pronouns Explained",
        "url": "https://youtu.be/cGtqIcQ1NwQ"
      }
    ],
    "pdfs": [
      {
        "title": "Pronoun A2Z Lecture Sheet.pdf",
        "url": "https://drive.google.com/open?id=1DlSaLhZI3HgWSELOwyPW3hZQK4idfBRo"
      },
      {
        "title": "Pronoun Practice Sheet.pdf",
        "url": "https://drive.google.com/open?id=1AIZfNvsh-ruWBZuTVe1FfjpM5UI8HRJj"
      },
      {
        "title": "Relative Pronoun Rules.pdf",
        "url": "https://drive.google.com/open?id=1dUZnjPwAlAOwopAaSBIuGlbV4H2Kua1T"
      }
    ]
  },
  {
    "id": "class-02",
    "classNo": "Class 02",
    "num": 2,
    "title": "Quantifiers & Uncountable Nouns",
    "category": "NOUNS & QUANTITY",
    "summary": "Mastering quantifiers (much, many, few, little, a lot of) and high-frequency academic uncountable nouns for IELTS.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Quantifiers Masterclass",
        "url": "https://youtu.be/_rHN7MTM8J8"
      }
    ],
    "pdfs": [
      {
        "title": "Quantifiers (New Edition).pdf",
        "url": "https://drive.google.com/open?id=1-OpfI5wABU68jLy9eRwcwrod7w0Eh4JQ"
      },
      {
        "title": "Uncountable Nouns for IELTS & BCS.pdf",
        "url": "https://drive.google.com/open?id=1vnTqE7FZ44ilzZQKYcr3m_6fG_-qy9Lt"
      }
    ]
  },
  {
    "id": "class-03",
    "classNo": "Class 03",
    "num": 3,
    "title": "Noun Clauses & Syntactic Positions of Nouns",
    "category": "CLAUSES & SYNTAX",
    "summary": "Understanding noun clause structures, Cambridge reading passage analysis, and where nouns function in complex sentences.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Noun Clause Complete Guide",
        "url": "https://youtu.be/BEtRuDNjQio"
      }
    ],
    "pdfs": [
      {
        "title": "Cambridge 10 Reading Test 1 Passage 1 Analysis.pdf",
        "url": "https://drive.google.com/open?id=1xIxpTkG9HMfiQeblsWe3O497W0HJjaZg"
      },
      {
        "title": "Positions of Noun in Sentences.pdf",
        "url": "https://drive.google.com/open?id=1tUI69snimA9IZkWkI-e_WjDHfcVPX6az"
      },
      {
        "title": "Noun Clause Practice Drills.pdf",
        "url": "https://drive.google.com/open?id=18fmj0BJwa9AbPud-TMGufZiyyXnk3Qmg"
      }
    ]
  },
  {
    "id": "class-04",
    "classNo": "Class 04",
    "num": 4,
    "title": "Prepositions of Time & Direction",
    "category": "PREPOSITIONS",
    "summary": "Precise usage of in, on, at, during, for, since, and prepositional time frameworks in academic reporting.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Preposition of Time Masterclass",
        "url": "https://youtu.be/b0iG9K-RvgQ"
      }
    ],
    "pdfs": [
      {
        "title": "Preposition of Time Reference Sheet.pdf",
        "url": "https://drive.google.com/open?id=1m9Mt7GU1j3lrCBJOpQzBWjkFwXHziPhQ"
      }
    ]
  },
  {
    "id": "class-05",
    "classNo": "Class 05",
    "num": 5,
    "title": "Be Verbs, 'There is/are', 'It', & Verb Patterns",
    "category": "VERB STRUCTURES",
    "summary": "Essential existential structures (There/It), linking Be verbs, and infinitive vs gerund patterns (To + verb & Verb + ing).",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Be Verb and 'There' Structures",
        "url": "https://youtu.be/AQiwTCH6ZFw"
      }
    ],
    "pdfs": [
      {
        "title": "Be Verb Rules & Usage.pdf",
        "url": "https://drive.google.com/open?id=1029x1NQeiLQp8fQZrsrIIUMiWxB9sr25"
      },
      {
        "title": "There and It Structures.pdf",
        "url": "https://drive.google.com/open?id=1rxHaEyKXMnbuLlDCR5bvfeeb0qh3PvFg"
      },
      {
        "title": "(To + Verb) & (Verb + Ing) Patterns.pdf",
        "url": "https://drive.google.com/open?id=13p_6PBE6uj7pdm7yerV2_e1ba1Hjr5kS"
      }
    ]
  },
  {
    "id": "class-06",
    "classNo": "Class 06",
    "num": 6,
    "title": "Tenses (Part 01 & Part 02)",
    "category": "TENSES & ASPECT",
    "summary": "Complete 12-tense timeline, focusing on Present Perfect vs Past Simple and narrative sequencing for IELTS Writing.",
    "duration": "2 Video Lectures",
    "videos": [
      {
        "title": "Tense Part 01 — Fundamentals",
        "url": "https://youtu.be/-TK2pJcJzAs"
      },
      {
        "title": "Tense Part 02 — Advanced Aspects",
        "url": "https://youtu.be/1KTKohWshHY"
      }
    ],
    "pdfs": [
      {
        "title": "Comprehensive Tense Master Lecture Sheet.pdf",
        "url": "https://drive.google.com/file/d/1h-CTmsLpsYlE4tkFFsPBVXy26cQ-h7-z/view?usp=sharing"
      }
    ]
  },
  {
    "id": "class-07",
    "classNo": "Class 07",
    "num": 7,
    "title": "Passive Voice & Academic Impersonal Register",
    "category": "VOICE & REGISTER",
    "summary": "Active to passive transformation, process writing applications in Task 1, and impersonal reporting structures.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Passive Voice Masterclass",
        "url": "https://youtu.be/vYpVAAQPDMM"
      }
    ],
    "pdfs": [
      {
        "title": "Passive Voice Rules & Formulas.pdf",
        "url": "https://drive.google.com/open?id=1eCPdy45f9yWIpSn5JQvlQmv99mQ4hU58"
      },
      {
        "title": "Passive Voice Class 38 Lecture Sheet.pdf",
        "url": "https://drive.google.com/open?id=1QFYHBf72ON30TCwcIn1m5ewu7UXW5p9R"
      }
    ]
  },
  {
    "id": "class-08",
    "classNo": "Class 08",
    "num": 8,
    "title": "WH-Questions & Sequence of Tense",
    "category": "SYNTAX & TENSES",
    "summary": "Interrogative syntax, embedded questions, and chronological sequence of tenses across compound sentences.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "WH-Questions & Sequence of Tense",
        "url": "https://youtu.be/IYybikkfj4I"
      }
    ],
    "pdfs": [
      {
        "title": "WH-Questions & Sequence Study Document",
        "url": "https://docs.google.com/document/d/1fgaK8XaJNRoHzQsrwbfPAMZNUupbyFMeJSz9SlAv5rM/edit?usp=sharing"
      }
    ]
  },
  {
    "id": "class-09",
    "classNo": "Class 09",
    "num": 9,
    "title": "Simple Sentences & Subject-Verb-Object Mechanics",
    "category": "SENTENCE STRUCTURE",
    "summary": "Building robust simple sentences, modifiers, appositives, and eliminating comma splices or fragments.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Simple Sentence Mastery",
        "url": "https://youtu.be/XrFMjz2BeII"
      }
    ],
    "pdfs": [
      {
        "title": "Simple Sentence Foundation.pdf",
        "url": "https://drive.google.com/open?id=1M3ck5UhwdkzuwjB1wbaGfraiSnBqYUnp"
      },
      {
        "title": "Simple Sentence Class 38 Notes.pdf",
        "url": "https://drive.google.com/open?id=1LGsWw3hZaiizCWdSCh7CutQuAiEuAGbT"
      }
    ]
  },
  {
    "id": "class-10",
    "classNo": "Class 10",
    "num": 10,
    "title": "Independent Clauses & Coordinating Conjunctions",
    "category": "SENTENCE STRUCTURE",
    "summary": "Mastering independent clauses, FANBOYS coordinators, semicolons, and conjunctive adverbs.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Independent Clause Masterclass",
        "url": "https://youtu.be/QBoeaOqWCA4"
      }
    ],
    "pdfs": [
      {
        "title": "Independent Clauses & Connectors.pdf",
        "url": "https://drive.google.com/open?id=1B5L4lsxe_t8nrAn8pzhQwmdJcmq858zD"
      }
    ]
  },
  {
    "id": "class-11",
    "classNo": "Class 11",
    "num": 11,
    "title": "Modal Verbs & Degrees of Certainty",
    "category": "MODALITY & HEDGING",
    "summary": "Can, could, may, might, must, should, would — understanding necessity, possibility, academic hedging, and modal passives.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Modal Verbs Complete Lecture",
        "url": "https://youtu.be/CazebWo4s1I"
      }
    ],
    "pdfs": [
      {
        "title": "Modal Verbs Lecture Reference.pdf",
        "url": "https://drive.google.com/file/d/1Y5Qt8nilov9U1LyDzDVdZI9Chqh4UmBg/view?usp=sharing"
      }
    ]
  },
  {
    "id": "class-12",
    "classNo": "Class 12",
    "num": 12,
    "title": "Subject-Verb Agreement & Discourse Linkers",
    "category": "CONCORD & COHESION",
    "summary": "Concord rules with complex head nouns, collective nouns, neither/either, and cohesive transition linkers.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Subject-Verb Agreement Lecture",
        "url": "https://youtu.be/novj9w79vcc"
      }
    ],
    "pdfs": [
      {
        "title": "Linkers & Transition Document",
        "url": "https://docs.google.com/document/d/1aJJRdpiMdbnvsvGgo8rhjCcR0-oYK5qLM8Tx3Gr3HGM/edit?usp=sharing"
      },
      {
        "title": "Subject-Verb Agreement Rules.pdf",
        "url": "https://drive.google.com/open?id=1H83GKBZ9TLwcYCvPcGNLIsjD4WwMh-bn"
      }
    ]
  },
  {
    "id": "class-13",
    "classNo": "Class 13",
    "num": 13,
    "title": "Conditional Sentences (Zero, 1, 2, 3 & Mixed)",
    "category": "HYPOTHETICAL STRUCTURES",
    "summary": "Real and unreal conditionals, hypothetical speculation in Task 2, unless, provided that, and inverted conditional clauses.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Conditional Sentences Masterclass",
        "url": "https://youtu.be/x324GUpZm4g?si=zeoXZXXWCYiZVkmn"
      }
    ],
    "pdfs": [
      {
        "title": "Conditional Sentences Reference Sheet.pdf",
        "url": "https://drive.google.com/open?id=1KhcpRHFxT0Hz9krUn8ErZ6WvXo3cjKiK"
      }
    ]
  },
  {
    "id": "class-14",
    "classNo": "Class 14",
    "num": 14,
    "title": "Degrees of Comparison (Positive, Comparative, Superlative)",
    "category": "COMPARISON & DATA",
    "summary": "Comparing data in Task 1 charts and graphs, proportional comparisons (the more... the more...), and irregular modifiers.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Degree of Comparison Masterclass",
        "url": "https://youtu.be/iIz4JBrHasM"
      }
    ],
    "pdfs": [
      {
        "title": "Degrees of Comparison Reference.pdf",
        "url": "https://drive.google.com/open?id=1O1G4hTmcSbwGt5KXdyUn-cJyCDA7QccK"
      }
    ]
  },
  {
    "id": "class-15",
    "classNo": "Class 15",
    "num": 15,
    "title": "Narration & Reported Speech",
    "category": "REPORTED SPEECH",
    "summary": "Direct to indirect speech transformations, reporting verbs (asserted, argued, contended), and tense backshifting.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Narration & Direct/Indirect Speech",
        "url": "https://youtu.be/nQBpeixqM2M"
      }
    ],
    "pdfs": [
      {
        "title": "Narration Lecture Notes.pdf",
        "url": "https://drive.google.com/open?id=1ckPJiWSzGT9U5AsXa11x8qCurAtUet16"
      }
    ]
  },
  {
    "id": "class-16",
    "classNo": "Class 16",
    "num": 16,
    "title": "Pronunciation, IPA Phonetics & Connected Speech",
    "category": "SPEAKING & PHONETICS",
    "summary": "International Phonetic Alphabet (IPA), Yod coalescence, elision, linking sounds, and natural British/American rhythm.",
    "duration": "2 Video Lectures",
    "videos": [
      {
        "title": "Pronunciation Lecture 01",
        "url": "https://youtu.be/4rhGDBRC0VQ"
      },
      {
        "title": "Pronunciation Lecture 02",
        "url": "https://youtu.be/sY6dRR5BMiw"
      }
    ],
    "pdfs": [
      {
        "title": "IPA Class 02 Phonetics Guide.pdf",
        "url": "https://drive.google.com/open?id=1FOuoS67BvXTEOB8KEa5Hoa4ID0y6-G_1"
      },
      {
        "title": "Yod Coalescence in English.pdf",
        "url": "https://drive.google.com/open?id=1oh-odDf0OamHC0QBK3czhSADwRdYguqy"
      },
      {
        "title": "Pronunciation Practice Drills.pdf",
        "url": "https://drive.google.com/open?id=1koaX7Dk14eFN6CLU6vdXSMLsYiR52NFQ"
      },
      {
        "title": "Pronunciation Tips & Hacks.pdf",
        "url": "https://drive.google.com/open?id=1zStMwReuEqoZYWFUVEyGCwtfJWKYqQfp"
      },
      {
        "title": "Pronunciation Class 01 Handout.pdf",
        "url": "https://drive.google.com/open?id=1E9Pv4fta8Xx-C3VOBb2vQi5c5ysGbzP-"
      }
    ]
  },
  {
    "id": "class-17",
    "classNo": "Class 17",
    "num": 17,
    "title": "Sentence Structures (Simple, Complex & Compound)",
    "category": "ADVANCED SYNTAX",
    "summary": "Synthesizing simple, compound, and complex sentence structures for Band 8+ Grammatical Range and Accuracy.",
    "duration": "1 Video Lecture",
    "videos": [
      {
        "title": "Simple, Complex, Compound Sentences",
        "url": "https://youtu.be/hz6rhcxgxl8"
      }
    ],
    "pdfs": [
      {
        "title": "Advanced Sentence Structures Lecture Sheet.pdf",
        "url": "https://drive.google.com/open?id=11rY-EBMq0ZaMSqZOcK8gzs8_63yYCUgf"
      }
    ]
  }
];

const GRAMMAR_DATA = {
  videoResources: GRAMMAR_VIDEO_RESOURCES,
  topics: [
  {
    "id": "subject-verb-agreement",
    "number": 1,
    "title": "Subject-Verb Agreement & Concord",
    "category": "SENTENCE STRUCTURE",
    "summary": "Singular and plural concord, intervening phrases, collective nouns, and inverted syntax.",
    "level": "Band 7.0–9.0 Focus",
    "overview": "Subject-Verb agreement is one of the most frequently penalized areas in IELTS Writing (GRA) and Speaking. Examiners scrutinize whether complex subjects (e.g. gerunds, intervening clauses, compound noun phrases) maintain grammatical alignment with their main verbs.",
    "ieltsTip": "When writing complex sentences in Task 2, identify the core noun headword before choosing singular or plural verbs. Words like 'along with', 'including', and 'as well as' are parenthetical and do NOT change the number of the head noun.",
    "rules": [
      {
        "name": "Intervening Modifying Phrases",
        "formula": "Head Noun [singular] + (along with / as well as / including...) + Verb [singular]",
        "explanation": "Prepositional phrases or parenthetical additions between the subject and the verb do not affect the subject's grammatical number.",
        "examples": [
          {
            "wrong": "The expansion of metropolitan universities, along with numerous vocational colleges, have boosted regional employment.",
            "correct": "The expansion of metropolitan universities, along with numerous vocational colleges, has boosted regional employment.",
            "note": "'expansion' is the singular head noun; 'colleges' is inside an intervening prepositional phrase."
          }
        ]
      },
      {
        "name": "Expressions of Quantity: 'A number of' vs 'The number of'",
        "formula": "'The number of' + Plural Noun + Singular Verb | 'A number of' + Plural Noun + Plural Verb",
        "explanation": "'The number' refers to a singular metric or figure, whereas 'A number of' is a quantifier meaning 'several' or 'many'.",
        "examples": [
          {
            "wrong": "The number of international students have surged over the past decade.",
            "correct": "The number of international students has surged over the past decade.",
            "note": "'The number' is a single quantitative measure, so it requires 'has'."
          },
          {
            "wrong": "A number of developing nations has introduced solar energy subsidies.",
            "correct": "A number of developing nations have introduced solar energy subsidies.",
            "note": "'A number of' functions as 'many', demanding a plural verb."
          }
        ]
      },
      {
        "name": "Correlative Conjunctions ('Either...or', 'Neither...nor')",
        "formula": "Neither Subject A nor Subject B + Verb (agrees with Subject B)",
        "explanation": "The verb strictly agrees in number with the subject noun phrase closest to it.",
        "examples": [
          {
            "wrong": "Neither the minister nor the policy advisors was aware of the economic shortfall.",
            "correct": "Neither the minister nor the policy advisors were aware of the economic shortfall.",
            "note": "'advisors' is plural and sits immediately adjacent to the verb."
          }
        ]
      },
      {
        "name": "Gerunds & Infinitive Phrases as Subjects",
        "formula": "Gerund Phrase (Verb-ing...) + Singular Verb",
        "explanation": "When an entire action or activity acts as the subject, it takes a singular verb, even if it contains plural nouns within its object.",
        "examples": [
          {
            "wrong": "Constructing high-speed railways between distant cities require substantial capital.",
            "correct": "Constructing high-speed railways between distant cities requires substantial capital.",
            "note": "The subject is the singular activity 'Constructing', not 'railways' or 'cities'."
          }
        ]
      },
      {
        "name": "Inverted Sentence Agreement",
        "formula": "Adverbial / Locative Phrase + Verb + True Subject Noun",
        "explanation": "In sentences beginning with negative adverbs or prepositional phrases of place, the subject comes after the verb.",
        "examples": [
          {
            "wrong": "Underlying this dramatic demographic shift is several socio-economic factors.",
            "correct": "Underlying this dramatic demographic shift are several socio-economic factors.",
            "note": "The subject is plural 'several socio-economic factors', which follows the verb."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "sva_1",
        "number": 1,
        "sentence": "The widespread introduction of automation technologies in manufacturing sectors ___ productivity levels dramatically.",
        "options": [
          "have enhanced",
          "has enhanced",
          "are enhancing",
          "were enhanced"
        ],
        "answer": "has enhanced",
        "explanation": "The singular subject is 'introduction' (not 'technologies' or 'sectors'), so it demands the singular verb 'has enhanced'."
      },
      {
        "id": "sva_2",
        "number": 2,
        "sentence": "The number of migratory birds visiting the wetland sanctuaries ___ consistently between 2010 and 2020.",
        "options": [
          "declined",
          "were declining",
          "have declined",
          "are declined"
        ],
        "answer": "declined",
        "explanation": "For Task 1 past trends, past simple 'declined' correctly describes the historical period 2010-2020."
      },
      {
        "id": "sva_3",
        "number": 3,
        "sentence": "A substantial number of modern researchers ___ that climate change poses existential risks to coastal biodiversity.",
        "options": [
          "contends",
          "contend",
          "is contending",
          "has contended"
        ],
        "answer": "contend",
        "explanation": "'A substantial number of' acts as a plural quantifier meaning 'many researchers', thus requiring the plural verb 'contend'."
      },
      {
        "id": "sva_4",
        "number": 4,
        "sentence": "Neither the primary municipal supplier nor the secondary distribution networks ___ adequate to handle the unexpected freeze.",
        "options": [
          "was",
          "were",
          "is",
          "has been"
        ],
        "answer": "were",
        "explanation": "With 'neither... nor', the verb agrees with the closer subject 'networks' (plural), requiring 'were'."
      },
      {
        "id": "sva_5",
        "number": 5,
        "sentence": "Establishing accessible public healthcare centers across rural provinces ___ significant governmental investment.",
        "options": [
          "require",
          "requires",
          "have required",
          "are requiring"
        ],
        "answer": "requires",
        "explanation": "The gerund phrase 'Establishing accessible public healthcare centers' is a singular subject requiring the singular verb 'requires'."
      },
      {
        "id": "sva_6",
        "number": 6,
        "sentence": "Each of the participants involved in the longitudinal study ___ required to sign a consent declaration.",
        "options": [
          "were",
          "was",
          "have been",
          "are"
        ],
        "answer": "was",
        "explanation": "'Each' is an indefinite pronoun that is grammatically singular and takes the singular verb 'was'."
      },
      {
        "id": "sva_7",
        "number": 7,
        "sentence": "The prime minister, alongside several prominent cabinet ministers, ___ scheduled to inaugurate the summit tomorrow.",
        "options": [
          "is",
          "are",
          "were",
          "have been"
        ],
        "answer": "is",
        "explanation": "'alongside several prominent cabinet ministers' is an intervening phrase that does not alter the singular subject 'The prime minister'."
      },
      {
        "id": "sva_8",
        "number": 8,
        "sentence": "Behind the rapid urbanization of coastal regions ___ severe ecological challenges that demand urgent intervention.",
        "options": [
          "lie",
          "lies",
          "is lying",
          "has lied"
        ],
        "answer": "lie",
        "explanation": "Inverted sentence structure: the real subject is the plural noun phrase 'severe ecological challenges', which takes the plural verb 'lie'."
      },
      {
        "id": "sva_9",
        "number": 9,
        "sentence": "Every student and educator in the university's technical departments ___ granted access to the digital repository.",
        "options": [
          "is",
          "are",
          "were",
          "have been"
        ],
        "answer": "is",
        "explanation": "Subjects preceded by 'every' or 'each' always take a singular verb, so 'is' is correct."
      },
      {
        "id": "sva_10",
        "number": 10,
        "sentence": "The committee, despite conflicting opinions among individual members, ___ reached a unanimous consensus.",
        "options": [
          "have",
          "has",
          "are",
          "were"
        ],
        "answer": "has",
        "explanation": "The collective noun 'committee' acts as a single cohesive unit here and takes the singular auxiliary 'has'."
      },
      {
        "id": "sva_11",
        "number": 11,
        "sentence": "Neither the proposed taxation scheme nor the alternative fiscal measures ___ favored by economic analysts.",
        "options": [
          "is",
          "was",
          "were",
          "has been"
        ],
        "answer": "were",
        "explanation": "The subject closest to the verb is plural 'measures', so the plural past verb 'were' is correct."
      },
      {
        "id": "sva_12",
        "number": 12,
        "sentence": "Over eighty percent of the world's potable freshwater ___ locked in glaciers and polar ice caps.",
        "options": [
          "are",
          "is",
          "were",
          "have been"
        ],
        "answer": "is",
        "explanation": "When percentages refer to uncountable nouns ('freshwater'), the verb remains singular ('is')."
      },
      {
        "id": "sva_13",
        "number": 13,
        "sentence": "A combination of dietary habits and sedentary lifestyles ___ contributed to the surge in chronic lifestyle diseases.",
        "options": [
          "have",
          "has",
          "are",
          "were"
        ],
        "answer": "has",
        "explanation": "The head noun of the subject is the singular noun 'A combination', which takes the singular verb 'has'."
      },
      {
        "id": "sva_14",
        "number": 14,
        "sentence": "There ___ profound economic disparities between urban metropolitan areas and remote agricultural communities.",
        "options": [
          "exists",
          "exist",
          "is existing",
          "has existed"
        ],
        "answer": "exist",
        "explanation": "In 'there' constructions, the verb agrees with the subsequent noun phrase ('profound economic disparities' - plural), requiring 'exist'."
      },
      {
        "id": "sva_15",
        "number": 15,
        "sentence": "Analyzing complex statistical charts and interpreting regression lines ___ meticulous attention to detail.",
        "options": [
          "demand",
          "demands",
          "have demanded",
          "are demanding"
        ],
        "answer": "demands",
        "explanation": "When two gerunds express a single combined skill or concept, they take a singular verb ('demands')."
      }
    ]
  },
  {
    "id": "complex-compound-sentences",
    "number": 2,
    "title": "Complex & Compound Sentences",
    "category": "SENTENCE STRUCTURE",
    "summary": "Coordination, subordination, relative clauses, and participle clauses for high Grammatical Range (Band 7–9).",
    "level": "Band 7.5–9.0 Focus",
    "overview": "Examiners award Band 7+ in GRA only when candidates demonstrate a 'variety of complex structures with frequent error-free sentences'. Simple sentences strung together with 'and' or 'but' limit candidates to Band 5.5 or 6.0.",
    "ieltsTip": "Use concession clauses (although, whereas, while) to build sophisticated academic counter-arguments in Task 2 body paragraphs. Ensure non-defining relative clauses use commas correctly.",
    "rules": [
      {
        "name": "Concession & Contrast Clauses",
        "formula": "Although / Even though / Whereas + Clause 1, Clause 2",
        "explanation": "Do NOT use 'but' in the same sentence as 'although'. 'Although' already establishes the subordinating relationship.",
        "examples": [
          {
            "wrong": "Although electric vehicles emit fewer greenhouse gases, but their initial purchase price remains prohibitive.",
            "correct": "Although electric vehicles emit fewer greenhouse gases, their initial purchase price remains prohibitive.",
            "note": "Remove 'but' when 'Although' introduces the dependent clause."
          }
        ]
      },
      {
        "name": "Non-Defining Relative Clauses",
        "formula": "Main Noun, which / who + Additional Detail, + Main Verb...",
        "explanation": "Non-defining clauses add non-essential descriptive context and MUST be enclosed within commas. Use 'which' (never 'that') for things in non-defining clauses.",
        "examples": [
          {
            "wrong": "Artificial intelligence that is developing rapidly will reshape labor markets.",
            "correct": "Artificial intelligence, which is developing rapidly, will reshape labor markets.",
            "note": "'which' is used with commas for non-defining descriptions; 'that' cannot follow a comma."
          }
        ]
      },
      {
        "name": "Participle Clauses (Reduced Clauses)",
        "formula": "Present Participle (Verb-ing) / Past Participle (Verb-ed) + Object, Main Subject + Verb",
        "explanation": "Participle clauses allow you to pack dense academic ideas into compact sentences. The subject of the participle must match the main subject.",
        "examples": [
          {
            "wrong": "Recognizing the threat of global warming, ambitious green subsidies were introduced by ministers.",
            "correct": "Recognizing the threat of global warming, ministers introduced ambitious green subsidies.",
            "note": "The participle 'Recognizing' modifies the ministers, not the subsidies (dangling modifier)."
          }
        ]
      },
      {
        "name": "Punctuation with Compound Sentences",
        "formula": "Independent Clause + Semicolon (;) + Conjunctive Adverb (however / therefore) + Comma (,) + Independent Clause",
        "explanation": "A comma alone cannot join two independent sentences (comma splice error). Use a semicolon or a coordinating conjunction.",
        "examples": [
          {
            "wrong": "Renewable energy adoption has grown, however fossil fuels still dominate energy grids.",
            "correct": "Renewable energy adoption has grown; however, fossil fuels still dominate energy grids.",
            "note": "Use a semicolon before 'however' and a comma after it when linking independent clauses."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "ccs_1",
        "number": 1,
        "sentence": "___ traditional fossil fuels remain dominant in heavy industry, renewable alternatives are gaining market share.",
        "options": [
          "Despite",
          "Although",
          "In spite of",
          "However"
        ],
        "answer": "Although",
        "explanation": "'Although' is a subordinating conjunction followed by a full clause ('traditional fossil fuels remain dominant'). 'Despite' and 'In spite of' require noun phrases or gerunds."
      },
      {
        "id": "ccs_2",
        "number": 2,
        "sentence": "The new transit system, ___ was inaugurated in late 2021, has reduced urban commuting times by thirty percent.",
        "options": [
          "that",
          "which",
          "what",
          "where"
        ],
        "answer": "which",
        "explanation": "Non-defining relative clauses set off by commas must use 'which' (not 'that') when referring to inanimate objects or systems."
      },
      {
        "id": "ccs_3",
        "number": 3,
        "sentence": "___ substantial technological advancements, the aviation sector has struggled to curtail its aggregate carbon footprint.",
        "options": [
          "Although",
          "Whereas",
          "Despite",
          "Even though"
        ],
        "answer": "Despite",
        "explanation": "'substantial technological advancements' is a noun phrase without a finite verb, requiring the preposition 'Despite' (or 'In spite of')."
      },
      {
        "id": "ccs_4",
        "number": 4,
        "sentence": "Public spending on primary education rose sharply; ___, funding for vocational training experienced a gradual decline.",
        "options": [
          "whereas",
          "conversely",
          "although",
          "despite"
        ],
        "answer": "conversely",
        "explanation": "'conversely' is a conjunctive adverb that correctly follows a semicolon and precedes a comma to indicate a contrasting trend."
      },
      {
        "id": "ccs_5",
        "number": 5,
        "sentence": "___ by soaring property prices, many young professionals are migrating to secondary metropolitan hubs.",
        "options": [
          "Deterring",
          "Deterred",
          "Having deterred",
          "To deter"
        ],
        "answer": "Deterred",
        "explanation": "The passive past participle 'Deterred' correctly describes the professionals who are being deterred by soaring prices."
      },
      {
        "id": "ccs_6",
        "number": 6,
        "sentence": "The research team conducted extensive field trials, the findings of ___ were published in an international journal.",
        "options": [
          "that",
          "whom",
          "which",
          "whose"
        ],
        "answer": "which",
        "explanation": "In formal academic writing, 'the findings of which' is the standard relative structure referring back to 'trials'."
      },
      {
        "id": "ccs_7",
        "number": 7,
        "sentence": "Governments should incentivize sustainable practices ___ penalizing excessive carbon emissions.",
        "options": [
          "while simultaneously",
          "whereas also",
          "although as well",
          "despite of"
        ],
        "answer": "while simultaneously",
        "explanation": "'while simultaneously' creates a polished complex sentence balancing two concurrent governmental actions."
      },
      {
        "id": "ccs_8",
        "number": 8,
        "sentence": "Telecommuting offers employees greater flexibility; ___, it can blur the boundaries between work and personal life.",
        "options": [
          "moreover",
          "nevertheless",
          "consequently",
          "because"
        ],
        "answer": "nevertheless",
        "explanation": "'nevertheless' indicates an adversative concession contrasting flexibility with boundary blurring."
      },
      {
        "id": "ccs_9",
        "number": 9,
        "sentence": "___ urgent preventative measures are enacted immediately, antimicrobial resistance will claim millions of lives annually.",
        "options": [
          "Unless",
          "Provided that",
          "As long as",
          "In case"
        ],
        "answer": "Unless",
        "explanation": "'Unless' means 'if not' and introduces the necessary negative condition for avoiding catastrophic outcomes."
      },
      {
        "id": "ccs_10",
        "number": 10,
        "sentence": "The manufacturing facility adopted computerized robotics, ___ lowering production overheads and workplace accidents.",
        "options": [
          "thereby",
          "whereas",
          "although",
          "despite"
        ],
        "answer": "thereby",
        "explanation": "'thereby' followed by a present participle ('thereby lowering') expresses the natural academic result of the preceding action."
      },
      {
        "id": "ccs_11",
        "number": 11,
        "sentence": "Urban authorities installed smart sensors throughout the city, ___ enabled real-time traffic monitoring.",
        "options": [
          "which",
          "that",
          "this",
          "what"
        ],
        "answer": "which",
        "explanation": "A sentential relative clause starting with ', which' refers back to the entire preceding proposition."
      },
      {
        "id": "ccs_12",
        "number": 12,
        "sentence": "___ international aid was dispatched promptly, logistical bottlenecks hindered effective distribution in remote villages.",
        "options": [
          "In spite of",
          "Even though",
          "Despite",
          "However"
        ],
        "answer": "Even though",
        "explanation": "'Even though' correctly subordinates the full clause 'international aid was dispatched promptly'."
      },
      {
        "id": "ccs_13",
        "number": 13,
        "sentence": "The study scrutinized three age cohorts, each of ___ demonstrated markedly disparate digital media habits.",
        "options": [
          "them",
          "which",
          "whom",
          "whose"
        ],
        "answer": "which",
        "explanation": "'each of which' correctly forms a dependent relative clause modifying 'three age cohorts'."
      },
      {
        "id": "ccs_14",
        "number": 14,
        "sentence": "___ to hazardous chemicals for prolonged periods, industrial workers face heightened respiratory health risks.",
        "options": [
          "Exposing",
          "Exposed",
          "Having exposed",
          "To expose"
        ],
        "answer": "Exposed",
        "explanation": "The past participle 'Exposed' acts passively: the workers who are exposed to the chemicals face heightened risks."
      },
      {
        "id": "ccs_15",
        "number": 15,
        "sentence": "The initial investment was substantial; ___, the long-term energy savings rendered the solar installation economically sound.",
        "options": [
          "furthermore",
          "nonetheless",
          "similarly",
          "otherwise"
        ],
        "answer": "nonetheless",
        "explanation": "'nonetheless' expresses an academic contrast conceding the substantial initial investment against the ultimate savings."
      }
    ]
  },
  {
    "id": "passive-voice",
    "number": 3,
    "title": "Passive Voice & Academic Register",
    "category": "ACADEMIC WRITING",
    "summary": "Forming accurate passive structures, impersonal reporting, and nominalization for Task 1 reports and Task 2 essays.",
    "level": "Band 7.0–9.0 Focus",
    "overview": "In academic English, passive structures maintain objective distance and highlight the phenomenon or process rather than the subjective agent. This is fundamental for IELTS Academic Task 1 (Process diagrams) and Task 2 (Impersonal arguments).",
    "ieltsTip": "Avoid overusing personal pronouns ('I think', 'We can see'). Instead, deploy impersonal passive constructions such as 'It is often asserted that...' or 'It can be observed from the data that...'.",
    "rules": [
      {
        "name": "Impersonal Reporting Passive",
        "formula": "It is + Past Participle (believed / argued / acknowledged / estimated) + that + Clause",
        "explanation": "Provides an objective, scholarly framing for controversial or general claims without personal bias.",
        "examples": [
          {
            "wrong": "I believe that higher education should be subsidized by taxpayers.",
            "correct": "It is widely argued that higher education should be subsidized by the state.",
            "note": "'It is widely argued that' elevates tone to academic register Band 8+."
          }
        ]
      },
      {
        "name": "Modal Passive Constructions",
        "formula": "Modal (must / should / can / could) + be + Past Participle",
        "explanation": "Essential for making policy recommendations in Task 2 conclusions or problem-solution essays.",
        "examples": [
          {
            "wrong": "Strict environmental regulations must implement to deter polluters.",
            "correct": "Strict environmental regulations must be implemented to deter polluters.",
            "note": "The passive requires the auxiliary 'be' alongside the past participle 'implemented'."
          }
        ]
      },
      {
        "name": "Process Descriptions (Task 1)",
        "formula": "Object + is / are + Past Participle (+ then / subsequently / once...)",
        "explanation": "In natural or manufacturing processes, the focus is strictly on the actions performed on the materials, not on human operators.",
        "examples": [
          {
            "wrong": "Workers harvest the raw sugarcane and then crush it with heavy rollers.",
            "correct": "The raw sugarcane is harvested and subsequently crushed using heavy mechanical rollers.",
            "note": "Process diagrams require passive voice to highlight the material transformation."
          }
        ]
      },
      {
        "name": "Nominalization (Turning Verbs into Nouns)",
        "formula": "Action Verb -> Academic Noun Phrase",
        "explanation": "Replacing active clauses with nominalized subjects creates concise, authoritative academic prose.",
        "examples": [
          {
            "wrong": "Because the city expanded rapidly, public transit became overwhelmed.",
            "correct": "The rapid expansion of the city placed immense pressure on public transit infrastructure.",
            "note": "'expanded rapidly' becomes the sophisticated noun phrase 'The rapid expansion'."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "pv_1",
        "number": 1,
        "sentence": "It is widely ___ by climatologists that global temperature spikes are directly attributable to human activities.",
        "options": [
          "acknowledges",
          "acknowledged",
          "acknowledging",
          "to acknowledge"
        ],
        "answer": "acknowledged",
        "explanation": "The impersonal passive formula 'It is + past participle + that' requires 'acknowledged'."
      },
      {
        "id": "pv_2",
        "number": 2,
        "sentence": "Once the plastic bottles are sorted by color, they ___ into small pellets ready for extrusion.",
        "options": [
          "crush",
          "are crushed",
          "crushed",
          "were crushed"
        ],
        "answer": "are crushed",
        "explanation": "In a cyclical present process description (Task 1), the present passive 'are crushed' is required."
      },
      {
        "id": "pv_3",
        "number": 3,
        "sentence": "Stringent penalties should ___ on industrial corporations that discharge untreated effluents into waterways.",
        "options": [
          "impose",
          "be imposed",
          "have imposed",
          "being imposed"
        ],
        "answer": "be imposed",
        "explanation": "Modal passive structure: 'should + be + past participle' -> 'should be imposed'."
      },
      {
        "id": "pv_4",
        "number": 4,
        "sentence": "The historical monument was ___ in the seventeenth century and underwent thorough restoration in 1995.",
        "options": [
          "construct",
          "constructed",
          "constructing",
          "construction"
        ],
        "answer": "constructed",
        "explanation": "Past passive requires the past auxiliary 'was' + past participle 'constructed'."
      },
      {
        "id": "pv_5",
        "number": 5,
        "sentence": "It has frequently been ___ that mandatory community service cultivates social empathy among adolescents.",
        "options": [
          "arguing",
          "argued",
          "argue",
          "argument"
        ],
        "answer": "argued",
        "explanation": "Present perfect passive formula: 'It has been + past participle' -> 'argued'."
      },
      {
        "id": "pv_6",
        "number": 6,
        "sentence": "Prior to being exported, the cocoa beans ___ dried under controlled solar greenhouses for two weeks.",
        "options": [
          "are thoroughly",
          "thoroughly",
          "thoroughly are",
          "have thoroughly"
        ],
        "answer": "are thoroughly",
        "explanation": "Present passive for processes: auxiliary 'are' + adverb 'thoroughly' + past participle 'dried'."
      },
      {
        "id": "pv_7",
        "number": 7,
        "sentence": "Crucial infrastructure projects could ___ delayed if governmental budgetary allocations are curtailed.",
        "options": [
          "be",
          "have",
          "been",
          "being"
        ],
        "answer": "be",
        "explanation": "Modal passive requires 'could + be + past participle (delayed)'."
      },
      {
        "id": "pv_8",
        "number": 8,
        "sentence": "Substantial progress ___ made in eradicating preventable childhood diseases across the continent.",
        "options": [
          "has been",
          "have been",
          "is having",
          "were"
        ],
        "answer": "has been",
        "explanation": "'Progress' is uncountable, requiring singular present perfect passive 'has been made'."
      },
      {
        "id": "pv_9",
        "number": 9,
        "sentence": "The survey respondents ___ randomly selected from diverse socio-economic backgrounds.",
        "options": [
          "was",
          "were",
          "is",
          "has been"
        ],
        "answer": "were",
        "explanation": "Plural subject 'respondents' takes plural past passive auxiliary 'were selected'."
      },
      {
        "id": "pv_10",
        "number": 10,
        "sentence": "It can ___ that technological literacy is becoming an essential prerequisite in modern workplaces.",
        "options": [
          "infer",
          "be inferred",
          "inferred",
          "to infer"
        ],
        "answer": "be inferred",
        "explanation": "Impersonal modal passive: 'It can be inferred that...'."
      },
      {
        "id": "pv_11",
        "number": 11,
        "sentence": "New diagnostic algorithms are currently ___ tested in clinical hospitals across Europe.",
        "options": [
          "being",
          "been",
          "be",
          "to be"
        ],
        "answer": "being",
        "explanation": "Present continuous passive requires 'are + currently + being + past participle (tested)'."
      },
      {
        "id": "pv_12",
        "number": 12,
        "sentence": "All experimental samples must ___ under refrigerated conditions to prevent enzymatic degradation.",
        "options": [
          "preserve",
          "be preserved",
          "have preserved",
          "preserving"
        ],
        "answer": "be preserved",
        "explanation": "Modal passive: 'must + be + preserved'."
      },
      {
        "id": "pv_13",
        "number": 13,
        "sentence": "The proposed railway corridor is expected ___ operational by the third quarter of 2028.",
        "options": [
          "to become",
          "becoming",
          "become",
          "became"
        ],
        "answer": "to become",
        "explanation": "Passive reporting structure: 'is expected to become...'."
      },
      {
        "id": "pv_14",
        "number": 14,
        "sentence": "Statistical anomalies in the census data were ___ by independent auditing teams.",
        "options": [
          "identify",
          "identified",
          "identifying",
          "identification"
        ],
        "answer": "identified",
        "explanation": "Past passive: 'were + past participle (identified)'."
      },
      {
        "id": "pv_15",
        "number": 15,
        "sentence": "It is generally ___ that early bilingual immersion accelerates cognitive development in children.",
        "options": [
          "conceded",
          "concede",
          "conceding",
          "concession"
        ],
        "answer": "conceded",
        "explanation": "Impersonal reporting: 'It is generally conceded that...'."
      }
    ]
  },
  {
    "id": "conditionals",
    "number": 4,
    "title": "Conditionals & Hypothetical Structures",
    "category": "BAND 8+ REGISTER",
    "summary": "First, Second, Third, and Mixed Conditionals plus inverted conditional clauses without 'if'.",
    "level": "Band 8.0–9.0 Focus",
    "overview": "Conditionals allow candidates to evaluate hypothetical consequences, propose nuanced policy outcomes, and speculate about historical counter-facts. Inverted conditionals (e.g. 'Had the authorities intervened...') instantly signal Band 8.5+ grammatical mastery.",
    "ieltsTip": "Use second conditionals ('If governments invested more in renewables, carbon emissions would fall') to offer recommendations, and third conditionals in Task 2 to reflect on past events.",
    "rules": [
      {
        "name": "Second Conditional (Hypothetical Present/Future)",
        "formula": "If + Subject + Past Simple, Subject + would / could / might + Verb",
        "explanation": "Used to speculate on unreal or improbable situations in the present or future.",
        "examples": [
          {
            "wrong": "If metropolitan councils will ban private vehicles, air pollution will decrease.",
            "correct": "If metropolitan councils banned private vehicles, air pollution would decrease.",
            "note": "Do not use 'will' in the 'if' condition clause; use the past tense 'banned' and 'would'."
          }
        ]
      },
      {
        "name": "Third Conditional (Hypothetical Past)",
        "formula": "If + Subject + had + Past Participle, Subject + would have + Past Participle",
        "explanation": "Speculates on past events that did not occur and evaluates their alternate consequences.",
        "examples": [
          {
            "wrong": "If the government had regulated carbon emissions earlier, sea level rise would be prevented.",
            "correct": "If the government had regulated carbon emissions earlier, sea level rise would have been mitigated.",
            "note": "Both clauses must reflect past hypothetical time: 'had regulated' -> 'would have been mitigated'."
          }
        ]
      },
      {
        "name": "Inverted Conditionals (Omitting 'If')",
        "formula": "Had + Subject + Past Participle... / Were + Subject + to + Verb...",
        "explanation": "Dropping 'if' and placing the auxiliary first creates elevated, literary academic syntax.",
        "examples": [
          {
            "wrong": "If the administration had recognized the crisis, thousands of jobs would have been saved.",
            "correct": "Had the administration recognized the crisis, thousands of jobs would have been saved.",
            "note": "'Had the administration recognized' is an inverted conditional conveying Band 8.5+ register."
          }
        ]
      },
      {
        "name": "Mixed Conditionals (Past Condition -> Present Result)",
        "formula": "If + Subject + had + Past Participle, Subject + would + Base Verb (Now)",
        "explanation": "Connects a past hypothetical choice or circumstance with its ongoing present reality.",
        "examples": [
          {
            "wrong": "If humanity protected rainforests in past centuries, we would not face biodiversity collapse today.",
            "correct": "If humanity had protected rainforests in past centuries, we would not face biodiversity collapse today.",
            "note": "Past condition ('had protected') causes current present state ('would not face today')."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "cond_1",
        "number": 1,
        "sentence": "If governments ___ heavier subsidies to clean energy startups, fossil fuel reliance would diminish substantially.",
        "options": [
          "provide",
          "provided",
          "will provide",
          "had provided"
        ],
        "answer": "provided",
        "explanation": "Second conditional requires past simple 'provided' in the 'if' clause to pair with 'would diminish'."
      },
      {
        "id": "cond_2",
        "number": 2,
        "sentence": "___ the regulatory authorities intervened earlier, the catastrophic financial collapse could have been averted.",
        "options": [
          "Had",
          "Were",
          "If had",
          "Should"
        ],
        "answer": "Had",
        "explanation": "Inverted third conditional structure: 'Had + subject + past participle' ('Had the regulatory authorities intervened')."
      },
      {
        "id": "cond_3",
        "number": 3,
        "sentence": "If historical conservation laws had been enforced rigorously, many heritage monuments ___ intact today.",
        "options": [
          "would have remained",
          "would remain",
          "remained",
          "will remain"
        ],
        "answer": "would remain",
        "explanation": "Mixed conditional (Past action -> Present outcome indicated by 'today'): 'If... had been enforced, they would remain intact today'."
      },
      {
        "id": "cond_4",
        "number": 4,
        "sentence": "___ urban authorities to implement congestion charges, traffic volume in the city center would decrease markedly.",
        "options": [
          "Were",
          "Had",
          "Should",
          "If were"
        ],
        "answer": "Were",
        "explanation": "Inverted second conditional formula: 'Were + subject + to + base verb' ('Were urban authorities to implement')."
      },
      {
        "id": "cond_5",
        "number": 5,
        "sentence": "Consumers will continue purchasing single-use plastics ___ affordable, biodegradable alternatives become widely accessible.",
        "options": [
          "unless",
          "provided that",
          "as long as",
          "if only"
        ],
        "answer": "unless",
        "explanation": "'unless' means 'except if' / 'if not', fitting the conditional logic of consumer behavior."
      },
      {
        "id": "cond_6",
        "number": 6,
        "sentence": "If scientists had not developed mRNA vaccine technologies, the global pandemic ___ far more severe.",
        "options": [
          "would be",
          "would have been",
          "will be",
          "had been"
        ],
        "answer": "would have been",
        "explanation": "Standard third conditional for a completed past scenario: 'had not developed' -> 'would have been'."
      },
      {
        "id": "cond_7",
        "number": 7,
        "sentence": "Should technological disruption ___ to eliminate entry-level positions, educational curricula must be restructured.",
        "options": [
          "continue",
          "continued",
          "continues",
          "continuing"
        ],
        "answer": "continue",
        "explanation": "Inverted first conditional: 'Should + subject + bare infinitive (continue)'."
      },
      {
        "id": "cond_8",
        "number": 8,
        "sentence": "Municipalities would save millions annually if smart lighting systems ___ throughout public avenues.",
        "options": [
          "were installed",
          "are installed",
          "will be installed",
          "had installed"
        ],
        "answer": "were installed",
        "explanation": "Second conditional passive: past subjunctive 'were installed' pairs with 'would save'."
      },
      {
        "id": "cond_9",
        "number": 9,
        "sentence": "Provided that privacy safeguards ___ firmly maintained, artificial intelligence can benefit personalized medicine.",
        "options": [
          "are",
          "were",
          "would be",
          "will be"
        ],
        "answer": "are",
        "explanation": "'Provided that' introduces a real first conditional clause, requiring the present tense 'are'."
      },
      {
        "id": "cond_10",
        "number": 10,
        "sentence": "Had the initial clinical trials ___ adverse side effects, the pharmaceutical product would have been withdrawn immediately.",
        "options": [
          "reveal",
          "revealed",
          "revealing",
          "to reveal"
        ],
        "answer": "revealed",
        "explanation": "Inverted third conditional: 'Had the trials revealed...'."
      },
      {
        "id": "cond_11",
        "number": 11,
        "sentence": "If comprehensive recycling schemes were mandatory, household landfill waste ___ by more than half.",
        "options": [
          "would shrink",
          "will shrink",
          "had shrunk",
          "shrinks"
        ],
        "answer": "would shrink",
        "explanation": "Second conditional main clause: 'would + base verb' ('would shrink')."
      },
      {
        "id": "cond_12",
        "number": 12,
        "sentence": "___ adequate emergency funding not been disbursed, regional hospitals would have collapsed under the influx.",
        "options": [
          "Had",
          "Were",
          "Did",
          "Should"
        ],
        "answer": "Had",
        "explanation": "Inverted negative third conditional: 'Had adequate emergency funding not been disbursed'."
      },
      {
        "id": "cond_13",
        "number": 13,
        "sentence": "The project would have succeeded ___ the leadership maintained clear strategic oversight throughout its duration.",
        "options": [
          "had",
          "were",
          "should",
          "if had"
        ],
        "answer": "had",
        "explanation": "Inverted conditional without 'if' placed in the second clause: 'had the leadership maintained'."
      },
      {
        "id": "cond_14",
        "number": 14,
        "sentence": "Were national borders ___ abruptly, international supply chains would experience severe logistical stagnation.",
        "options": [
          "closing",
          "to close",
          "closed",
          "close"
        ],
        "answer": "to close",
        "explanation": "Inverted second conditional: 'Were + subject + to-infinitive' ('Were borders to close')."
      },
      {
        "id": "cond_15",
        "number": 15,
        "sentence": "If developing economies ___ access to affordable microfinance, local entrepreneurship will flourish.",
        "options": [
          "gain",
          "gained",
          "would gain",
          "had gained"
        ],
        "answer": "gain",
        "explanation": "First conditional (real future possibility): present simple 'gain' pairs with 'will flourish'."
      }
    ]
  },
  {
    "id": "verb-tenses",
    "number": 5,
    "title": "Verb Tenses & Aspect in IELTS",
    "category": "VERB FORMS",
    "summary": "Navigating Past Simple vs Present Perfect, past perfect sequencing, and future demographic trends.",
    "level": "Band 7.0–8.5 Focus",
    "overview": "Tense accuracy is crucial for Task 1 reports (interpreting historical charts vs projected future models) and Task 2 essays (contrasting historical shifts with ongoing contemporary trends).",
    "ieltsTip": "Never use the Present Perfect with specific finished past time markers ('in 2015', 'last century'). Use Past Simple for completed past events, and Present Perfect for changes spanning from the past up to the present.",
    "rules": [
      {
        "name": "Past Simple vs Present Perfect",
        "formula": "Past Simple (+ specific past year: in 2010) vs Present Perfect (+ since / over the past decade)",
        "explanation": "Specific completed past points require Past Simple. Time frames extending into the present require Present Perfect.",
        "examples": [
          {
            "wrong": "The proportion of internet users has surged dramatically in 2015.",
            "correct": "The proportion of internet users surged dramatically in 2015.",
            "note": "'in 2015' is a closed historical date requiring Past Simple 'surged'."
          },
          {
            "wrong": "Global smartphone adoption climbed steadily over the last decade.",
            "correct": "Global smartphone adoption has climbed steadily over the last decade.",
            "note": "'over the last decade' includes the present moment, requiring Present Perfect 'has climbed'."
          }
        ]
      },
      {
        "name": "Past Perfect for Temporal Sequencing",
        "formula": "Action 1 (had + Past Participle) occurred before Action 2 (Past Simple)",
        "explanation": "Use Past Perfect to make clear that one historical trend had concluded before another historical milestone occurred.",
        "examples": [
          {
            "wrong": "Before the policy came into effect, emission levels already peaked.",
            "correct": "Before the policy came into effect, emission levels had already peaked.",
            "note": "The peaking occurred prior to the policy coming into effect."
          }
        ]
      },
      {
        "name": "Future Projections & Predictions (Task 1)",
        "formula": "is / are projected / predicted / forecast to + Base Verb",
        "explanation": "Task 1 charts showing years beyond the present (e.g. 2030, 2050) require cautious predictive forms rather than definitive 'will'.",
        "examples": [
          {
            "wrong": "In 2040, solar power will produce eighty percent of electricity.",
            "correct": "By 2040, solar energy is projected to produce eighty percent of electricity.",
            "note": "'is projected to' reflects academic objectivity for future chart estimates."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "vt_1",
        "number": 1,
        "sentence": "Between 2005 and 2018, passenger vehicle ownership in the region ___ by thirty-five percent.",
        "options": [
          "has expanded",
          "expanded",
          "is expanding",
          "had been expanded"
        ],
        "answer": "expanded",
        "explanation": "A definitive historical period ('Between 2005 and 2018') requires the Past Simple 'expanded'."
      },
      {
        "id": "vt_2",
        "number": 2,
        "sentence": "Over the course of the past two decades, renewable power generation ___ exponential expansion globally.",
        "options": [
          "witnessed",
          "has witnessed",
          "witnesses",
          "had witnessed"
        ],
        "answer": "has witnessed",
        "explanation": "'Over the course of the past two decades' refers to a duration connecting to the present, requiring the Present Perfect 'has witnessed'."
      },
      {
        "id": "vt_3",
        "number": 3,
        "sentence": "By the time the international environmental treaty was signed, several endangered marine species ___ extinct.",
        "options": [
          "became",
          "have become",
          "had become",
          "were becoming"
        ],
        "answer": "had become",
        "explanation": "Past Perfect 'had become' indicates an action completed prior to the past signing of the treaty."
      },
      {
        "id": "vt_4",
        "number": 4,
        "sentence": "Global life expectancy is forecast ___ seventy-five years by the middle of the current century.",
        "options": [
          "to exceed",
          "exceeding",
          "exceed",
          "exceeded"
        ],
        "answer": "to exceed",
        "explanation": "Predictive passive idiom: 'is forecast to exceed...'."
      },
      {
        "id": "vt_5",
        "number": 5,
        "sentence": "In 2012, household expenditure on recreation ___ a plateau before falling moderately.",
        "options": [
          "reached",
          "has reached",
          "is reaching",
          "had been reached"
        ],
        "answer": "reached",
        "explanation": "Past Simple 'reached' is required with the specific past point in time 'In 2012'."
      },
      {
        "id": "vt_6",
        "number": 6,
        "sentence": "Since the introduction of digitized automated tolling, highway congestion ___ by nearly a quarter.",
        "options": [
          "diminished",
          "has diminished",
          "is diminishing",
          "had diminished"
        ],
        "answer": "has diminished",
        "explanation": "'Since + past noun/event' introduces a time period leading up to the present, requiring Present Perfect 'has diminished'."
      },
      {
        "id": "vt_7",
        "number": 7,
        "sentence": "Demographic models suggest that the elderly population ___ twenty percent of the workforce by 2045.",
        "options": [
          "will comprise",
          "is projected to comprise",
          "comprises",
          "has comprised"
        ],
        "answer": "is projected to comprise",
        "explanation": "'is projected to comprise' is the precise academic construction for future statistical estimates in IELTS Task 1."
      },
      {
        "id": "vt_8",
        "number": 8,
        "sentence": "Prior to 1990, coal-fired plants ___ the primary source of domestic heating in the northern territories.",
        "options": [
          "had been",
          "have been",
          "are",
          "would be"
        ],
        "answer": "had been",
        "explanation": "Past Perfect 'had been' describes a historical continuous condition existing before the past landmark year 1990."
      },
      {
        "id": "vt_9",
        "number": 9,
        "sentence": "In recent years, researchers ___ increasing correlation between excessive screen time and sleep fragmentation.",
        "options": [
          "uncovered",
          "have uncovered",
          "had uncovered",
          "uncover"
        ],
        "answer": "have uncovered",
        "explanation": "'In recent years' represents an open time span touching the present, demanding Present Perfect 'have uncovered'."
      },
      {
        "id": "vt_10",
        "number": 10,
        "sentence": "The manufacturing sector experienced brief volatility, but stability ___ by the end of the fiscal quarter.",
        "options": [
          "was restored",
          "has been restored",
          "is restored",
          "had restored"
        ],
        "answer": "was restored",
        "explanation": "Past simple passive 'was restored' matches the past simple narrative of 'experienced'."
      },
      {
        "id": "vt_11",
        "number": 11,
        "sentence": "During the twentieth century, human longevity ___ more than in any previous epoch of history.",
        "options": [
          "has increased",
          "increased",
          "is increasing",
          "had been increasing"
        ],
        "answer": "increased",
        "explanation": "'During the twentieth century' is a finished past historical epoch, which demands Past Simple 'increased'."
      },
      {
        "id": "vt_12",
        "number": 12,
        "sentence": "Urban infrastructure investment ___ significantly since the new metropolitan council assumed office.",
        "options": [
          "accelerated",
          "has accelerated",
          "had accelerated",
          "accelerates"
        ],
        "answer": "has accelerated",
        "explanation": "'since' introduces a past starting point with consequences continuing into the present: 'has accelerated'."
      },
      {
        "id": "vt_13",
        "number": 13,
        "sentence": "The graph indicates that petroleum consumption ___ anticipated to drop to negligible levels by 2060.",
        "options": [
          "is",
          "was",
          "has been",
          "will"
        ],
        "answer": "is",
        "explanation": "Present report referencing future prediction: 'is anticipated to drop...'."
      },
      {
        "id": "vt_14",
        "number": 14,
        "sentence": "By the year 2016, online retail sales ___ traditional brick-and-mortar storefront revenue for the first time.",
        "options": [
          "surpassed",
          "had surpassed",
          "have surpassed",
          "were surpassing"
        ],
        "answer": "had surpassed",
        "explanation": "'By the year 2016' indicates a completed milestone prior to or at that past date, requiring Past Perfect 'had surpassed'."
      },
      {
        "id": "vt_15",
        "number": 15,
        "sentence": "Over the elapsed seven-year interval, domestic recycling compliance ___ plateaued at forty-two percent.",
        "options": [
          "has",
          "had",
          "was",
          "did"
        ],
        "answer": "has",
        "explanation": "Present perfect 'has plateaued' matches the ongoing status over the elapsed interval."
      }
    ]
  },
  {
    "id": "articles-nouns",
    "number": 6,
    "title": "Articles & Countable / Uncountable Nouns",
    "category": "ACADEMIC ACCURACY",
    "summary": "Mastering 'the' vs zero article, abstract academic nouns, and uncountable pitfalls in IELTS Writing.",
    "level": "Band 7.0–8.5 Focus",
    "overview": "Article errors are among the most persistent mistakes made by non-native candidates. Examiners immediately notice incorrect omission of 'the' before specific institutions or erroneous pluralization of uncountable academic nouns (e.g. *informations, *researches).",
    "ieltsTip": "Uncountable nouns like 'information', 'advice', 'research', 'evidence', and 'equipment' NEVER take 'a/an' and NEVER take an '-s' plural ending.",
    "rules": [
      {
        "name": "Zero Article with Plural & Uncountable Generalizations",
        "formula": "Zero Article (Ø) + Plural Noun / Uncountable Noun (when speaking generally)",
        "explanation": "Do not use 'the' when making broad claims about people, systems, or concepts in general.",
        "examples": [
          {
            "wrong": "The children need the physical exercise for the healthy development.",
            "correct": "Children need physical exercise for healthy development.",
            "note": "General categories (children, physical exercise, healthy development) take zero article."
          }
        ]
      },
      {
        "name": "The Definite Article for Specificity",
        "formula": "The + Noun + of + Specific Qualifier",
        "explanation": "When a noun is made specific by a following prepositional phrase or relative clause, 'the' is mandatory.",
        "examples": [
          {
            "wrong": "Development of autonomous vehicles requires strict safety benchmarks.",
            "correct": "The development of autonomous vehicles requires strict safety benchmarks.",
            "note": "'The development of...' refers to a specific process, requiring 'The'."
          }
        ]
      },
      {
        "name": "Common Uncountable Academic Nouns",
        "formula": "evidence, research, information, equipment, advice, legislation (No 's'!)",
        "explanation": "To express quantity with these nouns, use phrases like 'a piece of evidence' or 'a body of research'.",
        "examples": [
          {
            "wrong": "Researchers conducted many researches to collect reliable datas.",
            "correct": "Researchers conducted extensive research to collect reliable data.",
            "note": "'Research' is uncountable; 'data' is already the academic plural/mass noun."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "art_1",
        "number": 1,
        "sentence": "Recent scientific ___ provides conclusive proof that microplastics have entered the marine food chain.",
        "options": [
          "evidences",
          "evidence",
          "an evidence",
          "pieces of evidences"
        ],
        "answer": "evidence",
        "explanation": "'Evidence' is strictly uncountable in academic English and cannot take an '-s' plural ending."
      },
      {
        "id": "art_2",
        "number": 2,
        "sentence": "___ rapid advancement of biotechnology has generated profound ethical debates.",
        "options": [
          "A",
          "The",
          "Ø (no article)",
          "An"
        ],
        "answer": "The",
        "explanation": "'The' is required because 'advancement' is made specific by the post-modifying phrase 'of biotechnology'."
      },
      {
        "id": "art_3",
        "number": 3,
        "sentence": "Scholars have conducted extensive ___ into the socio-economic impacts of remote employment.",
        "options": [
          "researches",
          "research",
          "a research",
          "many researches"
        ],
        "answer": "research",
        "explanation": "'Research' is an uncountable noun in English; use 'extensive research' (never *researches)."
      },
      {
        "id": "art_4",
        "number": 4,
        "sentence": "___ higher education should be accessible to all qualified students regardless of financial background.",
        "options": [
          "The",
          "A",
          "Ø (no article)",
          "An"
        ],
        "answer": "Ø (no article)",
        "explanation": "When speaking generally about 'higher education' as an abstract societal sector, no article is used."
      },
      {
        "id": "art_5",
        "number": 5,
        "sentence": "Governments must purchase modern laboratory ___ to enhance national disease surveillance.",
        "options": [
          "equipments",
          "equipment",
          "an equipment",
          "pieces of equipments"
        ],
        "answer": "equipment",
        "explanation": "'Equipment' is uncountable and never takes an '-s' plural ending."
      },
      {
        "id": "art_6",
        "number": 6,
        "sentence": "___ role of educators has transformed significantly in the digital learning era.",
        "options": [
          "A",
          "The",
          "Ø (no article)",
          "Any"
        ],
        "answer": "The",
        "explanation": "'The role of educators' refers to a specific identified function, demanding the definite article 'The'."
      },
      {
        "id": "art_7",
        "number": 7,
        "sentence": "Providing clear ___ to adolescents regarding digital privacy is essential in contemporary society.",
        "options": [
          "advices",
          "advice",
          "an advice",
          "advicements"
        ],
        "answer": "advice",
        "explanation": "'Advice' is strictly uncountable and cannot be pluralized as *advices."
      },
      {
        "id": "art_8",
        "number": 8,
        "sentence": "___ air pollution in megacities poses acute hazards to public respiratory health.",
        "options": [
          "The",
          "An",
          "Ø (no article)",
          "A"
        ],
        "answer": "The",
        "explanation": "Because the air pollution is restricted specifically to 'in megacities', the definite article 'The' is required."
      },
      {
        "id": "art_9",
        "number": 9,
        "sentence": "The university faculty produced a remarkable ___ of academic publications last year.",
        "options": [
          "number",
          "amount",
          "quantity",
          "deal"
        ],
        "answer": "number",
        "explanation": "'Publications' is a countable plural noun, which pairs with 'number' ('amount' is reserved for uncountables)."
      },
      {
        "id": "art_10",
        "number": 10,
        "sentence": "Technological innovation creates both opportunities and challenges for ___ modern society.",
        "options": [
          "the",
          "a",
          "Ø (no article)",
          "an"
        ],
        "answer": "Ø (no article)",
        "explanation": "Abstract general nouns like 'modern society' are used with zero article in broad academic claims."
      },
      {
        "id": "art_11",
        "number": 11,
        "sentence": "The analyst scrutinized a vast ___ of statistical data before submitting the final report.",
        "options": [
          "number",
          "amount",
          "figure",
          "count"
        ],
        "answer": "amount",
        "explanation": "'Data' treated as a mass/uncountable noun pairs with 'amount' ('a vast amount of data')."
      },
      {
        "id": "art_12",
        "number": 12,
        "sentence": "___ United Kingdom and the United States witnessed divergent economic trajectories in 2020.",
        "options": [
          "The",
          "A",
          "Ø (no article)",
          "An"
        ],
        "answer": "The",
        "explanation": "Country names that contain plural nouns or terms like 'Kingdom', 'Republic', or 'States' require 'The'."
      },
      {
        "id": "art_13",
        "number": 13,
        "sentence": "Implementing strict ___ is imperative to curb corporate tax evasion.",
        "options": [
          "legislations",
          "legislation",
          "a legislation",
          "legislative laws"
        ],
        "answer": "legislation",
        "explanation": "'Legislation' is an uncountable noun; use 'strict legislation'."
      },
      {
        "id": "art_14",
        "number": 14,
        "sentence": "___ internet has democratized global access to academic knowledge repositories.",
        "options": [
          "The",
          "An",
          "Ø (no article)",
          "A"
        ],
        "answer": "The",
        "explanation": "Unique global systems like 'the internet' and 'the environment' take the definite article 'the'."
      },
      {
        "id": "art_15",
        "number": 15,
        "sentence": "A significant ___ of international students encounter cultural adjustment barriers in their first semester.",
        "options": [
          "percentage",
          "percent",
          "amount",
          "measure"
        ],
        "answer": "percentage",
        "explanation": "Preceded by 'A significant...', the countable noun 'percentage' is grammatically correct ('percent' is used with numerals like '20 percent')."
      }
    ]
  },
  {
    "id": "modals-hedging",
    "number": 7,
    "title": "Modals & Academic Hedging",
    "category": "BAND 8+ REGISTER",
    "summary": "Cautious language, epistemic modals, and probabilistic adverbs to avoid sweeping over-generalizations.",
    "level": "Band 7.5–9.0 Focus",
    "overview": "In academic writing, stating absolutes (e.g. *Technology always causes depression*) is heavily penalized in IELTS Task Response and Grammatical Range. High-scoring candidates hedge their claims with modal verbs (may, could, tend to) and probability markers.",
    "ieltsTip": "Replace dogmatic words like 'always', 'never', 'proves', and 'is certain' with cautious hedging phrases like 'tends to indicate', 'appears to suggest', or 'is arguably attributable to'.",
    "rules": [
      {
        "name": "Cautious Modal Verbs",
        "formula": "Subject + may / could / might + Base Verb",
        "explanation": "Softens claims from absolute certainty to realistic probability.",
        "examples": [
          {
            "wrong": "Excessive smartphone usage will destroy interpersonal communication skills.",
            "correct": "Excessive smartphone usage may undermine interpersonal communication skills.",
            "note": "'may undermine' is scholarly and balanced; 'will destroy' is an unprovable exaggeration."
          }
        ]
      },
      {
        "name": "Hedging Verbs (Tend to, Appear to, Suggest)",
        "formula": "Subject + tends to / appears to / seems to + Base Verb",
        "explanation": "Describes general tendencies without claiming that they apply to every single case.",
        "examples": [
          {
            "wrong": "Older employees refuse to adapt to modern workplace software.",
            "correct": "Older employees may tend to exhibit greater reluctance when adopting novel workplace software.",
            "note": "'tend to exhibit' reflects appropriate sociological nuance."
          }
        ]
      },
      {
        "name": "Adverbs of Frequency & Probability",
        "formula": "arguably, predominantly, likely, potentially, substantially",
        "explanation": "Strategic adverbs allow precise qualification of the strength of your arguments.",
        "examples": [
          {
            "wrong": "Renewable energy is the only solution to environmental devastation.",
            "correct": "Renewable energy is arguably one of the most effective solutions to environmental devastation.",
            "note": "'arguably one of the most' creates a defensible, Band 8.5+ thesis statement."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "hedg_1",
        "number": 1,
        "sentence": "Empirical findings ___ that prolonged screen exposure may contribute to diminished attention spans in children.",
        "options": [
          "prove definitively",
          "appear to suggest",
          "guarantees",
          "certainly show"
        ],
        "answer": "appear to suggest",
        "explanation": "'appear to suggest' is the gold standard of academic hedging, avoiding dogmatic overstatements."
      },
      {
        "id": "hedg_2",
        "number": 2,
        "sentence": "Early bilingual education is ___ one of the most effective strategies for cultivating cognitive flexibility.",
        "options": [
          "undoubtedly always",
          "arguably",
          "without any doubt",
          "never not"
        ],
        "answer": "arguably",
        "explanation": "'arguably' introduces a persuasive academic viewpoint while leaving room for scholarly nuance."
      },
      {
        "id": "hedg_3",
        "number": 3,
        "sentence": "Individuals residing in high-density urban zones ___ experience higher baseline levels of chronic stress.",
        "options": [
          "tend to",
          "are always to",
          "must definitely",
          "never fail to"
        ],
        "answer": "tend to",
        "explanation": "'tend to' identifies a statistical propensity without implying that every single urban resident suffers from stress."
      },
      {
        "id": "hedg_4",
        "number": 4,
        "sentence": "The sudden decline in domestic retail sales could ___ be attributed to consumer anxieties surrounding inflation.",
        "options": [
          "potentially",
          "absolutely",
          "unavoidably",
          "strictly"
        ],
        "answer": "potentially",
        "explanation": "'potentially' provides an appropriate degree of cautious probability in academic analysis."
      },
      {
        "id": "hedg_5",
        "number": 5,
        "sentence": "The proposed taxation measures ___ inadvertently exacerbate socio-economic inequalities if implemented indiscriminately.",
        "options": [
          "will always",
          "might",
          "shall definitely",
          "ought must"
        ],
        "answer": "might",
        "explanation": "'might' expresses a realistic cautious possibility of unintended negative consequences."
      },
      {
        "id": "hedg_6",
        "number": 6,
        "sentence": "It ___ that monetary incentives alone are insufficient to ensure long-term employee retention.",
        "options": [
          "seems plausible",
          "is a fact forever",
          "is totally certain",
          "cannot be denied by anyone"
        ],
        "answer": "seems plausible",
        "explanation": "'It seems plausible that' is an objective, academic hedging structure."
      },
      {
        "id": "hedg_7",
        "number": 7,
        "sentence": "Remote working arrangements ___ contribute to feelings of professional isolation among newly hired staff.",
        "options": [
          "can",
          "will undoubtedly",
          "inevitably must",
          "are always to"
        ],
        "answer": "can",
        "explanation": "Modal 'can' expresses potential capacity without overstating certainty."
      },
      {
        "id": "hedg_8",
        "number": 8,
        "sentence": "The disparity in test scores is ___ attributable to historical differences in educational funding.",
        "options": [
          "largely",
          "completely 100%",
          "without exception",
          "solely and only"
        ],
        "answer": "largely",
        "explanation": "'largely' acknowledges the primary factor while allowing for other contributing variables."
      },
      {
        "id": "hedg_9",
        "number": 9,
        "sentence": "The statistical correlation ___ an association between plant-based diets and reduced cardiovascular risk.",
        "options": [
          "indicates",
          "proves completely",
          "is unquestionable proof of",
          "forces"
        ],
        "answer": "indicates",
        "explanation": "'indicates' maintains proper scientific caution, recognizing that correlation is not absolute causation."
      },
      {
        "id": "hedg_10",
        "number": 10,
        "sentence": "Subsidizing public transport would ___ encourage private automobile commuters to shift their habits.",
        "options": [
          "likely",
          "surely always",
          "without failure",
          "strictly"
        ],
        "answer": "likely",
        "explanation": "'likely' tempers the conditional prediction into an evidence-based expectation."
      },
      {
        "id": "hedg_11",
        "number": 11,
        "sentence": "There is ___ evidence to suggest that cognitive stimulation slows the progression of neurodegenerative decline.",
        "options": [
          "growing",
          "perfect absolute",
          "unquestioned total",
          "final"
        ],
        "answer": "growing",
        "explanation": "'growing evidence' is standard academic phrasing for an expanding body of research."
      },
      {
        "id": "hedg_12",
        "number": 12,
        "sentence": "Such an aggressive policy overhaul ___ entail unforeseen administrative expenditures.",
        "options": [
          "could",
          "must strictly",
          "will without doubt",
          "shall certainly"
        ],
        "answer": "could",
        "explanation": "'could' appropriately hedges hypothetical financial projections."
      },
      {
        "id": "hedg_13",
        "number": 13,
        "sentence": "The data ___ that consumer confidence began stabilizing in the second quarter.",
        "options": [
          "would seem to imply",
          "guarantees totally",
          "undeniably dictates",
          "makes it impossible to doubt"
        ],
        "answer": "would seem to imply",
        "explanation": "'would seem to imply' provides sophisticated double-hedging characteristic of Band 8.5+ academic discourse."
      },
      {
        "id": "hedg_14",
        "number": 14,
        "sentence": "Artificial intelligence is ___ to transform diagnostics across the healthcare sector.",
        "options": [
          "poised",
          "forced strictly",
          "doomed definitely",
          "inescapable"
        ],
        "answer": "poised",
        "explanation": "'is poised to' expresses confident readiness without vulgar hyperbole."
      },
      {
        "id": "hedg_15",
        "number": 15,
        "sentence": "These preliminary findings ___ be interpreted with caution until larger clinical cohorts are evaluated.",
        "options": [
          "should",
          "cannot never",
          "must strictly only",
          "will always"
        ],
        "answer": "should",
        "explanation": "'should be interpreted with caution' is the archetypal academic recommendation."
      }
    ]
  },
  {
    "id": "prepositions-collocations",
    "number": 8,
    "title": "Dependent Prepositions & Collocations",
    "category": "ACADEMIC ACCURACY",
    "summary": "Fixed prepositions following verbs, adjectives, and nouns in high-frequency IELTS Academic topics.",
    "level": "Band 7.0–8.5 Focus",
    "overview": "Incorrect prepositions immediately reveal non-native awkwardness to IELTS examiners. Collocations (natural word partnerships) account for significant points under Lexical Resource and Grammatical Accuracy.",
    "ieltsTip": "Memorize dependent prepositions in complete chunks: 'attribute X to Y', 'contribute to', 'adhere to', 'prone to', 'insight into', and 'impact on'.",
    "rules": [
      {
        "name": "Dependent Prepositions with Verbs",
        "formula": "Verb + Specific Preposition (contribute TO, result IN, stem FROM, rely ON)",
        "explanation": "English verbs require specific fixed prepositions. Translating directly from other languages often causes preposition errors.",
        "examples": [
          {
            "wrong": "Excessive industrialization contributed for environmental pollution.",
            "correct": "Excessive industrialization contributed to environmental pollution.",
            "note": "'contribute' strictly pairs with 'to' (never 'for')."
          },
          {
            "wrong": "Chronic poverty often results from lack of access to education.",
            "correct": "Chronic poverty often results in diminished social mobility / stems from lack of education.",
            "note": "'result in' = produces an outcome; 'result from / stem from' = originates from a cause."
          }
        ]
      },
      {
        "name": "Dependent Prepositions with Adjectives",
        "formula": "Adjective + Specific Preposition (prone TO, capable OF, compatible WITH, susceptible TO)",
        "explanation": "Adjectives expressing vulnerability, capacity, or connection take mandatory prepositions.",
        "examples": [
          {
            "wrong": "Low-lying coastal settlements are highly prone for devastating floods.",
            "correct": "Low-lying coastal settlements are highly prone to devastating floods.",
            "note": "'prone' strictly takes 'to'."
          }
        ]
      },
      {
        "name": "Noun + Preposition Collocations",
        "formula": "impact ON, surge IN, insight INTO, resistance TO",
        "explanation": "Academic nouns take distinct prepositions that must be adhered to in IELTS Writing.",
        "examples": [
          {
            "wrong": "The tax had a detrimental impact in low-income households.",
            "correct": "The tax had a detrimental impact on low-income households.",
            "note": "'impact' takes 'on' (never 'in')."
          }
        ]
      }
    ],
    "questions": [
      {
        "id": "prep_1",
        "number": 1,
        "sentence": "Heavy vehicular emissions contribute significantly ___ the deterioration of urban air quality.",
        "options": [
          "in",
          "to",
          "for",
          "with"
        ],
        "answer": "to",
        "explanation": "'contribute' always pairs with the dependent preposition 'to'."
      },
      {
        "id": "prep_2",
        "number": 2,
        "sentence": "The ongoing economic stagnation stems ___ systemic deficiencies within the banking regulatory framework.",
        "options": [
          "from",
          "of",
          "by",
          "with"
        ],
        "answer": "from",
        "explanation": "'stems from' is the correct academic collocation meaning 'originates from'."
      },
      {
        "id": "prep_3",
        "number": 3,
        "sentence": "Low-lying delta regions are exceptionally susceptible ___ rising sea levels and storm surges.",
        "options": [
          "to",
          "for",
          "with",
          "at"
        ],
        "answer": "to",
        "explanation": "The adjective 'susceptible' strictly takes 'to' ('susceptible to disease / flooding')."
      },
      {
        "id": "prep_4",
        "number": 4,
        "sentence": "The government's new fiscal austerity policy had an adverse impact ___ consumer confidence.",
        "options": [
          "on",
          "in",
          "to",
          "over"
        ],
        "answer": "on",
        "explanation": "The noun 'impact' takes the dependent preposition 'on' ('impact on something')."
      },
      {
        "id": "prep_5",
        "number": 5,
        "sentence": "Scholars attribute the dramatic decline in infant mortality ___ widespread vaccination campaigns.",
        "options": [
          "to",
          "with",
          "for",
          "from"
        ],
        "answer": "to",
        "explanation": "The verb structure is 'attribute X to Y'."
      },
      {
        "id": "prep_6",
        "number": 6,
        "sentence": "Multinational corporations must comply ___ international environmental sustainability protocols.",
        "options": [
          "with",
          "to",
          "by",
          "for"
        ],
        "answer": "with",
        "explanation": "'comply' always takes the preposition 'with' ('comply with regulations')."
      },
      {
        "id": "prep_7",
        "number": 7,
        "sentence": "The research provides valuable insights ___ the cognitive mechanisms governing language acquisition.",
        "options": [
          "into",
          "about",
          "towards",
          "over"
        ],
        "answer": "into",
        "explanation": "'insight' standardly collocates with 'into' ('insights into a phenomenon')."
      },
      {
        "id": "prep_8",
        "number": 8,
        "sentence": "Many regional communities are heavily reliant ___ seasonal agricultural employment for their livelihood.",
        "options": [
          "on",
          "in",
          "at",
          "with"
        ],
        "answer": "on",
        "explanation": "The adjective 'reliant' pairs with 'on' (or 'upon')."
      },
      {
        "id": "prep_9",
        "number": 9,
        "sentence": "A lack of physical exercise in early childhood can result ___ severe musculoskeletal disorders in later life.",
        "options": [
          "in",
          "from",
          "to",
          "with"
        ],
        "answer": "in",
        "explanation": "'result in' means 'produce as an outcome' (whereas 'result from' indicates cause)."
      },
      {
        "id": "prep_10",
        "number": 10,
        "sentence": "Educational institutions should be capable ___ adapting their curricula to evolving technological paradigms.",
        "options": [
          "of",
          "to",
          "for",
          "with"
        ],
        "answer": "of",
        "explanation": "The adjective 'capable' takes 'of + gerund' ('capable of adapting')."
      },
      {
        "id": "prep_11",
        "number": 11,
        "sentence": "The chart displays a dramatic surge ___ the proportion of renewable electricity generation between 2010 and 2020.",
        "options": [
          "in",
          "of",
          "on",
          "with"
        ],
        "answer": "in",
        "explanation": "'surge in' is the standard Task 1 collocation for quantitative increases."
      },
      {
        "id": "prep_12",
        "number": 12,
        "sentence": "Traditional retailers face fierce competition ___ digital e-commerce platforms offering lower overhead costs.",
        "options": [
          "from",
          "to",
          "with",
          "against"
        ],
        "answer": "from",
        "explanation": "'face competition from' identifies the competitive source."
      },
      {
        "id": "prep_13",
        "number": 13,
        "sentence": "Citizens must adhere ___ municipal recycling guidelines to avoid substantial civil penalties.",
        "options": [
          "to",
          "with",
          "on",
          "by"
        ],
        "answer": "to",
        "explanation": "'adhere' always pairs with 'to' ('adhere to guidelines/standards')."
      },
      {
        "id": "prep_14",
        "number": 14,
        "sentence": "Public skepticism stems from a perceived lack ___ transparency in corporate financial disclosures.",
        "options": [
          "of",
          "in",
          "with",
          "for"
        ],
        "answer": "of",
        "explanation": "The noun phrase is 'a lack of something'."
      },
      {
        "id": "prep_15",
        "number": 15,
        "sentence": "Investing in early childhood nutrition is closely correlated ___ enhanced academic performance during adolescence.",
        "options": [
          "with",
          "to",
          "by",
          "at"
        ],
        "answer": "with",
        "explanation": "The standard academic statistical collocation is 'correlated with'."
      }
    ]
  }
]
};

if (typeof window !== 'undefined') {
  window.GRAMMAR_DATA = GRAMMAR_DATA;
}
if (typeof global !== 'undefined') {
  global.GRAMMAR_DATA = GRAMMAR_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GRAMMAR_DATA };
}
