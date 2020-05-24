function verLocalizacion() {
    var mymap = L.map('map').setView([0, 0], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicGVkcm9jYWJyZXJvIiwiYSI6ImNrYWRvcHozaDBicjgzMm1iY2dxMGNtYzMifQ.MlPdUtC3w0JZqMNBluxkvA'
}).addTo(mymap);
    var latlng = L.latLng(40.4278105, -3.5509173);
    mymap.panTo(latlng)
}
