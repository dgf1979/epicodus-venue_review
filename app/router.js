import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('venues', { path: '/'}, function() {
    this.resource('add-venue');
    this.resource('venue', { path: 'venue/:id' });
  });
});

export default Router;
