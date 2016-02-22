import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.store.findAll("entry"));
    return Ember.RSVP.hash({
      posts: this.store.findAll("post"),
      entries: this.store.findAll("entry"),
    });
  }
});
