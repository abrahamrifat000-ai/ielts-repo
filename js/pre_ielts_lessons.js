var PI_DAYS = (typeof window !== 'undefined' && window.PI_DAYS) || [];
if (typeof window !== 'undefined') window.PI_DAYS = PI_DAYS;
var D = function (o) { PI_DAYS.push(o); };
var PI_WEEKS = [
  { n: 1, t: "The English sentence", d: "Word jobs, word order, the verb be, nouns and articles." },
  { n: 2, t: "Talking about now", d: "Pronouns, the present tenses, questions, adjectives and adverbs." },
  { n: 3, t: "Talking about the past", d: "Past simple, past continuous, present perfect and past perfect." },
  { n: 4, t: "Future, modals and prepositions", d: "Plans and predictions, can, must, should, and in, on, at." },
  { n: 5, t: "Longer, better sentences", d: "Agreement, comparing, quantities, joining ideas, relative clauses." },
  { n: 6, t: "Grammar that lifts your level", d: "Conditionals, passive voice, gerunds and infinitives, reported speech." },
  { n: 7, t: "Words and sounds", d: "Word families, collocations, paraphrasing, pronunciation and stress." },
  { n: 8, t: "Reading and listening", d: "Skimming, scanning, main ideas, numbers, spelling and note-taking." },
  { n: 9, t: "Writing", d: "Punctuation, paragraphs, linking words, describing data, giving opinions." },
  { n: 10, t: "Speaking and IELTS readiness", d: "Fluent answers, long turns, opinions, typical errors, the test itself." }
];
if (typeof window !== 'undefined') window.PI_WEEKS = PI_WEEKS;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PI_DAYS, PI_WEEKS };
}

D({ n: 1, t: "Parts of speech: the eight jobs a word can do", s: "grammar", m: 45,
  goal: "Name the eight parts of speech and find the nouns, verbs and adjectives in any simple sentence.",
  bn: "বাংলার পদ (বিশেষ্য, সর্বনাম, বিশেষণ, ক্রিয়া) আর ইংরেজির parts of speech প্রায় একই ধারণা। আগে শব্দের কাজ চিনুন, তারপর বাক্য বানানো সহজ হবে।",
  notes: [
    ["Every word has a job", "English has eight kinds of words. If you know the job of each word, you can build a sentence and check it for mistakes.", [
      ["Part of speech", "Job", "Examples"],
      ["Noun", "names a person, place, thing or idea", "teacher, Dhaka, book, honesty"],
      ["Pronoun", "replaces a noun", "I, she, it, they"],
      ["Verb", "shows an action or a state", "write, eat, is, have"],
      ["Adjective", "describes a noun", "big, new, difficult"],
      ["Adverb", "describes a verb, adjective or adverb", "quickly, very, often"],
      ["Preposition", "shows place, time or direction", "in, on, at, to"],
      ["Conjunction", "joins words or sentences", "and, but, because"],
      ["Interjection", "shows sudden feeling", "Oh! Wow!"]
    ]],
    ["One word can do different jobs", "Look at where the word sits in the sentence. *I **work** in a bank* (verb). *My **work** is interesting* (noun). *She runs **fast*** (adverb). *She is a **fast** runner* (adjective)."],
    ["How to test a word", "Noun: can you put *the* before it? *the water, the idea*. Verb: can you change its time? *play, played, will play*. Adjective: can you put *very* before it and a noun after it? *a very **tall** boy*."],
    ["Why you need this", "Later you will change word forms all the time: *success* (noun), *succeed* (verb), *successful* (adjective), *successfully* (adverb). IELTS reading and writing both test this."]
  ],
  fix: [
    ["She is a beauty girl.", "She is a beautiful girl."],
    ["He speaks English very good.", "He speaks English very well."],
    ["I want to success in life.", "I want to succeed in life."]
  ],
  yt: ["parts of speech English grammar for beginners", "8 parts of speech with examples English lesson", "parts of speech bangla tutorial"],
  tasks: [
    "Read the notes twice. Copy the table of eight parts of speech into your notebook by hand.",
    "Watch at least one video from the list and write down three new examples for each part of speech.",
    "Take any five sentences from an English newspaper or textbook. Label every noun (N), verb (V) and adjective (Adj).",
    "Start a word notebook. Write today's six words with their meaning and one sentence of your own for each."
  ],
  vocab: [
    ["describe", "বর্ণনা করা", "Can you describe your home town?"],
    ["replace", "বদলে দেওয়া / স্থান নেওয়া", "A pronoun replaces a noun."],
    ["quickly", "দ্রুত", "She finished the test quickly."],
    ["difficult", "কঠিন", "This question is difficult."],
    ["honesty", "সততা", "Honesty is important in business."],
    ["improve", "উন্নত করা", "I want to improve my English."]
  ],
  prod: ["Write five sentences about your daily life. Under each sentence, write the part of speech of every word.",
    "Model: My brother reads English books slowly. My (pronoun/possessive) brother (noun) reads (verb) English (adjective) books (noun) slowly (adverb)."],
  quiz: [
    ["In *The children played happily in the park*, which word is an adverb?", ["children", "played", "happily", "park"], 2, "*Happily* tells us how they played, so it is an adverb."],
    ["Which word is a noun?", ["quickly", "beautiful", "decide", "decision"], 3, "*Decision* names a thing. *Decide* is the verb."],
    ["Choose the correct word: *She is a ___ student.*", ["care", "careful", "carefully", "caring for"], 1, "We need an adjective before the noun *student*: careful."],
    ["In *My work starts at nine*, the word *work* is a", ["noun", "verb", "adverb", "preposition"], 0, "It is the subject of the sentence and you can say *the work*, so it is a noun here."],
    ["Which word is a conjunction?", ["under", "because", "slowly", "them"], 1, "*Because* joins two ideas. *Under* is a preposition."]
  ]
});

D({ n: 2, t: "Word order: subject, verb, object", s: "grammar", m: 45,
  goal: "Build correct basic sentences in the order subject + verb + object, and never leave out the subject or the verb.",
  bn: "বাংলায় ক্রিয়া বাক্যের শেষে বসে (আমি ভাত খাই), কিন্তু ইংরেজিতে ক্রিয়া বসে কর্তার ঠিক পরে (I eat rice)। বাংলা থেকে শব্দ ধরে ধরে অনুবাদ করবেন না।",
  notes: [
    ["English is S + V + O", "Bangla: *আমি ভাত খাই* (I + rice + eat). English: *I eat rice* (subject + verb + object). The verb comes directly after the subject. This order almost never changes in a statement."],
    ["The longer pattern", "When you add more information, use this order: subject + verb + object + how + where + when. *She studied English carefully at home last night.* Place usually comes before time.", [
      ["Subject", "Verb", "Object", "How", "Where", "When"],
      ["I", "met", "my friend", "", "at the station", "yesterday"],
      ["They", "play", "football", "well", "in the field", "every Friday"]
    ]],
    ["Every sentence needs a subject and a verb", "Bangla can drop them. English cannot. Use *it* or *there* when there is no real subject: *It is raining. It is hot today. There is a problem.*"],
    ["Do not separate the verb and its object", "Say *I like English very much*, not *I like very much English*. Adverbs of frequency are different: they go before the main verb (*I often read*)."]
  ],
  fix: [
    ["I very much like cricket.", "I like cricket very much."],
    ["Is very hot today.", "It is very hot today."],
    ["My father yesterday bought a phone.", "My father bought a phone yesterday."]
  ],
  yt: ["English sentence structure subject verb object for beginners", "basic English word order lesson", "English sentence structure bangla"],
  tasks: [
    "Translate ten simple Bangla sentences into English. Check the position of the verb in each one.",
    "Watch one video on word order and note two rules you did not know.",
    "Write six long sentences using the pattern subject + verb + object + where + when.",
    "Say ten sentences aloud about what you did yesterday. Record yourself on your phone and listen once."
  ],
  vocab: [
    ["subject", "কর্তা", "The subject does the action."],
    ["object", "কর্ম", "In 'I read books', 'books' is the object."],
    ["order", "ক্রম", "Put the words in the correct order."],
    ["usually", "সাধারণত", "I usually wake up at six."],
    ["directly", "সরাসরি", "The verb comes directly after the subject."],
    ["separate", "আলাদা করা", "Do not separate the verb and the object."]
  ],
  prod: ["Write eight sentences about your family using subject + verb + object + place + time.",
    "Model: My mother cooks dinner in the kitchen every evening. My brother plays cricket near our house on Fridays. I read the newspaper at my desk every morning."],
  quiz: [
    ["Which sentence has correct word order?", ["I football play every day.", "I play every day football.", "I play football every day.", "Play I football every day."], 2, "Subject + verb + object + time."],
    ["Choose the correct sentence.", ["Is cold in January.", "It is cold in January.", "Cold is in January.", "In January is cold."], 1, "English needs a subject. Use *it* for weather."],
    ["Put in order: *bought / yesterday / a book / at New Market / she*", ["She bought a book at New Market yesterday.", "She yesterday bought a book at New Market.", "She bought at New Market a book yesterday.", "Yesterday she a book bought at New Market."], 0, "Object, then place, then time."],
    ["Which is correct?", ["She speaks very well English.", "She very well speaks English.", "She speaks English very well.", "She English speaks very well."], 2, "Keep the verb and object together. *Very well* comes after the object."],
    ["In *The students finished the exam early*, the object is", ["the students", "finished", "the exam", "early"], 2, "*The exam* receives the action."]
  ]
});

D({ n: 3, t: "The verb be, and there is / there are", s: "grammar", m: 45,
  goal: "Use am, is and are correctly in statements, negatives and questions, and describe what exists with there is and there are.",
  bn: "বাংলায় 'সে শিক্ষক' বললেই হয়, কিন্তু ইংরেজিতে be verb লাগবেই: He is a teacher। আবার যেখানে মূল ক্রিয়া আছে সেখানে বাড়তি am/is/are বসাবেন না (I agree, I am agree নয়)।",
  notes: [
    ["Forms of be", "Use *be* to say who or what someone is, how they are, and where they are.", [
      ["Subject", "Positive", "Negative", "Question"],
      ["I", "I am (I'm)", "I am not", "Am I...?"],
      ["he / she / it", "He is (He's)", "He is not (isn't)", "Is he...?"],
      ["you / we / they", "They are (They're)", "They are not (aren't)", "Are they...?"]
    ]],
    ["Be is not optional", "Bangla: *সে ডাক্তার*. English: *She **is** a doctor.* Bangla: *আমি ক্লান্ত*. English: *I **am** tired.* With an adjective, noun or place, you must have a form of *be*."],
    ["Do not add be to another verb", "*I agree*, not *I am agree*. *They live in Khulna*, not *They are live in Khulna*. Use *be* + verb only with -ing (*I am working*) or the passive, which come later."],
    ["There is / there are", "Use these to say something exists. *There **is** a mosque near my house.* *There **are** three rooms in the flat.* The verb agrees with the noun that follows. Do not use *have*: *There are many people*, not *There have many people*."]
  ],
  fix: [
    ["My father doctor.", "My father is a doctor."],
    ["I am agree with you.", "I agree with you."],
    ["There have many problems in our city.", "There are many problems in our city."]
  ],
  yt: ["verb to be am is are English grammar beginners", "there is there are English lesson", "am is are bangla tutorial"],
  tasks: [
    "Copy the table of be forms and say each line aloud three times.",
    "Write ten sentences describing people in your family with am, is and are (job, age, character, place).",
    "Describe your room or classroom in eight sentences using there is and there are.",
    "Change five of your sentences into negatives and five into questions."
  ],
  vocab: [
    ["exist", "অস্তিত্ব থাকা", "Many old buildings still exist in Old Dhaka."],
    ["tired", "ক্লান্ত", "I am tired after work."],
    ["agree", "একমত হওয়া", "I agree with your idea."],
    ["crowded", "ভিড়পূর্ণ", "The bus is crowded in the morning."],
    ["available", "পাওয়া যায�� এমন / খালি", "There are no seats available."],
    ["neighbour", "প্রতিবেশী", "Our neighbour is a teacher."]
  ],
  prod: ["Describe your home town in about 60 words. Use be at least five times and there is / there are at least three times.",
    "Model: My home town is Cumilla. It is a quiet town in the east of Bangladesh. The people are friendly. There is a big market in the centre, and there are several good colleges. There is not much traffic, so the air is clean. I am proud of my town."],
  quiz: [
    ["Choose the correct sentence.", ["She teacher.", "She is teacher.", "She is a teacher.", "She are a teacher."], 2, "Singular subject *she* takes *is*, and a job needs *a*."],
    ["*___ many students in the class.*", ["There is", "There are", "There have", "It has"], 1, "*Students* is plural, so *there are*."],
    ["Which is correct?", ["I am agree with him.", "I agree with him.", "I am agreeing with him.", "I agreed am with him."], 1, "*Agree* is a full verb. Do not add *am*."],
    ["*My parents ___ at home now.*", ["is", "am", "be", "are"], 3, "*Parents* is plural: are."],
    ["Make a question: *He is from Sylhet.*", ["Is he from Sylhet?", "He is from Sylhet?", "Does he is from Sylhet?", "Is from Sylhet he?"], 0, "For questions with be, put the verb before the subject."]
  ]
});

D({ n: 4, t: "Nouns: singular, plural, countable and uncountable", s: "grammar", m: 50,
  goal: "Form plurals correctly and stop adding -s to uncountable nouns such as information, advice and furniture.",
  bn: "বাংলায় 'অনেক তথ্য', 'অনেক বই' একইভাবে বলা যায়, কিন্তু ইংরেজিতে information, advice, furniture, homework গোনা যায় না, তাই এদের সঙ্গে -s বা a/an বসে না।",
  notes: [
    ["Making plurals", "Most nouns add -s. Learn the spelling changes.", [
      ["Rule", "Singular", "Plural"],
      ["most nouns: + s", "book, car", "books, cars"],
      ["-s, -sh, -ch, -x, -o: + es", "bus, watch, box", "buses, watches, boxes"],
      ["consonant + y: y to ies", "city, country", "cities, countries"],
      ["-f / -fe: often ves", "leaf, knife", "leaves, knives"],
      ["irregular", "man, woman, child, person, foot, tooth", "men, women, children, people, feet, teeth"]
    ]],
    ["Countable nouns", "You can count them: *one chair, two chairs*. In the singular they need *a/an* or another word such as *my, this, the*: *I have **a** pen*, not *I have pen*."],
    ["Uncountable nouns", "You cannot count them, so they have no plural and no *a/an*. They take a singular verb. Common ones: *information, advice, furniture, homework, luggage, equipment, news, knowledge, research, money, traffic, weather, work, water, rice.* Say *The information **is** useful*."],
    ["How to count the uncountable", "Use a unit: *a piece of advice, two pieces of furniture, a glass of water, a cup of tea, a lot of homework, some information.*"]
  ],
  fix: [
    ["He gave me many advices.", "He gave me a lot of advice."],
    ["I need some informations about the course.", "I need some information about the course."],
    ["All the childrens are playing.", "All the children are playing."]
  ],
  yt: ["countable and uncountable nouns English lesson", "plural nouns spelling rules English", "countable uncountable noun bangla"],
  tasks: [
    "Write the plural of these 20 nouns: baby, box, child, class, day, dish, foot, hero, key, lady, life, man, match, party, person, photo, potato, tooth, wife, woman. Check with a dictionary.",
    "Memorise the list of 15 uncountable nouns in the notes. Cover it and write it again from memory.",
    "Write ten sentences: five with countable nouns and five with uncountable nouns.",
    "Look around you and list 15 things you can see. Mark each as C (countable) or U (uncountable)."
  ],
  vocab: [
    ["information", "তথ্য", "The website has useful information."],
    ["advice", "পরামর্শ", "My teacher gave me good advice."],
    ["furniture", "আসবাবপত্র", "We bought new furniture."],
    ["equipment", "সরঞ্জাম", "The lab has modern equipment."],
    ["knowledge", "জ্ঞান", "Reading increases your knowledge."],
    ["luggage", "মালপত্র", "My luggage is very heavy."]
  ],
  prod: ["Write a shopping list and a short paragraph (50 words) about what you buy every month. Use at least four countable and four uncountable nouns.",
    "Model: Every month my family buys a lot of rice, some oil and sugar. We also buy two bottles of shampoo, a few bars of soap and some vegetables. I usually buy three or four notebooks and a pen. We do not buy much furniture or equipment because it is expensive."],
  quiz: [
    ["Which plural is correct?", ["childs", "childrens", "children", "childes"], 2, "*Child* is irregular: children."],
    ["Choose the correct sentence.", ["She gave me an advice.", "She gave me some advice.", "She gave me advices.", "She gave me many advice."], 1, "*Advice* is uncountable: no *an*, no -s, no *many*."],
    ["*The news ___ very bad today.*", ["are", "were", "is", "have"], 2, "*News* looks plural but is uncountable, so the verb is singular."],
    ["Which word is uncountable?", ["chair", "table", "furniture", "sofa"], 2, "You can count chairs and tables, but *furniture* is uncountable."],
    ["Plural of *country*:", ["countrys", "countries", "countryes", "countri"], 1, "Consonant + y changes to -ies."]
  ]
});

D({ n: 5, t: "Articles: a, an, the and no article", s: "grammar", m: 55,
  goal: "Choose between a, an, the and no article using three simple questions.",
  bn: "বাংলায় article নেই, তাই এটি বাংলাভাষীদের সবচেয়ে বেশি ভুলের জায়গা। মনে রাখুন: প্রথমবার বা যেকোনো একটি = a/an, নির্দিষ্ট বা আগে বলা = the, সাধারণভাবে বললে = কোনো article নয়।",
  notes: [
    ["Three questions", "1. Is the noun singular and countable, and is it one of many, or mentioned for the first time? Use **a/an**: *I saw **a** film.* 2. Do both you and the listener know which one? Use **the**: ***The** film was boring.* 3. Are you talking about things in general with a plural or uncountable noun? Use **no article**: *Films are expensive. Water is important.*"],
    ["A or an: listen, do not look", "Use *an* before a vowel **sound**: *an apple, an hour, an honest man, an MBA*. Use *a* before a consonant sound: *a book, a university, a European country, a one-way street*."],
    ["When to use the", "Unique things: *the sun, the sky, the internet, the government*. Superlatives and order: *the best, the first, the same*. Rivers, seas, mountain ranges and some countries: *the Padma, the Bay of Bengal, the Himalayas, the UK, the USA*. Musical instruments: *play the guitar*."],
    ["When to use no article", "Most countries, cities, languages, meals, sports and subjects: *Bangladesh, Dhaka, English, breakfast, football, physics*. Fixed phrases: *go to school, go to bed, at home, at work, by bus, on foot*. General ideas: *Life is hard. Education changes people.*"]
  ],
  fix: [
    ["I am student of Dhaka College.", "I am a student of Dhaka College."],
    ["The honesty is the best policy.", "Honesty is the best policy."],
    ["He is a honest man and works in an university.", "He is an honest man and works in a university."]
  ],
  yt: ["articles a an the English grammar lesson", "when to use the article the rules", "articles a an the bangla"],
  tasks: [
    "Write the three questions from the notes on a card and keep it on your desk for the whole programme.",
    "Take a short English news report (about 100 words). Underline every a, an and the, and explain the reason for five of them.",
    "Write 12 sentences: four with a/an, four with the, four with no article.",
    "Tell the story of your morning aloud. Each time you say a singular noun, check that it has an article or a word like my, this or that."
  ],
  vocab: [
    ["specific", "নির্দিষ্ট", "Give me a specific example."],
    ["general", "সাধারণ", "In general, children like sweets."],
    ["unique", "অনন্য / একমাত্র", "The sun is unique, so we say 'the sun'."],
    ["mention", "উল্লেখ করা", "He did not mention his name."],
    ["honest", "সৎ", "She is an honest person."],
    ["government", "সরকার", "The government built a new bridge."]
  ],
  prod: ["Write a short story (70 words) that begins: 'Yesterday I saw a man in a shop.' Use a/an when you first mention something and the when you mention it again.",
    "Model: Yesterday I saw a man in a shop. The man was holding a bag and an umbrella. The bag was very old, but the umbrella was new. He asked the shopkeeper for a cup of tea. The shopkeeper said the shop did not sell tea. The man smiled, opened the bag and took out a flask."],
  quiz: [
    ["*She wants to be ___ engineer.*", ["a", "an", "the", "no article"], 1, "*Engineer* begins with a vowel sound and is one of many: an."],
    ["*___ sun rises in the east.*", ["A", "An", "The", "No article"], 2, "There is only one sun: the."],
    ["Choose the correct sentence.", ["I go to the school by the bus.", "I go to school by bus.", "I go to a school by a bus.", "I go to school by the bus."], 1, "*Go to school* and *by bus* are fixed phrases without an article."],
    ["*He studies at ___ university in Rajshahi.*", ["a", "an", "these", "no article"], 0, "*University* begins with the sound /j/ (you), so we use *a*."],
    ["*___ water is necessary for life.*", ["A", "An", "The", "No article"], 3, "Water in general: no article."]
  ]
});

D({ n: 6, t: "Week 1 review and test", s: "review", m: 40, review: true,
  goal: "Check that the foundations are solid before you move on. Score 60% or more to pass.",
  bn: "ভুল হওয়া প্রশ্নের দিনটি আবার পড়ুন। না বুঝে সামনে এগোবেন না, কারণ পরের সপ্তাহগুলো এই ভিত্তির ওপর দাঁড়িয়ে আছে।",
  tasks: [
    "Re-read your notes for Days 1 to 5. Close the notebook and explain each topic aloud in one minute.",
    "Review all 30 words in your word notebook. Cover the meanings and test yourself.",
    "Write a 100-word paragraph introducing yourself and your family. Check word order, be, plurals and articles."
  ],
  quiz: [
    ["Which sentence is correct?", ["My brother engineer.", "My brother is engineer.", "My brother is an engineer.", "My brother is a engineer."], 2, "Be is required, and *engineer* takes *an*."],
    ["*There ___ a lot of traffic today.*", ["is", "are", "have", "has"], 0, "*Traffic* is uncountable, so it takes a singular verb."],
    ["Which word is an adjective?", ["danger", "dangerous", "dangerously", "endanger"], 1, "*Dangerous* describes a noun."],
    ["Choose the correct order.", ["We yesterday visited our uncle in Bogura.", "We visited in Bogura our uncle yesterday.", "We visited our uncle in Bogura yesterday.", "Yesterday visited we our uncle in Bogura."], 2, "Subject + verb + object + place + time."],
    ["*I need ___ about the admission test.*", ["an information", "some informations", "some information", "many informations"], 2, "*Information* is uncountable."],
    ["*___ Padma is ___ longest river I have seen.*", ["The / the", "A / the", "No article / a", "The / a"], 0, "Rivers take *the*, and so do superlatives."],
    ["Which sentence is correct?", ["I am agree with my teacher.", "Is raining outside.", "The peoples are waiting.", "It is raining outside."], 3, "Weather needs the subject *it*. The others contain typical errors."],
    ["Plural of *woman*:", ["womans", "women", "womens", "womanes"], 1, "Irregular plural: women."]
  ]
});
D({ n: 7, t: "Pronouns and possessives", s: "grammar", m: 45,
  goal: "Choose the right pronoun form (I, me, my, mine, myself) and stop mixing he and she.",
  bn: "বাংলায় 'সে' ছেলে ও ম���য়ে দুজনের জন্যই, কিন্তু ইংরেজিতে ছেলে = he, মেয়ে = she, বস্তু বা প্রাণী = it। কথা বলার সময় এটি সচেতনভাবে অভ্যাস করুন।",
  notes: [
    ["Five forms", "Each pronoun has five forms. Learn the table by heart.", [
      ["Subject", "Object", "Possessive + noun", "Possessive alone", "Reflexive"],
      ["I", "me", "my", "mine", "myself"],
      ["you", "you", "your", "yours", "yourself"],
      ["he", "him", "his", "his", "himself"],
      ["she", "her", "her", "hers", "herself"],
      ["it", "it", "its", "(none)", "itself"],
      ["we", "us", "our", "ours", "ourselves"],
      ["they", "them", "their", "theirs", "themselves"]
    ]],
    ["Subject or object?", "Before the verb use the subject form: ***She** called me.* After a verb or preposition use the object form: *I called **her**. This is for **him**. Between you and **me**.* With two people, put yourself last: *My friend and I went*, not *Me and my friend went*."],
    ["My or mine?", "*My, your, her, our, their* need a noun: *This is **my** book.* *Mine, yours, hers, ours, theirs* stand alone: *This book is **mine**.* Never write an apostrophe in these: *yours*, not *your's*."],
    ["Its and it's", "*Its* = belonging to it: *The cat hurt **its** leg.* *It's* = it is / it has: ***It's** raining.* Also learn *this/these* (near) and *that/those* (far): *this book, these books, that house, those houses*."]
  ],
  fix: [
    ["My sister is a nurse. He works in Chattogram.", "My sister is a nurse. She works in Chattogram."],
    ["Me and my brother went to the market.", "My brother and I went to the market."],
    ["This pen is my.", "This pen is mine."]
  ],
  yt: ["English pronouns subject object possessive lesson", "possessive adjectives and pronouns my mine", "pronoun bangla tutorial English grammar"],
  tasks: [
    "Copy the pronoun table. Test yourself until you can write it from memory without a mistake.",
    "Write ten sentences about a female relative and ten about a male relative. Read them aloud and check every he, she, his and her.",
    "Complete with the correct form: 'This is (I) ___ phone. It is ___ . Give it to ___ .' Make similar sets for you, he, she, we and they.",
    "Write five sentences with this, that, these and those about things in your room."
  ],
  vocab: [
    ["belong to", "কারও হওয়া / মালিকানাধীন", "This bag belongs to me."],
    ["own", "নিজের", "She has her own room."],
    ["relative", "আত্মীয়", "Many relatives came to the wedding."],
    ["introduce", "পরিচ���় করিয়ে দেওয়া", "Let me introduce myself."],
    ["each other", "একে অপরকে", "They help each other."],
    ["borrow", "ধার নেওয়া", "Can I borrow your pen?"]
  ],
  prod: ["Write 70 words about your best friend and his or her family. Use at least eight different pronouns.",
    "Model: My best friend is Nadia. She lives near our house, and I have known her for ten years. Her father is a doctor, and his clinic is next to their flat. Nadia and I study together. She often lends me her notes, and I give her mine. We help each other before exams."],
  quiz: [
    ["*My mother is kind. ___ helps everyone.*", ["He", "She", "Her", "It"], 1, "*Mother* is female: she."],
    ["*The teacher gave ___ a book.*", ["I", "my", "me", "mine"], 2, "After the verb we need the object form: me."],
    ["*That car is ___ .*", ["their", "theirs", "their's", "them"], 1, "No noun follows, so use *theirs*, with no apostrophe."],
    ["*The dog is wagging ___ tail.*", ["it's", "its", "it", "his's"], 1, "*Its* = belonging to it. *It's* = it is."],
    ["Which is correct?", ["Me and Rahim are friends.", "Rahim and me are friends.", "Rahim and I are friends.", "I and Rahim is friends."], 2, "Subject form *I*, and the other person comes first."]
  ]
});

D({ n: 8, t: "Present simple", s: "grammar", m: 50,
  goal: "Talk about habits, routines and facts, and never forget the -s for he, she and it.",
  bn: "নিয়মিত অভ্যাস বা চিরন্তন সত্য বোঝাতে present simple। He/she/it হলে ক্রিয়ার শেষে s/es বসে, আর প্রশ্ন ও না-বোধক বাক্যে do/does আসে।",
  notes: [
    ["When to use it", "Habits and routines: *I get up at six.* Facts: *The sun rises in the east.* Permanent situations: *She works in a bank.* Timetables: *The train leaves at 8.15.* Signal words: *always, usually, often, sometimes, never, every day, on Fridays.*"],
    ["Forms", "Only *he, she, it* change. Negatives and questions use *do/does* + the base verb.", [
      ["", "Positive", "Negative", "Question"],
      ["I / you / we / they", "work", "do not (don't) work", "Do you work?"],
      ["he / she / it", "works", "does not (doesn't) work", "Does she work?"]
    ]],
    ["Spelling of the -s form", "Most verbs + s: *plays, reads*. After -s, -sh, -ch, -x, -o + es: *watches, goes, fixes*. Consonant + y becomes -ies: *study, studies*. Irregular: *have, has*."],
    ["After does and doesn't, no -s", "*Does* already carries the -s. *She doesn't **like** tea. Does he **live** here?* Never *doesn't likes* or *Does he lives*."]
  ],
  fix: [
    ["My father go to office by bus.", "My father goes to the office by bus."],
    ["She don't like coffee.", "She doesn't like coffee."],
    ["I am go to college every day.", "I go to college every day."]
  ],
  yt: ["present simple tense English lesson for beginners", "present simple do does questions negatives", "present indefinite tense bangla"],
  tasks: [
    "Write your daily routine in 12 sentences with clock times (I get up at..., I have breakfast at...).",
    "Rewrite the same routine about your mother, father or a friend. Every verb must take -s or -es.",
    "Write five negative sentences and five questions about that person with doesn't and does.",
    "Say the routine aloud without reading. Record it and listen for every -s ending."
  ],
  vocab: [
    ["routine", "নিয়মিত কাজ / রুটিন", "Exercise is part of my daily routine."],
    ["habit", "অভ্যাস", "Reading before bed is a good habit."],
    ["regularly", "নিয়মিতভাবে", "She regularly visits her parents."],
    ["rarely", "কদাচিৎ", "He rarely eats outside."],
    ["commute", "যাতায়াত করা (কর্মস্থলে)", "I commute to work by bus."],
    ["attend", "উপস্থিত হওয়া", "I attend English classes twice a week."]
  ],
  prod: ["Describe a typical day in the life of someone you know well (80 words). Use at least ten present simple verbs and two negatives.",
    "Model: My uncle is a shopkeeper. He gets up at five and prays. Then he walks to his shop, which opens at seven. He sells rice, oil and other groceries. He doesn't close the shop at lunchtime; he eats there. In the evening he counts the money and goes home at nine. He doesn't work on Fridays. He usually spends that day with his children."],
  quiz: [
    ["*She ___ English every evening.*", ["study", "studys", "studies", "is study"], 2, "Consonant + y changes to -ies for he/she/it."],
    ["*___ your brother play cricket?*", ["Do", "Does", "Is", "Are"], 1, "*Your brother* = he, so *does*."],
    ["Choose the correct negative.", ["He doesn't likes fish.", "He don't like fish.", "He doesn't like fish.", "He isn't like fish."], 2, "*Doesn't* + base verb."],
    ["Which sentence describes a habit?", ["I am reading a novel now.", "I read the newspaper every morning.", "I read a novel last week.", "I will read it tomorrow."], 1, "*Every morning* signals a routine: present simple."],
    ["*Water ___ at 100 degrees Celsius.*", ["boil", "boils", "is boiling", "boiling"], 1, "A general fact with a singular subject: boils."]
  ]
});

D({ n: 9, t: "Present continuous, and simple or continuous?", s: "grammar", m: 50,
  goal: "Describe what is happening now with am/is/are + -ing, and know which verbs never take -ing.",
  bn: "এই মুহূর্তে যা চলছে = present continuous (I am reading)। কিন্তু know, like, want, understand, have (মালিকানা) এর মতো অবস্থা-বোঝানো ক্রিয়ায় -ing বসে না: I know, I am knowing নয়।",
  notes: [
    ["Form and use", "*am/is/are* + verb-*ing*. Use it for actions happening now (*She **is cooking***), temporary situations (*I **am staying** with my aunt this month*) and changes (*Prices **are rising***). Signal words: *now, at the moment, today, this week, currently, Look!*"],
    ["Spelling of -ing", "Most verbs + ing: *reading*. Final -e is dropped: *write, writing*. Short verb ending consonant-vowel-consonant doubles: *run, running; sit, sitting*. -ie becomes -ying: *lie, lying*."],
    ["Simple or continuous?", "Compare them side by side.", [
      ["Present simple", "Present continuous"],
      ["I work in a bank. (permanent)", "I am working from home this week. (temporary)"],
      ["She speaks three languages. (ability, fact)", "She is speaking to her boss. (now)"],
      ["What do you do? (your job)", "What are you doing? (at this moment)"]
    ]],
    ["State verbs: no -ing", "Verbs of thinking, feeling and owning describe states, not actions: *know, understand, believe, remember, like, love, hate, want, need, prefer, mean, belong, own, seem* and *have* (= own). *I **know** the answer. She **wants** tea. He **has** a car.*"]
  ],
  fix: [
    ["I am knowing him very well.", "I know him very well."],
    ["She is having two brothers.", "She has two brothers."],
    ["Look! The bus comes.", "Look! The bus is coming."]
  ],
  yt: ["present continuous tense English lesson", "present simple vs present continuous difference", "present continuous tense bangla"],
  tasks: [
    "Look out of a window for five minutes. Write ten sentences about what people are doing right now.",
    "Write the -ing form of: begin, come, cut, die, enjoy, get, make, open, plan, put, stop, study, swim, travel, write.",
    "Write six pairs of sentences like the table (one simple, one continuous) about yourself.",
    "Describe a photo on your phone aloud for one minute using the present continuous."
  ],
  vocab: [
    ["currently", "বর্তমানে", "I am currently preparing for an exam."],
    ["temporary", "সাময়িক", "This is a temporary job."],
    ["permanent", "স্থায়ী", "He wants a permanent position."],
    ["prefer", "বেশি পছন্দ করা", "I prefer tea to coffee."],
    ["increase", "বৃদ্ধি পাওয়া", "The population is increasing."],
    ["at the moment", "এই মুহূর্তে", "She is busy at the moment."]
  ],
  prod: ["Write a message to a friend (70 words) describing where you are and what is happening around you right now. Add two sentences about what you usually do at this time.",
    "Model: Hi Sami! I am sitting in the college library at the moment. It is raining outside, so many students are waiting here. Two boys are whispering at the next table, and the librarian is looking at them. I am trying to finish my assignment. I usually go home at this time and have lunch with my family, but today I am staying late."],
  quiz: [
    ["*Be quiet. The baby ___ .*", ["sleeps", "is sleeping", "sleep", "sleeping"], 1, "Happening now: is sleeping."],
    ["Which sentence is correct?", ["I am wanting a cup of tea.", "I want a cup of tea.", "I wanting a cup of tea.", "I am want a cup of tea."], 1, "*Want* is a state verb. No -ing."],
    ["*He usually ___ tea, but today he ___ coffee.*", ["drinks / is drinking", "is drinking / drinks", "drink / drinking", "drinks / drinks"], 0, "Habit = simple. Today's exception = continuous."],
    ["The -ing form of *swim* is", ["swiming", "swimming", "swimeing", "swimmeing"], 1, "Consonant-vowel-consonant: double the last letter."],
    ["*What ___ ? - I am a nurse.*", ["are you doing", "do you do", "you do", "are you do"], 1, "*What do you do?* asks about your job."]
  ]
});

D({ n: 10, t: "Asking questions", s: "grammar", m: 50,
  goal: "Form yes/no and wh- questions with the correct word order, including subject questions.",
  bn: "বাংলায় শুধু সুর বদলালেই প্রশ্ন হয় (তুমি যাচ্ছ?), কিন্তু ইংরেজিতে সাহায্যকারী ক্রিয়া (do, does, is, are, can) কর্তার আগে আনতে হয়: Are you going?",
  notes: [
    ["Yes/no questions", "Put the auxiliary verb before the subject. With be and modals, just swap: *She is ready. **Is she** ready? He can swim. **Can he** swim?* With other verbs, add *do/does*: *They live here. **Do they** live here?*"],
    ["Wh- questions: QUASV", "Question word + auxiliary + subject + verb. *Where **do you** live? What **is she** doing? When **does the class** start? Why **are they** late?*", [
      ["Question word", "Asks about", "Example"],
      ["What", "thing, action", "What do you study?"],
      ["Where", "place", "Where does he work?"],
      ["When / What time", "time", "When do you get up?"],
      ["Why", "reason", "Why are you learning English?"],
      ["Who", "person", "Who is your teacher?"],
      ["Which", "choice", "Which bus goes to Mirpur?"],
      ["How", "manner", "How do you go to college?"],
      ["How much / many / often / long / far / old", "amount, frequency, length", "How often do you practise?"]
    ]],
    ["Subject questions", "When *who* or *what* is the subject, do not use *do/does*: ***Who lives** here?* (not *Who does live*). ***What happened?*** Compare: *Who **did you call**?* (you = subject) and *Who **called** you?* (who = subject)."],
    ["Short answers", "Answer with the auxiliary, not the main verb: *Do you like tea? Yes, I **do**. Is he at home? No, he **isn't**. Can you drive? Yes, I **can**.*"]
  ],
  fix: [
    ["Where you are going?", "Where are you going?"],
    ["What means this word?", "What does this word mean?"],
    ["Why you didn't call me?", "Why didn't you call me?"]
  ],
  yt: ["how to ask questions in English wh questions", "question formation English grammar yes no questions", "wh question bangla tutorial"],
  tasks: [
    "Write 15 questions you could ask a new classmate. Use every question word in the table at least once.",
    "Answer your own 15 questions in full sentences.",
    "Change these statements into questions: He works in Dhaka. They are playing. She can cook. You like mangoes. The shop opens at nine.",
    "Interview a friend or family member in English for five minutes using your questions. If no one is free, ask and answer aloud yourself."
  ],
  vocab: [
    ["reason", "কারণ", "What is the reason for the delay?"],
    ["explain", "ব্যাখ্যা করা", "Could you explain this question?"],
    ["repeat", "আবার বলা", "Could you repeat that, please?"],
    ["how often", "কত ঘন ঘন", "How often do you read English?"],
    ["distance", "দূরত্ব", "What is the distance from Dhaka to Sylhet?"],
    ["purpose", "উদ্দেশ্য", "What is the purpose of your visit?"]
  ],
  prod: ["Imagine you meet a foreign visitor in your town. Write a dialogue of ten lines in which you ask at least six questions.",
    "Model: A: Excuse me, where are you from? B: I am from Malaysia. A: How long are you staying in Bangladesh? B: For two weeks. A: What do you think of the food? B: It is delicious but quite spicy. A: Which places do you want to visit? B: Cox's Bazar and Sylhet. A: Who is travelling with you? B: My wife and my son."],
  quiz: [
    ["Which question is correct?", ["Where you live?", "Where do you live?", "Where you do live?", "Where does you live?"], 1, "Question word + do + subject + verb."],
    ["*___ does the class start? - At ten o'clock.*", ["Where", "Who", "When", "Why"], 2, "The answer is a time."],
    ["Which is correct?", ["Who does teach you English?", "Who teach you English?", "Who teaches you English?", "Who do teaches you English?"], 2, "*Who* is the subject, so there is no *does* and the verb takes -s."],
    ["*___ brothers do you have?*", ["How much", "How many", "How long", "How often"], 1, "*Brothers* is countable plural: how many."],
    ["*Does she speak French?* Short answer:", ["Yes, she speaks.", "Yes, she do.", "Yes, she does.", "Yes, she is."], 2, "Repeat the auxiliary: does."]
  ]
});

D({ n: 11, t: "Adjectives and adverbs", s: "grammar", m: 50,
  goal: "Describe things with adjectives, describe actions with adverbs, and put frequency adverbs in the right place.",
  bn: "Adjective বিশেষ্যকে বর্ণনা করে (a careful driver), adverb ক্রিয়াকে বর্ণনা করে (He drives carefully)। মনে রাখুন bored = আমি বিরক্ত, boring = জিনিসটা বিরক্তিকর।",
  notes: [
    ["Adjectives", "They go before a noun or after *be*: *a **tall** building; the building is **tall***. They never take -s: *two **big** houses*, not *bigs houses*. Usual order when you use several: opinion, size, age, colour, origin, material: *a beautiful big old brown wooden table*."],
    ["-ed or -ing?", "*-ed* says how a person feels. *-ing* describes the thing that causes the feeling. *I am **bored** because the film is **boring**. She was **surprised** by the **surprising** news.* Other pairs: *interested/interesting, tired/tiring, excited/exciting, confused/confusing.*"],
    ["Adverbs of manner", "Usually adjective + *-ly*: *slow, slowly; careful, carefully; easy, easily*. Irregular: *good, **well**; fast, **fast**; hard, **hard**; late, **late***. Be careful: *hardly* means almost not (*I **hardly** know him*), and *lately* means recently."],
    ["Adverbs of frequency", "*always, usually, often, sometimes, rarely, never* go **before the main verb** but **after be**: *I **always** drink tea. She is **always** late. He doesn't **usually** eat meat.*"]
  ],
  fix: [
    ["I am very boring in this class.", "I am very bored in this class."],
    ["He drives very careful.", "He drives very carefully."],
    ["She always is late for class.", "She is always late for class."]
  ],
  yt: ["adjectives and adverbs English grammar lesson", "ed and ing adjectives bored boring", "adjective adverb bangla tutorial"],
  tasks: [
    "Make adverbs from: angry, bad, beautiful, careful, easy, fast, good, happy, hard, loud, quick, quiet, safe, slow. Write one sentence with each of five.",
    "Write six sentences with -ed and -ing pairs about films, lessons or journeys.",
    "Write ten sentences about how often you do things, using six different adverbs of frequency.",
    "Describe three objects near you with three adjectives each, in the correct order."
  ],
  vocab: [
    ["confident", "আত্মবিশ্বাসী", "She is a confident speaker."],
    ["fluently", "অনর্গলভাবে", "He speaks English fluently."],
    ["accurate", "নির্ভুল", "Your answer must be accurate."],
    ["hardly", "প্রায় না", "I could hardly hear him."],
    ["exhausted", "অত্যন্ত ক্লান্ত", "I was exhausted after the journey."],
    ["frequently", "ঘন ঘন", "Buses run frequently on this road."]
  ],
  prod: ["Describe your favourite place in 80 words. Use at least eight adjectives, three adverbs of manner and two adverbs of frequency.",
    "Model: My favourite place is a small quiet lake near my village. The water is clear and cool, and tall green trees stand around it. I often go there in the early morning. Birds sing softly, and fishermen row their old wooden boats slowly across the lake. I am never bored there. I usually sit silently for an hour and feel completely relaxed."],
  quiz: [
    ["*The lecture was so ___ that I fell asleep.*", ["bored", "boring", "bore", "boringly"], 1, "The lecture causes the feeling: boring."],
    ["*She speaks English ___ .*", ["good", "well", "goodly", "nice"], 1, "The adverb of *good* is *well*."],
    ["Which sentence is correct?", ["He never is on time.", "He is never on time.", "Never he is on time.", "He is on never time."], 1, "Frequency adverbs go after *be*."],
    ["*He worked ___ all day.*", ["hard", "hardly", "harder than", "hardness"], 0, "*Hard* is both adjective and adverb. *Hardly* means almost not."],
    ["Choose the correct order.", ["a wooden old small box", "a small old wooden box", "an old wooden small box", "a small wooden old box"], 1, "Size, age, material."]
  ]
});

D({ n: 12, t: "Week 2 review and test", s: "review", m: 40, review: true,
  goal: "Check pronouns, both present tenses, question forms and describing words. Score 60% or more to pass.",
  bn: "প্রতিটি ভুল উত্তরের ব্যাখ্যা পড়ুন এবং সঠিক বাক্যটি খাতায় তিনবার লিখুন।",
  tasks: [
    "Re-read your notes for Days 7 to 11 and say three example sentences aloud for each day.",
    "Test yourself on all the vocabulary from Weeks 1 and 2 (60 words).",
    "Write 120 words: 'A normal weekday for me, and what I am doing differently this week.' Underline every verb and check its form."
  ],
  quiz: [
    ["*My sister ___ in a hospital. ___ is a nurse.*", ["work / He", "works / She", "works / He", "working / She"], 1, "He/she/it takes -s, and a sister is *she*."],
    ["*___ he ___ to work by bus?*", ["Do / go", "Does / goes", "Does / go", "Is / go"], 2, "*Does* + base verb."],
    ["Which sentence is correct?", ["I am understanding the lesson.", "I understand the lesson.", "I am understand the lesson.", "I understanding the lesson."], 1, "*Understand* is a state verb."],
    ["*Listen! Someone ___ at the door.*", ["knocks", "knock", "is knocking", "knocking"], 2, "*Listen!* shows it is happening now."],
    ["Which question is correct?", ["What time the train leaves?", "What time does the train leave?", "What time does the train leaves?", "What time do the train leave?"], 1, "Does + subject + base verb."],
    ["*This is not my bag. It is ___ .*", ["her", "her's", "hers", "she"], 2, "Possessive pronoun standing alone: hers."],
    ["*The match was ___ , so everyone felt ___ .*", ["excited / exciting", "exciting / excited", "exciting / exciting", "excited / excited"], 1, "The match is exciting. People feel excited."],
    ["*She ___ late for work.*", ["never is", "is never", "never", "does never"], 1, "After be: is never."]
  ]
});
D({ n: 13, t: "Past simple", s: "grammar", m: 55,
  goal: "Talk about finished actions with regular and irregular verbs, and use did correctly in negatives and questions.",
  bn: "অতীতে শেষ হয়ে যাওয়া কাজ = past simple। did থাকলে মূল ক্রিয়া সবসময় base form এ থাকে: I didn't go (didn't went নয়)।",
  notes: [
    ["Use", "For actions that started and finished in the past, usually with a time: *yesterday, last week, two years ago, in 2019, when I was a child*. *I **visited** Sylhet last year.*"],
    ["Regular verbs: + ed", "*work, worked; live, lived; study, studied; stop, stopped.* The ending has three sounds: /t/ after voiceless sounds (*worked, watched*), /d/ after voiced sounds (*played, lived*), and /ɪd/ only after t or d (*wanted, needed*). Do not say *work-ed* with an extra syllable."],
    ["Irregular verbs: learn them", "The most common verbs are irregular. Learn ten a day from a list.", [
      ["Base", "Past", "Base", "Past"],
      ["be", "was / were", "go", "went"],
      ["have", "had", "come", "came"],
      ["do", "did", "see", "saw"],
      ["say", "said", "take", "took"],
      ["get", "got", "give", "gave"],
      ["make", "made", "buy", "bought"],
      ["know", "knew", "think", "thought"],
      ["eat", "ate", "write", "wrote"]
    ]],
    ["Negatives and questions", "*did not (didn't)* + base verb. *Did* + subject + base verb. *I **didn't see** him. **Did** you **see** him? Where **did** she **go**?* With *be*, use *was/were* without did: *I **wasn't** late. **Were** you there?*"]
  ],
  fix: [
    ["I didn't went to college yesterday.", "I didn't go to college yesterday."],
    ["Did you saw the match?", "Did you see the match?"],
    ["He buyed a new phone last week.", "He bought a new phone last week."]
  ],
  yt: ["past simple tense English lesson regular irregular verbs", "irregular verbs list pronunciation English", "past indefinite tense bangla"],
  tasks: [
    "Find a list of irregular verbs (any dictionary or grammar book has one). Learn the first 30 and test yourself in writing.",
    "Write 12 sentences about what you did yesterday, from morning to night.",
    "Write five things you did not do last week and five questions to ask a friend about last weekend.",
    "Say these aloud with the correct -ed sound: walked, played, wanted, stopped, lived, needed, watched, opened, decided, laughed."
  ],
  vocab: [
    ["ago", "আগে", "I finished school three years ago."],
    ["decide", "সিদ্ধান্ত নেওয়া", "I decided to learn English seriously."],
    ["arrive", "পৌঁছানো", "We arrived at the station at noon."],
    ["happen", "ঘটা", "What happened yesterday?"],
    ["spend", "ব্যয় করা / কাটানো", "I spent two hours on my homework."],
    ["childhood", "শৈশব", "I spent my childhood in a village."]
  ],
  prod: ["Write about the best day of your last holiday (90 words). Use at least twelve past simple verbs, including two negatives.",
    "Model: Last Eid I went to my grandparents' village. I woke up early, put on new clothes and went to the Eidgah with my cousins. After the prayer we visited our relatives and ate a lot of sweets. In the afternoon we played cricket in a field near the river. I didn't sleep at noon because I didn't want to miss anything. In the evening my grandmother told us old stories. I felt very happy that day."],
  quiz: [
    ["*We ___ to Cox's Bazar last winter.*", ["go", "goed", "went", "gone"], 2, "Past of *go* is *went*."],
    ["Choose the correct negative.", ["She didn't came.", "She didn't come.", "She not came.", "She doesn't came."], 1, "*Didn't* + base verb."],
    ["*Where ___ you ___ this shirt?*", ["did / buy", "did / bought", "do / bought", "were / buy"], 0, "*Did* + subject + base verb."],
    ["Which verb has the ending sound /ɪd/?", ["played", "worked", "decided", "lived"], 2, "After t or d the ending is a separate syllable: de-ci-ded."],
    ["*They ___ at home yesterday evening.*", ["wasn't", "didn't be", "weren't", "didn't were"], 2, "*Be* forms its own negative: were not."]
  ]
});

D({ n: 14, t: "Past continuous, when and while", s: "grammar", m: 45,
  goal: "Describe background actions in the past and combine a long action with a short one.",
  bn: "অতীতে একটি কাজ চলছিল (was/were + ing), এমন সময় আরেকটি ঘটল (past simple): I was sleeping when the phone rang।",
  notes: [
    ["Form and use", "*was/were* + verb-*ing*. It shows an action in progress at a past moment: *At nine last night I **was watching** the news.* It sets the scene in a story: *The sun **was shining** and people **were walking** in the park.*"],
    ["Long action + short action", "The long action is past continuous. The short action that interrupts it is past simple. *I **was walking** home when it **started** to rain.* Use *when* before the short action and *while* before the long one: ***While** I **was cooking**, the gas **ran out**.*"],
    ["Two actions at the same time", "Both in the past continuous with *while*: *While I **was studying**, my brother **was playing** games.* Two short actions in a row are both past simple: *When he **arrived**, we **had** dinner* (first he arrived, then we ate)."],
    ["Remember state verbs", "They still do not take -ing: *I **knew** the answer*, not *I was knowing*. *She **wanted** to leave*, not *She was wanting*."]
  ],
  fix: [
    ["When I walked to school, I was seeing an accident.", "When I was walking to school, I saw an accident."],
    ["They was playing football.", "They were playing football."],
    ["While he drove, his phone was ringing.", "While he was driving, his phone rang."]
  ],
  yt: ["past continuous tense English lesson", "past simple vs past continuous when while", "past continuous tense bangla"],
  tasks: [
    "Write what you were doing at these times yesterday: 7 am, 10 am, 1 pm, 4 pm, 8 pm, 11 pm.",
    "Write eight sentences joining a long and a short action with when or while.",
    "Describe the scene at a wedding, market or station you remember: write six sentences in the past continuous.",
    "Tell a two-minute story aloud that begins 'Last week I was coming home when...'. Record it."
  ],
  vocab: [
    ["suddenly", "হঠাৎ", "Suddenly the lights went out."],
    ["interrupt", "বাধা দেওয়া", "A phone call interrupted the meeting."],
    ["background", "পটভূমি", "Music was playing in the background."],
    ["notice", "লক্ষ করা", "I noticed a strange smell."],
    ["meanwhile", "ইতিমধ্যে", "Meanwhile, my sister was setting the table."],
    ["accident", "দুর্ঘটনা", "There was an accident on the highway."]
  ],
  prod: ["Write a short story (90 words) about something surprising that happened to you. Set the scene with the past continuous, then tell the events in the past simple.",
    "Model: It was raining heavily and I was waiting for a bus near Farmgate. People were running to find shelter. While I was standing under a shop's roof, I noticed a small wallet on the ground. I picked it up and found an ID card inside. I called the number on the card. The owner was looking for it in the next street. He arrived in five minutes and thanked me again and again."],
  quiz: [
    ["*I ___ TV when the electricity went off.*", ["watched", "was watching", "am watching", "watch"], 1, "The long action in progress: was watching."],
    ["*While she ___ , the phone ___ .*", ["cooked / was ringing", "was cooking / rang", "is cooking / rang", "cooking / ring"], 1, "Long action continuous, short action simple."],
    ["*What ___ you ___ at 8 pm yesterday?*", ["did / doing", "were / do", "were / doing", "was / doing"], 2, "*You* takes *were*, plus -ing."],
    ["Which sentence means the dinner started after he arrived?", ["When he arrived, we were having dinner.", "When he arrived, we had dinner.", "While he arrived, we had dinner.", "He was arriving when we had dinner."], 1, "Two past simple verbs show one action after another."],
    ["Which is correct?", ["I was knowing the answer.", "I knew the answer.", "I were knowing the answer.", "I was know the answer."], 1, "*Know* is a state verb."]
  ]
});

D({ n: 15, t: "Present perfect", s: "grammar", m: 55,
  goal: "Use have/has + past participle for experiences, recent news and situations that started in the past and continue now.",
  bn: "অতীতের সঙ্গে বর্তমানের যোগ থাকলে present perfect। since = কখন থেকে (since 2015), for = কতদিন ধরে (for ten years)। নির্দিষ্ট অতীত সময় (yesterday, in 2019) থাকলে present perfect হবে না।",
  notes: [
    ["Form", "*have/has* + past participle (verb 3). Regular participles end in -ed. Irregular ones must be learnt: *go, went, **gone**; see, saw, **seen**; write, wrote, **written**; eat, ate, **eaten**; do, did, **done**; be, was, **been***.", [
      ["Positive", "Negative", "Question"],
      ["I have finished.", "I have not (haven't) finished.", "Have you finished?"],
      ["She has gone.", "She has not (hasn't) gone.", "Has she gone?"]
    ]],
    ["Use 1: life experience", "When the time is not important or not said. *I **have visited** Sundarbans. **Have** you **ever eaten** sushi? She **has never flown** in a plane.*"],
    ["Use 2: recent actions with a result now", "*I **have lost** my key* (so I cannot get in). With *just, already, yet*: *He **has just left**. I **have already eaten**. **Have** you **finished yet**? I **haven't finished yet**.*"],
    ["Use 3: unfinished time, with for and since", "*I **have lived** in Dhaka **for** ten years* (and I still live here). *She **has worked** here **since** 2020.* *For* + a period (*for two hours, for a long time*). *Since* + a starting point (*since Monday, since I was a child*)."]
  ],
  fix: [
    ["I am living here since 2015.", "I have lived here since 2015."],
    ["I have seen him yesterday.", "I saw him yesterday."],
    ["She has went to the market.", "She has gone to the market."]
  ],
  yt: ["present perfect tense English lesson", "for and since present perfect", "present perfect tense bangla"],
  tasks: [
    "Learn the past participles of 30 irregular verbs. Write the three forms in columns.",
    "Write eight 'Have you ever...?' questions and answer them truthfully.",
    "Write six true sentences with for and six with since.",
    "Write five things you have already done today and three you have not done yet."
  ],
  vocab: [
    ["experience", "অভিজ্ঞতা", "I have no experience of working abroad."],
    ["recently", "সম্প্রতি", "I have recently started a course."],
    ["already", "ইতিমধ্যে", "She has already submitted the form."],
    ["yet", "এখনো", "I haven't received the result yet."],
    ["achieve", "অর্জন করা", "He has achieved a lot in his career."],
    ["abroad", "বিদেশে", "My cousin has lived abroad for five years."]
  ],
  prod: ["Write 80 words about your life so far: places you have visited, things you have learnt, and how long you have done your main activities.",
    "Model: I have lived in Rajshahi since I was born. I have studied English for eight years, but I have never spoken to a foreigner. I have visited Dhaka several times, and I have been to Cox's Bazar once. I have just finished my HSC exams, but I haven't received my result yet. I have already decided to study abroad, so I have started this programme."],
  quiz: [
    ["*I ___ never ___ a tiger.*", ["have / saw", "have / seen", "has / seen", "did / seen"], 1, "*Have* + past participle *seen*."],
    ["*She has worked here ___ 2018.*", ["for", "since", "from", "ago"], 1, "A starting point takes *since*."],
    ["Which sentence is correct?", ["I have finished it yesterday.", "I finished it yesterday.", "I have finish it yesterday.", "I finishing it yesterday."], 1, "*Yesterday* is a finished time: past simple."],
    ["*___ you done your homework ___ ?*", ["Did / yet", "Have / yet", "Have / ago", "Has / already"], 1, "Questions with *yet* use the present perfect."],
    ["*We have known each other ___ ten years.*", ["since", "for", "from", "during"], 1, "A period of time takes *for*."]
  ]
});

D({ n: 16, t: "Present perfect or past simple?", s: "grammar", m: 50,
  goal: "Choose between I did and I have done with confidence, and meet the present perfect continuous.",
  bn: "প্রশ্ন করুন: সময়টা কি শেষ হয়ে গেছে এবং বলা আছে? তাহলে past simple (I went yesterday)। সময় বলা নেই বা এখনো চলছে? তাহলে present perfect (I have been there)।",
  notes: [
    ["The key difference", "Past simple = finished time, finished action. Present perfect = a link to now.", [
      ["Past simple", "Present perfect"],
      ["I lost my key yesterday. (when: yesterday)", "I have lost my key. (I do not have it now)"],
      ["I lived in Khulna for two years. (not now)", "I have lived in Khulna for two years. (still there)"],
      ["Did you see the film last night?", "Have you seen the film? (at any time)"],
      ["with: yesterday, last year, ago, in 2020, when", "with: ever, never, just, already, yet, so far, since"]
    ]],
    ["Start general, then give details", "A conversation often begins with the present perfect and continues in the past simple. *A: **Have** you ever **been** to Sylhet? B: Yes, I **have**. I **went** there in 2022. I **stayed** for a week.*"],
    ["Been and gone", "*He **has been** to Dubai* = he went and came back. *He **has gone** to Dubai* = he is there now."],
    ["Present perfect continuous", "*have/has been* + -ing shows how long an activity has continued up to now: *I **have been learning** English **for** two years. It **has been raining since** morning.* Use it when the activity itself and its length are the focus."]
  ],
  fix: [
    ["I have passed my SSC in 2021.", "I passed my SSC in 2021."],
    ["When have you arrived?", "When did you arrive?"],
    ["I am waiting for you since two hours.", "I have been waiting for you for two hours."]
  ],
  yt: ["present perfect vs past simple English lesson", "present perfect continuous tense lesson", "present perfect vs past simple bangla"],
  tasks: [
    "Copy the comparison table and add four more pairs of your own.",
    "Write a dialogue of ten lines that starts with 'Have you ever...?' and continues with past simple details.",
    "Write six sentences with have been + -ing about things you started in the past and still do.",
    "Find ten sentences with have/has + past participle in an English news article and explain why the writer did not use the past simple."
  ],
  vocab: [
    ["so far", "এখন পর্যন্ত", "I have read three chapters so far."],
    ["previous", "আগের", "My previous job was in a school."],
    ["complete", "সম্পূর্ণ করা", "I completed my degree in 2023."],
    ["graduate", "স্নাতক হওয়া", "She graduated from Dhaka University."],
    ["since then", "তখন থেকে", "I moved here in 2020 and have lived here since then."],
    ["lately", "ইদানীং", "I have been very busy lately."]
  ],
  prod: ["Write 90 words about your education. Use the past simple for finished stages with dates, and the present perfect for what continues or has no date.",
    "Model: I started school in 2010 in my village. I passed my SSC in 2020 and my HSC in 2022. Then I moved to Dhaka and joined a university. I have studied economics for two years, and I have learnt a lot about business. I have also been learning English since January because I want to study abroad. So far I have completed twenty lessons. I haven't taken any English test yet."],
  quiz: [
    ["*I ___ my grandmother last Friday.*", ["have visited", "visited", "have visit", "visit"], 1, "*Last Friday* is a finished time."],
    ["*She ___ here since 2019.*", ["worked", "works", "has worked", "is working"], 2, "*Since* links past to now: present perfect."],
    ["*My father isn't at home. He ___ to Chattogram.*", ["has been", "has gone", "went been", "is gone to"], 1, "He is there now: has gone."],
    ["*When ___ you ___ your HSC?*", ["have / passed", "did / pass", "did / passed", "have / pass"], 1, "*When* asks for a finished time: past simple."],
    ["*It ___ since morning.*", ["is raining", "rains", "has been raining", "was rain"], 2, "An activity continuing until now with *since*."]
  ]
});

D({ n: 17, t: "Past perfect, used to and telling a story", s: "grammar", m: 50,
  goal: "Show which past action happened first, talk about past habits, and tell events in a clear order.",
  bn: "অতীতের দুটি ঘটনার মধ্যে যেটি আগে ঘটেছিল সেটি past perfect (had + V3): ট্রেন ছেড়ে গিয়েছিল = The train had left। আগে করতাম, এখন করি না = used to।",
  notes: [
    ["Past perfect: the earlier past", "*had* + past participle. When you are already talking about the past and want to go back further: *When I reached the station, the train **had left**.* (First the train left. Then I reached the station.) Common with *before, after, already, by the time, when*."],
    ["Do not overuse it", "If the order is clear from *then* or *after that*, the past simple is enough: *I got up, had breakfast and left.* Use the past perfect only when you step back in time."],
    ["Used to", "*used to* + base verb = a past habit or state that is finished. *I **used to play** cricket every day* (I do not now). *There **used to be** a pond here.* Negative and question: *I **didn't use to** like tea. **Did** you **use to** live here?*"],
    ["Sequence words", "Make stories easy to follow: *first, then, next, after that, later, meanwhile, suddenly, finally, in the end*. *First, we bought tickets. Then we found our seats. Finally, the train left.*"]
  ],
  fix: [
    ["When I arrived, the class already started.", "When I arrived, the class had already started."],
    ["I am used to play football when I was young.", "I used to play football when I was young."],
    ["After he had ate, he went out.", "After he had eaten, he went out."]
  ],
  yt: ["past perfect tense English lesson", "used to English grammar past habits", "past perfect tense bangla"],
  tasks: [
    "Write eight sentences joining two past events with when, before, after or by the time. Make the earlier one past perfect.",
    "Write six sentences about your childhood with used to and two with didn't use to.",
    "Rewrite a short story you know (a folk tale is fine) in ten sentences using at least six sequence words.",
    "Tell the same story aloud without looking at your paper."
  ],
  vocab: [
    ["by the time", "যে সময়ের মধ্যে", "By the time we arrived, the shop had closed."],
    ["previously", "আগে", "He had previously worked as a driver."],
    ["eventually", "অবশেষে", "Eventually, we found the house."],
    ["realise", "বুঝতে পারা", "I realised I had left my phone at home."],
    ["earlier", "এর আগে", "She had called me earlier that day."],
    ["no longer", "আর নয়", "I no longer live in the village."]
  ],
  prod: ["Write about a day when everything went wrong (100 words). Use the past simple, past continuous and at least three past perfect verbs.",
    "Model: Last Monday I woke up late because I had forgotten to set my alarm. I ran to the bus stop, but the bus had already left. While I was waiting for the next one, it started to rain, and I realised I had left my umbrella at home. When I finally reached the exam hall, the test had begun twenty minutes earlier. The teacher let me in, but I had not brought a pen. A kind girl lent me one. In the end, I finished only half the paper."],
  quiz: [
    ["*When we reached the cinema, the film ___ .*", ["already started", "has already started", "had already started", "was already start"], 2, "The film started before we reached: past perfect."],
    ["*I ___ live in a village, but now I live in Dhaka.*", ["use to", "used to", "am used to", "was used"], 1, "A finished past situation: used to."],
    ["*She was hungry because she ___ anything all day.*", ["didn't eat", "hadn't eaten", "hasn't eaten", "wasn't eating"], 1, "The not eating came before she was hungry in the past."],
    ["Choose the correct question.", ["Did you used to play here?", "Did you use to play here?", "Used you play here?", "Were you use to play here?"], 1, "After *did*, the base form *use to*."],
    ["Which word shows the last event of a story?", ["Meanwhile", "First", "Finally", "While"], 2, "*Finally* introduces the last step."]
  ]
});

D({ n: 18, t: "Week 3 review and test", s: "review", m: 40, review: true,
  goal: "Check all the past forms and the present perfect. Score 60% or more to pass.",
  bn: "Tense নিয়ে এখনো সন্দেহ থাকলে Day 15 ও Day 16 আবার পড়ুন। এই দুটি দিন IELTS Speaking ও Writing এর জন্য সবচেয়ে জরুরি।",
  tasks: [
    "Write the three forms of 40 irregular verbs from memory, then correct them with a list.",
    "Draw a timeline and place these on it with your own examples: past perfect, past simple, past continuous, present perfect.",
    "Write 130 words: 'How my life has changed in the last five years.' Use used to, past simple and present perfect."
  ],
  quiz: [
    ["*I ___ to the doctor two days ago.*", ["have gone", "went", "had go", "was going"], 1, "*Ago* needs the past simple."],
    ["*They ___ football when it started to rain.*", ["played", "have played", "were playing", "are playing"], 2, "An action in progress interrupted by another."],
    ["*___ you ever ___ to Saint Martin's Island?*", ["Did / been", "Have / been", "Have / went", "Were / gone"], 1, "Life experience: Have you ever been."],
    ["*She has studied English ___ six months.*", ["since", "for", "ago", "from"], 1, "A period takes *for*."],
    ["*By the time the guests arrived, we ___ cooking.*", ["finished", "have finished", "had finished", "were finish"], 2, "Earlier of two past actions."],
    ["Choose the correct sentence.", ["He didn't told me the truth.", "He didn't tell me the truth.", "He not told me the truth.", "He hasn't tell me the truth."], 1, "*Didn't* + base verb."],
    ["*I ___ here since January.*", ["am living", "live", "have been living", "was living"], 2, "Started in the past and continues: present perfect (continuous)."],
    ["*My grandfather ___ walk five miles to school.*", ["used to", "use to", "was used", "is used to"], 0, "A past habit: used to + base verb."]
  ]
});
D({ n: 19, t: "The future: will, be going to and the present continuous", s: "grammar", m: 50,
  goal: "Choose the right future form for predictions, sudden decisions, intentions and fixed arrangements.",
  bn: "ইংরেজিতে ভবিষ্যৎ বোঝাতে শুধু will নয়। আগে থেকে ঠিক করা পরিকল্পনা = be going to, হঠাৎ সিদ্ধান্ত বা অনুমান = will, সময় ও জায়গা ঠিক করা আয়োজন = present continuous।",
  notes: [
    ["Three main forms", "Each one has its own meaning.", [
      ["Form", "Use", "Example"],
      ["will + verb", "decision made now, promise, offer, prediction from opinion", "I'll help you. I think it will rain."],
      ["be going to + verb", "plan already decided, prediction from what you can see", "I'm going to study law. Look at the clouds. It's going to rain."],
      ["present continuous", "fixed arrangement with a time or place", "I'm meeting my teacher at five."],
      ["present simple", "timetables", "The train leaves at 9.30."]
    ]],
    ["Will", "*will* + base verb, the same for all subjects. Negative *will not (won't)*. *She **will** call you. I **won't** be late. **Will** you come?* Use it with *I think, I hope, probably, perhaps, I'm sure*."],
    ["No will after time and condition words", "After *when, if, before, after, as soon as, until* use the **present simple**, not will: *I will call you when I **arrive*** (not *when I will arrive*). *If it **rains**, we will stay at home.*"],
    ["Shall", "Modern English uses *shall* mainly in offers and suggestions with I and we: ***Shall I** open the window? **Shall we** begin?*"]
  ],
  fix: [
    ["I will call you when I will reach home.", "I will call you when I reach home."],
    ["I going to buy a laptop next month.", "I am going to buy a laptop next month."],
    ["She will goes to London next year.", "She will go to London next year."]
  ],
  yt: ["future tense will vs going to English lesson", "future forms English present continuous for future", "future tense bangla will going to"],
  tasks: [
    "Write six plans for the next month with be going to.",
    "Write your arrangements for the coming week with the present continuous and exact times.",
    "Write six predictions about Bangladesh in 2040 with will and I think / probably.",
    "Write five sentences with when, if, as soon as, before and until about the future."
  ],
  vocab: [
    ["predict", "ভবিষ্যদ্বাণী করা", "Experts predict that prices will rise."],
    ["intend", "ইচ্ছা করা / মনস্থ করা", "I intend to apply next year."],
    ["arrange", "ব্যবস্থা করা", "We have arranged a meeting for Sunday."],
    ["probably", "সম্ভবত", "She will probably be late."],
    ["definitely", "নিশ্চিতভাবে", "I will definitely come."],
    ["as soon as", "যত তাড়াতাড়ি / যেই মাত্র", "Call me as soon as you arrive."]
  ],
  prod: ["Write 90 words about your plans for the next five years. Use will, be going to, the present continuous and at least two time clauses.",
    "Model: I am going to finish this programme in two months. After that, I am going to start my IELTS preparation. I am meeting an education adviser next Saturday to discuss universities. If I get a good band score, I will apply to a university in Australia. I think I will study computer science. My parents will probably miss me, but I will call them every day. As soon as I graduate, I am going to look for a job."],
  quiz: [
    ["*A: The phone is ringing. B: OK, I ___ it.*", ["am going to answer", "will answer", "am answering", "answer"], 1, "A decision made at the moment of speaking: will."],
    ["*I ___ my dentist at 4 pm tomorrow. I made the appointment last week.*", ["will see", "see", "am seeing", "going to seeing"], 2, "A fixed arrangement: present continuous."],
    ["*I'll text you when I ___ there.*", ["will get", "get", "am going to get", "got"], 1, "Present simple after *when* for the future."],
    ["*Look at those dark clouds. It ___ .*", ["is going to rain", "will rains", "rains", "is raining tomorrow"], 0, "A prediction from present evidence: going to."],
    ["Choose the correct sentence.", ["He will comes tomorrow.", "He will coming tomorrow.", "He will come tomorrow.", "He wills come tomorrow."], 2, "*Will* + base verb."]
  ]
});

D({ n: 20, t: "Modals 1: can, could, may, might", s: "grammar", m: 45,
  goal: "Talk about ability, possibility and permission, and make polite requests.",
  bn: "Modal verb এর পরে সবসময় base form বসে, to বসে না, s বসে না: He can swim (He cans, He can to swim নয়)।",
  notes: [
    ["Three rules for all modals", "1. Modal + base verb: *She can **speak** French.* 2. No -s for he/she/it: *He **can***, not *he cans*. 3. Make questions and negatives without do: ***Can** you help? I **cannot** (can't) help.*"],
    ["Ability", "*can* for now, *could* for the past, *be able to* for other tenses. *I **can** drive. I **could** swim when I was five. I **will be able to** speak fluently next year. I **have been able to** save some money.*"],
    ["Possibility", "*may, might, could* = perhaps. *It **may** rain later. She **might** be at home. This **could** be the answer.* *Might* is a little less sure than *may*. Negative: *He **might not** come.*"],
    ["Permission and requests", "From informal to formal.", [
      ["Informal", "Polite", "Formal"],
      ["Can I use your pen?", "Could I use your pen?", "May I use your pen?"],
      ["Can you help me?", "Could you help me, please?", "Would you mind helping me?"]
    ]]
  ],
  fix: [
    ["She can to speak three languages.", "She can speak three languages."],
    ["I will can come tomorrow.", "I will be able to come tomorrow."],
    ["May be he is sick.", "Maybe he is sick. / He may be sick."]
  ],
  yt: ["modal verbs can could may might English lesson", "polite requests in English could you would you", "modal verb bangla can could may might"],
  tasks: [
    "Write eight things you can do, four you could do as a child and four you will be able to do after this programme.",
    "Write six sentences guessing about tomorrow with may, might and could.",
    "Write eight polite requests you could use in an office, a shop and a classroom.",
    "Practise the requests aloud with a rising, friendly voice. Record two of them."
  ],
  vocab: [
    ["ability", "সক্ষমতা", "She has the ability to learn quickly."],
    ["permission", "অনুমতি", "You need permission to enter."],
    ["possible", "সম্ভব", "Is it possible to change the date?"],
    ["request", "অনুরোধ", "I have a small request."],
    ["manage to", "কোনোরকমে পারা", "I managed to finish on time."],
    ["perhaps", "হয়তো", "Perhaps we should wait."]
  ],
  prod: ["Write an email of 80 words to a teacher asking for permission to submit your assignment two days late. Use could, may and be able to.",
    "Model: Dear Sir, I am writing about the assignment that is due on Sunday. I have been ill for three days and have not been able to complete it. Could I submit it on Tuesday instead? I can send you the first half today if that helps. I may need to visit the doctor again tomorrow, but I will be able to finish the work by Monday night. Thank you for your understanding. Yours faithfully, Tanvir Ahmed"],
  quiz: [
    ["Choose the correct sentence.", ["He cans swim.", "He can swims.", "He can swim.", "He can to swim."], 2, "Modal + base verb, no -s."],
    ["*I ___ ride a bicycle when I was six.*", ["can", "could", "may", "am able to"], 1, "Past ability: could."],
    ["Which request is the most polite?", ["Give me a glass of water.", "Can you give me water?", "Could I have a glass of water, please?", "I want water."], 2, "*Could I... please?* is polite."],
    ["*Take an umbrella. It ___ rain later.*", ["can to", "might", "is able to", "must not"], 1, "Possibility: might."],
    ["*After this course you ___ write clear paragraphs.*", ["will can", "will be able to", "can will", "are can"], 1, "Future ability: will be able to."]
  ]
});

D({ n: 21, t: "Modals 2: must, have to, should", s: "grammar", m: 45,
  goal: "Express obligation, prohibition, lack of necessity and advice.",
  bn: "mustn't = করা নিষেধ, don't have to = করার দরকার নেই। এই দুটির অর্থ সম্পূর্ণ আলাদা, গুলিয়ে ফেলবেন না।",
  notes: [
    ["Obligation: must and have to", "Both mean it is necessary. *Must* often comes from the speaker: *I **must** study harder.* *Have to* often comes from a rule or situation: *We **have to** wear a uniform.* *Must* has no past or future form, so use *had to* and *will have to*: *I **had to** leave early.*"],
    ["Mustn't and don't have to", "Very different meanings.", [
      ["Form", "Meaning", "Example"],
      ["must not (mustn't)", "it is forbidden", "You mustn't use your phone in the exam."],
      ["don't / doesn't have to", "it is not necessary", "You don't have to come tomorrow. It's a holiday."]
    ]],
    ["Advice: should", "*should / shouldn't* + base verb = it is a good or bad idea. *You **should** read every day. You **shouldn't** translate word by word.* *Ought to* means the same. *Had better* is stronger and warns of a bad result: *You **had better** hurry or you will miss the bus.*"],
    ["Certainty: must be and can't be", "*Must* also shows you are sure: *He has worked all night. He **must be** tired.* The opposite is *can't*: *She **can't be** at home. Her lights are off.*"]
  ],
  fix: [
    ["You must to submit the form today.", "You must submit the form today."],
    ["I must went to the bank yesterday.", "I had to go to the bank yesterday."],
    ["You don't have to smoke here. It is forbidden.", "You mustn't smoke here. It is forbidden."]
  ],
  yt: ["must have to should modal verbs English lesson", "mustn't vs don't have to difference", "must have to should bangla"],
  tasks: [
    "Write the rules of your college, office or home: five with must or have to, five with mustn't, three with don't have to.",
    "A friend wants to improve his English. Write eight pieces of advice with should and shouldn't.",
    "Write five sentences about things you had to do last week.",
    "Look at five people in the street or in photos and guess about them with must be and can't be."
  ],
  vocab: [
    ["necessary", "প্রয়োজনীয়", "It is necessary to practise every day."],
    ["forbidden", "নিষিদ্ধ", "Smoking is forbidden here."],
    ["compulsory", "বাধ্যতামূলক", "English is a compulsory subject."],
    ["optional", "ঐচ্ছিক", "The extra class is optional."],
    ["recommend", "সুপারিশ করা", "I recommend this dictionary."],
    ["responsibility", "দায়িত্ব", "It is my responsibility to finish this."]
  ],
  prod: ["A younger cousin is going to take the SSC exam next year. Write 90 words of advice. Use must, have to, mustn't, don't have to and should.",
    "Model: You have to start early because the syllabus is long. You should make a timetable and follow it every day. You must sleep at least seven hours, so you shouldn't study all night. You mustn't use your phone while you are studying. You don't have to buy many guide books; your textbooks are enough. You should solve the questions of previous years. Finally, you must believe in yourself."],
  quiz: [
    ["*You ___ park here. It is against the law.*", ["don't have to", "mustn't", "shouldn't to", "haven't to"], 1, "Forbidden: mustn't."],
    ["*Tomorrow is Friday. I ___ get up early.*", ["mustn't", "don't have to", "must", "have"], 1, "Not necessary: don't have to."],
    ["*I ___ work late yesterday.*", ["must", "musted", "had to", "have to"], 2, "The past of must/have to is *had to*."],
    ["*You look tired. You ___ take a rest.*", ["should", "should to", "must to", "have"], 0, "Advice: should + base verb."],
    ["*He hasn't eaten since morning. He ___ be hungry.*", ["can't", "mustn't", "must", "doesn't have to"], 2, "A logical conclusion: must be."]
  ]
});

D({ n: 22, t: "Prepositions of time and place: in, on, at", s: "grammar", m: 45,
  goal: "Choose in, on or at for times and places using one simple idea: big, medium, small.",
  bn: "বাংলার একটি বিভক্তি (-এ, -তে) ইংরেজিতে in, on, at তিন রকম হয়। বড় সময় বা জায়গা = in, দিন বা তল = on, নির্দিষ্ট বিন্দু = at।",
  notes: [
    ["Time", "Think of size: large periods take *in*, days take *on*, exact points take *at*.", [
      ["in", "on", "at"],
      ["in 2024, in May, in summer", "on Monday, on 5 May", "at 7 o'clock, at noon"],
      ["in the morning / afternoon / evening", "on Friday morning", "at night, at midnight"],
      ["in the 21st century, in two days", "on my birthday, on Eid day", "at the weekend, at the moment"]
    ]],
    ["No preposition", "Do not use in, on or at before *next, last, this, every, today, tomorrow, yesterday*: *See you **next week*** (not *in next week*). *I met him **last Friday**.*"],
    ["Place", "*in* = inside an area or space. *on* = touching a surface or line. *at* = a point or a place for an activity.", [
      ["in", "on", "at"],
      ["in Dhaka, in Bangladesh", "on the table, on the wall", "at the bus stop, at the door"],
      ["in a room, in a box, in a car", "on the second floor, on Mirpur Road", "at home, at work, at school"],
      ["in bed, in hospital, in the sky", "on a bus, on a train, on a plane", "at a party, at the station"]
    ]],
    ["Other useful prepositions", "*from ... to* (from 9 to 5), *until* (until Monday), *by* (no later than: by Friday), *during* (during the lesson), *for* (for two hours), *between, behind, in front of, next to, opposite, under, above, near*."]
  ],
  fix: [
    ["I was born in 12 March.", "I was born on 12 March."],
    ["I will meet you in next Sunday.", "I will meet you next Sunday."],
    ["She is in home now.", "She is at home now."]
  ],
  yt: ["prepositions in on at time and place English lesson", "prepositions of place English beginners", "preposition in on at bangla"],
  tasks: [
    "Copy both tables. Add three more examples of your own to every column.",
    "Write ten sentences about your life with dates and times (birth, school, exams, daily routine).",
    "Describe where ten things are in your room using ten different prepositions of place.",
    "Give directions aloud from your home to the nearest market, using at least six prepositions."
  ],
  vocab: [
    ["opposite", "বিপরীত দিকে", "The bank is opposite the mosque."],
    ["between", "মাঝখানে (দুটির)", "The shop is between the school and the park."],
    ["during", "চলাকালীন", "Do not talk during the exam."],
    ["until", "পর্যন্ত", "The library is open until 8 pm."],
    ["nearby", "কাছাকাছি", "Is there a pharmacy nearby?"],
    ["deadline", "শেষ সময়সীমা", "The deadline is on 30 June."]
  ],
  prod: ["Write an invitation of 80 words to a family event. Give the date, time and place precisely, and explain how to get there.",
    "Model: Dear Rafi, You are invited to my sister's wedding reception on Friday, 14 February. It will start at 7.30 in the evening and continue until 10. The venue is Rose Garden Hall on Station Road in Cumilla, opposite the City Bank. The hall is on the second floor. If you come by bus, get off at the Kandirpar stop; the building is next to it. Please arrive by 7.15. We will be waiting at the entrance."],
  quiz: [
    ["*The exam is ___ Monday ___ 10 o'clock.*", ["in / at", "on / at", "at / on", "on / in"], 1, "Days take *on*, clock times take *at*."],
    ["*I was born ___ 2004 ___ July.*", ["in / in", "on / in", "in / on", "at / in"], 0, "Years and months both take *in*."],
    ["*We are going to Sylhet ___ next week.*", ["in", "on", "at", "(no preposition)"], 3, "No preposition before *next*."],
    ["*My office is ___ the third floor.*", ["in", "at", "on", "to"], 2, "Floors take *on*."],
    ["*Please submit the form ___ Friday at the latest.*", ["until", "by", "during", "since"], 1, "*By* = not later than."]
  ]
});

D({ n: 23, t: "Prepositions of movement, and words that need a preposition", s: "grammar", m: 45,
  goal: "Describe movement, and learn which verbs and adjectives take which preposition.",
  bn: "অনেক ভুল হয় বাংলা থেকে সরাসরি অনুবাদ করলে: 'discuss about', 'married with', 'go to home' ভুল। সঠিক রূপগুলো একসঙ্গে মুখস্থ করুন।",
  notes: [
    ["Movement", "*to* (go to school), *into* (walk into the room), *out of* (get out of the car), *onto / off* (climb onto the roof, get off the bus), *through* (through the tunnel), *across* (across the road), *along* (along the river), *past* (walk past the bank), *towards* (towards the gate), *up / down* (up the stairs)."],
    ["Home, here, there, abroad: no to", "*go **home**, come **here**, go **there**, travel **abroad**, go **upstairs***. Not *go to home*. But: *go to school, go to work, go to bed, go to the market*."],
    ["Verb + preposition", "Learn the pair, not the verb alone.", [
      ["Verb + preposition", "Verb + preposition", "No preposition"],
      ["listen to", "depend on", "discuss (a topic)"],
      ["wait for", "agree with", "reach (a place)"],
      ["look at / look for", "apply for (a job)", "enter (a room)"],
      ["talk to / about", "belong to", "marry (someone)"],
      ["arrive at / in", "suffer from", "attend (a class)"],
      ["think about / of", "pay for", "tell (someone)"]
    ]],
    ["Adjective + preposition", "*good / bad **at***, *interested **in***, *afraid **of***, *proud **of***, *tired **of***, *famous **for***, *responsible **for***, *different **from***, *similar **to***, *married **to***, *angry **with***, *worried **about***, *satisfied **with***. After a preposition, a verb takes -ing: *I am good at **cooking**.*"]
  ],
  fix: [
    ["We discussed about the problem.", "We discussed the problem."],
    ["She is married with a doctor.", "She is married to a doctor."],
    ["I reached to the station and then went to home.", "I reached the station and then went home."]
  ],
  yt: ["prepositions of movement English lesson", "verbs with prepositions dependent prepositions English", "appropriate preposition bangla"],
  tasks: [
    "Copy the verb table and the adjective list. Write one true sentence for each of 20 items.",
    "Describe your journey from home to college or work in eight sentences with movement prepositions.",
    "Cover the prepositions in your notes and test yourself twice today.",
    "Write six sentences with adjective + preposition + -ing (I am interested in learning...)."
  ],
  vocab: [
    ["depend on", "নির্ভর করা", "Success depends on hard work."],
    ["apply for", "আবেদন করা", "I applied for a scholarship."],
    ["suffer from", "ভোগা", "He suffers from asthma."],
    ["responsible for", "দায়ী / দায়িত্বে", "She is responsible for the accounts."],
    ["similar to", "অনুরূপ", "Your idea is similar to mine."],
    ["across", "আড়াআড়ি / ওপারে", "We walked across the bridge."]
  ],
  prod: ["Write 90 words about your interests and personality using at least eight adjective + preposition or verb + preposition combinations.",
    "Model: I am interested in technology, and I am quite good at solving computer problems. I am not afraid of hard work, but I am bad at getting up early. I often listen to English podcasts and talk to my friends about them. My parents are proud of me, although they are sometimes worried about my health. In the future I want to apply for a job at a software company. My success will depend on my English."],
  quiz: [
    ["*After class I went ___ .*", ["to home", "home", "at home", "in home"], 1, "*Go home* takes no preposition."],
    ["*We ___ the plan for two hours.*", ["discussed about", "discussed", "discussed on", "discussed for"], 1, "*Discuss* takes a direct object."],
    ["*She is very good ___ mathematics.*", ["in", "on", "at", "for"], 2, "Good at."],
    ["*I am looking ___ my keys. I can't find them.*", ["at", "for", "to", "after"], 1, "*Look for* = try to find."],
    ["*He is interested in ___ abroad.*", ["study", "to study", "studying", "studied"], 2, "After a preposition the verb takes -ing."]
  ]
});

D({ n: 24, t: "Week 4 review and test", s: "review", m: 40, review: true,
  goal: "Check future forms, modals and prepositions. Score 60% or more to pass.",
  bn: "Preposition একদিনে শেখা যায় না। ভুলগুলো আলাদা পাতায় লিখে প্রতিদিন একবার দেখুন।",
  tasks: [
    "Make one revision page for prepositions: time, place, movement, verb + preposition, adjective + preposition.",
    "Write ten sentences mixing all the modal verbs from Days 20 and 21.",
    "Write 130 words: 'My plans for next year and what I must do to achieve them.'"
  ],
  quiz: [
    ["*I think Bangladesh ___ the match tomorrow.*", ["wins", "will win", "is winning", "won"], 1, "A prediction from opinion: will."],
    ["*I'll wait here until you ___ back.*", ["will come", "come", "came", "are going to come"], 1, "Present simple after *until*."],
    ["*You ___ wear a helmet when you ride a motorbike. It is the law.*", ["might", "have to", "could", "don't have to"], 1, "Obligation from a rule."],
    ["*The meeting is ___ 3 pm ___ Tuesday.*", ["at / on", "on / at", "in / on", "at / in"], 0, "At + clock time, on + day."],
    ["*She has been married ___ an engineer for two years.*", ["with", "to", "by", "at"], 1, "Married to."],
    ["*You ___ tell anyone. It's a secret.*", ["don't have to", "mustn't", "might not", "couldn't"], 1, "Prohibition: mustn't."],
    ["*___ you open the window, please?*", ["May", "Should", "Could", "Must"], 2, "A polite request to another person: Could you."],
    ["*We arrived ___ the airport two hours early.*", ["to", "in", "at", "on"], 2, "*Arrive at* a building or point, *arrive in* a city or country."]
  ]
});
D({ n: 25, t: "Subject-verb agreement", s: "grammar", m: 45,
  goal: "Make the verb match its subject, even when the subject is long or tricky.",
  bn: "বাংলায় ক্রিয়া বচন অনুযায়ী বদলায় না, তাই এই ভুলটি খুব সাধারণ। Subject একবচন হলে verb এ s (He works), বহুবচন হলে s নয় (They work)।",
  notes: [
    ["The basic rule", "A singular subject takes a singular verb: *The student **works** hard.* A plural subject takes a plural verb: *The students **work** hard.* In the present, the noun and the verb do not both carry -s."],
    ["Find the real subject", "Ignore the words between the subject and the verb. *The **price** of vegetables **is** rising.* (price, not vegetables) *One of my friends **lives** in Canada.* (one, not friends) *The **teacher**, along with her students, **is** coming.*"],
    ["Words that are always singular", "*everyone, everybody, someone, anyone, no one, nobody, each, every, either, neither* and all uncountable nouns. ***Everyone has** a phone. **Each** student **gets** a book. The **information is** correct.*"],
    ["Tricky cases", "Check this list.", [
      ["Subject", "Verb", "Example"],
      ["people, police, children", "plural", "The police are coming."],
      ["news, mathematics, physics", "singular", "Mathematics is my favourite subject."],
      ["A and B", "plural", "Rina and Mina are sisters."],
      ["the number of + plural noun", "singular", "The number of cars is increasing."],
      ["a number of + plural noun", "plural", "A number of students are absent."],
      ["there is / there are", "agrees with the next noun", "There are two reasons."]
    ]]
  ],
  fix: [
    ["Everyone have a mobile phone now.", "Everyone has a mobile phone now."],
    ["One of my friends live in Canada.", "One of my friends lives in Canada."],
    ["The people of this village is very poor.", "The people of this village are very poor."]
  ],
  yt: ["subject verb agreement rules English grammar", "subject verb agreement common mistakes", "subject verb agreement bangla"],
  tasks: [
    "Copy the table of tricky cases and write a second example for each row.",
    "In a news article, circle ten subjects and underline their verbs. Check that they agree.",
    "Write ten sentences that begin with: Everyone, Each of, One of, The number of, A number of, Neither, The news, People, There is, There are.",
    "Read yesterday's writing again and correct any agreement mistakes."
  ],
  vocab: [
    ["majority", "অধিকাংশ", "The majority of students live nearby."],
    ["population", "জনসংখ্যা", "The population of Dhaka is growing."],
    ["individual", "ব্যক্তি", "Each individual has different needs."],
    ["consist of", "গঠিত হওয়া", "The team consists of five members."],
    ["require", "প্রয়োজন হওয়া", "This job requires patience."],
    ["several", "কয়েকটি", "Several people were waiting."]
  ],
  prod: ["Write 90 words about the people in your area and their work. Use at least six of the tricky subjects from the notes.",
    "Model: Most people in my area are farmers or small traders. Everyone works very hard. The number of young people who go to university is increasing, and a number of them now study in Dhaka. One of my neighbours runs a small poultry farm. Each family has at least one member who works abroad. There is a market every Tuesday, and there are several schools. The news from the village is usually good."],
  quiz: [
    ["*The quality of these mangoes ___ very good.*", ["are", "is", "were", "have"], 1, "The subject is *quality*, which is singular."],
    ["*Everybody ___ to pass the exam.*", ["want", "wants", "are wanting", "have wanted"], 1, "*Everybody* is singular."],
    ["*The number of accidents ___ every year.*", ["increase", "are increasing", "increases", "have increased"], 2, "*The number of* takes a singular verb."],
    ["*My brother and my cousin ___ in the same school.*", ["studies", "study", "is studying", "has studied"], 1, "Two people joined by *and* are plural."],
    ["*There ___ a lot of information on this website.*", ["are", "have", "is", "were"], 2, "*Information* is uncountable, so singular."]
  ]
});

D({ n: 26, t: "Comparing: comparatives and superlatives", s: "grammar", m: 45,
  goal: "Compare two or more things accurately, a skill you will need for IELTS Writing Task 1.",
  bn: "ছোট adjective এ -er/-est (taller, the tallest), বড় adjective এ more/most (more expensive)। দুটো একসঙ্গে নয়: more better ভুল।",
  notes: [
    ["Forms", "The length of the adjective decides the form.", [
      ["Type", "Adjective", "Comparative", "Superlative"],
      ["one syllable", "tall, big, large", "taller, bigger, larger", "the tallest, the biggest, the largest"],
      ["ends in -y", "easy, happy", "easier, happier", "the easiest, the happiest"],
      ["two or more syllables", "expensive, crowded", "more expensive, more crowded", "the most expensive, the most crowded"],
      ["irregular", "good, bad, far, little, much/many", "better, worse, further, less, more", "the best, the worst, the furthest, the least, the most"]
    ]],
    ["Than and the", "Comparative + *than*: *Dhaka is **bigger than** Khulna.* Superlative with *the* and often *in* or *of*: *It is **the biggest** city **in** Bangladesh.* Never use both forms together: *better*, not *more better*."],
    ["As ... as", "For equal things: *She is **as tall as** her mother.* For unequal things: *The bus is **not as fast as** the train.* With numbers: *twice **as** expensive **as**, three times **as** many **as***."],
    ["Making comparisons stronger or weaker", "*much / far / a lot* + comparative: ***much** cheaper, **far** more difficult*. *slightly / a little / a bit* + comparative: ***slightly** higher*. For nouns: ***more** students, **fewer** cars* (countable), ***less** traffic* (uncountable)."]
  ],
  fix: [
    ["This road is more wider than that one.", "This road is wider than that one."],
    ["He is the most tallest boy in the class.", "He is the tallest boy in the class."],
    ["My result is more good than yours.", "My result is better than yours."]
  ],
  yt: ["comparatives and superlatives English grammar lesson", "as as comparisons English", "comparative superlative degree bangla"],
  tasks: [
    "Write the comparative and superlative of 20 adjectives: bad, busy, cheap, clean, comfortable, dangerous, dry, far, fast, good, heavy, hot, important, modern, noisy, old, popular, safe, thin, useful.",
    "Compare two cities, two phones and two jobs in four sentences each.",
    "Write six superlative sentences about Bangladesh (the longest, the largest, the most popular...).",
    "Write five sentences with as ... as and three with much / slightly + comparative."
  ],
  vocab: [
    ["compare", "তুলনা করা", "Compare the two charts."],
    ["significantly", "উল্লেখযোগ্যভাবে", "Prices are significantly higher this year."],
    ["slightly", "সামান্য", "Today is slightly cooler than yesterday."],
    ["whereas", "অন্যদিকে / যেখানে", "Dhaka is crowded, whereas my village is quiet."],
    ["advantage", "সুবিধা", "City life has many advantages."],
    ["disadvantage", "অসুবিধা", "Pollution is a major disadvantage."]
  ],
  prod: ["Compare life in a village and life in a city in 100 words. Use at least six comparatives, two superlatives and one as ... as.",
    "Model: Life in a city is much busier than life in a village. Cities have better hospitals and more job opportunities, whereas villages have cleaner air and less traffic. Rent in Dhaka is far more expensive than in my village. People in villages are usually friendlier, and food is fresher and cheaper. However, village schools are not as good as city schools. For me, the biggest advantage of a city is education, and the worst problem is pollution."],
  quiz: [
    ["*This exercise is ___ than the last one.*", ["more easy", "easier", "more easier", "easiest"], 1, "-y becomes -ier."],
    ["*She is the ___ student in our class.*", ["more intelligent", "most intelligent", "intelligentest", "most intelligenter"], 1, "Long adjective: the most + adjective."],
    ["*My phone is not ___ yours.*", ["as expensive as", "as expensive than", "so expensive than", "more expensive as"], 0, "As + adjective + as."],
    ["*Today's traffic is ___ than yesterday's.*", ["badder", "more bad", "worse", "worst"], 2, "Irregular: bad, worse, the worst."],
    ["*There are ___ cars on the road on Fridays.*", ["less", "fewer", "lesser", "more few"], 1, "*Cars* is countable: fewer."]
  ]
});

D({ n: 27, t: "Quantity: some, any, much, many, few, little", s: "grammar", m: 45,
  goal: "Describe amounts and numbers with the right quantifier for countable and uncountable nouns.",
  bn: "many/few গোনা যায় এমন জিনিসের সঙ্গে, much/little গোনা যায় না এমন জিনিসের সঙ্গে। a few = কয়েকটি আছে (ইতিবাচক), few = প্রায় নেই (নেতিবাচক)।",
  notes: [
    ["Which quantifier?", "It depends on the type of noun.", [
      ["", "Countable plural", "Uncountable"],
      ["large amount", "many, a lot of, plenty of, several", "much, a lot of, plenty of, a great deal of"],
      ["small amount (enough)", "a few", "a little"],
      ["small amount (not enough)", "few", "little"],
      ["question", "How many?", "How much?"]
    ]],
    ["Some and any", "*some* in positive sentences and in offers and requests: *I have **some** questions. Would you like **some** tea?* *any* in negatives and most questions: *I don't have **any** money. Do you have **any** brothers?*"],
    ["Much and many in real use", "In positive statements, *a lot of* sounds more natural: *She has **a lot of** friends.* Use *much* and *many* mainly in negatives, questions and formal writing: *I don't have **much** time. **Many** people believe...*"],
    ["Too, enough, very", "*too* = more than is good: *The tea is **too** hot to drink.* *very* is only strong: *The tea is **very** hot.* *enough* comes after adjectives and before nouns: *old **enough**; **enough** money*. *too much* + uncountable, *too many* + countable."]
  ],
  fix: [
    ["I have much friends in Dhaka.", "I have many (a lot of) friends in Dhaka."],
    ["There is too many traffic.", "There is too much traffic."],
    ["He is enough old to vote.", "He is old enough to vote."]
  ],
  yt: ["quantifiers some any much many few little English lesson", "too enough very English grammar", "much many few little bangla"],
  tasks: [
    "Open your fridge or kitchen cupboard. Write 12 sentences about what is there with some, any, a lot of, a few, a little, much and many.",
    "Write six sentences that show the difference between few / a few and little / a little.",
    "Write six complaints about your town with too, too much, too many and not enough.",
    "Ask and answer ten How much / How many questions aloud."
  ],
  vocab: [
    ["plenty of", "প্রচুর", "We have plenty of time."],
    ["amount", "পরিমাণ (অগণনীয়)", "A large amount of water is wasted."],
    ["number", "সংখ্যা (গণনীয়)", "A large number of people attended."],
    ["sufficient", "যথেষ্ট", "We do not have sufficient funds."],
    ["lack", "অভাব", "There is a lack of clean water."],
    ["shortage", "ঘাটতি", "The city faces a shortage of housing."]
  ],
  prod: ["Write 90 words about the problems of your town or city. Use at least eight different quantifiers.",
    "Model: My city has many problems. There are too many vehicles and not enough roads, so there is a lot of traffic. There are few parks, and children have little space to play. Many areas do not get enough water in summer. There is too much noise, and there are not any quiet places. However, a few things are improving. Some new roads have been built, and there is a little more greenery than before."],
  quiz: [
    ["*How ___ sugar do you take in your tea?*", ["many", "much", "few", "any"], 1, "*Sugar* is uncountable."],
    ["*I'm sorry, I don't have ___ change.*", ["some", "any", "a few", "many"], 1, "Negative sentence: any."],
    ["*He has ___ friends, so he feels lonely.*", ["a few", "few", "a little", "little"], 1, "*Few* (without a) means almost none."],
    ["*This bag is ___ heavy for me to carry.*", ["very", "enough", "too", "much"], 2, "*Too* + adjective + to = more than is possible."],
    ["Which is correct?", ["We don't have enough chairs.", "We don't have chairs enough.", "We don't have enough of chairs.", "We have not enough chair."], 0, "*Enough* goes before a noun."]
  ]
});

D({ n: 28, t: "Joining ideas: and, but, so, because", s: "writing", m: 50,
  goal: "Join short sentences into compound sentences, and avoid fragments and run-on sentences.",
  bn: "ইংরেজিতে although এবং but একসঙ্গে বসে না, because এবং so একসঙ্গে বসে না। বাংলায় 'যদিও... তবুও' বলা যায়, ইংরেজিতে একটি বেছে নিন।",
  notes: [
    ["Simple and compound sentences", "A simple sentence has one subject and verb group: *I was tired.* A compound sentence joins two with a coordinating conjunction: *I was tired, **so** I went to bed.* Remember FANBOYS: *for, and, nor, but, or, yet, so*. The most useful are *and, but, or, so*."],
    ["What each one does", "Choose by meaning.", [
      ["Conjunction", "Meaning", "Example"],
      ["and", "addition", "She sings, and she plays the guitar."],
      ["but", "contrast", "He is rich, but he is not happy."],
      ["or", "choice", "We can walk, or we can take a rickshaw."],
      ["so", "result", "It was late, so we went home."],
      ["because", "reason", "We went home because it was late."]
    ]],
    ["Three common errors", "**Fragment:** *Because I was ill.* This is not a sentence. Join it: *I stayed at home because I was ill.* **Run-on:** *I was ill I stayed at home.* Add a conjunction or a full stop. **Double conjunction:** *Although he is poor, but he is honest.* Use only one: *Although he is poor, he is honest.*"],
    ["Paired conjunctions", "***both** ... **and***, ***either** ... **or***, ***neither** ... **nor***, ***not only** ... **but also***. *She speaks **both** Bangla **and** English. You can **either** call **or** email. He is **not only** clever **but also** hard-working.*"]
  ],
  fix: [
    ["Although it was raining, but we went out.", "Although it was raining, we went out."],
    ["Because he was late, so he missed the bus.", "Because he was late, he missed the bus."],
    ["I like tea. Because it is refreshing.", "I like tea because it is refreshing."]
  ],
  yt: ["compound sentences coordinating conjunctions English lesson", "sentence fragments and run on sentences", "conjunction and but so because bangla"],
  tasks: [
    "Join these pairs with and, but, or, so, because: write ten pairs of short sentences first, then combine each pair.",
    "Find and correct the error: (1) Because I had no money. (2) Although she is young, but she is wise. (3) I studied hard I passed.",
    "Write six sentences with both...and, either...or, neither...nor and not only...but also.",
    "Take an old paragraph of yours with many short sentences and rewrite it with conjunctions."
  ],
  vocab: [
    ["therefore", "অতএব", "He was ill; therefore, he stayed at home."],
    ["however", "তবে", "The plan is good. However, it is expensive."],
    ["result", "ফলাফল", "The result of the test was surprising."],
    ["contrast", "বৈপরীত্য", "There is a clear contrast between the two."],
    ["combine", "একত্র করা", "Combine the two sentences."],
    ["avoid", "এড়��য়ে চলা", "Avoid very long sentences."]
  ],
  prod: ["Write 100 words about why you want to learn English. Every sentence must contain a conjunction, and you must use at least five different ones.",
    "Model: I want to learn English because it opens many doors. I studied it at school, but I never learnt to speak. English is not only the language of universities but also the language of business. I want to study abroad, so I need a good IELTS score. I can either join a coaching centre or study at home, and I have chosen to start at home. The work is hard, yet I enjoy it. I practise both speaking and writing every day."],
  quiz: [
    ["*It was very hot, ___ we stayed inside.*", ["but", "so", "or", "because"], 1, "Staying inside is the result: so."],
    ["Which sentence is correct?", ["Although he tried hard, but he failed.", "Although he tried hard, he failed.", "He tried hard, although but he failed.", "Although he tried hard but failed he."], 1, "Do not use *although* and *but* together."],
    ["Which of these is a fragment (not a complete sentence)?", ["She left early.", "Because the shop was closed.", "The shop was closed, so we left.", "We left because it was closed."], 1, "A *because* clause alone is not a sentence."],
    ["*You can ___ pay in cash ___ use a card.*", ["both / or", "either / or", "neither / or", "not only / and"], 1, "A choice between two: either ... or."],
    ["*I wanted to buy the book, ___ I didn't have enough money.*", ["so", "and", "but", "because"], 2, "Contrast: but."]
  ]
});

D({ n: 29, t: "Complex sentences and relative clauses", s: "writing", m: 55,
  goal: "Write complex sentences with although, when, if and while, and add information with who, which, that and where.",
  bn: "who = মানুষের জন্য, which = বস্তুর জন্য, that = দুটোর জন্যই। Relative clause এ বাড়তি pronoun বসাবেন না: The book that I bought (I bought it নয়)।",
  notes: [
    ["What is a complex sentence?", "One main clause + one dependent clause joined by a subordinating conjunction. *I will call you **when I arrive**.* If the dependent clause comes first, put a comma after it: ***When I arrive**, I will call you.*"],
    ["Subordinating conjunctions", "Learn them by meaning.", [
      ["Meaning", "Words", "Example"],
      ["time", "when, while, before, after, until, as soon as", "Wait here until I come back."],
      ["reason", "because, since, as", "Since it was late, we took a CNG."],
      ["contrast", "although, even though, while, whereas", "Although he is old, he is very active."],
      ["condition", "if, unless", "You will fail unless you study."],
      ["purpose", "so that", "I saved money so that I could buy a laptop."]
    ]],
    ["Relative clauses", "They tell us which person or thing we mean. *who* for people, *which* for things, *that* for both, *where* for places, *whose* for possession. *The man **who lives next door** is a pilot. The book **that I borrowed** was useful. This is the school **where I studied**. I know a girl **whose father is a judge**.*"],
    ["Two rules", "1. Do not repeat the pronoun: *The film that I saw was good*, not *that I saw **it***. 2. Extra information about a known thing takes commas and *who/which* (not *that*): *My father, **who is 60**, still works. Dhaka, **which is the capital**, is very crowded.*"]
  ],
  fix: [
    ["The man which called you is my uncle.", "The man who called you is my uncle."],
    ["This is the phone that I bought it last week.", "This is the phone that I bought last week."],
    ["I will wait unless you don't come.", "I will wait until you come."]
  ],
  yt: ["complex sentences subordinating conjunctions English lesson", "relative clauses who which that English grammar", "relative pronoun bangla who which that"],
  tasks: [
    "Write two sentences for each row of the conjunction table, once with the dependent clause first and once with it second.",
    "Join with who, which, that, where or whose: write eight pairs of sentences about people and places you know, then combine each pair.",
    "Define ten things using relative clauses: 'A pilot is a person who...', 'A library is a place where...'.",
    "Rewrite yesterday's paragraph so that at least half the sentences are complex."
  ],
  vocab: [
    ["although", "যদিও", "Although it was expensive, I bought it."],
    ["unless", "যদি না", "Don't call me unless it is urgent."],
    ["even though", "যদিও (জোর দিয়ে)", "Even though it was late, he kept working."],
    ["in order to", "যাতে / উদ্দেশ্যে", "I get up early in order to study."],
    ["despite", "সত্ত্বেও", "Despite the rain, the match continued."],
    ["provided that", "এই শর্তে যে", "You can go provided that you return by ten."]
  ],
  prod: ["Describe a person who has influenced you (110 words). Use at least four relative clauses and four different subordinating conjunctions.",
    "Model: The person who has influenced me most is my school teacher, Mr Karim, who taught us English for five years. Although he was strict, every student respected him. He believed that a student who reads every day will always succeed. When I was in class nine, I was very weak in English, so he gave me a storybook that he had read as a child. He told me to read one page a day until I finished it. Because of him, I began to enjoy reading. The school where he taught is far away now, but I still visit him whenever I go home."],
  quiz: [
    ["*The woman ___ teaches us is from Barishal.*", ["which", "who", "whose", "where"], 1, "A person: who."],
    ["*This is the village ___ my father was born.*", ["which", "who", "where", "that it"], 2, "A place where something happened."],
    ["*___ he was tired, he continued working.*", ["Because", "Although", "Unless", "So that"], 1, "A contrast: although."],
    ["Which sentence is correct?", ["The book that I read it was boring.", "The book that I read was boring.", "The book who I read was boring.", "The book which I read it was boring."], 1, "Do not repeat the object pronoun."],
    ["*You won't improve ___ you practise every day.*", ["if", "unless", "although", "because"], 1, "*Unless* = if not."]
  ]
});

D({ n: 30, t: "Week 5 review and test", s: "review", m: 40, review: true,
  goal: "You are halfway. Check agreement, comparison, quantity and sentence building. Score 60% or more to pass.",
  bn: "অর্ধেক পথ শেষ! এখন থেকে প্রতিদিন অন্তত একটি অনুচ্ছেদ লিখুন এবং নিজেই নিজের ভুল খুঁজুন।",
  tasks: [
    "Read all your written tasks from Weeks 1 to 5. Make a list of your ten most frequent mistakes.",
    "Review vocabulary from Weeks 1 to 5 (150 words). Mark the words you still forget and write new sentences with them.",
    "Write 150 words: 'The advantages and disadvantages of living in Dhaka.' Use simple, compound and complex sentences."
  ],
  quiz: [
    ["*Each of the students ___ a certificate.*", ["receive", "receives", "are receiving", "have received"], 1, "*Each* is singular."],
    ["*This is ___ film I have ever seen.*", ["the worse", "the baddest", "the worst", "most bad"], 2, "Superlative of *bad*: the worst."],
    ["*We have ___ time left, so we must hurry.*", ["a few", "few", "little", "many"], 2, "Uncountable and almost none: little."],
    ["*I was tired, ___ I finished my homework.*", ["so", "because", "but", "or"], 2, "Contrast: but."],
    ["*The laptop ___ I bought last year is still working.*", ["who", "where", "that", "whose"], 2, "A thing: that or which."],
    ["Which sentence is correct?", ["Because it was late, so we left.", "Because it was late, we left.", "Because it was late. We left.", "It was late because, we left."], 1, "Use *because* or *so*, not both."],
    ["*Rent in Dhaka is ___ higher than in Rajshahi.*", ["very", "much", "more", "too"], 1, "*Much* strengthens a comparative."],
    ["*A number of people ___ waiting outside.*", ["is", "was", "are", "has been"], 2, "*A number of* = several, so plural."]
  ]
});
D({ n: 31, t: "Conditionals: zero and first", s: "grammar", m: 45,
  goal: "Talk about things that are always true and things that are likely to happen, without putting will after if.",
  bn: "if এর অংশে will বসে না: If it rains (If it will rain নয়), I will stay at home। বাংলায় 'যদি বৃষ্টি হবে' ভাবলে এই ভুল হয়।",
  notes: [
    ["Zero conditional: always true", "*If* + present simple, present simple. Use it for facts, rules and habits. *If you **heat** ice, it **melts**. If I **drink** coffee at night, I **can't** sleep.* Here *if* means almost the same as *when*."],
    ["First conditional: real future possibility", "*If* + present simple, *will* + base verb. *If it **rains** tomorrow, I **will stay** at home. If you **study** hard, you **will pass**.* The *if* clause can come second with no comma: *I will stay at home if it rains.*"],
    ["Other words and other results", "*unless* = if not: *You will miss the bus **unless** you hurry.* Also *as long as, provided that, in case*. In the result you can use *can, may, might, should* or an imperative: *If you finish early, you **can** go. If you see him, **tell** him to call me.*"],
    ["Summary", "Compare the two types.", [
      ["Type", "If clause", "Result", "Use"],
      ["Zero", "present simple", "present simple", "always true"],
      ["First", "present simple", "will / can / may + verb", "possible in the future"]
    ]]
  ],
  fix: [
    ["If it will rain, we will cancel the trip.", "If it rains, we will cancel the trip."],
    ["If you will study, you pass.", "If you study, you will pass."],
    ["Unless you don't work hard, you will fail.", "Unless you work hard, you will fail."]
  ],
  yt: ["zero and first conditional English lesson", "first conditional if clauses English grammar", "conditional sentence bangla first conditional"],
  tasks: [
    "Write eight zero conditional sentences about science, health or your own habits.",
    "Write eight first conditional sentences about your plans for this year.",
    "Rewrite four of your sentences with unless.",
    "Make a chain aloud: 'If I pass IELTS, I will go abroad. If I go abroad, I will...' Continue for ten steps."
  ],
  vocab: [
    ["condition", "শর্ত", "The job has one condition: you must work at night."],
    ["consequence", "পরিণতি", "Think about the consequences."],
    ["likely", "সম্ভাব্য", "It is likely to rain tonight."],
    ["otherwise", "নইলে", "Hurry up; otherwise we will be late."],
    ["as long as", "যতক্ষণ / এই শর্তে", "You can stay as long as you are quiet."],
    ["in case", "যদি এমন হয় সেই ভেবে", "Take an umbrella in case it rains."]
  ],
  prod: ["Write 100 words: 'What will happen if people continue to waste water?' Use at least five first conditionals and two zero conditionals.",
    "Model: If people continue to waste water, many cities will face a serious shortage. When there is not enough water, crops fail and food becomes expensive. If the price of food rises, poor families will suffer the most. If we do not protect our rivers, they will become too dirty to use. However, if every family saves a little water each day, the situation will improve. Unless the government makes strict rules, factories will keep polluting. If we act now, our children will have clean water."],
  quiz: [
    ["*If you ___ water, it boils.*", ["will heat", "heat", "heated", "would heat"], 1, "Zero conditional: present + present."],
    ["*If she ___ the bus, she will be late.*", ["will miss", "misses", "missed", "miss"], 1, "First conditional: present simple after *if*, with -s for she."],
    ["*We will go to the beach tomorrow ___ it rains.*", ["if", "unless", "when", "as long as"], 1, "*Unless* = if it does not rain."],
    ["*If I see him, I ___ him your message.*", ["give", "gave", "will give", "would gave"], 2, "Result clause: will + base verb."],
    ["Which sentence is correct?", ["If I will have time, I will call you.", "If I have time, I call you tomorrow.", "If I have time, I will call you.", "If I had time, I will call you."], 2, "Present after *if*, will in the result."]
  ]
});

D({ n: 32, t: "Conditionals: second and third, and wish", s: "grammar", m: 50,
  goal: "Talk about imaginary situations now and in the past, which you will need for speculating in IELTS Speaking Part 3.",
  bn: "কল্পনা বা অবাস্তব কথা: If I had money, I would buy a car (আমার টাকা নেই)। এখানে past tense অতীত বোঝায় না, কল্পনা বোঝায়।",
  notes: [
    ["Second conditional: unreal now or unlikely future", "*If* + past simple, *would* + base verb. *If I **had** a million taka, I **would start** a business* (I do not have it). *If I **were** you, I **would apply*** (advice). Use *were* for all persons in careful English: *If he **were** here...*"],
    ["First or second?", "It depends on how real the speaker thinks it is. *If I **pass**, I **will** celebrate* (I think it is possible). *If I **won** the lottery, I **would** travel the world* (I do not expect it)."],
    ["Third conditional: unreal past", "*If* + past perfect, *would have* + past participle. It imagines a different past. *If I **had studied** harder, I **would have passed*** (I did not study hard, and I failed)."],
    ["Wish", "*wish* + past simple for a present situation you want to change: *I **wish** I **spoke** English fluently. I **wish** I **had** more time.* *wish* + past perfect for a past regret: *I **wish** I **had started** earlier.*", [
      ["Type", "If clause", "Result"],
      ["Second", "past simple", "would + verb"],
      ["Third", "past perfect", "would have + past participle"]
    ]]
  ],
  fix: [
    ["If I would be rich, I would help the poor.", "If I were rich, I would help the poor."],
    ["If I have wings, I would fly.", "If I had wings, I would fly."],
    ["I wish I can speak English well.", "I wish I could speak English well."]
  ],
  yt: ["second conditional English lesson if I were", "third conditional and wish English grammar", "second third conditional bangla"],
  tasks: [
    "Answer in full sentences: What would you do if you were the prime minister? If you could live anywhere? If you found a wallet in the street? If you had one free year?",
    "Write six pieces of advice beginning 'If I were you, I would...'.",
    "Write four regrets with the third conditional and four with I wish.",
    "Speak for two minutes on: 'If I could change three things about my country.' Record it."
  ],
  vocab: [
    ["imagine", "কল্পনা করা", "Imagine you had no phone for a week."],
    ["regret", "অনুশোচনা করা", "I regret wasting my time."],
    ["opportunity", "সুযোগ", "If I had the opportunity, I would study abroad."],
    ["afford", "সামর্থ্য থাকা", "I cannot afford a new laptop."],
    ["unlikely", "অসম্ভাব্য", "It is unlikely that he will come."],
    ["situation", "পরিস্থিতি", "What would you do in this situation?"]
  ],
  prod: ["Write 100 words: 'If I could change one thing about the education system.' Use the second conditional throughout and end with one wish.",
    "Model: If I could change one thing about our education system, I would reduce memorisation. If students did not have to memorise whole chapters, they would have more time to think. If I were the education minister, I would add speaking and writing practice to every English class. Teachers would ask questions that have more than one answer. If exams tested understanding, coaching centres would lose their importance. I wish my own school had taught us to speak. If it had done so, I would not have been afraid of English for so many years."],
  quiz: [
    ["*If I ___ a bird, I would fly to you.*", ["am", "was being", "were", "will be"], 2, "Unreal present: *were*."],
    ["*If she had more time, she ___ a new language.*", ["will learn", "would learn", "learns", "would have learn"], 1, "Second conditional: would + base verb."],
    ["*If you had told me, I ___ you.*", ["would help", "will help", "would have helped", "had helped"], 2, "Unreal past: would have + past participle."],
    ["*I wish I ___ taller.*", ["am", "were", "will be", "would"], 1, "*Wish* + past form for the present."],
    ["Which sentence talks about a real possibility?", ["If I won the lottery, I would buy a house.", "If it rains, I will take a taxi.", "If I were you, I would say sorry.", "If I had known, I would have come."], 1, "The first conditional is for real possibilities."]
  ]
});

D({ n: 33, t: "The passive voice", s: "grammar", m: 50,
  goal: "Form and recognise passive sentences, which are common in academic reading and in describing processes.",
  bn: "কাজটা কে করল তার চেয়ে কাজটা কী হলো সেটা যখন জরুরি, তখন passive: The bridge was built in 2022। গঠন: be + past participle (V3)।",
  notes: [
    ["Active and passive", "Active: the subject does the action. *The company **built** the bridge.* Passive: the subject receives the action. *The bridge **was built** (by the company).* The object of the active sentence becomes the subject of the passive one."],
    ["Form: be + past participle", "Change only the verb *be* to show the tense.", [
      ["Tense", "Active", "Passive"],
      ["Present simple", "They make cars here.", "Cars are made here."],
      ["Present continuous", "They are repairing the road.", "The road is being repaired."],
      ["Past simple", "Someone stole my phone.", "My phone was stolen."],
      ["Present perfect", "They have cancelled the exam.", "The exam has been cancelled."],
      ["Future", "They will announce the result.", "The result will be announced."],
      ["Modal", "You must wear a mask.", "A mask must be worn."]
    ]],
    ["When to use it", "1. The doer is unknown or obvious: *My bag **was stolen**. He **was arrested**.* 2. The action or the object matters more: *Tea **is grown** in Sylhet.* 3. In formal and scientific writing, and for processes: *The leaves **are picked**, **dried** and **packed**.*"],
    ["Common errors", "Intransitive verbs (no object) cannot be passive: *The accident **happened***, not *was happened*. *He **died***, not *was died*. And remember *born*: *I **was born** in 2003.*"]
  ],
  fix: [
    ["The accident was happened last night.", "The accident happened last night."],
    ["This house built in 1990.", "This house was built in 1990."],
    ["English is speak all over the world.", "English is spoken all over the world."]
  ],
  yt: ["passive voice English grammar lesson", "active and passive voice all tenses English", "active passive voice bangla"],
  tasks: [
    "Change ten active sentences from your earlier writing into the passive.",
    "Write eight facts about Bangladesh in the passive (Rice is grown..., The Padma Bridge was opened...).",
    "Describe how tea is made, from boiling water to serving, in six passive sentences.",
    "Find ten passive verbs in a news report and identify the tense of each."
  ],
  vocab: [
    ["produce", "উৎপাদন করা", "Jute is produced in Bangladesh."],
    ["export", "রপ্তানি করা", "Garments are exported to Europe."],
    ["establish", "প্রতিষ্ঠা করা", "The university was established in 1921."],
    ["damage", "ক্ষতি করা", "Many houses were damaged by the cyclone."],
    ["process", "প্রক্রিয়া", "The process has five stages."],
    ["deliver", "পৌঁছে দেওয়া", "The parcel will be delivered tomorrow."]
  ],
  prod: ["Describe how rice reaches your plate, from the field to the kitchen (90 words). Use at least eight passive verbs and sequence words.",
    "Model: First, the land is ploughed and the seeds are planted. The young plants are watered regularly for several months. When the rice is ripe, it is cut and tied into bundles. After that, the grains are separated from the stalks and dried in the sun. Then the rice is taken to a mill, where the husk is removed. Next, it is packed in sacks and transported to markets. Finally, it is bought by families, washed and cooked."],
  quiz: [
    ["*The letter ___ yesterday.*", ["was sent", "sent", "is sent", "has sent"], 0, "Past simple passive: was + past participle."],
    ["*Rice ___ in most parts of Bangladesh.*", ["grows by", "is grown", "is grow", "has grow"], 1, "Present simple passive."],
    ["Which sentence is correct?", ["The meeting was happened on Monday.", "The meeting happened on Monday.", "The meeting was happen on Monday.", "The meeting is happened on Monday."], 1, "*Happen* has no passive."],
    ["Make passive: *They will repair the road.*", ["The road will repaired.", "The road will be repaired.", "The road will be repair.", "The road is will repaired."], 1, "Will + be + past participle."],
    ["*The results ___ yet.*", ["have not announced", "have not been announced", "has not been announce", "are not announce"], 1, "Present perfect passive: have been + past participle."]
  ]
});

D({ n: 34, t: "Verb patterns: -ing or to + verb", s: "grammar", m: 45,
  goal: "Choose the right form of a second verb after enjoy, want, decide, suggest and other common verbs.",
  bn: "কিছু ক্রিয়ার পরে -ing (enjoy reading), কিছুর পরে to (want to read)। এর কোনো সহজ সূত্র নেই, তালিকা ধরে মুখস্থ করতে হবে। Preposition এর পরে সবসময় -ing।",
  notes: [
    ["Verb + -ing", "*enjoy, finish, avoid, mind, suggest, practise, keep, consider, imagine, miss, give up, can't help, spend time*. *I **enjoy reading**. She **finished writing**. He **avoids eating** sugar. Keep **trying**.*"],
    ["Verb + to + base verb", "*want, would like, need, hope, plan, decide, agree, promise, refuse, learn, try, manage, expect, offer, afford, seem*. *I **want to go**. We **decided to stay**. She **promised to help**.*"],
    ["Both, with the same or a different meaning", "Same meaning: *like, love, hate, start, begin, continue*. *It started **raining** / **to rain**.* Different meaning:", [
      ["Verb", "+ -ing", "+ to"],
      ["stop", "I stopped smoking. (I gave it up)", "I stopped to smoke. (I paused in order to smoke)"],
      ["remember", "I remember locking the door. (memory of the past)", "Remember to lock the door. (do not forget)"],
      ["try", "Try adding salt. (experiment)", "I tried to open it. (made an effort)"]
    ]],
    ["Three more patterns", "1. After any preposition, use -ing: *I am interested in **learning**. Thank you for **helping**. I look forward to **hearing** from you.* 2. -ing as a subject: ***Swimming** is good exercise.* 3. *make* and *let* + object + base verb: *My mother **made me clean** my room. She **let me go**.*"]
  ],
  fix: [
    ["I enjoy to play cricket.", "I enjoy playing cricket."],
    ["She decided going abroad.", "She decided to go abroad."],
    ["I am looking forward to meet you.", "I am looking forward to meeting you."]
  ],
  yt: ["gerunds and infinitives English grammar lesson", "verb patterns ing or to infinitive", "gerund infinitive bangla tutorial"],
  tasks: [
    "Copy the two verb lists on one page in two columns. Read them aloud every day this week.",
    "Write ten true sentences with verbs from the -ing list and ten with verbs from the to list.",
    "Write six sentences with preposition + -ing.",
    "Write three pairs of sentences that show the two meanings of stop, remember and try."
  ],
  vocab: [
    ["practise", "অনুশীলন করা", "I practise speaking every day."],
    ["consider", "বিবেচনা করা", "I am considering changing my job."],
    ["refuse", "প্রত্যাখ্যান করা", "He refused to answer."],
    ["manage", "সামলানো / করতে পারা", "I managed to pass the test."],
    ["suggest", "প্রস্তাব করা", "She suggested going by train."],
    ["look forward to", "অধীর অপেক্ষায় থাকা", "I look forward to seeing you."]
  ],
  prod: ["Write 100 words about your hobbies and your goals. Use at least six verb + -ing and six verb + to patterns.",
    "Model: I enjoy reading novels and watching documentaries. I have given up playing video games because I want to save time. I am planning to take the IELTS test next year, so I have decided to study for two hours every day. I practise speaking with a friend, and I try to learn ten words daily. I avoid using Bangla subtitles. I hope to get band 7. After studying, I like to go for a walk. I am looking forward to starting university."],
  quiz: [
    ["*I have finished ___ the report.*", ["to write", "write", "writing", "written"], 2, "*Finish* + -ing."],
    ["*She hopes ___ a scholarship.*", ["getting", "to get", "get", "got"], 1, "*Hope* + to."],
    ["*Thank you for ___ me.*", ["help", "to help", "helped", "helping"], 3, "Preposition + -ing."],
    ["*Remember ___ the gas before you leave.*", ["turning off", "to turn off", "turn off", "turned off"], 1, "*Remember to* = do not forget to do it."],
    ["*My father doesn't let me ___ out at night.*", ["to go", "going", "go", "went"], 2, "*Let* + object + base verb."]
  ]
});

D({ n: 35, t: "Reported speech", s: "grammar", m: 50,
  goal: "Report what other people said and asked, changing tenses, pronouns and word order correctly.",
  bn: "অন্যের কথা নিজের ভাষায় বললে tense এক ধাপ পিছিয়ে যায় (is হয় was)। Reported question এ প্রশ্নের word order থাকে না: He asked where I lived (where did I live নয়)।",
  notes: [
    ["Say and tell", "*say* (something): *He **said** (that) he was tired.* *tell* + person: *He **told me** (that) he was tired.* Never *said me*. You can say *said to me*."],
    ["Tenses move one step back", "When the reporting verb is past, the tense usually shifts.", [
      ["Direct speech", "Reported speech"],
      ["'I am busy.'", "She said she was busy."],
      ["'I work in a bank.'", "He said he worked in a bank."],
      ["'I am studying.'", "She said she was studying."],
      ["'I finished it.' / 'I have finished it.'", "He said he had finished it."],
      ["'I will call you.'", "She said she would call me."],
      ["'I can swim.' / 'I must go.'", "He said he could swim / had to go."]
    ]],
    ["Other changes", "Pronouns change with the speaker: *'**I** like **my** job'* becomes *he said **he** liked **his** job*. Time and place words change too: *today, that day; tomorrow, the next day; yesterday, the day before; here, there; this, that; now, then.*"],
    ["Questions and commands", "Reported questions use statement word order and no question mark. Wh- question: *'Where do you live?'* becomes *She asked me **where I lived**.* Yes/no question: use *if* or *whether*: *'Are you ready?'* becomes *He asked **if I was** ready.* Commands: *tell/ask* + person + *(not) to*: *'Sit down.'* becomes *He told me **to sit** down. 'Don't worry.'* becomes *She told me **not to worry**.*"]
  ],
  fix: [
    ["He said me that he was ill.", "He told me that he was ill."],
    ["She asked me where was I going.", "She asked me where I was going."],
    ["The teacher told us don't make noise.", "The teacher told us not to make noise."]
  ],
  yt: ["reported speech English grammar lesson", "reported questions and commands English", "direct indirect speech narration bangla"],
  tasks: [
    "Write ten things people said to you today or yesterday, first in direct speech and then in reported speech.",
    "Report these: 'I am tired.' 'I will help you.' 'I have lost my phone.' 'Where do you work?' 'Can you swim?' 'Open the window.' 'Don't be late.'",
    "Listen to a short English interview or news clip and write five sentences reporting what the speaker said.",
    "Tell a friend, in English, about a conversation you had this week."
  ],
  vocab: [
    ["deny", "অস্বীকার করা", "He denied that he had taken the money."],
    ["insist", "জোর দিয়ে বলা", "She insisted that she was right."],
    ["claim", "দাবি করা", "The company claimed that the product was safe."],
    ["admit", "স্বীকার করা", "He admitted that he had made a mistake."],
    ["warn", "সতর্ক করা", "The doctor warned me not to eat sugar."],
    ["according to", "অনুসারে", "According to the report, prices will fall."]
  ],
  prod: ["Write 100 words reporting a conversation you had with a teacher, parent or friend about your future. Use said, told, asked, advised and warned.",
    "Model: Last week I talked to my uncle about my plans. He asked me what I wanted to study. I told him that I was interested in engineering. He said that it was a good choice, but he warned me that the admission tests were very competitive. He asked if I had started preparing. I admitted that I had not. He advised me to make a study plan and told me not to waste time on my phone. He also said that he would lend me his old books."],
  quiz: [
    ["*'I am hungry,' he said.* Reported:", ["He said he is hungry.", "He said he was hungry.", "He said me he was hungry.", "He told he was hungry."], 1, "Present becomes past, and *said* takes no person."],
    ["*'Where do you live?' she asked.* Reported:", ["She asked me where do I live.", "She asked me where did I live.", "She asked me where I lived.", "She asked me where I live did."], 2, "Statement word order, past tense."],
    ["*'I will come tomorrow,' he said.* Reported:", ["He said he will come tomorrow.", "He said he would come the next day.", "He said he would came the next day.", "He told he would come tomorrow."], 1, "*Will* becomes *would*, *tomorrow* becomes *the next day*."],
    ["*'Don't touch it,' she said to me.* Reported:", ["She told me don't touch it.", "She told me to not touching it.", "She told me not to touch it.", "She said me not touch it."], 2, "Negative command: not to + base verb."],
    ["*'Are you a student?' he asked.* Reported:", ["He asked if I was a student.", "He asked was I a student.", "He asked that I was a student.", "He asked if was I a student."], 0, "Yes/no questions use *if* and statement order."]
  ]
});

D({ n: 36, t: "Week 6 review and test", s: "review", m: 40, review: true,
  goal: "Grammar is now complete. Check conditionals, the passive, verb patterns and reported speech. Score 60% or more to pass.",
  bn: "Grammar অংশ শেষ। এখন থেকে লক্ষ্য হবে এই grammar দিয়ে পড়া, শোনা, লেখা ও বলা। দুর্বল জায়গাগুলো আবার দেখুন।",
  tasks: [
    "Make a one-page grammar map of Weeks 1 to 6: write each topic with one example sentence of your own.",
    "Review vocabulary from Weeks 4 to 6 and test yourself.",
    "Write 150 words: 'A problem in my community and how it could be solved.' Include two conditionals, two passives and one reported statement."
  ],
  quiz: [
    ["*If I ___ enough money, I would buy a laptop.*", ["have", "had", "will have", "would have"], 1, "Second conditional: past simple after *if*."],
    ["*If you mix red and yellow, you ___ orange.*", ["would get", "get", "got", "had got"], 1, "Zero conditional for a fact."],
    ["*The bridge ___ in 2022.*", ["opened by", "was opened", "is open", "has opened in"], 1, "Past passive: was opened."],
    ["*She suggested ___ a taxi.*", ["to take", "take", "taking", "took"], 2, "*Suggest* + -ing."],
    ["*He told me ___ late.*", ["don't be", "to not being", "not to be", "not be to"], 2, "Reported negative command."],
    ["*The work must ___ by Friday.*", ["finish", "be finished", "finished", "be finish"], 1, "Modal passive: must be + past participle."],
    ["*I wish I ___ more free time.*", ["have", "had", "will have", "am having"], 1, "*Wish* + past simple for the present."],
    ["*She asked me what time ___ .*", ["did the class start", "the class started", "does the class start", "started the class"], 1, "Reported question: statement order."]
  ]
});
D({ n: 37, t: "Word building: prefixes, suffixes and word families", s: "vocabulary", m: 50,
  goal: "Turn one word into four by changing its form, and guess the meaning of new words from their parts.",
  bn: "একটি শব্দ শিখলে তার পুরো পরিবার শিখুন: succeed (verb), success (noun), successful (adjective), successfully (adverb)। IELTS এ সঠিক word form না জানলে নম্বর কাটা যায়।",
  notes: [
    ["Suffixes show the part of speech", "The ending of a word often tells you its job.", [
      ["Makes", "Suffixes", "Examples"],
      ["nouns", "-tion/-sion, -ment, -ness, -ity, -ance/-ence, -er/-or, -ship", "education, development, happiness, ability, importance, teacher, friendship"],
      ["adjectives", "-ful, -less, -able/-ible, -ous, -al, -ive, -ic, -y", "useful, careless, comfortable, dangerous, national, active, economic, rainy"],
      ["verbs", "-ise/-ize, -ify, -en, -ate", "organise, simplify, widen, educate"],
      ["adverbs", "-ly", "quickly, successfully"]
    ]],
    ["Prefixes change the meaning", "*un-* (unhappy), *in-/im-/il-/ir-* (incorrect, impossible, illegal, irregular), *dis-* (disagree), *mis-* (misunderstand = understand wrongly), *re-* (rewrite = write again), *over-* (overcrowded = too crowded), *under-* (underpaid), *pre-* (preview), *non-* (non-smoker)."],
    ["Word families", "Record words in families, not alone.", [
      ["Verb", "Noun", "Adjective", "Adverb"],
      ["succeed", "success", "successful", "successfully"],
      ["educate", "education", "educational / educated", "educationally"],
      ["decide", "decision", "decisive", "decisively"],
      ["create", "creation / creativity", "creative", "creatively"],
      ["differ", "difference", "different", "differently"],
      ["benefit", "benefit", "beneficial", "beneficially"]
    ]],
    ["Use the sentence to choose the form", "After *a/the/my* you need a noun: *the **development** of the country*. Before a noun you need an adjective: *a **successful** business*. After a subject you need a verb: *The plan **succeeded***. To describe a verb you need an adverb: *She answered **confidently***."]
  ],
  fix: [
    ["He is a very success businessman.", "He is a very successful businessman."],
    ["Education is very importance.", "Education is very important."],
    ["The economical growth of the country is fast.", "The economic growth of the country is fast."]
  ],
  yt: ["word formation prefixes suffixes English lesson", "word families English vocabulary noun verb adjective adverb", "prefix suffix bangla tutorial"],
  tasks: [
    "Complete the family (verb, noun, adjective, adverb) for: act, agree, care, compete, danger, develop, hope, inform, nation, produce. Use a dictionary.",
    "Write the opposites with a prefix: able, correct, fair, honest, legal, lucky, patient, polite, possible, regular, responsible, usual.",
    "Divide a page of your word notebook into four columns and rewrite 15 old words as families.",
    "Write ten sentences, each using two words from the same family."
  ],
  vocab: [
    ["development", "উন্নয়ন", "The development of the country depends on education."],
    ["beneficial", "উপকারী", "Exercise is beneficial for health."],
    ["responsible", "দায়িত্বশীল", "Be a responsible citizen."],
    ["misunderstand", "ভুল বোঝা", "Please do not misunderstand me."],
    ["competition", "প্রতিযোগিতা", "Competition for jobs is very high."],
    ["unemployment", "বেকারত্ব", "Unemployment is a serious problem."]
  ],
  prod: ["Write 100 words on 'The importance of education'. Underline every word that has a prefix or suffix. Use at least 12.",
    "Model: Education is the foundation of national development. An educated person can make better decisions and find employment more easily. Without education, people often remain unemployed and powerless. Good teachers encourage creativity and independent thinking. Education is also beneficial for society, because it reduces inequality and increases awareness of health. Unfortunately, many children in rural areas are unable to continue their studies because of poverty. The government should take responsibility and make education affordable for everyone."],
  quiz: [
    ["*The ___ of the new bridge took five years.*", ["construct", "constructive", "construction", "constructed"], 2, "After *the* we need a noun."],
    ["*She speaks very ___ in interviews.*", ["confident", "confidence", "confidently", "confide"], 2, "An adverb describes how she speaks."],
    ["The opposite of *legal* is", ["unlegal", "dislegal", "illegal", "nonlegal"], 2, "Words beginning with l often take *il-*."],
    ["*This medicine is very ___ .*", ["effect", "effective", "effectively", "effectiveness"], 1, "After *be* + very we need an adjective."],
    ["*Misspell* means", ["spell again", "spell wrongly", "spell before", "not spell"], 1, "*Mis-* means wrongly."]
  ]
});

D({ n: 38, t: "Collocations and phrasal verbs", s: "vocabulary", m: 50,
  goal: "Use the natural word partners of English instead of translating word by word from Bangla.",
  bn: "ইংরেজিতে কিছু শব্দ সবসময় একসঙ্গে বসে: make a mistake (do a mistake নয়), heavy rain (strong rain নয়)। বাংলা থেকে হুবহু অনুবাদ করলে এগুলো ভুল হয়।",
  notes: [
    ["What is a collocation?", "Words that native speakers always use together. *make a decision, take a photo, heavy rain, strong wind, fast food, a quick shower.* There is no rule. You learn them as pairs."],
    ["Make, do, have, take", "The four most confused verbs.", [
      ["make", "do", "have", "take"],
      ["a mistake", "homework", "breakfast / lunch", "an exam"],
      ["a decision", "an exercise", "a shower", "a photo"],
      ["an effort", "business", "a problem", "a break"],
      ["money", "your best", "a good time", "notes"],
      ["progress", "research", "an argument", "a risk"],
      ["a phone call", "the housework", "a conversation", "medicine"]
    ]],
    ["Other common partners", "*tell a lie / tell the truth*, *say a prayer*, *give a speech*, *catch a cold*, *pay attention*, *keep a promise*, *save time*, *spend money*, *get a job*, *pass / fail an exam*, *reach a conclusion*, *play a role*, *solve a problem*, *raise awareness*, *highly successful*, *deeply sorry*, *completely different*."],
    ["Phrasal verbs", "A verb + a small word, with a new meaning. Learn these fifteen first: *get up, wake up, turn on / off, look for, look after, find out, give up, carry on, put off (delay), pick up, run out of, set up (start), deal with, go on (continue), come back.* *I **gave up** smoking. We **ran out of** rice. The meeting was **put off**.*"]
  ],
  fix: [
    ["I did a big mistake in the exam.", "I made a big mistake in the exam."],
    ["There was a strong rain last night.", "There was heavy rain last night."],
    ["I gave my exam last week.", "I took my exam last week."]
  ],
  yt: ["English collocations make do have take lesson", "most common phrasal verbs English with examples", "collocation phrasal verb bangla"],
  tasks: [
    "Copy the make / do / have / take table. Cover the verbs and test yourself until you score 24 out of 24.",
    "Write 12 sentences about your week using three collocations from each column.",
    "Write a sentence with each of the fifteen phrasal verbs.",
    "Start a 'word partners' page in your notebook. Each time you read English, add three collocations you notice."
  ],
  vocab: [
    ["make progress", "অগ্রগতি করা", "You are making good progress."],
    ["pay attention", "মনোযো�� দেওয়া", "Pay attention to the instructions."],
    ["take a risk", "ঝুঁকি নেওয়া", "Sometimes you have to take a risk."],
    ["give up", "ছেড়ে দেওয়া / হাল ছাড়া", "Never give up."],
    ["find out", "জানতে পারা", "I found out the truth."],
    ["deal with", "সামলানো / মোকাবিলা করা", "She deals with customers every day."]
  ],
  prod: ["Write 100 words about how you prepare for an important exam. Use at least ten collocations or phrasal verbs from today.",
    "Model: Before an important exam I make a study plan and try to keep to it. I get up early, have a light breakfast and do my hardest subject first. I take notes while I read, and I take a short break every hour. If I find out that I have made a mistake, I do the exercise again. I never put off difficult chapters. I turn off my phone so that I can pay attention. On the day I take the exam, I do my best and never give up."],
  quiz: [
    ["*I need to ___ a decision soon.*", ["do", "make", "take up", "give"], 1, "*Make a decision* is the usual collocation."],
    ["*She is ___ her homework now.*", ["making", "doing", "having", "giving"], 1, "Do homework."],
    ["*We have ___ sugar. Can you buy some?*", ["run out of", "given up", "put off", "looked after"], 0, "*Run out of* = have none left."],
    ["Which is a natural collocation?", ["strong rain", "big rain", "heavy rain", "hard rain fall"], 2, "English says *heavy rain*."],
    ["*The match was ___ because of the storm.*", ["put off", "put on", "taken off", "given up"], 0, "*Put off* = delay to a later time."]
  ]
});

D({ n: 39, t: "Synonyms and paraphrasing", s: "vocabulary", m: 50,
  goal: "Say the same idea in different words. This is the single most important skill for every part of IELTS.",
  bn: "IELTS Reading ও Listening এ প্রশ্নের শব্দ আর উত্তরের শব্দ এক হয় না, একই অর্থের ভিন্ন শব্দ থাকে। তাই প্রতিটি নতুন শব্দের সঙ্গে একটি সমার্থক শব্দও শিখুন।",
  notes: [
    ["Why paraphrasing matters", "In IELTS Reading and Listening, the question uses different words from the text: the text says *children*, the question says *young people*. In Writing and Speaking, you must not copy the question. You restate it in your own words."],
    ["Three ways to paraphrase", "1. **Synonyms:** *Many people think* becomes *A large number of individuals believe*. 2. **Word form:** *The population grew rapidly* becomes *There was rapid growth in the population*. 3. **Structure:** *The government built the road* becomes *The road was built by the government*. Use two or three together."],
    ["Useful synonym sets", "Learn these now.", [
      ["Basic word", "Other ways to say it"],
      ["important", "essential, vital, crucial, significant"],
      ["big", "large, major, considerable, huge"],
      ["problem", "issue, difficulty, challenge"],
      ["good", "beneficial, positive, effective, excellent"],
      ["bad", "harmful, negative, damaging, poor"],
      ["show", "illustrate, indicate, demonstrate"],
      ["think", "believe, consider, argue, feel"],
      ["help", "assist, support, enable"],
      ["increase / decrease", "rise, grow / fall, decline, drop"],
      ["nowadays", "these days, at present, currently"]
    ]],
    ["Be careful", "Synonyms are not always exact. *Cheap* can sound negative, but *affordable* is positive. *Thin* is neutral, but *skinny* is not polite. Do not replace words such as *water* or *car* with strange alternatives. A paraphrase must keep the same meaning."]
  ],
  fix: [
    ["Technology is very very important.", "Technology is extremely important. / Technology is essential."],
    ["Pollution is a big problem. It is a big problem for health.", "Pollution is a serious issue. It is a major threat to health."],
    ["Many peoples thinks that...", "Many people believe that..."]
  ],
  yt: ["how to paraphrase in English lesson", "paraphrasing for IELTS beginners synonyms", "IELTS vocabulary synonyms common words"],
  tasks: [
    "Copy the synonym table and add one more word to every row with the help of a dictionary or thesaurus.",
    "Paraphrase these five sentences in two different ways each: (1) Many people use mobile phones nowadays. (2) Traffic is a big problem in cities. (3) Children should learn English early. (4) The price of food has increased. (5) Smoking is bad for health.",
    "Take five sentences from a news article and rewrite them in your own words.",
    "Explain aloud in English the meaning of ten Bangla words without translating them directly (for example: adda, pitha, hartal)."
  ],
  vocab: [
    ["essential", "অপরিহার্য", "Water is essential for life."],
    ["significant", "উল্লেখযোগ্য", "There has been a significant change."],
    ["issue", "সমস্যা / বিষয়", "Pollution is a serious issue."],
    ["illustrate", "দৃষ্টান্ত দিয়ে দেখানো", "The chart illustrates the trend."],
    ["decline", "হ্রাস পাওয়া", "Sales declined last year."],
    ["affordable", "সাধ্যের মধ্যে", "We need affordable housing."]
  ],
  prod: ["Paraphrase this paragraph in about 70 words, changing words, word forms and structures: 'Nowadays many young people in Bangladesh want to go abroad to study. They think foreign universities are better. However, studying abroad is very expensive, and many families cannot pay for it.'",
    "Model: These days a large number of Bangladeshi students hope to continue their education overseas because they believe that universities in other countries offer higher quality. Nevertheless, the cost of an international degree is extremely high. As a result, it is not affordable for a significant number of families."],
  quiz: [
    ["Which word is closest in meaning to *essential*?", ["optional", "vital", "useless", "simple"], 1, "*Vital* and *essential* both mean absolutely necessary."],
    ["Best paraphrase of *The number of cars has increased*:", ["Cars are now cheaper.", "There are fewer cars now.", "There has been a rise in the number of cars.", "Cars have become faster."], 2, "The meaning is kept, and the verb *increase* becomes the noun *rise*."],
    ["A text says *elderly people*. Which words in a question mean the same?", ["young adults", "senior citizens", "school children", "new parents"], 1, "*Senior citizens* = elderly people."],
    ["Which sentence keeps the meaning of *Smoking is harmful to health*?", ["Smoking damages your health.", "Smoking is expensive.", "Health is harmful to smoking.", "Smoking is healthy."], 0, "*Harmful to* = *damages*."],
    ["Which is the most suitable formal word for *nowadays* in an essay?", ["now a days", "in this modern era of science and technology", "currently", "in the old days"], 2, "*Currently* is short and correct. *Now a days* is a spelling error."]
  ]
});

D({ n: 40, t: "Pronunciation 1: the sounds Bangla speakers confuse", s: "pronunciation", m: 50,
  goal: "Hear and produce the difference between f and p, v and b, z and j, s and sh, and the two th sounds.",
  bn: "বাংলাভাষীরা প্রায়ই z কে জ, f কে ফ, v কে ভ এবং th কে ত/দ উচ্চারণ করেন। zoo কে 'জু', very কে 'ভেরি' বললে অর্থ বদলে যেতে পারে। আয়নার সামনে মুখের অবস্থান দেখে অনুশীলন করুন।",
  notes: [
    ["/f/ and /v/: teeth on lip", "For English /f/ and /v/, the top teeth touch the bottom lip and air passes through. Bangla ফ and ভ are made with two lips. *fan* is not *pan*, and *very* is not *berry*. /f/ has no voice, /v/ has voice: *fine, vine; fast, vast; leaf, leave*."],
    ["/z/ and /dʒ/", "/z/ is a long buzzing sound like a bee, with the tongue behind the top teeth: *zoo, zero, busy, easy, is, was, please*. /dʒ/ (as in *job*) stops the air first. Do not say *jero* for *zero* or *ijy* for *easy*."],
    ["/s/ and /ʃ/", "/s/ as in *see, same, sip*. /ʃ/ as in *she, shame, ship*. Regional habits can swap these. Practise: *sea, she; so, show; sell, shell; seat, sheet*."],
    ["The two th sounds", "Put the tip of the tongue lightly between the teeth and blow. Without voice /θ/: *think, three, thank, both, month*. With voice /ð/: *this, that, the, mother, weather*. They are not the Bangla ত, থ or দ."],
    ["Other trouble spots", "1. No extra vowel before s-clusters: *school*, not *ischool*; *station*, not *istation*. 2. Short and long vowels change meaning: *ship, sheep; sit, seat; full, fool*. 3. /w/ has round lips and no teeth: *west* is not *vest*. 4. Silent letters: *k*now, *w*rite, lis*t*en, cou*l*d, clim*b*, *h*our."]
  ],
  say: ["fan, pan", "very, berry", "zoo, zip, zone", "zero", "easy", "see, she", "sip, ship", "think, sink", "three, tree", "this, these", "mother, weather", "school, station, student", "ship, sheep", "sit, seat", "west, vest", "know, write, listen, hour"],
  fix: [
    ["Saying 'jero' and 'joo'", "zero and zoo, with a long buzzing z"],
    ["Saying 'ischool' and 'istudent'", "school and student, starting directly with s"],
    ["Saying 'tree' for the number 3", "three, with the tongue between the teeth"]
  ],
  yt: ["English pronunciation f v p b sounds practice", "th sound pronunciation English lesson", "English pronunciation mistakes Bengali speakers"],
  tasks: [
    "Tap every item in 'Listen and repeat' three times and copy the sound aloud. Use a mirror to check your teeth and tongue.",
    "Record yourself reading the 16 items. Compare your recording with the audio and repeat the ones that sound different.",
    "Read aloud slowly: 'Thirty-three thieves think these things are very fine. She sells sea shells. The zebra is easy to see in the zoo.'",
    "Choose one video on the sound you find hardest and practise with it for ten minutes."
  ],
  vocab: [
    ["pronounce", "উচ্চারণ করা", "How do you pronounce this word?"],
    ["vowel", "স্বরধ্বনি", "English has short and long vowels."],
    ["consonant", "ব্যঞ্জনধ্বনি", "The letter b is a consonant."],
    ["silent", "অনুচ্চারিত / নীরব", "The k in 'know' is silent."],
    ["accent", "উচ্চারণভঙ্গি", "You do not need a British accent to get a high band."],
    ["clearly", "স্পষ্টভাবে", "Speak slowly and clearly."]
  ],
  prod: ["Speaking task: read this aloud and record it. Listen and mark every f, v, z, sh and th. 'My father has visited five villages this month. He thinks the weather there is very fine. The zoo is thirty minutes from the station. She showed us the ship from the shore.'",
    "Check yourself: father and five use teeth on lip. visited, villages and very are not 'b'. this, the, there, weather, month, thinks and thirty use the tongue between the teeth. zoo has a buzzing z. she, showed, ship and shore are 'sh', and station starts with 's' with no vowel before it."],
  quiz: [
    ["Listen. Which word do you hear?", ["pan", "fan", "van", "ban"], 2, "*Van* starts with voiced /v/: teeth on the lip, with voice.", "van"],
    ["Listen. Which word do you hear?", ["sheep", "ship", "sip", "seep"], 0, "*Sheep* has /ʃ/ and a long vowel.", "sheep"],
    ["Listen. Which word do you hear?", ["tree", "free", "three", "tea"], 2, "*Three* begins with /θ/.", "three"],
    ["Which word has a silent letter?", ["bring", "knife", "drink", "stand"], 1, "The k in *knife* is silent."],
    ["Which pair differs only in vowel length?", ["fan / van", "sit / seat", "sea / she", "zest / jest"], 1, "*Sit* has a short vowel and *seat* a long one."]
  ]
});

D({ n: 41, t: "Pronunciation 2: stress, rhythm and intonation", s: "pronunciation", m: 50,
  goal: "Put the stress on the right syllable, stress the important words in a sentence, and use rising and falling tones.",
  bn: "বাংলায় প্রতিটি syllable প্রায় সমান জোরে বলা হয়, কিন্তু ইংরেজিতে একটি syllable জোরে আর বাকিগুলো হালকা। ভুল stress দিলে সঠিক শব্দও শ্রোতা বুঝতে পারেন না।",
  notes: [
    ["Word stress", "In every word of two or more syllables, one syllable is longer, louder and higher. *TEA-cher, be-GIN, im-POR-tant, in-for-MA-tion.* A dictionary marks it with ' before the stressed syllable. Learn the stress when you learn the word."],
    ["Useful patterns", "They are guides, not laws.", [
      ["Pattern", "Examples"],
      ["most two-syllable nouns and adjectives: first syllable", "TA-ble, DOC-tor, HAP-py, CLE-ver"],
      ["most two-syllable verbs: second syllable", "de-CIDE, be-LIEVE, ar-RIVE, for-GET"],
      ["noun or verb?", "a RE-cord, to re-CORD; a PRE-sent, to pre-SENT"],
      ["-tion, -sion, -ic: the syllable before", "e-du-CA-tion, de-CI-sion, e-co-NO-mic"],
      ["-ity, -graphy, -logy: two before the end", "u-ni-VER-si-ty, pho-TO-gra-phy, bi-O-lo-gy"]
    ]],
    ["Sentence stress and the weak sound", "We stress content words (nouns, main verbs, adjectives, adverbs) and say grammar words (a, the, to, of, and, is, can) quickly and weakly. *I WANT to GO to the MAR-ket.* Unstressed vowels often become the weak sound /ə/, as in *a-BOUT, TEA-ch**er**, **to**-DAY*."],
    ["Intonation and linking", "The voice **falls** at the end of statements and wh- questions: *Where do you live?* It **rises** in yes/no questions: *Do you live here?* In lists it rises on each item and falls on the last. Words link together when one ends in a consonant and the next begins with a vowel: *turn_off, an_apple, look_at_it*."]
  ],
  say: ["teacher", "begin", "important", "information", "a record", "to record", "education", "university", "photograph", "photography", "comfortable", "vegetable", "I want to go to the market.", "Where do you live?", "Do you live here?", "Turn it off."],
  fix: [
    ["de-VE-lop-MENT", "de-VE-lop-ment (one stress only)"],
    ["com-for-TA-ble (four syllables)", "COMF-ta-ble (three syllables, stress first)"],
    ["Stressing every word equally: I. AM. GOING. TO. THE. MARKET.", "I'm GOing to the MARket."]
  ],
  yt: ["English word stress rules pronunciation lesson", "sentence stress and intonation English", "connected speech linking English pronunciation"],
  tasks: [
    "Tap each item in 'Listen and repeat' and copy the rhythm. Clap on the stressed syllable.",
    "Look up the stress of 20 words from your notebook in an online dictionary and mark it with a capital letter.",
    "Take five sentences from today's notes. Underline the content words and read the sentences aloud, stressing only those words.",
    "Shadowing: play 30 seconds of a slow English video, pause after each sentence, and repeat it with the same rhythm and melody. Do this for ten minutes."
  ],
  vocab: [
    ["syllable", "অক্ষর / শব্দাংশ", "'Water' has two syllables."],
    ["stress", "জোর / ঝোঁক", "The stress is on the first syllable."],
    ["rhythm", "ছন্দ", "English has a strong rhythm."],
    ["emphasise", "জোর দেওয়া", "Emphasise the important words."],
    ["pause", "বিরতি", "Pause briefly after each idea."],
    ["natural", "স্বাভাবিক", "Linking makes your speech sound natural."]
  ],
  prod: ["Speaking task: record this short talk, stressing the words in capitals. 'My NAME is SAdia. I LIVE in a SMALL TOWN near BOgura. I'm LEARning ENGlish because I WANT to STUdy aBROAD. I PRACtise EVery DAY for an HOUR.' Then record a similar talk about yourself.",
    "Check yourself: grammar words (is, in, a, to, for, an) should be short and quiet. Your voice should fall at the end of each sentence. The talk should take about 12 seconds, not 20."],
  quiz: [
    ["Where is the stress in *important*?", ["IM-por-tant", "im-POR-tant", "im-por-TANT", "all syllables equally"], 1, "Second syllable: im-POR-tant."],
    ["In which word is the stress on the second syllable?", ["doctor", "table", "decide", "happy"], 2, "Two-syllable verbs often stress the second syllable: de-CIDE."],
    ["Which words are normally stressed in *She went to the market to buy some fish*?", ["she, to, the, some", "went, market, buy, fish", "to, the, to, some", "every word equally"], 1, "Content words carry the stress."],
    ["Which question usually ends with a rising tone?", ["Where are you from?", "What is your name?", "Are you a student?", "Why are you late?"], 2, "Yes/no questions rise."],
    ["*I bought a present* (noun). Where is the stress in *present*?", ["PRE-sent", "pre-SENT", "both syllables", "neither syllable"], 0, "The noun is stressed on the first syllable, the verb on the second."]
  ]
});

D({ n: 42, t: "Week 7 review and test", s: "review", m: 40, review: true,
  goal: "Check word building, collocations, paraphrasing and pronunciation. Score 60% or more to pass.",
  bn: "শব্দভান্ডার বাড়ানোর কাজ কখনো শেষ হয় না। এখন থেকে প্রতিদিন ১০টি নতুন শব্দ তার পরিবার ও collocation সহ খাতায় তুলুন।",
  tasks: [
    "Test yourself on the make / do / have / take table and the synonym table without looking.",
    "Record yourself reading any 100-word English text. Listen for z, f, v, th and for word stress. Record it again and compare.",
    "Write 150 words on 'Technology in daily life'. Then underline five words and replace each with a synonym."
  ],
  quiz: [
    ["*Her ___ helped the company grow.*", ["create", "creative", "creativity", "creatively"], 2, "After *her* we need a noun."],
    ["*He ___ a serious mistake in the report.*", ["did", "made", "took", "gave"], 1, "Make a mistake."],
    ["Which word means *to continue*?", ["give up", "put off", "carry on", "run out"], 2, "*Carry on* = continue."],
    ["A reading text says *The city has grown rapidly.* Which statement matches it?", ["The city has become smaller.", "The city has expanded quickly.", "The city is growing slowly.", "The city has not changed."], 1, "*Expanded quickly* paraphrases *grown rapidly*."],
    ["The opposite of *responsible* is", ["unresponsible", "disresponsible", "irresponsible", "inresponsible"], 2, "Words beginning with r often take *ir-*."],
    ["Listen. Which word do you hear?", ["due", "zoo", "shoe", "two"], 1, "*Zoo* begins with the buzzing /z/.", "zoo"],
    ["Where is the stress in *education*?", ["E-du-ca-tion", "e-DU-ca-tion", "e-du-CA-tion", "e-du-ca-TION"], 2, "Words ending in -tion stress the syllable before it."],
    ["Which collocation is correct?", ["take a decision quickly and do progress", "make a decision and make progress", "do a decision and take progress", "make a decision and do progress"], 1, "Both take *make*."]
  ]
});
D({ n: 43, t: "Reading 1: skimming and scanning", s: "reading", m: 50,
  goal: "Read a text quickly for its general idea, then find specific facts without reading every word.",
  bn: "IELTS Reading এ ৬০ মিনিটে প্রায় ২,৫০০ শব্দ পড়তে হয়। প্রতিটি শব্দ পড়ার সময় নেই। আগে চোখ বুলিয়ে মূল ভাব নিন (skimming), তারপর নির্দিষ্ট তথ্য খুঁজুন (scanning)।",
  notes: [
    ["Two speeds of reading", "**Skimming** = reading fast to get the general idea. **Scanning** = moving your eyes over the text to find one piece of information, such as a name, a number or a date. Good readers skim first and scan second. They do not read word by word and translate."],
    ["How to skim", "1. Read the title and any headings. 2. Read the first paragraph. 3. Read the first sentence of every other paragraph. 4. Read the last paragraph. 5. Ask yourself: what is this text about, and what is the writer's purpose? Give yourself one minute for 300 words."],
    ["How to scan", "1. Decide exactly what you are looking for: a number, a capital letter, a word. 2. Think of other words the text might use (*cost, price, fee, charge*). 3. Move your eyes quickly down the page in a Z shape. Do not read. 4. When you find it, read that sentence carefully."],
    ["Do not stop at unknown words", "You will always meet words you do not know. If the word is not needed for the question, ignore it. If it is needed, guess from the context (tomorrow's lesson). Never stop to translate every word."]
  ],
  read: { t: "Greenfield Community Library: information for new members", p: [
    "Greenfield Community Library welcomes everyone who lives, works or studies in the town. Membership is free for children under 16 and for people over 65. Adult members pay 300 taka a year, and students with a valid ID card pay half that amount.",
    "The library is open from 9 am to 8 pm from Saturday to Thursday. On Fridays it opens at 3 pm and closes at 7 pm. The reading room on the first floor has 60 seats, and the children's corner is on the ground floor next to the entrance.",
    "Members may borrow up to four books at a time for 14 days. A book can be renewed once, either at the front desk or by phone. If a book is returned late, there is a fine of 5 taka a day. Reference books, newspapers and magazines cannot be taken out of the building.",
    "The library also runs free activities. A storytelling hour for children takes place every Saturday at 10 am, and an English conversation club meets on Tuesday evenings. To join, bring one passport-size photograph and proof of your address to the front desk."
  ] },
  fix: [
    ["Reading every word from the beginning before looking at the questions", "Skim the text in one minute, read the questions, then scan for each answer."],
    ["Stopping to translate every unknown word into Bangla", "Keep reading. Guess or ignore words you do not need."],
    ["Looking only for the exact word from the question", "Look for synonyms too: 'cost' in the question may be 'fee' or 'pay' in the text."]
  ],
  yt: ["skimming and scanning reading skills English", "how to read faster in English reading tips", "IELTS reading skimming scanning for beginners"],
  tasks: [
    "Skim the library text in 45 seconds. Close your eyes and say in one sentence what it is about.",
    "Now scan it: find all the numbers and say what each one refers to. Time yourself.",
    "Choose any English news article. Give yourself one minute to skim it, then write a one-sentence summary.",
    "In the same article, scan for all names of people and places, and all numbers. Do this in under two minutes."
  ],
  vocab: [
    ["valid", "বৈধ", "You need a valid ID card."],
    ["membership", "সদস্যপদ", "Membership is free for children."],
    ["renew", "নবায়ন করা", "I need to renew my membership."],
    ["fine", "জরিমানা", "There is a fine for late books."],
    ["proof", "প্রমাণ", "Bring proof of your address."],
    ["take place", "অনুষ্ঠিত হওয়া", "The event takes place every Saturday."]
  ],
  prod: ["Write a 40-word summary of the library text for a friend who wants to join. Include only the most important information.",
    "Model: The library is free for children and older people, and costs 300 taka a year for adults. It is open every day, with shorter hours on Fridays. You can borrow four books for two weeks. Take a photo and proof of address to join."],
  quiz: [
    ["Skim: what is the main purpose of the text?", ["to advertise new books", "to explain the library's rules and services to new members", "to describe the history of the library", "to ask for donations"], 1, "The title and each paragraph give practical information for new members."],
    ["Scan: how much does a student with an ID card pay per year?", ["300 taka", "free", "150 taka", "5 taka"], 2, "Adults pay 300 taka and students pay *half that amount*."],
    ["Scan: when does the library close on Fridays?", ["8 pm", "7 pm", "3 pm", "9 pm"], 1, "On Fridays it opens at 3 pm and closes at 7 pm."],
    ["How long can a member keep a book if it is renewed once?", ["14 days", "21 days", "28 days", "4 days"], 2, "14 days plus one renewal of 14 days."],
    ["Which of these can you take home?", ["a newspaper", "a reference book", "a magazine", "a storybook"], 3, "Reference books, newspapers and magazines cannot be taken out."]
  ]
});

D({ n: 44, t: "Reading 2: main ideas and guessing meaning", s: "reading", m: 50,
  goal: "Find the main idea of a paragraph from its topic sentence, and work out unknown words from context.",
  bn: "প্রতিটি অনুচ্ছেদের একটি মূল ভাব থাকে, যা সাধারণত প্রথম বাক্যে (topic sentence) পাওয়া ��ায়। অচেনা শব্দ দেখলে অভিধান নয়, আগে আশপাশের বাক্য থেকে অর্থ অনুমান করুন।",
  notes: [
    ["Topic sentence and supporting details", "A good paragraph has one main idea. It usually appears in the first sentence, the **topic sentence**. The other sentences support it with reasons, examples, facts or explanations. To find the main idea, ask: what is every sentence in this paragraph about?"],
    ["Main idea or detail?", "A detail is true but small. The main idea is general enough to cover the whole paragraph. If a paragraph says that sleep helps memory, mood and health, the main idea is *sleep is important*, not *sleep helps memory*."],
    ["Guessing from context", "Use these clues around the unknown word.", [
      ["Clue", "Example", "Meaning"],
      ["definition or explanation", "He is an insomniac, a person who cannot sleep.", "the text explains it"],
      ["example", "Citrus fruits, such as oranges and lemons, are rich in vitamin C.", "a type of fruit"],
      ["contrast (but, however, unlike)", "Rina is talkative, but her sister is reticent.", "the opposite of talkative"],
      ["cause and result", "The road was so congested that we moved only one kilometre in an hour.", "very full of traffic"],
      ["word parts", "an unforgettable day", "un + forget + able: cannot be forgotten"]
    ]],
    ["A method for hard words", "1. Decide the part of speech. 2. Read the sentence before and after. 3. Decide whether the meaning is positive or negative. 4. Try a simple word in its place. 5. Read on. A rough meaning is enough."]
  ],
  read: { t: "Why students need sleep", p: [
    "Sleep is not a waste of time for students; it is a necessary part of learning. During the day the brain collects new information, but it is at night, while we sleep, that this information is consolidated, or fixed firmly in long-term memory. A student who studies for six hours and then sleeps well will often remember more than one who studies for nine hours and sleeps for four.",
    "A lack of sleep affects more than memory. Sleep-deprived students find it difficult to concentrate in class, and they make more careless mistakes. They also tend to feel irritable, becoming angry or upset over small things. Over a long period, too little sleep can weaken the body's defences, so that a person catches colds and other illnesses more easily.",
    "Many young people, however, sleep less than they should. Mobile phones are a major cause. The bright light from a screen tells the brain that it is still daytime, which delays sleep. In addition, messages and videos are designed to hold our attention, so ten minutes can easily turn into two hours.",
    "Fortunately, good sleep habits are simple. Experts recommend going to bed and getting up at the same time every day, avoiding tea and coffee in the evening, and putting the phone away an hour before bed. Students who follow this advice usually feel more alert in the morning instead of sluggish and slow."
  ] },
  fix: [
    ["Choosing a small detail as the main idea", "Choose the statement that covers every sentence in the paragraph."],
    ["Opening the dictionary for every new word", "Guess first from the context. Check the dictionary only after you finish reading."],
    ["Ignoring linking words such as however and in addition", "These words show how ideas connect and where the writer changes direction."]
  ],
  yt: ["how to find the main idea of a paragraph reading skills", "guessing meaning from context clues English", "topic sentence and supporting details explained"],
  tasks: [
    "Read the sleep text once without a dictionary. Underline the topic sentence of each paragraph.",
    "Write a heading of three to five words for each of the four paragraphs.",
    "Guess the meaning of consolidated, sleep-deprived, irritable, alert and sluggish from the context. Write your guesses, then check them in a dictionary.",
    "Read one more English article today and write the main idea of each paragraph in one line."
  ],
  vocab: [
    ["concentrate", "মনোযোগ দেওয়া", "I cannot concentrate when it is noisy."],
    ["affect", "প্রভাব ফেলা", "Lack of sleep affects your memory."],
    ["tend to", "প্রবণতা থাকা", "Tired people tend to make mistakes."],
    ["delay", "বিলম্ব করা", "Screen light delays sleep."],
    ["alert", "সজাগ", "I feel alert in the morning."],
    ["long-term", "দীর্ঘমেয়াদি", "Smoking has long-term effects."]
  ],
  prod: ["Write a summary of the sleep text in four sentences, one for each paragraph. Use your own words.",
    "Model: Sleep is essential for students because the brain stores what it has learnt during the night. Too little sleep harms attention, mood and health. Phones are a main reason why young people do not sleep enough. Regular bedtimes, no caffeine at night and no screens before bed can solve the problem."],
  quiz: [
    ["What is the main idea of paragraph 1?", ["Students should study for nine hours.", "Sleep is an essential part of learning.", "The brain collects information during the day.", "Students waste a lot of time."], 1, "The topic sentence states it, and the rest of the paragraph supports it."],
    ["In paragraph 1, *consolidated* most nearly means", ["forgotten", "collected quickly", "made firm and lasting", "studied again"], 2, "The text explains it: *or fixed firmly in long-term memory*."],
    ["In paragraph 2, *irritable* means", ["easily made angry", "very intelligent", "often ill", "unable to remember"], 0, "The text continues: *becoming angry or upset over small things*."],
    ["What is the main idea of paragraph 3?", ["Videos are interesting.", "Screen light is bright.", "Phones are an important reason why young people sleep too little.", "Young people have too many phones."], 2, "This covers both reasons given in the paragraph."],
    ["In the last sentence, *sluggish* is the opposite of", ["slow", "alert", "tired", "simple"], 1, "*More alert ... instead of sluggish and slow* shows the contrast."]
  ]
});

D({ n: 45, t: "Reading 3: reference words, True / False / Not Given", s: "reading", m: 55,
  goal: "Follow words like it, they and this back to what they mean, and decide whether a statement agrees with a text, contradicts it or is not mentioned.",
  bn: "False মানে লেখায় উল্টো কথা বলা আছে। Not Given মানে লেখায় এ বিষয়ে কিছুই বলা নেই। নিজের সাধারণ জ্ঞান দিয়ে উত্তর দেবেন না, শুধু লেখায় যা আছে তা-ই ধরুন।",
  notes: [
    ["Reference words", "Writers avoid repeating nouns. They use *it, they, them, this, that, these, those, one, such, the former, the latter*. To understand a text you must know what each one points to. Usually the answer is in the sentence before. *Rahela bought a second machine. **It** was more expensive than the first **one**.* (it = the second machine; one = machine)"],
    ["True, False or Not Given", "This IELTS question type tests careful reading.", [
      ["Answer", "Meaning"],
      ["True", "The text says the same thing, usually in different words."],
      ["False", "The text says the opposite, or something that cannot both be correct."],
      ["Not Given", "The text does not say. You cannot find the information."]
    ]],
    ["A method", "1. Underline the key words in the statement. 2. Scan the text for that idea (expect synonyms). 3. Read that part slowly. 4. Ask: does the text agree? Disagree? Or is it silent? 5. Watch small words that change everything: *all, most, some, only, always, never, more than*."],
    ["Inference", "Sometimes the answer is not stated directly, but the text makes it certain. *She locked the shop and switched off the lights* tells you that she was leaving. An inference must be supported by the text. A guess from your own knowledge is not an inference."]
  ],
  read: { t: "Rahela's tailoring shop", p: [
    "Rahela Begum started her tailoring business in 2015 with one second-hand sewing machine in a corner of her bedroom. At first, her only customers were neighbours who needed small repairs. She charged very little, but she finished every job on time, and this soon gave her a good reputation in the area.",
    "Two years later she borrowed 40,000 taka from a local women's cooperative and rented a small shop near the market. She bought two new machines and hired two young women from the village. Neither of them had worked before, so Rahela trained them herself for three months. The loan was repaid in eighteen months, six months earlier than required.",
    "The business grew steadily until 2020, when the shop had to close for several weeks. During that period Rahela and her workers began making cloth masks, which a nearby pharmacy agreed to sell. These brought in enough money to pay the rent and the workers' wages.",
    "Today the shop employs seven people and makes school uniforms for three local schools. Rahela's daughter, who is studying business at a college in the district town, manages the accounts at weekends. Rahela says that her next goal is to open a training centre, because she believes that a skill is worth more than a gift of money."
  ] },
  fix: [
    ["Answering False when the text simply does not mention the idea", "If you cannot find the information, the answer is Not Given."],
    ["Answering from general knowledge ('this is usually true in real life')", "Use only what the text says."],
    ["Missing words like only, all and never in the statement", "Underline these words first. They often decide the answer."]
  ],
  yt: ["IELTS reading true false not given explained for beginners", "pronoun reference reading skills English", "making inferences reading comprehension"],
  tasks: [
    "Read the text. Circle every it, she, them, this, these and that, and draw an arrow to the noun each one refers to.",
    "Write three True, three False and three Not Given statements of your own about the text.",
    "Write two things you can infer about Rahela's character, and the sentence that supports each.",
    "Search for one True / False / Not Given practice exercise online and complete it with the five-step method."
  ],
  vocab: [
    ["reputation", "সুনাম", "The shop has a good reputation."],
    ["hire", "নিয়োগ দেওয়া", "She hired two workers."],
    ["loan", "ঋণ", "He took a loan from the bank."],
    ["repay", "পরিশোধ করা", "The loan was repaid early."],
    ["steadily", "ধীরে ধীরে ও নিয়মিতভাবে", "The business grew steadily."],
    ["wage", "মজুরি", "The workers receive their wages weekly."]
  ],
  prod: ["Write 80 words about a small business you know (a shop, a tea stall, a farm). Use at least five reference words (it, they, this, these, one) so that you do not repeat nouns.",
    "Model: There is a small tea stall near my college. It opens at six in the morning and closes late at night. The owner, Mr Hasan, started it ten years ago. He makes several kinds of tea, but the most popular one is ginger tea. Students love it because it is cheap. They often sit there for hours. This sometimes annoys the owner, but he never asks them to leave."],
  quiz: [
    ["In paragraph 1, *this* in 'this soon gave her a good reputation' refers to", ["charging very little", "finishing every job on time", "having one sewing machine", "the neighbours"], 1, "The reputation came from always finishing on time, the idea just before *and this*."],
    ["*Rahela opened her shop near the market in 2017.*", ["True", "False", "Not Given"], 0, "She started in 2015, and *two years later* she rented the shop."],
    ["*The two women Rahela hired were experienced tailors.*", ["True", "False", "Not Given"], 1, "The text says neither of them had worked before."],
    ["*The women's cooperative charged a low rate of interest.*", ["True", "False", "Not Given"], 2, "Interest is never mentioned."],
    ["*The loan was meant to be repaid in two years.*", ["True", "False", "Not Given"], 0, "It was repaid in eighteen months, six months earlier than required: 24 months."],
    ["In paragraph 3, *These* refers to", ["the workers", "several weeks", "cloth masks", "the pharmacy's customers"], 2, "The masks brought in money."]
  ]
});

D({ n: 46, t: "Listening 1: letters, numbers, dates and times", s: "listening", m: 50,
  goal: "Catch spellings, phone numbers, prices, dates and times the first time you hear them.",
  bn: "IELTS Listening এর প্রথম অংশে নাম, ফোন নম্বর, ঠিকানা, তারিখ লিখতে হয় এবং বানান ভুল হলে নম্বর পাওয়া যায় না। thirteen ও thirty, A ও E, G ও J এর পার্থক্য কান দিয়ে চিনতে শিখুন।",
  notes: [
    ["The alphabet", "You must know the English names of the letters instantly. Common confusions: **A** /eɪ/, **E** /iː/, **I** /aɪ/; **G** /dʒiː/ and **J** /dʒeɪ/; **B, D, P, T, V** (all end in /iː/); **M** and **N**; **W** is 'double-u'; **Z** is 'zed' in British English. *Double T* means TT."],
    ["Numbers that sound alike", "Listen to the stress and the ending.", [
      ["-teen: stress on the end", "-ty: stress on the start"],
      ["thirTEEN (13)", "THIRty (30)"],
      ["fourTEEN (14)", "FORty (40)"],
      ["fifTEEN (15)", "FIFty (50)"],
      ["sixTEEN (16)", "SIXty (60)"]
    ]],
    ["Phone numbers, prices and big numbers", "Phone numbers are said digit by digit. 0 is *oh* or *zero*. 77 is *double seven*. 4,500 is *four thousand five hundred*. 250,000 is *two hundred and fifty thousand*. £3.50 is *three pounds fifty*. 2.5 is *two point five*. 1/2 a *half*, 1/4 a *quarter*, 3/4 *three quarters*."],
    ["Dates and times", "Dates use ordinal numbers: *the fifth of May* or *May the fifth*; *the twenty-third of March*. Years: *twenty twenty-five*, *nineteen ninety-nine*. Times: 7.15 is *a quarter past seven*, 7.30 *half past seven*, 7.45 *a quarter to eight*, 7.50 *ten to eight*."]
  ],
  say: ["A, E, I", "G, J", "B, D, P, T, V", "M, N", "thirteen, thirty", "fifteen, fifty", "seventeen, seventy", "oh one seven double one, three five six, four two nine", "four thousand five hundred", "two hundred and fifty thousand", "the twenty-third of March", "a quarter past seven", "a quarter to eight", "half past ten"],
  dict: ["My name is Farhana. That's F, A, R, H, A, N, A.", "Please call me on oh one eight one nine, double five, four three two.", "The flat costs fourteen thousand taka a month.", "Our appointment is on the thirtieth of June at a quarter to three."],
  fix: [
    ["Writing 30 when you hear thirTEEN", "Listen for where the stress falls: thirTEEN = 13, THIRty = 30."],
    ["Writing I when the speaker says E", "E sounds like 'ee'. I sounds like 'eye'. A sounds like 'ay'."],
    ["Writing 8.15 for 'a quarter to eight'", "A quarter to eight = 7.45. 'To' counts back from the next hour."]
  ],
  yt: ["English alphabet pronunciation spelling names listening practice", "numbers listening practice English 13 or 30", "IELTS listening part 1 numbers letters practice"],
  tasks: [
    "Tap each item in 'Listen and repeat'. Say it aloud, then write it down without looking.",
    "Do the dictation: play each sentence up to three times, write it, then reveal the answer and correct every letter and digit.",
    "Ask a friend to spell ten names and read ten phone numbers to you at natural speed. Write them down. Then swap.",
    "Listen to any English video with numbers (a news or weather report) and write down every number you hear."
  ],
  vocab: [
    ["spell", "বানান করা", "Could you spell your surname, please?"],
    ["surname", "পদবি / বংশনাম", "My surname is Rahman."],
    ["postcode", "পোস্টকোড", "What is your postcode?"],
    ["appointment", "সাক্ষাতের নির্ধারিত সময়", "I have an appointment at ten."],
    ["approximately", "আনুমানিক", "It costs approximately 500 taka."],
    ["double", "দ্বিগুণ / দুইবার", "My number ends in double four."]
  ],
  prod: ["Speaking task: record yourself giving these details clearly, as if on the phone. Spell your full name, give your phone number, your date of birth, your address and the time you usually get up.",
    "Model: My name is Tanvir Ahmed. That's T, A, N, V, I, R, and Ahmed is A, H, M, E, D. My number is oh one seven one two, three four five, six seven eight. I was born on the ninth of August, two thousand and four. I live at house fourteen, road seven, Dhanmondi. I usually get up at a quarter past six."],
  quiz: [
    ["Listen. How is the surname spelt?", ["Choudhury", "Chowdhury", "Chowdury", "Chowdhary"], 1, "C, H, O, W, D, H, U, R, Y.", "My surname is Chowdhury. That's C, H, O, W, D, H, U, R, Y."],
    ["Listen. What time does the meeting start?", ["9.15", "8.15", "8.45", "9.45"], 2, "A quarter to nine = 8.45.", "The meeting starts at a quarter to nine."],
    ["Listen. How much is the ticket?", ["15 pounds", "50 pounds", "5 pounds", "55 pounds"], 1, "The speaker says fifty, and adds *not fifteen*.", "The ticket costs fifty pounds. That's five zero, not fifteen."],
    ["Listen. What is the phone number?", ["01711 356 429", "01771 356 429", "01711 365 429", "01711 356 492"], 0, "Oh one seven double one, three five six, four two nine.", "My phone number is oh one seven, double one, three five six, four two nine."],
    ["Listen. When does the course begin?", ["3 March", "13 March", "23 March", "30 March"], 2, "The twenty-third of March.", "The course begins on the twenty-third of March."]
  ]
});

D({ n: 47, t: "Listening 2: gist, detail, signposts and traps", s: "listening", m: 50,
  goal: "Predict what you will hear, follow a speaker's signpost words, and avoid the first answer when the speaker corrects it.",
  bn: "IELTS Listening একবারই শোনানো হয়। তাই শোনার আগে প্রশ্ন পড়ে অনুমান করুন কী ধরনের উত্তর আসবে (সংখ্যা, নাম, জায়গা)। বক্তা প্রায়ই প্রথমে একটি তথ্য দিয়ে পরে সংশোধন করেন; শেষেরটিই সঠিক।",
  notes: [
    ["Before you listen: predict", "Read the question and decide what kind of answer is missing: a number, a day, a place, a name, a noun, a verb. *The class starts on ________* needs a day or date. This prepares your ear. In IELTS you are given time to read the questions first. Use all of it."],
    ["Gist and detail", "**Gist** is the general idea: who is speaking, where, and why. **Detail** is the specific fact you need. First catch the gist (a student is phoning a language school), then listen for the detail (the price of the course)."],
    ["Signpost words", "Speakers tell you where they are going.", [
      ["Function", "Signposts"],
      ["starting", "First of all, To begin with, Let's start with"],
      ["adding", "Also, In addition, Another thing is"],
      ["changing topic", "Now, Moving on to, Let's turn to"],
      ["contrast", "However, But, Although, On the other hand"],
      ["example", "For example, For instance, such as"],
      ["correction", "Actually, Sorry, I mean, In fact, No, wait"],
      ["ending", "Finally, To sum up, In conclusion"]
    ]],
    ["Traps (distractors)", "The speaker gives one answer and then changes it: *The trip is on Monday... oh, sorry, that's been changed to Wednesday.* The answer is Wednesday. Always keep listening after you hear a possible answer. Also expect paraphrase: the question says *cost* and the speaker says *you'll need to pay*."],
    ["Daily listening habit", "Fifteen minutes every day beats two hours once a week. Use the listen, read, listen method: 1. Listen without text. 2. Listen with the transcript or subtitles and check new words. 3. Listen again without text. Then shadow the speaker."]
  ],
  dict: ["First of all, I'd like to thank everyone for coming this evening.", "The museum is open every day except Monday.", "Actually, the price has gone up to twelve pounds.", "In conclusion, regular practice is more useful than long hours."],
  fix: [
    ["Writing the first number or day you hear", "Wait. Speakers often correct themselves with actually, sorry or in fact."],
    ["Stopping to think about a missed answer", "Leave it and move to the next question. The recording does not wait."],
    ["Listening only to songs or films and calling it practice", "Use short clips with a transcript and follow the listen, read, listen method."]
  ],
  yt: ["English listening practice for beginners with subtitles", "IELTS listening tips distractors signpost words", "BBC 6 Minute English listening practice"],
  tasks: [
    "Do the dictation: play each sentence up to three times, write it, then reveal and correct.",
    "Find a short English audio with a transcript (6 Minute English is ideal). Follow the listen, read, listen method for one episode.",
    "From the same audio, write down every signpost word you hear.",
    "Shadow one minute of the audio: pause after each sentence and repeat it with the same speed and melody."
  ],
  vocab: [
    ["gist", "সারমর্ম", "I understood the gist of the talk."],
    ["distract", "মনোযোগ সরিয়ে দেওয়া", "Wrong answers are there to distract you."],
    ["actually", "আসলে", "Actually, the class starts at ten, not nine."],
    ["in fact", "প্রকৃতপক্ষে", "In fact, it is much cheaper."],
    ["transcript", "লিখিত রূপ (অডিওর)", "Read the transcript after listening."],
    ["instead", "পরিবর্তে", "The meeting is on Friday instead."]
  ],
  prod: ["After today's listening practice, write a summary of what you heard in 60 to 80 words: who spoke, about what, and three details you remember.",
    "Model: I listened to a six-minute programme in which two presenters discussed why people forget names. They explained that names have no meaning, so the brain finds it hard to connect them to anything. One presenter said she repeats a new name three times. The other suggested linking the name to a picture. I learnt the phrases 'slip my mind' and 'ring a bell'."],
  quiz: [
    ["Listen. Which day is the trip?", ["Monday", "Tuesday", "Wednesday", "Friday"], 2, "The speaker corrects Monday to Wednesday. The last information is the answer.", "The trip to the museum is on Monday. Oh, sorry, that has been changed. It is now on Wednesday."],
    ["Listen. How much does the course cost now?", ["80 pounds", "90 pounds", "19 pounds", "18 pounds"], 1, "It was eighty, but it has gone up to ninety.", "Last year the course cost eighty pounds. Actually, this year the price has gone up to ninety."],
    ["Listen. What is the gist?", ["A customer is ordering food.", "A student is asking about joining a library.", "A man is booking a hotel room.", "A woman is describing her family."], 2, "He asks for a single room for two nights.", "Good evening. I would like to book a single room for two nights, please. Do you have anything available this weekend?"],
    ["Listen. Where should the visitors meet?", ["at the main gate", "in the car park", "at the ticket office", "in the cafe"], 0, "Not the car park as planned, but the main gate instead.", "We planned to meet in the car park. However, it will be very crowded, so please come to the main gate instead."],
    ["*The lecture begins at ________.* Before listening, what kind of answer should you expect?", ["a person's name", "a time", "a colour", "a price"], 1, "*Begins at* is followed by a time."]
  ]
});

D({ n: 48, t: "Week 8 review and test", s: "review", m: 45, review: true,
  goal: "Check your reading and listening strategies. Score 60% or more to pass.",
  bn: "পড়া ও শোনার দক্ষতা নিয়ম জেনে বাড়ে না, প্রতিদিনের অনুশীলনে বাড়ে। আজ থেকে প্রতিদিন ১৫ মিনিট পড়ুন এবং ১৫ মিনিট শুনুন।",
  tasks: [
    "Read one English article of about 400 words. Skim it in 90 seconds, write the main idea of each paragraph, then guess five unknown words from context.",
    "Listen to one new short audio using the listen, read, listen method.",
    "Set a daily plan for the rest of the programme: 15 minutes of reading and 15 minutes of listening every day. Write the times in your notebook."
  ],
  read: { t: "Notice: evening computer course", p: [
    "The Youth Centre will run a ten-week computer course for beginners starting on 4 May. Classes will be held on Sunday and Wednesday evenings from 6.30 to 8.00. The course is free, but students must pay 200 taka for the course book. There are only twenty places, and they will be given to those who register first. Although the course is designed for beginners, people who already have basic skills may join from week four. To register, visit the office before 28 April."
  ] },
  quiz: [
    ["Scan the notice: how long is each class?", ["one hour", "ninety minutes", "two hours", "ten weeks"], 1, "From 6.30 to 8.00 is ninety minutes."],
    ["*Students do not have to pay anything to take the course.*", ["True", "False", "Not Given"], 1, "The course is free, but they must pay 200 taka for the book."],
    ["*The teacher of the course works at a local college.*", ["True", "False", "Not Given"], 2, "The notice says nothing about the teacher."],
    ["In the notice, *they* in 'they will be given' refers to", ["students", "classes", "the twenty places", "course books"], 2, "The places will be given to those who register first."],
    ["Reading quickly for the general idea is called", ["scanning", "skimming", "inferring", "paraphrasing"], 1, "Skimming = general idea. Scanning = specific information."],
    ["Listen. What is the room number?", ["13", "30", "33", "3"], 0, "Thirteen, one three.", "Your class is in room thirteen. That's one three, on the first floor."],
    ["Listen. What time does the shop close today?", ["5.00", "5.30", "6.00", "6.30"], 1, "Usually six, but today half past five.", "We usually close at six. However, today we are closing early, at half past five."],
    ["Which word signals that the speaker is correcting information?", ["Finally", "For example", "Actually", "In addition"], 2, "*Actually* often introduces a correction."]
  ]
});
D({ n: 49, t: "Punctuation, capital letters and spelling", s: "writing", m: 50,
  goal: "Write clean sentences: capitals in the right places, correct commas and apostrophes, and accurate spelling.",
  bn: "ছোট ভুল (i ছোট হাতের, বাক্যের শেষে দাঁড়ি নেই, বানান ভুল) পরীক্ষকের চোখে খুব খারাপ দেখায়। লেখা শেষ করে সবসময় দুই মিনিট শুধু এই ভুলগুলো খুঁজুন।",
  notes: [
    ["Capital letters", "Use a capital for: the first word of a sentence; the pronoun **I**; names of people and places (*Karim, Dhaka, Bangladesh*); days, months and festivals (*Monday, July, Eid*); languages and nationalities (*English, Bangladeshi*); titles (*Mr, Dr*). Do not use capitals for seasons or ordinary nouns: *summer, university, teacher*."],
    ["Full stops and commas", "End every sentence with a full stop, question mark or exclamation mark. Use a comma: 1. in lists (*rice, fish, vegetables and fruit*); 2. after an opening clause or linking word (*When I arrived, ...; However, ...*); 3. before *and, but, so* joining two full sentences; 4. around extra information (*My brother, who lives in Sylhet, is a doctor*). Never join two sentences with only a comma: *I was tired, I went to bed* is wrong."],
    ["Apostrophes", "For possession: *the boy's book* (one boy), *the boys' school* (many boys), *children's games*. For short forms: *don't, it's, I'm, they're*. Never for plurals: *two mangoes*, not *two mango's*. In formal writing, such as IELTS essays, write the full form: *do not, cannot, it is*."],
    ["Spelling rules", "Learn these four.", [
      ["Rule", "Examples"],
      ["drop final -e before a vowel suffix", "make, making; hope, hoping; use, usable"],
      ["double the final consonant after one short stressed vowel", "run, running; stop, stopped; begin, beginning"],
      ["consonant + y changes to i (but not before -ing)", "happy, happiness; study, studied, studying"],
      ["i before e except after c (for the 'ee' sound)", "believe, achieve; receive, ceiling"]
    ]],
    ["Words that are often misspelt", "*accommodation, address, beautiful, because, beginning, believe, business, definitely, different, environment, government, grammar, immediately, necessary, occasion, opportunity, receive, separate, successful, tomorrow, until, writing.* British and American spellings are both accepted in IELTS (*colour / color, centre / center*), but be consistent."]
  ],
  fix: [
    ["i went to dhaka on friday with my friend rahim.", "I went to Dhaka on Friday with my friend Rahim."],
    ["I like tea, my brother likes coffee.", "I like tea, but my brother likes coffee."],
    ["Its a beautifull enviroment for student's.", "It's a beautiful environment for students."]
  ],
  yt: ["English punctuation rules comma full stop apostrophe lesson", "English spelling rules lesson", "capital letters rules English writing"],
  tasks: [
    "Ask someone to dictate the 22 often-misspelt words to you, or record and play them. Write each wrongly spelt word five times.",
    "Rewrite with correct punctuation and capitals: 'my sister lives in chattogram she works for a bank her office is on station road and she doesnt work on fridays'.",
    "Write six sentences with possessive apostrophes and six with commas after an opening clause.",
    "Proofread everything you wrote last week for capitals, full stops, commas and spelling. Correct it in a different colour."
  ],
  vocab: [
    ["accommodation", "থাকার ব্যবস্থা", "The university provides accommodation."],
    ["environment", "পরিবেশ", "We must protect the environment."],
    ["punctuation", "যতিচিহ্ন", "Check your punctuation before you finish."],
    ["capital letter", "বড় হাতের অক্ষর", "Names begin with a capital letter."],
    ["apostrophe", "ঊর্ধ্বকমা (')", "Use an apostrophe in short forms like don't."],
    ["proofread", "লেখা পড়ে ভুল সংশোধন করা", "Always proofread your essay."]
  ],
  prod: ["Write 100 words about your last weekend. Then proofread it three times: once for capitals and full stops, once for commas and apostrophes, once for spelling.",
    "Model: Last Friday I visited my aunt, who lives in Narayanganj. After the Jumma prayer, we had lunch together. She had cooked rice, fish, vegetables and my favourite dessert. In the afternoon my cousins and I walked along the river. Although the weather was hot, we enjoyed ourselves. My aunt's neighbour, Mr Kabir, showed us his garden. I returned home on Saturday morning because I had an English class. It was a short visit, but I will definitely go again."],
  quiz: [
    ["Which sentence is correctly capitalised?", ["I met dr. Rahman on monday.", "I met Dr Rahman on Monday.", "i met Dr Rahman on Monday.", "I met Dr rahman on monday."], 1, "Capitals for I, titles, names and days."],
    ["Which sentence is correctly punctuated?", ["When I got home I was tired, I slept.", "When I got home, I was tired so, I slept.", "When I got home, I was tired, so I slept.", "When, I got home I was tired so I slept."], 2, "Comma after the opening clause and before *so*."],
    ["*The ___ playground is behind the school.*", ["childrens", "children's", "childrens'", "childs'"], 1, "*Children* is already plural: add 's."],
    ["Which word is spelt correctly?", ["goverment", "enviroment", "necessary", "begining"], 2, "The others are: government, environment, beginning."],
    ["Which is correct?", ["I bought three mango's.", "Its raining again.", "The dog hurt it's leg.", "It's time to go."], 3, "*It's* = it is. Plurals take no apostrophe, and the possessive is *its*."]
  ]
});

D({ n: 50, t: "The paragraph: topic sentence, support, conclusion", s: "writing", m: 55,
  goal: "Write a clear, well-organised paragraph of 80 to 120 words on any familiar topic.",
  bn: "একটি অনুচ্ছেদ = একটি মূল ভাব। প্রথম বাক্যে মূল কথা বলুন, তারপর কারণ ও উদাহরণ দিন, শেষে এক বাক্যে গুটিয়ে আনুন। মুখস্থ করা প্যারাগ্রাফ লিখবেন না; IELTS এ তা ধরা পড়ে।",
  notes: [
    ["One paragraph, one idea", "A paragraph is a group of sentences about one main idea. When you start a new idea, start a new paragraph. In an IELTS essay, each body paragraph develops one point."],
    ["The PEEL structure", "A simple plan that works for almost every paragraph.", [
      ["Step", "What it does", "Example"],
      ["Point", "topic sentence: states the main idea", "Walking is the best exercise for busy people."],
      ["Explain", "says why or how", "It needs no equipment and can be done anywhere."],
      ["Example", "gives a specific case or fact", "For instance, my father walks to his office, which takes thirty minutes."],
      ["Link", "concludes or connects back", "For these reasons, walking fits easily into a busy life."]
    ]],
    ["A good topic sentence", "It has a topic and a controlling idea (your opinion or focus). *Dhaka has many problems* is too general. *Traffic congestion is the most serious problem in Dhaka* is clear and can be supported. Avoid announcements such as *I am going to write about traffic*."],
    ["Unity and development", "**Unity:** every sentence supports the topic sentence. Remove anything off topic. **Development:** do not just list ideas. Explain each one and give an example. Two well-developed ideas are better than five undeveloped ones."]
  ],
  fix: [
    ["A paragraph that is one very long sentence", "Write five to seven sentences, each with a full stop."],
    ["A list of ideas with no explanation: 'Reading gives knowledge. Reading is fun. Reading improves vocabulary.'", "Choose one or two ideas and explain each with a reason and an example."],
    ["Starting with 'In this modern era of science and technology...'", "Start with your own clear topic sentence that answers the question."]
  ],
  yt: ["how to write a paragraph in English topic sentence", "paragraph structure PEEL writing lesson", "paragraph writing English for beginners"],
  tasks: [
    "Write a topic sentence for each of these topics: mobile phones, village life, public transport, learning English, your favourite season.",
    "Choose one of them and plan a paragraph with the PEEL table before you write.",
    "Write the paragraph (100 words). Then check its unity: cross out any sentence that does not support your topic sentence.",
    "Find a paragraph in an English textbook or news article and label its Point, Explanation, Example and Link."
  ],
  vocab: [
    ["for instance", "উদাহরণস্বরূপ", "Some fruits, for instance mangoes, are seasonal."],
    ["main", "প্রধান", "The main reason is cost."],
    ["support", "সমর্থন করা", "Support your idea with an example."],
    ["develop", "বিস্তারিত করা / বিকশিত করা", "Develop each point fully."],
    ["relevant", "প্রাসঙ্গিক", "Make sure every sentence is relevant."],
    ["conclude", "উপসংহার টানা", "Conclude the paragraph with a link sentence."]
  ],
  prod: ["Write a PEEL paragraph of about 100 words on: 'Why should young people read books?'",
    "Model: Young people should read books because reading develops the mind in a way that screens cannot. When we read, we have to imagine the people and places ourselves, which trains concentration and creativity. Reading also builds vocabulary naturally. For instance, a student who reads one English story a week meets hundreds of new words in real sentences, so he or she remembers them without memorising lists. In addition, books allow us to learn from the experiences of others. For these reasons, the reading habit is one of the best gifts a young person can give themselves."],
  quiz: [
    ["What is the job of a topic sentence?", ["to give an example", "to state the main idea of the paragraph", "to end the paragraph", "to ask the reader a question"], 1, "It tells the reader what the paragraph is about."],
    ["Which is the best topic sentence?", ["I am going to write about my village.", "My village.", "My village is an ideal place for a peaceful life.", "There are many villages in Bangladesh and I was born in 2004."], 2, "It has a topic and a clear controlling idea."],
    ["In PEEL, the second E stands for", ["End", "Example", "Essay", "Edit"], 1, "Point, Explain, Example, Link."],
    ["A paragraph about the benefits of walking includes the sentence *My uncle bought a new car last year.* What is the problem?", ["grammar", "spelling", "unity", "length"], 2, "The sentence is off topic, so it breaks the unity of the paragraph."],
    ["When should you start a new paragraph?", ["after every sentence", "when you begin a new main idea", "after every 20 words", "never"], 1, "One paragraph = one main idea."]
  ]
});

D({ n: 51, t: "Linking words and cohesion", s: "writing", m: 50,
  goal: "Connect sentences and ideas smoothly with the right linking word and the right punctuation.",
  bn: "Linking word লেখাকে সাবলীল করে, কিন্তু প্রতি বাক্যে বসালে লেখা কৃত্রিম লাগে। however বাক্যের শুরুতে বসে ও পরে কমা নেয়; but দুটি অংশের মাঝে বসে।",
  notes: [
    ["Linking words by function", "Learn two or three for each purpose.", [
      ["Purpose", "Linking words"],
      ["adding", "and, also, in addition, moreover, furthermore"],
      ["contrast", "but, however, although, on the other hand, whereas, despite"],
      ["reason", "because, since, as, because of, due to"],
      ["result", "so, therefore, as a result, consequently"],
      ["example", "for example, for instance, such as"],
      ["order", "first, secondly, then, next, finally"],
      ["summary", "in conclusion, to sum up, overall"]
    ]],
    ["Three grammar types", "1. **Conjunctions** join two clauses in one sentence: *I stayed at home **because** it was raining.* 2. **Sentence linkers** start a new sentence and take a comma: *It was raining. **Therefore,** I stayed at home.* 3. **Prepositions** take a noun or -ing: ***Because of** the rain, I stayed at home. **Despite** the rain, we went out.*"],
    ["Common confusions", "*because* + clause, but *because of* + noun. *although* + clause, but *despite / in spite of* + noun or -ing. *such as* introduces examples inside a sentence; *For example,* starts a sentence. *On the other hand* shows a contrast; it does not mean *in addition*."],
    ["Other ways to connect", "Good writing does not rely only on linking words. Use pronouns (*this, these, it, they*), synonyms (*the problem ... this issue*) and repeated key words. Do not begin every sentence with a linker. One or two in each paragraph is usually enough."]
  ],
  fix: [
    ["I stayed at home because of it was raining.", "I stayed at home because it was raining."],
    ["Despite he was ill, he went to work.", "Although he was ill, he went to work. / Despite being ill, he went to work."],
    ["Moreover, ... Furthermore, ... In addition, ... Besides, ... (every sentence)", "Use a linking word only when it shows a real connection."]
  ],
  yt: ["linking words in English writing lesson", "however although despite difference English grammar", "IELTS writing cohesion linking words basics"],
  tasks: [
    "Copy the table. Write one sentence of your own with one word from each row.",
    "Join each pair in three ways (conjunction, sentence linker, preposition): 'The roads were flooded. The school was closed.' and 'He is rich. He is unhappy.'",
    "Take yesterday's paragraph and improve its flow: add or change two linking words and replace two repeated nouns with pronouns or synonyms.",
    "Find ten linking words in an English article and label the purpose of each."
  ],
  vocab: [
    ["moreover", "তাছাড়া", "The plan is cheap. Moreover, it is simple."],
    ["consequently", "ফলস্বরূপ", "He did not study. Consequently, he failed."],
    ["due to", "কারণে", "The flight was delayed due to fog."],
    ["in spite of", "সত্ত্বেও", "In spite of the heat, we played."],
    ["on the other hand", "অন্যদিকে", "City life is exciting. On the other hand, it is stressful."],
    ["overall", "সামগ্রিকভাবে", "Overall, the results were positive."]
  ],
  prod: ["Write 120 words on 'The advantages and disadvantages of online classes'. Use at least seven linking words from five different rows of the table.",
    "Model: Online classes have both advantages and disadvantages. First, they save time and money because students do not have to travel. In addition, lessons can be recorded, so learners can watch them again. As a result, students who live far from cities can study with good teachers. On the other hand, online learning has some problems. Many students do not have a fast internet connection or a quiet room. Moreover, it is difficult to concentrate on a screen for hours, and there is less contact with classmates. Despite these difficulties, online classes are a useful addition to traditional teaching. Overall, a mixture of both methods seems to be the best solution."],
  quiz: [
    ["*The match was cancelled ___ the heavy rain.*", ["because", "because of", "although", "so"], 1, "Before a noun phrase: because of."],
    ["*___ she studied hard, she did not pass.*", ["Despite", "However", "Although", "Because of"], 2, "Before a clause, showing contrast: although."],
    ["*He missed the bus. ___ , he was late for work.*", ["Because", "As a result", "Although", "Such as"], 1, "A sentence linker showing result, followed by a comma."],
    ["*I like fruit ___ mangoes and lychees.*", ["for example,", "such as", "so", "therefore"], 1, "*Such as* introduces examples inside a sentence."],
    ["Which sentence is correctly punctuated?", ["The flat is small however, it is cheap.", "The flat is small. However, it is cheap.", "The flat is small, however it is cheap.", "The flat is small however it is cheap."], 1, "*However* starts a new sentence and is followed by a comma."]
  ]
});

D({ n: 52, t: "Describing numbers, changes and trends", s: "writing", m: 55,
  goal: "Describe how numbers go up, go down or stay the same, with the right verbs, adverbs and prepositions.",
  bn: "IELTS Academic Writing Task 1 এ গ্রাফ বা চার্ট বর্ণনা করতে হয়। তার ভিত্তি হলো এই শব্দগুলো: increase, decrease, remain stable, এবং preposition: from...to, by, at।",
  notes: [
    ["Verbs and nouns of change", "Most have both forms.", [
      ["Direction", "Verbs", "Nouns"],
      ["up", "increase, rise, grow, go up, climb", "an increase, a rise, growth"],
      ["down", "decrease, fall, drop, decline, go down", "a decrease, a fall, a drop, a decline"],
      ["no change", "remain stable, stay the same, level off", "stability"],
      ["up and down", "fluctuate", "a fluctuation"],
      ["highest / lowest point", "peak (at), reach a peak / hit a low", "a peak, a low point"]
    ]],
    ["How fast and how much", "Adverbs with verbs, adjectives with nouns. Small: *slightly / slight*. Slow and regular: *gradually / gradual, steadily / steady*. Big: *significantly / significant, considerably / considerable*. Fast and big: *sharply / sharp, dramatically / dramatic, rapidly / rapid*. *Sales **rose sharply**.* = *There was **a sharp rise** in sales.*"],
    ["Prepositions with numbers", "*from* 20 *to* 50 (start and end). *by* 30 (the size of the change). *at* 50 (a fixed point: *remained stable at 50, peaked at 80*). *a rise **of** 30; a rise **in** prices*. *between* 2010 *and* 2020. *in* 2015. *over* the period."],
    ["Approximations and proportions", "*about / around / approximately 50%*, *just over / just under 30*, *nearly / almost half*. *a quarter* (25%), *a third* (33%), *half* (50%), *two thirds* (67%), *three quarters* (75%), *the majority* (most), *a minority* (few). *double* (x2), *triple* (x3), *halve* (divide by 2)."],
    ["Tense", "Use the past simple for finished years (*In 2010, sales **rose***), the present perfect for periods up to now (*Since 2020, prices **have risen***), and *will* or *is expected to* for the future."]
  ],
  fix: [
    ["The price increased to 20 taka from 50 to 70.", "The price increased by 20 taka, from 50 to 70."],
    ["There was a sharply increase in sales.", "There was a sharp increase in sales."],
    ["The number was increased in 2020.", "The number increased in 2020."]
  ],
  yt: ["describing graphs trends vocabulary English lesson", "IELTS writing task 1 vocabulary increase decrease", "prepositions for describing graphs by to from at"],
  tasks: [
    "Copy the table. For each verb of change, write the past simple and past participle (rise, rose, risen; fall, fell, fallen).",
    "Rewrite five times, swapping verb + adverb and adjective + noun: 'Prices rose sharply.' becomes 'There was a sharp rise in prices.'",
    "Describe these figures in six sentences. Price of 1 kg of rice (taka): 2019: 40, 2020: 45, 2021: 60, 2022: 60, 2023: 58, 2024: 70.",
    "Write five sentences about your own life with numbers (study hours, expenses, phone use) and the words from today."
  ],
  vocab: [
    ["rise", "বৃদ্ধি পাওয়া", "Prices rose by 10%."],
    ["drop", "কমে যাওয়া", "Sales dropped in March."],
    ["fluctuate", "ওঠানামা করা", "The price of onions fluctuates."],
    ["peak", "সর্বোচ্চ বিন্দু", "Sales reached a peak in December."],
    ["gradually", "ধীরে ধীরে", "The number gradually increased."],
    ["proportion", "অনুপাত / অংশ", "A large proportion of students passed."]
  ],
  prod: ["Describe these figures in about 90 words. Students enrolled at an English centre: 2020: 100, 2021: 150, 2022: 150, 2023: 120, 2024: 240.",
    "Model: The figures show how many students enrolled at an English centre between 2020 and 2024. In 2020 there were 100 students. The number rose significantly to 150 in 2021, an increase of 50, and then remained stable at that level in 2022. In 2023 there was a slight fall of 30 students, to 120. However, enrolment then doubled, reaching a peak of 240 in 2024. Overall, despite one small decline, the number of students more than doubled over the period."],
  quiz: [
    ["*The population rose ___ 10 million ___ 12 million.*", ["from / to", "by / at", "at / to", "in / of"], 0, "Start and end points: from ... to."],
    ["*There was a ___ increase in prices.*", ["sharply", "sharp", "sharpen", "sharpness"], 1, "An adjective is needed before the noun *increase*."],
    ["Which verb means *go up and down*?", ["decline", "peak", "fluctuate", "level off"], 2, "*Fluctuate* = change repeatedly."],
    ["*Sales fell ___ 20%, from 100 to 80.*", ["at", "by", "of", "to"], 1, "*By* shows the size of the change."],
    ["75% is the same as", ["a quarter", "two thirds", "three quarters", "a third"], 2, "Three quarters = 75%."]
  ]
});

D({ n: 53, t: "Giving opinions, and formal or informal style", s: "writing", m: 55,
  goal: "State an opinion, support it with a reason and an example, and choose the right level of formality for an essay, an email or a message.",
  bn: "মতামত দিলে সবসময় কারণ ও উদাহরণ দিন। আর মনে রাখুন বন্ধুকে লেখা আর পরীক্ষার essay এর ভাষা এক নয়: essay তে don't, kids, a lot of, gonna চলে না।",
  notes: [
    ["Opinion + reason + example", "An opinion alone is weak. Always add *why* and a specific case. *I believe that children should learn to cook* (opinion) *because it makes them independent* (reason). *For example, a student who can cook saves money when living away from home* (example)."],
    ["Language for opinions", "Giving: *I think / I believe / In my opinion / In my view / It seems to me that*. Agreeing: *I agree that / I completely agree with*. Disagreeing politely: *I am not sure I agree / I see your point, but / I disagree because*. Other people's views: *Some people think that ..., while others believe that ...; It is often said that ...*. Note: *In my opinion, the plan is good*, not *In my opinion, I think*."],
    ["Formal and informal", "Choose the style to match the reader.", [
      ["Informal (friends, messages)", "Formal (essays, official letters)"],
      ["don't, can't, it's", "do not, cannot, it is"],
      ["kids, guys, stuff", "children, people, things / items"],
      ["a lot of, lots of", "many, much, a great deal of"],
      ["get, buy, ask for", "obtain / receive, purchase, request"],
      ["But, And, So (at the start)", "However, In addition, Therefore"],
      ["I want, Can you...?", "I would like, Could you / I would be grateful if you could"],
      ["Hi Rafi, ... See you!", "Dear Mr Khan, ... Yours sincerely,"]
    ]],
    ["Letters and emails", "Formal: *Dear Sir or Madam,* ... *Yours faithfully,* (name unknown) or *Dear Ms Rahman,* ... *Yours sincerely,* (name known). Open with your purpose: *I am writing to enquire about / complain about / apply for ...*. Close with *I look forward to hearing from you.* Informal: *Hi / Dear Rafi,* ... *Best wishes / Take care.*"]
  ],
  fix: [
    ["In my opinion, I think that it is a good idea.", "In my opinion, it is a good idea."],
    ["According to me, education is important.", "In my view, education is important."],
    ["I wanna ask u about the course fees. (to a college office)", "I am writing to enquire about the course fees."]
  ],
  yt: ["how to give your opinion in English agree disagree", "formal and informal English writing difference", "how to write a formal email in English"],
  tasks: [
    "Give your opinion on five statements in three sentences each (opinion, reason, example): Homework should be banned. Everyone should learn to swim. Social media does more harm than good. Villages are better than cities. Students should have part-time jobs.",
    "Rewrite formally: 'Hi, I wanna know about your courses. How much do I gotta pay? Can u send me the details? Thanks.'",
    "Write a formal email (100 words) to a language centre asking about course dates, fees and class sizes.",
    "Write an informal message (60 words) to a friend about the same course, inviting him or her to join."
  ],
  vocab: [
    ["in my view", "আমার মতে", "In my view, the rule is fair."],
    ["enquire", "জানতে চাওয়া", "I am writing to enquire about admission."],
    ["grateful", "কৃতজ্ঞ", "I would be grateful for your help."],
    ["complain", "অভিযোগ করা", "I wish to complain about the service."],
    ["argue", "যুক্তি দেওয়া", "Some people argue that exams are unnecessary."],
    ["convenient", "সুবিধাজনক", "Please suggest a convenient time."]
  ],
  prod: ["Write an opinion paragraph of 120 words in formal style: 'Should mobile phones be allowed in classrooms?' Give a clear opinion, two reasons and one example.",
    "Model: In my view, mobile phones should not be allowed in classrooms, except when a teacher asks students to use them for a task. The main reason is that phones distract learners. Messages and games are far more attractive than a lesson, so even hard-working students find it difficult to concentrate. For example, in my own college, many students check social media under their desks and miss important explanations. Furthermore, phones make cheating easier during tests. Some people argue that phones are useful for finding information; however, this can be done in a computer room under supervision. Therefore, I believe that classrooms should remain phone-free."],
  quiz: [
    ["Which sentence gives an opinion with a reason?", ["Dhaka is the capital of Bangladesh.", "I believe public transport should be cheaper because it would reduce traffic.", "Many people use buses.", "Buses are a kind of transport."], 1, "It has an opinion phrase and *because* + reason."],
    ["Which is the most formal?", ["I wanna know the price.", "Tell me the price.", "Could you please inform me of the price?", "What's the price, mate?"], 2, "*Could you please* and *inform* are formal."],
    ["You begin a letter with *Dear Sir or Madam*. How do you end it?", ["Yours faithfully,", "Yours sincerely,", "Love,", "See you,"], 0, "Name unknown: Yours faithfully."],
    ["Which is suitable in an IELTS essay?", ["Kids don't like homework.", "Children do not enjoy homework.", "Kids hate homework lol.", "Children ain't into homework."], 1, "No contractions or slang in formal writing."],
    ["Which sentence is correct?", ["In my opinion, I think it is wrong.", "According to me, it is wrong.", "In my opinion, it is wrong.", "As my opinion, it is wrong."], 2, "*In my opinion* already means *I think*."]
  ]
});

D({ n: 54, t: "Week 9 review and test", s: "review", m: 45, review: true,
  goal: "Check punctuation, paragraphs, linking, describing data and style. Score 60% or more to pass.",
  bn: "লেখা শেখার একমাত্র উপায় লেখা। এখন থেকে প্রতিদিন একটি ১০০ শব্দের অনুচ্ছেদ লিখুন এবং নিজে সংশোধন করুন।",
  tasks: [
    "Choose your best paragraph from this week and rewrite it, improving the topic sentence, linking and vocabulary.",
    "Make a personal proofreading checklist of your eight most common mistakes. Use it every time you write.",
    "Write a 150-word opinion paragraph: 'Is it better to study alone or in a group?' Plan with PEEL first, then proofread."
  ],
  quiz: [
    ["Which sentence is correct?", ["my brother lives in khulna.", "My brother lives in Khulna.", "My Brother lives in khulna.", "My brother Lives in Khulna."], 1, "Capital for the first word and the place name."],
    ["A topic sentence should", ["give a detailed example", "state the main idea of the paragraph", "repeat the question word for word", "be the last sentence"], 1, "It states the main idea."],
    ["*___ the traffic, we arrived on time.*", ["Although", "Despite", "Because", "However"], 1, "Before a noun: despite."],
    ["*The number of visitors ___ from 500 to 200.*", ["rose", "peaked", "fell", "doubled"], 2, "From 500 to 200 is a fall."],
    ["*There was a ___ in unemployment.*", ["gradually rise", "gradual rise", "gradual rose", "gradually risen"], 1, "Adjective + noun: a gradual rise."],
    ["Which is the most formal?", ["Thanks a lot for your help.", "Cheers for helping.", "I would like to thank you for your assistance.", "Thx for the help!"], 2, "*I would like to* and *assistance* are formal."],
    ["Which sentence is correctly punctuated?", ["Although it was late we continued.", "Although it was late, we continued.", "Although, it was late we continued.", "Although it was late. We continued."], 1, "Comma after the opening clause."],
    ["Which word is spelt correctly?", ["accomodation", "definately", "separate", "recieve"], 2, "The others: accommodation, definitely, receive."]
  ]
});
D({ n: 55, t: "Speaking 1: everyday questions and longer answers", s: "speaking", m: 50,
  goal: "Answer personal questions in two to four sentences, without one-word answers and without memorised speeches.",
  bn: "প্রশ্নের উত্তরে শুধু Yes/No বলবেন না। উত্তর + কারণ + উদাহরণ, এই তিন ধাপে বলুন। ভুল হলে থামবেন না; সাবলীলভাবে বলে যাওয়াই বেশি জরুরি। মুখস্থ উত্তর পরীক্ষক সহজেই ধরে ফেলেন।",
  notes: [
    ["The A.R.E. method", "**A**nswer the question directly. Give a **R**eason. Add an **E**xample or detail. *Do you like cooking?* *Yes, I do, quite a lot* (answer). *I find it relaxing after a long day* (reason). *For example, last Friday I made biryani for my whole family* (example). That is ten seconds of fluent, natural English."],
    ["Useful openers and fillers", "Use these instead of silence or *umm*. Thinking time: *Well, ... / Let me think. / That's an interesting question.* Adding: *Actually, ... / To be honest, ... / As well as that, ...* Explaining: *I mean, ... / What I mean is ... / The thing is, ...* Do not overuse them, and never use the Bangla *mane* or *ei je*."],
    ["When you do not understand", "It is perfectly acceptable to ask. *Sorry, could you repeat the question, please? / Could you say that again? / Sorry, what does ... mean?* If you do not know a word, describe it: *It's a kind of ... / It's the thing you use to ...*"],
    ["Typical everyday topics", "Prepare ideas (not scripts) for these.", [
      ["Topic", "Sample questions"],
      ["Home", "Where do you live? What do you like about your area?"],
      ["Work or study", "What do you study? Why did you choose it?"],
      ["Free time", "What do you do at weekends? Do you prefer indoor or outdoor activities?"],
      ["Food", "What is your favourite meal? Who cooks in your family?"],
      ["Daily routine", "What is the busiest part of your day?"],
      ["Family and friends", "How often do you see your friends?"]
    ]],
    ["Fluency before perfection", "Keep talking at a steady speed. If you make a mistake, correct it quickly and continue: *He go... he goes to work by bus.* Long silences and restarting sentences hurt more than a small grammar error."]
  ],
  fix: [
    ["Q: Do you like music? A: Yes.", "Yes, I do. I listen to it every evening because it helps me relax. I especially like old Bangla songs."],
    ["Myself Rakib. I am coming from Bogura.", "My name is Rakib. I come from Bogura. / I'm from Bogura."],
    ["I am doing my honours in a college.", "I am studying for a bachelor's degree at a college."]
  ],
  yt: ["how to answer IELTS speaking part 1 questions beginners", "how to speak English fluently extend your answers", "English speaking practice introduce yourself"],
  tasks: [
    "Write short notes (key words only, not sentences) for two questions from each topic in the table.",
    "Answer all twelve questions aloud with the A.R.E. method. Record yourself. Each answer should last 10 to 20 seconds.",
    "Listen to the recording. Count your one-word answers, long pauses and Bangla fillers. Record again and reduce each number.",
    "Talk to yourself in English for five minutes while you do something at home: say what you are doing and why."
  ],
  vocab: [
    ["to be honest", "সত্যি বলতে", "To be honest, I don't enjoy cooking."],
    ["basically", "মূলত", "Basically, I study in the morning and work in the evening."],
    ["especially", "বিশেষ করে", "I like fruit, especially mangoes."],
    ["spare time", "অবসর সময়", "I read in my spare time."],
    ["keen on", "আগ্রহী", "I am keen on photography."],
    ["once in a while", "মাঝে মাঝে", "I eat out once in a while."]
  ],
  prod: ["Speaking task: record a one-minute introduction of yourself without reading. Include your name, home town, studies or work, family, and what you do in your free time. Then answer: 'What do you like about your home town?'",
    "Model: My name is Sumaiya Islam, and I'm from Mymensingh, a town north of Dhaka. I've just finished my HSC, and I'm planning to study pharmacy. There are five people in my family: my parents, my two brothers and me. In my spare time I enjoy reading and gardening. What I like most about my home town is the river. In the evenings, lots of people walk along the bank, and the air is much fresher than in Dhaka."],
  quiz: [
    ["Which is the best answer to *Do you like reading?*", ["Yes.", "Yes, I like.", "Yes, I do. I usually read before bed because it helps me relax. At the moment I'm reading a detective novel.", "Reading is a good habit. Books are our best friends. Everyone should read books."], 2, "It answers directly, gives a reason and adds a detail. The last option sounds memorised."],
    ["You did not hear the question clearly. What should you say?", ["What?", "Repeat.", "Sorry, could you repeat the question, please?", "Say nothing and guess."], 2, "A polite request to repeat is completely acceptable."],
    ["Which introduction is correct?", ["Myself Tania.", "My name is Tania.", "I am called by Tania.", "Me Tania."], 1, "*Myself* is not used to introduce yourself."],
    ["You make a small grammar mistake while speaking. What is the best thing to do?", ["Stop and apologise.", "Start the whole answer again.", "Correct it quickly and carry on.", "Switch to Bangla."], 2, "Self-correct briefly and keep your fluency."],
    ["Which phrase gives you a moment to think?", ["Let me think.", "I don't know.", "No idea.", "Next question, please."], 0, "A natural filler that keeps you speaking English."]
  ]
});

D({ n: 56, t: "Speaking 2: describing people, places and experiences", s: "speaking", m: 55,
  goal: "Speak for one to two minutes on a topic using one minute of notes and a simple four-part structure.",
  bn: "IELTS Speaking Part 2 এ একটি বিষয়ে এক থেকে দুই মিনিট একটানা বলতে হয়। এক মিনিট প্রস্তুতির সময়ে পুরো বাক্য নয়, শুধু key word লিখুন এবং চার ধাপে সাজান।",
  notes: [
    ["The long turn", "You receive a card with a topic and three or four points, for example: *Describe a person who has helped you. You should say: who the person is, how you know them, how they helped you, and explain how you felt.* You have one minute to prepare and then speak for up to two minutes."],
    ["Notes in one minute", "Write key words only, in four groups. Do not write sentences.", [
      ["Part", "Content", "Notes for 'a person who helped me'"],
      ["1. Introduce", "who or what, when, where", "Mr Karim, English teacher, class 9"],
      ["2. Describe", "facts and details", "strict, kind eyes, 20 years teaching"],
      ["3. Tell a story", "one specific event", "failed test, gave storybook, 1 page a day"],
      ["4. Feelings", "why it matters to you", "grateful, confidence, still visit"]
    ]],
    ["Language for describing", "People: *He's in his fifties. She's quite tall, with short hair. He's patient / generous / hard-working / easy-going.* Places: *It's located in ... / It's famous for ... / It's surrounded by ... / The best thing about it is ...* Experiences: *It happened about two years ago. / At first ... / After a while ... / In the end ... / I'll never forget it because ...*"],
    ["Use a range of tenses", "A good long turn moves between tenses naturally: present for facts (*He **teaches** at ...*), past for the story (*He **gave** me ...*), present perfect for results (*I **have loved** reading ever since*), and future or conditional to finish (*I **would like** to thank him one day*)."],
    ["If you run out of things to say", "Add a comparison (*He was different from other teachers because ...*), a contrast (*Although he was strict, ...*), or a wider comment (*I think every student needs a teacher like that*)."]
  ],
  fix: [
    ["Writing full sentences in the preparation minute", "Write 10 to 15 key words in four groups."],
    ["Describing only general facts: 'He is good. He is kind. He is helpful.'", "Tell one specific story that shows the quality."],
    ["Stopping after 30 seconds", "Use the four parts, and add a comparison or a wider comment."]
  ],
  yt: ["IELTS speaking part 2 cue card tips for beginners", "how to describe a person in English speaking", "how to describe a place in English"],
  tasks: [
    "Make one-minute notes for three topics: a person who has helped you, a place you would like to visit again, an important event in your life.",
    "Speak for 90 seconds on each topic with a timer. Record all three.",
    "Listen back. Did you cover all four parts? Did you use past tenses for the story? Note three things to improve.",
    "Record your weakest topic again."
  ],
  vocab: [
    ["generous", "উদার", "She is generous with her time."],
    ["patient", "ধৈর্যশীল", "A good teacher is patient."],
    ["memorable", "স্মরণীয়", "It was a memorable trip."],
    ["located", "অবস্থিত", "The town is located near the border."],
    ["surrounded by", "বেষ্টিত", "The village is surrounded by hills."],
    ["unforgettable", "অবিস্মরণীয়", "It was an unforgettable day."]
  ],
  prod: ["Speaking task: 'Describe a place you have visited that you would like to visit again. Say where it is, when you went, what you did there, and explain why you want to go back.' Prepare for one minute, speak for 90 seconds and record it.",
    "Model: I'd like to talk about Sajek Valley, which is located in the hills of Rangamati. I went there two years ago with three friends during the winter holiday. The journey itself was exciting, because the road climbs through green hills. We stayed in a small wooden cottage. Early in the morning we got up to watch the sunrise, and the whole valley was covered in clouds below us. It looked like a white sea. During the day we walked to a nearby village and tried the local food. I'd love to go back because it was the most peaceful place I've ever seen. Life in Dhaka is noisy and stressful, whereas there I could hear only birds. Next time I would stay longer."],
  quiz: [
    ["How long should you speak in an IELTS long turn?", ["10 to 20 seconds", "one to two minutes", "five minutes", "as briefly as possible"], 1, "You speak for one to two minutes after one minute of preparation."],
    ["What should you write in the preparation minute?", ["full sentences", "nothing", "key words in a clear order", "a Bangla translation"], 2, "Key words let you speak naturally and keep you organised."],
    ["Which sentence best describes a person's character?", ["He is 50 years old.", "He lives in Cumilla.", "He is very patient and never loses his temper.", "He has a car."], 2, "*Patient* describes character. The others are facts."],
    ["Which tense do you mainly need to tell the story of a past event?", ["present simple", "past simple", "future with will", "present continuous"], 1, "Finished events are told in the past simple."],
    ["You have covered all the points but there are 40 seconds left. What can you do?", ["Stay silent.", "Say 'That's all' and stop.", "Add a comparison or explain why it matters to you.", "Repeat the same sentences."], 2, "Extend with a comparison, contrast or wider comment."]
  ]
});

D({ n: 57, t: "Speaking 3: discussing ideas and giving opinions", s: "speaking", m: 50,
  goal: "Discuss general topics: give and justify opinions, compare, speculate and see both sides.",
  bn: "IELTS Speaking Part 3 এ ব্যক্তিগত নয়, সাধারণ ও বিমূর্ত প্রশ্ন আসে (যেমন: সমাজে প্রযুক্তির প্রভাব কী?)। এখানে মতামত + কারণ + উদাহরণ, এবং প্রয়োজন হলে উল্টো দিকটাও বলুন।",
  notes: [
    ["From personal to general", "Everyday questions ask about you: *Do you use social media?* Discussion questions ask about society: *How has social media changed the way people communicate?* Talk about *people, young people, most families, society*, not only about yourself."],
    ["A structure for discussion answers", "1. Opinion: *I think, on the whole, that ...* 2. Reason: *The main reason is that ...* 3. Example: *For instance, in Bangladesh ...* 4. Other side or result: *Having said that, ... / So overall ...* Aim for four to six sentences."],
    ["Functional language", "Learn two phrases for each function.", [
      ["Function", "Phrases"],
      ["giving an opinion", "As far as I'm concerned, ... / I'd say that ..."],
      ["comparing", "Compared with the past, ... / ... is far more common than ..."],
      ["speculating", "It might be because ... / Perhaps in the future ... / I imagine that ..."],
      ["both sides", "On the one hand, ... On the other hand, ... / It depends on ..."],
      ["partly agreeing", "That's true to some extent, but ... / I agree up to a point."],
      ["clarifying", "What I mean is ... / In other words, ..."],
      ["buying time", "That's a difficult question. Let me think. / I've never really thought about it, but ..."]
    ]],
    ["Use your grammar", "Discussion questions are where you show range. Comparatives (*more convenient than*), conditionals (*If the government invested more, ...*), modals (*might, could, should*), passives (*Children are influenced by ...*) and the present perfect (*Life has changed a lot*)."]
  ],
  fix: [
    ["I think technology is good. It is very good for us.", "I think technology has improved our lives because it saves time. For instance, we can pay bills by phone instead of queuing for hours."],
    ["Answering only about yourself: 'I use Facebook every day.'", "Talk about people in general: 'Most young people in Bangladesh now communicate mainly through social media.'"],
    ["I am agree with this to some extent.", "I agree with this to some extent."]
  ],
  yt: ["IELTS speaking part 3 tips how to answer for beginners", "expressing opinions agreeing disagreeing in English", "English discussion phrases speculating comparing"],
  tasks: [
    "Copy the phrase table and say each phrase aloud five times until it feels natural.",
    "Answer aloud with the four-step structure and record yourself: (1) Why do many people prefer to live in cities? (2) How has technology changed education? (3) Should children help with housework? (4) Will people read fewer books in the future? (5) Is it better to work for a company or to have your own business?",
    "Listen back and check that each answer has an opinion, a reason, an example and one phrase from the table.",
    "Ask a friend to disagree with you on one question and discuss it in English for five minutes."
  ],
  vocab: [
    ["on the whole", "সামগ্রিকভাবে", "On the whole, I agree."],
    ["to some extent", "কিছুটা পর্যন্ত", "That is true to some extent."],
    ["it depends on", "নির্ভর করে", "It depends on the person."],
    ["generation", "প্রজন্ম", "The younger generation uses technology more."],
    ["influence", "প্রভাব", "Parents have a strong influence on children."],
    ["compared with", "তুলনায়", "Compared with the past, life is faster."]
  ],
  prod: ["Speaking task: record 45-second answers to these two questions. 'Do you think children spend too much time on screens?' and 'How might education change in the next twenty years?'",
    "Model 1: I'd say that many children do spend too much time on screens. The main reason is that phones are always available, and parents are often too busy to set limits. For instance, my young cousin watches videos for four or five hours a day. Having said that, screens are not all bad; children can learn a lot from educational programmes. So it depends on what they watch and for how long. Model 2: I imagine that education will become far more flexible. Students might attend some classes online and others in person. Perhaps examinations will test practical skills more than memory. However, I think teachers will still be essential, because children need guidance."],
  quiz: [
    ["Which question is a discussion (Part 3 style) question?", ["What is your name?", "Do you like tea?", "Why do some people prefer to work from home?", "Where do you live?"], 2, "It asks about people in general and needs reasons."],
    ["Which phrase shows partial agreement?", ["I totally disagree.", "That's true to some extent, but...", "Definitely not.", "I have no idea."], 1, "*To some extent* = partly."],
    ["Which phrase is used to speculate about the future?", ["I'm sure it was...", "Perhaps in the future...", "As I said before...", "In other words..."], 1, "*Perhaps* shows possibility."],
    ["Which sentence is correct?", ["I am agree with you.", "I agree with you.", "I am agreeing to you.", "I agree to your opinion with."], 1, "*Agree* is a verb. Do not add *am*."],
    ["Which answer is best for *Is public transport better than private cars?*", ["Yes.", "I have a motorbike.", "On the whole, I'd say public transport is better for cities because it reduces traffic and pollution, although it is often less comfortable.", "Public transport is transport for the public."], 2, "It gives an opinion, reasons and the other side."]
  ]
});

D({ n: 58, t: "The 40 most common mistakes of Bangla speakers", s: "grammar", m: 55,
  goal: "Remove the typical errors that come from translating Bangla directly into English.",
  bn: "এই ভুলগুলো প্রায় সব বাংলাভাষী শিক্ষার্থী করেন, কারণ আমরা বাংলায় ভেবে ইংরেজিতে অনুবাদ করি। তালিকাটি বারবার পড়ুন, যতক্ষণ না সঠিক রূপটি নিজে থেকেই মুখে আসে।",
  notes: [
    ["Verbs and tenses", "Say the correct form aloud three times.", [
      ["Not this", "Say this"],
      ["I am agree. / I am not agree.", "I agree. / I don't agree."],
      ["I am having a brother.", "I have a brother."],
      ["I didn't went.", "I didn't go."],
      ["I am living here since 2015.", "I have lived here since 2015."],
      ["I have seen him yesterday.", "I saw him yesterday."],
      ["He go to office.", "He goes to the office."],
      ["If it will rain, I will stay.", "If it rains, I will stay."],
      ["I am used to get up early. (past habit)", "I used to get up early."],
      ["She can to cook.", "She can cook."],
      ["I look forward to see you.", "I look forward to seeing you."]
    ]],
    ["Nouns, articles and prepositions", "Check each one.", [
      ["Not this", "Say this"],
      ["many informations / advices / furnitures", "a lot of information / advice / furniture"],
      ["I am student.", "I am a student."],
      ["I have a good news.", "I have good news."],
      ["discuss about / mention about", "discuss / mention"],
      ["married with / angry on", "married to / angry with"],
      ["go to home / come to here", "go home / come here"],
      ["in Monday / at next week", "on Monday / next week"],
      ["reach to Dhaka", "reach Dhaka"],
      ["one of my friend", "one of my friends"],
      ["peoples / childrens", "people / children"]
    ]],
    ["Word choice (Banglish)", "These come from direct translation.", [
      ["Not this", "Say this"],
      ["Myself Rahim.", "My name is Rahim. / I'm Rahim."],
      ["I gave an exam.", "I took an exam."],
      ["I passed my HSC from Dhaka College.", "I passed my HSC at Dhaka College."],
      ["My cousin brother / cousin sister", "my cousin"],
      ["I am eating medicine / drinking cigarette", "I am taking medicine / smoking"],
      ["Open / close the light", "Turn on / turn off the light"],
      ["He is my batchmate.", "He was in my year / my classmate."],
      ["What is your good name?", "What is your name?"],
      ["I am coming from Bogura. (origin)", "I come from Bogura."],
      ["Please do the needful.", "Please do what is necessary. / Please arrange it."]
    ]],
    ["Sentences and questions", "The last ten.", [
      ["Not this", "Say this"],
      ["Where you are going?", "Where are you going?"],
      ["You are a student, isn't it?", "You are a student, aren't you?"],
      ["Although..., but...", "Although..., (no but)"],
      ["He told that he was busy.", "He said that he was busy. / He told me that he was busy."],
      ["I very like it.", "I like it very much. / I really like it."],
      ["I am boring.", "I am bored."],
      ["It is too good.", "It is very good."],
      ["more better / most easiest", "better / easiest"],
      ["I have no any idea.", "I have no idea. / I don't have any idea."],
      ["The accident was happened.", "The accident happened."]
    ]]
  ],
  fix: [
    ["Translating a Bangla sentence word by word", "Think of the English pattern first: subject + verb + object."],
    ["Using big memorised phrases to sound advanced", "Use simple, correct English. Accuracy scores higher than decoration."],
    ["Correcting a mistake once and forgetting it", "Keep an error list and review it every week."]
  ],
  yt: ["common English mistakes made by Bengali speakers", "common mistakes in English speaking and how to fix them", "common grammar mistakes English learners"],
  tasks: [
    "Read the four tables aloud. Cover the right-hand column and correct each wrong sentence from memory.",
    "Tick the mistakes that you personally make. Write each correct form in three new sentences of your own.",
    "Go through all your written work from this programme and find these errors. Correct them.",
    "Record yourself speaking for two minutes about your week. Listen and check for the mistakes on this list."
  ],
  vocab: [
    ["mother tongue", "মাতৃভাষা", "Bangla is my mother tongue."],
    ["translate", "অনুবাদ করা", "Do not translate word by word."],
    ["typical", "সাধারণ / বৈশিষ্ট্যসূচক", "This is a typical mistake."],
    ["correct", "সংশোধন করা", "Correct your own errors."],
    ["literally", "আক্ষরিকভাবে", "You cannot translate this phrase literally."],
    ["aware", "সচেতন", "Be aware of your weak points."]
  ],
  prod: ["Each sentence has one mistake. Rewrite all ten correctly. (1) Myself Arif. (2) I am agree with you. (3) I gave my exam last month. (4) She is married with a banker. (5) We discussed about the plan. (6) I have a good news for you. (7) Where you are going? (8) I didn't saw him. (9) He told that he was tired. (10) One of my friend lives in Sylhet.",
    "Answers: (1) My name is Arif. (2) I agree with you. (3) I took my exam last month. (4) She is married to a banker. (5) We discussed the plan. (6) I have good news for you. (7) Where are you going? (8) I didn't see him. (9) He said that he was tired. (10) One of my friends lives in Sylhet."],
  quiz: [
    ["Which sentence is correct?", ["I have a good news.", "I have good news.", "I have a good newses.", "I have good a news."], 1, "*News* is uncountable: no *a*."],
    ["Which sentence is correct?", ["She is married with a doctor.", "She is married by a doctor.", "She is married to a doctor.", "She married with a doctor."], 2, "Married to."],
    ["Which is correct?", ["You are coming, isn't it?", "You are coming, aren't you?", "You are coming, no?", "You are coming, is it?"], 1, "The question tag matches the verb and subject."],
    ["Which is correct?", ["I took my SSC exam in 2021.", "I gave my SSC exam in 2021.", "I given my SSC exam in 2021.", "I have gave my SSC exam in 2021."], 0, "Students *take* exams. Teachers *give* them."],
    ["Which is correct?", ["Please open the fan.", "Please turn on the fan.", "Please start the fan on.", "Please on the fan."], 1, "Machines and lights are turned on and off."],
    ["Which is correct?", ["The film was too good. I loved it.", "The film was very good. I loved it.", "The film was too much good.", "The film was very much good."], 1, "*Too* means more than is wanted. Use *very* for praise."]
  ]
});

D({ n: 59, t: "IELTS: the test, the bands and your next steps", s: "ielts", m: 50,
  goal: "Understand exactly how IELTS works and how to move from this programme into real test preparation.",
  bn: "এখন আপনার ভিত্তি তৈরি। IELTS প্রস্তুতি মানে নতুন করে ইংরেজি শেখা নয়, বরং পরীক্ষার প্রশ্নের ধরন ও সময় ব্যবস্থাপনা শেখা। ফি ও তারিখের সর্বশেষ তথ্য সবসময় অফিসিয়াল ওয়েবসাইট থেকে দেখে নিন।",
  notes: [
    ["Two versions", "**Academic** is for university study and professional registration. **General Training** is for migration, work and secondary education. Listening and Speaking are the same in both. Reading and Writing are different. Ask the organisation you are applying to which one it needs."],
    ["The four tests", "Total test time is about 2 hours 45 minutes.", [
      ["Test", "Time", "Content"],
      ["Listening", "about 30 minutes", "4 parts, 40 questions. You hear each recording once."],
      ["Reading", "60 minutes", "3 sections, 40 questions. Academic: three long texts. General Training: everyday and work texts, then one longer text."],
      ["Writing", "60 minutes", "Task 1: at least 150 words (Academic: describe a chart, graph or diagram; General Training: a letter). Task 2: an essay of at least 250 words. Task 2 carries more marks."],
      ["Speaking", "11 to 14 minutes", "A face-to-face interview in 3 parts: everyday questions, a long turn of 1 to 2 minutes, and a discussion."]
    ]],
    ["Band scores", "Each test is scored from band 0 to 9, and half bands (6.5) are possible. Your overall band is the average of the four. There is no pass or fail; each university or country sets its own requirement, often between 6.0 and 7.0. Writing and Speaking are each marked on four criteria. For Speaking: fluency and coherence, vocabulary, grammar range and accuracy, pronunciation. For Writing: answering the task, organisation, vocabulary, grammar range and accuracy."],
    ["How this programme maps onto IELTS", "Everything you practised feeds a part of the test.", [
      ["You learnt", "You will use it in"],
      ["tenses, agreement, articles, complex sentences", "grammar scores in Writing and Speaking"],
      ["paraphrasing and synonyms", "every Reading and Listening question, and Writing introductions"],
      ["skimming, scanning, True / False / Not Given", "Reading"],
      ["numbers, spelling, signposts, traps", "Listening"],
      ["paragraphs, linking, opinions", "Writing Task 2"],
      ["describing trends and comparing", "Academic Writing Task 1"],
      ["longer answers, long turn, discussion", "Speaking Parts 1, 2 and 3"]
    ]],
    ["Your next steps", "1. Take one full practice test from an official source to find your starting band. 2. Learn the question types for each test one by one. 3. Practise under time limits. 4. Get feedback on Writing and Speaking from a teacher, because you cannot mark these yourself. 5. Keep reading and listening to English for 30 minutes every day. Check the official IELTS websites for current fees, test dates and test centres in Bangladesh."]
  ],
  fix: [
    ["Memorising essays and speaking answers", "Examiners are trained to spot memorised language, and it lowers your score. Build real skills."],
    ["Starting IELTS practice tests with weak basic English", "Fix the foundation first, which is what you have just done."],
    ["Studying only the test you find easiest", "Your overall band is an average. Spend most time on your weakest skill."]
  ],
  yt: ["IELTS test format explained for beginners", "IELTS Academic vs General Training difference", "IELTS band scores explained how IELTS is marked"],
  tasks: [
    "Find out which version (Academic or General Training) and which band you need for your own goal. Write it at the front of your notebook.",
    "Watch one video that explains the test format and draw the table of the four tests from memory.",
    "Search for official IELTS sample questions and look at one example of each of the four tests. Do not time yourself yet; just see what they look like.",
    "Write your personal plan for the next three months: daily time, which skill on which day, and when you will take a full practice test."
  ],
  vocab: [
    ["band score", "ব্যান্ড স্কোর", "She needs an overall band score of 6.5."],
    ["requirement", "শর্ত / প্রয়োজনীয়তা", "Check the university's English requirement."],
    ["criteria", "মানদণ্ড", "Writing is marked on four criteria."],
    ["coherence", "সংগতি", "Coherence means your ideas are easy to follow."],
    ["candidate", "পরীক্ষার্থী", "Each candidate has a speaking interview."],
    ["feedback", "মতামত / মূল্যায়ন", "Ask a teacher for feedback on your essay."]
  ],
  prod: ["Write 120 words: 'Why I am taking IELTS, the band I need, my strongest and weakest skills, and my plan for the next three months.'",
    "Model: I am taking IELTS because I want to study for a master's degree in Canada. The universities I have chosen require an overall band of 6.5, with no band lower than 6.0. At the moment my strongest skill is reading, because I read English news every day. My weakest skill is writing, since I make mistakes with articles and my paragraphs are sometimes disorganised. For the next three months I am going to study for two hours a day. I will practise listening and reading on weekdays and write two essays every weekend. I am also going to ask a teacher to check my writing. I plan to take a full practice test at the end of each month."],
  quiz: [
    ["How many questions are there in the IELTS Listening test?", ["20", "30", "40", "60"], 2, "40 questions in 4 parts."],
    ["Which two tests are the same in Academic and General Training?", ["Reading and Writing", "Listening and Speaking", "Listening and Reading", "Writing and Speaking"], 1, "Only Reading and Writing differ."],
    ["What is the minimum length of the Writing Task 2 essay?", ["100 words", "150 words", "250 words", "500 words"], 2, "Task 1 is at least 150 words and Task 2 at least 250."],
    ["How long is the Speaking test?", ["4 to 5 minutes", "11 to 14 minutes", "30 minutes", "60 minutes"], 1, "Three parts in 11 to 14 minutes."],
    ["Which statement about band scores is true?", ["You pass with band 5.", "The overall band is the average of the four tests.", "Only whole bands are given.", "Speaking is not included in the overall band."], 1, "There is no pass mark, and half bands exist."]
  ]
});

D({ n: 60, t: "Final test and graduation", s: "review", m: 60, review: true, pass: 0.7,
  goal: "Prove that your foundation is ready. Score 70% or more on this mixed test to complete the programme.",
  bn: "অভিনন্দন! ৬০ দিনের শেষ ধাপ। এই পরীক্ষায় ৭০% পেলে আপনি প্রকৃত IELTS প্রস্তুতি শুরু করার জন্য তৈরি। না পেলে ভুল হওয়া বিষয়ের দিনগুলো আবার দেখে আবার চেষ্টা করুন।",
  tasks: [
    "Before the test, read your grammar map, your error list and your word notebook one last time.",
    "Record a three-minute talk: who you are, what you have learnt in 60 days, and your IELTS plan. Compare it with your Day 2 recording.",
    "Write 200 words: 'How my English has changed in the last 60 days.' Proofread it with your checklist.",
    "Plan your routine after graduation: 30 minutes of reading and listening every day, ten new words a day, and one piece of writing every two days."
  ],
  quiz: [
    ["*She ___ in Dhaka since 2018.*", ["lives", "is living", "has lived", "lived"], 2, "*Since* + a starting point: present perfect."],
    ["*If I ___ you, I would accept the offer.*", ["am", "was being", "were", "will be"], 2, "Second conditional: If I were you."],
    ["Which sentence is correct?", ["He gave me many advices.", "He gave me a lot of advice.", "He gave me an advice.", "He gave me lot advices."], 1, "*Advice* is uncountable."],
    ["*The new hospital ___ next year.*", ["will open by", "will be opened", "will opened", "is open"], 1, "Future passive: will be + past participle."],
    ["*I'm looking forward to ___ from you.*", ["hear", "hearing", "heard", "be heard"], 1, "*To* here is a preposition, so -ing follows."],
    ["*He asked me where ___ .*", ["do I live", "did I live", "I lived", "lived I"], 2, "Reported question: statement order."],
    ["*___ the high cost, many families send their children abroad.*", ["Although", "Despite", "However", "Because"], 1, "Before a noun phrase: despite."],
    ["A text says *Unemployment declined steadily.* Which statement means the same?", ["The number of jobless people fell gradually.", "Unemployment rose slowly.", "Unemployment did not change.", "Jobs decreased sharply."], 0, "*Declined steadily* = *fell gradually*."],
    ["*One of the main problems in big cities ___ traffic congestion.*", ["are", "were", "is", "have been"], 2, "The subject is *one*, which is singular."],
    ["Listen. What is the flight number and time?", ["BG 215 at 7.15", "BG 250 at 7.50", "BG 215 at 7.50", "BG 250 at 7.15"], 1, "B G two five zero, at ten to eight (7.50).", "Your flight is B G two five zero. It leaves at ten to eight in the evening."],
    ["Which is the best topic sentence for a paragraph about the benefits of sport?", ["I play football.", "Sport is sport.", "Regular sport improves both physical and mental health.", "My brother bought a cricket bat last week."], 2, "It states one clear main idea that can be supported."],
    ["Which answer is best for *Do you enjoy travelling?*", ["Yes.", "Yes, I do. I love seeing new places because it teaches me about different ways of life. Last year, for example, I visited Bandarban.", "Travelling is the act of going from one place to another.", "I am enjoy travelling very much."], 1, "Answer, reason and example, with correct grammar."]
  ]
});
