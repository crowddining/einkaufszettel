'use strict';

// angular.module('dcka')
// 	.config(function($stateProvider, $urlProvider) {
// 		$urlProvider.otherwise('/');

// 		$stateProvider
// 			.state('note', {
// 				url: '/',
// 				templateUrl: 'partials/note.html',
// 				controller: 'NoteCtrl'
// 				// ,
// 				// resolve: {
// 				// 	notes: function(Restangular) {
// 				// 		return Restangular.one('users').getList();
// 				// 	}
// 				// }
// 			})
// 	});


angular.module('dcka')
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/note.html',
      controller: 'NoteCtrl'
    });
  });
