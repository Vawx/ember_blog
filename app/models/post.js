import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr( ),
  username: DS.attr( ),
  entry: DS.belongsTo('entry', { async: true }),
});
