const destinations_Infos = [{id:1, ville:"London", nom: "Voyage-Voyage à Londre", price: 120, imgPath:"./assets/images/destinations/Londre.jpg", alt:"Photo Londre", animaux:false, breakfast:true, lat:51.507346150437556, lng:-0.12776035898941673},
                {id:2, ville:"Inde", nom: "Voyage-Voyage au Taj_Mahal", price: 80, imgPath:"./assets/images/destinations/Taj_Mahal_Inde.jpeg", alt:"Photo Taj_mahal", animaux:true, breakfast:true, lat:45.46587113086473, lng:9.188484073595873},
                {id:3, ville:"Italie", nom: "Voyage-Voyage aux 5Terres", price: 200, imgPath:"./assets/images/destinations/italie_5Tw.jpeg", alt:"Photo 5Terre", animaux:false, breakfast:true, lat:48.86102881074157, lng:2.3300931579040975},
                {id:4, ville:"Istanbul", nom: "Voyage-Voyage a Istanbul", price: 78, imgPath:"./assets/images/destinations/Istanbul_1.jpg", alt:"Photo Istanbul", animaux:true, breakfast:true, lat:43.77588877886635, lng:11.249034005283741},
                {id:5, ville:"Paris", nom: "Voyage-Voyage a Paris", price: 95, imgPath:"./assets/images/destinations/Paris.jpg", alt:"Photo Paris", animaux:false, breakfast:false, lat:50.877375875341826, lng:4.358223044328568},
                {id:6, ville:"Marseille", nom: "Voyage-Voyage à Marseille", price: 120, imgPath:"./assets/images/destinations/6.png", alt:"Photo Londre", animaux:true, breakfast:true, lat:43.29976365741409, lng:5.389656587998412},
                {id:7, ville:"Brest", nom: "Voyage-Voyage à Brest", price: 500, imgPath:"./assets/images/destinations/7.png", alt:"Photo Londre", animaux:true, breakfast:false, lat:48.404406522691374, lng:-4.492050656619935},
                {id:8, ville:"Toulouse", nom: "Voyage-Voyage à Toulouse", price: 145, imgPath:"./assets/images/destinations/8.png", alt:"Photo Londre", animaux:true, breakfast:true, lat:43.5961843662885, lng:1.4287156454402825},
                {id:9, ville:"Lille", nom: "Voyage-Voyage à Lille", price: 63, imgPath:"./assets/images/destinations/9.png", alt:"Photo Londre", animaux:true, breakfast:false, lat:50.62843632119534, lng:3.0663842785568423}];


function getById(id) {
    for (var d of destinations_Infos) {
        if (d.id == id) return d
    }
    return null
}

export {destinations_Infos, getById}