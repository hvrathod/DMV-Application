'use strict';
angular.module('myApp.view2', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])
    .controller('View2Ctrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $scope.buttonName = 'Next';
        $scope.currentQuestionIndex = -1;
        $scope.currentQuestion = undefined;
        // 1. load json file
        $http.get('quiz_data.json').then(function (quizData) {
            $scope.myQuestions = quizData.data
            // 2. get first question object (i.e. question and answers) from the data
            $scope.currentQuestionIndex = 0;
            // 3. assign it to a variable bound in html view => its now visible in ui
            $scope.currentQuestion = $scope.myQuestions[$scope.currentQuestionIndex];
        });
        $scope.nextQuestion = function () {
            $scope.currentQuestionIndex += 1;
            if ($scope.currentQuestionIndex < $scope.myQuestions.length) {
                $scope.currentQuestion = $scope.myQuestions[$scope.currentQuestionIndex];
                if ($scope.currentQuestionIndex === $scope.myQuestions.length - 1) {
                    $scope.buttonName = 'Finish';
                }
            } else {
                $location.path('/view3')
            }
        };
    }]);




