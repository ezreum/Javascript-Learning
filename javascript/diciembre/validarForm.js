var alfanumerico="abcdefghijklmnñopqrstuvwxyzç ";
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
console.log(nombre);
    if ( ((nombre=!'')&&(nombre!=undefined)&&(nombre!=null)) ) {
        console.log(nombre.length); //TODO!
        if ( (nombre.length>0) && (nombre.length<25) ) {
        var i=0;
        console.log("aquí");

        do {
            pos=alfanumerico.indexOf(nombre.charAt(i));
            check = pos==-1?false:true;
            
            i++;
        } while (i < (nombre.length-1) || pos!=-1 );
        document.miForm.innerHTML+="<hr/><label>"+check+"</label>"
        }
    } else {
        
    }
    return check;
}

function validarEdad() {
    var edad = document.miForm.edad.value;
    return true;
}