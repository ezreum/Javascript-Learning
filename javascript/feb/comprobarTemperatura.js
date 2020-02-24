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
        var raiz=res.getElementsByTagName("prediccion");
        var dias=res.getElementsByTagName("dia");
      
        var provincia=res.getElementsByTagName("provincia")[0].firstChild.nodeValue;

        var html = "<table class='table-active'>"
        html+="<tr><th>Lugar</th><th>Mínima</th><th>Máxima</th></tr>"
        for (let i = 0; i < dias.length; i++) {
            var maxima = dias[i].getElementsByTagName("temperatura")[0].getElementsByTagName("maxima")[0].firstChild.data;
            var minima = dias[i].getElementsByTagName("temperatura")[0].getElementsByTagName("minima")[0].firstChild.nodeValue;
            html+="<tr><td>"+provincia+"</td><td>"+maxima+"</td><td>"+minima+"</td></tr>";
        }
        html+="</table>"
        document.getElementById("miDiv").innerHTML=html;
    }
    
}

