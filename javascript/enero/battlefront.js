function cortarLista(miform, boton) {
    //clasificacion
    var selector = boton.name;
    var seleccion=selector=="temp"?miform.temporal:miform.permanente;
    
     //buscamos el no seleccionado
    var noSeleccion = boton.name=="temp"?miform.permanente:miform.temporal;
    
    for (let i = 0; i < seleccion.options.length; i++) {
        var tamano = noSeleccion.options.length;
        var opt = new Option(seleccion[i].text,seleccion[i].value,"","");
        seleccion[i].selected==''?'':(noSeleccion[tamano]= opt) && (seleccion[i]=null);
        var tamano = noSeleccion.options.length;
    }
    
   
     
    /* var tamano = noSeleccion.options.length;
    for (let i = 0; i < seleccionados.length; i++) {
        document.getElementById("midiv").innerHTML+= seleccionados[i].name
        var opt = new Option(seleccionados[i].name,seleccionados[i].value,"","");
        noSeleccion[tamano]= opt;
    }  */

}

function cortarTodo(miform) {
    
}
function entrar(miform) {
    var introducir = miform.introducir.value;
    var select = miform.temporal;
    var tamano = miform.temporal.options.length;
    var opt = new Option(introducir,introducir,"","");
    miform.temporal[tamano] = opt;
    miform.introducir.onkeyup();
}
function check(miform) {
    var tamano = (miform.temporal.options.length - 1);
    if (miform.introducir.value==''||miform.introducir.value==miform.temporal.options[tamano].value) {
        miform.iniciar.disabled=true;
    }
    else{
        miform.iniciar.disabled=false;
    }
}