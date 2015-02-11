(function () {
    var app = angular.module('appTutorials', []);

    app.controller('TutorialsController', ['$http', function($http){
        var tutorials = this;
        tutorials.things = [];
        $http.get('./tutorials.json').success(function(data){
            tutorials.things = data;
        });

    }]);
})();