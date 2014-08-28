import Ember from 'ember';

var Router = Ember.Router.extend({
  location: NavClientENV.locationType
});

Router.map(function() {
  this.resource('application', { path: '/' }, function(){
	  this.resource('login', function(){
		  this.route('forgetpassword', {path: '/forgotpassword'});
	  });
	  this.resource('dashboard',{path: 'dashboard'}, function(){
		  this.resource('profile');
		  this.resource('newconversation', function(){
			  this.route('content');
		  });
		  this.resource('messages',{path: 'all-messages'})
		  this.resource('unread', {path: 'unread-messages'})
		  this.resource('events',{path: 'all-events'})
		  this.resource('message', {path: 'message/:message_id'}, function (){
			  this.route('reply');
			  this.route('share');
			  this.route('attach');
		  });		  	
		  this.resource('careteam', function(){
			  this.route('add');
		  });
	  });
  });
});

export default Router;
