var map = L.map('map').setView([51.574349, -1.310892], 17);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.attributionControl.addAttribution('<a href="https://www.diamond.ac.uk">Diamond Light Source</a>');