function alerta(){
    alert("heyy:)")
}

$(document).ready(function(){
    $("#arriba").click(function(){
        $('html, body').animate({scrollToTop:0}, 800);
    });
});