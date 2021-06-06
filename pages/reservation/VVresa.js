

window.addEventListener("load", init);


function init(){


  var inputs = document.getElementById('validation_formulaire').getElementsByTagName('input')
  for(var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('change', verif) 
  }

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



    
    var today_d = new Date();
    console.log(today_d)

    var start_dR = new Date(start_d.value);
    var end_dR = new Date(end_d.value);
    //console.log(date_depart)

    var gap = dayDiff(start_dR, end_dR);
    gap++
    console.log("gap entre date"+gap)

    var gap_v= dayDiff(today_d, start_dR);
    gap_v++
    console.log("Gap premiere date"+gap_v)

    if((gap_v > 0 )&& (nb_ad.value >= 1) && (gap >= 1))
    {
        button_valider.disabled = false
    }
    else
    {
        button_valider.disabled = true
    }
  
}

function dayDiff(d1, d2)
{
  d1 = d1.getTime() / 86400000;
  d2 = d2.getTime() / 86400000;
  return new Number(d2 - d1).toFixed(0);
}


function calcul_prix(nb_ad, nb_children, breakfast, start_d, end_d)
{

    if (!isNaN(var_json.getById(id).prix * gap)) { //var_json données récupérées dans le json, voir déclaration début de fichier
        var price_calc = 0
        price_calc = var_json.getById(id).prix * gap * nb_ad.value;
        price_calc = price_calc + var_json.getById(id).prix * 0.40 * nb_children.value * gap
        if (breakfast.checked)
        {
            price_calc = price_calc + (12 * (Number(nb_ad.value) + Number(nb_children.value)) * gap);
        }
          
      }
      price_calc = Math.round(price_calc * 100) / 100;
      prix.value = price_calc
    
}