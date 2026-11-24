/**
 * IELTS Warriors - Computer-Delivered IELTS Listening Trainer
 * Exact Replica of OnMock CD-IELTS Listening Platform
 * Candidate: Abraham Rifat | Brand: IELTS Warriors
 * Supports all 8 Official Listening Tests with authentic 40 questions per test
 */

(function () {
  'use strict';

  // 1. ALL 8 RECENT REAL LISTENING TESTS DATABASE (40 Qs each = 320 Qs)
  const TESTS_DATABASE = {
  "6a918c90e2d325da96e1724c": {
    "testId": "6a918c90e2d325da96e1724c",
    "testNumber": 1,
    "title": "Recent Real Test Set 1 Listening Test 1",
    "candidateName": "Abraham Rifat",
    "totalQuestions": 40,
    "durationMinutes": 30,
    "answerKeys": {
      "1": [
        "cafe",
        "café"
      ],
      "2": [
        "9 am",
        "9:00 am",
        "9.00 am",
        "9am",
        "9:00",
        "9.00"
      ],
      "3": [
        "5km",
        "5 km",
        "5 kilometres",
        "5 kilometers"
      ],
      "4": [
        "barcode",
        "bar code"
      ],
      "5": [
        "website",
        "web site"
      ],
      "6": [
        "1.50",
        "1.5",
        "£1.50",
        "1.50 pounds"
      ],
      "7": [
        "Maughan",
        "MAUGHAN",
        "maughan"
      ],
      "8": [
        "01444732900",
        "01444 732900",
        "01444 732 900"
      ],
      "9": [
        "guide",
        "guide runner",
        "guide runners"
      ],
      "10": [
        "taking photographs",
        "photography",
        "taking photos",
        "photographs"
      ],
      "11": [
        "B",
        "b"
      ],
      "12": [
        "A",
        "a"
      ],
      "13": [
        "C",
        "c"
      ],
      "14": [
        "A",
        "a"
      ],
      "15": [
        "D",
        "d"
      ],
      "16": [
        "B",
        "b"
      ],
      "17": [
        "F",
        "f"
      ],
      "18": [
        "A",
        "a"
      ],
      "19": [
        "E",
        "e"
      ],
      "20": [
        "C",
        "c"
      ],
      "21": [
        "A",
        "a"
      ],
      "22": [
        "C",
        "c"
      ],
      "23": [
        "B",
        "b"
      ],
      "24": [
        "A",
        "a"
      ],
      "25": [
        "C",
        "c"
      ],
      "26": [
        "B",
        "b"
      ],
      "27": [
        "A",
        "a",
        "Sophie"
      ],
      "28": [
        "B",
        "b",
        "Tom"
      ],
      "29": [
        "A",
        "a",
        "Sophie"
      ],
      "30": [
        "C",
        "c",
        "Both",
        "Both Sophie and Tom"
      ],
      "31": [
        "animal gut",
        "gut"
      ],
      "32": [
        "fretboard",
        "fingerboard"
      ],
      "33": [
        "amplification",
        "acoustic amplification"
      ],
      "34": [
        "tension",
        "mechanical tension"
      ],
      "35": [
        "curved",
        "curved body"
      ],
      "36": [
        "Spain",
        "spain"
      ],
      "37": [
        "magnetic",
        "magnetic pickups"
      ],
      "38": [
        "solid body",
        "solid-body"
      ],
      "39": [
        "resonance",
        "sustained resonance"
      ],
      "40": [
        "recording",
        "sound recording"
      ]
    },
    "explanations": {
      "1": "The coordinator states: 'Everyone gathers outside the cafe situated right near the south entrance of the park.'",
      "2": "The coordinator explains: 'The runners start at 9 am sharp every Saturday.'",
      "3": "The coordinator says: 'It is a standard 5km course that loops twice through the meadow.'",
      "4": "The coordinator notes: 'Every participant must bring a printed barcode. Without that, our electronic scanners cannot register their finishing time.'",
      "5": "The coordinator confirms: 'All weekly timings are uploaded directly to our official website.'",
      "6": "The coordinator states: 'Parking costs 1.50 for the entire morning, payable at the ticket machine.'",
      "7": "The coordinator clearly spells: 'M - A - U - G - H - A - N.'",
      "8": "The phone number is dictated as: '01444732900'.",
      "9": "The coordinator explains: 'We particularly need guide runners to accompany visually impaired athletes.'",
      "10": "The coordinator mentions: 'We also need someone responsible for taking photographs near the finish line.'",
      "11": "The speaker clarifies: 'Each child must bring their own packed lunch in a labelled bag... and place them in the communal lockers in the welcome foyer.'",
      "12": "The speaker states: 'They are only permitted to purchase honey and fruit juice produced on our own estate; sweets and fizzy sodas are strictly prohibited.'",
      "13": "The speaker emphasizes: 'The golden rule is that everyone must wash their hands thoroughly... both before eating and immediately after touching any animal.'",
      "14": "The speaker announces: 'Our indoor discovery barn is fully heated and equipped with interactive educational displays.'",
      "15": "The speaker notes: 'Directly to the north of the main entrance gate... you will see the Old Stables at Location D.'",
      "16": "The speaker notes: 'Follow the willow-lined path eastward, you will arrive at the Duck Pond at Location B.'",
      "17": "The speaker notes: 'South of the pond is our heritage Apple Orchard, indicated at Location F.'",
      "18": "The speaker notes: 'In the peaceful wildflower meadow in the far southeast corner are the Beehives, positioned at Location A.'",
      "19": "The speaker notes: 'Our newly renovated Adventure Playground is right next to the gift shop at Location E.'",
      "20": "The speaker notes: 'The covered Picnic Shelter for eating lunch is situated at Location C, beside the herb garden.'",
      "21": "Sophie explains: 'Sandy Bay offers a much greater variety of marine habitats—we had rocky outcrops, shallow seagrass beds, and tidal estuaries all within walking distance.'",
      "22": "Tom says: 'We hadn't anticipated the exceptionally strong tidal currents sweeping around the headland; we almost lost our sampling canister.'",
      "23": "Sophie confirms: 'It turned out to be a faulty sensor calibration on our digital probe, not an actual shift in freshwater runoff.'",
      "24": "Tom states: 'They remained tightly sheltering among the submerged seagrass roots to evade predators.'",
      "25": "Sophie notes: 'Ultimately we extracted ten years of certified catch data from the university database archives.'",
      "26": "The tutor instructs: 'You need to incorporate more comparative charts to highlight the seasonal variance.'",
      "27": "Sophie volunteers: 'I am happy to carry out the statistical correlation modeling.'",
      "28": "Tom affirms: 'And I will take responsibility for reviewing and transcribing the underwater video footage.'",
      "29": "Sophie confirms: 'I can also write up the section discussing the sea temperature anomalies.'",
      "30": "Tom says: 'And both of us will collaborate on designing the presentation slides.'",
      "31": "The lecturer explains: 'Strings were manufactured entirely from animal gut, which provided a gentle, mellow timbre.'",
      "32": "The lecturer states: 'Luthiers developed the wooden fretboard, initially embedding tied gut frets.'",
      "33": "The lecturer notes: 'The primary function of the hollow wooden soundbox is acoustic amplification.'",
      "34": "The lecturer explains: 'These steel strings imposed immense mechanical tension on the wooden frame.'",
      "35": "The lecturer highlights: 'Luthiers perfected the iconic figure-eight curved body design.'",
      "36": "The lecturer states: 'The greatest breakthrough occurred in 19th-century Spain, where Antonio de Torres pioneered the fan-bracing pattern.'",
      "37": "The lecturer notes: 'This dilemma spurred the development of magnetic pickups placed directly beneath metal strings.'",
      "38": "The lecturer points out: 'To eradicate this acoustic interference, inventors developed the solid body electric guitar.'",
      "39": "The lecturer states: 'Modern guitars often incorporate carbon-fibre composite materials to ensure sustained resonance.'",
      "40": "The lecturer concludes: 'They transformed the 20th-century recording studio and gave birth to modern popular music.'"
    },
    "parts": [
      {
        "partNumber": 1,
        "title": "Part 1: Preston Park Run - Volunteer Registration",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T1S1.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Preston Park Run - Volunteer Registration</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Meeting place: outside the <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">1</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"1\" autocomplete=\"off\" /></span> near the south entrance</li><li><span class=\"listen-bullet\">&bull;</span> Official start time of the race: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">2</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"2\" autocomplete=\"off\" /></span> every Saturday</li><li><span class=\"listen-bullet\">&bull;</span> Total race distance: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">3</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"3\" autocomplete=\"off\" /></span> course through the park</li><li><span class=\"listen-bullet\">&bull;</span> Participants must bring a printed <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">4</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"4\" autocomplete=\"off\" /></span> for scanning</li><li><span class=\"listen-bullet\">&bull;</span> Weekly results are published on the official <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">5</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"5\" autocomplete=\"off\" /></span> by Saturday afternoon</li><li><span class=\"listen-bullet\">&bull;</span> Visitor parking fee: £ <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">6</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"6\" autocomplete=\"off\" /></span> for the whole morning</li><li><span class=\"listen-bullet\">&bull;</span> Volunteer coordinator surname: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">7</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"7\" autocomplete=\"off\" /></span> (spelt by speaker)</li><li><span class=\"listen-bullet\">&bull;</span> Direct telephone contact number: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">8</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"8\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Urgent need for: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">9</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"9\" autocomplete=\"off\" /></span> runners to assist visually impaired athletes</li><li><span class=\"listen-bullet\">&bull;</span> Additional volunteer role needed for: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">10</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"10\" autocomplete=\"off\" /></span> for the community newsletter</li></ul></div></div>"
      },
      {
        "partNumber": 2,
        "title": "Part 2: Paulton Children's Farm - School Visits & Facilities",
        "instruction": "Answer Questions 11 to 20 based on the talk given by the farm education officer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test1%20Part2.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 11 to 20 based on the talk given by the farm education officer.",
        "content": "<div class=\"listen-notes-card\"><h4>Paulton Children's Farm - School Visits & Facilities</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"11\">\n            <div class=\"listen-mcq-num\">11</div>\n            <div class=\"listen-mcq-stem\">What is the requirement regarding children's lunches?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"A\"><input type=\"radio\" name=\"q11\" value=\"A\"> A. Lunches must be purchased from the farm cafeteria</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"B\"><input type=\"radio\" name=\"q11\" value=\"B\"> B. Packed lunches must be kept in labelled bags in communal lockers</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"C\"><input type=\"radio\" name=\"q11\" value=\"C\"> C. Children must carry their own food in backpacks at all times</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"12\">\n            <div class=\"listen-mcq-num\">12</div>\n            <div class=\"listen-mcq-stem\">What items are children permitted to purchase in the farm shop?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"A\"><input type=\"radio\" name=\"q12\" value=\"A\"> A. Estate honey and fruit juice</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"B\"><input type=\"radio\" name=\"q12\" value=\"B\"> B. Packaged sweets and fizzy soda cans</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"C\"><input type=\"radio\" name=\"q12\" value=\"C\"> C. Souvenir animal toys and postcards only</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"13\">\n            <div class=\"listen-mcq-num\">13</div>\n            <div class=\"listen-mcq-stem\">What is the primary health rule for visitors touching animals?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"A\"><input type=\"radio\" name=\"q13\" value=\"A\"> A. Wear disposable latex gloves before petting sheep</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"B\"><input type=\"radio\" name=\"q13\" value=\"B\"> B. Stay behind the double wooden fences at all times</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"C\"><input type=\"radio\" name=\"q13\" value=\"C\"> C. Wash hands thoroughly before eating and after handling animals</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"14\">\n            <div class=\"listen-mcq-num\">14</div>\n            <div class=\"listen-mcq-stem\">Where will activities take place if it rains heavily?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"A\"><input type=\"radio\" name=\"q14\" value=\"A\"> A. In the indoor discovery barn</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"B\"><input type=\"radio\" name=\"q14\" value=\"B\"> B. Under the outdoor picnic canopy</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"C\"><input type=\"radio\" name=\"q14\" value=\"C\"> C. Inside the farm administrative offices</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"15\">\n            <div class=\"listen-mcq-num\">15</div>\n            <div class=\"listen-mcq-stem\">Old Stables is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"A\"><input type=\"radio\" name=\"q15\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"B\"><input type=\"radio\" name=\"q15\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"C\"><input type=\"radio\" name=\"q15\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"D\"><input type=\"radio\" name=\"q15\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"E\"><input type=\"radio\" name=\"q15\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"F\"><input type=\"radio\" name=\"q15\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"16\">\n            <div class=\"listen-mcq-num\">16</div>\n            <div class=\"listen-mcq-stem\">Duck Pond is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"A\"><input type=\"radio\" name=\"q16\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"B\"><input type=\"radio\" name=\"q16\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"C\"><input type=\"radio\" name=\"q16\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"D\"><input type=\"radio\" name=\"q16\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"E\"><input type=\"radio\" name=\"q16\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"F\"><input type=\"radio\" name=\"q16\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"17\">\n            <div class=\"listen-mcq-num\">17</div>\n            <div class=\"listen-mcq-stem\">Apple Orchard is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"A\"><input type=\"radio\" name=\"q17\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"B\"><input type=\"radio\" name=\"q17\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"C\"><input type=\"radio\" name=\"q17\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"D\"><input type=\"radio\" name=\"q17\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"E\"><input type=\"radio\" name=\"q17\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"F\"><input type=\"radio\" name=\"q17\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"18\">\n            <div class=\"listen-mcq-num\">18</div>\n            <div class=\"listen-mcq-stem\">Beehives is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"A\"><input type=\"radio\" name=\"q18\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"B\"><input type=\"radio\" name=\"q18\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"C\"><input type=\"radio\" name=\"q18\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"D\"><input type=\"radio\" name=\"q18\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"E\"><input type=\"radio\" name=\"q18\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"F\"><input type=\"radio\" name=\"q18\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"19\">\n            <div class=\"listen-mcq-num\">19</div>\n            <div class=\"listen-mcq-stem\">Adventure Playground is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"A\"><input type=\"radio\" name=\"q19\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"B\"><input type=\"radio\" name=\"q19\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"C\"><input type=\"radio\" name=\"q19\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"D\"><input type=\"radio\" name=\"q19\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"E\"><input type=\"radio\" name=\"q19\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"F\"><input type=\"radio\" name=\"q19\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"20\">\n            <div class=\"listen-mcq-num\">20</div>\n            <div class=\"listen-mcq-stem\">Covered Picnic Shelter is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"A\"><input type=\"radio\" name=\"q20\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"B\"><input type=\"radio\" name=\"q20\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"C\"><input type=\"radio\" name=\"q20\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"D\"><input type=\"radio\" name=\"q20\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"E\"><input type=\"radio\" name=\"q20\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"F\"><input type=\"radio\" name=\"q20\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 3,
        "title": "Part 3: Marine Biology Fieldwork - Coastal Reefs & Fish Populations",
        "instruction": "Answer Questions 21 to 30 based on the discussion between two undergraduate students and their tutor.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test1%20Part3.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 21 to 30 based on the discussion between two undergraduate students and their tutor.",
        "content": "<div class=\"listen-notes-card\"><h4>Marine Biology Fieldwork - Coastal Reefs & Fish Populations</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"21\">\n            <div class=\"listen-mcq-num\">21</div>\n            <div class=\"listen-mcq-stem\">Why did Sophie and Tom select Sandy Bay for their marine survey?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"A\"><input type=\"radio\" name=\"q21\" value=\"A\"> A. It featured a diverse range of marine habitats</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"B\"><input type=\"radio\" name=\"q21\" value=\"B\"> B. It was free from commercial fishing vessels</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"C\"><input type=\"radio\" name=\"q21\" value=\"C\"> C. It was closest to their university laboratory</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"22\">\n            <div class=\"listen-mcq-num\">22</div>\n            <div class=\"listen-mcq-stem\">What was the main obstacle during their field sampling?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"A\"><input type=\"radio\" name=\"q22\" value=\"A\"> A. Adverse heavy rainfall flooding the beach</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"B\"><input type=\"radio\" name=\"q22\" value=\"B\"> B. Lack of access to proper diving equipment</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"C\"><input type=\"radio\" name=\"q22\" value=\"C\"> C. Danger from unusually strong tidal currents</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"23\">\n            <div class=\"listen-mcq-num\">23</div>\n            <div class=\"listen-mcq-stem\">What accounted for the anomaly in their salinity measurements?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"A\"><input type=\"radio\" name=\"q23\" value=\"A\"> A. Sudden influx of heavy rainwater runoff</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"B\"><input type=\"radio\" name=\"q23\" value=\"B\"> B. An incorrectly calibrated electronic sensor</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"C\"><input type=\"radio\" name=\"q23\" value=\"C\"> C. Chemical contamination from nearby motorboats</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"24\">\n            <div class=\"listen-mcq-num\">24</div>\n            <div class=\"listen-mcq-stem\">What surprised the students about the juvenile fish?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"A\"><input type=\"radio\" name=\"q24\" value=\"A\"> A. They remained sheltered among seagrass roots during high tide</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"B\"><input type=\"radio\" name=\"q24\" value=\"B\"> B. They fed primarily on surface plankton rather than algae</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"C\"><input type=\"radio\" name=\"q24\" value=\"C\"> C. They migrated several kilometres offshore at night</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"25\">\n            <div class=\"listen-mcq-num\">25</div>\n            <div class=\"listen-mcq-stem\">Where did they retrieve reliable historical data?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"A\"><input type=\"radio\" name=\"q25\" value=\"A\"> A. From local recreational angling club logs</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"B\"><input type=\"radio\" name=\"q25\" value=\"B\"> B. From commercial fishing port manifests</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"C\"><input type=\"radio\" name=\"q25\" value=\"C\"> C. From certified university database archives</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"26\">\n            <div class=\"listen-mcq-num\">26</div>\n            <div class=\"listen-mcq-stem\">What improvement did the tutor recommend for their report?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"A\"><input type=\"radio\" name=\"q26\" value=\"A\"> A. Shortening the background literature section</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"B\"><input type=\"radio\" name=\"q26\" value=\"B\"> B. Adding comparative charts showing seasonal variance</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"C\"><input type=\"radio\" name=\"q26\" value=\"C\"> C. Interviewing local marine wildlife conservationists</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"27\">\n            <div class=\"listen-mcq-num\">27</div>\n            <div class=\"listen-mcq-stem\">Who will undertake the statistical correlation modeling?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"A\"><input type=\"radio\" name=\"q27\" value=\"A\"> A. Sophie</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"B\"><input type=\"radio\" name=\"q27\" value=\"B\"> B. Tom</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"C\"><input type=\"radio\" name=\"q27\" value=\"C\"> C. Both Sophie and Tom</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"28\">\n            <div class=\"listen-mcq-num\">28</div>\n            <div class=\"listen-mcq-stem\">Who will log and transcribe the underwater video footage?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"A\"><input type=\"radio\" name=\"q28\" value=\"A\"> A. Sophie</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"B\"><input type=\"radio\" name=\"q28\" value=\"B\"> B. Tom</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"C\"><input type=\"radio\" name=\"q28\" value=\"C\"> C. Both Sophie and Tom</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"29\">\n            <div class=\"listen-mcq-num\">29</div>\n            <div class=\"listen-mcq-stem\">Who will draft the sea temperature section?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"A\"><input type=\"radio\" name=\"q29\" value=\"A\"> A. Sophie</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"B\"><input type=\"radio\" name=\"q29\" value=\"B\"> B. Tom</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"C\"><input type=\"radio\" name=\"q29\" value=\"C\"> C. Both Sophie and Tom</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"30\">\n            <div class=\"listen-mcq-num\">30</div>\n            <div class=\"listen-mcq-stem\">Who will prepare the conference presentation slides?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"A\"><input type=\"radio\" name=\"q30\" value=\"A\"> A. Sophie</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"B\"><input type=\"radio\" name=\"q30\" value=\"B\"> B. Tom</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"C\"><input type=\"radio\" name=\"q30\" value=\"C\"> C. Both Sophie and Tom</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 4,
        "title": "Part 4: The Acoustic Evolution and History of the Guitar",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test1%20Part4.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>The Acoustic Evolution and History of the Guitar</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Early renaissance guitar strings were made from <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">31</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"31\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Chromatic pitch intervals were facilitated by developing the wooden <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">32</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"32\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> The fundamental acoustic role of the hollow soundbox is <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">33</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"33\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Adopting steel wire strings generated massive mechanical <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">34</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"34\" autocomplete=\"off\" /></span> on the instrument</li><li><span class=\"listen-bullet\">&bull;</span> Structural rigidity and comfort were achieved via a figure-eight <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">35</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"35\" autocomplete=\"off\" /></span> body design</li><li><span class=\"listen-bullet\">&bull;</span> Modern classical fan-bracing was standardized in 19th-century <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">36</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"36\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Electric guitars capture string oscillations using <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">37</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"37\" autocomplete=\"off\" /></span> pickups</li><li><span class=\"listen-bullet\">&bull;</span> Acoustic feedback howling was eliminated by engineering the <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">38</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"38\" autocomplete=\"off\" /></span> electric guitar</li><li><span class=\"listen-bullet\">&bull;</span> Modern carbon-fibre composites provide enhanced tonal <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">39</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"39\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Guitar acoustics fundamentally reshaped the 20th-century <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">40</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"40\" autocomplete=\"off\" /></span> studio</li></ul></div></div>"
      }
    ]
  },
  "6a929302e2d325da96e191db": {
    "testId": "6a929302e2d325da96e191db",
    "testNumber": 2,
    "title": "Recent Real Test Set 1 Listening Test 2",
    "candidateName": "Abraham Rifat",
    "totalQuestions": 40,
    "durationMinutes": 30,
    "answerKeys": {
      "1": [
        "helmet",
        "cycling helmet"
      ],
      "2": [
        "15",
        "£15",
        "15 pounds"
      ],
      "3": [
        "Sunday",
        "sunday"
      ],
      "4": [
        "repair kit",
        "compact repair kit",
        "puncture repair kit"
      ],
      "5": [
        "Greyson",
        "GREYSON",
        "greyson"
      ],
      "6": [
        "07833 912440",
        "07833912440"
      ],
      "7": [
        "reflectors",
        "reflector"
      ],
      "8": [
        "intermediate",
        "intermediate pace",
        "intermediate group"
      ],
      "9": [
        "lights",
        "bike lights",
        "bicycle lights"
      ],
      "10": [
        "newsletter",
        "news letter",
        "email newsletter"
      ],
      "11": [
        "B",
        "b"
      ],
      "12": [
        "B",
        "b",
        "Three shifts"
      ],
      "13": [
        "B",
        "b",
        "18"
      ],
      "14": [
        "C",
        "c"
      ],
      "15": [
        "A",
        "a"
      ],
      "16": [
        "B",
        "b"
      ],
      "17": [
        "C",
        "c"
      ],
      "18": [
        "D",
        "d"
      ],
      "19": [
        "E",
        "e"
      ],
      "20": [
        "F",
        "f"
      ],
      "21": [
        "B",
        "b"
      ],
      "22": [
        "A",
        "a"
      ],
      "23": [
        "B",
        "b"
      ],
      "24": [
        "B",
        "b"
      ],
      "25": [
        "C",
        "c"
      ],
      "26": [
        "B",
        "b"
      ],
      "27": [
        "A",
        "a",
        "Chloe"
      ],
      "28": [
        "B",
        "b",
        "Liam"
      ],
      "29": [
        "A",
        "a",
        "Chloe"
      ],
      "30": [
        "C",
        "c",
        "Both",
        "Both Chloe and Liam"
      ],
      "31": [
        "adobe",
        "rammed earth"
      ],
      "32": [
        "thermal mass",
        "thermal inertia"
      ],
      "33": [
        "hours",
        "hrs"
      ],
      "34": [
        "nights",
        "nighttime hours",
        "night time"
      ],
      "35": [
        "windcatchers",
        "wind catchers",
        "badgirs"
      ],
      "36": [
        "courtyard",
        "internal courtyard"
      ],
      "37": [
        "shading",
        "essential shading"
      ],
      "38": [
        "lime",
        "lime and clay"
      ],
      "39": [
        "stone",
        "high stone"
      ],
      "40": [
        "zero-carbon",
        "sustainable",
        "zero carbon"
      ]
    },
    "explanations": {
      "1": "The secretary states: 'All riders must wear an approved cycling helmet during all club outings.'",
      "2": "The secretary says: 'For individual adults, it is 15 pounds per calendar year.'",
      "3": "The secretary clarifies: 'Our flagship long-distance endurance ride takes place every Sunday morning.'",
      "4": "The secretary mentions: 'Every rider must bring a spare inner tube and a compact repair kit.'",
      "5": "The secretary spells: 'G - R - E - Y - S - O - N.'",
      "6": "The number given is: '07833 912440'.",
      "7": "The secretary notes: 'Bicycles must be equipped with front and rear reflectors at all times.'",
      "8": "The secretary recommends: 'We suggest joining the intermediate pace group.'",
      "9": "The secretary confirms: 'Front and rear lights are compulsory for evening sessions.'",
      "10": "The secretary confirms: 'We publish a quarterly newsletter sent directly to your registered email address.'",
      "11": "The manager explains: 'Front-of-house volunteers assist primarily with welcoming theatre patrons at the entrance and checking digital tickets.'",
      "12": "The manager explains: 'For every three volunteer shifts you complete, you earn a complimentary voucher.'",
      "13": "The manager notes: 'Please note the minimum age requirement is 18 years old due to heavy staging machinery.'",
      "14": "The manager specifies: 'All front-of-house ushers must wear smart black trousers or skirt and a plain white collared shirt.'",
      "15": "The manager states: 'You will find the Orchestra Pit entrance at Location A beneath the main stage apron.'",
      "16": "The manager states: 'You will see the Lighting Console control room positioned high at Location B.'",
      "17": "The manager states: 'Directly behind the upstage scenery is the Wardrobe department at Location C.'",
      "18": "The manager states: 'Entering through the Stage Door located at Location D on your diagram.'",
      "19": "The manager states: 'Across the back corridor on the right is the Green Room at Location E.'",
      "20": "The manager states: 'Finally, the heavy Prop Storage workshop is situated in the far northern bay at Location F.'",
      "21": "Chloe and Liam note: 'It maximizes the surface area of saline water... allowing the water layer to heat up thirty percent faster.'",
      "22": "Chloe explains: 'Polycarbonate degraded rapidly under ultraviolet radiation and clouded up within a week.'",
      "23": "Liam states: 'The crusted salt reflected incoming light and lowered the thermal absorption rate.'",
      "24": "Chloe says: 'We introduced a continuous siphon flush mechanism that periodically drains the high-salinity brine.'",
      "25": "Liam points out: 'Real-world output was around three point two litres due to wind cooling the external glass cover.'",
      "26": "The professor responds: 'Excellent workaround.'",
      "27": "Chloe states: 'I will draft the technical methodology section detailing the thermocouple sensor placement.'",
      "28": "Liam states: 'I will generate the thermodynamic efficiency calculation charts and graphs.'",
      "29": "Chloe says: 'And I will also compile the economic cost-benefit analysis comparing our still to reverse osmosis units.'",
      "30": "Liam notes: 'Then together we will write the final conclusion and recommendation summary.'",
      "31": "The lecturer mentions: 'Communities residing in hot arid climates have utilized unfired earth, commonly known as adobe.'",
      "32": "The lecturer notes: 'Thick earthen walls possess extraordinarily high thermal mass.'",
      "33": "The lecturer notes: 'Delaying heat transmission into living spaces by up to ten to twelve hours.'",
      "34": "The lecturer points out: 'The walls then release their accumulated heat to warm the occupants during chilly nighttime hours.'",
      "35": "The lecturer explains: 'Traditional architects engineered tall roof structures known as windcatchers or badgirs.'",
      "36": "The lecturer highlights: 'Central to desert urban planning is the internal courtyard design.'",
      "37": "The lecturer notes: 'Deep exterior colonnades and projecting timber overhangs provide essential shading.'",
      "38": "The lecturer states: 'Builders applied breathable natural plaster consisting of lime and clay.'",
      "39": "The lecturer notes: 'Traditional builders raised buildings upon high stone foundations.'",
      "40": "The lecturer concludes: 'Contemporary architects are rediscovering earthen construction as a sustainable model for zero-carbon architecture.'"
    },
    "parts": [
      {
        "partNumber": 1,
        "title": "Part 1: South City Cycling Club - Membership Registration",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T2S1.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>South City Cycling Club - Membership Registration</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> All riders must wear an approved <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">1</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"1\" autocomplete=\"off\" /></span> on all club rides</li><li><span class=\"listen-bullet\">&bull;</span> Annual adult membership subscription: £ <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">2</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"2\" autocomplete=\"off\" /></span> per year</li><li><span class=\"listen-bullet\">&bull;</span> Main long group ride held every <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">3</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"3\" autocomplete=\"off\" /></span> morning at 8 am</li><li><span class=\"listen-bullet\">&bull;</span> Compulsory emergency equipment: spare inner tube and a <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">4</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"4\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Membership secretary surname: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">5</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"5\" autocomplete=\"off\" /></span> (spelt by speaker)</li><li><span class=\"listen-bullet\">&bull;</span> Membership coordinator contact number: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">6</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"6\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Bicycles must be fitted with front and rear <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">7</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"7\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Recommended speed group for returning riders: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">8</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"8\" autocomplete=\"off\" /></span> group</li><li><span class=\"listen-bullet\">&bull;</span> Front and rear <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">9</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"9\" autocomplete=\"off\" /></span> must be used for evening sessions</li><li><span class=\"listen-bullet\">&bull;</span> Updates distributed via a quarterly <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">10</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"10\" autocomplete=\"off\" /></span> by email</li></ul></div></div>"
      },
      {
        "partNumber": 2,
        "title": "Part 2: Royal Theatre Volunteer Induction & Backstage Layout",
        "instruction": "Answer Questions 11 to 20 based on the talk given by the volunteer manager.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test2%20Part2.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 11 to 20 based on the talk given by the volunteer manager.",
        "content": "<div class=\"listen-notes-card\"><h4>Royal Theatre Volunteer Induction & Backstage Layout</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"11\">\n            <div class=\"listen-mcq-num\">11</div>\n            <div class=\"listen-mcq-stem\">What is the primary responsibility of front-of-house volunteers?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"A\"><input type=\"radio\" name=\"q11\" value=\"A\"> A. Serving refreshments at the intermission bar</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"B\"><input type=\"radio\" name=\"q11\" value=\"B\"> B. Welcoming theatre patrons and checking tickets</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"C\"><input type=\"radio\" name=\"q11\" value=\"C\"> C. Selling official program booklets in the stalls</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"12\">\n            <div class=\"listen-mcq-num\">12</div>\n            <div class=\"listen-mcq-stem\">How many shifts must a volunteer complete to earn a complimentary ticket?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"A\"><input type=\"radio\" name=\"q12\" value=\"A\"> A. Two shifts</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"B\"><input type=\"radio\" name=\"q12\" value=\"B\"> B. Three shifts</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"C\"><input type=\"radio\" name=\"q12\" value=\"C\"> C. Five shifts</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"13\">\n            <div class=\"listen-mcq-num\">13</div>\n            <div class=\"listen-mcq-stem\">What is the minimum age to work on the backstage crew?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"A\"><input type=\"radio\" name=\"q13\" value=\"A\"> A. 16 years old</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"B\"><input type=\"radio\" name=\"q13\" value=\"B\"> B. 18 years old</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"C\"><input type=\"radio\" name=\"q13\" value=\"C\"> C. 21 years old</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"14\">\n            <div class=\"listen-mcq-num\">14</div>\n            <div class=\"listen-mcq-stem\">What is the official uniform requirement for volunteers?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"A\"><input type=\"radio\" name=\"q14\" value=\"A\"> A. All black clothing with dark leather shoes</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"B\"><input type=\"radio\" name=\"q14\" value=\"B\"> B. Casual blue jeans with an official theatre t-shirt</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"C\"><input type=\"radio\" name=\"q14\" value=\"C\"> C. Smart black trousers and a plain white shirt</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"15\">\n            <div class=\"listen-mcq-num\">15</div>\n            <div class=\"listen-mcq-stem\">Orchestra Pit is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"A\"><input type=\"radio\" name=\"q15\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"B\"><input type=\"radio\" name=\"q15\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"C\"><input type=\"radio\" name=\"q15\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"D\"><input type=\"radio\" name=\"q15\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"E\"><input type=\"radio\" name=\"q15\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"F\"><input type=\"radio\" name=\"q15\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"16\">\n            <div class=\"listen-mcq-num\">16</div>\n            <div class=\"listen-mcq-stem\">Lighting Console is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"A\"><input type=\"radio\" name=\"q16\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"B\"><input type=\"radio\" name=\"q16\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"C\"><input type=\"radio\" name=\"q16\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"D\"><input type=\"radio\" name=\"q16\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"E\"><input type=\"radio\" name=\"q16\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"F\"><input type=\"radio\" name=\"q16\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"17\">\n            <div class=\"listen-mcq-num\">17</div>\n            <div class=\"listen-mcq-stem\">Wardrobe Department is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"A\"><input type=\"radio\" name=\"q17\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"B\"><input type=\"radio\" name=\"q17\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"C\"><input type=\"radio\" name=\"q17\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"D\"><input type=\"radio\" name=\"q17\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"E\"><input type=\"radio\" name=\"q17\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"F\"><input type=\"radio\" name=\"q17\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"18\">\n            <div class=\"listen-mcq-num\">18</div>\n            <div class=\"listen-mcq-stem\">Stage Door entrance is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"A\"><input type=\"radio\" name=\"q18\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"B\"><input type=\"radio\" name=\"q18\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"C\"><input type=\"radio\" name=\"q18\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"D\"><input type=\"radio\" name=\"q18\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"E\"><input type=\"radio\" name=\"q18\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"F\"><input type=\"radio\" name=\"q18\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"19\">\n            <div class=\"listen-mcq-num\">19</div>\n            <div class=\"listen-mcq-stem\">Green Room is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"A\"><input type=\"radio\" name=\"q19\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"B\"><input type=\"radio\" name=\"q19\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"C\"><input type=\"radio\" name=\"q19\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"D\"><input type=\"radio\" name=\"q19\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"E\"><input type=\"radio\" name=\"q19\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"F\"><input type=\"radio\" name=\"q19\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"20\">\n            <div class=\"listen-mcq-num\">20</div>\n            <div class=\"listen-mcq-stem\">Prop Storage is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"A\"><input type=\"radio\" name=\"q20\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"B\"><input type=\"radio\" name=\"q20\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"C\"><input type=\"radio\" name=\"q20\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"D\"><input type=\"radio\" name=\"q20\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"E\"><input type=\"radio\" name=\"q20\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"F\"><input type=\"radio\" name=\"q20\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 3,
        "title": "Part 3: Solar Water Desalination Project Seminar",
        "instruction": "Answer Questions 21 to 30 based on the tutorial discussion between two engineering students and their professor.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test2%20Part3.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 21 to 30 based on the tutorial discussion between two engineering students and their professor.",
        "content": "<div class=\"listen-notes-card\"><h4>Solar Water Desalination Project Seminar</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"21\">\n            <div class=\"listen-mcq-num\">21</div>\n            <div class=\"listen-mcq-stem\">Why did Chloe and Liam choose a stepped cascade basin for their solar still?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"A\"><input type=\"radio\" name=\"q21\" value=\"A\"> A. It was significantly cheaper to manufacture</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"B\"><input type=\"radio\" name=\"q21\" value=\"B\"> B. It maximizes surface area and heats water faster</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"C\"><input type=\"radio\" name=\"q21\" value=\"C\"> C. It fits easily into domestic rooftop water tanks</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"22\">\n            <div class=\"listen-mcq-num\">22</div>\n            <div class=\"listen-mcq-stem\">Why was polycarbonate rejected for the transparent cover?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"A\"><input type=\"radio\" name=\"q22\" value=\"A\"> A. It suffered ultraviolet degradation and clouded up</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"B\"><input type=\"radio\" name=\"q22\" value=\"B\"> B. It was too heavy for the aluminum support struts</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"C\"><input type=\"radio\" name=\"q22\" value=\"C\"> C. It cracked when exposed to high temperature steam</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"23\">\n            <div class=\"listen-mcq-num\">23</div>\n            <div class=\"listen-mcq-stem\">What negative effect did mineral salt crusting cause?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"A\"><input type=\"radio\" name=\"q23\" value=\"A\"> A. It corroded the copper drainage tubes</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"B\"><input type=\"radio\" name=\"q23\" value=\"B\"> B. It reflected sunlight and decreased heat absorption</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"C\"><input type=\"radio\" name=\"q23\" value=\"C\"> C. It created toxic fumes inside the condensation dome</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"24\">\n            <div class=\"listen-mcq-num\">24</div>\n            <div class=\"listen-mcq-stem\">How was the salt buildup problem resolved?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"A\"><input type=\"radio\" name=\"q24\" value=\"A\"> A. By scrubbing the basin manually every evening</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"B\"><input type=\"radio\" name=\"q24\" value=\"B\"> B. By installing an automatic siphon flush for brine</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"C\"><input type=\"radio\" name=\"q24\" value=\"C\"> C. By adding chemical water-softening agents</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"25\">\n            <div class=\"listen-mcq-num\">25</div>\n            <div class=\"listen-mcq-stem\">Why was actual water output lower than the simulated prediction?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"A\"><input type=\"radio\" name=\"q25\" value=\"A\"> A. Leaks in the silicone sealant joints</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"B\"><input type=\"radio\" name=\"q25\" value=\"B\"> B. Insufficient sunlight during winter months</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"C\"><input type=\"radio\" name=\"q25\" value=\"C\"> C. Wind cooling the exterior surface of the glass</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"26\">\n            <div class=\"listen-mcq-num\">26</div>\n            <div class=\"listen-mcq-stem\">What did the professor consider Chloe and Liam's workaround to be?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"A\"><input type=\"radio\" name=\"q26\" value=\"A\"> A. An acceptable compromise for short-term trials</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"B\"><input type=\"radio\" name=\"q26\" value=\"B\"> B. An excellent engineering solution to mineral crusting</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"C\"><input type=\"radio\" name=\"q26\" value=\"C\"> C. A potential safety hazard requiring redesign</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"27\">\n            <div class=\"listen-mcq-num\">27</div>\n            <div class=\"listen-mcq-stem\">Who will write the sensor methodology section?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"A\"><input type=\"radio\" name=\"q27\" value=\"A\"> A. Chloe</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"B\"><input type=\"radio\" name=\"q27\" value=\"B\"> B. Liam</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"C\"><input type=\"radio\" name=\"q27\" value=\"C\"> C. Both Chloe and Liam</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"28\">\n            <div class=\"listen-mcq-num\">28</div>\n            <div class=\"listen-mcq-stem\">Who will create the efficiency graphs and thermodynamic charts?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"A\"><input type=\"radio\" name=\"q28\" value=\"A\"> A. Chloe</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"B\"><input type=\"radio\" name=\"q28\" value=\"B\"> B. Liam</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"C\"><input type=\"radio\" name=\"q28\" value=\"C\"> C. Both Chloe and Liam</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"29\">\n            <div class=\"listen-mcq-num\">29</div>\n            <div class=\"listen-mcq-stem\">Who will conduct the cost comparison against reverse osmosis?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"A\"><input type=\"radio\" name=\"q29\" value=\"A\"> A. Chloe</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"B\"><input type=\"radio\" name=\"q29\" value=\"B\"> B. Liam</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"C\"><input type=\"radio\" name=\"q29\" value=\"C\"> C. Both Chloe and Liam</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"30\">\n            <div class=\"listen-mcq-num\">30</div>\n            <div class=\"listen-mcq-stem\">Who will write the final conclusions and recommendations?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"A\"><input type=\"radio\" name=\"q30\" value=\"A\"> A. Chloe</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"B\"><input type=\"radio\" name=\"q30\" value=\"B\"> B. Liam</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"C\"><input type=\"radio\" name=\"q30\" value=\"C\"> C. Both Chloe and Liam</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 4,
        "title": "Part 4: Vernacular Earth Architecture & Desert Construction",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T2S4.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Vernacular Earth Architecture & Desert Construction</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Traditional desert builders predominantly used unfired earth known as <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">31</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"31\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Thick earthen walls are effective because of their high <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">32</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"32\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Transmission of daytime radiant heat is delayed by ten to twelve <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">33</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"33\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Stored heat is released into rooms during chilly desert <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">34</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"34\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Passive natural cooling is captured using aerodynamic <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">35</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"35\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Dense cool nocturnal air is gathered inside the central <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">36</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"36\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Direct solar exposure on exterior walls is minimized by providing <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">37</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"37\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Wall surfaces were rendered with breathable <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">38</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"38\" autocomplete=\"off\" /></span> plaster</li><li><span class=\"listen-bullet\">&bull;</span> Resistance against sudden flash flooding was achieved by building on <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">39</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"39\" autocomplete=\"off\" /></span> foundations</li><li><span class=\"listen-bullet\">&bull;</span> Modern architects value earth architecture as a template for <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">40</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"40\" autocomplete=\"off\" /></span> buildings</li></ul></div></div>"
      }
    ]
  },
  "6a929351e2d325da96e191f5": {
    "testId": "6a929351e2d325da96e191f5",
    "testNumber": 3,
    "title": "Recent Real Test Set 1 Listening Test 3",
    "candidateName": "Abraham Rifat",
    "totalQuestions": 40,
    "durationMinutes": 30,
    "answerKeys": {
      "1": [
        "vegetarian",
        "strictly vegetarian"
      ],
      "2": [
        "private",
        "private bathroom"
      ],
      "3": [
        "5 minutes",
        "5 mins",
        "five minutes"
      ],
      "4": [
        "180",
        "£180",
        "180 pounds"
      ],
      "5": [
        "Henderson",
        "HENDERSON",
        "henderson"
      ],
      "6": [
        "07700 900521",
        "07700900521"
      ],
      "7": [
        "desk",
        "study desk",
        "large desk"
      ],
      "8": [
        "garden",
        "patio garden"
      ],
      "9": [
        "14th September",
        "14 September",
        "September 14",
        "September 14th"
      ],
      "10": [
        "key",
        "electronic key"
      ],
      "11": [
        "B",
        "b"
      ],
      "12": [
        "B",
        "b"
      ],
      "13": [
        "A",
        "a"
      ],
      "14": [
        "B",
        "b"
      ],
      "15": [
        "A",
        "a"
      ],
      "16": [
        "B",
        "b"
      ],
      "17": [
        "C",
        "c"
      ],
      "18": [
        "D",
        "d"
      ],
      "19": [
        "E",
        "e"
      ],
      "20": [
        "F",
        "f"
      ],
      "21": [
        "B",
        "b"
      ],
      "22": [
        "A",
        "a"
      ],
      "23": [
        "C",
        "c"
      ],
      "24": [
        "A",
        "a"
      ],
      "25": [
        "B",
        "b"
      ],
      "26": [
        "B",
        "b"
      ],
      "27": [
        "A",
        "a",
        "Maya"
      ],
      "28": [
        "B",
        "b",
        "Sam"
      ],
      "29": [
        "A",
        "a",
        "Maya"
      ],
      "30": [
        "C",
        "c",
        "Both",
        "Both Maya and Sam"
      ],
      "31": [
        "marsupial"
      ],
      "32": [
        "scavengers",
        "scavenger"
      ],
      "33": [
        "vectors",
        "vector"
      ],
      "34": [
        "cancer",
        "tumour"
      ],
      "35": [
        "biting",
        "face biting"
      ],
      "36": [
        "diversity",
        "variation"
      ],
      "37": [
        "foreign",
        "alien"
      ],
      "38": [
        "islands",
        "island"
      ],
      "39": [
        "antibodies",
        "antibody"
      ],
      "40": [
        "ecosystems",
        "ecosystem"
      ]
    },
    "explanations": {
      "1": "The student specifies: 'I am strictly vegetarian. I do not eat meat or fish.'",
      "2": "The student says: 'I would really prefer a private bathroom.'",
      "3": "The student says: 'Within 5 minutes walk of a regular bus stop.'",
      "4": "The student clarifies: 'I can afford up to 180 pounds per week.'",
      "5": "The advisor spells: 'H - E - N - D - E - R - S - O - N.'",
      "6": "The number provided is: '07700 900521'.",
      "7": "The student confirms: 'Specifically, I will need a large desk to set up my dual monitor computer.'",
      "8": "The advisor notes: 'They have a lovely south-facing garden with patio seating.'",
      "9": "The student confirms: 'My flight arrives on the 14th September.'",
      "10": "The advisor states: 'Mrs. Henderson will provide you with an electronic key on arrival.'",
      "11": "The manager explains: 'Our core operations are funded by municipal cultural grants and individual listener subscriptions.'",
      "12": "The manager highlights: 'No prior broadcast experience is required. We offer a four-week comprehensive course.'",
      "13": "The manager states: 'Volunteers who complete the introductory course commit to producing a two-hour weekly community interest show.'",
      "14": "The manager warns: 'Defamation or unauthorized copyrighted music playback will result in immediate suspension.'",
      "15": "The manager states: 'The Newsroom and wire terminal room is at Location A.'",
      "16": "The manager states: 'The glass door directly ahead takes you into the Master On-Air Studio at Location B.'",
      "17": "The manager states: 'The Green Room where guest interviewees wait before going live is located at Location C.'",
      "18": "The manager states: 'Off to your left, soundproofed with acoustic foam tiles, is the Audio Editing Suite at Location D.'",
      "19": "The manager states: 'Across from the newsroom, situated at Location E, is the Music Archive room.'",
      "20": "The manager states: 'Finally, the station Technical Server and transmission hub is located securely at the back at Location F.'",
      "21": "Maya and Sam explain: 'Direct visual sorting led to high false-positive rates with organic detritus... denser sand grains sank while synthetic polymers floated.'",
      "22": "Maya notes: 'Over sixty percent of the particles were micro-fibres from synthetic laundry textiles.'",
      "23": "Sam points out: 'The greatest concentrations... were found within the sheltered mangrove mudflats where water currents decelerate.'",
      "24": "Maya says: 'Airborne synthetic fibres shedding from our own clothing! We had to ban synthetic fleece jackets... and wear cotton coats.'",
      "25": "Sam clarifies: 'We also kept our petri dishes covered with glass watch-glasses whenever they weren't under active analysis.'",
      "26": "Dr. Reynolds remarks: 'Excellent scientific rigor.'",
      "27": "Maya volunteers: 'I will perform the spectrometer polymer identification tests.'",
      "28": "Sam notes: 'I will plot the geographic spatial distribution maps using GIS software.'",
      "29": "Maya states: 'I can also calculate the statistical significance of particle density relative to sewer outflows.'",
      "30": "Sam says: 'And both of us will jointly author the concluding discussion.'",
      "31": "The lecturer opens: 'The world's largest surviving carnivorous marsupial.'",
      "32": "The lecturer states: 'Devils fill a crucial ecological niche as apex scavengers.'",
      "33": "The lecturer mentions: 'Thereby cleansing landscapes of disease vectors.'",
      "34": "The lecturer explains: 'DFTD is unique: it is one of only three known transmissible cancers in nature.'",
      "35": "The lecturer highlights: 'Transferred directly between individuals during social face biting.'",
      "36": "The lecturer points out: 'Tasmanian devils exhibit remarkably low genetic diversity.'",
      "37": "The lecturer says: 'The devil's immune system fails to recognize the invading allograft tumour cells as foreign.'",
      "38": "The lecturer notes: 'Established insurance populations on predator-free offshore islands.'",
      "39": "The lecturer highlights: 'A small percentage of wild individuals have developed natural antibodies capable of suppressing tumour growth.'",
      "40": "The lecturer concludes: 'Restore balanced trophic ecosystems.'"
    },
    "parts": [
      {
        "partNumber": 1,
        "title": "Part 1: International Student Homestay Accommodation Enquiry",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T3S1.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>International Student Homestay Accommodation Enquiry</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Applicant's dietary requirement: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">1</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"1\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Preferred bathroom option: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">2</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"2\" autocomplete=\"off\" /></span> bathroom</li><li><span class=\"listen-bullet\">&bull;</span> Maximum walking distance to nearest bus stop: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">3</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"3\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Maximum weekly rental budget: £ <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">4</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"4\" autocomplete=\"off\" /></span> including meals</li><li><span class=\"listen-bullet\">&bull;</span> Host family surname: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">5</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"5\" autocomplete=\"off\" /></span> (spelt by speaker)</li><li><span class=\"listen-bullet\">&bull;</span> Host family direct contact number: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">6</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"6\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Essential bedroom study furniture requested: a large <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">7</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"7\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Outdoor property feature: south-facing <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">8</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"8\" autocomplete=\"off\" /></span> with patio seating</li><li><span class=\"listen-bullet\">&bull;</span> Proposed check-in / arrival date: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">9</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"9\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Method of household access: electronic <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">10</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"10\" autocomplete=\"off\" /></span></li></ul></div></div>"
      },
      {
        "partNumber": 2,
        "title": "Part 2: Community Radio Station Volunteer Broadcast Training",
        "instruction": "Answer Questions 11 to 20 based on the talk given by the radio station manager.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test3%20Part2.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 11 to 20 based on the talk given by the radio station manager.",
        "content": "<div class=\"listen-notes-card\"><h4>Community Radio Station Volunteer Broadcast Training</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"11\">\n            <div class=\"listen-mcq-num\">11</div>\n            <div class=\"listen-mcq-stem\">How is Harbour FM primarily funded?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"A\"><input type=\"radio\" name=\"q11\" value=\"A\"> A. Corporate sponsorship and commercial advertisements</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"B\"><input type=\"radio\" name=\"q11\" value=\"B\"> B. Municipal cultural grants and listener subscriptions</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"C\"><input type=\"radio\" name=\"q11\" value=\"C\"> C. University student union activity levies</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"12\">\n            <div class=\"listen-mcq-num\">12</div>\n            <div class=\"listen-mcq-stem\">What is required before joining the volunteer program?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"A\"><input type=\"radio\" name=\"q12\" value=\"A\"> A. At least one year of commercial radio experience</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"B\"><input type=\"radio\" name=\"q12\" value=\"B\"> B. No prior broadcast experience is needed</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"C\"><input type=\"radio\" name=\"q12\" value=\"C\"> C. A degree in journalism or media communications</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"13\">\n            <div class=\"listen-mcq-num\">13</div>\n            <div class=\"listen-mcq-stem\">What weekly time commitment is expected from graduates?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"A\"><input type=\"radio\" name=\"q13\" value=\"A\"> A. A two-hour weekly community interest show</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"B\"><input type=\"radio\" name=\"q13\" value=\"B\"> B. Five hours of overnight automated broadcasting</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"C\"><input type=\"radio\" name=\"q13\" value=\"C\"> C. Ten hours across weekend music shifts</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"14\">\n            <div class=\"listen-mcq-num\">14</div>\n            <div class=\"listen-mcq-stem\">What will result in immediate suspension?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"A\"><input type=\"radio\" name=\"q14\" value=\"A\"> A. Arriving ten minutes late for a shift</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"B\"><input type=\"radio\" name=\"q14\" value=\"B\"> B. Defamation or playing unauthorized copyrighted music</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"C\"><input type=\"radio\" name=\"q14\" value=\"C\"> C. Failing to answer incoming telephone listener calls</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"15\">\n            <div class=\"listen-mcq-num\">15</div>\n            <div class=\"listen-mcq-stem\">Newsroom and wire terminal room is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"A\"><input type=\"radio\" name=\"q15\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"B\"><input type=\"radio\" name=\"q15\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"C\"><input type=\"radio\" name=\"q15\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"D\"><input type=\"radio\" name=\"q15\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"E\"><input type=\"radio\" name=\"q15\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"F\"><input type=\"radio\" name=\"q15\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"16\">\n            <div class=\"listen-mcq-num\">16</div>\n            <div class=\"listen-mcq-stem\">Master On-Air Studio is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"A\"><input type=\"radio\" name=\"q16\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"B\"><input type=\"radio\" name=\"q16\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"C\"><input type=\"radio\" name=\"q16\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"D\"><input type=\"radio\" name=\"q16\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"E\"><input type=\"radio\" name=\"q16\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"F\"><input type=\"radio\" name=\"q16\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"17\">\n            <div class=\"listen-mcq-num\">17</div>\n            <div class=\"listen-mcq-stem\">Green Room for interviewees is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"A\"><input type=\"radio\" name=\"q17\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"B\"><input type=\"radio\" name=\"q17\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"C\"><input type=\"radio\" name=\"q17\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"D\"><input type=\"radio\" name=\"q17\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"E\"><input type=\"radio\" name=\"q17\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"F\"><input type=\"radio\" name=\"q17\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"18\">\n            <div class=\"listen-mcq-num\">18</div>\n            <div class=\"listen-mcq-stem\">Audio Editing Suite is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"A\"><input type=\"radio\" name=\"q18\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"B\"><input type=\"radio\" name=\"q18\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"C\"><input type=\"radio\" name=\"q18\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"D\"><input type=\"radio\" name=\"q18\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"E\"><input type=\"radio\" name=\"q18\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"F\"><input type=\"radio\" name=\"q18\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"19\">\n            <div class=\"listen-mcq-num\">19</div>\n            <div class=\"listen-mcq-stem\">Music Archive room is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"A\"><input type=\"radio\" name=\"q19\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"B\"><input type=\"radio\" name=\"q19\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"C\"><input type=\"radio\" name=\"q19\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"D\"><input type=\"radio\" name=\"q19\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"E\"><input type=\"radio\" name=\"q19\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"F\"><input type=\"radio\" name=\"q19\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"20\">\n            <div class=\"listen-mcq-num\">20</div>\n            <div class=\"listen-mcq-stem\">Technical Server and transmission hub is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"A\"><input type=\"radio\" name=\"q20\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"B\"><input type=\"radio\" name=\"q20\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"C\"><input type=\"radio\" name=\"q20\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"D\"><input type=\"radio\" name=\"q20\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"E\"><input type=\"radio\" name=\"q20\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"F\"><input type=\"radio\" name=\"q20\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 3,
        "title": "Part 3: Ocean Microplastics Fieldwork & Laboratory Analysis Seminar",
        "instruction": "Answer Questions 21 to 30 based on the seminar between two biology students and Dr. Reynolds.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test3%20Part3.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 21 to 30 based on the seminar between two biology students and Dr. Reynolds.",
        "content": "<div class=\"listen-notes-card\"><h4>Ocean Microplastics Fieldwork & Laboratory Analysis Seminar</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"21\">\n            <div class=\"listen-mcq-num\">21</div>\n            <div class=\"listen-mcq-stem\">Why did Maya and Sam adopt hypersaline density separation?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"A\"><input type=\"radio\" name=\"q21\" value=\"A\"> A. It was cheaper than hiring specialized sieves</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"B\"><input type=\"radio\" name=\"q21\" value=\"B\"> B. Direct visual sorting produced high false positives from natural organic matter</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"C\"><input type=\"radio\" name=\"q21\" value=\"C\"> C. It completely dissolved all sand particles within minutes</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"22\">\n            <div class=\"listen-mcq-num\">22</div>\n            <div class=\"listen-mcq-stem\">What made up the majority of the recovered plastic particles?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"A\"><input type=\"radio\" name=\"q22\" value=\"A\"> A. Micro-fibres originating from synthetic clothing textiles</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"B\"><input type=\"radio\" name=\"q22\" value=\"B\"> B. Degraded fragments from single-use beverage containers</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"C\"><input type=\"radio\" name=\"q22\" value=\"C\"> C. Small beads from cosmetic exfoliation scrubs</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"23\">\n            <div class=\"listen-mcq-num\">23</div>\n            <div class=\"listen-mcq-stem\">Where was the highest concentration of microplastics discovered?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"A\"><input type=\"radio\" name=\"q23\" value=\"A\"> A. On rocky points exposed to severe wave impact</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"B\"><input type=\"radio\" name=\"q23\" value=\"B\"> B. Along popular sunbathing tourist beaches</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"C\"><input type=\"radio\" name=\"q23\" value=\"C\"> C. Inside sheltered mangrove mudflats where water slows</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"24\">\n            <div class=\"listen-mcq-num\">24</div>\n            <div class=\"listen-mcq-stem\">What major source of laboratory contamination did the students eliminate?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"A\"><input type=\"radio\" name=\"q24\" value=\"A\"> A. Airborne plastic fibres from their own synthetic clothing</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"B\"><input type=\"radio\" name=\"q24\" value=\"B\"> B. Tap water containing microscopic municipal additives</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"C\"><input type=\"radio\" name=\"q24\" value=\"C\"> C. Plastic residue on plastic pipettes and test tubes</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"25\">\n            <div class=\"listen-mcq-num\">25</div>\n            <div class=\"listen-mcq-stem\">How were samples protected while waiting for analysis?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"A\"><input type=\"radio\" name=\"q25\" value=\"A\"> A. Stored inside an airtight refrigerated freezer</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"B\"><input type=\"radio\" name=\"q25\" value=\"B\"> B. Covered with glass watch-glasses at all times</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"C\"><input type=\"radio\" name=\"q25\" value=\"C\"> C. Submerged in ethanol disinfectant liquid</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"26\">\n            <div class=\"listen-mcq-num\">26</div>\n            <div class=\"listen-mcq-stem\">How did Dr. Reynolds characterize the students' methodology?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"A\"><input type=\"radio\" name=\"q26\" value=\"A\"> A. Requiring several additional peer review checks</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"B\"><input type=\"radio\" name=\"q26\" value=\"B\"> B. Showing excellent scientific rigor and control</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"C\"><input type=\"radio\" name=\"q26\" value=\"C\"> C. Lacking sufficient sample sizes for broad claims</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"27\">\n            <div class=\"listen-mcq-num\">27</div>\n            <div class=\"listen-mcq-stem\">Who will run the spectrometer polymer classification tests?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"A\"><input type=\"radio\" name=\"q27\" value=\"A\"> A. Maya</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"B\"><input type=\"radio\" name=\"q27\" value=\"B\"> B. Sam</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"C\"><input type=\"radio\" name=\"q27\" value=\"C\"> C. Both Maya and Sam</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"28\">\n            <div class=\"listen-mcq-num\">28</div>\n            <div class=\"listen-mcq-stem\">Who will generate the GIS spatial maps?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"A\"><input type=\"radio\" name=\"q28\" value=\"A\"> A. Maya</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"B\"><input type=\"radio\" name=\"q28\" value=\"B\"> B. Sam</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"C\"><input type=\"radio\" name=\"q28\" value=\"C\"> C. Both Maya and Sam</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"29\">\n            <div class=\"listen-mcq-num\">29</div>\n            <div class=\"listen-mcq-stem\">Who will compute the sewer outflow statistical correlation?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"A\"><input type=\"radio\" name=\"q29\" value=\"A\"> A. Maya</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"B\"><input type=\"radio\" name=\"q29\" value=\"B\"> B. Sam</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"C\"><input type=\"radio\" name=\"q29\" value=\"C\"> C. Both Maya and Sam</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"30\">\n            <div class=\"listen-mcq-num\">30</div>\n            <div class=\"listen-mcq-stem\">Who will draft the municipal wastewater policy recommendations?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"A\"><input type=\"radio\" name=\"q30\" value=\"A\"> A. Maya</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"B\"><input type=\"radio\" name=\"q30\" value=\"B\"> B. Sam</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"C\"><input type=\"radio\" name=\"q30\" value=\"C\"> C. Both Maya and Sam</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 4,
        "title": "Part 4: Wildlife Conservation: The Tasmanian Devil & Immune Adaptation",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T3S4.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Wildlife Conservation: The Tasmanian Devil & Immune Adaptation</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> The Tasmanian devil is the largest living carnivorous <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">31</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"31\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> In their ecosystem, devils act primarily as apex <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">32</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"32\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Crushing bones cleans the habitat of potential disease <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">33</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"33\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Devil Facial Tumour Disease is an extremely rare transmissible <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">34</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"34\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Transmission takes place through social face <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">35</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"35\" autocomplete=\"off\" /></span> during mating or fighting</li><li><span class=\"listen-bullet\">&bull;</span> Susceptibility was exacerbated by historically low genetic <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">36</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"36\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> The devil's immune system fails to recognize tumour cells as <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">37</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"37\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Disease-free insurance colonies were introduced onto offshore <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">38</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"38\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Some wild devils have produced natural <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">39</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"39\" autocomplete=\"off\" /></span> that halt tumour growth</li><li><span class=\"listen-bullet\">&bull;</span> Successful conservation helps maintain healthy trophic <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">40</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"40\" autocomplete=\"off\" /></span></li></ul></div></div>"
      }
    ]
  },
  "6a929397e2d325da96e1920f": {
    "testId": "6a929397e2d325da96e1920f",
    "testNumber": 4,
    "title": "Recent Real Test Set 1 Listening Test 4",
    "candidateName": "Abraham Rifat",
    "totalQuestions": 40,
    "durationMinutes": 30,
    "answerKeys": {
      "1": [
        "sea view",
        "ocean view"
      ],
      "2": [
        "balcony",
        "private balcony"
      ],
      "3": [
        "2",
        "two",
        "2 bedrooms"
      ],
      "4": [
        "parking",
        "secure parking",
        "garage parking"
      ],
      "5": [
        "650",
        "£650",
        "650 pounds"
      ],
      "6": [
        "150",
        "£150",
        "150 pounds"
      ],
      "7": [
        "3 pm",
        "3:00 pm",
        "3pm",
        "15:00",
        "3.00 pm"
      ],
      "8": [
        "key safe",
        "lock box",
        "keysafe"
      ],
      "9": [
        "pets",
        "animals",
        "household pets"
      ],
      "10": [
        "8492"
      ],
      "11": [
        "B",
        "b"
      ],
      "12": [
        "B",
        "b"
      ],
      "13": [
        "A",
        "a"
      ],
      "14": [
        "B",
        "b"
      ],
      "15": [
        "A",
        "a"
      ],
      "16": [
        "B",
        "b"
      ],
      "17": [
        "C",
        "c"
      ],
      "18": [
        "D",
        "d"
      ],
      "19": [
        "E",
        "e"
      ],
      "20": [
        "F",
        "f"
      ],
      "21": [
        "A",
        "a"
      ],
      "22": [
        "B",
        "b"
      ],
      "23": [
        "A",
        "a"
      ],
      "24": [
        "B",
        "b"
      ],
      "25": [
        "B",
        "b"
      ],
      "26": [
        "B",
        "b"
      ],
      "27": [
        "A",
        "a",
        "Rachel"
      ],
      "28": [
        "B",
        "b",
        "Daniel"
      ],
      "29": [
        "A",
        "a",
        "Rachel"
      ],
      "30": [
        "C",
        "c",
        "Both",
        "Both Rachel and Daniel"
      ],
      "31": [
        "preservation",
        "meat preservation"
      ],
      "32": [
        "remedies",
        "medicines",
        "remedy"
      ],
      "33": [
        "Spice",
        "spice"
      ],
      "34": [
        "monsoon",
        "monsoons"
      ],
      "35": [
        "Venetian",
        "Venice"
      ],
      "36": [
        "joint-stock",
        "joint stock"
      ],
      "37": [
        "risk",
        "financial risk"
      ],
      "38": [
        "insurance",
        "marine insurance"
      ],
      "39": [
        "shipbuilding",
        "ship building"
      ],
      "40": [
        "capitalism",
        "global capitalism"
      ]
    },
    "explanations": {
      "1": "The caller confirms: 'We definitely want an apartment with an unobstructed sea view.'",
      "2": "The caller says: 'A private balcony where we can sit and have breakfast.'",
      "3": "The caller clarifies: 'Just 2 bedrooms—one master double and one twin room.'",
      "4": "The agent affirms: 'Guaranteed secure parking... included free in the underground garage.'",
      "5": "The agent states: 'For that week, the standard rental is 650 pounds.'",
      "6": "The agent states: 'There is a refundable deposit of 150 pounds.'",
      "7": "The agent informs: 'Guests can check in from 3 pm onwards.'",
      "8": "The agent explains: 'We have installed a secure key safe right by the main apartment door.'",
      "9": "The agent notes: 'The building bylaws specify strictly no pets permitted.'",
      "10": "The agent states: 'The entry code is 8492.'",
      "11": "The coordinator states: 'Riders simply download our mobile smartphone app or tap a contactless credit card.'",
      "12": "The coordinator explains: 'The first 30 minutes of every journey are completely free of charge.'",
      "13": "The coordinator notes: 'We have established sanitized helmet dropboxes at five major interchange stations.'",
      "14": "The coordinator notes: 'Equipped with puncture-resistant tires, integrated automatic front and rear dynamo LEDs.'",
      "15": "The coordinator states: 'You will find the City Hall docking station at Location A.'",
      "16": "The coordinator states: 'Over in the historic market square... is the Old Market hub at Location B.'",
      "17": "The coordinator states: 'Directly opposite Central Railway Station, at Location C, is our largest forty-dock hub.'",
      "18": "The coordinator states: 'Beside the pedestrian bridge is the Riverfront Esplanade station at Location D.'",
      "19": "The coordinator states: 'Next to the general hospital entrance is the Medical Centre station at Location E.'",
      "20": "The coordinator states: 'The Arts Campus docking hub is located at Location F.'",
      "21": "Rachel notes: 'The automotive sector's reliance on just-in-time manufacturing made it an acute case study.'",
      "22": "Daniel explains: 'The lead time to manufacture advanced microchips in specialized silicon fabrication cleanrooms is upwards of six months.'",
      "23": "Daniel observes: 'Thousands of empty shipping containers remained stranded in North American and European ports because consumer demand was one-directional.'",
      "24": "Rachel highlights: 'Shifting away from extreme lean inventory models toward just-in-case buffering, establishing decentralized regional distribution centres.'",
      "25": "The lecturer instructs: 'You should trim your technical manufacturing slides to stay within the twenty-minute limit.'",
      "26": "The lecturer praises: 'That is a well-researched argument.'",
      "27": "Rachel states: 'I will deliver the opening segment exploring macroeconomic shock factors.'",
      "28": "Daniel affirms: 'I will present the maritime logistics and container shortage data.'",
      "29": "Rachel confirms: 'I can also present the corporate risk mitigation strategies.'",
      "30": "Daniel states: 'And both of us will moderate the interactive audience question-and-answer session.'",
      "31": "The lecturer mentions: 'Spices possessed indispensable preservation properties for curing meat.'",
      "32": "The lecturer explains: 'While also serving as potent herbal remedies.'",
      "33": "The lecturer points out: 'Isolated tropical archipelagos like the Moluccas, or Spice Islands.'",
      "34": "The lecturer states: 'By mastering the seasonal shifts of monsoon winds.'",
      "35": "The lecturer highlights: 'Shattered the longstanding commercial monopoly held by the Venetian Republic.'",
      "36": "The lecturer explains: 'Merchants developed early joint-stock corporations.'",
      "37": "The lecturer notes: 'Investors pooled capital, distributing financial risk across entire fleets.'",
      "38": "The lecturer points out: 'Catalyzed the birth of modern marine insurance.'",
      "39": "The lecturer notes: 'Stimulated revolutionary advances in naval shipbuilding.'",
      "40": "The lecturer concludes: 'It established the earliest interconnected networks of modern global capitalism.'"
    },
    "parts": [
      {
        "partNumber": 1,
        "title": "Part 1: Holiday Apartment Booking - Bay View Residences",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T4S1.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Holiday Apartment Booking - Bay View Residences</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Client requested an apartment with a clear <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">1</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"1\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Desired outdoor feature: a private <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">2</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"2\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Number of bedrooms required: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">3</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"3\" autocomplete=\"off\" /></span> bedrooms</li><li><span class=\"listen-bullet\">&bull;</span> Vehicle amenity included: guaranteed secure <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">4</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"4\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Total weekly rental charge: £ <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">5</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"5\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Refundable security deposit amount: £ <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">6</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"6\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Earliest official check-in time: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">7</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"7\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Late key collection facility: secure <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">8</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"8\" autocomplete=\"off\" /></span> beside the door</li><li><span class=\"listen-bullet\">&bull;</span> Strict building prohibition on: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">9</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"9\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Outer foyer digital access code: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">10</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"10\" autocomplete=\"off\" /></span></li></ul></div></div>"
      },
      {
        "partNumber": 2,
        "title": "Part 2: Metropolitan CityBike Share Scheme Induction",
        "instruction": "Answer Questions 11 to 20 based on the talk given by the urban transport coordinator.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test4%20Part2.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 11 to 20 based on the talk given by the urban transport coordinator.",
        "content": "<div class=\"listen-notes-card\"><h4>Metropolitan CityBike Share Scheme Induction</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"11\">\n            <div class=\"listen-mcq-num\">11</div>\n            <div class=\"listen-mcq-stem\">How do users unlock CityBike bicycles?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"A\"><input type=\"radio\" name=\"q11\" value=\"A\"> A. Inserting a physical municipal metal key</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"B\"><input type=\"radio\" name=\"q11\" value=\"B\"> B. Using a smartphone application or contactless card</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"C\"><input type=\"radio\" name=\"q11\" value=\"C\"> C. Presenting an ID card to a docking station attendant</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"12\">\n            <div class=\"listen-mcq-num\">12</div>\n            <div class=\"listen-mcq-stem\">What is the fee policy for trips under 30 minutes?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"A\"><input type=\"radio\" name=\"q12\" value=\"A\"> A. A flat rate of two pounds</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"B\"><input type=\"radio\" name=\"q12\" value=\"B\"> B. Completely free of charge</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"C\"><input type=\"radio\" name=\"q12\" value=\"C\"> C. Half-price for registered commuters</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"13\">\n            <div class=\"listen-mcq-num\">13</div>\n            <div class=\"listen-mcq-stem\">Where can riders obtain sanitized helmets?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"A\"><input type=\"radio\" name=\"q13\" value=\"A\"> A. From helmet dropboxes at five major interchange hubs</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"B\"><input type=\"radio\" name=\"q13\" value=\"B\"> B. From local bicycle repair shops across town</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"C\"><input type=\"radio\" name=\"q13\" value=\"C\"> C. They must purchase their own helmets beforehand</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"14\">\n            <div class=\"listen-mcq-num\">14</div>\n            <div class=\"listen-mcq-stem\">What standard safety feature is built into every bike?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"A\"><input type=\"radio\" name=\"q14\" value=\"A\"> A. Rear-view mirrors and indicator lights</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"B\"><input type=\"radio\" name=\"q14\" value=\"B\"> B. Puncture-resistant tires and automatic dynamo LEDs</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"C\"><input type=\"radio\" name=\"q14\" value=\"C\"> C. Electronic speed governors limiting speed to 15 km/h</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"15\">\n            <div class=\"listen-mcq-num\">15</div>\n            <div class=\"listen-mcq-stem\">City Hall docking station is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"A\"><input type=\"radio\" name=\"q15\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"B\"><input type=\"radio\" name=\"q15\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"C\"><input type=\"radio\" name=\"q15\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"D\"><input type=\"radio\" name=\"q15\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"E\"><input type=\"radio\" name=\"q15\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"F\"><input type=\"radio\" name=\"q15\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"16\">\n            <div class=\"listen-mcq-num\">16</div>\n            <div class=\"listen-mcq-stem\">Old Market docking station is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"A\"><input type=\"radio\" name=\"q16\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"B\"><input type=\"radio\" name=\"q16\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"C\"><input type=\"radio\" name=\"q16\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"D\"><input type=\"radio\" name=\"q16\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"E\"><input type=\"radio\" name=\"q16\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"F\"><input type=\"radio\" name=\"q16\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"17\">\n            <div class=\"listen-mcq-num\">17</div>\n            <div class=\"listen-mcq-stem\">Central Railway Station docking hub is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"A\"><input type=\"radio\" name=\"q17\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"B\"><input type=\"radio\" name=\"q17\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"C\"><input type=\"radio\" name=\"q17\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"D\"><input type=\"radio\" name=\"q17\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"E\"><input type=\"radio\" name=\"q17\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"F\"><input type=\"radio\" name=\"q17\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"18\">\n            <div class=\"listen-mcq-num\">18</div>\n            <div class=\"listen-mcq-stem\">Riverfront Esplanade docking station is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"A\"><input type=\"radio\" name=\"q18\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"B\"><input type=\"radio\" name=\"q18\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"C\"><input type=\"radio\" name=\"q18\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"D\"><input type=\"radio\" name=\"q18\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"E\"><input type=\"radio\" name=\"q18\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"F\"><input type=\"radio\" name=\"q18\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"19\">\n            <div class=\"listen-mcq-num\">19</div>\n            <div class=\"listen-mcq-stem\">Medical Centre docking station is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"A\"><input type=\"radio\" name=\"q19\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"B\"><input type=\"radio\" name=\"q19\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"C\"><input type=\"radio\" name=\"q19\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"D\"><input type=\"radio\" name=\"q19\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"E\"><input type=\"radio\" name=\"q19\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"F\"><input type=\"radio\" name=\"q19\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"20\">\n            <div class=\"listen-mcq-num\">20</div>\n            <div class=\"listen-mcq-stem\">Arts Campus docking station is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"A\"><input type=\"radio\" name=\"q20\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"B\"><input type=\"radio\" name=\"q20\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"C\"><input type=\"radio\" name=\"q20\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"D\"><input type=\"radio\" name=\"q20\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"E\"><input type=\"radio\" name=\"q20\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"F\"><input type=\"radio\" name=\"q20\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 3,
        "title": "Part 3: Logistics & Global Supply Chains Presentation Review",
        "instruction": "Answer Questions 21 to 30 based on the seminar discussion between two business students and their lecturer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test4%20Part3.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 21 to 30 based on the seminar discussion between two business students and their lecturer.",
        "content": "<div class=\"listen-notes-card\"><h4>Logistics & Global Supply Chains Presentation Review</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"21\">\n            <div class=\"listen-mcq-num\">21</div>\n            <div class=\"listen-mcq-stem\">Why did Daniel and Rachel choose the semiconductor shortage case study?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"A\"><input type=\"radio\" name=\"q21\" value=\"A\"> A. It highlighted the vulnerability of lean just-in-time manufacturing</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"B\"><input type=\"radio\" name=\"q21\" value=\"B\"> B. Semiconductor fabrication is the cheapest manufacturing sector</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"C\"><input type=\"radio\" name=\"q21\" value=\"C\"> C. Automakers managed to resolve the shortage within two weeks</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"22\">\n            <div class=\"listen-mcq-num\">22</div>\n            <div class=\"listen-mcq-stem\">Why is expanding semiconductor production capacity slow?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"A\"><input type=\"radio\" name=\"q22\" value=\"A\"> A. Trade tariffs make exporting silicon illegal</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"B\"><input type=\"radio\" name=\"q22\" value=\"B\"> B. Fabrication in specialized cleanrooms requires over six months</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"C\"><input type=\"radio\" name=\"q22\" value=\"C\"> C. Lack of certified computer science graduates</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"23\">\n            <div class=\"listen-mcq-num\">23</div>\n            <div class=\"listen-mcq-stem\">What caused the severe global shipping container bottleneck?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"A\"><input type=\"radio\" name=\"q23\" value=\"A\"> A. Thousands of empty containers stranded by one-way consumer demand</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"B\"><input type=\"radio\" name=\"q23\" value=\"B\"> B. Massive shipwreck losses in the Atlantic Ocean</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"C\"><input type=\"radio\" name=\"q23\" value=\"C\"> C. New international shipping environmental taxes</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"24\">\n            <div class=\"listen-mcq-num\">24</div>\n            <div class=\"listen-mcq-stem\">How are businesses modifying their supply chain models?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"A\"><input type=\"radio\" name=\"q24\" value=\"A\"> A. Returning exclusively to local domestic manufacturing</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"B\"><input type=\"radio\" name=\"q24\" value=\"B\"> B. Adopting just-in-case buffering with regional distribution hubs</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"C\"><input type=\"radio\" name=\"q24\" value=\"C\"> C. Eliminating computerized inventory software</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"25\">\n            <div class=\"listen-mcq-num\">25</div>\n            <div class=\"listen-mcq-stem\">What advice did the lecturer give concerning their slide deck?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"A\"><input type=\"radio\" name=\"q25\" value=\"A\"> A. Add ten more historical slides from the 1970s</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"B\"><input type=\"radio\" name=\"q25\" value=\"B\"> B. Trim technical manufacturing slides to keep within time limits</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"C\"><input type=\"radio\" name=\"q25\" value=\"C\"> C. Include audio recordings from shipping executives</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"26\">\n            <div class=\"listen-mcq-num\">26</div>\n            <div class=\"listen-mcq-stem\">How did the lecturer evaluate the students' research?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"A\"><input type=\"radio\" name=\"q26\" value=\"A\"> A. Lacking sufficient statistical validation</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"B\"><input type=\"radio\" name=\"q26\" value=\"B\"> B. Well-researched with strong argumentative coherence</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"C\"><input type=\"radio\" name=\"q26\" value=\"C\"> C. Overly reliant on journalistic press articles</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"27\">\n            <div class=\"listen-mcq-num\">27</div>\n            <div class=\"listen-mcq-stem\">Who will present the macroeconomic shock opening?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"A\"><input type=\"radio\" name=\"q27\" value=\"A\"> A. Rachel</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"B\"><input type=\"radio\" name=\"q27\" value=\"B\"> B. Daniel</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"C\"><input type=\"radio\" name=\"q27\" value=\"C\"> C. Both Rachel and Daniel</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"28\">\n            <div class=\"listen-mcq-num\">28</div>\n            <div class=\"listen-mcq-stem\">Who will present the maritime logistics and container data?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"A\"><input type=\"radio\" name=\"q28\" value=\"A\"> A. Rachel</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"B\"><input type=\"radio\" name=\"q28\" value=\"B\"> B. Daniel</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"C\"><input type=\"radio\" name=\"q28\" value=\"C\"> C. Both Rachel and Daniel</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"29\">\n            <div class=\"listen-mcq-num\">29</div>\n            <div class=\"listen-mcq-stem\">Who will discuss corporate risk mitigation strategies?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"A\"><input type=\"radio\" name=\"q29\" value=\"A\"> A. Rachel</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"B\"><input type=\"radio\" name=\"q29\" value=\"B\"> B. Daniel</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"C\"><input type=\"radio\" name=\"q29\" value=\"C\"> C. Both Rachel and Daniel</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"30\">\n            <div class=\"listen-mcq-num\">30</div>\n            <div class=\"listen-mcq-stem\">Who will manage the audience Q&A session?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"A\"><input type=\"radio\" name=\"q30\" value=\"A\"> A. Rachel</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"B\"><input type=\"radio\" name=\"q30\" value=\"B\"> B. Daniel</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"C\"><input type=\"radio\" name=\"q30\" value=\"C\"> C. Both Rachel and Daniel</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 4,
        "title": "Part 4: Global Spice and Silk Maritime Trade Networks",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T4S4.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Global Spice and Silk Maritime Trade Networks</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Spices were crucial before modern refrigeration for their food <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">31</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"31\" autocomplete=\"off\" /></span> properties</li><li><span class=\"listen-bullet\">&bull;</span> Beyond seasoning, spices were used widely as herbal <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">32</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"32\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> The Moluccas were famously nicknamed the <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">33</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"33\" autocomplete=\"off\" /></span> Islands</li><li><span class=\"listen-bullet\">&bull;</span> Indian Ocean navigation depended on seasonal shifts of <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">34</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"34\" autocomplete=\"off\" /></span> winds</li><li><span class=\"listen-bullet\">&bull;</span> Vasco da Gama's oceanic route broke the monopoly of the <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">35</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"35\" autocomplete=\"off\" /></span> Republic</li><li><span class=\"listen-bullet\">&bull;</span> High-risk oceanic voyages were funded by establishing <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">36</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"36\" autocomplete=\"off\" /></span> corporations</li><li><span class=\"listen-bullet\">&bull;</span> Pooling financial capital was engineered to distribute merchant <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">37</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"37\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> The trade gave rise to specialized commodity exchanges and marine <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">38</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"38\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Maritime expansion stimulated major breakthroughs in naval <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">39</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"39\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> The spice commerce established the pioneering foundations of global <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">40</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"40\" autocomplete=\"off\" /></span></li></ul></div></div>"
      }
    ]
  },
  "6aafe217e00e988923dc149d": {
    "testId": "6aafe217e00e988923dc149d",
    "testNumber": 5,
    "title": "Recent Real Test Set 2 Listening Test 1",
    "candidateName": "Abraham Rifat",
    "totalQuestions": 40,
    "durationMinutes": 30,
    "answerKeys": {
      "1": [
        "first aid",
        "first-aid"
      ],
      "2": [
        "swimming",
        "swimming instructor"
      ],
      "3": [
        "July",
        "july"
      ],
      "4": [
        "Gallagher",
        "GALLAGHER",
        "gallagher"
      ],
      "5": [
        "07911 345678",
        "07911345678"
      ],
      "6": [
        "archery",
        "target archery"
      ],
      "7": [
        "medium",
        "size medium"
      ],
      "8": [
        "vegetarian"
      ],
      "9": [
        "tent",
        "staff tent"
      ],
      "10": [
        "background check",
        "criminal record",
        "police check"
      ],
      "11": [
        "B",
        "b"
      ],
      "12": [
        "B",
        "b"
      ],
      "13": [
        "A",
        "a"
      ],
      "14": [
        "B",
        "b"
      ],
      "15": [
        "A",
        "a"
      ],
      "16": [
        "B",
        "b"
      ],
      "17": [
        "C",
        "c"
      ],
      "18": [
        "D",
        "d"
      ],
      "19": [
        "E",
        "e"
      ],
      "20": [
        "F",
        "f"
      ],
      "21": [
        "B",
        "b"
      ],
      "22": [
        "A",
        "a"
      ],
      "23": [
        "B",
        "b"
      ],
      "24": [
        "B",
        "b"
      ],
      "25": [
        "B",
        "b"
      ],
      "26": [
        "B",
        "b"
      ],
      "27": [
        "A",
        "a",
        "Jessica"
      ],
      "28": [
        "B",
        "b",
        "Oliver"
      ],
      "29": [
        "A",
        "a",
        "Jessica"
      ],
      "30": [
        "C",
        "c",
        "Both",
        "Both Jessica and Oliver"
      ],
      "31": [
        "phoneme",
        "phonetic contrast",
        "phonemes"
      ],
      "32": [
        "months",
        "ten months"
      ],
      "33": [
        "parentese",
        "motherese"
      ],
      "34": [
        "vowels",
        "vowel sounds"
      ],
      "35": [
        "canonical",
        "canonical babbling"
      ],
      "36": [
        "explosion",
        "vocabulary explosion"
      ],
      "37": [
        "day",
        "each day"
      ],
      "38": [
        "attention",
        "joint attention"
      ],
      "39": [
        "neurons",
        "mirror neurons"
      ],
      "40": [
        "construction",
        "development"
      ]
    },
    "explanations": {
      "1": "The applicant states: 'I hold an up-to-date first aid certificate issued by the Red Cross.'",
      "2": "The applicant mentions: 'I am a certified swimming instructor with three years of coaching experience.'",
      "3": "The applicant confirms: 'I am fully available from the beginning of July.'",
      "4": "The applicant spells: 'G - A - L - L - A - G - H - E - R.'",
      "5": "The number provided is: '07911 345678'.",
      "6": "The applicant says: 'I have taught target archery to teenage groups.'",
      "7": "The applicant answers: 'A medium size fits me well.'",
      "8": "The applicant confirms: 'I follow a vegetarian diet.'",
      "9": "The applicant says: 'I would prefer a tent in the forest grove.'",
      "10": "The director states: 'All applicants must submit a clean police background check.'",
      "11": "The curator explains: 'Over forty percent of our exhibits now feature tactile interactive stations with braille labels and multi-sensory sound effects.'",
      "12": "The curator notes: 'Our star addition is the state-of-the-art digital planetarium dome.'",
      "13": "The curator affirms: 'All state-funded primary schools receive free weekday admission for pupils and teachers.'",
      "14": "The curator explains: 'We have implemented timed entry passes reserved through our online ticketing portal.'",
      "15": "The curator states: 'To your immediate left at Location A is the Robotics Arena.'",
      "16": "The curator states: 'On the east side at Location B is the Planetarium Dome.'",
      "17": "The curator states: 'Directly ahead through the archway at Location C is the Earth & Geology Hall.'",
      "18": "The curator states: 'Along the western wall at Location D is the Hands-On Physics Lab.'",
      "19": "The curator states: 'Directly behind the geology hall at Location E is the Prehistoric Fossil Pavilion.'",
      "20": "The curator states: 'Finally, the Museum Cafe and terrace overlooking the public gardens is located at Location F.'",
      "21": "Oliver notes: 'Tidal stream energy offers absolute astronomical predictability—tides can be calculated centuries in advance.'",
      "22": "Jessica points out: 'Tidal turbines require titanium-reinforced composites and sacrificial zinc anodes.'",
      "23": "Oliver highlights: 'Because tidal turbine rotor blades turn at relatively low rotational velocities—around ten to fifteen revolutions per minute—seals easily detect and swim around them.'",
      "24": "Jessica states: 'Anchoring foundations... requires heavy catenary mooring chains that disturb benthic habitats during storms.'",
      "25": "Oliver explains: 'Tidal stream is at one hundred and twenty pounds due to smaller manufacturing economies of scale.'",
      "26": "The supervisor praises: 'Excellent technical synthesis.'",
      "27": "Jessica volunteers: 'I will write the fluid dynamic turbine blade efficiency section.'",
      "28": "Oliver confirms: 'I will model the mooring tether tension physics under fifty-year storm wave simulations.'",
      "29": "Jessica states: 'I can also compile the environmental impact assessment on migratory fish routes.'",
      "30": "Oliver notes: 'And both of us will write the final policy recommendation proposing government feed-in tariff subsidies.'",
      "31": "The lecturer explains: 'Newborn infants possess universal phoneme discrimination.'",
      "32": "The lecturer mentions: 'This universal capacity narrows by approximately ten months of age.'",
      "33": "The lecturer points out: 'Infant-directed speech, colloquially termed parentese.'",
      "34": "The lecturer highlights: 'Exaggerated intonation contours, and elongated vowels.'",
      "35": "The lecturer states: 'Infants enter the canonical babbling phase.'",
      "36": "The lecturer notes: 'Infants experience a rapid lexical explosion, acquiring new words at an astonishing rate.'",
      "37": "The lecturer highlights: 'At an astonishing rate of up to nine new vocabulary items per day.'",
      "38": "The lecturer states: 'Underpinning this cognitive leap is the emergence of joint attention.'",
      "39": "The lecturer explains: 'Furthermore, the activation of frontoparietal mirror neurons allows infants to map observed lip movements.'",
      "40": "The lecturer concludes: 'An active, socially guided neurobiological construction.'"
    },
    "parts": [
      {
        "partNumber": 1,
        "title": "Part 1: Summer Youth Camp Activity Coordinator Job Application",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T1S1.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Summer Youth Camp Activity Coordinator Job Application</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Applicant holds a certified qualification in <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">1</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"1\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Primary water sports coaching specialty: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">2</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"2\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Work availability begins in early <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">3</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"3\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Professional referee surname: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">4</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"4\" autocomplete=\"off\" /></span> (spelt by speaker)</li><li><span class=\"listen-bullet\">&bull;</span> Referee direct phone number: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">5</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"5\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Additional outdoor sport instructed: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">6</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"6\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Requested uniform shirt size: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">7</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"7\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Canteen dietary preference: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">8</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"8\" autocomplete=\"off\" /></span> diet</li><li><span class=\"listen-bullet\">&bull;</span> Preferred staff accommodation: a <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">9</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"9\" autocomplete=\"off\" /></span> in the grove</li><li><span class=\"listen-bullet\">&bull;</span> Compulsory document: a clean police <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">10</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"10\" autocomplete=\"off\" /></span> certificate</li></ul></div></div>"
      },
      {
        "partNumber": 2,
        "title": "Part 2: Science & Discovery Museum Redevelopment Tour",
        "instruction": "Answer Questions 11 to 20 based on the talk given by the museum education curator.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test1%20Part2.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 11 to 20 based on the talk given by the museum education curator.",
        "content": "<div class=\"listen-notes-card\"><h4>Science & Discovery Museum Redevelopment Tour</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"11\">\n            <div class=\"listen-mcq-num\">11</div>\n            <div class=\"listen-mcq-stem\">What accessibility feature was added to forty percent of exhibits?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"A\"><input type=\"radio\" name=\"q11\" value=\"A\"> A. Motorized wheelchair tracks through all halls</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"B\"><input type=\"radio\" name=\"q11\" value=\"B\"> B. Tactile interactive stations with braille and audio effects</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"C\"><input type=\"radio\" name=\"q11\" value=\"C\"> C. Sign-language holographic virtual tour guides</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"12\">\n            <div class=\"listen-mcq-num\">12</div>\n            <div class=\"listen-mcq-stem\">What is the new flagship feature of the museum?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"A\"><input type=\"radio\" name=\"q12\" value=\"A\"> A. An Olympic swimming discovery tank</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"B\"><input type=\"radio\" name=\"q12\" value=\"B\"> B. A digital planetarium dome with 360-degree projections</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"C\"><input type=\"radio\" name=\"q12\" value=\"C\"> C. A live indoor tropical rainforest greenhouse</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"13\">\n            <div class=\"listen-mcq-num\">13</div>\n            <div class=\"listen-mcq-stem\">What is the admission policy for state-funded primary schools?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"A\"><input type=\"radio\" name=\"q13\" value=\"A\"> A. Free weekday admission for students and teachers</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"B\"><input type=\"radio\" name=\"q13\" value=\"B\"> B. Half-price admission tickets during school holidays</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"C\"><input type=\"radio\" name=\"q13\" value=\"C\"> C. Free admission only for groups under ten children</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"14\">\n            <div class=\"listen-mcq-num\">14</div>\n            <div class=\"listen-mcq-stem\">How does the museum manage crowd congestion?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"A\"><input type=\"radio\" name=\"q14\" value=\"A\"> A. Closing the galleries every three hours for cleaning</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"B\"><input type=\"radio\" name=\"q14\" value=\"B\"> B. Requiring pre-booked timed entry passes online</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"C\"><input type=\"radio\" name=\"q14\" value=\"C\"> C. Limiting visitor stays to precisely sixty minutes</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"15\">\n            <div class=\"listen-mcq-num\">15</div>\n            <div class=\"listen-mcq-stem\">Robotics Arena is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"A\"><input type=\"radio\" name=\"q15\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"B\"><input type=\"radio\" name=\"q15\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"C\"><input type=\"radio\" name=\"q15\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"D\"><input type=\"radio\" name=\"q15\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"E\"><input type=\"radio\" name=\"q15\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"F\"><input type=\"radio\" name=\"q15\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"16\">\n            <div class=\"listen-mcq-num\">16</div>\n            <div class=\"listen-mcq-stem\">Planetarium Dome is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"A\"><input type=\"radio\" name=\"q16\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"B\"><input type=\"radio\" name=\"q16\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"C\"><input type=\"radio\" name=\"q16\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"D\"><input type=\"radio\" name=\"q16\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"E\"><input type=\"radio\" name=\"q16\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"F\"><input type=\"radio\" name=\"q16\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"17\">\n            <div class=\"listen-mcq-num\">17</div>\n            <div class=\"listen-mcq-stem\">Earth & Geology Hall is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"A\"><input type=\"radio\" name=\"q17\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"B\"><input type=\"radio\" name=\"q17\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"C\"><input type=\"radio\" name=\"q17\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"D\"><input type=\"radio\" name=\"q17\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"E\"><input type=\"radio\" name=\"q17\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"F\"><input type=\"radio\" name=\"q17\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"18\">\n            <div class=\"listen-mcq-num\">18</div>\n            <div class=\"listen-mcq-stem\">Hands-On Physics Lab is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"A\"><input type=\"radio\" name=\"q18\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"B\"><input type=\"radio\" name=\"q18\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"C\"><input type=\"radio\" name=\"q18\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"D\"><input type=\"radio\" name=\"q18\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"E\"><input type=\"radio\" name=\"q18\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"F\"><input type=\"radio\" name=\"q18\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"19\">\n            <div class=\"listen-mcq-num\">19</div>\n            <div class=\"listen-mcq-stem\">Prehistoric Fossil Pavilion is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"A\"><input type=\"radio\" name=\"q19\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"B\"><input type=\"radio\" name=\"q19\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"C\"><input type=\"radio\" name=\"q19\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"D\"><input type=\"radio\" name=\"q19\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"E\"><input type=\"radio\" name=\"q19\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"F\"><input type=\"radio\" name=\"q19\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"20\">\n            <div class=\"listen-mcq-num\">20</div>\n            <div class=\"listen-mcq-stem\">Museum Cafe and terrace is located at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"A\"><input type=\"radio\" name=\"q20\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"B\"><input type=\"radio\" name=\"q20\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"C\"><input type=\"radio\" name=\"q20\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"D\"><input type=\"radio\" name=\"q20\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"E\"><input type=\"radio\" name=\"q20\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"F\"><input type=\"radio\" name=\"q20\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 3,
        "title": "Part 3: Renewable Marine Energy: Offshore Wind vs Tidal Turbines",
        "instruction": "Answer Questions 21 to 30 based on the tutorial discussion between two engineering students and their supervisor.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test1%20Part3.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 21 to 30 based on the tutorial discussion between two engineering students and their supervisor.",
        "content": "<div class=\"listen-notes-card\"><h4>Renewable Marine Energy: Offshore Wind vs Tidal Turbines</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"21\">\n            <div class=\"listen-mcq-num\">21</div>\n            <div class=\"listen-mcq-stem\">What is the primary advantage of tidal stream power over offshore wind?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"A\"><input type=\"radio\" name=\"q21\" value=\"A\"> A. Tidal turbines are cheaper to assemble on land</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"B\"><input type=\"radio\" name=\"q21\" value=\"B\"> B. Tidal flows offer complete astronomical predictability centuries ahead</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"C\"><input type=\"radio\" name=\"q21\" value=\"C\"> C. Tidal power generates no underwater acoustic noise</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"22\">\n            <div class=\"listen-mcq-num\">22</div>\n            <div class=\"listen-mcq-stem\">How is electrochemical saltwater corrosion mitigated in subsea turbines?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"A\"><input type=\"radio\" name=\"q22\" value=\"A\"> A. Using titanium-reinforced composites and sacrificial zinc anodes</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"B\"><input type=\"radio\" name=\"q22\" value=\"B\"> B. Coating all structures in petroleum wax every month</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"C\"><input type=\"radio\" name=\"q22\" value=\"C\"> C. Building turbine casings exclusively out of recycled plastic</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"23\">\n            <div class=\"listen-mcq-num\">23</div>\n            <div class=\"listen-mcq-stem\">Why do subsea tidal turbines pose minimal strike hazard to marine mammals?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"A\"><input type=\"radio\" name=\"q23\" value=\"A\"> A. They are equipped with loud acoustic deterrent sirens</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"B\"><input type=\"radio\" name=\"q23\" value=\"B\"> B. Blades rotate slowly at ten to fifteen revolutions per minute</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"C\"><input type=\"radio\" name=\"q23\" value=\"C\"> C. Turbines are placed inside enclosed steel protective cages</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"24\">\n            <div class=\"listen-mcq-num\">24</div>\n            <div class=\"listen-mcq-stem\">What environmental disturbance is associated with floating wind turbines?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"A\"><input type=\"radio\" name=\"q24\" value=\"A\"> A. Massive thermal heat release warming surface seawater</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"B\"><input type=\"radio\" name=\"q24\" value=\"B\"> B. Heavy catenary mooring chains dragging across benthic habitats in storms</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"C\"><input type=\"radio\" name=\"q24\" value=\"C\"> C. Permanent electromagnetic disruption of seabird navigation</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"25\">\n            <div class=\"listen-mcq-num\">25</div>\n            <div class=\"listen-mcq-stem\">Why does tidal stream power currently exhibit a higher cost per megawatt-hour?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"A\"><input type=\"radio\" name=\"q25\" value=\"A\"> A. High international licensing fees</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"B\"><input type=\"radio\" name=\"q25\" value=\"B\"> B. Smaller manufacturing economies of scale</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"C\"><input type=\"radio\" name=\"q25\" value=\"C\"> C. Heavy electrical cable losses across long distances</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"26\">\n            <div class=\"listen-mcq-num\">26</div>\n            <div class=\"listen-mcq-stem\">How did the supervisor characterize the students' work?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"A\"><input type=\"radio\" name=\"q26\" value=\"A\"> A. Lacking rigorous hydrodynamic calculations</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"B\"><input type=\"radio\" name=\"q26\" value=\"B\"> B. An excellent technical synthesis of both technologies</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"C\"><input type=\"radio\" name=\"q26\" value=\"C\"> C. Requiring major restructuring before submission</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"27\">\n            <div class=\"listen-mcq-num\">27</div>\n            <div class=\"listen-mcq-stem\">Who will draft the turbine blade fluid dynamics section?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"A\"><input type=\"radio\" name=\"q27\" value=\"A\"> A. Jessica</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"B\"><input type=\"radio\" name=\"q27\" value=\"B\"> B. Oliver</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"C\"><input type=\"radio\" name=\"q27\" value=\"C\"> C. Both Jessica and Oliver</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"28\">\n            <div class=\"listen-mcq-num\">28</div>\n            <div class=\"listen-mcq-stem\">Who will simulate mooring tether tension under storm conditions?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"A\"><input type=\"radio\" name=\"q28\" value=\"A\"> A. Jessica</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"B\"><input type=\"radio\" name=\"q28\" value=\"B\"> B. Oliver</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"C\"><input type=\"radio\" name=\"q28\" value=\"C\"> C. Both Jessica and Oliver</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"29\">\n            <div class=\"listen-mcq-num\">29</div>\n            <div class=\"listen-mcq-stem\">Who will evaluate impacts on migratory fish routes?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"A\"><input type=\"radio\" name=\"q29\" value=\"A\"> A. Jessica</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"B\"><input type=\"radio\" name=\"q29\" value=\"B\"> B. Oliver</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"C\"><input type=\"radio\" name=\"q29\" value=\"C\"> C. Both Jessica and Oliver</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"30\">\n            <div class=\"listen-mcq-num\">30</div>\n            <div class=\"listen-mcq-stem\">Who will write the tariff subsidy policy recommendations?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"A\"><input type=\"radio\" name=\"q30\" value=\"A\"> A. Jessica</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"B\"><input type=\"radio\" name=\"q30\" value=\"B\"> B. Oliver</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"C\"><input type=\"radio\" name=\"q30\" value=\"C\"> C. Both Jessica and Oliver</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 4,
        "title": "Part 4: Infant Language Acquisition and Cognitive Development",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test1%20Part4.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Infant Language Acquisition and Cognitive Development</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Newborn infants possess the universal ability to discriminate any <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">31</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"31\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Phonetic specialization to the mother tongue occurs around ten <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">32</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"32\" autocomplete=\"off\" /></span> of age</li><li><span class=\"listen-bullet\">&bull;</span> Caregiver vocal modulation is termed infant-directed speech or <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">33</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"33\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Parentese features exaggerated intonation and elongated <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">34</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"34\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Repetitive consonant-vowel production at six months is known as <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">35</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"35\" autocomplete=\"off\" /></span> babbling</li><li><span class=\"listen-bullet\">&bull;</span> At 18 months, children undergo a dramatic lexical <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">36</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"36\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Word learning speed can reach up to nine words per <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">37</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"37\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Shared gaze coordination between infant and parent is called joint <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">38</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"38\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Mapping speech movements to motor cortex involves mirror <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">39</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"39\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Language mastery represents an active, socially guided neurobiological <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">40</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"40\" autocomplete=\"off\" /></span></li></ul></div></div>"
      }
    ]
  },
  "6aafe3cee00e988923dc1522": {
    "testId": "6aafe3cee00e988923dc1522",
    "testNumber": 6,
    "title": "Recent Real Test Set 2 Listening Test 2",
    "candidateName": "Abraham Rifat",
    "totalQuestions": 40,
    "durationMinutes": 30,
    "answerKeys": {
      "1": [
        "automatic",
        "an automatic"
      ],
      "2": [
        "unlimited",
        "unlimited mileage"
      ],
      "3": [
        "full insurance",
        "insurance",
        "comprehensive insurance"
      ],
      "4": [
        "booster seat",
        "seat",
        "child seat",
        "booster"
      ],
      "5": [
        "Terminal 2",
        "terminal 2",
        "Terminal two"
      ],
      "6": [
        "7",
        "seven",
        "7 days"
      ],
      "7": [
        "240",
        "£240",
        "240 pounds"
      ],
      "8": [
        "passport",
        "original passport"
      ],
      "9": [
        "petrol",
        "fuel"
      ],
      "10": [
        "0800 555 889",
        "0800555889"
      ],
      "11": [
        "A",
        "a"
      ],
      "12": [
        "B",
        "b"
      ],
      "13": [
        "B",
        "b"
      ],
      "14": [
        "B",
        "b"
      ],
      "15": [
        "A",
        "a"
      ],
      "16": [
        "B",
        "b"
      ],
      "17": [
        "C",
        "c"
      ],
      "18": [
        "D",
        "d"
      ],
      "19": [
        "E",
        "e"
      ],
      "20": [
        "F",
        "f"
      ],
      "21": [
        "B",
        "b"
      ],
      "22": [
        "B",
        "b"
      ],
      "23": [
        "A",
        "a"
      ],
      "24": [
        "B",
        "b"
      ],
      "25": [
        "B",
        "b"
      ],
      "26": [
        "C",
        "c",
        "35%"
      ],
      "27": [
        "A",
        "a",
        "Hannah"
      ],
      "28": [
        "B",
        "b",
        "Luke"
      ],
      "29": [
        "A",
        "a",
        "Hannah"
      ],
      "30": [
        "C",
        "c",
        "Both",
        "Both Hannah and Luke"
      ],
      "31": [
        "Leizu",
        "Lei Zu",
        "Xi Ling Shi"
      ],
      "32": [
        "mulberry",
        "white mulberry"
      ],
      "33": [
        "kilometre",
        "kilometer",
        "1 km"
      ],
      "34": [
        "sericin"
      ],
      "35": [
        "boiling",
        "hot",
        "boiling water"
      ],
      "36": [
        "execution",
        "death"
      ],
      "37": [
        "currency"
      ],
      "38": [
        "triangular",
        "prism"
      ],
      "39": [
        "strength",
        "tensile strength"
      ],
      "40": [
        "sutures",
        "stitches",
        "surgical sutures"
      ]
    },
    "explanations": {
      "1": "The customer specifies: 'I must have an automatic car.'",
      "2": "The customer says: 'We need a package with unlimited mileage.'",
      "3": "The customer confirms: 'We definitely want full insurance with zero deductible.'",
      "4": "The customer mentions: 'We will need a child booster seat for our five-year-old daughter.'",
      "5": "The customer confirms: 'We arrive at Terminal 2.'",
      "6": "The customer states: 'Exactly 7 days.'",
      "7": "The agent informs: 'The total cost... comes to 240 pounds.'",
      "8": "The agent notes: 'You must show your valid driving licence plus your original passport.'",
      "9": "The agent states: 'You must return the car with a full tank of petrol.'",
      "10": "The agent dictates: 'Our 24-hour emergency roadside assistance helpline is 0800 555 889.'",
      "11": "The coordinator notes: 'Lanes one to four are reserved for lap swimming from 6 am to 10 pm daily.'",
      "12": "The coordinator mentions: 'Includes a complimentary personal fitness assessment with an accredited instructor who will design a tailored 12-week workout regimen.'",
      "13": "The coordinator states: 'Must remember to shower before entering and sit on a clean dry towel at all times.'",
      "14": "The coordinator clarifies: 'Your hours of entry are restricted between 9 am and 4 pm on weekdays.'",
      "15": "The coordinator states: 'Adjacent to the pool on the far western wall is the Hydrotherapy Spa and sauna suite at Location A.'",
      "16": "The coordinator states: 'Above the gym on the mezzanine floor at Location B is the Yoga and Pilates Studio.'",
      "17": "The coordinator states: 'You enter the Olympic Swimming Pool at Location C.'",
      "18": "The coordinator states: 'You reach the Cardio & Strength Gymnasium at Location D.'",
      "19": "The coordinator states: 'Extending out into the eastern courtyard at Location E are our glass-backed Squash Courts.'",
      "20": "The coordinator states: 'Finally, our Health Juice Bar and lounge area is conveniently located at Location F.'",
      "21": "Luke explains: 'Roots hang freely in enclosed misting chambers... using ninety-five percent less water... avoids fungal pathogens.'",
      "22": "Luke notes: 'We deploy wavelength-tuned LED arrays emitting specific narrow bands of red and blue light tailored to chlorophyll A and B absorption peaks.'",
      "23": "Hannah points out: 'Vertical farms only achieve economic viability when cultivating high-margin crops like baby leafy greens, culinary herbs, and micro-vegetables.'",
      "24": "Luke states: 'Commodity grains... are simply unviable in vertical farming towers due to their low calorie-to-biomass ratio.'",
      "25": "The professor states: 'Perfectlys reasoned.'",
      "26": "Hannah notes: 'Cutting lighting cooling loads by thirty-five percent.'",
      "27": "Hannah volunteers: 'I will draft the nutritional bio-fortification and mineral uptake section.'",
      "28": "Luke states: 'I will calculate the HVAC thermal ventilation and dehumidification power requirements.'",
      "29": "Hannah says: 'I can also present the supply chain carbon footprint reduction compared to transcontinental trucking.'",
      "30": "Luke states: 'And both of us will assemble the automated robotic harvesting demonstration slides.'",
      "31": "The lecturer mentions: 'Legend attributes the discovery to Empress Leizu.'",
      "32": "The lecturer highlights: 'These delicate insects feed exclusively on the leaves of the white mulberry tree.'",
      "33": "The lecturer points out: 'A continuous proteinaceous filament up to one kilometre in length.'",
      "34": "The lecturer explains: 'Inner fibroin proteins held together by a gummy coating called sericin.'",
      "35": "The lecturer notes: 'Cocoons are immersed in boiling water. The heat dissolves the sticky sericin.'",
      "36": "The lecturer states: 'Guarded sericulture secrets under penalty of execution.'",
      "37": "The lecturer points out: 'Silk possessed extraordinary commercial value: it was accepted as standard currency for tax payments.'",
      "38": "The lecturer explains: 'Caused by the triangular cross-section of fibroin filaments, which acts like optical prisms.'",
      "39": "The lecturer states: 'Natural silk possesses astonishing tensile strength, exceeding that of high-tensile steel wire.'",
      "40": "The lecturer concludes: 'Engineered into biocompatible surgical sutures, artificial ligaments.'"
    },
    "parts": [
      {
        "partNumber": 1,
        "title": "Part 1: Airport Car Hire & Insurance Package Enquiry",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T2S1.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Airport Car Hire & Insurance Package Enquiry</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Customer requires a car with <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">1</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"1\" autocomplete=\"off\" /></span> transmission</li><li><span class=\"listen-bullet\">&bull;</span> Rental package must include <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">2</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"2\" autocomplete=\"off\" /></span> mileage</li><li><span class=\"listen-bullet\">&bull;</span> Requested coverage level: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">3</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"3\" autocomplete=\"off\" /></span> with zero deductible</li><li><span class=\"listen-bullet\">&bull;</span> Required accessory: a child <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">4</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"4\" autocomplete=\"off\" /></span> for a five-year-old</li><li><span class=\"listen-bullet\">&bull;</span> Vehicle pickup collection at airport: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">5</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"5\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Total duration of vehicle hire: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">6</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"6\" autocomplete=\"off\" /></span> days</li><li><span class=\"listen-bullet\">&bull;</span> Total all-inclusive rental price: £ <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">7</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"7\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Required photo ID beside driving licence: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">8</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"8\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Vehicle return rule: must have a full tank of <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">9</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"9\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> 24-hour emergency breakdown helpline: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">10</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"10\" autocomplete=\"off\" /></span></li></ul></div></div>"
      },
      {
        "partNumber": 2,
        "title": "Part 2: Riverside Sports & Fitness Complex Induction",
        "instruction": "Answer Questions 11 to 20 based on the talk given by the facilities coordinator.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test2%20Part2.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 11 to 20 based on the talk given by the facilities coordinator.",
        "content": "<div class=\"listen-notes-card\"><h4>Riverside Sports & Fitness Complex Induction</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"11\">\n            <div class=\"listen-mcq-num\">11</div>\n            <div class=\"listen-mcq-stem\">What is available for lap swimmers in the Olympic pool?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"A\"><input type=\"radio\" name=\"q11\" value=\"A\"> A. Lanes one to four reserved from 6 am to 10 pm daily</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"B\"><input type=\"radio\" name=\"q11\" value=\"B\"> B. The entire pool is reserved exclusively for swim teams</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"C\"><input type=\"radio\" name=\"q11\" value=\"C\"> C. Lap swimming is restricted to one hour per member per week</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"12\">\n            <div class=\"listen-mcq-num\">12</div>\n            <div class=\"listen-mcq-stem\">What complimentary benefit is provided with new memberships?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"A\"><input type=\"radio\" name=\"q12\" value=\"A\"> A. A free sports massage session every month</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"B\"><input type=\"radio\" name=\"q12\" value=\"B\"> B. A personal fitness assessment and tailored 12-week regimen</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"C\"><input type=\"radio\" name=\"q12\" value=\"C\"> C. A branded gym bag and high-protein supplement box</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"13\">\n            <div class=\"listen-mcq-num\">13</div>\n            <div class=\"listen-mcq-stem\">What rule must sauna users obey?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"A\"><input type=\"radio\" name=\"q13\" value=\"A\"> A. Wear athletic running shoes inside the sauna</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"B\"><input type=\"radio\" name=\"q13\" value=\"B\"> B. Shower first and sit on a clean dry towel at all times</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"C\"><input type=\"radio\" name=\"q13\" value=\"C\"> C. Remain inside for no longer than five minutes</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"14\">\n            <div class=\"listen-mcq-num\">14</div>\n            <div class=\"listen-mcq-stem\">What are the weekday entry hours for off-peak members?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"A\"><input type=\"radio\" name=\"q14\" value=\"A\"> A. From 6 am to 12 pm</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"B\"><input type=\"radio\" name=\"q14\" value=\"B\"> B. Between 9 am and 4 pm</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"C\"><input type=\"radio\" name=\"q14\" value=\"C\"> C. Only between 7 pm and 10 pm</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"15\">\n            <div class=\"listen-mcq-num\">15</div>\n            <div class=\"listen-mcq-stem\">Hydrotherapy Spa and sauna suite is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"A\"><input type=\"radio\" name=\"q15\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"B\"><input type=\"radio\" name=\"q15\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"C\"><input type=\"radio\" name=\"q15\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"D\"><input type=\"radio\" name=\"q15\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"E\"><input type=\"radio\" name=\"q15\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"F\"><input type=\"radio\" name=\"q15\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"16\">\n            <div class=\"listen-mcq-num\">16</div>\n            <div class=\"listen-mcq-stem\">Yoga and Pilates Studio is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"A\"><input type=\"radio\" name=\"q16\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"B\"><input type=\"radio\" name=\"q16\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"C\"><input type=\"radio\" name=\"q16\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"D\"><input type=\"radio\" name=\"q16\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"E\"><input type=\"radio\" name=\"q16\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"F\"><input type=\"radio\" name=\"q16\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"17\">\n            <div class=\"listen-mcq-num\">17</div>\n            <div class=\"listen-mcq-stem\">Olympic Swimming Pool is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"A\"><input type=\"radio\" name=\"q17\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"B\"><input type=\"radio\" name=\"q17\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"C\"><input type=\"radio\" name=\"q17\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"D\"><input type=\"radio\" name=\"q17\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"E\"><input type=\"radio\" name=\"q17\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"F\"><input type=\"radio\" name=\"q17\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"18\">\n            <div class=\"listen-mcq-num\">18</div>\n            <div class=\"listen-mcq-stem\">Cardio & Strength Gymnasium is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"A\"><input type=\"radio\" name=\"q18\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"B\"><input type=\"radio\" name=\"q18\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"C\"><input type=\"radio\" name=\"q18\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"D\"><input type=\"radio\" name=\"q18\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"E\"><input type=\"radio\" name=\"q18\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"F\"><input type=\"radio\" name=\"q18\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"19\">\n            <div class=\"listen-mcq-num\">19</div>\n            <div class=\"listen-mcq-stem\">Squash Courts are at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"A\"><input type=\"radio\" name=\"q19\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"B\"><input type=\"radio\" name=\"q19\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"C\"><input type=\"radio\" name=\"q19\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"D\"><input type=\"radio\" name=\"q19\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"E\"><input type=\"radio\" name=\"q19\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"F\"><input type=\"radio\" name=\"q19\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"20\">\n            <div class=\"listen-mcq-num\">20</div>\n            <div class=\"listen-mcq-stem\">Health Juice Bar and lounge is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"A\"><input type=\"radio\" name=\"q20\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"B\"><input type=\"radio\" name=\"q20\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"C\"><input type=\"radio\" name=\"q20\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"D\"><input type=\"radio\" name=\"q20\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"E\"><input type=\"radio\" name=\"q20\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"F\"><input type=\"radio\" name=\"q20\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 3,
        "title": "Part 3: Urban Agronomy Seminar: High-Density Vertical Farming",
        "instruction": "Answer Questions 21 to 30 based on the seminar discussion between two agronomy students and their professor.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test2%20Part3.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 21 to 30 based on the seminar discussion between two agronomy students and their professor.",
        "content": "<div class=\"listen-notes-card\"><h4>Urban Agronomy Seminar: High-Density Vertical Farming</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"21\">\n            <div class=\"listen-mcq-num\">21</div>\n            <div class=\"listen-mcq-stem\">Why did Hannah and Luke recommend aeroponic misting over hydroponics?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"A\"><input type=\"radio\" name=\"q21\" value=\"A\"> A. Aeroponic systems require no computerized electrical sensors</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"B\"><input type=\"radio\" name=\"q21\" value=\"B\"> B. Hanging roots in nutrient mist avoids fungal root rot and uses ninety-five percent less water</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"C\"><input type=\"radio\" name=\"q21\" value=\"C\"> C. Hydroponic systems cannot be installed indoors</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"22\">\n            <div class=\"listen-mcq-num\">22</div>\n            <div class=\"listen-mcq-stem\">How did the students cut energy consumption for artificial illumination?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"A\"><input type=\"radio\" name=\"q22\" value=\"A\"> A. Turning off lights during nighttime off-peak hours only</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"B\"><input type=\"radio\" name=\"q22\" value=\"B\"> B. Deploying wavelength-tuned red and blue LEDs matched to chlorophyll absorption</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"C\"><input type=\"radio\" name=\"q22\" value=\"C\"> C. Using mirrors to bounce street lighting into the warehouse</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"23\">\n            <div class=\"listen-mcq-num\">23</div>\n            <div class=\"listen-mcq-stem\">What crops are commercially viable in urban vertical farms?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"A\"><input type=\"radio\" name=\"q23\" value=\"A\"> A. High-margin baby greens, culinary herbs, and micro-vegetables</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"B\"><input type=\"radio\" name=\"q23\" value=\"B\"> B. Bulk staple commodity grains such as wheat and rice</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"C\"><input type=\"radio\" name=\"q23\" value=\"C\"> C. Large root tubers like potatoes and yams</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"24\">\n            <div class=\"listen-mcq-num\">24</div>\n            <div class=\"listen-mcq-stem\">Why are commodity cereal crops unsuitable for vertical farming?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"A\"><input type=\"radio\" name=\"q24\" value=\"A\"> A. They are poisonous when grown under artificial LEDs</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"B\"><input type=\"radio\" name=\"q24\" value=\"B\"> B. They have an unfavorable low calorie-to-biomass ratio</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"C\"><input type=\"radio\" name=\"q24\" value=\"C\"> C. Their seeds cannot germinate in aeroponic root mist</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"25\">\n            <div class=\"listen-mcq-num\">25</div>\n            <div class=\"listen-mcq-stem\">How did the professor evaluate the students' research logic?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"A\"><input type=\"radio\" name=\"q25\" value=\"A\"> A. Too speculative for practical implementation</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"B\"><input type=\"radio\" name=\"q25\" value=\"B\"> B. Perfectlys reasoned with sound commercial agronomic logic</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"C\"><input type=\"radio\" name=\"q25\" value=\"C\"> C. Lacking sufficient microbiological data</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"26\">\n            <div class=\"listen-mcq-num\">26</div>\n            <div class=\"listen-mcq-stem\">How much did tuned LEDs reduce lighting cooling loads?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"A\"><input type=\"radio\" name=\"q26\" value=\"A\"> A. Ten percent</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"B\"><input type=\"radio\" name=\"q26\" value=\"B\"> B. Twenty percent</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"C\"><input type=\"radio\" name=\"q26\" value=\"C\"> C. Thirty-five percent</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"27\">\n            <div class=\"listen-mcq-num\">27</div>\n            <div class=\"listen-mcq-stem\">Who will write the mineral uptake and nutritional section?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"A\"><input type=\"radio\" name=\"q27\" value=\"A\"> A. Hannah</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"B\"><input type=\"radio\" name=\"q27\" value=\"B\"> B. Luke</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"C\"><input type=\"radio\" name=\"q27\" value=\"C\"> C. Both Hannah and Luke</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"28\">\n            <div class=\"listen-mcq-num\">28</div>\n            <div class=\"listen-mcq-stem\">Who will compute HVAC power and dehumidification loads?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"A\"><input type=\"radio\" name=\"q28\" value=\"A\"> A. Hannah</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"B\"><input type=\"radio\" name=\"q28\" value=\"B\"> B. Luke</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"C\"><input type=\"radio\" name=\"q28\" value=\"C\"> C. Both Hannah and Luke</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"29\">\n            <div class=\"listen-mcq-num\">29</div>\n            <div class=\"listen-mcq-stem\">Who will present supply chain carbon reduction data?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"A\"><input type=\"radio\" name=\"q29\" value=\"A\"> A. Hannah</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"B\"><input type=\"radio\" name=\"q29\" value=\"B\"> B. Luke</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"C\"><input type=\"radio\" name=\"q29\" value=\"C\"> C. Both Hannah and Luke</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"30\">\n            <div class=\"listen-mcq-num\">30</div>\n            <div class=\"listen-mcq-stem\">Who will design the robotic harvesting demonstration slides?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"A\"><input type=\"radio\" name=\"q30\" value=\"A\"> A. Hannah</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"B\"><input type=\"radio\" name=\"q30\" value=\"B\"> B. Luke</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"C\"><input type=\"radio\" name=\"q30\" value=\"C\"> C. Both Hannah and Luke</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 4,
        "title": "Part 4: History and Manufacturing Techniques of Ancient Silk",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T2S4.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>History and Manufacturing Techniques of Ancient Silk</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Legend attributes the discovery of silk to Empress <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">31</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"31\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Silkworm caterpillars feed exclusively on white <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">32</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"32\" autocomplete=\"off\" /></span> leaves</li><li><span class=\"listen-bullet\">&bull;</span> A single intact cocoon can produce a filament up to one <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">33</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"33\" autocomplete=\"off\" /></span> long</li><li><span class=\"listen-bullet\">&bull;</span> The outer gummy protein binding silk filaments is called <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">34</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"34\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Sericin is dissolved by immersing cocoons in <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">35</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"35\" autocomplete=\"off\" /></span> water</li><li><span class=\"listen-bullet\">&bull;</span> Smuggling silkworm eggs abroad was punished by <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">36</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"36\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Silk was so valuable it served as standard state <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">37</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"37\" autocomplete=\"off\" /></span> for paying taxes</li><li><span class=\"listen-bullet\">&bull;</span> Natural shimmer is created because fibres have a <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">38</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"38\" autocomplete=\"off\" /></span> cross-section</li><li><span class=\"listen-bullet\">&bull;</span> Mechanically, silk possesses immense tensile <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">39</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"39\" autocomplete=\"off\" /></span> rivaling steel wire</li><li><span class=\"listen-bullet\">&bull;</span> Modern medicine uses silk fibroin for biocompatible surgical <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">40</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"40\" autocomplete=\"off\" /></span></li></ul></div></div>"
      }
    ]
  },
  "6aafeafde00e988923dc15f9": {
    "testId": "6aafeafde00e988923dc15f9",
    "testNumber": 7,
    "title": "Recent Real Test Set 2 Listening Test 3",
    "candidateName": "Abraham Rifat",
    "totalQuestions": 40,
    "durationMinutes": 30,
    "answerKeys": {
      "1": [
        "200",
        "two hundred",
        "200 attendees"
      ],
      "2": [
        "projector",
        "digital projector"
      ],
      "3": [
        "microphones",
        "microphone",
        "roving microphones"
      ],
      "4": [
        "buffet",
        "buffet luncheon"
      ],
      "5": [
        "vegetarian"
      ],
      "6": [
        "parking",
        "car parking",
        "parking spaces"
      ],
      "7": [
        "ramp",
        "stage ramp",
        "access ramp"
      ],
      "8": [
        "1200",
        "£1200",
        "1,200",
        "1200 pounds"
      ],
      "9": [
        "15th October",
        "15 October",
        "October 15",
        "October 15th"
      ],
      "10": [
        "deposit",
        "advance deposit"
      ],
      "11": [
        "B",
        "b"
      ],
      "12": [
        "A",
        "a"
      ],
      "13": [
        "B",
        "b"
      ],
      "14": [
        "B",
        "b"
      ],
      "15": [
        "A",
        "a"
      ],
      "16": [
        "B",
        "b"
      ],
      "17": [
        "C",
        "c"
      ],
      "18": [
        "D",
        "d"
      ],
      "19": [
        "E",
        "e"
      ],
      "20": [
        "F",
        "f"
      ],
      "21": [
        "B",
        "b"
      ],
      "22": [
        "B",
        "b"
      ],
      "23": [
        "A",
        "a"
      ],
      "24": [
        "B",
        "b"
      ],
      "25": [
        "B",
        "b"
      ],
      "26": [
        "A",
        "a"
      ],
      "27": [
        "A",
        "a",
        "Elena"
      ],
      "28": [
        "B",
        "b",
        "Marcus"
      ],
      "29": [
        "A",
        "a",
        "Elena"
      ],
      "30": [
        "C",
        "c",
        "Both",
        "Both Elena and Marcus"
      ],
      "31": [
        "decay",
        "radioactive decay"
      ],
      "32": [
        "boundaries",
        "margins"
      ],
      "33": [
        "kilometres",
        "kilometers",
        "km"
      ],
      "34": [
        "separator",
        "surface separator"
      ],
      "35": [
        "generators",
        "electromagnetic generators"
      ],
      "36": [
        "boiling",
        "boiling point"
      ],
      "37": [
        "emissions",
        "emission",
        "greenhouse emissions"
      ],
      "38": [
        "baseload",
        "base-load"
      ],
      "39": [
        "reinjection",
        "injection"
      ],
      "40": [
        "heating",
        "space heating"
      ]
    },
    "explanations": {
      "1": "The client confirms: 'We are planning for approximately 200 attendees.'",
      "2": "The client specifies: 'They will require a high-definition ceiling digital projector.'",
      "3": "The client mentions: 'Three roving microphones for audience questions.'",
      "4": "The client says: 'A hot and cold buffet luncheon served in the adjacent banquet suite.'",
      "5": "The client confirms: 'Around twenty delegates will need vegetarian meals.'",
      "6": "The manager says: 'We can allocate forty parking spaces in our underground car park.'",
      "7": "The client notes: 'We will need an access ramp to the stage.'",
      "8": "The client notes: 'The full-day hire charge is 1200 pounds.'",
      "9": "The client states: 'The event is on the 15th October.'",
      "10": "The manager informs: 'We require a twenty percent deposit payable upon confirmation.'",
      "11": "The ranger states: 'Please stay on the designated timber boardwalks at all times.'",
      "12": "The ranger notes: 'Thousands of rare migratory wading birds arrive from arctic Siberia to spend the winter in our sheltered lagoons.'",
      "13": "The ranger mentions: 'Constructed four specialized observation hides equipped with silent sliding glass ports and tripod mounts.'",
      "14": "The ranger clarifies: 'Dogs are strictly prohibited across the wetland sanctuary.'",
      "15": "The ranger states: 'Following the main boardwalk eastward... you reach the Bittern Reedbed Hide at Location A.'",
      "16": "The ranger states: 'Directly ahead on the lake promontory at Location B is the Kingfisher Observation Hide.'",
      "17": "The ranger states: 'At the northernmost bend of the river estuary is the Saltmarsh Lookout Tower at Location C.'",
      "18": "The ranger states: 'If you branch left onto the western woodland loop, you will find the Dragonfly Education Pond at Location D.'",
      "19": "The ranger states: 'Tucked into the sheltered alder woods at Location E is the Forest Ecology Pavilion.'",
      "20": "The ranger states: 'Finally, the Children's Discovery Play Trail is located safely near the parking lot at Location F.'",
      "21": "Elena states: 'Non-REM Stage 3 slow-wave sleep is biologically critical for declarative memory consolidation.'",
      "22": "Marcus points out: 'Delta waves synchronize between the hippocampus and the neocortex, essentially replaying the day's newly acquired factual experiences.'",
      "23": "Elena reports: 'Participants restricted to four hours of nocturnal sleep... showed a thirty-two percent decline in working memory capacity.'",
      "24": "Marcus observes: 'Their subjective self-assessment of alertness did not match their cognitive deficit; they believed they were performing adequately when reaction times had slowed.'",
      "25": "Elena explains: 'Fast sleep spindles... correlated strongly with the retention of procedural motor skills, like learning a complex piano sequence.'",
      "26": "Dr. Chen praises: 'Outstanding synthesis of current neuroscience literature... commendable standard of scholarship.'",
      "27": "Elena states: 'I will write the neurophysiological mechanism section covering delta waves and hippocampal replay.'",
      "28": "Marcus confirms: 'I will generate the polysomnography spectrogram charts and statistical regression plots.'",
      "29": "Elena says: 'I can also analyze the clinical implications for sleep hygiene in university undergraduates.'",
      "30": "Marcus states: 'And together we will author the concluding discussion on sleep interventions.'",
      "31": "The lecturer mentions: 'Radioactive decay of potassium, thorium, and uranium generates intense subterranean heat.'",
      "32": "The lecturer explains: 'Particularly along tectonic plate boundaries known as the Pacific Ring of Fire.'",
      "33": "The lecturer points out: 'Production wells reaching depths of up to three to four kilometres.'",
      "34": "The lecturer states: 'Low-pressure surface separator vessels, it instantaneously vaporizes into dry steam.'",
      "35": "The lecturer explains: 'This expanding steam drives high-velocity turbine rotors, which spin electromagnetic generators.'",
      "36": "The lecturer points out: 'Secondary working fluid with a much lower boiling point, such as isobutane.'",
      "37": "The lecturer states: 'Releasing zero atmospheric emissions.'",
      "38": "The lecturer highlights: 'Geothermal power provides continuous baseload electricity twenty-four hours a day.'",
      "39": "The lecturer points out: 'Injected back into the reservoir via deep reinjection wells.'",
      "40": "The lecturer concludes: 'Fulfills over ninety percent of domestic space heating.'"
    },
    "parts": [
      {
        "partNumber": 1,
        "title": "Part 1: Corporate Conference Hall & Event Venue Booking",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T3S1.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Corporate Conference Hall & Event Venue Booking</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Number of conference delegates expected: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">1</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"1\" autocomplete=\"off\" /></span> attendees</li><li><span class=\"listen-bullet\">&bull;</span> Keynote presentation equipment: high-definition ceiling <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">2</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"2\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Audio equipment for audience interaction: roving <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">3</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"3\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Luncheon format: hot and cold <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">4</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"4\" autocomplete=\"off\" /></span> luncheon</li><li><span class=\"listen-bullet\">&bull;</span> Dietary provision required for 20 delegates: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">5</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"5\" autocomplete=\"off\" /></span> meals</li><li><span class=\"listen-bullet\">&bull;</span> Underground amenity provided for 40 vehicles: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">6</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"6\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Stage accessibility modification required: an access <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">7</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"7\" autocomplete=\"off\" /></span> for wheelchair access</li><li><span class=\"listen-bullet\">&bull;</span> Total full-day auditorium hire charge: £ <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">8</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"8\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Symposium event date: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">9</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"9\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Payment condition: twenty percent <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">10</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"10\" autocomplete=\"off\" /></span> upon confirmation</li></ul></div></div>"
      },
      {
        "partNumber": 2,
        "title": "Part 2: Blackwood Nature Reserve Visitor Briefing",
        "instruction": "Answer Questions 11 to 20 based on the talk given by the wildlife ranger.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test3%20Part2.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 11 to 20 based on the talk given by the wildlife ranger.",
        "content": "<div class=\"listen-notes-card\"><h4>Blackwood Nature Reserve Visitor Briefing</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"11\">\n            <div class=\"listen-mcq-num\">11</div>\n            <div class=\"listen-mcq-stem\">What is the primary visitor guideline regarding foot traffic?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"A\"><input type=\"radio\" name=\"q11\" value=\"A\"> A. Visitors may roam freely across the peat bog meadow</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"B\"><input type=\"radio\" name=\"q11\" value=\"B\"> B. Visitors must remain on the raised timber boardwalks at all times</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"C\"><input type=\"radio\" name=\"q11\" value=\"C\"> C. Walking is permitted only with a registered certified ranger</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"12\">\n            <div class=\"listen-mcq-num\">12</div>\n            <div class=\"listen-mcq-stem\">Why is autumn the most popular season for visits?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"A\"><input type=\"radio\" name=\"q12\" value=\"A\"> A. Thousands of arctic migratory wading birds arrive in the lagoon</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"B\"><input type=\"radio\" name=\"q12\" value=\"B\"> B. Wild orchids bloom throughout the forest pastures</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"C\"><input type=\"radio\" name=\"q12\" value=\"C\"> C. The reserve offers free hot beverages to all visitors</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"13\">\n            <div class=\"listen-mcq-num\">13</div>\n            <div class=\"listen-mcq-stem\">What features are installed inside the observation hides?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"A\"><input type=\"radio\" name=\"q13\" value=\"A\"> A. Infrared night cameras and automated sound recording</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"B\"><input type=\"radio\" name=\"q13\" value=\"B\"> B. Silent sliding glass ports and camera tripod mounts</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"C\"><input type=\"radio\" name=\"q13\" value=\"C\"> C. Heated viewing chairs and high-power spotlights</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"14\">\n            <div class=\"listen-mcq-num\">14</div>\n            <div class=\"listen-mcq-stem\">What is strictly prohibited on the reserve?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"A\"><input type=\"radio\" name=\"q14\" value=\"A\"> A. Bringing telephoto camera lenses</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"B\"><input type=\"radio\" name=\"q14\" value=\"B\"> B. Bringing dogs onto the wetland sanctuary</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"C\"><input type=\"radio\" name=\"q14\" value=\"C\"> C. Visiting during early morning hours</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"15\">\n            <div class=\"listen-mcq-num\">15</div>\n            <div class=\"listen-mcq-stem\">Bittern Reedbed Hide is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"A\"><input type=\"radio\" name=\"q15\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"B\"><input type=\"radio\" name=\"q15\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"C\"><input type=\"radio\" name=\"q15\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"D\"><input type=\"radio\" name=\"q15\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"E\"><input type=\"radio\" name=\"q15\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"F\"><input type=\"radio\" name=\"q15\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"16\">\n            <div class=\"listen-mcq-num\">16</div>\n            <div class=\"listen-mcq-stem\">Kingfisher Observation Hide is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"A\"><input type=\"radio\" name=\"q16\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"B\"><input type=\"radio\" name=\"q16\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"C\"><input type=\"radio\" name=\"q16\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"D\"><input type=\"radio\" name=\"q16\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"E\"><input type=\"radio\" name=\"q16\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"F\"><input type=\"radio\" name=\"q16\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"17\">\n            <div class=\"listen-mcq-num\">17</div>\n            <div class=\"listen-mcq-stem\">Saltmarsh Lookout Tower is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"A\"><input type=\"radio\" name=\"q17\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"B\"><input type=\"radio\" name=\"q17\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"C\"><input type=\"radio\" name=\"q17\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"D\"><input type=\"radio\" name=\"q17\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"E\"><input type=\"radio\" name=\"q17\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"F\"><input type=\"radio\" name=\"q17\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"18\">\n            <div class=\"listen-mcq-num\">18</div>\n            <div class=\"listen-mcq-stem\">Dragonfly Education Pond is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"A\"><input type=\"radio\" name=\"q18\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"B\"><input type=\"radio\" name=\"q18\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"C\"><input type=\"radio\" name=\"q18\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"D\"><input type=\"radio\" name=\"q18\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"E\"><input type=\"radio\" name=\"q18\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"F\"><input type=\"radio\" name=\"q18\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"19\">\n            <div class=\"listen-mcq-num\">19</div>\n            <div class=\"listen-mcq-stem\">Forest Ecology Pavilion is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"A\"><input type=\"radio\" name=\"q19\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"B\"><input type=\"radio\" name=\"q19\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"C\"><input type=\"radio\" name=\"q19\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"D\"><input type=\"radio\" name=\"q19\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"E\"><input type=\"radio\" name=\"q19\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"F\"><input type=\"radio\" name=\"q19\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"20\">\n            <div class=\"listen-mcq-num\">20</div>\n            <div class=\"listen-mcq-stem\">Children's Discovery Play Trail is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"A\"><input type=\"radio\" name=\"q20\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"B\"><input type=\"radio\" name=\"q20\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"C\"><input type=\"radio\" name=\"q20\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"D\"><input type=\"radio\" name=\"q20\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"E\"><input type=\"radio\" name=\"q20\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"F\"><input type=\"radio\" name=\"q20\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 3,
        "title": "Part 3: Neuroscience Seminar: Sleep Stages and Memory Consolidation",
        "instruction": "Answer Questions 21 to 30 based on the seminar discussion between two psychology students and Dr. Chen.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test3%20Part3.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 21 to 30 based on the seminar discussion between two psychology students and Dr. Chen.",
        "content": "<div class=\"listen-notes-card\"><h4>Neuroscience Seminar: Sleep Stages and Memory Consolidation</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"21\">\n            <div class=\"listen-mcq-num\">21</div>\n            <div class=\"listen-mcq-stem\">Why did Marcus and Elena prioritize non-REM Stage 3 slow-wave sleep?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"A\"><input type=\"radio\" name=\"q21\" value=\"A\"> A. It is the easiest sleep stage to interrupt in participants</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"B\"><input type=\"radio\" name=\"q21\" value=\"B\"> B. It is biologically critical for declarative memory consolidation</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"C\"><input type=\"radio\" name=\"q21\" value=\"C\"> C. It produces vivid emotional narrative dreams</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"22\">\n            <div class=\"listen-mcq-num\">22</div>\n            <div class=\"listen-mcq-stem\">What neural process takes place during slow-wave sleep delta oscillations?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"A\"><input type=\"radio\" name=\"q22\" value=\"A\"> A. Permanent pruning of the optic nerve receptors</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"B\"><input type=\"radio\" name=\"q22\" value=\"B\"> B. Replay of new experiences transferring from hippocampus to neocortex</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"C\"><input type=\"radio\" name=\"q22\" value=\"C\"> C. Complete cessation of cerebral blood flow</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"23\">\n            <div class=\"listen-mcq-num\">23</div>\n            <div class=\"listen-mcq-stem\">What happened to participants restricted to four hours of sleep?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"A\"><input type=\"radio\" name=\"q23\" value=\"A\"> A. They experienced a 32% decline in working memory capacity</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"B\"><input type=\"radio\" name=\"q23\" value=\"B\"> B. Their immune systems collapsed within 24 hours</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"C\"><input type=\"radio\" name=\"q23\" value=\"C\"> C. They scored higher in rapid creative problem-solving</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"24\">\n            <div class=\"listen-mcq-num\">24</div>\n            <div class=\"listen-mcq-stem\">What dissociation surprised the researchers?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"A\"><input type=\"radio\" name=\"q24\" value=\"A\"> A. Participants felt sleepy but performed exceptionally well</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"B\"><input type=\"radio\" name=\"q24\" value=\"B\"> B. Participants believed they were alert despite significant objective cognitive deficits</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"C\"><input type=\"radio\" name=\"q24\" value=\"C\"> C. Participants remembered long strings of numbers perfectly</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"25\">\n            <div class=\"listen-mcq-num\">25</div>\n            <div class=\"listen-mcq-stem\">What cognitive skill correlated with Stage 2 sleep spindles?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"A\"><input type=\"radio\" name=\"q25\" value=\"A\"> A. Memorizing foreign language vocabulary lists</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"B\"><input type=\"radio\" name=\"q25\" value=\"B\"> B. Retention of procedural motor skills like playing musical instruments</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"C\"><input type=\"radio\" name=\"q25\" value=\"C\"> C. Spatial 3D mental rotation tasks</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"26\">\n            <div class=\"listen-mcq-num\">26</div>\n            <div class=\"listen-mcq-stem\">How did Dr. Chen assess the students' performance?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"A\"><input type=\"radio\" name=\"q26\" value=\"A\"> A. Commendable scholarship showing outstanding literature synthesis</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"B\"><input type=\"radio\" name=\"q26\" value=\"B\"> B. Needing more participants before submitting</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"C\"><input type=\"radio\" name=\"q26\" value=\"C\"> C. Too theoretical with insufficient practical testing</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"27\">\n            <div class=\"listen-mcq-num\">27</div>\n            <div class=\"listen-mcq-stem\">Who will draft the neurophysiological mechanism section?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"A\"><input type=\"radio\" name=\"q27\" value=\"A\"> A. Elena</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"B\"><input type=\"radio\" name=\"q27\" value=\"B\"> B. Marcus</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"C\"><input type=\"radio\" name=\"q27\" value=\"C\"> C. Both Elena and Marcus</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"28\">\n            <div class=\"listen-mcq-num\">28</div>\n            <div class=\"listen-mcq-stem\">Who will create the polysomnography spectrogram charts?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"A\"><input type=\"radio\" name=\"q28\" value=\"A\"> A. Elena</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"B\"><input type=\"radio\" name=\"q28\" value=\"B\"> B. Marcus</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"C\"><input type=\"radio\" name=\"q28\" value=\"C\"> C. Both Elena and Marcus</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"29\">\n            <div class=\"listen-mcq-num\">29</div>\n            <div class=\"listen-mcq-stem\">Who will write the sleep hygiene clinical implications?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"A\"><input type=\"radio\" name=\"q29\" value=\"A\"> A. Elena</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"B\"><input type=\"radio\" name=\"q29\" value=\"B\"> B. Marcus</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"C\"><input type=\"radio\" name=\"q29\" value=\"C\"> C. Both Elena and Marcus</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"30\">\n            <div class=\"listen-mcq-num\">30</div>\n            <div class=\"listen-mcq-stem\">Who will write the concluding discussion on sleep interventions?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"A\"><input type=\"radio\" name=\"q30\" value=\"A\"> A. Elena</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"B\"><input type=\"radio\" name=\"q30\" value=\"B\"> B. Marcus</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"C\"><input type=\"radio\" name=\"q30\" value=\"C\"> C. Both Elena and Marcus</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 4,
        "title": "Part 4: Geothermal Power Generation and Volcanic Geology",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T3S4.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Geothermal Power Generation and Volcanic Geology</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Subterranean heat is continuously generated by radioactive <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">31</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"31\" autocomplete=\"off\" /></span> in the core</li><li><span class=\"listen-bullet\">&bull;</span> Geothermal activity is clustered along tectonic plate <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">32</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"32\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Commercial production wells are drilled down up to four <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">33</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"33\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Superheated liquid vaporizes into steam inside low-pressure <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">34</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"34\" autocomplete=\"off\" /></span> vessels</li><li><span class=\"listen-bullet\">&bull;</span> High-velocity steam drives turbine rotors to rotate <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">35</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"35\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Binary power stations employ a secondary working fluid with a lower <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">36</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"36\" autocomplete=\"off\" /></span> point</li><li><span class=\"listen-bullet\">&bull;</span> Closed-loop binary cycles produce zero atmospheric <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">37</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"37\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Unlike weather-dependent renewables, geothermal provides continuous <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">38</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"38\" autocomplete=\"off\" /></span> electricity</li><li><span class=\"listen-bullet\">&bull;</span> Ground subsidence is prevented by pumping water down deep <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">39</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"39\" autocomplete=\"off\" /></span> wells</li><li><span class=\"listen-bullet\">&bull;</span> In Iceland, geothermal energy fulfills ninety percent of domestic space <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">40</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"40\" autocomplete=\"off\" /></span></li></ul></div></div>"
      }
    ]
  },
  "6af1af3d33998c4e36358cc9": {
    "testId": "6af1af3d33998c4e36358cc9",
    "testNumber": 8,
    "title": "Recent Real Test Set 2 Listening Test 4",
    "candidateName": "Abraham Rifat",
    "totalQuestions": 40,
    "durationMinutes": 30,
    "answerKeys": {
      "1": [
        "utility bill",
        "bill",
        "council bill"
      ],
      "2": [
        "6",
        "six",
        "6 e-books"
      ],
      "3": [
        "wifi",
        "wi-fi",
        "free wifi"
      ],
      "4": [
        "local history",
        "history"
      ],
      "5": [
        "Tuesday",
        "tuesday"
      ],
      "6": [
        "10",
        "£10",
        "10 pounds"
      ],
      "7": [
        "headphones",
        "headphone"
      ],
      "8": [
        "8 pm",
        "8:00 pm",
        "8pm",
        "20:00",
        "8.00 pm"
      ],
      "9": [
        "mobile app",
        "app",
        "library app"
      ],
      "10": [
        "pin",
        "PIN",
        "pin number"
      ],
      "11": [
        "B",
        "b"
      ],
      "12": [
        "B",
        "b"
      ],
      "13": [
        "B",
        "b"
      ],
      "14": [
        "B",
        "b"
      ],
      "15": [
        "A",
        "a"
      ],
      "16": [
        "B",
        "b"
      ],
      "17": [
        "C",
        "c"
      ],
      "18": [
        "D",
        "d"
      ],
      "19": [
        "E",
        "e"
      ],
      "20": [
        "F",
        "f"
      ],
      "21": [
        "B",
        "b"
      ],
      "22": [
        "A",
        "a"
      ],
      "23": [
        "B",
        "b"
      ],
      "24": [
        "B",
        "b",
        "22%"
      ],
      "25": [
        "B",
        "b"
      ],
      "26": [
        "B",
        "b"
      ],
      "27": [
        "A",
        "a",
        "Fiona"
      ],
      "28": [
        "B",
        "b",
        "Bradley"
      ],
      "29": [
        "A",
        "a",
        "Fiona"
      ],
      "30": [
        "C",
        "c",
        "Both",
        "Both Fiona and Bradley"
      ],
      "31": [
        "Wood Wide",
        "wood wide",
        "Wood-Wide"
      ],
      "32": [
        "hyphae",
        "mycelium"
      ],
      "33": [
        "photosynthesis"
      ],
      "34": [
        "phosphorus",
        "phosphorous"
      ],
      "35": [
        "mother",
        "mother trees"
      ],
      "36": [
        "distress",
        "warning"
      ],
      "37": [
        "tannins",
        "tannin",
        "deterrents"
      ],
      "38": [
        "clear-cutting",
        "clearcutting",
        "clear cutting"
      ],
      "39": [
        "drought",
        "disease"
      ],
      "40": [
        "super-organisms",
        "superorganisms",
        "super organisms"
      ]
    },
    "explanations": {
      "1": "The caller confirms: 'I have a recent municipal council utility bill in my name.'",
      "2": "The librarian states: 'Up to 6 digital e-books at any one time.'",
      "3": "The librarian confirms: 'High-speed free wifi is accessible throughout the building.'",
      "4": "The librarian notes: 'We maintain our heritage local history archive.'",
      "5": "The librarian explains: 'Our adult literature group meets every Tuesday evening.'",
      "6": "The librarian states: 'Every new member receives 10 pounds in printing credit.'",
      "7": "The librarian notes: 'All users in the multimedia lab must bring their own headphones.'",
      "8": "The librarian informs: 'Open from 9 am until 8 pm Monday through Thursday.'",
      "9": "The librarian states: 'You can renew loans online using our library mobile app.'",
      "10": "The librarian explains: 'Your library card barcode and a four-digit personal pin number.'",
      "11": "The coordinator states: 'Our primary fieldwork this morning involves clearing fallen stone and repairing eroded footpaths damaged by recent winter storms.'",
      "12": "The coordinator explains: 'Invasive non-native plant species, specifically rhododendron ponticum, which blocks sunlight from native oak saplings.'",
      "13": "The coordinator notes: 'Which provide critical nesting crevices for lizards, weasels, and moss species.'",
      "14": "The coordinator mentions: 'Our team provides heavy-duty puncture-resistant work gloves and steel-capped waterproof boots.'",
      "15": "The coordinator states: 'You reach the Tool & Equipment Depot at Location A.'",
      "16": "The coordinator states: 'Tucked under the limestone crag at Location B is the Rest & Picnic Shelter.'",
      "17": "The coordinator states: 'Standing at the Main Volunteer Lodge at Location C.'",
      "18": "The coordinator states: 'Across the timber bridge over Alder Creek at Location D is the Native Tree Nursery.'",
      "19": "The coordinator states: 'Heading eastward along the ridge path to Location E, you will find the Wildlife Survey Hide.'",
      "20": "The coordinator states: 'Finally, the Emergency First Aid Station is situated at Location F.'",
      "21": "Fiona explains: 'Consumers frequently confuse biodegradable PLA with conventional recyclable plastics, leading to contamination in recycling streams.'",
      "22": "Bradley states: 'PLA only degrades under controlled industrial composting temperatures above fifty-five degrees Celsius.'",
      "23": "Fiona notes: 'Whereas seaweed alginate films dissolve harmlessly in ambient seawater within twelve weeks.'",
      "24": "Bradley notes: 'Only twenty-two percent were willing to pay a price premium exceeding ten percent at checkout.'",
      "25": "Fiona points out: 'Certified third-party logos like the Carbon Trust or FSC increased consumer trust by forty-five percent.'",
      "26": "The tutor praises: 'Strong data-driven insights.'",
      "27": "Fiona volunteers: 'I will present the life-cycle analysis comparing carbon footprints.'",
      "28": "Bradley states: 'I will deliver the market survey statistics and price sensitivity charts.'",
      "29": "Fiona says: 'I can also outline corporate policy recommendations for supermarkets.'",
      "30": "Bradley states: 'And both of us will moderate the interactive consumer blind taste test demonstrating edible packaging.'",
      "31": "The lecturer opens: 'Colloquially termed the Wood Wide Web.'",
      "32": "The lecturer mentions: 'Microscopic thread-like hyphae that colonize tree root systems.'",
      "33": "The lecturer points out: 'Produce abundant carbohydrates through foliar photosynthesis.'",
      "34": "The lecturer notes: 'Essential minerals, particularly phosphorus and nitrogen.'",
      "35": "The lecturer explains: 'Older, deeply rooted trees—termed \"mother trees\"—use the mycelial network to nurture younger saplings.'",
      "36": "The lecturer highlights: 'It transmits biochemical distress signals through the mycorrhizal network.'",
      "37": "The lecturer points out: 'Preemptively synthesize defensive chemical tannins and volatile deterrents.'",
      "38": "The lecturer warns: 'Modern industrial clear-cutting forestry practices obliterate these ancient fungal networks.'",
      "39": "The lecturer notes: 'Rendering replanted monoculture tree plantations highly vulnerable to drought and disease.'",
      "40": "The lecturer concludes: 'Recognizing forests not as collections of isolated individuals, but as collaborative super-organisms.'"
    },
    "parts": [
      {
        "partNumber": 1,
        "title": "Part 1: Community Public Library Registration & Digital Services",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T4S1.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Community Public Library Registration & Digital Services</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Acceptable proof of local address: a recent <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">1</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"1\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Maximum number of simultaneous e-book loans: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">2</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"2\" autocomplete=\"off\" /></span> e-books</li><li><span class=\"listen-bullet\">&bull;</span> Free internet connectivity available: high-speed <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">3</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"3\" autocomplete=\"off\" /></span> throughout the building</li><li><span class=\"listen-bullet\">&bull;</span> Specialist second-floor collection: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">4</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"4\" autocomplete=\"off\" /></span> archive</li><li><span class=\"listen-bullet\">&bull;</span> Book discussion club meets every <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">5</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"5\" autocomplete=\"off\" /></span> evening</li><li><span class=\"listen-bullet\">&bull;</span> Complimentary initial printing credit: £ <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">6</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"6\" autocomplete=\"off\" /></span> loaded on member card</li><li><span class=\"listen-bullet\">&bull;</span> Compulsory accessory for multimedia lab: personal <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">7</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"7\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Weekday evening closing time: <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">8</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"8\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Remote renewals processed through the library <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">9</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"9\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Online portal login security credential: a 4-digit <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">10</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"10\" autocomplete=\"off\" /></span> number</li></ul></div></div>"
      },
      {
        "partNumber": 2,
        "title": "Part 2: National Forest Park Conservation Volunteer Project",
        "instruction": "Answer Questions 11 to 20 based on the talk given by the volunteer coordinator.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test4%20Part2.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 11 to 20 based on the talk given by the volunteer coordinator.",
        "content": "<div class=\"listen-notes-card\"><h4>National Forest Park Conservation Volunteer Project</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"11\">\n            <div class=\"listen-mcq-num\">11</div>\n            <div class=\"listen-mcq-stem\">What is the primary physical task scheduled for the morning?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"A\"><input type=\"radio\" name=\"q11\" value=\"A\"> A. Felling large diseased timber trees</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"B\"><input type=\"radio\" name=\"q11\" value=\"B\"> B. Clearing fallen stone and repairing storm-eroded footpaths</label><label class=\"listen-mcq-label\" data-qid=\"11\" data-opt=\"C\"><input type=\"radio\" name=\"q11\" value=\"C\"> C. Painting boundary fence posts along the public highway</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"12\">\n            <div class=\"listen-mcq-num\">12</div>\n            <div class=\"listen-mcq-stem\">Why must invasive rhododendron plants be eradicated?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"A\"><input type=\"radio\" name=\"q12\" value=\"A\"> A. They are highly toxic to wild honeybees</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"B\"><input type=\"radio\" name=\"q12\" value=\"B\"> B. They block sunlight from young native oak saplings</label><label class=\"listen-mcq-label\" data-qid=\"12\" data-opt=\"C\"><input type=\"radio\" name=\"q12\" value=\"C\"> C. They attract dangerous invasive insect swarms</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"13\">\n            <div class=\"listen-mcq-num\">13</div>\n            <div class=\"listen-mcq-stem\">What ecological benefit is provided by dry-stone walls?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"A\"><input type=\"radio\" name=\"q13\" value=\"A\"> A. They prevent hikers from entering dangerous bogs</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"B\"><input type=\"radio\" name=\"q13\" value=\"B\"> B. They provide nesting crevices for lizards, weasels, and moss</label><label class=\"listen-mcq-label\" data-qid=\"13\" data-opt=\"C\"><input type=\"radio\" name=\"q13\" value=\"C\"> C. They channel rainwater into livestock reservoirs</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"14\">\n            <div class=\"listen-mcq-num\">14</div>\n            <div class=\"listen-mcq-stem\">What protective safety gear is supplied to all volunteers?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"A\"><input type=\"radio\" name=\"q14\" value=\"A\"> A. High-visibility jumpsuits and eye goggles</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"B\"><input type=\"radio\" name=\"q14\" value=\"B\"> B. Heavy-duty gloves and steel-capped waterproof boots</label><label class=\"listen-mcq-label\" data-qid=\"14\" data-opt=\"C\"><input type=\"radio\" name=\"q14\" value=\"C\"> C. Hard hats and safety harnesses for climbing</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"15\">\n            <div class=\"listen-mcq-num\">15</div>\n            <div class=\"listen-mcq-stem\">Tool & Equipment Depot is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"A\"><input type=\"radio\" name=\"q15\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"B\"><input type=\"radio\" name=\"q15\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"C\"><input type=\"radio\" name=\"q15\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"D\"><input type=\"radio\" name=\"q15\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"E\"><input type=\"radio\" name=\"q15\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"15\" data-opt=\"F\"><input type=\"radio\" name=\"q15\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"16\">\n            <div class=\"listen-mcq-num\">16</div>\n            <div class=\"listen-mcq-stem\">Rest & Picnic Shelter is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"A\"><input type=\"radio\" name=\"q16\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"B\"><input type=\"radio\" name=\"q16\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"C\"><input type=\"radio\" name=\"q16\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"D\"><input type=\"radio\" name=\"q16\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"E\"><input type=\"radio\" name=\"q16\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"16\" data-opt=\"F\"><input type=\"radio\" name=\"q16\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"17\">\n            <div class=\"listen-mcq-num\">17</div>\n            <div class=\"listen-mcq-stem\">Main Volunteer Lodge is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"A\"><input type=\"radio\" name=\"q17\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"B\"><input type=\"radio\" name=\"q17\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"C\"><input type=\"radio\" name=\"q17\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"D\"><input type=\"radio\" name=\"q17\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"E\"><input type=\"radio\" name=\"q17\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"17\" data-opt=\"F\"><input type=\"radio\" name=\"q17\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"18\">\n            <div class=\"listen-mcq-num\">18</div>\n            <div class=\"listen-mcq-stem\">Native Tree Nursery is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"A\"><input type=\"radio\" name=\"q18\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"B\"><input type=\"radio\" name=\"q18\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"C\"><input type=\"radio\" name=\"q18\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"D\"><input type=\"radio\" name=\"q18\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"E\"><input type=\"radio\" name=\"q18\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"18\" data-opt=\"F\"><input type=\"radio\" name=\"q18\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"19\">\n            <div class=\"listen-mcq-num\">19</div>\n            <div class=\"listen-mcq-stem\">Wildlife Survey Hide is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"A\"><input type=\"radio\" name=\"q19\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"B\"><input type=\"radio\" name=\"q19\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"C\"><input type=\"radio\" name=\"q19\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"D\"><input type=\"radio\" name=\"q19\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"E\"><input type=\"radio\" name=\"q19\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"19\" data-opt=\"F\"><input type=\"radio\" name=\"q19\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"20\">\n            <div class=\"listen-mcq-num\">20</div>\n            <div class=\"listen-mcq-stem\">Emergency First Aid Station is at letter:</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"A\"><input type=\"radio\" name=\"q20\" value=\"A\"> A. A</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"B\"><input type=\"radio\" name=\"q20\" value=\"B\"> B. B</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"C\"><input type=\"radio\" name=\"q20\" value=\"C\"> C. C</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"D\"><input type=\"radio\" name=\"q20\" value=\"D\"> D. D</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"E\"><input type=\"radio\" name=\"q20\" value=\"E\"> E. E</label><label class=\"listen-mcq-label\" data-qid=\"20\" data-opt=\"F\"><input type=\"radio\" name=\"q20\" value=\"F\"> F. F</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 3,
        "title": "Part 3: Sustainable Packaging & Consumer Behavior Seminar",
        "instruction": "Answer Questions 21 to 30 based on the seminar discussion between two marketing students and their tutor.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/Test4%20Part3.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Answer Questions 21 to 30 based on the seminar discussion between two marketing students and their tutor.",
        "content": "<div class=\"listen-notes-card\"><h4>Sustainable Packaging & Consumer Behavior Seminar</h4>\n          <div class=\"listen-mcq-group\" data-qid=\"21\">\n            <div class=\"listen-mcq-num\">21</div>\n            <div class=\"listen-mcq-stem\">What major problem arises with consumer disposal of PLA bioplastics?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"A\"><input type=\"radio\" name=\"q21\" value=\"A\"> A. PLA explodes when placed inside standard garbage bins</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"B\"><input type=\"radio\" name=\"q21\" value=\"B\"> B. Consumers confuse PLA with regular plastics, contaminating recycling streams</label><label class=\"listen-mcq-label\" data-qid=\"21\" data-opt=\"C\"><input type=\"radio\" name=\"q21\" value=\"C\"> C. PLA dissolves instantly upon contact with tap water</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"22\">\n            <div class=\"listen-mcq-num\">22</div>\n            <div class=\"listen-mcq-stem\">What condition is necessary for PLA bioplastic degradation?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"A\"><input type=\"radio\" name=\"q22\" value=\"A\"> A. Controlled industrial composting temperatures exceeding 55°C</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"B\"><input type=\"radio\" name=\"q22\" value=\"B\"> B. Direct immersion in high-salinity seawater for three days</label><label class=\"listen-mcq-label\" data-qid=\"22\" data-opt=\"C\"><input type=\"radio\" name=\"q22\" value=\"C\"> C. Continuous exposure to freezing arctic conditions</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"23\">\n            <div class=\"listen-mcq-num\">23</div>\n            <div class=\"listen-mcq-stem\">What advantage do seaweed alginate packaging films possess?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"A\"><input type=\"radio\" name=\"q23\" value=\"A\"> A. They are completely indestructible in high heat</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"B\"><input type=\"radio\" name=\"q23\" value=\"B\"> B. They dissolve harmlessly in ambient seawater within twelve weeks</label><label class=\"listen-mcq-label\" data-qid=\"23\" data-opt=\"C\"><input type=\"radio\" name=\"q23\" value=\"C\"> C. They cost eighty percent less than petroleum packaging</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"24\">\n            <div class=\"listen-mcq-num\">24</div>\n            <div class=\"listen-mcq-stem\">What percentage of surveyed shoppers would pay over a 10% premium for green packaging?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"A\"><input type=\"radio\" name=\"q24\" value=\"A\"> A. Ten percent</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"B\"><input type=\"radio\" name=\"q24\" value=\"B\"> B. Twenty-two percent</label><label class=\"listen-mcq-label\" data-qid=\"24\" data-opt=\"C\"><input type=\"radio\" name=\"q24\" value=\"C\"> C. Fifty percent</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"25\">\n            <div class=\"listen-mcq-num\">25</div>\n            <div class=\"listen-mcq-stem\">What packaging labels elicited the highest consumer trust?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"A\"><input type=\"radio\" name=\"q25\" value=\"A\"> A. Generic marketing terms like 'all-natural' and 'green'</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"B\"><input type=\"radio\" name=\"q25\" value=\"B\"> B. Certified third-party audited logos like the Carbon Trust</label><label class=\"listen-mcq-label\" data-qid=\"25\" data-opt=\"C\"><input type=\"radio\" name=\"q25\" value=\"C\"> C. Bright neon packaging without any written labels</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"26\">\n            <div class=\"listen-mcq-num\">26</div>\n            <div class=\"listen-mcq-stem\">How did the tutor evaluate the students' findings?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"A\"><input type=\"radio\" name=\"q26\" value=\"A\"> A. Lacking sufficient statistical sample depth</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"B\"><input type=\"radio\" name=\"q26\" value=\"B\"> B. Strong data-driven insights with clear practical value</label><label class=\"listen-mcq-label\" data-qid=\"26\" data-opt=\"C\"><input type=\"radio\" name=\"q26\" value=\"C\"> C. Biased toward corporate petrochemical manufacturers</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"27\">\n            <div class=\"listen-mcq-num\">27</div>\n            <div class=\"listen-mcq-stem\">Who will present the carbon footprint life-cycle analysis?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"A\"><input type=\"radio\" name=\"q27\" value=\"A\"> A. Fiona</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"B\"><input type=\"radio\" name=\"q27\" value=\"B\"> B. Bradley</label><label class=\"listen-mcq-label\" data-qid=\"27\" data-opt=\"C\"><input type=\"radio\" name=\"q27\" value=\"C\"> C. Both Fiona and Bradley</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"28\">\n            <div class=\"listen-mcq-num\">28</div>\n            <div class=\"listen-mcq-stem\">Who will present the price sensitivity charts and survey data?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"A\"><input type=\"radio\" name=\"q28\" value=\"A\"> A. Fiona</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"B\"><input type=\"radio\" name=\"q28\" value=\"B\"> B. Bradley</label><label class=\"listen-mcq-label\" data-qid=\"28\" data-opt=\"C\"><input type=\"radio\" name=\"q28\" value=\"C\"> C. Both Fiona and Bradley</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"29\">\n            <div class=\"listen-mcq-num\">29</div>\n            <div class=\"listen-mcq-stem\">Who will outline supermarket corporate policy recommendations?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"A\"><input type=\"radio\" name=\"q29\" value=\"A\"> A. Fiona</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"B\"><input type=\"radio\" name=\"q29\" value=\"B\"> B. Bradley</label><label class=\"listen-mcq-label\" data-qid=\"29\" data-opt=\"C\"><input type=\"radio\" name=\"q29\" value=\"C\"> C. Both Fiona and Bradley</label>\n            </div>\n          </div>\n        \n          <div class=\"listen-mcq-group\" data-qid=\"30\">\n            <div class=\"listen-mcq-num\">30</div>\n            <div class=\"listen-mcq-stem\">Who will conduct the edible packaging demonstration test?</div>\n            <div class=\"listen-mcq-options\">\n              <label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"A\"><input type=\"radio\" name=\"q30\" value=\"A\"> A. Fiona</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"B\"><input type=\"radio\" name=\"q30\" value=\"B\"> B. Bradley</label><label class=\"listen-mcq-label\" data-qid=\"30\" data-opt=\"C\"><input type=\"radio\" name=\"q30\" value=\"C\"> C. Both Fiona and Bradley</label>\n            </div>\n          </div>\n        </div>"
      },
      {
        "partNumber": 4,
        "title": "Part 4: Mycorrhizal Networks: Subterranean Tree Communication",
        "instruction": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "audioUrl": "https://archive.org/download/cambridge_19_202604/Audio%20cam%2019/CAM19T4S4.mp3",
        "fallbackAudioUrl": "https://archive.org/download/ielts-listening-5/IELTS%20Listening%205.mp3",
        "subheading": "Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.",
        "content": "<div class=\"listen-notes-card\"><h4>Mycorrhizal Networks: Subterranean Tree Communication</h4><div class=\"listen-notes-group\"><ul class=\"listen-notes-list\"><li><span class=\"listen-bullet\">&bull;</span> Subterranean fungal networks are colloquially nicknamed the <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">31</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"31\" autocomplete=\"off\" /></span> Web</li><li><span class=\"listen-bullet\">&bull;</span> Fungal networks consist of microscopic thread-like <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">32</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"32\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Trees synthesize sugars and deliver them downward via foliar <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">33</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"33\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Fungi supply trees with critical minerals, notably nitrogen and <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">34</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"34\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Mature hub trees that support saplings are termed <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">35</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"35\" autocomplete=\"off\" /></span> trees</li><li><span class=\"listen-bullet\">&bull;</span> When infested by pests, damaged trees transmit biochemical <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">36</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"36\" autocomplete=\"off\" /></span> signals</li><li><span class=\"listen-bullet\">&bull;</span> Neighboring trees preemptively manufacture defensive chemical <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">37</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"37\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Fungal webs are completely destroyed by modern industrial <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">38</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"38\" autocomplete=\"off\" /></span> forestry</li><li><span class=\"listen-bullet\">&bull;</span> Replanted monocultures lacking fungal networks become highly susceptible to <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">39</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"39\" autocomplete=\"off\" /></span></li><li><span class=\"listen-bullet\">&bull;</span> Ecologists now understand natural forests operate as collaborative <span class=\"onmock-gap-input\"><span class=\"onmock-gap-num\">40</span><input type=\"text\" class=\"onmock-listen-input\" data-qid=\"40\" autocomplete=\"off\" /></span></li></ul></div></div>"
      }
    ]
  }
};

  // 2. STATE VARIABLES
  let currentTest = null;
  let activeTestId = null;
  let currentPartIndex = 0;
  let userAnswers = {};
  let timerSeconds = 30 * 60;
  let timerInterval = null;
  let audioElement = null;
  let audioContext = null;
  let gainNode = null;
  let isAudioPlaying = false;
  let isLouderActive = false;

  // 3. AUDIO PLAYER ENGINE
  function initAudioPlayer() {
    if (!audioElement) {
      audioElement = document.getElementById('onmock-listen-audio-element');
      if (!audioElement) {
        audioElement = document.createElement('audio');
        audioElement.id = 'onmock-listen-audio-element';
        audioElement.preload = 'auto';
        document.body.appendChild(audioElement);
      }

      audioElement.addEventListener('timeupdate', updateAudioProgress);
      audioElement.addEventListener('progress', updateAudioBuffer);
      audioElement.addEventListener('play', () => setAudioPlayState(true));
      audioElement.addEventListener('pause', () => setAudioPlayState(false));
      audioElement.addEventListener('ended', onAudioEnded);
      audioElement.addEventListener('error', onAudioError);
    }

    if (currentTest && currentTest.parts[currentPartIndex]) {
      const p = currentTest.parts[currentPartIndex];
      audioElement.src = p.audioUrl;
      audioElement.load();
    }
  }

  function setAudioPlayState(playing) {
    isAudioPlaying = playing;
    const playBtn = document.getElementById('onmock-listen-play-btn');
    const statusDot = document.getElementById('onmock-listen-status-dot');

    if (playBtn) {
      if (playing) {
        playBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
        playBtn.setAttribute('title', 'Pause Audio');
      } else {
        playBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>';
        playBtn.setAttribute('title', 'Play Audio');
      }
    }

    if (statusDot) {
      if (playing) {
        statusDot.classList.remove('paused');
        statusDot.classList.add('playing');
      } else {
        statusDot.classList.remove('playing');
        statusDot.classList.add('paused');
      }
    }
  }

  function togglePlayAudio() {
    if (!audioElement) initAudioPlayer();
    if (!audioElement.src) {
      if (currentTest && currentTest.parts[currentPartIndex]) {
        audioElement.src = currentTest.parts[currentPartIndex].audioUrl;
      }
    }

    if (audioElement.paused) {
      audioElement.play().catch(e => {
        console.warn('Audio play request:', e);
        if (currentTest && currentTest.parts[currentPartIndex]) {
          audioElement.src = currentTest.parts[currentPartIndex].fallbackAudioUrl;
          audioElement.play().catch(() => {});
        }
      });
    } else {
      audioElement.pause();
    }
  }

  function updateAudioProgress() {
    if (!audioElement || !audioElement.duration) return;
    const current = audioElement.currentTime || 0;
    const total = audioElement.duration || 0;
    const pct = (current / total) * 100;

    const fill = document.getElementById('onmock-listen-progress-fill');
    const timeDisplay = document.getElementById('onmock-listen-time-display');

    if (fill) fill.style.width = pct + '%';
    if (timeDisplay) {
      timeDisplay.textContent = formatTime(current) + ' / ' + formatTime(total);
    }
  }

  function updateAudioBuffer() {
    if (!audioElement || !audioElement.duration || !audioElement.buffered.length) return;
    const bufferedEnd = audioElement.buffered.end(audioElement.buffered.length - 1);
    const total = audioElement.duration;
    const pct = (bufferedEnd / total) * 100;

    const buf = document.getElementById('onmock-listen-progress-buffer');
    if (buf) buf.style.width = pct + '%';
  }

  function seekAudio(e) {
    if (!audioElement || !audioElement.duration) return;
    const track = document.getElementById('onmock-listen-progress-track');
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const pct = Math.max(0, Math.min(1, clickX / width));
    audioElement.currentTime = pct * audioElement.duration;
  }

  function onAudioEnded() {
    setAudioPlayState(false);
    if (currentPartIndex < 3) {
      setTimeout(() => switchPart(currentPartIndex + 1), 1200);
    }
  }

  function onAudioError() {
    console.warn('Audio error on current stream. Trying fallback audio...');
    if (audioElement && currentTest && currentTest.parts[currentPartIndex]) {
      const fallback = currentTest.parts[currentPartIndex].fallbackAudioUrl;
      if (audioElement.src !== fallback) {
        audioElement.src = fallback;
        if (isAudioPlaying) audioElement.play().catch(() => {});
      }
    }
  }

  function setVolume(val) {
    if (audioElement) {
      audioElement.volume = parseFloat(val);
    }
  }

  function toggleLouderAudio(enable) {
    isLouderActive = enable;
    if (!audioElement) return;

    try {
      if (enable) {
        if (!audioContext) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          audioContext = new AudioContext();
          const source = audioContext.createMediaElementSource(audioElement);
          gainNode = audioContext.createGain();
          gainNode.gain.value = 2.0; // +6dB boost
          source.connect(gainNode);
          gainNode.connect(audioContext.destination);
        } else if (gainNode) {
          gainNode.gain.value = 2.0;
        }
      } else {
        if (gainNode) gainNode.gain.value = 1.0;
      }
    } catch (e) {
      console.warn('Web Audio gain adjustment not supported:', e);
    }
  }

  function formatTime(sec) {
    const s = Math.floor(sec);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (rem < 10 ? '0' : '') + rem;
  }

  // 4. TIMER ENGINE
  function startTimer() {
    stopTimer();
    const timerDisplay = document.getElementById('onmock-listen-timer-display');
    const timerCard = document.getElementById('onmock-listen-timer-card');

    timerInterval = setInterval(() => {
      timerSeconds--;
      if (timerSeconds <= 0) {
        stopTimer();
        submitTest(true);
        return;
      }

      if (timerDisplay) timerDisplay.textContent = formatTime(timerSeconds);
      if (timerCard) {
        if (timerSeconds < 300) {
          timerCard.style.color = '#dc2626';
          timerCard.style.borderColor = '#fecdd3';
          timerCard.style.background = '#fff1f2';
        } else {
          timerCard.style.color = '';
          timerCard.style.borderColor = '';
          timerCard.style.background = '';
        }
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // 5. VIEW RENDERING & NAVIGATION
  function renderPartContent() {
    const container = document.getElementById('onmock-listen-part-container');
    if (!container || !currentTest) return;

    const part = currentTest.parts[currentPartIndex];
    if (!part) return;

    const sub = document.getElementById('onmock-listen-test-subtitle');
    if (sub) sub.textContent = currentTest.title + ' • Part ' + part.partNumber + ' of 4';

    const trackBadge = document.getElementById('onmock-listen-track-badge');
    if (trackBadge) {
      trackBadge.innerHTML = `<span class="listen-status-dot ${isAudioPlaying ? 'playing' : 'paused'}" id="onmock-listen-status-dot"></span> Official Audio &bull; Part ${part.partNumber}`;
    }

    container.innerHTML = `
      <div class="onmock-part-banner">
        <div class="part-badge">Part ${part.partNumber}</div>
        <div class="part-instruction">${part.instruction}</div>
      </div>
      <div class="listen-section-title">${part.title}</div>
      <div class="listen-section-instruction">${part.subheading}</div>
      ${part.content}
    `;

    bindQuestionInputs();
    restoreUserAnswers();
  }

  function bindQuestionInputs() {
    const container = document.getElementById('onmock-listen-part-container');
    if (!container) return;

    const textInputs = container.querySelectorAll('.onmock-listen-input');
    textInputs.forEach(input => {
      const qid = input.getAttribute('data-qid');
      if (!qid) return;

      input.addEventListener('input', () => {
        const val = input.value;
        userAnswers[qid] = val;
        if (val.trim().length > 0) input.classList.add('answered');
        else input.classList.remove('answered');
        updateChipStatus(qid);
      });
    });

    const radioInputs = container.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(radio => {
      const name = radio.getAttribute('name');
      const qid = name ? name.replace('q', '') : null;
      if (!qid) return;

      radio.addEventListener('change', () => {
        if (radio.checked) {
          userAnswers[qid] = radio.value;
          updateChipStatus(qid);
        }
      });
    });
  }

  function restoreUserAnswers() {
    const container = document.getElementById('onmock-listen-part-container');
    if (!container) return;

    Object.keys(userAnswers).forEach(qid => {
      const val = userAnswers[qid];
      const textInput = container.querySelector(`.onmock-listen-input[data-qid="${qid}"]`);
      if (textInput) {
        textInput.value = val;
        if (String(val).trim().length > 0) textInput.classList.add('answered');
      }

      const radio = container.querySelector(`input[name="q${qid}"][value="${val}"]`);
      if (radio) {
        radio.checked = true;
      }
    });
  }

  function renderBottomDock() {
    const leftDock = document.getElementById('onmock-listen-dock-left');
    if (!leftDock || !currentTest) return;

    let html = '';

    currentTest.parts.forEach((p, idx) => {
      const startQ = idx * 10 + 1;
      const endQ = (idx + 1) * 10;
      let answeredCount = 0;
      for (let q = startQ; q <= endQ; q++) {
        if (userAnswers[q] && String(userAnswers[q]).trim().length > 0) {
          answeredCount++;
        }
      }

      if (idx === currentPartIndex) {
        html += `
          <div class="onmock-active-part-dock">
            <span class="onmock-active-part-title">Part ${p.partNumber}</span>
            <div class="onmock-qchips-row">
        `;
        for (let q = startQ; q <= endQ; q++) {
          const isAnswered = userAnswers[q] && String(userAnswers[q]).trim().length > 0;
          html += `
            <button class="onmock-qchip ${isAnswered ? 'answered' : ''}" data-qid="${q}" onclick="window.ListeningTrainer.goToQuestion(${q})" title="Question ${q}">
              <span class="onmock-qchip-bar"></span>
              <span>${q}</span>
            </button>
          `;
        }
        html += `
            </div>
          </div>
        `;
      } else {
        html += `
          <button class="onmock-part-tab-btn" onclick="window.ListeningTrainer.switchPart(${idx})" title="Go to Part ${p.partNumber}">
            <span>Part ${p.partNumber}</span>
            <span style="font-size:0.78rem; opacity:0.8;">(${answeredCount}/10)</span>
          </button>
        `;
      }
    });

    leftDock.innerHTML = html;
    updateNavButtons();
  }

  function updateChipStatus(qid) {
    const chip = document.querySelector(`.onmock-qchip[data-qid="${qid}"]`);
    if (!chip) return;
    const isAnswered = userAnswers[qid] && String(userAnswers[qid]).trim().length > 0;
    if (isAnswered) chip.classList.add('answered');
    else chip.classList.remove('answered');
  }

  function updateNavButtons() {
    const prevBtn = document.getElementById('onmock-listen-prev-btn');
    const nextBtn = document.getElementById('onmock-listen-next-btn');
    if (prevBtn) prevBtn.disabled = (currentPartIndex === 0);
    if (nextBtn) nextBtn.disabled = (currentPartIndex === 3);
  }

  function switchPart(partIdx) {
    if (!currentTest || partIdx < 0 || partIdx > 3) return;
    currentPartIndex = partIdx;

    if (audioElement && currentTest.parts[currentPartIndex]) {
      audioElement.src = currentTest.parts[currentPartIndex].audioUrl;
      audioElement.load();
      if (isAudioPlaying) audioElement.play().catch(() => {});
    }

    renderPartContent();
    renderBottomDock();

    const workspace = document.querySelector('.onmock-listen-workspace');
    if (workspace) workspace.scrollTop = 0;
  }

  function goToQuestion(qNum) {
    const targetPart = Math.floor((qNum - 1) / 10);
    if (targetPart !== currentPartIndex) {
      switchPart(targetPart);
    }

    setTimeout(() => {
      const input = document.querySelector(`[data-qid="${qNum}"]`);
      if (input) {
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (typeof input.focus === 'function') input.focus();
      }
    }, 150);
  }

  function navigateQuestion(dir) {
    const newPart = currentPartIndex + dir;
    if (newPart >= 0 && newPart <= 3) {
      switchPart(newPart);
    }
  }

  // 6. MODALS & SUBMISSION
  function promptExitTest() {
    const modal = document.getElementById('onmock-listen-exit-modal');
    if (modal) modal.classList.add('is-visible');
  }

  function closeExitModal() {
    const modal = document.getElementById('onmock-listen-exit-modal');
    if (modal) modal.classList.remove('is-visible');
  }

  function confirmExitTest() {
    closeExitModal();
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    stopTimer();

    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }

    const examView = document.getElementById('listening-exam-view');
    if (examView) examView.classList.remove('active-view');

    if (window.ieltsApp && typeof window.ieltsApp.showRealListeningListView === 'function') {
      window.ieltsApp.showRealListeningListView();
    } else if (window.ieltsApp && typeof window.ieltsApp.showRealTestHub === 'function') {
      window.ieltsApp.showRealTestHub();
    }
  }

  function submitTest(isAuto = false) {
    if (!isAuto) {
      const answeredCount = Object.keys(userAnswers).filter(k => String(userAnswers[k]).trim().length > 0).length;
      if (answeredCount < 40) {
        const confirmSubmit = window.confirm(`You have answered ${answeredCount} of 40 questions. Are you sure you want to submit your listening test now?`);
        if (!confirmSubmit) return;
      }
    }

    if (audioElement) audioElement.pause();
    stopTimer();

    let score = 0;
    const partScores = [0, 0, 0, 0];

    for (let q = 1; q <= 40; q++) {
      const userAns = (userAnswers[q] || '').trim().toLowerCase();
      const validKeys = (currentTest.answerKeys[q] || []).map(k => String(k).trim().toLowerCase());

      const isCorrect = validKeys.includes(userAns);
      if (isCorrect) {
        score++;
        const pIdx = Math.floor((q - 1) / 10);
        partScores[pIdx]++;
      }
    }

    const bandScore = calculateListeningBand(score);
    showResultsModal(score, bandScore, partScores);
    highlightEvaluation();
  }

  function calculateListeningBand(rawScore) {
    if (rawScore >= 39) return 9.0;
    if (rawScore >= 37) return 8.5;
    if (rawScore >= 35) return 8.0;
    if (rawScore >= 32) return 7.5;
    if (rawScore >= 30) return 7.0;
    if (rawScore >= 26) return 6.5;
    if (rawScore >= 23) return 6.0;
    if (rawScore >= 18) return 5.5;
    if (rawScore >= 16) return 5.0;
    if (rawScore >= 13) return 4.5;
    if (rawScore >= 10) return 4.0;
    return 3.5;
  }

  function showResultsModal(rawScore, bandScore, partScores) {
    const modal = document.getElementById('onmock-listen-results-modal');
    if (!modal) return;

    const bandBadge = document.getElementById('onmock-results-band');
    const rawDisplay = document.getElementById('onmock-results-raw');
    const p1 = document.getElementById('onmock-results-p1');
    const p2 = document.getElementById('onmock-results-p2');
    const p3 = document.getElementById('onmock-results-p3');
    const p4 = document.getElementById('onmock-results-p4');

    if (bandBadge) bandBadge.textContent = 'Band ' + bandScore.toFixed(1);
    if (rawDisplay) rawDisplay.textContent = `${rawScore} / 40 Correct`;
    if (p1) p1.textContent = `${partScores[0]} / 10`;
    if (p2) p2.textContent = `${partScores[1]} / 10`;
    if (p3) p3.textContent = `${partScores[2]} / 10`;
    if (p4) p4.textContent = `${partScores[3]} / 10`;

    modal.classList.add('is-visible');
  }

  function closeResultsModal() {
    const modal = document.getElementById('onmock-listen-results-modal');
    if (modal) modal.classList.remove('is-visible');
  }

  function highlightEvaluation() {
    if (!currentTest) return;
    const container = document.getElementById('onmock-listen-part-container');
    if (!container) return;

    for (let q = 1; q <= 40; q++) {
      const userAns = (userAnswers[q] || '').trim().toLowerCase();
      const validKeys = (currentTest.answerKeys[q] || []).map(k => String(k).trim().toLowerCase());
      const isCorrect = validKeys.includes(userAns);

      const input = container.querySelector(`.onmock-listen-input[data-qid="${q}"]`);
      if (input) {
        if (isCorrect) {
          input.style.borderColor = '#10b981';
          input.style.backgroundColor = '#ecfdf5';
          input.style.color = '#065f46';
        } else {
          input.style.borderColor = '#ef4444';
          input.style.backgroundColor = '#fef2f2';
          input.style.color = '#991b1b';
          const corrSpan = document.createElement('span');
          corrSpan.style.cssText = 'color:#059669; font-weight:700; margin-left:6px; font-size:12.5px;';
          corrSpan.textContent = '✓ ' + (currentTest.answerKeys[q] ? currentTest.answerKeys[q][0] : '');
          if (input.parentNode && !input.parentNode.querySelector('.eval-corr-tag')) {
            corrSpan.className = 'eval-corr-tag';
            input.parentNode.appendChild(corrSpan);
          }
        }
      }

      const mcqGroup = container.querySelector(`.listen-mcq-group[data-qid="${q}"]`);
      if (mcqGroup) {
        const correctLetter = (currentTest.answerKeys[q] && currentTest.answerKeys[q][0]) ? String(currentTest.answerKeys[q][0]).toUpperCase() : '';
        const userChoice = (userAnswers[q] || '').toUpperCase();

        const labels = mcqGroup.querySelectorAll('.listen-mcq-label');
        labels.forEach(lbl => {
          const opt = lbl.getAttribute('data-opt');
          if (opt === correctLetter) {
            lbl.style.borderColor = '#10b981';
            lbl.style.backgroundColor = '#ecfdf5';
            lbl.style.color = '#065f46';
            lbl.style.fontWeight = '700';
          } else if (opt === userChoice && userChoice !== correctLetter) {
            lbl.style.borderColor = '#ef4444';
            lbl.style.backgroundColor = '#fef2f2';
            lbl.style.color = '#991b1b';
          }
        });
      }
    }
  }

  // 7. HIGHLIGHTER ENGINE
  let isHighlighterMode = true;

  function initHighlighter() {
    let tooltip = document.getElementById('onmock-listen-hl-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'onmock-listen-hl-tooltip';
      tooltip.className = 'onmock-hl-tooltip';
      tooltip.innerHTML = `
        <button type="button" class="onmock-hl-tip-btn hl-act" id="onmock-hl-action-btn">Highlight</button>
        <button type="button" class="onmock-hl-tip-btn hl-clr" id="onmock-hl-clear-btn" style="display:none;">Clear</button>
      `;
      document.body.appendChild(tooltip);

      document.getElementById('onmock-hl-action-btn').addEventListener('click', executeHighlight);
      document.getElementById('onmock-hl-clear-btn').addEventListener('click', executeClearHighlight);
    }
  }

  function toggleHighlighterMode() {
    isHighlighterMode = !isHighlighterMode;
    const hlBtn = document.getElementById('onmock-listen-hl-btn');
    if (hlBtn) {
      if (isHighlighterMode) hlBtn.classList.add('hl-active');
      else hlBtn.classList.remove('hl-active');
    }
  }

  function executeHighlight() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
    const range = sel.getRangeAt(0);

    const span = document.createElement('mark');
    span.className = 'onmock-highlight-yellow';
    try {
      range.surroundContents(span);
    } catch(e) {
      console.warn('Highlight complex range wrap:', e);
    }
    sel.removeAllRanges();
    const tooltip = document.getElementById('onmock-listen-hl-tooltip');
    if (tooltip) tooltip.classList.remove('is-open');
  }

  function executeClearHighlight() {
    const tooltip = document.getElementById('onmock-listen-hl-tooltip');
    if (tooltip) tooltip.classList.remove('is-open');
  }

  function toggleFullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement) {
      const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
      if (rfs) rfs.call(el).catch(() => {});
    } else {
      const efs = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
      if (efs) efs.call(document).catch(() => {});
    }
  }

  // 8. ENTRY POINT: openTest
  function openTest(testId = '6a918c90e2d325da96e1724c') {
    activeTestId = testId;
    currentTest = TESTS_DATABASE[testId] || TESTS_DATABASE['6a918c90e2d325da96e1724c'];

    const allViews = document.querySelectorAll('.view-screen');
    allViews.forEach(v => v.classList.remove('active-view'));

    const examView = document.getElementById('listening-exam-view');
    if (examView) examView.classList.add('active-view');

    currentPartIndex = 0;
    userAnswers = {};
    timerSeconds = 30 * 60;
    isAudioPlaying = false;

    initAudioPlayer();
    initHighlighter();
    renderPartContent();
    renderBottomDock();
    startTimer();
    updateAudioProgress();
  }

  window.ListeningTrainer = {
    openTest,
    switchPart,
    goToQuestion,
    navigateQuestion,
    togglePlayAudio,
    seekAudio,
    setVolume,
    toggleLouderAudio,
    toggleFullscreen,
    promptExitTest,
    closeExitModal,
    confirmExitTest,
    submitTest,
    closeResultsModal,
    toggleHighlighterMode,
    executeHighlight,
    executeClearHighlight
  };

})();
