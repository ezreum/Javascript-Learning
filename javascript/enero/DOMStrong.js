var x=false;
function fuerte() {
    
    if (!x){
        x=true;
        var fuerte = document.createElement("Strong");
    var texto = document.createTextNode(" en negrita");
    fuerte.appendChild(texto);
    document.getElementsByTagName("p")[0].appendChild(fuerte);
    }
}

function parrafo() {
    var p = document.createElement("p");
    var texto = document.createTextNode("un poco de texto");
    p.appendChild(texto);
    var fuerte = document.createElement("Strong");
    var textoF=document.createTextNode(" en negrita");
    fuerte.appendChild(textoF);
    p.appendChild(fuerte);
    document.getElementsByTagName("body")[0].insertBefore(p,document.getElementsByTagName("button")[0]);
}