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

var peticionDos='';
function lanzarAjaxDos() {
	
    if (window.XMLHttpRequest) {
        peticionDos = new XMLHttpRequest();
        respuestaDos();
    }
    else if(window.ActiveXObject){
        
       peticionDos= new ActiveXObject("Microsoft.XMLHTTP");
       respuestaDos();
        
    }
}

function respuesta() {
    var provincia= document.getElementById("provincia").value;
    
    var padre = document.getElementById('poblacion');
    if (padre.options.length>0) {
        for (let i = padre.options.length; i > 0; i--) {
            console.log('aqui');
            padre.options[i] = null;
        }
    } 
    
    var padre2 = document.getElementById('hospital');
    
    
    if ( provincia!=null && provincia != 'undefined' && provincia != '') {
    	
    	peticion.onreadystatechange=consultar;
        peticion.open("POST", window.location.origin+'/Poblacion/sacarPoblaciones');
        peticion.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset:UTF-8");
        peticion.send("provincia="+provincia);
    }
    
}

function respuestaDos() {
    var poblacion= document.getElementById("poblacion").value;
    
    if ( poblacion!=null && poblacion != 'undefined' && poblacion != '') {
        peticion.onreadystatechange=consultarDos;
        peticion.open("POST", window.location.origin+'/Hospital/sacarHospitales');
        peticion.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset:UTF-8");
        peticion.send("poblacion="+poblacion);
    }
    
}

function consultar() {
    
    if (peticion.readyState==4 && peticion.status==200) {
        var res= peticion.responseText;
        var nombres = res.split(',');
        
        var lista = document.getElementById('poblacion');
        lista.name='poblacion';
        lista.onchange=function(){
        	lanzarAjaxDos();
        }
        var poblacion = document.createElement('option');
        poblacion.value='';
        var texto = document.createTextNode('elija la poblacion');
        poblacion.appendChild(texto);
        lista.appendChild(poblacion);
        
        for (var nombre of nombres) {
            var poblacion = document.createElement('option');
            poblacion.value=nombre;
            var texto = document.createTextNode(nombre);
            poblacion.appendChild(texto);
            lista.appendChild(poblacion);
        }
        
    }
    
}

function consultarDos() {
    
    if (peticion.readyState==4 && peticion.status==200) {
        var res= peticion.responseText;
        nombres = res.split(',');
        var padre = document.getElementById('poblacion').parentNode;
        padre.nextSibling.id=='codigos'?padre.parentNode.removeChild(padre.nextSibling):'';
        
        var lista = document.getElementById('hospital');
        lista.name='hospital';
        var codigo = document.createElement('option');
        codigo.value='';
        var texto = document.createTextNode('elija un hospital');
        codigo.appendChild(texto);
        lista.appendChild(codigo);
        for (var nombre of nombres) {
            var codigo = document.createElement('option');
            codigo.value=nombre;
            var texto = document.createTextNode(nombre);
            codigo.appendChild(texto);
            lista.appendChild(codigo);
        }
        
    }
    
}
