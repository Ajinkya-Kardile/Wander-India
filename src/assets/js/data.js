const indiaData = [
    {
        id: 'ker',
        name: 'Kerala',
        tag: 'Tropical Serenity',
        styles: ['wellness', 'wildlife', 'heritage'],
        image: 'https://images.unsplash.com/photo-1572002265188-173c1a2f6699?auto=format&fit=crop&w=1400&q=80',
        description: 'Drift through emerald backwaters on a traditional houseboat, surrounded by swaying palms. Kerala offers a slow-paced, deeply rejuvenating connection with nature away from the bustling cities.',
        attractions: [
            {
                name: 'Alleppey Backwaters', type: 'Leisure & Boating',
                image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80',
                desc: 'Rent a traditional Kettuvallam houseboat and cruise through the vast network of serene canals, witnessing village life along the banks.'
            },
            {
                name: 'Munnar Tea Plantations', type: 'Nature Trails',
                image: 'https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?auto=format&fit=crop&w=600&q=80',
                desc: 'Escape to the cool highlands. Trek through endless rolling hills blanketed in vibrant green tea bushes and breathe in the fresh mountain air.'
            },
            {
                name: 'Varkala Cliff Beach', type: 'Coastal Relaxing',
                image: 'https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?auto=format&fit=crop&w=600&q=80',
                desc: 'Famous for its dramatic red laterite cliffs plunging into the Arabian Sea. Enjoy bohemian cafes and stunning sunsets.'
            },
            {
                name: 'Wayanad Wildlife Sanctuary', type: 'Wildlife',
                image: 'https://plus.unsplash.com/premium_photo-1730160764063-c9ceff24a235?auto=format&fit=crop&w=600&q=80',
                desc: 'Explore lush green forests packed with elephants, leopards, and diverse bird species. A true haven for nature and wildlife lovers.'
            },
            {
                name: 'Fort Kochi Heritage', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80',
                desc: 'Wander through quaint streets featuring ancient Portuguese architecture, Jewish synagogues, and iconic Chinese fishing nets.'
            },
            {
                name: 'Thekkady National Park', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1716404985743-8c0e007cb358?auto=format&fit=crop&w=600&q=80',
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
                image: 'https://images.unsplash.com/photo-1700985959163-ed9aa14a99bd?auto=format&fit=crop&w=600&q=80',
                desc: 'A magnificent complex of palaces built over nearly 400 years, offering sweeping views of Lake Pichola and its floating marble palaces.'
            },
            {
                name: 'Jaisalmer Desert Camp', type: 'Adventure',
                image: 'https://images.unsplash.com/photo-1605425368891-5533a8ede6c2?auto=format&fit=crop&w=600&q=80',
                desc: 'Spend a night under the stars in the vast Thar Desert. Enjoy camel safaris, folk music, and the eerie silence of the dunes.'
            },
            {
                name: 'Jaipur Stepwells', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
                desc: 'Marvel at the symmetrical, mesmerizing geometry of ancient stepwells like Panna Meena ka Kund, an architectural wonder of ancient water conservation.'
            },
            {
                name: 'Mehrangarh Fort', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1580389672842-9755d100d18e?auto=format&fit=crop&w=600&q=80',
                desc: 'One of the largest forts in India, rising perpendicularly and impregnable from a rocky hill overlooking the "Blue City" of Jodhpur.'
            },
            {
                name: 'Ranthambore Safari', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1725990076174-a3448eb86e76?auto=format&fit=crop&w=600&q=80',
                desc: 'Embark on a thrilling jeep safari through ancient ruins and dry deciduous forests to catch a glimpse of the majestic Bengal Tiger.'
            },
            {
                name: 'Pushkar Holy Lake', type: 'Wellness',
                image: 'https://plus.unsplash.com/premium_photo-1723802627333-84dd17e016eb?auto=format&fit=crop&w=600&q=80',
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
                image: 'https://images.unsplash.com/photo-1652514284048-a297d43ab05d?auto=format&fit=crop&w=600&q=80',
                desc: 'A rugged, high-altitude desert road trip offering lunar landscapes, ancient monasteries clinging to cliffs, and starry night skies.'
            },
            {
                name: 'Kasol Pine Treks', type: 'Hiking',
                image: 'https://images.unsplash.com/photo-1652501835253-c6d3e5fbfd15?auto=format&fit=crop&w=600&q=80',
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
                image: 'https://images.unsplash.com/photo-1755607167323-9c0160998e38?auto=format&fit=crop&w=600&q=80',
                desc: 'Experience the spiritual aura of McLeod Ganj, the residence of the Dalai Lama, surrounded by colorful prayer flags and monks.'
            },
            {
                name: 'Dalhousie Meadows', type: 'Nature Trails',
                image: 'https://lakshmisharath.com/wp-content/uploads/2018/09/Dalhousie-miniswiss.jpg?auto=format&fit=crop&w=600&q=80',
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
                image: 'https://images.unsplash.com/photo-1648367819123-19d2ffe43f3a?auto=format&fit=crop&w=600&q=80',
                desc: 'Wander the narrow, winding streets of Asia’s only Latin Quarter, admiring the beautifully preserved brightly colored Portuguese homes.'
            },
            {
                name: 'Dudhsagar Falls', type: 'Nature',
                image: 'https://images.unsplash.com/photo-1614054063017-a3fdd14cbfae?auto=format&fit=crop&w=600&q=80',
                desc: 'A majestic four-tiered waterfall located deep within the Bhagwan Mahaveer Sanctuary. The rushing water visually resembles a "Sea of Milk".'
            }
        ]
    },
    {
        id: 'mah',
        name: 'Maharashtra',
        tag: 'Vibrant & Diverse',
        styles: ['heritage', 'wildlife', 'wellness'],
        image: 'https://images.unsplash.com/photo-1585889574476-af7bcb00d9c3?auto=format&fit=crop&w=1400&q=80',
        description: 'From the bustling streets of Mumbai to the ancient rock-cut caves and serene Western Ghats, Maharashtra offers a dynamic mix of history, nature, and modern life.',
        attractions: [
            {
                name: 'Ajanta & Ellora Caves', type: 'Ancient Wonder',
                image: 'https://plus.unsplash.com/premium_photo-1697730364913-61ebe23e2dd7?auto=format&fit=crop&w=600&q=80',
                desc: 'Marvel at these magnificent rock-cut caves featuring exquisite ancient Indian art, paintings, and sculptures dating back over two millennia.'
            },
            {
                name: 'Gateway of India', type: 'Urban Heritage',
                image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=600&q=80',
                desc: 'Stand before Mumbai’s most iconic landmark overlooking the Arabian Sea, blending intricately carved Islamic styles with 16th-century Gujarati architecture.'
            },
            {
                name: 'Mahabaleshwar Trek', type: 'Nature',
                image: 'https://images.unsplash.com/photo-1574323109400-7477368b7b03?auto=format&fit=crop&w=600&q=80',
                desc: 'A vast plateau bound by valleys on all sides, famous for strawberries, spectacular viewpoints, and beautiful historic forts.'
            },
            {
                name: 'Tadoba Tiger Reserve', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1710605432537-742931a6aeef?auto=format&fit=crop&w=600&q=80',
                desc: 'Embark on an open-top gypsy safari in Maharashtra’s oldest and largest national park, famously known as the jewel of Vidarbha.'
            },
            {
                name: 'Lonavala Viewpoints', type: 'Wellness',
                image: 'https://images.unsplash.com/photo-1737347799179-40be496e5937?auto=format&fit=crop&w=600&q=80',
                desc: 'A popular hill station retreat, offering foggy valleys, cascading waterfalls during monsoons, and deep relaxing nature vibes.'
            },
            {
                name: 'Raigad Fort', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1560756769-068d6638b559?auto=format&fit=crop&w=600&q=80',
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
                image: 'https://images.unsplash.com/photo-1631781101051-121237b6c7cb?auto=format&fit=crop&w=600&q=80',
                desc: 'Witness the breathtaking ivory-white marble mausoleum on the right bank of the river Yamuna, universally admired as a masterpiece of world heritage.'
            },
            {
                name: 'Varanasi Ghats', type: 'Spiritual',
                image: 'https://plus.unsplash.com/premium_photo-1697730304380-2ed1c7aea373?auto=format&fit=crop&w=600&q=80',
                desc: 'Experience the soul-stirring Ganga Aarti at dusk, a visually stunning spiritual ceremony along the ancient stone steps leading to the river Ganges.'
            },
            {
                name: 'Mathura & Vrindavan', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1756454487537-1fa7ad135349?auto=format&fit=crop&w=600&q=80',
                desc: 'Immerse yourself in the mythology and devotion of the birthplace of Lord Krishna, featuring hundreds of colorful ancient temples.'
            }
        ]
    },
    {
        id: 'utk',
        name: 'Uttarakhand',
        tag: 'Land of the Gods',
        styles: ['wellness', 'wildlife', 'heritage'],
        image: 'https://images.unsplash.com/photo-1709623868300-e3b78cad10e1?auto=format&fit=crop&w=1400&q=80',
        description: 'Known for its stunning natural environment of the Himalayas, Bhabar, and Terai. Perfect for white-water rafting, tranquil meditation, and pristine mountain trekking.',
        attractions: [
            {
                name: 'Rishikesh Rafting', type: 'Adventure',
                image: 'https://plus.unsplash.com/premium_photo-1661891887710-0528c1d76b92?auto=format&fit=crop&w=600&q=80',
                desc: 'Navigate the thrilling rapids of the Ganges River, followed by a peaceful evening yoga session on the sandy riverbanks.'
            },
            {
                name: 'Kedarnath Temple', type: 'Spiritual Heritage',
                image: 'https://images.unsplash.com/photo-1649147313351-c86537fda0eb?auto=format&fit=crop&w=600&q=80',
                desc: 'A strenuous but profoundly rewarding trek leads to this ancient stone Shiva temple set against a backdrop of snow-covered peaks.'
            }
        ]
    },
    {
        id: 'kar',
        name: 'Karnataka',
        tag: 'Ruins & Rainforests',
        styles: ['heritage', 'wellness', 'wildlife'],
        image: 'https://plus.unsplash.com/premium_photo-1697730504977-26847b1f1f91?auto=format&fit=crop&w=1400&q=80',
        description: 'A spectacular blend of ancient sculpted temples, lush green coffee plantations, modern tech hubs, and pristine, hidden coastal beaches.',
        attractions: [
            {
                name: 'Hampi Ruins', type: 'Ancient Wonder',
                image: 'https://images.unsplash.com/photo-1689946727963-be60e05fe278?auto=format&fit=crop&w=600&q=80',
                desc: 'Explore the otherworldly landscape of giant boulders and magnificent temple ruins from the Vijayanagara Empire.'
            },
            {
                name: 'Mysore Palace', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1665376620694-fc0c4bab7294?auto=format&fit=crop&w=600&q=80',
                desc: 'Be dazzled by the incredibly ornate interiors of this royal palace, which lights up beautifully with nearly 100,000 bulbs on Sundays.'
            },
            {
                name: 'Gokarna Beaches', type: 'Wellness',
                image: 'https://images.unsplash.com/photo-1606163339132-45f3225ed3a9?auto=format&fit=crop&w=600&q=80',
                desc: 'A more tranquil alternative to Goa. Trek across rocky cliff sides to discover pristine, secluded coves like Om Beach and Half Moon Beach.'
            }
        ]
    },
    {
        id: 'tn',
        name: 'Tamil Nadu',
        tag: 'Dravidian Splendor',
        styles: ['heritage', 'wellness', 'wildlife'],
        image: 'https://images.unsplash.com/photo-1599679400256-d4781a10bf2b?auto=format&fit=crop&w=1400&q=80',
        description: 'The cultural heartland of South India, boasting towering, colorful temple gateways, classical arts, cool hill stations, and the southernmost tip of India.',
        attractions: [
            {
                name: 'Meenakshi Temple', type: 'Heritage',
                image: 'https://images.unsplash.com/photo-1732883247945-896e63ee644a?auto=format&fit=crop&w=600&q=80',
                desc: 'Get lost in the dizzying detail of this historic Hindu temple complex in Madurai, famous for its towering, colorful gopurams.'
            },
            {
                name: 'Ooty Botanical Gardens', type: 'Nature',
                image: 'https://images.unsplash.com/photo-1683863655647-b37baeb9fd99?auto=format&fit=crop&w=600&q=80',
                desc: 'Take the UNESCO-listed Nilgiri Mountain Railway toy train up to Ooty to enjoy sprawling, meticulously maintained British-era gardens.'
            },
            {
                name: 'Mahabalipuram Monuments', type: 'Ancient Wonder',
                image: 'https://images.unsplash.com/photo-1586708682826-4256fe5b68b6?auto=format&fit=crop&w=600&q=80',
                desc: 'Marvel at 7th-century rock-cut monolithic temples and the stunning Shore Temple overlooking the waves of the Bay of Bengal.'
            },
            {
                name: 'Mudumalai National Park', type: 'Wildlife',
                image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=600&q=80',
                desc: 'A critical wildlife corridor in the Nilgiri hills where you can spot wild elephants, tigers, leopards, and Indian gaur.'
            },
            {
                name: 'Kanyakumari Sunset', type: 'Scenic Spot',
                image: 'https://images.unsplash.com/photo-1641811465826-dbb8ccc6d612?auto=format&fit=crop&w=600&q=80',
                desc: 'Visit the absolute southern tip of the Indian subcontinent, where three oceans meet, to witness breathtaking sunrise and sunset views.'
            },
            {
                name: 'Kodaikanal Lake', type: 'Wellness',
                image: 'https://plus.unsplash.com/premium_photo-1667146088460-9c99e594e16b?auto=format&fit=crop&w=600&q=80',
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
        image: 'https://images.unsplash.com/photo-1728578610524-e88049ae886d?q=80&w=1400&auto=format&fit=crop'
    },
    'wildlife': {
        title: 'Wildlife Safaris',
        desc: 'Encounter majestic creatures and untamed nature in their natural habitats across lush national parks.',
        image: 'https://images.unsplash.com/photo-1585889574476-af7bcb00d9c3?q=80&w=1400&auto=format&fit=crop'
    }
};
