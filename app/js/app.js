'use strict';


// Declare app level module which depends on filters, and services
angular.module('dcka', [
	'restangular',
	'ngRoute',
  'dcka.filters',
  'dcka.services',
  'dcka.directives',
  'dcka.controllers'
]);