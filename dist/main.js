/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('app', ['ngAria', 'ngAnimate', 'ngMaterial']).component('scorer', {
	  template: __webpack_require__(7),
	  controller: function controller() {
	    var _this = this;

	    this.leftColor = 'red';
	    this.rightColor = 'green';

	    this.colors = Object.freeze(['red', 'green', 'blue', 'orange', 'pink', 'purple', 'cyan', 'yellow']);

	    this.picking = '<';

	    this.pick = function (color) {
	      if (_this.picking == '<') {
	        _this.leftColor = color;
	        _this.picking = '>';
	      } else if (_this.picking == '>') {
	        _this.rightColor = color;
	        _this.picking = null;
	      }
	    };
	  }
	}).component('score', {
	  bindings: {
	    points: '@',
	    color: '<'
	  },
	  template: __webpack_require__(1),
	  controller: function controller() {
	    var _this2 = this;

	    this.score = parseInt(this.score, 10) || 0;

	    this.up = function (points) {
	      _this2.score += points;
	    };

	    this.down = function (points) {
	      _this2.score -= points;
	    };
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "  <div class=\"score-content\"\n      ng-style=\"{ background: $ctrl.color }\"\n      md-swipe-right=\"$ctrl.up(2)\" md-swipe-up=\"$ctrl.up(3)\"\n      md-swipe-left=\"$ctrl.down(2)\" md-swipe-down=\"$ctrl.down(3)\">\n    <span class=\"score\">{{$ctrl.score}}</span>\n  </div>\n";

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = "<score class=\"score-container\" color=\"$ctrl.leftColor\"></score>\n<score class=\"score-container\" color=\"$ctrl.rightColor\"></score>\n\n<div class=\"colors-container\" ng-if=\"$ctrl.picking\">\n  <md-list class=\"colors\">\n    <md-list-item ng-repeat=\"color in $ctrl.colors\">\n      <md-button class=\"md-raised\"\n          ng-style=\"{ background: color }\"\n          ng-click=\"$ctrl.pick(color)\">\n        {{$ctrl.picking}}\n      </md-button>\n    </md-list-item>\n  </md-list>\n</div>\n";

/***/ }
/******/ ]);