// Define the module
var app = angular.module('memorialapp', ['ngRoute']);

// Define the 'PeopleListController' controller on the MemorialApp module
app.controller('PeopleController', function($scope, $routeParams, $location, $sce) {
    // Add currpath directive to each person for the menu
    for (var i = people.length - 1; i >= 0; i--) {
        // Helper to check if the path parameter is the current active route
        people[i].currpath = $location.path().substring(1)
    }
	$scope.people = people;
    var personid = $routeParams.person;
    // If there is a personid (will always be true once loaded)
    if (personid) {
        var person = $.grep(people, function(x){ return x.id == personid; });
        if (person.length == 0) {
            console.log("Warning: Person not in database");
            $location.path("/");
        } else {
            person = person[0];
        }
    } else {
        return; // if there is no personid then don't bother processing anything this pass, we do so once loading is complete
    }

    // We could just go $scope.person = person to bind this person's data, but we need to sanatize the bio html first!
    // This means that angularjs now knows that it can trust the html tags in this variable, and will let us render them on the client
    if (typeof person.bio == "string") {
        person.bio = $sce.trustAsHtml(person.bio);
    }
    // Now we can bind it!
    $scope.person = person;

    // Helper to check if the path parameter is the current active route
    $scope.currpath = $location.path().substring(1);
    $scope.pageClass = "page-person";
});

app.controller('WelcomeController', function($scope) {
    $scope.pageClass = "page-welcome";
});

app.controller('RandomController', function($location) {
    var randPerson = people[Math.floor(Math.random() * people.length)];
    $location.path("/tag/" + randPerson.id);
});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/welcome.html",
        controller: 'WelcomeController'
    })
    .when("/map", {
        templateUrl : "views/map.html",
        controller: 'WelcomeController'
    })
    .when("/tag/:person", {
        templateUrl : "views/person.html",
        controller: 'PeopleController'
    })
    .when("/random", {
        templateUrl : "views/person.html",
        controller: 'RandomController'
    })
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});