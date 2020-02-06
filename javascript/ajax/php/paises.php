<?php
$paises = [
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria"
        ];
    
        $respuesta='';
        for($i=0; $i<3; $i++){
        $aleatorio =(rand(1,25))-1;
        $respuesta.=$paises[$aleatorio];
        $respuesta.="#";
        }

        echo $respuesta;
?>