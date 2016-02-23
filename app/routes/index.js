import Ember from 'ember';

export default Ember.Route.extend( {
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll("post"),
      entries: this.store.findAll("entry"),
    });
  },
  actions: {
    destroyEntry( entry ) {
      entry.destroyRecord();
      this.transitionTo('index');
    }
  }
});
