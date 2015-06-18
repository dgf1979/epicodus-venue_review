import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  mapAddress: DS.attr('string'),
  date: DS.attr('date'),
  reviews: DS.hasMany('review', {async: true})
});
