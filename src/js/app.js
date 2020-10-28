
var ciudad = document.querySelector('.ciudad');
var temperatura = document.querySelector('.temperatura');

fetch( 'api.openweathermap.org/data/2.5/weather?q=Madrid&appid=ae054c56b006a82fa7280121b0aad26a')
.then(response => response.json())
.then(data => {
    var valorNombre = data['name'];
    var valorTemperatura = data['main']['temp'];
    ciudad.innerHTML = valorNombre;
    temperatura.innerHTML = Math.round(valorTemperatura - 273.15) +" º" ;
})