// Define the module
var app = angular.module('memorialapp', ['ngRoute']);

// Define the 'PeopleListController' controller on the MemorialApp module
app.controller('PeopleController', function($scope, $routeParams, $location, $sce) {
    people = [
        {
            name: "N. Steadman",
            id: "0",
            DOB: "26/12/1890",
            serviceID: "12/4",
            birthPlace: "Whangarei, New Zealand",
            DOD: "15/05/1915",
            occupation: "WW1 Electrical engineer",
            deathPlace: "Dardanelles, Gallipoli, Turkey.",
            deathcause: "Killed in Action",
            bio: "<h5> Noel Steadman</h5><p>Noel Steadman was the son of Lieutenant-Colonel Thomas Herbert Steadman <i>(Territorial Force, 15th (North Auckland) Regiment)</i> and Edith Minnie Steadman of Whangarei. </p><p>He was a pupil at Whangarei High School during 1904 and 1905 but left in 1906 to enter King’s College in Auckland.</p><p>After leaving school he devoted his studies to engineering.</p><p>When war broke out he enlisted and left with the Main Body as a lieutenant in the Auckland Infantry. </p><p>He took part in the defence of the Suez Canal and the landing at Gallipoli and was afterwards killed on the 8th May 1915 in the attack on Krithia in the Dardanelles.</p>"
        },
        {
            name: "D. Schmidtke",
            id: "1",
        },
        {
            name: "T. Lengyel",
            id: "2",
        },
        {
            name: "U. Dejarnette",
            id: "3",
        },
        {
            name: "C. Lacross",
            id: "4",
        },
        {
            name: "A. Abram",
            id: "5",
        },
        {
            name: "R. Doepke",
            id: "6",
        },
        {
            name: "M. Lummus",
            id: "7",
        },
        {
            name: "R. Salvador",
            id: "8",
        },
        {
            name: "A. Sharpton",
            id: "9",
        },
        {
            name: "C. Watford",
            id: "10",
        },
        {
            name: "D. Kahan",
            id: "11",
        },
        {
            name: "A. Stjean",
            id: "12",
        },
        {
            name: "G. Parisien",
            id: "13",
        },
        {
            name: "N. Kost",
            id: "14",
        },
        {
            name: "C. Winslow",
            id: "15",
        },
        {
            name: "G. Dubin",
            id: "16",
        },
        {
            name: "E. Andersen",
            id: "17",
        },
        {
            name: "J. Conkling",
            id: "18",
        },
        {
            name: "L. Fredericks",
            id: "19",
        },
        {
            name: "L. Harris",
            id: "20",
        }
    ];
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