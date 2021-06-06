window.addEventListener("load", init);

function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

function init()
{
    var fname=$_GET("fname")
    console.log(fname)
    var lname=$_GET("lname")
    console.log(lname)
    var amail=$_GET("amail")
    var tel=$_GET("tel")
    var pbtype=$_GET("pbtype")
    var start_d=$_GET("start_d")
    var end_d=$_GET("end_d")
    var nb_ad=$_GET("nb_ad")
    var nb_children=$_GET("nb_children")
    var breakfast=$_GET("breakfast")
    var infos_s=$_GET("infos_s")
    var prix=$_GET("prix")
}