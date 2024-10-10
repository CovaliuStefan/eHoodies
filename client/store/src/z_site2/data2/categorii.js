const categorii=[
    {
        "category_name":"man",
        "sub_ctgr1":{
            "noutati":{
                "noutati":["geci","paltoane","sweat","tricouri","blugi","pantaloni","pulovere","cardigane","camasi","pantaloni scurti"],
                "geci":["geci de piele","geci de iarna","geci bomber","geci de blugi"],
                "paltoane":["paltoane de iarna","paltoane scurte","trenciuri"],
                "sweat":["hanorace","hanorace cu fermoar","sweatshirt"],
                "tricouri":["tricouri","tricouri cu maneca lunga","tricouri polo","tank tops"],
                "jeans":["slim fit","skinny fit","tapered leg","loose fit","jeans shorts"],
                "pantaloni":["pantaloni chino","pantaloni de trening","pantaloni cargo","pantaloni lungi","pantaloni scurti"],
                "pulovere si cardigane":["pulovere","cardigane"],
                "camasi":["camasi casual","camasi business","camasi in carouri","camasi de blugi"],
                "lenjerie":["chiloti","sosete","lenjerie de noapte","camasi de corp","halate"],
                "costume":["costume","sacouri","pantaloni de costum","sacouri de costum","veste de costum"]
            },
            "outfituri":{
                "outfituri":["outfituri"]
            },
            "imbracaminte":{
                "geci":["geci de piele","geci de iarna","geci bomber","geci de blugi"],
                "paltoane":["paltoane de iarna","paltoane scurte","trenciuri"],
                "sweat":["hanorace","hanorace cu fermoar","sweatshirt"],
                "tricouri":["tricouri","tricouri cu maneca lunga","tricouri polo","tank tops"],
                "jeans":["slim fit","skinny fit","tapered leg","loose fit","jeans shorts"],
                "pantaloni":["pantaloni chino","pantaloni de trening","pantaloni cargo","pantaloni lungi","pantaloni scurti"],
                "pulovere si cardigane":["pulovere","cardigane"],
                "camasi":["camasi casual","camasi business","camasi in carouri","camasi de blugi"],
                "lenjerie":["chiloti","sosete","lenjerie de noapte","camasi de corp","halate"],
                "costume":["costume","sacouri","pantaloni de costum","sacouri de costum","veste de costum"]
            },
            "incaltaminte":{
                "noutati":["sneaker si pantofi sport","bocanci si cizme","pantofi","slapi si sandale"],
                "bocanci si cizme":["cizme","bocanci cu sireturi","boots"],
                "sneaker":["sneaker low","sneaker high","slip-ons","tenisi"],
                "pantofi":["pantofi loafer","pantofi business","pantofi casual cu sireturi","pantofi sport cu sireturi"],
                "pantofi sport":["incaltaminte outdoor","pantofi sport de alergat","pantofi sport","pantofi sport de interior"],
                "slapi si sandale":["flip-flops","sandale","slapi","papuci de casa"]
            },
            "accesorii":{
                "curele":["curele din piele","curele casual","curele casual"],
                "sepci si cacioli":["caciuli","sepci"],
                "genti si rucsacuri":["genti","rucsacuri"],
                "ceasuri si bijuterii":["ceasuri","lanturi","bratari"],
                "fulare si esarfe":["fulare","esarfe"],
                "portofele":["portofele"],
                "manusi":["manusi"],
                "cravate si accesorii":["cravate","papioane"],
                "ochelari":["ochelari","ochelari de soare"]
            },
            "branduri":{
                "branduri":["branduri"]
            },
            "reduceri":{
                "geci":["geci de piele","geci de iarna","geci bomber","geci de blugi"],
                "paltoane":["paltoane de iarna","paltoane scurte","trenciuri"],
                "sweat":["hanorace","hanorace cu fermoar","sweatshirt"],
                "tricouri":["tricouri","tricouri cu maneca lunga","tricouri polo","tank tops"],
                "jeans":["slim fit","skinny fit","tapered leg","loose fit","jeans shorts"],
                "pantaloni":["pantaloni chino","pantaloni de trening","pantaloni cargo","pantaloni lungi","pantaloni scurti"],
                "pulovere si cardigane":["pulovere","cardigane"],
                "camasi":["camasi casual","camasi business","camasi in carouri","camasi de blugi"],
                "lenjerie":["chiloti","sosete","lenjerie de noapte","camasi de corp","halate"],
                "costume":["costume","sacouri","pantaloni de costum","sacouri de costum","veste de costum"],
                "accesorii":["curele","sepci si caciuli","genti si rucsacuri","ochelari"]
            }
        },
        "collections":{
            "one":{
                "title":"some title",
                "items":["flip-flops","sandale","slapi","papuci de casa"],
                "banner":require('./images/hoodie2.jpg').default,
                "bannerNoDefault":require('./images/hoodie2.jpg'),
                "text":"man one"
            }
        }
    },
    {
        "category_name":"woman",
        "sub_ctgr1":{
            "noutati":{
                "noutati":["geci","paltoane","sweat","tricouri","blugi","pantaloni","pulovere","cardigane","camasi","pantaloni scurti"],
                "geci":["geci de piele","geci de iarna","geci bomber","geci de blugi"],
                "paltoane":["paltoane de iarna","paltoane scurte","trenciuri"],
                "sweat":["hanorace","hanorace cu fermoar","sweatshirt"],
                "tricouri":["tricouri","tricouri cu maneca lunga","tricouri polo","tank tops"],
                "jeans":["slim fit","skinny fit","tapered leg","loose fit","jeans shorts"],
                "pantaloni":["pantaloni chino","pantaloni de trening","pantaloni cargo","pantaloni lungi","pantaloni scurti"],
                "pulovere si cardigane":["pulovere","cardigane"],
                "camasi":["camasi casual","camasi business","camasi in carouri","camasi de blugi"],
                "lenjerie":["chiloti","sosete","lenjerie de noapte","camasi de corp","halate"],
                "costume":["costume","sacouri","pantaloni de costum","sacouri de costum","veste de costum"]
            },
            "outfituri":{
                "outfituri":["outfituri"]
            },
            "imbracaminte":{
                "geci femei":["geci de piele","geci de iarna","geci bomber","geci de blugi"],
                "paltoane":["paltoane de iarna","paltoane scurte","trenciuri"],
                "sweat":["hanorace","hanorace cu fermoar","sweatshirt"],
                "tricouri":["tricouri","tricouri cu maneca lunga","tricouri polo","tank tops"],
                "jeans":["slim fit","skinny fit","tapered leg","loose fit","jeans shorts"],
                "pantaloni":["pantaloni chino","pantaloni de trening","pantaloni cargo","pantaloni lungi","pantaloni scurti"],
                "pulovere si cardigane":["pulovere","cardigane"],
                "camasi":["camasi casual","camasi business","camasi in carouri","camasi de blugi"],
                "lenjerie":["chiloti","sosete","lenjerie de noapte","camasi de corp","halate"],
                "costume":["costume","sacouri","pantaloni de costum","sacouri de costum","veste de costum"]
            },
            "incaltaminte":{
                "noutati":["sneaker si pantofi sport","bocanci si cizme","pantofi","slapi si sandale"],
                "bocanci si cizme":["cizme","bocanci cu sireturi","boots"],
                "sneaker":["sneaker low","sneaker high","slip-ons","tenisi"],
                "pantofi":["pantofi loafer","pantofi business","pantofi casual cu sireturi","pantofi sport cu sireturi"],
                "pantofi sport":["incaltaminte outdoor","pantofi sport de alergat","pantofi sport","pantofi sport de interior"],
                "slapi si sandale":["flip-flops","sandale","slapi","papuci de casa"]
            },
            "accesorii":{
                "curele":["curele din piele","curele casual","curele casual"],
                "sepci si cacioli":["caciuli","sepci"],
                "genti si rucsacuri":["genti","rucsacuri"],
                "ceasuri si bijuterii":["ceasuri","lanturi","bratari"],
                "fulare si esarfe":["fulare","esarfe"],
                "portofele":["portofele"],
                "manusi":["manusi"],
                "cravate si accesorii":["cravate","papioane"],
                "ochelari":["ochelari","ochelari de soare"]
            },
            "branduri":{
                "branduri":["branduri"]
            },
            "reduceri":{
                "geci":["geci de piele","geci de iarna","geci bomber","geci de blugi"],
                "paltoane":["paltoane de iarna","paltoane scurte","trenciuri"],
                "sweat":["hanorace","hanorace cu fermoar","sweatshirt"],
                "tricouri":["tricouri","tricouri cu maneca lunga","tricouri polo","tank tops"],
                "jeans":["slim fit","skinny fit","tapered leg","loose fit","jeans shorts"],
                "pantaloni":["pantaloni chino","pantaloni de trening","pantaloni cargo","pantaloni lungi","pantaloni scurti"],
                "pulovere si cardigane":["pulovere","cardigane"],
                "camasi":["camasi casual","camasi business","camasi in carouri","camasi de blugi"],
                "lenjerie":["chiloti","sosete","lenjerie de noapte","camasi de corp","halate"],
                "costume":["costume","sacouri","pantaloni de costum","sacouri de costum","veste de costum"],
                "accesorii":["curele","sepci si caciuli","genti si rucsacuri","ochelari"]
            }
        },
        "collections":{
            "one":{
                "title":"some title",
                "items":["flip-flops","sandale","slapi","papuci de casa"],
                "banner":require('./images/hoodie2.jpg').default,
                "bannerNoDefault":require('./images/hoodie2.jpg'),
                "text":"woman one"
            },
            "two":{
                "title":"some title",
                "items":["costume","sacouri","pantaloni de costum","sacouri de costum","veste de costum"],
                "banner":require('./images/hoodie4.jpg').default,
                "bannerNoDefault":require('./images/hoodie4.jpg'),
                "text":"woman two"
            },
            "three":{
                "title":"some title",
                "items":["flip-flops","sandale","slapi","papuci de casa"],
                "banner":require('./images/hoodie5.jpg').default,
                "bannerNoDefault":require('./images/hoodie5.jpg'),
                "text":"woman three"
            },
            "four":{
                "title":"some title",
                "items":["costume","sacouri","pantaloni de costum","sacouri de costum","veste de costum"],
                "banner":require('./images/hoodie6.jpg').default,
                "bannerNoDefault":require('./images/hoodie6.jpg'),
                "text":"woman four"
            },
            "oneg":{
                "title":"some title",
                "items":["flip-flops","sandale","slapi","papuci de casa"],
                "banner":require('./images/hoodie3.jpg').default,
                "bannerNoDefault":require('./images/hoodie3.jpg'),
                "text":"woman one"
            },
            "twog":{
                "title":"some title",
                "items":["costume","sacouri","pantaloni de costum","sacouri de costum","veste de costum"],
                "banner":require('./images/hoodie4.jpg').default,
                "bannerNoDefault":require('./images/hoodie4.jpg'),
                "text":"woman two"
            },
            "threeg":{
                "title":"some title",
                "items":["flip-flops","sandale","slapi","papuci de casa"],
                "banner":require('./images/hoodie5.jpg').default,
                "bannerNoDefault":require('./images/hoodie5.jpg'),
                "text":"woman three"
            },
            "fourg":{
                "title":"some title",
                "items":["costume","sacouri","pantaloni de costum","sacouri de costum","veste de costum"],
                "banner":require('./images/hoodie6.jpg').default,
                "bannerNoDefault":require('./images/hoodie6.jpg'),
                "text":"woman four"
            }
        }
    },
    {
        "category_name":"child",
        "sub_ctgr1":{
            "imbracaminte":{
                "geci copii":["geci de piele","geci de iarna","geci bomber","geci de blugi"],
                "paltoane":["paltoane de iarna","paltoane scurte","trenciuri"],
                "sweat":["hanorace","hanorace cu fermoar","sweatshirt"],
                "tricouri":["tricouri","tricouri cu maneca lunga","tricouri polo","tank tops"],
                "jeans":["slim fit","skinny fit","tapered leg","loose fit","jeans shorts"],
                "pantaloni":["pantaloni chino","pantaloni de trening","pantaloni cargo","pantaloni lungi","pantaloni scurti"],
                "pulovere si cardigane":["pulovere","cardigane"],
                "camasi":["camasi casual","camasi business","camasi in carouri","camasi de blugi"],
                "lenjerie":["chiloti","sosete","lenjerie de noapte","camasi de corp","halate"],
                "costume":["costume","sacouri","pantaloni de costum","sacouri de costum","veste de costum"]
            },
            "incaltaminte":{
                "noutati":["sneaker si pantofi sport","bocanci si cizme","pantofi","slapi si sandale"],
                "bocanci si cizme":["cizme","bocanci cu sireturi","boots"],
                "sneaker":["sneaker low","sneaker high","slip-ons","tenisi"],
                "pantofi":["pantofi loafer","pantofi business","pantofi casual cu sireturi","pantofi sport cu sireturi"],
                "pantofi sport":["incaltaminte outdoor","pantofi sport de alergat","pantofi sport","pantofi sport de interior"],
                "slapi si sandale":["flip-flops","sandale","slapi","papuci de casa"]
            },
            "reduceri":{
                "geci":["geci"]
            }
        },
        "collections":{
            "one":{
                "title":"some title",
                "items":["flip-flops","sandale","slapi","papuci de casa"],
                "banner":require('./images/hoodie5.jpg').default,
                "bannerNoDefault":require('./images/hoodie5.jpg'),
                "text":"child one"
            }
            
        }
    }
]

export default categorii;