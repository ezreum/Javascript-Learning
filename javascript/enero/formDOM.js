

function cabeceraNivel() {
    var info = document.getElementsByTagName("select")[0];
    var res = parseInt(info.value);
    var entrada = document.getElementsByTagName("input");
    if (res != 'undefined') {
    entrada[0].disabled=false;
    }
    else{
    entrada[0].disabled=true;
    }
}

function hacerCabeceras() {
    var entrada = document.getElementsByTagName("input");
    var info = document.getElementsByTagName("select")[0].value;
    var cantidad = entrada[0].value;
    if (info != 'undefined' && cantidad!= 'undefined') {
            var etiqueta = document.createElement("label");
            var text= document.createTextNode("nombre cabecera");
            etiqueta.appendChild(text);
            var caja = document.createElement("input");
           caja.type="text";
           caja.onchange=function () {
            cabecera(this, etiqueta, cantidad);
        }
           document.getElementsByTagName("body")[0].insertBefore(etiqueta,document.getElementById("cabeceras"));
           document.getElementsByTagName("body")[0].insertBefore(caja,document.getElementById("cabeceras"));
        
    }
    else{
        document.getElementById("miDiv").innerHTML="algún dato está mal, por favor revísalo";
    }
}
var i=0;
function cabecera(caja, etiqueta, cantidad) {
    var nombre = caja.value;
    var info = document.getElementsByTagName("select")[0].value;
    
       
        if (nombre!='undefined' && nombre !='' && i < cantidad) {
            var cabecera = document.createElement("h"+info+"");
            var text = document.createTextNode(nombre);
            cabecera.appendChild(text);
            document.getElementsByTagName("body")[0].appendChild(cabecera);
            
            i++;
        }  
        else {
            etiqueta.parentNode.removeChild(etiqueta);
            caja.parentNode.removeChild(caja);
        }

    
    
}