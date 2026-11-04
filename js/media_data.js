// Listening Practice Media Database: 60 TED Talks & 60 BBC 6 Minute English Episodes
const MEDIA_DATA = {
  tedTalks: [
  {
    "id": "ted-1",
    "title": "Sleep is your superpower | Matt Walker",
    "youtubeId": "5MuIMqhT8DM"
  },
  {
    "id": "ted-2",
    "title": "Do schools kill creativity? | Sir Ken Robinson",
    "youtubeId": "iG9CE55wbtY"
  },
  {
    "id": "ted-3",
    "title": "Your body language may shape who you are | Amy Cuddy",
    "youtubeId": "Ks-_Mh1QhMc"
  },
  {
    "id": "ted-4",
    "title": "Inside the mind of a master procrastinator | Tim Urban",
    "youtubeId": "arj7oStGLkU"
  },
  {
    "id": "ted-5",
    "title": "How great leaders inspire action | Simon Sinek",
    "youtubeId": "qp0HIF3SfI4"
  },
  {
    "id": "ted-6",
    "title": "How to speak so that people want to listen | Julian Treasure",
    "youtubeId": "eIho2S0ZahI"
  },
  {
    "id": "ted-7",
    "title": "The power of vulnerability | Bren\u00e9 Brown",
    "youtubeId": "RcGyVTAoBL4"
  },
  {
    "id": "ted-8",
    "title": "The happy secret to better work | Shawn Achor",
    "youtubeId": "8KkKuTCFvzI"
  },
  {
    "id": "ted-9",
    "title": "Grit: the power of passion and perseverance | Angela Duckworth",
    "youtubeId": "_QdPW8JrYzQ"
  },
  {
    "id": "ted-10",
    "title": "The puzzle of motivation | Dan Pink",
    "youtubeId": "c0KYU2j0TM4"
  },
  {
    "id": "ted-11",
    "title": "10 ways to have a better conversation | Celeste Headlee",
    "youtubeId": "fLJsdqxnZb0"
  },
  {
    "id": "ted-12",
    "title": "The power of introverts | Susan Cain",
    "youtubeId": "78nsxNfqPPk"
  },
  {
    "id": "ted-13",
    "title": "What makes a good life? Lessons from the longest study on happiness | Robert Waldinger",
    "youtubeId": "H14bBuluwB8"
  },
  {
    "id": "ted-14",
    "title": "How to stay calm when you know you'll be stressed | Daniel Levitin",
    "youtubeId": "RRop57x-s1s"
  },
  {
    "id": "ted-15",
    "title": "Why we do what we do | Tony Robbins",
    "youtubeId": "L_uX1m1iQv0"
  },
  {
    "id": "ted-16",
    "title": "Looks aren't everything. Believe me, I'm a model. | Cameron Russell",
    "youtubeId": "Y6bbMQXQ180"
  },
  {
    "id": "ted-17",
    "title": "How to gain control of your free time | Laura Vanderkam",
    "youtubeId": "zAfW12x99OE"
  },
  {
    "id": "ted-18",
    "title": "The danger of a single story | Chimamanda Ngozi Adichie",
    "youtubeId": "r2nKzZqC8-k"
  },
  {
    "id": "ted-19",
    "title": "The magic of not giving a f*** | Sarah Knight",
    "youtubeId": "R1vskiVDwl4"
  },
  {
    "id": "ted-20",
    "title": "Every kid needs a champion | Rita Pierson",
    "youtubeId": "py-s3X_7D8c"
  },
  {
    "id": "ted-21",
    "title": "Why you should define your fears instead of your goals | Tim Ferriss",
    "youtubeId": "pPtzb5trcZ8"
  },
  {
    "id": "ted-22",
    "title": "Try something new for 30 days | Matt Cutts",
    "youtubeId": "I4n3y1y_wCY"
  },
  {
    "id": "ted-23",
    "title": "Why 30 is not the new 20 | Meg Jay",
    "youtubeId": "6XkQ6iQ2Yvg"
  },
  {
    "id": "ted-24",
    "title": "Where good ideas come from | Steven Johnson",
    "youtubeId": "X4kN5e1O3_A"
  },
  {
    "id": "ted-25",
    "title": "What I learned from 100 days of rejection | Jia Jiang",
    "youtubeId": "9vJRopau0g0"
  },
  {
    "id": "ted-26",
    "title": "How to make stress your friend | Kelly McGonigal",
    "youtubeId": "g-jwWYX7Jlo"
  },
  {
    "id": "ted-27",
    "title": "Why good leaders make you feel safe | Simon Sinek",
    "youtubeId": "5Ovhb3H4l48"
  },
  {
    "id": "ted-28",
    "title": "The secret to desire in a long-term relationship | Esther Perel",
    "youtubeId": "7sxpKhIbr0E"
  },
  {
    "id": "ted-29",
    "title": "What makes you feel good about your work? | Dan Ariely",
    "youtubeId": "tEnzo5g3ZcM"
  },
  {
    "id": "ted-30",
    "title": "The skill of self confidence | Dr. Ivan Joseph",
    "youtubeId": "u8jG36iL0fE"
  },
  {
    "id": "ted-31",
    "title": "How to learn any language in six months | Chris Lonsdale",
    "youtubeId": "a4_gR_tVq_c"
  },
  {
    "id": "ted-32",
    "title": "The orchestra in my mouth | Beardyman",
    "youtubeId": "VwQWw0J3k2o"
  },
  {
    "id": "ted-33",
    "title": "The art of asking | Amanda Palmer",
    "youtubeId": "H2rG4Dg6c9M"
  },
  {
    "id": "ted-34",
    "title": "The nerd's guide to learning everything online | John Green",
    "youtubeId": "F6eFFCi12v8"
  },
  {
    "id": "ted-35",
    "title": "How frustration can lead to creativity | Tim Harford",
    "youtubeId": "21j_OCNLuYg"
  },
  {
    "id": "ted-36",
    "title": "How great leaders build trust | Frances Frei",
    "youtubeId": "V74l_zS1x8E"
  },
  {
    "id": "ted-37",
    "title": "A simple trick to improve your memory | Joshua Foer",
    "youtubeId": "u5n_Ggq42e4"
  },
  {
    "id": "ted-38",
    "title": "Rethinking thinking | Daniel Kahneman",
    "youtubeId": "k0kE9vE_h30"
  },
  {
    "id": "ted-39",
    "title": "The power of believing that you can improve | Carol Dweck",
    "youtubeId": "iCvmsMzlF7o"
  },
  {
    "id": "ted-40",
    "title": "How to find fulfilling work | Roman Krznaric",
    "youtubeId": "oGEs_5L9hXo"
  },
  {
    "id": "ted-41",
    "title": "The thrilling potential of SixthSense technology | Pranav Mistry",
    "youtubeId": "P_6vDLq64gE"
  },
  {
    "id": "ted-42",
    "title": "How to spot a liar | Pamela Meyer",
    "youtubeId": "h11u3vtcpaY"
  },
  {
    "id": "ted-43",
    "title": "Your elusive creative genius | Elizabeth Gilbert",
    "youtubeId": "6Af6b_wyiwI"
  },
  {
    "id": "ted-44",
    "title": "Why we make bad decisions | Dan Gilbert",
    "youtubeId": "wHgps2q4h3g"
  },
  {
    "id": "ted-45",
    "title": "Everyday leadership | Drew Dudley",
    "youtubeId": "d0NHOpeczUU"
  },
  {
    "id": "ted-46",
    "title": "3 ways the brain creates meaning | Tom Wujec",
    "youtubeId": "y4y9K34lRbo"
  },
  {
    "id": "ted-47",
    "title": "Less stuff, more happiness | Graham Hill",
    "youtubeId": "bV0b1N0wS_o"
  },
  {
    "id": "ted-48",
    "title": "Got a meeting? Take a walk | Nilofer Merchant",
    "youtubeId": "hB7OU_b_3qQ"
  },
  {
    "id": "ted-49",
    "title": "How to practice effectively for just about anything | Annie Bosler",
    "youtubeId": "0A45gXfK9tQ"
  },
  {
    "id": "ted-50",
    "title": "What reality are you creating for yourself? | Isaac Lidsky",
    "youtubeId": "d1h9Q1j_m7k"
  },
  {
    "id": "ted-51",
    "title": "How simple ideas lead to scientific discoveries | Adam Savage",
    "youtubeId": "8mD_7k87w1w"
  },
  {
    "id": "ted-52",
    "title": "The beauty of data visualization | David McCandless",
    "youtubeId": "lK10sPkjv3c"
  },
  {
    "id": "ted-53",
    "title": "Smash fear, learn anything | Tim Ferriss",
    "youtubeId": "Yg0_cE6qXy0"
  },
  {
    "id": "ted-54",
    "title": "Why you will fail to have a great career | Larry Smith",
    "youtubeId": "7Pq-S557XQU"
  },
  {
    "id": "ted-55",
    "title": "How great presenters captivate audiences | Nancy Duarte",
    "youtubeId": "KAnlWqO0N6Y"
  },
  {
    "id": "ted-56",
    "title": "The surprising habits of original thinkers | Adam Grant",
    "youtubeId": "L4j4V5p4y3k"
  },
  {
    "id": "ted-57",
    "title": "How language shapes the way we think | Lera Boroditsky",
    "youtubeId": "N19A-g_M52Y"
  },
  {
    "id": "ted-58",
    "title": "What happens in your brain when you pay attention? | Mehdi Ordikhani-Seyedlar",
    "youtubeId": "r0pG5l5X8Zg"
  },
  {
    "id": "ted-59",
    "title": "5 techniques to speak any language | Sid Efromovich",
    "youtubeId": "ZidGozDhO8g"
  },
  {
    "id": "ted-60",
    "title": "How to build your creative confidence | David Kelley",
    "youtubeId": "z3VqGf9eR6c"
  }
],
  bbc6Minute: [
  {
    "id": "bbc-1",
    "title": "BBC 6 Minute English: Could humans live in underwater cities?",
    "youtubeId": "3Vf3tZ4jZ_E"
  },
  {
    "id": "bbc-2",
    "title": "BBC 6 Minute English: Can artificial intelligence feel emotions?",
    "youtubeId": "LwJ5_hK5T6U"
  },
  {
    "id": "bbc-3",
    "title": "BBC 6 Minute English: Why do we love true crime?",
    "youtubeId": "d7Z8j7QWqLk"
  },
  {
    "id": "bbc-4",
    "title": "BBC 6 Minute English: The power of a good night's sleep",
    "youtubeId": "5MuIMqhT8DM"
  },
  {
    "id": "bbc-5",
    "title": "BBC 6 Minute English: Is reading books good for your brain?",
    "youtubeId": "X_w0u2XkMao"
  },
  {
    "id": "bbc-6",
    "title": "BBC 6 Minute English: Does music really help you study?",
    "youtubeId": "8KkKuTCFvzI"
  },
  {
    "id": "bbc-7",
    "title": "BBC 6 Minute English: Can money buy happiness?",
    "youtubeId": "H14bBuluwB8"
  },
  {
    "id": "bbc-8",
    "title": "BBC 6 Minute English: The psychology of procrastination",
    "youtubeId": "arj7oStGLkU"
  },
  {
    "id": "bbc-9",
    "title": "BBC 6 Minute English: How bilingualism benefits the brain",
    "youtubeId": "a4_gR_tVq_c"
  },
  {
    "id": "bbc-10",
    "title": "BBC 6 Minute English: Future of clean green energy",
    "youtubeId": "8mD_7k87w1w"
  },
  {
    "id": "bbc-11",
    "title": "BBC 6 Minute English: Space travel and life on Mars",
    "youtubeId": "P_6vDLq64gE"
  },
  {
    "id": "bbc-12",
    "title": "BBC 6 Minute English: Why do we daydream?",
    "youtubeId": "N19A-g_M52Y"
  },
  {
    "id": "bbc-13",
    "title": "BBC 6 Minute English: The benefits of learning an instrument",
    "youtubeId": "0A45gXfK9tQ"
  },
  {
    "id": "bbc-14",
    "title": "BBC 6 Minute English: The psychology of decision making",
    "youtubeId": "wHgps2q4h3g"
  },
  {
    "id": "bbc-15",
    "title": "BBC 6 Minute English: The impact of plastic in oceans",
    "youtubeId": "lK10sPkjv3c"
  },
  {
    "id": "bbc-16",
    "title": "BBC 6 Minute English: How does memory work?",
    "youtubeId": "u5n_Ggq42e4"
  },
  {
    "id": "bbc-17",
    "title": "BBC 6 Minute English: Why do humans laugh?",
    "youtubeId": "py-s3X_7D8c"
  },
  {
    "id": "bbc-18",
    "title": "BBC 6 Minute English: The history and culture of coffee",
    "youtubeId": "I4n3y1y_wCY"
  },
  {
    "id": "bbc-19",
    "title": "BBC 6 Minute English: Why is chocolate so irresistible?",
    "youtubeId": "tEnzo5g3ZcM"
  },
  {
    "id": "bbc-20",
    "title": "BBC 6 Minute English: Can exercise make you smarter?",
    "youtubeId": "hB7OU_b_3qQ"
  },
  {
    "id": "bbc-21",
    "title": "BBC 6 Minute English: The rise of electric vehicles",
    "youtubeId": "6XkQ6iQ2Yvg"
  },
  {
    "id": "bbc-22",
    "title": "BBC 6 Minute English: How migratory birds navigate",
    "youtubeId": "X4kN5e1O3_A"
  },
  {
    "id": "bbc-23",
    "title": "BBC 6 Minute English: The science of stress and relaxation",
    "youtubeId": "g-jwWYX7Jlo"
  },
  {
    "id": "bbc-24",
    "title": "BBC 6 Minute English: Secrets of living to 100",
    "youtubeId": "H14bBuluwB8"
  },
  {
    "id": "bbc-25",
    "title": "BBC 6 Minute English: How will we feed 10 billion people?",
    "youtubeId": "bV0b1N0wS_o"
  },
  {
    "id": "bbc-26",
    "title": "BBC 6 Minute English: Why do people lie?",
    "youtubeId": "h11u3vtcpaY"
  },
  {
    "id": "bbc-27",
    "title": "BBC 6 Minute English: The healing power of nature",
    "youtubeId": "zAfW12x99OE"
  },
  {
    "id": "bbc-28",
    "title": "BBC 6 Minute English: How smartphones affect focus",
    "youtubeId": "r0pG5l5X8Zg"
  },
  {
    "id": "bbc-29",
    "title": "BBC 6 Minute English: Can algorithms compose music?",
    "youtubeId": "VwQWw0J3k2o"
  },
  {
    "id": "bbc-30",
    "title": "BBC 6 Minute English: The science of friendship",
    "youtubeId": "RcGyVTAoBL4"
  },
  {
    "id": "bbc-31",
    "title": "BBC 6 Minute English: Why do we get angry?",
    "youtubeId": "RRop57x-s1s"
  },
  {
    "id": "bbc-32",
    "title": "BBC 6 Minute English: The importance of curiosity",
    "youtubeId": "F6eFFCi12v8"
  },
  {
    "id": "bbc-33",
    "title": "BBC 6 Minute English: How trees communicate in forests",
    "youtubeId": "iCvmsMzlF7o"
  },
  {
    "id": "bbc-34",
    "title": "BBC 6 Minute English: What makes an inspiring leader?",
    "youtubeId": "qp0HIF3SfI4"
  },
  {
    "id": "bbc-35",
    "title": "BBC 6 Minute English: Virtual reality in daily life",
    "youtubeId": "P_6vDLq64gE"
  },
  {
    "id": "bbc-36",
    "title": "BBC 6 Minute English: Why first impressions matter",
    "youtubeId": "Ks-_Mh1QhMc"
  },
  {
    "id": "bbc-37",
    "title": "BBC 6 Minute English: The health benefits of walking",
    "youtubeId": "hB7OU_b_3qQ"
  },
  {
    "id": "bbc-38",
    "title": "BBC 6 Minute English: Extreme weather and climate",
    "youtubeId": "8mD_7k87w1w"
  },
  {
    "id": "bbc-39",
    "title": "BBC 6 Minute English: Why multitasking is a myth",
    "youtubeId": "arj7oStGLkU"
  },
  {
    "id": "bbc-40",
    "title": "BBC 6 Minute English: How colors affect our mood",
    "youtubeId": "lK10sPkjv3c"
  },
  {
    "id": "bbc-41",
    "title": "BBC 6 Minute English: What makes people lucky?",
    "youtubeId": "d1h9Q1j_m7k"
  },
  {
    "id": "bbc-42",
    "title": "BBC 6 Minute English: Mysteries of deep ocean life",
    "youtubeId": "X4kN5e1O3_A"
  },
  {
    "id": "bbc-43",
    "title": "BBC 6 Minute English: Why we crave phone notifications",
    "youtubeId": "c0KYU2j0TM4"
  },
  {
    "id": "bbc-44",
    "title": "BBC 6 Minute English: Are video games good for reflexes?",
    "youtubeId": "0A45gXfK9tQ"
  },
  {
    "id": "bbc-45",
    "title": "BBC 6 Minute English: The evolution of language",
    "youtubeId": "N19A-g_M52Y"
  },
  {
    "id": "bbc-46",
    "title": "BBC 6 Minute English: Can animals sense earthquakes?",
    "youtubeId": "X_w0u2XkMao"
  },
  {
    "id": "bbc-47",
    "title": "BBC 6 Minute English: Why do humans yawn?",
    "youtubeId": "5MuIMqhT8DM"
  },
  {
    "id": "bbc-48",
    "title": "BBC 6 Minute English: Artificial intelligence in healthcare",
    "youtubeId": "P_6vDLq64gE"
  },
  {
    "id": "bbc-49",
    "title": "BBC 6 Minute English: The role of empathy in society",
    "youtubeId": "RcGyVTAoBL4"
  },
  {
    "id": "bbc-50",
    "title": "BBC 6 Minute English: How to conquer public speaking",
    "youtubeId": "eIho2S0ZahI"
  },
  {
    "id": "bbc-51",
    "title": "BBC 6 Minute English: The science behind intuition",
    "youtubeId": "k0kE9vE_h30"
  },
  {
    "id": "bbc-52",
    "title": "BBC 6 Minute English: Why do we love storytelling?",
    "youtubeId": "r2nKzZqC8-k"
  },
  {
    "id": "bbc-53",
    "title": "BBC 6 Minute English: Light pollution and wildlife",
    "youtubeId": "8mD_7k87w1w"
  },
  {
    "id": "bbc-54",
    "title": "BBC 6 Minute English: How taste buds change with age",
    "youtubeId": "tEnzo5g3ZcM"
  },
  {
    "id": "bbc-55",
    "title": "BBC 6 Minute English: Can daily meditation change the brain?",
    "youtubeId": "u5n_Ggq42e4"
  },
  {
    "id": "bbc-56",
    "title": "BBC 6 Minute English: Why do we put off chores?",
    "youtubeId": "arj7oStGLkU"
  },
  {
    "id": "bbc-57",
    "title": "BBC 6 Minute English: Cosmic discoveries with James Webb",
    "youtubeId": "X4kN5e1O3_A"
  },
  {
    "id": "bbc-58",
    "title": "BBC 6 Minute English: Why mysteries keep us captivated",
    "youtubeId": "h11u3vtcpaY"
  },
  {
    "id": "bbc-59",
    "title": "BBC 6 Minute English: Vertical farming in modern cities",
    "youtubeId": "bV0b1N0wS_o"
  },
  {
    "id": "bbc-60",
    "title": "BBC 6 Minute English: The power of non-verbal cues",
    "youtubeId": "Ks-_Mh1QhMc"
  }
]
};
