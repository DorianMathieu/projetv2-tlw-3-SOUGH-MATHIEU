import * as VVvars from '../../shared/VVvar.js';


window.addEventListener("load", init);

var id

function init(){

    id = $_GET('id')
    var D_data = VVvars.getById(id)

    let template = document.querySelector("#info_destination");

    let clone = document.importNode(template.content, true);      // clone le template
  var newContent = clone.firstElementChild.innerHTML		// remplace {{modèle}}
      .replace(/{{id}}/g, D_data.id)
      .replace(/{{nom}}/g, D_data.nom)
      .replace(/{{price}}/g, D_data.price)
      .replace(/{{imgPath}}/g, D_data.imgPath)
      .replace(/{{alt}}/g, D_data.alt)
      .replace(/{{animaux}}/g, D_data.animaux)
      .replace(/{{petitDej}}/g, D_data.dej);

  clone.firstElementChild.innerHTML = newContent	
  document.getElementById('template_resa').appendChild(clone);	console.log(D_data.imgPath);



  let template_rbot = document.querySelector("#not_robot");

  let clone_rbot = document.importNode(template_rbot.content, true);      // clone le template
    var newContent = clone_rbot.firstElementChild.innerHTML		// remplace {{modèle}}
    .replace(/{{id}}/g, D_data.id)

    clone_rbot.firstElementChild.innerHTML = newContent	
    document.getElementById('template_robot').appendChild(clone_rbot);	console.log(D_data.imgPath);

  //template_robot

  var inputs = document.getElementById('validation_formulaire').getElementsByTagName('input')
  for(var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('change', verif) 
  }
}

function $_GET(fieldN) {
	var VVvars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			VVvars[key] = value !== undefined ? value : ''
		}
	);

	if ( fieldN ) {
		return VVvars[fieldN] ? VVvars[fieldN] : null
	}
	return VVvars
}

function verif()
{
    

    var nb_ad=document.getElementById("nb_ad")
    console.log("Nb adultes"+nb_ad.value)
    var nb_children=document.getElementById("nb_children")
    //console.log(nbadult.value)
    var breakfast=document.getElementById("breakfast")
    //console.log(nbadult.value)
    var start_d=document.getElementById("start_d")
    //console.log(start_d.value)
    var end_d=document.getElementById("end_d")
    //console.log(end_d.value)
    var button_valider=document.getElementById("button_valider")

    var id_rbot=document.getElementById("id_rbot")
    console.log("Id desti="+id)
    console.log("ID_rbot="+id_rbot.value)
    //var price = document.getElementById('price');


    
    var today_d = new Date()
    console.log(today_d)

    var start_dR = new Date(start_d.value)
    var end_dR = new Date(end_d.value)
    //console.log(date_depart)

    var gap = gap_calcul(start_dR, end_dR)
    gap++
    console.log("gap entre date="+gap)

    var gap_v= gap_calcul(today_d, start_dR)
    gap_v++
    console.log("Gap premiere date="+gap_v)

    if((gap_v > 0 )&& (nb_ad.value >= 1) && (gap >= 1) && (id_rbot.value==id))
    {
        button_valider.disabled = false
    }
    else
    {
        button_valider.disabled = true
    }
  

    price_calculation(nb_ad, nb_children, breakfast, gap);
    //console.log("prix calcule"+price_calulated)
    //console.log(VVvars.getById(id).price)
}

function gap_calcul(d1, d2)
{
  d1 = d1.getTime() / 86400000;
  d2 = d2.getTime() / 86400000;
  return new Number(d2 - d1).toFixed(0);
}


function price_calculation(nb_ad, nb_children, breakfast, gap)
{

    if (!isNaN(VVvars.getById(id).price * gap)) { //VVvar données récupérées dans le json, voir déclaration début de fichier
        var price_calc = 0
        price_calc = VVvars.getById(id).price * gap * nb_ad.value;
        price_calc = price_calc + VVvars.getById(id).price * 0.40 * nb_children.value * gap
        if (breakfast.checked)
        {
            price_calc = price_calc + (12 * (Number(nb_ad.value) + Number(nb_children.value)) * gap);
        }
          
      }
      price_calc = Math.round(price_calc * 100) / 100;
      price.value = price_calc
    
}