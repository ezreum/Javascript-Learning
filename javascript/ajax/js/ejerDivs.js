
var peticion="";
var divs = document.getElementsByTagName("div");

setInterval("lanzarAjax()",3000);
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
    var aleatoria=Math.random();
    peticion.onreadystatechange=consultar;
    peticion.open("GET", "../php/paises.php"+"?aleatorio="+aleatoria);
    peticion.send(null);
}

function consultar() {
    var bol = false;
    if (peticion.readyState==4 && peticion.status==200) {
        var res= peticion.responseText.split("#");
        var i=0;
        for (var div of divs) {
           div.innerHTML=res[i];
            i++;
        }
        bol=true;
    }
    return bol
}