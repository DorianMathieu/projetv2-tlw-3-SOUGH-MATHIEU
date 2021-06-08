const dest = [{id:1, ville:"London", nom: "Voyage à London", prix: 120, imgPath:"./assets/images/destinations/Londre.jpg", alt:"Photo Londre", animaux:false, petitDej:true, lat:51.507346150437556, lng:-0.12776035898941673},
                {id:2, ville:"Istanbul", nom: "Voyage à Istanbul", prix: 80, imgPath:"./assets/images/destinations/Istanbul_1.jpeg", alt:"Photo Istanbul", animaux:true, petitDej:true, lat:45.46587113086473, lng:9.188484073595873},
                {id:3, ville:"Paris", nom: "Voyage à Paris", prix: 200, imgPath:"./assets/images/destinations/Paris.jpg", alt:"Photo Paris", animaux:false, petitDej:true, lat:48.86102881074157, lng:2.3300931579040975},
                {id:4, ville:"5Terres", nom: "Voyage aux 5Terres", prix: 78, imgPath:"./assets/images/destinations/italie_5Tw.jpeg", alt:"Photo 5Terres", animaux:true, petitDej:true, lat:43.77588877886635, lng:11.249034005283741},
                {id:5, ville:"Inde", nom: "Voyage en Inde", prix: 95, imgPath:"./assets/images/destinations/Taj_Mahal_Inde.jpeg", alt:"Photo Inde", animaux:false, petitDej:false, lat:50.877375875341826, lng:4.358223044328568},
                {id:6, ville:"Marseille", nom: "Voyage à Marseille", prix: 120, imgPath:"./assets/images/destinations/6.png", alt:"Photo Londre", animaux:true, petitDej:true, lat:43.29976365741409, lng:5.389656587998412},
                {id:7, ville:"Brest", nom: "Voyage à Brest", prix: 500, imgPath:"./assets/images/destinations/7.png", alt:"Photo Londre", animaux:true, petitDej:false, lat:48.404406522691374, lng:-4.492050656619935},
                {id:8, ville:"Toulouse", nom: "Voyage à Toulouse", prix: 145, imgPath:"./assets/images/destinations/8.png", alt:"Photo Londre", animaux:true, petitDej:true, lat:43.5961843662885, lng:1.4287156454402825},
                {id:9, ville:"Lille", nom: "Voyage à Lille", prix: 63, imgPath:"./assets/images/destinations/9.png", alt:"Photo Londre", animaux:true, petitDej:false, lat:50.62843632119534, lng:3.0663842785568423}];


function getById(id) {
    for (var d of dest) {
        if (d.id == id) return d
    }
    return null
}