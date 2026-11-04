// IELTS Grammar Practice Lab Database
// 5 Topics • 10 Exercises per Topic • 20 Questions per Exercise = 1,000 Questions Total
// Exactly 10 Drag-and-Drop + 10 Gap-Fill per Exercise with Shuffled Positions & Strict Scoring

const GRAMMAR_DATA = {
  topics: [
  {
    "id": "subject-verb-agreement",
    "title": "Subject-Verb Agreement",
    "icon": "S+V",
    "color": "#2563eb",
    "subtitle": "Singular & Plural concord, collective nouns, intervening phrases, and inverted syntax.",
    "rules": [
      "Words between the subject and verb (e.g., 'along with', 'in addition to') do not alter the number of the subject.",
      "'The number of...' takes a singular verb, whereas 'A number of...' takes a plural verb.",
      "With 'either... or' and 'neither... nor', the verb agrees with the subject closest to it.",
      "Gerund subjects (e.g., 'Implementing reforms') take a singular verb.",
      "Indefinite pronouns ('each', 'everyone', 'neither') strictly take singular verbs."
    ],
    "exercises": [
      {
        "id": "subject-verb-agreement_ex_1",
        "number": 1,
        "title": "Exercise 1",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "subject-verb-agreement_ex1_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The rapid expansion of renewable energy infrastructures has diminished fossil fuel dependency.",
            "correctSequence": [
              "The rapid expansion of",
              "renewable energy infrastructures",
              "has diminished",
              "fossil fuel dependency."
            ],
            "shuffledTokens": [
              "renewable energy infrastructures",
              "fossil fuel dependency.",
              "The rapid expansion of",
              "has diminished"
            ],
            "explanation": "The singular subject 'expansion' requires the singular verb 'has diminished'."
          },
          {
            "id": "subject-verb-agreement_ex1_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the course tutor nor the undergraduate researchers were cognizant of the updated protocol.",
            "correctSequence": [
              "Neither the course tutor",
              "nor the undergraduate researchers",
              "were cognizant of",
              "the updated protocol."
            ],
            "shuffledTokens": [
              "were cognizant of",
              "Neither the course tutor",
              "nor the undergraduate researchers",
              "the updated protocol."
            ],
            "explanation": "With 'neither... nor', the verb agrees with the plural subject closest to it: 'researchers were'."
          },
          {
            "id": "subject-verb-agreement_ex1_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial number of metropolitan dwellers commute daily via underground transit networks.",
            "correctSequence": [
              "A substantial number of",
              "metropolitan dwellers",
              "commute daily via",
              "underground transit networks."
            ],
            "shuffledTokens": [
              "commute daily via",
              "A substantial number of",
              "metropolitan dwellers",
              "underground transit networks."
            ],
            "explanation": "'A number of...' acts as a plural quantifier and takes the plural verb 'commute'."
          },
          {
            "id": "subject-verb-agreement_ex1_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The total number of registered electric vehicles has escalated exponentially since 2020.",
            "correctSequence": [
              "The total number of",
              "registered electric vehicles",
              "has escalated",
              "exponentially since 2020."
            ],
            "shuffledTokens": [
              "registered electric vehicles",
              "The total number of",
              "has escalated",
              "exponentially since 2020."
            ],
            "explanation": "'The number of...' specifies a single mathematical figure and takes the singular verb 'has escalated'."
          },
          {
            "id": "subject-verb-agreement_ex1_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Implementing comprehensive waste-sorting regulations across cities curbs municipal landfill buildup.",
            "correctSequence": [
              "Implementing comprehensive waste-sorting",
              "regulations across cities",
              "curbs municipal",
              "landfill buildup."
            ],
            "shuffledTokens": [
              "regulations across cities",
              "Implementing comprehensive waste-sorting",
              "curbs municipal",
              "landfill buildup."
            ],
            "explanation": "The gerund phrase 'Implementing comprehensive waste-sorting regulations' functions as a singular subject."
          },
          {
            "id": "subject-verb-agreement_ex1_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Each of the international scholarly publications undergoes rigorous peer-review evaluations.",
            "correctSequence": [
              "Each of the international",
              "scholarly publications",
              "undergoes rigorous",
              "peer-review evaluations."
            ],
            "shuffledTokens": [
              "scholarly publications",
              "Each of the international",
              "undergoes rigorous",
              "peer-review evaluations."
            ],
            "explanation": "The indefinite pronoun 'Each' is singular and strictly takes the singular verb 'undergoes'."
          },
          {
            "id": "subject-verb-agreement_ex1_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The minister, along with several distinguished economic delegates, is attending the symposium today.",
            "correctSequence": [
              "The minister, along with",
              "several distinguished economic delegates,",
              "is attending",
              "the symposium today."
            ],
            "shuffledTokens": [
              "several distinguished economic delegates,",
              "The minister, along with",
              "is attending",
              "the symposium today."
            ],
            "explanation": "Intervening phrases led by 'along with' do not change the singular subject 'minister'."
          },
          {
            "id": "subject-verb-agreement_ex1_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Ten thousand dollars was allocated to the community library's digital archive project.",
            "correctSequence": [
              "Ten thousand dollars",
              "was allocated to",
              "the community library's",
              "digital archive project."
            ],
            "shuffledTokens": [
              "was allocated to",
              "Ten thousand dollars",
              "the community library's",
              "digital archive project."
            ],
            "explanation": "Sums of money functioning as a single collective grant take a singular verb: 'was allocated'."
          },
          {
            "id": "subject-verb-agreement_ex1_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The criteria used to assess tertiary applicants have become noticeably more competitive.",
            "correctSequence": [
              "The criteria used to assess",
              "tertiary applicants",
              "have become noticeably",
              "more competitive."
            ],
            "shuffledTokens": [
              "tertiary applicants",
              "The criteria used to assess",
              "have become noticeably",
              "more competitive."
            ],
            "explanation": "'Criteria' is the plural form of 'criterion' and takes the plural verb 'have become'."
          },
          {
            "id": "subject-verb-agreement_ex1_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the primary author nor the contributing editor is accountable for the factual inaccuracy.",
            "correctSequence": [
              "Neither the primary author",
              "nor the contributing editor",
              "is accountable for",
              "the factual inaccuracy."
            ],
            "shuffledTokens": [
              "nor the contributing editor",
              "Neither the primary author",
              "is accountable for",
              "the factual inaccuracy."
            ],
            "explanation": "Both subjects are singular, so 'neither... nor' takes the singular verb 'is'."
          },
          {
            "id": "subject-verb-agreement_ex1_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The prevalence of anxiety disorders among adolescents ___ noticeably over the past decade.",
            "answer": "has climbed",
            "acceptableAnswers": [
              "has climbed",
              "has climbed",
              "HAS CLIMBED"
            ],
            "options": [
              "are climbing",
              "has climbed",
              "climb",
              "have climbed"
            ],
            "explanation": "The subject is the singular abstract noun 'prevalence', requiring 'has climbed'."
          },
          {
            "id": "subject-verb-agreement_ex1_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "A number of prominent climate scientists ___ that immediate carbon sequestration is imperative.",
            "answer": "contend",
            "acceptableAnswers": [
              "contend",
              "contend",
              "CONTEND"
            ],
            "options": [
              "is contending",
              "contend",
              "contending",
              "contends"
            ],
            "explanation": "'A number of...' acts as a plural quantifier meaning 'several', requiring 'contend'."
          },
          {
            "id": "subject-verb-agreement_ex1_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Neither the laboratory technicians nor the lead supervisor ___ aware of the chemical leak.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "were",
              "was",
              "have been",
              "are"
            ],
            "explanation": "The verb agrees with the closest subject ('lead supervisor', singular), taking 'was'."
          },
          {
            "id": "subject-verb-agreement_ex1_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The total number of electric charging stations across the province ___ 500 units this quarter.",
            "answer": "exceeds",
            "acceptableAnswers": [
              "exceeds",
              "exceeds",
              "EXCEEDS"
            ],
            "options": [
              "are exceeding",
              "exceed",
              "have exceeded",
              "exceeds"
            ],
            "explanation": "'The number of...' specifies a singular mathematical total and requires 'exceeds'."
          },
          {
            "id": "subject-verb-agreement_ex1_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Introducing automated robotic sorting systems in warehouses ___ substantial operational capital.",
            "answer": "demands",
            "acceptableAnswers": [
              "demands",
              "demands",
              "DEMANDS"
            ],
            "options": [
              "demands",
              "demand",
              "are demanding",
              "have demanded"
            ],
            "explanation": "A gerund phrase ('Introducing automated robotic sorting systems') functions as a singular subject."
          },
          {
            "id": "subject-verb-agreement_ex1_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Each of the experimental test subjects ___ assigned to a distinct control environment.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "have been",
              "were",
              "are",
              "was"
            ],
            "explanation": "'Each' is an indefinite pronoun that strictly takes a singular verb: 'was'."
          },
          {
            "id": "subject-verb-agreement_ex1_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lead investigator, accompanied by three junior researchers, ___ the symposium today.",
            "answer": "is attending",
            "acceptableAnswers": [
              "is attending",
              "is attending",
              "IS ATTENDING"
            ],
            "options": [
              "have attended",
              "are attending",
              "is attending",
              "attend"
            ],
            "explanation": "Intervening phrases like 'accompanied by' do not change the singular subject 'lead investigator'."
          },
          {
            "id": "subject-verb-agreement_ex1_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Fifty liters of distilled water ___ consumed during the chemical distillation process.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "have been",
              "are",
              "were",
              "was"
            ],
            "explanation": "Quantities of volume considered as a single aggregate mass take a singular verb: 'was'."
          },
          {
            "id": "subject-verb-agreement_ex1_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The scientific data collected from the polar expeditions ___ accessible to international researchers.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "was",
              "has been",
              "are",
              "is"
            ],
            "explanation": "In academic IELTS context, 'data' is treated as plural in formal scientific writing, agreeing with 'are'."
          },
          {
            "id": "subject-verb-agreement_ex1_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Neither the proposed budget cuts nor the suggested staff reductions ___ acceptable to the union.",
            "answer": "were",
            "acceptableAnswers": [
              "were",
              "were",
              "WERE"
            ],
            "options": [
              "was",
              "has been",
              "is",
              "were"
            ],
            "explanation": "Both subjects ('cuts' and 'reductions') are plural, taking 'were'."
          }
        ]
      },
      {
        "id": "subject-verb-agreement_ex_2",
        "number": 2,
        "title": "Exercise 2",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "subject-verb-agreement_ex2_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial number of metropolitan dwellers commute daily via underground transit networks.",
            "correctSequence": [
              "A substantial number of",
              "metropolitan dwellers",
              "commute daily via",
              "underground transit networks."
            ],
            "shuffledTokens": [
              "commute daily via",
              "metropolitan dwellers",
              "underground transit networks.",
              "A substantial number of"
            ],
            "explanation": "'A number of...' acts as a plural quantifier and takes the plural verb 'commute'."
          },
          {
            "id": "subject-verb-agreement_ex2_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The total number of registered electric vehicles has escalated exponentially since 2020.",
            "correctSequence": [
              "The total number of",
              "registered electric vehicles",
              "has escalated",
              "exponentially since 2020."
            ],
            "shuffledTokens": [
              "exponentially since 2020.",
              "has escalated",
              "The total number of",
              "registered electric vehicles"
            ],
            "explanation": "'The number of...' specifies a single mathematical figure and takes the singular verb 'has escalated'."
          },
          {
            "id": "subject-verb-agreement_ex2_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Implementing comprehensive waste-sorting regulations across cities curbs municipal landfill buildup.",
            "correctSequence": [
              "Implementing comprehensive waste-sorting",
              "regulations across cities",
              "curbs municipal",
              "landfill buildup."
            ],
            "shuffledTokens": [
              "regulations across cities",
              "landfill buildup.",
              "Implementing comprehensive waste-sorting",
              "curbs municipal"
            ],
            "explanation": "The gerund phrase 'Implementing comprehensive waste-sorting regulations' functions as a singular subject."
          },
          {
            "id": "subject-verb-agreement_ex2_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Each of the international scholarly publications undergoes rigorous peer-review evaluations.",
            "correctSequence": [
              "Each of the international",
              "scholarly publications",
              "undergoes rigorous",
              "peer-review evaluations."
            ],
            "shuffledTokens": [
              "scholarly publications",
              "peer-review evaluations.",
              "Each of the international",
              "undergoes rigorous"
            ],
            "explanation": "The indefinite pronoun 'Each' is singular and strictly takes the singular verb 'undergoes'."
          },
          {
            "id": "subject-verb-agreement_ex2_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The minister, along with several distinguished economic delegates, is attending the symposium today.",
            "correctSequence": [
              "The minister, along with",
              "several distinguished economic delegates,",
              "is attending",
              "the symposium today."
            ],
            "shuffledTokens": [
              "the symposium today.",
              "The minister, along with",
              "several distinguished economic delegates,",
              "is attending"
            ],
            "explanation": "Intervening phrases led by 'along with' do not change the singular subject 'minister'."
          },
          {
            "id": "subject-verb-agreement_ex2_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Ten thousand dollars was allocated to the community library's digital archive project.",
            "correctSequence": [
              "Ten thousand dollars",
              "was allocated to",
              "the community library's",
              "digital archive project."
            ],
            "shuffledTokens": [
              "the community library's",
              "Ten thousand dollars",
              "was allocated to",
              "digital archive project."
            ],
            "explanation": "Sums of money functioning as a single collective grant take a singular verb: 'was allocated'."
          },
          {
            "id": "subject-verb-agreement_ex2_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The criteria used to assess tertiary applicants have become noticeably more competitive.",
            "correctSequence": [
              "The criteria used to assess",
              "tertiary applicants",
              "have become noticeably",
              "more competitive."
            ],
            "shuffledTokens": [
              "have become noticeably",
              "The criteria used to assess",
              "tertiary applicants",
              "more competitive."
            ],
            "explanation": "'Criteria' is the plural form of 'criterion' and takes the plural verb 'have become'."
          },
          {
            "id": "subject-verb-agreement_ex2_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the primary author nor the contributing editor is accountable for the factual inaccuracy.",
            "correctSequence": [
              "Neither the primary author",
              "nor the contributing editor",
              "is accountable for",
              "the factual inaccuracy."
            ],
            "shuffledTokens": [
              "nor the contributing editor",
              "Neither the primary author",
              "is accountable for",
              "the factual inaccuracy."
            ],
            "explanation": "Both subjects are singular, so 'neither... nor' takes the singular verb 'is'."
          },
          {
            "id": "subject-verb-agreement_ex2_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A diverse range of extracurricular vocational opportunities is provided to secondary students.",
            "correctSequence": [
              "A diverse range of",
              "extracurricular vocational opportunities",
              "is provided to",
              "secondary students."
            ],
            "shuffledTokens": [
              "extracurricular vocational opportunities",
              "A diverse range of",
              "is provided to",
              "secondary students."
            ],
            "explanation": "'A diverse range' takes a singular verb in academic prose: 'is provided'."
          },
          {
            "id": "subject-verb-agreement_ex2_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Overcoming severe macroeconomic downturns and recessions demands resilient fiscal policy frameworks.",
            "correctSequence": [
              "Overcoming severe macroeconomic",
              "downturns and recessions",
              "demands resilient",
              "fiscal policy frameworks."
            ],
            "shuffledTokens": [
              "downturns and recessions",
              "Overcoming severe macroeconomic",
              "demands resilient",
              "fiscal policy frameworks."
            ],
            "explanation": "The gerund subject 'Overcoming...' takes the singular verb 'demands'."
          },
          {
            "id": "subject-verb-agreement_ex2_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Neither the laboratory technicians nor the lead supervisor ___ aware of the chemical leak.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "were",
              "was",
              "have been",
              "are"
            ],
            "explanation": "The verb agrees with the closest subject ('lead supervisor', singular), taking 'was'."
          },
          {
            "id": "subject-verb-agreement_ex2_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The total number of electric charging stations across the province ___ 500 units this quarter.",
            "answer": "exceeds",
            "acceptableAnswers": [
              "exceeds",
              "exceeds",
              "EXCEEDS"
            ],
            "options": [
              "are exceeding",
              "exceed",
              "have exceeded",
              "exceeds"
            ],
            "explanation": "'The number of...' specifies a singular mathematical total and requires 'exceeds'."
          },
          {
            "id": "subject-verb-agreement_ex2_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Introducing automated robotic sorting systems in warehouses ___ substantial operational capital.",
            "answer": "demands",
            "acceptableAnswers": [
              "demands",
              "demands",
              "DEMANDS"
            ],
            "options": [
              "demands",
              "demand",
              "are demanding",
              "have demanded"
            ],
            "explanation": "A gerund phrase ('Introducing automated robotic sorting systems') functions as a singular subject."
          },
          {
            "id": "subject-verb-agreement_ex2_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Each of the experimental test subjects ___ assigned to a distinct control environment.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "are",
              "were",
              "have been",
              "was"
            ],
            "explanation": "'Each' is an indefinite pronoun that strictly takes a singular verb: 'was'."
          },
          {
            "id": "subject-verb-agreement_ex2_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lead investigator, accompanied by three junior researchers, ___ the symposium today.",
            "answer": "is attending",
            "acceptableAnswers": [
              "is attending",
              "is attending",
              "IS ATTENDING"
            ],
            "options": [
              "is attending",
              "attend",
              "are attending",
              "have attended"
            ],
            "explanation": "Intervening phrases like 'accompanied by' do not change the singular subject 'lead investigator'."
          },
          {
            "id": "subject-verb-agreement_ex2_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Fifty liters of distilled water ___ consumed during the chemical distillation process.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "are",
              "was",
              "have been",
              "were"
            ],
            "explanation": "Quantities of volume considered as a single aggregate mass take a singular verb: 'was'."
          },
          {
            "id": "subject-verb-agreement_ex2_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The scientific data collected from the polar expeditions ___ accessible to international researchers.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "was",
              "has been",
              "are",
              "is"
            ],
            "explanation": "In academic IELTS context, 'data' is treated as plural in formal scientific writing, agreeing with 'are'."
          },
          {
            "id": "subject-verb-agreement_ex2_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Neither the proposed budget cuts nor the suggested staff reductions ___ acceptable to the union.",
            "answer": "were",
            "acceptableAnswers": [
              "were",
              "were",
              "WERE"
            ],
            "options": [
              "was",
              "were",
              "has been",
              "is"
            ],
            "explanation": "Both subjects ('cuts' and 'reductions') are plural, taking 'were'."
          },
          {
            "id": "subject-verb-agreement_ex2_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The diversity of species inhabiting the rainforest canopy ___ breathtaking ecological complexity.",
            "answer": "illustrates",
            "acceptableAnswers": [
              "illustrates",
              "illustrates",
              "ILLUSTRATES"
            ],
            "options": [
              "illustrates",
              "illustrate",
              "are illustrating",
              "have illustrated"
            ],
            "explanation": "The head noun of the subject is 'diversity' (singular), requiring 'illustrates'."
          },
          {
            "id": "subject-verb-agreement_ex2_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "A vast majority of the participants ___ in favor of stricter maritime fishing quotas.",
            "answer": "were",
            "acceptableAnswers": [
              "were",
              "were",
              "WERE"
            ],
            "options": [
              "were",
              "was",
              "is",
              "has been"
            ],
            "explanation": "'A majority of' followed by a countable plural noun ('participants') takes 'were'."
          }
        ]
      },
      {
        "id": "subject-verb-agreement_ex_3",
        "number": 3,
        "title": "Exercise 3",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "subject-verb-agreement_ex3_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Implementing comprehensive waste-sorting regulations across cities curbs municipal landfill buildup.",
            "correctSequence": [
              "Implementing comprehensive waste-sorting",
              "regulations across cities",
              "curbs municipal",
              "landfill buildup."
            ],
            "shuffledTokens": [
              "Implementing comprehensive waste-sorting",
              "curbs municipal",
              "landfill buildup.",
              "regulations across cities"
            ],
            "explanation": "The gerund phrase 'Implementing comprehensive waste-sorting regulations' functions as a singular subject."
          },
          {
            "id": "subject-verb-agreement_ex3_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Each of the international scholarly publications undergoes rigorous peer-review evaluations.",
            "correctSequence": [
              "Each of the international",
              "scholarly publications",
              "undergoes rigorous",
              "peer-review evaluations."
            ],
            "shuffledTokens": [
              "peer-review evaluations.",
              "undergoes rigorous",
              "scholarly publications",
              "Each of the international"
            ],
            "explanation": "The indefinite pronoun 'Each' is singular and strictly takes the singular verb 'undergoes'."
          },
          {
            "id": "subject-verb-agreement_ex3_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The minister, along with several distinguished economic delegates, is attending the symposium today.",
            "correctSequence": [
              "The minister, along with",
              "several distinguished economic delegates,",
              "is attending",
              "the symposium today."
            ],
            "shuffledTokens": [
              "the symposium today.",
              "is attending",
              "several distinguished economic delegates,",
              "The minister, along with"
            ],
            "explanation": "Intervening phrases led by 'along with' do not change the singular subject 'minister'."
          },
          {
            "id": "subject-verb-agreement_ex3_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Ten thousand dollars was allocated to the community library's digital archive project.",
            "correctSequence": [
              "Ten thousand dollars",
              "was allocated to",
              "the community library's",
              "digital archive project."
            ],
            "shuffledTokens": [
              "the community library's",
              "was allocated to",
              "digital archive project.",
              "Ten thousand dollars"
            ],
            "explanation": "Sums of money functioning as a single collective grant take a singular verb: 'was allocated'."
          },
          {
            "id": "subject-verb-agreement_ex3_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The criteria used to assess tertiary applicants have become noticeably more competitive.",
            "correctSequence": [
              "The criteria used to assess",
              "tertiary applicants",
              "have become noticeably",
              "more competitive."
            ],
            "shuffledTokens": [
              "have become noticeably",
              "more competitive.",
              "The criteria used to assess",
              "tertiary applicants"
            ],
            "explanation": "'Criteria' is the plural form of 'criterion' and takes the plural verb 'have become'."
          },
          {
            "id": "subject-verb-agreement_ex3_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the primary author nor the contributing editor is accountable for the factual inaccuracy.",
            "correctSequence": [
              "Neither the primary author",
              "nor the contributing editor",
              "is accountable for",
              "the factual inaccuracy."
            ],
            "shuffledTokens": [
              "the factual inaccuracy.",
              "is accountable for",
              "Neither the primary author",
              "nor the contributing editor"
            ],
            "explanation": "Both subjects are singular, so 'neither... nor' takes the singular verb 'is'."
          },
          {
            "id": "subject-verb-agreement_ex3_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A diverse range of extracurricular vocational opportunities is provided to secondary students.",
            "correctSequence": [
              "A diverse range of",
              "extracurricular vocational opportunities",
              "is provided to",
              "secondary students."
            ],
            "shuffledTokens": [
              "extracurricular vocational opportunities",
              "secondary students.",
              "A diverse range of",
              "is provided to"
            ],
            "explanation": "'A diverse range' takes a singular verb in academic prose: 'is provided'."
          },
          {
            "id": "subject-verb-agreement_ex3_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Overcoming severe macroeconomic downturns and recessions demands resilient fiscal policy frameworks.",
            "correctSequence": [
              "Overcoming severe macroeconomic",
              "downturns and recessions",
              "demands resilient",
              "fiscal policy frameworks."
            ],
            "shuffledTokens": [
              "downturns and recessions",
              "fiscal policy frameworks.",
              "Overcoming severe macroeconomic",
              "demands resilient"
            ],
            "explanation": "The gerund subject 'Overcoming...' takes the singular verb 'demands'."
          },
          {
            "id": "subject-verb-agreement_ex3_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The Committee on Environmental Ethics has released its annual report regarding industrial carbon footprints.",
            "correctSequence": [
              "The Committee on Environmental Ethics",
              "has released its annual report",
              "regarding industrial",
              "carbon footprints."
            ],
            "shuffledTokens": [
              "regarding industrial",
              "The Committee on Environmental Ethics",
              "has released its annual report",
              "carbon footprints."
            ],
            "explanation": "The collective noun 'Committee' acting as a unified entity takes the singular verb 'has released'."
          },
          {
            "id": "subject-verb-agreement_ex3_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Every student and instructor in the biological laboratory is required to wear protective goggles.",
            "correctSequence": [
              "Every student and instructor",
              "in the biological laboratory",
              "is required to wear",
              "protective goggles."
            ],
            "shuffledTokens": [
              "is required to wear",
              "Every student and instructor",
              "in the biological laboratory",
              "protective goggles."
            ],
            "explanation": "Subjects modified by 'Every' are grammatically singular and require 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex3_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Introducing automated robotic sorting systems in warehouses ___ substantial operational capital.",
            "answer": "demands",
            "acceptableAnswers": [
              "demands",
              "demands",
              "DEMANDS"
            ],
            "options": [
              "demands",
              "demand",
              "are demanding",
              "have demanded"
            ],
            "explanation": "A gerund phrase ('Introducing automated robotic sorting systems') functions as a singular subject."
          },
          {
            "id": "subject-verb-agreement_ex3_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Each of the experimental test subjects ___ assigned to a distinct control environment.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "was",
              "were",
              "have been",
              "are"
            ],
            "explanation": "'Each' is an indefinite pronoun that strictly takes a singular verb: 'was'."
          },
          {
            "id": "subject-verb-agreement_ex3_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lead investigator, accompanied by three junior researchers, ___ the symposium today.",
            "answer": "is attending",
            "acceptableAnswers": [
              "is attending",
              "is attending",
              "IS ATTENDING"
            ],
            "options": [
              "attend",
              "have attended",
              "are attending",
              "is attending"
            ],
            "explanation": "Intervening phrases like 'accompanied by' do not change the singular subject 'lead investigator'."
          },
          {
            "id": "subject-verb-agreement_ex3_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Fifty liters of distilled water ___ consumed during the chemical distillation process.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "have been",
              "are",
              "was",
              "were"
            ],
            "explanation": "Quantities of volume considered as a single aggregate mass take a singular verb: 'was'."
          },
          {
            "id": "subject-verb-agreement_ex3_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The scientific data collected from the polar expeditions ___ accessible to international researchers.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "is",
              "was",
              "has been",
              "are"
            ],
            "explanation": "In academic IELTS context, 'data' is treated as plural in formal scientific writing, agreeing with 'are'."
          },
          {
            "id": "subject-verb-agreement_ex3_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Neither the proposed budget cuts nor the suggested staff reductions ___ acceptable to the union.",
            "answer": "were",
            "acceptableAnswers": [
              "were",
              "were",
              "WERE"
            ],
            "options": [
              "was",
              "were",
              "has been",
              "is"
            ],
            "explanation": "Both subjects ('cuts' and 'reductions') are plural, taking 'were'."
          },
          {
            "id": "subject-verb-agreement_ex3_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The diversity of species inhabiting the rainforest canopy ___ breathtaking ecological complexity.",
            "answer": "illustrates",
            "acceptableAnswers": [
              "illustrates",
              "illustrates",
              "ILLUSTRATES"
            ],
            "options": [
              "illustrates",
              "illustrate",
              "are illustrating",
              "have illustrated"
            ],
            "explanation": "The head noun of the subject is 'diversity' (singular), requiring 'illustrates'."
          },
          {
            "id": "subject-verb-agreement_ex3_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "A vast majority of the participants ___ in favor of stricter maritime fishing quotas.",
            "answer": "were",
            "acceptableAnswers": [
              "were",
              "were",
              "WERE"
            ],
            "options": [
              "were",
              "was",
              "is",
              "has been"
            ],
            "explanation": "'A majority of' followed by a countable plural noun ('participants') takes 'were'."
          },
          {
            "id": "subject-verb-agreement_ex3_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Developing sustainable urban transit networks ___ thorough municipal deliberation.",
            "answer": "necessitates",
            "acceptableAnswers": [
              "necessitates",
              "necessitates",
              "NECESSITATES"
            ],
            "options": [
              "are necessitating",
              "necessitate",
              "necessitates",
              "have necessitated"
            ],
            "explanation": "The gerund subject 'Developing...' requires the third-person singular verb 'necessitates'."
          },
          {
            "id": "subject-verb-agreement_ex3_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The jury ___ deliberating for twelve hours before arriving at a consensus.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "was",
              "have been",
              "were",
              "are"
            ],
            "explanation": "The collective noun 'jury' acting as a unified judicial body takes the singular verb 'was'."
          }
        ]
      },
      {
        "id": "subject-verb-agreement_ex_4",
        "number": 4,
        "title": "Exercise 4",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "subject-verb-agreement_ex4_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The minister, along with several distinguished economic delegates, is attending the symposium today.",
            "correctSequence": [
              "The minister, along with",
              "several distinguished economic delegates,",
              "is attending",
              "the symposium today."
            ],
            "shuffledTokens": [
              "The minister, along with",
              "several distinguished economic delegates,",
              "the symposium today.",
              "is attending"
            ],
            "explanation": "Intervening phrases led by 'along with' do not change the singular subject 'minister'."
          },
          {
            "id": "subject-verb-agreement_ex4_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Ten thousand dollars was allocated to the community library's digital archive project.",
            "correctSequence": [
              "Ten thousand dollars",
              "was allocated to",
              "the community library's",
              "digital archive project."
            ],
            "shuffledTokens": [
              "Ten thousand dollars",
              "was allocated to",
              "digital archive project.",
              "the community library's"
            ],
            "explanation": "Sums of money functioning as a single collective grant take a singular verb: 'was allocated'."
          },
          {
            "id": "subject-verb-agreement_ex4_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The criteria used to assess tertiary applicants have become noticeably more competitive.",
            "correctSequence": [
              "The criteria used to assess",
              "tertiary applicants",
              "have become noticeably",
              "more competitive."
            ],
            "shuffledTokens": [
              "The criteria used to assess",
              "more competitive.",
              "have become noticeably",
              "tertiary applicants"
            ],
            "explanation": "'Criteria' is the plural form of 'criterion' and takes the plural verb 'have become'."
          },
          {
            "id": "subject-verb-agreement_ex4_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the primary author nor the contributing editor is accountable for the factual inaccuracy.",
            "correctSequence": [
              "Neither the primary author",
              "nor the contributing editor",
              "is accountable for",
              "the factual inaccuracy."
            ],
            "shuffledTokens": [
              "Neither the primary author",
              "the factual inaccuracy.",
              "is accountable for",
              "nor the contributing editor"
            ],
            "explanation": "Both subjects are singular, so 'neither... nor' takes the singular verb 'is'."
          },
          {
            "id": "subject-verb-agreement_ex4_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A diverse range of extracurricular vocational opportunities is provided to secondary students.",
            "correctSequence": [
              "A diverse range of",
              "extracurricular vocational opportunities",
              "is provided to",
              "secondary students."
            ],
            "shuffledTokens": [
              "secondary students.",
              "is provided to",
              "extracurricular vocational opportunities",
              "A diverse range of"
            ],
            "explanation": "'A diverse range' takes a singular verb in academic prose: 'is provided'."
          },
          {
            "id": "subject-verb-agreement_ex4_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Overcoming severe macroeconomic downturns and recessions demands resilient fiscal policy frameworks.",
            "correctSequence": [
              "Overcoming severe macroeconomic",
              "downturns and recessions",
              "demands resilient",
              "fiscal policy frameworks."
            ],
            "shuffledTokens": [
              "fiscal policy frameworks.",
              "demands resilient",
              "downturns and recessions",
              "Overcoming severe macroeconomic"
            ],
            "explanation": "The gerund subject 'Overcoming...' takes the singular verb 'demands'."
          },
          {
            "id": "subject-verb-agreement_ex4_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The Committee on Environmental Ethics has released its annual report regarding industrial carbon footprints.",
            "correctSequence": [
              "The Committee on Environmental Ethics",
              "has released its annual report",
              "regarding industrial",
              "carbon footprints."
            ],
            "shuffledTokens": [
              "carbon footprints.",
              "regarding industrial",
              "has released its annual report",
              "The Committee on Environmental Ethics"
            ],
            "explanation": "The collective noun 'Committee' acting as a unified entity takes the singular verb 'has released'."
          },
          {
            "id": "subject-verb-agreement_ex4_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Every student and instructor in the biological laboratory is required to wear protective goggles.",
            "correctSequence": [
              "Every student and instructor",
              "in the biological laboratory",
              "is required to wear",
              "protective goggles."
            ],
            "shuffledTokens": [
              "is required to wear",
              "in the biological laboratory",
              "protective goggles.",
              "Every student and instructor"
            ],
            "explanation": "Subjects modified by 'Every' are grammatically singular and require 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex4_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The influx of skilled migrants into industrialized urban centers stimulates local economic productivity.",
            "correctSequence": [
              "The influx of skilled migrants",
              "into industrialized urban centers",
              "stimulates local",
              "economic productivity."
            ],
            "shuffledTokens": [
              "economic productivity.",
              "stimulates local",
              "The influx of skilled migrants",
              "into industrialized urban centers"
            ],
            "explanation": "The singular noun 'influx' governs the verb 'stimulates', regardless of the intervening plural 'migrants'."
          },
          {
            "id": "subject-verb-agreement_ex4_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the regional managers nor the executive director has approved the corporate merger.",
            "correctSequence": [
              "Neither the regional managers",
              "nor the executive director",
              "has approved",
              "the corporate merger."
            ],
            "shuffledTokens": [
              "nor the executive director",
              "the corporate merger.",
              "Neither the regional managers",
              "has approved"
            ],
            "explanation": "The verb agrees with the nearest subject 'director' (singular), taking 'has approved'."
          },
          {
            "id": "subject-verb-agreement_ex4_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lead investigator, accompanied by three junior researchers, ___ the symposium today.",
            "answer": "is attending",
            "acceptableAnswers": [
              "is attending",
              "is attending",
              "IS ATTENDING"
            ],
            "options": [
              "have attended",
              "is attending",
              "attend",
              "are attending"
            ],
            "explanation": "Intervening phrases like 'accompanied by' do not change the singular subject 'lead investigator'."
          },
          {
            "id": "subject-verb-agreement_ex4_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Fifty liters of distilled water ___ consumed during the chemical distillation process.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "have been",
              "are",
              "was",
              "were"
            ],
            "explanation": "Quantities of volume considered as a single aggregate mass take a singular verb: 'was'."
          },
          {
            "id": "subject-verb-agreement_ex4_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The scientific data collected from the polar expeditions ___ accessible to international researchers.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "is",
              "are",
              "was",
              "has been"
            ],
            "explanation": "In academic IELTS context, 'data' is treated as plural in formal scientific writing, agreeing with 'are'."
          },
          {
            "id": "subject-verb-agreement_ex4_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Neither the proposed budget cuts nor the suggested staff reductions ___ acceptable to the union.",
            "answer": "were",
            "acceptableAnswers": [
              "were",
              "were",
              "WERE"
            ],
            "options": [
              "were",
              "was",
              "is",
              "has been"
            ],
            "explanation": "Both subjects ('cuts' and 'reductions') are plural, taking 'were'."
          },
          {
            "id": "subject-verb-agreement_ex4_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The diversity of species inhabiting the rainforest canopy ___ breathtaking ecological complexity.",
            "answer": "illustrates",
            "acceptableAnswers": [
              "illustrates",
              "illustrates",
              "ILLUSTRATES"
            ],
            "options": [
              "illustrates",
              "illustrate",
              "are illustrating",
              "have illustrated"
            ],
            "explanation": "The head noun of the subject is 'diversity' (singular), requiring 'illustrates'."
          },
          {
            "id": "subject-verb-agreement_ex4_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "A vast majority of the participants ___ in favor of stricter maritime fishing quotas.",
            "answer": "were",
            "acceptableAnswers": [
              "were",
              "were",
              "WERE"
            ],
            "options": [
              "were",
              "was",
              "is",
              "has been"
            ],
            "explanation": "'A majority of' followed by a countable plural noun ('participants') takes 'were'."
          },
          {
            "id": "subject-verb-agreement_ex4_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Developing sustainable urban transit networks ___ thorough municipal deliberation.",
            "answer": "necessitates",
            "acceptableAnswers": [
              "necessitates",
              "necessitates",
              "NECESSITATES"
            ],
            "options": [
              "have necessitated",
              "necessitate",
              "necessitates",
              "are necessitating"
            ],
            "explanation": "The gerund subject 'Developing...' requires the third-person singular verb 'necessitates'."
          },
          {
            "id": "subject-verb-agreement_ex4_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The jury ___ deliberating for twelve hours before arriving at a consensus.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "have been",
              "are",
              "were",
              "was"
            ],
            "explanation": "The collective noun 'jury' acting as a unified judicial body takes the singular verb 'was'."
          },
          {
            "id": "subject-verb-agreement_ex4_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Five miles of rugged mountain trail ___ covered by the conservation scouts each morning.",
            "answer": "is",
            "acceptableAnswers": [
              "is",
              "is",
              "IS"
            ],
            "options": [
              "were",
              "have been",
              "is",
              "are"
            ],
            "explanation": "Units of distance considered as a single continuous measurement take a singular verb: 'is'."
          },
          {
            "id": "subject-verb-agreement_ex4_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Every applicant for the overseas academic fellowship ___ required to present two references.",
            "answer": "is",
            "acceptableAnswers": [
              "is",
              "is",
              "IS"
            ],
            "options": [
              "are",
              "have been",
              "were",
              "is"
            ],
            "explanation": "Nouns qualified by 'Every' are singular, requiring 'is required'."
          }
        ]
      },
      {
        "id": "subject-verb-agreement_ex_5",
        "number": 5,
        "title": "Exercise 5",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "subject-verb-agreement_ex5_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The criteria used to assess tertiary applicants have become noticeably more competitive.",
            "correctSequence": [
              "The criteria used to assess",
              "tertiary applicants",
              "have become noticeably",
              "more competitive."
            ],
            "shuffledTokens": [
              "tertiary applicants",
              "The criteria used to assess",
              "have become noticeably",
              "more competitive."
            ],
            "explanation": "'Criteria' is the plural form of 'criterion' and takes the plural verb 'have become'."
          },
          {
            "id": "subject-verb-agreement_ex5_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the primary author nor the contributing editor is accountable for the factual inaccuracy.",
            "correctSequence": [
              "Neither the primary author",
              "nor the contributing editor",
              "is accountable for",
              "the factual inaccuracy."
            ],
            "shuffledTokens": [
              "nor the contributing editor",
              "Neither the primary author",
              "is accountable for",
              "the factual inaccuracy."
            ],
            "explanation": "Both subjects are singular, so 'neither... nor' takes the singular verb 'is'."
          },
          {
            "id": "subject-verb-agreement_ex5_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A diverse range of extracurricular vocational opportunities is provided to secondary students.",
            "correctSequence": [
              "A diverse range of",
              "extracurricular vocational opportunities",
              "is provided to",
              "secondary students."
            ],
            "shuffledTokens": [
              "extracurricular vocational opportunities",
              "A diverse range of",
              "is provided to",
              "secondary students."
            ],
            "explanation": "'A diverse range' takes a singular verb in academic prose: 'is provided'."
          },
          {
            "id": "subject-verb-agreement_ex5_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Overcoming severe macroeconomic downturns and recessions demands resilient fiscal policy frameworks.",
            "correctSequence": [
              "Overcoming severe macroeconomic",
              "downturns and recessions",
              "demands resilient",
              "fiscal policy frameworks."
            ],
            "shuffledTokens": [
              "downturns and recessions",
              "Overcoming severe macroeconomic",
              "demands resilient",
              "fiscal policy frameworks."
            ],
            "explanation": "The gerund subject 'Overcoming...' takes the singular verb 'demands'."
          },
          {
            "id": "subject-verb-agreement_ex5_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The Committee on Environmental Ethics has released its annual report regarding industrial carbon footprints.",
            "correctSequence": [
              "The Committee on Environmental Ethics",
              "has released its annual report",
              "regarding industrial",
              "carbon footprints."
            ],
            "shuffledTokens": [
              "The Committee on Environmental Ethics",
              "has released its annual report",
              "carbon footprints.",
              "regarding industrial"
            ],
            "explanation": "The collective noun 'Committee' acting as a unified entity takes the singular verb 'has released'."
          },
          {
            "id": "subject-verb-agreement_ex5_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Every student and instructor in the biological laboratory is required to wear protective goggles.",
            "correctSequence": [
              "Every student and instructor",
              "in the biological laboratory",
              "is required to wear",
              "protective goggles."
            ],
            "shuffledTokens": [
              "Every student and instructor",
              "in the biological laboratory",
              "protective goggles.",
              "is required to wear"
            ],
            "explanation": "Subjects modified by 'Every' are grammatically singular and require 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex5_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The influx of skilled migrants into industrialized urban centers stimulates local economic productivity.",
            "correctSequence": [
              "The influx of skilled migrants",
              "into industrialized urban centers",
              "stimulates local",
              "economic productivity."
            ],
            "shuffledTokens": [
              "The influx of skilled migrants",
              "economic productivity.",
              "stimulates local",
              "into industrialized urban centers"
            ],
            "explanation": "The singular noun 'influx' governs the verb 'stimulates', regardless of the intervening plural 'migrants'."
          },
          {
            "id": "subject-verb-agreement_ex5_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the regional managers nor the executive director has approved the corporate merger.",
            "correctSequence": [
              "Neither the regional managers",
              "nor the executive director",
              "has approved",
              "the corporate merger."
            ],
            "shuffledTokens": [
              "Neither the regional managers",
              "the corporate merger.",
              "has approved",
              "nor the executive director"
            ],
            "explanation": "The verb agrees with the nearest subject 'director' (singular), taking 'has approved'."
          },
          {
            "id": "subject-verb-agreement_ex5_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Preserving endangered indigenous languages across generations constitutes a vital cultural priority.",
            "correctSequence": [
              "Preserving endangered indigenous",
              "languages across generations",
              "constitutes a vital",
              "cultural priority."
            ],
            "shuffledTokens": [
              "cultural priority.",
              "constitutes a vital",
              "languages across generations",
              "Preserving endangered indigenous"
            ],
            "explanation": "The gerund 'Preserving...' functions as a singular subject taking 'constitutes'."
          },
          {
            "id": "subject-verb-agreement_ex5_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A majority of the surveyed workforce participants prefer flexible remote working arrangements.",
            "correctSequence": [
              "A majority of the surveyed",
              "workforce participants",
              "prefer flexible remote",
              "working arrangements."
            ],
            "shuffledTokens": [
              "working arrangements.",
              "prefer flexible remote",
              "workforce participants",
              "A majority of the surveyed"
            ],
            "explanation": "'A majority of' followed by a plural noun ('participants') takes the plural verb 'prefer'."
          },
          {
            "id": "subject-verb-agreement_ex5_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The scientific data collected from the polar expeditions ___ accessible to international researchers.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "are",
              "is",
              "has been",
              "was"
            ],
            "explanation": "In academic IELTS context, 'data' is treated as plural in formal scientific writing, agreeing with 'are'."
          },
          {
            "id": "subject-verb-agreement_ex5_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Neither the proposed budget cuts nor the suggested staff reductions ___ acceptable to the union.",
            "answer": "were",
            "acceptableAnswers": [
              "were",
              "were",
              "WERE"
            ],
            "options": [
              "were",
              "was",
              "is",
              "has been"
            ],
            "explanation": "Both subjects ('cuts' and 'reductions') are plural, taking 'were'."
          },
          {
            "id": "subject-verb-agreement_ex5_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The diversity of species inhabiting the rainforest canopy ___ breathtaking ecological complexity.",
            "answer": "illustrates",
            "acceptableAnswers": [
              "illustrates",
              "illustrates",
              "ILLUSTRATES"
            ],
            "options": [
              "illustrates",
              "illustrate",
              "are illustrating",
              "have illustrated"
            ],
            "explanation": "The head noun of the subject is 'diversity' (singular), requiring 'illustrates'."
          },
          {
            "id": "subject-verb-agreement_ex5_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "A vast majority of the participants ___ in favor of stricter maritime fishing quotas.",
            "answer": "were",
            "acceptableAnswers": [
              "were",
              "were",
              "WERE"
            ],
            "options": [
              "is",
              "was",
              "were",
              "has been"
            ],
            "explanation": "'A majority of' followed by a countable plural noun ('participants') takes 'were'."
          },
          {
            "id": "subject-verb-agreement_ex5_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Developing sustainable urban transit networks ___ thorough municipal deliberation.",
            "answer": "necessitates",
            "acceptableAnswers": [
              "necessitates",
              "necessitates",
              "NECESSITATES"
            ],
            "options": [
              "necessitates",
              "have necessitated",
              "necessitate",
              "are necessitating"
            ],
            "explanation": "The gerund subject 'Developing...' requires the third-person singular verb 'necessitates'."
          },
          {
            "id": "subject-verb-agreement_ex5_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The jury ___ deliberating for twelve hours before arriving at a consensus.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "are",
              "was",
              "have been",
              "were"
            ],
            "explanation": "The collective noun 'jury' acting as a unified judicial body takes the singular verb 'was'."
          },
          {
            "id": "subject-verb-agreement_ex5_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Five miles of rugged mountain trail ___ covered by the conservation scouts each morning.",
            "answer": "is",
            "acceptableAnswers": [
              "is",
              "is",
              "IS"
            ],
            "options": [
              "were",
              "have been",
              "is",
              "are"
            ],
            "explanation": "Units of distance considered as a single continuous measurement take a singular verb: 'is'."
          },
          {
            "id": "subject-verb-agreement_ex5_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Every applicant for the overseas academic fellowship ___ required to present two references.",
            "answer": "is",
            "acceptableAnswers": [
              "is",
              "is",
              "IS"
            ],
            "options": [
              "are",
              "is",
              "have been",
              "were"
            ],
            "explanation": "Nouns qualified by 'Every' are singular, requiring 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex5_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The influx of foreign capital into regional manufacturing ___ domestic employment opportunities.",
            "answer": "bolsters",
            "acceptableAnswers": [
              "bolsters",
              "bolsters",
              "BOLSTERS"
            ],
            "options": [
              "bolsters",
              "bolster",
              "are bolstering",
              "have bolstered"
            ],
            "explanation": "The subject 'influx' is singular, hence the verb is 'bolsters'."
          },
          {
            "id": "subject-verb-agreement_ex5_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Either the laboratory technician or the lead scientists ___ responsible for calibrating the sensors.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "are",
              "is",
              "was",
              "has been"
            ],
            "explanation": "With 'either... or', the verb agrees with the nearer subject ('lead scientists', plural)."
          }
        ]
      },
      {
        "id": "subject-verb-agreement_ex_6",
        "number": 6,
        "title": "Exercise 6",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "subject-verb-agreement_ex6_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A diverse range of extracurricular vocational opportunities is provided to secondary students.",
            "correctSequence": [
              "A diverse range of",
              "extracurricular vocational opportunities",
              "is provided to",
              "secondary students."
            ],
            "shuffledTokens": [
              "extracurricular vocational opportunities",
              "A diverse range of",
              "is provided to",
              "secondary students."
            ],
            "explanation": "'A diverse range' takes a singular verb in academic prose: 'is provided'."
          },
          {
            "id": "subject-verb-agreement_ex6_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Overcoming severe macroeconomic downturns and recessions demands resilient fiscal policy frameworks.",
            "correctSequence": [
              "Overcoming severe macroeconomic",
              "downturns and recessions",
              "demands resilient",
              "fiscal policy frameworks."
            ],
            "shuffledTokens": [
              "downturns and recessions",
              "Overcoming severe macroeconomic",
              "demands resilient",
              "fiscal policy frameworks."
            ],
            "explanation": "The gerund subject 'Overcoming...' takes the singular verb 'demands'."
          },
          {
            "id": "subject-verb-agreement_ex6_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The Committee on Environmental Ethics has released its annual report regarding industrial carbon footprints.",
            "correctSequence": [
              "The Committee on Environmental Ethics",
              "has released its annual report",
              "regarding industrial",
              "carbon footprints."
            ],
            "shuffledTokens": [
              "has released its annual report",
              "The Committee on Environmental Ethics",
              "regarding industrial",
              "carbon footprints."
            ],
            "explanation": "The collective noun 'Committee' acting as a unified entity takes the singular verb 'has released'."
          },
          {
            "id": "subject-verb-agreement_ex6_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Every student and instructor in the biological laboratory is required to wear protective goggles.",
            "correctSequence": [
              "Every student and instructor",
              "in the biological laboratory",
              "is required to wear",
              "protective goggles."
            ],
            "shuffledTokens": [
              "in the biological laboratory",
              "Every student and instructor",
              "is required to wear",
              "protective goggles."
            ],
            "explanation": "Subjects modified by 'Every' are grammatically singular and require 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex6_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The influx of skilled migrants into industrialized urban centers stimulates local economic productivity.",
            "correctSequence": [
              "The influx of skilled migrants",
              "into industrialized urban centers",
              "stimulates local",
              "economic productivity."
            ],
            "shuffledTokens": [
              "into industrialized urban centers",
              "The influx of skilled migrants",
              "stimulates local",
              "economic productivity."
            ],
            "explanation": "The singular noun 'influx' governs the verb 'stimulates', regardless of the intervening plural 'migrants'."
          },
          {
            "id": "subject-verb-agreement_ex6_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the regional managers nor the executive director has approved the corporate merger.",
            "correctSequence": [
              "Neither the regional managers",
              "nor the executive director",
              "has approved",
              "the corporate merger."
            ],
            "shuffledTokens": [
              "nor the executive director",
              "Neither the regional managers",
              "has approved",
              "the corporate merger."
            ],
            "explanation": "The verb agrees with the nearest subject 'director' (singular), taking 'has approved'."
          },
          {
            "id": "subject-verb-agreement_ex6_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Preserving endangered indigenous languages across generations constitutes a vital cultural priority.",
            "correctSequence": [
              "Preserving endangered indigenous",
              "languages across generations",
              "constitutes a vital",
              "cultural priority."
            ],
            "shuffledTokens": [
              "languages across generations",
              "Preserving endangered indigenous",
              "constitutes a vital",
              "cultural priority."
            ],
            "explanation": "The gerund 'Preserving...' functions as a singular subject taking 'constitutes'."
          },
          {
            "id": "subject-verb-agreement_ex6_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A majority of the surveyed workforce participants prefer flexible remote working arrangements.",
            "correctSequence": [
              "A majority of the surveyed",
              "workforce participants",
              "prefer flexible remote",
              "working arrangements."
            ],
            "shuffledTokens": [
              "A majority of the surveyed",
              "workforce participants",
              "working arrangements.",
              "prefer flexible remote"
            ],
            "explanation": "'A majority of' followed by a plural noun ('participants') takes the plural verb 'prefer'."
          },
          {
            "id": "subject-verb-agreement_ex6_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The quality of scientific evidence presented during the trial was deemed insufficient by the magistrate.",
            "correctSequence": [
              "The quality of scientific evidence",
              "presented during the trial",
              "was deemed insufficient",
              "by the magistrate."
            ],
            "shuffledTokens": [
              "The quality of scientific evidence",
              "presented during the trial",
              "by the magistrate.",
              "was deemed insufficient"
            ],
            "explanation": "The singular subject 'quality' requires the singular verb 'was deemed'."
          },
          {
            "id": "subject-verb-agreement_ex6_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Three years of intensive study is required to obtain the specialized postgraduate medical diploma.",
            "correctSequence": [
              "Three years of intensive study",
              "is required to obtain",
              "the specialized postgraduate",
              "medical diploma."
            ],
            "shuffledTokens": [
              "Three years of intensive study",
              "is required to obtain",
              "medical diploma.",
              "the specialized postgraduate"
            ],
            "explanation": "A duration of time considered as a single unified period takes a singular verb: 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex6_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The diversity of species inhabiting the rainforest canopy ___ breathtaking ecological complexity.",
            "answer": "illustrates",
            "acceptableAnswers": [
              "illustrates",
              "illustrates",
              "ILLUSTRATES"
            ],
            "options": [
              "illustrates",
              "illustrate",
              "are illustrating",
              "have illustrated"
            ],
            "explanation": "The head noun of the subject is 'diversity' (singular), requiring 'illustrates'."
          },
          {
            "id": "subject-verb-agreement_ex6_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "A vast majority of the participants ___ in favor of stricter maritime fishing quotas.",
            "answer": "were",
            "acceptableAnswers": [
              "were",
              "were",
              "WERE"
            ],
            "options": [
              "has been",
              "was",
              "were",
              "is"
            ],
            "explanation": "'A majority of' followed by a countable plural noun ('participants') takes 'were'."
          },
          {
            "id": "subject-verb-agreement_ex6_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Developing sustainable urban transit networks ___ thorough municipal deliberation.",
            "answer": "necessitates",
            "acceptableAnswers": [
              "necessitates",
              "necessitates",
              "NECESSITATES"
            ],
            "options": [
              "have necessitated",
              "are necessitating",
              "necessitate",
              "necessitates"
            ],
            "explanation": "The gerund subject 'Developing...' requires the third-person singular verb 'necessitates'."
          },
          {
            "id": "subject-verb-agreement_ex6_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The jury ___ deliberating for twelve hours before arriving at a consensus.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "have been",
              "are",
              "was",
              "were"
            ],
            "explanation": "The collective noun 'jury' acting as a unified judicial body takes the singular verb 'was'."
          },
          {
            "id": "subject-verb-agreement_ex6_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Five miles of rugged mountain trail ___ covered by the conservation scouts each morning.",
            "answer": "is",
            "acceptableAnswers": [
              "is",
              "is",
              "IS"
            ],
            "options": [
              "are",
              "were",
              "have been",
              "is"
            ],
            "explanation": "Units of distance considered as a single continuous measurement take a singular verb: 'is'."
          },
          {
            "id": "subject-verb-agreement_ex6_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Every applicant for the overseas academic fellowship ___ required to present two references.",
            "answer": "is",
            "acceptableAnswers": [
              "is",
              "is",
              "IS"
            ],
            "options": [
              "is",
              "are",
              "were",
              "have been"
            ],
            "explanation": "Nouns qualified by 'Every' are singular, requiring 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex6_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The influx of foreign capital into regional manufacturing ___ domestic employment opportunities.",
            "answer": "bolsters",
            "acceptableAnswers": [
              "bolsters",
              "bolsters",
              "BOLSTERS"
            ],
            "options": [
              "bolsters",
              "bolster",
              "are bolstering",
              "have bolstered"
            ],
            "explanation": "The subject 'influx' is singular, hence the verb is 'bolsters'."
          },
          {
            "id": "subject-verb-agreement_ex6_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Either the laboratory technician or the lead scientists ___ responsible for calibrating the sensors.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "are",
              "is",
              "was",
              "has been"
            ],
            "explanation": "With 'either... or', the verb agrees with the nearer subject ('lead scientists', plural)."
          },
          {
            "id": "subject-verb-agreement_ex6_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Analyzing large linguistic datasets ___ sophisticated computational algorithms.",
            "answer": "requires",
            "acceptableAnswers": [
              "requires",
              "requires",
              "REQUIRES"
            ],
            "options": [
              "are requiring",
              "require",
              "requires",
              "have required"
            ],
            "explanation": "Gerund subjects take a singular verb ('requires')."
          },
          {
            "id": "subject-verb-agreement_ex6_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The guidelines issued by the international health authority ___ universally adhered to.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "are",
              "has been",
              "is",
              "was"
            ],
            "explanation": "The plural subject 'guidelines' requires the plural auxiliary 'are'."
          }
        ]
      },
      {
        "id": "subject-verb-agreement_ex_7",
        "number": 7,
        "title": "Exercise 7",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "subject-verb-agreement_ex7_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The Committee on Environmental Ethics has released its annual report regarding industrial carbon footprints.",
            "correctSequence": [
              "The Committee on Environmental Ethics",
              "has released its annual report",
              "regarding industrial",
              "carbon footprints."
            ],
            "shuffledTokens": [
              "has released its annual report",
              "carbon footprints.",
              "The Committee on Environmental Ethics",
              "regarding industrial"
            ],
            "explanation": "The collective noun 'Committee' acting as a unified entity takes the singular verb 'has released'."
          },
          {
            "id": "subject-verb-agreement_ex7_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Every student and instructor in the biological laboratory is required to wear protective goggles.",
            "correctSequence": [
              "Every student and instructor",
              "in the biological laboratory",
              "is required to wear",
              "protective goggles."
            ],
            "shuffledTokens": [
              "is required to wear",
              "Every student and instructor",
              "in the biological laboratory",
              "protective goggles."
            ],
            "explanation": "Subjects modified by 'Every' are grammatically singular and require 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex7_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The influx of skilled migrants into industrialized urban centers stimulates local economic productivity.",
            "correctSequence": [
              "The influx of skilled migrants",
              "into industrialized urban centers",
              "stimulates local",
              "economic productivity."
            ],
            "shuffledTokens": [
              "stimulates local",
              "The influx of skilled migrants",
              "into industrialized urban centers",
              "economic productivity."
            ],
            "explanation": "The singular noun 'influx' governs the verb 'stimulates', regardless of the intervening plural 'migrants'."
          },
          {
            "id": "subject-verb-agreement_ex7_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the regional managers nor the executive director has approved the corporate merger.",
            "correctSequence": [
              "Neither the regional managers",
              "nor the executive director",
              "has approved",
              "the corporate merger."
            ],
            "shuffledTokens": [
              "nor the executive director",
              "Neither the regional managers",
              "has approved",
              "the corporate merger."
            ],
            "explanation": "The verb agrees with the nearest subject 'director' (singular), taking 'has approved'."
          },
          {
            "id": "subject-verb-agreement_ex7_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Preserving endangered indigenous languages across generations constitutes a vital cultural priority.",
            "correctSequence": [
              "Preserving endangered indigenous",
              "languages across generations",
              "constitutes a vital",
              "cultural priority."
            ],
            "shuffledTokens": [
              "languages across generations",
              "Preserving endangered indigenous",
              "constitutes a vital",
              "cultural priority."
            ],
            "explanation": "The gerund 'Preserving...' functions as a singular subject taking 'constitutes'."
          },
          {
            "id": "subject-verb-agreement_ex7_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A majority of the surveyed workforce participants prefer flexible remote working arrangements.",
            "correctSequence": [
              "A majority of the surveyed",
              "workforce participants",
              "prefer flexible remote",
              "working arrangements."
            ],
            "shuffledTokens": [
              "workforce participants",
              "A majority of the surveyed",
              "prefer flexible remote",
              "working arrangements."
            ],
            "explanation": "'A majority of' followed by a plural noun ('participants') takes the plural verb 'prefer'."
          },
          {
            "id": "subject-verb-agreement_ex7_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The quality of scientific evidence presented during the trial was deemed insufficient by the magistrate.",
            "correctSequence": [
              "The quality of scientific evidence",
              "presented during the trial",
              "was deemed insufficient",
              "by the magistrate."
            ],
            "shuffledTokens": [
              "presented during the trial",
              "The quality of scientific evidence",
              "was deemed insufficient",
              "by the magistrate."
            ],
            "explanation": "The singular subject 'quality' requires the singular verb 'was deemed'."
          },
          {
            "id": "subject-verb-agreement_ex7_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Three years of intensive study is required to obtain the specialized postgraduate medical diploma.",
            "correctSequence": [
              "Three years of intensive study",
              "is required to obtain",
              "the specialized postgraduate",
              "medical diploma."
            ],
            "shuffledTokens": [
              "is required to obtain",
              "Three years of intensive study",
              "the specialized postgraduate",
              "medical diploma."
            ],
            "explanation": "A duration of time considered as a single unified period takes a singular verb: 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex7_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The rapid expansion of renewable energy infrastructures has diminished fossil fuel dependency.",
            "correctSequence": [
              "The rapid expansion of",
              "renewable energy infrastructures",
              "has diminished",
              "fossil fuel dependency."
            ],
            "shuffledTokens": [
              "renewable energy infrastructures",
              "The rapid expansion of",
              "has diminished",
              "fossil fuel dependency."
            ],
            "explanation": "The singular subject 'expansion' requires the singular verb 'has diminished'."
          },
          {
            "id": "subject-verb-agreement_ex7_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the course tutor nor the undergraduate researchers were cognizant of the updated protocol.",
            "correctSequence": [
              "Neither the course tutor",
              "nor the undergraduate researchers",
              "were cognizant of",
              "the updated protocol."
            ],
            "shuffledTokens": [
              "nor the undergraduate researchers",
              "Neither the course tutor",
              "were cognizant of",
              "the updated protocol."
            ],
            "explanation": "With 'neither... nor', the verb agrees with the plural subject closest to it: 'researchers were'."
          },
          {
            "id": "subject-verb-agreement_ex7_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Developing sustainable urban transit networks ___ thorough municipal deliberation.",
            "answer": "necessitates",
            "acceptableAnswers": [
              "necessitates",
              "necessitates",
              "NECESSITATES"
            ],
            "options": [
              "are necessitating",
              "necessitates",
              "have necessitated",
              "necessitate"
            ],
            "explanation": "The gerund subject 'Developing...' requires the third-person singular verb 'necessitates'."
          },
          {
            "id": "subject-verb-agreement_ex7_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The jury ___ deliberating for twelve hours before arriving at a consensus.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "were",
              "are",
              "have been",
              "was"
            ],
            "explanation": "The collective noun 'jury' acting as a unified judicial body takes the singular verb 'was'."
          },
          {
            "id": "subject-verb-agreement_ex7_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Five miles of rugged mountain trail ___ covered by the conservation scouts each morning.",
            "answer": "is",
            "acceptableAnswers": [
              "is",
              "is",
              "IS"
            ],
            "options": [
              "are",
              "is",
              "were",
              "have been"
            ],
            "explanation": "Units of distance considered as a single continuous measurement take a singular verb: 'is'."
          },
          {
            "id": "subject-verb-agreement_ex7_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Every applicant for the overseas academic fellowship ___ required to present two references.",
            "answer": "is",
            "acceptableAnswers": [
              "is",
              "is",
              "IS"
            ],
            "options": [
              "is",
              "are",
              "were",
              "have been"
            ],
            "explanation": "Nouns qualified by 'Every' are singular, requiring 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex7_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The influx of foreign capital into regional manufacturing ___ domestic employment opportunities.",
            "answer": "bolsters",
            "acceptableAnswers": [
              "bolsters",
              "bolsters",
              "BOLSTERS"
            ],
            "options": [
              "bolsters",
              "bolster",
              "are bolstering",
              "have bolstered"
            ],
            "explanation": "The subject 'influx' is singular, hence the verb is 'bolsters'."
          },
          {
            "id": "subject-verb-agreement_ex7_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Either the laboratory technician or the lead scientists ___ responsible for calibrating the sensors.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "are",
              "is",
              "was",
              "has been"
            ],
            "explanation": "With 'either... or', the verb agrees with the nearer subject ('lead scientists', plural)."
          },
          {
            "id": "subject-verb-agreement_ex7_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Analyzing large linguistic datasets ___ sophisticated computational algorithms.",
            "answer": "requires",
            "acceptableAnswers": [
              "requires",
              "requires",
              "REQUIRES"
            ],
            "options": [
              "have required",
              "require",
              "requires",
              "are requiring"
            ],
            "explanation": "Gerund subjects take a singular verb ('requires')."
          },
          {
            "id": "subject-verb-agreement_ex7_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The guidelines issued by the international health authority ___ universally adhered to.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "has been",
              "was",
              "is",
              "are"
            ],
            "explanation": "The plural subject 'guidelines' requires the plural auxiliary 'are'."
          },
          {
            "id": "subject-verb-agreement_ex7_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The prevalence of anxiety disorders among adolescents ___ noticeably over the past decade.",
            "answer": "has climbed",
            "acceptableAnswers": [
              "has climbed",
              "has climbed",
              "HAS CLIMBED"
            ],
            "options": [
              "climb",
              "are climbing",
              "has climbed",
              "have climbed"
            ],
            "explanation": "The subject is the singular abstract noun 'prevalence', requiring 'has climbed'."
          },
          {
            "id": "subject-verb-agreement_ex7_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "A number of prominent climate scientists ___ that immediate carbon sequestration is imperative.",
            "answer": "contend",
            "acceptableAnswers": [
              "contend",
              "contend",
              "CONTEND"
            ],
            "options": [
              "contends",
              "is contending",
              "contend",
              "contending"
            ],
            "explanation": "'A number of...' acts as a plural quantifier meaning 'several', requiring 'contend'."
          }
        ]
      },
      {
        "id": "subject-verb-agreement_ex_8",
        "number": 8,
        "title": "Exercise 8",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "subject-verb-agreement_ex8_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The influx of skilled migrants into industrialized urban centers stimulates local economic productivity.",
            "correctSequence": [
              "The influx of skilled migrants",
              "into industrialized urban centers",
              "stimulates local",
              "economic productivity."
            ],
            "shuffledTokens": [
              "stimulates local",
              "into industrialized urban centers",
              "economic productivity.",
              "The influx of skilled migrants"
            ],
            "explanation": "The singular noun 'influx' governs the verb 'stimulates', regardless of the intervening plural 'migrants'."
          },
          {
            "id": "subject-verb-agreement_ex8_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the regional managers nor the executive director has approved the corporate merger.",
            "correctSequence": [
              "Neither the regional managers",
              "nor the executive director",
              "has approved",
              "the corporate merger."
            ],
            "shuffledTokens": [
              "the corporate merger.",
              "has approved",
              "Neither the regional managers",
              "nor the executive director"
            ],
            "explanation": "The verb agrees with the nearest subject 'director' (singular), taking 'has approved'."
          },
          {
            "id": "subject-verb-agreement_ex8_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Preserving endangered indigenous languages across generations constitutes a vital cultural priority.",
            "correctSequence": [
              "Preserving endangered indigenous",
              "languages across generations",
              "constitutes a vital",
              "cultural priority."
            ],
            "shuffledTokens": [
              "cultural priority.",
              "constitutes a vital",
              "Preserving endangered indigenous",
              "languages across generations"
            ],
            "explanation": "The gerund 'Preserving...' functions as a singular subject taking 'constitutes'."
          },
          {
            "id": "subject-verb-agreement_ex8_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A majority of the surveyed workforce participants prefer flexible remote working arrangements.",
            "correctSequence": [
              "A majority of the surveyed",
              "workforce participants",
              "prefer flexible remote",
              "working arrangements."
            ],
            "shuffledTokens": [
              "workforce participants",
              "working arrangements.",
              "A majority of the surveyed",
              "prefer flexible remote"
            ],
            "explanation": "'A majority of' followed by a plural noun ('participants') takes the plural verb 'prefer'."
          },
          {
            "id": "subject-verb-agreement_ex8_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The quality of scientific evidence presented during the trial was deemed insufficient by the magistrate.",
            "correctSequence": [
              "The quality of scientific evidence",
              "presented during the trial",
              "was deemed insufficient",
              "by the magistrate."
            ],
            "shuffledTokens": [
              "by the magistrate.",
              "The quality of scientific evidence",
              "presented during the trial",
              "was deemed insufficient"
            ],
            "explanation": "The singular subject 'quality' requires the singular verb 'was deemed'."
          },
          {
            "id": "subject-verb-agreement_ex8_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Three years of intensive study is required to obtain the specialized postgraduate medical diploma.",
            "correctSequence": [
              "Three years of intensive study",
              "is required to obtain",
              "the specialized postgraduate",
              "medical diploma."
            ],
            "shuffledTokens": [
              "the specialized postgraduate",
              "Three years of intensive study",
              "is required to obtain",
              "medical diploma."
            ],
            "explanation": "A duration of time considered as a single unified period takes a singular verb: 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex8_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The rapid expansion of renewable energy infrastructures has diminished fossil fuel dependency.",
            "correctSequence": [
              "The rapid expansion of",
              "renewable energy infrastructures",
              "has diminished",
              "fossil fuel dependency."
            ],
            "shuffledTokens": [
              "has diminished",
              "The rapid expansion of",
              "renewable energy infrastructures",
              "fossil fuel dependency."
            ],
            "explanation": "The singular subject 'expansion' requires the singular verb 'has diminished'."
          },
          {
            "id": "subject-verb-agreement_ex8_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the course tutor nor the undergraduate researchers were cognizant of the updated protocol.",
            "correctSequence": [
              "Neither the course tutor",
              "nor the undergraduate researchers",
              "were cognizant of",
              "the updated protocol."
            ],
            "shuffledTokens": [
              "nor the undergraduate researchers",
              "Neither the course tutor",
              "were cognizant of",
              "the updated protocol."
            ],
            "explanation": "With 'neither... nor', the verb agrees with the plural subject closest to it: 'researchers were'."
          },
          {
            "id": "subject-verb-agreement_ex8_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial number of metropolitan dwellers commute daily via underground transit networks.",
            "correctSequence": [
              "A substantial number of",
              "metropolitan dwellers",
              "commute daily via",
              "underground transit networks."
            ],
            "shuffledTokens": [
              "metropolitan dwellers",
              "A substantial number of",
              "commute daily via",
              "underground transit networks."
            ],
            "explanation": "'A number of...' acts as a plural quantifier and takes the plural verb 'commute'."
          },
          {
            "id": "subject-verb-agreement_ex8_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The total number of registered electric vehicles has escalated exponentially since 2020.",
            "correctSequence": [
              "The total number of",
              "registered electric vehicles",
              "has escalated",
              "exponentially since 2020."
            ],
            "shuffledTokens": [
              "registered electric vehicles",
              "The total number of",
              "has escalated",
              "exponentially since 2020."
            ],
            "explanation": "'The number of...' specifies a single mathematical figure and takes the singular verb 'has escalated'."
          },
          {
            "id": "subject-verb-agreement_ex8_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Five miles of rugged mountain trail ___ covered by the conservation scouts each morning.",
            "answer": "is",
            "acceptableAnswers": [
              "is",
              "is",
              "IS"
            ],
            "options": [
              "is",
              "are",
              "have been",
              "were"
            ],
            "explanation": "Units of distance considered as a single continuous measurement take a singular verb: 'is'."
          },
          {
            "id": "subject-verb-agreement_ex8_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Every applicant for the overseas academic fellowship ___ required to present two references.",
            "answer": "is",
            "acceptableAnswers": [
              "is",
              "is",
              "IS"
            ],
            "options": [
              "is",
              "are",
              "were",
              "have been"
            ],
            "explanation": "Nouns qualified by 'Every' are singular, requiring 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex8_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The influx of foreign capital into regional manufacturing ___ domestic employment opportunities.",
            "answer": "bolsters",
            "acceptableAnswers": [
              "bolsters",
              "bolsters",
              "BOLSTERS"
            ],
            "options": [
              "bolsters",
              "bolster",
              "are bolstering",
              "have bolstered"
            ],
            "explanation": "The subject 'influx' is singular, hence the verb is 'bolsters'."
          },
          {
            "id": "subject-verb-agreement_ex8_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Either the laboratory technician or the lead scientists ___ responsible for calibrating the sensors.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "was",
              "is",
              "are",
              "has been"
            ],
            "explanation": "With 'either... or', the verb agrees with the nearer subject ('lead scientists', plural)."
          },
          {
            "id": "subject-verb-agreement_ex8_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Analyzing large linguistic datasets ___ sophisticated computational algorithms.",
            "answer": "requires",
            "acceptableAnswers": [
              "requires",
              "requires",
              "REQUIRES"
            ],
            "options": [
              "requires",
              "have required",
              "require",
              "are requiring"
            ],
            "explanation": "Gerund subjects take a singular verb ('requires')."
          },
          {
            "id": "subject-verb-agreement_ex8_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The guidelines issued by the international health authority ___ universally adhered to.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "was",
              "are",
              "has been",
              "is"
            ],
            "explanation": "The plural subject 'guidelines' requires the plural auxiliary 'are'."
          },
          {
            "id": "subject-verb-agreement_ex8_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The prevalence of anxiety disorders among adolescents ___ noticeably over the past decade.",
            "answer": "has climbed",
            "acceptableAnswers": [
              "has climbed",
              "has climbed",
              "HAS CLIMBED"
            ],
            "options": [
              "have climbed",
              "are climbing",
              "climb",
              "has climbed"
            ],
            "explanation": "The subject is the singular abstract noun 'prevalence', requiring 'has climbed'."
          },
          {
            "id": "subject-verb-agreement_ex8_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "A number of prominent climate scientists ___ that immediate carbon sequestration is imperative.",
            "answer": "contend",
            "acceptableAnswers": [
              "contend",
              "contend",
              "CONTEND"
            ],
            "options": [
              "contends",
              "contending",
              "is contending",
              "contend"
            ],
            "explanation": "'A number of...' acts as a plural quantifier meaning 'several', requiring 'contend'."
          },
          {
            "id": "subject-verb-agreement_ex8_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Neither the laboratory technicians nor the lead supervisor ___ aware of the chemical leak.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "was",
              "were",
              "are",
              "have been"
            ],
            "explanation": "The verb agrees with the closest subject ('lead supervisor', singular), taking 'was'."
          },
          {
            "id": "subject-verb-agreement_ex8_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The total number of electric charging stations across the province ___ 500 units this quarter.",
            "answer": "exceeds",
            "acceptableAnswers": [
              "exceeds",
              "exceeds",
              "EXCEEDS"
            ],
            "options": [
              "are exceeding",
              "exceed",
              "have exceeded",
              "exceeds"
            ],
            "explanation": "'The number of...' specifies a singular mathematical total and requires 'exceeds'."
          }
        ]
      },
      {
        "id": "subject-verb-agreement_ex_9",
        "number": 9,
        "title": "Exercise 9",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "subject-verb-agreement_ex9_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Preserving endangered indigenous languages across generations constitutes a vital cultural priority.",
            "correctSequence": [
              "Preserving endangered indigenous",
              "languages across generations",
              "constitutes a vital",
              "cultural priority."
            ],
            "shuffledTokens": [
              "Preserving endangered indigenous",
              "cultural priority.",
              "constitutes a vital",
              "languages across generations"
            ],
            "explanation": "The gerund 'Preserving...' functions as a singular subject taking 'constitutes'."
          },
          {
            "id": "subject-verb-agreement_ex9_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A majority of the surveyed workforce participants prefer flexible remote working arrangements.",
            "correctSequence": [
              "A majority of the surveyed",
              "workforce participants",
              "prefer flexible remote",
              "working arrangements."
            ],
            "shuffledTokens": [
              "working arrangements.",
              "prefer flexible remote",
              "workforce participants",
              "A majority of the surveyed"
            ],
            "explanation": "'A majority of' followed by a plural noun ('participants') takes the plural verb 'prefer'."
          },
          {
            "id": "subject-verb-agreement_ex9_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The quality of scientific evidence presented during the trial was deemed insufficient by the magistrate.",
            "correctSequence": [
              "The quality of scientific evidence",
              "presented during the trial",
              "was deemed insufficient",
              "by the magistrate."
            ],
            "shuffledTokens": [
              "by the magistrate.",
              "was deemed insufficient",
              "presented during the trial",
              "The quality of scientific evidence"
            ],
            "explanation": "The singular subject 'quality' requires the singular verb 'was deemed'."
          },
          {
            "id": "subject-verb-agreement_ex9_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Three years of intensive study is required to obtain the specialized postgraduate medical diploma.",
            "correctSequence": [
              "Three years of intensive study",
              "is required to obtain",
              "the specialized postgraduate",
              "medical diploma."
            ],
            "shuffledTokens": [
              "the specialized postgraduate",
              "is required to obtain",
              "medical diploma.",
              "Three years of intensive study"
            ],
            "explanation": "A duration of time considered as a single unified period takes a singular verb: 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex9_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The rapid expansion of renewable energy infrastructures has diminished fossil fuel dependency.",
            "correctSequence": [
              "The rapid expansion of",
              "renewable energy infrastructures",
              "has diminished",
              "fossil fuel dependency."
            ],
            "shuffledTokens": [
              "has diminished",
              "fossil fuel dependency.",
              "The rapid expansion of",
              "renewable energy infrastructures"
            ],
            "explanation": "The singular subject 'expansion' requires the singular verb 'has diminished'."
          },
          {
            "id": "subject-verb-agreement_ex9_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the course tutor nor the undergraduate researchers were cognizant of the updated protocol.",
            "correctSequence": [
              "Neither the course tutor",
              "nor the undergraduate researchers",
              "were cognizant of",
              "the updated protocol."
            ],
            "shuffledTokens": [
              "the updated protocol.",
              "were cognizant of",
              "Neither the course tutor",
              "nor the undergraduate researchers"
            ],
            "explanation": "With 'neither... nor', the verb agrees with the plural subject closest to it: 'researchers were'."
          },
          {
            "id": "subject-verb-agreement_ex9_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial number of metropolitan dwellers commute daily via underground transit networks.",
            "correctSequence": [
              "A substantial number of",
              "metropolitan dwellers",
              "commute daily via",
              "underground transit networks."
            ],
            "shuffledTokens": [
              "metropolitan dwellers",
              "underground transit networks.",
              "A substantial number of",
              "commute daily via"
            ],
            "explanation": "'A number of...' acts as a plural quantifier and takes the plural verb 'commute'."
          },
          {
            "id": "subject-verb-agreement_ex9_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The total number of registered electric vehicles has escalated exponentially since 2020.",
            "correctSequence": [
              "The total number of",
              "registered electric vehicles",
              "has escalated",
              "exponentially since 2020."
            ],
            "shuffledTokens": [
              "registered electric vehicles",
              "exponentially since 2020.",
              "The total number of",
              "has escalated"
            ],
            "explanation": "'The number of...' specifies a single mathematical figure and takes the singular verb 'has escalated'."
          },
          {
            "id": "subject-verb-agreement_ex9_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Implementing comprehensive waste-sorting regulations across cities curbs municipal landfill buildup.",
            "correctSequence": [
              "Implementing comprehensive waste-sorting",
              "regulations across cities",
              "curbs municipal",
              "landfill buildup."
            ],
            "shuffledTokens": [
              "curbs municipal",
              "Implementing comprehensive waste-sorting",
              "regulations across cities",
              "landfill buildup."
            ],
            "explanation": "The gerund phrase 'Implementing comprehensive waste-sorting regulations' functions as a singular subject."
          },
          {
            "id": "subject-verb-agreement_ex9_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Each of the international scholarly publications undergoes rigorous peer-review evaluations.",
            "correctSequence": [
              "Each of the international",
              "scholarly publications",
              "undergoes rigorous",
              "peer-review evaluations."
            ],
            "shuffledTokens": [
              "undergoes rigorous",
              "Each of the international",
              "scholarly publications",
              "peer-review evaluations."
            ],
            "explanation": "The indefinite pronoun 'Each' is singular and strictly takes the singular verb 'undergoes'."
          },
          {
            "id": "subject-verb-agreement_ex9_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The influx of foreign capital into regional manufacturing ___ domestic employment opportunities.",
            "answer": "bolsters",
            "acceptableAnswers": [
              "bolsters",
              "bolsters",
              "BOLSTERS"
            ],
            "options": [
              "bolsters",
              "bolster",
              "are bolstering",
              "have bolstered"
            ],
            "explanation": "The subject 'influx' is singular, hence the verb is 'bolsters'."
          },
          {
            "id": "subject-verb-agreement_ex9_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Either the laboratory technician or the lead scientists ___ responsible for calibrating the sensors.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "are",
              "has been",
              "is",
              "was"
            ],
            "explanation": "With 'either... or', the verb agrees with the nearer subject ('lead scientists', plural)."
          },
          {
            "id": "subject-verb-agreement_ex9_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Analyzing large linguistic datasets ___ sophisticated computational algorithms.",
            "answer": "requires",
            "acceptableAnswers": [
              "requires",
              "requires",
              "REQUIRES"
            ],
            "options": [
              "are requiring",
              "have required",
              "require",
              "requires"
            ],
            "explanation": "Gerund subjects take a singular verb ('requires')."
          },
          {
            "id": "subject-verb-agreement_ex9_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The guidelines issued by the international health authority ___ universally adhered to.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "has been",
              "was",
              "are",
              "is"
            ],
            "explanation": "The plural subject 'guidelines' requires the plural auxiliary 'are'."
          },
          {
            "id": "subject-verb-agreement_ex9_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The prevalence of anxiety disorders among adolescents ___ noticeably over the past decade.",
            "answer": "has climbed",
            "acceptableAnswers": [
              "has climbed",
              "has climbed",
              "HAS CLIMBED"
            ],
            "options": [
              "have climbed",
              "climb",
              "are climbing",
              "has climbed"
            ],
            "explanation": "The subject is the singular abstract noun 'prevalence', requiring 'has climbed'."
          },
          {
            "id": "subject-verb-agreement_ex9_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "A number of prominent climate scientists ___ that immediate carbon sequestration is imperative.",
            "answer": "contend",
            "acceptableAnswers": [
              "contend",
              "contend",
              "CONTEND"
            ],
            "options": [
              "contending",
              "contends",
              "contend",
              "is contending"
            ],
            "explanation": "'A number of...' acts as a plural quantifier meaning 'several', requiring 'contend'."
          },
          {
            "id": "subject-verb-agreement_ex9_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Neither the laboratory technicians nor the lead supervisor ___ aware of the chemical leak.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "was",
              "were",
              "are",
              "have been"
            ],
            "explanation": "The verb agrees with the closest subject ('lead supervisor', singular), taking 'was'."
          },
          {
            "id": "subject-verb-agreement_ex9_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The total number of electric charging stations across the province ___ 500 units this quarter.",
            "answer": "exceeds",
            "acceptableAnswers": [
              "exceeds",
              "exceeds",
              "EXCEEDS"
            ],
            "options": [
              "are exceeding",
              "exceed",
              "have exceeded",
              "exceeds"
            ],
            "explanation": "'The number of...' specifies a singular mathematical total and requires 'exceeds'."
          },
          {
            "id": "subject-verb-agreement_ex9_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Introducing automated robotic sorting systems in warehouses ___ substantial operational capital.",
            "answer": "demands",
            "acceptableAnswers": [
              "demands",
              "demands",
              "DEMANDS"
            ],
            "options": [
              "are demanding",
              "demand",
              "demands",
              "have demanded"
            ],
            "explanation": "A gerund phrase ('Introducing automated robotic sorting systems') functions as a singular subject."
          },
          {
            "id": "subject-verb-agreement_ex9_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Each of the experimental test subjects ___ assigned to a distinct control environment.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "have been",
              "was",
              "were",
              "are"
            ],
            "explanation": "'Each' is an indefinite pronoun that strictly takes a singular verb: 'was'."
          }
        ]
      },
      {
        "id": "subject-verb-agreement_ex_10",
        "number": 10,
        "title": "Exercise 10",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "subject-verb-agreement_ex10_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The quality of scientific evidence presented during the trial was deemed insufficient by the magistrate.",
            "correctSequence": [
              "The quality of scientific evidence",
              "presented during the trial",
              "was deemed insufficient",
              "by the magistrate."
            ],
            "shuffledTokens": [
              "presented during the trial",
              "The quality of scientific evidence",
              "was deemed insufficient",
              "by the magistrate."
            ],
            "explanation": "The singular subject 'quality' requires the singular verb 'was deemed'."
          },
          {
            "id": "subject-verb-agreement_ex10_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Three years of intensive study is required to obtain the specialized postgraduate medical diploma.",
            "correctSequence": [
              "Three years of intensive study",
              "is required to obtain",
              "the specialized postgraduate",
              "medical diploma."
            ],
            "shuffledTokens": [
              "Three years of intensive study",
              "is required to obtain",
              "medical diploma.",
              "the specialized postgraduate"
            ],
            "explanation": "A duration of time considered as a single unified period takes a singular verb: 'is required'."
          },
          {
            "id": "subject-verb-agreement_ex10_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The rapid expansion of renewable energy infrastructures has diminished fossil fuel dependency.",
            "correctSequence": [
              "The rapid expansion of",
              "renewable energy infrastructures",
              "has diminished",
              "fossil fuel dependency."
            ],
            "shuffledTokens": [
              "The rapid expansion of",
              "renewable energy infrastructures",
              "fossil fuel dependency.",
              "has diminished"
            ],
            "explanation": "The singular subject 'expansion' requires the singular verb 'has diminished'."
          },
          {
            "id": "subject-verb-agreement_ex10_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Neither the course tutor nor the undergraduate researchers were cognizant of the updated protocol.",
            "correctSequence": [
              "Neither the course tutor",
              "nor the undergraduate researchers",
              "were cognizant of",
              "the updated protocol."
            ],
            "shuffledTokens": [
              "Neither the course tutor",
              "the updated protocol.",
              "were cognizant of",
              "nor the undergraduate researchers"
            ],
            "explanation": "With 'neither... nor', the verb agrees with the plural subject closest to it: 'researchers were'."
          },
          {
            "id": "subject-verb-agreement_ex10_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial number of metropolitan dwellers commute daily via underground transit networks.",
            "correctSequence": [
              "A substantial number of",
              "metropolitan dwellers",
              "commute daily via",
              "underground transit networks."
            ],
            "shuffledTokens": [
              "A substantial number of",
              "commute daily via",
              "underground transit networks.",
              "metropolitan dwellers"
            ],
            "explanation": "'A number of...' acts as a plural quantifier and takes the plural verb 'commute'."
          },
          {
            "id": "subject-verb-agreement_ex10_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The total number of registered electric vehicles has escalated exponentially since 2020.",
            "correctSequence": [
              "The total number of",
              "registered electric vehicles",
              "has escalated",
              "exponentially since 2020."
            ],
            "shuffledTokens": [
              "exponentially since 2020.",
              "has escalated",
              "registered electric vehicles",
              "The total number of"
            ],
            "explanation": "'The number of...' specifies a single mathematical figure and takes the singular verb 'has escalated'."
          },
          {
            "id": "subject-verb-agreement_ex10_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Implementing comprehensive waste-sorting regulations across cities curbs municipal landfill buildup.",
            "correctSequence": [
              "Implementing comprehensive waste-sorting",
              "regulations across cities",
              "curbs municipal",
              "landfill buildup."
            ],
            "shuffledTokens": [
              "landfill buildup.",
              "curbs municipal",
              "regulations across cities",
              "Implementing comprehensive waste-sorting"
            ],
            "explanation": "The gerund phrase 'Implementing comprehensive waste-sorting regulations' functions as a singular subject."
          },
          {
            "id": "subject-verb-agreement_ex10_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Each of the international scholarly publications undergoes rigorous peer-review evaluations.",
            "correctSequence": [
              "Each of the international",
              "scholarly publications",
              "undergoes rigorous",
              "peer-review evaluations."
            ],
            "shuffledTokens": [
              "undergoes rigorous",
              "scholarly publications",
              "peer-review evaluations.",
              "Each of the international"
            ],
            "explanation": "The indefinite pronoun 'Each' is singular and strictly takes the singular verb 'undergoes'."
          },
          {
            "id": "subject-verb-agreement_ex10_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The minister, along with several distinguished economic delegates, is attending the symposium today.",
            "correctSequence": [
              "The minister, along with",
              "several distinguished economic delegates,",
              "is attending",
              "the symposium today."
            ],
            "shuffledTokens": [
              "is attending",
              "the symposium today.",
              "The minister, along with",
              "several distinguished economic delegates,"
            ],
            "explanation": "Intervening phrases led by 'along with' do not change the singular subject 'minister'."
          },
          {
            "id": "subject-verb-agreement_ex10_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Ten thousand dollars was allocated to the community library's digital archive project.",
            "correctSequence": [
              "Ten thousand dollars",
              "was allocated to",
              "the community library's",
              "digital archive project."
            ],
            "shuffledTokens": [
              "digital archive project.",
              "the community library's",
              "Ten thousand dollars",
              "was allocated to"
            ],
            "explanation": "Sums of money functioning as a single collective grant take a singular verb: 'was allocated'."
          },
          {
            "id": "subject-verb-agreement_ex10_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Analyzing large linguistic datasets ___ sophisticated computational algorithms.",
            "answer": "requires",
            "acceptableAnswers": [
              "requires",
              "requires",
              "REQUIRES"
            ],
            "options": [
              "are requiring",
              "requires",
              "have required",
              "require"
            ],
            "explanation": "Gerund subjects take a singular verb ('requires')."
          },
          {
            "id": "subject-verb-agreement_ex10_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The guidelines issued by the international health authority ___ universally adhered to.",
            "answer": "are",
            "acceptableAnswers": [
              "are",
              "are",
              "ARE"
            ],
            "options": [
              "is",
              "has been",
              "was",
              "are"
            ],
            "explanation": "The plural subject 'guidelines' requires the plural auxiliary 'are'."
          },
          {
            "id": "subject-verb-agreement_ex10_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The prevalence of anxiety disorders among adolescents ___ noticeably over the past decade.",
            "answer": "has climbed",
            "acceptableAnswers": [
              "has climbed",
              "has climbed",
              "HAS CLIMBED"
            ],
            "options": [
              "have climbed",
              "has climbed",
              "climb",
              "are climbing"
            ],
            "explanation": "The subject is the singular abstract noun 'prevalence', requiring 'has climbed'."
          },
          {
            "id": "subject-verb-agreement_ex10_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "A number of prominent climate scientists ___ that immediate carbon sequestration is imperative.",
            "answer": "contend",
            "acceptableAnswers": [
              "contend",
              "contend",
              "CONTEND"
            ],
            "options": [
              "contending",
              "contends",
              "contend",
              "is contending"
            ],
            "explanation": "'A number of...' acts as a plural quantifier meaning 'several', requiring 'contend'."
          },
          {
            "id": "subject-verb-agreement_ex10_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Neither the laboratory technicians nor the lead supervisor ___ aware of the chemical leak.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "was",
              "were",
              "are",
              "have been"
            ],
            "explanation": "The verb agrees with the closest subject ('lead supervisor', singular), taking 'was'."
          },
          {
            "id": "subject-verb-agreement_ex10_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The total number of electric charging stations across the province ___ 500 units this quarter.",
            "answer": "exceeds",
            "acceptableAnswers": [
              "exceeds",
              "exceeds",
              "EXCEEDS"
            ],
            "options": [
              "are exceeding",
              "exceed",
              "have exceeded",
              "exceeds"
            ],
            "explanation": "'The number of...' specifies a singular mathematical total and requires 'exceeds'."
          },
          {
            "id": "subject-verb-agreement_ex10_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Introducing automated robotic sorting systems in warehouses ___ substantial operational capital.",
            "answer": "demands",
            "acceptableAnswers": [
              "demands",
              "demands",
              "DEMANDS"
            ],
            "options": [
              "demands",
              "have demanded",
              "demand",
              "are demanding"
            ],
            "explanation": "A gerund phrase ('Introducing automated robotic sorting systems') functions as a singular subject."
          },
          {
            "id": "subject-verb-agreement_ex10_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Each of the experimental test subjects ___ assigned to a distinct control environment.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "are",
              "was",
              "were",
              "have been"
            ],
            "explanation": "'Each' is an indefinite pronoun that strictly takes a singular verb: 'was'."
          },
          {
            "id": "subject-verb-agreement_ex10_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lead investigator, accompanied by three junior researchers, ___ the symposium today.",
            "answer": "is attending",
            "acceptableAnswers": [
              "is attending",
              "is attending",
              "IS ATTENDING"
            ],
            "options": [
              "attend",
              "have attended",
              "is attending",
              "are attending"
            ],
            "explanation": "Intervening phrases like 'accompanied by' do not change the singular subject 'lead investigator'."
          },
          {
            "id": "subject-verb-agreement_ex10_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Fifty liters of distilled water ___ consumed during the chemical distillation process.",
            "answer": "was",
            "acceptableAnswers": [
              "was",
              "was",
              "WAS"
            ],
            "options": [
              "were",
              "have been",
              "are",
              "was"
            ],
            "explanation": "Quantities of volume considered as a single aggregate mass take a singular verb: 'was'."
          }
        ]
      }
    ]
  },
  {
    "id": "tenses-aspect",
    "title": "Tenses & Aspect",
    "icon": "Time",
    "color": "#059669",
    "subtitle": "Present Perfect vs Past Simple, dynamic trends, passive constructions, and hypothetical projections.",
    "rules": [
      "Use the Past Simple for events completed at a specified past time (e.g. 'In 2010, the figure dropped').",
      "Use the Present Perfect for actions originating in the past that continue to the present or have present relevance.",
      "Use passive voice to maintain an objective academic tone (e.g., 'Data was gathered').",
      "Use future projection forms ('is projected to', 'is expected to') for forecasting in Task 1.",
      "Use the Past Perfect to establish sequence before another past occurrence."
    ],
    "exercises": [
      {
        "id": "tenses-aspect_ex_1",
        "number": 1,
        "title": "Exercise 1",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "tenses-aspect_ex1_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Between 1995 and 2010, carbon dioxide emissions plummeted by thirty percent across Western Europe.",
            "correctSequence": [
              "Between 1995 and 2010,",
              "carbon dioxide emissions",
              "plummeted by thirty percent",
              "across Western Europe."
            ],
            "shuffledTokens": [
              "carbon dioxide emissions",
              "across Western Europe.",
              "Between 1995 and 2010,",
              "plummeted by thirty percent"
            ],
            "explanation": "Use the Past Simple ('plummeted') for events anchored in a completed past time period."
          },
          {
            "id": "tenses-aspect_ex1_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Since the introduction of stricter environmental legislation, air quality index scores have improved markedly.",
            "correctSequence": [
              "Since the introduction of",
              "stricter environmental legislation,",
              "air quality index scores",
              "have improved markedly."
            ],
            "shuffledTokens": [
              "air quality index scores",
              "Since the introduction of",
              "stricter environmental legislation,",
              "have improved markedly."
            ],
            "explanation": "The preposition 'Since' with past origin requires the Present Perfect ('have improved')."
          },
          {
            "id": "tenses-aspect_ex1_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By the time the new metro terminal was inaugurated, commuters had already adapted to bus rapid transit.",
            "correctSequence": [
              "By the time the new",
              "metro terminal was inaugurated,",
              "commuters had already adapted",
              "to bus rapid transit."
            ],
            "shuffledTokens": [
              "commuters had already adapted",
              "By the time the new",
              "metro terminal was inaugurated,",
              "to bus rapid transit."
            ],
            "explanation": "The Past Perfect ('had already adapted') establishes an action completed before another past event."
          },
          {
            "id": "tenses-aspect_ex1_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Global temperatures are projected to ascend steadily unless mitigation initiatives are swiftly instituted.",
            "correctSequence": [
              "Global temperatures are projected",
              "to ascend steadily unless",
              "mitigation initiatives are",
              "swiftly instituted."
            ],
            "shuffledTokens": [
              "to ascend steadily unless",
              "Global temperatures are projected",
              "mitigation initiatives are",
              "swiftly instituted."
            ],
            "explanation": "Academic projections use passive present forms ('are projected') followed by a condition."
          },
          {
            "id": "tenses-aspect_ex1_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "While sociologists were examining demographic trends, unexpected patterns of urban migration surfaced rapidly.",
            "correctSequence": [
              "While sociologists were examining",
              "demographic trends, unexpected",
              "patterns of urban migration",
              "surfaced rapidly."
            ],
            "shuffledTokens": [
              "demographic trends, unexpected",
              "While sociologists were examining",
              "patterns of urban migration",
              "surfaced rapidly."
            ],
            "explanation": "Use the Past Continuous for the background activity and Past Simple ('surfaced') for the interrupting event."
          },
          {
            "id": "tenses-aspect_ex1_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Renewable energy investments had doubled prior to the sudden cessation of governmental subsidies.",
            "correctSequence": [
              "Renewable energy investments",
              "had doubled prior to",
              "the sudden cessation of",
              "governmental subsidies."
            ],
            "shuffledTokens": [
              "had doubled prior to",
              "Renewable energy investments",
              "the sudden cessation of",
              "governmental subsidies."
            ],
            "explanation": "The past sequence marker 'prior to' calls for the Past Perfect ('had doubled')."
          },
          {
            "id": "tenses-aspect_ex1_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Over the preceding two decades, tertiary graduation rates have witnessed consistent upward trajectories.",
            "correctSequence": [
              "Over the preceding two decades,",
              "tertiary graduation rates",
              "have witnessed consistent",
              "upward trajectories."
            ],
            "shuffledTokens": [
              "tertiary graduation rates",
              "Over the preceding two decades,",
              "have witnessed consistent",
              "upward trajectories."
            ],
            "explanation": "'Over the preceding two decades' connects past duration to the present, requiring the Present Perfect."
          },
          {
            "id": "tenses-aspect_ex1_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Prior to commencing fieldwork, the ethnographic researchers had secured formal consent from regional elders.",
            "correctSequence": [
              "Prior to commencing fieldwork,",
              "the ethnographic researchers",
              "had secured formal consent",
              "from regional elders."
            ],
            "shuffledTokens": [
              "the ethnographic researchers",
              "Prior to commencing fieldwork,",
              "had secured formal consent",
              "from regional elders."
            ],
            "explanation": "'Prior to' establishing precedence in the past requires the Past Perfect ('had secured')."
          },
          {
            "id": "tenses-aspect_ex1_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The municipal council is currently upgrading drainage canals to withstand severe monsoon flash floodings.",
            "correctSequence": [
              "The municipal council is currently",
              "upgrading drainage canals to",
              "withstand severe monsoon",
              "flash floodings."
            ],
            "shuffledTokens": [
              "upgrading drainage canals to",
              "The municipal council is currently",
              "withstand severe monsoon",
              "flash floodings."
            ],
            "explanation": "The adverb 'currently' indicates an ongoing present process, requiring the Present Continuous."
          },
          {
            "id": "tenses-aspect_ex1_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By 2035, automated technologies will have transformed the nature of industrial assembly and manual labor.",
            "correctSequence": [
              "By 2035, automated technologies",
              "will have transformed the nature",
              "of industrial assembly",
              "and manual labor."
            ],
            "shuffledTokens": [
              "will have transformed the nature",
              "By 2035, automated technologies",
              "of industrial assembly",
              "and manual labor."
            ],
            "explanation": "The Future Perfect ('will have transformed') denotes an action that will be completed by a future benchmark."
          },
          {
            "id": "tenses-aspect_ex1_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "In 2015, the proportion of solar energy users ___ dramatically across rural communities.",
            "answer": "rose",
            "acceptableAnswers": [
              "rose",
              "rose",
              "ROSE"
            ],
            "options": [
              "is rising",
              "rose",
              "had been rising",
              "has risen"
            ],
            "explanation": "A specific historical year ('In 2015') requires the Past Simple ('rose')."
          },
          {
            "id": "tenses-aspect_ex1_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Since 2018, the municipality ___ over three million dollars in solar charging hubs.",
            "answer": "has invested",
            "acceptableAnswers": [
              "has invested",
              "has invested",
              "HAS INVESTED"
            ],
            "options": [
              "invests",
              "had invested",
              "has invested",
              "invested"
            ],
            "explanation": "The temporal marker 'Since 2018' dictates the Present Perfect ('has invested')."
          },
          {
            "id": "tenses-aspect_ex1_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By the time emergency aid arrived, floodwaters ___ several low-lying villages.",
            "answer": "had submerged",
            "acceptableAnswers": [
              "had submerged",
              "had submerged",
              "HAD SUBMERGED"
            ],
            "options": [
              "submerged",
              "have submerged",
              "submerge",
              "had submerged"
            ],
            "explanation": "An event occurring before another past point takes the Past Perfect ('had submerged')."
          },
          {
            "id": "tenses-aspect_ex1_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Demographers predict that global fertility rates ___ below replacement levels by 2050.",
            "answer": "will have fallen",
            "acceptableAnswers": [
              "will have fallen",
              "will have fallen",
              "WILL HAVE FALLEN"
            ],
            "options": [
              "will have fallen",
              "will fall",
              "fall",
              "have fallen"
            ],
            "explanation": "'By 2050' denotes completion before a future date, requiring the Future Perfect ('will have fallen')."
          },
          {
            "id": "tenses-aspect_ex1_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "While field biologists ___ data, severe torrential thunderstorms disrupted their survey.",
            "answer": "were collecting",
            "acceptableAnswers": [
              "were collecting",
              "were collecting",
              "WERE COLLECTING"
            ],
            "options": [
              "have collected",
              "collected",
              "were collecting",
              "had collected"
            ],
            "explanation": "An ongoing background activity in the past requires the Past Continuous ('were collecting')."
          },
          {
            "id": "tenses-aspect_ex1_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Over the last decade, electric vehicle registrations ___ exponential expansion.",
            "answer": "have experienced",
            "acceptableAnswers": [
              "have experienced",
              "have experienced",
              "HAVE EXPERIENCED"
            ],
            "options": [
              "have experienced",
              "experienced",
              "had experienced",
              "are experiencing"
            ],
            "explanation": "'Over the last decade' links the past to the present, requiring the Present Perfect ('have experienced')."
          },
          {
            "id": "tenses-aspect_ex1_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Prior to the industrial revolution, artisan weavers ___ cloth using hand looms.",
            "answer": "had produced",
            "acceptableAnswers": [
              "had produced",
              "had produced",
              "HAD PRODUCED"
            ],
            "options": [
              "produce",
              "have produced",
              "had produced",
              "are producing"
            ],
            "explanation": "The past marker 'Prior to' requires the Past Perfect ('had produced') to indicate anteriority."
          },
          {
            "id": "tenses-aspect_ex1_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Currently, civil engineers ___ the structural integrity of the suspension bridge.",
            "answer": "are evaluating",
            "acceptableAnswers": [
              "are evaluating",
              "are evaluating",
              "ARE EVALUATING"
            ],
            "options": [
              "had evaluated",
              "are evaluating",
              "evaluated",
              "have evaluated"
            ],
            "explanation": "'Currently' describes an ongoing action taking the Present Continuous ('are evaluating')."
          },
          {
            "id": "tenses-aspect_ex1_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Between 2000 and 2005, manufacturing output ___ by approximately twelve percent.",
            "answer": "decreased",
            "acceptableAnswers": [
              "decreased",
              "decreased",
              "DECREASED"
            ],
            "options": [
              "had been decreased",
              "is decreasing",
              "decreased",
              "has decreased"
            ],
            "explanation": "A completed past timeframe requires the Past Simple ('decreased')."
          },
          {
            "id": "tenses-aspect_ex1_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research team ___ the clinical trials for six months before publishing their findings.",
            "answer": "had been conducting",
            "acceptableAnswers": [
              "had been conducting",
              "had been conducting",
              "HAD BEEN CONDUCTING"
            ],
            "options": [
              "have conducted",
              "are conducting",
              "were conducted",
              "had been conducting"
            ],
            "explanation": "A continuous activity preceding another past event requires the Past Perfect Continuous."
          }
        ]
      },
      {
        "id": "tenses-aspect_ex_2",
        "number": 2,
        "title": "Exercise 2",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "tenses-aspect_ex2_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By the time the new metro terminal was inaugurated, commuters had already adapted to bus rapid transit.",
            "correctSequence": [
              "By the time the new",
              "metro terminal was inaugurated,",
              "commuters had already adapted",
              "to bus rapid transit."
            ],
            "shuffledTokens": [
              "commuters had already adapted",
              "metro terminal was inaugurated,",
              "to bus rapid transit.",
              "By the time the new"
            ],
            "explanation": "The Past Perfect ('had already adapted') establishes an action completed before another past event."
          },
          {
            "id": "tenses-aspect_ex2_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Global temperatures are projected to ascend steadily unless mitigation initiatives are swiftly instituted.",
            "correctSequence": [
              "Global temperatures are projected",
              "to ascend steadily unless",
              "mitigation initiatives are",
              "swiftly instituted."
            ],
            "shuffledTokens": [
              "swiftly instituted.",
              "mitigation initiatives are",
              "Global temperatures are projected",
              "to ascend steadily unless"
            ],
            "explanation": "Academic projections use passive present forms ('are projected') followed by a condition."
          },
          {
            "id": "tenses-aspect_ex2_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "While sociologists were examining demographic trends, unexpected patterns of urban migration surfaced rapidly.",
            "correctSequence": [
              "While sociologists were examining",
              "demographic trends, unexpected",
              "patterns of urban migration",
              "surfaced rapidly."
            ],
            "shuffledTokens": [
              "demographic trends, unexpected",
              "surfaced rapidly.",
              "While sociologists were examining",
              "patterns of urban migration"
            ],
            "explanation": "Use the Past Continuous for the background activity and Past Simple ('surfaced') for the interrupting event."
          },
          {
            "id": "tenses-aspect_ex2_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Renewable energy investments had doubled prior to the sudden cessation of governmental subsidies.",
            "correctSequence": [
              "Renewable energy investments",
              "had doubled prior to",
              "the sudden cessation of",
              "governmental subsidies."
            ],
            "shuffledTokens": [
              "had doubled prior to",
              "governmental subsidies.",
              "Renewable energy investments",
              "the sudden cessation of"
            ],
            "explanation": "The past sequence marker 'prior to' calls for the Past Perfect ('had doubled')."
          },
          {
            "id": "tenses-aspect_ex2_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Over the preceding two decades, tertiary graduation rates have witnessed consistent upward trajectories.",
            "correctSequence": [
              "Over the preceding two decades,",
              "tertiary graduation rates",
              "have witnessed consistent",
              "upward trajectories."
            ],
            "shuffledTokens": [
              "upward trajectories.",
              "Over the preceding two decades,",
              "tertiary graduation rates",
              "have witnessed consistent"
            ],
            "explanation": "'Over the preceding two decades' connects past duration to the present, requiring the Present Perfect."
          },
          {
            "id": "tenses-aspect_ex2_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Prior to commencing fieldwork, the ethnographic researchers had secured formal consent from regional elders.",
            "correctSequence": [
              "Prior to commencing fieldwork,",
              "the ethnographic researchers",
              "had secured formal consent",
              "from regional elders."
            ],
            "shuffledTokens": [
              "had secured formal consent",
              "Prior to commencing fieldwork,",
              "the ethnographic researchers",
              "from regional elders."
            ],
            "explanation": "'Prior to' establishing precedence in the past requires the Past Perfect ('had secured')."
          },
          {
            "id": "tenses-aspect_ex2_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The municipal council is currently upgrading drainage canals to withstand severe monsoon flash floodings.",
            "correctSequence": [
              "The municipal council is currently",
              "upgrading drainage canals to",
              "withstand severe monsoon",
              "flash floodings."
            ],
            "shuffledTokens": [
              "withstand severe monsoon",
              "The municipal council is currently",
              "upgrading drainage canals to",
              "flash floodings."
            ],
            "explanation": "The adverb 'currently' indicates an ongoing present process, requiring the Present Continuous."
          },
          {
            "id": "tenses-aspect_ex2_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By 2035, automated technologies will have transformed the nature of industrial assembly and manual labor.",
            "correctSequence": [
              "By 2035, automated technologies",
              "will have transformed the nature",
              "of industrial assembly",
              "and manual labor."
            ],
            "shuffledTokens": [
              "will have transformed the nature",
              "By 2035, automated technologies",
              "of industrial assembly",
              "and manual labor."
            ],
            "explanation": "The Future Perfect ('will have transformed') denotes an action that will be completed by a future benchmark."
          },
          {
            "id": "tenses-aspect_ex2_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "During the nineteenth century, mechanized textile production supplanted traditional domestic cottage industries.",
            "correctSequence": [
              "During the nineteenth century,",
              "mechanized textile production",
              "supplanted traditional domestic",
              "cottage industries."
            ],
            "shuffledTokens": [
              "mechanized textile production",
              "During the nineteenth century,",
              "supplanted traditional domestic",
              "cottage industries."
            ],
            "explanation": "A completed historic century strictly requires the Past Simple ('supplanted')."
          },
          {
            "id": "tenses-aspect_ex2_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "For the past five years, the local government has been subsidizing electric vehicle battery replacements.",
            "correctSequence": [
              "For the past five years,",
              "the local government has been",
              "subsidizing electric vehicle",
              "battery replacements."
            ],
            "shuffledTokens": [
              "the local government has been",
              "For the past five years,",
              "subsidizing electric vehicle",
              "battery replacements."
            ],
            "explanation": "'For the past five years' requires the Present Perfect Continuous for an action starting in the past and still ongoing."
          },
          {
            "id": "tenses-aspect_ex2_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By the time emergency aid arrived, floodwaters ___ several low-lying villages.",
            "answer": "had submerged",
            "acceptableAnswers": [
              "had submerged",
              "had submerged",
              "HAD SUBMERGED"
            ],
            "options": [
              "submerged",
              "have submerged",
              "submerge",
              "had submerged"
            ],
            "explanation": "An event occurring before another past point takes the Past Perfect ('had submerged')."
          },
          {
            "id": "tenses-aspect_ex2_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Demographers predict that global fertility rates ___ below replacement levels by 2050.",
            "answer": "will have fallen",
            "acceptableAnswers": [
              "will have fallen",
              "will have fallen",
              "WILL HAVE FALLEN"
            ],
            "options": [
              "will have fallen",
              "will fall",
              "fall",
              "have fallen"
            ],
            "explanation": "'By 2050' denotes completion before a future date, requiring the Future Perfect ('will have fallen')."
          },
          {
            "id": "tenses-aspect_ex2_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "While field biologists ___ data, severe torrential thunderstorms disrupted their survey.",
            "answer": "were collecting",
            "acceptableAnswers": [
              "were collecting",
              "were collecting",
              "WERE COLLECTING"
            ],
            "options": [
              "have collected",
              "collected",
              "were collecting",
              "had collected"
            ],
            "explanation": "An ongoing background activity in the past requires the Past Continuous ('were collecting')."
          },
          {
            "id": "tenses-aspect_ex2_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Over the last decade, electric vehicle registrations ___ exponential expansion.",
            "answer": "have experienced",
            "acceptableAnswers": [
              "have experienced",
              "have experienced",
              "HAVE EXPERIENCED"
            ],
            "options": [
              "had experienced",
              "experienced",
              "have experienced",
              "are experiencing"
            ],
            "explanation": "'Over the last decade' links the past to the present, requiring the Present Perfect ('have experienced')."
          },
          {
            "id": "tenses-aspect_ex2_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Prior to the industrial revolution, artisan weavers ___ cloth using hand looms.",
            "answer": "had produced",
            "acceptableAnswers": [
              "had produced",
              "had produced",
              "HAD PRODUCED"
            ],
            "options": [
              "had produced",
              "are producing",
              "have produced",
              "produce"
            ],
            "explanation": "The past marker 'Prior to' requires the Past Perfect ('had produced') to indicate anteriority."
          },
          {
            "id": "tenses-aspect_ex2_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Currently, civil engineers ___ the structural integrity of the suspension bridge.",
            "answer": "are evaluating",
            "acceptableAnswers": [
              "are evaluating",
              "are evaluating",
              "ARE EVALUATING"
            ],
            "options": [
              "are evaluating",
              "have evaluated",
              "had evaluated",
              "evaluated"
            ],
            "explanation": "'Currently' describes an ongoing action taking the Present Continuous ('are evaluating')."
          },
          {
            "id": "tenses-aspect_ex2_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Between 2000 and 2005, manufacturing output ___ by approximately twelve percent.",
            "answer": "decreased",
            "acceptableAnswers": [
              "decreased",
              "decreased",
              "DECREASED"
            ],
            "options": [
              "had been decreased",
              "is decreasing",
              "decreased",
              "has decreased"
            ],
            "explanation": "A completed past timeframe requires the Past Simple ('decreased')."
          },
          {
            "id": "tenses-aspect_ex2_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research team ___ the clinical trials for six months before publishing their findings.",
            "answer": "had been conducting",
            "acceptableAnswers": [
              "had been conducting",
              "had been conducting",
              "HAD BEEN CONDUCTING"
            ],
            "options": [
              "have conducted",
              "had been conducting",
              "are conducting",
              "were conducted"
            ],
            "explanation": "A continuous activity preceding another past event requires the Past Perfect Continuous."
          },
          {
            "id": "tenses-aspect_ex2_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "According to recent projections, global fossil fuel consumption ___ after 2030.",
            "answer": "will plateau",
            "acceptableAnswers": [
              "will plateau",
              "will plateau",
              "WILL PLATEAU"
            ],
            "options": [
              "will plateau",
              "plateaus",
              "has plateaued",
              "had plateaued"
            ],
            "explanation": "Future academic forecasts use modal 'will' ('will plateau')."
          },
          {
            "id": "tenses-aspect_ex2_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The government ___ several educational subsidies since the beginning of this fiscal term.",
            "answer": "has sanctioned",
            "acceptableAnswers": [
              "has sanctioned",
              "has sanctioned",
              "HAS SANCTIONED"
            ],
            "options": [
              "has sanctioned",
              "sanctioned",
              "had sanctioned",
              "sanctions"
            ],
            "explanation": "'Since the beginning' mandates the Present Perfect ('has sanctioned')."
          }
        ]
      },
      {
        "id": "tenses-aspect_ex_3",
        "number": 3,
        "title": "Exercise 3",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "tenses-aspect_ex3_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "While sociologists were examining demographic trends, unexpected patterns of urban migration surfaced rapidly.",
            "correctSequence": [
              "While sociologists were examining",
              "demographic trends, unexpected",
              "patterns of urban migration",
              "surfaced rapidly."
            ],
            "shuffledTokens": [
              "While sociologists were examining",
              "patterns of urban migration",
              "surfaced rapidly.",
              "demographic trends, unexpected"
            ],
            "explanation": "Use the Past Continuous for the background activity and Past Simple ('surfaced') for the interrupting event."
          },
          {
            "id": "tenses-aspect_ex3_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Renewable energy investments had doubled prior to the sudden cessation of governmental subsidies.",
            "correctSequence": [
              "Renewable energy investments",
              "had doubled prior to",
              "the sudden cessation of",
              "governmental subsidies."
            ],
            "shuffledTokens": [
              "governmental subsidies.",
              "the sudden cessation of",
              "had doubled prior to",
              "Renewable energy investments"
            ],
            "explanation": "The past sequence marker 'prior to' calls for the Past Perfect ('had doubled')."
          },
          {
            "id": "tenses-aspect_ex3_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Over the preceding two decades, tertiary graduation rates have witnessed consistent upward trajectories.",
            "correctSequence": [
              "Over the preceding two decades,",
              "tertiary graduation rates",
              "have witnessed consistent",
              "upward trajectories."
            ],
            "shuffledTokens": [
              "upward trajectories.",
              "have witnessed consistent",
              "tertiary graduation rates",
              "Over the preceding two decades,"
            ],
            "explanation": "'Over the preceding two decades' connects past duration to the present, requiring the Present Perfect."
          },
          {
            "id": "tenses-aspect_ex3_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Prior to commencing fieldwork, the ethnographic researchers had secured formal consent from regional elders.",
            "correctSequence": [
              "Prior to commencing fieldwork,",
              "the ethnographic researchers",
              "had secured formal consent",
              "from regional elders."
            ],
            "shuffledTokens": [
              "had secured formal consent",
              "the ethnographic researchers",
              "from regional elders.",
              "Prior to commencing fieldwork,"
            ],
            "explanation": "'Prior to' establishing precedence in the past requires the Past Perfect ('had secured')."
          },
          {
            "id": "tenses-aspect_ex3_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The municipal council is currently upgrading drainage canals to withstand severe monsoon flash floodings.",
            "correctSequence": [
              "The municipal council is currently",
              "upgrading drainage canals to",
              "withstand severe monsoon",
              "flash floodings."
            ],
            "shuffledTokens": [
              "withstand severe monsoon",
              "flash floodings.",
              "The municipal council is currently",
              "upgrading drainage canals to"
            ],
            "explanation": "The adverb 'currently' indicates an ongoing present process, requiring the Present Continuous."
          },
          {
            "id": "tenses-aspect_ex3_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By 2035, automated technologies will have transformed the nature of industrial assembly and manual labor.",
            "correctSequence": [
              "By 2035, automated technologies",
              "will have transformed the nature",
              "of industrial assembly",
              "and manual labor."
            ],
            "shuffledTokens": [
              "and manual labor.",
              "of industrial assembly",
              "By 2035, automated technologies",
              "will have transformed the nature"
            ],
            "explanation": "The Future Perfect ('will have transformed') denotes an action that will be completed by a future benchmark."
          },
          {
            "id": "tenses-aspect_ex3_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "During the nineteenth century, mechanized textile production supplanted traditional domestic cottage industries.",
            "correctSequence": [
              "During the nineteenth century,",
              "mechanized textile production",
              "supplanted traditional domestic",
              "cottage industries."
            ],
            "shuffledTokens": [
              "mechanized textile production",
              "cottage industries.",
              "During the nineteenth century,",
              "supplanted traditional domestic"
            ],
            "explanation": "A completed historic century strictly requires the Past Simple ('supplanted')."
          },
          {
            "id": "tenses-aspect_ex3_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "For the past five years, the local government has been subsidizing electric vehicle battery replacements.",
            "correctSequence": [
              "For the past five years,",
              "the local government has been",
              "subsidizing electric vehicle",
              "battery replacements."
            ],
            "shuffledTokens": [
              "the local government has been",
              "battery replacements.",
              "For the past five years,",
              "subsidizing electric vehicle"
            ],
            "explanation": "'For the past five years' requires the Present Perfect Continuous for an action starting in the past and still ongoing."
          },
          {
            "id": "tenses-aspect_ex3_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientists discovered that the glacier had retreated over two kilometers before monitoring equipment was installed.",
            "correctSequence": [
              "Scientists discovered that the glacier",
              "had retreated over two kilometers",
              "before monitoring equipment",
              "was installed."
            ],
            "shuffledTokens": [
              "before monitoring equipment",
              "Scientists discovered that the glacier",
              "had retreated over two kilometers",
              "was installed."
            ],
            "explanation": "The retreat occurred before monitoring equipment was installed, requiring the Past Perfect ('had retreated')."
          },
          {
            "id": "tenses-aspect_ex3_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Economists anticipate that inflation will decelerate once supply chain bottlenecks are fully resolved abroad.",
            "correctSequence": [
              "Economists anticipate that inflation",
              "will decelerate once supply chain",
              "bottlenecks are fully",
              "resolved abroad."
            ],
            "shuffledTokens": [
              "bottlenecks are fully",
              "Economists anticipate that inflation",
              "will decelerate once supply chain",
              "resolved abroad."
            ],
            "explanation": "A future main clause takes 'will decelerate' while the time clause takes the present simple 'are resolved'."
          },
          {
            "id": "tenses-aspect_ex3_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "While field biologists ___ data, severe torrential thunderstorms disrupted their survey.",
            "answer": "were collecting",
            "acceptableAnswers": [
              "were collecting",
              "were collecting",
              "WERE COLLECTING"
            ],
            "options": [
              "have collected",
              "collected",
              "were collecting",
              "had collected"
            ],
            "explanation": "An ongoing background activity in the past requires the Past Continuous ('were collecting')."
          },
          {
            "id": "tenses-aspect_ex3_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Over the last decade, electric vehicle registrations ___ exponential expansion.",
            "answer": "have experienced",
            "acceptableAnswers": [
              "have experienced",
              "have experienced",
              "HAVE EXPERIENCED"
            ],
            "options": [
              "are experiencing",
              "experienced",
              "have experienced",
              "had experienced"
            ],
            "explanation": "'Over the last decade' links the past to the present, requiring the Present Perfect ('have experienced')."
          },
          {
            "id": "tenses-aspect_ex3_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Prior to the industrial revolution, artisan weavers ___ cloth using hand looms.",
            "answer": "had produced",
            "acceptableAnswers": [
              "had produced",
              "had produced",
              "HAD PRODUCED"
            ],
            "options": [
              "are producing",
              "produce",
              "have produced",
              "had produced"
            ],
            "explanation": "The past marker 'Prior to' requires the Past Perfect ('had produced') to indicate anteriority."
          },
          {
            "id": "tenses-aspect_ex3_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Currently, civil engineers ___ the structural integrity of the suspension bridge.",
            "answer": "are evaluating",
            "acceptableAnswers": [
              "are evaluating",
              "are evaluating",
              "ARE EVALUATING"
            ],
            "options": [
              "had evaluated",
              "are evaluating",
              "have evaluated",
              "evaluated"
            ],
            "explanation": "'Currently' describes an ongoing action taking the Present Continuous ('are evaluating')."
          },
          {
            "id": "tenses-aspect_ex3_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Between 2000 and 2005, manufacturing output ___ by approximately twelve percent.",
            "answer": "decreased",
            "acceptableAnswers": [
              "decreased",
              "decreased",
              "DECREASED"
            ],
            "options": [
              "has decreased",
              "had been decreased",
              "is decreasing",
              "decreased"
            ],
            "explanation": "A completed past timeframe requires the Past Simple ('decreased')."
          },
          {
            "id": "tenses-aspect_ex3_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research team ___ the clinical trials for six months before publishing their findings.",
            "answer": "had been conducting",
            "acceptableAnswers": [
              "had been conducting",
              "had been conducting",
              "HAD BEEN CONDUCTING"
            ],
            "options": [
              "have conducted",
              "had been conducting",
              "are conducting",
              "were conducted"
            ],
            "explanation": "A continuous activity preceding another past event requires the Past Perfect Continuous."
          },
          {
            "id": "tenses-aspect_ex3_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "According to recent projections, global fossil fuel consumption ___ after 2030.",
            "answer": "will plateau",
            "acceptableAnswers": [
              "will plateau",
              "will plateau",
              "WILL PLATEAU"
            ],
            "options": [
              "will plateau",
              "plateaus",
              "has plateaued",
              "had plateaued"
            ],
            "explanation": "Future academic forecasts use modal 'will' ('will plateau')."
          },
          {
            "id": "tenses-aspect_ex3_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The government ___ several educational subsidies since the beginning of this fiscal term.",
            "answer": "has sanctioned",
            "acceptableAnswers": [
              "has sanctioned",
              "has sanctioned",
              "HAS SANCTIONED"
            ],
            "options": [
              "has sanctioned",
              "sanctioned",
              "had sanctioned",
              "sanctions"
            ],
            "explanation": "'Since the beginning' mandates the Present Perfect ('has sanctioned')."
          },
          {
            "id": "tenses-aspect_ex3_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "When the monetary policy was revised, commercial banks ___ their prime lending rates.",
            "answer": "adjusted",
            "acceptableAnswers": [
              "adjusted",
              "adjusted",
              "ADJUSTED"
            ],
            "options": [
              "had been adjusted",
              "have adjusted",
              "adjusted",
              "are adjusting"
            ],
            "explanation": "Sequential past events in a narrative require the Past Simple ('adjusted')."
          },
          {
            "id": "tenses-aspect_ex3_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By midnight yesterday, the firefighters ___ the chemical blaze completely.",
            "answer": "had extinguished",
            "acceptableAnswers": [
              "had extinguished",
              "had extinguished",
              "HAD EXTINGUISHED"
            ],
            "options": [
              "have extinguished",
              "extinguish",
              "extinguished",
              "had extinguished"
            ],
            "explanation": "'By midnight yesterday' designates a past deadline, requiring the Past Perfect ('had extinguished')."
          }
        ]
      },
      {
        "id": "tenses-aspect_ex_4",
        "number": 4,
        "title": "Exercise 4",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "tenses-aspect_ex4_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Over the preceding two decades, tertiary graduation rates have witnessed consistent upward trajectories.",
            "correctSequence": [
              "Over the preceding two decades,",
              "tertiary graduation rates",
              "have witnessed consistent",
              "upward trajectories."
            ],
            "shuffledTokens": [
              "Over the preceding two decades,",
              "tertiary graduation rates",
              "upward trajectories.",
              "have witnessed consistent"
            ],
            "explanation": "'Over the preceding two decades' connects past duration to the present, requiring the Present Perfect."
          },
          {
            "id": "tenses-aspect_ex4_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Prior to commencing fieldwork, the ethnographic researchers had secured formal consent from regional elders.",
            "correctSequence": [
              "Prior to commencing fieldwork,",
              "the ethnographic researchers",
              "had secured formal consent",
              "from regional elders."
            ],
            "shuffledTokens": [
              "Prior to commencing fieldwork,",
              "the ethnographic researchers",
              "from regional elders.",
              "had secured formal consent"
            ],
            "explanation": "'Prior to' establishing precedence in the past requires the Past Perfect ('had secured')."
          },
          {
            "id": "tenses-aspect_ex4_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The municipal council is currently upgrading drainage canals to withstand severe monsoon flash floodings.",
            "correctSequence": [
              "The municipal council is currently",
              "upgrading drainage canals to",
              "withstand severe monsoon",
              "flash floodings."
            ],
            "shuffledTokens": [
              "The municipal council is currently",
              "flash floodings.",
              "withstand severe monsoon",
              "upgrading drainage canals to"
            ],
            "explanation": "The adverb 'currently' indicates an ongoing present process, requiring the Present Continuous."
          },
          {
            "id": "tenses-aspect_ex4_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By 2035, automated technologies will have transformed the nature of industrial assembly and manual labor.",
            "correctSequence": [
              "By 2035, automated technologies",
              "will have transformed the nature",
              "of industrial assembly",
              "and manual labor."
            ],
            "shuffledTokens": [
              "By 2035, automated technologies",
              "and manual labor.",
              "of industrial assembly",
              "will have transformed the nature"
            ],
            "explanation": "The Future Perfect ('will have transformed') denotes an action that will be completed by a future benchmark."
          },
          {
            "id": "tenses-aspect_ex4_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "During the nineteenth century, mechanized textile production supplanted traditional domestic cottage industries.",
            "correctSequence": [
              "During the nineteenth century,",
              "mechanized textile production",
              "supplanted traditional domestic",
              "cottage industries."
            ],
            "shuffledTokens": [
              "cottage industries.",
              "supplanted traditional domestic",
              "mechanized textile production",
              "During the nineteenth century,"
            ],
            "explanation": "A completed historic century strictly requires the Past Simple ('supplanted')."
          },
          {
            "id": "tenses-aspect_ex4_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "For the past five years, the local government has been subsidizing electric vehicle battery replacements.",
            "correctSequence": [
              "For the past five years,",
              "the local government has been",
              "subsidizing electric vehicle",
              "battery replacements."
            ],
            "shuffledTokens": [
              "battery replacements.",
              "subsidizing electric vehicle",
              "the local government has been",
              "For the past five years,"
            ],
            "explanation": "'For the past five years' requires the Present Perfect Continuous for an action starting in the past and still ongoing."
          },
          {
            "id": "tenses-aspect_ex4_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientists discovered that the glacier had retreated over two kilometers before monitoring equipment was installed.",
            "correctSequence": [
              "Scientists discovered that the glacier",
              "had retreated over two kilometers",
              "before monitoring equipment",
              "was installed."
            ],
            "shuffledTokens": [
              "was installed.",
              "before monitoring equipment",
              "had retreated over two kilometers",
              "Scientists discovered that the glacier"
            ],
            "explanation": "The retreat occurred before monitoring equipment was installed, requiring the Past Perfect ('had retreated')."
          },
          {
            "id": "tenses-aspect_ex4_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Economists anticipate that inflation will decelerate once supply chain bottlenecks are fully resolved abroad.",
            "correctSequence": [
              "Economists anticipate that inflation",
              "will decelerate once supply chain",
              "bottlenecks are fully",
              "resolved abroad."
            ],
            "shuffledTokens": [
              "bottlenecks are fully",
              "will decelerate once supply chain",
              "resolved abroad.",
              "Economists anticipate that inflation"
            ],
            "explanation": "A future main clause takes 'will decelerate' while the time clause takes the present simple 'are resolved'."
          },
          {
            "id": "tenses-aspect_ex4_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In 2018, passenger numbers reached an unprecedented peak before falling sharply in subsequent months.",
            "correctSequence": [
              "In 2018, passenger numbers",
              "reached an unprecedented peak",
              "before falling sharply",
              "in subsequent months."
            ],
            "shuffledTokens": [
              "in subsequent months.",
              "before falling sharply",
              "In 2018, passenger numbers",
              "reached an unprecedented peak"
            ],
            "explanation": "The specific year 'In 2018' requires the Past Simple ('reached')."
          },
          {
            "id": "tenses-aspect_ex4_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Medical authorities have recently approved a revolutionary therapy for chronic neurological disorders.",
            "correctSequence": [
              "Medical authorities have recently",
              "approved a revolutionary therapy",
              "for chronic neurological",
              "disorders."
            ],
            "shuffledTokens": [
              "approved a revolutionary therapy",
              "disorders.",
              "Medical authorities have recently",
              "for chronic neurological"
            ],
            "explanation": "Recent developments with present clinical relevance take the Present Perfect ('have approved')."
          },
          {
            "id": "tenses-aspect_ex4_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Prior to the industrial revolution, artisan weavers ___ cloth using hand looms.",
            "answer": "had produced",
            "acceptableAnswers": [
              "had produced",
              "had produced",
              "HAD PRODUCED"
            ],
            "options": [
              "produce",
              "had produced",
              "are producing",
              "have produced"
            ],
            "explanation": "The past marker 'Prior to' requires the Past Perfect ('had produced') to indicate anteriority."
          },
          {
            "id": "tenses-aspect_ex4_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Currently, civil engineers ___ the structural integrity of the suspension bridge.",
            "answer": "are evaluating",
            "acceptableAnswers": [
              "are evaluating",
              "are evaluating",
              "ARE EVALUATING"
            ],
            "options": [
              "had evaluated",
              "are evaluating",
              "have evaluated",
              "evaluated"
            ],
            "explanation": "'Currently' describes an ongoing action taking the Present Continuous ('are evaluating')."
          },
          {
            "id": "tenses-aspect_ex4_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Between 2000 and 2005, manufacturing output ___ by approximately twelve percent.",
            "answer": "decreased",
            "acceptableAnswers": [
              "decreased",
              "decreased",
              "DECREASED"
            ],
            "options": [
              "has decreased",
              "decreased",
              "had been decreased",
              "is decreasing"
            ],
            "explanation": "A completed past timeframe requires the Past Simple ('decreased')."
          },
          {
            "id": "tenses-aspect_ex4_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research team ___ the clinical trials for six months before publishing their findings.",
            "answer": "had been conducting",
            "acceptableAnswers": [
              "had been conducting",
              "had been conducting",
              "HAD BEEN CONDUCTING"
            ],
            "options": [
              "had been conducting",
              "have conducted",
              "were conducted",
              "are conducting"
            ],
            "explanation": "A continuous activity preceding another past event requires the Past Perfect Continuous."
          },
          {
            "id": "tenses-aspect_ex4_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "According to recent projections, global fossil fuel consumption ___ after 2030.",
            "answer": "will plateau",
            "acceptableAnswers": [
              "will plateau",
              "will plateau",
              "WILL PLATEAU"
            ],
            "options": [
              "will plateau",
              "plateaus",
              "has plateaued",
              "had plateaued"
            ],
            "explanation": "Future academic forecasts use modal 'will' ('will plateau')."
          },
          {
            "id": "tenses-aspect_ex4_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The government ___ several educational subsidies since the beginning of this fiscal term.",
            "answer": "has sanctioned",
            "acceptableAnswers": [
              "has sanctioned",
              "has sanctioned",
              "HAS SANCTIONED"
            ],
            "options": [
              "has sanctioned",
              "sanctioned",
              "had sanctioned",
              "sanctions"
            ],
            "explanation": "'Since the beginning' mandates the Present Perfect ('has sanctioned')."
          },
          {
            "id": "tenses-aspect_ex4_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "When the monetary policy was revised, commercial banks ___ their prime lending rates.",
            "answer": "adjusted",
            "acceptableAnswers": [
              "adjusted",
              "adjusted",
              "ADJUSTED"
            ],
            "options": [
              "are adjusting",
              "have adjusted",
              "adjusted",
              "had been adjusted"
            ],
            "explanation": "Sequential past events in a narrative require the Past Simple ('adjusted')."
          },
          {
            "id": "tenses-aspect_ex4_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By midnight yesterday, the firefighters ___ the chemical blaze completely.",
            "answer": "had extinguished",
            "acceptableAnswers": [
              "had extinguished",
              "had extinguished",
              "HAD EXTINGUISHED"
            ],
            "options": [
              "extinguish",
              "had extinguished",
              "extinguished",
              "have extinguished"
            ],
            "explanation": "'By midnight yesterday' designates a past deadline, requiring the Past Perfect ('had extinguished')."
          },
          {
            "id": "tenses-aspect_ex4_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban planners observe that suburban commuting times ___ steadily over the past five years.",
            "answer": "have been lengthening",
            "acceptableAnswers": [
              "have been lengthening",
              "have been lengthening",
              "HAVE BEEN LENGTHENING"
            ],
            "options": [
              "are lengthen",
              "had lengthened",
              "have been lengthening",
              "lengthened"
            ],
            "explanation": "An action starting in the past and continuing to present duration takes the Present Perfect Continuous."
          },
          {
            "id": "tenses-aspect_ex4_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "In the 18th century, steam power ___ the transport industry fundamentally.",
            "answer": "transformed",
            "acceptableAnswers": [
              "transformed",
              "transformed",
              "TRANSFORMED"
            ],
            "options": [
              "has transformed",
              "was transforming",
              "had transformed",
              "transformed"
            ],
            "explanation": "A past era requires the Past Simple ('transformed')."
          }
        ]
      },
      {
        "id": "tenses-aspect_ex_5",
        "number": 5,
        "title": "Exercise 5",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "tenses-aspect_ex5_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The municipal council is currently upgrading drainage canals to withstand severe monsoon flash floodings.",
            "correctSequence": [
              "The municipal council is currently",
              "upgrading drainage canals to",
              "withstand severe monsoon",
              "flash floodings."
            ],
            "shuffledTokens": [
              "upgrading drainage canals to",
              "The municipal council is currently",
              "withstand severe monsoon",
              "flash floodings."
            ],
            "explanation": "The adverb 'currently' indicates an ongoing present process, requiring the Present Continuous."
          },
          {
            "id": "tenses-aspect_ex5_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By 2035, automated technologies will have transformed the nature of industrial assembly and manual labor.",
            "correctSequence": [
              "By 2035, automated technologies",
              "will have transformed the nature",
              "of industrial assembly",
              "and manual labor."
            ],
            "shuffledTokens": [
              "will have transformed the nature",
              "By 2035, automated technologies",
              "of industrial assembly",
              "and manual labor."
            ],
            "explanation": "The Future Perfect ('will have transformed') denotes an action that will be completed by a future benchmark."
          },
          {
            "id": "tenses-aspect_ex5_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "During the nineteenth century, mechanized textile production supplanted traditional domestic cottage industries.",
            "correctSequence": [
              "During the nineteenth century,",
              "mechanized textile production",
              "supplanted traditional domestic",
              "cottage industries."
            ],
            "shuffledTokens": [
              "mechanized textile production",
              "During the nineteenth century,",
              "supplanted traditional domestic",
              "cottage industries."
            ],
            "explanation": "A completed historic century strictly requires the Past Simple ('supplanted')."
          },
          {
            "id": "tenses-aspect_ex5_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "For the past five years, the local government has been subsidizing electric vehicle battery replacements.",
            "correctSequence": [
              "For the past five years,",
              "the local government has been",
              "subsidizing electric vehicle",
              "battery replacements."
            ],
            "shuffledTokens": [
              "the local government has been",
              "For the past five years,",
              "subsidizing electric vehicle",
              "battery replacements."
            ],
            "explanation": "'For the past five years' requires the Present Perfect Continuous for an action starting in the past and still ongoing."
          },
          {
            "id": "tenses-aspect_ex5_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientists discovered that the glacier had retreated over two kilometers before monitoring equipment was installed.",
            "correctSequence": [
              "Scientists discovered that the glacier",
              "had retreated over two kilometers",
              "before monitoring equipment",
              "was installed."
            ],
            "shuffledTokens": [
              "Scientists discovered that the glacier",
              "had retreated over two kilometers",
              "was installed.",
              "before monitoring equipment"
            ],
            "explanation": "The retreat occurred before monitoring equipment was installed, requiring the Past Perfect ('had retreated')."
          },
          {
            "id": "tenses-aspect_ex5_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Economists anticipate that inflation will decelerate once supply chain bottlenecks are fully resolved abroad.",
            "correctSequence": [
              "Economists anticipate that inflation",
              "will decelerate once supply chain",
              "bottlenecks are fully",
              "resolved abroad."
            ],
            "shuffledTokens": [
              "Economists anticipate that inflation",
              "will decelerate once supply chain",
              "resolved abroad.",
              "bottlenecks are fully"
            ],
            "explanation": "A future main clause takes 'will decelerate' while the time clause takes the present simple 'are resolved'."
          },
          {
            "id": "tenses-aspect_ex5_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In 2018, passenger numbers reached an unprecedented peak before falling sharply in subsequent months.",
            "correctSequence": [
              "In 2018, passenger numbers",
              "reached an unprecedented peak",
              "before falling sharply",
              "in subsequent months."
            ],
            "shuffledTokens": [
              "In 2018, passenger numbers",
              "in subsequent months.",
              "before falling sharply",
              "reached an unprecedented peak"
            ],
            "explanation": "The specific year 'In 2018' requires the Past Simple ('reached')."
          },
          {
            "id": "tenses-aspect_ex5_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Medical authorities have recently approved a revolutionary therapy for chronic neurological disorders.",
            "correctSequence": [
              "Medical authorities have recently",
              "approved a revolutionary therapy",
              "for chronic neurological",
              "disorders."
            ],
            "shuffledTokens": [
              "Medical authorities have recently",
              "disorders.",
              "for chronic neurological",
              "approved a revolutionary therapy"
            ],
            "explanation": "Recent developments with present clinical relevance take the Present Perfect ('have approved')."
          },
          {
            "id": "tenses-aspect_ex5_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "As early childhood educators were implementing novel phonics methods, reading comprehension scores rose substantially.",
            "correctSequence": [
              "As early childhood educators were",
              "implementing novel phonics methods,",
              "reading comprehension scores",
              "rose substantially."
            ],
            "shuffledTokens": [
              "rose substantially.",
              "reading comprehension scores",
              "implementing novel phonics methods,",
              "As early childhood educators were"
            ],
            "explanation": "Past continuous background ('were implementing') followed by past simple outcome ('rose')."
          },
          {
            "id": "tenses-aspect_ex5_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Had the municipal government acted earlier, catastrophic urban flooding could have been mitigated effectively.",
            "correctSequence": [
              "Had the municipal government",
              "acted earlier, catastrophic urban",
              "flooding could have been",
              "mitigated effectively."
            ],
            "shuffledTokens": [
              "mitigated effectively.",
              "flooding could have been",
              "acted earlier, catastrophic urban",
              "Had the municipal government"
            ],
            "explanation": "Inverted third conditional structure denoting an unrealized past hypothetical scenario."
          },
          {
            "id": "tenses-aspect_ex5_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Between 2000 and 2005, manufacturing output ___ by approximately twelve percent.",
            "answer": "decreased",
            "acceptableAnswers": [
              "decreased",
              "decreased",
              "DECREASED"
            ],
            "options": [
              "decreased",
              "has decreased",
              "is decreasing",
              "had been decreased"
            ],
            "explanation": "A completed past timeframe requires the Past Simple ('decreased')."
          },
          {
            "id": "tenses-aspect_ex5_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research team ___ the clinical trials for six months before publishing their findings.",
            "answer": "had been conducting",
            "acceptableAnswers": [
              "had been conducting",
              "had been conducting",
              "HAD BEEN CONDUCTING"
            ],
            "options": [
              "had been conducting",
              "have conducted",
              "were conducted",
              "are conducting"
            ],
            "explanation": "A continuous activity preceding another past event requires the Past Perfect Continuous."
          },
          {
            "id": "tenses-aspect_ex5_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "According to recent projections, global fossil fuel consumption ___ after 2030.",
            "answer": "will plateau",
            "acceptableAnswers": [
              "will plateau",
              "will plateau",
              "WILL PLATEAU"
            ],
            "options": [
              "will plateau",
              "plateaus",
              "has plateaued",
              "had plateaued"
            ],
            "explanation": "Future academic forecasts use modal 'will' ('will plateau')."
          },
          {
            "id": "tenses-aspect_ex5_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The government ___ several educational subsidies since the beginning of this fiscal term.",
            "answer": "has sanctioned",
            "acceptableAnswers": [
              "has sanctioned",
              "has sanctioned",
              "HAS SANCTIONED"
            ],
            "options": [
              "had sanctioned",
              "sanctioned",
              "has sanctioned",
              "sanctions"
            ],
            "explanation": "'Since the beginning' mandates the Present Perfect ('has sanctioned')."
          },
          {
            "id": "tenses-aspect_ex5_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "When the monetary policy was revised, commercial banks ___ their prime lending rates.",
            "answer": "adjusted",
            "acceptableAnswers": [
              "adjusted",
              "adjusted",
              "ADJUSTED"
            ],
            "options": [
              "adjusted",
              "are adjusting",
              "have adjusted",
              "had been adjusted"
            ],
            "explanation": "Sequential past events in a narrative require the Past Simple ('adjusted')."
          },
          {
            "id": "tenses-aspect_ex5_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By midnight yesterday, the firefighters ___ the chemical blaze completely.",
            "answer": "had extinguished",
            "acceptableAnswers": [
              "had extinguished",
              "had extinguished",
              "HAD EXTINGUISHED"
            ],
            "options": [
              "had extinguished",
              "have extinguished",
              "extinguish",
              "extinguished"
            ],
            "explanation": "'By midnight yesterday' designates a past deadline, requiring the Past Perfect ('had extinguished')."
          },
          {
            "id": "tenses-aspect_ex5_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban planners observe that suburban commuting times ___ steadily over the past five years.",
            "answer": "have been lengthening",
            "acceptableAnswers": [
              "have been lengthening",
              "have been lengthening",
              "HAVE BEEN LENGTHENING"
            ],
            "options": [
              "are lengthen",
              "had lengthened",
              "have been lengthening",
              "lengthened"
            ],
            "explanation": "An action starting in the past and continuing to present duration takes the Present Perfect Continuous."
          },
          {
            "id": "tenses-aspect_ex5_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "In the 18th century, steam power ___ the transport industry fundamentally.",
            "answer": "transformed",
            "acceptableAnswers": [
              "transformed",
              "transformed",
              "TRANSFORMED"
            ],
            "options": [
              "has transformed",
              "transformed",
              "was transforming",
              "had transformed"
            ],
            "explanation": "A past era requires the Past Simple ('transformed')."
          },
          {
            "id": "tenses-aspect_ex5_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "It is forecasted that renewable energy ___ eighty percent of electricity generation by 2040.",
            "answer": "will supply",
            "acceptableAnswers": [
              "will supply",
              "will supply",
              "WILL SUPPLY"
            ],
            "options": [
              "will supply",
              "supplies",
              "supplied",
              "has supplied"
            ],
            "explanation": "A future forecast uses the future simple auxiliary 'will supply'."
          },
          {
            "id": "tenses-aspect_ex5_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The archaeological team discovered artifacts that ___ underground for millennia.",
            "answer": "had lain",
            "acceptableAnswers": [
              "had lain",
              "had lain",
              "HAD LAIN"
            ],
            "options": [
              "had lain",
              "have lain",
              "lay",
              "are lying"
            ],
            "explanation": "The artifacts lay buried prior to discovery, requiring the Past Perfect ('had lain')."
          }
        ]
      },
      {
        "id": "tenses-aspect_ex_6",
        "number": 6,
        "title": "Exercise 6",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "tenses-aspect_ex6_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "During the nineteenth century, mechanized textile production supplanted traditional domestic cottage industries.",
            "correctSequence": [
              "During the nineteenth century,",
              "mechanized textile production",
              "supplanted traditional domestic",
              "cottage industries."
            ],
            "shuffledTokens": [
              "mechanized textile production",
              "During the nineteenth century,",
              "supplanted traditional domestic",
              "cottage industries."
            ],
            "explanation": "A completed historic century strictly requires the Past Simple ('supplanted')."
          },
          {
            "id": "tenses-aspect_ex6_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "For the past five years, the local government has been subsidizing electric vehicle battery replacements.",
            "correctSequence": [
              "For the past five years,",
              "the local government has been",
              "subsidizing electric vehicle",
              "battery replacements."
            ],
            "shuffledTokens": [
              "the local government has been",
              "For the past five years,",
              "subsidizing electric vehicle",
              "battery replacements."
            ],
            "explanation": "'For the past five years' requires the Present Perfect Continuous for an action starting in the past and still ongoing."
          },
          {
            "id": "tenses-aspect_ex6_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientists discovered that the glacier had retreated over two kilometers before monitoring equipment was installed.",
            "correctSequence": [
              "Scientists discovered that the glacier",
              "had retreated over two kilometers",
              "before monitoring equipment",
              "was installed."
            ],
            "shuffledTokens": [
              "had retreated over two kilometers",
              "Scientists discovered that the glacier",
              "before monitoring equipment",
              "was installed."
            ],
            "explanation": "The retreat occurred before monitoring equipment was installed, requiring the Past Perfect ('had retreated')."
          },
          {
            "id": "tenses-aspect_ex6_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Economists anticipate that inflation will decelerate once supply chain bottlenecks are fully resolved abroad.",
            "correctSequence": [
              "Economists anticipate that inflation",
              "will decelerate once supply chain",
              "bottlenecks are fully",
              "resolved abroad."
            ],
            "shuffledTokens": [
              "will decelerate once supply chain",
              "Economists anticipate that inflation",
              "bottlenecks are fully",
              "resolved abroad."
            ],
            "explanation": "A future main clause takes 'will decelerate' while the time clause takes the present simple 'are resolved'."
          },
          {
            "id": "tenses-aspect_ex6_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In 2018, passenger numbers reached an unprecedented peak before falling sharply in subsequent months.",
            "correctSequence": [
              "In 2018, passenger numbers",
              "reached an unprecedented peak",
              "before falling sharply",
              "in subsequent months."
            ],
            "shuffledTokens": [
              "reached an unprecedented peak",
              "In 2018, passenger numbers",
              "before falling sharply",
              "in subsequent months."
            ],
            "explanation": "The specific year 'In 2018' requires the Past Simple ('reached')."
          },
          {
            "id": "tenses-aspect_ex6_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Medical authorities have recently approved a revolutionary therapy for chronic neurological disorders.",
            "correctSequence": [
              "Medical authorities have recently",
              "approved a revolutionary therapy",
              "for chronic neurological",
              "disorders."
            ],
            "shuffledTokens": [
              "approved a revolutionary therapy",
              "Medical authorities have recently",
              "for chronic neurological",
              "disorders."
            ],
            "explanation": "Recent developments with present clinical relevance take the Present Perfect ('have approved')."
          },
          {
            "id": "tenses-aspect_ex6_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "As early childhood educators were implementing novel phonics methods, reading comprehension scores rose substantially.",
            "correctSequence": [
              "As early childhood educators were",
              "implementing novel phonics methods,",
              "reading comprehension scores",
              "rose substantially."
            ],
            "shuffledTokens": [
              "implementing novel phonics methods,",
              "As early childhood educators were",
              "reading comprehension scores",
              "rose substantially."
            ],
            "explanation": "Past continuous background ('were implementing') followed by past simple outcome ('rose')."
          },
          {
            "id": "tenses-aspect_ex6_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Had the municipal government acted earlier, catastrophic urban flooding could have been mitigated effectively.",
            "correctSequence": [
              "Had the municipal government",
              "acted earlier, catastrophic urban",
              "flooding could have been",
              "mitigated effectively."
            ],
            "shuffledTokens": [
              "Had the municipal government",
              "acted earlier, catastrophic urban",
              "mitigated effectively.",
              "flooding could have been"
            ],
            "explanation": "Inverted third conditional structure denoting an unrealized past hypothetical scenario."
          },
          {
            "id": "tenses-aspect_ex6_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The proportion of remote workers has hovered around thirty percent throughout the post-pandemic recovery period.",
            "correctSequence": [
              "The proportion of remote workers",
              "has hovered around thirty percent",
              "throughout the post-pandemic",
              "recovery period."
            ],
            "shuffledTokens": [
              "The proportion of remote workers",
              "has hovered around thirty percent",
              "recovery period.",
              "throughout the post-pandemic"
            ],
            "explanation": "The duration 'throughout the post-pandemic recovery' connects to current conditions, taking the Present Perfect."
          },
          {
            "id": "tenses-aspect_ex6_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By the conclusion of the summit, delegates had ratified seventeen multilateral environmental pacts.",
            "correctSequence": [
              "By the conclusion of the summit,",
              "delegates had ratified seventeen",
              "multilateral environmental",
              "pacts."
            ],
            "shuffledTokens": [
              "By the conclusion of the summit,",
              "delegates had ratified seventeen",
              "pacts.",
              "multilateral environmental"
            ],
            "explanation": "Denoting completion before a past endpoint ('By the conclusion') necessitates the Past Perfect ('had ratified')."
          },
          {
            "id": "tenses-aspect_ex6_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "According to recent projections, global fossil fuel consumption ___ after 2030.",
            "answer": "will plateau",
            "acceptableAnswers": [
              "will plateau",
              "will plateau",
              "WILL PLATEAU"
            ],
            "options": [
              "will plateau",
              "plateaus",
              "has plateaued",
              "had plateaued"
            ],
            "explanation": "Future academic forecasts use modal 'will' ('will plateau')."
          },
          {
            "id": "tenses-aspect_ex6_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The government ___ several educational subsidies since the beginning of this fiscal term.",
            "answer": "has sanctioned",
            "acceptableAnswers": [
              "has sanctioned",
              "has sanctioned",
              "HAS SANCTIONED"
            ],
            "options": [
              "sanctions",
              "sanctioned",
              "has sanctioned",
              "had sanctioned"
            ],
            "explanation": "'Since the beginning' mandates the Present Perfect ('has sanctioned')."
          },
          {
            "id": "tenses-aspect_ex6_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "When the monetary policy was revised, commercial banks ___ their prime lending rates.",
            "answer": "adjusted",
            "acceptableAnswers": [
              "adjusted",
              "adjusted",
              "ADJUSTED"
            ],
            "options": [
              "are adjusting",
              "had been adjusted",
              "have adjusted",
              "adjusted"
            ],
            "explanation": "Sequential past events in a narrative require the Past Simple ('adjusted')."
          },
          {
            "id": "tenses-aspect_ex6_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By midnight yesterday, the firefighters ___ the chemical blaze completely.",
            "answer": "had extinguished",
            "acceptableAnswers": [
              "had extinguished",
              "had extinguished",
              "HAD EXTINGUISHED"
            ],
            "options": [
              "extinguish",
              "had extinguished",
              "have extinguished",
              "extinguished"
            ],
            "explanation": "'By midnight yesterday' designates a past deadline, requiring the Past Perfect ('had extinguished')."
          },
          {
            "id": "tenses-aspect_ex6_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban planners observe that suburban commuting times ___ steadily over the past five years.",
            "answer": "have been lengthening",
            "acceptableAnswers": [
              "have been lengthening",
              "have been lengthening",
              "HAVE BEEN LENGTHENING"
            ],
            "options": [
              "lengthened",
              "are lengthen",
              "had lengthened",
              "have been lengthening"
            ],
            "explanation": "An action starting in the past and continuing to present duration takes the Present Perfect Continuous."
          },
          {
            "id": "tenses-aspect_ex6_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "In the 18th century, steam power ___ the transport industry fundamentally.",
            "answer": "transformed",
            "acceptableAnswers": [
              "transformed",
              "transformed",
              "TRANSFORMED"
            ],
            "options": [
              "transformed",
              "has transformed",
              "had transformed",
              "was transforming"
            ],
            "explanation": "A past era requires the Past Simple ('transformed')."
          },
          {
            "id": "tenses-aspect_ex6_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "It is forecasted that renewable energy ___ eighty percent of electricity generation by 2040.",
            "answer": "will supply",
            "acceptableAnswers": [
              "will supply",
              "will supply",
              "WILL SUPPLY"
            ],
            "options": [
              "will supply",
              "supplies",
              "supplied",
              "has supplied"
            ],
            "explanation": "A future forecast uses the future simple auxiliary 'will supply'."
          },
          {
            "id": "tenses-aspect_ex6_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The archaeological team discovered artifacts that ___ underground for millennia.",
            "answer": "had lain",
            "acceptableAnswers": [
              "had lain",
              "had lain",
              "HAD LAIN"
            ],
            "options": [
              "had lain",
              "have lain",
              "lay",
              "are lying"
            ],
            "explanation": "The artifacts lay buried prior to discovery, requiring the Past Perfect ('had lain')."
          },
          {
            "id": "tenses-aspect_ex6_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Recently, several Scandinavian nations ___ zero-waste circular economy directives.",
            "answer": "have enacted",
            "acceptableAnswers": [
              "have enacted",
              "have enacted",
              "HAVE ENACTED"
            ],
            "options": [
              "had enacted",
              "enacted",
              "have enacted",
              "are enacted"
            ],
            "explanation": "'Recently' indicating a recent past action with current relevance takes the Present Perfect ('have enacted')."
          },
          {
            "id": "tenses-aspect_ex6_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By the year 2050, medical robotic surgeons ___ standard procedures in operating theaters.",
            "answer": "will have become",
            "acceptableAnswers": [
              "will have become",
              "will have become",
              "WILL HAVE BECOME"
            ],
            "options": [
              "will have become",
              "have become",
              "will become",
              "became"
            ],
            "explanation": "'By 2050' requires the Future Perfect ('will have become')."
          }
        ]
      },
      {
        "id": "tenses-aspect_ex_7",
        "number": 7,
        "title": "Exercise 7",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "tenses-aspect_ex7_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientists discovered that the glacier had retreated over two kilometers before monitoring equipment was installed.",
            "correctSequence": [
              "Scientists discovered that the glacier",
              "had retreated over two kilometers",
              "before monitoring equipment",
              "was installed."
            ],
            "shuffledTokens": [
              "had retreated over two kilometers",
              "was installed.",
              "Scientists discovered that the glacier",
              "before monitoring equipment"
            ],
            "explanation": "The retreat occurred before monitoring equipment was installed, requiring the Past Perfect ('had retreated')."
          },
          {
            "id": "tenses-aspect_ex7_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Economists anticipate that inflation will decelerate once supply chain bottlenecks are fully resolved abroad.",
            "correctSequence": [
              "Economists anticipate that inflation",
              "will decelerate once supply chain",
              "bottlenecks are fully",
              "resolved abroad."
            ],
            "shuffledTokens": [
              "bottlenecks are fully",
              "Economists anticipate that inflation",
              "will decelerate once supply chain",
              "resolved abroad."
            ],
            "explanation": "A future main clause takes 'will decelerate' while the time clause takes the present simple 'are resolved'."
          },
          {
            "id": "tenses-aspect_ex7_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In 2018, passenger numbers reached an unprecedented peak before falling sharply in subsequent months.",
            "correctSequence": [
              "In 2018, passenger numbers",
              "reached an unprecedented peak",
              "before falling sharply",
              "in subsequent months."
            ],
            "shuffledTokens": [
              "before falling sharply",
              "In 2018, passenger numbers",
              "reached an unprecedented peak",
              "in subsequent months."
            ],
            "explanation": "The specific year 'In 2018' requires the Past Simple ('reached')."
          },
          {
            "id": "tenses-aspect_ex7_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Medical authorities have recently approved a revolutionary therapy for chronic neurological disorders.",
            "correctSequence": [
              "Medical authorities have recently",
              "approved a revolutionary therapy",
              "for chronic neurological",
              "disorders."
            ],
            "shuffledTokens": [
              "approved a revolutionary therapy",
              "Medical authorities have recently",
              "for chronic neurological",
              "disorders."
            ],
            "explanation": "Recent developments with present clinical relevance take the Present Perfect ('have approved')."
          },
          {
            "id": "tenses-aspect_ex7_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "As early childhood educators were implementing novel phonics methods, reading comprehension scores rose substantially.",
            "correctSequence": [
              "As early childhood educators were",
              "implementing novel phonics methods,",
              "reading comprehension scores",
              "rose substantially."
            ],
            "shuffledTokens": [
              "implementing novel phonics methods,",
              "As early childhood educators were",
              "reading comprehension scores",
              "rose substantially."
            ],
            "explanation": "Past continuous background ('were implementing') followed by past simple outcome ('rose')."
          },
          {
            "id": "tenses-aspect_ex7_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Had the municipal government acted earlier, catastrophic urban flooding could have been mitigated effectively.",
            "correctSequence": [
              "Had the municipal government",
              "acted earlier, catastrophic urban",
              "flooding could have been",
              "mitigated effectively."
            ],
            "shuffledTokens": [
              "acted earlier, catastrophic urban",
              "Had the municipal government",
              "flooding could have been",
              "mitigated effectively."
            ],
            "explanation": "Inverted third conditional structure denoting an unrealized past hypothetical scenario."
          },
          {
            "id": "tenses-aspect_ex7_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The proportion of remote workers has hovered around thirty percent throughout the post-pandemic recovery period.",
            "correctSequence": [
              "The proportion of remote workers",
              "has hovered around thirty percent",
              "throughout the post-pandemic",
              "recovery period."
            ],
            "shuffledTokens": [
              "has hovered around thirty percent",
              "The proportion of remote workers",
              "throughout the post-pandemic",
              "recovery period."
            ],
            "explanation": "The duration 'throughout the post-pandemic recovery' connects to current conditions, taking the Present Perfect."
          },
          {
            "id": "tenses-aspect_ex7_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By the conclusion of the summit, delegates had ratified seventeen multilateral environmental pacts.",
            "correctSequence": [
              "By the conclusion of the summit,",
              "delegates had ratified seventeen",
              "multilateral environmental",
              "pacts."
            ],
            "shuffledTokens": [
              "delegates had ratified seventeen",
              "By the conclusion of the summit,",
              "multilateral environmental",
              "pacts."
            ],
            "explanation": "Denoting completion before a past endpoint ('By the conclusion') necessitates the Past Perfect ('had ratified')."
          },
          {
            "id": "tenses-aspect_ex7_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Between 1995 and 2010, carbon dioxide emissions plummeted by thirty percent across Western Europe.",
            "correctSequence": [
              "Between 1995 and 2010,",
              "carbon dioxide emissions",
              "plummeted by thirty percent",
              "across Western Europe."
            ],
            "shuffledTokens": [
              "carbon dioxide emissions",
              "Between 1995 and 2010,",
              "plummeted by thirty percent",
              "across Western Europe."
            ],
            "explanation": "Use the Past Simple ('plummeted') for events anchored in a completed past time period."
          },
          {
            "id": "tenses-aspect_ex7_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Since the introduction of stricter environmental legislation, air quality index scores have improved markedly.",
            "correctSequence": [
              "Since the introduction of",
              "stricter environmental legislation,",
              "air quality index scores",
              "have improved markedly."
            ],
            "shuffledTokens": [
              "stricter environmental legislation,",
              "Since the introduction of",
              "air quality index scores",
              "have improved markedly."
            ],
            "explanation": "The preposition 'Since' with past origin requires the Present Perfect ('have improved')."
          },
          {
            "id": "tenses-aspect_ex7_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "When the monetary policy was revised, commercial banks ___ their prime lending rates.",
            "answer": "adjusted",
            "acceptableAnswers": [
              "adjusted",
              "adjusted",
              "ADJUSTED"
            ],
            "options": [
              "had been adjusted",
              "adjusted",
              "are adjusting",
              "have adjusted"
            ],
            "explanation": "Sequential past events in a narrative require the Past Simple ('adjusted')."
          },
          {
            "id": "tenses-aspect_ex7_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By midnight yesterday, the firefighters ___ the chemical blaze completely.",
            "answer": "had extinguished",
            "acceptableAnswers": [
              "had extinguished",
              "had extinguished",
              "HAD EXTINGUISHED"
            ],
            "options": [
              "extinguished",
              "had extinguished",
              "extinguish",
              "have extinguished"
            ],
            "explanation": "'By midnight yesterday' designates a past deadline, requiring the Past Perfect ('had extinguished')."
          },
          {
            "id": "tenses-aspect_ex7_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban planners observe that suburban commuting times ___ steadily over the past five years.",
            "answer": "have been lengthening",
            "acceptableAnswers": [
              "have been lengthening",
              "have been lengthening",
              "HAVE BEEN LENGTHENING"
            ],
            "options": [
              "lengthened",
              "have been lengthening",
              "are lengthen",
              "had lengthened"
            ],
            "explanation": "An action starting in the past and continuing to present duration takes the Present Perfect Continuous."
          },
          {
            "id": "tenses-aspect_ex7_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "In the 18th century, steam power ___ the transport industry fundamentally.",
            "answer": "transformed",
            "acceptableAnswers": [
              "transformed",
              "transformed",
              "TRANSFORMED"
            ],
            "options": [
              "transformed",
              "has transformed",
              "had transformed",
              "was transforming"
            ],
            "explanation": "A past era requires the Past Simple ('transformed')."
          },
          {
            "id": "tenses-aspect_ex7_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "It is forecasted that renewable energy ___ eighty percent of electricity generation by 2040.",
            "answer": "will supply",
            "acceptableAnswers": [
              "will supply",
              "will supply",
              "WILL SUPPLY"
            ],
            "options": [
              "will supply",
              "supplies",
              "supplied",
              "has supplied"
            ],
            "explanation": "A future forecast uses the future simple auxiliary 'will supply'."
          },
          {
            "id": "tenses-aspect_ex7_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The archaeological team discovered artifacts that ___ underground for millennia.",
            "answer": "had lain",
            "acceptableAnswers": [
              "had lain",
              "had lain",
              "HAD LAIN"
            ],
            "options": [
              "had lain",
              "have lain",
              "lay",
              "are lying"
            ],
            "explanation": "The artifacts lay buried prior to discovery, requiring the Past Perfect ('had lain')."
          },
          {
            "id": "tenses-aspect_ex7_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Recently, several Scandinavian nations ___ zero-waste circular economy directives.",
            "answer": "have enacted",
            "acceptableAnswers": [
              "have enacted",
              "have enacted",
              "HAVE ENACTED"
            ],
            "options": [
              "are enacted",
              "enacted",
              "have enacted",
              "had enacted"
            ],
            "explanation": "'Recently' indicating a recent past action with current relevance takes the Present Perfect ('have enacted')."
          },
          {
            "id": "tenses-aspect_ex7_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By the year 2050, medical robotic surgeons ___ standard procedures in operating theaters.",
            "answer": "will have become",
            "acceptableAnswers": [
              "will have become",
              "will have become",
              "WILL HAVE BECOME"
            ],
            "options": [
              "have become",
              "became",
              "will become",
              "will have become"
            ],
            "explanation": "'By 2050' requires the Future Perfect ('will have become')."
          },
          {
            "id": "tenses-aspect_ex7_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "In 2015, the proportion of solar energy users ___ dramatically across rural communities.",
            "answer": "rose",
            "acceptableAnswers": [
              "rose",
              "rose",
              "ROSE"
            ],
            "options": [
              "had been rising",
              "is rising",
              "rose",
              "has risen"
            ],
            "explanation": "A specific historical year ('In 2015') requires the Past Simple ('rose')."
          },
          {
            "id": "tenses-aspect_ex7_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Since 2018, the municipality ___ over three million dollars in solar charging hubs.",
            "answer": "has invested",
            "acceptableAnswers": [
              "has invested",
              "has invested",
              "HAS INVESTED"
            ],
            "options": [
              "invested",
              "invests",
              "had invested",
              "has invested"
            ],
            "explanation": "The temporal marker 'Since 2018' dictates the Present Perfect ('has invested')."
          }
        ]
      },
      {
        "id": "tenses-aspect_ex_8",
        "number": 8,
        "title": "Exercise 8",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "tenses-aspect_ex8_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In 2018, passenger numbers reached an unprecedented peak before falling sharply in subsequent months.",
            "correctSequence": [
              "In 2018, passenger numbers",
              "reached an unprecedented peak",
              "before falling sharply",
              "in subsequent months."
            ],
            "shuffledTokens": [
              "before falling sharply",
              "reached an unprecedented peak",
              "in subsequent months.",
              "In 2018, passenger numbers"
            ],
            "explanation": "The specific year 'In 2018' requires the Past Simple ('reached')."
          },
          {
            "id": "tenses-aspect_ex8_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Medical authorities have recently approved a revolutionary therapy for chronic neurological disorders.",
            "correctSequence": [
              "Medical authorities have recently",
              "approved a revolutionary therapy",
              "for chronic neurological",
              "disorders."
            ],
            "shuffledTokens": [
              "disorders.",
              "for chronic neurological",
              "Medical authorities have recently",
              "approved a revolutionary therapy"
            ],
            "explanation": "Recent developments with present clinical relevance take the Present Perfect ('have approved')."
          },
          {
            "id": "tenses-aspect_ex8_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "As early childhood educators were implementing novel phonics methods, reading comprehension scores rose substantially.",
            "correctSequence": [
              "As early childhood educators were",
              "implementing novel phonics methods,",
              "reading comprehension scores",
              "rose substantially."
            ],
            "shuffledTokens": [
              "rose substantially.",
              "reading comprehension scores",
              "As early childhood educators were",
              "implementing novel phonics methods,"
            ],
            "explanation": "Past continuous background ('were implementing') followed by past simple outcome ('rose')."
          },
          {
            "id": "tenses-aspect_ex8_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Had the municipal government acted earlier, catastrophic urban flooding could have been mitigated effectively.",
            "correctSequence": [
              "Had the municipal government",
              "acted earlier, catastrophic urban",
              "flooding could have been",
              "mitigated effectively."
            ],
            "shuffledTokens": [
              "acted earlier, catastrophic urban",
              "mitigated effectively.",
              "Had the municipal government",
              "flooding could have been"
            ],
            "explanation": "Inverted third conditional structure denoting an unrealized past hypothetical scenario."
          },
          {
            "id": "tenses-aspect_ex8_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The proportion of remote workers has hovered around thirty percent throughout the post-pandemic recovery period.",
            "correctSequence": [
              "The proportion of remote workers",
              "has hovered around thirty percent",
              "throughout the post-pandemic",
              "recovery period."
            ],
            "shuffledTokens": [
              "recovery period.",
              "The proportion of remote workers",
              "has hovered around thirty percent",
              "throughout the post-pandemic"
            ],
            "explanation": "The duration 'throughout the post-pandemic recovery' connects to current conditions, taking the Present Perfect."
          },
          {
            "id": "tenses-aspect_ex8_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By the conclusion of the summit, delegates had ratified seventeen multilateral environmental pacts.",
            "correctSequence": [
              "By the conclusion of the summit,",
              "delegates had ratified seventeen",
              "multilateral environmental",
              "pacts."
            ],
            "shuffledTokens": [
              "multilateral environmental",
              "By the conclusion of the summit,",
              "delegates had ratified seventeen",
              "pacts."
            ],
            "explanation": "Denoting completion before a past endpoint ('By the conclusion') necessitates the Past Perfect ('had ratified')."
          },
          {
            "id": "tenses-aspect_ex8_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Between 1995 and 2010, carbon dioxide emissions plummeted by thirty percent across Western Europe.",
            "correctSequence": [
              "Between 1995 and 2010,",
              "carbon dioxide emissions",
              "plummeted by thirty percent",
              "across Western Europe."
            ],
            "shuffledTokens": [
              "plummeted by thirty percent",
              "Between 1995 and 2010,",
              "carbon dioxide emissions",
              "across Western Europe."
            ],
            "explanation": "Use the Past Simple ('plummeted') for events anchored in a completed past time period."
          },
          {
            "id": "tenses-aspect_ex8_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Since the introduction of stricter environmental legislation, air quality index scores have improved markedly.",
            "correctSequence": [
              "Since the introduction of",
              "stricter environmental legislation,",
              "air quality index scores",
              "have improved markedly."
            ],
            "shuffledTokens": [
              "stricter environmental legislation,",
              "Since the introduction of",
              "air quality index scores",
              "have improved markedly."
            ],
            "explanation": "The preposition 'Since' with past origin requires the Present Perfect ('have improved')."
          },
          {
            "id": "tenses-aspect_ex8_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By the time the new metro terminal was inaugurated, commuters had already adapted to bus rapid transit.",
            "correctSequence": [
              "By the time the new",
              "metro terminal was inaugurated,",
              "commuters had already adapted",
              "to bus rapid transit."
            ],
            "shuffledTokens": [
              "metro terminal was inaugurated,",
              "By the time the new",
              "commuters had already adapted",
              "to bus rapid transit."
            ],
            "explanation": "The Past Perfect ('had already adapted') establishes an action completed before another past event."
          },
          {
            "id": "tenses-aspect_ex8_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Global temperatures are projected to ascend steadily unless mitigation initiatives are swiftly instituted.",
            "correctSequence": [
              "Global temperatures are projected",
              "to ascend steadily unless",
              "mitigation initiatives are",
              "swiftly instituted."
            ],
            "shuffledTokens": [
              "to ascend steadily unless",
              "Global temperatures are projected",
              "mitigation initiatives are",
              "swiftly instituted."
            ],
            "explanation": "Academic projections use passive present forms ('are projected') followed by a condition."
          },
          {
            "id": "tenses-aspect_ex8_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban planners observe that suburban commuting times ___ steadily over the past five years.",
            "answer": "have been lengthening",
            "acceptableAnswers": [
              "have been lengthening",
              "have been lengthening",
              "HAVE BEEN LENGTHENING"
            ],
            "options": [
              "have been lengthening",
              "lengthened",
              "had lengthened",
              "are lengthen"
            ],
            "explanation": "An action starting in the past and continuing to present duration takes the Present Perfect Continuous."
          },
          {
            "id": "tenses-aspect_ex8_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "In the 18th century, steam power ___ the transport industry fundamentally.",
            "answer": "transformed",
            "acceptableAnswers": [
              "transformed",
              "transformed",
              "TRANSFORMED"
            ],
            "options": [
              "transformed",
              "has transformed",
              "had transformed",
              "was transforming"
            ],
            "explanation": "A past era requires the Past Simple ('transformed')."
          },
          {
            "id": "tenses-aspect_ex8_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "It is forecasted that renewable energy ___ eighty percent of electricity generation by 2040.",
            "answer": "will supply",
            "acceptableAnswers": [
              "will supply",
              "will supply",
              "WILL SUPPLY"
            ],
            "options": [
              "will supply",
              "supplies",
              "supplied",
              "has supplied"
            ],
            "explanation": "A future forecast uses the future simple auxiliary 'will supply'."
          },
          {
            "id": "tenses-aspect_ex8_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The archaeological team discovered artifacts that ___ underground for millennia.",
            "answer": "had lain",
            "acceptableAnswers": [
              "had lain",
              "had lain",
              "HAD LAIN"
            ],
            "options": [
              "lay",
              "have lain",
              "had lain",
              "are lying"
            ],
            "explanation": "The artifacts lay buried prior to discovery, requiring the Past Perfect ('had lain')."
          },
          {
            "id": "tenses-aspect_ex8_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Recently, several Scandinavian nations ___ zero-waste circular economy directives.",
            "answer": "have enacted",
            "acceptableAnswers": [
              "have enacted",
              "have enacted",
              "HAVE ENACTED"
            ],
            "options": [
              "have enacted",
              "are enacted",
              "enacted",
              "had enacted"
            ],
            "explanation": "'Recently' indicating a recent past action with current relevance takes the Present Perfect ('have enacted')."
          },
          {
            "id": "tenses-aspect_ex8_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By the year 2050, medical robotic surgeons ___ standard procedures in operating theaters.",
            "answer": "will have become",
            "acceptableAnswers": [
              "will have become",
              "will have become",
              "WILL HAVE BECOME"
            ],
            "options": [
              "became",
              "will have become",
              "have become",
              "will become"
            ],
            "explanation": "'By 2050' requires the Future Perfect ('will have become')."
          },
          {
            "id": "tenses-aspect_ex8_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "In 2015, the proportion of solar energy users ___ dramatically across rural communities.",
            "answer": "rose",
            "acceptableAnswers": [
              "rose",
              "rose",
              "ROSE"
            ],
            "options": [
              "has risen",
              "is rising",
              "had been rising",
              "rose"
            ],
            "explanation": "A specific historical year ('In 2015') requires the Past Simple ('rose')."
          },
          {
            "id": "tenses-aspect_ex8_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Since 2018, the municipality ___ over three million dollars in solar charging hubs.",
            "answer": "has invested",
            "acceptableAnswers": [
              "has invested",
              "has invested",
              "HAS INVESTED"
            ],
            "options": [
              "invested",
              "has invested",
              "invests",
              "had invested"
            ],
            "explanation": "The temporal marker 'Since 2018' dictates the Present Perfect ('has invested')."
          },
          {
            "id": "tenses-aspect_ex8_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By the time emergency aid arrived, floodwaters ___ several low-lying villages.",
            "answer": "had submerged",
            "acceptableAnswers": [
              "had submerged",
              "had submerged",
              "HAD SUBMERGED"
            ],
            "options": [
              "have submerged",
              "submerged",
              "had submerged",
              "submerge"
            ],
            "explanation": "An event occurring before another past point takes the Past Perfect ('had submerged')."
          },
          {
            "id": "tenses-aspect_ex8_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Demographers predict that global fertility rates ___ below replacement levels by 2050.",
            "answer": "will have fallen",
            "acceptableAnswers": [
              "will have fallen",
              "will have fallen",
              "WILL HAVE FALLEN"
            ],
            "options": [
              "will have fallen",
              "will fall",
              "fall",
              "have fallen"
            ],
            "explanation": "'By 2050' denotes completion before a future date, requiring the Future Perfect ('will have fallen')."
          }
        ]
      },
      {
        "id": "tenses-aspect_ex_9",
        "number": 9,
        "title": "Exercise 9",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "tenses-aspect_ex9_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "As early childhood educators were implementing novel phonics methods, reading comprehension scores rose substantially.",
            "correctSequence": [
              "As early childhood educators were",
              "implementing novel phonics methods,",
              "reading comprehension scores",
              "rose substantially."
            ],
            "shuffledTokens": [
              "As early childhood educators were",
              "rose substantially.",
              "reading comprehension scores",
              "implementing novel phonics methods,"
            ],
            "explanation": "Past continuous background ('were implementing') followed by past simple outcome ('rose')."
          },
          {
            "id": "tenses-aspect_ex9_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Had the municipal government acted earlier, catastrophic urban flooding could have been mitigated effectively.",
            "correctSequence": [
              "Had the municipal government",
              "acted earlier, catastrophic urban",
              "flooding could have been",
              "mitigated effectively."
            ],
            "shuffledTokens": [
              "mitigated effectively.",
              "flooding could have been",
              "acted earlier, catastrophic urban",
              "Had the municipal government"
            ],
            "explanation": "Inverted third conditional structure denoting an unrealized past hypothetical scenario."
          },
          {
            "id": "tenses-aspect_ex9_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The proportion of remote workers has hovered around thirty percent throughout the post-pandemic recovery period.",
            "correctSequence": [
              "The proportion of remote workers",
              "has hovered around thirty percent",
              "throughout the post-pandemic",
              "recovery period."
            ],
            "shuffledTokens": [
              "recovery period.",
              "throughout the post-pandemic",
              "has hovered around thirty percent",
              "The proportion of remote workers"
            ],
            "explanation": "The duration 'throughout the post-pandemic recovery' connects to current conditions, taking the Present Perfect."
          },
          {
            "id": "tenses-aspect_ex9_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By the conclusion of the summit, delegates had ratified seventeen multilateral environmental pacts.",
            "correctSequence": [
              "By the conclusion of the summit,",
              "delegates had ratified seventeen",
              "multilateral environmental",
              "pacts."
            ],
            "shuffledTokens": [
              "multilateral environmental",
              "delegates had ratified seventeen",
              "pacts.",
              "By the conclusion of the summit,"
            ],
            "explanation": "Denoting completion before a past endpoint ('By the conclusion') necessitates the Past Perfect ('had ratified')."
          },
          {
            "id": "tenses-aspect_ex9_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Between 1995 and 2010, carbon dioxide emissions plummeted by thirty percent across Western Europe.",
            "correctSequence": [
              "Between 1995 and 2010,",
              "carbon dioxide emissions",
              "plummeted by thirty percent",
              "across Western Europe."
            ],
            "shuffledTokens": [
              "plummeted by thirty percent",
              "across Western Europe.",
              "Between 1995 and 2010,",
              "carbon dioxide emissions"
            ],
            "explanation": "Use the Past Simple ('plummeted') for events anchored in a completed past time period."
          },
          {
            "id": "tenses-aspect_ex9_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Since the introduction of stricter environmental legislation, air quality index scores have improved markedly.",
            "correctSequence": [
              "Since the introduction of",
              "stricter environmental legislation,",
              "air quality index scores",
              "have improved markedly."
            ],
            "shuffledTokens": [
              "have improved markedly.",
              "air quality index scores",
              "Since the introduction of",
              "stricter environmental legislation,"
            ],
            "explanation": "The preposition 'Since' with past origin requires the Present Perfect ('have improved')."
          },
          {
            "id": "tenses-aspect_ex9_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By the time the new metro terminal was inaugurated, commuters had already adapted to bus rapid transit.",
            "correctSequence": [
              "By the time the new",
              "metro terminal was inaugurated,",
              "commuters had already adapted",
              "to bus rapid transit."
            ],
            "shuffledTokens": [
              "metro terminal was inaugurated,",
              "to bus rapid transit.",
              "By the time the new",
              "commuters had already adapted"
            ],
            "explanation": "The Past Perfect ('had already adapted') establishes an action completed before another past event."
          },
          {
            "id": "tenses-aspect_ex9_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Global temperatures are projected to ascend steadily unless mitigation initiatives are swiftly instituted.",
            "correctSequence": [
              "Global temperatures are projected",
              "to ascend steadily unless",
              "mitigation initiatives are",
              "swiftly instituted."
            ],
            "shuffledTokens": [
              "to ascend steadily unless",
              "swiftly instituted.",
              "Global temperatures are projected",
              "mitigation initiatives are"
            ],
            "explanation": "Academic projections use passive present forms ('are projected') followed by a condition."
          },
          {
            "id": "tenses-aspect_ex9_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "While sociologists were examining demographic trends, unexpected patterns of urban migration surfaced rapidly.",
            "correctSequence": [
              "While sociologists were examining",
              "demographic trends, unexpected",
              "patterns of urban migration",
              "surfaced rapidly."
            ],
            "shuffledTokens": [
              "patterns of urban migration",
              "While sociologists were examining",
              "demographic trends, unexpected",
              "surfaced rapidly."
            ],
            "explanation": "Use the Past Continuous for the background activity and Past Simple ('surfaced') for the interrupting event."
          },
          {
            "id": "tenses-aspect_ex9_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Renewable energy investments had doubled prior to the sudden cessation of governmental subsidies.",
            "correctSequence": [
              "Renewable energy investments",
              "had doubled prior to",
              "the sudden cessation of",
              "governmental subsidies."
            ],
            "shuffledTokens": [
              "the sudden cessation of",
              "Renewable energy investments",
              "had doubled prior to",
              "governmental subsidies."
            ],
            "explanation": "The past sequence marker 'prior to' calls for the Past Perfect ('had doubled')."
          },
          {
            "id": "tenses-aspect_ex9_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "It is forecasted that renewable energy ___ eighty percent of electricity generation by 2040.",
            "answer": "will supply",
            "acceptableAnswers": [
              "will supply",
              "will supply",
              "WILL SUPPLY"
            ],
            "options": [
              "will supply",
              "supplies",
              "supplied",
              "has supplied"
            ],
            "explanation": "A future forecast uses the future simple auxiliary 'will supply'."
          },
          {
            "id": "tenses-aspect_ex9_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The archaeological team discovered artifacts that ___ underground for millennia.",
            "answer": "had lain",
            "acceptableAnswers": [
              "had lain",
              "had lain",
              "HAD LAIN"
            ],
            "options": [
              "had lain",
              "are lying",
              "have lain",
              "lay"
            ],
            "explanation": "The artifacts lay buried prior to discovery, requiring the Past Perfect ('had lain')."
          },
          {
            "id": "tenses-aspect_ex9_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Recently, several Scandinavian nations ___ zero-waste circular economy directives.",
            "answer": "have enacted",
            "acceptableAnswers": [
              "have enacted",
              "have enacted",
              "HAVE ENACTED"
            ],
            "options": [
              "had enacted",
              "are enacted",
              "enacted",
              "have enacted"
            ],
            "explanation": "'Recently' indicating a recent past action with current relevance takes the Present Perfect ('have enacted')."
          },
          {
            "id": "tenses-aspect_ex9_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By the year 2050, medical robotic surgeons ___ standard procedures in operating theaters.",
            "answer": "will have become",
            "acceptableAnswers": [
              "will have become",
              "will have become",
              "WILL HAVE BECOME"
            ],
            "options": [
              "have become",
              "became",
              "will have become",
              "will become"
            ],
            "explanation": "'By 2050' requires the Future Perfect ('will have become')."
          },
          {
            "id": "tenses-aspect_ex9_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "In 2015, the proportion of solar energy users ___ dramatically across rural communities.",
            "answer": "rose",
            "acceptableAnswers": [
              "rose",
              "rose",
              "ROSE"
            ],
            "options": [
              "has risen",
              "had been rising",
              "is rising",
              "rose"
            ],
            "explanation": "A specific historical year ('In 2015') requires the Past Simple ('rose')."
          },
          {
            "id": "tenses-aspect_ex9_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Since 2018, the municipality ___ over three million dollars in solar charging hubs.",
            "answer": "has invested",
            "acceptableAnswers": [
              "has invested",
              "has invested",
              "HAS INVESTED"
            ],
            "options": [
              "has invested",
              "invested",
              "had invested",
              "invests"
            ],
            "explanation": "The temporal marker 'Since 2018' dictates the Present Perfect ('has invested')."
          },
          {
            "id": "tenses-aspect_ex9_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By the time emergency aid arrived, floodwaters ___ several low-lying villages.",
            "answer": "had submerged",
            "acceptableAnswers": [
              "had submerged",
              "had submerged",
              "HAD SUBMERGED"
            ],
            "options": [
              "have submerged",
              "submerged",
              "had submerged",
              "submerge"
            ],
            "explanation": "An event occurring before another past point takes the Past Perfect ('had submerged')."
          },
          {
            "id": "tenses-aspect_ex9_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Demographers predict that global fertility rates ___ below replacement levels by 2050.",
            "answer": "will have fallen",
            "acceptableAnswers": [
              "will have fallen",
              "will have fallen",
              "WILL HAVE FALLEN"
            ],
            "options": [
              "will have fallen",
              "will fall",
              "fall",
              "have fallen"
            ],
            "explanation": "'By 2050' denotes completion before a future date, requiring the Future Perfect ('will have fallen')."
          },
          {
            "id": "tenses-aspect_ex9_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "While field biologists ___ data, severe torrential thunderstorms disrupted their survey.",
            "answer": "were collecting",
            "acceptableAnswers": [
              "were collecting",
              "were collecting",
              "WERE COLLECTING"
            ],
            "options": [
              "were collecting",
              "collected",
              "have collected",
              "had collected"
            ],
            "explanation": "An ongoing background activity in the past requires the Past Continuous ('were collecting')."
          },
          {
            "id": "tenses-aspect_ex9_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Over the last decade, electric vehicle registrations ___ exponential expansion.",
            "answer": "have experienced",
            "acceptableAnswers": [
              "have experienced",
              "have experienced",
              "HAVE EXPERIENCED"
            ],
            "options": [
              "have experienced",
              "are experiencing",
              "experienced",
              "had experienced"
            ],
            "explanation": "'Over the last decade' links the past to the present, requiring the Present Perfect ('have experienced')."
          }
        ]
      },
      {
        "id": "tenses-aspect_ex_10",
        "number": 10,
        "title": "Exercise 10",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "tenses-aspect_ex10_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The proportion of remote workers has hovered around thirty percent throughout the post-pandemic recovery period.",
            "correctSequence": [
              "The proportion of remote workers",
              "has hovered around thirty percent",
              "throughout the post-pandemic",
              "recovery period."
            ],
            "shuffledTokens": [
              "has hovered around thirty percent",
              "The proportion of remote workers",
              "throughout the post-pandemic",
              "recovery period."
            ],
            "explanation": "The duration 'throughout the post-pandemic recovery' connects to current conditions, taking the Present Perfect."
          },
          {
            "id": "tenses-aspect_ex10_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By the conclusion of the summit, delegates had ratified seventeen multilateral environmental pacts.",
            "correctSequence": [
              "By the conclusion of the summit,",
              "delegates had ratified seventeen",
              "multilateral environmental",
              "pacts."
            ],
            "shuffledTokens": [
              "By the conclusion of the summit,",
              "delegates had ratified seventeen",
              "pacts.",
              "multilateral environmental"
            ],
            "explanation": "Denoting completion before a past endpoint ('By the conclusion') necessitates the Past Perfect ('had ratified')."
          },
          {
            "id": "tenses-aspect_ex10_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Between 1995 and 2010, carbon dioxide emissions plummeted by thirty percent across Western Europe.",
            "correctSequence": [
              "Between 1995 and 2010,",
              "carbon dioxide emissions",
              "plummeted by thirty percent",
              "across Western Europe."
            ],
            "shuffledTokens": [
              "Between 1995 and 2010,",
              "carbon dioxide emissions",
              "across Western Europe.",
              "plummeted by thirty percent"
            ],
            "explanation": "Use the Past Simple ('plummeted') for events anchored in a completed past time period."
          },
          {
            "id": "tenses-aspect_ex10_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Since the introduction of stricter environmental legislation, air quality index scores have improved markedly.",
            "correctSequence": [
              "Since the introduction of",
              "stricter environmental legislation,",
              "air quality index scores",
              "have improved markedly."
            ],
            "shuffledTokens": [
              "Since the introduction of",
              "have improved markedly.",
              "air quality index scores",
              "stricter environmental legislation,"
            ],
            "explanation": "The preposition 'Since' with past origin requires the Present Perfect ('have improved')."
          },
          {
            "id": "tenses-aspect_ex10_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By the time the new metro terminal was inaugurated, commuters had already adapted to bus rapid transit.",
            "correctSequence": [
              "By the time the new",
              "metro terminal was inaugurated,",
              "commuters had already adapted",
              "to bus rapid transit."
            ],
            "shuffledTokens": [
              "By the time the new",
              "commuters had already adapted",
              "to bus rapid transit.",
              "metro terminal was inaugurated,"
            ],
            "explanation": "The Past Perfect ('had already adapted') establishes an action completed before another past event."
          },
          {
            "id": "tenses-aspect_ex10_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Global temperatures are projected to ascend steadily unless mitigation initiatives are swiftly instituted.",
            "correctSequence": [
              "Global temperatures are projected",
              "to ascend steadily unless",
              "mitigation initiatives are",
              "swiftly instituted."
            ],
            "shuffledTokens": [
              "swiftly instituted.",
              "mitigation initiatives are",
              "to ascend steadily unless",
              "Global temperatures are projected"
            ],
            "explanation": "Academic projections use passive present forms ('are projected') followed by a condition."
          },
          {
            "id": "tenses-aspect_ex10_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "While sociologists were examining demographic trends, unexpected patterns of urban migration surfaced rapidly.",
            "correctSequence": [
              "While sociologists were examining",
              "demographic trends, unexpected",
              "patterns of urban migration",
              "surfaced rapidly."
            ],
            "shuffledTokens": [
              "surfaced rapidly.",
              "patterns of urban migration",
              "demographic trends, unexpected",
              "While sociologists were examining"
            ],
            "explanation": "Use the Past Continuous for the background activity and Past Simple ('surfaced') for the interrupting event."
          },
          {
            "id": "tenses-aspect_ex10_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Renewable energy investments had doubled prior to the sudden cessation of governmental subsidies.",
            "correctSequence": [
              "Renewable energy investments",
              "had doubled prior to",
              "the sudden cessation of",
              "governmental subsidies."
            ],
            "shuffledTokens": [
              "the sudden cessation of",
              "had doubled prior to",
              "governmental subsidies.",
              "Renewable energy investments"
            ],
            "explanation": "The past sequence marker 'prior to' calls for the Past Perfect ('had doubled')."
          },
          {
            "id": "tenses-aspect_ex10_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Over the preceding two decades, tertiary graduation rates have witnessed consistent upward trajectories.",
            "correctSequence": [
              "Over the preceding two decades,",
              "tertiary graduation rates",
              "have witnessed consistent",
              "upward trajectories."
            ],
            "shuffledTokens": [
              "have witnessed consistent",
              "upward trajectories.",
              "Over the preceding two decades,",
              "tertiary graduation rates"
            ],
            "explanation": "'Over the preceding two decades' connects past duration to the present, requiring the Present Perfect."
          },
          {
            "id": "tenses-aspect_ex10_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Prior to commencing fieldwork, the ethnographic researchers had secured formal consent from regional elders.",
            "correctSequence": [
              "Prior to commencing fieldwork,",
              "the ethnographic researchers",
              "had secured formal consent",
              "from regional elders."
            ],
            "shuffledTokens": [
              "from regional elders.",
              "had secured formal consent",
              "Prior to commencing fieldwork,",
              "the ethnographic researchers"
            ],
            "explanation": "'Prior to' establishing precedence in the past requires the Past Perfect ('had secured')."
          },
          {
            "id": "tenses-aspect_ex10_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Recently, several Scandinavian nations ___ zero-waste circular economy directives.",
            "answer": "have enacted",
            "acceptableAnswers": [
              "have enacted",
              "have enacted",
              "HAVE ENACTED"
            ],
            "options": [
              "had enacted",
              "have enacted",
              "are enacted",
              "enacted"
            ],
            "explanation": "'Recently' indicating a recent past action with current relevance takes the Present Perfect ('have enacted')."
          },
          {
            "id": "tenses-aspect_ex10_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By the year 2050, medical robotic surgeons ___ standard procedures in operating theaters.",
            "answer": "will have become",
            "acceptableAnswers": [
              "will have become",
              "will have become",
              "WILL HAVE BECOME"
            ],
            "options": [
              "will become",
              "have become",
              "became",
              "will have become"
            ],
            "explanation": "'By 2050' requires the Future Perfect ('will have become')."
          },
          {
            "id": "tenses-aspect_ex10_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "In 2015, the proportion of solar energy users ___ dramatically across rural communities.",
            "answer": "rose",
            "acceptableAnswers": [
              "rose",
              "rose",
              "ROSE"
            ],
            "options": [
              "has risen",
              "rose",
              "had been rising",
              "is rising"
            ],
            "explanation": "A specific historical year ('In 2015') requires the Past Simple ('rose')."
          },
          {
            "id": "tenses-aspect_ex10_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Since 2018, the municipality ___ over three million dollars in solar charging hubs.",
            "answer": "has invested",
            "acceptableAnswers": [
              "has invested",
              "has invested",
              "HAS INVESTED"
            ],
            "options": [
              "has invested",
              "invested",
              "had invested",
              "invests"
            ],
            "explanation": "The temporal marker 'Since 2018' dictates the Present Perfect ('has invested')."
          },
          {
            "id": "tenses-aspect_ex10_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "By the time emergency aid arrived, floodwaters ___ several low-lying villages.",
            "answer": "had submerged",
            "acceptableAnswers": [
              "had submerged",
              "had submerged",
              "HAD SUBMERGED"
            ],
            "options": [
              "have submerged",
              "submerged",
              "had submerged",
              "submerge"
            ],
            "explanation": "An event occurring before another past point takes the Past Perfect ('had submerged')."
          },
          {
            "id": "tenses-aspect_ex10_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Demographers predict that global fertility rates ___ below replacement levels by 2050.",
            "answer": "will have fallen",
            "acceptableAnswers": [
              "will have fallen",
              "will have fallen",
              "WILL HAVE FALLEN"
            ],
            "options": [
              "will have fallen",
              "will fall",
              "fall",
              "have fallen"
            ],
            "explanation": "'By 2050' denotes completion before a future date, requiring the Future Perfect ('will have fallen')."
          },
          {
            "id": "tenses-aspect_ex10_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "While field biologists ___ data, severe torrential thunderstorms disrupted their survey.",
            "answer": "were collecting",
            "acceptableAnswers": [
              "were collecting",
              "were collecting",
              "WERE COLLECTING"
            ],
            "options": [
              "have collected",
              "had collected",
              "collected",
              "were collecting"
            ],
            "explanation": "An ongoing background activity in the past requires the Past Continuous ('were collecting')."
          },
          {
            "id": "tenses-aspect_ex10_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Over the last decade, electric vehicle registrations ___ exponential expansion.",
            "answer": "have experienced",
            "acceptableAnswers": [
              "have experienced",
              "have experienced",
              "HAVE EXPERIENCED"
            ],
            "options": [
              "had experienced",
              "are experiencing",
              "experienced",
              "have experienced"
            ],
            "explanation": "'Over the last decade' links the past to the present, requiring the Present Perfect ('have experienced')."
          },
          {
            "id": "tenses-aspect_ex10_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Prior to the industrial revolution, artisan weavers ___ cloth using hand looms.",
            "answer": "had produced",
            "acceptableAnswers": [
              "had produced",
              "had produced",
              "HAD PRODUCED"
            ],
            "options": [
              "are producing",
              "produce",
              "had produced",
              "have produced"
            ],
            "explanation": "The past marker 'Prior to' requires the Past Perfect ('had produced') to indicate anteriority."
          },
          {
            "id": "tenses-aspect_ex10_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Currently, civil engineers ___ the structural integrity of the suspension bridge.",
            "answer": "are evaluating",
            "acceptableAnswers": [
              "are evaluating",
              "are evaluating",
              "ARE EVALUATING"
            ],
            "options": [
              "evaluated",
              "had evaluated",
              "are evaluating",
              "have evaluated"
            ],
            "explanation": "'Currently' describes an ongoing action taking the Present Continuous ('are evaluating')."
          }
        ]
      }
    ]
  },
  {
    "id": "modal-verbs-hedging",
    "title": "Modal Verbs & Hedging",
    "icon": "Modal",
    "color": "#7c3aed",
    "subtitle": "Academic cautious language, probability, deduction, recommendation, and conditionality.",
    "rules": [
      "Hedging verbs ('tends to', 'appears to', 'is likely to') prevent absolute assertions in Task 2 essays.",
      "Modal verbs ('may', 'might', 'could') express varying degrees of likelihood and tentative claims.",
      "'Should' and 'ought to' express recommendations without sounding excessively authoritarian.",
      "'Must have + past participle' expresses strong logical deductions regarding past events.",
      "'Cannot be overlooked' is an effective academic formula for emphasizing salient points."
    ],
    "exercises": [
      {
        "id": "modal-verbs-hedging_ex_1",
        "number": 1,
        "title": "Exercise 1",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "modal-verbs-hedging_ex1_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Excessive screen exposure may plausibly exacerbate sleep disorders among developing school-aged adolescents.",
            "correctSequence": [
              "Excessive screen exposure may",
              "plausibly exacerbate sleep disorders",
              "among developing school-aged",
              "adolescents."
            ],
            "shuffledTokens": [
              "plausibly exacerbate sleep disorders",
              "adolescents.",
              "Excessive screen exposure may",
              "among developing school-aged"
            ],
            "explanation": "Academic hedging uses 'may plausibly' to avoid unscientific absolute claims."
          },
          {
            "id": "modal-verbs-hedging_ex1_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The dramatic decline in biodiversity could conceivably trigger irreversible distortions in regional food chains.",
            "correctSequence": [
              "The dramatic decline in biodiversity",
              "could conceivably trigger irreversible",
              "distortions in regional",
              "food chains."
            ],
            "shuffledTokens": [
              "distortions in regional",
              "The dramatic decline in biodiversity",
              "could conceivably trigger irreversible",
              "food chains."
            ],
            "explanation": "'Could conceivably' introduces a tentative possibility grounded in ecological caution."
          },
          {
            "id": "modal-verbs-hedging_ex1_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Governments ought to allocate greater economic subventions to preventative healthcare and sanitation programs.",
            "correctSequence": [
              "Governments ought to allocate",
              "greater economic subventions to",
              "preventative healthcare and",
              "sanitation programs."
            ],
            "shuffledTokens": [
              "preventative healthcare and",
              "Governments ought to allocate",
              "greater economic subventions to",
              "sanitation programs."
            ],
            "explanation": "'Ought to' expresses an academic moral recommendation without aggressive tone."
          },
          {
            "id": "modal-verbs-hedging_ex1_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ancient coastal settlement must have been abandoned following an unprecedented tsunami catastrophe.",
            "correctSequence": [
              "The ancient coastal settlement",
              "must have been abandoned",
              "following an unprecedented",
              "tsunami catastrophe."
            ],
            "shuffledTokens": [
              "must have been abandoned",
              "The ancient coastal settlement",
              "following an unprecedented",
              "tsunami catastrophe."
            ],
            "explanation": "'Must have + past participle' expresses a logical deduction regarding past historical evidence."
          },
          {
            "id": "modal-verbs-hedging_ex1_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "It is widely argued that artificial intelligence might replace repetitive administrative tasks in modern firms.",
            "correctSequence": [
              "It is widely argued that",
              "artificial intelligence might replace",
              "repetitive administrative tasks",
              "in modern firms."
            ],
            "shuffledTokens": [
              "artificial intelligence might replace",
              "It is widely argued that",
              "repetitive administrative tasks",
              "in modern firms."
            ],
            "explanation": "Hedging with 'might replace' prevents dogmatic claims in Task 2 arguments."
          },
          {
            "id": "modal-verbs-hedging_ex1_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Policy analysts suggest that congestion pricing tends to dissuade non-essential vehicular traffic in capitals.",
            "correctSequence": [
              "Policy analysts suggest that",
              "congestion pricing tends to",
              "dissuade non-essential vehicular",
              "traffic in capitals."
            ],
            "shuffledTokens": [
              "congestion pricing tends to",
              "Policy analysts suggest that",
              "dissuade non-essential vehicular",
              "traffic in capitals."
            ],
            "explanation": "'Tends to' is a staple hedging verb indicating a generalized propensity."
          },
          {
            "id": "modal-verbs-hedging_ex1_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Educational reforms cannot be expected to yield immediate measurable dividends within a single fiscal year.",
            "correctSequence": [
              "Educational reforms cannot be",
              "expected to yield immediate",
              "measurable dividends within",
              "a single fiscal year."
            ],
            "shuffledTokens": [
              "expected to yield immediate",
              "Educational reforms cannot be",
              "measurable dividends within",
              "a single fiscal year."
            ],
            "explanation": "'Cannot be expected to' expresses an analytical limitation objectively."
          },
          {
            "id": "modal-verbs-hedging_ex1_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "High urban density appears to correlate with heightened innovation and entrepreneurial startup activities.",
            "correctSequence": [
              "High urban density appears to",
              "correlate with heightened innovation",
              "and entrepreneurial startup",
              "activities."
            ],
            "shuffledTokens": [
              "correlate with heightened innovation",
              "High urban density appears to",
              "and entrepreneurial startup",
              "activities."
            ],
            "explanation": "Hedging with 'appears to correlate' prevents premature causal assertions."
          },
          {
            "id": "modal-verbs-hedging_ex1_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scholars contend that cultural assimilation need not imply the total eradication of heritage traditions.",
            "correctSequence": [
              "Scholars contend that cultural",
              "assimilation need not imply",
              "the total eradication of",
              "heritage traditions."
            ],
            "shuffledTokens": [
              "assimilation need not imply",
              "Scholars contend that cultural",
              "the total eradication of",
              "heritage traditions."
            ],
            "explanation": "'Need not imply' expresses logical absence of necessity."
          },
          {
            "id": "modal-verbs-hedging_ex1_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The sudden collapse of negotiations could have been averted through more transparent bilateral diplomacy.",
            "correctSequence": [
              "The sudden collapse of negotiations",
              "could have been averted through",
              "more transparent bilateral",
              "diplomacy."
            ],
            "shuffledTokens": [
              "could have been averted through",
              "The sudden collapse of negotiations",
              "more transparent bilateral",
              "diplomacy."
            ],
            "explanation": "'Could have been + past participle' reflects an unfulfilled past possibility."
          },
          {
            "id": "modal-verbs-hedging_ex1_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The observed correlation between diet and longevity ___ further clinical investigation.",
            "answer": "may warrant",
            "acceptableAnswers": [
              "may warrant",
              "may warrant",
              "MAY WARRANT"
            ],
            "options": [
              "warrants definitely",
              "may warrant",
              "shall warrant",
              "must warrant"
            ],
            "explanation": "Academic style favors cautious hedging ('may warrant') over categorical assertions."
          },
          {
            "id": "modal-verbs-hedging_ex1_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The missing archaeological documentation ___ destroyed during the library fire of 1845.",
            "answer": "must have been",
            "acceptableAnswers": [
              "must have been",
              "must have been",
              "MUST HAVE BEEN"
            ],
            "options": [
              "can be",
              "would be",
              "must have been",
              "should have been"
            ],
            "explanation": "'Must have been' expresses a strong logical deduction regarding past history."
          },
          {
            "id": "modal-verbs-hedging_ex1_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Adolescents with access to green recreational spaces ___ lower levels of cortisol stress.",
            "answer": "tend to exhibit",
            "acceptableAnswers": [
              "tend to exhibit",
              "tend to exhibit",
              "TEND TO EXHIBIT"
            ],
            "options": [
              "exhibit always",
              "tend to exhibit",
              "have to exhibit",
              "must exhibit"
            ],
            "explanation": "'Tend to exhibit' is an academic hedge reflecting statistical tendencies rather than absolute law."
          },
          {
            "id": "modal-verbs-hedging_ex1_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Without substantial international subsidies, developing nations ___ clean energy targets.",
            "answer": "might struggle to meet",
            "acceptableAnswers": [
              "might struggle to meet",
              "might struggle to meet",
              "MIGHT STRUGGLE TO MEET"
            ],
            "options": [
              "might struggle to meet",
              "will never meet",
              "cannot never meet",
              "must struggle"
            ],
            "explanation": "'Might struggle to meet' provides a cautious, respectful academic critique."
          },
          {
            "id": "modal-verbs-hedging_ex1_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The catastrophic industrial disaster ___ if automated safety protocols had been functional.",
            "answer": "could have been averted",
            "acceptableAnswers": [
              "could have been averted",
              "could have been averted",
              "COULD HAVE BEEN AVERTED"
            ],
            "options": [
              "could have been averted",
              "must be averted",
              "would avert",
              "can have been averted"
            ],
            "explanation": "Expressing an unfulfilled past capability requires 'could have been averted'."
          },
          {
            "id": "modal-verbs-hedging_ex1_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Comprehensive urban planning ___ prioritize pedestrian zones over vehicular thoroughfares.",
            "answer": "ought to",
            "acceptableAnswers": [
              "ought to",
              "ought to",
              "OUGHT TO"
            ],
            "options": [
              "has got to",
              "ought to",
              "must to",
              "might to"
            ],
            "explanation": "'Ought to' expresses a normative academic recommendation."
          },
          {
            "id": "modal-verbs-hedging_ex1_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Preliminary meteorological findings ___ that storm intensity is amplifying globally.",
            "answer": "appear to indicate",
            "acceptableAnswers": [
              "appear to indicate",
              "appear to indicate",
              "APPEAR TO INDICATE"
            ],
            "options": [
              "must indicate",
              "prove absolutely",
              "appear to indicate",
              "shall indicate"
            ],
            "explanation": "'Appear to indicate' prevents unscientific overgeneralization."
          },
          {
            "id": "modal-verbs-hedging_ex1_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The ancient civilization ___ extensive trade links across the Mediterranean sea.",
            "answer": "must have maintained",
            "acceptableAnswers": [
              "must have maintained",
              "must have maintained",
              "MUST HAVE MAINTAINED"
            ],
            "options": [
              "would maintain",
              "can maintain",
              "should maintain",
              "must have maintained"
            ],
            "explanation": "Deduction based on historical evidence takes 'must have maintained'."
          },
          {
            "id": "modal-verbs-hedging_ex1_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Higher taxation on carbon-heavy corporations ___ economic growth in the short term.",
            "answer": "is likely to dampen",
            "acceptableAnswers": [
              "is likely to dampen",
              "is likely to dampen",
              "IS LIKELY TO DAMPEN"
            ],
            "options": [
              "shall dampen",
              "must dampen",
              "is likely to dampen",
              "will destroy"
            ],
            "explanation": "'Is likely to dampen' represents a measured, probable outcome in economics."
          },
          {
            "id": "modal-verbs-hedging_ex1_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Technological innovation ___ as an unmitigated blessing without examining societal risks.",
            "answer": "cannot be viewed",
            "acceptableAnswers": [
              "cannot be viewed",
              "cannot be viewed",
              "CANNOT BE VIEWED"
            ],
            "options": [
              "must not be viewed",
              "is not viewing",
              "should not view",
              "cannot be viewed"
            ],
            "explanation": "'Cannot be viewed' forms an objective academic critique."
          }
        ]
      },
      {
        "id": "modal-verbs-hedging_ex_2",
        "number": 2,
        "title": "Exercise 2",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "modal-verbs-hedging_ex2_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Governments ought to allocate greater economic subventions to preventative healthcare and sanitation programs.",
            "correctSequence": [
              "Governments ought to allocate",
              "greater economic subventions to",
              "preventative healthcare and",
              "sanitation programs."
            ],
            "shuffledTokens": [
              "preventative healthcare and",
              "greater economic subventions to",
              "sanitation programs.",
              "Governments ought to allocate"
            ],
            "explanation": "'Ought to' expresses an academic moral recommendation without aggressive tone."
          },
          {
            "id": "modal-verbs-hedging_ex2_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ancient coastal settlement must have been abandoned following an unprecedented tsunami catastrophe.",
            "correctSequence": [
              "The ancient coastal settlement",
              "must have been abandoned",
              "following an unprecedented",
              "tsunami catastrophe."
            ],
            "shuffledTokens": [
              "tsunami catastrophe.",
              "following an unprecedented",
              "The ancient coastal settlement",
              "must have been abandoned"
            ],
            "explanation": "'Must have + past participle' expresses a logical deduction regarding past historical evidence."
          },
          {
            "id": "modal-verbs-hedging_ex2_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "It is widely argued that artificial intelligence might replace repetitive administrative tasks in modern firms.",
            "correctSequence": [
              "It is widely argued that",
              "artificial intelligence might replace",
              "repetitive administrative tasks",
              "in modern firms."
            ],
            "shuffledTokens": [
              "artificial intelligence might replace",
              "in modern firms.",
              "It is widely argued that",
              "repetitive administrative tasks"
            ],
            "explanation": "Hedging with 'might replace' prevents dogmatic claims in Task 2 arguments."
          },
          {
            "id": "modal-verbs-hedging_ex2_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Policy analysts suggest that congestion pricing tends to dissuade non-essential vehicular traffic in capitals.",
            "correctSequence": [
              "Policy analysts suggest that",
              "congestion pricing tends to",
              "dissuade non-essential vehicular",
              "traffic in capitals."
            ],
            "shuffledTokens": [
              "congestion pricing tends to",
              "traffic in capitals.",
              "Policy analysts suggest that",
              "dissuade non-essential vehicular"
            ],
            "explanation": "'Tends to' is a staple hedging verb indicating a generalized propensity."
          },
          {
            "id": "modal-verbs-hedging_ex2_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Educational reforms cannot be expected to yield immediate measurable dividends within a single fiscal year.",
            "correctSequence": [
              "Educational reforms cannot be",
              "expected to yield immediate",
              "measurable dividends within",
              "a single fiscal year."
            ],
            "shuffledTokens": [
              "a single fiscal year.",
              "Educational reforms cannot be",
              "expected to yield immediate",
              "measurable dividends within"
            ],
            "explanation": "'Cannot be expected to' expresses an analytical limitation objectively."
          },
          {
            "id": "modal-verbs-hedging_ex2_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "High urban density appears to correlate with heightened innovation and entrepreneurial startup activities.",
            "correctSequence": [
              "High urban density appears to",
              "correlate with heightened innovation",
              "and entrepreneurial startup",
              "activities."
            ],
            "shuffledTokens": [
              "and entrepreneurial startup",
              "High urban density appears to",
              "correlate with heightened innovation",
              "activities."
            ],
            "explanation": "Hedging with 'appears to correlate' prevents premature causal assertions."
          },
          {
            "id": "modal-verbs-hedging_ex2_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scholars contend that cultural assimilation need not imply the total eradication of heritage traditions.",
            "correctSequence": [
              "Scholars contend that cultural",
              "assimilation need not imply",
              "the total eradication of",
              "heritage traditions."
            ],
            "shuffledTokens": [
              "the total eradication of",
              "Scholars contend that cultural",
              "assimilation need not imply",
              "heritage traditions."
            ],
            "explanation": "'Need not imply' expresses logical absence of necessity."
          },
          {
            "id": "modal-verbs-hedging_ex2_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The sudden collapse of negotiations could have been averted through more transparent bilateral diplomacy.",
            "correctSequence": [
              "The sudden collapse of negotiations",
              "could have been averted through",
              "more transparent bilateral",
              "diplomacy."
            ],
            "shuffledTokens": [
              "could have been averted through",
              "The sudden collapse of negotiations",
              "more transparent bilateral",
              "diplomacy."
            ],
            "explanation": "'Could have been + past participle' reflects an unfulfilled past possibility."
          },
          {
            "id": "modal-verbs-hedging_ex2_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Researchers suggest that early childhood bilingualism is likely to foster superior cognitive flexibility in adult life.",
            "correctSequence": [
              "Researchers suggest that early childhood",
              "bilingualism is likely to foster",
              "superior cognitive flexibility",
              "in adult life."
            ],
            "shuffledTokens": [
              "bilingualism is likely to foster",
              "Researchers suggest that early childhood",
              "superior cognitive flexibility",
              "in adult life."
            ],
            "explanation": "'Is likely to foster' hedges probability with scholarly moderation."
          },
          {
            "id": "modal-verbs-hedging_ex2_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Such dramatic environmental changes cannot plausibly be attributed solely to natural cyclical fluctuations.",
            "correctSequence": [
              "Such dramatic environmental changes",
              "cannot plausibly be attributed",
              "solely to natural cyclical",
              "fluctuations."
            ],
            "shuffledTokens": [
              "cannot plausibly be attributed",
              "Such dramatic environmental changes",
              "solely to natural cyclical",
              "fluctuations."
            ],
            "explanation": "Modal hedging with 'cannot plausibly be attributed' refutes unproven single-cause hypotheses."
          },
          {
            "id": "modal-verbs-hedging_ex2_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Adolescents with access to green recreational spaces ___ lower levels of cortisol stress.",
            "answer": "tend to exhibit",
            "acceptableAnswers": [
              "tend to exhibit",
              "tend to exhibit",
              "TEND TO EXHIBIT"
            ],
            "options": [
              "exhibit always",
              "tend to exhibit",
              "have to exhibit",
              "must exhibit"
            ],
            "explanation": "'Tend to exhibit' is an academic hedge reflecting statistical tendencies rather than absolute law."
          },
          {
            "id": "modal-verbs-hedging_ex2_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Without substantial international subsidies, developing nations ___ clean energy targets.",
            "answer": "might struggle to meet",
            "acceptableAnswers": [
              "might struggle to meet",
              "might struggle to meet",
              "MIGHT STRUGGLE TO MEET"
            ],
            "options": [
              "might struggle to meet",
              "will never meet",
              "cannot never meet",
              "must struggle"
            ],
            "explanation": "'Might struggle to meet' provides a cautious, respectful academic critique."
          },
          {
            "id": "modal-verbs-hedging_ex2_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The catastrophic industrial disaster ___ if automated safety protocols had been functional.",
            "answer": "could have been averted",
            "acceptableAnswers": [
              "could have been averted",
              "could have been averted",
              "COULD HAVE BEEN AVERTED"
            ],
            "options": [
              "could have been averted",
              "must be averted",
              "would avert",
              "can have been averted"
            ],
            "explanation": "Expressing an unfulfilled past capability requires 'could have been averted'."
          },
          {
            "id": "modal-verbs-hedging_ex2_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Comprehensive urban planning ___ prioritize pedestrian zones over vehicular thoroughfares.",
            "answer": "ought to",
            "acceptableAnswers": [
              "ought to",
              "ought to",
              "OUGHT TO"
            ],
            "options": [
              "must to",
              "ought to",
              "has got to",
              "might to"
            ],
            "explanation": "'Ought to' expresses a normative academic recommendation."
          },
          {
            "id": "modal-verbs-hedging_ex2_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Preliminary meteorological findings ___ that storm intensity is amplifying globally.",
            "answer": "appear to indicate",
            "acceptableAnswers": [
              "appear to indicate",
              "appear to indicate",
              "APPEAR TO INDICATE"
            ],
            "options": [
              "appear to indicate",
              "shall indicate",
              "prove absolutely",
              "must indicate"
            ],
            "explanation": "'Appear to indicate' prevents unscientific overgeneralization."
          },
          {
            "id": "modal-verbs-hedging_ex2_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The ancient civilization ___ extensive trade links across the Mediterranean sea.",
            "answer": "must have maintained",
            "acceptableAnswers": [
              "must have maintained",
              "must have maintained",
              "MUST HAVE MAINTAINED"
            ],
            "options": [
              "can maintain",
              "must have maintained",
              "would maintain",
              "should maintain"
            ],
            "explanation": "Deduction based on historical evidence takes 'must have maintained'."
          },
          {
            "id": "modal-verbs-hedging_ex2_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Higher taxation on carbon-heavy corporations ___ economic growth in the short term.",
            "answer": "is likely to dampen",
            "acceptableAnswers": [
              "is likely to dampen",
              "is likely to dampen",
              "IS LIKELY TO DAMPEN"
            ],
            "options": [
              "shall dampen",
              "must dampen",
              "is likely to dampen",
              "will destroy"
            ],
            "explanation": "'Is likely to dampen' represents a measured, probable outcome in economics."
          },
          {
            "id": "modal-verbs-hedging_ex2_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Technological innovation ___ as an unmitigated blessing without examining societal risks.",
            "answer": "cannot be viewed",
            "acceptableAnswers": [
              "cannot be viewed",
              "cannot be viewed",
              "CANNOT BE VIEWED"
            ],
            "options": [
              "must not be viewed",
              "cannot be viewed",
              "is not viewing",
              "should not view"
            ],
            "explanation": "'Cannot be viewed' forms an objective academic critique."
          },
          {
            "id": "modal-verbs-hedging_ex2_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The economic downturn ___ localized supply disruptions rather than global recessionary shocks.",
            "answer": "might reflect",
            "acceptableAnswers": [
              "might reflect",
              "might reflect",
              "MIGHT REFLECT"
            ],
            "options": [
              "might reflect",
              "must reflect definitely",
              "shall reflect",
              "is reflecting always"
            ],
            "explanation": "Hedging with 'might reflect' introduces a tenable alternative hypothesis."
          },
          {
            "id": "modal-verbs-hedging_ex2_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Marginalized communities ___ disproportionately by industrial pollutants.",
            "answer": "can be affected",
            "acceptableAnswers": [
              "can be affected",
              "can be affected",
              "CAN BE AFFECTED"
            ],
            "options": [
              "can be affected",
              "are affected inevitably",
              "must affect",
              "ought to affect"
            ],
            "explanation": "'Can be affected' expresses susceptibility without universal claim."
          }
        ]
      },
      {
        "id": "modal-verbs-hedging_ex_3",
        "number": 3,
        "title": "Exercise 3",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "modal-verbs-hedging_ex3_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "It is widely argued that artificial intelligence might replace repetitive administrative tasks in modern firms.",
            "correctSequence": [
              "It is widely argued that",
              "artificial intelligence might replace",
              "repetitive administrative tasks",
              "in modern firms."
            ],
            "shuffledTokens": [
              "It is widely argued that",
              "repetitive administrative tasks",
              "in modern firms.",
              "artificial intelligence might replace"
            ],
            "explanation": "Hedging with 'might replace' prevents dogmatic claims in Task 2 arguments."
          },
          {
            "id": "modal-verbs-hedging_ex3_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Policy analysts suggest that congestion pricing tends to dissuade non-essential vehicular traffic in capitals.",
            "correctSequence": [
              "Policy analysts suggest that",
              "congestion pricing tends to",
              "dissuade non-essential vehicular",
              "traffic in capitals."
            ],
            "shuffledTokens": [
              "traffic in capitals.",
              "dissuade non-essential vehicular",
              "congestion pricing tends to",
              "Policy analysts suggest that"
            ],
            "explanation": "'Tends to' is a staple hedging verb indicating a generalized propensity."
          },
          {
            "id": "modal-verbs-hedging_ex3_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Educational reforms cannot be expected to yield immediate measurable dividends within a single fiscal year.",
            "correctSequence": [
              "Educational reforms cannot be",
              "expected to yield immediate",
              "measurable dividends within",
              "a single fiscal year."
            ],
            "shuffledTokens": [
              "a single fiscal year.",
              "measurable dividends within",
              "expected to yield immediate",
              "Educational reforms cannot be"
            ],
            "explanation": "'Cannot be expected to' expresses an analytical limitation objectively."
          },
          {
            "id": "modal-verbs-hedging_ex3_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "High urban density appears to correlate with heightened innovation and entrepreneurial startup activities.",
            "correctSequence": [
              "High urban density appears to",
              "correlate with heightened innovation",
              "and entrepreneurial startup",
              "activities."
            ],
            "shuffledTokens": [
              "and entrepreneurial startup",
              "correlate with heightened innovation",
              "activities.",
              "High urban density appears to"
            ],
            "explanation": "Hedging with 'appears to correlate' prevents premature causal assertions."
          },
          {
            "id": "modal-verbs-hedging_ex3_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scholars contend that cultural assimilation need not imply the total eradication of heritage traditions.",
            "correctSequence": [
              "Scholars contend that cultural",
              "assimilation need not imply",
              "the total eradication of",
              "heritage traditions."
            ],
            "shuffledTokens": [
              "the total eradication of",
              "heritage traditions.",
              "Scholars contend that cultural",
              "assimilation need not imply"
            ],
            "explanation": "'Need not imply' expresses logical absence of necessity."
          },
          {
            "id": "modal-verbs-hedging_ex3_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The sudden collapse of negotiations could have been averted through more transparent bilateral diplomacy.",
            "correctSequence": [
              "The sudden collapse of negotiations",
              "could have been averted through",
              "more transparent bilateral",
              "diplomacy."
            ],
            "shuffledTokens": [
              "diplomacy.",
              "more transparent bilateral",
              "The sudden collapse of negotiations",
              "could have been averted through"
            ],
            "explanation": "'Could have been + past participle' reflects an unfulfilled past possibility."
          },
          {
            "id": "modal-verbs-hedging_ex3_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Researchers suggest that early childhood bilingualism is likely to foster superior cognitive flexibility in adult life.",
            "correctSequence": [
              "Researchers suggest that early childhood",
              "bilingualism is likely to foster",
              "superior cognitive flexibility",
              "in adult life."
            ],
            "shuffledTokens": [
              "bilingualism is likely to foster",
              "in adult life.",
              "Researchers suggest that early childhood",
              "superior cognitive flexibility"
            ],
            "explanation": "'Is likely to foster' hedges probability with scholarly moderation."
          },
          {
            "id": "modal-verbs-hedging_ex3_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Such dramatic environmental changes cannot plausibly be attributed solely to natural cyclical fluctuations.",
            "correctSequence": [
              "Such dramatic environmental changes",
              "cannot plausibly be attributed",
              "solely to natural cyclical",
              "fluctuations."
            ],
            "shuffledTokens": [
              "cannot plausibly be attributed",
              "fluctuations.",
              "Such dramatic environmental changes",
              "solely to natural cyclical"
            ],
            "explanation": "Modal hedging with 'cannot plausibly be attributed' refutes unproven single-cause hypotheses."
          },
          {
            "id": "modal-verbs-hedging_ex3_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Municipal authorities should consider subsidizing public transit rather than constructing additional urban expressways.",
            "correctSequence": [
              "Municipal authorities should consider",
              "subsidizing public transit rather",
              "than constructing additional",
              "urban expressways."
            ],
            "shuffledTokens": [
              "than constructing additional",
              "Municipal authorities should consider",
              "subsidizing public transit rather",
              "urban expressways."
            ],
            "explanation": "'Should consider' offers constructive policy guidance with respectful academic restraint."
          },
          {
            "id": "modal-verbs-hedging_ex3_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The archaeological site must have served as a major commercial entrepôt during the bronze age.",
            "correctSequence": [
              "The archaeological site must have",
              "served as a major commercial",
              "entrepôt during the bronze",
              "age."
            ],
            "shuffledTokens": [
              "entrepôt during the bronze",
              "The archaeological site must have",
              "served as a major commercial",
              "age."
            ],
            "explanation": "'Must have served' provides a logical deduction based on recovered trade artifacts."
          },
          {
            "id": "modal-verbs-hedging_ex3_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The catastrophic industrial disaster ___ if automated safety protocols had been functional.",
            "answer": "could have been averted",
            "acceptableAnswers": [
              "could have been averted",
              "could have been averted",
              "COULD HAVE BEEN AVERTED"
            ],
            "options": [
              "could have been averted",
              "must be averted",
              "would avert",
              "can have been averted"
            ],
            "explanation": "Expressing an unfulfilled past capability requires 'could have been averted'."
          },
          {
            "id": "modal-verbs-hedging_ex3_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Comprehensive urban planning ___ prioritize pedestrian zones over vehicular thoroughfares.",
            "answer": "ought to",
            "acceptableAnswers": [
              "ought to",
              "ought to",
              "OUGHT TO"
            ],
            "options": [
              "might to",
              "ought to",
              "has got to",
              "must to"
            ],
            "explanation": "'Ought to' expresses a normative academic recommendation."
          },
          {
            "id": "modal-verbs-hedging_ex3_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Preliminary meteorological findings ___ that storm intensity is amplifying globally.",
            "answer": "appear to indicate",
            "acceptableAnswers": [
              "appear to indicate",
              "appear to indicate",
              "APPEAR TO INDICATE"
            ],
            "options": [
              "shall indicate",
              "must indicate",
              "prove absolutely",
              "appear to indicate"
            ],
            "explanation": "'Appear to indicate' prevents unscientific overgeneralization."
          },
          {
            "id": "modal-verbs-hedging_ex3_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The ancient civilization ___ extensive trade links across the Mediterranean sea.",
            "answer": "must have maintained",
            "acceptableAnswers": [
              "must have maintained",
              "must have maintained",
              "MUST HAVE MAINTAINED"
            ],
            "options": [
              "would maintain",
              "can maintain",
              "must have maintained",
              "should maintain"
            ],
            "explanation": "Deduction based on historical evidence takes 'must have maintained'."
          },
          {
            "id": "modal-verbs-hedging_ex3_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Higher taxation on carbon-heavy corporations ___ economic growth in the short term.",
            "answer": "is likely to dampen",
            "acceptableAnswers": [
              "is likely to dampen",
              "is likely to dampen",
              "IS LIKELY TO DAMPEN"
            ],
            "options": [
              "will destroy",
              "shall dampen",
              "must dampen",
              "is likely to dampen"
            ],
            "explanation": "'Is likely to dampen' represents a measured, probable outcome in economics."
          },
          {
            "id": "modal-verbs-hedging_ex3_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Technological innovation ___ as an unmitigated blessing without examining societal risks.",
            "answer": "cannot be viewed",
            "acceptableAnswers": [
              "cannot be viewed",
              "cannot be viewed",
              "CANNOT BE VIEWED"
            ],
            "options": [
              "must not be viewed",
              "cannot be viewed",
              "is not viewing",
              "should not view"
            ],
            "explanation": "'Cannot be viewed' forms an objective academic critique."
          },
          {
            "id": "modal-verbs-hedging_ex3_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The economic downturn ___ localized supply disruptions rather than global recessionary shocks.",
            "answer": "might reflect",
            "acceptableAnswers": [
              "might reflect",
              "might reflect",
              "MIGHT REFLECT"
            ],
            "options": [
              "might reflect",
              "must reflect definitely",
              "shall reflect",
              "is reflecting always"
            ],
            "explanation": "Hedging with 'might reflect' introduces a tenable alternative hypothesis."
          },
          {
            "id": "modal-verbs-hedging_ex3_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Marginalized communities ___ disproportionately by industrial pollutants.",
            "answer": "can be affected",
            "acceptableAnswers": [
              "can be affected",
              "can be affected",
              "CAN BE AFFECTED"
            ],
            "options": [
              "can be affected",
              "are affected inevitably",
              "must affect",
              "ought to affect"
            ],
            "explanation": "'Can be affected' expresses susceptibility without universal claim."
          },
          {
            "id": "modal-verbs-hedging_ex3_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lead researcher ___ the laboratory before the anomaly was detected.",
            "answer": "must have left",
            "acceptableAnswers": [
              "must have left",
              "must have left",
              "MUST HAVE LEFT"
            ],
            "options": [
              "ought to leave",
              "can leave",
              "must have left",
              "shall leave"
            ],
            "explanation": "Deduction about a past occurrence requires 'must have left'."
          },
          {
            "id": "modal-verbs-hedging_ex3_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban authorities ___ greater transparency in public procurement procedures.",
            "answer": "should practice",
            "acceptableAnswers": [
              "should practice",
              "should practice",
              "SHOULD PRACTICE"
            ],
            "options": [
              "must to practice",
              "have to practice",
              "should practice",
              "ought practice"
            ],
            "explanation": "'Should practice' provides formal institutional recommendation."
          }
        ]
      },
      {
        "id": "modal-verbs-hedging_ex_4",
        "number": 4,
        "title": "Exercise 4",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "modal-verbs-hedging_ex4_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Educational reforms cannot be expected to yield immediate measurable dividends within a single fiscal year.",
            "correctSequence": [
              "Educational reforms cannot be",
              "expected to yield immediate",
              "measurable dividends within",
              "a single fiscal year."
            ],
            "shuffledTokens": [
              "Educational reforms cannot be",
              "expected to yield immediate",
              "a single fiscal year.",
              "measurable dividends within"
            ],
            "explanation": "'Cannot be expected to' expresses an analytical limitation objectively."
          },
          {
            "id": "modal-verbs-hedging_ex4_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "High urban density appears to correlate with heightened innovation and entrepreneurial startup activities.",
            "correctSequence": [
              "High urban density appears to",
              "correlate with heightened innovation",
              "and entrepreneurial startup",
              "activities."
            ],
            "shuffledTokens": [
              "High urban density appears to",
              "correlate with heightened innovation",
              "activities.",
              "and entrepreneurial startup"
            ],
            "explanation": "Hedging with 'appears to correlate' prevents premature causal assertions."
          },
          {
            "id": "modal-verbs-hedging_ex4_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scholars contend that cultural assimilation need not imply the total eradication of heritage traditions.",
            "correctSequence": [
              "Scholars contend that cultural",
              "assimilation need not imply",
              "the total eradication of",
              "heritage traditions."
            ],
            "shuffledTokens": [
              "Scholars contend that cultural",
              "heritage traditions.",
              "the total eradication of",
              "assimilation need not imply"
            ],
            "explanation": "'Need not imply' expresses logical absence of necessity."
          },
          {
            "id": "modal-verbs-hedging_ex4_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The sudden collapse of negotiations could have been averted through more transparent bilateral diplomacy.",
            "correctSequence": [
              "The sudden collapse of negotiations",
              "could have been averted through",
              "more transparent bilateral",
              "diplomacy."
            ],
            "shuffledTokens": [
              "The sudden collapse of negotiations",
              "diplomacy.",
              "more transparent bilateral",
              "could have been averted through"
            ],
            "explanation": "'Could have been + past participle' reflects an unfulfilled past possibility."
          },
          {
            "id": "modal-verbs-hedging_ex4_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Researchers suggest that early childhood bilingualism is likely to foster superior cognitive flexibility in adult life.",
            "correctSequence": [
              "Researchers suggest that early childhood",
              "bilingualism is likely to foster",
              "superior cognitive flexibility",
              "in adult life."
            ],
            "shuffledTokens": [
              "in adult life.",
              "superior cognitive flexibility",
              "bilingualism is likely to foster",
              "Researchers suggest that early childhood"
            ],
            "explanation": "'Is likely to foster' hedges probability with scholarly moderation."
          },
          {
            "id": "modal-verbs-hedging_ex4_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Such dramatic environmental changes cannot plausibly be attributed solely to natural cyclical fluctuations.",
            "correctSequence": [
              "Such dramatic environmental changes",
              "cannot plausibly be attributed",
              "solely to natural cyclical",
              "fluctuations."
            ],
            "shuffledTokens": [
              "fluctuations.",
              "solely to natural cyclical",
              "cannot plausibly be attributed",
              "Such dramatic environmental changes"
            ],
            "explanation": "Modal hedging with 'cannot plausibly be attributed' refutes unproven single-cause hypotheses."
          },
          {
            "id": "modal-verbs-hedging_ex4_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Municipal authorities should consider subsidizing public transit rather than constructing additional urban expressways.",
            "correctSequence": [
              "Municipal authorities should consider",
              "subsidizing public transit rather",
              "than constructing additional",
              "urban expressways."
            ],
            "shuffledTokens": [
              "urban expressways.",
              "than constructing additional",
              "subsidizing public transit rather",
              "Municipal authorities should consider"
            ],
            "explanation": "'Should consider' offers constructive policy guidance with respectful academic restraint."
          },
          {
            "id": "modal-verbs-hedging_ex4_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The archaeological site must have served as a major commercial entrepôt during the bronze age.",
            "correctSequence": [
              "The archaeological site must have",
              "served as a major commercial",
              "entrepôt during the bronze",
              "age."
            ],
            "shuffledTokens": [
              "entrepôt during the bronze",
              "served as a major commercial",
              "age.",
              "The archaeological site must have"
            ],
            "explanation": "'Must have served' provides a logical deduction based on recovered trade artifacts."
          },
          {
            "id": "modal-verbs-hedging_ex4_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological disruption might well provoke transitory friction within traditional blue-collar labor sectors.",
            "correctSequence": [
              "Technological disruption might well",
              "provoke transitory friction within",
              "traditional blue-collar",
              "labor sectors."
            ],
            "shuffledTokens": [
              "labor sectors.",
              "traditional blue-collar",
              "Technological disruption might well",
              "provoke transitory friction within"
            ],
            "explanation": "'Might well' denotes a strong possibility without asserting certainty."
          },
          {
            "id": "modal-verbs-hedging_ex4_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Students who receive structured mentoring tend to demonstrate lower attrition rates throughout tertiary studies.",
            "correctSequence": [
              "Students who receive structured mentoring",
              "tend to demonstrate lower",
              "attrition rates throughout",
              "tertiary studies."
            ],
            "shuffledTokens": [
              "tend to demonstrate lower",
              "tertiary studies.",
              "Students who receive structured mentoring",
              "attrition rates throughout"
            ],
            "explanation": "'Tend to demonstrate' hedges observations derived from statistical trends."
          },
          {
            "id": "modal-verbs-hedging_ex4_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Preliminary meteorological findings ___ that storm intensity is amplifying globally.",
            "answer": "appear to indicate",
            "acceptableAnswers": [
              "appear to indicate",
              "appear to indicate",
              "APPEAR TO INDICATE"
            ],
            "options": [
              "must indicate",
              "appear to indicate",
              "shall indicate",
              "prove absolutely"
            ],
            "explanation": "'Appear to indicate' prevents unscientific overgeneralization."
          },
          {
            "id": "modal-verbs-hedging_ex4_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The ancient civilization ___ extensive trade links across the Mediterranean sea.",
            "answer": "must have maintained",
            "acceptableAnswers": [
              "must have maintained",
              "must have maintained",
              "MUST HAVE MAINTAINED"
            ],
            "options": [
              "would maintain",
              "can maintain",
              "must have maintained",
              "should maintain"
            ],
            "explanation": "Deduction based on historical evidence takes 'must have maintained'."
          },
          {
            "id": "modal-verbs-hedging_ex4_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Higher taxation on carbon-heavy corporations ___ economic growth in the short term.",
            "answer": "is likely to dampen",
            "acceptableAnswers": [
              "is likely to dampen",
              "is likely to dampen",
              "IS LIKELY TO DAMPEN"
            ],
            "options": [
              "will destroy",
              "is likely to dampen",
              "shall dampen",
              "must dampen"
            ],
            "explanation": "'Is likely to dampen' represents a measured, probable outcome in economics."
          },
          {
            "id": "modal-verbs-hedging_ex4_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Technological innovation ___ as an unmitigated blessing without examining societal risks.",
            "answer": "cannot be viewed",
            "acceptableAnswers": [
              "cannot be viewed",
              "cannot be viewed",
              "CANNOT BE VIEWED"
            ],
            "options": [
              "cannot be viewed",
              "must not be viewed",
              "should not view",
              "is not viewing"
            ],
            "explanation": "'Cannot be viewed' forms an objective academic critique."
          },
          {
            "id": "modal-verbs-hedging_ex4_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The economic downturn ___ localized supply disruptions rather than global recessionary shocks.",
            "answer": "might reflect",
            "acceptableAnswers": [
              "might reflect",
              "might reflect",
              "MIGHT REFLECT"
            ],
            "options": [
              "might reflect",
              "must reflect definitely",
              "shall reflect",
              "is reflecting always"
            ],
            "explanation": "Hedging with 'might reflect' introduces a tenable alternative hypothesis."
          },
          {
            "id": "modal-verbs-hedging_ex4_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Marginalized communities ___ disproportionately by industrial pollutants.",
            "answer": "can be affected",
            "acceptableAnswers": [
              "can be affected",
              "can be affected",
              "CAN BE AFFECTED"
            ],
            "options": [
              "can be affected",
              "are affected inevitably",
              "must affect",
              "ought to affect"
            ],
            "explanation": "'Can be affected' expresses susceptibility without universal claim."
          },
          {
            "id": "modal-verbs-hedging_ex4_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lead researcher ___ the laboratory before the anomaly was detected.",
            "answer": "must have left",
            "acceptableAnswers": [
              "must have left",
              "must have left",
              "MUST HAVE LEFT"
            ],
            "options": [
              "shall leave",
              "can leave",
              "must have left",
              "ought to leave"
            ],
            "explanation": "Deduction about a past occurrence requires 'must have left'."
          },
          {
            "id": "modal-verbs-hedging_ex4_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban authorities ___ greater transparency in public procurement procedures.",
            "answer": "should practice",
            "acceptableAnswers": [
              "should practice",
              "should practice",
              "SHOULD PRACTICE"
            ],
            "options": [
              "have to practice",
              "ought practice",
              "should practice",
              "must to practice"
            ],
            "explanation": "'Should practice' provides formal institutional recommendation."
          },
          {
            "id": "modal-verbs-hedging_ex4_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Prolonged sedentary behavior ___ cardiovascular resilience over time.",
            "answer": "is prone to eroding",
            "acceptableAnswers": [
              "is prone to eroding",
              "is prone to eroding",
              "IS PRONE TO ERODING"
            ],
            "options": [
              "shall erode",
              "must erode",
              "is prone to eroding",
              "erodes completely"
            ],
            "explanation": "'Is prone to eroding' hedges biological vulnerability."
          },
          {
            "id": "modal-verbs-hedging_ex4_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The discrepancy in experimental data ___ from faulty spectrometer calibration.",
            "answer": "could have originated",
            "acceptableAnswers": [
              "could have originated",
              "could have originated",
              "COULD HAVE ORIGINATED"
            ],
            "options": [
              "could have originated",
              "would be originated",
              "should originate",
              "must originate now"
            ],
            "explanation": "'Could have originated' denotes past conditional possibility."
          }
        ]
      },
      {
        "id": "modal-verbs-hedging_ex_5",
        "number": 5,
        "title": "Exercise 5",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "modal-verbs-hedging_ex5_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scholars contend that cultural assimilation need not imply the total eradication of heritage traditions.",
            "correctSequence": [
              "Scholars contend that cultural",
              "assimilation need not imply",
              "the total eradication of",
              "heritage traditions."
            ],
            "shuffledTokens": [
              "assimilation need not imply",
              "Scholars contend that cultural",
              "the total eradication of",
              "heritage traditions."
            ],
            "explanation": "'Need not imply' expresses logical absence of necessity."
          },
          {
            "id": "modal-verbs-hedging_ex5_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The sudden collapse of negotiations could have been averted through more transparent bilateral diplomacy.",
            "correctSequence": [
              "The sudden collapse of negotiations",
              "could have been averted through",
              "more transparent bilateral",
              "diplomacy."
            ],
            "shuffledTokens": [
              "could have been averted through",
              "The sudden collapse of negotiations",
              "more transparent bilateral",
              "diplomacy."
            ],
            "explanation": "'Could have been + past participle' reflects an unfulfilled past possibility."
          },
          {
            "id": "modal-verbs-hedging_ex5_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Researchers suggest that early childhood bilingualism is likely to foster superior cognitive flexibility in adult life.",
            "correctSequence": [
              "Researchers suggest that early childhood",
              "bilingualism is likely to foster",
              "superior cognitive flexibility",
              "in adult life."
            ],
            "shuffledTokens": [
              "bilingualism is likely to foster",
              "Researchers suggest that early childhood",
              "superior cognitive flexibility",
              "in adult life."
            ],
            "explanation": "'Is likely to foster' hedges probability with scholarly moderation."
          },
          {
            "id": "modal-verbs-hedging_ex5_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Such dramatic environmental changes cannot plausibly be attributed solely to natural cyclical fluctuations.",
            "correctSequence": [
              "Such dramatic environmental changes",
              "cannot plausibly be attributed",
              "solely to natural cyclical",
              "fluctuations."
            ],
            "shuffledTokens": [
              "cannot plausibly be attributed",
              "Such dramatic environmental changes",
              "solely to natural cyclical",
              "fluctuations."
            ],
            "explanation": "Modal hedging with 'cannot plausibly be attributed' refutes unproven single-cause hypotheses."
          },
          {
            "id": "modal-verbs-hedging_ex5_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Municipal authorities should consider subsidizing public transit rather than constructing additional urban expressways.",
            "correctSequence": [
              "Municipal authorities should consider",
              "subsidizing public transit rather",
              "than constructing additional",
              "urban expressways."
            ],
            "shuffledTokens": [
              "Municipal authorities should consider",
              "subsidizing public transit rather",
              "urban expressways.",
              "than constructing additional"
            ],
            "explanation": "'Should consider' offers constructive policy guidance with respectful academic restraint."
          },
          {
            "id": "modal-verbs-hedging_ex5_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The archaeological site must have served as a major commercial entrepôt during the bronze age.",
            "correctSequence": [
              "The archaeological site must have",
              "served as a major commercial",
              "entrepôt during the bronze",
              "age."
            ],
            "shuffledTokens": [
              "The archaeological site must have",
              "served as a major commercial",
              "age.",
              "entrepôt during the bronze"
            ],
            "explanation": "'Must have served' provides a logical deduction based on recovered trade artifacts."
          },
          {
            "id": "modal-verbs-hedging_ex5_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological disruption might well provoke transitory friction within traditional blue-collar labor sectors.",
            "correctSequence": [
              "Technological disruption might well",
              "provoke transitory friction within",
              "traditional blue-collar",
              "labor sectors."
            ],
            "shuffledTokens": [
              "Technological disruption might well",
              "labor sectors.",
              "traditional blue-collar",
              "provoke transitory friction within"
            ],
            "explanation": "'Might well' denotes a strong possibility without asserting certainty."
          },
          {
            "id": "modal-verbs-hedging_ex5_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Students who receive structured mentoring tend to demonstrate lower attrition rates throughout tertiary studies.",
            "correctSequence": [
              "Students who receive structured mentoring",
              "tend to demonstrate lower",
              "attrition rates throughout",
              "tertiary studies."
            ],
            "shuffledTokens": [
              "Students who receive structured mentoring",
              "tertiary studies.",
              "attrition rates throughout",
              "tend to demonstrate lower"
            ],
            "explanation": "'Tend to demonstrate' hedges observations derived from statistical trends."
          },
          {
            "id": "modal-verbs-hedging_ex5_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Excessive reliance on debt financing can potentially jeopardize a firm's long-term operational solvency.",
            "correctSequence": [
              "Excessive reliance on debt financing",
              "can potentially jeopardize a firm's",
              "long-term operational",
              "solvency."
            ],
            "shuffledTokens": [
              "solvency.",
              "long-term operational",
              "can potentially jeopardize a firm's",
              "Excessive reliance on debt financing"
            ],
            "explanation": "'Can potentially jeopardize' states capability and possibility prudently."
          },
          {
            "id": "modal-verbs-hedging_ex5_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The failure to replicate laboratory results might stem from minor disparities in ambient temperature calibration.",
            "correctSequence": [
              "The failure to replicate laboratory results",
              "might stem from minor disparities",
              "in ambient temperature",
              "calibration."
            ],
            "shuffledTokens": [
              "calibration.",
              "in ambient temperature",
              "might stem from minor disparities",
              "The failure to replicate laboratory results"
            ],
            "explanation": "'Might stem from' provides a tentative explanatory hypothesis."
          },
          {
            "id": "modal-verbs-hedging_ex5_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Higher taxation on carbon-heavy corporations ___ economic growth in the short term.",
            "answer": "is likely to dampen",
            "acceptableAnswers": [
              "is likely to dampen",
              "is likely to dampen",
              "IS LIKELY TO DAMPEN"
            ],
            "options": [
              "is likely to dampen",
              "will destroy",
              "must dampen",
              "shall dampen"
            ],
            "explanation": "'Is likely to dampen' represents a measured, probable outcome in economics."
          },
          {
            "id": "modal-verbs-hedging_ex5_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Technological innovation ___ as an unmitigated blessing without examining societal risks.",
            "answer": "cannot be viewed",
            "acceptableAnswers": [
              "cannot be viewed",
              "cannot be viewed",
              "CANNOT BE VIEWED"
            ],
            "options": [
              "cannot be viewed",
              "must not be viewed",
              "should not view",
              "is not viewing"
            ],
            "explanation": "'Cannot be viewed' forms an objective academic critique."
          },
          {
            "id": "modal-verbs-hedging_ex5_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The economic downturn ___ localized supply disruptions rather than global recessionary shocks.",
            "answer": "might reflect",
            "acceptableAnswers": [
              "might reflect",
              "might reflect",
              "MIGHT REFLECT"
            ],
            "options": [
              "might reflect",
              "must reflect definitely",
              "shall reflect",
              "is reflecting always"
            ],
            "explanation": "Hedging with 'might reflect' introduces a tenable alternative hypothesis."
          },
          {
            "id": "modal-verbs-hedging_ex5_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Marginalized communities ___ disproportionately by industrial pollutants.",
            "answer": "can be affected",
            "acceptableAnswers": [
              "can be affected",
              "can be affected",
              "CAN BE AFFECTED"
            ],
            "options": [
              "must affect",
              "are affected inevitably",
              "can be affected",
              "ought to affect"
            ],
            "explanation": "'Can be affected' expresses susceptibility without universal claim."
          },
          {
            "id": "modal-verbs-hedging_ex5_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lead researcher ___ the laboratory before the anomaly was detected.",
            "answer": "must have left",
            "acceptableAnswers": [
              "must have left",
              "must have left",
              "MUST HAVE LEFT"
            ],
            "options": [
              "must have left",
              "shall leave",
              "can leave",
              "ought to leave"
            ],
            "explanation": "Deduction about a past occurrence requires 'must have left'."
          },
          {
            "id": "modal-verbs-hedging_ex5_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban authorities ___ greater transparency in public procurement procedures.",
            "answer": "should practice",
            "acceptableAnswers": [
              "should practice",
              "should practice",
              "SHOULD PRACTICE"
            ],
            "options": [
              "ought practice",
              "must to practice",
              "have to practice",
              "should practice"
            ],
            "explanation": "'Should practice' provides formal institutional recommendation."
          },
          {
            "id": "modal-verbs-hedging_ex5_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Prolonged sedentary behavior ___ cardiovascular resilience over time.",
            "answer": "is prone to eroding",
            "acceptableAnswers": [
              "is prone to eroding",
              "is prone to eroding",
              "IS PRONE TO ERODING"
            ],
            "options": [
              "shall erode",
              "must erode",
              "is prone to eroding",
              "erodes completely"
            ],
            "explanation": "'Is prone to eroding' hedges biological vulnerability."
          },
          {
            "id": "modal-verbs-hedging_ex5_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The discrepancy in experimental data ___ from faulty spectrometer calibration.",
            "answer": "could have originated",
            "acceptableAnswers": [
              "could have originated",
              "could have originated",
              "COULD HAVE ORIGINATED"
            ],
            "options": [
              "could have originated",
              "must originate now",
              "would be originated",
              "should originate"
            ],
            "explanation": "'Could have originated' denotes past conditional possibility."
          },
          {
            "id": "modal-verbs-hedging_ex5_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Early bilingual immersion ___ cognitive flexibility in complex linguistic tasks.",
            "answer": "tends to enhance",
            "acceptableAnswers": [
              "tends to enhance",
              "tends to enhance",
              "TENDS TO ENHANCE"
            ],
            "options": [
              "tends to enhance",
              "enhances perpetually",
              "must enhance",
              "will enhance always"
            ],
            "explanation": "'Tends to enhance' correctly frames psycholinguistic evidence."
          },
          {
            "id": "modal-verbs-hedging_ex5_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Public health agencies ___ cautionary warnings regarding unverified nutritional supplements.",
            "answer": "ought to issue",
            "acceptableAnswers": [
              "ought to issue",
              "ought to issue",
              "OUGHT TO ISSUE"
            ],
            "options": [
              "must to issue",
              "ought to issue",
              "ought issuing",
              "should to issue"
            ],
            "explanation": "'Ought to issue' denotes appropriate regulatory action."
          }
        ]
      },
      {
        "id": "modal-verbs-hedging_ex_6",
        "number": 6,
        "title": "Exercise 6",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "modal-verbs-hedging_ex6_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Researchers suggest that early childhood bilingualism is likely to foster superior cognitive flexibility in adult life.",
            "correctSequence": [
              "Researchers suggest that early childhood",
              "bilingualism is likely to foster",
              "superior cognitive flexibility",
              "in adult life."
            ],
            "shuffledTokens": [
              "bilingualism is likely to foster",
              "Researchers suggest that early childhood",
              "superior cognitive flexibility",
              "in adult life."
            ],
            "explanation": "'Is likely to foster' hedges probability with scholarly moderation."
          },
          {
            "id": "modal-verbs-hedging_ex6_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Such dramatic environmental changes cannot plausibly be attributed solely to natural cyclical fluctuations.",
            "correctSequence": [
              "Such dramatic environmental changes",
              "cannot plausibly be attributed",
              "solely to natural cyclical",
              "fluctuations."
            ],
            "shuffledTokens": [
              "cannot plausibly be attributed",
              "Such dramatic environmental changes",
              "solely to natural cyclical",
              "fluctuations."
            ],
            "explanation": "Modal hedging with 'cannot plausibly be attributed' refutes unproven single-cause hypotheses."
          },
          {
            "id": "modal-verbs-hedging_ex6_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Municipal authorities should consider subsidizing public transit rather than constructing additional urban expressways.",
            "correctSequence": [
              "Municipal authorities should consider",
              "subsidizing public transit rather",
              "than constructing additional",
              "urban expressways."
            ],
            "shuffledTokens": [
              "subsidizing public transit rather",
              "Municipal authorities should consider",
              "than constructing additional",
              "urban expressways."
            ],
            "explanation": "'Should consider' offers constructive policy guidance with respectful academic restraint."
          },
          {
            "id": "modal-verbs-hedging_ex6_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The archaeological site must have served as a major commercial entrepôt during the bronze age.",
            "correctSequence": [
              "The archaeological site must have",
              "served as a major commercial",
              "entrepôt during the bronze",
              "age."
            ],
            "shuffledTokens": [
              "served as a major commercial",
              "The archaeological site must have",
              "entrepôt during the bronze",
              "age."
            ],
            "explanation": "'Must have served' provides a logical deduction based on recovered trade artifacts."
          },
          {
            "id": "modal-verbs-hedging_ex6_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological disruption might well provoke transitory friction within traditional blue-collar labor sectors.",
            "correctSequence": [
              "Technological disruption might well",
              "provoke transitory friction within",
              "traditional blue-collar",
              "labor sectors."
            ],
            "shuffledTokens": [
              "provoke transitory friction within",
              "Technological disruption might well",
              "traditional blue-collar",
              "labor sectors."
            ],
            "explanation": "'Might well' denotes a strong possibility without asserting certainty."
          },
          {
            "id": "modal-verbs-hedging_ex6_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Students who receive structured mentoring tend to demonstrate lower attrition rates throughout tertiary studies.",
            "correctSequence": [
              "Students who receive structured mentoring",
              "tend to demonstrate lower",
              "attrition rates throughout",
              "tertiary studies."
            ],
            "shuffledTokens": [
              "tend to demonstrate lower",
              "Students who receive structured mentoring",
              "attrition rates throughout",
              "tertiary studies."
            ],
            "explanation": "'Tend to demonstrate' hedges observations derived from statistical trends."
          },
          {
            "id": "modal-verbs-hedging_ex6_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Excessive reliance on debt financing can potentially jeopardize a firm's long-term operational solvency.",
            "correctSequence": [
              "Excessive reliance on debt financing",
              "can potentially jeopardize a firm's",
              "long-term operational",
              "solvency."
            ],
            "shuffledTokens": [
              "can potentially jeopardize a firm's",
              "Excessive reliance on debt financing",
              "long-term operational",
              "solvency."
            ],
            "explanation": "'Can potentially jeopardize' states capability and possibility prudently."
          },
          {
            "id": "modal-verbs-hedging_ex6_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The failure to replicate laboratory results might stem from minor disparities in ambient temperature calibration.",
            "correctSequence": [
              "The failure to replicate laboratory results",
              "might stem from minor disparities",
              "in ambient temperature",
              "calibration."
            ],
            "shuffledTokens": [
              "The failure to replicate laboratory results",
              "might stem from minor disparities",
              "calibration.",
              "in ambient temperature"
            ],
            "explanation": "'Might stem from' provides a tentative explanatory hypothesis."
          },
          {
            "id": "modal-verbs-hedging_ex6_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Environmental scientists warn that inaction will almost certainly exacerbate coastal erosion and sea-level incursions.",
            "correctSequence": [
              "Environmental scientists warn that inaction",
              "will almost certainly exacerbate",
              "coastal erosion and sea-level",
              "incursions."
            ],
            "shuffledTokens": [
              "Environmental scientists warn that inaction",
              "will almost certainly exacerbate",
              "incursions.",
              "coastal erosion and sea-level"
            ],
            "explanation": "Hedging adverbial 'almost certainly' conveys near-unanimous scientific consensus."
          },
          {
            "id": "modal-verbs-hedging_ex6_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Policymakers ought not to neglect the profound socioeconomic hardships experienced by marginalized demographics.",
            "correctSequence": [
              "Policymakers ought not to neglect",
              "the profound socioeconomic hardships",
              "experienced by marginalized",
              "demographics."
            ],
            "shuffledTokens": [
              "Policymakers ought not to neglect",
              "the profound socioeconomic hardships",
              "demographics.",
              "experienced by marginalized"
            ],
            "explanation": "'Ought not to' provides reasoned normative ethical evaluation."
          },
          {
            "id": "modal-verbs-hedging_ex6_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The economic downturn ___ localized supply disruptions rather than global recessionary shocks.",
            "answer": "might reflect",
            "acceptableAnswers": [
              "might reflect",
              "might reflect",
              "MIGHT REFLECT"
            ],
            "options": [
              "might reflect",
              "must reflect definitely",
              "shall reflect",
              "is reflecting always"
            ],
            "explanation": "Hedging with 'might reflect' introduces a tenable alternative hypothesis."
          },
          {
            "id": "modal-verbs-hedging_ex6_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Marginalized communities ___ disproportionately by industrial pollutants.",
            "answer": "can be affected",
            "acceptableAnswers": [
              "can be affected",
              "can be affected",
              "CAN BE AFFECTED"
            ],
            "options": [
              "ought to affect",
              "are affected inevitably",
              "can be affected",
              "must affect"
            ],
            "explanation": "'Can be affected' expresses susceptibility without universal claim."
          },
          {
            "id": "modal-verbs-hedging_ex6_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lead researcher ___ the laboratory before the anomaly was detected.",
            "answer": "must have left",
            "acceptableAnswers": [
              "must have left",
              "must have left",
              "MUST HAVE LEFT"
            ],
            "options": [
              "shall leave",
              "ought to leave",
              "can leave",
              "must have left"
            ],
            "explanation": "Deduction about a past occurrence requires 'must have left'."
          },
          {
            "id": "modal-verbs-hedging_ex6_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban authorities ___ greater transparency in public procurement procedures.",
            "answer": "should practice",
            "acceptableAnswers": [
              "should practice",
              "should practice",
              "SHOULD PRACTICE"
            ],
            "options": [
              "have to practice",
              "ought practice",
              "must to practice",
              "should practice"
            ],
            "explanation": "'Should practice' provides formal institutional recommendation."
          },
          {
            "id": "modal-verbs-hedging_ex6_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Prolonged sedentary behavior ___ cardiovascular resilience over time.",
            "answer": "is prone to eroding",
            "acceptableAnswers": [
              "is prone to eroding",
              "is prone to eroding",
              "IS PRONE TO ERODING"
            ],
            "options": [
              "erodes completely",
              "shall erode",
              "must erode",
              "is prone to eroding"
            ],
            "explanation": "'Is prone to eroding' hedges biological vulnerability."
          },
          {
            "id": "modal-verbs-hedging_ex6_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The discrepancy in experimental data ___ from faulty spectrometer calibration.",
            "answer": "could have originated",
            "acceptableAnswers": [
              "could have originated",
              "could have originated",
              "COULD HAVE ORIGINATED"
            ],
            "options": [
              "must originate now",
              "could have originated",
              "should originate",
              "would be originated"
            ],
            "explanation": "'Could have originated' denotes past conditional possibility."
          },
          {
            "id": "modal-verbs-hedging_ex6_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Early bilingual immersion ___ cognitive flexibility in complex linguistic tasks.",
            "answer": "tends to enhance",
            "acceptableAnswers": [
              "tends to enhance",
              "tends to enhance",
              "TENDS TO ENHANCE"
            ],
            "options": [
              "tends to enhance",
              "enhances perpetually",
              "must enhance",
              "will enhance always"
            ],
            "explanation": "'Tends to enhance' correctly frames psycholinguistic evidence."
          },
          {
            "id": "modal-verbs-hedging_ex6_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Public health agencies ___ cautionary warnings regarding unverified nutritional supplements.",
            "answer": "ought to issue",
            "acceptableAnswers": [
              "ought to issue",
              "ought to issue",
              "OUGHT TO ISSUE"
            ],
            "options": [
              "must to issue",
              "ought to issue",
              "ought issuing",
              "should to issue"
            ],
            "explanation": "'Ought to issue' denotes appropriate regulatory action."
          },
          {
            "id": "modal-verbs-hedging_ex6_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The collapse of the bridge ___ structural fatigue in the load-bearing pylons.",
            "answer": "may have resulted from",
            "acceptableAnswers": [
              "may have resulted from",
              "may have resulted from",
              "MAY HAVE RESULTED FROM"
            ],
            "options": [
              "must result",
              "resulted inevitably from",
              "may have resulted from",
              "can result"
            ],
            "explanation": "Hedging past causation requires 'may have resulted from'."
          },
          {
            "id": "modal-verbs-hedging_ex6_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Alternative green technologies ___ mature market parity within the next decade.",
            "answer": "are expected to achieve",
            "acceptableAnswers": [
              "are expected to achieve",
              "are expected to achieve",
              "ARE EXPECTED TO ACHIEVE"
            ],
            "options": [
              "are expected to achieve",
              "shall achieve",
              "achieve definitely",
              "must achieve"
            ],
            "explanation": "'Are expected to achieve' frames future market projections academically."
          }
        ]
      },
      {
        "id": "modal-verbs-hedging_ex_7",
        "number": 7,
        "title": "Exercise 7",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "modal-verbs-hedging_ex7_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Municipal authorities should consider subsidizing public transit rather than constructing additional urban expressways.",
            "correctSequence": [
              "Municipal authorities should consider",
              "subsidizing public transit rather",
              "than constructing additional",
              "urban expressways."
            ],
            "shuffledTokens": [
              "subsidizing public transit rather",
              "urban expressways.",
              "Municipal authorities should consider",
              "than constructing additional"
            ],
            "explanation": "'Should consider' offers constructive policy guidance with respectful academic restraint."
          },
          {
            "id": "modal-verbs-hedging_ex7_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The archaeological site must have served as a major commercial entrepôt during the bronze age.",
            "correctSequence": [
              "The archaeological site must have",
              "served as a major commercial",
              "entrepôt during the bronze",
              "age."
            ],
            "shuffledTokens": [
              "entrepôt during the bronze",
              "The archaeological site must have",
              "served as a major commercial",
              "age."
            ],
            "explanation": "'Must have served' provides a logical deduction based on recovered trade artifacts."
          },
          {
            "id": "modal-verbs-hedging_ex7_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological disruption might well provoke transitory friction within traditional blue-collar labor sectors.",
            "correctSequence": [
              "Technological disruption might well",
              "provoke transitory friction within",
              "traditional blue-collar",
              "labor sectors."
            ],
            "shuffledTokens": [
              "traditional blue-collar",
              "Technological disruption might well",
              "provoke transitory friction within",
              "labor sectors."
            ],
            "explanation": "'Might well' denotes a strong possibility without asserting certainty."
          },
          {
            "id": "modal-verbs-hedging_ex7_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Students who receive structured mentoring tend to demonstrate lower attrition rates throughout tertiary studies.",
            "correctSequence": [
              "Students who receive structured mentoring",
              "tend to demonstrate lower",
              "attrition rates throughout",
              "tertiary studies."
            ],
            "shuffledTokens": [
              "tend to demonstrate lower",
              "Students who receive structured mentoring",
              "attrition rates throughout",
              "tertiary studies."
            ],
            "explanation": "'Tend to demonstrate' hedges observations derived from statistical trends."
          },
          {
            "id": "modal-verbs-hedging_ex7_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Excessive reliance on debt financing can potentially jeopardize a firm's long-term operational solvency.",
            "correctSequence": [
              "Excessive reliance on debt financing",
              "can potentially jeopardize a firm's",
              "long-term operational",
              "solvency."
            ],
            "shuffledTokens": [
              "can potentially jeopardize a firm's",
              "Excessive reliance on debt financing",
              "long-term operational",
              "solvency."
            ],
            "explanation": "'Can potentially jeopardize' states capability and possibility prudently."
          },
          {
            "id": "modal-verbs-hedging_ex7_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The failure to replicate laboratory results might stem from minor disparities in ambient temperature calibration.",
            "correctSequence": [
              "The failure to replicate laboratory results",
              "might stem from minor disparities",
              "in ambient temperature",
              "calibration."
            ],
            "shuffledTokens": [
              "might stem from minor disparities",
              "The failure to replicate laboratory results",
              "in ambient temperature",
              "calibration."
            ],
            "explanation": "'Might stem from' provides a tentative explanatory hypothesis."
          },
          {
            "id": "modal-verbs-hedging_ex7_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Environmental scientists warn that inaction will almost certainly exacerbate coastal erosion and sea-level incursions.",
            "correctSequence": [
              "Environmental scientists warn that inaction",
              "will almost certainly exacerbate",
              "coastal erosion and sea-level",
              "incursions."
            ],
            "shuffledTokens": [
              "will almost certainly exacerbate",
              "Environmental scientists warn that inaction",
              "coastal erosion and sea-level",
              "incursions."
            ],
            "explanation": "Hedging adverbial 'almost certainly' conveys near-unanimous scientific consensus."
          },
          {
            "id": "modal-verbs-hedging_ex7_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Policymakers ought not to neglect the profound socioeconomic hardships experienced by marginalized demographics.",
            "correctSequence": [
              "Policymakers ought not to neglect",
              "the profound socioeconomic hardships",
              "experienced by marginalized",
              "demographics."
            ],
            "shuffledTokens": [
              "the profound socioeconomic hardships",
              "Policymakers ought not to neglect",
              "experienced by marginalized",
              "demographics."
            ],
            "explanation": "'Ought not to' provides reasoned normative ethical evaluation."
          },
          {
            "id": "modal-verbs-hedging_ex7_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Excessive screen exposure may plausibly exacerbate sleep disorders among developing school-aged adolescents.",
            "correctSequence": [
              "Excessive screen exposure may",
              "plausibly exacerbate sleep disorders",
              "among developing school-aged",
              "adolescents."
            ],
            "shuffledTokens": [
              "plausibly exacerbate sleep disorders",
              "Excessive screen exposure may",
              "among developing school-aged",
              "adolescents."
            ],
            "explanation": "Academic hedging uses 'may plausibly' to avoid unscientific absolute claims."
          },
          {
            "id": "modal-verbs-hedging_ex7_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The dramatic decline in biodiversity could conceivably trigger irreversible distortions in regional food chains.",
            "correctSequence": [
              "The dramatic decline in biodiversity",
              "could conceivably trigger irreversible",
              "distortions in regional",
              "food chains."
            ],
            "shuffledTokens": [
              "could conceivably trigger irreversible",
              "The dramatic decline in biodiversity",
              "distortions in regional",
              "food chains."
            ],
            "explanation": "'Could conceivably' introduces a tentative possibility grounded in ecological caution."
          },
          {
            "id": "modal-verbs-hedging_ex7_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lead researcher ___ the laboratory before the anomaly was detected.",
            "answer": "must have left",
            "acceptableAnswers": [
              "must have left",
              "must have left",
              "MUST HAVE LEFT"
            ],
            "options": [
              "ought to leave",
              "must have left",
              "shall leave",
              "can leave"
            ],
            "explanation": "Deduction about a past occurrence requires 'must have left'."
          },
          {
            "id": "modal-verbs-hedging_ex7_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban authorities ___ greater transparency in public procurement procedures.",
            "answer": "should practice",
            "acceptableAnswers": [
              "should practice",
              "should practice",
              "SHOULD PRACTICE"
            ],
            "options": [
              "should practice",
              "ought practice",
              "have to practice",
              "must to practice"
            ],
            "explanation": "'Should practice' provides formal institutional recommendation."
          },
          {
            "id": "modal-verbs-hedging_ex7_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Prolonged sedentary behavior ___ cardiovascular resilience over time.",
            "answer": "is prone to eroding",
            "acceptableAnswers": [
              "is prone to eroding",
              "is prone to eroding",
              "IS PRONE TO ERODING"
            ],
            "options": [
              "erodes completely",
              "is prone to eroding",
              "shall erode",
              "must erode"
            ],
            "explanation": "'Is prone to eroding' hedges biological vulnerability."
          },
          {
            "id": "modal-verbs-hedging_ex7_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The discrepancy in experimental data ___ from faulty spectrometer calibration.",
            "answer": "could have originated",
            "acceptableAnswers": [
              "could have originated",
              "could have originated",
              "COULD HAVE ORIGINATED"
            ],
            "options": [
              "must originate now",
              "could have originated",
              "should originate",
              "would be originated"
            ],
            "explanation": "'Could have originated' denotes past conditional possibility."
          },
          {
            "id": "modal-verbs-hedging_ex7_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Early bilingual immersion ___ cognitive flexibility in complex linguistic tasks.",
            "answer": "tends to enhance",
            "acceptableAnswers": [
              "tends to enhance",
              "tends to enhance",
              "TENDS TO ENHANCE"
            ],
            "options": [
              "tends to enhance",
              "enhances perpetually",
              "must enhance",
              "will enhance always"
            ],
            "explanation": "'Tends to enhance' correctly frames psycholinguistic evidence."
          },
          {
            "id": "modal-verbs-hedging_ex7_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Public health agencies ___ cautionary warnings regarding unverified nutritional supplements.",
            "answer": "ought to issue",
            "acceptableAnswers": [
              "ought to issue",
              "ought to issue",
              "OUGHT TO ISSUE"
            ],
            "options": [
              "must to issue",
              "ought to issue",
              "ought issuing",
              "should to issue"
            ],
            "explanation": "'Ought to issue' denotes appropriate regulatory action."
          },
          {
            "id": "modal-verbs-hedging_ex7_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The collapse of the bridge ___ structural fatigue in the load-bearing pylons.",
            "answer": "may have resulted from",
            "acceptableAnswers": [
              "may have resulted from",
              "may have resulted from",
              "MAY HAVE RESULTED FROM"
            ],
            "options": [
              "can result",
              "resulted inevitably from",
              "may have resulted from",
              "must result"
            ],
            "explanation": "Hedging past causation requires 'may have resulted from'."
          },
          {
            "id": "modal-verbs-hedging_ex7_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Alternative green technologies ___ mature market parity within the next decade.",
            "answer": "are expected to achieve",
            "acceptableAnswers": [
              "are expected to achieve",
              "are expected to achieve",
              "ARE EXPECTED TO ACHIEVE"
            ],
            "options": [
              "shall achieve",
              "must achieve",
              "achieve definitely",
              "are expected to achieve"
            ],
            "explanation": "'Are expected to achieve' frames future market projections academically."
          },
          {
            "id": "modal-verbs-hedging_ex7_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The observed correlation between diet and longevity ___ further clinical investigation.",
            "answer": "may warrant",
            "acceptableAnswers": [
              "may warrant",
              "may warrant",
              "MAY WARRANT"
            ],
            "options": [
              "shall warrant",
              "warrants definitely",
              "may warrant",
              "must warrant"
            ],
            "explanation": "Academic style favors cautious hedging ('may warrant') over categorical assertions."
          },
          {
            "id": "modal-verbs-hedging_ex7_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The missing archaeological documentation ___ destroyed during the library fire of 1845.",
            "answer": "must have been",
            "acceptableAnswers": [
              "must have been",
              "must have been",
              "MUST HAVE BEEN"
            ],
            "options": [
              "should have been",
              "can be",
              "would be",
              "must have been"
            ],
            "explanation": "'Must have been' expresses a strong logical deduction regarding past history."
          }
        ]
      },
      {
        "id": "modal-verbs-hedging_ex_8",
        "number": 8,
        "title": "Exercise 8",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "modal-verbs-hedging_ex8_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological disruption might well provoke transitory friction within traditional blue-collar labor sectors.",
            "correctSequence": [
              "Technological disruption might well",
              "provoke transitory friction within",
              "traditional blue-collar",
              "labor sectors."
            ],
            "shuffledTokens": [
              "traditional blue-collar",
              "provoke transitory friction within",
              "labor sectors.",
              "Technological disruption might well"
            ],
            "explanation": "'Might well' denotes a strong possibility without asserting certainty."
          },
          {
            "id": "modal-verbs-hedging_ex8_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Students who receive structured mentoring tend to demonstrate lower attrition rates throughout tertiary studies.",
            "correctSequence": [
              "Students who receive structured mentoring",
              "tend to demonstrate lower",
              "attrition rates throughout",
              "tertiary studies."
            ],
            "shuffledTokens": [
              "tertiary studies.",
              "attrition rates throughout",
              "Students who receive structured mentoring",
              "tend to demonstrate lower"
            ],
            "explanation": "'Tend to demonstrate' hedges observations derived from statistical trends."
          },
          {
            "id": "modal-verbs-hedging_ex8_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Excessive reliance on debt financing can potentially jeopardize a firm's long-term operational solvency.",
            "correctSequence": [
              "Excessive reliance on debt financing",
              "can potentially jeopardize a firm's",
              "long-term operational",
              "solvency."
            ],
            "shuffledTokens": [
              "solvency.",
              "long-term operational",
              "Excessive reliance on debt financing",
              "can potentially jeopardize a firm's"
            ],
            "explanation": "'Can potentially jeopardize' states capability and possibility prudently."
          },
          {
            "id": "modal-verbs-hedging_ex8_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The failure to replicate laboratory results might stem from minor disparities in ambient temperature calibration.",
            "correctSequence": [
              "The failure to replicate laboratory results",
              "might stem from minor disparities",
              "in ambient temperature",
              "calibration."
            ],
            "shuffledTokens": [
              "might stem from minor disparities",
              "calibration.",
              "The failure to replicate laboratory results",
              "in ambient temperature"
            ],
            "explanation": "'Might stem from' provides a tentative explanatory hypothesis."
          },
          {
            "id": "modal-verbs-hedging_ex8_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Environmental scientists warn that inaction will almost certainly exacerbate coastal erosion and sea-level incursions.",
            "correctSequence": [
              "Environmental scientists warn that inaction",
              "will almost certainly exacerbate",
              "coastal erosion and sea-level",
              "incursions."
            ],
            "shuffledTokens": [
              "incursions.",
              "Environmental scientists warn that inaction",
              "will almost certainly exacerbate",
              "coastal erosion and sea-level"
            ],
            "explanation": "Hedging adverbial 'almost certainly' conveys near-unanimous scientific consensus."
          },
          {
            "id": "modal-verbs-hedging_ex8_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Policymakers ought not to neglect the profound socioeconomic hardships experienced by marginalized demographics.",
            "correctSequence": [
              "Policymakers ought not to neglect",
              "the profound socioeconomic hardships",
              "experienced by marginalized",
              "demographics."
            ],
            "shuffledTokens": [
              "experienced by marginalized",
              "Policymakers ought not to neglect",
              "the profound socioeconomic hardships",
              "demographics."
            ],
            "explanation": "'Ought not to' provides reasoned normative ethical evaluation."
          },
          {
            "id": "modal-verbs-hedging_ex8_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Excessive screen exposure may plausibly exacerbate sleep disorders among developing school-aged adolescents.",
            "correctSequence": [
              "Excessive screen exposure may",
              "plausibly exacerbate sleep disorders",
              "among developing school-aged",
              "adolescents."
            ],
            "shuffledTokens": [
              "among developing school-aged",
              "Excessive screen exposure may",
              "plausibly exacerbate sleep disorders",
              "adolescents."
            ],
            "explanation": "Academic hedging uses 'may plausibly' to avoid unscientific absolute claims."
          },
          {
            "id": "modal-verbs-hedging_ex8_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The dramatic decline in biodiversity could conceivably trigger irreversible distortions in regional food chains.",
            "correctSequence": [
              "The dramatic decline in biodiversity",
              "could conceivably trigger irreversible",
              "distortions in regional",
              "food chains."
            ],
            "shuffledTokens": [
              "could conceivably trigger irreversible",
              "The dramatic decline in biodiversity",
              "distortions in regional",
              "food chains."
            ],
            "explanation": "'Could conceivably' introduces a tentative possibility grounded in ecological caution."
          },
          {
            "id": "modal-verbs-hedging_ex8_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Governments ought to allocate greater economic subventions to preventative healthcare and sanitation programs.",
            "correctSequence": [
              "Governments ought to allocate",
              "greater economic subventions to",
              "preventative healthcare and",
              "sanitation programs."
            ],
            "shuffledTokens": [
              "greater economic subventions to",
              "Governments ought to allocate",
              "preventative healthcare and",
              "sanitation programs."
            ],
            "explanation": "'Ought to' expresses an academic moral recommendation without aggressive tone."
          },
          {
            "id": "modal-verbs-hedging_ex8_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ancient coastal settlement must have been abandoned following an unprecedented tsunami catastrophe.",
            "correctSequence": [
              "The ancient coastal settlement",
              "must have been abandoned",
              "following an unprecedented",
              "tsunami catastrophe."
            ],
            "shuffledTokens": [
              "must have been abandoned",
              "The ancient coastal settlement",
              "following an unprecedented",
              "tsunami catastrophe."
            ],
            "explanation": "'Must have + past participle' expresses a logical deduction regarding past historical evidence."
          },
          {
            "id": "modal-verbs-hedging_ex8_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Prolonged sedentary behavior ___ cardiovascular resilience over time.",
            "answer": "is prone to eroding",
            "acceptableAnswers": [
              "is prone to eroding",
              "is prone to eroding",
              "IS PRONE TO ERODING"
            ],
            "options": [
              "is prone to eroding",
              "erodes completely",
              "must erode",
              "shall erode"
            ],
            "explanation": "'Is prone to eroding' hedges biological vulnerability."
          },
          {
            "id": "modal-verbs-hedging_ex8_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The discrepancy in experimental data ___ from faulty spectrometer calibration.",
            "answer": "could have originated",
            "acceptableAnswers": [
              "could have originated",
              "could have originated",
              "COULD HAVE ORIGINATED"
            ],
            "options": [
              "must originate now",
              "could have originated",
              "should originate",
              "would be originated"
            ],
            "explanation": "'Could have originated' denotes past conditional possibility."
          },
          {
            "id": "modal-verbs-hedging_ex8_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Early bilingual immersion ___ cognitive flexibility in complex linguistic tasks.",
            "answer": "tends to enhance",
            "acceptableAnswers": [
              "tends to enhance",
              "tends to enhance",
              "TENDS TO ENHANCE"
            ],
            "options": [
              "tends to enhance",
              "enhances perpetually",
              "must enhance",
              "will enhance always"
            ],
            "explanation": "'Tends to enhance' correctly frames psycholinguistic evidence."
          },
          {
            "id": "modal-verbs-hedging_ex8_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Public health agencies ___ cautionary warnings regarding unverified nutritional supplements.",
            "answer": "ought to issue",
            "acceptableAnswers": [
              "ought to issue",
              "ought to issue",
              "OUGHT TO ISSUE"
            ],
            "options": [
              "ought issuing",
              "ought to issue",
              "must to issue",
              "should to issue"
            ],
            "explanation": "'Ought to issue' denotes appropriate regulatory action."
          },
          {
            "id": "modal-verbs-hedging_ex8_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The collapse of the bridge ___ structural fatigue in the load-bearing pylons.",
            "answer": "may have resulted from",
            "acceptableAnswers": [
              "may have resulted from",
              "may have resulted from",
              "MAY HAVE RESULTED FROM"
            ],
            "options": [
              "may have resulted from",
              "can result",
              "resulted inevitably from",
              "must result"
            ],
            "explanation": "Hedging past causation requires 'may have resulted from'."
          },
          {
            "id": "modal-verbs-hedging_ex8_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Alternative green technologies ___ mature market parity within the next decade.",
            "answer": "are expected to achieve",
            "acceptableAnswers": [
              "are expected to achieve",
              "are expected to achieve",
              "ARE EXPECTED TO ACHIEVE"
            ],
            "options": [
              "must achieve",
              "are expected to achieve",
              "shall achieve",
              "achieve definitely"
            ],
            "explanation": "'Are expected to achieve' frames future market projections academically."
          },
          {
            "id": "modal-verbs-hedging_ex8_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The observed correlation between diet and longevity ___ further clinical investigation.",
            "answer": "may warrant",
            "acceptableAnswers": [
              "may warrant",
              "may warrant",
              "MAY WARRANT"
            ],
            "options": [
              "must warrant",
              "warrants definitely",
              "shall warrant",
              "may warrant"
            ],
            "explanation": "Academic style favors cautious hedging ('may warrant') over categorical assertions."
          },
          {
            "id": "modal-verbs-hedging_ex8_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The missing archaeological documentation ___ destroyed during the library fire of 1845.",
            "answer": "must have been",
            "acceptableAnswers": [
              "must have been",
              "must have been",
              "MUST HAVE BEEN"
            ],
            "options": [
              "should have been",
              "must have been",
              "can be",
              "would be"
            ],
            "explanation": "'Must have been' expresses a strong logical deduction regarding past history."
          },
          {
            "id": "modal-verbs-hedging_ex8_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Adolescents with access to green recreational spaces ___ lower levels of cortisol stress.",
            "answer": "tend to exhibit",
            "acceptableAnswers": [
              "tend to exhibit",
              "tend to exhibit",
              "TEND TO EXHIBIT"
            ],
            "options": [
              "tend to exhibit",
              "exhibit always",
              "must exhibit",
              "have to exhibit"
            ],
            "explanation": "'Tend to exhibit' is an academic hedge reflecting statistical tendencies rather than absolute law."
          },
          {
            "id": "modal-verbs-hedging_ex8_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Without substantial international subsidies, developing nations ___ clean energy targets.",
            "answer": "might struggle to meet",
            "acceptableAnswers": [
              "might struggle to meet",
              "might struggle to meet",
              "MIGHT STRUGGLE TO MEET"
            ],
            "options": [
              "might struggle to meet",
              "will never meet",
              "cannot never meet",
              "must struggle"
            ],
            "explanation": "'Might struggle to meet' provides a cautious, respectful academic critique."
          }
        ]
      },
      {
        "id": "modal-verbs-hedging_ex_9",
        "number": 9,
        "title": "Exercise 9",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "modal-verbs-hedging_ex9_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Excessive reliance on debt financing can potentially jeopardize a firm's long-term operational solvency.",
            "correctSequence": [
              "Excessive reliance on debt financing",
              "can potentially jeopardize a firm's",
              "long-term operational",
              "solvency."
            ],
            "shuffledTokens": [
              "Excessive reliance on debt financing",
              "solvency.",
              "long-term operational",
              "can potentially jeopardize a firm's"
            ],
            "explanation": "'Can potentially jeopardize' states capability and possibility prudently."
          },
          {
            "id": "modal-verbs-hedging_ex9_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The failure to replicate laboratory results might stem from minor disparities in ambient temperature calibration.",
            "correctSequence": [
              "The failure to replicate laboratory results",
              "might stem from minor disparities",
              "in ambient temperature",
              "calibration."
            ],
            "shuffledTokens": [
              "calibration.",
              "in ambient temperature",
              "might stem from minor disparities",
              "The failure to replicate laboratory results"
            ],
            "explanation": "'Might stem from' provides a tentative explanatory hypothesis."
          },
          {
            "id": "modal-verbs-hedging_ex9_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Environmental scientists warn that inaction will almost certainly exacerbate coastal erosion and sea-level incursions.",
            "correctSequence": [
              "Environmental scientists warn that inaction",
              "will almost certainly exacerbate",
              "coastal erosion and sea-level",
              "incursions."
            ],
            "shuffledTokens": [
              "incursions.",
              "coastal erosion and sea-level",
              "will almost certainly exacerbate",
              "Environmental scientists warn that inaction"
            ],
            "explanation": "Hedging adverbial 'almost certainly' conveys near-unanimous scientific consensus."
          },
          {
            "id": "modal-verbs-hedging_ex9_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Policymakers ought not to neglect the profound socioeconomic hardships experienced by marginalized demographics.",
            "correctSequence": [
              "Policymakers ought not to neglect",
              "the profound socioeconomic hardships",
              "experienced by marginalized",
              "demographics."
            ],
            "shuffledTokens": [
              "experienced by marginalized",
              "the profound socioeconomic hardships",
              "demographics.",
              "Policymakers ought not to neglect"
            ],
            "explanation": "'Ought not to' provides reasoned normative ethical evaluation."
          },
          {
            "id": "modal-verbs-hedging_ex9_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Excessive screen exposure may plausibly exacerbate sleep disorders among developing school-aged adolescents.",
            "correctSequence": [
              "Excessive screen exposure may",
              "plausibly exacerbate sleep disorders",
              "among developing school-aged",
              "adolescents."
            ],
            "shuffledTokens": [
              "among developing school-aged",
              "adolescents.",
              "Excessive screen exposure may",
              "plausibly exacerbate sleep disorders"
            ],
            "explanation": "Academic hedging uses 'may plausibly' to avoid unscientific absolute claims."
          },
          {
            "id": "modal-verbs-hedging_ex9_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The dramatic decline in biodiversity could conceivably trigger irreversible distortions in regional food chains.",
            "correctSequence": [
              "The dramatic decline in biodiversity",
              "could conceivably trigger irreversible",
              "distortions in regional",
              "food chains."
            ],
            "shuffledTokens": [
              "food chains.",
              "distortions in regional",
              "The dramatic decline in biodiversity",
              "could conceivably trigger irreversible"
            ],
            "explanation": "'Could conceivably' introduces a tentative possibility grounded in ecological caution."
          },
          {
            "id": "modal-verbs-hedging_ex9_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Governments ought to allocate greater economic subventions to preventative healthcare and sanitation programs.",
            "correctSequence": [
              "Governments ought to allocate",
              "greater economic subventions to",
              "preventative healthcare and",
              "sanitation programs."
            ],
            "shuffledTokens": [
              "greater economic subventions to",
              "sanitation programs.",
              "Governments ought to allocate",
              "preventative healthcare and"
            ],
            "explanation": "'Ought to' expresses an academic moral recommendation without aggressive tone."
          },
          {
            "id": "modal-verbs-hedging_ex9_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ancient coastal settlement must have been abandoned following an unprecedented tsunami catastrophe.",
            "correctSequence": [
              "The ancient coastal settlement",
              "must have been abandoned",
              "following an unprecedented",
              "tsunami catastrophe."
            ],
            "shuffledTokens": [
              "must have been abandoned",
              "tsunami catastrophe.",
              "The ancient coastal settlement",
              "following an unprecedented"
            ],
            "explanation": "'Must have + past participle' expresses a logical deduction regarding past historical evidence."
          },
          {
            "id": "modal-verbs-hedging_ex9_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "It is widely argued that artificial intelligence might replace repetitive administrative tasks in modern firms.",
            "correctSequence": [
              "It is widely argued that",
              "artificial intelligence might replace",
              "repetitive administrative tasks",
              "in modern firms."
            ],
            "shuffledTokens": [
              "repetitive administrative tasks",
              "It is widely argued that",
              "artificial intelligence might replace",
              "in modern firms."
            ],
            "explanation": "Hedging with 'might replace' prevents dogmatic claims in Task 2 arguments."
          },
          {
            "id": "modal-verbs-hedging_ex9_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Policy analysts suggest that congestion pricing tends to dissuade non-essential vehicular traffic in capitals.",
            "correctSequence": [
              "Policy analysts suggest that",
              "congestion pricing tends to",
              "dissuade non-essential vehicular",
              "traffic in capitals."
            ],
            "shuffledTokens": [
              "dissuade non-essential vehicular",
              "Policy analysts suggest that",
              "congestion pricing tends to",
              "traffic in capitals."
            ],
            "explanation": "'Tends to' is a staple hedging verb indicating a generalized propensity."
          },
          {
            "id": "modal-verbs-hedging_ex9_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Early bilingual immersion ___ cognitive flexibility in complex linguistic tasks.",
            "answer": "tends to enhance",
            "acceptableAnswers": [
              "tends to enhance",
              "tends to enhance",
              "TENDS TO ENHANCE"
            ],
            "options": [
              "tends to enhance",
              "enhances perpetually",
              "must enhance",
              "will enhance always"
            ],
            "explanation": "'Tends to enhance' correctly frames psycholinguistic evidence."
          },
          {
            "id": "modal-verbs-hedging_ex9_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Public health agencies ___ cautionary warnings regarding unverified nutritional supplements.",
            "answer": "ought to issue",
            "acceptableAnswers": [
              "ought to issue",
              "ought to issue",
              "OUGHT TO ISSUE"
            ],
            "options": [
              "must to issue",
              "should to issue",
              "ought to issue",
              "ought issuing"
            ],
            "explanation": "'Ought to issue' denotes appropriate regulatory action."
          },
          {
            "id": "modal-verbs-hedging_ex9_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The collapse of the bridge ___ structural fatigue in the load-bearing pylons.",
            "answer": "may have resulted from",
            "acceptableAnswers": [
              "may have resulted from",
              "may have resulted from",
              "MAY HAVE RESULTED FROM"
            ],
            "options": [
              "must result",
              "can result",
              "resulted inevitably from",
              "may have resulted from"
            ],
            "explanation": "Hedging past causation requires 'may have resulted from'."
          },
          {
            "id": "modal-verbs-hedging_ex9_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Alternative green technologies ___ mature market parity within the next decade.",
            "answer": "are expected to achieve",
            "acceptableAnswers": [
              "are expected to achieve",
              "are expected to achieve",
              "ARE EXPECTED TO ACHIEVE"
            ],
            "options": [
              "shall achieve",
              "must achieve",
              "are expected to achieve",
              "achieve definitely"
            ],
            "explanation": "'Are expected to achieve' frames future market projections academically."
          },
          {
            "id": "modal-verbs-hedging_ex9_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The observed correlation between diet and longevity ___ further clinical investigation.",
            "answer": "may warrant",
            "acceptableAnswers": [
              "may warrant",
              "may warrant",
              "MAY WARRANT"
            ],
            "options": [
              "must warrant",
              "shall warrant",
              "warrants definitely",
              "may warrant"
            ],
            "explanation": "Academic style favors cautious hedging ('may warrant') over categorical assertions."
          },
          {
            "id": "modal-verbs-hedging_ex9_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The missing archaeological documentation ___ destroyed during the library fire of 1845.",
            "answer": "must have been",
            "acceptableAnswers": [
              "must have been",
              "must have been",
              "MUST HAVE BEEN"
            ],
            "options": [
              "must have been",
              "should have been",
              "would be",
              "can be"
            ],
            "explanation": "'Must have been' expresses a strong logical deduction regarding past history."
          },
          {
            "id": "modal-verbs-hedging_ex9_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Adolescents with access to green recreational spaces ___ lower levels of cortisol stress.",
            "answer": "tend to exhibit",
            "acceptableAnswers": [
              "tend to exhibit",
              "tend to exhibit",
              "TEND TO EXHIBIT"
            ],
            "options": [
              "tend to exhibit",
              "exhibit always",
              "must exhibit",
              "have to exhibit"
            ],
            "explanation": "'Tend to exhibit' is an academic hedge reflecting statistical tendencies rather than absolute law."
          },
          {
            "id": "modal-verbs-hedging_ex9_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Without substantial international subsidies, developing nations ___ clean energy targets.",
            "answer": "might struggle to meet",
            "acceptableAnswers": [
              "might struggle to meet",
              "might struggle to meet",
              "MIGHT STRUGGLE TO MEET"
            ],
            "options": [
              "might struggle to meet",
              "will never meet",
              "cannot never meet",
              "must struggle"
            ],
            "explanation": "'Might struggle to meet' provides a cautious, respectful academic critique."
          },
          {
            "id": "modal-verbs-hedging_ex9_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The catastrophic industrial disaster ___ if automated safety protocols had been functional.",
            "answer": "could have been averted",
            "acceptableAnswers": [
              "could have been averted",
              "could have been averted",
              "COULD HAVE BEEN AVERTED"
            ],
            "options": [
              "would avert",
              "must be averted",
              "could have been averted",
              "can have been averted"
            ],
            "explanation": "Expressing an unfulfilled past capability requires 'could have been averted'."
          },
          {
            "id": "modal-verbs-hedging_ex9_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Comprehensive urban planning ___ prioritize pedestrian zones over vehicular thoroughfares.",
            "answer": "ought to",
            "acceptableAnswers": [
              "ought to",
              "ought to",
              "OUGHT TO"
            ],
            "options": [
              "has got to",
              "might to",
              "ought to",
              "must to"
            ],
            "explanation": "'Ought to' expresses a normative academic recommendation."
          }
        ]
      },
      {
        "id": "modal-verbs-hedging_ex_10",
        "number": 10,
        "title": "Exercise 10",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "modal-verbs-hedging_ex10_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Environmental scientists warn that inaction will almost certainly exacerbate coastal erosion and sea-level incursions.",
            "correctSequence": [
              "Environmental scientists warn that inaction",
              "will almost certainly exacerbate",
              "coastal erosion and sea-level",
              "incursions."
            ],
            "shuffledTokens": [
              "will almost certainly exacerbate",
              "Environmental scientists warn that inaction",
              "coastal erosion and sea-level",
              "incursions."
            ],
            "explanation": "Hedging adverbial 'almost certainly' conveys near-unanimous scientific consensus."
          },
          {
            "id": "modal-verbs-hedging_ex10_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Policymakers ought not to neglect the profound socioeconomic hardships experienced by marginalized demographics.",
            "correctSequence": [
              "Policymakers ought not to neglect",
              "the profound socioeconomic hardships",
              "experienced by marginalized",
              "demographics."
            ],
            "shuffledTokens": [
              "Policymakers ought not to neglect",
              "the profound socioeconomic hardships",
              "demographics.",
              "experienced by marginalized"
            ],
            "explanation": "'Ought not to' provides reasoned normative ethical evaluation."
          },
          {
            "id": "modal-verbs-hedging_ex10_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Excessive screen exposure may plausibly exacerbate sleep disorders among developing school-aged adolescents.",
            "correctSequence": [
              "Excessive screen exposure may",
              "plausibly exacerbate sleep disorders",
              "among developing school-aged",
              "adolescents."
            ],
            "shuffledTokens": [
              "Excessive screen exposure may",
              "plausibly exacerbate sleep disorders",
              "adolescents.",
              "among developing school-aged"
            ],
            "explanation": "Academic hedging uses 'may plausibly' to avoid unscientific absolute claims."
          },
          {
            "id": "modal-verbs-hedging_ex10_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The dramatic decline in biodiversity could conceivably trigger irreversible distortions in regional food chains.",
            "correctSequence": [
              "The dramatic decline in biodiversity",
              "could conceivably trigger irreversible",
              "distortions in regional",
              "food chains."
            ],
            "shuffledTokens": [
              "The dramatic decline in biodiversity",
              "food chains.",
              "distortions in regional",
              "could conceivably trigger irreversible"
            ],
            "explanation": "'Could conceivably' introduces a tentative possibility grounded in ecological caution."
          },
          {
            "id": "modal-verbs-hedging_ex10_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Governments ought to allocate greater economic subventions to preventative healthcare and sanitation programs.",
            "correctSequence": [
              "Governments ought to allocate",
              "greater economic subventions to",
              "preventative healthcare and",
              "sanitation programs."
            ],
            "shuffledTokens": [
              "Governments ought to allocate",
              "preventative healthcare and",
              "sanitation programs.",
              "greater economic subventions to"
            ],
            "explanation": "'Ought to' expresses an academic moral recommendation without aggressive tone."
          },
          {
            "id": "modal-verbs-hedging_ex10_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ancient coastal settlement must have been abandoned following an unprecedented tsunami catastrophe.",
            "correctSequence": [
              "The ancient coastal settlement",
              "must have been abandoned",
              "following an unprecedented",
              "tsunami catastrophe."
            ],
            "shuffledTokens": [
              "tsunami catastrophe.",
              "following an unprecedented",
              "must have been abandoned",
              "The ancient coastal settlement"
            ],
            "explanation": "'Must have + past participle' expresses a logical deduction regarding past historical evidence."
          },
          {
            "id": "modal-verbs-hedging_ex10_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "It is widely argued that artificial intelligence might replace repetitive administrative tasks in modern firms.",
            "correctSequence": [
              "It is widely argued that",
              "artificial intelligence might replace",
              "repetitive administrative tasks",
              "in modern firms."
            ],
            "shuffledTokens": [
              "in modern firms.",
              "repetitive administrative tasks",
              "artificial intelligence might replace",
              "It is widely argued that"
            ],
            "explanation": "Hedging with 'might replace' prevents dogmatic claims in Task 2 arguments."
          },
          {
            "id": "modal-verbs-hedging_ex10_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Policy analysts suggest that congestion pricing tends to dissuade non-essential vehicular traffic in capitals.",
            "correctSequence": [
              "Policy analysts suggest that",
              "congestion pricing tends to",
              "dissuade non-essential vehicular",
              "traffic in capitals."
            ],
            "shuffledTokens": [
              "dissuade non-essential vehicular",
              "congestion pricing tends to",
              "traffic in capitals.",
              "Policy analysts suggest that"
            ],
            "explanation": "'Tends to' is a staple hedging verb indicating a generalized propensity."
          },
          {
            "id": "modal-verbs-hedging_ex10_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Educational reforms cannot be expected to yield immediate measurable dividends within a single fiscal year.",
            "correctSequence": [
              "Educational reforms cannot be",
              "expected to yield immediate",
              "measurable dividends within",
              "a single fiscal year."
            ],
            "shuffledTokens": [
              "measurable dividends within",
              "a single fiscal year.",
              "Educational reforms cannot be",
              "expected to yield immediate"
            ],
            "explanation": "'Cannot be expected to' expresses an analytical limitation objectively."
          },
          {
            "id": "modal-verbs-hedging_ex10_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "High urban density appears to correlate with heightened innovation and entrepreneurial startup activities.",
            "correctSequence": [
              "High urban density appears to",
              "correlate with heightened innovation",
              "and entrepreneurial startup",
              "activities."
            ],
            "shuffledTokens": [
              "activities.",
              "and entrepreneurial startup",
              "High urban density appears to",
              "correlate with heightened innovation"
            ],
            "explanation": "Hedging with 'appears to correlate' prevents premature causal assertions."
          },
          {
            "id": "modal-verbs-hedging_ex10_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The collapse of the bridge ___ structural fatigue in the load-bearing pylons.",
            "answer": "may have resulted from",
            "acceptableAnswers": [
              "may have resulted from",
              "may have resulted from",
              "MAY HAVE RESULTED FROM"
            ],
            "options": [
              "must result",
              "may have resulted from",
              "can result",
              "resulted inevitably from"
            ],
            "explanation": "Hedging past causation requires 'may have resulted from'."
          },
          {
            "id": "modal-verbs-hedging_ex10_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Alternative green technologies ___ mature market parity within the next decade.",
            "answer": "are expected to achieve",
            "acceptableAnswers": [
              "are expected to achieve",
              "are expected to achieve",
              "ARE EXPECTED TO ACHIEVE"
            ],
            "options": [
              "achieve definitely",
              "shall achieve",
              "must achieve",
              "are expected to achieve"
            ],
            "explanation": "'Are expected to achieve' frames future market projections academically."
          },
          {
            "id": "modal-verbs-hedging_ex10_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The observed correlation between diet and longevity ___ further clinical investigation.",
            "answer": "may warrant",
            "acceptableAnswers": [
              "may warrant",
              "may warrant",
              "MAY WARRANT"
            ],
            "options": [
              "must warrant",
              "may warrant",
              "shall warrant",
              "warrants definitely"
            ],
            "explanation": "Academic style favors cautious hedging ('may warrant') over categorical assertions."
          },
          {
            "id": "modal-verbs-hedging_ex10_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The missing archaeological documentation ___ destroyed during the library fire of 1845.",
            "answer": "must have been",
            "acceptableAnswers": [
              "must have been",
              "must have been",
              "MUST HAVE BEEN"
            ],
            "options": [
              "must have been",
              "should have been",
              "would be",
              "can be"
            ],
            "explanation": "'Must have been' expresses a strong logical deduction regarding past history."
          },
          {
            "id": "modal-verbs-hedging_ex10_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Adolescents with access to green recreational spaces ___ lower levels of cortisol stress.",
            "answer": "tend to exhibit",
            "acceptableAnswers": [
              "tend to exhibit",
              "tend to exhibit",
              "TEND TO EXHIBIT"
            ],
            "options": [
              "tend to exhibit",
              "exhibit always",
              "must exhibit",
              "have to exhibit"
            ],
            "explanation": "'Tend to exhibit' is an academic hedge reflecting statistical tendencies rather than absolute law."
          },
          {
            "id": "modal-verbs-hedging_ex10_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Without substantial international subsidies, developing nations ___ clean energy targets.",
            "answer": "might struggle to meet",
            "acceptableAnswers": [
              "might struggle to meet",
              "might struggle to meet",
              "MIGHT STRUGGLE TO MEET"
            ],
            "options": [
              "might struggle to meet",
              "will never meet",
              "cannot never meet",
              "must struggle"
            ],
            "explanation": "'Might struggle to meet' provides a cautious, respectful academic critique."
          },
          {
            "id": "modal-verbs-hedging_ex10_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The catastrophic industrial disaster ___ if automated safety protocols had been functional.",
            "answer": "could have been averted",
            "acceptableAnswers": [
              "could have been averted",
              "could have been averted",
              "COULD HAVE BEEN AVERTED"
            ],
            "options": [
              "could have been averted",
              "can have been averted",
              "must be averted",
              "would avert"
            ],
            "explanation": "Expressing an unfulfilled past capability requires 'could have been averted'."
          },
          {
            "id": "modal-verbs-hedging_ex10_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Comprehensive urban planning ___ prioritize pedestrian zones over vehicular thoroughfares.",
            "answer": "ought to",
            "acceptableAnswers": [
              "ought to",
              "ought to",
              "OUGHT TO"
            ],
            "options": [
              "must to",
              "might to",
              "ought to",
              "has got to"
            ],
            "explanation": "'Ought to' expresses a normative academic recommendation."
          },
          {
            "id": "modal-verbs-hedging_ex10_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Preliminary meteorological findings ___ that storm intensity is amplifying globally.",
            "answer": "appear to indicate",
            "acceptableAnswers": [
              "appear to indicate",
              "appear to indicate",
              "APPEAR TO INDICATE"
            ],
            "options": [
              "shall indicate",
              "must indicate",
              "appear to indicate",
              "prove absolutely"
            ],
            "explanation": "'Appear to indicate' prevents unscientific overgeneralization."
          },
          {
            "id": "modal-verbs-hedging_ex10_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The ancient civilization ___ extensive trade links across the Mediterranean sea.",
            "answer": "must have maintained",
            "acceptableAnswers": [
              "must have maintained",
              "must have maintained",
              "MUST HAVE MAINTAINED"
            ],
            "options": [
              "should maintain",
              "would maintain",
              "can maintain",
              "must have maintained"
            ],
            "explanation": "Deduction based on historical evidence takes 'must have maintained'."
          }
        ]
      }
    ]
  },
  {
    "id": "prepositions-collocations",
    "title": "Prepositions & Collocations",
    "icon": "Prep",
    "color": "#d97706",
    "subtitle": "Dependent prepositions with verbs, adjectives, nouns, and fixed academic connectors.",
    "rules": [
      "Dependent prepositions must agree with specific predicates (e.g. 'contribute to', 'attribute to', 'rely on').",
      "Prepositions of time: 'at' (specific times), 'on' (days/dates), 'in' (months/years/centuries).",
      "Academic linking phrases require precise prepositions: 'with respect to', 'in terms of', 'by virtue of'.",
      "Adjectives take fixed prepositions: 'prone to', 'detrimental to', 'compatible with', 'indifferent to'.",
      "Prepositions of movement vs location: 'throughout the nation', 'within the parameters'."
    ],
    "exercises": [
      {
        "id": "prepositions-collocations_ex_1",
        "number": 1,
        "title": "Exercise 1",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "prepositions-collocations_ex1_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Heavy dependence on fossil fuels contributes directly to atmospheric degradation and global climatic instability.",
            "correctSequence": [
              "Heavy dependence on fossil fuels",
              "contributes directly to atmospheric",
              "degradation and global",
              "climatic instability."
            ],
            "shuffledTokens": [
              "contributes directly to atmospheric",
              "climatic instability.",
              "Heavy dependence on fossil fuels",
              "degradation and global"
            ],
            "explanation": "The verb 'contributes' takes the dependent preposition 'to' ('contributes to')."
          },
          {
            "id": "prepositions-collocations_ex1_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Societies with equitable access to primary healthcare demonstrate greater resilience in times of pandemic distress.",
            "correctSequence": [
              "Societies with equitable access",
              "to primary healthcare demonstrate",
              "greater resilience in times",
              "of pandemic distress."
            ],
            "shuffledTokens": [
              "greater resilience in times",
              "Societies with equitable access",
              "to primary healthcare demonstrate",
              "of pandemic distress."
            ],
            "explanation": "The noun 'access' takes the preposition 'to' ('access to healthcare')."
          },
          {
            "id": "prepositions-collocations_ex1_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The government's refusal to comply with international treaties provoked severe economic sanctions abroad.",
            "correctSequence": [
              "The government's refusal to",
              "comply with international treaties",
              "provoked severe economic",
              "sanctions abroad."
            ],
            "shuffledTokens": [
              "provoked severe economic",
              "The government's refusal to",
              "comply with international treaties",
              "sanctions abroad."
            ],
            "explanation": "The verb 'comply' strictly collocates with the preposition 'with' ('comply with')."
          },
          {
            "id": "prepositions-collocations_ex1_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In contrast to suburban sprawl, high-density living provides residents with immediate access to public amenities.",
            "correctSequence": [
              "In contrast to suburban sprawl,",
              "high-density living provides residents",
              "with immediate access to",
              "public amenities."
            ],
            "shuffledTokens": [
              "high-density living provides residents",
              "In contrast to suburban sprawl,",
              "with immediate access to",
              "public amenities."
            ],
            "explanation": "The fixed comparative discourse connector is 'In contrast to...'"
          },
          {
            "id": "prepositions-collocations_ex1_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Children who are consistently deprived of parental affection are prone to developing emotional vulnerabilities.",
            "correctSequence": [
              "Children who are consistently",
              "deprived of parental affection",
              "are prone to developing",
              "emotional vulnerabilities."
            ],
            "shuffledTokens": [
              "deprived of parental affection",
              "Children who are consistently",
              "are prone to developing",
              "emotional vulnerabilities."
            ],
            "explanation": "The adjective 'prone' takes the dependent preposition 'to' ('prone to developing')."
          },
          {
            "id": "prepositions-collocations_ex1_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Economic historians attribute the rapid expansion of British trade to maritime supremacy and mechanized spinning.",
            "correctSequence": [
              "Economic historians attribute the",
              "rapid expansion of British trade",
              "to maritime supremacy and",
              "mechanized spinning."
            ],
            "shuffledTokens": [
              "rapid expansion of British trade",
              "Economic historians attribute the",
              "to maritime supremacy and",
              "mechanized spinning."
            ],
            "explanation": "The transitive structure is 'attribute [something] to [something]'."
          },
          {
            "id": "prepositions-collocations_ex1_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "With respect to environmental sustainability, organic agriculture imposes negligible pressure on fragile topsoil.",
            "correctSequence": [
              "With respect to environmental",
              "sustainability, organic agriculture",
              "imposes negligible pressure on",
              "fragile topsoil."
            ],
            "shuffledTokens": [
              "sustainability, organic agriculture",
              "With respect to environmental",
              "imposes negligible pressure on",
              "fragile topsoil."
            ],
            "explanation": "The formal academic linking phrase is 'With respect to...'"
          },
          {
            "id": "prepositions-collocations_ex1_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological innovation is deeply intertwined with societal readiness to adopt transformative digital tools.",
            "correctSequence": [
              "Technological innovation is deeply",
              "intertwined with societal readiness",
              "to adopt transformative",
              "digital tools."
            ],
            "shuffledTokens": [
              "intertwined with societal readiness",
              "Technological innovation is deeply",
              "to adopt transformative",
              "digital tools."
            ],
            "explanation": "The participle 'intertwined' takes the dependent preposition 'with'."
          },
          {
            "id": "prepositions-collocations_ex1_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The municipality is committed to investing substantial resources in green energy infrastructure over the next decade.",
            "correctSequence": [
              "The municipality is committed to",
              "investing substantial resources in",
              "green energy infrastructure",
              "over the next decade."
            ],
            "shuffledTokens": [
              "investing substantial resources in",
              "The municipality is committed to",
              "green energy infrastructure",
              "over the next decade."
            ],
            "explanation": "The adjective 'committed' takes 'to', followed by a gerund ('investing')."
          },
          {
            "id": "prepositions-collocations_ex1_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Students who take active part in collaborative research acquire valuable insights into scientific problem-solving.",
            "correctSequence": [
              "Students who take active part",
              "in collaborative research acquire",
              "valuable insights into scientific",
              "problem-solving."
            ],
            "shuffledTokens": [
              "in collaborative research acquire",
              "Students who take active part",
              "valuable insights into scientific",
              "problem-solving."
            ],
            "explanation": "The noun 'insights' takes the dependent preposition 'into' ('insights into')."
          },
          {
            "id": "prepositions-collocations_ex1_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research institute is deeply committed ___ promoting sustainable agricultural practices.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "in",
              "to",
              "with",
              "for"
            ],
            "explanation": "'Committed' takes the dependent preposition 'to', followed by a gerund."
          },
          {
            "id": "prepositions-collocations_ex1_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Industrial emissions contribute significantly ___ the degradation of ambient air quality.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "in",
              "to",
              "at",
              "for"
            ],
            "explanation": "The verb 'contribute' collocates with 'to'."
          },
          {
            "id": "prepositions-collocations_ex1_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Many coastal communities are heavily reliant ___ artisanal marine fishing for subsistence.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "in",
              "at",
              "with",
              "on"
            ],
            "explanation": "'Reliant' strictly takes the preposition 'on'."
          },
          {
            "id": "prepositions-collocations_ex1_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The novel curriculum resulted ___ a measurable enhancement in analytical reasoning scores.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "in",
              "to",
              "for",
              "with"
            ],
            "explanation": "The verb 'result' takes 'in' to indicate the outcome ('resulted in')."
          },
          {
            "id": "prepositions-collocations_ex1_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The conference convenes ___ Monday, the fourteenth of October, in Geneva.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "at",
              "in",
              "on",
              "by"
            ],
            "explanation": "Specific days and calendar dates take the preposition 'on'."
          },
          {
            "id": "prepositions-collocations_ex1_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The global summit concluded ___ midnight following protracted ministerial deliberations.",
            "answer": "at",
            "acceptableAnswers": [
              "at",
              "at",
              "AT"
            ],
            "options": [
              "on",
              "in",
              "at",
              "during"
            ],
            "explanation": "Specific clock times or points like 'midnight' take 'at'."
          },
          {
            "id": "prepositions-collocations_ex1_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The agricultural sector suffered immensely ___ the severe drought of 2022.",
            "answer": "during",
            "acceptableAnswers": [
              "during",
              "during",
              "DURING"
            ],
            "options": [
              "during",
              "at",
              "on",
              "while"
            ],
            "explanation": "A noun phrase indicating a period of time takes 'during'."
          },
          {
            "id": "prepositions-collocations_ex1_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The academic journal was established ___ the late nineteenth century.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "by",
              "at",
              "on",
              "in"
            ],
            "explanation": "Centuries, decades, and years require the preposition 'in'."
          },
          {
            "id": "prepositions-collocations_ex1_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ accordance with university regulations, all dissertations must undergo plagiarism checks.",
            "answer": "In",
            "acceptableAnswers": [
              "In",
              "in",
              "IN"
            ],
            "options": [
              "With",
              "On",
              "In",
              "At"
            ],
            "explanation": "The fixed institutional prepositional formula is 'In accordance with'."
          },
          {
            "id": "prepositions-collocations_ex1_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban planners must distinguish ___ short-term population influxes and permanent demographic shifts.",
            "answer": "between",
            "acceptableAnswers": [
              "between",
              "between",
              "BETWEEN"
            ],
            "options": [
              "among",
              "with",
              "from",
              "between"
            ],
            "explanation": "'Distinguish between' is used when contrasting two categories."
          }
        ]
      },
      {
        "id": "prepositions-collocations_ex_2",
        "number": 2,
        "title": "Exercise 2",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "prepositions-collocations_ex2_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The government's refusal to comply with international treaties provoked severe economic sanctions abroad.",
            "correctSequence": [
              "The government's refusal to",
              "comply with international treaties",
              "provoked severe economic",
              "sanctions abroad."
            ],
            "shuffledTokens": [
              "provoked severe economic",
              "comply with international treaties",
              "sanctions abroad.",
              "The government's refusal to"
            ],
            "explanation": "The verb 'comply' strictly collocates with the preposition 'with' ('comply with')."
          },
          {
            "id": "prepositions-collocations_ex2_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In contrast to suburban sprawl, high-density living provides residents with immediate access to public amenities.",
            "correctSequence": [
              "In contrast to suburban sprawl,",
              "high-density living provides residents",
              "with immediate access to",
              "public amenities."
            ],
            "shuffledTokens": [
              "public amenities.",
              "with immediate access to",
              "In contrast to suburban sprawl,",
              "high-density living provides residents"
            ],
            "explanation": "The fixed comparative discourse connector is 'In contrast to...'"
          },
          {
            "id": "prepositions-collocations_ex2_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Children who are consistently deprived of parental affection are prone to developing emotional vulnerabilities.",
            "correctSequence": [
              "Children who are consistently",
              "deprived of parental affection",
              "are prone to developing",
              "emotional vulnerabilities."
            ],
            "shuffledTokens": [
              "deprived of parental affection",
              "emotional vulnerabilities.",
              "Children who are consistently",
              "are prone to developing"
            ],
            "explanation": "The adjective 'prone' takes the dependent preposition 'to' ('prone to developing')."
          },
          {
            "id": "prepositions-collocations_ex2_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Economic historians attribute the rapid expansion of British trade to maritime supremacy and mechanized spinning.",
            "correctSequence": [
              "Economic historians attribute the",
              "rapid expansion of British trade",
              "to maritime supremacy and",
              "mechanized spinning."
            ],
            "shuffledTokens": [
              "rapid expansion of British trade",
              "mechanized spinning.",
              "Economic historians attribute the",
              "to maritime supremacy and"
            ],
            "explanation": "The transitive structure is 'attribute [something] to [something]'."
          },
          {
            "id": "prepositions-collocations_ex2_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "With respect to environmental sustainability, organic agriculture imposes negligible pressure on fragile topsoil.",
            "correctSequence": [
              "With respect to environmental",
              "sustainability, organic agriculture",
              "imposes negligible pressure on",
              "fragile topsoil."
            ],
            "shuffledTokens": [
              "fragile topsoil.",
              "With respect to environmental",
              "sustainability, organic agriculture",
              "imposes negligible pressure on"
            ],
            "explanation": "The formal academic linking phrase is 'With respect to...'"
          },
          {
            "id": "prepositions-collocations_ex2_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological innovation is deeply intertwined with societal readiness to adopt transformative digital tools.",
            "correctSequence": [
              "Technological innovation is deeply",
              "intertwined with societal readiness",
              "to adopt transformative",
              "digital tools."
            ],
            "shuffledTokens": [
              "to adopt transformative",
              "Technological innovation is deeply",
              "intertwined with societal readiness",
              "digital tools."
            ],
            "explanation": "The participle 'intertwined' takes the dependent preposition 'with'."
          },
          {
            "id": "prepositions-collocations_ex2_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The municipality is committed to investing substantial resources in green energy infrastructure over the next decade.",
            "correctSequence": [
              "The municipality is committed to",
              "investing substantial resources in",
              "green energy infrastructure",
              "over the next decade."
            ],
            "shuffledTokens": [
              "green energy infrastructure",
              "The municipality is committed to",
              "investing substantial resources in",
              "over the next decade."
            ],
            "explanation": "The adjective 'committed' takes 'to', followed by a gerund ('investing')."
          },
          {
            "id": "prepositions-collocations_ex2_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Students who take active part in collaborative research acquire valuable insights into scientific problem-solving.",
            "correctSequence": [
              "Students who take active part",
              "in collaborative research acquire",
              "valuable insights into scientific",
              "problem-solving."
            ],
            "shuffledTokens": [
              "in collaborative research acquire",
              "Students who take active part",
              "valuable insights into scientific",
              "problem-solving."
            ],
            "explanation": "The noun 'insights' takes the dependent preposition 'into' ('insights into')."
          },
          {
            "id": "prepositions-collocations_ex2_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Heavy reliance on automated algorithms can lead to catastrophic oversights in complex medical diagnoses.",
            "correctSequence": [
              "Heavy reliance on automated algorithms",
              "can lead to catastrophic oversights",
              "in complex medical",
              "diagnoses."
            ],
            "shuffledTokens": [
              "can lead to catastrophic oversights",
              "Heavy reliance on automated algorithms",
              "in complex medical",
              "diagnoses."
            ],
            "explanation": "'Reliance' takes 'on', and 'lead' takes 'to' ('reliance on... lead to...')."
          },
          {
            "id": "prepositions-collocations_ex2_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Exposure to industrial particulate matter poses a grave hazard to pediatric respiratory development.",
            "correctSequence": [
              "Exposure to industrial particulate matter",
              "poses a grave hazard to",
              "pediatric respiratory",
              "development."
            ],
            "shuffledTokens": [
              "poses a grave hazard to",
              "Exposure to industrial particulate matter",
              "pediatric respiratory",
              "development."
            ],
            "explanation": "The noun 'exposure' takes 'to', and 'hazard' takes 'to'."
          },
          {
            "id": "prepositions-collocations_ex2_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Many coastal communities are heavily reliant ___ artisanal marine fishing for subsistence.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "in",
              "at",
              "with",
              "on"
            ],
            "explanation": "'Reliant' strictly takes the preposition 'on'."
          },
          {
            "id": "prepositions-collocations_ex2_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The novel curriculum resulted ___ a measurable enhancement in analytical reasoning scores.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "in",
              "to",
              "for",
              "with"
            ],
            "explanation": "The verb 'result' takes 'in' to indicate the outcome ('resulted in')."
          },
          {
            "id": "prepositions-collocations_ex2_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The conference convenes ___ Monday, the fourteenth of October, in Geneva.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "at",
              "in",
              "on",
              "by"
            ],
            "explanation": "Specific days and calendar dates take the preposition 'on'."
          },
          {
            "id": "prepositions-collocations_ex2_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The global summit concluded ___ midnight following protracted ministerial deliberations.",
            "answer": "at",
            "acceptableAnswers": [
              "at",
              "at",
              "AT"
            ],
            "options": [
              "at",
              "in",
              "on",
              "during"
            ],
            "explanation": "Specific clock times or points like 'midnight' take 'at'."
          },
          {
            "id": "prepositions-collocations_ex2_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The agricultural sector suffered immensely ___ the severe drought of 2022.",
            "answer": "during",
            "acceptableAnswers": [
              "during",
              "during",
              "DURING"
            ],
            "options": [
              "on",
              "while",
              "at",
              "during"
            ],
            "explanation": "A noun phrase indicating a period of time takes 'during'."
          },
          {
            "id": "prepositions-collocations_ex2_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The academic journal was established ___ the late nineteenth century.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "at",
              "in",
              "by",
              "on"
            ],
            "explanation": "Centuries, decades, and years require the preposition 'in'."
          },
          {
            "id": "prepositions-collocations_ex2_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ accordance with university regulations, all dissertations must undergo plagiarism checks.",
            "answer": "In",
            "acceptableAnswers": [
              "In",
              "in",
              "IN"
            ],
            "options": [
              "With",
              "On",
              "In",
              "At"
            ],
            "explanation": "The fixed institutional prepositional formula is 'In accordance with'."
          },
          {
            "id": "prepositions-collocations_ex2_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban planners must distinguish ___ short-term population influxes and permanent demographic shifts.",
            "answer": "between",
            "acceptableAnswers": [
              "between",
              "between",
              "BETWEEN"
            ],
            "options": [
              "among",
              "between",
              "with",
              "from"
            ],
            "explanation": "'Distinguish between' is used when contrasting two categories."
          },
          {
            "id": "prepositions-collocations_ex2_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The decline in honeybee populations is attributed ___ excessive pesticide applications.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "to",
              "for",
              "with",
              "by"
            ],
            "explanation": "The passive structure takes 'attributed to'."
          },
          {
            "id": "prepositions-collocations_ex2_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Adolescents are particularly vulnerable ___ social media peer pressure.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "for",
              "at",
              "to",
              "with"
            ],
            "explanation": "The adjective 'vulnerable' takes 'to'."
          }
        ]
      },
      {
        "id": "prepositions-collocations_ex_3",
        "number": 3,
        "title": "Exercise 3",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "prepositions-collocations_ex3_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Children who are consistently deprived of parental affection are prone to developing emotional vulnerabilities.",
            "correctSequence": [
              "Children who are consistently",
              "deprived of parental affection",
              "are prone to developing",
              "emotional vulnerabilities."
            ],
            "shuffledTokens": [
              "Children who are consistently",
              "are prone to developing",
              "emotional vulnerabilities.",
              "deprived of parental affection"
            ],
            "explanation": "The adjective 'prone' takes the dependent preposition 'to' ('prone to developing')."
          },
          {
            "id": "prepositions-collocations_ex3_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Economic historians attribute the rapid expansion of British trade to maritime supremacy and mechanized spinning.",
            "correctSequence": [
              "Economic historians attribute the",
              "rapid expansion of British trade",
              "to maritime supremacy and",
              "mechanized spinning."
            ],
            "shuffledTokens": [
              "mechanized spinning.",
              "to maritime supremacy and",
              "rapid expansion of British trade",
              "Economic historians attribute the"
            ],
            "explanation": "The transitive structure is 'attribute [something] to [something]'."
          },
          {
            "id": "prepositions-collocations_ex3_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "With respect to environmental sustainability, organic agriculture imposes negligible pressure on fragile topsoil.",
            "correctSequence": [
              "With respect to environmental",
              "sustainability, organic agriculture",
              "imposes negligible pressure on",
              "fragile topsoil."
            ],
            "shuffledTokens": [
              "fragile topsoil.",
              "imposes negligible pressure on",
              "sustainability, organic agriculture",
              "With respect to environmental"
            ],
            "explanation": "The formal academic linking phrase is 'With respect to...'"
          },
          {
            "id": "prepositions-collocations_ex3_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological innovation is deeply intertwined with societal readiness to adopt transformative digital tools.",
            "correctSequence": [
              "Technological innovation is deeply",
              "intertwined with societal readiness",
              "to adopt transformative",
              "digital tools."
            ],
            "shuffledTokens": [
              "to adopt transformative",
              "intertwined with societal readiness",
              "digital tools.",
              "Technological innovation is deeply"
            ],
            "explanation": "The participle 'intertwined' takes the dependent preposition 'with'."
          },
          {
            "id": "prepositions-collocations_ex3_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The municipality is committed to investing substantial resources in green energy infrastructure over the next decade.",
            "correctSequence": [
              "The municipality is committed to",
              "investing substantial resources in",
              "green energy infrastructure",
              "over the next decade."
            ],
            "shuffledTokens": [
              "green energy infrastructure",
              "over the next decade.",
              "The municipality is committed to",
              "investing substantial resources in"
            ],
            "explanation": "The adjective 'committed' takes 'to', followed by a gerund ('investing')."
          },
          {
            "id": "prepositions-collocations_ex3_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Students who take active part in collaborative research acquire valuable insights into scientific problem-solving.",
            "correctSequence": [
              "Students who take active part",
              "in collaborative research acquire",
              "valuable insights into scientific",
              "problem-solving."
            ],
            "shuffledTokens": [
              "problem-solving.",
              "valuable insights into scientific",
              "Students who take active part",
              "in collaborative research acquire"
            ],
            "explanation": "The noun 'insights' takes the dependent preposition 'into' ('insights into')."
          },
          {
            "id": "prepositions-collocations_ex3_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Heavy reliance on automated algorithms can lead to catastrophic oversights in complex medical diagnoses.",
            "correctSequence": [
              "Heavy reliance on automated algorithms",
              "can lead to catastrophic oversights",
              "in complex medical",
              "diagnoses."
            ],
            "shuffledTokens": [
              "can lead to catastrophic oversights",
              "diagnoses.",
              "Heavy reliance on automated algorithms",
              "in complex medical"
            ],
            "explanation": "'Reliance' takes 'on', and 'lead' takes 'to' ('reliance on... lead to...')."
          },
          {
            "id": "prepositions-collocations_ex3_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Exposure to industrial particulate matter poses a grave hazard to pediatric respiratory development.",
            "correctSequence": [
              "Exposure to industrial particulate matter",
              "poses a grave hazard to",
              "pediatric respiratory",
              "development."
            ],
            "shuffledTokens": [
              "poses a grave hazard to",
              "development.",
              "Exposure to industrial particulate matter",
              "pediatric respiratory"
            ],
            "explanation": "The noun 'exposure' takes 'to', and 'hazard' takes 'to'."
          },
          {
            "id": "prepositions-collocations_ex3_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Discontent among junior hospital doctors stemmed from grueling hours and inadequate remuneration packages.",
            "correctSequence": [
              "Discontent among junior hospital doctors",
              "stemmed from grueling hours and",
              "inadequate remuneration",
              "packages."
            ],
            "shuffledTokens": [
              "inadequate remuneration",
              "Discontent among junior hospital doctors",
              "stemmed from grueling hours and",
              "packages."
            ],
            "explanation": "The phrasal verb 'stem from' denotes origin or causality."
          },
          {
            "id": "prepositions-collocations_ex3_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In accordance with municipal bylaws, all newly constructed complexes must feature photovoltaic roof panels.",
            "correctSequence": [
              "In accordance with municipal bylaws,",
              "all newly constructed complexes",
              "must feature photovoltaic",
              "roof panels."
            ],
            "shuffledTokens": [
              "must feature photovoltaic",
              "In accordance with municipal bylaws,",
              "all newly constructed complexes",
              "roof panels."
            ],
            "explanation": "The formal academic phrase is 'In accordance with...'"
          },
          {
            "id": "prepositions-collocations_ex3_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The conference convenes ___ Monday, the fourteenth of October, in Geneva.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "at",
              "in",
              "on",
              "by"
            ],
            "explanation": "Specific days and calendar dates take the preposition 'on'."
          },
          {
            "id": "prepositions-collocations_ex3_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The global summit concluded ___ midnight following protracted ministerial deliberations.",
            "answer": "at",
            "acceptableAnswers": [
              "at",
              "at",
              "AT"
            ],
            "options": [
              "during",
              "in",
              "on",
              "at"
            ],
            "explanation": "Specific clock times or points like 'midnight' take 'at'."
          },
          {
            "id": "prepositions-collocations_ex3_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The agricultural sector suffered immensely ___ the severe drought of 2022.",
            "answer": "during",
            "acceptableAnswers": [
              "during",
              "during",
              "DURING"
            ],
            "options": [
              "while",
              "during",
              "at",
              "on"
            ],
            "explanation": "A noun phrase indicating a period of time takes 'during'."
          },
          {
            "id": "prepositions-collocations_ex3_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The academic journal was established ___ the late nineteenth century.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "by",
              "at",
              "in",
              "on"
            ],
            "explanation": "Centuries, decades, and years require the preposition 'in'."
          },
          {
            "id": "prepositions-collocations_ex3_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ accordance with university regulations, all dissertations must undergo plagiarism checks.",
            "answer": "In",
            "acceptableAnswers": [
              "In",
              "in",
              "IN"
            ],
            "options": [
              "At",
              "With",
              "On",
              "In"
            ],
            "explanation": "The fixed institutional prepositional formula is 'In accordance with'."
          },
          {
            "id": "prepositions-collocations_ex3_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban planners must distinguish ___ short-term population influxes and permanent demographic shifts.",
            "answer": "between",
            "acceptableAnswers": [
              "between",
              "between",
              "BETWEEN"
            ],
            "options": [
              "among",
              "between",
              "with",
              "from"
            ],
            "explanation": "'Distinguish between' is used when contrasting two categories."
          },
          {
            "id": "prepositions-collocations_ex3_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The decline in honeybee populations is attributed ___ excessive pesticide applications.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "to",
              "for",
              "with",
              "by"
            ],
            "explanation": "The passive structure takes 'attributed to'."
          },
          {
            "id": "prepositions-collocations_ex3_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Adolescents are particularly vulnerable ___ social media peer pressure.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "for",
              "at",
              "to",
              "with"
            ],
            "explanation": "The adjective 'vulnerable' takes 'to'."
          },
          {
            "id": "prepositions-collocations_ex3_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The corporate director resigned ___ response to mounting public criticism.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "in",
              "at",
              "on",
              "by"
            ],
            "explanation": "The fixed prepositional phrase is 'in response to'."
          },
          {
            "id": "prepositions-collocations_ex3_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ terms of cost-effectiveness, geothermal energy outperforms conventional heating.",
            "answer": "In",
            "acceptableAnswers": [
              "In",
              "in",
              "IN"
            ],
            "options": [
              "In",
              "On",
              "By",
              "With"
            ],
            "explanation": "The academic discourse marker is 'In terms of'."
          }
        ]
      },
      {
        "id": "prepositions-collocations_ex_4",
        "number": 4,
        "title": "Exercise 4",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "prepositions-collocations_ex4_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "With respect to environmental sustainability, organic agriculture imposes negligible pressure on fragile topsoil.",
            "correctSequence": [
              "With respect to environmental",
              "sustainability, organic agriculture",
              "imposes negligible pressure on",
              "fragile topsoil."
            ],
            "shuffledTokens": [
              "With respect to environmental",
              "sustainability, organic agriculture",
              "fragile topsoil.",
              "imposes negligible pressure on"
            ],
            "explanation": "The formal academic linking phrase is 'With respect to...'"
          },
          {
            "id": "prepositions-collocations_ex4_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological innovation is deeply intertwined with societal readiness to adopt transformative digital tools.",
            "correctSequence": [
              "Technological innovation is deeply",
              "intertwined with societal readiness",
              "to adopt transformative",
              "digital tools."
            ],
            "shuffledTokens": [
              "Technological innovation is deeply",
              "intertwined with societal readiness",
              "digital tools.",
              "to adopt transformative"
            ],
            "explanation": "The participle 'intertwined' takes the dependent preposition 'with'."
          },
          {
            "id": "prepositions-collocations_ex4_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The municipality is committed to investing substantial resources in green energy infrastructure over the next decade.",
            "correctSequence": [
              "The municipality is committed to",
              "investing substantial resources in",
              "green energy infrastructure",
              "over the next decade."
            ],
            "shuffledTokens": [
              "The municipality is committed to",
              "over the next decade.",
              "green energy infrastructure",
              "investing substantial resources in"
            ],
            "explanation": "The adjective 'committed' takes 'to', followed by a gerund ('investing')."
          },
          {
            "id": "prepositions-collocations_ex4_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Students who take active part in collaborative research acquire valuable insights into scientific problem-solving.",
            "correctSequence": [
              "Students who take active part",
              "in collaborative research acquire",
              "valuable insights into scientific",
              "problem-solving."
            ],
            "shuffledTokens": [
              "Students who take active part",
              "problem-solving.",
              "valuable insights into scientific",
              "in collaborative research acquire"
            ],
            "explanation": "The noun 'insights' takes the dependent preposition 'into' ('insights into')."
          },
          {
            "id": "prepositions-collocations_ex4_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Heavy reliance on automated algorithms can lead to catastrophic oversights in complex medical diagnoses.",
            "correctSequence": [
              "Heavy reliance on automated algorithms",
              "can lead to catastrophic oversights",
              "in complex medical",
              "diagnoses."
            ],
            "shuffledTokens": [
              "diagnoses.",
              "in complex medical",
              "can lead to catastrophic oversights",
              "Heavy reliance on automated algorithms"
            ],
            "explanation": "'Reliance' takes 'on', and 'lead' takes 'to' ('reliance on... lead to...')."
          },
          {
            "id": "prepositions-collocations_ex4_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Exposure to industrial particulate matter poses a grave hazard to pediatric respiratory development.",
            "correctSequence": [
              "Exposure to industrial particulate matter",
              "poses a grave hazard to",
              "pediatric respiratory",
              "development."
            ],
            "shuffledTokens": [
              "development.",
              "pediatric respiratory",
              "poses a grave hazard to",
              "Exposure to industrial particulate matter"
            ],
            "explanation": "The noun 'exposure' takes 'to', and 'hazard' takes 'to'."
          },
          {
            "id": "prepositions-collocations_ex4_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Discontent among junior hospital doctors stemmed from grueling hours and inadequate remuneration packages.",
            "correctSequence": [
              "Discontent among junior hospital doctors",
              "stemmed from grueling hours and",
              "inadequate remuneration",
              "packages."
            ],
            "shuffledTokens": [
              "packages.",
              "inadequate remuneration",
              "stemmed from grueling hours and",
              "Discontent among junior hospital doctors"
            ],
            "explanation": "The phrasal verb 'stem from' denotes origin or causality."
          },
          {
            "id": "prepositions-collocations_ex4_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In accordance with municipal bylaws, all newly constructed complexes must feature photovoltaic roof panels.",
            "correctSequence": [
              "In accordance with municipal bylaws,",
              "all newly constructed complexes",
              "must feature photovoltaic",
              "roof panels."
            ],
            "shuffledTokens": [
              "must feature photovoltaic",
              "all newly constructed complexes",
              "roof panels.",
              "In accordance with municipal bylaws,"
            ],
            "explanation": "The formal academic phrase is 'In accordance with...'"
          },
          {
            "id": "prepositions-collocations_ex4_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A comprehensive transition towards circular economic models is vital for long-term ecological preservation.",
            "correctSequence": [
              "A comprehensive transition towards",
              "circular economic models is vital",
              "for long-term ecological",
              "preservation."
            ],
            "shuffledTokens": [
              "preservation.",
              "for long-term ecological",
              "A comprehensive transition towards",
              "circular economic models is vital"
            ],
            "explanation": "The noun 'transition' collocates with 'towards' or 'to'."
          },
          {
            "id": "prepositions-collocations_ex4_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Researchers succeeded in isolating the specific genetic sequence responsible for drought resistance in wheat.",
            "correctSequence": [
              "Researchers succeeded in isolating",
              "the specific genetic sequence",
              "responsible for drought",
              "resistance in wheat."
            ],
            "shuffledTokens": [
              "the specific genetic sequence",
              "resistance in wheat.",
              "Researchers succeeded in isolating",
              "responsible for drought"
            ],
            "explanation": "'Succeed' takes the preposition 'in' followed by a gerund ('succeeded in isolating')."
          },
          {
            "id": "prepositions-collocations_ex4_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The agricultural sector suffered immensely ___ the severe drought of 2022.",
            "answer": "during",
            "acceptableAnswers": [
              "during",
              "during",
              "DURING"
            ],
            "options": [
              "during",
              "on",
              "while",
              "at"
            ],
            "explanation": "A noun phrase indicating a period of time takes 'during'."
          },
          {
            "id": "prepositions-collocations_ex4_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The academic journal was established ___ the late nineteenth century.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "by",
              "at",
              "in",
              "on"
            ],
            "explanation": "Centuries, decades, and years require the preposition 'in'."
          },
          {
            "id": "prepositions-collocations_ex4_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ accordance with university regulations, all dissertations must undergo plagiarism checks.",
            "answer": "In",
            "acceptableAnswers": [
              "In",
              "in",
              "IN"
            ],
            "options": [
              "At",
              "In",
              "With",
              "On"
            ],
            "explanation": "The fixed institutional prepositional formula is 'In accordance with'."
          },
          {
            "id": "prepositions-collocations_ex4_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban planners must distinguish ___ short-term population influxes and permanent demographic shifts.",
            "answer": "between",
            "acceptableAnswers": [
              "between",
              "between",
              "BETWEEN"
            ],
            "options": [
              "between",
              "among",
              "from",
              "with"
            ],
            "explanation": "'Distinguish between' is used when contrasting two categories."
          },
          {
            "id": "prepositions-collocations_ex4_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The decline in honeybee populations is attributed ___ excessive pesticide applications.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "to",
              "for",
              "with",
              "by"
            ],
            "explanation": "The passive structure takes 'attributed to'."
          },
          {
            "id": "prepositions-collocations_ex4_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Adolescents are particularly vulnerable ___ social media peer pressure.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "for",
              "at",
              "to",
              "with"
            ],
            "explanation": "The adjective 'vulnerable' takes 'to'."
          },
          {
            "id": "prepositions-collocations_ex4_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The corporate director resigned ___ response to mounting public criticism.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "by",
              "at",
              "on",
              "in"
            ],
            "explanation": "The fixed prepositional phrase is 'in response to'."
          },
          {
            "id": "prepositions-collocations_ex4_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ terms of cost-effectiveness, geothermal energy outperforms conventional heating.",
            "answer": "In",
            "acceptableAnswers": [
              "In",
              "in",
              "IN"
            ],
            "options": [
              "On",
              "With",
              "By",
              "In"
            ],
            "explanation": "The academic discourse marker is 'In terms of'."
          },
          {
            "id": "prepositions-collocations_ex4_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Researchers succeeded ___ synthesizing an affordable artificial insulin compound.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "for",
              "in",
              "at",
              "to"
            ],
            "explanation": "The verb 'succeed' takes 'in' followed by a gerund ('succeeded in synthesizing')."
          },
          {
            "id": "prepositions-collocations_ex4_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The educational committee decided to dispense ___ outdated standardized testing methods.",
            "answer": "with",
            "acceptableAnswers": [
              "with",
              "with",
              "WITH"
            ],
            "options": [
              "of",
              "out",
              "with",
              "from"
            ],
            "explanation": "'Dispense with' means to discard or do away with."
          }
        ]
      },
      {
        "id": "prepositions-collocations_ex_5",
        "number": 5,
        "title": "Exercise 5",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "prepositions-collocations_ex5_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The municipality is committed to investing substantial resources in green energy infrastructure over the next decade.",
            "correctSequence": [
              "The municipality is committed to",
              "investing substantial resources in",
              "green energy infrastructure",
              "over the next decade."
            ],
            "shuffledTokens": [
              "investing substantial resources in",
              "The municipality is committed to",
              "green energy infrastructure",
              "over the next decade."
            ],
            "explanation": "The adjective 'committed' takes 'to', followed by a gerund ('investing')."
          },
          {
            "id": "prepositions-collocations_ex5_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Students who take active part in collaborative research acquire valuable insights into scientific problem-solving.",
            "correctSequence": [
              "Students who take active part",
              "in collaborative research acquire",
              "valuable insights into scientific",
              "problem-solving."
            ],
            "shuffledTokens": [
              "in collaborative research acquire",
              "Students who take active part",
              "valuable insights into scientific",
              "problem-solving."
            ],
            "explanation": "The noun 'insights' takes the dependent preposition 'into' ('insights into')."
          },
          {
            "id": "prepositions-collocations_ex5_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Heavy reliance on automated algorithms can lead to catastrophic oversights in complex medical diagnoses.",
            "correctSequence": [
              "Heavy reliance on automated algorithms",
              "can lead to catastrophic oversights",
              "in complex medical",
              "diagnoses."
            ],
            "shuffledTokens": [
              "can lead to catastrophic oversights",
              "Heavy reliance on automated algorithms",
              "in complex medical",
              "diagnoses."
            ],
            "explanation": "'Reliance' takes 'on', and 'lead' takes 'to' ('reliance on... lead to...')."
          },
          {
            "id": "prepositions-collocations_ex5_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Exposure to industrial particulate matter poses a grave hazard to pediatric respiratory development.",
            "correctSequence": [
              "Exposure to industrial particulate matter",
              "poses a grave hazard to",
              "pediatric respiratory",
              "development."
            ],
            "shuffledTokens": [
              "poses a grave hazard to",
              "Exposure to industrial particulate matter",
              "pediatric respiratory",
              "development."
            ],
            "explanation": "The noun 'exposure' takes 'to', and 'hazard' takes 'to'."
          },
          {
            "id": "prepositions-collocations_ex5_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Discontent among junior hospital doctors stemmed from grueling hours and inadequate remuneration packages.",
            "correctSequence": [
              "Discontent among junior hospital doctors",
              "stemmed from grueling hours and",
              "inadequate remuneration",
              "packages."
            ],
            "shuffledTokens": [
              "Discontent among junior hospital doctors",
              "stemmed from grueling hours and",
              "packages.",
              "inadequate remuneration"
            ],
            "explanation": "The phrasal verb 'stem from' denotes origin or causality."
          },
          {
            "id": "prepositions-collocations_ex5_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In accordance with municipal bylaws, all newly constructed complexes must feature photovoltaic roof panels.",
            "correctSequence": [
              "In accordance with municipal bylaws,",
              "all newly constructed complexes",
              "must feature photovoltaic",
              "roof panels."
            ],
            "shuffledTokens": [
              "In accordance with municipal bylaws,",
              "all newly constructed complexes",
              "roof panels.",
              "must feature photovoltaic"
            ],
            "explanation": "The formal academic phrase is 'In accordance with...'"
          },
          {
            "id": "prepositions-collocations_ex5_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A comprehensive transition towards circular economic models is vital for long-term ecological preservation.",
            "correctSequence": [
              "A comprehensive transition towards",
              "circular economic models is vital",
              "for long-term ecological",
              "preservation."
            ],
            "shuffledTokens": [
              "A comprehensive transition towards",
              "preservation.",
              "for long-term ecological",
              "circular economic models is vital"
            ],
            "explanation": "The noun 'transition' collocates with 'towards' or 'to'."
          },
          {
            "id": "prepositions-collocations_ex5_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Researchers succeeded in isolating the specific genetic sequence responsible for drought resistance in wheat.",
            "correctSequence": [
              "Researchers succeeded in isolating",
              "the specific genetic sequence",
              "responsible for drought",
              "resistance in wheat."
            ],
            "shuffledTokens": [
              "Researchers succeeded in isolating",
              "resistance in wheat.",
              "responsible for drought",
              "the specific genetic sequence"
            ],
            "explanation": "'Succeed' takes the preposition 'in' followed by a gerund ('succeeded in isolating')."
          },
          {
            "id": "prepositions-collocations_ex5_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The minister's speech was at variance with the empirical findings documented in the parliamentary white paper.",
            "correctSequence": [
              "The minister's speech was at variance",
              "with the empirical findings",
              "documented in the parliamentary",
              "white paper."
            ],
            "shuffledTokens": [
              "white paper.",
              "documented in the parliamentary",
              "with the empirical findings",
              "The minister's speech was at variance"
            ],
            "explanation": "The idiomatic prepositional phrase is 'at variance with'."
          },
          {
            "id": "prepositions-collocations_ex5_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Governments must refrain from curtailing civil liberties under the pretext of maintaining national order.",
            "correctSequence": [
              "Governments must refrain from",
              "curtailing civil liberties under",
              "the pretext of maintaining",
              "national order."
            ],
            "shuffledTokens": [
              "national order.",
              "the pretext of maintaining",
              "curtailing civil liberties under",
              "Governments must refrain from"
            ],
            "explanation": "The verb 'refrain' requires the dependent preposition 'from' ('refrain from')."
          },
          {
            "id": "prepositions-collocations_ex5_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ accordance with university regulations, all dissertations must undergo plagiarism checks.",
            "answer": "In",
            "acceptableAnswers": [
              "In",
              "in",
              "IN"
            ],
            "options": [
              "In",
              "At",
              "On",
              "With"
            ],
            "explanation": "The fixed institutional prepositional formula is 'In accordance with'."
          },
          {
            "id": "prepositions-collocations_ex5_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Urban planners must distinguish ___ short-term population influxes and permanent demographic shifts.",
            "answer": "between",
            "acceptableAnswers": [
              "between",
              "between",
              "BETWEEN"
            ],
            "options": [
              "between",
              "among",
              "from",
              "with"
            ],
            "explanation": "'Distinguish between' is used when contrasting two categories."
          },
          {
            "id": "prepositions-collocations_ex5_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The decline in honeybee populations is attributed ___ excessive pesticide applications.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "to",
              "for",
              "with",
              "by"
            ],
            "explanation": "The passive structure takes 'attributed to'."
          },
          {
            "id": "prepositions-collocations_ex5_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Adolescents are particularly vulnerable ___ social media peer pressure.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "to",
              "at",
              "for",
              "with"
            ],
            "explanation": "The adjective 'vulnerable' takes 'to'."
          },
          {
            "id": "prepositions-collocations_ex5_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The corporate director resigned ___ response to mounting public criticism.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "on",
              "by",
              "at",
              "in"
            ],
            "explanation": "The fixed prepositional phrase is 'in response to'."
          },
          {
            "id": "prepositions-collocations_ex5_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ terms of cost-effectiveness, geothermal energy outperforms conventional heating.",
            "answer": "In",
            "acceptableAnswers": [
              "In",
              "in",
              "IN"
            ],
            "options": [
              "With",
              "In",
              "On",
              "By"
            ],
            "explanation": "The academic discourse marker is 'In terms of'."
          },
          {
            "id": "prepositions-collocations_ex5_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Researchers succeeded ___ synthesizing an affordable artificial insulin compound.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "for",
              "in",
              "at",
              "to"
            ],
            "explanation": "The verb 'succeed' takes 'in' followed by a gerund ('succeeded in synthesizing')."
          },
          {
            "id": "prepositions-collocations_ex5_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The educational committee decided to dispense ___ outdated standardized testing methods.",
            "answer": "with",
            "acceptableAnswers": [
              "with",
              "with",
              "WITH"
            ],
            "options": [
              "of",
              "from",
              "out",
              "with"
            ],
            "explanation": "'Dispense with' means to discard or do away with."
          },
          {
            "id": "prepositions-collocations_ex5_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The new transit system operates ___ variance with regional emissions guidelines.",
            "answer": "at",
            "acceptableAnswers": [
              "at",
              "at",
              "AT"
            ],
            "options": [
              "at",
              "in",
              "on",
              "by"
            ],
            "explanation": "The idiomatic academic expression is 'at variance with'."
          },
          {
            "id": "prepositions-collocations_ex5_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Scholars are discouraged ___ drawing broad conclusions from restricted sample sizes.",
            "answer": "from",
            "acceptableAnswers": [
              "from",
              "from",
              "FROM"
            ],
            "options": [
              "from",
              "to",
              "at",
              "for"
            ],
            "explanation": "'Discouraged from' takes 'from' followed by a gerund."
          }
        ]
      },
      {
        "id": "prepositions-collocations_ex_6",
        "number": 6,
        "title": "Exercise 6",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "prepositions-collocations_ex6_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Heavy reliance on automated algorithms can lead to catastrophic oversights in complex medical diagnoses.",
            "correctSequence": [
              "Heavy reliance on automated algorithms",
              "can lead to catastrophic oversights",
              "in complex medical",
              "diagnoses."
            ],
            "shuffledTokens": [
              "can lead to catastrophic oversights",
              "Heavy reliance on automated algorithms",
              "in complex medical",
              "diagnoses."
            ],
            "explanation": "'Reliance' takes 'on', and 'lead' takes 'to' ('reliance on... lead to...')."
          },
          {
            "id": "prepositions-collocations_ex6_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Exposure to industrial particulate matter poses a grave hazard to pediatric respiratory development.",
            "correctSequence": [
              "Exposure to industrial particulate matter",
              "poses a grave hazard to",
              "pediatric respiratory",
              "development."
            ],
            "shuffledTokens": [
              "poses a grave hazard to",
              "Exposure to industrial particulate matter",
              "pediatric respiratory",
              "development."
            ],
            "explanation": "The noun 'exposure' takes 'to', and 'hazard' takes 'to'."
          },
          {
            "id": "prepositions-collocations_ex6_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Discontent among junior hospital doctors stemmed from grueling hours and inadequate remuneration packages.",
            "correctSequence": [
              "Discontent among junior hospital doctors",
              "stemmed from grueling hours and",
              "inadequate remuneration",
              "packages."
            ],
            "shuffledTokens": [
              "stemmed from grueling hours and",
              "Discontent among junior hospital doctors",
              "inadequate remuneration",
              "packages."
            ],
            "explanation": "The phrasal verb 'stem from' denotes origin or causality."
          },
          {
            "id": "prepositions-collocations_ex6_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In accordance with municipal bylaws, all newly constructed complexes must feature photovoltaic roof panels.",
            "correctSequence": [
              "In accordance with municipal bylaws,",
              "all newly constructed complexes",
              "must feature photovoltaic",
              "roof panels."
            ],
            "shuffledTokens": [
              "all newly constructed complexes",
              "In accordance with municipal bylaws,",
              "must feature photovoltaic",
              "roof panels."
            ],
            "explanation": "The formal academic phrase is 'In accordance with...'"
          },
          {
            "id": "prepositions-collocations_ex6_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A comprehensive transition towards circular economic models is vital for long-term ecological preservation.",
            "correctSequence": [
              "A comprehensive transition towards",
              "circular economic models is vital",
              "for long-term ecological",
              "preservation."
            ],
            "shuffledTokens": [
              "circular economic models is vital",
              "A comprehensive transition towards",
              "for long-term ecological",
              "preservation."
            ],
            "explanation": "The noun 'transition' collocates with 'towards' or 'to'."
          },
          {
            "id": "prepositions-collocations_ex6_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Researchers succeeded in isolating the specific genetic sequence responsible for drought resistance in wheat.",
            "correctSequence": [
              "Researchers succeeded in isolating",
              "the specific genetic sequence",
              "responsible for drought",
              "resistance in wheat."
            ],
            "shuffledTokens": [
              "the specific genetic sequence",
              "Researchers succeeded in isolating",
              "responsible for drought",
              "resistance in wheat."
            ],
            "explanation": "'Succeed' takes the preposition 'in' followed by a gerund ('succeeded in isolating')."
          },
          {
            "id": "prepositions-collocations_ex6_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The minister's speech was at variance with the empirical findings documented in the parliamentary white paper.",
            "correctSequence": [
              "The minister's speech was at variance",
              "with the empirical findings",
              "documented in the parliamentary",
              "white paper."
            ],
            "shuffledTokens": [
              "with the empirical findings",
              "The minister's speech was at variance",
              "documented in the parliamentary",
              "white paper."
            ],
            "explanation": "The idiomatic prepositional phrase is 'at variance with'."
          },
          {
            "id": "prepositions-collocations_ex6_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Governments must refrain from curtailing civil liberties under the pretext of maintaining national order.",
            "correctSequence": [
              "Governments must refrain from",
              "curtailing civil liberties under",
              "the pretext of maintaining",
              "national order."
            ],
            "shuffledTokens": [
              "Governments must refrain from",
              "curtailing civil liberties under",
              "national order.",
              "the pretext of maintaining"
            ],
            "explanation": "The verb 'refrain' requires the dependent preposition 'from' ('refrain from')."
          },
          {
            "id": "prepositions-collocations_ex6_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By virtue of its strategic geography, the archipelago developed into a thriving maritime trading hub.",
            "correctSequence": [
              "By virtue of its strategic geography,",
              "the archipelago developed into",
              "a thriving maritime trading",
              "hub."
            ],
            "shuffledTokens": [
              "By virtue of its strategic geography,",
              "the archipelago developed into",
              "hub.",
              "a thriving maritime trading"
            ],
            "explanation": "The formal causative prepositional phrase is 'By virtue of...'"
          },
          {
            "id": "prepositions-collocations_ex6_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientists have expressed skepticism about the commercial viability of oceanic thermal energy conversion.",
            "correctSequence": [
              "Scientists have expressed skepticism",
              "about the commercial viability of",
              "oceanic thermal energy",
              "conversion."
            ],
            "shuffledTokens": [
              "Scientists have expressed skepticism",
              "about the commercial viability of",
              "conversion.",
              "oceanic thermal energy"
            ],
            "explanation": "The noun 'skepticism' typically collocates with 'about' or 'regarding'."
          },
          {
            "id": "prepositions-collocations_ex6_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The decline in honeybee populations is attributed ___ excessive pesticide applications.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "to",
              "for",
              "with",
              "by"
            ],
            "explanation": "The passive structure takes 'attributed to'."
          },
          {
            "id": "prepositions-collocations_ex6_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Adolescents are particularly vulnerable ___ social media peer pressure.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "with",
              "at",
              "for",
              "to"
            ],
            "explanation": "The adjective 'vulnerable' takes 'to'."
          },
          {
            "id": "prepositions-collocations_ex6_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The corporate director resigned ___ response to mounting public criticism.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "by",
              "in",
              "at",
              "on"
            ],
            "explanation": "The fixed prepositional phrase is 'in response to'."
          },
          {
            "id": "prepositions-collocations_ex6_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ terms of cost-effectiveness, geothermal energy outperforms conventional heating.",
            "answer": "In",
            "acceptableAnswers": [
              "In",
              "in",
              "IN"
            ],
            "options": [
              "On",
              "With",
              "In",
              "By"
            ],
            "explanation": "The academic discourse marker is 'In terms of'."
          },
          {
            "id": "prepositions-collocations_ex6_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Researchers succeeded ___ synthesizing an affordable artificial insulin compound.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "to",
              "for",
              "in",
              "at"
            ],
            "explanation": "The verb 'succeed' takes 'in' followed by a gerund ('succeeded in synthesizing')."
          },
          {
            "id": "prepositions-collocations_ex6_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The educational committee decided to dispense ___ outdated standardized testing methods.",
            "answer": "with",
            "acceptableAnswers": [
              "with",
              "with",
              "WITH"
            ],
            "options": [
              "from",
              "of",
              "with",
              "out"
            ],
            "explanation": "'Dispense with' means to discard or do away with."
          },
          {
            "id": "prepositions-collocations_ex6_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The new transit system operates ___ variance with regional emissions guidelines.",
            "answer": "at",
            "acceptableAnswers": [
              "at",
              "at",
              "AT"
            ],
            "options": [
              "at",
              "in",
              "on",
              "by"
            ],
            "explanation": "The idiomatic academic expression is 'at variance with'."
          },
          {
            "id": "prepositions-collocations_ex6_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Scholars are discouraged ___ drawing broad conclusions from restricted sample sizes.",
            "answer": "from",
            "acceptableAnswers": [
              "from",
              "from",
              "FROM"
            ],
            "options": [
              "from",
              "to",
              "at",
              "for"
            ],
            "explanation": "'Discouraged from' takes 'from' followed by a gerund."
          },
          {
            "id": "prepositions-collocations_ex6_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The report shed significant light ___ the socioeconomic roots of rural disenfranchisement.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "on",
              "at",
              "in",
              "to"
            ],
            "explanation": "The idiom is 'shed light on [something]'."
          },
          {
            "id": "prepositions-collocations_ex6_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ respect to international trade, bilateral tariffs hamper economic reciprocity.",
            "answer": "With",
            "acceptableAnswers": [
              "With",
              "with",
              "WITH"
            ],
            "options": [
              "With",
              "At",
              "In",
              "By"
            ],
            "explanation": "The formal academic linking phrase is 'With respect to'."
          }
        ]
      },
      {
        "id": "prepositions-collocations_ex_7",
        "number": 7,
        "title": "Exercise 7",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "prepositions-collocations_ex7_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Discontent among junior hospital doctors stemmed from grueling hours and inadequate remuneration packages.",
            "correctSequence": [
              "Discontent among junior hospital doctors",
              "stemmed from grueling hours and",
              "inadequate remuneration",
              "packages."
            ],
            "shuffledTokens": [
              "stemmed from grueling hours and",
              "packages.",
              "Discontent among junior hospital doctors",
              "inadequate remuneration"
            ],
            "explanation": "The phrasal verb 'stem from' denotes origin or causality."
          },
          {
            "id": "prepositions-collocations_ex7_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In accordance with municipal bylaws, all newly constructed complexes must feature photovoltaic roof panels.",
            "correctSequence": [
              "In accordance with municipal bylaws,",
              "all newly constructed complexes",
              "must feature photovoltaic",
              "roof panels."
            ],
            "shuffledTokens": [
              "must feature photovoltaic",
              "In accordance with municipal bylaws,",
              "all newly constructed complexes",
              "roof panels."
            ],
            "explanation": "The formal academic phrase is 'In accordance with...'"
          },
          {
            "id": "prepositions-collocations_ex7_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A comprehensive transition towards circular economic models is vital for long-term ecological preservation.",
            "correctSequence": [
              "A comprehensive transition towards",
              "circular economic models is vital",
              "for long-term ecological",
              "preservation."
            ],
            "shuffledTokens": [
              "for long-term ecological",
              "A comprehensive transition towards",
              "circular economic models is vital",
              "preservation."
            ],
            "explanation": "The noun 'transition' collocates with 'towards' or 'to'."
          },
          {
            "id": "prepositions-collocations_ex7_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Researchers succeeded in isolating the specific genetic sequence responsible for drought resistance in wheat.",
            "correctSequence": [
              "Researchers succeeded in isolating",
              "the specific genetic sequence",
              "responsible for drought",
              "resistance in wheat."
            ],
            "shuffledTokens": [
              "the specific genetic sequence",
              "Researchers succeeded in isolating",
              "responsible for drought",
              "resistance in wheat."
            ],
            "explanation": "'Succeed' takes the preposition 'in' followed by a gerund ('succeeded in isolating')."
          },
          {
            "id": "prepositions-collocations_ex7_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The minister's speech was at variance with the empirical findings documented in the parliamentary white paper.",
            "correctSequence": [
              "The minister's speech was at variance",
              "with the empirical findings",
              "documented in the parliamentary",
              "white paper."
            ],
            "shuffledTokens": [
              "with the empirical findings",
              "The minister's speech was at variance",
              "documented in the parliamentary",
              "white paper."
            ],
            "explanation": "The idiomatic prepositional phrase is 'at variance with'."
          },
          {
            "id": "prepositions-collocations_ex7_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Governments must refrain from curtailing civil liberties under the pretext of maintaining national order.",
            "correctSequence": [
              "Governments must refrain from",
              "curtailing civil liberties under",
              "the pretext of maintaining",
              "national order."
            ],
            "shuffledTokens": [
              "curtailing civil liberties under",
              "Governments must refrain from",
              "the pretext of maintaining",
              "national order."
            ],
            "explanation": "The verb 'refrain' requires the dependent preposition 'from' ('refrain from')."
          },
          {
            "id": "prepositions-collocations_ex7_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By virtue of its strategic geography, the archipelago developed into a thriving maritime trading hub.",
            "correctSequence": [
              "By virtue of its strategic geography,",
              "the archipelago developed into",
              "a thriving maritime trading",
              "hub."
            ],
            "shuffledTokens": [
              "the archipelago developed into",
              "By virtue of its strategic geography,",
              "a thriving maritime trading",
              "hub."
            ],
            "explanation": "The formal causative prepositional phrase is 'By virtue of...'"
          },
          {
            "id": "prepositions-collocations_ex7_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientists have expressed skepticism about the commercial viability of oceanic thermal energy conversion.",
            "correctSequence": [
              "Scientists have expressed skepticism",
              "about the commercial viability of",
              "oceanic thermal energy",
              "conversion."
            ],
            "shuffledTokens": [
              "about the commercial viability of",
              "Scientists have expressed skepticism",
              "oceanic thermal energy",
              "conversion."
            ],
            "explanation": "The noun 'skepticism' typically collocates with 'about' or 'regarding'."
          },
          {
            "id": "prepositions-collocations_ex7_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Heavy dependence on fossil fuels contributes directly to atmospheric degradation and global climatic instability.",
            "correctSequence": [
              "Heavy dependence on fossil fuels",
              "contributes directly to atmospheric",
              "degradation and global",
              "climatic instability."
            ],
            "shuffledTokens": [
              "contributes directly to atmospheric",
              "Heavy dependence on fossil fuels",
              "degradation and global",
              "climatic instability."
            ],
            "explanation": "The verb 'contributes' takes the dependent preposition 'to' ('contributes to')."
          },
          {
            "id": "prepositions-collocations_ex7_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Societies with equitable access to primary healthcare demonstrate greater resilience in times of pandemic distress.",
            "correctSequence": [
              "Societies with equitable access",
              "to primary healthcare demonstrate",
              "greater resilience in times",
              "of pandemic distress."
            ],
            "shuffledTokens": [
              "to primary healthcare demonstrate",
              "Societies with equitable access",
              "greater resilience in times",
              "of pandemic distress."
            ],
            "explanation": "The noun 'access' takes the preposition 'to' ('access to healthcare')."
          },
          {
            "id": "prepositions-collocations_ex7_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The corporate director resigned ___ response to mounting public criticism.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "in",
              "on",
              "by",
              "at"
            ],
            "explanation": "The fixed prepositional phrase is 'in response to'."
          },
          {
            "id": "prepositions-collocations_ex7_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ terms of cost-effectiveness, geothermal energy outperforms conventional heating.",
            "answer": "In",
            "acceptableAnswers": [
              "In",
              "in",
              "IN"
            ],
            "options": [
              "By",
              "With",
              "On",
              "In"
            ],
            "explanation": "The academic discourse marker is 'In terms of'."
          },
          {
            "id": "prepositions-collocations_ex7_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Researchers succeeded ___ synthesizing an affordable artificial insulin compound.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "to",
              "at",
              "for",
              "in"
            ],
            "explanation": "The verb 'succeed' takes 'in' followed by a gerund ('succeeded in synthesizing')."
          },
          {
            "id": "prepositions-collocations_ex7_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The educational committee decided to dispense ___ outdated standardized testing methods.",
            "answer": "with",
            "acceptableAnswers": [
              "with",
              "with",
              "WITH"
            ],
            "options": [
              "from",
              "of",
              "with",
              "out"
            ],
            "explanation": "'Dispense with' means to discard or do away with."
          },
          {
            "id": "prepositions-collocations_ex7_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The new transit system operates ___ variance with regional emissions guidelines.",
            "answer": "at",
            "acceptableAnswers": [
              "at",
              "at",
              "AT"
            ],
            "options": [
              "at",
              "in",
              "on",
              "by"
            ],
            "explanation": "The idiomatic academic expression is 'at variance with'."
          },
          {
            "id": "prepositions-collocations_ex7_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Scholars are discouraged ___ drawing broad conclusions from restricted sample sizes.",
            "answer": "from",
            "acceptableAnswers": [
              "from",
              "from",
              "FROM"
            ],
            "options": [
              "from",
              "to",
              "at",
              "for"
            ],
            "explanation": "'Discouraged from' takes 'from' followed by a gerund."
          },
          {
            "id": "prepositions-collocations_ex7_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The report shed significant light ___ the socioeconomic roots of rural disenfranchisement.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "to",
              "at",
              "in",
              "on"
            ],
            "explanation": "The idiom is 'shed light on [something]'."
          },
          {
            "id": "prepositions-collocations_ex7_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ respect to international trade, bilateral tariffs hamper economic reciprocity.",
            "answer": "With",
            "acceptableAnswers": [
              "With",
              "with",
              "WITH"
            ],
            "options": [
              "At",
              "By",
              "In",
              "With"
            ],
            "explanation": "The formal academic linking phrase is 'With respect to'."
          },
          {
            "id": "prepositions-collocations_ex7_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research institute is deeply committed ___ promoting sustainable agricultural practices.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "with",
              "in",
              "to",
              "for"
            ],
            "explanation": "'Committed' takes the dependent preposition 'to', followed by a gerund."
          },
          {
            "id": "prepositions-collocations_ex7_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Industrial emissions contribute significantly ___ the degradation of ambient air quality.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "for",
              "in",
              "to",
              "at"
            ],
            "explanation": "The verb 'contribute' collocates with 'to'."
          }
        ]
      },
      {
        "id": "prepositions-collocations_ex_8",
        "number": 8,
        "title": "Exercise 8",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "prepositions-collocations_ex8_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A comprehensive transition towards circular economic models is vital for long-term ecological preservation.",
            "correctSequence": [
              "A comprehensive transition towards",
              "circular economic models is vital",
              "for long-term ecological",
              "preservation."
            ],
            "shuffledTokens": [
              "for long-term ecological",
              "circular economic models is vital",
              "preservation.",
              "A comprehensive transition towards"
            ],
            "explanation": "The noun 'transition' collocates with 'towards' or 'to'."
          },
          {
            "id": "prepositions-collocations_ex8_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Researchers succeeded in isolating the specific genetic sequence responsible for drought resistance in wheat.",
            "correctSequence": [
              "Researchers succeeded in isolating",
              "the specific genetic sequence",
              "responsible for drought",
              "resistance in wheat."
            ],
            "shuffledTokens": [
              "resistance in wheat.",
              "responsible for drought",
              "Researchers succeeded in isolating",
              "the specific genetic sequence"
            ],
            "explanation": "'Succeed' takes the preposition 'in' followed by a gerund ('succeeded in isolating')."
          },
          {
            "id": "prepositions-collocations_ex8_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The minister's speech was at variance with the empirical findings documented in the parliamentary white paper.",
            "correctSequence": [
              "The minister's speech was at variance",
              "with the empirical findings",
              "documented in the parliamentary",
              "white paper."
            ],
            "shuffledTokens": [
              "white paper.",
              "documented in the parliamentary",
              "The minister's speech was at variance",
              "with the empirical findings"
            ],
            "explanation": "The idiomatic prepositional phrase is 'at variance with'."
          },
          {
            "id": "prepositions-collocations_ex8_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Governments must refrain from curtailing civil liberties under the pretext of maintaining national order.",
            "correctSequence": [
              "Governments must refrain from",
              "curtailing civil liberties under",
              "the pretext of maintaining",
              "national order."
            ],
            "shuffledTokens": [
              "curtailing civil liberties under",
              "national order.",
              "Governments must refrain from",
              "the pretext of maintaining"
            ],
            "explanation": "The verb 'refrain' requires the dependent preposition 'from' ('refrain from')."
          },
          {
            "id": "prepositions-collocations_ex8_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By virtue of its strategic geography, the archipelago developed into a thriving maritime trading hub.",
            "correctSequence": [
              "By virtue of its strategic geography,",
              "the archipelago developed into",
              "a thriving maritime trading",
              "hub."
            ],
            "shuffledTokens": [
              "hub.",
              "By virtue of its strategic geography,",
              "the archipelago developed into",
              "a thriving maritime trading"
            ],
            "explanation": "The formal causative prepositional phrase is 'By virtue of...'"
          },
          {
            "id": "prepositions-collocations_ex8_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientists have expressed skepticism about the commercial viability of oceanic thermal energy conversion.",
            "correctSequence": [
              "Scientists have expressed skepticism",
              "about the commercial viability of",
              "oceanic thermal energy",
              "conversion."
            ],
            "shuffledTokens": [
              "oceanic thermal energy",
              "Scientists have expressed skepticism",
              "about the commercial viability of",
              "conversion."
            ],
            "explanation": "The noun 'skepticism' typically collocates with 'about' or 'regarding'."
          },
          {
            "id": "prepositions-collocations_ex8_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Heavy dependence on fossil fuels contributes directly to atmospheric degradation and global climatic instability.",
            "correctSequence": [
              "Heavy dependence on fossil fuels",
              "contributes directly to atmospheric",
              "degradation and global",
              "climatic instability."
            ],
            "shuffledTokens": [
              "degradation and global",
              "Heavy dependence on fossil fuels",
              "contributes directly to atmospheric",
              "climatic instability."
            ],
            "explanation": "The verb 'contributes' takes the dependent preposition 'to' ('contributes to')."
          },
          {
            "id": "prepositions-collocations_ex8_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Societies with equitable access to primary healthcare demonstrate greater resilience in times of pandemic distress.",
            "correctSequence": [
              "Societies with equitable access",
              "to primary healthcare demonstrate",
              "greater resilience in times",
              "of pandemic distress."
            ],
            "shuffledTokens": [
              "to primary healthcare demonstrate",
              "Societies with equitable access",
              "greater resilience in times",
              "of pandemic distress."
            ],
            "explanation": "The noun 'access' takes the preposition 'to' ('access to healthcare')."
          },
          {
            "id": "prepositions-collocations_ex8_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The government's refusal to comply with international treaties provoked severe economic sanctions abroad.",
            "correctSequence": [
              "The government's refusal to",
              "comply with international treaties",
              "provoked severe economic",
              "sanctions abroad."
            ],
            "shuffledTokens": [
              "comply with international treaties",
              "The government's refusal to",
              "provoked severe economic",
              "sanctions abroad."
            ],
            "explanation": "The verb 'comply' strictly collocates with the preposition 'with' ('comply with')."
          },
          {
            "id": "prepositions-collocations_ex8_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In contrast to suburban sprawl, high-density living provides residents with immediate access to public amenities.",
            "correctSequence": [
              "In contrast to suburban sprawl,",
              "high-density living provides residents",
              "with immediate access to",
              "public amenities."
            ],
            "shuffledTokens": [
              "high-density living provides residents",
              "In contrast to suburban sprawl,",
              "with immediate access to",
              "public amenities."
            ],
            "explanation": "The fixed comparative discourse connector is 'In contrast to...'"
          },
          {
            "id": "prepositions-collocations_ex8_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Researchers succeeded ___ synthesizing an affordable artificial insulin compound.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "at",
              "to",
              "in",
              "for"
            ],
            "explanation": "The verb 'succeed' takes 'in' followed by a gerund ('succeeded in synthesizing')."
          },
          {
            "id": "prepositions-collocations_ex8_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The educational committee decided to dispense ___ outdated standardized testing methods.",
            "answer": "with",
            "acceptableAnswers": [
              "with",
              "with",
              "WITH"
            ],
            "options": [
              "from",
              "of",
              "with",
              "out"
            ],
            "explanation": "'Dispense with' means to discard or do away with."
          },
          {
            "id": "prepositions-collocations_ex8_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The new transit system operates ___ variance with regional emissions guidelines.",
            "answer": "at",
            "acceptableAnswers": [
              "at",
              "at",
              "AT"
            ],
            "options": [
              "at",
              "in",
              "on",
              "by"
            ],
            "explanation": "The idiomatic academic expression is 'at variance with'."
          },
          {
            "id": "prepositions-collocations_ex8_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Scholars are discouraged ___ drawing broad conclusions from restricted sample sizes.",
            "answer": "from",
            "acceptableAnswers": [
              "from",
              "from",
              "FROM"
            ],
            "options": [
              "at",
              "to",
              "from",
              "for"
            ],
            "explanation": "'Discouraged from' takes 'from' followed by a gerund."
          },
          {
            "id": "prepositions-collocations_ex8_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The report shed significant light ___ the socioeconomic roots of rural disenfranchisement.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "in",
              "to",
              "at",
              "on"
            ],
            "explanation": "The idiom is 'shed light on [something]'."
          },
          {
            "id": "prepositions-collocations_ex8_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ respect to international trade, bilateral tariffs hamper economic reciprocity.",
            "answer": "With",
            "acceptableAnswers": [
              "With",
              "with",
              "WITH"
            ],
            "options": [
              "By",
              "With",
              "At",
              "In"
            ],
            "explanation": "The formal academic linking phrase is 'With respect to'."
          },
          {
            "id": "prepositions-collocations_ex8_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research institute is deeply committed ___ promoting sustainable agricultural practices.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "for",
              "in",
              "with",
              "to"
            ],
            "explanation": "'Committed' takes the dependent preposition 'to', followed by a gerund."
          },
          {
            "id": "prepositions-collocations_ex8_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Industrial emissions contribute significantly ___ the degradation of ambient air quality.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "for",
              "at",
              "in",
              "to"
            ],
            "explanation": "The verb 'contribute' collocates with 'to'."
          },
          {
            "id": "prepositions-collocations_ex8_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Many coastal communities are heavily reliant ___ artisanal marine fishing for subsistence.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "at",
              "in",
              "on",
              "with"
            ],
            "explanation": "'Reliant' strictly takes the preposition 'on'."
          },
          {
            "id": "prepositions-collocations_ex8_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The novel curriculum resulted ___ a measurable enhancement in analytical reasoning scores.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "in",
              "to",
              "for",
              "with"
            ],
            "explanation": "The verb 'result' takes 'in' to indicate the outcome ('resulted in')."
          }
        ]
      },
      {
        "id": "prepositions-collocations_ex_9",
        "number": 9,
        "title": "Exercise 9",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "prepositions-collocations_ex9_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The minister's speech was at variance with the empirical findings documented in the parliamentary white paper.",
            "correctSequence": [
              "The minister's speech was at variance",
              "with the empirical findings",
              "documented in the parliamentary",
              "white paper."
            ],
            "shuffledTokens": [
              "The minister's speech was at variance",
              "white paper.",
              "documented in the parliamentary",
              "with the empirical findings"
            ],
            "explanation": "The idiomatic prepositional phrase is 'at variance with'."
          },
          {
            "id": "prepositions-collocations_ex9_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Governments must refrain from curtailing civil liberties under the pretext of maintaining national order.",
            "correctSequence": [
              "Governments must refrain from",
              "curtailing civil liberties under",
              "the pretext of maintaining",
              "national order."
            ],
            "shuffledTokens": [
              "national order.",
              "the pretext of maintaining",
              "curtailing civil liberties under",
              "Governments must refrain from"
            ],
            "explanation": "The verb 'refrain' requires the dependent preposition 'from' ('refrain from')."
          },
          {
            "id": "prepositions-collocations_ex9_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By virtue of its strategic geography, the archipelago developed into a thriving maritime trading hub.",
            "correctSequence": [
              "By virtue of its strategic geography,",
              "the archipelago developed into",
              "a thriving maritime trading",
              "hub."
            ],
            "shuffledTokens": [
              "hub.",
              "a thriving maritime trading",
              "the archipelago developed into",
              "By virtue of its strategic geography,"
            ],
            "explanation": "The formal causative prepositional phrase is 'By virtue of...'"
          },
          {
            "id": "prepositions-collocations_ex9_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientists have expressed skepticism about the commercial viability of oceanic thermal energy conversion.",
            "correctSequence": [
              "Scientists have expressed skepticism",
              "about the commercial viability of",
              "oceanic thermal energy",
              "conversion."
            ],
            "shuffledTokens": [
              "oceanic thermal energy",
              "about the commercial viability of",
              "conversion.",
              "Scientists have expressed skepticism"
            ],
            "explanation": "The noun 'skepticism' typically collocates with 'about' or 'regarding'."
          },
          {
            "id": "prepositions-collocations_ex9_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Heavy dependence on fossil fuels contributes directly to atmospheric degradation and global climatic instability.",
            "correctSequence": [
              "Heavy dependence on fossil fuels",
              "contributes directly to atmospheric",
              "degradation and global",
              "climatic instability."
            ],
            "shuffledTokens": [
              "degradation and global",
              "climatic instability.",
              "Heavy dependence on fossil fuels",
              "contributes directly to atmospheric"
            ],
            "explanation": "The verb 'contributes' takes the dependent preposition 'to' ('contributes to')."
          },
          {
            "id": "prepositions-collocations_ex9_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Societies with equitable access to primary healthcare demonstrate greater resilience in times of pandemic distress.",
            "correctSequence": [
              "Societies with equitable access",
              "to primary healthcare demonstrate",
              "greater resilience in times",
              "of pandemic distress."
            ],
            "shuffledTokens": [
              "of pandemic distress.",
              "greater resilience in times",
              "Societies with equitable access",
              "to primary healthcare demonstrate"
            ],
            "explanation": "The noun 'access' takes the preposition 'to' ('access to healthcare')."
          },
          {
            "id": "prepositions-collocations_ex9_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The government's refusal to comply with international treaties provoked severe economic sanctions abroad.",
            "correctSequence": [
              "The government's refusal to",
              "comply with international treaties",
              "provoked severe economic",
              "sanctions abroad."
            ],
            "shuffledTokens": [
              "comply with international treaties",
              "sanctions abroad.",
              "The government's refusal to",
              "provoked severe economic"
            ],
            "explanation": "The verb 'comply' strictly collocates with the preposition 'with' ('comply with')."
          },
          {
            "id": "prepositions-collocations_ex9_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In contrast to suburban sprawl, high-density living provides residents with immediate access to public amenities.",
            "correctSequence": [
              "In contrast to suburban sprawl,",
              "high-density living provides residents",
              "with immediate access to",
              "public amenities."
            ],
            "shuffledTokens": [
              "high-density living provides residents",
              "public amenities.",
              "In contrast to suburban sprawl,",
              "with immediate access to"
            ],
            "explanation": "The fixed comparative discourse connector is 'In contrast to...'"
          },
          {
            "id": "prepositions-collocations_ex9_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Children who are consistently deprived of parental affection are prone to developing emotional vulnerabilities.",
            "correctSequence": [
              "Children who are consistently",
              "deprived of parental affection",
              "are prone to developing",
              "emotional vulnerabilities."
            ],
            "shuffledTokens": [
              "are prone to developing",
              "Children who are consistently",
              "deprived of parental affection",
              "emotional vulnerabilities."
            ],
            "explanation": "The adjective 'prone' takes the dependent preposition 'to' ('prone to developing')."
          },
          {
            "id": "prepositions-collocations_ex9_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Economic historians attribute the rapid expansion of British trade to maritime supremacy and mechanized spinning.",
            "correctSequence": [
              "Economic historians attribute the",
              "rapid expansion of British trade",
              "to maritime supremacy and",
              "mechanized spinning."
            ],
            "shuffledTokens": [
              "to maritime supremacy and",
              "Economic historians attribute the",
              "rapid expansion of British trade",
              "mechanized spinning."
            ],
            "explanation": "The transitive structure is 'attribute [something] to [something]'."
          },
          {
            "id": "prepositions-collocations_ex9_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The new transit system operates ___ variance with regional emissions guidelines.",
            "answer": "at",
            "acceptableAnswers": [
              "at",
              "at",
              "AT"
            ],
            "options": [
              "at",
              "in",
              "on",
              "by"
            ],
            "explanation": "The idiomatic academic expression is 'at variance with'."
          },
          {
            "id": "prepositions-collocations_ex9_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Scholars are discouraged ___ drawing broad conclusions from restricted sample sizes.",
            "answer": "from",
            "acceptableAnswers": [
              "from",
              "from",
              "FROM"
            ],
            "options": [
              "from",
              "for",
              "to",
              "at"
            ],
            "explanation": "'Discouraged from' takes 'from' followed by a gerund."
          },
          {
            "id": "prepositions-collocations_ex9_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The report shed significant light ___ the socioeconomic roots of rural disenfranchisement.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "on",
              "to",
              "at",
              "in"
            ],
            "explanation": "The idiom is 'shed light on [something]'."
          },
          {
            "id": "prepositions-collocations_ex9_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ respect to international trade, bilateral tariffs hamper economic reciprocity.",
            "answer": "With",
            "acceptableAnswers": [
              "With",
              "with",
              "WITH"
            ],
            "options": [
              "At",
              "By",
              "With",
              "In"
            ],
            "explanation": "The formal academic linking phrase is 'With respect to'."
          },
          {
            "id": "prepositions-collocations_ex9_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research institute is deeply committed ___ promoting sustainable agricultural practices.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "for",
              "with",
              "in",
              "to"
            ],
            "explanation": "'Committed' takes the dependent preposition 'to', followed by a gerund."
          },
          {
            "id": "prepositions-collocations_ex9_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Industrial emissions contribute significantly ___ the degradation of ambient air quality.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "at",
              "for",
              "to",
              "in"
            ],
            "explanation": "The verb 'contribute' collocates with 'to'."
          },
          {
            "id": "prepositions-collocations_ex9_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Many coastal communities are heavily reliant ___ artisanal marine fishing for subsistence.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "at",
              "in",
              "on",
              "with"
            ],
            "explanation": "'Reliant' strictly takes the preposition 'on'."
          },
          {
            "id": "prepositions-collocations_ex9_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The novel curriculum resulted ___ a measurable enhancement in analytical reasoning scores.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "in",
              "to",
              "for",
              "with"
            ],
            "explanation": "The verb 'result' takes 'in' to indicate the outcome ('resulted in')."
          },
          {
            "id": "prepositions-collocations_ex9_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The conference convenes ___ Monday, the fourteenth of October, in Geneva.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "on",
              "in",
              "at",
              "by"
            ],
            "explanation": "Specific days and calendar dates take the preposition 'on'."
          },
          {
            "id": "prepositions-collocations_ex9_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The global summit concluded ___ midnight following protracted ministerial deliberations.",
            "answer": "at",
            "acceptableAnswers": [
              "at",
              "at",
              "AT"
            ],
            "options": [
              "on",
              "during",
              "in",
              "at"
            ],
            "explanation": "Specific clock times or points like 'midnight' take 'at'."
          }
        ]
      },
      {
        "id": "prepositions-collocations_ex_10",
        "number": 10,
        "title": "Exercise 10",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "prepositions-collocations_ex10_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "By virtue of its strategic geography, the archipelago developed into a thriving maritime trading hub.",
            "correctSequence": [
              "By virtue of its strategic geography,",
              "the archipelago developed into",
              "a thriving maritime trading",
              "hub."
            ],
            "shuffledTokens": [
              "the archipelago developed into",
              "By virtue of its strategic geography,",
              "a thriving maritime trading",
              "hub."
            ],
            "explanation": "The formal causative prepositional phrase is 'By virtue of...'"
          },
          {
            "id": "prepositions-collocations_ex10_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientists have expressed skepticism about the commercial viability of oceanic thermal energy conversion.",
            "correctSequence": [
              "Scientists have expressed skepticism",
              "about the commercial viability of",
              "oceanic thermal energy",
              "conversion."
            ],
            "shuffledTokens": [
              "Scientists have expressed skepticism",
              "about the commercial viability of",
              "conversion.",
              "oceanic thermal energy"
            ],
            "explanation": "The noun 'skepticism' typically collocates with 'about' or 'regarding'."
          },
          {
            "id": "prepositions-collocations_ex10_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Heavy dependence on fossil fuels contributes directly to atmospheric degradation and global climatic instability.",
            "correctSequence": [
              "Heavy dependence on fossil fuels",
              "contributes directly to atmospheric",
              "degradation and global",
              "climatic instability."
            ],
            "shuffledTokens": [
              "Heavy dependence on fossil fuels",
              "contributes directly to atmospheric",
              "climatic instability.",
              "degradation and global"
            ],
            "explanation": "The verb 'contributes' takes the dependent preposition 'to' ('contributes to')."
          },
          {
            "id": "prepositions-collocations_ex10_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Societies with equitable access to primary healthcare demonstrate greater resilience in times of pandemic distress.",
            "correctSequence": [
              "Societies with equitable access",
              "to primary healthcare demonstrate",
              "greater resilience in times",
              "of pandemic distress."
            ],
            "shuffledTokens": [
              "Societies with equitable access",
              "of pandemic distress.",
              "greater resilience in times",
              "to primary healthcare demonstrate"
            ],
            "explanation": "The noun 'access' takes the preposition 'to' ('access to healthcare')."
          },
          {
            "id": "prepositions-collocations_ex10_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The government's refusal to comply with international treaties provoked severe economic sanctions abroad.",
            "correctSequence": [
              "The government's refusal to",
              "comply with international treaties",
              "provoked severe economic",
              "sanctions abroad."
            ],
            "shuffledTokens": [
              "The government's refusal to",
              "provoked severe economic",
              "sanctions abroad.",
              "comply with international treaties"
            ],
            "explanation": "The verb 'comply' strictly collocates with the preposition 'with' ('comply with')."
          },
          {
            "id": "prepositions-collocations_ex10_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "In contrast to suburban sprawl, high-density living provides residents with immediate access to public amenities.",
            "correctSequence": [
              "In contrast to suburban sprawl,",
              "high-density living provides residents",
              "with immediate access to",
              "public amenities."
            ],
            "shuffledTokens": [
              "public amenities.",
              "with immediate access to",
              "high-density living provides residents",
              "In contrast to suburban sprawl,"
            ],
            "explanation": "The fixed comparative discourse connector is 'In contrast to...'"
          },
          {
            "id": "prepositions-collocations_ex10_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Children who are consistently deprived of parental affection are prone to developing emotional vulnerabilities.",
            "correctSequence": [
              "Children who are consistently",
              "deprived of parental affection",
              "are prone to developing",
              "emotional vulnerabilities."
            ],
            "shuffledTokens": [
              "emotional vulnerabilities.",
              "are prone to developing",
              "deprived of parental affection",
              "Children who are consistently"
            ],
            "explanation": "The adjective 'prone' takes the dependent preposition 'to' ('prone to developing')."
          },
          {
            "id": "prepositions-collocations_ex10_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Economic historians attribute the rapid expansion of British trade to maritime supremacy and mechanized spinning.",
            "correctSequence": [
              "Economic historians attribute the",
              "rapid expansion of British trade",
              "to maritime supremacy and",
              "mechanized spinning."
            ],
            "shuffledTokens": [
              "to maritime supremacy and",
              "rapid expansion of British trade",
              "mechanized spinning.",
              "Economic historians attribute the"
            ],
            "explanation": "The transitive structure is 'attribute [something] to [something]'."
          },
          {
            "id": "prepositions-collocations_ex10_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "With respect to environmental sustainability, organic agriculture imposes negligible pressure on fragile topsoil.",
            "correctSequence": [
              "With respect to environmental",
              "sustainability, organic agriculture",
              "imposes negligible pressure on",
              "fragile topsoil."
            ],
            "shuffledTokens": [
              "imposes negligible pressure on",
              "fragile topsoil.",
              "With respect to environmental",
              "sustainability, organic agriculture"
            ],
            "explanation": "The formal academic linking phrase is 'With respect to...'"
          },
          {
            "id": "prepositions-collocations_ex10_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological innovation is deeply intertwined with societal readiness to adopt transformative digital tools.",
            "correctSequence": [
              "Technological innovation is deeply",
              "intertwined with societal readiness",
              "to adopt transformative",
              "digital tools."
            ],
            "shuffledTokens": [
              "digital tools.",
              "to adopt transformative",
              "Technological innovation is deeply",
              "intertwined with societal readiness"
            ],
            "explanation": "The participle 'intertwined' takes the dependent preposition 'with'."
          },
          {
            "id": "prepositions-collocations_ex10_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The report shed significant light ___ the socioeconomic roots of rural disenfranchisement.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "on",
              "in",
              "to",
              "at"
            ],
            "explanation": "The idiom is 'shed light on [something]'."
          },
          {
            "id": "prepositions-collocations_ex10_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ respect to international trade, bilateral tariffs hamper economic reciprocity.",
            "answer": "With",
            "acceptableAnswers": [
              "With",
              "with",
              "WITH"
            ],
            "options": [
              "In",
              "At",
              "By",
              "With"
            ],
            "explanation": "The formal academic linking phrase is 'With respect to'."
          },
          {
            "id": "prepositions-collocations_ex10_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research institute is deeply committed ___ promoting sustainable agricultural practices.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "for",
              "to",
              "with",
              "in"
            ],
            "explanation": "'Committed' takes the dependent preposition 'to', followed by a gerund."
          },
          {
            "id": "prepositions-collocations_ex10_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Industrial emissions contribute significantly ___ the degradation of ambient air quality.",
            "answer": "to",
            "acceptableAnswers": [
              "to",
              "to",
              "TO"
            ],
            "options": [
              "at",
              "for",
              "to",
              "in"
            ],
            "explanation": "The verb 'contribute' collocates with 'to'."
          },
          {
            "id": "prepositions-collocations_ex10_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Many coastal communities are heavily reliant ___ artisanal marine fishing for subsistence.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "at",
              "in",
              "on",
              "with"
            ],
            "explanation": "'Reliant' strictly takes the preposition 'on'."
          },
          {
            "id": "prepositions-collocations_ex10_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The novel curriculum resulted ___ a measurable enhancement in analytical reasoning scores.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "in",
              "to",
              "for",
              "with"
            ],
            "explanation": "The verb 'result' takes 'in' to indicate the outcome ('resulted in')."
          },
          {
            "id": "prepositions-collocations_ex10_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The conference convenes ___ Monday, the fourteenth of October, in Geneva.",
            "answer": "on",
            "acceptableAnswers": [
              "on",
              "on",
              "ON"
            ],
            "options": [
              "at",
              "by",
              "in",
              "on"
            ],
            "explanation": "Specific days and calendar dates take the preposition 'on'."
          },
          {
            "id": "prepositions-collocations_ex10_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The global summit concluded ___ midnight following protracted ministerial deliberations.",
            "answer": "at",
            "acceptableAnswers": [
              "at",
              "at",
              "AT"
            ],
            "options": [
              "at",
              "during",
              "in",
              "on"
            ],
            "explanation": "Specific clock times or points like 'midnight' take 'at'."
          },
          {
            "id": "prepositions-collocations_ex10_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The agricultural sector suffered immensely ___ the severe drought of 2022.",
            "answer": "during",
            "acceptableAnswers": [
              "during",
              "during",
              "DURING"
            ],
            "options": [
              "while",
              "during",
              "on",
              "at"
            ],
            "explanation": "A noun phrase indicating a period of time takes 'during'."
          },
          {
            "id": "prepositions-collocations_ex10_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The academic journal was established ___ the late nineteenth century.",
            "answer": "in",
            "acceptableAnswers": [
              "in",
              "in",
              "IN"
            ],
            "options": [
              "on",
              "by",
              "at",
              "in"
            ],
            "explanation": "Centuries, decades, and years require the preposition 'in'."
          }
        ]
      }
    ]
  },
  {
    "id": "articles-determiners",
    "title": "Articles & Determiners",
    "icon": "A/An/The",
    "color": "#dc2626",
    "subtitle": "Definite ('the'), indefinite ('a/an'), and zero articles with abstract and institutional nouns.",
    "rules": [
      "Use zero article when discussing plural or uncountable nouns in a generic sense ('Education fosters growth').",
      "Use 'the' when a noun is modified by a restrictive relative clause or of-phrase ('The education of children').",
      "Geographical names: use 'the' with plural countries ('the Netherlands') and mountain ranges ('the Alps'), but zero article with singular countries ('Germany').",
      "Unique entities take 'the' ('the environment', 'the government', 'the ozone layer').",
      "Institutions ('school', 'university', 'prison') take zero article when referenced for their primary purpose."
    ],
    "exercises": [
      {
        "id": "articles-determiners_ex_1",
        "number": 1,
        "title": "Exercise 1",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "articles-determiners_ex1_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The United Kingdom and the Netherlands signed a bilateral accord on offshore wind energy production.",
            "correctSequence": [
              "The United Kingdom and the",
              "Netherlands signed a bilateral",
              "accord on offshore wind",
              "energy production."
            ],
            "shuffledTokens": [
              "Netherlands signed a bilateral",
              "energy production.",
              "The United Kingdom and the",
              "accord on offshore wind"
            ],
            "explanation": "Names of countries featuring plural nouns or unions take 'the' ('the UK', 'the Netherlands')."
          },
          {
            "id": "articles-determiners_ex1_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Education plays a paramount role in elevating impoverished families above the national poverty threshold.",
            "correctSequence": [
              "Education plays a paramount role",
              "in elevating impoverished families",
              "above the national poverty",
              "threshold."
            ],
            "shuffledTokens": [
              "above the national poverty",
              "Education plays a paramount role",
              "in elevating impoverished families",
              "threshold."
            ],
            "explanation": "Abstract uncountable nouns used in a generic sense ('Education') take zero article."
          },
          {
            "id": "articles-determiners_ex1_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The education of young girls in remote rural districts requires specialized governmental scholarship programs.",
            "correctSequence": [
              "The education of young girls in",
              "remote rural districts requires",
              "specialized governmental scholarship",
              "programs."
            ],
            "shuffledTokens": [
              "specialized governmental scholarship",
              "The education of young girls in",
              "remote rural districts requires",
              "programs."
            ],
            "explanation": "When an abstract noun is restricted by an of-phrase ('The education of young girls'), it takes 'the'."
          },
          {
            "id": "articles-determiners_ex1_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Mount Everest attracts hundreds of intrepid mountaineers to the Himalayas every spring season.",
            "correctSequence": [
              "Mount Everest attracts hundreds of",
              "intrepid mountaineers to the",
              "Himalayas every spring season."
            ],
            "shuffledTokens": [
              "intrepid mountaineers to the",
              "Mount Everest attracts hundreds of",
              "Himalayas every spring season."
            ],
            "explanation": "Individual mountain peaks take zero article ('Mount Everest'), whereas mountain ranges take 'the' ('the Himalayas')."
          },
          {
            "id": "articles-determiners_ex1_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ozone layer serves as an indispensable cosmic shield against lethal ultraviolet radiation from the sun.",
            "correctSequence": [
              "The ozone layer serves as an",
              "indispensable cosmic shield against",
              "lethal ultraviolet radiation",
              "from the sun."
            ],
            "shuffledTokens": [
              "indispensable cosmic shield against",
              "The ozone layer serves as an",
              "lethal ultraviolet radiation",
              "from the sun."
            ],
            "explanation": "Unique celestial and atmospheric entities require the definite article 'the' ('the ozone layer', 'the sun')."
          },
          {
            "id": "articles-determiners_ex1_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological progress has fundamentally altered the way modern society consumes news and cultural entertainment.",
            "correctSequence": [
              "Technological progress has fundamentally",
              "altered the way modern society",
              "consumes news and cultural",
              "entertainment."
            ],
            "shuffledTokens": [
              "altered the way modern society",
              "Technological progress has fundamentally",
              "consumes news and cultural",
              "entertainment."
            ],
            "explanation": "Generic uncountables ('Technological progress', 'society') take zero article."
          },
          {
            "id": "articles-determiners_ex1_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial increase in the price of petroleum commodities inevitably triggers domestic inflationary pressures.",
            "correctSequence": [
              "A substantial increase in the",
              "price of petroleum commodities",
              "inevitably triggers domestic",
              "inflationary pressures."
            ],
            "shuffledTokens": [
              "price of petroleum commodities",
              "A substantial increase in the",
              "inevitably triggers domestic",
              "inflationary pressures."
            ],
            "explanation": "A singular countable noun ('increase') modified by an adjective takes the indefinite article 'A'."
          },
          {
            "id": "articles-determiners_ex1_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The Pacific Ocean accommodates some of the deepest oceanic trenches and hydrothermal vent ecosystems.",
            "correctSequence": [
              "The Pacific Ocean accommodates some",
              "of the deepest oceanic trenches",
              "and hydrothermal vent",
              "ecosystems."
            ],
            "shuffledTokens": [
              "of the deepest oceanic trenches",
              "The Pacific Ocean accommodates some",
              "and hydrothermal vent",
              "ecosystems."
            ],
            "explanation": "Oceans, seas, and rivers take the definite article 'the' ('The Pacific Ocean')."
          },
          {
            "id": "articles-determiners_ex1_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "University students are encouraged to engage in independent inquiry rather than passive rote memorization.",
            "correctSequence": [
              "University students are encouraged",
              "to engage in independent inquiry",
              "rather than passive rote",
              "memorization."
            ],
            "shuffledTokens": [
              "to engage in independent inquiry",
              "University students are encouraged",
              "rather than passive rote",
              "memorization."
            ],
            "explanation": "General plural subjects ('University students') speaking collectively take zero article."
          },
          {
            "id": "articles-determiners_ex1_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The government must implement an equitable progressive taxation system to fund public healthcare facilities.",
            "correctSequence": [
              "The government must implement an",
              "equitable progressive taxation system",
              "to fund public healthcare",
              "facilities."
            ],
            "shuffledTokens": [
              "equitable progressive taxation system",
              "The government must implement an",
              "to fund public healthcare",
              "facilities."
            ],
            "explanation": "'The government' takes 'the', and 'equitable system' takes the indefinite article 'an' before a vowel sound."
          },
          {
            "id": "articles-determiners_ex1_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ education is widely acknowledged as the primary engine of social mobility.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "Ø (Zero article)",
              "The",
              "An",
              "A"
            ],
            "explanation": "Abstract uncountable nouns used in a general sense take zero article."
          },
          {
            "id": "articles-determiners_ex1_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ education of underprivileged children requires subsidized community transport.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "An",
              "Ø (Zero article)",
              "The",
              "A"
            ],
            "explanation": "The abstract noun 'education' is restricted by 'of underprivileged children', requiring 'The'."
          },
          {
            "id": "articles-determiners_ex1_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Netherlands has implemented advanced flood mitigation dyke infrastructure.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "A",
              "The",
              "An",
              "Ø (Zero article)"
            ],
            "explanation": "Countries with plural names ('the Netherlands', 'the Philippines') take 'The'."
          },
          {
            "id": "articles-determiners_ex1_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Germany is recognized as a European pioneer in automotive engineering.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Singular country names without 'Kingdom/Republic/States' take zero article."
          },
          {
            "id": "articles-determiners_ex1_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research team conducted geological surveys in ___ Himalayas.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "Mountain ranges take the definite article 'the'."
          },
          {
            "id": "articles-determiners_ex1_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Climbers attempted to scale ___ Mount Kilimanjaro during the dry season.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "Individual mountain peaks take zero article ('Mount Kilimanjaro')."
          },
          {
            "id": "articles-determiners_ex1_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Harmful radiation is filtered out by ___ ozone layer.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "Ø (Zero article)",
              "a",
              "the",
              "an"
            ],
            "explanation": "Unique planetary and celestial phenomena take 'the' ('the ozone layer')."
          },
          {
            "id": "articles-determiners_ex1_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Access to ___ clean water is considered a fundamental human right.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "an",
              "Ø (Zero article)",
              "a",
              "the"
            ],
            "explanation": "Uncountable nouns referred to generically take zero article."
          },
          {
            "id": "articles-determiners_ex1_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ water collected from the municipal well was tested for lead contaminants.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "An",
              "Ø (Zero article)",
              "The",
              "A"
            ],
            "explanation": "Specific water from an identifiable source requires 'The'."
          },
          {
            "id": "articles-determiners_ex1_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The company reported ___ unprecedented increase in annual profits.",
            "answer": "an",
            "acceptableAnswers": [
              "an",
              "an",
              "AN"
            ],
            "options": [
              "a",
              "Ø (Zero article)",
              "an",
              "the"
            ],
            "explanation": "A singular countable noun beginning with a vowel sound takes 'an' ('an unprecedented increase')."
          }
        ]
      },
      {
        "id": "articles-determiners_ex_2",
        "number": 2,
        "title": "Exercise 2",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "articles-determiners_ex2_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The education of young girls in remote rural districts requires specialized governmental scholarship programs.",
            "correctSequence": [
              "The education of young girls in",
              "remote rural districts requires",
              "specialized governmental scholarship",
              "programs."
            ],
            "shuffledTokens": [
              "specialized governmental scholarship",
              "remote rural districts requires",
              "programs.",
              "The education of young girls in"
            ],
            "explanation": "When an abstract noun is restricted by an of-phrase ('The education of young girls'), it takes 'the'."
          },
          {
            "id": "articles-determiners_ex2_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Mount Everest attracts hundreds of intrepid mountaineers to the Himalayas every spring season.",
            "correctSequence": [
              "Mount Everest attracts hundreds of",
              "intrepid mountaineers to the",
              "Himalayas every spring season."
            ],
            "shuffledTokens": [
              "intrepid mountaineers to the",
              "Himalayas every spring season.",
              "Mount Everest attracts hundreds of"
            ],
            "explanation": "Individual mountain peaks take zero article ('Mount Everest'), whereas mountain ranges take 'the' ('the Himalayas')."
          },
          {
            "id": "articles-determiners_ex2_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ozone layer serves as an indispensable cosmic shield against lethal ultraviolet radiation from the sun.",
            "correctSequence": [
              "The ozone layer serves as an",
              "indispensable cosmic shield against",
              "lethal ultraviolet radiation",
              "from the sun."
            ],
            "shuffledTokens": [
              "indispensable cosmic shield against",
              "from the sun.",
              "The ozone layer serves as an",
              "lethal ultraviolet radiation"
            ],
            "explanation": "Unique celestial and atmospheric entities require the definite article 'the' ('the ozone layer', 'the sun')."
          },
          {
            "id": "articles-determiners_ex2_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological progress has fundamentally altered the way modern society consumes news and cultural entertainment.",
            "correctSequence": [
              "Technological progress has fundamentally",
              "altered the way modern society",
              "consumes news and cultural",
              "entertainment."
            ],
            "shuffledTokens": [
              "altered the way modern society",
              "entertainment.",
              "Technological progress has fundamentally",
              "consumes news and cultural"
            ],
            "explanation": "Generic uncountables ('Technological progress', 'society') take zero article."
          },
          {
            "id": "articles-determiners_ex2_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial increase in the price of petroleum commodities inevitably triggers domestic inflationary pressures.",
            "correctSequence": [
              "A substantial increase in the",
              "price of petroleum commodities",
              "inevitably triggers domestic",
              "inflationary pressures."
            ],
            "shuffledTokens": [
              "inflationary pressures.",
              "A substantial increase in the",
              "price of petroleum commodities",
              "inevitably triggers domestic"
            ],
            "explanation": "A singular countable noun ('increase') modified by an adjective takes the indefinite article 'A'."
          },
          {
            "id": "articles-determiners_ex2_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The Pacific Ocean accommodates some of the deepest oceanic trenches and hydrothermal vent ecosystems.",
            "correctSequence": [
              "The Pacific Ocean accommodates some",
              "of the deepest oceanic trenches",
              "and hydrothermal vent",
              "ecosystems."
            ],
            "shuffledTokens": [
              "and hydrothermal vent",
              "The Pacific Ocean accommodates some",
              "of the deepest oceanic trenches",
              "ecosystems."
            ],
            "explanation": "Oceans, seas, and rivers take the definite article 'the' ('The Pacific Ocean')."
          },
          {
            "id": "articles-determiners_ex2_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "University students are encouraged to engage in independent inquiry rather than passive rote memorization.",
            "correctSequence": [
              "University students are encouraged",
              "to engage in independent inquiry",
              "rather than passive rote",
              "memorization."
            ],
            "shuffledTokens": [
              "rather than passive rote",
              "University students are encouraged",
              "to engage in independent inquiry",
              "memorization."
            ],
            "explanation": "General plural subjects ('University students') speaking collectively take zero article."
          },
          {
            "id": "articles-determiners_ex2_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The government must implement an equitable progressive taxation system to fund public healthcare facilities.",
            "correctSequence": [
              "The government must implement an",
              "equitable progressive taxation system",
              "to fund public healthcare",
              "facilities."
            ],
            "shuffledTokens": [
              "equitable progressive taxation system",
              "The government must implement an",
              "to fund public healthcare",
              "facilities."
            ],
            "explanation": "'The government' takes 'the', and 'equitable system' takes the indefinite article 'an' before a vowel sound."
          },
          {
            "id": "articles-determiners_ex2_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Lake Victoria is one of the largest freshwater reservoirs in the African continent and the world.",
            "correctSequence": [
              "Lake Victoria is one of the",
              "largest freshwater reservoirs in",
              "the African continent and",
              "the world."
            ],
            "shuffledTokens": [
              "largest freshwater reservoirs in",
              "Lake Victoria is one of the",
              "the African continent and",
              "the world."
            ],
            "explanation": "Individual lakes take zero article ('Lake Victoria'), while 'world' takes 'the'."
          },
          {
            "id": "articles-determiners_ex2_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Crime and juvenile delinquency are symptoms of systemic socioeconomic inequality within contemporary metropolises.",
            "correctSequence": [
              "Crime and juvenile delinquency are",
              "symptoms of systemic socioeconomic",
              "inequality within contemporary",
              "metropolises."
            ],
            "shuffledTokens": [
              "symptoms of systemic socioeconomic",
              "Crime and juvenile delinquency are",
              "inequality within contemporary",
              "metropolises."
            ],
            "explanation": "Abstract general concepts functioning as subjects take zero article."
          },
          {
            "id": "articles-determiners_ex2_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Netherlands has implemented advanced flood mitigation dyke infrastructure.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "A",
              "The",
              "An",
              "Ø (Zero article)"
            ],
            "explanation": "Countries with plural names ('the Netherlands', 'the Philippines') take 'The'."
          },
          {
            "id": "articles-determiners_ex2_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Germany is recognized as a European pioneer in automotive engineering.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Singular country names without 'Kingdom/Republic/States' take zero article."
          },
          {
            "id": "articles-determiners_ex2_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research team conducted geological surveys in ___ Himalayas.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "Mountain ranges take the definite article 'the'."
          },
          {
            "id": "articles-determiners_ex2_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Climbers attempted to scale ___ Mount Kilimanjaro during the dry season.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "Ø (Zero article)",
              "a",
              "the",
              "an"
            ],
            "explanation": "Individual mountain peaks take zero article ('Mount Kilimanjaro')."
          },
          {
            "id": "articles-determiners_ex2_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Harmful radiation is filtered out by ___ ozone layer.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "the",
              "an",
              "a",
              "Ø (Zero article)"
            ],
            "explanation": "Unique planetary and celestial phenomena take 'the' ('the ozone layer')."
          },
          {
            "id": "articles-determiners_ex2_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Access to ___ clean water is considered a fundamental human right.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "Ø (Zero article)",
              "the",
              "an",
              "a"
            ],
            "explanation": "Uncountable nouns referred to generically take zero article."
          },
          {
            "id": "articles-determiners_ex2_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ water collected from the municipal well was tested for lead contaminants.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "An",
              "Ø (Zero article)",
              "The",
              "A"
            ],
            "explanation": "Specific water from an identifiable source requires 'The'."
          },
          {
            "id": "articles-determiners_ex2_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The company reported ___ unprecedented increase in annual profits.",
            "answer": "an",
            "acceptableAnswers": [
              "an",
              "an",
              "AN"
            ],
            "options": [
              "a",
              "the",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "A singular countable noun beginning with a vowel sound takes 'an' ('an unprecedented increase')."
          },
          {
            "id": "articles-determiners_ex2_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Students who attend ___ university acquire vital analytical and vocational proficiencies.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "'University' referenced for its primary educational purpose takes zero article."
          },
          {
            "id": "articles-determiners_ex2_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lecture will be held at ___ University of Oxford next Tuesday.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "Universities named with 'the University of [Place]' require the definite article 'the'."
          }
        ]
      },
      {
        "id": "articles-determiners_ex_3",
        "number": 3,
        "title": "Exercise 3",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "articles-determiners_ex3_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ozone layer serves as an indispensable cosmic shield against lethal ultraviolet radiation from the sun.",
            "correctSequence": [
              "The ozone layer serves as an",
              "indispensable cosmic shield against",
              "lethal ultraviolet radiation",
              "from the sun."
            ],
            "shuffledTokens": [
              "The ozone layer serves as an",
              "lethal ultraviolet radiation",
              "from the sun.",
              "indispensable cosmic shield against"
            ],
            "explanation": "Unique celestial and atmospheric entities require the definite article 'the' ('the ozone layer', 'the sun')."
          },
          {
            "id": "articles-determiners_ex3_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological progress has fundamentally altered the way modern society consumes news and cultural entertainment.",
            "correctSequence": [
              "Technological progress has fundamentally",
              "altered the way modern society",
              "consumes news and cultural",
              "entertainment."
            ],
            "shuffledTokens": [
              "entertainment.",
              "consumes news and cultural",
              "altered the way modern society",
              "Technological progress has fundamentally"
            ],
            "explanation": "Generic uncountables ('Technological progress', 'society') take zero article."
          },
          {
            "id": "articles-determiners_ex3_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial increase in the price of petroleum commodities inevitably triggers domestic inflationary pressures.",
            "correctSequence": [
              "A substantial increase in the",
              "price of petroleum commodities",
              "inevitably triggers domestic",
              "inflationary pressures."
            ],
            "shuffledTokens": [
              "inflationary pressures.",
              "inevitably triggers domestic",
              "price of petroleum commodities",
              "A substantial increase in the"
            ],
            "explanation": "A singular countable noun ('increase') modified by an adjective takes the indefinite article 'A'."
          },
          {
            "id": "articles-determiners_ex3_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The Pacific Ocean accommodates some of the deepest oceanic trenches and hydrothermal vent ecosystems.",
            "correctSequence": [
              "The Pacific Ocean accommodates some",
              "of the deepest oceanic trenches",
              "and hydrothermal vent",
              "ecosystems."
            ],
            "shuffledTokens": [
              "and hydrothermal vent",
              "of the deepest oceanic trenches",
              "ecosystems.",
              "The Pacific Ocean accommodates some"
            ],
            "explanation": "Oceans, seas, and rivers take the definite article 'the' ('The Pacific Ocean')."
          },
          {
            "id": "articles-determiners_ex3_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "University students are encouraged to engage in independent inquiry rather than passive rote memorization.",
            "correctSequence": [
              "University students are encouraged",
              "to engage in independent inquiry",
              "rather than passive rote",
              "memorization."
            ],
            "shuffledTokens": [
              "rather than passive rote",
              "memorization.",
              "University students are encouraged",
              "to engage in independent inquiry"
            ],
            "explanation": "General plural subjects ('University students') speaking collectively take zero article."
          },
          {
            "id": "articles-determiners_ex3_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The government must implement an equitable progressive taxation system to fund public healthcare facilities.",
            "correctSequence": [
              "The government must implement an",
              "equitable progressive taxation system",
              "to fund public healthcare",
              "facilities."
            ],
            "shuffledTokens": [
              "facilities.",
              "to fund public healthcare",
              "The government must implement an",
              "equitable progressive taxation system"
            ],
            "explanation": "'The government' takes 'the', and 'equitable system' takes the indefinite article 'an' before a vowel sound."
          },
          {
            "id": "articles-determiners_ex3_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Lake Victoria is one of the largest freshwater reservoirs in the African continent and the world.",
            "correctSequence": [
              "Lake Victoria is one of the",
              "largest freshwater reservoirs in",
              "the African continent and",
              "the world."
            ],
            "shuffledTokens": [
              "largest freshwater reservoirs in",
              "the world.",
              "Lake Victoria is one of the",
              "the African continent and"
            ],
            "explanation": "Individual lakes take zero article ('Lake Victoria'), while 'world' takes 'the'."
          },
          {
            "id": "articles-determiners_ex3_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Crime and juvenile delinquency are symptoms of systemic socioeconomic inequality within contemporary metropolises.",
            "correctSequence": [
              "Crime and juvenile delinquency are",
              "symptoms of systemic socioeconomic",
              "inequality within contemporary",
              "metropolises."
            ],
            "shuffledTokens": [
              "symptoms of systemic socioeconomic",
              "metropolises.",
              "Crime and juvenile delinquency are",
              "inequality within contemporary"
            ],
            "explanation": "Abstract general concepts functioning as subjects take zero article."
          },
          {
            "id": "articles-determiners_ex3_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The crime rate in the southern districts escalated dramatically following the industrial shutdown of the shipyards.",
            "correctSequence": [
              "The crime rate in the southern",
              "districts escalated dramatically following",
              "the industrial shutdown of",
              "the shipyards."
            ],
            "shuffledTokens": [
              "the industrial shutdown of",
              "The crime rate in the southern",
              "districts escalated dramatically following",
              "the shipyards."
            ],
            "explanation": "When 'crime' is specified as a measurable statistic ('The crime rate in...'), it takes 'The'."
          },
          {
            "id": "articles-determiners_ex3_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientific research requires rigorous adherence to ethical principles and empirical validation standards.",
            "correctSequence": [
              "Scientific research requires rigorous",
              "adherence to ethical principles",
              "and empirical validation",
              "standards."
            ],
            "shuffledTokens": [
              "and empirical validation",
              "Scientific research requires rigorous",
              "adherence to ethical principles",
              "standards."
            ],
            "explanation": "Plural and uncountable concepts used in generalized statements take zero article."
          },
          {
            "id": "articles-determiners_ex3_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research team conducted geological surveys in ___ Himalayas.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "Mountain ranges take the definite article 'the'."
          },
          {
            "id": "articles-determiners_ex3_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Climbers attempted to scale ___ Mount Kilimanjaro during the dry season.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "an",
              "a",
              "the",
              "Ø (Zero article)"
            ],
            "explanation": "Individual mountain peaks take zero article ('Mount Kilimanjaro')."
          },
          {
            "id": "articles-determiners_ex3_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Harmful radiation is filtered out by ___ ozone layer.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "an",
              "Ø (Zero article)",
              "a",
              "the"
            ],
            "explanation": "Unique planetary and celestial phenomena take 'the' ('the ozone layer')."
          },
          {
            "id": "articles-determiners_ex3_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Access to ___ clean water is considered a fundamental human right.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "an",
              "Ø (Zero article)",
              "the",
              "a"
            ],
            "explanation": "Uncountable nouns referred to generically take zero article."
          },
          {
            "id": "articles-determiners_ex3_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ water collected from the municipal well was tested for lead contaminants.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "A",
              "An",
              "Ø (Zero article)",
              "The"
            ],
            "explanation": "Specific water from an identifiable source requires 'The'."
          },
          {
            "id": "articles-determiners_ex3_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The company reported ___ unprecedented increase in annual profits.",
            "answer": "an",
            "acceptableAnswers": [
              "an",
              "an",
              "AN"
            ],
            "options": [
              "a",
              "the",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "A singular countable noun beginning with a vowel sound takes 'an' ('an unprecedented increase')."
          },
          {
            "id": "articles-determiners_ex3_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Students who attend ___ university acquire vital analytical and vocational proficiencies.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "'University' referenced for its primary educational purpose takes zero article."
          },
          {
            "id": "articles-determiners_ex3_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lecture will be held at ___ University of Oxford next Tuesday.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "Universities named with 'the University of [Place]' require the definite article 'the'."
          },
          {
            "id": "articles-determiners_ex3_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Pacific Ocean accounts for more than thirty percent of Earth's surface.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "Ø (Zero article)",
              "A",
              "The",
              "An"
            ],
            "explanation": "Names of oceans, seas, and rivers require the definite article 'The'."
          },
          {
            "id": "articles-determiners_ex3_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Volunteers traveled to ___ Lake Baikal to survey rare endemic seal habitats.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "the",
              "an",
              "a",
              "Ø (Zero article)"
            ],
            "explanation": "Individual lakes take zero article ('Lake Baikal')."
          }
        ]
      },
      {
        "id": "articles-determiners_ex_4",
        "number": 4,
        "title": "Exercise 4",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "articles-determiners_ex4_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial increase in the price of petroleum commodities inevitably triggers domestic inflationary pressures.",
            "correctSequence": [
              "A substantial increase in the",
              "price of petroleum commodities",
              "inevitably triggers domestic",
              "inflationary pressures."
            ],
            "shuffledTokens": [
              "A substantial increase in the",
              "price of petroleum commodities",
              "inflationary pressures.",
              "inevitably triggers domestic"
            ],
            "explanation": "A singular countable noun ('increase') modified by an adjective takes the indefinite article 'A'."
          },
          {
            "id": "articles-determiners_ex4_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The Pacific Ocean accommodates some of the deepest oceanic trenches and hydrothermal vent ecosystems.",
            "correctSequence": [
              "The Pacific Ocean accommodates some",
              "of the deepest oceanic trenches",
              "and hydrothermal vent",
              "ecosystems."
            ],
            "shuffledTokens": [
              "The Pacific Ocean accommodates some",
              "of the deepest oceanic trenches",
              "ecosystems.",
              "and hydrothermal vent"
            ],
            "explanation": "Oceans, seas, and rivers take the definite article 'the' ('The Pacific Ocean')."
          },
          {
            "id": "articles-determiners_ex4_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "University students are encouraged to engage in independent inquiry rather than passive rote memorization.",
            "correctSequence": [
              "University students are encouraged",
              "to engage in independent inquiry",
              "rather than passive rote",
              "memorization."
            ],
            "shuffledTokens": [
              "University students are encouraged",
              "memorization.",
              "rather than passive rote",
              "to engage in independent inquiry"
            ],
            "explanation": "General plural subjects ('University students') speaking collectively take zero article."
          },
          {
            "id": "articles-determiners_ex4_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The government must implement an equitable progressive taxation system to fund public healthcare facilities.",
            "correctSequence": [
              "The government must implement an",
              "equitable progressive taxation system",
              "to fund public healthcare",
              "facilities."
            ],
            "shuffledTokens": [
              "The government must implement an",
              "facilities.",
              "to fund public healthcare",
              "equitable progressive taxation system"
            ],
            "explanation": "'The government' takes 'the', and 'equitable system' takes the indefinite article 'an' before a vowel sound."
          },
          {
            "id": "articles-determiners_ex4_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Lake Victoria is one of the largest freshwater reservoirs in the African continent and the world.",
            "correctSequence": [
              "Lake Victoria is one of the",
              "largest freshwater reservoirs in",
              "the African continent and",
              "the world."
            ],
            "shuffledTokens": [
              "the world.",
              "the African continent and",
              "largest freshwater reservoirs in",
              "Lake Victoria is one of the"
            ],
            "explanation": "Individual lakes take zero article ('Lake Victoria'), while 'world' takes 'the'."
          },
          {
            "id": "articles-determiners_ex4_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Crime and juvenile delinquency are symptoms of systemic socioeconomic inequality within contemporary metropolises.",
            "correctSequence": [
              "Crime and juvenile delinquency are",
              "symptoms of systemic socioeconomic",
              "inequality within contemporary",
              "metropolises."
            ],
            "shuffledTokens": [
              "metropolises.",
              "inequality within contemporary",
              "symptoms of systemic socioeconomic",
              "Crime and juvenile delinquency are"
            ],
            "explanation": "Abstract general concepts functioning as subjects take zero article."
          },
          {
            "id": "articles-determiners_ex4_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The crime rate in the southern districts escalated dramatically following the industrial shutdown of the shipyards.",
            "correctSequence": [
              "The crime rate in the southern",
              "districts escalated dramatically following",
              "the industrial shutdown of",
              "the shipyards."
            ],
            "shuffledTokens": [
              "the shipyards.",
              "the industrial shutdown of",
              "districts escalated dramatically following",
              "The crime rate in the southern"
            ],
            "explanation": "When 'crime' is specified as a measurable statistic ('The crime rate in...'), it takes 'The'."
          },
          {
            "id": "articles-determiners_ex4_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientific research requires rigorous adherence to ethical principles and empirical validation standards.",
            "correctSequence": [
              "Scientific research requires rigorous",
              "adherence to ethical principles",
              "and empirical validation",
              "standards."
            ],
            "shuffledTokens": [
              "and empirical validation",
              "adherence to ethical principles",
              "standards.",
              "Scientific research requires rigorous"
            ],
            "explanation": "Plural and uncountable concepts used in generalized statements take zero article."
          },
          {
            "id": "articles-determiners_ex4_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The research conducted by Dr. Vance demonstrated remarkable breakthroughs in cellular regeneration and immunology.",
            "correctSequence": [
              "The research conducted by Dr. Vance",
              "demonstrated remarkable breakthroughs in",
              "cellular regeneration and",
              "immunology."
            ],
            "shuffledTokens": [
              "immunology.",
              "cellular regeneration and",
              "The research conducted by Dr. Vance",
              "demonstrated remarkable breakthroughs in"
            ],
            "explanation": "Specific research restricted by an identifying phrase takes 'The research conducted by...'"
          },
          {
            "id": "articles-determiners_ex4_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Clean water is an indispensable prerequisite for human survival and municipal health across all nations.",
            "correctSequence": [
              "Clean water is an indispensable",
              "prerequisite for human survival",
              "and municipal health across",
              "all nations."
            ],
            "shuffledTokens": [
              "prerequisite for human survival",
              "all nations.",
              "Clean water is an indispensable",
              "and municipal health across"
            ],
            "explanation": "'Water' as an uncountable generic substance takes zero article; 'prerequisite' takes 'an'."
          },
          {
            "id": "articles-determiners_ex4_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Harmful radiation is filtered out by ___ ozone layer.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "Ø (Zero article)",
              "the",
              "an",
              "a"
            ],
            "explanation": "Unique planetary and celestial phenomena take 'the' ('the ozone layer')."
          },
          {
            "id": "articles-determiners_ex4_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Access to ___ clean water is considered a fundamental human right.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "an",
              "Ø (Zero article)",
              "the",
              "a"
            ],
            "explanation": "Uncountable nouns referred to generically take zero article."
          },
          {
            "id": "articles-determiners_ex4_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ water collected from the municipal well was tested for lead contaminants.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "A",
              "The",
              "An",
              "Ø (Zero article)"
            ],
            "explanation": "Specific water from an identifiable source requires 'The'."
          },
          {
            "id": "articles-determiners_ex4_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The company reported ___ unprecedented increase in annual profits.",
            "answer": "an",
            "acceptableAnswers": [
              "an",
              "an",
              "AN"
            ],
            "options": [
              "the",
              "a",
              "an",
              "Ø (Zero article)"
            ],
            "explanation": "A singular countable noun beginning with a vowel sound takes 'an' ('an unprecedented increase')."
          },
          {
            "id": "articles-determiners_ex4_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Students who attend ___ university acquire vital analytical and vocational proficiencies.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "'University' referenced for its primary educational purpose takes zero article."
          },
          {
            "id": "articles-determiners_ex4_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lecture will be held at ___ University of Oxford next Tuesday.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "Universities named with 'the University of [Place]' require the definite article 'the'."
          },
          {
            "id": "articles-determiners_ex4_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Pacific Ocean accounts for more than thirty percent of Earth's surface.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "An",
              "A",
              "The",
              "Ø (Zero article)"
            ],
            "explanation": "Names of oceans, seas, and rivers require the definite article 'The'."
          },
          {
            "id": "articles-determiners_ex4_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Volunteers traveled to ___ Lake Baikal to survey rare endemic seal habitats.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "an",
              "Ø (Zero article)",
              "a",
              "the"
            ],
            "explanation": "Individual lakes take zero article ('Lake Baikal')."
          },
          {
            "id": "articles-determiners_ex4_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ artificial intelligence has transformed contemporary data analysis.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "An",
              "Ø (Zero article)",
              "The",
              "A"
            ],
            "explanation": "Broad academic fields and technical subjects take zero article in general statements."
          },
          {
            "id": "articles-determiners_ex4_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ artificial intelligence developed by the laboratory outperformed human diagnosticians.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "A",
              "An",
              "Ø (Zero article)",
              "The"
            ],
            "explanation": "Specific AI identified by a relative clause takes 'The'."
          }
        ]
      },
      {
        "id": "articles-determiners_ex_5",
        "number": 5,
        "title": "Exercise 5",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "articles-determiners_ex5_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "University students are encouraged to engage in independent inquiry rather than passive rote memorization.",
            "correctSequence": [
              "University students are encouraged",
              "to engage in independent inquiry",
              "rather than passive rote",
              "memorization."
            ],
            "shuffledTokens": [
              "to engage in independent inquiry",
              "University students are encouraged",
              "rather than passive rote",
              "memorization."
            ],
            "explanation": "General plural subjects ('University students') speaking collectively take zero article."
          },
          {
            "id": "articles-determiners_ex5_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The government must implement an equitable progressive taxation system to fund public healthcare facilities.",
            "correctSequence": [
              "The government must implement an",
              "equitable progressive taxation system",
              "to fund public healthcare",
              "facilities."
            ],
            "shuffledTokens": [
              "equitable progressive taxation system",
              "The government must implement an",
              "to fund public healthcare",
              "facilities."
            ],
            "explanation": "'The government' takes 'the', and 'equitable system' takes the indefinite article 'an' before a vowel sound."
          },
          {
            "id": "articles-determiners_ex5_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Lake Victoria is one of the largest freshwater reservoirs in the African continent and the world.",
            "correctSequence": [
              "Lake Victoria is one of the",
              "largest freshwater reservoirs in",
              "the African continent and",
              "the world."
            ],
            "shuffledTokens": [
              "largest freshwater reservoirs in",
              "Lake Victoria is one of the",
              "the African continent and",
              "the world."
            ],
            "explanation": "Individual lakes take zero article ('Lake Victoria'), while 'world' takes 'the'."
          },
          {
            "id": "articles-determiners_ex5_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Crime and juvenile delinquency are symptoms of systemic socioeconomic inequality within contemporary metropolises.",
            "correctSequence": [
              "Crime and juvenile delinquency are",
              "symptoms of systemic socioeconomic",
              "inequality within contemporary",
              "metropolises."
            ],
            "shuffledTokens": [
              "symptoms of systemic socioeconomic",
              "Crime and juvenile delinquency are",
              "inequality within contemporary",
              "metropolises."
            ],
            "explanation": "Abstract general concepts functioning as subjects take zero article."
          },
          {
            "id": "articles-determiners_ex5_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The crime rate in the southern districts escalated dramatically following the industrial shutdown of the shipyards.",
            "correctSequence": [
              "The crime rate in the southern",
              "districts escalated dramatically following",
              "the industrial shutdown of",
              "the shipyards."
            ],
            "shuffledTokens": [
              "The crime rate in the southern",
              "districts escalated dramatically following",
              "the shipyards.",
              "the industrial shutdown of"
            ],
            "explanation": "When 'crime' is specified as a measurable statistic ('The crime rate in...'), it takes 'The'."
          },
          {
            "id": "articles-determiners_ex5_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientific research requires rigorous adherence to ethical principles and empirical validation standards.",
            "correctSequence": [
              "Scientific research requires rigorous",
              "adherence to ethical principles",
              "and empirical validation",
              "standards."
            ],
            "shuffledTokens": [
              "Scientific research requires rigorous",
              "adherence to ethical principles",
              "standards.",
              "and empirical validation"
            ],
            "explanation": "Plural and uncountable concepts used in generalized statements take zero article."
          },
          {
            "id": "articles-determiners_ex5_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The research conducted by Dr. Vance demonstrated remarkable breakthroughs in cellular regeneration and immunology.",
            "correctSequence": [
              "The research conducted by Dr. Vance",
              "demonstrated remarkable breakthroughs in",
              "cellular regeneration and",
              "immunology."
            ],
            "shuffledTokens": [
              "The research conducted by Dr. Vance",
              "immunology.",
              "cellular regeneration and",
              "demonstrated remarkable breakthroughs in"
            ],
            "explanation": "Specific research restricted by an identifying phrase takes 'The research conducted by...'"
          },
          {
            "id": "articles-determiners_ex5_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Clean water is an indispensable prerequisite for human survival and municipal health across all nations.",
            "correctSequence": [
              "Clean water is an indispensable",
              "prerequisite for human survival",
              "and municipal health across",
              "all nations."
            ],
            "shuffledTokens": [
              "Clean water is an indispensable",
              "all nations.",
              "and municipal health across",
              "prerequisite for human survival"
            ],
            "explanation": "'Water' as an uncountable generic substance takes zero article; 'prerequisite' takes 'an'."
          },
          {
            "id": "articles-determiners_ex5_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The water in the municipal reservoir was contaminated with industrial chemical effluents following the flash flood.",
            "correctSequence": [
              "The water in the municipal reservoir",
              "was contaminated with industrial",
              "chemical effluents following",
              "the flash flood."
            ],
            "shuffledTokens": [
              "the flash flood.",
              "chemical effluents following",
              "was contaminated with industrial",
              "The water in the municipal reservoir"
            ],
            "explanation": "Specific water in an identifiable reservoir takes the definite article 'The water'."
          },
          {
            "id": "articles-determiners_ex5_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The United Kingdom and the Netherlands signed a bilateral accord on offshore wind energy production.",
            "correctSequence": [
              "The United Kingdom and the",
              "Netherlands signed a bilateral",
              "accord on offshore wind",
              "energy production."
            ],
            "shuffledTokens": [
              "energy production.",
              "accord on offshore wind",
              "Netherlands signed a bilateral",
              "The United Kingdom and the"
            ],
            "explanation": "Names of countries featuring plural nouns or unions take 'the' ('the UK', 'the Netherlands')."
          },
          {
            "id": "articles-determiners_ex5_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ water collected from the municipal well was tested for lead contaminants.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Specific water from an identifiable source requires 'The'."
          },
          {
            "id": "articles-determiners_ex5_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The company reported ___ unprecedented increase in annual profits.",
            "answer": "an",
            "acceptableAnswers": [
              "an",
              "an",
              "AN"
            ],
            "options": [
              "the",
              "a",
              "an",
              "Ø (Zero article)"
            ],
            "explanation": "A singular countable noun beginning with a vowel sound takes 'an' ('an unprecedented increase')."
          },
          {
            "id": "articles-determiners_ex5_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Students who attend ___ university acquire vital analytical and vocational proficiencies.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "'University' referenced for its primary educational purpose takes zero article."
          },
          {
            "id": "articles-determiners_ex5_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lecture will be held at ___ University of Oxford next Tuesday.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "Ø (Zero article)",
              "a",
              "the",
              "an"
            ],
            "explanation": "Universities named with 'the University of [Place]' require the definite article 'the'."
          },
          {
            "id": "articles-determiners_ex5_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Pacific Ocean accounts for more than thirty percent of Earth's surface.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "The",
              "An",
              "A",
              "Ø (Zero article)"
            ],
            "explanation": "Names of oceans, seas, and rivers require the definite article 'The'."
          },
          {
            "id": "articles-determiners_ex5_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Volunteers traveled to ___ Lake Baikal to survey rare endemic seal habitats.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "Ø (Zero article)",
              "the",
              "an",
              "a"
            ],
            "explanation": "Individual lakes take zero article ('Lake Baikal')."
          },
          {
            "id": "articles-determiners_ex5_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ artificial intelligence has transformed contemporary data analysis.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "An",
              "Ø (Zero article)",
              "The",
              "A"
            ],
            "explanation": "Broad academic fields and technical subjects take zero article in general statements."
          },
          {
            "id": "articles-determiners_ex5_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ artificial intelligence developed by the laboratory outperformed human diagnosticians.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "A",
              "The",
              "An",
              "Ø (Zero article)"
            ],
            "explanation": "Specific AI identified by a relative clause takes 'The'."
          },
          {
            "id": "articles-determiners_ex5_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The committee reached ___ unanimous verdict after four hours of debate.",
            "answer": "a",
            "acceptableAnswers": [
              "a",
              "a",
              "A"
            ],
            "options": [
              "an",
              "a",
              "the",
              "Ø (Zero article)"
            ],
            "explanation": "'Unanimous' begins with the consonant sound /j/, so it takes 'a', not 'an'."
          },
          {
            "id": "articles-determiners_ex5_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Candidates must possess ___ university degree in an affiliated discipline.",
            "answer": "a",
            "acceptableAnswers": [
              "a",
              "a",
              "A"
            ],
            "options": [
              "an",
              "a",
              "the",
              "Ø (Zero article)"
            ],
            "explanation": "'University' begins with a consonant sound (/j/), requiring 'a'."
          }
        ]
      },
      {
        "id": "articles-determiners_ex_6",
        "number": 6,
        "title": "Exercise 6",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "articles-determiners_ex6_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Lake Victoria is one of the largest freshwater reservoirs in the African continent and the world.",
            "correctSequence": [
              "Lake Victoria is one of the",
              "largest freshwater reservoirs in",
              "the African continent and",
              "the world."
            ],
            "shuffledTokens": [
              "largest freshwater reservoirs in",
              "Lake Victoria is one of the",
              "the African continent and",
              "the world."
            ],
            "explanation": "Individual lakes take zero article ('Lake Victoria'), while 'world' takes 'the'."
          },
          {
            "id": "articles-determiners_ex6_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Crime and juvenile delinquency are symptoms of systemic socioeconomic inequality within contemporary metropolises.",
            "correctSequence": [
              "Crime and juvenile delinquency are",
              "symptoms of systemic socioeconomic",
              "inequality within contemporary",
              "metropolises."
            ],
            "shuffledTokens": [
              "symptoms of systemic socioeconomic",
              "Crime and juvenile delinquency are",
              "inequality within contemporary",
              "metropolises."
            ],
            "explanation": "Abstract general concepts functioning as subjects take zero article."
          },
          {
            "id": "articles-determiners_ex6_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The crime rate in the southern districts escalated dramatically following the industrial shutdown of the shipyards.",
            "correctSequence": [
              "The crime rate in the southern",
              "districts escalated dramatically following",
              "the industrial shutdown of",
              "the shipyards."
            ],
            "shuffledTokens": [
              "districts escalated dramatically following",
              "The crime rate in the southern",
              "the industrial shutdown of",
              "the shipyards."
            ],
            "explanation": "When 'crime' is specified as a measurable statistic ('The crime rate in...'), it takes 'The'."
          },
          {
            "id": "articles-determiners_ex6_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientific research requires rigorous adherence to ethical principles and empirical validation standards.",
            "correctSequence": [
              "Scientific research requires rigorous",
              "adherence to ethical principles",
              "and empirical validation",
              "standards."
            ],
            "shuffledTokens": [
              "adherence to ethical principles",
              "Scientific research requires rigorous",
              "and empirical validation",
              "standards."
            ],
            "explanation": "Plural and uncountable concepts used in generalized statements take zero article."
          },
          {
            "id": "articles-determiners_ex6_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The research conducted by Dr. Vance demonstrated remarkable breakthroughs in cellular regeneration and immunology.",
            "correctSequence": [
              "The research conducted by Dr. Vance",
              "demonstrated remarkable breakthroughs in",
              "cellular regeneration and",
              "immunology."
            ],
            "shuffledTokens": [
              "demonstrated remarkable breakthroughs in",
              "The research conducted by Dr. Vance",
              "cellular regeneration and",
              "immunology."
            ],
            "explanation": "Specific research restricted by an identifying phrase takes 'The research conducted by...'"
          },
          {
            "id": "articles-determiners_ex6_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Clean water is an indispensable prerequisite for human survival and municipal health across all nations.",
            "correctSequence": [
              "Clean water is an indispensable",
              "prerequisite for human survival",
              "and municipal health across",
              "all nations."
            ],
            "shuffledTokens": [
              "prerequisite for human survival",
              "Clean water is an indispensable",
              "and municipal health across",
              "all nations."
            ],
            "explanation": "'Water' as an uncountable generic substance takes zero article; 'prerequisite' takes 'an'."
          },
          {
            "id": "articles-determiners_ex6_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The water in the municipal reservoir was contaminated with industrial chemical effluents following the flash flood.",
            "correctSequence": [
              "The water in the municipal reservoir",
              "was contaminated with industrial",
              "chemical effluents following",
              "the flash flood."
            ],
            "shuffledTokens": [
              "was contaminated with industrial",
              "The water in the municipal reservoir",
              "chemical effluents following",
              "the flash flood."
            ],
            "explanation": "Specific water in an identifiable reservoir takes the definite article 'The water'."
          },
          {
            "id": "articles-determiners_ex6_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The United Kingdom and the Netherlands signed a bilateral accord on offshore wind energy production.",
            "correctSequence": [
              "The United Kingdom and the",
              "Netherlands signed a bilateral",
              "accord on offshore wind",
              "energy production."
            ],
            "shuffledTokens": [
              "The United Kingdom and the",
              "Netherlands signed a bilateral",
              "energy production.",
              "accord on offshore wind"
            ],
            "explanation": "Names of countries featuring plural nouns or unions take 'the' ('the UK', 'the Netherlands')."
          },
          {
            "id": "articles-determiners_ex6_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Education plays a paramount role in elevating impoverished families above the national poverty threshold.",
            "correctSequence": [
              "Education plays a paramount role",
              "in elevating impoverished families",
              "above the national poverty",
              "threshold."
            ],
            "shuffledTokens": [
              "Education plays a paramount role",
              "in elevating impoverished families",
              "threshold.",
              "above the national poverty"
            ],
            "explanation": "Abstract uncountable nouns used in a generic sense ('Education') take zero article."
          },
          {
            "id": "articles-determiners_ex6_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The education of young girls in remote rural districts requires specialized governmental scholarship programs.",
            "correctSequence": [
              "The education of young girls in",
              "remote rural districts requires",
              "specialized governmental scholarship",
              "programs."
            ],
            "shuffledTokens": [
              "The education of young girls in",
              "remote rural districts requires",
              "programs.",
              "specialized governmental scholarship"
            ],
            "explanation": "When an abstract noun is restricted by an of-phrase ('The education of young girls'), it takes 'the'."
          },
          {
            "id": "articles-determiners_ex6_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Students who attend ___ university acquire vital analytical and vocational proficiencies.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "the",
              "a",
              "Ø (Zero article)",
              "an"
            ],
            "explanation": "'University' referenced for its primary educational purpose takes zero article."
          },
          {
            "id": "articles-determiners_ex6_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The lecture will be held at ___ University of Oxford next Tuesday.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "an",
              "a",
              "the",
              "Ø (Zero article)"
            ],
            "explanation": "Universities named with 'the University of [Place]' require the definite article 'the'."
          },
          {
            "id": "articles-determiners_ex6_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Pacific Ocean accounts for more than thirty percent of Earth's surface.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "An",
              "Ø (Zero article)",
              "A",
              "The"
            ],
            "explanation": "Names of oceans, seas, and rivers require the definite article 'The'."
          },
          {
            "id": "articles-determiners_ex6_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Volunteers traveled to ___ Lake Baikal to survey rare endemic seal habitats.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "an",
              "Ø (Zero article)",
              "the",
              "a"
            ],
            "explanation": "Individual lakes take zero article ('Lake Baikal')."
          },
          {
            "id": "articles-determiners_ex6_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ artificial intelligence has transformed contemporary data analysis.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "A",
              "An",
              "Ø (Zero article)",
              "The"
            ],
            "explanation": "Broad academic fields and technical subjects take zero article in general statements."
          },
          {
            "id": "articles-determiners_ex6_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ artificial intelligence developed by the laboratory outperformed human diagnosticians.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Specific AI identified by a relative clause takes 'The'."
          },
          {
            "id": "articles-determiners_ex6_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The committee reached ___ unanimous verdict after four hours of debate.",
            "answer": "a",
            "acceptableAnswers": [
              "a",
              "a",
              "A"
            ],
            "options": [
              "an",
              "a",
              "the",
              "Ø (Zero article)"
            ],
            "explanation": "'Unanimous' begins with the consonant sound /j/, so it takes 'a', not 'an'."
          },
          {
            "id": "articles-determiners_ex6_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Candidates must possess ___ university degree in an affiliated discipline.",
            "answer": "a",
            "acceptableAnswers": [
              "a",
              "a",
              "A"
            ],
            "options": [
              "an",
              "a",
              "the",
              "Ø (Zero article)"
            ],
            "explanation": "'University' begins with a consonant sound (/j/), requiring 'a'."
          },
          {
            "id": "articles-determiners_ex6_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "He was awarded ___ honorary doctorate for his humanitarian advocacy.",
            "answer": "an",
            "acceptableAnswers": [
              "an",
              "an",
              "AN"
            ],
            "options": [
              "the",
              "a",
              "an",
              "Ø (Zero article)"
            ],
            "explanation": "'Honorary' begins with a silent 'h' and vowel sound /ɒ/, taking 'an'."
          },
          {
            "id": "articles-determiners_ex6_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Governments must tackle ___ poverty through comprehensive social security cushions.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "the",
              "an",
              "a",
              "Ø (Zero article)"
            ],
            "explanation": "Abstract nouns denoting conditions take zero article in general contexts."
          }
        ]
      },
      {
        "id": "articles-determiners_ex_7",
        "number": 7,
        "title": "Exercise 7",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "articles-determiners_ex7_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The crime rate in the southern districts escalated dramatically following the industrial shutdown of the shipyards.",
            "correctSequence": [
              "The crime rate in the southern",
              "districts escalated dramatically following",
              "the industrial shutdown of",
              "the shipyards."
            ],
            "shuffledTokens": [
              "districts escalated dramatically following",
              "the shipyards.",
              "The crime rate in the southern",
              "the industrial shutdown of"
            ],
            "explanation": "When 'crime' is specified as a measurable statistic ('The crime rate in...'), it takes 'The'."
          },
          {
            "id": "articles-determiners_ex7_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Scientific research requires rigorous adherence to ethical principles and empirical validation standards.",
            "correctSequence": [
              "Scientific research requires rigorous",
              "adherence to ethical principles",
              "and empirical validation",
              "standards."
            ],
            "shuffledTokens": [
              "and empirical validation",
              "Scientific research requires rigorous",
              "adherence to ethical principles",
              "standards."
            ],
            "explanation": "Plural and uncountable concepts used in generalized statements take zero article."
          },
          {
            "id": "articles-determiners_ex7_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The research conducted by Dr. Vance demonstrated remarkable breakthroughs in cellular regeneration and immunology.",
            "correctSequence": [
              "The research conducted by Dr. Vance",
              "demonstrated remarkable breakthroughs in",
              "cellular regeneration and",
              "immunology."
            ],
            "shuffledTokens": [
              "cellular regeneration and",
              "The research conducted by Dr. Vance",
              "demonstrated remarkable breakthroughs in",
              "immunology."
            ],
            "explanation": "Specific research restricted by an identifying phrase takes 'The research conducted by...'"
          },
          {
            "id": "articles-determiners_ex7_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Clean water is an indispensable prerequisite for human survival and municipal health across all nations.",
            "correctSequence": [
              "Clean water is an indispensable",
              "prerequisite for human survival",
              "and municipal health across",
              "all nations."
            ],
            "shuffledTokens": [
              "prerequisite for human survival",
              "Clean water is an indispensable",
              "and municipal health across",
              "all nations."
            ],
            "explanation": "'Water' as an uncountable generic substance takes zero article; 'prerequisite' takes 'an'."
          },
          {
            "id": "articles-determiners_ex7_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The water in the municipal reservoir was contaminated with industrial chemical effluents following the flash flood.",
            "correctSequence": [
              "The water in the municipal reservoir",
              "was contaminated with industrial",
              "chemical effluents following",
              "the flash flood."
            ],
            "shuffledTokens": [
              "was contaminated with industrial",
              "The water in the municipal reservoir",
              "chemical effluents following",
              "the flash flood."
            ],
            "explanation": "Specific water in an identifiable reservoir takes the definite article 'The water'."
          },
          {
            "id": "articles-determiners_ex7_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The United Kingdom and the Netherlands signed a bilateral accord on offshore wind energy production.",
            "correctSequence": [
              "The United Kingdom and the",
              "Netherlands signed a bilateral",
              "accord on offshore wind",
              "energy production."
            ],
            "shuffledTokens": [
              "Netherlands signed a bilateral",
              "The United Kingdom and the",
              "accord on offshore wind",
              "energy production."
            ],
            "explanation": "Names of countries featuring plural nouns or unions take 'the' ('the UK', 'the Netherlands')."
          },
          {
            "id": "articles-determiners_ex7_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Education plays a paramount role in elevating impoverished families above the national poverty threshold.",
            "correctSequence": [
              "Education plays a paramount role",
              "in elevating impoverished families",
              "above the national poverty",
              "threshold."
            ],
            "shuffledTokens": [
              "in elevating impoverished families",
              "Education plays a paramount role",
              "above the national poverty",
              "threshold."
            ],
            "explanation": "Abstract uncountable nouns used in a generic sense ('Education') take zero article."
          },
          {
            "id": "articles-determiners_ex7_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The education of young girls in remote rural districts requires specialized governmental scholarship programs.",
            "correctSequence": [
              "The education of young girls in",
              "remote rural districts requires",
              "specialized governmental scholarship",
              "programs."
            ],
            "shuffledTokens": [
              "remote rural districts requires",
              "The education of young girls in",
              "specialized governmental scholarship",
              "programs."
            ],
            "explanation": "When an abstract noun is restricted by an of-phrase ('The education of young girls'), it takes 'the'."
          },
          {
            "id": "articles-determiners_ex7_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Mount Everest attracts hundreds of intrepid mountaineers to the Himalayas every spring season.",
            "correctSequence": [
              "Mount Everest attracts hundreds of",
              "intrepid mountaineers to the",
              "Himalayas every spring season."
            ],
            "shuffledTokens": [
              "intrepid mountaineers to the",
              "Mount Everest attracts hundreds of",
              "Himalayas every spring season."
            ],
            "explanation": "Individual mountain peaks take zero article ('Mount Everest'), whereas mountain ranges take 'the' ('the Himalayas')."
          },
          {
            "id": "articles-determiners_ex7_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ozone layer serves as an indispensable cosmic shield against lethal ultraviolet radiation from the sun.",
            "correctSequence": [
              "The ozone layer serves as an",
              "indispensable cosmic shield against",
              "lethal ultraviolet radiation",
              "from the sun."
            ],
            "shuffledTokens": [
              "indispensable cosmic shield against",
              "The ozone layer serves as an",
              "lethal ultraviolet radiation",
              "from the sun."
            ],
            "explanation": "Unique celestial and atmospheric entities require the definite article 'the' ('the ozone layer', 'the sun')."
          },
          {
            "id": "articles-determiners_ex7_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Pacific Ocean accounts for more than thirty percent of Earth's surface.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "Ø (Zero article)",
              "The",
              "An",
              "A"
            ],
            "explanation": "Names of oceans, seas, and rivers require the definite article 'The'."
          },
          {
            "id": "articles-determiners_ex7_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Volunteers traveled to ___ Lake Baikal to survey rare endemic seal habitats.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "a",
              "Ø (Zero article)",
              "an",
              "the"
            ],
            "explanation": "Individual lakes take zero article ('Lake Baikal')."
          },
          {
            "id": "articles-determiners_ex7_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ artificial intelligence has transformed contemporary data analysis.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "A",
              "The",
              "An",
              "Ø (Zero article)"
            ],
            "explanation": "Broad academic fields and technical subjects take zero article in general statements."
          },
          {
            "id": "articles-determiners_ex7_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ artificial intelligence developed by the laboratory outperformed human diagnosticians.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Specific AI identified by a relative clause takes 'The'."
          },
          {
            "id": "articles-determiners_ex7_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The committee reached ___ unanimous verdict after four hours of debate.",
            "answer": "a",
            "acceptableAnswers": [
              "a",
              "a",
              "A"
            ],
            "options": [
              "an",
              "a",
              "the",
              "Ø (Zero article)"
            ],
            "explanation": "'Unanimous' begins with the consonant sound /j/, so it takes 'a', not 'an'."
          },
          {
            "id": "articles-determiners_ex7_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Candidates must possess ___ university degree in an affiliated discipline.",
            "answer": "a",
            "acceptableAnswers": [
              "a",
              "a",
              "A"
            ],
            "options": [
              "an",
              "a",
              "the",
              "Ø (Zero article)"
            ],
            "explanation": "'University' begins with a consonant sound (/j/), requiring 'a'."
          },
          {
            "id": "articles-determiners_ex7_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "He was awarded ___ honorary doctorate for his humanitarian advocacy.",
            "answer": "an",
            "acceptableAnswers": [
              "an",
              "an",
              "AN"
            ],
            "options": [
              "Ø (Zero article)",
              "a",
              "an",
              "the"
            ],
            "explanation": "'Honorary' begins with a silent 'h' and vowel sound /ɒ/, taking 'an'."
          },
          {
            "id": "articles-determiners_ex7_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Governments must tackle ___ poverty through comprehensive social security cushions.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "an",
              "Ø (Zero article)",
              "a",
              "the"
            ],
            "explanation": "Abstract nouns denoting conditions take zero article in general contexts."
          },
          {
            "id": "articles-determiners_ex7_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ education is widely acknowledged as the primary engine of social mobility.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "An",
              "Ø (Zero article)",
              "The",
              "A"
            ],
            "explanation": "Abstract uncountable nouns used in a general sense take zero article."
          },
          {
            "id": "articles-determiners_ex7_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ education of underprivileged children requires subsidized community transport.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "A",
              "An",
              "Ø (Zero article)",
              "The"
            ],
            "explanation": "The abstract noun 'education' is restricted by 'of underprivileged children', requiring 'The'."
          }
        ]
      },
      {
        "id": "articles-determiners_ex_8",
        "number": 8,
        "title": "Exercise 8",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "articles-determiners_ex8_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The research conducted by Dr. Vance demonstrated remarkable breakthroughs in cellular regeneration and immunology.",
            "correctSequence": [
              "The research conducted by Dr. Vance",
              "demonstrated remarkable breakthroughs in",
              "cellular regeneration and",
              "immunology."
            ],
            "shuffledTokens": [
              "cellular regeneration and",
              "demonstrated remarkable breakthroughs in",
              "immunology.",
              "The research conducted by Dr. Vance"
            ],
            "explanation": "Specific research restricted by an identifying phrase takes 'The research conducted by...'"
          },
          {
            "id": "articles-determiners_ex8_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Clean water is an indispensable prerequisite for human survival and municipal health across all nations.",
            "correctSequence": [
              "Clean water is an indispensable",
              "prerequisite for human survival",
              "and municipal health across",
              "all nations."
            ],
            "shuffledTokens": [
              "all nations.",
              "and municipal health across",
              "Clean water is an indispensable",
              "prerequisite for human survival"
            ],
            "explanation": "'Water' as an uncountable generic substance takes zero article; 'prerequisite' takes 'an'."
          },
          {
            "id": "articles-determiners_ex8_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The water in the municipal reservoir was contaminated with industrial chemical effluents following the flash flood.",
            "correctSequence": [
              "The water in the municipal reservoir",
              "was contaminated with industrial",
              "chemical effluents following",
              "the flash flood."
            ],
            "shuffledTokens": [
              "the flash flood.",
              "chemical effluents following",
              "The water in the municipal reservoir",
              "was contaminated with industrial"
            ],
            "explanation": "Specific water in an identifiable reservoir takes the definite article 'The water'."
          },
          {
            "id": "articles-determiners_ex8_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The United Kingdom and the Netherlands signed a bilateral accord on offshore wind energy production.",
            "correctSequence": [
              "The United Kingdom and the",
              "Netherlands signed a bilateral",
              "accord on offshore wind",
              "energy production."
            ],
            "shuffledTokens": [
              "Netherlands signed a bilateral",
              "energy production.",
              "The United Kingdom and the",
              "accord on offshore wind"
            ],
            "explanation": "Names of countries featuring plural nouns or unions take 'the' ('the UK', 'the Netherlands')."
          },
          {
            "id": "articles-determiners_ex8_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Education plays a paramount role in elevating impoverished families above the national poverty threshold.",
            "correctSequence": [
              "Education plays a paramount role",
              "in elevating impoverished families",
              "above the national poverty",
              "threshold."
            ],
            "shuffledTokens": [
              "threshold.",
              "Education plays a paramount role",
              "in elevating impoverished families",
              "above the national poverty"
            ],
            "explanation": "Abstract uncountable nouns used in a generic sense ('Education') take zero article."
          },
          {
            "id": "articles-determiners_ex8_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The education of young girls in remote rural districts requires specialized governmental scholarship programs.",
            "correctSequence": [
              "The education of young girls in",
              "remote rural districts requires",
              "specialized governmental scholarship",
              "programs."
            ],
            "shuffledTokens": [
              "specialized governmental scholarship",
              "The education of young girls in",
              "remote rural districts requires",
              "programs."
            ],
            "explanation": "When an abstract noun is restricted by an of-phrase ('The education of young girls'), it takes 'the'."
          },
          {
            "id": "articles-determiners_ex8_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Mount Everest attracts hundreds of intrepid mountaineers to the Himalayas every spring season.",
            "correctSequence": [
              "Mount Everest attracts hundreds of",
              "intrepid mountaineers to the",
              "Himalayas every spring season."
            ],
            "shuffledTokens": [
              "Himalayas every spring season.",
              "Mount Everest attracts hundreds of",
              "intrepid mountaineers to the"
            ],
            "explanation": "Individual mountain peaks take zero article ('Mount Everest'), whereas mountain ranges take 'the' ('the Himalayas')."
          },
          {
            "id": "articles-determiners_ex8_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ozone layer serves as an indispensable cosmic shield against lethal ultraviolet radiation from the sun.",
            "correctSequence": [
              "The ozone layer serves as an",
              "indispensable cosmic shield against",
              "lethal ultraviolet radiation",
              "from the sun."
            ],
            "shuffledTokens": [
              "indispensable cosmic shield against",
              "The ozone layer serves as an",
              "lethal ultraviolet radiation",
              "from the sun."
            ],
            "explanation": "Unique celestial and atmospheric entities require the definite article 'the' ('the ozone layer', 'the sun')."
          },
          {
            "id": "articles-determiners_ex8_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological progress has fundamentally altered the way modern society consumes news and cultural entertainment.",
            "correctSequence": [
              "Technological progress has fundamentally",
              "altered the way modern society",
              "consumes news and cultural",
              "entertainment."
            ],
            "shuffledTokens": [
              "altered the way modern society",
              "Technological progress has fundamentally",
              "consumes news and cultural",
              "entertainment."
            ],
            "explanation": "Generic uncountables ('Technological progress', 'society') take zero article."
          },
          {
            "id": "articles-determiners_ex8_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial increase in the price of petroleum commodities inevitably triggers domestic inflationary pressures.",
            "correctSequence": [
              "A substantial increase in the",
              "price of petroleum commodities",
              "inevitably triggers domestic",
              "inflationary pressures."
            ],
            "shuffledTokens": [
              "price of petroleum commodities",
              "A substantial increase in the",
              "inevitably triggers domestic",
              "inflationary pressures."
            ],
            "explanation": "A singular countable noun ('increase') modified by an adjective takes the indefinite article 'A'."
          },
          {
            "id": "articles-determiners_ex8_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ artificial intelligence has transformed contemporary data analysis.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Broad academic fields and technical subjects take zero article in general statements."
          },
          {
            "id": "articles-determiners_ex8_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ artificial intelligence developed by the laboratory outperformed human diagnosticians.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Specific AI identified by a relative clause takes 'The'."
          },
          {
            "id": "articles-determiners_ex8_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The committee reached ___ unanimous verdict after four hours of debate.",
            "answer": "a",
            "acceptableAnswers": [
              "a",
              "a",
              "A"
            ],
            "options": [
              "an",
              "a",
              "the",
              "Ø (Zero article)"
            ],
            "explanation": "'Unanimous' begins with the consonant sound /j/, so it takes 'a', not 'an'."
          },
          {
            "id": "articles-determiners_ex8_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Candidates must possess ___ university degree in an affiliated discipline.",
            "answer": "a",
            "acceptableAnswers": [
              "a",
              "a",
              "A"
            ],
            "options": [
              "the",
              "a",
              "an",
              "Ø (Zero article)"
            ],
            "explanation": "'University' begins with a consonant sound (/j/), requiring 'a'."
          },
          {
            "id": "articles-determiners_ex8_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "He was awarded ___ honorary doctorate for his humanitarian advocacy.",
            "answer": "an",
            "acceptableAnswers": [
              "an",
              "an",
              "AN"
            ],
            "options": [
              "an",
              "Ø (Zero article)",
              "a",
              "the"
            ],
            "explanation": "'Honorary' begins with a silent 'h' and vowel sound /ɒ/, taking 'an'."
          },
          {
            "id": "articles-determiners_ex8_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Governments must tackle ___ poverty through comprehensive social security cushions.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "Ø (Zero article)",
              "the",
              "an",
              "a"
            ],
            "explanation": "Abstract nouns denoting conditions take zero article in general contexts."
          },
          {
            "id": "articles-determiners_ex8_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ education is widely acknowledged as the primary engine of social mobility.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "A",
              "Ø (Zero article)",
              "An",
              "The"
            ],
            "explanation": "Abstract uncountable nouns used in a general sense take zero article."
          },
          {
            "id": "articles-determiners_ex8_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ education of underprivileged children requires subsidized community transport.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "A",
              "The",
              "An",
              "Ø (Zero article)"
            ],
            "explanation": "The abstract noun 'education' is restricted by 'of underprivileged children', requiring 'The'."
          },
          {
            "id": "articles-determiners_ex8_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Netherlands has implemented advanced flood mitigation dyke infrastructure.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Countries with plural names ('the Netherlands', 'the Philippines') take 'The'."
          },
          {
            "id": "articles-determiners_ex8_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Germany is recognized as a European pioneer in automotive engineering.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Singular country names without 'Kingdom/Republic/States' take zero article."
          }
        ]
      },
      {
        "id": "articles-determiners_ex_9",
        "number": 9,
        "title": "Exercise 9",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "articles-determiners_ex9_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The water in the municipal reservoir was contaminated with industrial chemical effluents following the flash flood.",
            "correctSequence": [
              "The water in the municipal reservoir",
              "was contaminated with industrial",
              "chemical effluents following",
              "the flash flood."
            ],
            "shuffledTokens": [
              "The water in the municipal reservoir",
              "the flash flood.",
              "chemical effluents following",
              "was contaminated with industrial"
            ],
            "explanation": "Specific water in an identifiable reservoir takes the definite article 'The water'."
          },
          {
            "id": "articles-determiners_ex9_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The United Kingdom and the Netherlands signed a bilateral accord on offshore wind energy production.",
            "correctSequence": [
              "The United Kingdom and the",
              "Netherlands signed a bilateral",
              "accord on offshore wind",
              "energy production."
            ],
            "shuffledTokens": [
              "energy production.",
              "accord on offshore wind",
              "Netherlands signed a bilateral",
              "The United Kingdom and the"
            ],
            "explanation": "Names of countries featuring plural nouns or unions take 'the' ('the UK', 'the Netherlands')."
          },
          {
            "id": "articles-determiners_ex9_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Education plays a paramount role in elevating impoverished families above the national poverty threshold.",
            "correctSequence": [
              "Education plays a paramount role",
              "in elevating impoverished families",
              "above the national poverty",
              "threshold."
            ],
            "shuffledTokens": [
              "threshold.",
              "above the national poverty",
              "in elevating impoverished families",
              "Education plays a paramount role"
            ],
            "explanation": "Abstract uncountable nouns used in a generic sense ('Education') take zero article."
          },
          {
            "id": "articles-determiners_ex9_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The education of young girls in remote rural districts requires specialized governmental scholarship programs.",
            "correctSequence": [
              "The education of young girls in",
              "remote rural districts requires",
              "specialized governmental scholarship",
              "programs."
            ],
            "shuffledTokens": [
              "specialized governmental scholarship",
              "remote rural districts requires",
              "programs.",
              "The education of young girls in"
            ],
            "explanation": "When an abstract noun is restricted by an of-phrase ('The education of young girls'), it takes 'the'."
          },
          {
            "id": "articles-determiners_ex9_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Mount Everest attracts hundreds of intrepid mountaineers to the Himalayas every spring season.",
            "correctSequence": [
              "Mount Everest attracts hundreds of",
              "intrepid mountaineers to the",
              "Himalayas every spring season."
            ],
            "shuffledTokens": [
              "Himalayas every spring season.",
              "intrepid mountaineers to the",
              "Mount Everest attracts hundreds of"
            ],
            "explanation": "Individual mountain peaks take zero article ('Mount Everest'), whereas mountain ranges take 'the' ('the Himalayas')."
          },
          {
            "id": "articles-determiners_ex9_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ozone layer serves as an indispensable cosmic shield against lethal ultraviolet radiation from the sun.",
            "correctSequence": [
              "The ozone layer serves as an",
              "indispensable cosmic shield against",
              "lethal ultraviolet radiation",
              "from the sun."
            ],
            "shuffledTokens": [
              "from the sun.",
              "lethal ultraviolet radiation",
              "The ozone layer serves as an",
              "indispensable cosmic shield against"
            ],
            "explanation": "Unique celestial and atmospheric entities require the definite article 'the' ('the ozone layer', 'the sun')."
          },
          {
            "id": "articles-determiners_ex9_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological progress has fundamentally altered the way modern society consumes news and cultural entertainment.",
            "correctSequence": [
              "Technological progress has fundamentally",
              "altered the way modern society",
              "consumes news and cultural",
              "entertainment."
            ],
            "shuffledTokens": [
              "altered the way modern society",
              "entertainment.",
              "Technological progress has fundamentally",
              "consumes news and cultural"
            ],
            "explanation": "Generic uncountables ('Technological progress', 'society') take zero article."
          },
          {
            "id": "articles-determiners_ex9_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial increase in the price of petroleum commodities inevitably triggers domestic inflationary pressures.",
            "correctSequence": [
              "A substantial increase in the",
              "price of petroleum commodities",
              "inevitably triggers domestic",
              "inflationary pressures."
            ],
            "shuffledTokens": [
              "price of petroleum commodities",
              "inflationary pressures.",
              "A substantial increase in the",
              "inevitably triggers domestic"
            ],
            "explanation": "A singular countable noun ('increase') modified by an adjective takes the indefinite article 'A'."
          },
          {
            "id": "articles-determiners_ex9_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The Pacific Ocean accommodates some of the deepest oceanic trenches and hydrothermal vent ecosystems.",
            "correctSequence": [
              "The Pacific Ocean accommodates some",
              "of the deepest oceanic trenches",
              "and hydrothermal vent",
              "ecosystems."
            ],
            "shuffledTokens": [
              "and hydrothermal vent",
              "The Pacific Ocean accommodates some",
              "of the deepest oceanic trenches",
              "ecosystems."
            ],
            "explanation": "Oceans, seas, and rivers take the definite article 'the' ('The Pacific Ocean')."
          },
          {
            "id": "articles-determiners_ex9_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "University students are encouraged to engage in independent inquiry rather than passive rote memorization.",
            "correctSequence": [
              "University students are encouraged",
              "to engage in independent inquiry",
              "rather than passive rote",
              "memorization."
            ],
            "shuffledTokens": [
              "rather than passive rote",
              "University students are encouraged",
              "to engage in independent inquiry",
              "memorization."
            ],
            "explanation": "General plural subjects ('University students') speaking collectively take zero article."
          },
          {
            "id": "articles-determiners_ex9_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The committee reached ___ unanimous verdict after four hours of debate.",
            "answer": "a",
            "acceptableAnswers": [
              "a",
              "a",
              "A"
            ],
            "options": [
              "an",
              "a",
              "the",
              "Ø (Zero article)"
            ],
            "explanation": "'Unanimous' begins with the consonant sound /j/, so it takes 'a', not 'an'."
          },
          {
            "id": "articles-determiners_ex9_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Candidates must possess ___ university degree in an affiliated discipline.",
            "answer": "a",
            "acceptableAnswers": [
              "a",
              "a",
              "A"
            ],
            "options": [
              "an",
              "Ø (Zero article)",
              "a",
              "the"
            ],
            "explanation": "'University' begins with a consonant sound (/j/), requiring 'a'."
          },
          {
            "id": "articles-determiners_ex9_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "He was awarded ___ honorary doctorate for his humanitarian advocacy.",
            "answer": "an",
            "acceptableAnswers": [
              "an",
              "an",
              "AN"
            ],
            "options": [
              "the",
              "Ø (Zero article)",
              "a",
              "an"
            ],
            "explanation": "'Honorary' begins with a silent 'h' and vowel sound /ɒ/, taking 'an'."
          },
          {
            "id": "articles-determiners_ex9_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Governments must tackle ___ poverty through comprehensive social security cushions.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "an",
              "Ø (Zero article)",
              "the",
              "a"
            ],
            "explanation": "Abstract nouns denoting conditions take zero article in general contexts."
          },
          {
            "id": "articles-determiners_ex9_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ education is widely acknowledged as the primary engine of social mobility.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "A",
              "An",
              "Ø (Zero article)",
              "The"
            ],
            "explanation": "Abstract uncountable nouns used in a general sense take zero article."
          },
          {
            "id": "articles-determiners_ex9_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ education of underprivileged children requires subsidized community transport.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "The abstract noun 'education' is restricted by 'of underprivileged children', requiring 'The'."
          },
          {
            "id": "articles-determiners_ex9_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Netherlands has implemented advanced flood mitigation dyke infrastructure.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Countries with plural names ('the Netherlands', 'the Philippines') take 'The'."
          },
          {
            "id": "articles-determiners_ex9_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Germany is recognized as a European pioneer in automotive engineering.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Singular country names without 'Kingdom/Republic/States' take zero article."
          },
          {
            "id": "articles-determiners_ex9_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research team conducted geological surveys in ___ Himalayas.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "Ø (Zero article)",
              "a",
              "the",
              "an"
            ],
            "explanation": "Mountain ranges take the definite article 'the'."
          },
          {
            "id": "articles-determiners_ex9_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Climbers attempted to scale ___ Mount Kilimanjaro during the dry season.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "the",
              "an",
              "a",
              "Ø (Zero article)"
            ],
            "explanation": "Individual mountain peaks take zero article ('Mount Kilimanjaro')."
          }
        ]
      },
      {
        "id": "articles-determiners_ex_10",
        "number": 10,
        "title": "Exercise 10",
        "questionRange": "Questions 1–20 (10 Drag & Drop + 10 Gap-Fill)",
        "questionCount": 20,
        "questions": [
          {
            "id": "articles-determiners_ex10_q1",
            "number": 1,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Education plays a paramount role in elevating impoverished families above the national poverty threshold.",
            "correctSequence": [
              "Education plays a paramount role",
              "in elevating impoverished families",
              "above the national poverty",
              "threshold."
            ],
            "shuffledTokens": [
              "in elevating impoverished families",
              "Education plays a paramount role",
              "above the national poverty",
              "threshold."
            ],
            "explanation": "Abstract uncountable nouns used in a generic sense ('Education') take zero article."
          },
          {
            "id": "articles-determiners_ex10_q2",
            "number": 2,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The education of young girls in remote rural districts requires specialized governmental scholarship programs.",
            "correctSequence": [
              "The education of young girls in",
              "remote rural districts requires",
              "specialized governmental scholarship",
              "programs."
            ],
            "shuffledTokens": [
              "The education of young girls in",
              "remote rural districts requires",
              "programs.",
              "specialized governmental scholarship"
            ],
            "explanation": "When an abstract noun is restricted by an of-phrase ('The education of young girls'), it takes 'the'."
          },
          {
            "id": "articles-determiners_ex10_q3",
            "number": 3,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Mount Everest attracts hundreds of intrepid mountaineers to the Himalayas every spring season.",
            "correctSequence": [
              "Mount Everest attracts hundreds of",
              "intrepid mountaineers to the",
              "Himalayas every spring season."
            ],
            "shuffledTokens": [
              "intrepid mountaineers to the",
              "Mount Everest attracts hundreds of",
              "Himalayas every spring season."
            ],
            "explanation": "Individual mountain peaks take zero article ('Mount Everest'), whereas mountain ranges take 'the' ('the Himalayas')."
          },
          {
            "id": "articles-determiners_ex10_q4",
            "number": 4,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The ozone layer serves as an indispensable cosmic shield against lethal ultraviolet radiation from the sun.",
            "correctSequence": [
              "The ozone layer serves as an",
              "indispensable cosmic shield against",
              "lethal ultraviolet radiation",
              "from the sun."
            ],
            "shuffledTokens": [
              "The ozone layer serves as an",
              "from the sun.",
              "lethal ultraviolet radiation",
              "indispensable cosmic shield against"
            ],
            "explanation": "Unique celestial and atmospheric entities require the definite article 'the' ('the ozone layer', 'the sun')."
          },
          {
            "id": "articles-determiners_ex10_q5",
            "number": 5,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Technological progress has fundamentally altered the way modern society consumes news and cultural entertainment.",
            "correctSequence": [
              "Technological progress has fundamentally",
              "altered the way modern society",
              "consumes news and cultural",
              "entertainment."
            ],
            "shuffledTokens": [
              "Technological progress has fundamentally",
              "consumes news and cultural",
              "entertainment.",
              "altered the way modern society"
            ],
            "explanation": "Generic uncountables ('Technological progress', 'society') take zero article."
          },
          {
            "id": "articles-determiners_ex10_q6",
            "number": 6,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "A substantial increase in the price of petroleum commodities inevitably triggers domestic inflationary pressures.",
            "correctSequence": [
              "A substantial increase in the",
              "price of petroleum commodities",
              "inevitably triggers domestic",
              "inflationary pressures."
            ],
            "shuffledTokens": [
              "inflationary pressures.",
              "inevitably triggers domestic",
              "price of petroleum commodities",
              "A substantial increase in the"
            ],
            "explanation": "A singular countable noun ('increase') modified by an adjective takes the indefinite article 'A'."
          },
          {
            "id": "articles-determiners_ex10_q7",
            "number": 7,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The Pacific Ocean accommodates some of the deepest oceanic trenches and hydrothermal vent ecosystems.",
            "correctSequence": [
              "The Pacific Ocean accommodates some",
              "of the deepest oceanic trenches",
              "and hydrothermal vent",
              "ecosystems."
            ],
            "shuffledTokens": [
              "ecosystems.",
              "and hydrothermal vent",
              "of the deepest oceanic trenches",
              "The Pacific Ocean accommodates some"
            ],
            "explanation": "Oceans, seas, and rivers take the definite article 'the' ('The Pacific Ocean')."
          },
          {
            "id": "articles-determiners_ex10_q8",
            "number": 8,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "University students are encouraged to engage in independent inquiry rather than passive rote memorization.",
            "correctSequence": [
              "University students are encouraged",
              "to engage in independent inquiry",
              "rather than passive rote",
              "memorization."
            ],
            "shuffledTokens": [
              "rather than passive rote",
              "to engage in independent inquiry",
              "memorization.",
              "University students are encouraged"
            ],
            "explanation": "General plural subjects ('University students') speaking collectively take zero article."
          },
          {
            "id": "articles-determiners_ex10_q9",
            "number": 9,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "The government must implement an equitable progressive taxation system to fund public healthcare facilities.",
            "correctSequence": [
              "The government must implement an",
              "equitable progressive taxation system",
              "to fund public healthcare",
              "facilities."
            ],
            "shuffledTokens": [
              "to fund public healthcare",
              "facilities.",
              "The government must implement an",
              "equitable progressive taxation system"
            ],
            "explanation": "'The government' takes 'the', and 'equitable system' takes the indefinite article 'an' before a vowel sound."
          },
          {
            "id": "articles-determiners_ex10_q10",
            "number": 10,
            "type": "drag-and-drop",
            "instruction": "Drag or click the word chips into the answer box in the correct grammatical order:",
            "targetSentence": "Lake Victoria is one of the largest freshwater reservoirs in the African continent and the world.",
            "correctSequence": [
              "Lake Victoria is one of the",
              "largest freshwater reservoirs in",
              "the African continent and",
              "the world."
            ],
            "shuffledTokens": [
              "the world.",
              "the African continent and",
              "Lake Victoria is one of the",
              "largest freshwater reservoirs in"
            ],
            "explanation": "Individual lakes take zero article ('Lake Victoria'), while 'world' takes 'the'."
          },
          {
            "id": "articles-determiners_ex10_q11",
            "number": 11,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "He was awarded ___ honorary doctorate for his humanitarian advocacy.",
            "answer": "an",
            "acceptableAnswers": [
              "an",
              "an",
              "AN"
            ],
            "options": [
              "the",
              "an",
              "Ø (Zero article)",
              "a"
            ],
            "explanation": "'Honorary' begins with a silent 'h' and vowel sound /ɒ/, taking 'an'."
          },
          {
            "id": "articles-determiners_ex10_q12",
            "number": 12,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Governments must tackle ___ poverty through comprehensive social security cushions.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "a",
              "an",
              "Ø (Zero article)",
              "the"
            ],
            "explanation": "Abstract nouns denoting conditions take zero article in general contexts."
          },
          {
            "id": "articles-determiners_ex10_q13",
            "number": 13,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ education is widely acknowledged as the primary engine of social mobility.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "A",
              "The",
              "An",
              "Ø (Zero article)"
            ],
            "explanation": "Abstract uncountable nouns used in a general sense take zero article."
          },
          {
            "id": "articles-determiners_ex10_q14",
            "number": 14,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ education of underprivileged children requires subsidized community transport.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "The abstract noun 'education' is restricted by 'of underprivileged children', requiring 'The'."
          },
          {
            "id": "articles-determiners_ex10_q15",
            "number": 15,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Netherlands has implemented advanced flood mitigation dyke infrastructure.",
            "answer": "The",
            "acceptableAnswers": [
              "The",
              "the",
              "THE"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Countries with plural names ('the Netherlands', 'the Philippines') take 'The'."
          },
          {
            "id": "articles-determiners_ex10_q16",
            "number": 16,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "___ Germany is recognized as a European pioneer in automotive engineering.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "The",
              "A",
              "Ø (Zero article)",
              "An"
            ],
            "explanation": "Singular country names without 'Kingdom/Republic/States' take zero article."
          },
          {
            "id": "articles-determiners_ex10_q17",
            "number": 17,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "The research team conducted geological surveys in ___ Himalayas.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "the",
              "an",
              "a",
              "Ø (Zero article)"
            ],
            "explanation": "Mountain ranges take the definite article 'the'."
          },
          {
            "id": "articles-determiners_ex10_q18",
            "number": 18,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Climbers attempted to scale ___ Mount Kilimanjaro during the dry season.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "Ø (Zero article)",
              "an",
              "a",
              "the"
            ],
            "explanation": "Individual mountain peaks take zero article ('Mount Kilimanjaro')."
          },
          {
            "id": "articles-determiners_ex10_q19",
            "number": 19,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Harmful radiation is filtered out by ___ ozone layer.",
            "answer": "the",
            "acceptableAnswers": [
              "the",
              "the",
              "THE"
            ],
            "options": [
              "an",
              "Ø (Zero article)",
              "the",
              "a"
            ],
            "explanation": "Unique planetary and celestial phenomena take 'the' ('the ozone layer')."
          },
          {
            "id": "articles-determiners_ex10_q20",
            "number": 20,
            "type": "gap-fill",
            "instruction": "Select the grammatically correct word or phrase to fill the blank:",
            "sentence": "Access to ___ clean water is considered a fundamental human right.",
            "answer": "Ø (Zero article)",
            "acceptableAnswers": [
              "Ø (Zero article)",
              "ø (zero article)",
              "Ø (ZERO ARTICLE)"
            ],
            "options": [
              "a",
              "an",
              "Ø (Zero article)",
              "the"
            ],
            "explanation": "Uncountable nouns referred to generically take zero article."
          }
        ]
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
if (typeof module !== 'undefined') {
  module.exports = { GRAMMAR_DATA };
}
