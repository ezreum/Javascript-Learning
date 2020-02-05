
var peticion="";
var divs = document.getElementsByTagName("div");

function lanzarAjax() {
    if (window.XMLHttpRequest) {
        peticion = new XMLHttpRequest();
        respuesta();
    }
    else if(window.ActiveXObject){
        peticion= new ActiveXObject("Microsoft.XMLHTTP");
        var check = respuesta();
        check?alert("su proceso de ajax se proceso correctamente"):alert("No se proceso ajax correctamente");
    }
}

function respuesta() {
    var bool = false;
    peticion.onreadystatechange=consultar;
    peticion.open("GET", "../php/paises.php")
    peticion.send(null);
}

function consultar() {
    var bol = false;
    if (peticion.readyState==4 && peticion.status==200) {
        for (var div of divs) {
            div.innerHTML=peticion.responseText;
            console.log("a");
        }
        bol=true;
    }
    return bol
}