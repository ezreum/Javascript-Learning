

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
    
       
        if ( i == cantidad-1 ) {
            var cabecera = document.createElement("h"+info+"");
            var text = document.createTextNode(nombre);
            cabecera.appendChild(text);
            document.getElementsByTagName("body")[0].appendChild(cabecera);
            etiqueta.parentNode.removeChild(etiqueta);
            caja.parentNode.removeChild(caja);
            i=0;
        }  
        else if(nombre!='undefined' && nombre !='' && i < cantidad){
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

function doBoxes() {
    
    var entrada = document.getElementsByTagName("div")[1].firstElementChild.nextElementSibling;
    var cantidad = entrada.value;
    
     if ( cantidad!= 'undefined' && cantidad !='' ) {
            var etiqueta = document.createElement("label");
            var text= document.createTextNode("escribe el nombre de la etiqueta para la caja");
            etiqueta.appendChild(text);
            var caja = document.createElement("input");
           caja.type="text";
           caja.onchange=function () {
            boxes(this, etiqueta, cantidad);
        }
           document.getElementsByTagName("body")[0].insertBefore(etiqueta,document.getElementsByTagName("div")[2]);
           document.getElementsByTagName("body")[0].insertBefore(caja,document.getElementsByTagName("div")[2]);
        
    }
    else{
        document.getElementById("miDiv").innerHTML="algún dato está mal, por favor revísalo";
    } 

}

var x=0;
function boxes(caja, etiqueta, cantidad) {
        if ( x == cantidad-1 ) {
            var etiqu= document.createElement("label");
            var text= document.createTextNode(caja.value);
            etiqu.appendChild(text);
            var box = document.createElement("input");
            box.type="text";
            document.getElementsByTagName("body")[0].appendChild(etiqu);
            document.getElementsByTagName("body")[0].appendChild(box);
            etiqueta.parentNode.removeChild(etiqueta);
            caja.parentNode.removeChild(caja);
            x=0;
        }  
        else if(cantidad!='undefined'  && x < cantidad){
            var etiqu= document.createElement("label");
            var text= document.createTextNode(caja.value);
            var salto=document.createElement("br");
            etiqu.appendChild(text);
            var box = document.createElement("input");
            box.type="text";
            document.getElementsByTagName("body")[0].appendChild(etiqu);
            document.getElementsByTagName("body")[0].appendChild(box);
            x%2!=0?document.getElementsByTagName("body")[0].appendChild(salto):'';
            x++;
            
        }
        else {
            etiqueta.parentNode.removeChild(etiqueta);
            caja.parentNode.removeChild(caja);
        }
}


function preChecks() {
    var entrada = document.getElementsByTagName("div")[3].firstElementChild.nextElementSibling;
    var cantidad = entrada.value;
    
     if ( cantidad!= 'undefined' && cantidad !='' ) {
            var etiqueta = document.createElement("label");
            var text= document.createTextNode("escribe el valor del checkbox");
            etiqueta.appendChild(text);
            var caja = document.createElement("input");
           caja.type="text";
           var salto=document.createElement("br");
            document.getElementsByTagName("body")[0].appendChild(salto);
           caja.onchange=function () {
            doCheck(this, etiqueta, cantidad);
        }
           document.getElementsByTagName("body")[0].insertBefore(etiqueta,document.getElementsByTagName("div")[4]);
           document.getElementsByTagName("body")[0].insertBefore(caja,document.getElementsByTagName("div")[4]);
        
    }
    else{
        document.getElementById("miDiv").innerHTML="algún dato está mal, por favor revísalo";
    } 

}

var z;
function doCheck(caja, etiqueta, cantidad) {
    
     z==undefined?z=0:'';
     
          if ( z == cantidad-1 ) {
            var etiqu= document.createElement("label");
            var text= document.createTextNode(caja.value);
            etiqu.appendChild(text);
            var box = document.createElement("input");
            box.type="checkbox";
            box.value=caja.value;
            box.name=caja.value
            document.getElementsByTagName("body")[0].appendChild(etiqu);
            document.getElementsByTagName("body")[0].appendChild(box);
            etiqueta.parentNode.removeChild(etiqueta);
            caja.parentNode.removeChild(caja);
            z=0;
        }  
        else if(cantidad!='undefined'  && z < cantidad){
            var etiqu= document.createElement("label");
            var text= document.createTextNode(caja.value);
            var salto=document.createElement("br");
            etiqu.appendChild(text);
            var box = document.createElement("input");
            box.type="checkbox";
            box.value=caja.value;
            box.name=caja.value
            document.getElementsByTagName("body")[0].appendChild(etiqu);
            document.getElementsByTagName("body")[0].appendChild(box);
            z++;
        }
        else {
            etiqueta.parentNode.removeChild(etiqueta);
            caja.parentNode.removeChild(caja);
        } 

}

function preRadio() {
    var entrada = document.getElementsByTagName("div")[2].firstElementChild.nextElementSibling;
    var cantidad = entrada.value;
    
     if ( cantidad!= 'undefined' && cantidad !='' ) {
            var etiqueta = document.createElement("label");
            var text= document.createTextNode("escribe el valor del radio");
            etiqueta.appendChild(text);
            var caja = document.createElement("input");
           caja.type="text";
           var salto=document.createElement("br");
            document.getElementsByTagName("body")[0].appendChild(salto);
           caja.onchange=function () {
            doRadios(this, etiqueta, cantidad);
        }
           document.getElementsByTagName("body")[0].insertBefore(etiqueta,document.getElementsByTagName("div")[3]);
           document.getElementsByTagName("body")[0].insertBefore(caja,document.getElementsByTagName("div")[3]);
        
    }
    else{
        document.getElementById("miDiv").innerHTML="algún dato está mal, por favor revísalo";
    } 

}

var y;
function doRadios(caja, etiqueta, cantidad) {
    x==undefined?x=0:'';
     y==undefined?y=0:'';
     var nombre = "radio"+y;
          if ( x == cantidad-1 ) {
            var etiqu= document.createElement("label");
            var text= document.createTextNode(caja.value);
            etiqu.appendChild(text);
            var box = document.createElement("input");
            box.type="radio";
            box.value=caja.value;
            box.name=nombre;
            document.getElementsByTagName("body")[0].appendChild(etiqu);
            document.getElementsByTagName("body")[0].appendChild(box);
            etiqueta.parentNode.removeChild(etiqueta);
            caja.parentNode.removeChild(caja);
            y++;
            x=0;
        }  
        else if(cantidad!='undefined'  && x < cantidad){
            var etiqu= document.createElement("label");
            var text= document.createTextNode(caja.value);
            var salto=document.createElement("br");
            etiqu.appendChild(text);
            var box = document.createElement("input");
            box.type="radio";
            box.value=caja.value;
            box.name=nombre;
            document.getElementsByTagName("body")[0].appendChild(etiqu);
            document.getElementsByTagName("body")[0].appendChild(box);
            x++;
        }
        else {
            etiqueta.parentNode.removeChild(etiqueta);
            caja.parentNode.removeChild(caja);
        } 

}

function botonNivel() {
    var info = document.getElementsByTagName("select")[1];
    var res = parseInt(info.value);
    var entrada = document.getElementsByTagName("div");
    if (res != 'undefined') {
    entrada[4].lastElementChild.disabled=false;
    }
    else{
    entrada[4].lastElementChild=true;
    }
}

function hacerBotones() {
    var entrada = document.getElementsByTagName("div");
    var info = document.getElementsByTagName("select")[1].value;
    var cantidad = entrada[4].lastElementChild.value;
    if (info != 'undefined' && cantidad!= 'undefined') {
            var etiqueta = document.createElement("label");
            var text= document.createTextNode("texto del boton");
            etiqueta.appendChild(text);
            var caja = document.createElement("input");
           caja.type=text;
           caja.onchange=function () {
            boton(this, etiqueta, cantidad);
        }
           document.getElementsByTagName("body")[0].insertBefore(etiqueta,document.getElementsByTagName("div")[5]);
           document.getElementsByTagName("body")[0].insertBefore(caja,document.getElementsByTagName("div")[5]);
        
    }
    else{
        document.getElementById("miDiv").innerHTML="algún dato está mal, por favor revísalo";
    }
}
var e=0;
function boton(caja, etiqueta, cantidad) {
    var nombre = caja.value;
    var info = document.getElementsByTagName("select")[1].value;
    
       
        if ( e == cantidad-1 ) {
            var boton = document.createElement("input");
            boton.type=info;
            boton.value=nombre;
            document.getElementsByTagName("body")[0].appendChild(boton);
            etiqueta.parentNode.removeChild(etiqueta);
            caja.parentNode.removeChild(caja);
            i=0;
        }  
        else if(nombre!='undefined' && nombre !='' && e < cantidad){
            var boton = document.createElement("input");
            boton.type=info;
            boton.value=nombre;
            document.getElementsByTagName("body")[0].appendChild(boton);
            e++;
            
        }
        else {
            etiqueta.parentNode.removeChild(etiqueta);
            caja.parentNode.removeChild(caja);
        }

    
    
}