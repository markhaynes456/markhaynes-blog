import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  intro: DS.attr('string'),
  body: DS.attr('string'),
  image_url: DS.attr('string'),
  outro: DS.attr('string')
});
