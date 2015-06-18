import Ember from 'ember';

export default Ember.Controller.extend({
  reviewing: false,
  actions: {
    addReview: function() {
      var review = this.store.createRecord('review', {
        author: this.get('author'),
        body: this.get('body'),
        stars: this.get('stars'),
        date: new Date()
      });

      var venue = this.model;

      review.save().then(function () {
        venue.get('reviews').addObject(review);
        venue.save();
      });

      this.set('reviewing', false);

      this.setProperties({
        author: '',
        body: ''
      });
    },
    showReview: function() {
      this.set('reviewing', true);
    }
  }
});
