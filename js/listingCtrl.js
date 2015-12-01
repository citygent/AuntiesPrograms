angular.module('listApp', []).controller('listingController', listingController);
listingController.$inject = ['$http'];

function listingController($http) {
  var self = this;
  self.title = 'eRadioTimes';

  // Alphabetized Nav setup
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  self.letters = alphabet.split('');
  var programmes = [];
  self.programmes = programmes;

  var selectedLetter = '';

  // Paginate setup
  var pageCount;
  var selectedPage = 1;

  // Get listings from API based on selection
  function getListings(letter, page) {
    console.log('getting listings')
    $http
      .get('http://ibl.api.bbci.co.uk/ibl/v1/atoz/'+ letter + '/programmes?page=' + page)
      .then(function(response) {
        console.log(response)
        processListings(response);
        console.log(pageCount)
      });
  }; 

  // Initial get defaults to 'A: Page1' if no selection exists.
  getListings(selectedLetter || 'a', selectedPage || 1);

  function processListings(response) {
    var resultsPerPage = 20; // for easy change in future.
    // below will give the pageCount variable a number to work with.
    pageCount = Math.ceil(response.data.atoz_programmes.count / resultsPerPage);
    self.programmes = response.data.atoz_programmes.elements;
  }

  self.imageChef = imageChef;
  function imageChef(url) {
    console.log(url)
    return url.replace('{recipe}', '406x228')
  };

}

// The API end point follows the following format:
// `{base_uri}/ibl/v1/atoz/{letter}/programmes?page={page}`
// The base URI is:
// `ibl.api.bbci.co.uk`