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

eval("document.addEventListener('DOMContentLoaded', () => {\n// Get all \"navbar-burger\" elements\nconst $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);\n// Check if there are any navbar burgers\nif ($navbarBurgers.length > 0) {\n  // Add a click event on each of them\n  $navbarBurgers.forEach( el => {\n    el.addEventListener('click', () => {\n      // Get the target from the \"data-target\" attribute\n      const target = el.dataset.target;\n      const $target = document.getElementById(target);\n      // Toggle the \"is-active\" class on both the \"navbar-burger\" and the \"navbar-menu\"\n      el.classList.toggle('is-active');\n      $target.classList.toggle('is-active');\n    });\n  });\n}\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcz85MGU5Il0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4vLyBHZXQgYWxsIFwibmF2YmFyLWJ1cmdlclwiIGVsZW1lbnRzXG5jb25zdCAkbmF2YmFyQnVyZ2VycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXItYnVyZ2VyJyksIDApO1xuLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBuYXZiYXIgYnVyZ2Vyc1xuaWYgKCRuYXZiYXJCdXJnZXJzLmxlbmd0aCA+IDApIHtcbiAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgb24gZWFjaCBvZiB0aGVtXG4gICRuYXZiYXJCdXJnZXJzLmZvckVhY2goIGVsID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIEdldCB0aGUgdGFyZ2V0IGZyb20gdGhlIFwiZGF0YS10YXJnZXRcIiBhdHRyaWJ1dGVcbiAgICAgIGNvbnN0IHRhcmdldCA9IGVsLmRhdGFzZXQudGFyZ2V0O1xuICAgICAgY29uc3QgJHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XG4gICAgICAvLyBUb2dnbGUgdGhlIFwiaXMtYWN0aXZlXCIgY2xhc3Mgb24gYm90aCB0aGUgXCJuYXZiYXItYnVyZ2VyXCIgYW5kIHRoZSBcIm5hdmJhci1tZW51XCJcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgJHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG59XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ })

/******/ });