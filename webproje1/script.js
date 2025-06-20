 // Sample data for recipes
        const recipes = [
            {
                id: 1,
                name: "Domates Soslu Makarna",
                image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/f33d5e96-f960-486f-94ac-cbabe3074ead/Derivates/0454bd7c-c1e3-4010-9a74-39aa130417ba.jpg",
                ingredients: ["makarna", "domates", "soğan", "sarımsak", "zeytinyağı", "tuz", "karabiber"],
                instructions: [
                    "Bir tencerede suyu kaynatın ve tuz ekleyin.",
                    "Makarnayı paketteki talimatlara göre pişirin.",
                    "Ayrı bir tavada zeytinyağını ısıtın ve doğranmış soğanı pembeleşene kadar kavurun.",
                    "Sarımsağı ekleyin ve 1 dakika daha kavurun.",
                    "Doğranmış domatesleri ekleyin ve 10-15 dakika pişirin.",
                    "Pişen makarnayı süzün ve domates sosunu üzerine dökün.",
                    "Tuz ve karabiber ile tatlandırın."
                ],
                time: "25 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "320 kcal",
                    "Karbonhidrat": "65g",
                    "Protein": "12g",
                    "Yağ": "3g",
                    "Lif": "4g"
                }
            },
            {
                id: 2,
                name: "Sebzeli Omlet",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdWgEWns3yH11oBVEOHrZI7DkQLj2xiR6uQ&s",
                ingredients: ["yumurta", "domates", "biber", "soğan", "peynir", "tuz", "karabiber", "zeytinyağı"],
                instructions: [
                    "Yumurtaları bir kasede çırpın, tuz ve karabiber ekleyin.",
                    "Domatesi, biberi ve soğanı küçük küpler halinde doğrayın.",
                    "Tavada zeytinyağını ısıtın ve doğranmış sebzeleri 3-4 dakika kavurun.",
                    "Çırpılmış yumurtaları sebzelerin üzerine dökün.",
                    "Üzerine rendelenmiş peynir serpin.",
                    "Kısık ateşte, üzeri kızarana kadar pişirin.",
                    "Dilerseniz bir tabağa ters çevirerek diğer tarafını da pişirebilirsiniz."
                ],
                time: "15 dk",
                servings: 2,
                nutrition: {
                    "Kalori": "220 kcal",
                    "Karbonhidrat": "5g",
                    "Protein": "15g",
                    "Yağ": "16g",
                    "Lif": "2g"
                }
            },
            {
                id: 3,
                name: "Mercimek Çorbası",
                image: "https://cdn.ye-mek.net/App_UI/Img/out/650/2024/02/esnaf-usulu-mercimek-corbasi-resimli-yemek-tarifi(11).jpg",
                ingredients: ["kırmızı mercimek", "soğan", "havuç", "patates", "zeytinyağı", "tuz", "karabiber", "kimyon", "limon"],
                instructions: [
                    "Mercimeği yıkayın ve süzün.",
                    "Soğanı, havucu ve patatesi küçük küpler halinde doğrayın.",
                    "Tencerede zeytinyağını ısıtın ve soğanı pembeleşene kadar kavurun.",
                    "Havuç ve patatesi ekleyin, 2-3 dakika daha kavurun.",
                    "Mercimeği ekleyin ve karıştırın.",
                    "Üzerine 6 su bardağı su ekleyin ve kaynamaya bırakın.",
                    "Kaynayınca kısık ateşte 30-35 dakika pişirin.",
                    "Çorbayı blenderdan geçirin.",
                    "Tuz, karabiber ve kimyon ile tatlandırın.",
                    "Servis yaparken üzerine limon sıkabilirsiniz."
                ],
                time: "45 dk",
                servings: 6,
                nutrition: {
                    "Kalori": "180 kcal",
                    "Karbonhidrat": "30g",
                    "Protein": "10g",
                    "Yağ": "3g",
                    "Lif": "8g"
                }
            },
            {
                id: 4,
                name: "Karnabahar Kızartması",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UShhB7yKBWGh0NBtOt-FitswcX6hVV5ZWg&s",
                ingredients: ["karnabahar", "un", "yumurta", "galeta unu", "tuz", "karabiber", "pul biber", "sıvı yağ"],
                instructions: [
                    "Karnabaharı çiçeklerine ayırın ve yıkayın.",
                    "Tuzlu suda 5 dakika haşlayın, süzün ve soğumaya bırakın.",
                    "Bir kapta un, tuz, karabiber ve pul biberi karıştırın.",
                    "Başka bir kapta yumurtayı çırpın.",
                    "Üçüncü bir kaba galeta ununu koyun.",
                    "Karnabahar çiçeklerini önce una, sonra yumurtaya, son olarak galeta ununa bulayın.",
                    "Kızgın yağda altın sarısı olana kadar kızartın.",
                    "Kağıt havlu üzerine alarak fazla yağını süzdürün."
                ],
                time: "30 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "210 kcal",
                    "Karbonhidrat": "25g",
                    "Protein": "8g",
                    "Yağ": "10g",
                    "Lif": "3g"
                }
            },
            {
                id: 5,
                name: "Patates Salatası",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4O8vFAy8UuaL6M2GMG-SGSHnLrc0FLiu-w&s",
                ingredients: ["patates", "mayonez", "yoğurt", "turşu", "dereotu", "tuz", "karabiber"],
                instructions: [
                    "Patatesleri yıkayın ve kabuklarıyla haşlayın.",
                    "Haşlanan patatesleri soğutun, kabuklarını soyun ve küp şeklinde doğrayın.",
                    "Turşuları küçük küpler halinde doğrayın.",
                    "Dereotunu ince ince kıyın.",
                    "Bir kapta mayonez ve yoğurdu karıştırın.",
                    "Patates, turşu ve dereotunu ekleyin.",
                    "Tuz ve karabiber ile tatlandırın ve karıştırın.",
                    "Servis etmeden önce buzdolabında en az 1 saat dinlendirin."
                ],
                time: "40 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "240 kcal",
                    "Karbonhidrat": "35g",
                    "Protein": "5g",
                    "Yağ": "10g",
                    "Lif": "3g"
                }
            },
            {
                id: 6,
                name: "Peynirli Mantar",
                image: "https://www.dokuzuncubulut.com/images/stories/partiyemekleri/firmantar.jpg",
                ingredients: ["kültür mantarı", "kaşar peyniri", "maydanoz", "sarımsak", "zeytinyağı", "tuz", "karabiber"],
                instructions: [
                    "Fırını 180°C'ye ısıtın.",
                    "Mantarları temizleyin ve saplarını çıkarın.",
                    "Sapları ince ince doğrayın.",
                    "Bir tavada zeytinyağını ısıtın ve doğranmış mantar saplarını kavurun.",
                    "Sarımsağı ezin ve mantarlara ekleyin, 1 dakika daha kavurun.",
                    "Maydanozu ince kıyın ve karışıma ekleyin.",
                    "Tuz ve karabiber ile tatlandırın.",
                    "Mantar şapkalarının içine hazırladığınız karışımı doldurun.",
                    "Üzerlerine rendelenmiş kaşar peyniri serpin.",
                    "Fırında 15-20 dakika, peynirler eriyip kızarana kadar pişirin."
                ],
                time: "35 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "150 kcal",
                    "Karbonhidrat": "5g",
                    "Protein": "8g",
                    "Yağ": "11g",
                    "Lif": "2g"
                }
            },
            {
                id: 7,
                name: "Çikolatalı Kek",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZGDRA7sebgdYoiVCWNWc73aIB1zGOqyQ9Q&s",
                ingredients: ["un", "şeker", "kakao", "yumurta", "süt", "kabartma tozu", "vanilin"],
                instructions: [
                    "Fırını 180°C'ye ısıtın.",
                    "Bir kapta un, şeker, kakao, kabartma tozu ve vanilini karıştırın.",
                    "Başka bir kapta yumurta ve sütü çırpın.",
                    "Kuru malzemeleri sıvı karışıma ekleyin ve iyice karıştırın.",
                    "Karışımı yağlanmış kek kalıbına dökün.",
                    "Fırında 30-35 dakika pişirin.",
                    "Soğuduktan sonra dilimleyerek servis yapın."
                ],
                time: "45 dk",
                servings: 8,
                nutrition: {
                    "Kalori": "250 kcal",
                    "Karbonhidrat": "35g",
                    "Protein": "5g",
                    "Yağ": "10g",
                    "Lif": "2g"
                }
            },
            {
                id: 8,
                name: "Menemen",
                image: "https://mutfaksirlari.com/wp-content/uploads/2020/09/soganli-kasarli-menemen-tarifi-640x445.jpg",
                ingredients: ["yumurta", "domates", "biber", "zeytinyağı", "tuz", "karabiber"],
                instructions: [
                    "Bir tavada zeytinyağını ısıtın.",
                    "Doğranmış biberleri ekleyin ve birkaç dakika kavurun.",
                    "Doğranmış domatesleri ekleyin ve suyunu çekene kadar pişirin.",
                    "Yumurtaları kırın ve karıştırarak pişirin.",
                    "Tuz ve karabiber ile tatlandırın.",
                    "Sıcak servis yapın."
                ],
                time: "15 dk",
                servings: 2,
                nutrition: {
                    "Kalori": "200 kcal",
                    "Karbonhidrat": "5g",
                    "Protein": "10g",
                    "Yağ": "15g",
                    "Lif": "2g"
                }
            },
            {
                id: 9,
                name: "Kısır",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTP8mecKMZ2bkOgzyWOGMZ-_u7orKqKGmLnw&s",
                ingredients: ["ince bulgur", "domates salçası", "maydanoz", "taze soğan", "limon", "zeytinyağı", "tuz", "karabiber"],
                instructions: [
                    "Bulguru bir kaba alın ve üzerine sıcak su dökerek şişmesini bekleyin.",
                    "Şişen bulgura salça, limon suyu ve zeytinyağı ekleyin.",
                    "Doğranmış maydanoz ve taze soğanı ekleyin.",
                    "Tuz ve karabiber ile tatlandırın.",
                    "Karıştırarak servis yapın."
                ],
                time: "20 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "180 kcal",
                    "Karbonhidrat": "30g",
                    "Protein": "4g",
                    "Yağ": "5g",
                    "Lif": "6g"
                }
            },
            {
                id: 10,
                name: "Pirinç Pilavı",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-kMROJxR8gxDyEAiBbotNfb8eVN7j9O94A&s",
                ingredients: ["pirinç", "tereyağı", "su", "tuz"],
                instructions: [
                    "Pirinci yıkayın ve süzün.",
                    "Tencereye tereyağını koyun ve eritin.",
                    "Pirinci ekleyip kavurun.",
                    "Üzerine su ve tuz ekleyerek kısık ateşte pişirin.",
                    "Demlenmeye bırakın ve servis yapın."
                ],
                time: "25 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "200 kcal",
                    "Karbonhidrat": "40g",
                    "Protein": "3g",
                    "Yağ": "5g",
                    "Lif": "1g"
                }
            },
            {
                id: 11,
                name: "Bulgur Pilavı",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcCL_N1BX_4URhTg0NdENVYbQglHWqRdd2Q&s",
                ingredients: ["bulgur", "domates", "soğan", "zeytinyağı", "tuz", "karabiber"],
                instructions: [
                    "Soğanı doğrayın ve zeytinyağında kavurun.",
                    "Doğranmış domatesleri ekleyin ve pişirin.",
                    "Bulguru ekleyip karıştırın.",
                    "Üzerine su ve tuz ekleyerek kısık ateşte pişirin.",
                    "Demlenmeye bırakın ve servis yapın."
                ],
                time: "30 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "220 kcal",
                    "Karbonhidrat": "40g",
                    "Protein": "5g",
                    "Yağ": "6g",
                    "Lif": "8g"
                }
            },
            {
                id: 12,
                name: "Adana Kebap",
                image: "https://tariftenevar.com/cdn/tarifler/adana-kebabi-tarifi.jpeg",
                ingredients: ["kıyma", "soğan", "pul biber", "tuz", "karabiber"],
                instructions: [
                    "Kıymayı bir kaba alın.",
                    "Rendelenmiş soğan, pul biber, tuz ve karabiber ekleyin.",
                    "Malzemeleri iyice yoğurun.",
                    "Şişlere geçirip mangalda pişirin.",
                    "Sıcak servis yapın."
                ],
                time: "40 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "300 kcal",
                    "Karbonhidrat": "2g",
                    "Protein": "25g",
                    "Yağ": "20g",
                    "Lif": "0g"
                }
            },
            {
                id: 13,
                name: "Urfa Kebap",
                image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/urfa_19_11zon.webp",
                ingredients: ["kıyma", "soğan", "tuz", "karabiber"],
                instructions: [
                    "Kıymayı bir kaba alın.",
                    "Rendelenmiş soğan, tuz ve karabiber ekleyin.",
                    "Malzemeleri iyice yoğurun.",
                    "Şişlere geçirip mangalda pişirin.",
                    "Sıcak servis yapın."
                ],
                time: "40 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "280 kcal",
                    "Karbonhidrat": "1g",
                    "Protein": "24g",
                    "Yağ": "18g",
                    "Lif": "0g"
                }
            },
            {
                id: 14,
                name: "Şekerpare",
                image: "https://cdn.ye-mek.net/App_UI/Img/out/650/2021/04/klasik-sekerpare-resimli-yemek-tarifi(16).jpg",
                ingredients: ["un", "irmik", "şeker", "yumurta", "tereyağı", "kabartma tozu", "vanilin"],
                instructions: [
                    "Bir kapta un, irmik, şeker, kabartma tozu ve vanilini karıştırın.",
                    "Yumurtayı ve eritilmiş tereyağını ekleyin.",
                    "Hamuru yoğurun ve ceviz büyüklüğünde parçalar koparıp yuvarlayın.",
                    "Yağlı kağıt serili tepsiye dizin ve üzerine badem yerleştirin.",
                    "Önceden ısıtılmış 180°C fırında 20-25 dakika pişirin.",
                    "Şerbet için su ve şekeri kaynatın, soğutun ve sıcak tatlının üzerine dökün.",
                    "Soğuduktan sonra servis yapın."
                ],
                time: "1 saat",
                servings: 6,
                nutrition: {
                    "Kalori": "350 kcal",
                    "Karbonhidrat": "50g",
                    "Protein": "6g",
                    "Yağ": "15g",
                    "Lif": "2g"
                }
            },
            {
                id: 15,
                name: "Baklava",
                image: "https://i.ytimg.com/vi/lCaZUjwljPw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDSenmAoZPqvkPh7Z9FqsRBlC3Sdw",
                ingredients: ["yufka", "ceviz", "şeker", "su", "tereyağı", "vanilin"],
                instructions: [
                    "Yufkaları açın ve cevizle karıştırılmış şeker serpin.",
                    "Kat kat dizin ve her kata eritilmiş tereyağı sürün.",
                    "Kesin ve üzerine şerbet dökün.",
                    "Önceden ısıtılmış fırında 180°C'de pişirin.",
                    "Soğuduktan sonra dilimleyerek servis yapın."
                ],
                time: "2 saat",
                servings: 8,
                nutrition: {
                    "Kalori": "400 kcal",
                    "Karbonhidrat": "60g",
                    "Protein": "8g",
                    "Yağ": "20g",
                    "Lif": "3g"
                }
            },

            {
                id: 16,
                name: "Spoonful Tatlısı",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6cDqtu4llKi1A4p2dG8zj6JpbDss0AEeAg&s",
                ingredients: ["süt", "şeker", "nişasta", "vanilin", "çikolata"],
                instructions: [
                    "Bir tencerede süt, şeker ve nişastayı karıştırarak pişirin.",
                    "Kıvam alınca vanilin ve çikolatayı ekleyin.",
                    "Karışımı kaselere dökün ve soğutun.",
                    "Üzerini dilediğiniz gibi süsleyerek servis yapın."
                ],
                time: "30 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "250 kcal",
                    "Karbonhidrat": "35g",
                    "Protein": "6g",
                    "Yağ": "8g",
                    "Lif": "1g"
                }
            },
            {
                id: 17,
                name: "Sütlaç",
                image: "https://www.datocms-assets.com/48770/1625946321-firin-sutlac-yapimi.jpg",
                ingredients: ["süt", "pirinç", "şeker", "nişasta", "vanilin"],
                instructions: [
                    "Pirinçleri yıkayın ve haşlayın.",
                    "Bir tencerede süt ve şekeri kaynatın.",
                    "Haşlanmış pirinçleri ekleyin ve karıştırarak pişirin.",
                    "Nişasta ve vanilini ekleyip karıştırın.",
                    "Kaselere dökün ve soğutun.",
                    "Üzerine tarçın serperek servis yapın."
                ],
                time: "45 dk",
                servings: 6,
                nutrition: {
                    "Kalori": "200 kcal",
                    "Karbonhidrat": "30g",
                    "Protein": "5g",
                    "Yağ": "4g",
                    "Lif": "1g"
                }
            },
            {
                id: 18,
                name: "Dondurma",
                image: "https://www.nurmelek.com/wp-content/uploads/2023/07/evde-dondurma-yapmanin-puf-noktalari.png",
                ingredients: ["süt", "şeker", "salep"],
                instructions: [
                    "Bir tencerede süt ve şekeri karıştırarak kaynatın.",
                    "Salepi ekleyin ve karıştırarak kıvam almasını sağlayın.",
                    "Karışımı dondurma kaplarına dökün ve dondurun.",
                    "Servis yapmadan önce birkaç dakika bekletin."
                ],
                time: "4 saat",
                servings: 6,
                nutrition: {
                    "Kalori": "180 kcal",
                    "Karbonhidrat": "25g",
                    "Protein": "4g",
                    "Yağ": "6g",
                    "Lif": "0g"
                }
            },
            {
                id: 19,
                name: "Mozaik Pasta",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNWTa-G5juXu8wSyE0AmMyon4hOWDNWWjTcg&s",
                ingredients: ["petibör bisküvi", "kakao", "şeker", "süt", "tereyağı"],
                instructions: [
                    "Bir kapta kakao, şeker, süt ve eritilmiş tereyağını karıştırın.",
                    "Bisküvileri küçük parçalara ayırın ve karışıma ekleyin.",
                    "Karışımı streç filme sararak şekil verin.",
                    "Buzdolabında 2-3 saat bekletin.",
                    "Dilimleyerek servis yapın."
                ],
                time: "3 saat",
                servings: 8,
                nutrition: {
                    "Kalori": "300 kcal",
                    "Karbonhidrat": "40g",
                    "Protein": "4g",
                    "Yağ": "12g",
                    "Lif": "2g"
                }
            },

            {
                id: 20,
                name: "Kuru Fasulye",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXP1LiNXYKHJbhITAo7R0PFTjtaPgz-gTx3w&s",
                ingredients: ["kuru fasulye", "soğan", "domates salçası", "zeytinyağı", "tuz", "karabiber"],
                instructions: [
                    "Kuru fasulyeyi bir gece önceden suda bekletin.",
                    "Tencerede zeytinyağını ısıtın ve doğranmış soğanı kavurun.",
                    "Salçayı ekleyin ve karıştırın.",
                    "Suyu süzülmüş fasulyeleri ekleyin ve karıştırın.",
                    "Üzerine sıcak su ekleyin ve kısık ateşte pişirin.",
                    "Tuz ve karabiber ile tatlandırarak servis yapın."
                ],
                time: "1.5 saat",
                servings: 4,
                nutrition: {
                    "Kalori": "250 kcal",
                    "Karbonhidrat": "40g",
                    "Protein": "12g",
                    "Yağ": "5g",
                    "Lif": "10g"
                }
            },
            {
                id: 21,
                name: "Peynirli Poğaça",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwq9tBuYIAZUq9Zi2YeA0We5E3uL9NwITjxw&s",
                ingredients: [
                    "un",
                    "yoğurt",
                    "sıvı yağ",
                    "yumurta",
                    "kabartma tozu",
                    "tuz",
                    "beyaz peynir",
                    "maydanoz"
                ],
                instructions: [
                    "Un, yoğurt, sıvı yağ, yumurta beyazı, kabartma tozu ve tuzu karıştırıp yumuşak bir hamur yoğurun.",
                    "Hamurdan parçalar koparıp içine peynirli harç koyun ve kapatın.",
                    "Tepsiye dizip üzerine yumurta sarısı sürün.",
                    "Önceden ısıtılmış 180°C fırında üzeri kızarana kadar pişirin."
                ],
                time: "35 dk",
                servings: 8,
                nutrition: {
                    "Kalori": "220 kcal",
                    "Karbonhidrat": "28g",
                    "Protein": "6g",
                    "Yağ": "10g",
                    "Lif": "1g"
                }
            },
            {
                id: 22,
                name: "Fırında Tavuk",
                image: "https://isbh.tmgrup.com.tr/sbh/2019/02/06/firinda-tavuk-1549443819406.jpg",
                ingredients: ["tavuk baget", "patates", "havuç", "zeytinyağı", "tuz", "karabiber", "kekik"],
                instructions: [
                    "Tavuk bagetleri yıkayın ve kurulayın.",
                    "Patates ve havuçları doğrayın.",
                    "Tüm malzemeleri bir kaba alın, zeytinyağı ve baharatlarla karıştırın.",
                    "Fırın tepsisine yerleştirin.",
                    "Önceden ısıtılmış 200°C fırında 40-45 dakika pişirin.",
                    "Sıcak servis yapın."
                ],
                time: "1 saat",
                servings: 4,
                nutrition: {
                    "Kalori": "300 kcal",
                    "Karbonhidrat": "20g",
                    "Protein": "25g",
                    "Yağ": "10g",
                    "Lif": "4g"
                }
            },
            {
                id: 23,
                name: "Köfte",
                image: "https://cdn.ye-mek.net/App_UI/Img/out/650/2022/12/ev-koftesi-resimli-yemek-tarifi(11).jpg",
                ingredients: ["kıyma", "soğan", "galeta unu", "yumurta", "tuz", "karabiber", "kimyon"],
                instructions: [
                    "Kıymayı bir kaba alın.",
                    "Rendelenmiş soğan, galeta unu, yumurta ve baharatları ekleyin.",
                    "Malzemeleri iyice yoğurun.",
                    "Küçük parçalar koparıp yuvarlayın ve şekil verin.",
                    "Tavada veya ızgarada pişirin.",
                    "Sıcak servis yapın."
                ],
                time: "30 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "250 kcal",
                    "Karbonhidrat": "10g",
                    "Protein": "20g",
                    "Yağ": "15g",
                    "Lif": "1g"
                }
            },
            {
                id: 24,
                name: "Karnıyarık",
                image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/frnda-karnyark-313.webp",
                ingredients: ["patlıcan", "kıyma", "soğan", "domates", "biber", "zeytinyağı", "tuz", "karabiber"],
                instructions: [
                    "Patlıcanları alacalı soyun ve kızartın.",
                    "Tavada zeytinyağını ısıtın, doğranmış soğanı kavurun.",
                    "Kıymayı ekleyin ve pişirin.",
                    "Doğranmış domates ve biberleri ekleyin, baharatlarla tatlandırın.",
                    "Kızarmış patlıcanların içine harcı doldurun.",
                    "Fırın tepsisine dizin, üzerine domates dilimleri yerleştirin.",
                    "200°C fırında 20-25 dakika pişirin."
                ],
                time: "1 saat",
                servings: 4,
                nutrition: {
                    "Kalori": "350 kcal",
                    "Karbonhidrat": "15g",
                    "Protein": "20g",
                    "Yağ": "25g",
                    "Lif": "5g"
                }
            },
            {
                id: 25,
                name: "Rus Salatası",
                image: "https://i.lezzet.com.tr/images-xxlarge-recipe/rus-salatasi-8024cb37-9299-4027-84e0-c216785ee68a.jpg",
                ingredients: ["patates", "havuç", "bezelye", "mayonez", "yoğurt", "tuz"],
                instructions: [
                    "Patates ve havuçları küp küp doğrayın ve haşlayın.",
                    "Bezelyeyi haşlayın.",
                    "Bir kapta mayonez ve yoğurdu karıştırın.",
                    "Haşlanmış sebzeleri ekleyin ve karıştırın.",
                    "Tuz ile tatlandırın ve soğuk servis yapın."
                ],
                time: "30 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "200 kcal",
                    "Karbonhidrat": "25g",
                    "Protein": "4g",
                    "Yağ": "10g",
                    "Lif": "3g"
                }
            },

            {
                id: 26,
                name: "Waffle",
                image: "https://cdn.dsmcdn.com/mrktng/seo/23mart1/waffle-nedir-2.jpg",
                ingredients: ["un", "yumurta", "süt", "şeker", "kabartma tozu", "vanilin", "çikolata", "meyve"],
                instructions: [
                    "Bir kapta un, şeker, kabartma tozu ve vanilini karıştırın.",
                    "Başka bir kapta yumurta ve sütü çırpın.",
                    "Kuru malzemeleri sıvı karışıma ekleyin ve iyice karıştırın.",
                    "Waffle makinesinde pişirin.",
                    "Üzerine çikolata ve meyve ekleyerek servis yapın."
                ],
                time: "30 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "350 kcal",
                    "Karbonhidrat": "50g",
                    "Protein": "8g",
                    "Yağ": "10g",
                    "Lif": "2g"
                }
            },
            {
                id: 27,
                name: "Ton Balıklı Salata",
                image: "https://iasbh.tmgrup.com.tr/0e6260/650/344/0/66/736/453?u=http://i.sabah.com.tr/sbh/2017/04/03/ton-balikli-salata-nasil-yapilir-1491219305947.jpg",
                ingredients: ["ton balığı", "marul", "domates", "salatalık", "zeytinyağı", "limon", "tuz"],
                instructions: [
                    "Marulu doğrayın ve bir kaseye alın.",
                    "Domates ve salatalığı doğrayarak ekleyin.",
                    "Ton balığını ekleyin.",
                    "Zeytinyağı, limon ve tuz ile tatlandırarak karıştırın.",
                    "Servis yapın."
                ],
                time: "15 dk",
                servings: 2,
                nutrition: {
                    "Kalori": "200 kcal",
                    "Karbonhidrat": "5g",
                    "Protein": "20g",
                    "Yağ": "10g",
                    "Lif": "3g"
                }
            },
            {
                id: 28,
                name: "Akdeniz Salata",
                image: "https://i.lezzet.com.tr/images-xxlarge-recipe/beyaz_peynirli_akdeniz_salatasi-db808a1a-1457-48cb-b20f-95cda53d73b8.jpg",
                ingredients: ["marul", "domates", "salatalık", "zeytin", "peynir", "zeytinyağı", "limon", "tuz"],
                instructions: [
                    "Marulu doğrayın ve bir kaseye alın.",
                    "Domates, salatalık ve zeytinleri ekleyin.",
                    "Peyniri küçük küpler halinde doğrayarak ekleyin.",
                    "Zeytinyağı, limon ve tuz ile tatlandırarak karıştırın.",
                    "Servis yapın."
                ],
                time: "15 dk",
                servings: 2,
                nutrition: {
                    "Kalori": "180 kcal",
                    "Karbonhidrat": "5g",
                    "Protein": "8g",
                    "Yağ": "15g",
                    "Lif": "2g"
                }
            },
            {
                id: 29,
                name: "Pizza",
                image: "https://recipesblob.droetker.com.tr/assets/ca3dfdd970904554abc757c603e207d0/1272x764/hizli_mayali_pizzajpg.webp",
                ingredients: ["pizza hamuru", "domates sosu", "peynir", "sucuk", "zeytin", "mantar"],
                instructions: [
                    "Pizza hamurunu tepsiye yayın.",
                    "Üzerine domates sosunu sürün.",
                    "Peynir, sucuk, zeytin ve mantarları ekleyin.",
                    "Önceden ısıtılmış 200°C fırında 15-20 dakika pişirin.",
                    "Sıcak servis yapın."
                ],
                time: "30 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "400 kcal",
                    "Karbonhidrat": "50g",
                    "Protein": "15g",
                    "Yağ": "15g",
                    "Lif": "3g"
                }
            },
            {
                id: 30,
                name: "Meyve Salatası",
                image: "https://yeniyemektarifleri.com/img/YYT-Likorlu-Meyve-Salatasi-Hero-480x270.webp",
                ingredients: ["muz", "elma", "portakal", "çilek", "üzüm", "bal"],
                instructions: [
                    "Tüm meyveleri yıkayın ve doğrayın.",
                    "Bir kaseye alın ve üzerine bal gezdirin.",
                    "Karıştırarak servis yapın."
                ],
                time: "10 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "150 kcal",
                    "Karbonhidrat": "35g",
                    "Protein": "2g",
                    "Yağ": "1g",
                    "Lif": "4g"
                }
            },

            {
                id: 31,
                name: "Sarma",
                image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/zeytinyagli_sarma.webp",
                ingredients: ["asma yaprağı", "pirinç", "soğan", "domates salçası", "zeytinyağı", "tuz", "karabiber", "nane"],
                instructions: [
                    "Asma yapraklarını sıcak suda birkaç dakika bekletin ve süzün.",
                    "Bir kapta pirinç, doğranmış soğan, salça, zeytinyağı ve baharatları karıştırın.",
                    "Yaprakların içine hazırladığınız harcı koyup sarın.",
                    "Tencereye dizin ve üzerine su ekleyerek kısık ateşte pişirin.",
                    "Sıcak veya soğuk servis yapın."
                ],
                time: "1.5 saat",
                servings: 6,
                nutrition: {
                    "Kalori": "200 kcal",
                    "Karbonhidrat": "30g",
                    "Protein": "4g",
                    "Yağ": "8g",
                    "Lif": "3g"
                }
            },
            {
                id: 32,
                name: "Et Kavurma",
                image: "https://cdn.ye-mek.net/App_UI/Img/out/650/2022/07/kavurma-resimli-yemek-tarifi(11).jpg",
                ingredients: ["kuzu eti", "soğan", "tereyağı", "tuz", "karabiber"],
                instructions: [
                    "Eti küçük parçalar halinde doğrayın.",
                    "Tavada tereyağını eritin ve eti ekleyin.",
                    "Kısık ateşte suyunu salıp çekene kadar pişirin.",
                    "Doğranmış soğanı ekleyin ve kavurun.",
                    "Tuz ve karabiber ile tatlandırarak servis yapın."
                ],
                time: "45 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "300 kcal",
                    "Karbonhidrat": "2g",
                    "Protein": "25g",
                    "Yağ": "20g",
                    "Lif": "0g"
                }
            },
            {
                id: 33,
                name: "Tavuk Sote",
                image: "https://i.ytimg.com/vi/rQBO2gkOeuc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDr4qeCaIQvN0CL3cBsKYXnCNrIDA",
                ingredients: ["tavuk göğsü", "soğan", "biber", "domates", "zeytinyağı", "tuz", "karabiber", "pul biber"],
                instructions: [
                    "Tavuk göğsünü küçük parçalar halinde doğrayın.",
                    "Tavada zeytinyağını ısıtın ve tavukları ekleyin.",
                    "Doğranmış soğan ve biberleri ekleyip kavurun.",
                    "Doğranmış domatesleri ekleyin ve pişirin.",
                    "Baharatlarla tatlandırarak sıcak servis yapın."
                ],
                time: "30 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "250 kcal",
                    "Karbonhidrat": "5g",
                    "Protein": "30g",
                    "Yağ": "10g",
                    "Lif": "2g"
                }
            },
            {
                id: 34,
                name: "Somon",
                image: "https://www.acibadem.com.tr/hayat/Images/YayinMakaleler/somon-baligi-faydalari-nelerdir_191925_1.jpg",
                ingredients: ["somon fileto", "zeytinyağı", "limon", "tuz", "karabiber", "dereotu"],
                instructions: [
                    "Somon filetolarını zeytinyağı, limon suyu, tuz ve karabiberle marine edin.",
                    "Fırın tepsisine yerleştirin ve 200°C'de 20 dakika pişirin.",
                    "Üzerine dereotu serperek servis yapın."
                ],
                time: "30 dk",
                servings: 2,
                nutrition: {
                    "Kalori": "300 kcal",
                    "Karbonhidrat": "0g",
                    "Protein": "25g",
                    "Yağ": "20g",
                    "Lif": "0g"
                }
            },
            {
                id: 35,
                name: "Hamsi Tava",
                image: "https://images.deliveryhero.io/image/fd-tr/LH/rs0f-listing.jpg",
                ingredients: ["hamsi", "mısır unu", "tuz", "sıvı yağ"],
                instructions: [
                    "Hamsileri temizleyin ve yıkayın.",
                    "Mısır unu ve tuzu karıştırın, hamsileri bu karışıma bulayın.",
                    "Tavada sıvı yağı ısıtın ve hamsileri kızartın.",
                    "Kağıt havlu üzerine alarak fazla yağını süzdürün.",
                    "Sıcak servis yapın."
                ],
                time: "20 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "200 kcal",
                    "Karbonhidrat": "10g",
                    "Protein": "20g",
                    "Yağ": "10g",
                    "Lif": "0g"
                }
            },

            {
                id: 36,
                name: "Biber Dolması",
                image: "https://cdn.ye-mek.net/App_UI/Img/out/650/2020/05/biber-dolmasi-resimli-yemek-tarifi(11).jpg",
                ingredients: ["dolmalık biber", "pirinç", "soğan", "domates", "zeytinyağı", "tuz", "karabiber", "nane"],
                instructions: [
                    "Dolmalık biberlerin içini temizleyin.",
                    "Bir kapta pirinç, doğranmış soğan, domates, zeytinyağı ve baharatları karıştırın.",
                    "Hazırladığınız harcı biberlerin içine doldurun.",
                    "Tencereye dizin ve üzerine su ekleyerek kısık ateşte pişirin.",
                    "Sıcak veya soğuk servis yapın."
                ],
                time: "1 saat",
                servings: 4,
                nutrition: {
                    "Kalori": "250 kcal",
                    "Karbonhidrat": "35g",
                    "Protein": "5g",
                    "Yağ": "10g",
                    "Lif": "4g"
                }
            },
            {
                id: 37,
                name: "Kelle Paça",
                image: "https://static.wixstatic.com/media/403236_b4ad5b39139f49babd5a8c366ce9a355~mv2.png/v1/fill/w_568,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/403236_b4ad5b39139f49babd5a8c366ce9a355~mv2.png",
                ingredients: ["kelle", "paça", "sarımsak", "sirke", "tuz", "karabiber", "pul biber"],
                instructions: [
                    "Kelle ve paçayı iyice temizleyin ve haşlayın.",
                    "Haşlama suyunu süzün ve bir tencereye alın.",
                    "Sarımsakları ezin ve sirke ile karıştırarak çorbaya ekleyin.",
                    "Tuz, karabiber ve pul biber ile tatlandırın.",
                    "Sıcak servis yapın."
                ],
                time: "2 saat",
                servings: 6,
                nutrition: {
                    "Kalori": "300 kcal",
                    "Karbonhidrat": "0g",
                    "Protein": "25g",
                    "Yağ": "20g",
                    "Lif": "0g"
                }
            },
            {
                id: 38,
                name: "Havuç Tarator",
                image: "https://www.unileverfoodsolutions.com.tr/dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/2023/may/havuc-tarator/Havuc_Tarator-1260x839.jpg",
                ingredients: ["havuç", "yoğurt", "sarımsak", "zeytinyağı", "tuz"],
                instructions: [
                    "Havuçları rendeleyin.",
                    "Tavada zeytinyağını ısıtın ve havuçları kavurun.",
                    "Sarımsakları ezin ve yoğurtla karıştırın.",
                    "Kavrulmuş havuçları yoğurt karışımına ekleyin ve karıştırın.",
                    "Soğuk servis yapın."
                ],
                time: "20 dk",
                servings: 4,
                nutrition: {
                    "Kalori": "150 kcal",
                    "Karbonhidrat": "10g",
                    "Protein": "4g",
                    "Yağ": "10g",
                    "Lif": "2g"
                }
            },
            {
                id: 39, // Benzersiz bir ID
                name: "Paella",
                image: "https://res.cloudinary.com/tienda-com/image/upload/f_auto/q_auto/c_fill,w_752/dpr_2.0/v1/recipes/mixed-seafood-paella",
                ingredients: [
                    "pirinç",
                    "zeytinyağı",
                    "tavuk",
                    "karides",
                    "midye",
                    "domates",
                    "soğan",
                    "sarımsak",
                    "biber",
                    "bezelye",
                    "tavuk suyu",
                    "safran",
                    "tuz",
                    "karabiber"
                ],
                instructions: [
                    "Geniş bir tavada zeytinyağını ısıtın.",
                    "Tavukları ekleyip altın sarısı olana kadar kızartın, ardından kenara alın.",
                    "Aynı tavada doğranmış soğan, sarımsak ve biberleri kavurun.",
                    "Doğranmış domatesleri ekleyin ve birkaç dakika pişirin.",
                    "Pirinci ekleyip karıştırarak kavurun.",
                    "Tavuk suyunu, safranı, tuz ve karabiberi ekleyin.",
                    "Tavuk, karides, midye ve bezelyeyi ekleyin.",
                    "Kısık ateşte pirinç suyunu çekene kadar pişirin.",
                    "5 dakika dinlendirdikten sonra sıcak servis yapın."
                ],
                time: "1 saat",
                servings: 6,
                nutrition: {
                    "Kalori": "400 kcal",
                    "Karbonhidrat": "50g",
                    "Protein": "25g",
                    "Yağ": "10g",
                    "Lif": "3g"
                }
            }
        ];

        // DOM Elements
        const ingredientInput = document.getElementById('ingredientInput');
        const addIngredientBtn = document.getElementById('addIngredientBtn');
        const ingredientTags = document.getElementById('ingredientTags');
        const findRecipesBtn = document.getElementById('findRecipesBtn');
        const recipeResults = document.getElementById('recipeResults');
        const homeLink = document.getElementById('homeLink');
        const favoritesLink = document.getElementById('favoritesLink');
        const shoppingListLink = document.getElementById('shoppingListLink');
        const homePage = document.getElementById('homePage');
        const favoritesPage = document.getElementById('favoritesPage');
        const shoppingListPage = document.getElementById('shoppingListPage');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const authButtons = document.getElementById('authButtons');
        const userInfo = document.getElementById('userInfo');
        const usernameDisplay = document.getElementById('username');
        const logoutBtn = document.getElementById('logoutBtn');
        const favoriteRecipes = document.getElementById('favoriteRecipes');
        const noFavoritesMessage = document.getElementById('noFavoritesMessage');
        const browseRecipesBtn = document.getElementById('browseRecipesBtn');
        const shoppingItemInput = document.getElementById('shoppingItemInput');
        const addShoppingItemBtn = document.getElementById('addShoppingItemBtn');
        const shoppingList = document.getElementById('shoppingList');
        const emptyShoppingListMessage = document.getElementById('emptyShoppingListMessage');
        const clearShoppingListBtn = document.getElementById('clearShoppingListBtn');
        const printShoppingListBtn = document.getElementById('printShoppingListBtn');

        // State
        let currentIngredients = [];
        let currentUser = null;
        let favorites = [];
        let shoppingItems = [];

        // Event Listeners
        document.addEventListener('DOMContentLoaded', () => {
            // Check if user is logged in from localStorage
            const savedUser = localStorage.getItem('currentUser');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                updateAuthUI();
                loadUserData();
            }

            // Display initial recipes
            displayRecipes(recipes);
            updateShoppingListUI();
        });

        // Add ingredient
        addIngredientBtn.addEventListener('click', () => {
            addIngredient();
        });

        ingredientInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addIngredient();
            }
        });

        // Find recipes
        findRecipesBtn.addEventListener('click', () => {
            findRecipes();
        });

        // Navigation
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(homePage);
            homeLink.classList.add('active');
            favoritesLink.classList.remove('active');
            shoppingListLink.classList.remove('active');
        });

        favoritesLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (!currentUser) {
                showLoginModal();
                return;
            }
            showPage(favoritesPage);
            homeLink.classList.remove('active');
            favoritesLink.classList.add('active');
            shoppingListLink.classList.remove('active');
            updateFavoritesUI();
        });

        shoppingListLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (!currentUser) {
                showLoginModal();
                return;
            }
            showPage(shoppingListPage);
            homeLink.classList.remove('active');
            favoritesLink.classList.remove('active');
            shoppingListLink.classList.add('active');
            updateShoppingListUI();
        });

        browseRecipesBtn.addEventListener('click', () => {
            showPage(homePage);
            homeLink.classList.add('active');
            favoritesLink.classList.remove('active');
            shoppingListLink.classList.remove('active');
        });

        // Authentication
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Demo login (in a real app, this would validate against a server)
            currentUser = {
                name: email.split('@')[0],
                email: email
            };

            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateAuthUI();
            loadUserData();

            // Close modal
            const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            loginModal.hide();

            // Show success message
            alert('Başarıyla giriş yaptınız!');
        });

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const passwordConfirm = document.getElementById('signupPasswordConfirm').value;

            if (password !== passwordConfirm) {
                alert('Şifreler eşleşmiyor!');
                return;
            }

            // Demo signup (in a real app, this would send data to a server)
            currentUser = {
                name: name,
                email: email
            };

            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateAuthUI();

            // Close modal
            const signupModal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
            signupModal.hide();

            // Show success message
            alert('Hesabınız başarıyla oluşturuldu!');
        });

        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentUser = null;
            favorites = [];
            localStorage.removeItem('currentUser');
            localStorage.removeItem('favorites');
            localStorage.removeItem('shoppingList');
            updateAuthUI();

            // If on a page that requires login, go back to home
            if (!homePage.classList.contains('d-none')) {
                showPage(homePage);
                homeLink.classList.add('active');
                favoritesLink.classList.remove('active');
                shoppingListLink.classList.remove('active');
            }
        });

        // Shopping List
        addShoppingItemBtn.addEventListener('click', () => {
            addShoppingItem();
        });

        shoppingItemInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addShoppingItem();
            }
        });

        clearShoppingListBtn.addEventListener('click', () => {
            if (confirm('Alışveriş listenizi temizlemek istediğinize emin misiniz?')) {
                shoppingItems = [];
                saveShoppingList();
                updateShoppingListUI();
            }
        });

        printShoppingListBtn.addEventListener('click', () => {
            printShoppingList();
        });

        // Functions
        function addIngredient() {
            const ingredient = ingredientInput.value.trim().toLowerCase();
            if (ingredient && !currentIngredients.includes(ingredient)) {
                currentIngredients.push(ingredient);
                updateIngredientTags();
                ingredientInput.value = '';
            }
            ingredientInput.focus();
        }

        function updateIngredientTags() {
            ingredientTags.innerHTML = '';
            currentIngredients.forEach(ingredient => {
                const tag = document.createElement('span');
                tag.className = 'ingredient-tag';
                tag.innerHTML = `${ingredient} <span class="remove-tag" data-ingredient="${ingredient}">&times;</span>`;
                ingredientTags.appendChild(tag);
            });

            // Add event listeners to remove tags
            document.querySelectorAll('.remove-tag').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const ingredient = e.target.getAttribute('data-ingredient');
                    currentIngredients = currentIngredients.filter(item => item !== ingredient);
                    updateIngredientTags();
                });
            });
        }

        function findRecipes() {
            if (currentIngredients.length === 0) {
                // If no ingredients selected, show all recipes
                displayRecipes(recipes);
                return;
            }

            // Filter recipes based on ingredients
            const filteredRecipes = recipes.filter(recipe => {
                // Count how many of the user's ingredients are in the recipe
                const matchCount = currentIngredients.filter(ingredient =>
                    recipe.ingredients.includes(ingredient)
                ).length;

                // Return true if at least one ingredient matches
                return matchCount > 0;
            });

            // Sort by number of matching ingredients (descending)
            filteredRecipes.sort((a, b) => {
                const aMatches = currentIngredients.filter(ingredient =>
                    a.ingredients.includes(ingredient)
                ).length;

                const bMatches = currentIngredients.filter(ingredient =>
                    b.ingredients.includes(ingredient)
                ).length;

                return bMatches - aMatches;
            });

            displayRecipes(filteredRecipes);
        }

        function displayRecipes(recipesToShow) {
            recipeResults.innerHTML = '';

            if (recipesToShow.length === 0) {
                recipeResults.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
                        <h4 class="mt-3">Tarif bulunamadı</h4>
                        <p class="text-muted">Farklı malzemeler deneyebilir veya tüm tarifleri görmek için malzeme listesini temizleyebilirsiniz.</p>
                        <button class="btn btn-outline-primary mt-2" id="clearIngredientsBtn">Malzemeleri Temizle</button>
                    </div>
                `;

                document.getElementById('clearIngredientsBtn').addEventListener('click', () => {
                    currentIngredients = [];
                    updateIngredientTags();
                    displayRecipes(recipes);
                });

                return;
            }

            recipesToShow.forEach(recipe => {
                // Calculate matching ingredients
                const matchingIngredients = currentIngredients.filter(ingredient =>
                    recipe.ingredients.includes(ingredient)
                );

                const matchCount = matchingIngredients.length;
                const totalIngredients = recipe.ingredients.length;
                const matchPercentage = Math.round((matchCount / totalIngredients) * 100);

                // Create recipe card
                const recipeCard = document.createElement('div');
                recipeCard.className = 'col';
                recipeCard.innerHTML = `
                    <div class="card recipe-card h-100">
                        <img src="${recipe.image}" class="card-img-top recipe-img" alt="${recipe.name}">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start">
                                <h5 class="card-title">${recipe.name}</h5>
                                <i class="bi bi-heart favorite-btn ${isFavorite(recipe.id) ? 'active' : ''}" data-recipe-id="${recipe.id}"></i>
                            </div>
                            <p class="card-text">
                                <small class="text-muted">
                                    <i class="bi bi-clock me-1"></i>${recipe.time} | 
                                    <i class="bi bi-people me-1"></i>${recipe.servings} kişilik
                                </small>
                            </p>
                            ${currentIngredients.length > 0 ? `
                                <div class="progress mb-2" style="height: 10px;">
                                    <div class="progress-bar ${matchPercentage > 75 ? 'bg-success' : matchPercentage > 50 ? 'bg-info' : matchPercentage > 25 ? 'bg-warning' : 'bg-danger'}" 
                                        role="progressbar" style="width: ${matchPercentage}%;" 
                                        aria-valuenow="${matchPercentage}" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                                <p class="card-text"><small class="text-muted">${matchCount}/${totalIngredients} malzeme eşleşti</small></p>
                            ` : ''}
                        </div>
                        <div class="card-footer bg-transparent">
                            <button class="btn btn-primary w-100 view-recipe-btn" data-recipe-id="${recipe.id}">Tarifi Görüntüle</button>
                        </div>
                    </div>
                `;

                recipeResults.appendChild(recipeCard);
            });

            // Add event listeners to view recipe buttons
            document.querySelectorAll('.view-recipe-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const recipeId = parseInt(btn.getAttribute('data-recipe-id'));
                    const recipe = recipes.find(r => r.id === recipeId);
                    showRecipeDetail(recipe);
                });
            });

            // Add event listeners to favorite buttons
            document.querySelectorAll('.favorite-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (!currentUser) {
                        showLoginModal();
                        return;
                    }

                    const recipeId = parseInt(btn.getAttribute('data-recipe-id'));
                    toggleFavorite(recipeId);
                    btn.classList.toggle('active');
                });
            });
        }

        function showRecipeDetail(recipe) {
            const modal = new bootstrap.Modal(document.getElementById('recipeDetailModal'));

            // Set recipe details
            document.getElementById('recipeDetailTitle').textContent = recipe.name;
            document.getElementById('recipeDetailImage').src = recipe.image;
            document.getElementById('recipeDetailTime').textContent = recipe.time;
            document.getElementById('recipeDetailServings').textContent = recipe.servings;

            // Update favorite button
            const favoriteBtn = document.getElementById('recipeDetailFavoriteBtn');
            if (isFavorite(recipe.id)) {
                favoriteBtn.innerHTML = '<i class="bi bi-heart-fill"></i> Favorilerden Çıkar';
                favoriteBtn.classList.add('btn-warning');
                favoriteBtn.classList.remove('btn-outline-warning');
            } else {
                favoriteBtn.innerHTML = '<i class="bi bi-heart"></i> Favorilere Ekle';
                favoriteBtn.classList.add('btn-outline-warning');
                favoriteBtn.classList.remove('btn-warning');
            }

            favoriteBtn.onclick = () => {
                if (!currentUser) {
                    modal.hide();
                    showLoginModal();
                    return;
                }

                toggleFavorite(recipe.id);
                if (isFavorite(recipe.id)) {
                    favoriteBtn.innerHTML = '<i class="bi bi-heart-fill"></i> Favorilerden Çıkar';
                    favoriteBtn.classList.add('btn-warning');
                    favoriteBtn.classList.remove('btn-outline-warning');
                } else {
                    favoriteBtn.innerHTML = '<i class="bi bi-heart"></i> Favorilere Ekle';
                    favoriteBtn.classList.add('btn-outline-warning');
                    favoriteBtn.classList.remove('btn-warning');
                }

                // Update favorite icons in recipe cards
                document.querySelectorAll(`.favorite-btn[data-recipe-id="${recipe.id}"]`).forEach(btn => {
                    btn.classList.toggle('active', isFavorite(recipe.id));
                });
            };

            // Ingredients
            const ingredientsList = document.getElementById('recipeDetailIngredients');
            ingredientsList.innerHTML = '';
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.innerHTML = `
                    ${ingredient}
                    <div class="form-check">
                        <input class="form-check-input ingredient-checkbox" type="checkbox" value="${ingredient}" id="check-${ingredient}">
                    </div>
                `;
                ingredientsList.appendChild(li);
            });

            // Instructions
            const instructionsList = document.getElementById('recipeDetailInstructions');
            instructionsList.innerHTML = '';
            recipe.instructions.forEach((instruction, index) => {
                const li = document.createElement('li');
                li.className = 'mb-2';
                li.textContent = instruction;
                instructionsList.appendChild(li);
            });

            // Nutrition
            const nutritionTable = document.getElementById('recipeDetailNutrition');
            nutritionTable.innerHTML = '';
            for (const [key, value] of Object.entries(recipe.nutrition)) {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <th scope="row">${key}</th>
                    <td>${value}</td>
                `;
                nutritionTable.appendChild(tr);
            }

            // Add to shopping list button
            const addToShoppingListBtn = document.getElementById('addToShoppingListBtn');
            addToShoppingListBtn.onclick = () => {
                if (!currentUser) {
                    modal.hide();
                    showLoginModal();
                    return;
                }

                // Get checked ingredients
                const checkedIngredients = Array.from(document.querySelectorAll('.ingredient-checkbox:checked'))
                    .map(checkbox => checkbox.value);

                if (checkedIngredients.length === 0) {
                    alert('Lütfen alışveriş listesine eklemek için en az bir malzeme seçin.');
                    return;
                }

                // Add to shopping list
                checkedIngredients.forEach(ingredient => {
                    if (!shoppingItems.includes(ingredient)) {
                        shoppingItems.push(ingredient);
                    }
                });

                saveShoppingList();
                alert('Seçilen malzemeler alışveriş listenize eklendi!');

                // Uncheck all checkboxes
                document.querySelectorAll('.ingredient-checkbox').forEach(checkbox => {
                    checkbox.checked = false;
                });
            };

            modal.show();
        }

        function showPage(page) {
            homePage.classList.add('d-none');
            favoritesPage.classList.add('d-none');
            shoppingListPage.classList.add('d-none');

            page.classList.remove('d-none');
        }

        function showLoginModal() {
            const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            loginModal.show();
        }

        function updateAuthUI() {
            if (currentUser) {
                authButtons.classList.add('d-none');
                userInfo.classList.remove('d-none');
                usernameDisplay.textContent = currentUser.name;
            } else {
                authButtons.classList.remove('d-none');
                userInfo.classList.add('d-none');
            }
        }

        function toggleFavorite(recipeId) {
            const index = favorites.indexOf(recipeId);
            if (index === -1) {
                favorites.push(recipeId);
            } else {
                favorites.splice(index, 1);
            }
            saveFavorites();
        }

        function isFavorite(recipeId) {
            return favorites.includes(recipeId);
        }

        function saveFavorites() {
            if (currentUser) {
                localStorage.setItem('favorites', JSON.stringify(favorites));
            }
        }

        function saveShoppingList() {
            if (currentUser) {
                localStorage.setItem('shoppingList', JSON.stringify(shoppingItems));
            }
        }

        function loadUserData() {
            // Load favorites
            const savedFavorites = localStorage.getItem('favorites');
            if (savedFavorites) {
                favorites = JSON.parse(savedFavorites);
            }

            // Load shopping list
            const savedShoppingList = localStorage.getItem('shoppingList');
            if (savedShoppingList) {
                shoppingItems = JSON.parse(savedShoppingList);
            }
        }

        function updateFavoritesUI() {
            favoriteRecipes.innerHTML = '';

            if (favorites.length === 0) {
                noFavoritesMessage.classList.remove('d-none');
                return;
            }

            noFavoritesMessage.classList.add('d-none');

            const favoriteRecipesList = recipes.filter(recipe => favorites.includes(recipe.id));

            favoriteRecipesList.forEach(recipe => {
                const recipeCard = document.createElement('div');
                recipeCard.className = 'col';
                recipeCard.innerHTML = `
                    <div class="card recipe-card h-100">
                        <img src="${recipe.image}" class="card-img-top recipe-img" alt="${recipe.name}">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start">
                                <h5 class="card-title">${recipe.name}</h5>
                                <i class="bi bi-heart-fill favorite-btn active" data-recipe-id="${recipe.id}"></i>
                            </div>
                            <p class="card-text">
                                <small class="text-muted">
                                    <i class="bi bi-clock me-1"></i>${recipe.time} | 
                                    <i class="bi bi-people me-1"></i>${recipe.servings} kişilik
                                </small>
                            </p>
                        </div>
                        <div class="card-footer bg-transparent">
                            <button class="btn btn-primary w-100 view-recipe-btn" data-recipe-id="${recipe.id}">Tarifi Görüntüle</button>
                        </div>
                    </div>
                `;

                favoriteRecipes.appendChild(recipeCard);
            });

            // Add event listeners to view recipe buttons
            document.querySelectorAll('.view-recipe-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const recipeId = parseInt(btn.getAttribute('data-recipe-id'));
                    const recipe = recipes.find(r => r.id === recipeId);
                    showRecipeDetail(recipe);
                });
            });

            // Add event listeners to favorite buttons
            document.querySelectorAll('.favorite-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const recipeId = parseInt(btn.getAttribute('data-recipe-id'));
                    toggleFavorite(recipeId);
                    updateFavoritesUI();
                });
            });
        }

        function addShoppingItem() {
            const item = shoppingItemInput.value.trim();
            if (item && !shoppingItems.includes(item)) {
                shoppingItems.push(item);
                saveShoppingList();
                updateShoppingListUI();
                shoppingItemInput.value = '';
            }
            shoppingItemInput.focus();
        }

        function updateShoppingListUI() {
            shoppingList.innerHTML = '';

            if (shoppingItems.length === 0) {
                emptyShoppingListMessage.classList.remove('d-none');
                return;
            }

            emptyShoppingListMessage.classList.add('d-none');

            shoppingItems.forEach((item, index) => {
                const li = document.createElement('li');
                li.className = 'list-group-item shopping-list-item';
                li.innerHTML = `
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="item-${index}">
                        <label class="form-check-label" for="item-${index}">${item}</label>
                    </div>
                    <button class="btn btn-sm btn-outline-danger remove-item-btn" data-index="${index}">
                        <i class="bi bi-trash"></i>
                    </button>
                `;
                shoppingList.appendChild(li);
            });

            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const index = parseInt(btn.getAttribute('data-index'));
                    shoppingItems.splice(index, 1);
                    saveShoppingList();
                    updateShoppingListUI();
                });
            });

            // Add event listeners to checkboxes
            document.querySelectorAll('.shopping-list-item .form-check-input').forEach(checkbox => {
                checkbox.addEventListener('change', () => {
                    const label = checkbox.nextElementSibling;
                    if (checkbox.checked) {
                        label.style.textDecoration = 'line-through';
                        label.style.color = '#6c757d';
                    } else {
                        label.style.textDecoration = 'none';
                        label.style.color = '';
                    }
                });
            });
        }

        function printShoppingList() {
            if (shoppingItems.length === 0) {
                alert('Alışveriş listeniz boş!');
                return;
            }

            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Alışveriş Listesi</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            padding: 20px;
                        }
                        h1 {
                            color: #ff6b6b;
                            text-align: center;
                        }
                        ul {
                            list-style-type: none;
                            padding: 0;
                        }
                        li {
                            padding: 10px;
                            border-bottom: 1px solid #eee;
                            display: flex;
                        }
                        .checkbox {
                            width: 20px;
                            height: 20px;
                            border: 1px solid #000;
                            margin-right: 10px;
                            display: inline-block;
                        }
                        @media print {
                            .no-print {
                                display: none;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="no-print">
                        <button onclick="window.print()">Yazdır</button>
                        <button onclick="window.close()">Kapat</button>
                    </div>
                    <h1>Alışveriş Listesi</h1>
                    <ul>
                        ${shoppingItems.map(item => `
                            <li>
                                <span class="checkbox"></span>
                                ${item}
                            </li>
                        `).join('')}
                    </ul>
                </body>
                </html>
            `);
            printWindow.document.close();
        }