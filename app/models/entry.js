import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr( ),
  title: DS.attr( ),
  posts: DS.hasMany('post', { async: true }),
});
