angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.hide();
  }
})

.controller('CalendarsCtrl', function($scope, Calendars) {
  if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.show();
  }
  $scope.calendars = Calendars.all();
})

.controller('CalendarsDetailCtrl', function($scope, $stateParams, Calendars) {
  if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.show();
      StatusBar.styleHex('#000000');
      
  }
  
  $scope.calendar = Calendars.get($stateParams.calendarId);
})

.controller('SleepCtrl', function($scope) {
  if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.show();
  }
})

.controller('FavoritesCtrl', function($scope) {
  if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.show();
  }
})

.controller('InfoCtrl', function($scope) {
  if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.show();
  }
});


