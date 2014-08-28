import Ember from 'ember';

export default Ember.Controller.extend({
	init: function(){
		this.authClient = new window.FirebaseSimpleLogin(new window.Firebase("https://glaring-fire-229.firebaseio.com"), function(error, user) {
      if (error) {
        alert('Authentication failed: ' + error);
      } else if (user) {
      	// if there is a user then set the current user on the global auth route
        this.set('currentUser', user);
        console.log(user)
        this.transitionToRoute('dashboard');
      }
    }.bind(this));
	},

	actions: {
    userLogin: function(email, password) {    	   
    	this.authClient.login('password', {
			  email: email || this.email,
			  password: password || this.password
			  // rememberMe: remember
			});			
    }

    // ====================================================
    //  move the create record logic to the Nurse Navigator Admin section
    // ====================================================
    //  createUserRecord: function(user) {
    //    this.store.createRecord('user', {
    //      email: user.email,
    //      userID: user.id,
    //      dateJoined: new Date()
    //    }).save();          
    //  },

    //  createUser: function(email, password){
    //  	var that = this		  
	   //   this.authClient.createUser(email, password, function(error, user) {
		 	 //   if (error === null) 
			 //   	{
			 // 	  	that.send('createUserRecord', user)
			 // 	  	that.send('userLogin', email, password)
			 // 		} 
			 //   else 
			 //   	{
			 //   		console.log("Error creating user:", error);
			 //   	}
			 // });
	   // }
    // ====================================================
    // ====================================================
  }
});
