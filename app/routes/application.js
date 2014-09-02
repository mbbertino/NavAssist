import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
    this.authClient = new window.FirebaseSimpleLogin(new window.Firebase("https://glaring-fire-229.firebaseio.com"), function(error, user) {
      if (error) {
        alert('Authentication failed: ' + error);
      } else if (user) {
        // default route
        Ember.$('body').addClass('dashboard-padding');
      } else {
      	// If not a user redirect to login route before model hooks
      	this.transitionTo('login');
        Ember.$('body').removeClass('dashboard-padding');
      }
    }.bind(this));
  },
  actions: {
		logout: function() { 
	  	this.authClient.logout()
      Ember.$('body').removeClass('dashboard-padding');
	  }
	}
});
