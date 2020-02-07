var peticion="";
var divs = document.getElementsByTagName("div");

function lanzarAjax() {
   
    if (window.XMLHttpRequest) {
        peticion = new XMLHttpRequest();
        respuesta();
    }
    else if(window.ActiveXObject){
        
        peticion= new ActiveXObject("Microsoft.XMLHTTP");
       respuesta();
        
    }
}

function respuesta() {
    var mes = document.getElementsByTagName("select")[0].value;
    if (mes != 'undefined' && mes != 'default') {
        peticion.onreadystatechange=consultar;
        peticion.open("GET", "../php/meses.php?num="+mes);
        peticion.send(null);
    }
    
}

function consultar() {
    
    if (peticion.readyState==4 && peticion.status==200) {
        var res= peticion.responseText;
        document.getElementsByTagName("div")[1].innerHTML = res;
    }
    
}