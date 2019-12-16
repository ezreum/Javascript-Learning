function hora() {
    var hora= new Date();
    var reloj=hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    document.getElementById("reloj").value=reloj;
}

function empezar() {
    setInterval("hora()",60000);
}
hora();
empezar();