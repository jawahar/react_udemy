var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3';
var apiKey = '37653ec83efe0dd';

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function(){

    })
  }
}
