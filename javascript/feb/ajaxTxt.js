var peticion="";
var divs = document.getElementsByTagName("div");

function lanzarAjax(archivo) {
   
    if (window.XMLHttpRequest) {
        peticion = new XMLHttpRequest();
        respuesta(archivo);
    }
    else if(window.ActiveXObject){
        
        peticion= new ActiveXObject("Microsoft.XMLHTTP");
       respuesta(archivo);
        
    }
}

function respuesta(archivo) {
    var aleatorio = Math.random();
    
        peticion.onreadystatechange=consultar;
        peticion.open("GET", archivo+"?aleatorio="+aleatorio);
        peticion.send(null);
    
}

function consultar() {
    
    if (peticion.readyState==4 && peticion.status==200) {
        var res= JSON.parse(peticion.responseText);

        for (i in res) { 
            var par=document.createElement("p");
            var texto=document.createTextNode(res[i].display);
            var texto1=document.createTextNode(res[i].display);
            par.appendChild(texto);
            var a=document.createElement("a");
            a.href=res[i].url;
            a.target="_blank";
            a.appendChild(texto1);
            var espacio= document.createElement("hr");
            document.getElementsByTagName("body")[0].appendChild(par);
            document.getElementsByTagName("body")[0].appendChild(a);
            document.getElementsByTagName("body")[0].appendChild(espacio);
        }


    }
    
}