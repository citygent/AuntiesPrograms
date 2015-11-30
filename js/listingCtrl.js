angular.module('listApp', []).controller('listingController', listingController);
listingController.$inject = ['$http'];

function listingController($http) {
  console.log('hello!')
  this.title = "eRadioTimes";
  var self = this;

  function getListings(letter, page) {
    console.log('getting listings')
    $http
      .get('http://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1')
      .then(function(response) {
        console.log(response);
      });
  };
  getListings();
}

// The API end point follows the following format:
// `{base_uri}/ibl/v1/atoz/{letter}/programmes?page={page}`
// The base URI is:
// `ibl.api.bbci.co.uk`