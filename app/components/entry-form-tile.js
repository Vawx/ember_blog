import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveEntry( ) {
      var params = {
        content: this.get('content'),
        title: this.get('title'),
      };
      this.sendAction('saveEntry', params);
    },
  }
});
