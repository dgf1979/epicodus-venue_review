import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addVenue: function() {
      var newVenue = this.store.createRecord('venue', {
        name: this.get('name'),
        review: this.get('review'),
        date: new Date()
      });
      newVenue.save();
      this.setProperties({
        name: '',
        review: ''
      });
    }
  }
});
