function getMyRoute() {
    var start = $('#start').val();
    var end = $('#end').val();
    var mode = 'TRANSIT'           
    var request = {
        origin:start,
        destination:end,
        travelMode: eval('google.maps.DirectionsTravelMode.'+mode)
    };        
    
    $('#mapArea3').gmap('displayDirections', request, function(result, status) {
        if ( status == 'OK' ) {
            alert('성공');
        } else {
            alert('실패 : ' + status);
        }        
    });
}




