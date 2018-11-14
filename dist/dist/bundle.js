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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n\r\n\r\nconst button = $('#startButton');\r\nbutton.on('click', () => {\r\n    let numChildren = $('#numChildren').val();\r\n    numChildren = parseInt(numChildren);\r\n    \r\n    let childCount = _modules_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"].initializeChildArray(numChildren);\r\n\r\n    let count = $('#count').val();\r\n    count = parseInt(count);\r\n\r\n    let startPos = $('#startPos').val();\r\n    startPos = parseInt(startPos);\r\n    if (startPos > childCount - 1) {\r\n        console.log('Array position cannot be greater than the array length.');\r\n        return;\r\n    }\r\n    _modules_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"].startGame(count, startPos);\r\n\r\n})\r\n\r\n\r\n\r\nconsole.log('Working!');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XHJcblxyXG5jb25zdCBidXR0b24gPSAkKCcjc3RhcnRCdXR0b24nKTtcclxuYnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBudW1DaGlsZHJlbiA9ICQoJyNudW1DaGlsZHJlbicpLnZhbCgpO1xyXG4gICAgbnVtQ2hpbGRyZW4gPSBwYXJzZUludChudW1DaGlsZHJlbik7XHJcbiAgICBcclxuICAgIGxldCBjaGlsZENvdW50ID0gR2FtZS5pbml0aWFsaXplQ2hpbGRBcnJheShudW1DaGlsZHJlbik7XHJcblxyXG4gICAgbGV0IGNvdW50ID0gJCgnI2NvdW50JykudmFsKCk7XHJcbiAgICBjb3VudCA9IHBhcnNlSW50KGNvdW50KTtcclxuXHJcbiAgICBsZXQgc3RhcnRQb3MgPSAkKCcjc3RhcnRQb3MnKS52YWwoKTtcclxuICAgIHN0YXJ0UG9zID0gcGFyc2VJbnQoc3RhcnRQb3MpO1xyXG4gICAgaWYgKHN0YXJ0UG9zID4gY2hpbGRDb3VudCAtIDEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQXJyYXkgcG9zaXRpb24gY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiB0aGUgYXJyYXkgbGVuZ3RoLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEdhbWUuc3RhcnRHYW1lKGNvdW50LCBzdGFydFBvcyk7XHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZygnV29ya2luZyEnKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/modules/child.js":
/*!******************************!*\
  !*** ./src/modules/child.js ***!
  \******************************/
/*! exports provided: Child */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Child\", function() { return Child; });\n\r\nclass Child {\r\n\r\n\tconstructor(id) {\r\n\t\tthis.id = id;\r\n\t}\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jaGlsZC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2NoaWxkLmpzP2JmZjciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBDaGlsZCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGlkKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0fVxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/child.js\n");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _child__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./child */ \"./src/modules/child.js\");\n\r\n\r\nclass Game {\r\n\r\n\tconstructor() {\r\n        this.childArray = [];\r\n\t\r\n        this.removedChildren = [];\r\n    }\r\n\r\n\tstatic initializeChildArray(arrayLength) {\r\n        if (!this.childArray) {\r\n            this.childArray = [];\r\n        }\r\n        if (!this.removedChildren) {\r\n            this.removedChildren = [];\r\n        }\r\n\t\tfor (let i = 0; i < arrayLength; i++) {\r\n\t\t\tlet child = new _child__WEBPACK_IMPORTED_MODULE_0__[\"Child\"](i+1);\r\n\t\t\tthis.childArray.push(child);\r\n        }\r\n        console.log(\"Children's array\");\r\n        console.log(this.childArray);\r\n        return this.childArray.length;\r\n\t}\r\n\r\n\tstatic startGame(k, startPos) {\r\n        if (this.childArray.length === 1) {\r\n\t\t\tconsole.log('Winner is');\r\n            console.log(this.childArray[0]);\r\n            console.log('Removed children');\r\n            console.log(this.removedChildren);\t\t\r\n            \r\n            Game.resetGame();\r\n            \r\n\t\t\treturn;\r\n\t\t}\r\n\t\tlet rem = (k + startPos) % this.childArray.length;\r\n\t\tlet index = rem === 0 ? this.childArray.length - 1: rem - 1;\t\t\t\r\n\t\tlet child = this.childArray[index];\r\n\t\tthis.removedChildren.push(child);\r\n\t\tthis.childArray.splice(index, 1);\r\n\t\tstartPos += 1;\r\n\t\tGame.startGame(k, startPos);\r\n    }\r\n    \r\n    static getChildArray() {\r\n        return this.childArray;\r\n    }\r\n\r\n    static getRemovedChildrenArray() {\r\n        return this.removedChildren;\r\n    }\r\n\r\n    static resetGame() {\r\n        this.childArray = [];\r\n        this.removedChildren = [];\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nYW1lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2FtZS5qcz85ZDBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoaWxkIH0gZnJvbSAnLi9jaGlsZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRBcnJheSA9IFtdO1xyXG5cdFxyXG4gICAgICAgIHRoaXMucmVtb3ZlZENoaWxkcmVuID0gW107XHJcbiAgICB9XHJcblxyXG5cdHN0YXRpYyBpbml0aWFsaXplQ2hpbGRBcnJheShhcnJheUxlbmd0aCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGlsZEFycmF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRBcnJheSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucmVtb3ZlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlZENoaWxkcmVuID0gW107XHJcbiAgICAgICAgfVxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBjaGlsZCA9IG5ldyBDaGlsZChpKzEpO1xyXG5cdFx0XHR0aGlzLmNoaWxkQXJyYXkucHVzaChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hpbGRyZW4ncyBhcnJheVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNoaWxkQXJyYXkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkQXJyYXkubGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHN0YXJ0R2FtZShrLCBzdGFydFBvcykge1xyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkQXJyYXkubGVuZ3RoID09PSAxKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdXaW5uZXIgaXMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jaGlsZEFycmF5WzBdKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZWQgY2hpbGRyZW4nKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZW1vdmVkQ2hpbGRyZW4pO1x0XHRcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEdhbWUucmVzZXRHYW1lKCk7XHJcbiAgICAgICAgICAgIFxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRsZXQgcmVtID0gKGsgKyBzdGFydFBvcykgJSB0aGlzLmNoaWxkQXJyYXkubGVuZ3RoO1xyXG5cdFx0bGV0IGluZGV4ID0gcmVtID09PSAwID8gdGhpcy5jaGlsZEFycmF5Lmxlbmd0aCAtIDE6IHJlbSAtIDE7XHRcdFx0XHJcblx0XHRsZXQgY2hpbGQgPSB0aGlzLmNoaWxkQXJyYXlbaW5kZXhdO1xyXG5cdFx0dGhpcy5yZW1vdmVkQ2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcblx0XHR0aGlzLmNoaWxkQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdHN0YXJ0UG9zICs9IDE7XHJcblx0XHRHYW1lLnN0YXJ0R2FtZShrLCBzdGFydFBvcyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXRDaGlsZEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFJlbW92ZWRDaGlsZHJlbkFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZWRDaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVzZXRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlZENoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/game.js\n");

/***/ })

/******/ });