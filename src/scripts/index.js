
function change(){
    var cont = 0;
    if(cont == 0){
        document.body.style.backgroundColor = "black";
        document.getElementById("main-text").style.color = "white";
        cont = 1;
    }
    else{
        document.body.style.backgroundColor = "white";
        document.getElementById("main-text").style.color = "#292C35";
        cont=0;
    }
}
