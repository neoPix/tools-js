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


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('item');

  if (Array.isArray(item) === true) return item;
  return [item];
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_required__ = __webpack_require__(0);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




/* harmony default export */ __webpack_exports__["a"] = (function () {
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
          return acc.concat(compose(pos + 1, [].concat(_toConsumableArray(values), [value])));
        }
        return acc.concat([cb.apply(undefined, [].concat(_toConsumableArray(values), [value]))]);
      }, []);
    };
    return compose();
  };
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  return (Math.random() * Number.MAX_VALUE).toString(36).substr(0, length);
});

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




/* harmony default export */ __webpack_exports__["a"] = (function () {
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
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function () {
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
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('delay');
  return new Promise(function (resolve) {
    return setTimeout(resolve, delay);
  });
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_mixMap__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = (function () {
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
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('num');
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('min');
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('max');
  return Math.min(Math.max(num, min), max);
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2Y0MjU2N2YzMDg4MzkwYjVkOTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9hc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9taXhNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3luYy9leGVjdXRpb25EdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMvcHJvbWlzaWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3luYy9zbGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoL2NsYW1wLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwiZmllbGQiLCJFcnJvciIsIml0ZW0iLCJBcnJheSIsImlzQXJyYXkiLCJjYiIsImFyZ3MiLCJsZW5ndGgiLCJhcnJheXMiLCJtYXAiLCJtYXhMZW4iLCJjb21wb3NlIiwicG9zIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwidmFsdWUiLCJjb25jYXQiLCJNYXRoIiwicmFuZG9tIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwidG9TdHJpbmciLCJzdWJzdHIiLCJhc0FycmF5IiwibWl4TWFwIiwiZXhlY3V0aW9uRHVyYXRpb24iLCJwcm9taXNpZnkiLCJzbGVlcCIsImV2ZW50IiwiY2xhbXAiLCJmdW5jIiwibmFtZSIsInJhbmRvbVN0cmluZyIsImNvbnNvbGUiLCJ0aW1lIiwicmVzdWx0IiwidGltZUVuZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXJyIiwiZGF0YSIsImRlbGF5Iiwic2V0VGltZW91dCIsImVsbXMiLCJldnRzIiwiYWRkIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVu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ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3ZjQyNTY3ZjMwODgzOTBiNWQ5OCIsImNvbnN0IHJlcXVpcmVkID0gKGZpZWxkID0gcmVxdWlyZWQoJ2ZpZWxkJykpID0+IHsgdGhyb3cgbmV3IEVycm9yKGAke2ZpZWxkfSBpcyByZXF1aXJlZGApOyB9O1xuXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90b29scy9yZXF1aXJlZC5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IChpdGVtID0gcmVxdWlyZWQoJ2l0ZW0nKSkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSA9PT0gdHJ1ZSkgcmV0dXJuIGl0ZW07XG4gIHJldHVybiBbaXRlbV07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FycmF5L2FzQXJyYXkuanMiLCJpbXBvcnQgYXNBcnJheSBmcm9tICcuL2FzQXJyYXknO1xuaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuZXhwb3J0IGRlZmF1bHQgKGNiID0gcmVxdWlyZWQoJ2NiJykpID0+ICguLi5hcmdzKSA9PiB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nob3VsZCBiZSBjYWxsZWQgd2l0aCBhdCBsZWFzdCAyIHZhbHVlcycpO1xuICB9XG4gIGNvbnN0IGFycmF5cyA9IGFyZ3MubWFwKGFzQXJyYXkpO1xuICBjb25zdCBtYXhMZW4gPSBhcnJheXMubGVuZ3RoIC0gMTtcbiAgY29uc3QgY29tcG9zZSA9IChwb3MgPSAwLCB2YWx1ZXMgPSBbXSkgPT5cbiAgICBhcnJheXNbcG9zXS5yZWR1Y2UoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgIGlmIChwb3MgPCBtYXhMZW4pIHtcbiAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoY29tcG9zZShwb3MgKyAxLCBbLi4udmFsdWVzLCB2YWx1ZV0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjYiguLi5bLi4udmFsdWVzLCB2YWx1ZV0pXSk7XG4gICAgfSwgW10pO1xuICByZXR1cm4gY29tcG9zZSgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcnJheS9taXhNYXAuanMiLCJleHBvcnQgZGVmYXVsdCAobGVuZ3RoID0gOCkgPT4gKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1ZBTFVFKS50b1N0cmluZygzNikuc3Vic3RyKDAsIGxlbmd0aCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RyaW5nL3JhbmRvbS5qcyIsIi8vIGFycmF5XG5pbXBvcnQgYXNBcnJheSBmcm9tICcuL2FycmF5L2FzQXJyYXknO1xuaW1wb3J0IG1peE1hcCBmcm9tICcuL2FycmF5L21peE1hcCc7XG4vLyBhc3luY1xuaW1wb3J0IGV4ZWN1dGlvbkR1cmF0aW9uIGZyb20gJy4vYXN5bmMvZXhlY3V0aW9uRHVyYXRpb24nO1xuaW1wb3J0IHByb21pc2lmeSBmcm9tICcuL2FzeW5jL3Byb21pc2lmeSc7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi9hc3luYy9zbGVlcCc7XG4vLyBkb21cbmltcG9ydCBldmVudCBmcm9tICcuL2RvbS9ldmVudCc7XG4vLyBtYXRoXG5pbXBvcnQgY2xhbXAgZnJvbSAnLi9tYXRoL2NsYW1wJztcbi8vIHJhbmRvbVxuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3N0cmluZy9yYW5kb20nO1xuLy8gdG9vbHNcbmltcG9ydCByZXF1aXJlZCBmcm9tICcuL3Rvb2xzL3JlcXVpcmVkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBhcnJheVxuICBhc0FycmF5LFxuICBtaXhNYXAsXG4gIC8vIGFzeW5jXG4gIGV4ZWN1dGlvbkR1cmF0aW9uLFxuICBwcm9taXNpZnksXG4gIHNsZWVwLFxuICAvLyBkb21cbiAgZXZlbnQsXG4gIC8vIG1hdGhcbiAgY2xhbXAsXG4gIC8vIHN0cmluZ1xuICByYW5kb20sXG4gIC8vIHRvb2xzXG4gIHJlcXVpcmVkLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5pbXBvcnQgcmFuZG9tU3RyaW5nIGZyb20gJy4uL3N0cmluZy9yYW5kb20nO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuYyA9IHJlcXVpcmVkKCdmdW5jJyksIG5hbWUgPSByYW5kb21TdHJpbmcoKSkgPT4gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgY29uc29sZS50aW1lKG5hbWUpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmdW5jKC4uLmFyZ3MpO1xuICBjb25zb2xlLnRpbWVFbmQobmFtZSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FzeW5jL2V4ZWN1dGlvbkR1cmF0aW9uLmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmMgPSByZXF1aXJlZCgnZnVuYycpKSA9PiAoLi4uYXJncykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gZnVuYyguLi5hcmdzLCAoZXJyLCBkYXRhKSA9PiB7XG4gIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICBlbHNlIHJlc29sdmUoZGF0YSk7XG59KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXN5bmMvcHJvbWlzaWZ5LmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuZXhwb3J0IGRlZmF1bHQgKGRlbGF5ID0gcmVxdWlyZWQoJ2RlbGF5JykpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FzeW5jL3NsZWVwLmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcbmltcG9ydCBtaXhNYXAgZnJvbSAnLi4vYXJyYXkvbWl4TWFwJztcblxuZXhwb3J0IGRlZmF1bHQgKGVsbXMgPSByZXF1aXJlZCgnZWxtcycpLCBldnRzID0gcmVxdWlyZWQoJ2V2dHMnKSwgY2IgPSByZXF1aXJlZCgnY2InKSkgPT4ge1xuICBjb25zdCBhZGQgPSBtaXhNYXAoKGVsZW1lbnQsIGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKSk7XG4gIGNvbnN0IHJlbW92ZSA9IG1peE1hcCgoZWxlbWVudCwgZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpKTtcbiAgYWRkKGVsbXMsIGV2dHMpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZShlbG1zLCBldnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZG9tL2V2ZW50LmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuZXhwb3J0IGRlZmF1bHQgKG51bSA9IHJlcXVpcmVkKCdudW0nKSwgbWluID0gcmVxdWlyZWQoJ21pbicpLCBtYXggPSByZXF1aXJlZCgnbWF4JykpID0+IE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL2NsYW1wLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==