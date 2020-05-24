var peticion="";


function lanzarAjax() {
    if (window.XMLHttpRequest) {
        peticion = new XMLHttpRequest();
        respuesta();
    }
    else if(window.ActiveXObject){
        
        peticion= new ActiveXObject("Microsoft.XMLHTTP");
       respuesta();
        
    }
}

function respuesta() {
    var provincia= document.getElementById("provincia").value;
    if ( provincia!=null && provincia != 'undefined' && provincia != '') {
        peticion.onreadystatechange=consultar;
        peticion.open("POST", window.location.origin+'/Hospital/sacarHospitales');
        peticion.setRequestHeader("Content-type","application/x-www-form-urlencoded; charset:UTF-8");
        peticion.send("provincia="+provincia);
    }
    
}

function consultar() {
    
    if (peticion.readyState==4 && peticion.status==200) {
        var res= peticion.responseText;
        for (var hospital of res) {
            console.log(hospital);
        }
    }
    
}