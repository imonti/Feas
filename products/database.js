var db = {

  "multipar" : {
    "img": "img/prods/multipar.png",
    "title" : "Monitores Multiparamétricos",
    "tab": "Monitor Multiparamétricos"
  },

  "dea": {

    "img": "img/prods/defi.png",
    "title" : "Desfibriladores",
    "friends" : ["defisim"],
    "tab": "Externo Automático"
  },

  "defisim": {
    "tab": "De Simulacion",
    "friends": ["dea"]
  },

  "ecg3" : {

    "img": "img/prods/cardiograph.png",
    "title" : "Electrocardiógrafos",
    "tab" : "Tres Canales",
    "friends" : ["ecg1"]

  },

  "ecg1" : {

    "img": "img/prods/cardiograph.png",
    "tab" : "Un Canal",
    "friends" : ["ecg3"]

  },

  "carromulti" : {

    "img": "img/prods/heart-attack-cart.png",
    "title" : "Carros",
    "friends" : ["carroparo"],
    "tab": "De Usos Multiples"

  },

  "carroparo": {
    "friends" : ["carromulti"],
    "tab": "Carro de Paro"
  },

  "bombperist": {

    "img": "img/prods/infusion-bomb.png",
    "title" : "Bombas de Infusión",
    "tab": "Bomba Peristáltica"

  },

  "central":{

    "img": "img/prods/monitoring-central.png",
    "title" : "Centrales de monitoreo",
    "tab": "Central de Monitoreo"

  },

  "poligrafoh": {

    "img": "img/prods/poligraph.png",
    "title" : "Polígrafos",
    "friends" : ["polighye"],
    "tab": "Hemodinamia"

  },

  "polighye":{
    "tab": "Hemodinamia y Electrofisiología",
    "friends" : ["poligrafoh"]
  },

  "accesorios": {
    "img": "img/prods/accessory.png",
    "title" : "Accesorios",
    "tab": "Accesorios"

  }

};
