import * as VVvars from '../../shared/VVvar.js';

window.addEventListener("load", init);

function $_GET(fieldN) {
	var VVvars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			VVvars[key] = value !== undefined ? value : '';
		}
	);

	if ( fieldN ) {
		return VVvars[fieldN] ? VVvars[fieldN] : null;	
	}
	return VVvars;
}

var id
function init()
{
    id = $_GET('id_rbot')
    var D_data = VVvars.getById(id)

    let template = document.querySelector("#info_recap");


    var fname=$_GET("fname")
    console.log(fname)
    var lname=$_GET("lname")
    console.log(lname)
    var amail=$_GET("amail").replace('%40','@')
    var tel=$_GET("tel")
    var pbtype=$_GET("pbtype")
    var start_d=$_GET("start_d")
    var end_d=$_GET("end_d")
    var nb_ad=$_GET("nb_ad")
    var nb_children=$_GET("nb_children")
    var breakfast=$_GET("breakfast")
    var infos_s=$_GET("infos_s")
    var price=$_GET("price")

    let clone = document.importNode(template.content, true);      // clone le template
    var newContent = clone.firstElementChild.innerHTML		// remplace {{modèle}}
      .replace(/{{id}}/g, D_data.id)
      //.replace(/{{nom}}/g, nom)
      .replace(/{{price}}/g, price)
      .replace(/{{imgPath}}/g, D_data.imgPath)
      .replace(/{{fname}}/g, fname)
      .replace(/{{lname}}/g, lname)
      .replace(/{{amail}}/g, amail)
      .replace(/{{nb_ad}}/g, nb_ad)
      .replace(/{{nb_children}}/g, nb_children);

  clone.firstElementChild.innerHTML = newContent	
  document.getElementById('template_confirm').appendChild(clone);	console.log(D_data.imgPath);
}