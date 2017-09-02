var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/about.html',
    controller: 'profileController as pc'
  }).when('/about', {
    templateUrl: 'views/partials/about.html',
  }).when('/contact', {
    templateUrl: 'views/partials/contact.html',
  }).when('/resume', {
    templateUrl: 'views/partials/resume.html'
  }).when('/portfolio', {
    templateUrl: 'views/partials/portfolio.html'
  });
  $locationProvider.html5Mode(true);
});


myApp.controller('profileController', ['MailService', function(MailService) {


  var vm = this;
  vm.mailObject = {};
  //
  // var mailObject = {
  //   name: vm.name,
  //   email: vm.email,
  //   subject: vm.subject,
  //   message: vm.message
  //
  // };




  vm.submitForm = function(mailObject) {
    console.log(mailObject);
    if (mailObject.name !== undefined && mailObject.email !== undefined && mailObject.subject !== undefined && mailObject.message !== undefined) {
      MailService.sendEmail(mailObject).then(function() {
        vex.defaultOptions.className = 'vex-theme-os';
        vex.dialog.alert({
          message: 'THANK YOU FOR CONTACTING ME',
          className: 'vex-theme-flat-attack' // Overwrites defaultOptions
        });
        mailObject.name = undefined;
        mailObject.email = undefined;
        mailObject.subject = undefined;
        mailObject.message = undefined;
        console.log(mailObject);


      });


    } else {
      // alert('fill em out');

      vex.defaultOptions.className = 'vex-theme-os';
      vex.dialog.alert({
        message: 'PLEASE FILL OUT ALL FIELDS',
        className: 'vex-theme-flat-attack' // Overwrites defaultOptions
      });
    }
  };


}]);


myApp.service('MailService', ['$http', function($http) {
  // return {
  this.sendEmail = function(info) {
    return $http.post('/', info).then(function(response) {
      console.log("Email has been sent: ", response.data);
      return response;
    });
  };

}]);
