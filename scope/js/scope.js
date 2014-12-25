angular.module('dateModel', [])
    .controller('MyController', ['$scope', function ($scope) {
        $scope.username = 'World'; // wirte "World" into input which ng-model = username before fill

        $scope.sayHello = function () {
            $scope.greeting = 'Hello ' + $scope.username + '!';
        };
    }]);

angular.module('scopeHierarchies', [])
    .controller('GreetingController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.name = 'world';
        $rootScope.department = 'angular';
    }])
    .controller