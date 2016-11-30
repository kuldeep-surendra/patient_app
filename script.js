var app = angular.module('myApp',[])
.controller('mainCtrl',function($http,$window){
	var patient = this;
	patient.callSubmit = function(){
		$http.post('http://localhost:3000/patient/new',
		{
			patient:
			{
				firstname:patient.firstname,
				lastname:patient.lastname,
				dob:patient.dob,
				gender:patient.gender,
				age:patient.age,
				phone:patient.phone,
				description:patient.description
			}

		}).success(function(response){
            patient.message=response.message;
            console.log(patient.message);
        });
        patient.firstname = "";
        patient.lastname = "";
        patient.age = "";
        patient.dob = "";
        patient.gender = "";
        patient.phone= "";
        patient.description = "";
	}
	patient.callDetails = function(){
		$window.location.href = 'list.html';
	}
});