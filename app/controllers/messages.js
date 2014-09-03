import Ember from 'ember';

export default Ember.ArrayController.extend({
  init: function() {
    this.set('message', Ember.Object.create());
  },
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts message by timestamp
  actions: {
  	// ==============================
  	// This is for destroying and persisting the removal of a model FB and Local
  	// ==============================
    // deleteMessage: function(msg) {    	
    // 	msg.destroyRecord()    	
    // 	// this.store.destroyRecord(msg)
    // 	// console.log(this.store)
    // }
  }
});