let map;
let selectedStore = null;

function initMap() {
    // Default map options
    const options = {
        center: { lat: 12.9716, lng: 77.5946 }, // Default to Bangalore
        zoom: 12
    };
    map = new google.maps.Map(document.getElementById('map'), options);

    google.maps.event.addListener(map, 'click', function(event) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        displayCoordinates(lat, lng);
    });
}

function displayCoordinates(lat, lng) {
    document.getElementById('display-lat').innerHTML = `Latitude: <span class="highlight">${lat}</span>`;
    document.getElementById('display-lng').innerHTML = `Longitude: <span class="highlight">${lng}</span>`;
    document.getElementById('store-selected').innerHTML = `Store selected at Lat: ${lat}, Lng: ${lng}`;
}

// Event listener for the Analyze button
document.getElementById('analyze-button').addEventListener('click', function() {
    alert('Analyze button clicked!');
});
