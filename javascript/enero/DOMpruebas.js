function indicarCabecera(textoCabecera) {
    var texto = textoCabecera.innerHTML;
    var pos= texto.lastIndexOf(".");
    var clasificacion = texto.substr((pos-1),4);
    posicion = clasificacion.substr(2,2);
    posicion=posicion-1;
    
    if ( clasificacion.charAt(0)=="1" ) {
         if ( isNaN(texto.charAt(0)) ) {
            console.log("en el if "+ texto.charAt(0));
            document.getElementsByTagName("h1")[posicion].innerHTML=(posicion+1)+". "+document.getElementsByTagName("h1")[posicion].innerHTML;
        }
        else{
            texto.charAt(texto.length-1)=='o'?'':document.getElementsByTagName("h1")[posicion].innerHTML= document.getElementsByTagName("h1")[posicion].innerHTML+" ha sido ya pinchado";
                } 
    } else {
        if ( isNaN(texto.charAt(0)) ) {
            document.getElementsByTagName("h2")[posicion].innerHTML=(posicion+1)+". "+document.getElementsByTagName("h2")[posicion].innerHTML;
        }
        else{
            texto.charAt(texto.length-1)=='o'?'':document.getElementsByTagName("h2")[posicion].innerHTML= document.getElementsByTagName("h2")[posicion].innerHTML+" ha sido ya pinchado";
                } 
        
    }
}
function normalizar(textoCabecera) {
    var texto = textoCabecera.innerHTML;
    var pos= texto.lastIndexOf(".");
    var clasificacion = texto.substr((pos-1),4);
    posicion = clasificacion.substr(2,2);
    posicion=posicion-1;
    
    if ( clasificacion.charAt(0)=="1" ) {
         if ( texto.charAt(0) >= '0' && texto.charAt(0) <= '9' ) {
            document.getElementsByTagName("h1")[posicion].innerHTML=texto.substr(3,22);
        }
        else{
            document.getElementsByTagName("h1")[posicion].innerHTML=texto.substr(0,22);
        }
    } else {
        if ( texto.charAt(0) >= '0' && texto.charAt(0) <= '9' ) {
            document.getElementsByTagName("h2")[posicion].innerHTML=texto.substr(3,22);
        }
        else{
            document.getElementsByTagName("h2")[posicion].innerHTML=texto.substr(0,22);
        } 
        
    }
}

function addExt() {
    var listas=document.getElementsByTagName("ol");
    document.getElementsByTagName("ol")[0].innerHTML+="<li>Nuevo elemento</li>";
}

function addInt() {
    var listas=document.getElementsByTagName("ol");
    document.getElementsByTagName("ol")[1].innerHTML+="<li>Nuevo elemento</li>";
    document.getElementsByTagName("ol")[2].innerHTML+="<li>Nuevo elemento</li>";
}