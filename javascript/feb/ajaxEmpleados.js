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

        var identificadorProveido= contenido;
    //    document.getElementById("miDiv").innerHTML+=res.empleados[0].ide;
        var entrada = document.getElementsByTagName("input");
        for (let i = 0; i < res.empleados.length; i++) {
            
            if (res.empleados[i].ide == identificadorProveido) {

                var fechada=fechaFormat(res.empleados[i].fecha);
                //document.getElementById("miDiv").innerHTML=fechaFormat;
                entrada[1].value=res.empleados[i].ide;
                entrada[2].value=res.empleados[i].nombre;
                entrada[3].value=res.empleados[i].apellidos;
                entrada[4].value=fechada[0];
                entrada[5].value=fechada[1];
            } 
        }
    }
    
}
var contenido;
function checkear() {
    var check = false;
    contenido = document.getElementsByTagName("input")[0].value.trim().toUpperCase();
    var patron=/^[0-5][0-9][0-9][B-DF-HJ-NPR-TVX-Z]{3}$/;
    console.log(patron.test(contenido));
    if (patron.test(contenido)) {
        check=true;
    } else {
        document.getElementById("miDiv").innerHTML="¡Algo fue mal en la validación!";
    }
    if (check){
        lanzarAjax("empleados.txt");
    }
}


    function fechaFormat(fecha) {
        
        var trozos = fecha.split("-");
        fecha = new Date(trozos[0],trozos[1],trozos[2]);
        var fechas = new Array();
        fechas[0] = fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear();
        
        
        
        
        fechas[1] = new Date().getFullYear() - fecha.getFullYear() ;

        return fechas;
    }