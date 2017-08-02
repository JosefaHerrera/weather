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
            $('#climas').append('<img src="dist/img/'+response.currently.icon+'.png">'+'<br>'+'<span>La temperatura actual es: '+response.currently.temperature+'</span>' + '<br>'+'<span>La Humedad actual es: '+response.currently.humidity+'</span>' + '<br>'+'<span>Indice UV actual es: '+response.currently.uvIndex+'</span>' + '<br>'+'<span>La presión actual es: '+response.currently.pressure+'</span>' + '<br>'+'<a href=index2.html><button type="button" class="btn btn-default">Default</button></a>');
       
           // $('#semanal').append('<div>'+ response.daily.apparentTemperatureMin +'</div>');
            //TEMPERATURA DE LA SEMANA
       
		response.daily.data.forEach(function(a){
			//console.log(ele);
			var max = a.apparentTemperatureMax
			var min = a.apparentTemperatureMin
			$("#semanal").append("<div class='row linea-dias'><div class='col-md-6 col-xs-6 text-left'><img src='dist/img/"+response.daily.icon+".png'><span>Dia</span></div><div class='col-md-6 col-xs-6 text-right'><p>"+max+"º"+" - "+min+"º"+"</p></div></div>");

		});
       //
        })
        .fail(function() {
            console.log('error')
        })
        .always(function() {
            console.log('complete')
        });
};




    // API FLICKR 955f29c6de9392981e26515842f04e7d
