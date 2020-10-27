function alerta(){
    alert("heyy:)");
}

document.getElementById("arriba").addEventListener('click', subirPag);

function subirPag(){
    var posInicial = document.documentElement.scrollTop;
    if(posInicial > 0){
        window.requestAnimationFrame(subirPag);
        window.scrollTo(0, posInicial - posInicial * 0.15);
    }
}

var mostrar;

document.getElementById("time").addEventListener('click',showTime);

function showTime(){
    if(mostrar == 1){
        refreshTime();
        return mostrar = 0;
    }
    else{
        document.getElementById('hora').innerHTML = "";
        return mostrar = 1;
    }
}

function refreshTime(){
    time = new Date();
    horas = time.getHours();
    minutos = time.getMinutes();
    segundos = time.getSeconds();
    document.getElementById('hora').innerHTML = horas +":"+minutos+":"+segundos;
}

setInterval(refreshTime, 1000);
