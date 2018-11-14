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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n\r\n\r\nconst button = $('#startButton');\r\nbutton.on('click', () => {\r\n    let numChildren = $('#numChildren').val();\r\n    numChildren = parseInt(numChildren);\r\n    \r\n    let childCount = _modules_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"].initializeChildArray(numChildren);\r\n\r\n    let count = $('#count').val();\r\n    count = parseInt(count);\r\n\r\n    let startPos = $('#startPos').val();\r\n    startPos = parseInt(startPos);\r\n    if (startPos > childCount - 1) {\r\n        console.log('Array position cannot be greater than the array length.');\r\n        return;\r\n    }\r\n    _modules_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"].startGame(count, startPos);\r\n    let winner = _modules_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"].getWinner();\r\n    $('#winner').text(winner.id);\r\n    let removedChildren = _modules_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"].getRemovedChildrenArray();\r\n    let result = '';\r\n    for (let i = 0; i < removedChildren.length; i++) {\r\n        let child = removedChildren[i];\r\n        result += child.id + ' ';\r\n    }\r\n    $('#removedIds').text(result);\r\n    _modules_game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"].resetGame();\r\n})\r\n\r\n\r\n\r\nconsole.log('Working!');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XHJcblxyXG5jb25zdCBidXR0b24gPSAkKCcjc3RhcnRCdXR0b24nKTtcclxuYnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBudW1DaGlsZHJlbiA9ICQoJyNudW1DaGlsZHJlbicpLnZhbCgpO1xyXG4gICAgbnVtQ2hpbGRyZW4gPSBwYXJzZUludChudW1DaGlsZHJlbik7XHJcbiAgICBcclxuICAgIGxldCBjaGlsZENvdW50ID0gR2FtZS5pbml0aWFsaXplQ2hpbGRBcnJheShudW1DaGlsZHJlbik7XHJcblxyXG4gICAgbGV0IGNvdW50ID0gJCgnI2NvdW50JykudmFsKCk7XHJcbiAgICBjb3VudCA9IHBhcnNlSW50KGNvdW50KTtcclxuXHJcbiAgICBsZXQgc3RhcnRQb3MgPSAkKCcjc3RhcnRQb3MnKS52YWwoKTtcclxuICAgIHN0YXJ0UG9zID0gcGFyc2VJbnQoc3RhcnRQb3MpO1xyXG4gICAgaWYgKHN0YXJ0UG9zID4gY2hpbGRDb3VudCAtIDEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQXJyYXkgcG9zaXRpb24gY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiB0aGUgYXJyYXkgbGVuZ3RoLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIEdhbWUuc3RhcnRHYW1lKGNvdW50LCBzdGFydFBvcyk7XHJcbiAgICBsZXQgd2lubmVyID0gR2FtZS5nZXRXaW5uZXIoKTtcclxuICAgICQoJyN3aW5uZXInKS50ZXh0KHdpbm5lci5pZCk7XHJcbiAgICBsZXQgcmVtb3ZlZENoaWxkcmVuID0gR2FtZS5nZXRSZW1vdmVkQ2hpbGRyZW5BcnJheSgpO1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVkQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY2hpbGQgPSByZW1vdmVkQ2hpbGRyZW5baV07XHJcbiAgICAgICAgcmVzdWx0ICs9IGNoaWxkLmlkICsgJyAnO1xyXG4gICAgfVxyXG4gICAgJCgnI3JlbW92ZWRJZHMnKS50ZXh0KHJlc3VsdCk7XHJcbiAgICBHYW1lLnJlc2V0R2FtZSgpO1xyXG59KVxyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZygnV29ya2luZyEnKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _child__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./child */ \"./src/modules/child.js\");\n\r\n\r\nclass Game {\r\n\r\n\tconstructor() {\r\n        this.childArray = [];\r\n\t\r\n        this.removedChildren = [];\r\n\r\n        this.winner = null;\r\n    }\r\n\r\n\tstatic initializeChildArray(arrayLength) {\r\n        if (!this.childArray) {\r\n            this.childArray = [];\r\n        }\r\n        if (!this.removedChildren) {\r\n            this.removedChildren = [];\r\n        }\r\n\t\tfor (let i = 0; i < arrayLength; i++) {\r\n\t\t\tlet child = new _child__WEBPACK_IMPORTED_MODULE_0__[\"Child\"](i+1);\r\n\t\t\tthis.childArray.push(child);\r\n        }\r\n        return this.childArray.length;\r\n\t}\r\n\r\n\tstatic startGame(k, startPos) {\r\n        if (this.childArray.length === 1) {\r\n\t\t\tthis.winner = this.childArray[0];\r\n            return;\r\n\t\t}\r\n\t\tlet rem = (k + startPos) % this.childArray.length;\r\n\t\tlet index = rem === 0 ? this.childArray.length - 1: rem - 1;\t\t\t\r\n\t\tlet child = this.childArray[index];\r\n\t\tthis.removedChildren.push(child);\r\n\t\tthis.childArray.splice(index, 1);\r\n\t\tstartPos += 1;\r\n\t\tGame.startGame(k, startPos);\r\n    }\r\n    \r\n    static getChildArray() {\r\n        return this.childArray;\r\n    }\r\n\r\n    static getRemovedChildrenArray() {\r\n        return this.removedChildren;\r\n    }\r\n\r\n    static resetGame() {\r\n        this.childArray = [];\r\n        this.removedChildren = [];\r\n    }\r\n\r\n    static getWinner() {\r\n        return this.winner;\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nYW1lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZ2FtZS5qcz85ZDBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoaWxkIH0gZnJvbSAnLi9jaGlsZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGRBcnJheSA9IFtdO1xyXG5cdFxyXG4gICAgICAgIHRoaXMucmVtb3ZlZENoaWxkcmVuID0gW107XHJcblxyXG4gICAgICAgIHRoaXMud2lubmVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcblx0c3RhdGljIGluaXRpYWxpemVDaGlsZEFycmF5KGFycmF5TGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkQXJyYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZEFycmF5ID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5yZW1vdmVkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVkQ2hpbGRyZW4gPSBbXTtcclxuICAgICAgICB9XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5TGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGNoaWxkID0gbmV3IENoaWxkKGkrMSk7XHJcblx0XHRcdHRoaXMuY2hpbGRBcnJheS5wdXNoKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRBcnJheS5sZW5ndGg7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgc3RhcnRHYW1lKGssIHN0YXJ0UG9zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRBcnJheS5sZW5ndGggPT09IDEpIHtcclxuXHRcdFx0dGhpcy53aW5uZXIgPSB0aGlzLmNoaWxkQXJyYXlbMF07XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHRcdH1cclxuXHRcdGxldCByZW0gPSAoayArIHN0YXJ0UG9zKSAlIHRoaXMuY2hpbGRBcnJheS5sZW5ndGg7XHJcblx0XHRsZXQgaW5kZXggPSByZW0gPT09IDAgPyB0aGlzLmNoaWxkQXJyYXkubGVuZ3RoIC0gMTogcmVtIC0gMTtcdFx0XHRcclxuXHRcdGxldCBjaGlsZCA9IHRoaXMuY2hpbGRBcnJheVtpbmRleF07XHJcblx0XHR0aGlzLnJlbW92ZWRDaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuXHRcdHRoaXMuY2hpbGRBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0c3RhcnRQb3MgKz0gMTtcclxuXHRcdEdhbWUuc3RhcnRHYW1lKGssIHN0YXJ0UG9zKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGdldENoaWxkQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UmVtb3ZlZENoaWxkcmVuQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlZENoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZXNldEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZEFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yZW1vdmVkQ2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0V2lubmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpbm5lcjtcclxuICAgIH1cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/game.js\n");

/***/ })

/******/ });