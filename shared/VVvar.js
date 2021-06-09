const destinations_Infos = [{id:1, ville:"London", nom: "Voyage-Voyage à Londre", price: 120, imgPath:"./assets/images/destinations/Londre.jpg", alt:"Photo Londre", animaux:false, breakfast:true},
                {id:2, ville:"Inde", nom: "Voyage-Voyage au Taj_Mahal", price: 80, imgPath:"./assets/images/destinations/Taj_Mahal_Inde.jpeg", alt:"Photo Taj_mahal", animaux:true, breakfast:true},
                {id:3, ville:"Italie", nom: "Voyage-Voyage aux 5Terres", price: 200, imgPath:"./assets/images/destinations/italie_5Tw.jpeg", alt:"Photo 5Terre", animaux:false, breakfast:true},
                {id:4, ville:"Istanbul", nom: "Voyage-Voyage a Istanbul", price: 78, imgPath:"./assets/images/destinations/Istanbul_1.jpg", alt:"Photo Istanbul", animaux:true, breakfast:true},
                {id:5, ville:"Paris", nom: "Voyage-Voyage a Paris", price: 95, imgPath:"./assets/images/destinations/Paris.jpg", alt:"Photo Paris", animaux:false, breakfast:false},
                {id:6, ville:"Marseille", nom: "Voyage-Voyage à Marseille", price: 120, imgPath:"./assets/images/destinations/6.png", alt:"Photo Londre", animaux:true, breakfast:true},
                {id:7, ville:"Brest", nom: "Voyage-Voyage à Brest", price: 500, imgPath:"./assets/images/destinations/7.png", alt:"Photo Londre", animaux:true, breakfast:false},
                {id:8, ville:"Toulouse", nom: "Voyage-Voyage à Toulouse", price: 145, imgPath:"./assets/images/destinations/8.png", alt:"Photo Londre", animaux:true, breakfast:true},
                {id:9, ville:"Lille", nom: "Voyage-Voyage à Lille", price: 63, imgPath:"./assets/images/destinations/9.png", alt:"Photo Londre", animaux:true, breakfast:false}];


function getById(id) {
    for (var d of destinations_Infos) {
        if (d.id == id) return d
    }
    return null
}

export {destinations_Infos, getById}