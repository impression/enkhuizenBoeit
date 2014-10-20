angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Calendars', function($http) {
  // Might use a resource here that returns a JSON array
  //
  // Some fake testing data
  var calendar_items = [];
 
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

  $http.get('http://www.enkhuizenboeit.nl/tools/packages/boeit_agenda/app_list?datefrom='+dd+'-'+mm+'-'+yyyy+'&datetill='+dd+'-'+mm+'-'+yyyy+'&language=nl').success(function(data, status, headers,config){
      console.log('data success');
      console.log(data); // object seems fine
    }).error(function(data, status, headers,config){
      console.log('data error');
    }).then(function(result){
      calendar_items = result.data;
    });

  return {
    all: function() {
      return calendar_items;
    },
    get: function(itemID) {
      // Simple index lookup
      return calendar_items[itemID];
    }
  }
});
