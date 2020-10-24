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