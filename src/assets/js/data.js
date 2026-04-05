const indiaData = [
    {
        id: 'ker',
        name: 'Kerala',
        tag: 'Tropical Serenity',
        styles: ['wellness', 'wildlife', 'heritage'],
        image: 'https://images.unsplash.com/photo-1602216056096-3b503fad11c2?auto=format&fit=crop&w=1400&q=80',
        description: 'Drift through emerald backwaters on a traditional houseboat, surrounded by swaying palms. Kerala offers a slow-paced, deeply rejuvenating connection with nature away from the bustling cities.',
        attractions: [
            {
                name: 'Alleppey Backwaters', type: 'Leisure & Boating',
                image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80',
                desc: 'Rent a traditional Kettuvallam houseboat and cruise through the vast network of serene canals, witnessing village life along the banks.'
            },
            {
                name: 'Munnar Tea Plantations', type: 'Nature Trails',
                image: 'https://images.unsplash.com/photo-1593693411515-c20261bbdd66?auto=format&fit=crop&w=600&q=80',
                desc: 'Escape to the cool highlands. Trek through endless rolling hills blanketed in vibrant green tea bushes and breathe in the fresh mountain air.'
            },
            {
                name: 'Varkala Cliff Beach', type: 'Coastal Relaxing',
                image: 'https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?auto=format&fit=crop&w=600&q=80',
                desc: 'Famous for its dramatic red laterite cliffs plunging into the Arabian Sea. Enjoy bohemian cafes and stunning sunsets.'
            },
            {
                name: 'Wayanad Wildlife Sanctuary', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1629235070263-fb713ee0c388?auto=format&fit=crop&w=600&q=80',
                desc: 'Explore lush green forests packed with elephants, leopards, and diverse bird species. A true haven for nature and wildlife lovers.'
            },
            {
                name: 'Fort Kochi Heritage', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
                desc: 'Wander through quaint streets featuring ancient Portuguese architecture, Jewish synagogues, and iconic Chinese fishing nets.'
            },
            {
                name: 'Thekkady National Park', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1585467316688-25114fdb2323?auto=format&fit=crop&w=600&q=80',
                desc: 'Experience a unique boat safari on Periyar Lake where you can spot wild herds of elephants bathing on the jungle shores.'
            }
        ]
    },
    {
        id: 'raj',
        name: 'Rajasthan',
        tag: 'Golden Heritage',
        styles: ['heritage', 'wildlife', 'wellness'],
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1400&q=80',
        description: 'A vivid tapestry of pastel-colored cities, ornate sandstone palaces, and luxurious desert camps. Experience hospitality fit for royalty in the Land of Kings.',
        attractions: [
            {
                name: 'Udaipur City Palace', type: 'Architecture',
                image: 'https://images.unsplash.com/photo-1615836245337-f589c36ec3b9?auto=format&fit=crop&w=600&q=80',
                desc: 'A magnificent complex of palaces built over nearly 400 years, offering sweeping views of Lake Pichola and its floating marble palaces.'
            },
            {
                name: 'Jaisalmer Desert Camp', type: 'Adventure',
                image: 'https://images.unsplash.com/photo-1534645851457-b08e2f0732dc?auto=format&fit=crop&w=600&q=80',
                desc: 'Spend a night under the stars in the vast Thar Desert. Enjoy camel safaris, folk music, and the eerie silence of the dunes.'
            },
            {
                name: 'Jaipur Stepwells', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
                desc: 'Marvel at the symmetrical, mesmerizing geometry of ancient stepwells like Panna Meena ka Kund, an architectural wonder of ancient water conservation.'
            },
            {
                name: 'Mehrangarh Fort', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1584988448882-962657e0349b?auto=format&fit=crop&w=600&q=80',
                desc: 'One of the largest forts in India, rising perpendicularly and impregnable from a rocky hill overlooking the "Blue City" of Jodhpur.'
            },
            {
                name: 'Ranthambore Safari', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1551802958-f716ebf01037?auto=format&fit=crop&w=600&q=80',
                desc: 'Embark on a thrilling jeep safari through ancient ruins and dry deciduous forests to catch a glimpse of the majestic Bengal Tiger.'
            },
            {
                name: 'Pushkar Holy Lake', type: 'Wellness',
                image: 'https://images.unsplash.com/photo-1563200056-1463ebbf3db5?auto=format&fit=crop&w=600&q=80',
                desc: 'Find peace by the sacred waters of Pushkar Lake, surrounded by hundreds of temples and echoing with evening prayers.'
            }
        ]
    },
    {
        id: 'hp',
        name: 'Himachal',
        tag: 'Alpine Retreat',
        styles: ['wellness', 'heritage'],
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=80',
        description: 'Escape to the cool, crisp air of the Himalayas. Pine forests, apple orchards, and snow-capped peaks provide a breathtaking backdrop for both adventure and profound peace.',
        attractions: [
            {
                name: 'Spiti Valley Drive', type: 'Scenic Route',
                image: 'https://images.unsplash.com/photo-1605649487212-4dcb18c0cb52?auto=format&fit=crop&w=600&q=80',
                desc: 'A rugged, high-altitude desert road trip offering lunar landscapes, ancient monasteries clinging to cliffs, and starry night skies.'
            },
            {
                name: 'Kasol Pine Treks', type: 'Hiking',
                image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?auto=format&fit=crop&w=600&q=80',
                desc: 'Nestled in the Parvati Valley, Kasol serves as a basecamp for beautiful hikes through dense pine forests to remote mountain villages.'
            },
            {
                name: 'Shimla Heritage Walk', type: 'Culture',
                image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=600&q=80',
                desc: 'Stroll down the Mall Road and gaze at the Victorian-era colonial architecture from when this city was the summer capital of British India.'
            },
            {
                name: 'Rohtang Pass Manali', type: 'Adventure',
                image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=600&q=80',
                desc: 'A high mountain pass connecting the Kullu Valley with Lahaul and Spiti. Famous for its breathtaking scenery and snow activities.'
            },
            {
                name: 'Dharamshala Monasteries', type: 'Wellness',
                image: 'https://images.unsplash.com/photo-1626569109761-002f232ce5dc?auto=format&fit=crop&w=600&q=80',
                desc: 'Experience the spiritual aura of McLeod Ganj, the residence of the Dalai Lama, surrounded by colorful prayer flags and monks.'
            },
            {
                name: 'Dalhousie Meadows', type: 'Nature Trails',
                image: 'https://images.unsplash.com/photo-1593693411515-c20261bbdd66?auto=format&fit=crop&w=600&q=80',
                desc: 'Wander through the mini-Switzerland of India, featuring lush green meadows, dense pine valleys, and Scottish-style architecture.'
            }
        ]
    },
    {
        id: 'goa',
        name: 'Goa',
        tag: 'Coastal Bliss',
        styles: ['wellness', 'heritage', 'wildlife'],
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=80',
        description: 'Far beyond just beaches, Goa is a lush sanctuary of bright Portuguese villas, spice plantations, and hidden jungle coves kissed by the warm Arabian Sea.',
        attractions: [
            {
                name: 'Palolem Beach', type: 'Relaxation',
                image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80',
                desc: 'A crescent-shaped bay lined with palm trees and colorful beach huts. Known for its calm waters, making it perfect for swimming and kayaking.'
            },
            {
                name: 'Fontainhas Quarter', type: 'Heritage Walk',
                image: 'https://images.unsplash.com/photo-1586861788510-5ee42cb70311?auto=format&fit=crop&w=600&q=80',
                desc: 'Wander the narrow, winding streets of Asia’s only Latin Quarter, admiring the beautifully preserved brightly colored Portuguese homes.'
            },
            {
                name: 'Dudhsagar Falls', type: 'Nature',
                image: 'https://images.unsplash.com/photo-1632001150499-52db38f5f0b5?auto=format&fit=crop&w=600&q=80',
                desc: 'A majestic four-tiered waterfall located deep within the Bhagwan Mahaveer Sanctuary. The rushing water visually resembles a "Sea of Milk".'
            },
            {
                name: 'Basilica of Bom Jesus', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1614088924617-646bc56012e1?auto=format&fit=crop&w=600&q=80',
                desc: 'A UNESCO World Heritage site and fine example of Baroque architecture, holding the mortal remains of St. Francis Xavier.'
            },
            {
                name: 'Anjuna Flea Market', type: 'Culture',
                image: 'https://images.unsplash.com/photo-1560179406-1c6c60e0dc26?auto=format&fit=crop&w=600&q=80',
                desc: 'A vibrant, bustling Wednesday market where you can find everything from handmade jewelry and bohemian clothing to exotic spices.'
            },
            {
                name: 'Bhagwan Mahavir Sanctuary', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1564750506828-971cdd462a69?auto=format&fit=crop&w=600&q=80',
                desc: 'Explore the dense Western Ghats jungles, home to black panthers, barking deer, and a stunning variety of exotic birds.'
            }
        ]
    },
    {
        id: 'mah',
        name: 'Maharashtra',
        tag: 'Vibrant & Diverse',
        styles: ['heritage', 'wildlife', 'wellness'],
        image: 'https://images.unsplash.com/photo-1522069169874-c091f60b4e33?auto=format&fit=crop&w=1400&q=80',
        description: 'From the bustling streets of Mumbai to the ancient rock-cut caves and serene Western Ghats, Maharashtra offers a dynamic mix of history, nature, and modern life.',
        attractions: [
            {
                name: 'Ajanta & Ellora Caves', type: 'Ancient Wonder',
                image: 'https://images.unsplash.com/photo-1621691168128-4034fc487e49?auto=format&fit=crop&w=600&q=80',
                desc: 'Marvel at these magnificent rock-cut caves featuring exquisite ancient Indian art, paintings, and sculptures dating back over two millennia.'
            },
            {
                name: 'Gateway of India', type: 'Urban Heritage',
                image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
                desc: 'Stand before Mumbai’s most iconic landmark overlooking the Arabian Sea, blending intricately carved Islamic styles with 16th-century Gujarati architecture.'
            },
            {
                name: 'Mahabaleshwar Trek', type: 'Nature',
                image: 'https://images.unsplash.com/photo-1625834317364-b32c140fd360?auto=format&fit=crop&w=600&q=80',
                desc: 'A vast plateau bound by valleys on all sides, famous for strawberries, spectacular viewpoints, and beautiful historic forts.'
            },
            {
                name: 'Tadoba Tiger Reserve', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1588656113222-19e48db06d40?auto=format&fit=crop&w=600&q=80',
                desc: 'Embark on an open-top gypsy safari in Maharashtra’s oldest and largest national park, famously known as the jewel of Vidarbha.'
            },
            {
                name: 'Lonavala Viewpoints', type: 'Wellness',
                image: 'https://images.unsplash.com/photo-1625834317364-b32c140fd360?auto=format&fit=crop&w=600&q=80',
                desc: 'A popular hill station retreat, offering foggy valleys, cascading waterfalls during monsoons, and deep relaxing nature vibes.'
            },
            {
                name: 'Raigad Fort', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1623912165997-6c2e3dd7443d?auto=format&fit=crop&w=600&q=80',
                desc: 'Take a thrilling ropeway ride to the top of this majestic hill fort, once the proud capital of the Maratha Empire under Shivaji Maharaj.'
            }
        ]
    },
    {
        id: 'up',
        name: 'Uttar Pradesh',
        tag: 'The Heart of India',
        styles: ['heritage', 'wellness', 'wildlife'],
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=80',
        description: 'Home to the iconic Taj Mahal and the spiritual ghats of Varanasi. It is a land deeply rooted in ancient history, profound spirituality, and grand Mughal architecture.',
        attractions: [
            {
                name: 'Taj Mahal Agra', type: 'Wonder of the World',
                image: 'https://images.unsplash.com/photo-1564507592224-2c1513fbd80f?auto=format&fit=crop&w=600&q=80',
                desc: 'Witness the breathtaking ivory-white marble mausoleum on the right bank of the river Yamuna, universally admired as a masterpiece of world heritage.'
            },
            {
                name: 'Varanasi Ghats', type: 'Spiritual',
                image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80',
                desc: 'Experience the soul-stirring Ganga Aarti at dusk, a visually stunning spiritual ceremony along the ancient stone steps leading to the river Ganges.'
            },
            {
                name: 'Fatehpur Sikri', type: 'Architecture',
                image: 'https://images.unsplash.com/photo-1600155729720-6d1ff8f8ed97?auto=format&fit=crop&w=600&q=80',
                desc: 'Explore the beautifully preserved red sandstone ghost town, briefly the capital of the Mughal Empire under Emperor Akbar.'
            },
            {
                name: 'Mathura & Vrindavan', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1616010079549-ee42c88d8b6b?auto=format&fit=crop&w=600&q=80',
                desc: 'Immerse yourself in the mythology and devotion of the birthplace of Lord Krishna, featuring hundreds of colorful ancient temples.'
            },
            {
                name: 'Dudhwa National Park', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1593465135759-453db518f886?auto=format&fit=crop&w=600&q=80',
                desc: 'Discover the rich biodiversity of the Terai region, home to tigers, swamp deer, and a breathtaking array of migratory birds.'
            },
            {
                name: 'Bara Imambara', type: 'Architecture',
                image: 'https://images.unsplash.com/photo-1587313886542-a892b15e4f4d?auto=format&fit=crop&w=600&q=80',
                desc: 'Lose yourself in the Bhool Bhulaiya (labyrinth) of this grand shrine complex in Lucknow, known for its incredible unsupported arched ceilings.'
            }
        ]
    },
    {
        id: 'utk',
        name: 'Uttarakhand',
        tag: 'Land of the Gods',
        styles: ['wellness', 'wildlife', 'heritage'],
        image: 'https://images.unsplash.com/photo-1610641121010-098d1a1b15ea?auto=format&fit=crop&w=1400&q=80',
        description: 'Known for its stunning natural environment of the Himalayas, Bhabar, and Terai. Perfect for white-water rafting, tranquil meditation, and pristine mountain trekking.',
        attractions: [
            {
                name: 'Rishikesh Rafting', type: 'Adventure',
                image: 'https://images.unsplash.com/photo-1598228308290-a15d02324209?auto=format&fit=crop&w=600&q=80',
                desc: 'Navigate the thrilling rapids of the Ganges River, followed by a peaceful evening yoga session on the sandy riverbanks.'
            },
            {
                name: 'Valley of Flowers', type: 'Nature Trails',
                image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
                desc: 'Trek into a high-altitude Himalayan valley renowned for its meadows of endemic alpine flowers and outstanding natural beauty.'
            },
            {
                name: 'Jim Corbett Safari', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1518182170546-0766de6b6aad?auto=format&fit=crop&w=600&q=80',
                desc: 'Embark on a thrilling jeep safari through India’s oldest national park to catch a glimpse of the majestic Bengal tiger in its natural habitat.'
            },
            {
                name: 'Nainital Lake', type: 'Wellness',
                image: 'https://images.unsplash.com/photo-1598424263660-c3d3ef0c28ec?auto=format&fit=crop&w=600&q=80',
                desc: 'Enjoy a peaceful boat ride on this crescent-shaped high-altitude lake, surrounded by verdant forested hills.'
            },
            {
                name: 'Kedarnath Temple', type: 'Spiritual Heritage',
                image: 'https://images.unsplash.com/photo-1626714486845-6688b909564f?auto=format&fit=crop&w=600&q=80',
                desc: 'A strenuous but profoundly rewarding trek leads to this ancient stone Shiva temple set against a backdrop of snow-covered peaks.'
            },
            {
                name: 'Auli Ski Resort', type: 'Adventure',
                image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=600&q=80',
                desc: 'Take the cable car up to India’s premier ski destination, offering sweeping, panoramic views of the Nanda Devi mountain range.'
            }
        ]
    },
    {
        id: 'kar',
        name: 'Karnataka',
        tag: 'Ruins & Rainforests',
        styles: ['heritage', 'wellness', 'wildlife'],
        image: 'https://images.unsplash.com/photo-1600100397608-f010f41cb8ed?auto=format&fit=crop&w=1400&q=80',
        description: 'A spectacular blend of ancient sculpted temples, lush green coffee plantations, modern tech hubs, and pristine, hidden coastal beaches.',
        attractions: [
            {
                name: 'Hampi Ruins', type: 'Ancient Wonder',
                image: 'https://images.unsplash.com/photo-1600100397608-f010f41cb8ed?auto=format&fit=crop&w=600&q=80',
                desc: 'Explore the otherworldly landscape of giant boulders and magnificent temple ruins from the Vijayanagara Empire.'
            },
            {
                name: 'Coorg Coffee Estates', type: 'Nature Trails',
                image: 'https://images.unsplash.com/photo-1609141010173-19eb7b37d7a4?auto=format&fit=crop&w=600&q=80',
                desc: 'Often called the Scotland of India. Walk through misty, aromatic coffee and spice plantations in the lush Western Ghats.'
            },
            {
                name: 'Mysore Palace', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1588629739575-b6d61081b95f?auto=format&fit=crop&w=600&q=80',
                desc: 'Be dazzled by the incredibly ornate interiors of this royal palace, which lights up beautifully with nearly 100,000 bulbs on Sundays.'
            },
            {
                name: 'Bandipur National Park', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1558595914-41d3b5bdf51a?auto=format&fit=crop&w=600&q=80',
                desc: 'Take a safari through this premier Tiger Reserve, also known for its large populations of Indian elephants and spotted deer.'
            },
            {
                name: 'Gokarna Beaches', type: 'Wellness',
                image: 'https://images.unsplash.com/photo-1583095368395-5d9c72e2cfc2?auto=format&fit=crop&w=600&q=80',
                desc: 'A more tranquil alternative to Goa. Trek across rocky cliff sides to discover pristine, secluded coves like Om Beach and Half Moon Beach.'
            },
            {
                name: 'Jog Falls', type: 'Nature',
                image: 'https://images.unsplash.com/photo-1625442566113-d30ed4cc9db6?auto=format&fit=crop&w=600&q=80',
                desc: 'Witness the sheer power of India’s second-highest plunge waterfall, dropping dramatically through lush green forested cliffs.'
            }
        ]
    },
    {
        id: 'tn',
        name: 'Tamil Nadu',
        tag: 'Dravidian Splendor',
        styles: ['heritage', 'wellness', 'wildlife'],
        image: 'https://images.unsplash.com/photo-1603507208466-9818ab44558e?auto=format&fit=crop&w=1400&q=80',
        description: 'The cultural heartland of South India, boasting towering, colorful temple gateways, classical arts, cool hill stations, and the southernmost tip of India.',
        attractions: [
            {
                name: 'Meenakshi Temple', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1603507208466-9818ab44558e?auto=format&fit=crop&w=600&q=80',
                desc: 'Get lost in the dizzying detail of this historic Hindu temple complex in Madurai, famous for its towering, colorful gopurams.'
            },
            {
                name: 'Ooty Botanical Gardens', type: 'Nature',
                image: 'https://images.unsplash.com/photo-1591834925828-568eb2a1e649?auto=format&fit=crop&w=600&q=80',
                desc: 'Take the UNESCO-listed Nilgiri Mountain Railway toy train up to Ooty to enjoy sprawling, meticulously maintained British-era gardens.'
            },
            {
                name: 'Mahabalipuram Monuments', type: 'Ancient Wonder',
                image: 'https://images.unsplash.com/photo-1621691168128-4034fc487e49?auto=format&fit=crop&w=600&q=80',
                desc: 'Marvel at 7th-century rock-cut monolithic temples and the stunning Shore Temple overlooking the waves of the Bay of Bengal.'
            },
            {
                name: 'Mudumalai National Park', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=600&q=80',
                desc: 'A critical wildlife corridor in the Nilgiri hills where you can spot wild elephants, tigers, leopards, and Indian gaur.'
            },
            {
                name: 'Kanyakumari Sunset', type: 'Scenic Spot',
                image: 'https://images.unsplash.com/photo-1590403362145-2f94943f6d76?auto=format&fit=crop&w=600&q=80',
                desc: 'Visit the absolute southern tip of the Indian subcontinent, where three oceans meet, to witness breathtaking sunrise and sunset views.'
            },
            {
                name: 'Kodaikanal Lake', type: 'Wellness',
                image: 'https://images.unsplash.com/photo-1616216666173-04d309d4c728?auto=format&fit=crop&w=600&q=80',
                desc: 'Rent a bicycle or a rowboat to explore this star-shaped, man-made lake enveloped by mist and cool, refreshing mountain air.'
            }
        ]
    }
];

// --- 1.5. Travel Style Metadata ---
const styleMeta = {
    'wellness': {
        title: 'Wellness & Yoga',
        desc: 'Rejuvenate your mind, body, and soul in India\'s most serene and peaceful destinations.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1400&auto=format&fit=crop'
    },
    'heritage': {
        title: 'Royal Heritage',
        desc: 'Step back in time and experience the grandeur of India\'s ancient forts, palaces, and empires.',
        image: 'https://images.unsplash.com/photo-1534160490001-c88c7f9984eb?q=80&w=1400&auto=format&fit=crop'
    },
    'wildlife': {
        title: 'Wildlife Safaris',
        desc: 'Encounter majestic creatures and untamed nature in their natural habitats across lush national parks.',
        image: 'https://images.unsplash.com/photo-1518182170546-0766de6b6aad?q=80&w=1400&auto=format&fit=crop'
    }
};
