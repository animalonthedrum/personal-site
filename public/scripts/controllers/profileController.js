var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/home.html',
    controller: 'profileController as pc'
  }).when('/about', {
    templateUrl: 'views/partials/about.html',
  }).when('/contact', {
    templateUrl: 'views/partials/contact.html'
  }).when('/resume', {
    templateUrl: 'views/partials/resume.html'
  });
});



myApp.controller('profileController', profileController);

function profileController() {
  var vm = this;
}
