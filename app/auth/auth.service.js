angular.module('angularfireSlackApp').factory('Auth',function($firebaseAuth, FirebaseUrl){
	var ref = new Firebase(FirebaseUrl);
	var auth = $firebaseAuth(ref);
	//get the callback from firebase
	return auth;	
});


