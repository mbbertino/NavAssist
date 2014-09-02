import Ember from 'ember';

export default Ember.Controller.extend({
	init: function(){
		this.authClient = new window.FirebaseSimpleLogin(new window.Firebase("https://glaring-fire-229.firebaseio.com"), function(error, user) {
      if (error) {
        alert('Authentication failed: ' + error);
      } else if (user) {
      	// var myRef = new window.Firebase("https://glaring-fire-229.firebaseio.com")
		     //  myRef.child('users').child(user.id).set({
		     //    email: user.email,
		     //    provider: user.provider,
		     //    provider_id: user.id,
		     //  	createdTimeStamp: new Date().getTime(),
		     //  	user: user
		     //  })
	      this.transitionToRoute('/dashboard/'+ user.id)
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

    		// This needs to be moved to the create user with the Navigator Admin
					// var myRef = new window.Firebase("https://glaring-fire-229.firebaseio.com")
		      // myRef.child('users').child(user.id).set({
		      //   email: user.email,
		      //   provider: user.provider,
		      //   provider_id: user.id,
		      // 	createdTimeStamp: new Date().getTime(),
		      // 	user: user
		      // })

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
