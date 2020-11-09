function getMyLocation() {
    var posOption = {maximumAge: 3000, timeout: 50000, enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, posOption);
}

function onSuccess(position) {
    $('#box1').html("위도 : " 
        + position.coords.latitude + "<br/>"
        + "경도 : " + position.coords.longitude);
    loadGoogleMap(position.coords.latitude, position.coords.longitude);
}

function onError(posError) {
    alert('Error Code : ' + posError.code + ' / Error Message : ' + posError.message);    
}

function loadGoogleMap(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    $('#mapArea1').gmap('destroy');
    $('#mapArea1').gmap({'center': latlng, 'zoom': 15});
    $('#mapArea1').gmap('addMarker', {'position': latlng}).click(function() {
        $('#mapArea1').gmap('openInfoWindow', {'content': '현재 위치'}, this);
    });
}


