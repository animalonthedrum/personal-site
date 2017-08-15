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


  var mailObject = {
    name: vm.name,
    email: vm.email,
    subject: vm.subject,
    message: vm.message

  };




  vm.submitForm = function(mailObject) {

    MailService.sendEmail(mailObject);

    console.log(mailObject);
  };


}]);


myApp.factory('MailService', ['$http', function($http) {
  return {
    sendEmail: function(info) {
      $http.post('/', info).then(function(response) {
        console.log("Email has been sent: ", response.data);

      });
    }
  };
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
