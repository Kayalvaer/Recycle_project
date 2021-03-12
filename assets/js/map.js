/**
 * This map modal allows for users to click marked locations on the provided map.
 * Each map marker, when clicked, displays the name of the location.
 * The code here also shows for map markers of the area.
 * together in a cluster automatically, displaying service density to the user.
 **/

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {
            lat: 59.835236,
            lng: 10.432976,
        }
    });
    const infoWin = new google.maps.InfoWindow();
    const markers = locations.map(function (location, i) {
        const marker = new google.maps.Marker({
            position: location
        });
        google.maps.event.addListener(marker, 'click', function (evt) {
            infoWin.setContent(location.info);
            infoWin.open(map, marker);
        })
        return marker;
    });
    const markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
const locations = [{
        lat: 59.890250,
        lng: 10.525500,
        info: `Fornebu, Baerum Kommune`,
    },
    {
        lat: 59.835236,
        lng: 10.432976,
        info: `Asker, Norway`,
    },
    {
        lat: 59.911491,
        lng: 10.757933,
        info: `Oslo, Norway`,
    },

];