import Ember from 'ember';

export default Ember.Component.extend({
  insertMap: function() {
    var lat = this.get('latitude');
    var long = this.get('longitude');

    var options = {
        center: new window.google.maps.LatLng(
            lat,
            long
        ),
        zoom: 15
    };
    var map = new window.google.maps.Map(this.$('.map-canvas')[0], options);
    var address = "1037 SW Broadway Portland, OR 97205";

    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    })
  }.on('didInsertElement')

});
