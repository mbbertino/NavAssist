import Ember from 'ember';

export default Ember.ArrayController.extend({
  init: function() {
    this.set('message', Ember.Object.create());
  },
  sortProperties: ['timestamp'],
  sortAscending: false // sorts message by timestamp
});
