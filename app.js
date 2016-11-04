// Define the module
var app = angular.module('memorialapp', []);

// Define the 'PeopleListController' controller on the MemorialApp module
app.controller('PeopleListController', function 
	PeopleListController($scope) {
		$scope.people = [
            {
            	name: "N. Steadman",
            },
            {
            	name: "D. Schmidtke",
            },
            {
            	name: "T. Lengyel",
            },
            {
            	name: "U. Dejarnette",
            },
            {
            	name: "C. Lacross",
            },
            {
            	name: "A. Abram",
            },
            {
            	name: "R. Doepke",
            },
            {
            	name: "M. Lummus",
            },
            {
            	name: "R. Salvador",
            },
            {
            	name: "A. Sharpton",
            },
            {
            	name: "C. Watford",
            },
            {
            	name: "D. Kahan",
            },
            {
            	name: "A. Stjean",
            },
            {
            	name: "G. Parisien",
            },
            {
            	name: "N. Kost",
            },
            {
            	name: "C. Winslow",
            },
            {
            	name: "G. Dubin",
            },
            {
            	name: "E. Andersen",
            },
            {
            	name: "J. Conkling",
            },
            {
            	name: "L. Fredericks",
            },
            {
            	name: "L. Harris",
            }
		]
	});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});