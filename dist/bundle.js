module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Throws if a required field is empty
 * @param {string} field, The name of the required field
 * @returns {undefined}
 */
var required = function required() {
  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : required('field');
  throw new Error(field + ' is required');
};

/* harmony default export */ __webpack_exports__["a"] = (required);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);


/**
 * Transform an element to an array if it isn't already one
 * @param {*|Array} item The item to transform to array
 * @returns {Array} An array
 */
var asArray = function asArray() {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('item');

  if (Array.isArray(item) === true) return item;
  return [item];
};

/* harmony default export */ __webpack_exports__["a"] = (asArray);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_required__ = __webpack_require__(0);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




/**
 * Created a function to mix and map multiple arrays
 * @param {Function} cb The callback to call on every combinaison
 * @returns {Function} Function to map multiple arrays
 */
var mixMap = function mixMap() {
  var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_1__tools_required__["a" /* default */])('cb');
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length < 2) {
      throw new Error('Should be called with at least 2 values');
    }
    var arrays = args.map(__WEBPACK_IMPORTED_MODULE_0__asArray__["a" /* default */]);
    var maxLen = arrays.length - 1;
    var compose = function compose() {
      var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return arrays[pos].reduce(function (acc, value) {
        if (pos < maxLen) {
          return acc.concat(compose(pos + 1, values.concat([value])));
        }
        return acc.concat([cb.apply(undefined, _toConsumableArray(values.concat([value])))]);
      }, []);
    };
    return compose();
  };
};

/* harmony default export */ __webpack_exports__["a"] = (mixMap);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Generates a random string
 * @param {int} length The length of the string
 * @returns {string} a random string
 */
var random = function random() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  return (Math.random() * Number.MAX_VALUE).toString(36).substr(0, length);
};

/* harmony default export */ __webpack_exports__["a"] = (random);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_asArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_mixMap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__async_executionDuration__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__async_promisify__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__async_sleep__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dom_event__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math_clamp__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string_random__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tools_required__ = __webpack_require__(0);
// array


// async



// dom

// math

// random

// tools


/* harmony default export */ __webpack_exports__["default"] = ({
  // array
  asArray: __WEBPACK_IMPORTED_MODULE_0__array_asArray__["a" /* default */],
  mixMap: __WEBPACK_IMPORTED_MODULE_1__array_mixMap__["a" /* default */],
  // async
  executionDuration: __WEBPACK_IMPORTED_MODULE_2__async_executionDuration__["a" /* default */],
  promisify: __WEBPACK_IMPORTED_MODULE_3__async_promisify__["a" /* default */],
  sleep: __WEBPACK_IMPORTED_MODULE_4__async_sleep__["a" /* default */],
  // dom
  event: __WEBPACK_IMPORTED_MODULE_5__dom_event__["a" /* default */],
  // math
  clamp: __WEBPACK_IMPORTED_MODULE_6__math_clamp__["a" /* default */],
  // string
  random: __WEBPACK_IMPORTED_MODULE_7__string_random__["a" /* default */],
  // tools
  required: __WEBPACK_IMPORTED_MODULE_8__tools_required__["a" /* default */]
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__string_random__ = __webpack_require__(3);
var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/**
 * Displays the duration of execution of a function
 * @param {Function} func The function to call
 * @param {string} name The name of the timer, default(undefined)
 * @returns {*} The result of func
 */
var executionDuration = function executionDuration() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('func');
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__string_random__["a" /* default */])();
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.time(name);
              _context.next = 3;
              return func.apply(undefined, _args);

            case 3:
              result = _context.sent;

              console.timeEnd(name);
              return _context.abrupt('return', result);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function () {
      return _ref.apply(this, arguments);
    };
  }();
};

/* harmony default export */ __webpack_exports__["a"] = (executionDuration);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);


/**
 * Transforms a callback function to a promise
 * @param {Function} func The function to call
 * @returns {Function} The function returning a callback
 */
var promisify = function promisify() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('func');
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      return func.apply(undefined, args.concat([function (err, data) {
        if (err) reject(err);else resolve(data);
      }]));
    });
  };
};

/* harmony default export */ __webpack_exports__["a"] = (promisify);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);


/**
 * Sets a process asleep for a defined period
 * @param {int} delay The delay to sleep for
 * @returns {Promise<undefined>} A promise resolving once the delay has passed
 */
var sleep = function sleep() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('delay');
  return new Promise(function (resolve) {
    return setTimeout(resolve, delay);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (sleep);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_mixMap__ = __webpack_require__(2);



/**
 * Subscribes a single or multiple events on a single or multiple elements
 * @param {HTMLElement|Array<HTMLElement>} elms, The dom element to attach events on
 * @param {string|Array<string>} evts, the events to attach
 * @param {Function} cb, The function to call when the event occurs
 * @returns {Function} A function allowing to unsubscribe all the events
 */
var events = function events() {
  var elms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('elms');
  var evts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('evts');
  var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('cb');

  var add = Object(__WEBPACK_IMPORTED_MODULE_1__array_mixMap__["a" /* default */])(function (element, event) {
    return element.addEventListener(event, cb);
  });
  var remove = Object(__WEBPACK_IMPORTED_MODULE_1__array_mixMap__["a" /* default */])(function (element, event) {
    return element.removeEventListener(event, cb);
  });
  add(elms, evts);
  return function () {
    remove(elms, evts);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (events);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);


/**
 * Clamps a number between a min and a max value
 * @param {number} num The number to clamp
 * @param {number} min The min number to clamp with
 * @param {number} max The max number to clamp with
 * @returns {number} The clamped number
 */
var clamp = function clamp() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('num');
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('min');
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('max');
  return Math.min(Math.max(num, min), max);
};

/* harmony default export */ __webpack_exports__["a"] = (clamp);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTc4ZDVmMDRiYTE1YzE3OWRhZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9hc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9taXhNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3luYy9leGVjdXRpb25EdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMvcHJvbWlzaWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3luYy9zbGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL2NsYW1wLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwiZmllbGQiLCJFcnJvciIsImFzQXJyYXkiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwibWl4TWFwIiwiY2IiLCJhcmdzIiwibGVuZ3RoIiwiYXJyYXlzIiwibWFwIiwibWF4TGVuIiwiY29tcG9zZSIsInBvcyIsInZhbHVlcyIsInJlZHVjZSIsImFjYyIsInZhbHVlIiwiY29uY2F0IiwicmFuZG9tIiwiTWF0aCIsIk51bWJlciIsIk1BWF9WQUxVRSIsInRvU3RyaW5nIiwic3Vic3RyIiwiZXhlY3V0aW9uRHVyYXRpb24iLCJwcm9taXNpZnkiLCJzbGVlcCIsImV2ZW50IiwiY2xhbXAiLCJmdW5jIiwibmFtZSIsInJhbmRvbVN0cmluZyIsImNvbnNvbGUiLCJ0aW1lIiwicmVzdWx0IiwidGltZUVuZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwiZGF0YSIsImRlbGF5Iiwic2V0VGltZW91dCIsImV2ZW50cyIsImVsbXMiLCJldnRzIiwiYWRkIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibnVtIiwibWluIiwibWF4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7QUFLQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVcsR0FBK0I7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXRCRCxTQUFTLE9BQVQsQ0FBc0I7QUFBRSxRQUFNLElBQUlFLEtBQUosQ0FBYUQsS0FBYixrQkFBTjtBQUEwQyxDQUE1Rjs7QUFFQSx5REFBZUQsUUFBZixFOzs7Ozs7OztBQ1BBOztBQUVBOzs7OztBQUtBLElBQU1HLFVBQVUsU0FBVkEsT0FBVSxHQUE2QjtBQUFBLE1BQTVCQyxJQUE0Qix1RUFBckIsd0VBQUFKLENBQVMsTUFBVCxDQUFxQjs7QUFDM0MsTUFBSUssTUFBTUMsT0FBTixDQUFjRixJQUFkLE1BQXdCLElBQTVCLEVBQWtDLE9BQU9BLElBQVA7QUFDbEMsU0FBTyxDQUFDQSxJQUFELENBQVA7QUFDRCxDQUhEOztBQUtBLHlEQUFlRCxPQUFmLEU7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7QUFFQTs7Ozs7QUFLQSxJQUFNSSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFDQyxFQUFELHVFQUFNLHdFQUFBUixDQUFTLElBQVQsQ0FBTjtBQUFBLFNBQXlCLFlBQWE7QUFBQSxzQ0FB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O0FBQ1hJLFdBQU9MLElBQVAsRUFBYUMsSUFBYjtBQUNELEdBRkQ7QUFHRCxDQVBEOztBQVNBLHlEQUFlRixNQUFmLEU7Ozs7Ozs7O0FDbkJBOztBQUVBOzs7Ozs7O0FBT0EsSUFBTWYsUUFBUSxTQUFSQSxLQUFRO0FBQUEsTUFBQ3VCLEdBQUQsdUVBQU8sd0VBQUF0RCxDQUFTLEtBQVQsQ0FBUDtBQUFBLE1BQXdCdUQsR0FBeEIsdUVBQThCLHdFQUFBdkQsQ0FBUyxLQUFULENBQTlCO0FBQUEsTUFBK0N3RCxHQUEvQyx1RUFBcUQsd0VBQUF4RCxDQUFTLEtBQVQsQ0FBckQ7QUFBQSxTQUF5RXNCLEtBQUtpQyxHQUFMLENBQVNqQyxLQUFLa0MsR0FBTCxDQUFTRixHQUFULEVBQWNDLEdBQWQsQ0FBVCxFQUE2QkMsR0FBN0IsQ0FBekU7QUFBQSxDQUFkOztBQUVBLHlEQUFlekIsS0FBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5NzhkNWYwNGJhMTVjMTc5ZGFmYyIsIi8qKlxuICogVGhyb3dzIGlmIGEgcmVxdWlyZWQgZmllbGQgaXMgZW1wdHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCwgVGhlIG5hbWUgb2YgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5jb25zdCByZXF1aXJlZCA9IChmaWVsZCA9IHJlcXVpcmVkKCdmaWVsZCcpKSA9PiB7IHRocm93IG5ldyBFcnJvcihgJHtmaWVsZH0gaXMgcmVxdWlyZWRgKTsgfTtcblxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9vbHMvcmVxdWlyZWQuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBlbGVtZW50IHRvIGFuIGFycmF5IGlmIGl0IGlzbid0IGFscmVhZHkgb25lXG4gKiBAcGFyYW0geyp8QXJyYXl9IGl0ZW0gVGhlIGl0ZW0gdG8gdHJhbnNmb3JtIHRvIGFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5XG4gKi9cbmNvbnN0IGFzQXJyYXkgPSAoaXRlbSA9IHJlcXVpcmVkKCdpdGVtJykpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkgPT09IHRydWUpIHJldHVybiBpdGVtO1xuICByZXR1cm4gW2l0ZW1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXNBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcnJheS9hc0FycmF5LmpzIiwiaW1wb3J0IGFzQXJyYXkgZnJvbSAnLi9hc0FycmF5JztcbmltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbi8qKlxuICogQ3JlYXRlZCBhIGZ1bmN0aW9uIHRvIG1peCBhbmQgbWFwIG11bHRpcGxlIGFycmF5c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGNhbGwgb24gZXZlcnkgY29tYmluYWlzb25cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gRnVuY3Rpb24gdG8gbWFwIG11bHRpcGxlIGFycmF5c1xuICovXG5jb25zdCBtaXhNYXAgPSAoY2IgPSByZXF1aXJlZCgnY2InKSkgPT4gKC4uLmFyZ3MpID0+IHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hvdWxkIGJlIGNhbGxlZCB3aXRoIGF0IGxlYXN0IDIgdmFsdWVzJyk7XG4gIH1cbiAgY29uc3QgYXJyYXlzID0gYXJncy5tYXAoYXNBcnJheSk7XG4gIGNvbnN0IG1heExlbiA9IGFycmF5cy5sZW5ndGggLSAxO1xuICBjb25zdCBjb21wb3NlID0gKHBvcyA9IDAsIHZhbHVlcyA9IFtdKSA9PlxuICAgIGFycmF5c1twb3NdLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHBvcyA8IG1heExlbikge1xuICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChjb21wb3NlKHBvcyArIDEsIHZhbHVlcy5jb25jYXQoW3ZhbHVlXSkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjYiguLi52YWx1ZXMuY29uY2F0KFt2YWx1ZV0pKV0pO1xuICAgIH0sIFtdKTtcbiAgcmV0dXJuIGNvbXBvc2UoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1peE1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcnJheS9taXhNYXAuanMiLCIvKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSBzdHJpbmdcbiAqIEBwYXJhbSB7aW50fSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHJhbmRvbSBzdHJpbmdcbiAqL1xuY29uc3QgcmFuZG9tID0gKGxlbmd0aCA9IDgpID0+IChNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9WQUxVRSkudG9TdHJpbmcoMzYpLnN1YnN0cigwLCBsZW5ndGgpO1xuXG5leHBvcnQgZGVmYXVsdCByYW5kb207XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RyaW5nL3JhbmRvbS5qcyIsIi8vIGFycmF5XG5pbXBvcnQgYXNBcnJheSBmcm9tICcuL2FycmF5L2FzQXJyYXknO1xuaW1wb3J0IG1peE1hcCBmcm9tICcuL2FycmF5L21peE1hcCc7XG4vLyBhc3luY1xuaW1wb3J0IGV4ZWN1dGlvbkR1cmF0aW9uIGZyb20gJy4vYXN5bmMvZXhlY3V0aW9uRHVyYXRpb24nO1xuaW1wb3J0IHByb21pc2lmeSBmcm9tICcuL2FzeW5jL3Byb21pc2lmeSc7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi9hc3luYy9zbGVlcCc7XG4vLyBkb21cbmltcG9ydCBldmVudCBmcm9tICcuL2RvbS9ldmVudCc7XG4vLyBtYXRoXG5pbXBvcnQgY2xhbXAgZnJvbSAnLi9tYXRoL2NsYW1wJztcbi8vIHJhbmRvbVxuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3N0cmluZy9yYW5kb20nO1xuLy8gdG9vbHNcbmltcG9ydCByZXF1aXJlZCBmcm9tICcuL3Rvb2xzL3JlcXVpcmVkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBhcnJheVxuICBhc0FycmF5LFxuICBtaXhNYXAsXG4gIC8vIGFzeW5jXG4gIGV4ZWN1dGlvbkR1cmF0aW9uLFxuICBwcm9taXNpZnksXG4gIHNsZWVwLFxuICAvLyBkb21cbiAgZXZlbnQsXG4gIC8vIG1hdGhcbiAgY2xhbXAsXG4gIC8vIHN0cmluZ1xuICByYW5kb20sXG4gIC8vIHRvb2xzXG4gIHJlcXVpcmVkLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5pbXBvcnQgcmFuZG9tU3RyaW5nIGZyb20gJy4uL3N0cmluZy9yYW5kb20nO1xuXG4vKipcbiAqIERpc3BsYXlzIHRoZSBkdXJhdGlvbiBvZiBleGVjdXRpb24gb2YgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHRpbWVyLCBkZWZhdWx0KHVuZGVmaW5lZClcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0IG9mIGZ1bmNcbiAqL1xuY29uc3QgZXhlY3V0aW9uRHVyYXRpb24gPSAoZnVuYyA9IHJlcXVpcmVkKCdmdW5jJyksIG5hbWUgPSByYW5kb21TdHJpbmcoKSkgPT4gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgY29uc29sZS50aW1lKG5hbWUpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmdW5jKC4uLmFyZ3MpO1xuICBjb25zb2xlLnRpbWVFbmQobmFtZSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleGVjdXRpb25EdXJhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9leGVjdXRpb25EdXJhdGlvbi5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGEgcHJvbWlzZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbFxuICogQHJldHVybnMge0Z1bmN0aW9ufSBUaGUgZnVuY3Rpb24gcmV0dXJuaW5nIGEgY2FsbGJhY2tcbiAqL1xuY29uc3QgcHJvbWlzaWZ5ID0gKGZ1bmMgPSByZXF1aXJlZCgnZnVuYycpKSA9PiAoLi4uYXJncykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gZnVuYyguLi5hcmdzLCAoZXJyLCBkYXRhKSA9PiB7XG4gIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICBlbHNlIHJlc29sdmUoZGF0YSk7XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb21pc2lmeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9wcm9taXNpZnkuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuXG4vKipcbiAqIFNldHMgYSBwcm9jZXNzIGFzbGVlcCBmb3IgYSBkZWZpbmVkIHBlcmlvZFxuICogQHBhcmFtIHtpbnR9IGRlbGF5IFRoZSBkZWxheSB0byBzbGVlcCBmb3JcbiAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZD59IEEgcHJvbWlzZSByZXNvbHZpbmcgb25jZSB0aGUgZGVsYXkgaGFzIHBhc3NlZFxuICovXG5jb25zdCBzbGVlcCA9IChkZWxheSA9IHJlcXVpcmVkKCdkZWxheScpKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpKTtcblxuZXhwb3J0IGRlZmF1bHQgc2xlZXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXN5bmMvc2xlZXAuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuaW1wb3J0IG1peE1hcCBmcm9tICcuLi9hcnJheS9taXhNYXAnO1xuXG4vKipcbiAqIFN1YnNjcmliZXMgYSBzaW5nbGUgb3IgbXVsdGlwbGUgZXZlbnRzIG9uIGEgc2luZ2xlIG9yIG11bHRpcGxlIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fEFycmF5PEhUTUxFbGVtZW50Pn0gZWxtcywgVGhlIGRvbSBlbGVtZW50IHRvIGF0dGFjaCBldmVudHMgb25cbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IGV2dHMsIHRoZSBldmVudHMgdG8gYXR0YWNoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiwgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZXZlbnQgb2NjdXJzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gYWxsb3dpbmcgdG8gdW5zdWJzY3JpYmUgYWxsIHRoZSBldmVudHNcbiAqL1xuY29uc3QgZXZlbnRzID0gKGVsbXMgPSByZXF1aXJlZCgnZWxtcycpLCBldnRzID0gcmVxdWlyZWQoJ2V2dHMnKSwgY2IgPSByZXF1aXJlZCgnY2InKSkgPT4ge1xuICBjb25zdCBhZGQgPSBtaXhNYXAoKGVsZW1lbnQsIGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKSk7XG4gIGNvbnN0IHJlbW92ZSA9IG1peE1hcCgoZWxlbWVudCwgZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpKTtcbiAgYWRkKGVsbXMsIGV2dHMpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZShlbG1zLCBldnRzKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kb20vZXZlbnQuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuXG4vKipcbiAqIENsYW1wcyBhIG51bWJlciBiZXR3ZWVuIGEgbWluIGFuZCBhIG1heCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG51bSBUaGUgbnVtYmVyIHRvIGNsYW1wXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBtaW4gbnVtYmVyIHRvIGNsYW1wIHdpdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggVGhlIG1heCBudW1iZXIgdG8gY2xhbXAgd2l0aFxuICogQHJldHVybnMge251bWJlcn0gVGhlIGNsYW1wZWQgbnVtYmVyXG4gKi9cbmNvbnN0IGNsYW1wID0gKG51bSA9IHJlcXVpcmVkKCdudW0nKSwgbWluID0gcmVxdWlyZWQoJ21pbicpLCBtYXggPSByZXF1aXJlZCgnbWF4JykpID0+IE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhbXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9jbGFtcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=