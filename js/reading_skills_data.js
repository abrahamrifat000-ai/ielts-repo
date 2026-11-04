// Reading Skills Passages: 30 Interactive Passages (10 Easy, 10 Medium, 10 Hard)
// Includes per-paragraph notes, A1-A2 simplified summaries, and academic vocabulary

const READING_SKILLS_PASSAGES = [
  {
    "id": "easy-1",
    "level": "easy",
    "levelLabel": "Easy (Band 5.0 - 6.0)",
    "levelColor": "green",
    "title": "The Secret Life of Honeybees",
    "topic": "Nature & Animals",
    "estimatedMinutes": 3,
    "wordCount": 260,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph 1",
        "text": "Honeybees are among the most hard-working creatures on Earth. A single beehive contains thousands of bees, all working together like a small city. At the center of the colony is the queen bee, whose primary job is to lay eggs. Worker bees, which are all female, fly out to find flowers, collect sweet nectar, and bring it back to produce golden honey.",
        "paraSummaryA1": "Honeybees live in big groups with one queen and many worker bees who find flowers to make honey."
      },
      {
        "id": "p2",
        "label": "Paragraph 2",
        "text": "Communication inside the dark hive is fascinating. When a honeybee discovers a good patch of flowers, it performs a special movement called the 'waggle dance'. This dance shows the other bees the exact direction and distance of the flowers relative to the sun. Within minutes, other bees fly directly to the food source without getting lost.",
        "paraSummaryA1": "Bees dance in a special way to tell other bees where to find sweet flowers."
      },
      {
        "id": "p3",
        "label": "Paragraph 3",
        "text": "Bees also play a critical role in global agriculture. While gathering nectar, yellow pollen sticks to their furry legs and bodies. As they move from bloom to bloom, they pollinate fruits, vegetables, and nuts. Experts estimate that one out of every three bites of food we eat depends on bee pollination.",
        "paraSummaryA1": "Bees help plants grow food like fruits and vegetables by carrying pollen between flowers."
      }
    ],
    "overallSummaryA1": "Honeybees live in organized colonies where worker bees make honey, communicate food locations through dancing, and help grow one-third of our fruits and vegetables.",
    "keyVocab": [
      {
        "word": "Colony",
        "meaning": "A group of animals living closely together (যেমন মৌমাছির দল বা বসতি)"
      },
      {
        "word": "Nectar",
        "meaning": "Sweet liquid produced by flowers (ফুলের মিষ্টি রস)"
      },
      {
        "word": "Pollinate",
        "meaning": "To carry pollen to a flower so it can make seeds and fruits (পরাগায়ন করা)"
      }
    ]
  },
  {
    "id": "easy-2",
    "level": "easy",
    "levelLabel": "Easy (Band 5.0 - 6.0)",
    "levelColor": "green",
    "title": "How the Bicycle Changed the World",
    "topic": "History & Society",
    "estimatedMinutes": 3,
    "wordCount": 250,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph 1",
        "text": "In the late 19th century, a simple mechanical invention revolutionized daily transport: the modern bicycle. Before bicycles became popular, ordinary people either had to walk long distances or pay expensive fares for horse-drawn carriages. The bicycle offered personal freedom at an affordable price.",
        "paraSummaryA1": "The bicycle gave common people a cheap and fast way to travel anywhere without horses."
      },
      {
        "id": "p2",
        "label": "Paragraph 2",
        "text": "The bicycle also had a profound impact on women's rights. During the 1890s, women began riding bicycles in large numbers. To ride comfortably, they stopped wearing heavy Victorian dresses and adopted lighter clothing such as bloomers. Famous civil rights leaders said the bicycle did more to emancipate women than anything else.",
        "paraSummaryA1": "Riding bicycles helped women gain independence and wear simpler, more comfortable clothes."
      },
      {
        "id": "p3",
        "label": "Paragraph 3",
        "text": "Today, as cities battle traffic congestion and air pollution, bicycles are experiencing a massive comeback. Many European capitals, such as Amsterdam and Copenhagen, have built extensive cycling lanes where thousands of commuters ride to work every day, reducing carbon emissions and keeping citizens healthy.",
        "paraSummaryA1": "Today, bicycles are popular again in modern cities because they cause no pollution and keep people fit."
      }
    ],
    "overallSummaryA1": "The bicycle provided affordable personal transport in the 1800s, helped women gain freedom, and remains one of the cleanest travel methods in modern cities.",
    "keyVocab": [
      {
        "word": "Revolutionize",
        "meaning": "To change something completely and dramatically (আমূল পরিবর্তন করা)"
      },
      {
        "word": "Emancipate",
        "meaning": "To set someone free from social or legal restrictions (মুক্ত করা)"
      },
      {
        "word": "Congestion",
        "meaning": "Overcrowding or severe traffic blockage (যানজট বা ভিড়)"
      }
    ]
  },
  {
    "id": "easy-3",
    "level": "easy",
    "levelLabel": "Easy (Band 5.0 - 6.0)",
    "levelColor": "green",
    "title": "The Wonders of the Great Barrier Reef",
    "topic": "Environment & Nature",
    "estimatedMinutes": 3,
    "wordCount": 270,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph 1",
        "text": "Stretching along the northeastern coast of Australia, the Great Barrier Reef is the largest living structure on Earth. It is so enormous that it can even be seen from space. Despite its size, the reef was created by billions of tiny marine animals called coral polyps that build hard calcium shells over thousands of years.",
        "paraSummaryA1": "The Great Barrier Reef is a huge underwater wall built by tiny creatures called coral polyps."
      },
      {
        "id": "p2",
        "label": "Paragraph 2",
        "text": "The reef serves as an underwater sanctuary for countless marine species. Over 1,500 species of fish, 30 species of whales and dolphins, and six types of endangered sea turtles swim among its colourful coral formations. For scientists, it is one of the most biodiverse ecosystems in the ocean.",
        "paraSummaryA1": "Thousands of colorful fish, turtles, and whales live safely inside the coral reef."
      },
      {
        "id": "p3",
        "label": "Paragraph 3",
        "text": "Unfortunately, climate change poses a major threat to this natural treasure. When seawater becomes too warm, corals expel the colorful algae that nourish them. This causes the coral to turn completely white in a process known as coral bleaching. Conservationists worldwide are actively working to protect this delicate marine haven.",
        "paraSummaryA1": "Warm ocean water causes corals to turn white and get sick, so people must protect them."
      }
    ],
    "overallSummaryA1": "Australia's Great Barrier Reef is a massive underwater home for thousands of marine species, but rising sea temperatures now put its corals in danger.",
    "keyVocab": [
      {
        "word": "Sanctuary",
        "meaning": "A safe haven or protected wildlife refuge (অভয়ারণ্য বা নিরাপদ স্থান)"
      },
      {
        "word": "Biodiverse",
        "meaning": "Having many different kinds of living plants and animals (জীববৈচিত্র্যপূর্ণ)"
      },
      {
        "word": "Bleaching",
        "meaning": "Losing natural color and becoming pale or white (রং হারিয়ে সাদা হয়ে যাওয়া)"
      }
    ]
  },
  {
    "id": "easy-4",
    "level": "easy",
    "levelLabel": "Easy (Band 5.0 - 6.0)",
    "levelColor": "green",
    "title": "Why We Need Sleep",
    "topic": "Health & Biology",
    "estimatedMinutes": 3,
    "wordCount": 260,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph 1",
        "text": "We spend approximately one-third of our lives asleep, yet many people do not realize how vital rest is for our survival. While our body appears completely inactive, our brain is busy carrying out essential maintenance work that keeps our mind and immune system sharp.",
        "paraSummaryA1": "Sleep is necessary because our brain does important repair work while our body rests."
      },
      {
        "id": "p2",
        "label": "Paragraph 2",
        "text": "During deep sleep, the brain sorts through memories gathered during the day. It strengthens important information while discarding trivial details. Sleep also triggers the release of growth hormones that repair damaged muscle tissue and fight off dangerous infections.",
        "paraSummaryA1": "Sleeping helps our brain remember what we learned and helps our muscles heal."
      },
      {
        "id": "p3",
        "label": "Paragraph 3",
        "text": "Chronic sleep deprivation, on the other hand, impairs memory, slows reaction times, and increases the risk of heart disease. Doctors recommend that adults get at least seven to eight hours of regular sleep every night to maintain optimal physical and mental health.",
        "paraSummaryA1": "Not getting enough sleep makes people sick and forgetful, so adults need 7-8 hours nightly."
      }
    ],
    "overallSummaryA1": "Sleep is essential for human health because the brain repairs tissues, organizes daily memories, and strengthens the immune system during the night.",
    "keyVocab": [
      {
        "word": "Essential",
        "meaning": "Extremely important and necessary (অপরিহার্য বা অত্যন্ত জরুরি)"
      },
      {
        "word": "Deprivation",
        "meaning": "The lack or loss of something needed (বঞ্চনা বা অভাব)"
      },
      {
        "word": "Impair",
        "meaning": "To damage or make something weaker (ক্ষতিগ্রস্ত বা দুর্বল করা)"
      }
    ]
  },
  {
    "id": "easy-5",
    "level": "easy",
    "levelLabel": "Easy (Band 5.0 - 6.0)",
    "levelColor": "green",
    "title": "The History of Chocolate",
    "topic": "Culture & Food",
    "estimatedMinutes": 3,
    "wordCount": 250,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph 1",
        "text": "Chocolate originated in Central and South America thousands of years ago. Ancient Mayans and Aztecs harvested seeds from cacao trees and ground them into a bitter, frothy beverage mixed with chili peppers and water. They prized cacao beans so highly that they even used them as currency to buy goods.",
        "paraSummaryA1": "Ancient Mayans and Aztecs first made a spicy, bitter drink from cacao seeds and used seeds like money."
      },
      {
        "id": "p2",
        "label": "Paragraph 2",
        "text": "In the 16th century, Spanish explorers brought cacao beans to Europe. European aristocrats loved the drink but disliked its spicy bitterness. They began mixing it with cane sugar, cinnamon, and vanilla, transforming it into a luxury beverage enjoyed exclusively by royal courts and wealthy families.",
        "paraSummaryA1": "Spanish travelers brought cacao to Europe, where people added sugar to make it sweet and luxurious."
      },
      {
        "id": "p3",
        "label": "Paragraph 3",
        "text": "During the Industrial Revolution, inventors developed machines that could extract cocoa butter and press cacao into solid bars. Soon after, milk chocolate was invented in Switzerland. Today, chocolate is enjoyed worldwide as an accessible sweet treat.",
        "paraSummaryA1": "New machines made solid chocolate bars with milk, turning it into a popular snack worldwide."
      }
    ],
    "overallSummaryA1": "Chocolate began as a sacred bitter drink in ancient America, was sweetened with sugar in Europe, and eventually became modern sweet chocolate bars.",
    "keyVocab": [
      {
        "word": "Currency",
        "meaning": "A system of money in common use (মুদ্রা বা বিনিময়ের মাধ্যম)"
      },
      {
        "word": "Aristocrat",
        "meaning": "A member of the highest social class or nobility (অভিজাত ব্যক্তি)"
      },
      {
        "word": "Accessible",
        "meaning": "Easy to obtain, reach, or afford (সহজলভ্য বা সহজে পাওয়া যায় এমন)"
      }
    ]
  },
  {
    "id": "easy-6",
    "level": "easy",
    "levelLabel": "Easy (Band 5.0 - 6.0)",
    "levelColor": "green",
    "title": "Animals with Amazing Memories",
    "topic": "Science & Nature",
    "estimatedMinutes": 3,
    "wordCount": 260,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph 1",
        "text": "There is an old saying that 'an elephant never forgets,' and scientific research confirms that this is surprisingly true. Older female elephants, known as matriarchs, can remember the precise locations of waterholes and feeding grounds they visited decades earlier, saving their herds during severe droughts.",
        "paraSummaryA1": "Elephants have incredible memory and can remember water spots they visited many years ago."
      },
      {
        "id": "p2",
        "label": "Paragraph 2",
        "text": "Birds also possess extraordinary memory capabilities. For example, the Clark's nutcracker, a small mountain bird, buries up to 30,000 seeds across thousands of scattered locations each autumn. In the dead of winter under thick snow, the bird retrieves over 90 percent of its hidden seeds accurately.",
        "paraSummaryA1": "A small mountain bird hides 30,000 seeds in autumn and finds almost all of them in winter snow."
      },
      {
        "id": "p3",
        "label": "Paragraph 3",
        "text": "Even dolphins show long-term social memory. Experiments have revealed that dolphins recognize the unique signature whistles of their former tank mates even after being separated for more than twenty years, demonstrating social bonds as strong as those of humans.",
        "paraSummaryA1": "Dolphins can recognize their friends' special whistle sounds even after 20 years apart."
      }
    ],
    "overallSummaryA1": "Elephants, birds, and dolphins possess extraordinary memory systems that allow them to find distant water, locate buried seeds, and recognize old companions decades later.",
    "keyVocab": [
      {
        "word": "Matriarch",
        "meaning": "A female who rules or leads a family or herd (পরিবার বা পালের নারী প্রধান)"
      },
      {
        "word": "Drought",
        "meaning": "A prolonged period of abnormally low rainfall (খরা বা অনাবৃষ্টি)"
      },
      {
        "word": "Retrieve",
        "meaning": "To find and bring something back (খুঁজে বের করে ফিরিয়ে আনা)"
      }
    ]
  },
  {
    "id": "easy-7",
    "level": "easy",
    "levelLabel": "Easy (Band 5.0 - 6.0)",
    "levelColor": "green",
    "title": "How Tea Became a Global Drink",
    "topic": "History & Culture",
    "estimatedMinutes": 3,
    "wordCount": 250,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph 1",
        "text": "According to Chinese legend, tea was discovered by Emperor Shennong over 4,000 years ago when wind blew wild Camellia leaves into his pot of boiling water. Intrigued by the fragrant aroma and refreshing taste, the emperor encouraged its cultivation throughout ancient China.",
        "paraSummaryA1": "Tea was discovered in ancient China when wild leaves accidentally fell into an emperor's boiling water."
      },
      {
        "id": "p2",
        "label": "Paragraph 2",
        "text": "Tea remained a closely guarded Chinese secret for centuries. However, in the 17th century, Dutch and British merchants started shipping dried tea leaves back to Europe. In Britain, drinking afternoon tea quickly evolved from an aristocratic ritual into a beloved national tradition across all social classes.",
        "paraSummaryA1": "European traders carried tea to Britain, where having afternoon tea became a beloved daily habit."
      },
      {
        "id": "p3",
        "label": "Paragraph 3",
        "text": "Today, tea is the second most consumed beverage on Earth after plain water. From Japanese matcha and Indian spiced chai to Moroccan mint tea, diverse cultures enjoy tea not only for its comforting flavor but also for its rich antioxidant health benefits.",
        "paraSummaryA1": "Today, tea is the most popular drink after water, enjoyed across many cultures for taste and health."
      }
    ],
    "overallSummaryA1": "Discovered accidentally in ancient China, tea spread across global trade routes and has become the world's most widely consumed beverage after water.",
    "keyVocab": [
      {
        "word": "Cultivation",
        "meaning": "The planting and growing of crops or plants (চাষাবাদ)"
      },
      {
        "word": "Ritual",
        "meaning": "An established custom, ceremony, or routine (রীতি বা আচার)"
      },
      {
        "word": "Antioxidant",
        "meaning": "A healthy substance that protects cells from damage (অ্যান্টিঅক্সিডেন্ট বা রোগ প্রতিরোধক উপাদান)"
      }
    ]
  },
  {
    "id": "easy-8",
    "level": "easy",
    "levelLabel": "Easy (Band 5.0 - 6.0)",
    "levelColor": "green",
    "title": "The Sahara Desert: Life in the Sand",
    "topic": "Geography & Nature",
    "estimatedMinutes": 3,
    "wordCount": 260,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph 1",
        "text": "Spanning across northern Africa, the Sahara is the largest hot desert in the world, covering an area nearly as large as the entire United States. Daytime temperatures frequently exceed 50 degrees Celsius, and rainfall is virtually nonexistent in many central regions for years at a time.",
        "paraSummaryA1": "The Sahara is a huge, burning-hot desert in North Africa where it rarely rains."
      },
      {
        "id": "p2",
        "label": "Paragraph 2",
        "text": "Despite these unforgiving conditions, life persists through remarkable evolutionary adaptations. Camels can survive for weeks without drinking water by storing fat in their humps and minimizing perspiration. Tiny desert fennec foxes have oversized ears that radiate heat away from their bodies to stay cool.",
        "paraSummaryA1": "Animals like camels and big-eared foxes have special body features to survive the dry heat."
      },
      {
        "id": "p3",
        "label": "Paragraph 3",
        "text": "Centuries ago, the Sahara was not dry sand, but a lush landscape with lakes, rivers, and wandering wildlife. Prehistoric rock paintings discovered in desert caves prove that ancient humans once fished, hunted, and grazed cattle in what is now barren arid land.",
        "paraSummaryA1": "Ancient cave paintings show that long ago the Sahara had green grass, lakes, and wild animals."
      }
    ],
    "overallSummaryA1": "Although the Sahara Desert is extremely hot and dry today, animals have adapted cleverly to survive, and ancient paintings prove it was once green and full of lakes.",
    "keyVocab": [
      {
        "word": "Unforgiving",
        "meaning": "Harsh, severe, and difficult to survive in (কঠোর বা প্রতিকূল)"
      },
      {
        "word": "Adaptation",
        "meaning": "A physical change that helps an organism survive (অভিযোজন)"
      },
      {
        "word": "Barren",
        "meaning": "Too poor or dry to produce much vegetation (অনুর্বর বা ঊষর)"
      }
    ]
  },
  {
    "id": "easy-9",
    "level": "easy",
    "levelLabel": "Easy (Band 5.0 - 6.0)",
    "levelColor": "green",
    "title": "The Invention of Paper",
    "topic": "History & Technology",
    "estimatedMinutes": 3,
    "wordCount": 250,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph 1",
        "text": "Before paper existed, early civilizations wrote on clay tablets, stone, animal skins (parchment), or strips of bamboo. These materials were heavy, expensive, and clumsy to store. In 105 AD, a Chinese court official named Cai Lun invented an affordable writing surface made from mulberry bark, hemp, and old rags.",
        "paraSummaryA1": "Before paper, writing on stone and skins was hard, until a Chinese official made paper from tree bark and cloth."
      },
      {
        "id": "p2",
        "label": "Paragraph 2",
        "text": "The papermaking process involved mashing plant fibers in water, pressing the pulp into flat sheets, and letting them dry under the sun. This created a smooth, lightweight sheet that held ink effortlessly. The Chinese government kept the secret of papermaking safe for over five centuries.",
        "paraSummaryA1": "They mashed plants in water and dried the flat sheets to make light, smooth paper."
      },
      {
        "id": "p3",
        "label": "Paragraph 3",
        "text": "Gradually, papermaking spread along Silk Road trade routes to the Islamic world and Europe. Inexpensive paper paved the way for Johannes Gutenberg's printing press in the 15th century, sparking a massive explosion of books, education, and scientific literacy worldwide.",
        "paraSummaryA1": "Paper traveled to Europe and allowed books to be printed cheaply, helping millions learn to read."
      }
    ],
    "overallSummaryA1": "Paper was invented in ancient China using mashed plant fibers, replacing heavy animal skins and enabling the rapid printing of books across the modern world.",
    "keyVocab": [
      {
        "word": "Parchment",
        "meaning": "Stiff animal skin prepared as a surface for writing (পশুর চামড়ার তৈরি লেখার কাগজ)"
      },
      {
        "word": "Pulp",
        "meaning": "A soft, wet mass of crushed fibers (কাগজ তৈরির মণ্ড বা নরম লেই)"
      },
      {
        "word": "Literacy",
        "meaning": "The ability to read and write (স্বাক্ষরতা বা লেখাপড়ার যোগ্যতা)"
      }
    ]
  },
  {
    "id": "easy-10",
    "level": "easy",
    "levelLabel": "Easy (Band 5.0 - 6.0)",
    "levelColor": "green",
    "title": "Why Plants Need Sunlight",
    "topic": "Science & Nature",
    "estimatedMinutes": 3,
    "wordCount": 260,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph 1",
        "text": "Unlike animals that must eat food to survive, green plants create their own nourishment directly from natural elements. The secret behind this ability is a biochemical process called photosynthesis. Without sunlight, virtually all plant life on our planet would perish within a few short weeks.",
        "paraSummaryA1": "Plants make their own food using sunlight in a process called photosynthesis."
      },
      {
        "id": "p2",
        "label": "Paragraph 2",
        "text": "Plant leaves contain tiny cellular factories filled with a green pigment called chlorophyll. Chlorophyll captures solar energy from sunlight and uses it to convert carbon dioxide gas from the air and water from the soil into simple glucose sugars, which feed the growing plant.",
        "paraSummaryA1": "Green leaves use chlorophyll to turn sunlight, air, and water into food sugars."
      },
      {
        "id": "p3",
        "label": "Paragraph 3",
        "text": "A crucial byproduct of photosynthesis is fresh oxygen. As plants generate energy for themselves, they release clean oxygen back into the atmosphere for humans and animals to breathe. Thus, sunlight powers both the plant kingdom and all breathing life on Earth.",
        "paraSummaryA1": "While making food, plants release oxygen into the air for humans and animals to breathe."
      }
    ],
    "overallSummaryA1": "Through photosynthesis, green plants use sunlight to convert carbon dioxide and water into food energy, while simultaneously producing the oxygen that all animals need to breathe.",
    "keyVocab": [
      {
        "word": "Nourishment",
        "meaning": "Food or sustenance necessary for growth and health (পুষ্টি বা খাদ্য)"
      },
      {
        "word": "Chlorophyll",
        "meaning": "The green chemical in plants that absorbs sunlight (ক্লোরোফিল বা সবুজ রঞ্জক)"
      },
      {
        "word": "Byproduct",
        "meaning": "A secondary product made during a main process (উপজাত বা অতিরিক্ত ফলাফল)"
      }
    ]
  },
  {
    "id": "med-1",
    "level": "medium",
    "levelLabel": "Medium (Band 6.5 - 7.5)",
    "levelColor": "amber",
    "title": "The Architecture of Roman Aqueducts",
    "topic": "History & Engineering",
    "estimatedMinutes": 4,
    "wordCount": 320,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "The ancient Romans were master engineers whose civil infrastructure transformed urban living across the Mediterranean basin. Among their most celebrated achievements were the monumental aqueducts—vast networks of channels, tunnels, and tiered stone arches designed to transport fresh water from distant mountain springs directly into crowded city centers.",
        "paraSummaryA1": "Ancient Romans built giant stone bridges and water pipes to bring fresh mountain water to cities."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "The operational brilliance of Roman aqueducts lay in their reliance on gravity rather than mechanical pumps. Engineers calculated minute gradients, ensuring that water channels sloped gently downward over distances exceeding fifty kilometers. If the gradient were too steep, fast-moving water would erode stone masonry; if too flat, stagnant water would accumulate sediment.",
        "paraSummaryA1": "Aqueducts worked using gravity by sloping slightly downward so water flowed smoothly without breaking the stones."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Upon reaching the urban periphery, the water entered large distribution reservoirs called castella aquae. From there, lead and terracotta pipes channeled clean water to public bathhouses, decorative fountains, and imperial palaces. This reliable supply ensured sanitation standards unprecedented in the ancient world.",
        "paraSummaryA1": "In the city, water was stored in big tanks and sent to public baths and homes, keeping cities clean."
      }
    ],
    "overallSummaryA1": "Roman aqueducts used precise gravity-based slopes over long distances to bring clean mountain water into cities, supplying public baths and revolutionizing ancient public hygiene.",
    "keyVocab": [
      {
        "word": "Infrastructure",
        "meaning": "The basic physical systems of a community, like roads and water networks (অবকাঠামো)"
      },
      {
        "word": "Gradient",
        "meaning": "The rate of regular incline or slope (ঢাল বা নতিমাত্রা)"
      },
      {
        "word": "Sediment",
        "meaning": "Matter that settles to the bottom of a liquid (পলি বা তলানি)"
      }
    ]
  },
  {
    "id": "med-2",
    "level": "medium",
    "levelLabel": "Medium (Band 6.5 - 7.5)",
    "levelColor": "amber",
    "title": "Urban Green Spaces and Mental Well-being",
    "topic": "Psychology & Urban Planning",
    "estimatedMinutes": 4,
    "wordCount": 310,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "As the global population becomes increasingly concentrated in metropolitan concrete environments, public health researchers have begun scrutinizing the psychological costs of nature deficit. Modern urban living exposes residents to chronic sensory overload, traffic noise, and artificial lighting, contributing to alarming rates of anxiety and clinical depression.",
        "paraSummaryA1": "Living in noisy, crowded cities without nature increases stress, anxiety, and sadness."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "Recent empirical studies demonstrate that regular access to urban green spaces—such as municipal parks, tree-lined avenues, and botanical reserves—exerts a restorative effect on human cognition. Exposure to foliage triggers a measurable reduction in cortisol levels (the body's primary stress hormone) and decreases systolic blood pressure within just twenty minutes.",
        "paraSummaryA1": "Spending 20 minutes in parks or around trees lowers stress hormones and calms the body."
      },
      {
        "id": "p3",
        "label": "Paragraph B",
        "text": "Environmental psychologists attribute this recuperative phenomenon to Attention Restoration Theory. Unlike chaotic urban scenes that demand intense focused concentration, natural landscapes invoke 'soft fascination'. This effortless sensory engagement permits fatigued neural networks to recharge, enhancing emotional resilience and creative problem-solving.",
        "paraSummaryA1": "Nature allows our tired brains to rest effortlessly, boosting our mood and focus."
      }
    ],
    "overallSummaryA1": "Spending time in urban parks and green spaces significantly lowers stress hormones and blood pressure by allowing overworked brains to rest through gentle natural stimulation.",
    "keyVocab": [
      {
        "word": "Scrutinize",
        "meaning": "To examine or inspect something very closely (পুঙ্খানুপুঙ্খভাবে পরীক্ষা করা)"
      },
      {
        "word": "Restorative",
        "meaning": "Having the ability to bring back health, strength, or energy (পুনরুজ্জীবনকারী বা আরোগ্যদায়ক)"
      },
      {
        "word": "Resilience",
        "meaning": "The capacity to recover quickly from difficulties or stress (প্রতিকূলতা কাটিয়ে ওঠার ক্ষমতা)"
      }
    ]
  },
  {
    "id": "med-3",
    "level": "medium",
    "levelLabel": "Medium (Band 6.5 - 7.5)",
    "levelColor": "amber",
    "title": "How Languages Evolve and Disappear",
    "topic": "Linguistics & Culture",
    "estimatedMinutes": 4,
    "wordCount": 310,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "Human language is not a static set of grammatical rules; it is a living, evolving entity. Just as biological organisms adapt to environmental shifts, languages constantly morph across generations. Words alter their phonetic pronunciation, grammatical structures streamline, and novel vocabulary emerges in response to technological and cultural innovation.",
        "paraSummaryA1": "Languages are always changing over time as people invent new words and alter pronunciations."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "However, the modern era has triggered unprecedented linguistic homogenization. Of the roughly 7,000 distinct tongues spoken globally today, linguists estimate that nearly half could vanish before the century's end. As rural youths migrate toward commercial hubs, they often abandon indigenous dialects in favor of dominant lingua francas like English, Spanish, or Mandarin.",
        "paraSummaryA1": "Many local languages are dying out because young people move to cities and speak global languages."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "The extinction of an indigenous language represents an irreplaceable cultural loss. Languages encapsulate unique ecological knowledge, medicinal terminology, and philosophical perspectives honed over millennia. In response, global organizations are leveraging digital recording archives and community immersion schools to revitalize endangered ancestral tongues.",
        "paraSummaryA1": "When a language dies, ancient cultural wisdom is lost, so people are recording and teaching them again."
      }
    ],
    "overallSummaryA1": "While languages naturally evolve over time, globalization is causing hundreds of indigenous dialects to disappear, motivating linguists to record and preserve valuable ancestral knowledge.",
    "keyVocab": [
      {
        "word": "Morph",
        "meaning": "To transform or change gradually in form (ধীরে ধীরে রূপ বদলানো)"
      },
      {
        "word": "Homogenization",
        "meaning": "Making everything uniform or similar (একজাতীয়করণ বা বৈচিত্র্যহীন করা)"
      },
      {
        "word": "Revitalize",
        "meaning": "To imbue with new life, vigor, or strength (পুনরুজ্জীবিত করা)"
      }
    ]
  },
  {
    "id": "med-4",
    "level": "medium",
    "levelLabel": "Medium (Band 6.5 - 7.5)",
    "levelColor": "amber",
    "title": "The Science of Deep Sea Bioluminescence",
    "topic": "Marine Biology & Science",
    "estimatedMinutes": 4,
    "wordCount": 300,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "In the abyssal depths of the world's oceans, sunlight disappears entirely beyond two hundred meters. In this perpetual twilight, life has evolved a dazzling sensory mechanism: bioluminescence—the biological generation and emission of light through biochemical enzymatic reactions.",
        "paraSummaryA1": "Deep in the dark ocean where no sunlight reaches, sea creatures make their own glowing light."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "The biochemical reaction typically involves a light-emitting compound named luciferin catalyzed by the enzyme luciferase in the presence of oxygen. Deep-sea organisms utilize this radiant ability for diverse survival imperatives, such as luring unsuspecting prey, signaling potential mates, or blinding startled predators with luminous defensive clouds.",
        "paraSummaryA1": "Animals use chemical reactions to glow so they can catch prey, find mates, or scare predators."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Perhaps the most ingenious application is counter-illumination camouflage. Predatory fish swimming below their prey scan upward for silhouettes against the faint surface glow. Species like the hatchetfish match the ambient downwelling light using ventral photophores, rendering themselves virtually invisible to hunters below.",
        "paraSummaryA1": "Some fish light up their bellies so bigger fish swimming below cannot see their dark shadow."
      }
    ],
    "overallSummaryA1": "Deep-sea creatures produce their own light through enzymatic chemical reactions, using bioluminescence to hunt, communicate, and camouflage themselves in the pitch-black ocean depths.",
    "keyVocab": [
      {
        "word": "Perpetual",
        "meaning": "Never ending or changing; continuous (চিরস্থায়ী বা অবিরাম)"
      },
      {
        "word": "Imperative",
        "meaning": "An essential or urgent necessity (জরুরি প্রয়োজনীয়তা)"
      },
      {
        "word": "Camouflage",
        "meaning": "A disguise that blends an organism into its surroundings (ছদ্মবেশ বা পরিবেশের সাথে মিশে যাওয়া)"
      }
    ]
  },
  {
    "id": "med-5",
    "level": "medium",
    "levelLabel": "Medium (Band 6.5 - 7.5)",
    "levelColor": "amber",
    "title": "The Agricultural Revolution in Mesopotamia",
    "topic": "History & Archaeology",
    "estimatedMinutes": 4,
    "wordCount": 315,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "Roughly ten thousand years ago, human civilization crossed a monumental threshold in the Fertile Crescent of ancient Mesopotamia. Nomadic hunter-gatherers began domesticating wild grasses like emmer wheat and barley, transitioning from transient foraging to permanent agrarian settlements between the Tigris and Euphrates rivers.",
        "paraSummaryA1": "Long ago in Mesopotamia, humans stopped wandering and started farming crops in permanent villages."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "Agricultural stability sparked profound societal transformations. For the first time in human history, farming produced grain surpluses. Reliable food reserves meant that not every individual had to dedicate their days to caloric procurement. This gave rise to division of labor, architectural craftsmanship, metallurgy, and formal governance.",
        "paraSummaryA1": "Farming created extra food, allowing people to become builders, craftsmen, and leaders instead of just food gatherers."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "To administer complex grain distribution and canal maintenance, the Sumerians devised cuneiform—the world's earliest known writing system. What originated as humble accounting marks stamped into wet clay led directly to codified laws, written literature, and the monumental foundation of recorded history.",
        "paraSummaryA1": "To keep track of stored grain and taxes, early people invented the first writing system on clay tablets."
      }
    ],
    "overallSummaryA1": "The dawn of farming in Mesopotamia created food surpluses that freed people to specialize in trades, leading to the invention of written records, laws, and the first cities.",
    "keyVocab": [
      {
        "word": "Surplus",
        "meaning": "An amount of something left over when requirements are met (উদ্বৃত্ত বা অতিরিক্ত পরিমাণ)"
      },
      {
        "word": "Metallurgy",
        "meaning": "The science and technology of working with metals (ধাতুবিদ্যা)"
      },
      {
        "word": "Codify",
        "meaning": "To arrange laws or rules into a systematic code (আইন বা নিয়ম সুসংবদ্ধ করা)"
      }
    ]
  },
  {
    "id": "med-6",
    "level": "medium",
    "levelLabel": "Medium (Band 6.5 - 7.5)",
    "levelColor": "amber",
    "title": "Renewable Energy: Solar and Wind Integration",
    "topic": "Technology & Energy",
    "estimatedMinutes": 4,
    "wordCount": 310,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "As international decarbonization mandates accelerate, global power grids are undergoing their most consequential transition since electrification. Solar photovoltaic panels and offshore wind turbines now generate electricity at costs substantially lower than legacy coal-fired generators in most modern energy markets.",
        "paraSummaryA1": "Clean solar panels and wind turbines now produce cheaper electricity than dirty coal plants."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "Despite these cost advantages, renewable integration faces a primary technical hurdle: intermittency. Solar generation peaks at midday when commercial demand may be moderate, and collapses at sunset. Conversely, wind patterns can vary wildly across hours or weeks, necessitating sophisticated grid balancing mechanisms.",
        "paraSummaryA1": "A challenge is that solar stops working at night and the wind does not always blow regularly."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "To resolve this supply mismatch, utility operators are deploying utility-scale lithium-iron-phosphate battery storage, pumped hydroelectric reserves, and artificial intelligence forecasting algorithms. These innovations capture surplus renewable wattage during peak generation and discharge it seamlessly during nocturnal demand spikes.",
        "paraSummaryA1": "Engineers use giant batteries, water reservoirs, and smart computers to store extra clean power for night use."
      }
    ],
    "overallSummaryA1": "Although solar and wind power are increasingly cheap, their energy output fluctuates; modern power grids solve this by using large-scale batteries and computer forecasting to store excess power.",
    "keyVocab": [
      {
        "word": "Decarbonization",
        "meaning": "The reduction of carbon dioxide emissions (কার্বন নির্গমন হ্রাস)"
      },
      {
        "word": "Intermittency",
        "meaning": "Not continuous or steady; stopping and starting irregularly (অনিয়মিত বিরতি)"
      },
      {
        "word": "Nocturnal",
        "meaning": "Occurring or active during the night (রাত্রিকালীন)"
      }
    ]
  },
  {
    "id": "med-7",
    "level": "medium",
    "levelLabel": "Medium (Band 6.5 - 7.5)",
    "levelColor": "amber",
    "title": "The Psychology of Decision Making",
    "topic": "Psychology & Behavioral Science",
    "estimatedMinutes": 4,
    "wordCount": 315,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "Traditional economic models long operated on the assumption that humans are rational actors who carefully weigh probabilities, costs, and benefits before arriving at optimal choices. However, behavioral psychologists have demonstrated that our daily decision-making is heavily distorted by mental shortcuts called heuristics.",
        "paraSummaryA1": "People do not always make logical decisions; our brains use quick mental shortcuts that can cause mistakes."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "One ubiquitous heuristic is confirmation bias—the subconscious tendency to notice, interpret, and recall information that validates pre-existing beliefs, while dismissing contradictory evidence. Similarly, the availability heuristic leads individuals to overestimate the likelihood of events that are emotionally vivid or recently seen on the news, such as plane crashes.",
        "paraSummaryA1": "We tend to believe facts that agree with our opinions and fear rare dangers we recently saw on the news."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Recognizing these cognitive pitfalls has reshaped diverse domains, from financial investing to medical diagnostics. By understanding how mental shortcuts operate, professionals can implement structured checklists and peer reviews that counteract intuitive biases, fostering more balanced, evidence-based judgments.",
        "paraSummaryA1": "Doctors and investors now use checklists and second opinions to prevent mental bias and make better decisions."
      }
    ],
    "overallSummaryA1": "Humans rely heavily on subconscious mental shortcuts that often lead to irrational choices; learning to recognize cognitive biases helps professionals make sounder, evidence-based decisions.",
    "keyVocab": [
      {
        "word": "Heuristic",
        "meaning": "A mental shortcut that allows people to solve problems quickly (সহজ মানসিক সমাধান বা শর্টকাট)"
      },
      {
        "word": "Ubiquitous",
        "meaning": "Present, appearing, or found everywhere (সর্বব্যাপী বা সর্বত্র বিদ্যমান)"
      },
      {
        "word": "Pitfall",
        "meaning": "A hidden or unsuspected danger or difficulty (অপ্রত্যাশিত ফাঁদ বা ত্রুটি)"
      }
    ]
  },
  {
    "id": "med-8",
    "level": "medium",
    "levelLabel": "Medium (Band 6.5 - 7.5)",
    "levelColor": "amber",
    "title": "The Silk Road: Connecting Ancient Continents",
    "topic": "World History & Trade",
    "estimatedMinutes": 4,
    "wordCount": 320,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "The Silk Road was not a single paved highway, but an intricate network of overland and maritime trade routes linking China and the Mediterranean across thousands of miles of rugged mountains and unforgiving deserts. Established during the Han Dynasty around 130 BCE, it functioned for over a millennium as the economic spine of Afro-Eurasia.",
        "paraSummaryA1": "The Silk Road was a vast network of ancient trade paths connecting China to Europe across mountains and deserts."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "While luxury merchandise such as Chinese silk, porcelain, Persian rugs, and exotic Indian spices commanded fortunes along the routes, the network's most transformative legacy was cultural cross-pollination. Religious traditions like Buddhism traveled from India into East Asia, while Arabic mathematics and medical treatises fundamentally revitalized medieval European scholarship.",
        "paraSummaryA1": "Traders not only carried silk and spices, but also shared religion, science, and math between continents."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "However, this interconnectedness also carried perilous biological hazards. Trade caravans inadvertently facilitated the transmission of lethal pandemics, most notoriously the Black Death in the 14th century, which decimated populations across Asia, the Middle East, and Europe, ultimately contributing to the decline of traditional overland routes.",
        "paraSummaryA1": "Trade caravans also accidentally spread deadly diseases like the Black Death, which killed millions across Europe and Asia."
      }
    ],
    "overallSummaryA1": "The ancient Silk Road facilitated the global exchange of silk, spices, religious beliefs, and scientific breakthroughs, but also inadvertently spread devastating contagious plagues across Eurasia.",
    "keyVocab": [
      {
        "word": "Intricate",
        "meaning": "Very complicated, detailed, or interconnected (জটিল বা সূক্ষ্ম)"
      },
      {
        "word": "Cross-pollination",
        "meaning": "The sharing of ideas across different cultures (সাংস্কৃতিক বা বুদ্ধিবৃত্তিক আদান-প্রদান)"
      },
      {
        "word": "Perilous",
        "meaning": "Full of danger or risk (বিপজ্জনক বা ঝুঁকিপূর্ণ)"
      }
    ]
  },
  {
    "id": "med-9",
    "level": "medium",
    "levelLabel": "Medium (Band 6.5 - 7.5)",
    "levelColor": "amber",
    "title": "Biomimicry: Nature-Inspired Engineering",
    "topic": "Science & Innovation",
    "estimatedMinutes": 4,
    "wordCount": 310,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "For over three billion years, natural selection has served as an uncompromising laboratory, forcing biological species to engineer elegant, energy-efficient solutions to harsh physical problems. Today, a rapidly growing scientific discipline called biomimicry systematically borrows designs, processes, and structures from nature to solve human technological challenges.",
        "paraSummaryA1": "Biomimicry is the science of copying clever designs from nature to invent better human technology."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "A celebrated example of biomimetic design is Japan's iconic Shinkansen bullet train. When the high-speed train exited tunnels, atmospheric pressure differentials caused explosive sonic booms. Engineer Eiji Nakatsu solved this problem by redesigning the train's nose to mimic the streamlined beak of a kingfisher bird, which dives silently into water without making a splash.",
        "paraSummaryA1": "Engineers shaped the front of fast bullet trains like a kingfisher bird's beak to travel quietly through tunnels."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Similarly, the microscopic texture of shark skin—composed of tiny grooved scales called denticles—prevents algae and bacteria from adhering to their bodies. Material scientists have replicated this textured surface in hospital wall coatings and marine ship hulls, dramatically curbing bacterial colonization without resorting to chemical biocides.",
        "paraSummaryA1": "Scientists copied the rough texture of shark skin to keep hospital surfaces clean without harsh chemicals."
      }
    ],
    "overallSummaryA1": "Biomimicry applies nature's time-tested evolutionary adaptations—from kingfisher beaks to shark scales—to create quieter high-speed trains, anti-bacterial materials, and sustainable engineering.",
    "keyVocab": [
      {
        "word": "Biomimicry",
        "meaning": "The design of materials or structures modeled on biological entities (প্রকৃতি-অনুপ্রাণিত প্রকৌশল)"
      },
      {
        "word": "Streamlined",
        "meaning": "Shaped to offer the least possible resistance to air or water (সুগঠিত বা গতিশীল নকশা)"
      },
      {
        "word": "Biocide",
        "meaning": "A chemical poison used to kill harmful organisms (জীবাণুনাশক বিষ)"
      }
    ]
  },
  {
    "id": "med-10",
    "level": "medium",
    "levelLabel": "Medium (Band 6.5 - 7.5)",
    "levelColor": "amber",
    "title": "The Rise of Megacities and Urban Planning",
    "topic": "Society & Urban Design",
    "estimatedMinutes": 4,
    "wordCount": 320,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "In 1950, only two metropolitan centers on Earth—New York and Tokyo—held populations exceeding ten million residents. Today, there are over thirty-five such 'megacities', with dozens more projected to emerge across Asia and Africa. This historic demographic influx presents municipal planners with unprecedented logistical complexities.",
        "paraSummaryA1": "Many giant cities now have more than 10 million people, creating big challenges for housing and transport."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "Uncontrolled urban sprawl strains municipal electrical grids, generates insurmountable mountains of municipal solid waste, and leads to chronic traffic gridlock that costs economies billions in lost productivity. In developing nations, the inability of municipal budgets to keep pace with rural migration often leads to the expansion of precarious informal settlements.",
        "paraSummaryA1": "When cities grow too fast without planning, traffic jams, pollution, and poor housing become major problems."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Forward-thinking urban planners are countering these crises through the '15-minute city' concept. By decentralizing commercial, medical, and educational services, residents can satisfy all primary daily necessities within a brief walk or bicycle ride, curbing automobile reliance and fostering vibrant, cohesive neighborhoods.",
        "paraSummaryA1": "Modern planners design neighborhoods where people can walk to schools, shops, and clinics in 15 minutes."
      }
    ],
    "overallSummaryA1": "As megacities swell past ten million residents, urban planners are replacing traffic-clogged city models with walkable '15-minute cities' to make mega-urban environments livable and sustainable.",
    "keyVocab": [
      {
        "word": "Demographic",
        "meaning": "Relating to the structure and characteristics of human populations (জনমিতিক বা জনসংখ্যা সংক্রান্ত)"
      },
      {
        "word": "Precarious",
        "meaning": "Insecure, uncertain, or dangerously unstable (অনিশ্চিত বা বিপজ্জনক)"
      },
      {
        "word": "Cohesive",
        "meaning": "Closely united, integrated, or working well together (সুসংহত বা ঐক্যবদ্ধ)"
      }
    ]
  },
  {
    "id": "hard-1",
    "level": "hard",
    "levelLabel": "Hard (Band 8.0 - 9.0)",
    "levelColor": "red",
    "title": "Epigenetics: How Environment Alters Gene Expression",
    "topic": "Genetics & Molecular Biology",
    "estimatedMinutes": 5,
    "wordCount": 360,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "For over half a century following Watson and Crick's elucidation of the DNA double helix, biological orthodoxy posited genetic determinism: the conviction that an organism's developmental trajectory, physiological traits, and hereditary predispositions were unalterably hardcoded within static nucleotide sequences.",
        "paraSummaryA1": "Scientists once believed that human DNA was fixed and completely decided our health and future."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "This deterministic paradigm has been fundamentally upended by the burgeoning field of epigenetics. Epigenetic mechanisms do not alter underlying DNA base sequences; rather, they regulate how cellular machinery reads and transcribes those genetic instructions. Chemical tags, such as methyl groups attached to cytosine bases, function as genomic volume controls, silencing or amplifying gene expression.",
        "paraSummaryA1": "Epigenetics shows that environmental factors can turn genes on or off without changing the actual DNA code."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Crucially, external variables—including chronic psychological stress, environmental toxins, nutritional deprivation, and sleep disruption—dynamically dictate these biochemical tags. Even more provocative is emerging evidence of transgenerational epigenetic inheritance: traumatic environmental exposures endured by grandparents can imprint molecular signatures that modulate the metabolic health and stress vulnerability of unexposed descendants.",
        "paraSummaryA1": "Diet, stress, and pollution can change how our genes work, and these changes can even be passed down to our grandchildren."
      }
    ],
    "overallSummaryA1": "Epigenetics reveals that environmental factors like stress and diet act as chemical switches that turn genes on or off without changing the DNA sequence, and these changes can sometimes be inherited across generations.",
    "keyVocab": [
      {
        "word": "Orthodoxy",
        "meaning": "Authorized or generally accepted theory, doctrine, or belief (প্রচলিত গতানুগতিক বিশ্বাস)"
      },
      {
        "word": "Determinism",
        "meaning": "The doctrine that all events are completely determined by previously existing causes (নিয়তিবাদ বা পূর্বনির্ধারিত বিশ্বাস)"
      },
      {
        "word": "Transgenerational",
        "meaning": "Acting across, involving, or inherited through multiple generations (প্রজন্মবাহিত)"
      }
    ]
  },
  {
    "id": "hard-2",
    "level": "hard",
    "levelLabel": "Hard (Band 8.0 - 9.0)",
    "levelColor": "red",
    "title": "Cognitive Biases and Heuristics in Economics",
    "topic": "Behavioral Economics & Philosophy",
    "estimatedMinutes": 5,
    "wordCount": 350,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "Classical macroeconomic theory rested upon the foundational construct of Homo economicus: an idealized, autonomous decision-maker endowed with limitless computational capacity, unclouded objectivity, and an unyielding commitment to maximizing subjective expected utility across every financial exchange.",
        "paraSummaryA1": "Old economic theories assumed that all people make completely rational, selfish, and calculated choices with money."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "The pioneering research of Daniel Kahneman and Amos Tversky shattered this foundational premise. Their Prospect Theory established that human psychology exhibits profound loss aversion: the emotional anguish of forfeiting a given financial sum is empirically twice as intense as the psychological gratification derived from acquiring an equivalent gain.",
        "paraSummaryA1": "Psychologists proved that losing money feels twice as painful as the joy of winning the exact same amount."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Consequently, financial markets routinely display systemic irrationalities, ranging from asset bubbles driven by herd mentality to panic-fueled sell-offs induced by anchoring effects. Integrating behavioral insights into institutional policy allows economists to design subtle 'nudges'—default architectural choices that guide citizens toward prudent retirement savings without restricting personal autonomy.",
        "paraSummaryA1": "Because humans panic and follow crowds, economists use smart design choices to help people save money wisely."
      }
    ],
    "overallSummaryA1": "Contrary to classic economic theories of human rationality, humans are deeply influenced by loss aversion and emotional bias, which causes stock market bubbles and necessitates behavioral nudges.",
    "keyVocab": [
      {
        "word": "Endowed",
        "meaning": "Naturally equipped with or provided with a quality or ability (গুণে ভূষিত বা সমৃদ্ধ)"
      },
      {
        "word": "Loss aversion",
        "meaning": "The cognitive bias where losses hurt much more than gains please (ক্ষতিভীতি বা ক্ষতির তীব্র মানসিক কষ্ট)"
      },
      {
        "word": "Prudent",
        "meaning": "Acting with or showing care and thought for the future (দূরদর্শী বা বিচক্ষণ)"
      }
    ]
  },
  {
    "id": "hard-3",
    "level": "hard",
    "levelLabel": "Hard (Band 8.0 - 9.0)",
    "levelColor": "red",
    "title": "The Neuroscience of Neuroplasticity",
    "topic": "Neuroscience & Medicine",
    "estimatedMinutes": 5,
    "wordCount": 350,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "Throughout the twentieth century, conventional neurological dogma maintained that the mature adult mammalian brain was a hardwired, immutable organ. Once early childhood developmental milestones elapsed, damaged neural pathways were presumed permanently irreparable, and cellular neurogenesis was deemed impossible.",
        "paraSummaryA1": "Doctors once believed the adult brain was fixed and could never grow new cells or repair broken connections."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "Modern functional magnetic resonance neuroimaging has comprehensively dismantled this static paradigm, revealing neuroplasticity: the brain's extraordinary lifelong capacity to structurally reorganize itself in response to learning, sensory stimuli, or physical trauma. Neurons continuously sprout novel dendritic spines, reinforcing active synaptic circuits while pruning dormant connections under Hebbian principles.",
        "paraSummaryA1": "Modern brain scans show the brain can rebuild and rewire itself throughout your whole life as you learn."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "This profound malleability underpins revolutionary therapeutic methodologies. Stroke victims suffering hemiplegia can reclaim motor control as adjacent uninjured cortical regions assume lost functional responsibilities. Neuroplasticity confirms that intellectual and cognitive faculties are not genetically predetermined ceilings, but dynamic, cultivable capacities.",
        "paraSummaryA1": "Stroke patients can regain movement because other parts of the brain take over damaged jobs."
      }
    ],
    "overallSummaryA1": "Neuroplasticity proves that the human brain is not statically hardwired, but constantly rewires its neural pathways throughout life in response to learning and rehabilitation.",
    "keyVocab": [
      {
        "word": "Dogma",
        "meaning": "A principle or set of principles laid down by authority as incontrovertibly true (অনমনীয় গোঁড়া মতবাদ)"
      },
      {
        "word": "Malleability",
        "meaning": "The quality of being easily influenced, reshaped, or trained (নমনীয়তা বা পরিবর্তনযোগ্যতা)"
      },
      {
        "word": "Synaptic",
        "meaning": "Relating to the junction between two nerve cells across which impulses pass (স্নায়ুসন্ধি সংক্রান্ত)"
      }
    ]
  },
  {
    "id": "hard-4",
    "level": "hard",
    "levelLabel": "Hard (Band 8.0 - 9.0)",
    "levelColor": "red",
    "title": "Quantum Computing and Cryptography",
    "topic": "Physics & Computer Science",
    "estimatedMinutes": 5,
    "wordCount": 350,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "Contemporary digital infrastructure relies fundamentally on asymmetric public-key cryptography, such as RSA encryption, to secure global financial transactions, state secrets, and cloud architectures. The insurmountable security of these cryptographic ciphers derives from the computational intractability of factoring immense prime integers using classical binary processors.",
        "paraSummaryA1": "Current internet security relies on math problems so complex that ordinary computers take thousands of years to solve."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "This cryptographic supremacy is threatened by the advent of quantum computation. By harnessing counterintuitive quantum mechanical phenomena—specifically superposition and quantum entanglement—quantum processors operate on qubits rather than binary bits. While classical transistors process discrete ones and zeroes sequentially, qubits evaluate vast multidimensional mathematical solution spaces simultaneously.",
        "paraSummaryA1": "Quantum computers use quantum physics to calculate millions of possibilities at the exact same instant."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Utilizing Shor's quantum algorithm, a fault-tolerant quantum computer could neutralize prevailing RSA architectures in seconds. In anticipation of this looming 'quantum apocalypse,' cybersecurity mathematicians are racing to engineer post-quantum lattice-based cryptographic frameworks that remain impervious even to quantum decryption.",
        "paraSummaryA1": "Because quantum computers could crack standard internet security in seconds, scientists are building new quantum-proof codes."
      }
    ],
    "overallSummaryA1": "Quantum computers leverage superposition to calculate complex equations exponentially faster than classical computers, threatening to shatter current internet security and necessitating post-quantum encryption.",
    "keyVocab": [
      {
        "word": "Intractability",
        "meaning": "The quality of being hard or impossible to solve with conventional algorithms (অসমাধানযোগ্যতা)"
      },
      {
        "word": "Superposition",
        "meaning": "The ability of a quantum system to be in multiple states simultaneously (সুপারপজিশন বা একই সাথে বহু অবস্থায় থাকা)"
      },
      {
        "word": "Impervious",
        "meaning": "Not allowing entrance or not affected by something (অভেদ্য বা সুরক্ষিত)"
      }
    ]
  },
  {
    "id": "hard-5",
    "level": "hard",
    "levelLabel": "Hard (Band 8.0 - 9.0)",
    "levelColor": "red",
    "title": "Artificial Intelligence and Autonomous Ethics",
    "topic": "Technology & Moral Philosophy",
    "estimatedMinutes": 5,
    "wordCount": 350,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "The inexorable integration of deep artificial neural networks into high-stakes autonomous systems—ranging from algorithmic judicial sentencing and automated combat drones to self-navigating vehicles—has catapulted classical ethical quandaries out of academic philosophy into pressing public policy dilemmas.",
        "paraSummaryA1": "Using artificial intelligence in self-driving cars, court decisions, and weapons creates serious moral problems."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "Consider the infamous 'trolley problem' re-imagined for autonomous driving: when an inevitable vehicular collision looms, should an algorithmic control unit swerve to spare a pedestrian at the definitive cost of its passenger's life? Utilitarian frameworks demand minimizing aggregate fatalities, whereas deontological ethics assert that deliberate sacrificial steering violates inviolable moral duties.",
        "paraSummaryA1": "If a self-driving car must crash, should it protect the person inside or protect pedestrians outside?"
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Compounding this philosophical dispute is the pervasive 'black box' opacity inherent to multi-layer deep learning models. When advanced machine learning systems arrive at discriminatory lending decisions or erroneous medical diagnostics, their internal algorithmic rationales remain mathematically undecipherable, subverting the foundational legal requirement of accountability.",
        "paraSummaryA1": "AI systems are so complex that even their creators cannot explain why the computer made a specific decision."
      }
    ],
    "overallSummaryA1": "As AI systems make life-and-death choices, society faces unsolved ethical dilemmas over who should be protected in accidents and how to hold unexplainable black-box algorithms accountable.",
    "keyVocab": [
      {
        "word": "Quandary",
        "meaning": "A state of perplexity or doubt over what to do in a difficult situation (দ্বিধাদ্বন্দ্ব বা কঠিন সমস্যা)"
      },
      {
        "word": "Utilitarian",
        "meaning": "Aiming to produce the greatest happiness or benefit for the greatest number of people (সর্বাধিক কল্যাণবাদী)"
      },
      {
        "word": "Opacity",
        "meaning": "The quality of being obscure, non-transparent, or difficult to understand (অস্বচ্ছতা বা দুর্ভেদ্যতা)"
      }
    ]
  },
  {
    "id": "hard-6",
    "level": "hard",
    "levelLabel": "Hard (Band 8.0 - 9.0)",
    "levelColor": "red",
    "title": "The Anthropocene: Geological Evidence of Human Impact",
    "topic": "Geology & Earth Science",
    "estimatedMinutes": 5,
    "wordCount": 350,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "For over eleven thousand years, Earth has officially resided within the Holocene epoch: an interglacial interlude of relative climatic equilibrium that facilitated the rise of human agriculture, urbanization, and technological civilization.",
        "paraSummaryA1": "For 11,000 years, Earth had a calm, stable climate that allowed human civilization to grow."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "However, an international quorum of geologists now argues that humanity has irrevocably terminated the Holocene, inaugurating a brand-new planetary geological epoch: the Anthropocene. To ratify this formal designation, stratigraphers must identify an unambiguous 'golden spike'—a distinct geochemical signature fossilized within planetary sedimentary strata.",
        "paraSummaryA1": "Scientists believe humans have altered Earth so deeply that we have entered a new geological age: the Anthropocene."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "The evidence is incontrovertible. Anthropogenic deposits—including artificial radioactive isotopes dispersed by mid-20th-century thermonuclear testing, synthetic microplastics embedded in ocean trenches, and novel minerals dubbed 'plastiglomerates'—have formed an indelible geological boundary that will endure in the Earth's rock crust for millions of years.",
        "paraSummaryA1": "Nuclear testing fallout, plastics, and industrial waste will remain preserved in Earth's rocks forever."
      }
    ],
    "overallSummaryA1": "Human civilization has permanently altered the Earth's sedimentary layers with plastics and nuclear fallout, leading geologists to declare a new geological epoch: the Anthropocene.",
    "keyVocab": [
      {
        "word": "Equilibrium",
        "meaning": "A state in which opposing forces or influences are balanced (ভারসাম্য অবস্থা)"
      },
      {
        "word": "Stratigraphy",
        "meaning": "The branch of geology concerned with the study of rock layers and layering (শিলাস্তরবিদ্যা)"
      },
      {
        "word": "Incontrovertible",
        "meaning": "Not able to be denied or disputed; indisputable (অনস্বীকার্য বা অকাট্য)"
      }
    ]
  },
  {
    "id": "hard-7",
    "level": "hard",
    "levelLabel": "Hard (Band 8.0 - 9.0)",
    "levelColor": "red",
    "title": "Linguistic Relativity: Does Language Shape Thought?",
    "topic": "Linguistics & Cognitive Science",
    "estimatedMinutes": 5,
    "wordCount": 350,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "The Sapir-Whorf hypothesis, or linguistic relativity, postulates that the structural contours, grammatical categories, and lexical distinctions of a speaker's native tongue exert an unyielding, determinative influence over how they perceive, categorize, and intellectually conceptualize the external world.",
        "paraSummaryA1": "The Sapir-Whorf theory suggests that the specific language you speak changes how your brain views the world."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "While extreme deterministic interpretations—asserting that humans cannot conceive thoughts their language lacks words for—were roundly discredited by generative grammarians, nuanced empirical experiments have demonstrated subtle, profound cognitive divergences. For instance, the Australian Aboriginal Guugu Yimithirr language employs absolute cardinal directions (north, south, east, west) rather than egocentric spatial terms (left, right).",
        "paraSummaryA1": "Aboriginal people who only use compass directions instead of 'left' and 'right' have incredible natural navigation skills."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Consequently, Guugu Yimithirr speakers maintain an extraordinary, almost automatic internal compass, orienting themselves flawlessly even within windowless interiors. Similarly, cultures whose languages distinguish multiple linguistic terms for subtle shades of blue perceive color variations measurably faster in brainwave tests, proving language acts as a perceptual prism.",
        "paraSummaryA1": "People whose languages have separate words for light and dark blue can distinguish color shades much faster."
      }
    ],
    "overallSummaryA1": "While language does not completely imprison human thought, speaking languages that prioritize compass directions or specific color terms measurably sharpens those exact cognitive skills.",
    "keyVocab": [
      {
        "word": "Postulate",
        "meaning": "To suggest or assume the existence or truth of something as a basis for reasoning (অনুমান বা স্বীকার করে নেওয়া)"
      },
      {
        "word": "Egocentric",
        "meaning": "Centered on oneself, such as using 'my left' or 'my right' (আত্মকেন্দ্রিক)"
      },
      {
        "word": "Perceptual",
        "meaning": "Relating to the ability to interpret or become aware of something through the senses (প্রত্যক্ষণমূলক বা উপলব্ধি সংক্রান্ত)"
      }
    ]
  },
  {
    "id": "hard-8",
    "level": "hard",
    "levelLabel": "Hard (Band 8.0 - 9.0)",
    "levelColor": "red",
    "title": "Dark Matter and Galactic Gravitational Lensing",
    "topic": "Astrophysics & Cosmology",
    "estimatedMinutes": 5,
    "wordCount": 350,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "When Swiss astronomer Fritz Zwicky measured the orbital velocities of galaxies within the Coma Cluster in the 1930s, he uncovered a profound cosmic discrepancy: visible baryonic matter—luminous stars, interstellar gas, and dust—possessed barely one-tenth of the gravitational mass necessary to prevent the rapidly spinning cluster from flying apart.",
        "paraSummaryA1": "Astronomers noticed galaxies spin so fast that invisible gravity must be holding them together."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "This enigmatic 'missing mass' is now recognized as dark matter: an elusive, non-baryonic substance that neither absorbs, reflects, nor emits electromagnetic radiation, yet comprises roughly eighty-five percent of the total matter in the universe. Because it remains wholly invisible to conventional telescopes, astrophysicists infer its distribution via Einstein's general relativity.",
        "paraSummaryA1": "Dark matter makes up 85% of all matter, emitting zero light, and can only be detected by its gravitational pull."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Under gravitational lensing, colossal concentrations of unseen dark matter act as cosmic magnifying glasses, warping spacetime and bending the trajectories of light traveling from distant background galaxies behind them. By meticulously analyzing these distorted optical arcs, cosmologists construct high-resolution topological maps of the invisible cosmic scaffolding holding our universe together.",
        "paraSummaryA1": "Dark matter bends light passing through space like a giant lens, allowing scientists to map invisible cosmic structures."
      }
    ],
    "overallSummaryA1": "Dark matter constitutes eighty-five percent of universal matter; though invisible because it emits no light, it bends the paths of distant starlight through gravitational lensing, revealing its cosmic structure.",
    "keyVocab": [
      {
        "word": "Discrepancy",
        "meaning": "A lack of compatibility or similarity between two facts or figures (অসঙ্গতি বা অমিল)"
      },
      {
        "word": "Enigmatic",
        "meaning": "Difficult to interpret, mysterious, or puzzling (রহস্যজনক বা দুর্বোধ্য)"
      },
      {
        "word": "Scaffolding",
        "meaning": "A supporting structure or framework (সহায়ক কাঠামো বা ভিত্তি)"
      }
    ]
  },
  {
    "id": "hard-9",
    "level": "hard",
    "levelLabel": "Hard (Band 8.0 - 9.0)",
    "levelColor": "red",
    "title": "Socio-Economic Stratification in Early Civilizations",
    "topic": "Anthropology & Ancient History",
    "estimatedMinutes": 5,
    "wordCount": 350,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "For the overwhelming majority of human evolutionary history, Paleolithic foraging bands existed within egalitarian socio-ecological structures. Communal nomadic survival necessitated strict resource-pooling, where hoarding was biologically impractical and social prestige derived from cooperative generosity rather than private wealth accumulation.",
        "paraSummaryA1": "Early human hunter-gatherers lived in equal groups where people shared all food and private wealth did not exist."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "The advent of sedentary agriculture during the Neolithic transition triggered the emergence of pronounced socio-economic stratification. Permanent land ownership, crop defensibility, and grain storage enabled enterprising lineages to accumulate disproportionate surpluses, transforming egalitarian kin groups into hereditary class hierarchies.",
        "paraSummaryA1": "When people started farming land and storing grain, a few families became rich landowners and ruled over others."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "Emerging elites consecrated this wealth concentration by monopolizing spiritual ritualism and formal coercive instruments. Burials from the Bronze Age reveal drastic nutritional disparities and ostentatious funerary grave goods in elite tombs, contrasting sharply with the unadorned, physically stressed skeletons of disenfranchised peasant majorities.",
        "paraSummaryA1": "Ancient kings and priests buried themselves with gold and jewels, while poor farmers suffered harsh physical labor."
      }
    ],
    "overallSummaryA1": "The transition from nomadic foraging to farming allowed land and grain surpluses to be accumulated by powerful lineages, permanently creating rigid hereditary social classes and economic inequality.",
    "keyVocab": [
      {
        "word": "Egalitarian",
        "meaning": "Believing in or based on the principle that all people are equal and deserve equal rights (সাম্যবাদী)"
      },
      {
        "word": "Stratification",
        "meaning": "The arrangement or classification of something into different groups or social classes (স্তরবিন্যাস)"
      },
      {
        "word": "Disenfranchised",
        "meaning": "Deprived of power, rights, or economic security (অধিকারবঞ্চিত)"
      }
    ]
  },
  {
    "id": "hard-10",
    "level": "hard",
    "levelLabel": "Hard (Band 8.0 - 9.0)",
    "levelColor": "red",
    "title": "Ecological Tipping Points and Resilience Theory",
    "topic": "Ecology & Climate Systems",
    "estimatedMinutes": 5,
    "wordCount": 350,
    "paragraphs": [
      {
        "id": "p1",
        "label": "Paragraph A",
        "text": "Classical conservation models frequently operated under linear ecological assumptions, presuming that ecosystems respond smoothly and proportionally to anthropogenic stressors such as deforestation, agricultural runoff, and gradual climatic temperature fluctuations.",
        "paraSummaryA1": "People used to think nature changes slowly and smoothly whenever pollution or logging occurs."
      },
      {
        "id": "p2",
        "label": "Paragraph B",
        "text": "Ecosystem resilience theory has demonstrated that biological systems instead exhibit non-linear dynamics governed by critical thresholds termed 'tipping points'. An ecosystem can absorb cumulative degradations while appearing outwardly stable, until a microscopic incremental perturbation pushes it past its resilience basin into an irreversible, self-reinforcing regime shift.",
        "paraSummaryA1": "Ecosystems can take damage quietly until a sudden breaking point flips them into an irreversible ruined state."
      },
      {
        "id": "p3",
        "label": "Paragraph C",
        "text": "A harrowing illustration is the Amazon basin. Transpiration from rainforest foliage generates its own atmospheric moisture, fueling half the basin's annual precipitation. Forest loss beyond a projected twenty-five percent threshold disrupts this hydrological pump, triggering catastrophic dieback that could transform the world's most biodiverse tropical jungle into a degraded, arid savanna within decades.",
        "paraSummaryA1": "If too much of the Amazon is cut down, its rain cycle will collapse, turning the rich jungle into dry desert scrub."
      }
    ],
    "overallSummaryA1": "Ecosystems do not degrade slowly; instead, they resist damage until crossing sudden tipping points where internal feedback loops rapidly and irreversibly transform lush forests into barren savannas.",
    "keyVocab": [
      {
        "word": "Non-linear",
        "meaning": "Not in a direct, predictable, or proportional relationship (অসরলরৈখিক বা আকস্মিক)"
      },
      {
        "word": "Perturbation",
        "meaning": "A deviation of a system, or a disturbance to its normal state (বিচ্যুতি বা বিশৃঙ্খলা)"
      },
      {
        "word": "Dieback",
        "meaning": "A condition in which a plant or forest dies from its tips inward (গাছের শুকিয়ে মৃত্যু বা বনের ধস)"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { READING_SKILLS_PASSAGES };
}
