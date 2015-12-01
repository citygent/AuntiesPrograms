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

  self.selectedLetter = 'a';

  // Paginate setup
  var pageCount;
  self.pages = []
  var selectedPage = 1;

  // Get listings from API based on selection
  self.getListings = getListings;
  function getListings(letter, page) {
    console.log('getting listings for letter: '+letter+' and page: '+page)
    self.selectedLetter = letter;
    $http
      .get('http://ibl.api.bbci.co.uk/ibl/v1/atoz/'+ self.selectedLetter + '/programmes?page=' + page)
      .then(function(response) {
        console.log(response)
        processListings(response);
        console.log('pageCount: ', pageCount)
      });
  }; 

  // Initial get defaults to 'A: Page1' if no selection exists.
  getListings(self.selectedLetter || 'a', selectedPage || 1);

  function processListings(response) {
    var resultsPerPage = 20; // for easy change in future.
    // below will give the pageCount variable a number to work with.
    pageCount = 0;
    self.pages = [];
    pageCount = Math.ceil(response.data.atoz_programmes.count / resultsPerPage);
    for (var i=1; i<=pageCount; i++) {
      self.pages.push(i);
    }
    // below build an array of program data objects.
    self.programmes = response.data.atoz_programmes.elements;

  }

  self.imageChef = imageChef;
  function imageChef(url) {
    return url.replace('{recipe}', '406x228')
  };

}

// The API end point follows the following format:
// `{base_uri}/ibl/v1/atoz/{letter}/programmes?page={page}`
// The base URI is:
// `ibl.api.bbci.co.uk`