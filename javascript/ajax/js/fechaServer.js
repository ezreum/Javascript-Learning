
var peticion="";
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
    bool = peticion.onreadystatechange=consultar;
    peticion.open("GET", "../php/fecha.php"+"?aleatorio="+aleatoria);
    peticion.send(null);
}

function consultar() {
    var bol = false;
    if (peticion.readyState==4 && peticion.status==200) {
        var res= peticion.responseXML;
        document.getElementsByTagName("div")[0].innerHTML=res.getElementsByTagName("tiempoactual").firstChild.nodeValue;
        bol=true;
    }
    return bol;
}