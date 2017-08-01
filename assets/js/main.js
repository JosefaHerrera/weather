//mi API
//Https://api.darksky.net/forecast/e16a38db6186f1d2cbbf839bfac86e55/37.8267,122.4233
/************UBICACIÓN********/
function buscar(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(funcionExito,funcionError );
	}
}
window.addEventListener("load", buscar); 

var latitud, longitud;
var funcionExito = function(posicion){
	latitud = posicion.coords.latitude;
	longitud = posicion.coords.longitude;
	console.log(latitud);
	console.log(longitud);
	clima(latitud,longitud);
}
var funcionError = function(error){
	alert("ubicación no encontrada");
}

/*************************/