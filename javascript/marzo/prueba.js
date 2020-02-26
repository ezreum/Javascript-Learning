function check() {
    var reg=/^[6|7]\d{8}$/;
    var telefono = document.getElementsByTagName("input")[0].value.trim();
    
    if (reg.test(telefono)) {
        document.getElementById("miDiv").innerHTML=telefono;
        document.getElementById("miDiv").innerHTML+="<br/>"+document.getElementsByTagName("input")[0].nodeType;
    } else{
        document.getElementById("miDiv").innerHTML="introduce un telefono válido por favor";
    }
}

function checkMat() {
    var reg=/^\d{4}[B-DF-HJ-NP-TV-Z]{3}$/;
    var mat = document.getElementsByTagName("input")[1].value.trim().toUpperCase();
    
    if (reg.test(mat)) {
        document.getElementById("miDiv").innerHTML=mat;
    } else{
        document.getElementById("miDiv").innerHTML="introduce una matrícula válida por favor";
    }
}

function checkDate() {
    var reg=/^([1-2][0-9]|[3][0-1])\/[0-1][0-9]\/[1-2][0-9]{3}$/;
    var fecha = document.getElementsByTagName("input")[2].value.trim();

    if (reg.test(fecha)) {
        document.getElementById("miDiv").innerHTML=fecha;
    } else{
        document.getElementById("miDiv").innerHTML="introduce una fecha válida por favor";
    }
}

function dale() {
    var nodete = document.createElement("label");
    //nodete.appendChild(document.createTextNode("aaaa"));
    document.getElementsByTagName("body")[0].appendChild(nodete);

}