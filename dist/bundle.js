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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array_asArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_mixMap__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__async_executionDuration__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__async_promisify__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__async_sleep__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__async_retry__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__async_command__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dom_event__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__math_clamp__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__string_random__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tools_required__ = __webpack_require__(0);
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
  retry: __WEBPACK_IMPORTED_MODULE_5__async_retry__["a" /* default */],
  command: __WEBPACK_IMPORTED_MODULE_6__async_command__["a" /* default */],
  // dom
  event: __WEBPACK_IMPORTED_MODULE_7__dom_event__["a" /* default */],
  // math
  clamp: __WEBPACK_IMPORTED_MODULE_8__math_clamp__["a" /* default */],
  // string
  random: __WEBPACK_IMPORTED_MODULE_9__string_random__["a" /* default */],
  // tools
  required: __WEBPACK_IMPORTED_MODULE_10__tools_required__["a" /* default */]
});

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sleep__ = __webpack_require__(4);
var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/**
 * Tries to run the callback a defined number of time,
 * throws when the number of tries is exceeded
 * @param {Function} cb The function to run
 * @param {int} times The number of time to try running th callback, default(2)
 * @param {int} delay The delay between each call, default(0)
 * @returns {*} The result of a valid callback
 */
var retry = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('cb');

    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$times = _ref2.times,
        times = _ref2$times === undefined ? 2 : _ref2$times,
        _ref2$delay = _ref2.delay,
        delay = _ref2$delay === undefined ? 0 : _ref2$delay;

    var tried, tryOnce;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tried = 0;

            tryOnce = function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return cb();

                      case 3:
                        return _context.abrupt('return', _context.sent);

                      case 6:
                        _context.prev = 6;
                        _context.t0 = _context['catch'](0);

                        tried += 1;

                        if (!(tried < times)) {
                          _context.next = 13;
                          break;
                        }

                        _context.next = 12;
                        return Object(__WEBPACK_IMPORTED_MODULE_1__sleep__["a" /* default */])(delay);

                      case 12:
                        return _context.abrupt('return', tryOnce());

                      case 13:
                        _context.t0.tried = tried;
                        throw _context.t0;

                      case 15:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this, [[0, 6]]);
              }));

              return function tryOnce() {
                return _ref3.apply(this, arguments);
              };
            }();

            return _context2.abrupt('return', tryOnce());

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function retry() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (retry);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_noop__ = __webpack_require__(10);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/**
 * Generates a command element based on a do and undo method
 * @param {Function} process The method called to process the command
 * @param {Function} undo The methos called to reverse the process
 * @returns {Command} The command class
 */
var command = function command() {
  var process = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('process');

  var _undo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_1__tools_noop__["a" /* default */];

  return function CommandGenerator() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var doing = null;
    var undoing = null;
    var state = {};
    var cmdClass = {
      /**
       * Executes the command
       * @returns {*} The command result
       */
      do: function _do() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var result;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(undoing !== null)) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 3;
                  return undoing;

                case 3:
                  undoing = null;

                case 4:
                  doing = process.apply(undefined, [state].concat(args));
                  _context.next = 7;
                  return doing;

                case 7:
                  result = _context.sent;
                  return _context.abrupt('return', result);

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      },

      /**
       * Executes a reverse commend to return to the previous state
       * @returns {*} The reverse command result
       */
      undo: function undo() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var result;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(doing === null)) {
                    _context3.next = 2;
                    break;
                  }

                  throw new Error('Command needs to be done before being undone');

                case 2:
                  undoing = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return doing;

                          case 2:
                            return _context2.abrupt('return', _undo.apply(undefined, [state].concat(args)));

                          case 3:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this2);
                  }))();
                  _context3.next = 5;
                  return undoing;

                case 5:
                  result = _context3.sent;

                  doing = null;
                  return _context3.abrupt('return', result);

                case 8:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2);
        }))();
      }
    };
    Object.freeze(cmdClass);
    return cmdClass;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (command);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var noop = function noop() {};

/* harmony default export */ __webpack_exports__["a"] = (noop);

/***/ }),
/* 11 */
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
/* 12 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzlmZjRjZjE4MWQ0ODNmYWViZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9hc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9taXhNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL3NsZWVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMvZXhlY3V0aW9uRHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL3Byb21pc2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMvcmV0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL2NvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9jbGFtcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlZCIsImZpZWxkIiwiRXJyb3IiLCJhc0FycmF5IiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsIm1peE1hcCIsImNiIiwiYXJncyIsImxlbmd0aCIsImFycmF5cyIsIm1hcCIsIm1heExlbiIsImNvbXBvc2UiLCJwb3MiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJ2YWx1ZSIsImNvbmNhdCIsInJhbmRvbSIsIk1hdGgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJ0b1N0cmluZyIsInN1YnN0ciIsInNsZWVwIiwiZGVsYXkiLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJleGVjdXRpb25EdXJhdGlvbiIsInByb21pc2lmeSIsInJldHJ5IiwiY29tbWFuZCIsImV2ZW50IiwiY2xhbXAiLCJmdW5jIiwibmFtZSIsInJhbmRvbVN0cmluZyIsImNvbnNvbGUiLCJ0aW1lIiwicmVzdWx0IiwidGltZUVuZCIsInJlamVjdCIsImVyciIsImRhdGEiLCJ0aW1lcyIsInRyaWVkIiwidHJ5T25jZSIsInByb2Nlc3MiLCJ1bmRvIiwiQ29tbWFuZEdlbmVyYXRvciIsImRvaW5nIiwidW5kb2luZyIsInN0YXRlIiwiY21kQ2xhc3MiLCJkbyIsIk9iamVjdCIsImZyZWV6ZSIsIm5vb3AiLCJldmVudHMiLCJlbG1zIiwiZXZ0cyIsImFkZCIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm51bSIsIm1pbiIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7Ozs7O0FBS0EsSUFBTUEsV0FBVyxTQUFYQSxRQUFXLEdBQStCO0FBQUEsTUFBOUJDLEtBQThCLHVFQUF0QkQsU0FBUyxPQUFULENBQXNCO0FBQUUsUUFBTSxJQUFJRSxLQUFKLENBQWFELEtBQWIsa0JBQU47QUFBMEMsQ0FBNUY7O0FBRUEseURBQWVELFFBQWYsRTs7Ozs7Ozs7QUNQQTs7QUFFQTs7Ozs7QUFLQSxJQUFNRyxVQUFVLFNBQVZBLE9BQVUsR0FBNkI7QUFBQSxNQUE1QkMsSUFBNEIsdUVBQXJCLHdFQUFBSixDQUFTLE1BQVQsQ0FB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LElBQWlELHVFQUExQyx3RUFBQWhFLENBQVMsTUFBVCxDQUEwQztBQUFBLE1BQXhCUSxFQUF3Qix1RUFBbkIsd0VBQUFSLENBQVMsSUFBVCxDQUFtQjs7QUFDeEYsTUFBTWlFLE1BQU0sc0VBQUExRCxDQUFPLFVBQUMyRCxPQUFELEVBQVU5QixLQUFWO0FBQUEsV0FBb0I4QixRQUFRQyxnQkFBUixDQUF5Qi9CLEtBQXpCLEVBQWdDNUIsRUFBaEMsQ0FBcEI7QUFBQSxHQUFQLENBQVo7QUFDQSxNQUFNNEQsU0FBUyxzRUFBQTdELENBQU8sVUFBQzJELE9BQUQsRUFBVTlCLEtBQVY7QUFBQSxXQUFvQjhCLFFBQVFHLG1CQUFSLENBQTRCakMsS0FBNUIsRUFBbUM1QixFQUFuQyxDQUFwQjtBQUFBLEdBQVAsQ0FBZjtBQUNBeUQsTUFBSUYsSUFBSixFQUFVQyxJQUFWO0FBQ0EsU0FBTyxZQUFNO0FBQ1hJLFdBQU9MLElBQVAsRUFBYUMsSUFBYjtBQUNELEdBRkQ7QUFHRCxDQVBEOztBQVNBLHlEQUFlRixNQUFmLEU7Ozs7Ozs7O0FDbkJBOztBQUVBOzs7Ozs7O0FBT0EsSUFBTXpCLFFBQVEsU0FBUkEsS0FBUTtBQUFBLE1BQUNpQyxHQUFELHVFQUFPLHdFQUFBdEUsQ0FBUyxLQUFULENBQVA7QUFBQSxNQUF3QnVFLEdBQXhCLHVFQUE4Qix3RUFBQXZFLENBQVMsS0FBVCxDQUE5QjtBQUFBLE1BQStDd0UsR0FBL0MsdUVBQXFELHdFQUFBeEUsQ0FBUyxLQUFULENBQXJEO0FBQUEsU0FBeUVzQixLQUFLaUQsR0FBTCxDQUFTakQsS0FBS2tELEdBQUwsQ0FBU0YsR0FBVCxFQUFjQyxHQUFkLENBQVQsRUFBNkJDLEdBQTdCLENBQXpFO0FBQUEsQ0FBZDs7QUFFQSx5REFBZW5DLEtBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzlmZjRjZjE4MWQ0ODNmYWViZGYiLCIvKipcbiAqIFRocm93cyBpZiBhIHJlcXVpcmVkIGZpZWxkIGlzIGVtcHR5XG4gKiBAcGFyYW0ge3N0cmluZ30gZmllbGQsIFRoZSBuYW1lIG9mIHRoZSByZXF1aXJlZCBmaWVsZFxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuY29uc3QgcmVxdWlyZWQgPSAoZmllbGQgPSByZXF1aXJlZCgnZmllbGQnKSkgPT4geyB0aHJvdyBuZXcgRXJyb3IoYCR7ZmllbGR9IGlzIHJlcXVpcmVkYCk7IH07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVpcmVkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rvb2xzL3JlcXVpcmVkLmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gZWxlbWVudCB0byBhbiBhcnJheSBpZiBpdCBpc24ndCBhbHJlYWR5IG9uZVxuICogQHBhcmFtIHsqfEFycmF5fSBpdGVtIFRoZSBpdGVtIHRvIHRyYW5zZm9ybSB0byBhcnJheVxuICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheVxuICovXG5jb25zdCBhc0FycmF5ID0gKGl0ZW0gPSByZXF1aXJlZCgnaXRlbScpKSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pID09PSB0cnVlKSByZXR1cm4gaXRlbTtcbiAgcmV0dXJuIFtpdGVtXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXJyYXkvYXNBcnJheS5qcyIsImltcG9ydCBhc0FycmF5IGZyb20gJy4vYXNBcnJheSc7XG5pbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuXG4vKipcbiAqIENyZWF0ZWQgYSBmdW5jdGlvbiB0byBtaXggYW5kIG1hcCBtdWx0aXBsZSBhcnJheXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBjYWxsIG9uIGV2ZXJ5IGNvbWJpbmFpc29uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEZ1bmN0aW9uIHRvIG1hcCBtdWx0aXBsZSBhcnJheXNcbiAqL1xuY29uc3QgbWl4TWFwID0gKGNiID0gcmVxdWlyZWQoJ2NiJykpID0+ICguLi5hcmdzKSA9PiB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Nob3VsZCBiZSBjYWxsZWQgd2l0aCBhdCBsZWFzdCAyIHZhbHVlcycpO1xuICB9XG4gIGNvbnN0IGFycmF5cyA9IGFyZ3MubWFwKGFzQXJyYXkpO1xuICBjb25zdCBtYXhMZW4gPSBhcnJheXMubGVuZ3RoIC0gMTtcbiAgY29uc3QgY29tcG9zZSA9IChwb3MgPSAwLCB2YWx1ZXMgPSBbXSkgPT5cbiAgICBhcnJheXNbcG9zXS5yZWR1Y2UoKGFjYywgdmFsdWUpID0+IHtcbiAgICAgIGlmIChwb3MgPCBtYXhMZW4pIHtcbiAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoY29tcG9zZShwb3MgKyAxLCB2YWx1ZXMuY29uY2F0KFt2YWx1ZV0pKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChbY2IoLi4udmFsdWVzLmNvbmNhdChbdmFsdWVdKSldKTtcbiAgICB9LCBbXSk7XG4gIHJldHVybiBjb21wb3NlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtaXhNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXJyYXkvbWl4TWFwLmpzIiwiLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gc3RyaW5nXG4gKiBAcGFyYW0ge2ludH0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ30gYSByYW5kb20gc3RyaW5nXG4gKi9cbmNvbnN0IHJhbmRvbSA9IChsZW5ndGggPSA4KSA9PiAoTWF0aC5yYW5kb20oKSAqIE51bWJlci5NQVhfVkFMVUUpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMCwgbGVuZ3RoKTtcblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0cmluZy9yYW5kb20uanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuXG4vKipcbiAqIFNldHMgYSBwcm9jZXNzIGFzbGVlcCBmb3IgYSBkZWZpbmVkIHBlcmlvZFxuICogQHBhcmFtIHtpbnR9IGRlbGF5IFRoZSBkZWxheSB0byBzbGVlcCBmb3JcbiAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZD59IEEgcHJvbWlzZSByZXNvbHZpbmcgb25jZSB0aGUgZGVsYXkgaGFzIHBhc3NlZFxuICovXG5jb25zdCBzbGVlcCA9IChkZWxheSA9IHJlcXVpcmVkKCdkZWxheScpKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpKTtcblxuZXhwb3J0IGRlZmF1bHQgc2xlZXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXN5bmMvc2xlZXAuanMiLCIvLyBhcnJheVxuaW1wb3J0IGFzQXJyYXkgZnJvbSAnLi9hcnJheS9hc0FycmF5JztcbmltcG9ydCBtaXhNYXAgZnJvbSAnLi9hcnJheS9taXhNYXAnO1xuLy8gYXN5bmNcbmltcG9ydCBleGVjdXRpb25EdXJhdGlvbiBmcm9tICcuL2FzeW5jL2V4ZWN1dGlvbkR1cmF0aW9uJztcbmltcG9ydCBwcm9taXNpZnkgZnJvbSAnLi9hc3luYy9wcm9taXNpZnknO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4vYXN5bmMvc2xlZXAnO1xuaW1wb3J0IHJldHJ5IGZyb20gJy4vYXN5bmMvcmV0cnknO1xuaW1wb3J0IGNvbW1hbmQgZnJvbSAnLi9hc3luYy9jb21tYW5kJztcbi8vIGRvbVxuaW1wb3J0IGV2ZW50IGZyb20gJy4vZG9tL2V2ZW50Jztcbi8vIG1hdGhcbmltcG9ydCBjbGFtcCBmcm9tICcuL21hdGgvY2xhbXAnO1xuLy8gcmFuZG9tXG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vc3RyaW5nL3JhbmRvbSc7XG4vLyB0b29sc1xuaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4vdG9vbHMvcmVxdWlyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGFycmF5XG4gIGFzQXJyYXksXG4gIG1peE1hcCxcbiAgLy8gYXN5bmNcbiAgZXhlY3V0aW9uRHVyYXRpb24sXG4gIHByb21pc2lmeSxcbiAgc2xlZXAsXG4gIHJldHJ5LFxuICBjb21tYW5kLFxuICAvLyBkb21cbiAgZXZlbnQsXG4gIC8vIG1hdGhcbiAgY2xhbXAsXG4gIC8vIHN0cmluZ1xuICByYW5kb20sXG4gIC8vIHRvb2xzXG4gIHJlcXVpcmVkLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5pbXBvcnQgcmFuZG9tU3RyaW5nIGZyb20gJy4uL3N0cmluZy9yYW5kb20nO1xuXG4vKipcbiAqIERpc3BsYXlzIHRoZSBkdXJhdGlvbiBvZiBleGVjdXRpb24gb2YgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHRpbWVyLCBkZWZhdWx0KHVuZGVmaW5lZClcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0IG9mIGZ1bmNcbiAqL1xuY29uc3QgZXhlY3V0aW9uRHVyYXRpb24gPSAoZnVuYyA9IHJlcXVpcmVkKCdmdW5jJyksIG5hbWUgPSByYW5kb21TdHJpbmcoKSkgPT4gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgY29uc29sZS50aW1lKG5hbWUpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmdW5jKC4uLmFyZ3MpO1xuICBjb25zb2xlLnRpbWVFbmQobmFtZSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleGVjdXRpb25EdXJhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9leGVjdXRpb25EdXJhdGlvbi5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGEgcHJvbWlzZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbFxuICogQHJldHVybnMge0Z1bmN0aW9ufSBUaGUgZnVuY3Rpb24gcmV0dXJuaW5nIGEgY2FsbGJhY2tcbiAqL1xuY29uc3QgcHJvbWlzaWZ5ID0gKGZ1bmMgPSByZXF1aXJlZCgnZnVuYycpKSA9PiAoLi4uYXJncykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gZnVuYyguLi5hcmdzLCAoZXJyLCBkYXRhKSA9PiB7XG4gIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICBlbHNlIHJlc29sdmUoZGF0YSk7XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb21pc2lmeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9wcm9taXNpZnkuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4vc2xlZXAnO1xuXG4vKipcbiAqIFRyaWVzIHRvIHJ1biB0aGUgY2FsbGJhY2sgYSBkZWZpbmVkIG51bWJlciBvZiB0aW1lLFxuICogdGhyb3dzIHdoZW4gdGhlIG51bWJlciBvZiB0cmllcyBpcyBleGNlZWRlZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgVGhlIGZ1bmN0aW9uIHRvIHJ1blxuICogQHBhcmFtIHtpbnR9IHRpbWVzIFRoZSBudW1iZXIgb2YgdGltZSB0byB0cnkgcnVubmluZyB0aCBjYWxsYmFjaywgZGVmYXVsdCgyKVxuICogQHBhcmFtIHtpbnR9IGRlbGF5IFRoZSBkZWxheSBiZXR3ZWVuIGVhY2ggY2FsbCwgZGVmYXVsdCgwKVxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgb2YgYSB2YWxpZCBjYWxsYmFja1xuICovXG5jb25zdCByZXRyeSA9IGFzeW5jIChjYiA9IHJlcXVpcmVkKCdjYicpLCB7IHRpbWVzID0gMiwgZGVsYXkgPSAwIH0gPSB7fSkgPT4ge1xuICBsZXQgdHJpZWQgPSAwO1xuICBjb25zdCB0cnlPbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgY2IoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0cmllZCArPSAxO1xuICAgICAgaWYgKHRyaWVkIDwgdGltZXMpIHtcbiAgICAgICAgYXdhaXQgc2xlZXAoZGVsYXkpO1xuICAgICAgICByZXR1cm4gdHJ5T25jZSgpO1xuICAgICAgfVxuICAgICAgZS50cmllZCA9IHRyaWVkO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB0cnlPbmNlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9yZXRyeS5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5pbXBvcnQgbm9vcCBmcm9tICcuLi90b29scy9ub29wJztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBjb21tYW5kIGVsZW1lbnQgYmFzZWQgb24gYSBkbyBhbmQgdW5kbyBtZXRob2RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb2Nlc3MgVGhlIG1ldGhvZCBjYWxsZWQgdG8gcHJvY2VzcyB0aGUgY29tbWFuZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gdW5kbyBUaGUgbWV0aG9zIGNhbGxlZCB0byByZXZlcnNlIHRoZSBwcm9jZXNzXG4gKiBAcmV0dXJucyB7Q29tbWFuZH0gVGhlIGNvbW1hbmQgY2xhc3NcbiAqL1xuY29uc3QgY29tbWFuZCA9IChwcm9jZXNzID0gcmVxdWlyZWQoJ3Byb2Nlc3MnKSwgdW5kbyA9IG5vb3ApID0+XG4gIGZ1bmN0aW9uIENvbW1hbmRHZW5lcmF0b3IoLi4uYXJncykge1xuICAgIGxldCBkb2luZyA9IG51bGw7XG4gICAgbGV0IHVuZG9pbmcgPSBudWxsO1xuICAgIGNvbnN0IHN0YXRlID0ge307XG4gICAgY29uc3QgY21kQ2xhc3MgPSB7XG4gICAgICAvKipcbiAgICAgICAqIEV4ZWN1dGVzIHRoZSBjb21tYW5kXG4gICAgICAgKiBAcmV0dXJucyB7Kn0gVGhlIGNvbW1hbmQgcmVzdWx0XG4gICAgICAgKi9cbiAgICAgIGFzeW5jIGRvKCkge1xuICAgICAgICBpZiAodW5kb2luZyAhPT0gbnVsbCkge1xuICAgICAgICAgIGF3YWl0IHVuZG9pbmc7XG4gICAgICAgICAgdW5kb2luZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZG9pbmcgPSBwcm9jZXNzKHN0YXRlLCAuLi5hcmdzKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZG9pbmc7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBFeGVjdXRlcyBhIHJldmVyc2UgY29tbWVuZCB0byByZXR1cm4gdG8gdGhlIHByZXZpb3VzIHN0YXRlXG4gICAgICAgKiBAcmV0dXJucyB7Kn0gVGhlIHJldmVyc2UgY29tbWFuZCByZXN1bHRcbiAgICAgICAqL1xuICAgICAgYXN5bmMgdW5kbygpIHtcbiAgICAgICAgaWYgKGRvaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21tYW5kIG5lZWRzIHRvIGJlIGRvbmUgYmVmb3JlIGJlaW5nIHVuZG9uZScpO1xuICAgICAgICB9XG4gICAgICAgIHVuZG9pbmcgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IGRvaW5nO1xuICAgICAgICAgIHJldHVybiB1bmRvKHN0YXRlLCAuLi5hcmdzKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdW5kb2luZztcbiAgICAgICAgZG9pbmcgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSxcbiAgICB9O1xuICAgIE9iamVjdC5mcmVlemUoY21kQ2xhc3MpO1xuICAgIHJldHVybiBjbWRDbGFzcztcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFuZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9jb21tYW5kLmpzIiwiY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBub29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rvb2xzL25vb3AuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuaW1wb3J0IG1peE1hcCBmcm9tICcuLi9hcnJheS9taXhNYXAnO1xuXG4vKipcbiAqIFN1YnNjcmliZXMgYSBzaW5nbGUgb3IgbXVsdGlwbGUgZXZlbnRzIG9uIGEgc2luZ2xlIG9yIG11bHRpcGxlIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fEFycmF5PEhUTUxFbGVtZW50Pn0gZWxtcywgVGhlIGRvbSBlbGVtZW50IHRvIGF0dGFjaCBldmVudHMgb25cbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IGV2dHMsIHRoZSBldmVudHMgdG8gYXR0YWNoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiwgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZXZlbnQgb2NjdXJzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gYWxsb3dpbmcgdG8gdW5zdWJzY3JpYmUgYWxsIHRoZSBldmVudHNcbiAqL1xuY29uc3QgZXZlbnRzID0gKGVsbXMgPSByZXF1aXJlZCgnZWxtcycpLCBldnRzID0gcmVxdWlyZWQoJ2V2dHMnKSwgY2IgPSByZXF1aXJlZCgnY2InKSkgPT4ge1xuICBjb25zdCBhZGQgPSBtaXhNYXAoKGVsZW1lbnQsIGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKSk7XG4gIGNvbnN0IHJlbW92ZSA9IG1peE1hcCgoZWxlbWVudCwgZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpKTtcbiAgYWRkKGVsbXMsIGV2dHMpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZShlbG1zLCBldnRzKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kb20vZXZlbnQuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuXG4vKipcbiAqIENsYW1wcyBhIG51bWJlciBiZXR3ZWVuIGEgbWluIGFuZCBhIG1heCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG51bSBUaGUgbnVtYmVyIHRvIGNsYW1wXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBtaW4gbnVtYmVyIHRvIGNsYW1wIHdpdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggVGhlIG1heCBudW1iZXIgdG8gY2xhbXAgd2l0aFxuICogQHJldHVybnMge251bWJlcn0gVGhlIGNsYW1wZWQgbnVtYmVyXG4gKi9cbmNvbnN0IGNsYW1wID0gKG51bSA9IHJlcXVpcmVkKCdudW0nKSwgbWluID0gcmVxdWlyZWQoJ21pbicpLCBtYXggPSByZXF1aXJlZCgnbWF4JykpID0+IE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhbXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9jbGFtcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=