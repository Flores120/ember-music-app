import config from '../config/environment';
import Ember from 'ember';


export default Ember.Route.extend({
 model:
  function(params) {
    debugger;
   var key = config.myApiKey;
   var url = 'http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=adele&api_key=f2ccc50cdd5665c7af539db2066a3be1&format=json';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log("hey there");
     return responseJSON;
   });
  }
});

// 03254f9303114dbdbf40366bb98bbaff
// f2ccc50cdd5665c7af539db2066a3be1
