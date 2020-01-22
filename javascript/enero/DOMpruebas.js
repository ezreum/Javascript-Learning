function indicarCabecera(textoCabecera) {
    var texto = textoCabecera.innerHTML;

    var pos= texto.indexOf(".");
    var clasificacion = texto.substr((pos-1),4);
    posicion = clasificacion.substr(2,2);
    posicion=posicion-1;
    if ( clasificacion.charAt(0)=="1" ) {
        document.getElementsByTagName("h1")[posicion].innerHTML=(posicion+1)+". "+document.getElementsByTagName("h1")[posicion].innerHTML;
        

    } else {
        document.getElementsByTagName("h2")[posicion].innerHTML=(posicion+1)+". "+document.getElementsByTagName("h2")[posicion].innerHTML;
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    


}