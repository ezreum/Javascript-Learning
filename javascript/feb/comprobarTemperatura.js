function getName() {
    var name = document.getElementsByTagName("select")[0].value;
    if (name!= 'default'){
     name+=".xml";
     lanzarAjax(name);
    }
}

var peticion="";

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
        peticion.open("GET", "aemet/"+archivo+"?aleatorio="+aleatorio);
        peticion.send(null);
    
}

function consultar() {
    
    if (peticion.readyState==4 && peticion.status==200) {
        //var res= document.getElementsByTagName("empleados");
        var res=peticion.responseXML;
        document.getElementById("miDiv").innerHTML=res;
        var empleados=res.getElementsByTagName("empleados");
        console.log(empleados);
        //var empleado = empleados.getElementsByTagName("empleado");
        
        var identificadorProveido= contenido;
        var entrada = document.getElementsByTagName("input");
        for (let i = 0; i < empleados.length; i++) {

            console.log(empleados[i].getAttribute("ide"));
        }
    }
    
}

