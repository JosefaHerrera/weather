///mi API
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
function clima(latitud, longitud) {
    $.ajax({
            url: 'https://api.darksky.net/forecast/e16a38db6186f1d2cbbf839bfac86e55/'+latitud+','+longitud+'?anguage=es?&units=auto',
            type: 'GET',
            datatype: 'JSON',
        })
        .done(function(response) {
            console.log(response);
            //currently = actualmente index.html
            $('#climas').append('<span>La temperatura actual es: '+response.currently.temperature+'</span>' + '<br>'+'<span>La Humedad actual es: '+response.currently.humidity+'</span>' + '<br>'+'<span>Indice UV actual es: '+response.currently.uvIndex+'</span>' + '<br>'+'<span>La presión actual es: '+response.currently.pressure+'</span>' + '<br>'+'<a href=index2.html><button type="button" class="btn btn-default">Default</button></a>');

            //daily , diario // semanal index2.html
            $('#semanal').append('<span>La temperatura actual es: '+response.currently.temperature+'</span>' + '<br>'+'<span>El viento actual es: '+response.currently.windSpeed+'</span>' + '<br>'+'<span>La Humedad actual es: '+response.currently.humidity+'</span>' + '<br>'+'<span>Indice UV actual es: '+response.currently.uvIndex+'</span>' + '<br>'+'<span>La presión actual es: '+response.currently.pressure+'</span>' + '<br>'+'<a href=index2.html><button type="button" class="btn btn-default">Default</button></a>');
        })
        .fail(function() {
            console.log('error')
        })
        .always(function() {
            console.log('complete')
        });
};