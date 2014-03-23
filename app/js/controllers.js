'use strict';

/* Controllers */

angular.module('dcka.controllers', []).
  controller('NoteCtrl', function($scope, Restangular) {
  	var notes = Restangular.all('note');

  	$scope.notes = [];
  	notes.getList().then(function(note) {
 			$scope.notes = note;
  	});

  	$scope.createNote = function(note) {
  		notes.post(note).then(function(note) {
  			$scope.notes.push(note);
  			$scope.newNote = {};
  		});
  	}

  	$scope.deleteNote = function(toDeleteNote) {
  		Restangular.one('note', toDeleteNote._id).remove().then(function(note) {
  			$scope.notes.splice($scope.notes.indexOf(toDeleteNote), 1);
  		});
  	}

  	$scope.edit = function(note) {
  		$scope.editing = note;
  	}

  	$scope.doneEditing = function(note) {
  		note.put().then(function(notes) {
  			$scope.notes = notes;
  			console.log(notes);
  		});
  	}

  })