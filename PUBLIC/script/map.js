const options={
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;
//craete map
const map = L.map('mapid', options).setView([lat,lng], 15);

// craete and map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// craete icon
const icon = L.icon({
    iconUrl:"./images/map-marker.svg",
    iconSizi:[58,68],
    iconAnchor:[29, 68],
    popupAnchor:[170, 2]
})


L
.marker([lat,lng], {icon})
.addTo(map)
