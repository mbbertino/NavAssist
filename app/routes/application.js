import Ember from 'ember';

export default Ember.Route.extend({
	currentUser: null,
	
	beforeModel: function() {
    this.authClient = new window.FirebaseSimpleLogin(new window.Firebase("https://glaring-fire-229.firebaseio.com"), function(error, user) {
      if (error) {
        alert('Authentication failed: ' + error);
      } else if (user) {
      	// if there is a user then set the current user on the global auth route
        this.set('currentUser', user);
      } else {
      	// If not a user redirect to login route before model hooks
      	this.transitionTo('login');
      }
    }.bind(this));
  },
  actions: {
		logout: function() { 
	  	this.authClient.logout()
	  }
	}
});
