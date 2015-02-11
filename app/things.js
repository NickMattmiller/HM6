(function(){

    var app = angular.module('tutorials-directives', []);

    app.directive("url", function () {
        return {
            restrict: 'E',
            templateUrl: "things-url.html"
        };
    });

    app.directive("title", function () {
        return {
            restrict: 'E',
            templateUrl: "things-title.html"
        };
    });

    app.directive("image", function () {
        return {
            restrict: "E",
            templateUrl: "things-image.html"
        };
    });

    app.directive("author", function () {
        return {
            restrict: "E",
            templateUrl: "things-author.html"
        };
    });

    app.directive("thingsTabs", function() {
        return {
            restrict: "E",
            templateUrl: "things-tabs.html",
            controller: function () {
                this.tab = 1;

                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function (activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tab"
        };
    });
      })();