// 60 Days IELTS Routine & Roadmap Data from Moktadir's IELTS School (moktadirsielts.com/roadmap/)
const ROADMAP_TASKS = {

            1: `

                <div style="margin-bottom: 15px;">

                    <strong>Welcome to the MIS Family! </strong><br>

                    আজকে আমাদের প্রথম দিন। আজ আমরা বেসিক ফাউন্ডেশন তৈরি করা শুরু করবো।

                </div>

                

                <div class="task-item">

                    <input type="checkbox" id="d1-t1" class="task-checkbox">

                    <label for="d1-t1" class="task-label"><strong>Task 1:</strong> IELTS এক্সাম ফরম্যাট (Reading, Listening, Writing, Speaking) নিয়ে ইউটিউব থেকে একটি বেসিক ধারণা নিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d1-t2" class="task-checkbox">

                    <label for="d1-t2" class="task-label"><strong>Task 2:</strong> খাতা-কলম নিয়ে IELTS এর কমন ২০টি ভোকাবুলারি (যেকোনো সোর্স থেকে) অর্থসহ লিখুন এবং মুখস্থ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d1-t3" class="task-checkbox">

                    <label for="d1-t3" class="task-label"><strong>Task 3:</strong> BBC Learning English বা 6 Minute English পডকাস্ট থেকে যেকোনো একটি অডিও অন্তত ২ বার মন দিয়ে শুনুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d1-t4" class="task-checkbox">

                    <label for="d1-t4" class="task-label"><strong>Task 4:</strong> ইংরেজি যেকোনো পত্রিকা (যেমন: The Daily Star) থেকে ছোট একটি আর্টিকেল পড়ুন এবং অজানা শব্দগুলো মার্ক করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d1-t5" class="task-checkbox">

                    <label for="d1-t5" class="task-label"><strong>Task 5:</strong> ৩০ মিনিট কোনো কিছু দেখে দেখে type করুন।</label>

                </div>

            `,

            2: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 2: Grammar & Reading Habit </strong><br>

                    প্রথম দিনের ধারা বজায় রেখে আজ আমরা রিডিং হ্যাবিট আরেকটু বাড়াবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d2-t1" class="task-checkbox">

                    <label for="d2-t1" class="task-label"><strong>Task 1:</strong> Parts of Speech এবং Basic Sentence Structure রিভিশন দিন (যেকোনো বেসিক গ্রামার বই থেকে)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d2-t2" class="task-checkbox">

                    <label for="d2-t2" class="task-label"><strong>Task 2:</strong> গতকালের আর্টিকেল থেকে মার্ক করা অজানা শব্দগুলোর অর্থ ডিকশনারি থেকে বের করে খাতায় লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d2-t3" class="task-checkbox">

                    <label for="d2-t3" class="task-label"><strong>Task 3:</strong> নতুন ২০টি কমন Academic Vocabulary শিখুন এবং সেগুলো দিয়ে একটি করে বাক্য তৈরি করার চেষ্টা করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d2-t4" class="task-checkbox">

                    <label for="d2-t4" class="task-label"><strong>Task 4:</strong> TED Talks থেকে যেকোনো একটি ৫-১০ মিনিটের ভিডিও সাবটাইটেল (Subtitle) অন করে দেখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d2-t5" class="task-checkbox">

                    <label for="d2-t5" class="task-label"><strong>Task 5:</strong> ৩০ মিনিট কোনো কিছু দেখে দেখে type করুন।</label>

                </div>

            `,

            3: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 3: Listening & Speaking Focus </strong><br>

                    আজ আমরা কান তৈরি করা এবং মুখের জড়তা কাটানোর কাজ শুরু করবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d3-t1" class="task-checkbox">

                    <label for="d3-t1" class="task-label"><strong>Task 1:</strong> ইউটিউব থেকে IELTS Listening এর যেকোনো একটি বেসিক সেকশন-১ এর অডিও শুনুন (প্রশ্ন সলভ করার দরকার নেই, শুধু উচ্চারণ খেয়াল করুন)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d3-t2" class="task-checkbox">

                    <label for="d3-t2" class="task-label"><strong>Task 2:</strong> যেকোনো ইংরেজি নিউজপেপার বা আর্টিকেল থেকে ১ প্যারাগ্রাফ জোরে জোরে (Loud Reading) পড়ুন যাতে মুখের জড়তা কাটে।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d3-t3" class="task-checkbox">

                    <label for="d3-t3" class="task-label"><strong>Task 3:</strong> "Describe your Hometown" - এই টপিকের ওপর টানা ১ মিনিট ইংরেজিতে কথা বলুন এবং নিজের ফোনে রেকর্ড করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d3-t4" class="task-checkbox">

                    <label for="d3-t4" class="task-label"><strong>Task 4:</strong> শহর বা গ্রাম (City/Countryside) সম্পর্কিত ১০টি নতুন ভোকাবুলারি শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d3-t5" class="task-checkbox">

                    <label for="d3-t5" class="task-label"><strong>Task 5:</strong> ৩০ মিনিট কোনো কিছু দেখে দেখে type করুন।</label>

                </div>

            `,

            4: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 4: Reading Strategies (Skimming & Scanning) </strong><br>

                    রিডিংয়ে ভালো করার মূল মন্ত্র হলো দ্রুত পড়ে অর্থ বুঝতে পারা। 

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d4-t1" class="task-checkbox">

                    <label for="d4-t1" class="task-label"><strong>Task 1:</strong> ইউটিউব থেকে Skimming এবং Scanning কী এবং কীভাবে করতে হয়, তার ওপর একটি ছোট গাইডলাইন ভিডিও দেখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d4-t2" class="task-checkbox">

                    <label for="d4-t2" class="task-label"><strong>Task 2:</strong> একটি ইংরেজি আর্টিকেল নিন। পুরোটা না পড়ে, শুধু চোখ বুলিয়ে (Skimming) ৩ মিনিটে বোঝার চেষ্টা করুন আর্টিকেলটি কী নিয়ে লেখা।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d4-t3" class="task-checkbox">

                    <label for="d4-t3" class="task-label"><strong>Task 3:</strong> একই আর্টিকেলে ৫টি নির্দিষ্ট শব্দ (যেমন- কোনো সাল, নাম বা জায়গা) কত দ্রুত খুঁজে বের করা যায় (Scanning) তা প্র্যাকটিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d4-t4" class="task-checkbox">

                    <label for="d4-t4" class="task-label"><strong>Task 4:</strong> পূর্বের শেখা সব ভোকাবুলারি (Day 1 - Day 3) একবার রিভিশন দিন।</label>

                </div>

                 <div class="task-item">

                    <input type="checkbox" id="d4-t5" class="task-checkbox">

                    <label for="d4-t5" class="task-label"><strong>Task 5:</strong> ৩০ মিনিট কোনো কিছু দেখে দেখে type করুন।</label>

                </div>

            `,

            5: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 5: Writing Task 1 Basics </strong><br>

                    আজ আমরা রাইটিংয়ের বেসিক ট্রেন্ড (Trends) এবং ভোকাবুলারি নিয়ে কাজ করবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d5-t1" class="task-checkbox">

                    <label for="d5-t1" class="task-label"><strong>Task 1:</strong> Academic Writing Task 1 এর বিভিন্ন ধরন (Bar, Pie, Line, Table) সম্পর্কে গুগল বা ইউটিউব থেকে বেসিক ধারণা নিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d5-t2" class="task-checkbox">

                    <label for="d5-t2" class="task-label"><strong>Task 2:</strong> গ্রাফ বা চার্টের ওঠানামা বোঝানোর জন্য ১০টি শব্দ শিখুন (যেমন: Increase, Decrease, Fluctuate, Plummet ইত্যাদি)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d5-t3" class="task-checkbox">

                    <label for="d5-t3" class="task-label"><strong>Task 3:</strong> খাতা নিয়ে একটি সাধারণ Bar Chart আঁকুন এবং নিজে নিজে ৩টি বাক্য লিখে সেটিকে বর্ণনা করার চেষ্টা করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d5-t4" class="task-checkbox">

                    <label for="d5-t4" class="task-label"><strong>Task 4:</strong> যেকোনো একটি ইংরেজি পডকাস্ট শুনুন এবং নোট নেওয়ার (Note-taking) প্র্যাকটিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d5-t5" class="task-checkbox">

                    <label for="d5-t5" class="task-label"><strong>Task 5:</strong> ৩০ মিনিট কোনো কিছু দেখে দেখে type করুন এবং ১৫ মিনিট আয়নার সামনে দাঁড়িয়ে আপনার সারাদিনের সব কাজ English এ বলুন।</label>

                </div>

            `,

            6: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 6: Grammar Core (Tense) </strong><br>

                    IELTS-এ গ্রামার সরাসরি আসে না, তবে স্পিকিং এবং রাইটিংয়ে সঠিক Tense ব্যবহার করা বাধ্যতামূলক।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d6-t1" class="task-checkbox">

                    <label for="d6-t1" class="task-label"><strong>Task 1:</strong> বেসিক গ্রামার বই থেকে Present এবং Past Tense এর স্ট্রাকচারগুলো খুব ভালোভাবে রিভিশন দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d6-t2" class="task-checkbox">

                    <label for="d6-t2" class="task-label"><strong>Task 2:</strong> গতকাল সারাদিন আপনি কী কী করেছেন, তা নিয়ে Past Tense ব্যবহার করে খাতায় ৫টি বাক্য লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d6-t3" class="task-checkbox">

                    <label for="d6-t3" class="task-label"><strong>Task 3:</strong> আগামী ৫ বছরে আপনার লক্ষ্য কী, তা নিয়ে Future Tense ব্যবহার করে ৫টি বাক্য লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d6-t4" class="task-checkbox">

                    <label for="d6-t4" class="task-label"><strong>Task 4:</strong> Day 3 তে রেকর্ড করা আপনার অডিওটি আজ আবার শুনুন এবং নিজের ভুলগুলো নিজে ধরার চেষ্টা করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d6-t5" class="task-checkbox">

                    <label for="d6-t5" class="task-label"><strong>Task 5:</strong> ৩০ মিনিট কোনো কিছু দেখে দেখে type করুন এবং আপনার পরিবার নিয়ে ১০ মিনিট আয়নার সামনে দাঁড়িয়ে কথা বলুন।</label>

                </div>

            `,

            7: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 7: Weekly Review & Rest </strong><br>

                    সপ্তাহের শেষ দিন। আজ নতুন কিছু শেখার চেয়ে পুরনো পড়া রিভিশন দেওয়া বেশি জরুরি।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d7-t1" class="task-checkbox">

                    <label for="d7-t1" class="task-label"><strong>Task 1:</strong> এই সপ্তাহে শেখা সবগুলো নতুন শব্দ (Vocabulary) এবং গ্রামার রুলস খাতা থেকে রিভিশন দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d7-t2" class="task-checkbox">

                    <label for="d7-t2" class="task-label"><strong>Task 2:</strong> ইংরেজি সাবটাইটেল দিয়ে আপনার পছন্দের যেকোনো একটি মুভি, ডকুমেন্টারি বা ইউটিউব ভিডিও উপভোগ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d7-t3" class="task-checkbox">

                    <label for="d7-t3" class="task-label"><strong>Task 3:</strong> একটি ডায়েরি নিয়ে আগামী সপ্তাহের জন্য নিজের স্টাডি রুটিন এবং লক্ষ্যগুলো লিখে ফেলুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d7-t4" class="task-checkbox">

                    <label for="d7-t4" class="task-label"><strong>Task 4:</strong> ব্রেইনকে রেস্ট দিন। আগামীকালের নতুন চ্যালেঞ্জের জন্য নিজেকে মানসিকভাবে প্রস্তুত করুন।</label>

                </div>

            `,

            8: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 8: Advanced Vocabulary & Complex Sentences </strong><br>

                    আজকে আমরা সাধারণ বাক্যের বাইরে গিয়ে একটু অ্যাডভান্সড বাক্য তৈরি করা শিখবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d8-t1" class="task-checkbox">

                    <label for="d8-t1" class="task-label"><strong>Task 1:</strong> 'Environment' এবং 'Health' সম্পর্কিত ২৫টি নতুন Academic Vocabulary অর্থ ও বানানসহ খাতায় লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d8-t2" class="task-checkbox">

                    <label for="d8-t2" class="task-label"><strong>Task 2:</strong> যেকোনো বেসিক গ্রামার বই বা ইউটিউব থেকে Simple, Complex এবং Compound Sentence-এর পার্থক্য খুব ভালোভাবে বুঝে নিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d8-t3" class="task-checkbox">

                    <label for="d8-t3" class="task-label"><strong>Task 3:</strong> আপনার শহরের কোনো একটি সাম্প্রতিক সমস্যা ও সমাধান নিয়ে নিজে নিজে ৫টি Complex Sentence তৈরি করে খাতায় লিখুন এবং এগুলো loudly বলুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d8-t4" class="task-checkbox">

                    <label for="d8-t4" class="task-label"><strong>Task 4:</strong> BBC 6 Minute English বা যেকোনো পডকাস্ট থেকে ১০ মিনিটের একটি অডিও শুনুন এবং সেখান থেকে ৫টি নতুন ফ্রেজ (Phrases) নোট করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d8-t5" class="task-checkbox">

                    <label for="d8-t5" class="task-label"><strong>Task 5:</strong> দ্য ডেইলি স্টার (The Daily Star) এর 'Editorial' অংশ থেকে একটি কলাম পড়ুন এবং সেটির মূল বিষয়বস্তু ৩ লাইনে বাংলায় নিজের মতো করে লিখুন।</label>

                </div>

            `,

            9: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 9: Listening Map & Speaking Cue Card Intro </strong><br>

                    লিসেনিংয়ের ম্যাপ এবং স্পিকিং পার্ট-২ এর সাথে আজ পরিচিত হবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d9-t1" class="task-checkbox">

                    <label for="d9-t1" class="task-label"><strong>Task 1:</strong> ইউটিউব থেকে "IELTS Listening Map Labeling Strategy" লিখে সার্চ করে যেকোনো একটি ভালো গাইডলাইন ভিডিও দেখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d9-t2" class="task-checkbox">

                    <label for="d9-t2" class="task-label"><strong>Task 2:</strong> খাতা নিয়ে আপনার নিজের বাড়ি বা এলাকার একটি ছোট ম্যাপ (নকশা) আঁকুন এবং ইংরেজিতে ডিরেকশন (Right, Left, Opposite, Next to) বলা প্র্যাকটিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d9-t3" class="task-checkbox">

                    <label for="d9-t3" class="task-label"><strong>Task 3:</strong> Speaking Part 2 এর জন্য একটি টপিক নিন (যেমন: "Describe a book you recently read")। ঘড়ি ধরে ঠিক ১ মিনিট সময় নিয়ে পয়েন্টগুলো নোট করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d9-t4" class="task-checkbox">

                    <label for="d9-t4" class="task-label"><strong>Task 4:</strong> এবার সেই নোট দেখে টানা ২ মিনিট ইংরেজিতে কথা বলুন এবং ফোনে রেকর্ড করুন। পরে শুনে দেখুন কোথায় কোথায় আপনি আটকে গেছেন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d9-t5" class="task-checkbox">

                    <label for="d9-t5" class="task-label"><strong>Task 5:</strong> 'Education' এবং 'Work' সম্পর্কিত ২০টি নতুন শব্দ ডিকশনারি ঘেঁটে বের করুন এবং খাতায় তুলুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d9-t6" class="task-checkbox">

                    <label for="d9-t6" class="task-label"><strong>Task 6:</strong> ৩০ মিনিট কোনো কিছু দেখে দেখে type করুন।</label>

                </div>

            `,

            10: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 10: Reading Comprehension & True/False/Not Given </strong><br>

                    পড়ে গভীরভাবে বোঝার ক্ষমতা (Comprehension) বৃদ্ধি করার দিন আজ।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d10-t1" class="task-checkbox">

                    <label for="d10-t1" class="task-label"><strong>Task 1:</strong> National Geographic বা BBC News এর ওয়েবসাইট থেকে একটি বড় আর্টিকেল বেছে নিন। কোনো টাইমার ছাড়া খুব ধীরে ধীরে পুরোটা পড়ুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d10-t2" class="task-checkbox">

                    <label for="d10-t2" class="task-label"><strong>Task 2:</strong> আর্টিকেলের প্রতিটি প্যারাগ্রাফের মূল আইডিয়া কী, তা এক লাইনে প্যারাগ্রাফের পাশে (বা খাতায়) সামারি করে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d10-t3" class="task-checkbox">

                    <label for="d10-t3" class="task-label"><strong>Task 3:</strong> আমার ইউটিউব চ্যানেল থেকে "IELTS Reading True, False, Not Given" সলভ করার স্ট্র্যাটেজি ভিডিও দেখুন এবং নিয়মগুলো খাতায় নোট করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d10-t4" class="task-checkbox">

                    <label for="d10-t4" class="task-label"><strong>Task 4:</strong> রিডিং প্যাসেজ পড়ার সময় ৫টি অনেক বড় ও কঠিন বাক্য (Complex Sentence) খুঁজে বের করুন এবং সেগুলো ভেঙে ভেঙে আসল অর্থ বোঝার চেষ্টা করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d10-t5" class="task-checkbox">

                    <label for="d10-t5" class="task-label"><strong>Task 5:</strong> সাধারণ ১৫ টি শব্দের ৫টি করে advance সিনোনিম শিখুন (যেমন: Important এর জায়গায় Crucial, Significant, Vital ইত্যাদি)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d10-t6" class="task-checkbox">

                    <label for="d10-t6" class="task-label"><strong>Task 6:</strong> ৩০ মিনিট কোনো কিছু দেখে দেখে type করুন।</label>

                </div>

            `,

            11: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 11: Writing Task 2 (Essay Structure) </strong><br>

                    আইইএলটিএস রাইটিংয়ের সবচেয়ে গুরুত্বপূর্ণ অংশ হলো সঠিক স্ট্রাকচার বা কাঠামো বুঝতে পারা।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d11-t1" class="task-checkbox">

                    <label for="d11-t1" class="task-label"><strong>Task 1:</strong> ইউটিউব থেকে "IELTS Writing Task 2 Essay Structure" নিয়ে একটি ভিডিও দেখুন (Intro, Body Paragraphs, Conclusion কীভাবে সাজাতে হয়)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d11-t2" class="task-checkbox">

                    <label for="d11-t2" class="task-label"><strong>Task 2:</strong> প্রশ্নের লাইনকে কীভাবে নিজের ভাষায় ঘুরিয়ে লিখতে হয় (Paraphrasing), তার ওপর একটি টিউটোরিয়াল দেখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d11-t3" class="task-checkbox">

                    <label for="d11-t3" class="task-label"><strong>Task 3:</strong> একটি কমন এসে টপিক নিন (যেমন: "Technology makes people lazy") এবং শুধু এটার Introduction অংশটুকু (সর্বোচ্চ ৩-৪ বাক্য) নিজে নিজে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d11-t4" class="task-checkbox">

                    <label for="d11-t4" class="task-label"><strong>Task 4:</strong> রাইটিংয়ের জন্য ১৫টি অত্যন্ত গুরুত্বপূর্ণ লিংকার্স/ট্রানজিশন ওয়ার্ড শিখুন (যেমন: Furthermore, Consequently, Nevertheless ইত্যাদি)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d11-t5" class="task-checkbox">

                    <label for="d11-t5" class="task-label"><strong>Task 5:</strong> ইন্টারনেট থেকে যেকোনো একটি Band 8.0+ স্যাম্পল এসে (Essay) শুধু রিডিং পড়ুন, দেখুন তারা লিংকার্সগুলো কীভাবে ব্যবহার করেছে।</label>

                </div>

            `,

            12: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 12: Listening Dictation & Pronunciation </strong><br>

                    লিসেনিংয়ে বানান ভুল করে মার্কস হারানো রোধ করতে আজকের দিনটি কাজে লাগান।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d12-t1" class="task-checkbox">

                    <label for="d12-t1" class="task-label"><strong>Task 1:</strong> ইউটিউবে "IELTS Listening Spelling Practice" লিখে সার্চ দিন এবং অন্তত ৫০টি নাম, শহরের নাম বা ঠিকানার বানান অডিও শুনে শুনে খাতায় লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d12-t2" class="task-checkbox">

                    <label for="d12-t2" class="task-label"><strong>Task 2:</strong> ইংরেজিতে ১৩ এবং ৩০ (13 vs 30), ১৪ এবং ৪০ (14 vs 40) উচ্চারণের পার্থক্য বোঝার জন্য ইউটিউবে ভিডিও দেখুন এবং নিজে উচ্চারণ করে প্র্যাকটিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d12-t3" class="task-checkbox">

                    <label for="d12-t3" class="task-label"><strong>Task 3:</strong> ইংরেজি নিউজের কোনো অডিও ক্লিপ প্লে করুন এবং সেখানে বলা তারিখ (Dates) ও ফোন নম্বরগুলো দ্রুত খাতায় লেখার প্র্যাকটিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d12-t4" class="task-checkbox">

                    <label for="d12-t4" class="task-label"><strong>Task 4:</strong> যেকোনো একটি ইংরেজি আর্টিকেল সামনে নিয়ে একটানা ৫ মিনিট খবরের পাঠকদের মতো স্পষ্ট উচ্চারণে জোরে জোরে পড়ুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d12-t5" class="task-checkbox">

                    <label for="d12-t5" class="task-label"><strong>Task 5:</strong> Day 8 থেকে Day 11 পর্যন্ত খাতায় লেখা সব নতুন ভোকাবুলারি একবার চোখ বুলিয়ে রিভিশন দিন।</label>

                </div>

                 <div class="task-item">

                    <input type="checkbox" id="d12-t6" class="task-checkbox">

                    <label for="d12-t6" class="task-label"><strong>Task 6:</strong> Youtube থেকে British Accent এ Alphabet গুলো বলার ভিডিও দেখুন।</label>

                </div>

            `,

            13: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 13: Speaking Part 3 & Critical Thinking </strong><br>

                    স্পিকিংয়ের সবচেয়ে চ্যালেঞ্জিং পার্ট হলো পার্ট-৩, যেখানে একটু বিস্তারিত উত্তর দিতে হয়।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d13-t1" class="task-checkbox">

                    <label for="d13-t1" class="task-label"><strong>Task 1:</strong> ইউটিউব থেকে Speaking Part 3 এর ওপর একটি গাইডলাইন ভিডিও দেখুন এবং জানুন কীভাবে এখানে প্রশ্ন করা হয়।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d13-t2" class="task-checkbox">

                    <label for="d13-t2" class="task-label"><strong>Task 2:</strong> পার্ট-৩ এর উত্তর বড় করার জন্য "A.R.E.A" (Answer, Reason, Example, Alternative) মেথডটি শিখুন এবং খাতায় নিয়মটি লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d13-t3" class="task-checkbox">

                    <label for="d13-t3" class="task-label"><strong>Task 3:</strong> একটি প্রশ্ন নিন (যেমন: "How has technology changed human communication?") এবং A.R.E.A মেথড ব্যবহার করে সেটির উত্তর সাজান।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d13-t4" class="task-checkbox">

                    <label for="d13-t4" class="task-label"><strong>Task 4:</strong> সাজানো উত্তরটি না দেখে বলার চেষ্টা করুন এবং রেকর্ড করুন। নিশ্চিত করুন যে আপনি অন্তত ৪-৫ লাইনে উত্তরটি দিয়েছেন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d13-t5" class="task-checkbox">

                    <label for="d13-t5" class="task-label"><strong>Task 5:</strong> 'Technology' এবং 'Internet' সম্পর্কিত ২০টি স্মার্ট ভোকাবুলারি খাতায় তুলে মুখস্থ করুন।</label>

                </div>

            `,

            14: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 14: Reading Matching Headings & Passive Voice </strong><br>

                    রিডিংয়ের আরেকটি কঠিন প্রশ্নের ধরন এবং রাইটিংয়ের জন্য জরুরি একটি গ্রামার রুল।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d14-t1" class="task-checkbox">

                    <label for="d14-t1" class="task-label"><strong>Task 1:</strong> আমার ইউটিউব চ্যানেল থেকে "IELTS Reading Matching Headings Strategy" এর ওপর প্লেলিস্ট এর ভিডিও দেখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d14-t2" class="task-checkbox">

                    <label for="d14-t2" class="task-label"><strong>Task 2:</strong> একটি পত্রিকার বড় আর্টিকেল নিন এবং তার মূল হেডলাইন ঢেকে রাখুন। এরপর প্যারাগ্রাফগুলো পড়ে আপনি নিজে তার জন্য একটি হেডলাইন বানানোর চেষ্টা করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d14-t3" class="task-checkbox">

                    <label for="d14-t3" class="task-label"><strong>Task 3:</strong> ডিকশনারি ছাড়া রিডিং পড়ার প্র্যাকটিস করুন। একটি আর্টিকেল পড়ার সময় ৫টি অজানা শব্দ পেলে ডিকশনারি না দেখে বাক্যের অর্থ বুঝে শব্দগুলোর অর্থ অনুমান (Guess) করার চেষ্টা করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d14-t4" class="task-checkbox">

                    <label for="d14-t4" class="task-label"><strong>Task 4:</strong> এরপর ডিকশনারি থেকে শব্দগুলোর আসল অর্থ বের করে মিলিয়ে দেখুন আপনার অনুমান কতটা কাছাকাছি ছিল।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d14-t5" class="task-checkbox">

                    <label for="d14-t5" class="task-label"><strong>Task 5:</strong> গ্রামার বই থেকে Passive Voice এর নিয়মগুলো রিভিশন দিন এবং একাডেমিক রাইটিংয়ে কীভাবে এটি ব্যবহৃত হয় তার ১০টি উদাহরণ লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d14-t5" class="task-checkbox">

                    <label for="d14-t5" class="task-label"><strong>Task 5:</strong> ৩০ মিনিট কোনো কিছু দেখে দেখে type করুন এবং আপনার কোনো বন্ধু কে নিয়ে ৫ মিনিট কথা বলুন।</label>

                </div>

            `,

            15: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 15: Half-Month Review & Self-Assessment </strong><br>

                    প্রথম ১৫ দিনের ফাউন্ডেশন পর্বের সমাপ্তি। আজ নতুন কিছু নয়, শুধু নিজেকে যাচাই করার পালা।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d15-t1" class="task-checkbox">

                    <label for="d15-t1" class="task-label"><strong>Task 1: Mega Vocabulary Review!</strong> গত ১৪ দিনে খাতায় লেখা প্রায় ১০০+ শব্দ নিজে নিজে টেস্ট দিন। যেগুলো ভুলে গেছেন, সেগুলো লাল কালি দিয়ে মার্ক করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d15-t2" class="task-checkbox">

                    <label for="d15-t2" class="task-label"><strong>Task 2: Grammar Test:</strong> নিজে নিজে ৫টি Complex Sentence এবং ৫টি Passive Voice এর বাক্য তৈরি করে খাতায় লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d15-t3" class="task-checkbox">

                    <label for="d15-t3" class="task-label"><strong>Task 3: Reading Test:</strong> ৫০০ শব্দের যেকোনো একটি আর্টিকেল পড়ুন এবং পুরো আর্টিকেলের সারমর্ম গুনে গুনে ঠিক ৫০ শব্দের মধ্যে লিখে ফেলুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d15-t4" class="task-checkbox">

                    <label for="d15-t4" class="task-label"><strong>Task 4: Speaking Progress:</strong> "My IELTS Journey so far" টপিকের ওপর ২ মিনিট কথা বলুন এবং রেকর্ড করুন। Day 3 এর রেকর্ডিংয়ের সাথে মিলিয়ে দেখুন আপনার ফ্লুয়েন্সি বেড়েছে কি না।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d15-t5" class="task-checkbox">

                    <label for="d15-t5" class="task-label"><strong>Task 5:</strong> আপনার ডায়েরিতে গত ১৫ দিনের শক্তি (Strengths) এবং দুর্বলতাগুলো (Weaknesses) নোট করুন, যাতে আগামীকালের 'Module-Specific Phase'-এ আপনি আরো ফোকাসড থাকতে পারেন।</label>

                </div>

            `, 

            16: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 16: Phase 2 Begins - Reading & Listening Dive </strong><br>

                    আজ থেকে আমরা সরাসরি IELTS ফরম্যাটের কঠিন প্রশ্নগুলোর মুখোমুখি হবো। কাজের চাপ বেশি থাকবে, ফোকাস ধরে রাখুন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d16-t1" class="task-checkbox">

                    <label for="d16-t1" class="task-label"><strong>Task 1:</strong> কেমব্রিজ বা যেকোনো সোর্স থেকে Reading Passage 1 এর একটি সম্পূর্ণ প্যাসেজ নিন। কোনো টাইমার ছাড়া শুধু Fill in the blanks (শূন্যস্থান) এবং True False Not Given প্রশ্নগুলো সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d16-t2" class="task-checkbox">

                    <label for="d16-t2" class="task-label"><strong>Task 2:</strong> ইউটিউব বা ওয়েবসাইট থেকে IELTS Listening Section 1 এবং Section 2 এর একটি টেস্ট দিন। এবং শেষে মিলিয়ে দেখুন কয়টা হয়েছে।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d16-t3" class="task-checkbox">

                    <label for="d16-t3" class="task-label"><strong>Task 3: (Transcription)</strong> যে লিসেনিং টেস্টটি দিলেন, তার যেকোনো ২ মিনিটের অডিও প্লে করুন। যা শুনছেন তা হুবহু পজ করে করে খাতায় লিখুন। এতে কান শার্প হবে।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d16-t4" class="task-checkbox">

                    <label for="d16-t4" class="task-label"><strong>Task 4:</strong> Speaking Part 1 এর কমন ৩টি টপিক (Hometown, Work/Study, Hobbies) নিয়ে নিজে নিজে মোট ৫ মিনিট ইংরেজিতে কথা বলুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d16-t5" class="task-checkbox">

                    <label for="d16-t5" class="task-label"><strong>Task 5:</strong> 'Travel and Transport' সম্পর্কিত ২৫টি নতুন Academic শব্দ খাতায় অর্থসহ লিখুন এবং মুখস্থ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d16-t6" class="task-checkbox">

                    <label for="d16-t6" class="task-label"><strong>Task 6:</strong> ওই ২৫টি শব্দ থেকে কঠিন ৫টি শব্দ বেছে নিয়ে ৫টি বড় বাক্য (Complex Sentence) তৈরি করুন।</label>

                </div>

            `,

            17: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 17: Writing Task 1 & Speaking Fluency </strong><br>

                    রাইটিংয়ের গ্রাফ বর্ণনা এবং স্পিকিংয়ের ফ্লুয়েন্সিতে আজ জোর দেবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d17-t1" class="task-checkbox">

                    <label for="d17-t1" class="task-label"><strong>Task 1:</strong> ইউটিউব থেকে "How to write Introduction and Overview for Task 1" এর ওপর বিস্তারিত ভিডিও দেখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d17-t2" class="task-checkbox">

                    <label for="d17-t2" class="task-label"><strong>Task 2:</strong> ইন্টারনেট থেকে ৩টি ভিন্ন ভিন্ন Bar Chart বা Line Graph বের করুন। পুরোটা লেখার দরকার নেই, শুধু এই ৩টির Introduction এবং Overview খাতায় লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d17-t3" class="task-checkbox">

                    <label for="d17-t3" class="task-label"><strong>Task 3:</strong> ইন্টারনেট থেকে Band 9 এর যেকোনো ২টি Writing Task 1 স্যাম্পল পড়ুন এবং তারা কী কী ভোকাভুলারি ব্যবহার করেছে তা মার্ক করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d17-t4" class="task-checkbox">

                    <label for="d17-t4" class="task-label"><strong>Task 4:</strong> স্পিকিং পার্ট ১ এর ১০টি র্যান্ডম প্রশ্ন নিয়ে (যেমন: ফুড, মিউজিক, শপিং) দ্রুত উত্তর দেওয়ার প্র্যাকটিস করুন। কোনো উত্তরের জন্য বেশি ভাবা যাবে না।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d17-t5" class="task-checkbox">

                    <label for="d17-t5" class="task-label"><strong>Task 5:</strong> গ্রাফ বা চার্টের পরিবর্তন বোঝানোর জন্য (যেমন: Rose sharply, Plummeted significantly) ২০টি ফ্রেজ বা শব্দ শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d17-t6" class="task-checkbox">

                    <label for="d17-t6" class="task-label"><strong>Task 6:</strong> ইংরেজি পত্রিকা থেকে একটি বড় নিউজ পড়ুন এবং শুধু ৩ লাইনে তার সামারি লিখুন।</label>

                </div>

            `,

            18: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 18: Reading Traps (T/F/NG & Headings) </strong><br>

                    রিডিংয়ের সবচেয়ে কনফিউজিং প্রশ্নের ধরনগুলোর ফাঁদ থেকে বাঁচার প্র্যাকটিস।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d18-t1" class="task-checkbox">

                    <label for="d18-t1" class="task-label"><strong>Task 1:</strong> যেকোনো একটি Reading Passage 1 নিন এবং শুধুমাত্র True/False/Not Given ও Gap fillings প্রশ্নগুলো সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d18-t2" class="task-checkbox">

                    <label for="d18-t2" class="task-label"><strong>Task 2: (Deep Analysis)</strong> আপনার যে উত্তরগুলো ভুল হয়েছে, সেগুলো কেন ভুল হলো তা প্যাসেজের সাথে মিলিয়ে গভীরভাবে অ্যানালাইসিস করুন। (Synonym Trap বুঝতে হবে)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d18-t3" class="task-checkbox">

                    <label for="d18-t3" class="task-label"><strong>Task 3:</strong> একটি Reading Passage 2 নিন এবং Matching Headings প্র্যাকটিস করুন। প্রতিটি প্যারাগ্রাফের শুধু প্রথম ও শেষ লাইন পড়ে মূলভাব বোঝার চেষ্টা করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d18-t4" class="task-checkbox">

                    <label for="d18-t4" class="task-label"><strong>Task 4:</strong> 'Science and Technology' সম্পর্কিত ২৫টি অ্যাডভান্সড শব্দ অর্থসহ খাতায় তুলুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d18-t5" class="task-checkbox">

                    <label for="d18-t5" class="task-label"><strong>Task 5:</strong> Grammar: Conditional Sentences (If clauses) এর নিয়মগুলো রিভিশন দিন এবং ৩টি টাইপের ৩টি করে উদাহরণ লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d18-t6" class="task-checkbox">

                    <label for="d18-t6" class="task-label"><strong>Task 6:</strong> "If I had a lot of money..." এই টপিকের ওপর টানা ২ মিনিট কথা বলুন এবং রেকর্ড করুন।</label>

                </div>

            `,

            19: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 19: Listening Part 3 & 4 (The Tough Sections) </strong><br>

                    লিসেনিংয়ের সবচেয়ে কঠিন অংশ হলো পার্ট ৩ (MCQ) এবং পার্ট ৪ (Lecture)।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d19-t1" class="task-checkbox">

                    <label for="d19-t1" class="task-label"><strong>Task 1:</strong> আমার ইউটিউব চ্যানেল থেকে Listening Section 2 and 3 এর MCQ সলভ করার স্ট্র্যাটেজি ভিডিও দেখুন (কীভাবে অপশন এলিমিনেট করতে হয়)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d19-t2" class="task-checkbox">

                    <label for="d19-t2" class="task-label"><strong>Task 2:</strong> একটি ফুল Listening Section 2 and 3 (MCQ ও Matching) টেস্ট দিন এবং স্কোর চেক করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d19-t3" class="task-checkbox">

                    <label for="d19-t3" class="task-label"><strong>Task 3:</strong> একটি ফুল Listening Section 4 (Fill in the blanks) টেস্ট দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d19-t4" class="task-checkbox">

                    <label for="d19-t4" class="task-label"><strong>Task 4: (Audio Script Reading)</strong> Section 4 এর উত্তর মেলানোর পর, অডিও স্ক্রিপ্টটি বের করুন। অডিও প্লে করুন এবং সাথে সাথে রিডিং পড়ুন। দেখুন স্পিকার কীভাবে উত্তর প্যারাফ্রেজ করেছে।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d19-t5" class="task-checkbox">

                    <label for="d19-t5" class="task-label"><strong>Task 5:</strong> Speaking Part 2 এর জন্য একটি Cue Card রেডি করুন: "Describe a difficult challenge you faced"। ১ মিনিট নোট নিয়ে ২ মিনিট কথা বলুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d19-t6" class="task-checkbox">

                    <label for="d19-t6" class="task-label"><strong>Task 6:</strong> 'Education and Academic Life' সম্পর্কিত ২০টি নতুন শব্দ শিখুন।</label>

                </div>

            `,

            20: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 20: Writing Task 2 (Agree/Disagree Essay) </strong><br>

                    আজ আপনি সম্পূর্ণ একটি এসে (Essay) লিখবেন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d20-t1" class="task-checkbox">

                    <label for="d20-t1" class="task-label"><strong>Task 1:</strong> Agree/Disagree (Opinion) Essay এর সঠিক স্ট্রাকচার ইউটিউব থেকে দেখে নোট করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d20-t2" class="task-checkbox">

                    <label for="d20-t2" class="task-label"><strong>Task 2: Brainstorming!</strong> ৩টি ভিন্ন এসে টপিক নিন। লেখার দরকার নেই, শুধু ঘড়ি ধরে ১০ মিনিটের মধ্যে প্রতিটির পক্ষে ২টি এবং বিপক্ষে ২টি পয়েন্ট পয়েন্ট আকারে খাতায় লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d20-t3" class="task-checkbox">

                    <label for="d20-t3" class="task-label"><strong>Task 3: Full Essay:</strong> একটি টপিক সিলেক্ট করে ঘড়ি ধরে ঠিক ৪০ মিনিটের মধ্যে ২৫০ শব্দের একটি সম্পূর্ণ এসে খাতায় লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d20-t4" class="task-checkbox">

                    <label for="d20-t4" class="task-label"><strong>Task 4: Self-Correction:</strong> লেখা শেষ হলে নিজে নিজে পড়ে গ্রামার, বানান এবং আর্টিকেলের (a, an, the) ভুলগুলো চেক করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d20-t5" class="task-checkbox">

                    <label for="d20-t5" class="task-label"><strong>Task 5:</strong> রাইটিংয়ের জন্য ১৫টি অ্যাডভান্সড ট্রানজিশন ওয়ার্ড (Moreover, On the other hand, To conclude) খাতায় লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d20-t6" class="task-checkbox">

                    <label for="d20-t6" class="task-label"><strong>Task 6:</strong> গতকালের স্পিকিং কিউ-কার্ডের ওপর ভিত্তি করে পার্ট ৩ এর মতো নিজে নিজেকে ৫টি ফলো-আপ প্রশ্ন করুন এবং উত্তর দিন।</label>

                </div>

            `,

            21: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 21: Speaking Mock & Reading Marathon </strong><br>

                    আজ পড়ার স্পিড এবং টানা কথা বলার স্ট্যামিনা বাড়ানোর দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d21-t1" class="task-checkbox">

                    <label for="d21-t1" class="task-label"><strong>Task 1:</strong> ইউটিউবে "IELTS Speaking Mock Test Simulator" প্লে করুন এবং এক্সামিনারের ভিডিওর সাথে সাথে নিজে পুরো ১৫ মিনিটের একটি মক টেস্ট দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d21-t2" class="task-checkbox">

                    <label for="d21-t2" class="task-label"><strong>Task 2:</strong> মক টেস্টটি ফোনে রেকর্ড করুন। এরপর নিজে শুনে জাজ করুন আপনি ফ্লুয়েন্সিতে কেমন করেছেন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d21-t3" class="task-checkbox">

                    <label for="d21-t3" class="task-label"><strong>Task 3: Reading Marathon:</strong> ২টি বড় রিডিং প্যাসেজ (Passage 1 & Passage 2) ব্যাক-টু-ব্যাক সলভ করুন। সময় নিবেন সর্বোচ্চ ৪০ মিনিট।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d21-t4" class="task-checkbox">

                    <label for="d21-t4" class="task-label"><strong>Task 4:</strong> রিডিং টেস্টে যে উত্তরগুলো ভুল হয়েছে, সেগুলো প্যাসেজ থেকে খুঁজে বের করুন এবং ভোকাবুলারির ফাঁদগুলো আইডেন্টিফাই করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d21-t5" class="task-checkbox">

                    <label for="d21-t5" class="task-label"><strong>Task 5:</strong> 'Environment & Global Warming' সম্পর্কিত ২০টি নতুন শব্দ শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d21-t6" class="task-checkbox">

                    <label for="d21-t6" class="task-label"><strong>Task 6: (Shadowing)</strong> TED Talk থেকে যেকোনো একটি ভিডিও চালু করুন এবং স্পিকার যা বলছে, তার সাথে সাথে উচ্চারণ নকল করে ৫ মিনিট কথা বলুন।</label>

                </div>

            `,

            22: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 22: Weekly Evaluation & Full Listening Mock </strong><br>

                    কঠিন একটি সপ্তাহের সমাপ্তি। আজ আপনার অগ্রগতি মডিউল ধরে ধরে যাচাই করবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d22-t1" class="task-checkbox">

                    <label for="d22-t1" class="task-label"><strong>Task 1: Vocabulary Test:</strong> এই সপ্তাহে শেখা ১৩০+ শব্দের ওপর নিজে নিজে টেস্ট দিন। ভুল শব্দগুলো ৫ বার করে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d22-t2" class="task-checkbox">

                    <label for="d22-t2" class="task-label"><strong>Task 2: Full Listening Mock:</strong> ইউটিউব বা কেমব্রিজ বই থেকে সম্পূর্ণ ৪০ প্রশ্নের একটি লিসেনিং টেস্ট দিন (সময় ৩০ মিনিট)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d22-t3" class="task-checkbox">

                    <label for="d22-t3" class="task-label"><strong>Task 3:</strong> লিসেনিংয়ের বানান ভুলগুলো (Spelling mistakes) আলাদা করে একটি খাতায় লাল কালি দিয়ে নোট করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d22-t4" class="task-checkbox">

                    <label for="d22-t4" class="task-label"><strong>Task 4:</strong> Day 20-তে যে এসে (Essay) লিখেছিলেন, সেটি আরেকবার পড়ুন। এবার সেখানে শেখা নতুন ট্রানজিশন ওয়ার্ডগুলো যুক্ত করে লেখাটিকে আরও ইমপ্রুভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d22-t5" class="task-checkbox">

                    <label for="d22-t5" class="task-label"><strong>Task 5:</strong> ইংরেজি পত্রিকা বা বিবিসির ৩টি আর্টিকেল রিল্যাক্স মুডে পড়ুন, শুধু পড়ার অভ্যাস ধরে রাখার জন্য।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d22-t6" class="task-checkbox">

                    <label for="d22-t6" class="task-label"><strong>Task 6:</strong> আগামী সপ্তাহের প্ল্যানিং করুন। মেন্টাল রেস্ট নিন এবং নিজের কাজের জন্য নিজেকে অ্যাপ্রিশিয়েট করুন।</label>

                </div>

            `, 

            23: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 23: Reading Time Management & Task 1 (Process/Map) ⏱</strong><br>

                    আজ রিডিংয়ে সময়ের সাথে যুদ্ধ এবং রাইটিংয়ের অপেক্ষাকৃত কঠিন গ্রাফ নিয়ে কাজ করবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d23-t1" class="task-checkbox">

                    <label for="d23-t1" class="task-label"><strong>Task 1:</strong> একটি Reading Passage 3 নিন। ঘড়ি ধরে ঠিক ২০ মিনিটের মধ্যে এটি সলভ করার চ্যালেঞ্জ নিন। নতুন যেই টপিক পাবেন সেগুলোর জন্য YouTube থেকে ভিডিও দেখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d23-t2" class="task-checkbox">

                    <label for="d23-t2" class="task-label"><strong>Task 2:</strong> Passage 3 তে ভুল হওয়া উত্তরগুলো অ্যানালাইসিস করুন। দেখুন কোন শব্দ বা বাক্যের অর্থের কারণে আপনার ভুল হয়েছে।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d23-t3" class="task-checkbox">

                    <label for="d23-t3" class="task-label"><strong>Task 3:</strong> Writing Task 1 এর Process Diagram এবং Map লেখার স্ট্রাকচার ও ভোকাবুলারি (যেমন: is located, was constructed, is transported) ইউটিউব থেকে শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d23-t4" class="task-checkbox">

                    <label for="d23-t4" class="task-label"><strong>Task 4:</strong> একটি Process Diagram বা Map নিয়ে ঘড়ি ধরে ২০ মিনিটে সম্পূর্ণ একটি রিপোর্ট (১৫০ শব্দ) খাতায় লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d23-t5" class="task-checkbox">

                    <label for="d23-t5" class="task-label"><strong>Task 5:</strong> Speaking Part 1 এর ৫টি র্যান্ডম প্রশ্নের উত্তর দিন এবং ফোনে রেকর্ড করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d23-t6" class="task-checkbox">

                    <label for="d23-t6" class="task-label"><strong>Task 6:</strong> 'Cities and Infrastructure' সম্পর্কিত ২০টি অ্যাডভান্সড শব্দ খাতায় তুলুন এবং অর্থ শিখুন।</label>

                </div>

            `,

            24: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 24: Listening Diagram & Speaking Part 2 Mastery </strong><br>

                    লিসেনিংয়ের ডায়াগ্রাম এবং স্পিকিংয়ে ইডিয়ামস (Idioms) ব্যবহারের প্র্যাকটিস।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d24-t1" class="task-checkbox">

                    <label for="d24-t1" class="task-label"><strong>Task 1:</strong> Listening Diagram/Plan Labeling এর নিয়ম শিখুন এবং কেমব্রিজ বই থেকে অন্তত ২টি ডায়াগ্রাম সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d24-t2" class="task-checkbox">

                    <label for="d24-t2" class="task-label"><strong>Task 2:</strong> একটি ফুল Listening Section 2 টেস্ট দিন এবং উত্তর মেলান।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d24-t3" class="task-checkbox">

                    <label for="d24-t3" class="task-label"><strong>Task 3:</strong> Speaking Part 2 এর টপিক: "Describe a memorable event in your life"। টার্গেট নিন টানা ২ মিনিট ১৫ সেকেন্ড কথা বলার।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d24-t4" class="task-checkbox">

                    <label for="d24-t4" class="task-label"><strong>Task 4:</strong> স্পিকিংয়ের জন্য ৩টি কমন Idioms (যেমন: Once in a blue moon, Piece of cake) এবং ৩টি Phrasal Verbs শিখুন ও সেগুলো ব্যবহার করে কথা বলুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d24-t5" class="task-checkbox">

                    <label for="d24-t5" class="task-label"><strong>Task 5:</strong> বিবিসির যেকোনো একটি নিউজ আর্টিকেল একটানা ১০ মিনিট জোরে জোরে পড়ুন (উচ্চারণ ও ফ্লুয়েন্সি বৃদ্ধির জন্য)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d24-t6" class="task-checkbox">

                    <label for="d24-t6" class="task-label"><strong>Task 6:</strong> 'Culture and Tradition' সম্পর্কিত ২০টি নতুন শব্দ শিখুন।</label>

                </div>

            `,

            25: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 25: Writing Task 2 (Problem & Solution) </strong><br>

                    রাইটিংয়ের অন্যতম গুরুত্বপূর্ণ এসে টাইপ নিয়ে আজ কাজ করবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d25-t1" class="task-checkbox">

                    <label for="d25-t1" class="task-label"><strong>Task 1:</strong> Problem & Solution এবং Causes & Effects Essay-এর স্ট্রাকচারগুলো ইউটিউব থেকে দেখে নোট করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d25-t2" class="task-checkbox">

                    <label for="d25-t2" class="task-label"><strong>Task 2: Brainstorming:</strong> ইন্টারনেট থেকে এই ধরনের ৩টি টপিক নিন এবং প্রতিটি টপিকের জন্য ২টি করে সমস্যা ও ২টি সমাধান খাতায় পয়েন্ট আকারে লিখুন (সময় ১৫ মিনিট)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d25-t3" class="task-checkbox">

                    <label for="d25-t3" class="task-label"><strong>Task 3: Full Essay:</strong> একটি টপিক বেছে নিয়ে ঘড়ি ধরে ঠিক ৪০ মিনিটে ২৫০+ শব্দের একটি সম্পূর্ণ এসে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d25-t4" class="task-checkbox">

                    <label for="d25-t4" class="task-label"><strong>Task 4: Check Grammar:</strong> নিজের লেখা এসেটি চেক করুন। দেখুন সেখানে অন্তত ৩টি Complex Sentence এবং ২টি Passive Voice আছে কি না। না থাকলে এডিট করে যুক্ত করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d25-t5" class="task-checkbox">

                    <label for="d25-t5" class="task-label"><strong>Task 5:</strong> Reading Passage 2 থেকে "Match Information to Paragraphs" টাইপের প্রশ্ন সলভ করার প্র্যাকটিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d25-t6" class="task-checkbox">

                    <label for="d25-t6" class="task-label"><strong>Task 6:</strong> Day 16 থেকে Day 22 পর্যন্ত শেখা সব ভোকাবুলারি রিভিশন দিন।</label>

                </div>

            `,

            26: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 26: Reading Summary & Speaking Debate </strong><br>

                    রিডিংয়ের সামারি সলভ এবং স্পিকিং পার্ট ৩-এ যুক্তি খণ্ডন করার প্র্যাকটিস।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d26-t1" class="task-checkbox">

                    <label for="d26-t1" class="task-label"><strong>Task 1:</strong> Reading Summary Completion (উইথ বক্স এবং উইদাউট বক্স) সলভ করার নিয়ম ইউটিউব থেকে শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d26-t2" class="task-checkbox">

                    <label for="d26-t2" class="task-label"><strong>Task 2:</strong> কেমব্রিজ বই থেকে ২টি Summary Completion অংশ খুঁজে বের করে সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d26-t3" class="task-checkbox">

                    <label for="d26-t3" class="task-label"><strong>Task 3: Speaking Part 3 (Debate):</strong> একটি কঠিন প্রশ্ন নিন (যেমন: Is university education necessary for success?)। এর পক্ষে এবং বিপক্ষে নিজে নিজেই যুক্তি দিয়ে কথা বলুন (টানা ৩ মিনিট)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d26-t4" class="task-checkbox">

                    <label for="d26-t4" class="task-label"><strong>Task 4: (Shadowing)</strong> TED Talk-এর যেকোনো একটি ভিডিও চালু করে স্পিকারের সাথে সাথে ৫ মিনিট কপি করে কথা বলার প্র্যাকটিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d26-t5" class="task-checkbox">

                    <label for="d26-t5" class="task-label"><strong>Task 5:</strong> Listening Section 3 (MCQ) এর একটি ফুল সেট প্র্যাকটিস করুন এবং স্ক্রিপ্ট দেখে ভুলগুলো ধরুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d26-t6" class="task-checkbox">

                    <label for="d26-t6" class="task-label"><strong>Task 6:</strong> 'Business & Economy' সম্পর্কিত ২০টি নতুন শব্দ অর্থসহ খাতায় তুলুন।</label>

                </div>

            `,

            27: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 27: Mini Mock (Writing & Listening) </strong><br>

                    আজ আমরা পরীক্ষার পরিবেশ তৈরি করে একসাথে দুটি টেস্ট দেবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d27-t1" class="task-checkbox">

                    <label for="d27-t1" class="task-label"><strong>Task 1: Writing Mock:</strong> ঠিক ৬০ মিনিটের টাইমার সেট করুন। Task 1 (২০ মিনিট) এবং Task 2 (৪০ মিনিট) ব্যাক-টু-ব্যাক লিখুন। টাইমার শেষ হলে লেখা বন্ধ!</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d27-t2" class="task-checkbox">

                    <label for="d27-t2" class="task-label"><strong>Task 2:</strong> লেখা শেষ হওয়ার পর Band 8 এর কোনো স্যাম্পলের সাথে নিজের লেখাটি মিলিয়ে সেলফ-অ্যাসেসমেন্ট করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d27-t3" class="task-checkbox">

                    <label for="d27-t3" class="task-label"><strong>Task 3: Listening Mock:</strong> ইউটিউব বা কেমব্রিজ থেকে সম্পূর্ণ একটি ৪০ প্রশ্নের লিসেনিং টেস্ট দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d27-t4" class="task-checkbox">

                    <label for="d27-t4" class="task-label"><strong>Task 4:</strong> লিসেনিংয়ে যে উত্তরগুলো ভুল হয়েছে, অডিও স্ক্রিপ্ট দেখে বের করুন কেন ভুল হলো (স্পেলিং, প্যারাফ্রেজিং নাকি শুনতে ভুল)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d27-t5" class="task-checkbox">

                    <label for="d27-t5" class="task-label"><strong>Task 5:</strong> রাইটিং এবং স্পিকিংয়ের জন্য আরও ১৫টি অ্যাডভান্সড ট্রানজিশন ওয়ার্ড (Consequently, Hence, Alternatively) শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d27-t6" class="task-checkbox">

                    <label for="d27-t6" class="task-label"><strong>Task 6:</strong> ইংরেজি পত্রিকার সম্পাদকীয় (Editorial) পাতা থেকে একটি বড় কলাম পড়ুন।</label>

                </div>

            `,

            28: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 28: Mini Mock (Reading & Speaking) </strong><br>

                    গতকালের মতো আজ রিডিং এবং স্পিকিংয়ের মক টেস্ট হবে।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d28-t1" class="task-checkbox">

                    <label for="d28-t1" class="task-label"><strong>Task 1: Reading Mock:</strong> কেমব্রিজ বই থেকে সম্পূর্ণ একটি রিডিং টেস্ট (৩টি প্যাসেজ, ৪০টি প্রশ্ন) দিন। টাইমার ঠিক ৬০ মিনিট।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d28-t2" class="task-checkbox">

                    <label for="d28-t2" class="task-label"><strong>Task 2:</strong> রিডিংয়ের ভুলগুলো ডিপ অ্যানালাইসিস করুন। ভাবুন- "কোথায় আমার সময় বেশি নষ্ট হলো এবং কেন?"</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d28-t3" class="task-checkbox">

                    <label for="d28-t3" class="task-label"><strong>Task 3: Speaking Mock:</strong> ইউটিউবের "Speaking Mock Simulator" ব্যবহার করে ফুল ১৫ মিনিটের একটি স্পিকিং টেস্ট দিন এবং পুরোটা রেকর্ড করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d28-t4" class="task-checkbox">

                    <label for="d28-t4" class="task-label"><strong>Task 4:</strong> রেকর্ডিং শুনে স্পিকিং পার্ট ২-এ যদি কোথাও আটকে গিয়ে থাকেন, তবে সেই অংশটুকু আবার রেকর্ড করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d28-t5" class="task-checkbox">

                    <label for="d28-t5" class="task-label"><strong>Task 5:</strong> 'Crime & Law' সম্পর্কিত ২০টি ভোকাভুলারি খাতায় লিখুন এবং শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d28-t6" class="task-checkbox">

                    <label for="d28-t6" class="task-label"><strong>Task 6:</strong> পড়াশোনা শেষে ব্রেইনকে রেস্ট দিতে একটি ইংরেজি ডকুমেন্টারি বা মুভি দেখুন (সাবটাইটেলসহ)।</label>

                </div>

            `,

            29: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 29: Weekly Evaluation & Weakness Targeting </strong><br>

                    তৃতীয় সপ্তাহের মূল্যায়ন। আজ শুধু নিজের ভুলগুলো নিয়ে কাজ করার দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d29-t1" class="task-checkbox">

                    <label for="d29-t1" class="task-label"><strong>Task 1: Vocabulary Mega Test:</strong> এই সপ্তাহে শেখা ১২০+ নতুন শব্দের ওপর নিজে নিজে টেস্ট দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d29-t2" class="task-checkbox">

                    <label for="d29-t2" class="task-label"><strong>Task 2: Grammar Check:</strong> এই সপ্তাহে লেখা এসে (Essays) গুলোতে কী কী গ্রামার ভুল হয়েছে তা লাল কালি দিয়ে মার্ক করুন এবং রুলসগুলো আবার পড়ুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d29-t3" class="task-checkbox">

                    <label for="d29-t3" class="task-label"><strong>Task 3: Spelling Drill:</strong> লিসেনিংয়ে বারবার ভুল হয় এমন ৫০টি কনফিউজিং শব্দের বানান নিজে নিজে খাতায় লিখে টেস্ট দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d29-t4" class="task-checkbox">

                    <label for="d29-t4" class="task-label"><strong>Task 4: Copy the Master:</strong> ইন্টারনেট থেকে Band 9 এর যেকোনো ২টি এসে (Essay) বের করে তাদের সেন্টেন্স স্ট্রাকচারগুলো হুবহু খাতায় কপি করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d29-t5" class="task-checkbox">

                    <label for="d29-t5" class="task-label"><strong>Task 5: Self-Reflection:</strong> ডায়েরি নিয়ে বসুন। এই সপ্তাহে কোন মডিউলে (যেমন: T/F/NG বা Listening Sec 3) আপনার সবচেয়ে বেশি সমস্যা হয়েছে তা লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d29-t6" class="task-checkbox">

                    <label for="d29-t6" class="task-label"><strong>Task 6:</strong> আগামী সপ্তাহের জন্য নিজের দুর্বলতাগুলো কাটানোর একটি সলিড স্টাডি প্ল্যান তৈরি করুন।</label>

                </div>

            `,

            30: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 30: The Ultimate Challenge - Full Mock Test 1 </strong><br>

                    আজ আমরা প্রথমবারের মতো একসাথে ৪টি মডিউলের পরীক্ষা দেবো। টানা ৩ ঘণ্টা ফোকাস ধরে রাখার প্র্যাকটিস!

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d30-t1" class="task-checkbox">

                    <label for="d30-t1" class="task-label"><strong>Task 1: Listening & Reading:</strong> কেমব্রিজ বই থেকে একটি সম্পূর্ণ Listening টেস্ট দিন এবং কোনো ব্রেক না নিয়ে সাথে সাথেই একটি সম্পূর্ণ Reading টেস্ট দিন (সময়: ১ ঘণ্টা ৪০ মিনিট)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d30-t2" class="task-checkbox">

                    <label for="d30-t2" class="task-label"><strong>Task 2: Writing:</strong> ১০ মিনিটের একটি ব্রেক নিন। এরপর ঘড়ি ধরে ঠিক ৬০ মিনিটে Writing Task 1 এবং Task 2 শেষ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d30-t3" class="task-checkbox">

                    <label for="d30-t3" class="task-label"><strong>Task 3: Speaking:</strong> ইউটিউব থেকে ১৫ মিনিটের একটি Full Speaking Mock টেস্ট দিন এবং নিজের ভয়েস রেকর্ড করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d30-t4" class="task-checkbox">

                    <label for="d30-t4" class="task-label"><strong>Task 4: Scoring:</strong> লিসেনিং এবং রিডিংয়ের উত্তর মিলিয়ে আপনার ব্যান্ড স্কোর (Band Score) কত আসলো তা ডায়েরিতে বড় করে লিখে রাখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d30-t5" class="task-checkbox">

                    <label for="d30-t5" class="task-label"><strong>Task 5:</strong> 'Media and Advertising' সম্পর্কিত ২০টি নতুন Academic শব্দ শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d30-t6" class="task-checkbox">

                    <label for="d30-t6" class="task-label"><strong>Task 6: Complete Rest:</strong> টানা ৩ ঘণ্টার পরীক্ষার পর ব্রেইনকে পুরোপুরি রেস্ট দিন। আজ আর কোনো ভারী পড়া নেই।</label>

                </div>

            `,

            31: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 31: Deep Post-Mock Analysis </strong><br>

                    গতকাল যে পরীক্ষা দিলেন, আজ তার ভুলগুলো নিয়ে অপারেশন বা কাঁটাছেঁড়া করার দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d31-t1" class="task-checkbox">

                    <label for="d31-t1" class="task-label"><strong>Task 1: Reading Autopsy:</strong> গতকালের রিডিং টেস্টে যে উত্তরগুলো ভুল হয়েছে, সেগুলো প্যাসেজে আবার খুঁজুন। ডিকশনারি ব্যবহার করে বুঝুন কেন আপনি ফাঁদে পা দিয়েছিলেন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d31-t2" class="task-checkbox">

                    <label for="d31-t2" class="task-label"><strong>Task 2: Listening Script Review:</strong> লিসেনিংয়ের ভুল হওয়া অংশগুলোর অডিও আবার প্লে করুন এবং স্ক্রিপ্ট দেখে মিলিয়ে নিন আপনার শোনার ভুল ছিল নাকি বানানের।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d31-t3" class="task-checkbox">

                    <label for="d31-t3" class="task-label"><strong>Task 3: Essay Evaluation:</strong> গতকালের লেখা এসেটি পড়ুন। দেখুন সেখানে Introduction, Body Paragraph 1 & 2 এবং Conclusion ঠিকমতো আলাদা করা আছে কি না।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d31-t4" class="task-checkbox">

                    <label for="d31-t4" class="task-label"><strong>Task 4: Speaking Fix:</strong> গতকালের স্পিকিং রেকর্ডিংটি শুনুন। যে প্রশ্নগুলোতে আটকে গিয়েছিলেন, সেগুলোর উত্তর নতুন করে সাজিয়ে আবার রেকর্ড করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d31-t5" class="task-checkbox">

                    <label for="d31-t5" class="task-label"><strong>Task 5:</strong> সাধারণ Adjective এর বদলে ২০টি Advanced Adjective শিখুন (যেমন: Very bad এর বদলে Terrible/Atrocious)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d31-t6" class="task-checkbox">

                    <label for="d31-t6" class="task-label"><strong>Task 6: (Transcription)</strong> ৫ মিনিটের একটি ইংলিশ পডকাস্ট হুবহু শুনে শুনে খাতায় লেখার প্র্যাকটিস করুন।</label>

                </div>

            `,

            32: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 32: Writing Marathon & Sentence Variation </strong><br>

                    আজ আমরা লেখার স্পিড এবং বাক্যের বৈচিত্র্য (Variations) বাড়ানোর ওপর জোর দেবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d32-t1" class="task-checkbox">

                    <label for="d32-t1" class="task-label"><strong>Task 1: Writing Task 1:</strong> ২টি ভিন্ন ধরনের গ্রাফ (যেমন: একটি Pie Chart এবং একটি Table) নিন। ঘড়ি ধরে ৪০ মিনিটে দুটিরই সম্পূর্ণ রিপোর্ট লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d32-t2" class="task-checkbox">

                    <label for="d32-t2" class="task-label"><strong>Task 2: Writing Task 2:</strong> "Discuss both views and give your opinion" ধরনের একটি প্রশ্ন নিন। লিখতে শিখুন এবং ৪০ মিনিটে সম্পূর্ণ এসে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d32-t3" class="task-checkbox">

                    <label for="d32-t3" class="task-label"><strong>Task 3: Sentence Variety:</strong> নিজের লেখা এসেগুলো চেক করুন। সব বাক্য কি 'Subject + Verb' দিয়ে শুরু হয়েছে? অন্তত ৩টি বাক্যের শুরুতে (Adverb বা Gerund) দিয়ে ভ্যারিয়েশন আনুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d32-t4" class="task-checkbox">

                    <label for="d32-t4" class="task-label"><strong>Task 4:</strong> রিডিং পড়ার স্পিড ধরে রাখতে যেকোনো একটি Reading Passage 3 ঠিক ২০ মিনিটে সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d32-t5" class="task-checkbox">

                    <label for="d32-t5" class="task-label"><strong>Task 5:</strong> ১৫টি Linking words শিখুন যেগুলো দিয়ে 'Contrast' বা বৈপরীত্য বোঝায় (যেমন: Nevertheless, In spite of, Conversely)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d32-t6" class="task-checkbox">

                    <label for="d32-t6" class="task-label"><strong>Task 6:</strong> ইউটিউব থেকে Band 9 এর একটি স্পিকিং ইন্টারভিউ দেখুন এবং স্পিকারের কনফিডেন্স ও বডি ল্যাঙ্গুয়েজ খেয়াল করুন।</label>

                </div>

            `,

            33: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 33: Reading Tricky Questions & Listening Section 1 </strong><br>

                    রিডিংয়ের কিছু বিরক্তিকর প্রশ্ন এবং লিসেনিংয়ের সহজ সেকশনে ফুল মার্কস নিশ্চিত করার প্র্যাকটিস।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d33-t1" class="task-checkbox">

                    <label for="d33-t1" class="task-label"><strong>Task 1:</strong> "Matching Features" এবং "Matching Sentence Endings" সলভ করার স্ট্র্যাটেজি ইউটিউব থেকে শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d33-t2" class="task-checkbox">

                    <label for="d33-t2" class="task-label"><strong>Task 2:</strong> কেমব্রিজ বই থেকে খুঁজে খুঁজে শুধুমাত্র এই ২ ধরনের প্রশ্ন ৩টি প্যাসেজ থেকে সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d33-t3" class="task-checkbox">

                    <label for="d33-t3" class="task-label"><strong>Task 3:</strong> Listening Section 1 এ ১০ এ ১০ পাওয়া বাধ্যতামূলক। পর পর ২টি Listening Section 1 টেস্ট দিন এবং ফুল মার্কস নিশ্চিত করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d33-t4" class="task-checkbox">

                    <label for="d33-t4" class="task-label"><strong>Task 4:</strong> 'Space and Universe' সম্পর্কিত ১৫টি ভোকাবুলারি খাতায় লিখুন এবং শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d33-t5" class="task-checkbox">

                    <label for="d33-t5" class="task-label"><strong>Task 5:</strong> স্পিকিং পার্ট ১ এর জন্য ৫টি কমন প্রশ্নের উত্তর এমনভাবে দিন যেন প্রতিটিতে ৩-৪ লাইন থাকে।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d33-t6" class="task-checkbox">

                    <label for="d33-t6" class="task-label"><strong>Task 6:</strong> ন্যাশনাল জিওগ্রাফিক (National Geographic) থেকে একটি বিজ্ঞান বিষয়ক আর্টিকেল ১৫ মিনিট মন দিয়ে পড়ুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d33-t7" class="task-checkbox">

                    <label for="d33-t7" class="task-label"><strong>Task 7:</strong> কোনো article দেখে দেখে ৩০ মিনিট সেটা typye করুন।</label>

                </div>

            `,

            34: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 34: Speaking Pronunciation & Advanced Structures </strong><br>

                    উচ্চারণ স্পষ্ট করা এবং স্পিকিংয়ে কিছু অ্যাডভান্সড গ্রামার ব্যবহারের কৌশল।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d34-t1" class="task-checkbox">

                    <label for="d34-t1" class="task-label"><strong>Task 1: Shadowing Practice:</strong> নেটিভ ইংলিশ স্পিকারদের কোনো অডিও বা ভিডিও চালু করে ১০ মিনিট ঠিক তাদের মতো টোন এবং স্টাইলে কথা বলার চেষ্টা করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d34-t2" class="task-checkbox">

                    <label for="d34-t2" class="task-label"><strong>Task 2:</strong> Speaking Part 2 এর জন্য ২টি কঠিন টপিক (যেমন: Describe a law you think is good) সিলেক্ট করুন। A.R.E.A মেথড ব্যবহার করে ২ মিনিট করে কথা বলুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d34-t3" class="task-checkbox">

                    <label for="d34-t3" class="task-label"><strong>Task 3: Advanced Grammar in Speaking:</strong> খাতায় ৩টি স্ট্রাকচার লিখুন (Not only...but also, Despite, I would rather) এবং স্পিকিংয়ের সময় এগুলো জোর করে ব্যবহার করার চেষ্টা করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d34-t4" class="task-checkbox">

                    <label for="d34-t4" class="task-label"><strong>Task 4:</strong> Listening Section 4 এর একটি ফুল পার্ট টেস্ট দিন এবং স্পেলিংগুলো ডাবল-চেক করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d34-t5" class="task-checkbox">

                    <label for="d34-t5" class="task-label"><strong>Task 5:</strong> 'Health and Diet' সম্পর্কিত ২৫টি নতুন Academic শব্দ খাতায় তুলে মুখস্থ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d34-t6" class="task-checkbox">

                    <label for="d34-t6" class="task-label"><strong>Task 6:</strong> যেকোনো একটি ইংরেজি নিউজ একটানা ৫ মিনিট জোরে জোরে পড়ে মুখের জড়তা কাটান।</label>

                </div>

            `,

            35: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 35: Mini Combo Mock (Listening + Reading) </strong><br>

                    স্ট্যামিনা টেস্টের জন্য আজ আবারও ব্যাক-টু-ব্যাক লিসেনিং এবং রিডিং পরীক্ষা।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d35-t1" class="task-checkbox">

                    <label for="d35-t1" class="task-label"><strong>Task 1: The Combo Test:</strong> কেমব্রিজের যেকোনো একটি ফুল টেস্ট সিলেক্ট করুন। প্রথমে লিসেনিং (৪০ মিনিট) এবং তার পরপরই রিডিং (৬০ মিনিট) পরীক্ষা দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d35-t2" class="task-checkbox">

                    <label for="d35-t2" class="task-label"><strong>Task 2: Score & Analyze:</strong> স্কোর হিসাব করুন। রিডিংয়ে কোন টাইপের প্রশ্নগুলো (যেমন: T/F/NG নাকি Headings) সবচেয়ে বেশি ভুল হলো তা আলাদা করে নোট করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d35-t3" class="task-checkbox">

                    <label for="d35-t3" class="task-label"><strong>Task 3:</strong> লিসেনিংয়ে যে উত্তরগুলো ধরতে পারেননি, স্ক্রিপ্ট বের করে আবার অডিওটি প্লে করুন এবং মিলিয়ে নিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d35-t4" class="task-checkbox">

                    <label for="d35-t4" class="task-label"><strong>Task 4: Writing Practice:</strong> একটি Task 2 টপিক নিন এবং পুরো এসে না লিখে শুধুমাত্র একটি স্ট্রং Introduction (৩ বাক্য) এবং Conclusion (২ বাক্য) লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d35-t5" class="task-checkbox">

                    <label for="d35-t5" class="task-label"><strong>Task 5:</strong> এই সপ্তাহে শেখা সবগুলো নতুন ভোকাভুলারি (প্রায় ৮০+ শব্দ) একবার রিভিশন দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d35-t6" class="task-checkbox">

                    <label for="d35-t6" class="task-label"><strong>Task 6:</strong> রিডিংয়ের স্পিড বাড়ানোর জন্য টাইম লিমিট ছাড়া একটি ছোট আর্টিকেল পড়ুন।</label>

                </div>

            `,

            36: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 36: Weekly Review & Reset </strong><br>

                    চতুর্থ সপ্তাহের মূল্যায়ন এবং নিজেকে রিবুট করার দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d36-t1" class="task-checkbox">

                    <label for="d36-t1" class="task-label"><strong>Task 1: Vocabulary Mega Test:</strong> এই সপ্তাহে খাতায় তোলা সবগুলো শব্দের ওপর নিজে নিজে টেস্ট দিন। ভুল শব্দগুলো ৩ বার করে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d36-t2" class="task-checkbox">

                    <label for="d36-t2" class="task-label"><strong>Task 2: Re-write Weakness:</strong> এই সপ্তাহে আপনার লেখা সবচেয়ে দুর্বল এসেটি (Essay) বের করুন। আগের চেয়ে আরও ভালো ভোকাবুলারি ব্যবহার করে সেটি নতুন করে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d36-t3" class="task-checkbox">

                    <label for="d36-t3" class="task-label"><strong>Task 3: Re-do Reading:</strong> গতকালের রিডিং টেস্টে যে প্যাসেজটিতে সবচেয়ে খারাপ করেছেন, আজ কোনো টাইমার ছাড়া সেটি ধীরে ধীরে আবার সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d36-t4" class="task-checkbox">

                    <label for="d36-t4" class="task-label"><strong>Task 4: Next Week Plan:</strong> ডায়েরি নিয়ে বসুন। আগামীকালের জন্য পড়ার ম্যাটেরিয়াল (কোন বই থেকে পরীক্ষা দেবেন) গুছিয়ে রাখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d36-t5" class="task-checkbox">

                    <label for="d36-t5" class="task-label"><strong>Task 5: English Entertainment:</strong> সাবটাইটেল ছাড়া (বা শুধু ইংরেজি সাবটাইটেল দিয়ে) একটি মুভি বা সিরিজ দেখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d36-t6" class="task-checkbox">

                    <label for="d36-t6" class="task-label"><strong>Task 6: Complete Disconnect:</strong> আজ আর কোনো সিরিয়াস পড়াশোনা নয়। আগামীকালের নতুন এনার্জির জন্য নিজেকে রিফ্রেশ করুন।</label>

                </div>

            `,

            37: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 37: Advanced Reading (Y/N/NG) & Writing Maps </strong><br>

                    রিডিংয়ের Yes/No/Not Given এবং রাইটিংয়ের Map সলভ করার টেকনিক ঝালাই করার দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d37-t1" class="task-checkbox">

                    <label for="d37-t1" class="task-label"><strong>Task 1:</strong> T/F/NG এবং Y/N/NG এর মধ্যে মূল পার্থক্য কী তা ইউটিউব থেকে পরিষ্কারভাবে বুঝে নিন (Y/N/NG সাধারণত লেখকের মতামত নিয়ে হয়)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d37-t2" class="task-checkbox">

                    <label for="d37-t2" class="task-label"><strong>Task 2:</strong> কেমব্রিজ বই থেকে একটি Reading Passage 3 সিলেক্ট করুন এবং ঘড়ি ধরে ২০ মিনিটে সম্পূর্ণ প্যাসেজ সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d37-t3" class="task-checkbox">

                    <label for="d37-t3" class="task-label"><strong>Task 3:</strong> Writing Task 1 এর জন্য একটি 'Map' (যেমন: একটি দ্বীপের আগের ও পরের চিত্র) বেছে নিন এবং ২৫ মিনিটে ১৫০ শব্দের রিপোর্ট লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d37-t4" class="task-checkbox">

                    <label for="d37-t4" class="task-label"><strong>Task 4:</strong> ডিরেকশন এবং পরিবর্তন বোঝানোর জন্য (যেমন: relocated, demolished, expanded) ১৫টি শব্দ খাতায় নোট করুন এবং মুখস্থ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d37-t5" class="task-checkbox">

                    <label for="d37-t5" class="task-label"><strong>Task 5:</strong> Speaking Part 2 এর যেকোনো একটি কিউ কার্ডে ২ মিনিট কথা বলুন এবং খেয়াল করুন আপনি 'Map' এর শেখা শব্দগুলো কথায় ব্যবহার করতে পারছেন কি না।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d37-t6" class="task-checkbox">

                    <label for="d37-t6" class="task-label"><strong>Task 6:</strong> 'History & Archaeology' সম্পর্কিত ২০টি নতুন শব্দ অর্থসহ খাতায় তুলুন।</label>

                </div>

            `,

            38: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 38: Full Listening Mock & Speaking Part 3 Deep Dive </strong><br>

                    লিসেনিংয়ে ফুল মার্কস টার্গেট করা এবং স্পিকিংয়ের যুক্তিমূলক প্রশ্নের প্রস্তুতি।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d38-t1" class="task-checkbox">

                    <label for="d38-t1" class="task-label"><strong>Task 1: Full Listening Test:</strong> হেডফোন লাগিয়ে সম্পূর্ণ ফোকাসড অবস্থায় কেমব্রিজ বই থেকে একটি ফুল লিসেনিং টেস্ট দিন (৪০ প্রশ্ন)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d38-t2" class="task-checkbox">

                    <label for="d38-t2" class="task-label"><strong>Task 2: Analysis:</strong> উত্তর মেলানোর পর দেখুন Section 3 (MCQ) এবং Section 4 এ কতগুলো ভুল হলো। স্ক্রিপ্ট পড়ে ভুলগুলোর কারণ বের করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d38-t3" class="task-checkbox">

                    <label for="d38-t3" class="task-label"><strong>Task 3: Speaking Part 3:</strong> ৩টি ভিন্ন পার্ট-৩ প্রশ্ন নিন (যেমন: Education, Future tech, Society নিয়ে)। প্রতিটি প্রশ্নের উত্তর AREA মেথডে ৪-৫ বাক্যে লিখে সাজান।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d38-t4" class="task-checkbox">

                    <label for="d38-t4" class="task-label"><strong>Task 4:</strong> লেখা উত্তরগুলো না দেখে জোরে জোরে বলার প্র্যাকটিস করুন এবং রেকর্ড করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d38-t5" class="task-checkbox">

                    <label for="d38-t5" class="task-label"><strong>Task 5:</strong> মতামত দেওয়ার জন্য ৫টি অ্যাডভান্সড ফ্রেজ শিখুন (যেমন: I firmly believe that, From my perspective, It is undeniable that)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d38-t6" class="task-checkbox">

                    <label for="d38-t6" class="task-label"><strong>Task 6:</strong> যেকোনো ইংরেজি পত্রিকা থেকে একটি 'Opinion/Editorial' কলাম পড়ুন।</label>

                </div>

            `,

            39: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 39: The Reading Marathon (3 Passages) </strong><br>

                    আজ টানা ১ ঘণ্টা শুধু রিডিং টেস্ট হবে। মনোযোগ না হারানোই আজকের চ্যালেঞ্জ।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d39-t1" class="task-checkbox">

                    <label for="d39-t1" class="task-label"><strong>Task 1: The Marathon:</strong> কেমব্রিজ বই থেকে সম্পূর্ণ একটি রিডিং টেস্ট (Passage 1, 2, 3) ঘড়ি ধরে ঠিক ৬০ মিনিটে সলভ করুন। কোনো বিরতি নেওয়া যাবে না।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d39-t2" class="task-checkbox">

                    <label for="d39-t2" class="task-label"><strong>Task 2: Scoring:</strong> উত্তর মিলিয়ে দেখুন ৪০ এর মধ্যে কত পেলেন। টার্গেট স্কোর থেকে আপনি কত দূরে আছেন তা ডায়েরিতে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d39-t3" class="task-checkbox">

                    <label for="d39-t3" class="task-label"><strong>Task 3: Mistake Review:</strong> যে প্রশ্নগুলো ভুল হয়েছে, সেগুলো কেন ভুল হলো তা প্যাসেজের লাইনগুলোর সাথে মিলিয়ে গভীরভাবে অ্যানালাইসিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d39-t4" class="task-checkbox">

                    <label for="d39-t4" class="task-label"><strong>Task 4:</strong> রিডিং প্যাসেজগুলোতে পাওয়া অজানা এবং কনফিউজিং ২৫টি শব্দ ডিকশনারি থেকে অর্থসহ খাতায় নোট করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d39-t5" class="task-checkbox">

                    <label for="d39-t5" class="task-label"><strong>Task 5:</strong> 'Animals and Wildlife' সম্পর্কিত ১৫টি ভোকাবুলারি খাতায় তুলে শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d39-t6" class="task-checkbox">

                    <label for="d39-t6" class="task-label"><strong>Task 6:</strong> টানা পড়ার পর ব্রেইনকে রেস্ট দিতে ১০ মিনিট বিবিসি লিসেনিং পডকাস্ট শুনুন চোখ বন্ধ করে।</label>

                </div>

            `,

            40: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 40: Writing Task 2 (Double/Direct Question) </strong><br>

                    রাইটিংয়ের একটু ভিন্ন ধরনের প্রশ্ন এবং লিসেনিংয়ের কঠিন সেকশনের প্র্যাকটিস।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d40-t1" class="task-checkbox">

                    <label for="d40-t1" class="task-label"><strong>Task 1:</strong> 'Two-part Question' বা 'Direct Question' Essay-এর স্ট্রাকচার ইউটিউব থেকে দেখে বুঝে নিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d40-t2" class="task-checkbox">

                    <label for="d40-t2" class="task-label"><strong>Task 2: Brainstorming:</strong> এ ধরনের একটি টপিক নিন। প্রথম প্রশ্নের জন্য ২টি পয়েন্ট এবং দ্বিতীয় প্রশ্নের জন্য ২টি পয়েন্ট ১০ মিনিটে খাতায় রেডি করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d40-t3" class="task-checkbox">

                    <label for="d40-t3" class="task-label"><strong>Task 3: Full Essay:</strong> ঘড়ি ধরে ৪০ মিনিটে সম্পূর্ণ এসেটি লিখুন (২৫০+ শব্দ)। নিশ্চিত করুন যে আপনি দুইটা প্রশ্নেরই সমান উত্তর দিয়েছেন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d40-t4" class="task-checkbox">

                    <label for="d40-t4" class="task-label"><strong>Task 4:</strong> Listening Section 3 এবং Section 4 থেকে একটি করে টেস্ট দিন এবং স্কোর চেক করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d40-t5" class="task-checkbox">

                    <label for="d40-t5" class="task-label"><strong>Task 5:</strong> রাইটিংয়ের জন্য ৫টি Complex এবং Compound Sentence এর স্ট্রাকচার আবার রিভিশন দিন এবং নিজের লেখায় মেলান।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d40-t6" class="task-checkbox">

                    <label for="d40-t6" class="task-label"><strong>Task 6:</strong> ইংরেজি সাবটাইটেলসহ একটি ১৫ মিনিটের TED Talk দেখুন।</label>

                </div>

            `,

            41: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 41: Full Mock Test 2 (L, R, W) </strong><br>

                    আজ পরীক্ষার আসল স্বাদ নেওয়ার দিন। টানা ২ ঘণ্টা ৪০ মিনিট ফোকাস ধরে রাখতে হবে।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d41-t1" class="task-checkbox">

                    <label for="d41-t1" class="task-label"><strong>Task 1: Setup:</strong> টেবিল পরিষ্কার করুন, ঘড়ি নিন, পানির বোতল রাখুন এবং রিয়েল এক্সাম পরিবেশ তৈরি করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d41-t2" class="task-checkbox">

                    <label for="d41-t2" class="task-label"><strong>Task 2: Listening & Reading:</strong> প্রথমে ৪০ মিনিটের লিসেনিং টেস্ট দিন এবং সাথে সাথে কোনো ব্রেক ছাড়া ৬০ মিনিটের রিডিং টেস্ট দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d41-t3" class="task-checkbox">

                    <label for="d41-t3" class="task-label"><strong>Task 3: Writing Test:</strong> ৫ মিনিটের ব্রেক নিয়ে ঠিক ৬০ মিনিটে Writing Task 1 এবং Task 2 সম্পন্ন করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d41-t4" class="task-checkbox">

                    <label for="d41-t4" class="task-label"><strong>Task 4: Scoring:</strong> রিডিং এবং লিসেনিংয়ের উত্তর মিলিয়ে আপনার ব্যান্ড স্কোর ডায়েরিতে লিখুন। দেখুন Day 30 এর মকের চেয়ে ইমপ্রুভ হলো কি না।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d41-t5" class="task-checkbox">

                    <label for="d41-t5" class="task-label"><strong>Task 5:</strong> 'Global Issues' সম্পর্কিত ১৫টি অ্যাডভান্সড ভোকাভুলারি শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d41-t6" class="task-checkbox">

                    <label for="d41-t6" class="task-label"><strong>Task 6:</strong> আজ অনেক বড় পরীক্ষা দিয়েছেন। আর কোনো পড়া নেই, নিজেকে সম্পূর্ণ রেস্ট দিন।</label>

                </div>

            `,

            42: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 42: Mock Test Analysis & Speaking Progress </strong><br>

                    গতকালের পরীক্ষার ভুলগুলো কাটাছেঁড়া করার দিন। ভুল থেকে শেখাই আসল প্রিপারেশন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d42-t1" class="task-checkbox">

                    <label for="d42-t1" class="task-label"><strong>Task 1: Reading Autopsy:</strong> গতকালের রিডিং মকে যে প্যাসেজটিতে সবচেয়ে কম মার্কস এসেছে, আজ কোনো টাইমার ছাড়া সেটি ধীরে ধীরে আবার সলভ করুন এবং লজিক বুঝুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d42-t2" class="task-checkbox">

                    <label for="d42-t2" class="task-label"><strong>Task 2: Listening Script:</strong> লিসেনিংয়ে বারবার ভুল হওয়া সেকশনটির অডিও প্লে করুন এবং স্ক্রিপ্ট দেখে লাইন বাই লাইন মিলিয়ে নিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d42-t3" class="task-checkbox">

                    <label for="d42-t3" class="task-label"><strong>Task 3: Essay Check:</strong> গতকালের লেখা এসেটি পড়ুন। দেখুন সেখানে পর্যাপ্ত লিংকিং ওয়ার্ড (Linking words) এবং ভোকাভুলারি রেঞ্জ ঠিক আছে কি না।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d42-t4" class="task-checkbox">

                    <label for="d42-t4" class="task-label"><strong>Task 4: Speaking Mock:</strong> ইউটিউবের "Speaking Mock Simulator" ব্যবহার করে ১৫ মিনিটের একটি সম্পূর্ণ স্পিকিং টেস্ট দিন এবং ভিডিও করে বা অডিও রেকর্ড করে রাখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d42-t5" class="task-checkbox">

                    <label for="d42-t5" class="task-label"><strong>Task 5:</strong> 'Art and Entertainment' সম্পর্কিত ২০টি নতুন শব্দ শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d42-t6" class="task-checkbox">

                    <label for="d42-t6" class="task-label"><strong>Task 6:</strong> ৫ মিনিট জোরে জোরে ইংরেজি নিউজ পেপার পড়ে মুখের জড়তা কাটান।</label>

                </div>

            `,

            43: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 43: Weekly Evaluation & Mental Reset </strong><br>

                    পঞ্চম সপ্তাহের মূল্যায়ন। এই সপ্তাহে মক টেস্টের কারণে যে ধকল গেছে তা রিকভার করার দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d43-t1" class="task-checkbox">

                    <label for="d43-t1" class="task-label"><strong>Task 1: Vocabulary Mega Test:</strong> এই সপ্তাহে খাতায় তোলা ১১০+ শব্দের ওপর নিজে নিজে টেস্ট দিন। ভুলগুলো লাল কালিতে মার্ক করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d43-t2" class="task-checkbox">

                    <label for="d43-t2" class="task-label"><strong>Task 2: Fix the Essay:</strong> Day 41 এর মক টেস্টে লেখা টাস্ক-২ এর এসেটি আজ ডিকশনারি এবং ভালো ভালো গ্রামার ব্যবহার করে একদম পারফেক্টলি নতুন করে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d43-t3" class="task-checkbox">

                    <label for="d43-t3" class="task-label"><strong>Task 3: Grammar Review:</strong> Punctuation (কমা, ফুলস্টপ, কোলন) এর সঠিক ব্যবহারের নিয়মগুলো একবার রিভিশন দিন, রাইটিংয়ে এগুলো খুব জরুরি।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d43-t4" class="task-checkbox">

                    <label for="d43-t4" class="task-label"><strong>Task 4: Self-Reflection:</strong> ডায়েরি নিয়ে বসুন। এই সপ্তাহে ফুল মক টেস্ট দিয়ে আপনার কেমন লেগেছে এবং আগামী মকে আপনার টার্গেট স্কোর কত তা লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d43-t5" class="task-checkbox">

                    <label for="d43-t5" class="task-label"><strong>Task 5:</strong> আগামী সপ্তাহের জন্য কেমব্রিজ বইয়ের কোন টেস্টগুলো সলভ করবেন তা আগে থেকেই গুছিয়ে রাখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d43-t6" class="task-checkbox">

                    <label for="d43-t6" class="task-label"><strong>Task 6: Relax:</strong> আজ আর কোনো পড়া নেই। একটি ভালো ইংরেজি সিনেমা দেখুন এবং ব্রেইনকে রেস্ট দিন।</label>

                </div>

            `,

            44: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 44: Reading Speed Drill & Listening Maps </strong><br>

                    আজ আমরা রিডিংয়ের স্পিড বাড়ানো এবং লিসেনিংয়ের ম্যাপ সলভ করার কাজ করবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d44-t1" class="task-checkbox">

                    <label for="d44-t1" class="task-label"><strong>Task 1: Reading Speed Drill:</strong> কেমব্রিজ থেকে Reading Passage 1 এবং 2 ব্যাক-টু-ব্যাক সলভ করুন। সময় নিবেন মাত্র ৩৫ মিনিট!</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d44-t2" class="task-checkbox">

                    <label for="d44-t2" class="task-label"><strong>Task 2: Listening Maps:</strong> লিসেনিংয়ের ম্যাপ এবং প্ল্যান লেবেলিং (Plan Labeling) এর ৩টি সেট কেমব্রিজ বই থেকে খুঁজে বের করে সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d44-t3" class="task-checkbox">

                    <label for="d44-t3" class="task-label"><strong>Task 3: Speaking Part 3:</strong> ৩টি কঠিন পার্ট-৩ প্রশ্ন নিন। প্রতিটি প্রশ্নের উত্তর AREA মেথড ব্যবহার করে ৩-৪ লাইনে দেওয়ার প্র্যাকটিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d44-t4" class="task-checkbox">

                    <label for="d44-t4" class="task-label"><strong>Task 4: Writing Task 2 Idea Generation:</strong> "Advantages/Disadvantages" টাইপের একটি এসে টপিক নিন। পুরোটা না লিখে শুধু Intro এবং Conclusion লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d44-t5" class="task-checkbox">

                    <label for="d44-t5" class="task-label"><strong>Task 5:</strong> 'Technology and AI' সম্পর্কিত ২০টি নতুন Academic শব্দ খাতায় তুলে মুখস্থ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d44-t6" class="task-checkbox">

                    <label for="d44-t6" class="task-label"><strong>Task 6: Pronunciation:</strong> বিবিসি লিসেনিং পডকাস্টের একটি ৫ মিনিটের অডিও চালু করে স্পিকারের সাথে সাথে জোরে জোরে রিডিং পড়ুন।</label>

                </div>

            `,

            45: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 45: Writing Double Charts & Full Task 2 </strong><br>

                    রাইটিংয়ের কঠিন গ্রাফ (Double Charts) এবং সম্পূর্ণ এসে লেখার প্র্যাকটিস।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d45-t1" class="task-checkbox">

                    <label for="d45-t1" class="task-label"><strong>Task 1: Writing Task 1 (Double Charts):</strong> যখন দুটি ভিন্ন গ্রাফ (যেমন: Pie Chart + Table) একসাথে থাকে, তা লেখার স্ট্রাকচার ইউটিউব থেকে শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d45-t2" class="task-checkbox">

                    <label for="d45-t2" class="task-label"><strong>Task 2:</strong> একটি Double Chart সিলেক্ট করে ঘড়ি ধরে ঠিক ২০ মিনিটে ১৫০+ শব্দের একটি সম্পূর্ণ রিপোর্ট লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d45-t3" class="task-checkbox">

                    <label for="d45-t3" class="task-label"><strong>Task 3: Writing Task 2:</strong> Advantages/Disadvantages টাইপের একটি টপিক নিয়ে ঠিক ৪০ মিনিটে ২৫০+ শব্দের সম্পূর্ণ এসে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d45-t4" class="task-checkbox">

                    <label for="d45-t4" class="task-label"><strong>Task 4: Reading Sentence Endings:</strong> Reading Passage 3 থেকে "Matching Sentence Endings" প্রশ্নগুলো খুঁজে ২টি প্যাসেজ সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d45-t5" class="task-checkbox">

                    <label for="d45-t5" class="task-label"><strong>Task 5:</strong> ১৫টি Advanced Verbs শিখুন (যেমন: Improve এর বদলে Alleviate/Mitigate/Enhance)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d45-t6" class="task-checkbox">

                    <label for="d45-t6" class="task-label"><strong>Task 6: Speaking Fluency:</strong> যেকোনো একটি টপিক নিয়ে কোনো স্টপ ছাড়া টানা ৩ মিনিট ইংরেজিতে কথা বলুন।</label>

                </div>

            `,

            46: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 46: Full Mock Test 3 (L, R, W) </strong><br>

                    পরীক্ষার দিন কাছে চলে আসছে। আজ সম্পূর্ণ ফোকাসড হয়ে ৩য় ফুল মক টেস্ট দেওয়ার দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d46-t1" class="task-checkbox">

                    <label for="d46-t1" class="task-label"><strong>Task 1: Listening & Reading Mock:</strong> টানা ১ ঘণ্টা ৪০ মিনিট সময় নিয়ে কেমব্রিজ বই থেকে সম্পূর্ণ লিসেনিং এবং রিডিং টেস্ট দিন। কোনো বিরতি নেই।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d46-t2" class="task-checkbox">

                    <label for="d46-t2" class="task-label"><strong>Task 2: Writing Mock:</strong> ১০ মিনিটের ব্রেক নিয়ে ঠিক ৬০ মিনিটে Writing Task 1 এবং Task 2 সম্পন্ন করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d46-t3" class="task-checkbox">

                    <label for="d46-t3" class="task-label"><strong>Task 3: Speaking Mock:</strong> ইউটিউবে "Speaking Mock Test Simulator" প্লে করে ১৫ মিনিটের ফুল স্পিকিং টেস্ট দিন এবং রেকর্ড করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d46-t4" class="task-checkbox">

                    <label for="d46-t4" class="task-label"><strong>Task 4: Scoring:</strong> রিডিং এবং লিসেনিংয়ের উত্তর মিলিয়ে আপনার ব্যান্ড স্কোর ডায়েরিতে লিখুন। দেখুন আপনার টার্গেট স্কোরের কত কাছে পৌঁছেছেন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d46-t5" class="task-checkbox">

                    <label for="d46-t5" class="task-label"><strong>Task 5: Essay Review:</strong> নিজের লেখা এসেগুলো একবার চোখ বুলিয়ে দেখুন বড় কোনো গ্রামাটিক্যাল ভুল আছে কি না।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d46-t6" class="task-checkbox">

                    <label for="d46-t6" class="task-label"><strong>Task 6: Deep Rest:</strong> অনেক পরিশ্রম হয়েছে। ব্রেইনকে পুরোপুরি রেস্ট দিন, আজ আর কোনো নতুন পড়া নেই।</label>

                </div>

            `,

            47: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 47: Mock Autopsy & Speaking Part 2 Mastery </strong><br>

                    গতকাল যে মক টেস্ট দিয়েছেন, আজ তার ভুলগুলো নিয়ে কাঁটাছেঁড়া (Autopsy) করার দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d47-t1" class="task-checkbox">

                    <label for="d47-t1" class="task-label"><strong>Task 1: Reading Deep Analysis:</strong> গতকালের রিডিং মকে ভুল হওয়া প্রশ্নগুলোর কারণ বের করুন। এটি কি ভোকাবুলারির অভাব, নাকি প্যারাফ্রেজিং বুঝতে না পারা?</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d47-t2" class="task-checkbox">

                    <label for="d47-t2" class="task-label"><strong>Task 2: Listening Script Review:</strong> লিসেনিংয়ের ভুল হওয়া অংশগুলোর অডিও আবার প্লে করুন এবং স্ক্রিপ্ট দেখে মিলিয়ে নিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d47-t3" class="task-checkbox">

                    <label for="d47-t3" class="task-label"><strong>Task 3: Rewrite Task 2:</strong> গতকালের মক টেস্টে লেখা Task 2 এসেটি আরও অ্যাডভান্সড ভোকাবুলারি এবং লিংকিং ওয়ার্ড ব্যবহার করে নতুন করে পারফেক্টলি লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d47-t4" class="task-checkbox">

                    <label for="d47-t4" class="task-label"><strong>Task 4: Speaking Part 2 Mastery:</strong> ৩টি র্যান্ডম কিউ কার্ড নিন। প্রতিটির জন্য ১ মিনিট নোট নিন এবং ঠিক ২ মিনিট কথা বলুন (টানা ৩টি সলভ করুন)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d47-t5" class="task-checkbox">

                    <label for="d47-t5" class="task-label"><strong>Task 5:</strong> 'Sports and Leisure' সম্পর্কিত ২০টি স্মার্ট ভোকাবুলারি খাতায় লিখুন এবং শিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d47-t6" class="task-checkbox">

                    <label for="d47-t6" class="task-label"><strong>Task 6:</strong> ইংরেজি পত্রিকার সম্পাদকীয় (Editorial) পাতা থেকে একটি কলাম ১৫ মিনিট ধরে পড়ুন।</label>

                </div>

            `,

            48: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 48: Section 3 & 4 Drill & Advanced Reading </strong><br>

                    লিসেনিং এবং রিডিংয়ের সবচেয়ে কঠিন অংশগুলো নিয়ে ইনটেনসিভ ড্রিলিং।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d48-t1" class="task-checkbox">

                    <label for="d48-t1" class="task-label"><strong>Task 1: Listening Hard Sections:</strong> কেমব্রিজ বই থেকে পর পর ২টি Listening Section 3 এবং ২টি Section 4 সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d48-t2" class="task-checkbox">

                    <label for="d48-t2" class="task-label"><strong>Task 2: Reading Traps:</strong> ২টি রিডিং প্যাসেজ থেকে শুধুমাত্র True/False/Not Given এবং Matching Headings প্রশ্নগুলো বেছে নিয়ে সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d48-t3" class="task-checkbox">

                    <label for="d48-t3" class="task-label"><strong>Task 3: Task 1 Map/Process:</strong> Writing Task 1 এর জন্য একটি Map অথবা Process diagram বেছে নিয়ে ২০ মিনিটে একটি রিপোর্ট লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d48-t4" class="task-checkbox">

                    <label for="d48-t4" class="task-label"><strong>Task 4: Speaking Part 3:</strong> যেকোনো একটি পার্ট-৩ টপিক নিয়ে কোনো ব্রেক ছাড়া টানা ৩ মিনিট কথা বলার স্ট্যামিনা প্র্যাকটিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d48-t5" class="task-checkbox">

                    <label for="d48-t5" class="task-label"><strong>Task 5: Cause & Effect Linking Words:</strong> রাইটিংয়ের জন্য ১৫টি লিংকিং ওয়ার্ড শিখুন (যেমন: Consequently, As a result, Stemming from)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d48-t6" class="task-checkbox">

                    <label for="d48-t6" class="task-label"><strong>Task 6:</strong> ইউটিউব বা নেটফ্লিক্সে একটি ইংরেজি ডকুমেন্টারি দেখুন (সাবটাইটেলসহ)।</label>

                </div>

            `,

            49: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 49: Full Mock Test 4 - Pushing Limits </strong><br>

                    ৬ষ্ঠ সপ্তাহের সবচেয়ে বড় চ্যালেঞ্জ। আজ আপনার টার্গেট স্কোর অর্জন করার চেষ্টা করুন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d49-t1" class="task-checkbox">

                    <label for="d49-t1" class="task-label"><strong>Task 1: Listening & Reading Mock:</strong> সম্পূর্ণ এক্সাম কন্ডিশনে ১ ঘণ্টা ৪০ মিনিটে লিসেনিং এবং রিডিং টেস্ট দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d49-t2" class="task-checkbox">

                    <label for="d49-t2" class="task-label"><strong>Task 2: Writing Mock:</strong> ঠিক ৬০ মিনিটে Writing Task 1 এবং Task 2 সম্পন্ন করুন। ঘড়ির কাঁটার দিকে কড়া নজর রাখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d49-t3" class="task-checkbox">

                    <label for="d49-t3" class="task-label"><strong>Task 3: Speaking Mock:</strong> ইউটিউবের স্পিকিং মক টেস্ট প্লে করে ১৫ মিনিট ইন্টারভিউ দিন এবং রেকর্ড করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d49-t4" class="task-checkbox">

                    <label for="d49-t4" class="task-label"><strong>Task 4: Score Calculation:</strong> স্কোর হিসাব করুন এবং আগের ৩টি মক টেস্টের স্কোরের সাথে তুলনা করে ডায়েরিতে একটি গ্রাফ বা লিস্ট তৈরি করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d49-t5" class="task-checkbox">

                    <label for="d49-t5" class="task-label"><strong>Task 5: Synonyms:</strong> সাধারণ শব্দের ১৫টি অ্যাডভান্সড সিনোনিম খাতায় লিখুন (যেমন: Important > Crucial, Bad > Detrimental)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d49-t6" class="task-checkbox">

                    <label for="d49-t6" class="task-label"><strong>Task 6: Recovery:</strong> আজকের পড়া এখানেই শেষ। ভালো খাবার খান এবং পর্যাপ্ত ঘুমান।</label>

                </div>

            `,

            50: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 50: Weekly Evaluation & The Final 10-Day Strategy </strong><br>

                    ৫০ দিনের একটি অসাধারণ মাইলফলকে আপনাকে অভিনন্দন! আজ আমরা শেষ ১০ দিনের প্ল্যান করবো।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d50-t1" class="task-checkbox">

                    <label for="d50-t1" class="task-label"><strong>Task 1: Vocabulary Mega Review:</strong> গত ৭ দিনে শেখা ১০০+ নতুন শব্দের ওপর সেলফ-টেস্ট দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d50-t2" class="task-checkbox">

                    <label for="d50-t2" class="task-label"><strong>Task 2: Grammar Fix:</strong> Complex Sentences এবং Conditional Clauses (If rules) এর স্ট্রাকচারগুলো আরেকবার ঝালাই করে নিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d50-t3" class="task-checkbox">

                    <label for="d50-t3" class="task-label"><strong>Task 3: Spelling Test:</strong> লিসেনিংয়ে কনফিউশন তৈরি করে এমন ৫০টি কঠিন শব্দের বানান (যেমন: Accommodation, Questionnaire) খাতায় লিখে টেস্ট দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d50-t4" class="task-checkbox">

                    <label for="d50-t4" class="task-label"><strong>Task 4: Self-Reflection:</strong> ৪টি মক টেস্ট দেওয়ার পর আপনার সবচেয়ে দুর্বল জায়গা কোনটি? ডায়েরিতে লিখুন এবং শেষ ১০ দিনে সেটা কীভাবে কাটাবেন তার প্ল্যান করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d50-t5" class="task-checkbox">

                    <label for="d50-t5" class="task-label"><strong>Task 5: Material Prep:</strong> শেষ ১০ দিনের জন্য কেমব্রিজ বইয়ের একদম নতুন টেস্টগুলো (যেগুলো আগে সলভ করেননি) আলাদা করে মার্ক করে রাখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d50-t6" class="task-checkbox">

                    <label for="d50-t6" class="task-label"><strong>Task 6: Mental Prep:</strong> নিজেকে মোটিভেট করুন। আপনি অনেক দূর এসেছেন, আর মাত্র ১০ দিনের সেরা এফোর্টই আপনার কাঙ্ক্ষিত স্কোর এনে দিতে পারে!</label>

                </div>

            `,

            51: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 51: Weakness Targeting & Intense Reading </strong><br>

                    আপনার সবচেয়ে দুর্বল পয়েন্টগুলোতে আজ শেষবারের মতো বড় অ্যাটাক দেওয়ার দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d51-t1" class="task-checkbox">

                    <label for="d51-t1" class="task-label"><strong>Task 1: Weakness Drill:</strong> আপনার যে ধরনের রিডিং প্রশ্নে (যেমন: Matching Headings বা T/F/NG) সবচেয়ে বেশি ভুল হয়, আজ শুধু সেই ধরনের ৪টি সেট খুঁজে সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d51-t2" class="task-checkbox">

                    <label for="d51-t2" class="task-label"><strong>Task 2: Listening Sec 3 & 4:</strong> লিসেনিংয়ের সবচেয়ে কঠিন দুটি সেকশন (Part 3 ও Part 4) ব্যাক-টু-ব্যাক ২টি টেস্ট দিন এবং স্পেলিংগুলো ডাবল চেক করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d51-t3" class="task-checkbox">

                    <label for="d51-t3" class="task-label"><strong>Task 3: Writing Task 1 Review:</strong> Bar, Pie, Table এবং Line graph - এই ৪টি চার্টের ৪টি ভিন্ন স্যাম্পল (Band 8+) শুধু রিডিং পড়ুন এবং তাদের স্ট্রাকচারগুলো মনে করার চেষ্টা করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d51-t4" class="task-checkbox">

                    <label for="d51-t4" class="task-label"><strong>Task 4: Speaking Part 2:</strong> "Describe a problem you solved" - এই টপিকের ওপর ২ মিনিট কথা বলুন। ট্রাই করুন ৩টি Complex Sentence এবং ২টি Idiom ব্যবহার করার।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d51-t5" class="task-checkbox">

                    <label for="d51-t5" class="task-label"><strong>Task 5:</strong> 'Workplace and Business' সম্পর্কিত ১৫টি অ্যাডভান্সড শব্দ খাতায় তুলে রিভিশন দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d51-t6" class="task-checkbox">

                    <label for="d51-t6" class="task-label"><strong>Task 6:</strong> ইংরেজি নিউজপেপার থেকে ১৫ মিনিট রিডিং পড়ে দ্রুত অর্থ বোঝার স্পিড প্র্যাকটিস করুন।</label>

                </div>

            `,

            52: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 52: Full Mock Test 5 - Exam Condition </strong><br>

                    আজ একদম রিয়েল এক্সামের ফিলিংস নিয়ে ৫ম মক টেস্ট দিতে হবে।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d52-t1" class="task-checkbox">

                    <label for="d52-t1" class="task-label"><strong>Task 1: Setup:</strong> Headphone এবং Keyboard নিয়ে একদম পরীক্ষার হলের মতো টেবিল গুছিয়ে বসুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d52-t2" class="task-checkbox">

                    <label for="d52-t2" class="task-label"><strong>Task 2: Listening & Reading:</strong> কেমব্রিজ থেকে সম্পূর্ণ নতুন একটি টেস্ট বেছে নিন। ১ ঘণ্টা ৪০ মিনিটে লিসেনিং ও রিডিং শেষ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d52-t3" class="task-checkbox">

                    <label for="d52-t3" class="task-label"><strong>Task 3: Writing:</strong> ৫ মিনিট ব্রেক নিয়ে ৬০ মিনিটে Task 1 এবং Task 2 কম্পিউটারে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d52-t4" class="task-checkbox">

                    <label for="d52-t4" class="task-label"><strong>Task 4: Speaking Mock:</strong> ইউটিউবে মক টেস্ট প্লে করে ১৫ মিনিটের ফুল স্পিকিং টেস্ট দিন এবং অডিও রেকর্ড করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d52-t5" class="task-checkbox">

                    <label for="d52-t5" class="task-label"><strong>Task 5: Score Calculation:</strong> রিডিং এবং লিসেনিংয়ের উত্তর মিলিয়ে স্কোর দেখুন। ডায়েরিতে লিখে রাখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d52-t6" class="task-checkbox">

                    <label for="d52-t6" class="task-label"><strong>Task 6: Rest:</strong> আজ আর কোনো এনালাইসিস নয়। ব্রেইনকে রেস্ট দিন, কারণ কালকের দিনটি হবে শুধু ভুল ধরার।</label>

                </div>

            `,

            53: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 53: Mock 5 Autopsy & Essay Polishing </strong><br>

                    গতকালের পরীক্ষার ভুলগুলো কাটাছেঁড়া করে পারফেকশনে পৌঁছানোর দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d53-t1" class="task-checkbox">

                    <label for="d53-t1" class="task-label"><strong>Task 1: Reading Deep Review:</strong> গতকালের রিডিংয়ে যে উত্তরগুলো ভুল হয়েছে, সেগুলো কেন ভুল হলো তার লজিকগুলো একটি খাতায় পয়েন্ট করে লিখুন (যেমন: 'Not Given' কে 'False' ভেবেছি)।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d53-t2" class="task-checkbox">

                    <label for="d53-t2" class="task-label"><strong>Task 2: Listening Script:</strong> লিসেনিংয়ে স্পেলিং ভুলের কারণে কত মার্কস কাটা গেলো তা হিসাব করুন এবং ভুল বানানগুলো ৫ বার করে সঠিকটি লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d53-t3" class="task-checkbox">

                    <label for="d53-t3" class="task-label"><strong>Task 3: Essay Polishing:</strong> গতকাল লেখা Task 2 এসেটি আবার পড়ুন। লিংকিং ওয়ার্ড এবং অ্যাডভান্সড ভোকাভুলারি দিয়ে সেটিকে আরও হাই-স্কোরিং এসেতে রূপান্তর করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d53-t4" class="task-checkbox">

                    <label for="d53-t4" class="task-label"><strong>Task 4: Speaking Part 3:</strong> ৩টি কঠিন টপিক নিয়ে কোনো প্রস্তুতি ছাড়া সরাসরি টানা ৩ মিনিট কথা বলার স্পিড ড্রিল করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d53-t5" class="task-checkbox">

                    <label for="d53-t5" class="task-label"><strong>Task 5:</strong> 'Society and Problems' সম্পর্কিত ২০টি নতুন একাডেমিক শব্দ মুখস্থ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d53-t6" class="task-checkbox">

                    <label for="d53-t6" class="task-label"><strong>Task 6:</strong> একটি ভালো ইংরেজি আর্টিকেল পড়ে ঘুমাতে যান।</label>

                </div>

            `,

            54: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 54: The Double Marathon (Extreme Stamina Builder) </strong><br>

                    পরীক্ষার হলে ব্রেইন যেন জ্যাম না হয়ে যায়, সেজন্য আজ চরম প্রেসার নেওয়ার দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d54-t1" class="task-checkbox">

                    <label for="d54-t1" class="task-label"><strong>Task 1: Reading Marathon:</strong> কোনো ব্রেক ছাড়া ব্যাক-টু-ব্যাক ২টি ফুল রিডিং টেস্ট (মোট ৬টি প্যাসেজ) সলভ করুন। সময় নিবেন ১ ঘণ্টা ৫০ মিনিট!</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d54-t2" class="task-checkbox">

                    <label for="d54-t2" class="task-label"><strong>Task 2: Listening Marathon:</strong> কোনো ব্রেক ছাড়া ব্যাক-টু-ব্যাক ২টি ফুল লিসেনিং টেস্ট (মোট ৮০ প্রশ্ন) সলভ করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d54-t3" class="task-checkbox">

                    <label for="d54-t3" class="task-label"><strong>Task 3: Score & Relax:</strong> উত্তর মিলিয়ে দেখুন আপনার ফোকাস লেভেল ঠিক আছে কি না। এরপর ২ ঘণ্টার একটি লম্বা ব্রেক নিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d54-t4" class="task-checkbox">

                    <label for="d54-t4" class="task-label"><strong>Task 4: Writing Task 1:</strong> একটি Process Diagram নিয়ে শুধু তার Vocabulary এবং Passive voice এর স্ট্রাকচারগুলো খাতায় সাজান।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d54-t5" class="task-checkbox">

                    <label for="d54-t5" class="task-label"><strong>Task 5: Speaking Fluency:</strong> "A historic place you visited" টপিকের ওপর ২ মিনিট কথা বলুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d54-t6" class="task-checkbox">

                    <label for="d54-t6" class="task-label"><strong>Task 6:</strong> আপনার নোটখাতা থেকে গ্রামারের সবগুলো রুলস একবার চোখ বুলিয়ে নিন।</label>

                </div>

            `,

            55: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 55: Writing Masterclass & Time Crunch ⏱</strong><br>

                    রাইটিংয়ে স্পিড এবং আইডিয়া জেনারেশন নিয়ে চূড়ান্ত ড্রিল।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d55-t1" class="task-checkbox">

                    <label for="d55-t1" class="task-label"><strong>Task 1: Idea Generation:</strong> ৫টি ভিন্ন ভিন্ন Task 2 এসে টপিক নিন। কোনোটি না লিখে, শুধু প্রতিটির জন্য ৩টি করে পয়েন্ট ৫ মিনিটে ভেবে বের করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d55-t2" class="task-checkbox">

                    <label for="d55-t2" class="task-label"><strong>Task 2: Speed Writing:</strong> একটি "Discuss both views" টপিক নিন। ঘড়ি ধরে ঠিক ৩৫ মিনিটে (৪০ এর বদলে) ২৫০ শব্দের সম্পূর্ণ এসে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d55-t3" class="task-checkbox">

                    <label for="d55-t3" class="task-label"><strong>Task 3: Task 1 Speed Drill:</strong> একটি Line Graph নিন এবং ঘড়ি ধরে ঠিক ১৫ মিনিটে সম্পূর্ণ রিপোর্ট লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d55-t4" class="task-checkbox">

                    <label for="d55-t4" class="task-label"><strong>Task 4: Self-Correction:</strong> লেখা শেষ করে নিজের ভুলগুলো (Spelling, Grammar, Article) নিজে কারেক্ট করার জন্য ৫ মিনিট সময় দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d55-t5" class="task-checkbox">

                    <label for="d55-t5" class="task-label"><strong>Task 5:</strong> Listening Section 1 এর যেকোনো ২টি টেস্ট সলভ করে ২০ এ ২০ মার্কস নিশ্চিত করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d55-t6" class="task-checkbox">

                    <label for="d55-t6" class="task-label"><strong>Task 6:</strong> 'Environment & Climate' নিয়ে ১৫টি শব্দ রিভিশন দিন।</label>

                </div>

            `,

            56: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 56: The Ultimate Mock Test 6 </strong><br>

                    পরীক্ষার আগের শেষ ফুল মক টেস্ট। আজ আপনার ১০০% ফোকাস থাকতে হবে।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d56-t1" class="task-checkbox">

                    <label for="d56-t1" class="task-label"><strong>Task 1: Pre-exam Routine:</strong> পরীক্ষার দিন ঠিক যেভাবে তৈরি হবেন, আজ সেভাবেই তৈরি হয়ে একটি শান্ত রুমে বসুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d56-t2" class="task-checkbox">

                    <label for="d56-t2" class="task-label"><strong>Task 2: The Final Mock:</strong> লিসেনিং, রিডিং এবং রাইটিং—এই ৩টি টেস্ট একদম রিয়েল এক্সাম কন্ডিশনে ২ ঘণ্টা ৪০ মিনিটে শেষ করুন। কোনো ব্রেক নেই!</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d56-t3" class="task-checkbox">

                    <label for="d56-t3" class="task-label"><strong>Task 3: Speaking Final Mock:</strong> ১৫ মিনিটের ফুল স্পিকিং মক টেস্ট দিন এবং রেকর্ড করে রাখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d56-t4" class="task-checkbox">

                    <label for="d56-t4" class="task-label"><strong>Task 4: Score Reveal:</strong> আপনার স্কোর হিসাব করুন। এটিই আপনার বর্তমান আসল লেভেল। টার্গেট স্কোর ছুঁতে পারলে নিজেকে বাহবা দিন!</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d56-t5" class="task-checkbox">

                    <label for="d56-t5" class="task-label"><strong>Task 5: Rest & Recover:</strong> আজকের এই বিশাল পরিশ্রমের পর আজ আর কোনো পড়া নেই। ব্রেইনকে পুরোপুরি খালি করে দিন।</label>

                </div>

            `,

            57: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 57: Fine Tuning & Minor Fixes </strong><br>

                    বড় কোনো পরীক্ষা নয়, আজ শুধু ছোটখাটো ভুল বা 'সিলি মিস্টেক' (Silly Mistakes) বন্ধ করার কাজ।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d57-t1" class="task-checkbox">

                    <label for="d57-t1" class="task-label"><strong>Task 1: Spelling Drill:</strong> আপনার ডায়েরিতে লেখা সব লিসেনিং স্পেলিং মিস্টেকগুলো একবার রিডিং পড়ুন এবং কঠিন বানানগুলো ৫ বার করে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d57-t2" class="task-checkbox">

                    <label for="d57-t2" class="task-label"><strong>Task 2: True/False/Not Given Trap:</strong> ২টি প্যাসেজ থেকে শুধু T/F/NG প্রশ্ন সলভ করুন এবং লজিক ক্লিয়ার রাখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d57-t3" class="task-checkbox">

                    <label for="d57-t3" class="task-label"><strong>Task 3: Task 2 Conclusion:</strong> ৩টি ভিন্ন এসে টপিক নিন এবং শুধুমাত্র তাদের 'Conclusion' পার্টটি স্ট্রং ভোকাভুলারি দিয়ে লিখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d57-t4" class="task-checkbox">

                    <label for="d57-t4" class="task-label"><strong>Task 4: Speaking Part 1 Polish:</strong> সাধারণ প্রশ্নগুলোর (Name, Hometown, Hobbies) খুব স্মার্ট এবং ফ্লুয়েন্ট উত্তর দেওয়ার প্র্যাকটিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d57-t5" class="task-checkbox">

                    <label for="d57-t5" class="task-label"><strong>Task 5:</strong> আপনার তৈরি করা 'Advanced Vocabulary' লিস্ট থেকে ৫০টি শব্দ রিভিশন দিন।</label>

                </div>

            `,

            58: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 58: Speed Run (Beating the Clock) ⏰</strong><br>

                    সময় বাঁচানোর সর্বশেষ প্র্যাকটিস। পরীক্ষার দিন যেন সময় কম না পড়ে, তার জন্য আজকের এই ড্রিল।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d58-t1" class="task-checkbox">

                    <label for="d58-t1" class="task-label"><strong>Task 1: Reading Speed Run:</strong> একটি ফুল রিডিং টেস্ট নিন। আজ আপনার টার্গেট এটি ৬০ মিনিটের জায়গায় ৫০ মিনিটে শেষ করা!</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d58-t2" class="task-checkbox">

                    <label for="d58-t2" class="task-label"><strong>Task 2: Writing Speed Run:</strong> Task 1 এবং Task 2 লেখার জন্য আজ ৬০ মিনিটের বদলে ৫০ মিনিট সময় নিন। স্পিড বাড়ান কিন্তু কোয়ালিটি ধরে রাখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d58-t3" class="task-checkbox">

                    <label for="d58-t3" class="task-label"><strong>Task 3: Listening Focus:</strong> একটি ফুল লিসেনিং টেস্ট দিন এবং খেয়াল রাখুন একটি সেকেন্ডের জন্যও যেন মনোযোগ না নড়ে।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d58-t4" class="task-checkbox">

                    <label for="d58-t4" class="task-label"><strong>Task 4: Speaking Shadows:</strong> ইংরেজি কোনো নেটিভ স্পিকারের পডকাস্ট চালু করে হুবহু তার মতো উচ্চারণ করে ১০ মিনিট কথা বলার প্র্যাকটিস করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d58-t5" class="task-checkbox">

                    <label for="d58-t5" class="task-label"><strong>Task 5:</strong> বাকি থাকা সব ভোকাভুলারি এবং লিংকিং ওয়ার্ডগুলো শেষবারের মতো রিভিশন দিন।</label>

                </div>

            `,

            59: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 59: The Final Review (Confidence Building) </strong><br>

                    আজ কোনো মক টেস্ট বা কঠিন পড়া নেই। যা পড়েছেন, শুধু তার ওপর চোখ বুলিয়ে কনফিডেন্স বাড়ানোর দিন।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d59-t1" class="task-checkbox">

                    <label for="d59-t1" class="task-label"><strong>Task 1: Note Review:</strong> আপনার তৈরি করা গ্রামার রুলস, রিডিং স্ট্র্যাটেজি এবং লিসেনিং টিপসগুলোর খাতাটি একবার প্রথম থেকে শেষ পর্যন্ত পড়ুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d59-t2" class="task-checkbox">

                    <label for="d59-t2" class="task-label"><strong>Task 2: Skim Reading:</strong> কোনো প্রশ্ন সলভ না করে শুধু ২-৩টি রিডিং প্যাসেজ রিল্যাক্স মুডে রিডিং পড়ুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d59-t3" class="task-checkbox">

                    <label for="d59-t3" class="task-label"><strong>Task 3: Essay Reading:</strong> নিজে কোনো এসে না লিখে, ব্যান্ড ৯ এর ৩টি এসে (Task 1 ও Task 2) শুধু রিডিং পড়ুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d59-t4" class="task-checkbox">

                    <label for="d59-t4" class="task-label"><strong>Task 4: Talk to Yourself:</strong> আয়নার সামনে দাঁড়িয়ে নিজের শখ, লক্ষ্য বা ফেভারিট টপিক নিয়ে হাসিমুখে ৫ মিনিট কথা বলুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d59-t5" class="task-checkbox">

                    <label for="d59-t5" class="task-label"><strong>Task 5: Stop Studying Early:</strong> আজ সন্ধ্যার পর আর কোনো বই ধরবেন না। ব্রেইনকে কুলডাউন হতে দিন।</label>

                </div>

            `,

            60: `

                <div style="margin-bottom: 15px;">

                    <strong>Day 60: The Exam Eve - Relax & Prepare </strong><br>

                    আপনার ৬০ দিনের অসাধারণ পরিশ্রমের শেষ দিন। আজ কোনো পড়ালেখা নেই, শুধু এক্সামের জন্য নিজেকে প্রস্তুত করা।

                </div>



                <div class="task-item">

                    <input type="checkbox" id="d60-t1" class="task-checkbox">

                    <label for="d60-t1" class="task-label"><strong>Task 1: No Studying!</strong> হ্যাঁ, ঠিক শুনেছেন। আজ বইয়ের পাতা উল্টানো সম্পূর্ণ নিষেধ। ব্রেইনকে ১০০% রেস্ট দিন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d60-t2" class="task-checkbox">

                    <label for="d60-t2" class="task-label"><strong>Task 2: Document Check:</strong> আপনার অরিজিনাল পাসপোর্ট/NID, এবং এর ফটোকপি সব একটি ব্যাগে গুছিয়ে রাখুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d60-t3" class="task-checkbox">

                    <label for="d60-t3" class="task-label"><strong>Task 3: Location Planning:</strong> এক্সাম সেন্টারে কীভাবে যাবেন, জ্যাম থাকতে পারে কি না তা ভেবে অন্তত ১ ঘণ্টা আগে পৌঁছানোর প্ল্যান করুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d60-t4" class="task-checkbox">

                    <label for="d60-t4" class="task-label"><strong>Task 4: Light Entertainment:</strong> নিজেকে চিন্তামুক্ত রাখতে আপনার পছন্দের কোনো মুভি দেখুন বা হালকা গান শুনুন।</label>

                </div>

                <div class="task-item">

                    <input type="checkbox" id="d60-t5" class="task-checkbox">

                    <label for="d60-t5" class="task-label"><strong>Task 5: Sleep Early:</strong> পরীক্ষার দিন ব্রেইনের সেরা পারফরম্যান্সের জন্য আজ রাতে অন্তত ৮ ঘণ্টা গভীর ঘুম অত্যন্ত জরুরি। শুভরাত্রি এবং পরীক্ষার জন্য শুভকামনা!</label>

                </div>

            `

           

        };
