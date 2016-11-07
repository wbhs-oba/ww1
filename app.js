// Define the module
var app = angular.module('memorialapp', ['ngRoute']);

// Define the 'PeopleListController' controller on the MemorialApp module
app.controller('PeopleController', function($scope, $routeParams, $location, $sce) {
	$scope.people = people;
    var personid = $routeParams.person;
    var self = this;
    var person = $.grep(people, function(x){ return x.id == personid; });
    if (person.length == 0) {
        console.log("Warning: Person not in database")
        $location.path("/");
    } else {
        person = person[0];
    }

    $scope.person = {
            name: person.name,
            id: person.id,
            imgpath: person.imgpath,
            DOB: person.DOB,
            serviceID: person.serviceID,
            birthPlace: person.birthPlace,
            DOD: person.DOD,
            occupation: person.occupation,
            deathPlace: person.deathPlace,
            deathcause: person.deathcause,
            bio: $sce.trustAsHtml(person.bio)
            // bio: person.bio
    }
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        redirectTo: "/0/"
        // templateUrl : "views/person.html"
    })
    .when("/:person", {
        templateUrl : "views/person.html",
        controller: 'PeopleController'
    })
});