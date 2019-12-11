var alfanumerico="abcdefghijklmnñopqrstuvwxyzáéíóúç ";
var numerico="0123456789";
var pos=0;
function validar(col){
    var bo=false;
    if ( validarNombre() && validarApellido() && validarEdad() ) {
        bo=true;
    }

    var x;
    if (bo) {
        if (col=='rojo') {
            var i=0;
            for (var elemento of document.miForm.elements) {
                document.miForm.elements[i].type=="text"?document.miForm.elements[i].style.color ="red":
                document.miForm.elements[i].style.color ="green";
              i++;
            }

        }
        if (col=='azul') {
            var i=0;
            for (var elemento of document.miForm.elements) {
                document.miForm.elements[i].type=="text"?document.miForm.elements[i].style.color ="blue":
                document.miForm.elements[i].style.color ="black";
              i++;
            }

        }

        if (col=='habilitar') {
            var i=0;
            for (var elemento of document.miForm.elements) {
                document.miForm.elements[i].type=="text"?
                document.miForm.elements[i].disabled ="":'';
              i++;
            }
        }

        if (col=='deshabilitar') {
            var i=0;
            for (var elemento of document.miForm.elements) {
                document.miForm.elements[i].type=="text"?
                document.miForm.elements[i].disabled="true":'';
              i++;
            }
        }

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

function validarApellido() {
    var check=false;
    var apellido = document.miForm.apellido.value;
    apellido = apellido.toLowerCase();
    if ( ((apellido!='')&&(apellido!=undefined)&&(apellido!=null)) ) {
        if ( (apellido.length>0) && (apellido.length<25) ) {
        var i=0;
        do {
            pos=alfanumerico.indexOf(apellido.charAt(i));
            check = pos==-1?false:true;
            i++;
        } while (i < (apellido.length-1) && pos!=-1 );
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