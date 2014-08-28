import Ember from 'ember';

var Router = Ember.Router.extend({
  location: NavClientENV.locationType
});

Router.map(function() {
	// Overarching Authentication Logic
	// Cross App Logout Functionality
  this.resource('application', { path: '/' }, function(){
		// FB Login Functionality
	  this.resource('login', function(){
	  	// FB Reset Password Functionality
		  this.route('forgetpassword', {path: '/forgotpassword'});	  
	  });
  	// Dashboard for Patient ||| will need another section for the admin
	  this.resource('dashboard',{path: 'dashboard'}, function(){
		  // This will be where a user can edit their profile info
		  this.resource('profile');
		  // This will allow a user to send a message First path allow picking recipients from the care team
		  this.resource('newconversation', function(){
			  // This is allows sending message and content once a recipient has been picked
			  this.route('content');		  	
		  });
		  // This is were all the messages will apear in the main dashboard 
		  // This is also the default route when entering the application
		  this.resource('messages', function(){
		  	// This will mimick the parent route but filter messages on the unread property
			  this.route('unread');
		  	// This will mimick the parent route but filter messages on the event property
			  this.route('events');
		  	// This will be the drill down for each message, on drill down a message will be considered read
			  // ==========================
		  	// ========================== Dynamic Routing
			  // 	App.Router.map(function() {
					//   this.resource('posts');
					//   this.resource('post', { path: '/post/:post_id' });
					// });

					// App.PostRoute = Ember.Route.extend({
					//   model: function(params) {
					//     return this.store.find('post', params.post_id);
					//   }
					// });
		  	// ==========================
		  	// ==========================
			  this.route('message', {path: '/message/:msg_id'}, function (){
		  	
			  	// =======================================================
			  	// The next few route attach comments to the Message model
			  	// =======================================================			  	
			  	// This is the route allows users to reply to a msg
				  this.route('reply');
			  	// This is the route allows users to share to a msg
				  this.route('share');
			  	// This is the route allows users to attach something to the msg
				  this.route('attach');
			  });		  	
		  });
			// This shows all the followers and providers on the care team
		  this.resource('careteam', function(){
				// This allows the user to add followers to their careteam
				// Only Navigators are allowed to add providers(doctors)
			  this.route('add');		  	
		  });
	  });
  });
});

export default Router;
