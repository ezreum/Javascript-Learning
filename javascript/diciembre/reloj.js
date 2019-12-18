function hora() {
    var hora= new Date();
    var reloj=hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    document.getElementById("reloj").value=reloj;
}

function empezar() {
    setInterval("hora()",30000);
}
hora();
empezar();