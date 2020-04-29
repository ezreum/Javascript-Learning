function verLocalizacion() {
    if (navigator.geolocation) {
        console.log("probamos geolocalización");
        navigator.geolocation.getCurrentPosition(hacerCosas);

    } else {
        console.log("¡error!");
    }
}

function hacerCosas(info) {
        var x = info.coords.latitude+"/"+info.coords.longitude;
        x = x.split("/");
        alert(x[0]+" "+x[1]);
        recibirDatos(x);
        //console.log(info.coords);
        document.getElementsByTagName("input")[0].name=x;
        //document.getElementsByTagName("form")[0].submit();
        
        window.open("https://maps.google.com/?q="+x[0]+','+x[1],"_blank");
}

function recibirDatos(x) {
   
    if (window.XMLHttpRequest) {
        peticion = new XMLHttpRequest();
        respuesta(x);
    }
    else if(window.ActiveXObject){
        
        peticion= new ActiveXObject("Microsoft.XMLHTTP");
       respuesta(x);
        
    }
}

function respuesta(x) {
        var ran = Math.random()
        peticion.onreadystatechange=consultar;
        peticion.open("GET", "http://www.geoplugin.net/extras/postalcode.gp?lat="+x[0]+"&lon="+x[1]+"&format=json&num="+ran, true);
        peticion.send(null);
    }
    

function consultar() {
    
    if (peticion.readyState==4 && peticion.status==200) {
        var res= JSON.parse(peticion.responseText);
        document.getElementsByTagName("div")[0].innerHTML +="Ciudad: " + res["geoplugin_place"] + " Código Postal : " + res["geoplugin_postCode"];
    }
    
}
