

function cabeceraText() {
    var entrada = document.getElementsByTagName("input");
    var nombre;
    if (entrada[0].value != 'undefined' && entrada[0].value!='') {
        nombre=entrada[0].value;
        document.getElementsByTagName("select")[0].disabled='';
    }
    else{
        document.getElementsByTagName("select")[0].disabled=true;
        entrada[1].disabled=true;
    }
}

function cabeceraNivel() {
    var info = document.getElementsByTagName("select")[0];
    var res = parseInt(info.value);
    var entrada = document.getElementsByTagName("input");
    if (res != 'undefined' && entrada[0].value!='') {
    entrada[1].disabled=false;
    }
    else{
    entrada[1].disabled=true;
    }
}

function hacerCabeceras() {
    var entrada = document.getElementsByTagName("input");
    var nombre = entrada[0].value;
    var info = document.getElementsByTagName("select")[0].value;
    var cantidad = entrada[1].value;
    if (nombre!='' && info != 'undefined' && cantidad!= 'undefined') {
        for (var numero of cantidad) {
           var caja = document.createElement("input");
           var atrib1 = document.createTextNode("hoooola");
           caja.appendChild(atrib1);
           document.getElementsByTagName("body")[0].insertBefore(caja,document.getElementById("caja"));
        }
        
    }
    else{
        document.getElementById("miDiv").innerHTML="algún dato está mal, por favor revísalo";
    }
}