	var app = angular.module('myApp',[])
.controller('mainCtrl',function($http,$window){
	var patients = this;
		$http.get('http://localhost:3000/patients')
		.success(function(response){
            patients.details=response.data;
        });
	
});

