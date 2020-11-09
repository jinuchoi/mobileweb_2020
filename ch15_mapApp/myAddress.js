function getMapAddress() {
  var geocoder = new google.maps.Geocoder();
  var myAddress = $('#addrSearch').val();
  geocoder.geocode( {'address': myAddress}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
          var latlng = results[0].geometry.location;
          $('#mapArea2').gmap('destroy');
          $('#mapArea2').gmap({'center': latlng, 'zoom': 15});             
          $('#mapArea2').gmap('addMarker', {'position': latlng}).click(function() {
              $('#mapArea2').gmap('openInfoWindow', {'content' : results[0].formatted_address + '위치'}, this);
           });               
      } else {
          alert('실패 : ' + status);
      }
  });
}



