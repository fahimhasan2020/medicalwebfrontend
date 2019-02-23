/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n\r\n// Get all \"navbar-burger\" elements\r\nconst $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);\r\n\r\n// Check if there are any navbar burgers\r\nif ($navbarBurgers.length > 0) {\r\n\r\n  // Add a click event on each of them\r\n  $navbarBurgers.forEach( el => {\r\n    el.addEventListener('click', () => {\r\n\r\n      // Get the target from the \"data-target\" attribute\r\n      const target = el.dataset.target;\r\n      const $target = document.getElementById(target);\r\n\r\n      // Toggle the \"is-active\" class on both the \"navbar-burger\" and the \"navbar-menu\"\r\n      el.classList.toggle('is-active');\r\n      $target.classList.toggle('is-active');\r\n\r\n    });\r\n  });\r\n}\r\n\r\n\r\nconst $navi = Array.prototype.slice.call(document.querySelectorAll('.has-dropdown'), 0);\r\n\r\n// Check if there are any navbar burgers\r\nif ($navi.length > 0) {\r\n\r\n  // Add a click event on each of them\r\n  $navi.forEach( eli => {\r\n    eli.addEventListener('click', () => {\r\n\r\n      // Get the target from the \"data-target\" attribute\r\n      const targets = eli.dataset.target;\r\n      const $targets = document.getElementById(targets);\r\n\r\n      // Toggle the \"is-active\" class on both the \"navbar-burger\" and the \"navbar-menu\"\r\n      eli.classList.toggle('is-active');\r\n      $targets.classList.toggle('is-active');\r\n\r\n    });\r\n  });\r\n}\r\n\r\n\r\n\r\n});\r\n\r\nvar card = $('.card');\r\n\r\n$('#close').click(function () {\r\n  card.fadeOut(200).delay(1000).fadeIn(200);\r\n});\r\n$('#connect').click(function () {\r\n  $('.added').fadeIn(500).delay(1000).fadeOut(500);\r\n  //card.css(\"opacity\", \"0.55\");\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcz85MGU5Il0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblxyXG4vLyBHZXQgYWxsIFwibmF2YmFyLWJ1cmdlclwiIGVsZW1lbnRzXHJcbmNvbnN0ICRuYXZiYXJCdXJnZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhci1idXJnZXInKSwgMCk7XHJcblxyXG4vLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IG5hdmJhciBidXJnZXJzXHJcbmlmICgkbmF2YmFyQnVyZ2Vycy5sZW5ndGggPiAwKSB7XHJcblxyXG4gIC8vIEFkZCBhIGNsaWNrIGV2ZW50IG9uIGVhY2ggb2YgdGhlbVxyXG4gICRuYXZiYXJCdXJnZXJzLmZvckVhY2goIGVsID0+IHtcclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgLy8gR2V0IHRoZSB0YXJnZXQgZnJvbSB0aGUgXCJkYXRhLXRhcmdldFwiIGF0dHJpYnV0ZVxyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlbC5kYXRhc2V0LnRhcmdldDtcclxuICAgICAgY29uc3QgJHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XHJcblxyXG4gICAgICAvLyBUb2dnbGUgdGhlIFwiaXMtYWN0aXZlXCIgY2xhc3Mgb24gYm90aCB0aGUgXCJuYXZiYXItYnVyZ2VyXCIgYW5kIHRoZSBcIm5hdmJhci1tZW51XCJcclxuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCAkbmF2aSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYXMtZHJvcGRvd24nKSwgMCk7XHJcblxyXG4vLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IG5hdmJhciBidXJnZXJzXHJcbmlmICgkbmF2aS5sZW5ndGggPiAwKSB7XHJcblxyXG4gIC8vIEFkZCBhIGNsaWNrIGV2ZW50IG9uIGVhY2ggb2YgdGhlbVxyXG4gICRuYXZpLmZvckVhY2goIGVsaSA9PiB7XHJcbiAgICBlbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAvLyBHZXQgdGhlIHRhcmdldCBmcm9tIHRoZSBcImRhdGEtdGFyZ2V0XCIgYXR0cmlidXRlXHJcbiAgICAgIGNvbnN0IHRhcmdldHMgPSBlbGkuZGF0YXNldC50YXJnZXQ7XHJcbiAgICAgIGNvbnN0ICR0YXJnZXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0cyk7XHJcblxyXG4gICAgICAvLyBUb2dnbGUgdGhlIFwiaXMtYWN0aXZlXCIgY2xhc3Mgb24gYm90aCB0aGUgXCJuYXZiYXItYnVyZ2VyXCIgYW5kIHRoZSBcIm5hdmJhci1tZW51XCJcclxuICAgICAgZWxpLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAkdGFyZ2V0cy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcclxuXHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG59KTtcclxuXHJcbnZhciBjYXJkID0gJCgnLmNhcmQnKTtcclxuXHJcbiQoJyNjbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICBjYXJkLmZhZGVPdXQoMjAwKS5kZWxheSgxMDAwKS5mYWRlSW4oMjAwKTtcclxufSk7XHJcbiQoJyNjb25uZWN0JykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICQoJy5hZGRlZCcpLmZhZGVJbig1MDApLmRlbGF5KDEwMDApLmZhZGVPdXQoNTAwKTtcclxuICAvL2NhcmQuY3NzKFwib3BhY2l0eVwiLCBcIjAuNTVcIik7XHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ })

/******/ });