var peticion="";


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
    var codigo = document.getElementById("codigoPostal").value;
    if ( codigo!=null && codigo != 'undefined' && codigo != '') {
        peticion.onreadystatechange=consultar;
        peticion.open("POST", window.location.origin+'Provincia/adivinarProvincia');
        peticion.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        peticion.send("codigo="+codigo);
    }
    
}

function consultar() {
    
    if (peticion.readyState==4 && peticion.status==200) {
        var res= peticion.responseText;
        console.log(res);
    }
    
}