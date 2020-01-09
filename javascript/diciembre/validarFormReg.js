
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
    var reg=/^(\d{2}|\d{1}):(\d{2}|\d{1}):(\d{2}|\d{1})$/;
    var reg2=/^([01][0-9]|[2][0-3]):([0-5][0-9]){2}$/;
    console.log(reg.test(reloj));
    if (reg.test(reloj)) { 
        check=true;
    }
    return check;
}

function validarMatricula(miForm) {
    var check = false;
    var matricula = miForm.matricula.value.toUpperCase();
    var reg = /^\d{4}[B-DF-HJ-NPR-TV-Z]{3}$/;
    console.log(reg.test(matricula));
    if (reg.test(matricula)){
        document.getElementById("res").innerHTML='Se validó bien';
        document.getElementById("err").innerHTML='';
    }
    else{
        document.getElementById("res").innerHTML='';
        document.getElementById("err").innerHTML='No se validó bien';
    }
}

function validarEmail(miForm) {
    var email = miForm.email.value;
    var reg = /^[a-zA-Z0-9]{3,}([a-zA-Z._-]?[a-zA-Z0-9])*@[a-zA-Z0-9]{2,30}\.[a-z]{2,}$/;
    console.log(reg.test(email));
    if (reg.test(email)){
        document.getElementById("res").innerHTML='Se validó bien';
        document.getElementById("err").innerHTML='';
    }
    else{
        document.getElementById("res").innerHTML='';
        document.getElementById("err").innerHTML='No se validó bien';
    }
}

function validarFecha(miForm) {
    var fecha = miForm.fecha.value;
    var fechita = new Date();
    fechita = fechita.getFullYear(); 
    var reg = /^([1-2][0-9]|[3][0-1])\/([0-9]|[1][0-2])\/[1-2020]$/;
    console.log(reg.test(fecha));
    if (reg.test(fecha)){
        document.getElementById("res").innerHTML='Se validó bien';
        document.getElementById("err").innerHTML='';
    }
    else{
        document.getElementById("res").innerHTML='';
        document.getElementById("err").innerHTML='No se validó bien';
    }
}