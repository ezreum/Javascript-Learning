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
        document.getElementById("miDiv").innerHTML="";
        var res=peticion.responseXML;
        var raiz=res.getElementsByTagName("prediccion");
        var dias=res.getElementsByTagName("dia");
      
        var provincia=res.getElementsByTagName("provincia")[0].firstChild.nodeValue;

        var tabla = document.createElement("table");
        tabla.style="border-spacing: 10px; border-collapse: separate;";
        tabla.class="ml-1";
        var tr=document.createElement("tr");
        var th = document.createElement("th");
        var texto = document.createTextNode("Provincia");
        th.append(texto);
        tr.append(th);
        
        var tede;
        var texto2;
        for (let index = 0; index < dias.length; index++) {
            tede=document.createElement("td");
            texto2=document.createTextNode(provincia);
            tede.appendChild(texto2);
            tr.appendChild(tede);
        }
        tabla.append(tr);

        tr=document.createElement("tr");
        th = document.createElement("th");
       texto=document.createTextNode("dia");
       th.append(texto);
        tr.append(th);
            for (let i = 0; i < dias.length; i++) {
                var dia = dias[i].getAttribute("fecha");
                dia = new Date(dia);
                tede=document.createElement("td");
        texto2=document.createTextNode(dia.getDate()+"/"+(dia.getMonth()+1)+"/"+dia.getFullYear());
        tede.appendChild(texto2);
        tr.appendChild(tede);
    }
    tabla.append(tr);


            tr=document.createElement("tr");
            th = document.createElement("th");
           texto=document.createTextNode("Máxima");
           th.append(texto);
            tr.append(th);
                for (let i = 0; i < dias.length; i++) {
                    var maxima = dias[i].getElementsByTagName("temperatura")[0].getElementsByTagName("maxima")[0].firstChild.data;
                    tede=document.createElement("td");
            texto2=document.createTextNode(maxima);
            tede.appendChild(texto2);
            tr.appendChild(tede);
        }
        tabla.append(tr);

               
               
                tr=document.createElement("tr");
                th = document.createElement("th");
                texto=document.createTextNode("Mínima");
                th.append(texto);
                tr.append(th);
            
                for (let i = 0; i < dias.length; i++) { 
                    var minima = dias[i].getElementsByTagName("temperatura")[0].getElementsByTagName("minima")[0].firstChild.nodeValue;
                    tede=document.createElement("td");
            texto2=document.createTextNode(minima);
            tede.appendChild(texto2);
            tr.appendChild(tede);
        }
        tabla.append(tr);

            
       
        document.getElementById("miDiv").appendChild(tabla);
    }
    
}

