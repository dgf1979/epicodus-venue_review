import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  review: DS.attr('string'),
  date: DS.attr('date')
});
