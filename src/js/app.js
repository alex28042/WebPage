var button = document.querySelector('.button');
var nombreIntroducido = document.querySelector('.nombreIntroducido');
var ciudad = document.querySelector('.ciudad');
var temperatura = document.querySelector('.temperatura');

button.addEventListener('click', hola());

function hola(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ nombreIntroducido.value +'&appid=ae054c56b006a82fa7280121b0aad26a')
    .then(response => response.json())
    .then(data => {
        var valorNombre = data['name'];
        var valorTemperatura = data['main']['temp'];
        ciudad.innerHTML = valorNombre;
        temp.innerHTML = valorTemperatura;
    })
    .catch(err => alert("mal"))
}