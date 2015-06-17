import Ember from 'ember';

export default Ember.Controller.extend({
  reviewing: false,
  actions: {
    addReview: function() {
      var review = this.store.createRecord('review', {
        author: this.get('author'),
        body: this.get('body'),
        reviewDate: new Date()
      });
      review.save();

      var venue = this.model;
      venue.get('reviews').pushObject(review);
      venue.save();

      this.set('reviewing', false);
    },
    showReview: function() {
      this.set('reviewing', true);
    }
  }
});
