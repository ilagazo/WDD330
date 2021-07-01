document.querySelector('#requestLocation').addEventListener('click', getLocation);
document.querySelector('#requestQuery').addEventListener('click', getQuery);

function getLocation() {
    // Initialize variables for Google URL & user's current location
    const currentLocation = document.querySelector('#currentLocation');
    const googleURL = document.querySelector('#google-map-link-1');

    googleURL.href = '';
    googleURL.textContent = '';

    // If the User gives location then do this
    function success(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        currentLocation.textContent = '';
        googleURL.href = `https://www.google.com/maps/@${lat},${long}`;
        googleURL.textContent = `Latitude: ${lat} °, Longitude: ${long} °`;
    }

    // Handles the errors that may occur
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                currentLocation.textContent = "User has denied access. Unable to retrieve your location."
                break;
            case error.POSITION_UNAVAILABLE:
                currentLocation.textContent = "Position information is unavailable. Please try again"
                break;
            case error.TIMEOUT:
                currentLocation.textContent = "Request to retrieve user's location has timed out. Please get a better CPU"
                break;
            case error.UNKNOWN_ERROR:
                currentLocation.textContent = "Unknown error. Please try again"
                break;
        }
    }

    // Controller for success or error functions
    if(!navigator.geolocation) {
        currentLocation.textContent = "Geolocation API is not supported by the current browser.";
    } else {
        currentLocation.textContent = "Locating Search Query...";
        navigator.geolocation.getCurrentPosition(success, showError);
    }
}

function getQuery() {
    // Initialize variables for Google URL & user's current location
    const currentLocation = document.querySelector('#queryLocation');
    const googleURL = document.querySelector('#google-map-link-2');
    const query = document.querySelector('#searchQuery').value;

    // TODO
    if(query === "") {
        currentLocation.textContent = "No Search Query Made."
    }

    googleURL.href = '';
    googleURL.textContent = '';

    // If the User gives location then do this
    function success(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        currentLocation.textContent = '';
        googleURL.href = `https://www.google.com/maps/search/${query}/@${lat},${long}`;
        googleURL.textContent = `Latitude: ${lat} °, Longitude: ${long} °, Search Query: ${query}`;
    }

    // Handles the errors that may occur
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                currentLocation.textContent = "User has denied access. Unable to retrieve your location."
                break;
            case error.POSITION_UNAVAILABLE:
                currentLocation.textContent = "Position information is unavailable. Please try again"
                break;
            case error.TIMEOUT:
                currentLocation.textContent = "Request to retrieve user's location has timed out. Please get a better CPU"
                break;
            case error.UNKNOWN_ERROR:
                currentLocation.textContent = "Unknown error. Please try again"
                break;
        }
    }

    // Controller for success or error functions
    if(!navigator.geolocation) {
        currentLocation.textContent = "Geolocation API is not supported by the current browser.";
    } else {
        currentLocation.textContent = "Locating Search Query...";
        navigator.geolocation.getCurrentPosition(success, showError);
    }
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }