var alfanumerico="abcdefghijklmnñopqrstuvwxyzáéíóúç ";
var numerico="0123456789";
var pos=0;
function validar(){
    var bo=false;
    if ( validarNombre() && validarEdad() ) {
        bo=true;
    }


    if (bo) {
        document.miForm.submit();
    } else {
        document.forms[0].innerHTML+="<hr/><label>no se validó correctamente</label>"
    }
}

function validarNombre() {
    var check=false;
    var nombre = document.miForm.nombre.value;
    nombre = nombre.toLowerCase();
    if ( ((nombre!='')&&(nombre!=undefined)&&(nombre!=null)) ) {
        if ( (nombre.length>0) && (nombre.length<25) ) {
        var i=0;
        do {
            pos=alfanumerico.indexOf(nombre.charAt(i));
            check = pos==-1?false:true;
            i++;
        } while (i < (nombre.length-1) && pos!=-1 );
        }
    } else {
    }
    return check;
}

function validarEdad() {
    var check=false;
    var edad = document.miForm.edad.value;
    if ( ((edad!='')&&(edad!=undefined)&&(edad!=null)&&(edad!=isNaN()) ) ) {
        if ( (edad>0) && (edad<125) ) {
        var i=0;
        do {
            pos=numerico.indexOf(edad.charAt(i));
            check = pos==-1?false:true;
            i++;
        } while (i < (edad.length-1) && pos!=-1 );
        }
    } else {
    }
    return check;
}