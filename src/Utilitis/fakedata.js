const products = [
  {
    id: 101,
    name: 'Wellbeing Nutrition Melts into Instant Energy Oral Thin Strip',
    img: 'https://www.netmeds.com/images/product-v1/600x600/954868/wellbeing_nutrition_melts_into_instant_energy_oral_thin_strip_30s_0_0.jpg',
    price: '616.55',
    value: 5,
    review: 10,
    description:
      'Wellbeing Nutrition Instant Energy Melts all Natural and 100% Plant-based Japanese Green Tea Caffeine Energy booster with essential Electrolytes for Hydration, Vitamin E from sunflower oil and B-Complex vitamins (B5, B6 & B12) to deliver a precise dose of bioactive ingredients that help you stay energised throughout the day. With Patented German Nano Technology our quick dissolving and fast action instant energy Elite Caffeine strips provide the boost you need Pre-Workout or Post-workout, reduces post-travel fatigue, prevents cramps and keeps your mind alert. Clinically proven ingredients that serve as a safe and steady source of energy. Melts Energy Replenish Salts and Minerals, Reduce Fatigue, Enhance Endurance, Improve Mental Focus, Get Sustained Energy, Sports Performance and Rehydration Available in a tasty and refreshing Fresh Grapemint flavour,100% Organic and Vegan Energy, Zero Sugar, No Preservatives, No Gluten/Soy/Nuts, No Water Needed',
  },
  {
    id: 102,
    name: 'Pro360 Kids Nutritional Powder - Vanilla Flavour 250 gm',
    img: 'https://www.netmeds.com/images/product-v1/600x600/904196/pro360_kids_nutritional_powder_vanilla_flavour_250_gm_0_1.jpg',
    price: '355.50',
    value: 4.5,
    review: 100,
    description:
      'In an ideal world, kids who eat a balanced meal do not really need a protein supplement but if your child is a fussy eater and has a nutrient deficiency that hampers growth then it’s time to provide them with some protein supplements. With PRO360 Kids, your children get a healthy dose of triprotein (whey, milk & soy) Bovine Colostrum, DHA, Pre-Biotics, Pro-Biotics, Calcium and Vitamin D3. It helps in bone strength, increases appetite, improves memory, boosts immunity and helps to enhance overall physical development during the growth years. PRO360 Kids comes in three tasty flavors - banana, chocolate, and vanilla ',
  },
  {
    id: 103,
    name: 'INLIFE Heart Care Capsules 60s',
    img: 'https://www.netmeds.com/images/product-v1/600x600/858551/inlife_heart_care_capsules_60_s_0.jpg',
    price: '399.50',
    value: 5,
    review: 100,
    description:
      'INLIFE Heart care capsules supplement is a herbal formulation that combines the ancient botanical wisdom of Ayurveda with today’s contemporary science in a safe, powerful and effective way. It contains herbs with broad-ranging benefits like Arjuna, Moringa, Ashwagandha, Green Tea and Turmeric (Curcumin) which work together to holistically support heart function. It supports efficient heart muscle metabolism by helping improve its oxygen and energy utilization. It helps maintain normal cholesterol and lipid level supports healthy platelet formation and their function and takes care of overall heart function. ',
  },
  {
    id: 104,
    name: 'PediaCare Super Immuno Plus Gummies - Elderberry 25s',
    img: 'https://www.netmeds.com/images/product-v1/600x600/925399/pediacare_super_immuno_plus_gummies_elderberry_25s_0_4.jpg',
    price: '250.75',
    value: 5,
    review: 100,
    description:
      'When your children get bored and create a fuss about not eating the routine balanced diet including fruits, vegetables, milk products and pulses it is obvious that you will worry about fulfilling their daily nutritional requirements. You look for fun and interesting ways to boost your kids’ interest in healthy food. Take into consideration your children’s love for tasty and fun food formats and give them PediaCare Super Immuno Plus Elderberry Gummies. These PediaCare Gummies are super fun, very tasty and help ensure your children get their daily dose of immunity easily. This means that your children will consume their day-to-day requirement of immunity strengtheners with excitement and joy.  So, treat your kids with tasty PediaCare Gummies and help them develop a stronger immunity against cough, cold, fever, and other viral and bacterial infections at the same time.',
  },
  {
    id: 105,
    name: 'Pro360 Classic Nutritional Powder - Vanilla Flavour 200 gm',
    img: 'https://www.netmeds.com/images/product-v1/600x600/889048/pro360_nutritional_powder_vanilla_flavour_200_gm_0.jpg',
    price: '265.50',
    value: 5,
    review: 100,
    description:
      'PRO360 is a high protein wholesome nutritional supplement that provides amino acids and is fortified by vitamins and minerals to give your body all essential nutrients that it requires. Meeting all your protein needs and more, with PRO360 you will find a health supplement that will boost immunity, overcome fatigue and stress and help fortify your body with amino acids that will guard you against sickness and ill health. With PRO360 available in delicious flavors, you will be providing your family with a nutritious supplement that will improve and augment their health & well-being. ',
  },
  {
    id: 106,
    name: 'Pro360 Nephro LP Powder - Vanilla Flavour 400 gm',
    img: 'https://www.netmeds.com/images/product-v1/600x600/901522/pro360_nephro_lp_powder_vanilla_flavour_400_gm_0_0.jpg',
    price: '832.50',
    value: 5,
    review: 100,
    description:
      'PRO360 is a high protein wholesome nutritional supplement that provides amino acids and is fortified by vitamins and minerals to give your body all essential nutrients that it requires. Meeting all your protein needs and more, with PRO360 you will find a health supplement that will boost immunity, overcome fatigue and stress and help fortify your body with amino acids that will guard you against sickness and ill health. With PRO360 available in delicious flavors, you will be providing your family with a nutritious supplement that will improve and augment their health & well-being. ',
  },
  {
    id: 107,
    name: 'PediaCare Super Immuno Gummies - Amla & Vitamin C 10s',
    img: 'https://www.netmeds.com/images/product-v1/600x600/925400/pediacare_super_immuno_gummies_amla_vitamin_c_10s_0_4.jpg',
    price: '96.03',
    value: 4,
    review: 100,
    description:
      'Getting your kids to eat healthily is a challenging job. It is an uphill battle for you to make them eat vegetables, fruits, lentils and chapati leaving nutritional gaps that compromise your child’s immunity. But keeping them safe and healthy is on the top of your priority list. Now, put all your concerns away and get your child PediaCare Super Immuno Amla and Vitamin C Gummies. These immunity strengthening Gummies are made keeping in mind your kid’s joy of savouring the taste of delicious Gummies, making your job of giving kids required immunity nutrients so much easier. So, treat your child with tasty PediaCare Gummies and help them develop a stronger immune system against cough, cold, fever, and other viral and bacterial infections.',
  },
  {
    id: 108,
    name: 'Pro360 Women Nutritional Powder - Butterscotch Flavour 250 gm',
    img: 'https://www.netmeds.com/images/product-v1/600x600/889032/pro360_women_nutritional_powder_butterscotch_flavour_250_gm_0.jpg',
    price: '355.50',
    value: 5,
    review: 100,
    description:
      'Scientifically formulated with the combination of (Whey, Milk & Soy) to provide essential nutritional needs, PRO360 Women makes an ideal protein supplement for women. Specifically designed for women to foster their skeletal strength, to prevent hair fall, to balance hormones, to maintain effective blood levels and to prevent ageing, PRO360’s tasty supplement also curbs their sweet tooth or carbs craving. Fortified with evening primrose, biotin, iron, foliate, zinc, calcium, and boron, PRO360 Women Butterscotch flavor that will leave you satisfied for longer and reduce food cravings.',
  },
  {
    id: 109,
    name: "Dr.Vaidya's Ashwagandha Capsule (Pack of 2 x 30's)",
    img: 'https://www.netmeds.com/images/product-v1/600x600/919941/dr_vaidyas_ashwagandha_capsule_pack_of_2_x_30s_0_0.jpg',
    price: ' 216.00',
    value: 4,
    review: 100,
    description:
      'The contents of this website are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website. ',
  },
  {
    id: 110,
    name: 'Pro360 Hair Grow Nutritional Powder - Vanilla Flavour 250 g',
    img: 'https://www.netmeds.com/images/product-v1/600x600/889020/pro360_hair_grow_nutritional_powder_vanilla_flavour_250_gm_0.jpg',
    price: '472.50',
    value: 5,
    review: 100,
    description:
      'PRO360 Hair Grow is a specialized formula drink that is fortified with Biotin and Calcium D Pantothenate. It also promotes hair follicle growth and facilitates thicker hair growth while preventing breakage and damage to hair and scalp. Calcium D Pantothenate helps delay the onset of premature hair greying. It is also rich in green apple skin extracts, which are enriched with minerals like magnesium, potassium, copper, and calcium that prevents hair loss and aids in maintaining a healthy scalp. PRO360 Hair Grow is an ideal formula drink for those suffering from acute alopecia (which is caused by low levels of Vitamin D) and premature greying.',
  },
  {
    id: 111,
    name: 'Patanjali Honey 500 gm',
    img: 'https://www.netmeds.com/images/product-v1/600x600/406031/patanjali_honey_500_gm_0.jpg',
    price: '180.00',
    value: 5,
    review: 100,
    description:
      'Patanjali Pure honey is a sweet aliment produced by honey bees and derived from the nectar of flowers and Best pure honey available with our standard. Honey gets its sweetness from the monosaccharide fructose and glucose and has approximately the same relative sweetness as that of granulated sugar (97% of the sweetness of sucrose, a disaccharide). Patanjali Pure Natural Honey is rich in fructose, minerals, vitamins, and other nutritious elements. Honey is not only a natural sweetener but a multifunctional food that offers ample health benefits.',
  },
  {
    id: 112,
    name: 'D Protin Chocolate Powder 500 gm',
    img: 'https://www.netmeds.com/images/product-v1/600x600/357753/d_protin_chocolate_powder_500_gm_0.jpg',
    price: '473.96',
    value: 5,
    review: 100,
    description:
      'The contents of this website are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website',
  },
  {
    id: 113,
    name: 'Dabur Ashwagandharishta Syrup 450 ml',
    img: 'https://www.netmeds.com/images/product-v1/600x600/15898/dabur_ashwagandharishta_syrup_450_ml_0.jpg',
    price: '199.50',
    value: 5,
    review: 100,
    description:
      'The contents of this website are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website.',
  },
  {
    id: 114,
    name: 'Ensure Diabetes Care Powder - Chocolate Flavour 200 gm (Refill Pack)',
    img: 'https://www.netmeds.com/images/product-v1/600x600/804123/ensure_diabetes_care_powder_chocolate_flavour_200_gm_refill_pack_0_1.jpg',
    price: '368.60',
    value: 4,
    review: 100,
    description:
      'The contents of this website are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website.',
  },
  {
    id: 115,
    name: "Dr.Vaidya's Giloy Capsule (Pack of 2 x 30's)",
    img: 'https://www.netmeds.com/images/product-v1/600x600/919946/dr_vaidyas_giloy_capsule_pack_of_2_x_30s_1s_0_1.jpg',
    price: ' 216.00',
    value: 5,
    review: 100,
    description:
      'The contents of this website are for informational purposes only and not intended to be a substitute for professional medical advice, diagnosis, or treatment. Please seek the advice of a physician or other qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website.',
  },
];

export default products;
