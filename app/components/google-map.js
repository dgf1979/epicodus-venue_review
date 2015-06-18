import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {

    var address = "1037 SW Broadway Portland, OR 97205";
    // var address = this.get('address');
    var mapDiv = this.$('.map-canvas')[0];
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {

      debugger;

      if (status === google.maps.GeocoderStatus.OK) {
        var options = {
            center: new window.google.maps.LatLng(
                results[0].geometry.location.lat(),
                results[0].geometry.location.lng()
            ),
            zoom: 15
        };
        var map = new window.google.maps.Map(mapDiv, options);

        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });

      } else {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  }.on('didInsertElement')

});
