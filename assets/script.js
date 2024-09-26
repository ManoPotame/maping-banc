var map = L.map('map').setView([46.165200, -1.150340], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

datas.forEach(

elementEnCours => {
console.log ("Lieu");
let marker = L.marker([elementEnCours.geometry.coordinates[1], elementEnCours.geometry.coordinates[0]]).addTo(map);
marker.bindPopup("Banc numéro:" + elementEnCours.fields.banc_nbre).openPopup();

}
);


