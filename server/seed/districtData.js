const districts = [
  {
    name: "Hassan",
    state: "Karnataka",
    description:
      "Hassan is famous for Belur, Halebidu and Shravanabelagola. It is one of Karnataka's most important heritage districts with magnificent Hoysala architecture.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Belur_temple.jpg",
    famousFor: [
      "Belur Temple",
      "Halebidu",
      "Shravanabelagola"
    ],
    famousFood: [
      "Ragi Mudde",
      "Akki Rotti",
      "Filter Coffee"
    ],
    travelTips: [
      "Visit between October and February",
      "Carry comfortable walking shoes"
    ],
    bestTime: "October to February",
    population: "17.7 Lakhs",
    area: "6826 km²",
    latitude: 13.0068,
    longitude: 76.0996,
    rating: 4.8
  },

  {
    name: "Mysuru",
    state: "Karnataka",
    description:
      "Mysuru is renowned for Mysore Palace, Chamundi Hills, Dasara Festival and rich cultural heritage.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mysore_Palace_Morning.jpg",
    famousFor: [
      "Mysore Palace",
      "Chamundi Hills",
      "Brindavan Gardens"
    ],
    famousFood: [
      "Mysore Pak",
      "Bisi Bele Bath",
      "Masala Dosa"
    ],
    travelTips: [
      "Visit Palace in the evening for illumination",
      "Experience Dasara if visiting in October"
    ],
    bestTime: "October to March",
    population: "30 Lakhs",
    area: "6763 km²",
    latitude: 12.2958,
    longitude: 76.6394,
    rating: 4.9
  },

  {
    name: "Bengaluru Urban",
    state: "Karnataka",
    description:
      "Bengaluru is India's Silicon Valley and the capital of Karnataka, known for technology parks, gardens and pleasant climate.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Vidhana_Soudha_Bangalore.jpg",
    famousFor: [
      "Cubbon Park",
      "Lalbagh",
      "Vidhana Soudha"
    ],
    famousFood: [
      "Benne Masala Dosa",
      "Idli Vada",
      "Filter Coffee"
    ],
    travelTips: [
      "Avoid peak traffic hours",
      "Metro is convenient"
    ],
    bestTime: "September to February",
    population: "96 Lakhs",
    area: "2196 km²",
    latitude: 12.9716,
    longitude: 77.5946,
    rating: 4.8
  },

  {
    name: "Kodagu",
    state: "Karnataka",
    description:
      "Kodagu, also known as Coorg, is famous for coffee plantations, waterfalls and misty hills.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Abbey_Falls_Coorg.jpg",
    famousFor: [
      "Abbey Falls",
      "Raja Seat",
      "Coffee Estates"
    ],
    famousFood: [
      "Pandi Curry",
      "Kadambuttu",
      "Bamboo Shoot Curry"
    ],
    travelTips: [
      "Carry warm clothes",
      "Visit during monsoon carefully"
    ],
    bestTime: "October to March",
    population: "5.5 Lakhs",
    area: "4102 km²",
    latitude: 12.3375,
    longitude: 75.8069,
    rating: 4.9
  },

  {
    name: "Chikkamagaluru",
    state: "Karnataka",
    description:
      "Chikkamagaluru is famous for Mullayanagiri, Baba Budangiri and lush coffee plantations.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Mullayanagiri.jpg",
    famousFor: [
      "Mullayanagiri",
      "Baba Budangiri",
      "Coffee Plantations"
    ],
    famousFood: [
      "Akki Rotti",
      "Coffee",
      "Neer Dosa"
    ],
    travelTips: [
      "Ideal for trekking",
      "Carry rain gear during monsoon"
    ],
    bestTime: "September to February",
    population: "11 Lakhs",
    area: "7201 km²",
    latitude: 13.3153,
    longitude: 75.7754,
    rating: 4.9
  },

  {
    name: "Shivamogga",
    state: "Karnataka",
    description:
      "Shivamogga is known as the Gateway to Malnad and is home to Jog Falls and dense forests.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Jog_Falls_2010.jpg",
    famousFor: [
      "Jog Falls",
      "Sakrebailu",
      "Agumbe"
    ],
    famousFood: [
      "Kadubu",
      "Akki Rotti",
      "Jackfruit Dishes"
    ],
    travelTips: [
      "Visit Jog Falls after monsoon",
      "Carry trekking shoes"
    ],
    bestTime: "August to January",
    population: "17 Lakhs",
    area: "8465 km²",
    latitude: 13.9299,
    longitude: 75.5681,
    rating: 4.8
  },

  {
    name: "Udupi",
    state: "Karnataka",
    description:
      "Udupi is famous for Sri Krishna Temple, Malpe Beach and delicious cuisine.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Udupi_Sri_Krishna_Matha.jpg",
    famousFor: [
      "Sri Krishna Temple",
      "Malpe Beach",
      "St. Mary's Island"
    ],
    famousFood: [
      "Udupi Sambar",
      "Masala Dosa",
      "Goli Baje"
    ],
    travelTips: [
      "Visit beaches in the evening",
      "Taste authentic Udupi meals"
    ],
    bestTime: "October to February",
    population: "12 Lakhs",
    area: "3582 km²",
    latitude: 13.3409,
    longitude: 74.7421,
    rating: 4.8
  },

  {
    name: "Dakshina Kannada",
    state: "Karnataka",
    description:
      "Dakshina Kannada is famous for Mangaluru city, beaches and temples.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Panambur_Beach.jpg",
    famousFor: [
      "Panambur Beach",
      "Kadri Temple",
      "Pilikula"
    ],
    famousFood: [
      "Neer Dosa",
      "Fish Curry",
      "Chicken Ghee Roast"
    ],
    travelTips: [
      "Carry sunscreen",
      "Seafood lovers must visit"
    ],
    bestTime: "October to February",
    population: "20 Lakhs",
    area: "4861 km²",
    latitude: 12.9141,
    longitude: 74.8560,
    rating: 4.8
  },

  {
    name: "Chitradurga",
    state: "Karnataka",
    description:
      "Chitradurga is known for its majestic hill fort and historical significance.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Chitradurga_Fort.jpg",
    famousFor: [
      "Chitradurga Fort",
      "Chandravalli Caves",
      "Jogimatti"
    ],
    famousFood: [
      "Jolada Rotti",
      "Ennegayi",
      "Holige"
    ],
    travelTips: [
      "Visit early morning",
      "Carry water while climbing the fort"
    ],
    bestTime: "October to February",
    population: "16 Lakhs",
    area: "8436 km²",
    latitude: 14.2251,
    longitude: 76.3983,
    rating: 4.7
  },

  {
    name: "Vijayapura",
    state: "Karnataka",
    description:
      "Vijayapura is home to the iconic Gol Gumbaz and magnificent Islamic architecture.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Gol_Gumbaz.jpg",
    famousFor: [
      "Gol Gumbaz",
      "Ibrahim Rauza",
      "Jumma Masjid"
    ],
    famousFood: [
      "Biryani",
      "Kebabs",
      "Shahi Tukda"
    ],
    travelTips: [
      "Visit Gol Gumbaz early",
      "Carry a hat during summer"
    ],
    bestTime: "November to February",
    population: "22 Lakhs",
    area: "10498 km²",
    latitude: 16.8302,
    longitude: 75.7100,
    rating: 4.7
  },
  {
  name: "Belagavi",
  state: "Karnataka",
  description:
    "Belagavi is known for its rich history, ancient forts, beautiful temples and pleasant climate. It is one of North Karnataka's major cultural and commercial centers.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/7/72/Belgaum_Fort.jpg",
  famousFor: [
    "Belagavi Fort",
    "Kapileshwara Temple",
    "Gokak Falls"
  ],
  famousFood: [
    "Kunda",
    "Jolada Rotti",
    "North Karnataka Meals"
  ],
  travelTips: [
    "Visit Gokak Falls during monsoon",
    "Carry light cotton clothes"
  ],
  bestTime: "October to February",
  population: "48 Lakhs",
  area: "13415 km²",
  latitude: 15.8497,
  longitude: 74.4977,
  rating: 4.8
},
{
  name: "Bagalkot",
  state: "Karnataka",
  description:
    "Bagalkot is famous for Badami, Pattadakal and Aihole, showcasing the glorious Chalukyan architecture.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/Badami_Cave_Temple.jpg",
  famousFor: [
    "Badami",
    "Pattadakal",
    "Aihole"
  ],
  famousFood: [
    "Jolada Rotti",
    "Ennegayi",
    "Shenga Chutney"
  ],
  travelTips: [
    "Carry water while sightseeing",
    "Visit caves early morning"
  ],
  bestTime: "October to March",
  population: "19 Lakhs",
  area: "6575 km²",
  latitude: 16.1867,
  longitude: 75.6961,
  rating: 4.9
},
{
  name: "Ballari",
  state: "Karnataka",
  description:
    "Ballari is famous for Hampi, a UNESCO World Heritage Site, and its rich Vijayanagara history.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Hampi_Stone_Chariot.jpg",
  famousFor: [
    "Hampi",
    "Tungabhadra Dam",
    "Ballari Fort"
  ],
  famousFood: [
    "Biryani",
    "Jolada Rotti",
    "Ragi Mudde"
  ],
  travelTips: [
    "Visit Hampi during winter",
    "Wear comfortable footwear"
  ],
  bestTime: "October to February",
  population: "28 Lakhs",
  area: "8447 km²",
  latitude: 15.1394,
  longitude: 76.9214,
  rating: 4.9
},
{
  name: "Bidar",
  state: "Karnataka",
  description:
    "Bidar is known for Bidar Fort, Bahmani architecture and Bidri handicrafts.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/Bidar_Fort.jpg",
  famousFor: [
    "Bidar Fort",
    "Gurudwara Nanak Jhira",
    "Bidri Craft"
  ],
  famousFood: [
    "Biryani",
    "Kebabs",
    "Sweet Dishes"
  ],
  travelTips: [
    "Visit forts in the morning",
    "Try local Bidri shopping"
  ],
  bestTime: "October to February",
  population: "17 Lakhs",
  area: "5448 km²",
  latitude: 17.9104,
  longitude: 77.5199,
  rating: 4.7
},
{
  name: "Chamarajanagar",
  state: "Karnataka",
  description:
    "Chamarajanagar is famous for Bandipur National Park, Biligiri Ranganatha Hills and wildlife tourism.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/55/Bandipur_National_Park.jpg",
  famousFor: [
    "Bandipur",
    "BRT Hills",
    "Himavad Gopalaswamy Temple"
  ],
  famousFood: [
    "Ragi Mudde",
    "Akki Rotti",
    "Local Tribal Cuisine"
  ],
  travelTips: [
    "Safari timings are important",
    "Avoid feeding wildlife"
  ],
  bestTime: "October to May",
  population: "11 Lakhs",
  area: "5102 km²",
  latitude: 11.9231,
  longitude: 76.9395,
  rating: 4.8
},
{
  name: "Chikkaballapur",
  state: "Karnataka",
  description:
    "Chikkaballapur is home to Nandi Hills, Bhoga Nandeeshwara Temple and scenic trekking routes.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Nandi_Hills.jpg",
  famousFor: [
    "Nandi Hills",
    "Skandagiri",
    "Bhoga Nandeeshwara Temple"
  ],
  famousFood: [
    "Masala Dosa",
    "Ragi Mudde",
    "Filter Coffee"
  ],
  travelTips: [
    "Visit before sunrise",
    "Carry a light jacket"
  ],
  bestTime: "September to February",
  population: "13 Lakhs",
  area: "4244 km²",
  latitude: 13.435,
  longitude: 77.7315,
  rating: 4.9
},
{
  name: "Davanagere",
  state: "Karnataka",
  description:
    "Davanagere is famous for the soft and crispy Davanagere Benne Dose and peaceful lakes.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Kunduvada_Lake.jpg",
  famousFor: [
    "Kunduvada Lake",
    "Harihar",
    "Anjaneya Temple"
  ],
  famousFood: [
    "Benne Dose",
    "Mirchi Bajji",
    "Idli"
  ],
  travelTips: [
    "Taste authentic Benne Dose",
    "Visit lakes during sunset"
  ],
  bestTime: "October to February",
  population: "19 Lakhs",
  area: "5924 km²",
  latitude: 14.4644,
  longitude: 75.9218,
  rating: 4.7
},
{
  name: "Dharwad",
  state: "Karnataka",
  description:
    "Dharwad is famous for education, classical music, Dharwad Peda and beautiful green landscapes.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/54/Dharwad.jpg",
  famousFor: ["Dharwad Peda", "Karnataka University", "Nrupatunga Betta"],
  famousFood: ["Dharwad Peda", "Jolada Rotti", "North Karnataka Meals"],
  travelTips: [
    "Visit during winter",
    "Taste authentic Dharwad Peda"
  ],
  bestTime: "October to February",
  population: "18 Lakhs",
  area: "4263 km²",
  latitude: 15.4589,
  longitude: 75.0078,
  rating: 4.7
},
{
  name: "Gadag",
  state: "Karnataka",
  description:
    "Gadag is known for Trikuteshwara Temple, Veeranarayana Temple and rich cultural heritage.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/e/e4/Trikuteshwara_Temple.jpg",
  famousFor: ["Trikuteshwara Temple", "Lakkundi", "Veeranarayana Temple"],
  famousFood: ["Jolada Rotti", "Ennegayi", "Shenga Chutney"],
  travelTips: [
    "Visit temples in the morning",
    "Carry drinking water"
  ],
  bestTime: "October to February",
  population: "11 Lakhs",
  area: "4657 km²",
  latitude: 15.4315,
  longitude: 75.6340,
  rating: 4.6
},
{
  name: "Haveri",
  state: "Karnataka",
  description:
    "Haveri is famous for Siddheshwara Temple, Byadagi Chillies and historical monuments.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/6/6e/Siddheshwara_Temple.jpg",
  famousFor: ["Byadagi", "Siddheshwara Temple", "Galageshwara Temple"],
  famousFood: ["Byadagi Chilli", "Jolada Rotti", "Holige"],
  travelTips: [
    "Visit between October and February",
    "Explore local markets"
  ],
  bestTime: "October to February",
  population: "16 Lakhs",
  area: "4823 km²",
  latitude: 14.7951,
  longitude: 75.3991,
  rating: 4.6
},
{
  name: "Kalaburagi",
  state: "Karnataka",
  description:
    "Kalaburagi is known for Gulbarga Fort, Khwaja Bande Nawaz Dargah and historical architecture.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/3/3d/Gulbarga_Fort.jpg",
  famousFor: ["Gulbarga Fort", "Bande Nawaz Dargah", "Sharana Basaveshwara Temple"],
  famousFood: ["Jowar Roti", "Biryani", "Kebabs"],
  travelTips: [
    "Visit forts early morning",
    "Carry a hat in summer"
  ],
  bestTime: "November to February",
  population: "26 Lakhs",
  area: "10990 km²",
  latitude: 17.3297,
  longitude: 76.8343,
  rating: 4.7
},
{
  name: "Kolar",
  state: "Karnataka",
  description:
    "Kolar is famous for Kolar Gold Fields (KGF), Someshwara Temple and Avani Hills.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Kolar_Gold_Fields.jpg",
  famousFor: ["KGF", "Someshwara Temple", "Avani"],
  famousFood: ["Ragi Mudde", "Masala Dosa", "Filter Coffee"],
  travelTips: [
    "Visit KGF museum",
    "Carry water while trekking"
  ],
  bestTime: "October to February",
  population: "15 Lakhs",
  area: "3979 km²",
  latitude: 13.1360,
  longitude: 78.1299,
  rating: 4.7
},
{
  name: "Koppal",
  state: "Karnataka",
  description:
    "Koppal is famous for ancient temples, forts and its proximity to Hampi.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Koppal_Fort.jpg",
  famousFor: ["Koppal Fort", "Mahadeva Temple", "Nearby Hampi"],
  famousFood: ["Jolada Rotti", "Ennegayi", "Holige"],
  travelTips: [
    "Visit historical sites in winter",
    "Carry sunscreen"
  ],
  bestTime: "October to February",
  population: "14 Lakhs",
  area: "5570 km²",
  latitude: 15.3483,
  longitude: 76.1548,
  rating: 4.6
},
{
  name: "Mandya",
  state: "Karnataka",
  description:
    "Mandya is famous for sugarcane fields, Srirangapatna, Shivanasamudra Falls and Ranganathittu Bird Sanctuary.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/3/36/Shivanasamudra_Falls.jpg",
  famousFor: ["Shivanasamudra", "Srirangapatna", "Ranganathittu"],
  famousFood: ["Ragi Mudde", "Sugarcane Juice", "Mysore Pak"],
  travelTips: [
    "Visit waterfalls after monsoon",
    "Carry binoculars for bird watching"
  ],
  bestTime: "September to February",
  population: "18 Lakhs",
  area: "4961 km²",
  latitude: 12.5218,
  longitude: 76.8951,
  rating: 4.8
},
{
  name: "Raichur",
  state: "Karnataka",
  description:
    "Raichur is known for Raichur Fort, thermal power stations and its historical importance under the Vijayanagara Empire.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Raichur_Fort.jpg",
  famousFor: [
    "Raichur Fort",
    "Ek Minar Ki Masjid",
    "Krishna River"
  ],
  famousFood: [
    "Jolada Rotti",
    "Biryani",
    "Ragi Mudde"
  ],
  travelTips: [
    "Visit during winter",
    "Carry water during sightseeing"
  ],
  bestTime: "October to February",
  population: "20 Lakhs",
  area: "8442 km²",
  latitude: 16.2120,
  longitude: 77.3439,
  rating: 4.6
},
{
  name: "Ramanagara",
  state: "Karnataka",
  description:
    "Ramanagara is famous for Sholay Hills, rock climbing, silk industry and scenic landscapes.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ramanagara_Hills.jpg",
  famousFor: [
    "Sholay Hills",
    "Ramadevara Betta",
    "Silk Market"
  ],
  famousFood: [
    "Ragi Mudde",
    "Masala Dosa",
    "Filter Coffee"
  ],
  travelTips: [
    "Perfect for trekking",
    "Visit early morning"
  ],
  bestTime: "September to February",
  population: "11 Lakhs",
  area: "3546 km²",
  latitude: 12.7218,
  longitude: 77.2813,
  rating: 4.8
},
{
  name: "Tumakuru",
  state: "Karnataka",
  description:
    "Tumakuru is famous for Devarayanadurga Hills, Siddaganga Mutt and trekking destinations.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Devarayanadurga.jpg",
  famousFor: [
    "Devarayanadurga",
    "Siddaganga",
    "Namada Chilume"
  ],
  famousFood: [
    "Thatte Idli",
    "Ragi Mudde",
    "Filter Coffee"
  ],
  travelTips: [
    "Visit early morning",
    "Carry trekking shoes"
  ],
  bestTime: "October to February",
  population: "27 Lakhs",
  area: "10598 km²",
  latitude: 13.3409,
  longitude: 77.1010,
  rating: 4.7
},
{
  name: "Uttara Kannada",
  state: "Karnataka",
  description:
    "Uttara Kannada is famous for Gokarna, Dandeli, Karwar beaches and dense Western Ghats forests.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Om_Beach_Gokarna.jpg",
  famousFor: [
    "Gokarna",
    "Dandeli",
    "Karwar"
  ],
  famousFood: [
    "Seafood",
    "Neer Dosa",
    "Fish Curry"
  ],
  travelTips: [
    "Ideal for adventure sports",
    "Carry sunscreen"
  ],
  bestTime: "October to March",
  population: "15 Lakhs",
  area: "10277 km²",
  latitude: 14.8183,
  longitude: 74.1410,
  rating: 4.9
},
{
  name: "Yadgir",
  state: "Karnataka",
  description:
    "Yadgir is known for Yadgir Fort, historical monuments and peaceful rural landscapes.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/7/74/Yadgir_Fort.jpg",
  famousFor: [
    "Yadgir Fort",
    "Saidapur",
    "Krishna River"
  ],
  famousFood: [
    "Jowar Roti",
    "Ennegayi",
    "Holige"
  ],
  travelTips: [
    "Visit during winter",
    "Carry water"
  ],
  bestTime: "October to February",
  population: "12 Lakhs",
  area: "5234 km²",
  latitude: 16.7700,
  longitude: 77.1376,
  rating: 4.5
},
{
  name: "Bengaluru Rural",
  state: "Karnataka",
  description:
    "Bengaluru Rural is famous for Nandi Hills, vineyards, lakes and peaceful countryside around Bengaluru.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/8/80/Nandi_Hills.jpg",
  famousFor: [
    "Nandi Hills",
    "Vineyards",
    "Nature Resorts"
  ],
  famousFood: [
    "Masala Dosa",
    "Ragi Mudde",
    "Filter Coffee"
  ],
  travelTips: [
    "Visit before sunrise",
    "Avoid weekends if possible"
  ],
  bestTime: "September to February",
  population: "10 Lakhs",
  area: "2298 km²",
  latitude: 13.2257,
  longitude: 77.5750,
  rating: 4.8
},
{
  name: "Vijayanagara",
  state: "Karnataka",
  description:
    "Vijayanagara district was formed recently and includes the UNESCO World Heritage Site of Hampi, one of India's greatest historical destinations.",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Hampi_Stone_Chariot.jpg",
  famousFor: [
    "Hampi",
    "Stone Chariot",
    "Virupaksha Temple"
  ],
  famousFood: [
    "Jolada Rotti",
    "Biryani",
    "Ragi Mudde"
  ],
  travelTips: [
    "Plan a full-day visit",
    "Wear comfortable footwear"
  ],
  bestTime: "October to February",
  population: "13 Lakhs",
  area: "5644 km²",
  latitude: 15.3350,
  longitude: 76.4600,
  rating: 4.9
},


];

export default districts;