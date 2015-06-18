import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addVenue: function() {
      var newVenue = this.store.createRecord('venue', {
        name: this.get('name'),
        description: this.get('description'),
        mapAddress: this.get('mapAddress'),
        date: new Date()
      });
      newVenue.save();
      this.setProperties({
        name: '',
        description: '',
        mapAddress: ''
      });
      this.transitionToRoute('venue', newVenue.id);
    }
  }
});
