var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
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
});
//
// var photo = function(route, info) {
//   this.route = route;
//   this.description = info;
//   this.info = false;
// };
//
// myApp.controller('profileController', profileController);
//
// function profileController() {
//   var vm = this;
//
//
//
// }

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
        message: 'PLEASE FILL OUT ENTIRE FORM',
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
  // };
}]);




//
// var co = new photo("rocky.jpg", "Rocky Mountain National Forest");
// var moab = new photo("moab.jpg", "Base Camp, Moab UT");
// var bisti = new photo("bisti.jpg", "Waffles overlooking Bisti Badlands NM ");
// var fungi = new photo("fungi.jpg", "Fungi, Muir Woods, CA");
// var sanFran = new photo("sanfran2.jpg", "San Fran is for lovers");
// var beard = new photo("beard.jpg", "Rocking the beard with the Premiums");
// vm.photos = [co, moab, bisti, fungi, sanFran, beard];



// vm.toggleDiv = function(index) {
//   console.log('toggle', index);
//   vm.photos[index].info = !vm.photos[index].info;
// };
// };
