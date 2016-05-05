angular.module('angularfireSlackApp').factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl){
	var usersRef = new Firebase(FirebaseUrl+'users');
	var users = $firebaseArray(usersRef);

	var Users = {
		getProfile: function(uid){
			return $firebaseObject(usersRef.child(uid));
		},
		getDisplayName: function(uid){
			return $getRecord(uid).displayName;
		},
		all: users
	};

	return Users;
});