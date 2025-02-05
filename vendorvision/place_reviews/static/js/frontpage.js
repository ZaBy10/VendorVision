let map, marker, selectedLocation = null;

// Initialize the map
function initMap() {
    const defaultLocation = { lat: 12.9716, lng: 77.5946 }; // Bangalore

    map = new google.maps.Map(document.getElementById("map"), {
        center: defaultLocation,
        zoom: 10,
    });

    map.addListener("click", (event) => {
        const clickedLocation = event.latLng;
        selectedLocation = {
            lat: clickedLocation.lat(),
            lng: clickedLocation.lng(),
        };

        if (marker) {
            marker.setPosition(clickedLocation);
        } else {
            marker = new google.maps.Marker({
                position: clickedLocation,
                map: map,
            });
        }

        updateLocationDetails(selectedLocation);
    });
}

function updateLocationDetails(location) {
    document.getElementById("display-lat").innerHTML = `Latitude: <span class="highlight">${location.lat.toFixed(6)}</span>`;
    document.getElementById("display-lng").innerHTML = `Longitude: <span class="highlight">${location.lng.toFixed(6)}</span>`;
    
    // Update hidden form fields
    document.getElementById("latitude").value = location.lat;
    document.getElementById("longitude").value = location.lng;
}

// Form submission handler
document.getElementById("analysisForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    
    try {
        const response = await fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
            }
        });

        if (response.ok) {
            const data = await response.json();
            window.location.href = data.redirect_url;
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});