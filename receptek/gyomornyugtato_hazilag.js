/* eslint-disable no-multi-str */
module.exports.gyomornyugtato_hazilag=()=>{

let recept_1 = {
    hozzavalok: {
        1: "250 ml tehéntej",
        2: "fél teáskanál kurkuma",
        3: "negyed teáskanál kardamon",
        4: "negyed teáskanál fahéj",
        5: "negyed teáskanál frissen reszelt gyömbér",
        6: "csipet feketebors",
        7: "2 csillagánizs",
        8: "opcionális: vanília aroma"
    },
    elkeszites: {
        1: "Tedd a tejet egy kisebb edénybe, közepes lángon 2-3 percig melegítsd. Tedd bele a gyömbért, vaníliát, borsot, kurkumát, kardamont, \
            fahéjat, csillagánizst. Zárd el a gázt, majd szűrd át finom szűrőn, hogy a reszelt gyömbért kiszűrd. Ha szükséges, édesítsd steviával."
    }
};

// akut gyomorégésre:
let recept_2 = {
    hozzavalok: {
        1: "2 db meghámozott krumpli"
    },
    elkeszites: {
        1: "Darabold fel, majd robotgéppel turmixold össze a krumplit, szűrd le a levét és lassan kortyolgasd, amíg meg nem szűnik a fájdalom"
    }
};

// gyomorégés megelőzésére, kezelésére is:
let recept_3 = {
    hozzavalok: {
        1: "1 evőkanál almaecet",
        2: "1 pohár víz",
        3: "opcionális: méz"
    },
    elkeszites: {
        1: "Keverd össze a hozzávalókat, adhatsz hozzá mézet is az íze kedvéért, valamint hogy kevésbé sóvárogj az édesség után."
    }
}
return console.log(recept_1, recept_2, recept_3)
};