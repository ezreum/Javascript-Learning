
function validar(miForm){
    var bo=false;
    if ( validarNombre() && validarTelefono() && validarHora() ) {
        bo=true;
    }


    if (bo) {
        document.getElementById("res").innerHTML='Se validó bien';
        document.getElementById("err").innerHTML='';
    } else {
        document.getElementById("err").innerHTML='No se valido correctamente';
        document.getElementById("res").innerHTML='';
    }
}

function validarNombre() {
    var check=false;
    var nombre = miForm.nombre.value;
    if (nombre.length>2 && nombre.length<30) {
        var reg=/^[a-zA-Záéíóúçñ ]*$/;
        if (reg.test(nombre)) { 
            check=true;
        } 
    }
    
    return check;
}

function validarTelefono() {
    var check=false;
    var telefono = document.miForm.telefono.value;
    var reg=/^[9|8|7|6]\d{8}$/;
    if (reg.test(telefono)) { 
        check=true;
    }
    return check;
}

function validarHora() {
    var check=false;
    var reloj = document.miForm.reloj.value;
    var reg=/^\d{2}:\d{2}:\d{2}$/;
    console.log(reg.test(reloj));
    if (reg.test(reloj)) { 
        check=true;
    }
    return check;
}