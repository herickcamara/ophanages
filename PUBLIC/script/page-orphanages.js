//craete map
const map = L.map("mapid").setView([-23.6068542, -46.9231096], 15);

// craete and map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// craete icon
const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSizi: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker( {id,name, lat, lng}) {
  //craete and popup overly
  const popup = L.popup({
    closeButton: false,
    classeName: "map-popup",
    minWidth: 240,
    minheight: 240,
  }).setContent(
    `${name} <a href="/orphanege?id=${id}"><img src="./images/arrow-white.svg"></a>`
  );

  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanegeSpan = document.querySelectorAll(".orphanege span");
orphanegeSpan.forEach((span) => {
  const orphanege = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };
  addMarker(orphanege)
});
