var alfanumerico="abcdefghijklmnñopqrstuvwxyzáéíóúç ";
var numerico="0123456789";
var pos=0;
function validar(miForm){
    var bo=false;
    if ( validarNombre() && validarEdad() ) {
        bo=true;
    }


    if (bo) {
        document.getElementById("res").innerHTML='Se validó bien';
    } else {
        miForm.innerHTML+="<hr/><label>no se validó correctamente</label>"
    }
}

function validarNombre() {
    var check=false;
    var nombre = miForm.nombre.value;
    var reg=/^[a-z]*$/;
    console.log(reg.test(nombre));
    if (reg.test(nombre)) { 
        check=true;
    }
    return check;
}

function validarEdad() {
    var check=true;
    var edad = document.miForm.telefono.value;
    
    return check;
}