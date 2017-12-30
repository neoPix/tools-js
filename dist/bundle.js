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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__async_commandBus__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cache_cache__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dom_event__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__math_clamp__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__string_random__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tools_required__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__value_funcOrValue__ = __webpack_require__(15);
// array


// async






// async

// dom

// math

// random

// tools

// value


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
  commandBus: __WEBPACK_IMPORTED_MODULE_7__async_commandBus__["a" /* default */],
  // cache
  cache: __WEBPACK_IMPORTED_MODULE_8__cache_cache__["a" /* default */],
  // dom
  event: __WEBPACK_IMPORTED_MODULE_9__dom_event__["a" /* default */],
  // math
  clamp: __WEBPACK_IMPORTED_MODULE_10__math_clamp__["a" /* default */],
  // string
  random: __WEBPACK_IMPORTED_MODULE_11__string_random__["a" /* default */],
  // tools
  required: __WEBPACK_IMPORTED_MODULE_12__tools_required__["a" /* default */],
  // value
  funcOrValue: __WEBPACK_IMPORTED_MODULE_13__value_funcOrValue__["a" /* default */]
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
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Generates a CommandBus able to do, undo and redo a command suite
 * @param {int} size The max size of the command bus
 * @returns {CommandBus} An instance of a bus of command
 */
function CommandBusGenerator() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var running = null;
  var position = 0;
  var commands = [];
  var bus = {
    /**
     * @returns {int} The position in the bus
     */
    get position() {
      return position;
    },
    /**
     * @returns {int} The current size of the bus
     */
    get size() {
      return commands.length;
    },
    /**
     * Exexutes a command and push it in th bus
     * @param {Command} command A command to add in the bus
     * @returns {Promise<undefined>} A promise to the end of the command
     */
    do: function _do(command) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                running = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return running;

                        case 2:
                          commands.splice(position + 1, size);
                          if (commands.length === size) {
                            commands.shift();
                          }
                          commands.push(command);
                          position = commands.length - 1;
                          _context.next = 8;
                          return command.do();

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, _this);
                }))();
                _context2.next = 3;
                return running;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }))();
    },

    /**
     * Undoes the last action pushed in the bus
     * @returns {Promise<undefined>} A promise to the end of the command
     */
    undo: function undo() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                running = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  var newPosition, command;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return running;

                        case 2:
                          newPosition = position - 1;

                          if (!(newPosition >= 0)) {
                            _context3.next = 8;
                            break;
                          }

                          command = commands[position];
                          _context3.next = 7;
                          return command.undo();

                        case 7:
                          position = newPosition;

                        case 8:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, _this2);
                }))();
                _context4.next = 3;
                return running;

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this2);
      }))();
    },

    /**
     * Redoes the last action undone from the bus
     * @returns {Promise<undefined>} A promise to the end of the command
     */
    redo: function redo() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                running = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  var newPosition, command;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return running;

                        case 2:
                          newPosition = position + 1;

                          if (!(newPosition < commands.length)) {
                            _context5.next = 8;
                            break;
                          }

                          command = commands[newPosition];
                          _context5.next = 7;
                          return command.do();

                        case 7:
                          position = newPosition;

                        case 8:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, _this3);
                }))();
                _context6.next = 3;
                return running;

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, _this3);
      }))();
    }
  };

  Object.freeze(bus);

  return bus;
}

/* harmony default export */ __webpack_exports__["a"] = (CommandBusGenerator);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);

/**
 * Creates a cache manager instance
 * @param {Function} loader The loading method used to load data
 * @param {number} validity The duration for which the cache is valid
 * @returns {CacheManager} A cache management instance
 */
function cacheGenerator() {
  var loader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('loader');
  var validity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

  var cache = new Map();
  var cacheManager = {
    /**
     * Returns an object from cache, creates on if empty
     * @param {*} key The key to the object in cache
     * @returns {*} The object in cache
     */
    get: function get(key) {
      if (cache.has(key) === false || Date.now() >= cache.get(key).validity) {
        cache.set(key, {
          item: loader(key),
          validity: Date.now() + validity
        });
      }
      return cache.get(key).item;
    },

    /**
     * Removes an object from cache using it's key
     * @param {*} key The key to the object in cache
     * @returns {undefined}
     */
    remove: function remove(key) {
      cache.delete(key);
    },

    /**
     * Clears all item from the cache
     * @returns {undefined}
     */
    clear: function clear() {
      var _this = this;

      Array.from(cache.keys()).map(function (key) {
        return _this.remove(key);
      });
    },

    /**
     * @returns {int} The size of the cache
     */
    get size() {
      return cache.size;
    }
  };

  Object.freeze(cacheManager);

  return cacheManager;
}

/* harmony default export */ __webpack_exports__["a"] = (cacheGenerator);

/***/ }),
/* 13 */
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
/* 14 */
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

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_required__ = __webpack_require__(0);


/**
 * Takes a value or a function and returns the result of the function, or the value
 * @param {*|Function} value, the value or a function returning the value
 * @returns {*} A value
 */
var funcOrValue = function funcOrValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('value');

  if (value instanceof Function) {
    return value();
  }
  return value;
};

/* harmony default export */ __webpack_exports__["a"] = (funcOrValue);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTFmZTg4NjA0MDAwNDYwM2ZlZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9hc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9taXhNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL3NsZWVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMvZXhlY3V0aW9uRHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL3Byb21pc2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMvcmV0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL2NvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL2NvbW1hbmRCdXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhY2hlL2NhY2hlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvY2xhbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlL2Z1bmNPclZhbHVlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwiZmllbGQiLCJFcnJvciIsImFzQXJyYXkiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwibWl4TWFwIiwiY2IiLCJhcmdzIiwibGVuZ3RoIiwiYXJyYXlzIiwibWFwIiwibWF4TGVuIiwiY29tcG9zZSIsInBvcyIsInZhbHVlcyIsInJlZHVjZSIsImFjYyIsInZhbHVlIiwiY29uY2F0IiwicmFuZG9tIiwiTWF0aCIsIk51bWJlciIsIk1BWF9WQUxVRSIsInRvU3RyaW5nIiwic3Vic3RyIiwic2xlZXAiLCJkZWxheSIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsImV4ZWN1dGlvbkR1cmF0aW9uIiwicHJvbWlzaWZ5IiwicmV0cnkiLCJjb21tYW5kIiwiY29tbWFuZEJ1cyIsImNhY2hlIiwiZXZlbnQiLCJjbGFtcCIsImZ1bmNPclZhbHVlIiwiZnVuYyIsIm5hbWUiLCJyYW5kb21TdHJpbmciLCJjb25zb2xlIiwidGltZSIsInJlc3VsdCIsInRpbWVFbmQiLCJyZWplY3QiLCJlcnIiLCJkYXRhIiwidGltZXMiLCJ0cmllZCIsInRyeU9uY2UiLCJwcm9jZXNzIiwidW5kbyIsIkNvbW1hbmRHZW5lcmF0b3IiLCJkb2luZyIsInVuZG9pbmciLCJzdGF0ZSIsImNtZENsYXNzIiwiZG8iLCJPYmplY3QiLCJmcmVlemUiLCJub29wIiwiQ29tbWFuZEJ1c0dlbmVyYXRvciIsInNpemUiLCJydW5uaW5nIiwicG9zaXRpb24iLCJjb21tYW5kcyIsImJ1cyIsInNwbGljZSIsInNoaWZ0IiwicHVzaCIsIm5ld1Bvc2l0aW9uIiwicmVkbyIsImNhY2hlR2VuZXJhdG9yIiwibG9hZGVyIiwidmFsaWRpdHkiLCJJbmZpbml0eSIsIk1hcCIsImNhY2hlTWFuYWdlciIsImdldCIsImtleSIsImhhcyIsIkRhdGUiLCJub3ciLCJzZXQiLCJyZW1vdmUiLCJkZWxldGUiLCJjbGVhciIsImZyb20iLCJrZXlzIiwiZXZlbnRzIiwiZWxtcyIsImV2dHMiLCJhZGQiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJudW0iLCJtaW4iLCJtYXgiLCJGdW5jdGlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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VCxDQUFQO0FBQUEsTUFBd0JxRyxHQUF4Qix1RUFBOEIsd0VBQUFyRyxDQUFTLEtBQVQsQ0FBOUI7QUFBQSxNQUErQ3NHLEdBQS9DLHVFQUFxRCx3RUFBQXRHLENBQVMsS0FBVCxDQUFyRDtBQUFBLFNBQXlFc0IsS0FBSytFLEdBQUwsQ0FBUy9FLEtBQUtnRixHQUFMLENBQVNGLEdBQVQsRUFBY0MsR0FBZCxDQUFULEVBQTZCQyxHQUE3QixDQUF6RTtBQUFBLENBQWQ7O0FBRUEseURBQWUvRCxLQUFmLEU7Ozs7Ozs7O0FDWEE7O0FBRUE7Ozs7O0FBS0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLEdBQStCO0FBQUEsTUFBOUJyQixLQUE4Qix1RUFBdEIsd0VBQUFuQixDQUFTLE9BQVQsQ0FBc0I7O0FBQ2pELE1BQUltQixpQkFBaUJvRixRQUFyQixFQUErQjtBQUM3QixXQUFPcEYsT0FBUDtBQUNEO0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBTEQ7O0FBT0EseURBQWVxQixXQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUxZmU4ODYwNDAwMDQ2MDNmZWQ1IiwiLyoqXG4gKiBUaHJvd3MgaWYgYSByZXF1aXJlZCBmaWVsZCBpcyBlbXB0eVxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkLCBUaGUgbmFtZSBvZiB0aGUgcmVxdWlyZWQgZmllbGRcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmNvbnN0IHJlcXVpcmVkID0gKGZpZWxkID0gcmVxdWlyZWQoJ2ZpZWxkJykpID0+IHsgdGhyb3cgbmV3IEVycm9yKGAke2ZpZWxkfSBpcyByZXF1aXJlZGApOyB9O1xuXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90b29scy9yZXF1aXJlZC5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGVsZW1lbnQgdG8gYW4gYXJyYXkgaWYgaXQgaXNuJ3QgYWxyZWFkeSBvbmVcbiAqIEBwYXJhbSB7KnxBcnJheX0gaXRlbSBUaGUgaXRlbSB0byB0cmFuc2Zvcm0gdG8gYXJyYXlcbiAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXlcbiAqL1xuY29uc3QgYXNBcnJheSA9IChpdGVtID0gcmVxdWlyZWQoJ2l0ZW0nKSkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSA9PT0gdHJ1ZSkgcmV0dXJuIGl0ZW07XG4gIHJldHVybiBbaXRlbV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FycmF5L2FzQXJyYXkuanMiLCJpbXBvcnQgYXNBcnJheSBmcm9tICcuL2FzQXJyYXknO1xuaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuLyoqXG4gKiBDcmVhdGVkIGEgZnVuY3Rpb24gdG8gbWl4IGFuZCBtYXAgbXVsdGlwbGUgYXJyYXlzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gY2FsbCBvbiBldmVyeSBjb21iaW5haXNvblxuICogQHJldHVybnMge0Z1bmN0aW9ufSBGdW5jdGlvbiB0byBtYXAgbXVsdGlwbGUgYXJyYXlzXG4gKi9cbmNvbnN0IG1peE1hcCA9IChjYiA9IHJlcXVpcmVkKCdjYicpKSA9PiAoLi4uYXJncykgPT4ge1xuICBpZiAoYXJncy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaG91bGQgYmUgY2FsbGVkIHdpdGggYXQgbGVhc3QgMiB2YWx1ZXMnKTtcbiAgfVxuICBjb25zdCBhcnJheXMgPSBhcmdzLm1hcChhc0FycmF5KTtcbiAgY29uc3QgbWF4TGVuID0gYXJyYXlzLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGNvbXBvc2UgPSAocG9zID0gMCwgdmFsdWVzID0gW10pID0+XG4gICAgYXJyYXlzW3Bvc10ucmVkdWNlKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICBpZiAocG9zIDwgbWF4TGVuKSB7XG4gICAgICAgIHJldHVybiBhY2MuY29uY2F0KGNvbXBvc2UocG9zICsgMSwgdmFsdWVzLmNvbmNhdChbdmFsdWVdKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2NiKC4uLnZhbHVlcy5jb25jYXQoW3ZhbHVlXSkpXSk7XG4gICAgfSwgW10pO1xuICByZXR1cm4gY29tcG9zZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWl4TWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FycmF5L21peE1hcC5qcyIsIi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHN0cmluZ1xuICogQHBhcmFtIHtpbnR9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgcmFuZG9tIHN0cmluZ1xuICovXG5jb25zdCByYW5kb20gPSAobGVuZ3RoID0gOCkgPT4gKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1ZBTFVFKS50b1N0cmluZygzNikuc3Vic3RyKDAsIGxlbmd0aCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHJpbmcvcmFuZG9tLmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuLyoqXG4gKiBTZXRzIGEgcHJvY2VzcyBhc2xlZXAgZm9yIGEgZGVmaW5lZCBwZXJpb2RcbiAqIEBwYXJhbSB7aW50fSBkZWxheSBUaGUgZGVsYXkgdG8gc2xlZXAgZm9yXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQ+fSBBIHByb21pc2UgcmVzb2x2aW5nIG9uY2UgdGhlIGRlbGF5IGhhcyBwYXNzZWRcbiAqL1xuY29uc3Qgc2xlZXAgPSAoZGVsYXkgPSByZXF1aXJlZCgnZGVsYXknKSkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNsZWVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FzeW5jL3NsZWVwLmpzIiwiLy8gYXJyYXlcbmltcG9ydCBhc0FycmF5IGZyb20gJy4vYXJyYXkvYXNBcnJheSc7XG5pbXBvcnQgbWl4TWFwIGZyb20gJy4vYXJyYXkvbWl4TWFwJztcbi8vIGFzeW5jXG5pbXBvcnQgZXhlY3V0aW9uRHVyYXRpb24gZnJvbSAnLi9hc3luYy9leGVjdXRpb25EdXJhdGlvbic7XG5pbXBvcnQgcHJvbWlzaWZ5IGZyb20gJy4vYXN5bmMvcHJvbWlzaWZ5JztcbmltcG9ydCBzbGVlcCBmcm9tICcuL2FzeW5jL3NsZWVwJztcbmltcG9ydCByZXRyeSBmcm9tICcuL2FzeW5jL3JldHJ5JztcbmltcG9ydCBjb21tYW5kIGZyb20gJy4vYXN5bmMvY29tbWFuZCc7XG5pbXBvcnQgY29tbWFuZEJ1cyBmcm9tICcuL2FzeW5jL2NvbW1hbmRCdXMnO1xuLy8gYXN5bmNcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlL2NhY2hlJztcbi8vIGRvbVxuaW1wb3J0IGV2ZW50IGZyb20gJy4vZG9tL2V2ZW50Jztcbi8vIG1hdGhcbmltcG9ydCBjbGFtcCBmcm9tICcuL21hdGgvY2xhbXAnO1xuLy8gcmFuZG9tXG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vc3RyaW5nL3JhbmRvbSc7XG4vLyB0b29sc1xuaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4vdG9vbHMvcmVxdWlyZWQnO1xuLy8gdmFsdWVcbmltcG9ydCBmdW5jT3JWYWx1ZSBmcm9tICcuL3ZhbHVlL2Z1bmNPclZhbHVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBhcnJheVxuICBhc0FycmF5LFxuICBtaXhNYXAsXG4gIC8vIGFzeW5jXG4gIGV4ZWN1dGlvbkR1cmF0aW9uLFxuICBwcm9taXNpZnksXG4gIHNsZWVwLFxuICByZXRyeSxcbiAgY29tbWFuZCxcbiAgY29tbWFuZEJ1cyxcbiAgLy8gY2FjaGVcbiAgY2FjaGUsXG4gIC8vIGRvbVxuICBldmVudCxcbiAgLy8gbWF0aFxuICBjbGFtcCxcbiAgLy8gc3RyaW5nXG4gIHJhbmRvbSxcbiAgLy8gdG9vbHNcbiAgcmVxdWlyZWQsXG4gIC8vIHZhbHVlXG4gIGZ1bmNPclZhbHVlLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5pbXBvcnQgcmFuZG9tU3RyaW5nIGZyb20gJy4uL3N0cmluZy9yYW5kb20nO1xuXG4vKipcbiAqIERpc3BsYXlzIHRoZSBkdXJhdGlvbiBvZiBleGVjdXRpb24gb2YgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHRpbWVyLCBkZWZhdWx0KHVuZGVmaW5lZClcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0IG9mIGZ1bmNcbiAqL1xuY29uc3QgZXhlY3V0aW9uRHVyYXRpb24gPSAoZnVuYyA9IHJlcXVpcmVkKCdmdW5jJyksIG5hbWUgPSByYW5kb21TdHJpbmcoKSkgPT4gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgY29uc29sZS50aW1lKG5hbWUpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmdW5jKC4uLmFyZ3MpO1xuICBjb25zb2xlLnRpbWVFbmQobmFtZSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleGVjdXRpb25EdXJhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9leGVjdXRpb25EdXJhdGlvbi5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGEgcHJvbWlzZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbFxuICogQHJldHVybnMge0Z1bmN0aW9ufSBUaGUgZnVuY3Rpb24gcmV0dXJuaW5nIGEgY2FsbGJhY2tcbiAqL1xuY29uc3QgcHJvbWlzaWZ5ID0gKGZ1bmMgPSByZXF1aXJlZCgnZnVuYycpKSA9PiAoLi4uYXJncykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gZnVuYyguLi5hcmdzLCAoZXJyLCBkYXRhKSA9PiB7XG4gIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICBlbHNlIHJlc29sdmUoZGF0YSk7XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb21pc2lmeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9wcm9taXNpZnkuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4vc2xlZXAnO1xuXG4vKipcbiAqIFRyaWVzIHRvIHJ1biB0aGUgY2FsbGJhY2sgYSBkZWZpbmVkIG51bWJlciBvZiB0aW1lLFxuICogdGhyb3dzIHdoZW4gdGhlIG51bWJlciBvZiB0cmllcyBpcyBleGNlZWRlZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgVGhlIGZ1bmN0aW9uIHRvIHJ1blxuICogQHBhcmFtIHtpbnR9IHRpbWVzIFRoZSBudW1iZXIgb2YgdGltZSB0byB0cnkgcnVubmluZyB0aCBjYWxsYmFjaywgZGVmYXVsdCgyKVxuICogQHBhcmFtIHtpbnR9IGRlbGF5IFRoZSBkZWxheSBiZXR3ZWVuIGVhY2ggY2FsbCwgZGVmYXVsdCgwKVxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgb2YgYSB2YWxpZCBjYWxsYmFja1xuICovXG5jb25zdCByZXRyeSA9IGFzeW5jIChjYiA9IHJlcXVpcmVkKCdjYicpLCB7IHRpbWVzID0gMiwgZGVsYXkgPSAwIH0gPSB7fSkgPT4ge1xuICBsZXQgdHJpZWQgPSAwO1xuICBjb25zdCB0cnlPbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgY2IoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0cmllZCArPSAxO1xuICAgICAgaWYgKHRyaWVkIDwgdGltZXMpIHtcbiAgICAgICAgYXdhaXQgc2xlZXAoZGVsYXkpO1xuICAgICAgICByZXR1cm4gdHJ5T25jZSgpO1xuICAgICAgfVxuICAgICAgZS50cmllZCA9IHRyaWVkO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB0cnlPbmNlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9yZXRyeS5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5pbXBvcnQgbm9vcCBmcm9tICcuLi90b29scy9ub29wJztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBjb21tYW5kIGVsZW1lbnQgYmFzZWQgb24gYSBkbyBhbmQgdW5kbyBtZXRob2RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb2Nlc3MgVGhlIG1ldGhvZCBjYWxsZWQgdG8gcHJvY2VzcyB0aGUgY29tbWFuZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gdW5kbyBUaGUgbWV0aG9zIGNhbGxlZCB0byByZXZlcnNlIHRoZSBwcm9jZXNzXG4gKiBAcmV0dXJucyB7Q29tbWFuZH0gVGhlIGNvbW1hbmQgY2xhc3NcbiAqL1xuY29uc3QgY29tbWFuZCA9IChwcm9jZXNzID0gcmVxdWlyZWQoJ3Byb2Nlc3MnKSwgdW5kbyA9IG5vb3ApID0+XG4gIGZ1bmN0aW9uIENvbW1hbmRHZW5lcmF0b3IoLi4uYXJncykge1xuICAgIGxldCBkb2luZyA9IG51bGw7XG4gICAgbGV0IHVuZG9pbmcgPSBudWxsO1xuICAgIGNvbnN0IHN0YXRlID0ge307XG4gICAgY29uc3QgY21kQ2xhc3MgPSB7XG4gICAgICAvKipcbiAgICAgICAqIEV4ZWN1dGVzIHRoZSBjb21tYW5kXG4gICAgICAgKiBAcmV0dXJucyB7Kn0gVGhlIGNvbW1hbmQgcmVzdWx0XG4gICAgICAgKi9cbiAgICAgIGFzeW5jIGRvKCkge1xuICAgICAgICBpZiAodW5kb2luZyAhPT0gbnVsbCkge1xuICAgICAgICAgIGF3YWl0IHVuZG9pbmc7XG4gICAgICAgICAgdW5kb2luZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZG9pbmcgPSBwcm9jZXNzKHN0YXRlLCAuLi5hcmdzKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZG9pbmc7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBFeGVjdXRlcyBhIHJldmVyc2UgY29tbWVuZCB0byByZXR1cm4gdG8gdGhlIHByZXZpb3VzIHN0YXRlXG4gICAgICAgKiBAcmV0dXJucyB7Kn0gVGhlIHJldmVyc2UgY29tbWFuZCByZXN1bHRcbiAgICAgICAqL1xuICAgICAgYXN5bmMgdW5kbygpIHtcbiAgICAgICAgaWYgKGRvaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21tYW5kIG5lZWRzIHRvIGJlIGRvbmUgYmVmb3JlIGJlaW5nIHVuZG9uZScpO1xuICAgICAgICB9XG4gICAgICAgIHVuZG9pbmcgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IGRvaW5nO1xuICAgICAgICAgIHJldHVybiB1bmRvKHN0YXRlLCAuLi5hcmdzKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdW5kb2luZztcbiAgICAgICAgZG9pbmcgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSxcbiAgICB9O1xuICAgIE9iamVjdC5mcmVlemUoY21kQ2xhc3MpO1xuICAgIHJldHVybiBjbWRDbGFzcztcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFuZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9jb21tYW5kLmpzIiwiY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBub29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rvb2xzL25vb3AuanMiLCIvKipcbiAqIEdlbmVyYXRlcyBhIENvbW1hbmRCdXMgYWJsZSB0byBkbywgdW5kbyBhbmQgcmVkbyBhIGNvbW1hbmQgc3VpdGVcbiAqIEBwYXJhbSB7aW50fSBzaXplIFRoZSBtYXggc2l6ZSBvZiB0aGUgY29tbWFuZCBidXNcbiAqIEByZXR1cm5zIHtDb21tYW5kQnVzfSBBbiBpbnN0YW5jZSBvZiBhIGJ1cyBvZiBjb21tYW5kXG4gKi9cbmZ1bmN0aW9uIENvbW1hbmRCdXNHZW5lcmF0b3Ioc2l6ZSA9IDEwKSB7XG4gIGxldCBydW5uaW5nID0gbnVsbDtcbiAgbGV0IHBvc2l0aW9uID0gMDtcbiAgY29uc3QgY29tbWFuZHMgPSBbXTtcbiAgY29uc3QgYnVzID0ge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtpbnR9IFRoZSBwb3NpdGlvbiBpbiB0aGUgYnVzXG4gICAgICovXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge2ludH0gVGhlIGN1cnJlbnQgc2l6ZSBvZiB0aGUgYnVzXG4gICAgICovXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gY29tbWFuZHMubGVuZ3RoO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRXhleHV0ZXMgYSBjb21tYW5kIGFuZCBwdXNoIGl0IGluIHRoIGJ1c1xuICAgICAqIEBwYXJhbSB7Q29tbWFuZH0gY29tbWFuZCBBIGNvbW1hbmQgdG8gYWRkIGluIHRoZSBidXNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQ+fSBBIHByb21pc2UgdG8gdGhlIGVuZCBvZiB0aGUgY29tbWFuZFxuICAgICAqL1xuICAgIGFzeW5jIGRvKGNvbW1hbmQpIHtcbiAgICAgIHJ1bm5pbmcgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBydW5uaW5nO1xuICAgICAgICBjb21tYW5kcy5zcGxpY2UocG9zaXRpb24gKyAxLCBzaXplKTtcbiAgICAgICAgaWYgKGNvbW1hbmRzLmxlbmd0aCA9PT0gc2l6ZSkge1xuICAgICAgICAgIGNvbW1hbmRzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tbWFuZHMucHVzaChjb21tYW5kKTtcbiAgICAgICAgcG9zaXRpb24gPSBjb21tYW5kcy5sZW5ndGggLSAxO1xuICAgICAgICBhd2FpdCBjb21tYW5kLmRvKCk7XG4gICAgICB9KSgpO1xuICAgICAgYXdhaXQgcnVubmluZztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuZG9lcyB0aGUgbGFzdCBhY3Rpb24gcHVzaGVkIGluIHRoZSBidXNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQ+fSBBIHByb21pc2UgdG8gdGhlIGVuZCBvZiB0aGUgY29tbWFuZFxuICAgICAqL1xuICAgIGFzeW5jIHVuZG8oKSB7XG4gICAgICBydW5uaW5nID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgcnVubmluZztcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBwb3NpdGlvbiAtIDE7XG4gICAgICAgIGlmIChuZXdQb3NpdGlvbiA+PSAwKSB7XG4gICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzW3Bvc2l0aW9uXTtcbiAgICAgICAgICBhd2FpdCBjb21tYW5kLnVuZG8oKTtcbiAgICAgICAgICBwb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgICAgYXdhaXQgcnVubmluZztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlZG9lcyB0aGUgbGFzdCBhY3Rpb24gdW5kb25lIGZyb20gdGhlIGJ1c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZD59IEEgcHJvbWlzZSB0byB0aGUgZW5kIG9mIHRoZSBjb21tYW5kXG4gICAgICovXG4gICAgYXN5bmMgcmVkbygpIHtcbiAgICAgIHJ1bm5pbmcgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBydW5uaW5nO1xuICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uICsgMTtcbiAgICAgICAgaWYgKG5ld1Bvc2l0aW9uIDwgY29tbWFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzW25ld1Bvc2l0aW9uXTtcbiAgICAgICAgICBhd2FpdCBjb21tYW5kLmRvKCk7XG4gICAgICAgICAgcG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICAgIGF3YWl0IHJ1bm5pbmc7XG4gICAgfSxcbiAgfTtcblxuICBPYmplY3QuZnJlZXplKGJ1cyk7XG5cbiAgcmV0dXJuIGJ1cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZEJ1c0dlbmVyYXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9jb21tYW5kQnVzLmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcbi8qKlxuICogQ3JlYXRlcyBhIGNhY2hlIG1hbmFnZXIgaW5zdGFuY2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxvYWRlciBUaGUgbG9hZGluZyBtZXRob2QgdXNlZCB0byBsb2FkIGRhdGFcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWxpZGl0eSBUaGUgZHVyYXRpb24gZm9yIHdoaWNoIHRoZSBjYWNoZSBpcyB2YWxpZFxuICogQHJldHVybnMge0NhY2hlTWFuYWdlcn0gQSBjYWNoZSBtYW5hZ2VtZW50IGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGNhY2hlR2VuZXJhdG9yKGxvYWRlciA9IHJlcXVpcmVkKCdsb2FkZXInKSwgdmFsaWRpdHkgPSBJbmZpbml0eSkge1xuICBjb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgY29uc3QgY2FjaGVNYW5hZ2VyID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IGZyb20gY2FjaGUsIGNyZWF0ZXMgb24gaWYgZW1wdHlcbiAgICAgKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHRoZSBvYmplY3QgaW4gY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7Kn0gVGhlIG9iamVjdCBpbiBjYWNoZVxuICAgICAqL1xuICAgIGdldChrZXkpIHtcbiAgICAgIGlmIChjYWNoZS5oYXMoa2V5KSA9PT0gZmFsc2UgfHwgRGF0ZS5ub3coKSA+PSBjYWNoZS5nZXQoa2V5KS52YWxpZGl0eSkge1xuICAgICAgICBjYWNoZS5zZXQoa2V5LCB7XG4gICAgICAgICAgaXRlbTogbG9hZGVyKGtleSksXG4gICAgICAgICAgdmFsaWRpdHk6IERhdGUubm93KCkgKyB2YWxpZGl0eSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSkuaXRlbTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gb2JqZWN0IGZyb20gY2FjaGUgdXNpbmcgaXQncyBrZXlcbiAgICAgKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHRoZSBvYmplY3QgaW4gY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgIGNhY2hlLmRlbGV0ZShrZXkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBpdGVtIGZyb20gdGhlIGNhY2hlXG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgIEFycmF5LmZyb20oY2FjaGUua2V5cygpKS5tYXAoa2V5ID0+IHRoaXMucmVtb3ZlKGtleSkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge2ludH0gVGhlIHNpemUgb2YgdGhlIGNhY2hlXG4gICAgICovXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gY2FjaGUuc2l6ZTtcbiAgICB9LFxuICB9O1xuXG4gIE9iamVjdC5mcmVlemUoY2FjaGVNYW5hZ2VyKTtcblxuICByZXR1cm4gY2FjaGVNYW5hZ2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYWNoZUdlbmVyYXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jYWNoZS9jYWNoZS5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5pbXBvcnQgbWl4TWFwIGZyb20gJy4uL2FycmF5L21peE1hcCc7XG5cbi8qKlxuICogU3Vic2NyaWJlcyBhIHNpbmdsZSBvciBtdWx0aXBsZSBldmVudHMgb24gYSBzaW5nbGUgb3IgbXVsdGlwbGUgZWxlbWVudHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8QXJyYXk8SFRNTEVsZW1lbnQ+fSBlbG1zLCBUaGUgZG9tIGVsZW1lbnQgdG8gYXR0YWNoIGV2ZW50cyBvblxuICogQHBhcmFtIHtzdHJpbmd8QXJyYXk8c3RyaW5nPn0gZXZ0cywgdGhlIGV2ZW50cyB0byBhdHRhY2hcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiLCBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBldmVudCBvY2N1cnNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBhbGxvd2luZyB0byB1bnN1YnNjcmliZSBhbGwgdGhlIGV2ZW50c1xuICovXG5jb25zdCBldmVudHMgPSAoZWxtcyA9IHJlcXVpcmVkKCdlbG1zJyksIGV2dHMgPSByZXF1aXJlZCgnZXZ0cycpLCBjYiA9IHJlcXVpcmVkKCdjYicpKSA9PiB7XG4gIGNvbnN0IGFkZCA9IG1peE1hcCgoZWxlbWVudCwgZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpKTtcbiAgY29uc3QgcmVtb3ZlID0gbWl4TWFwKChlbGVtZW50LCBldmVudCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYikpO1xuICBhZGQoZWxtcywgZXZ0cyk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmVtb3ZlKGVsbXMsIGV2dHMpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RvbS9ldmVudC5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbi8qKlxuICogQ2xhbXBzIGEgbnVtYmVyIGJldHdlZW4gYSBtaW4gYW5kIGEgbWF4IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtIFRoZSBudW1iZXIgdG8gY2xhbXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gVGhlIG1pbiBudW1iZXIgdG8gY2xhbXAgd2l0aFxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBUaGUgbWF4IG51bWJlciB0byBjbGFtcCB3aXRoXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgY2xhbXBlZCBudW1iZXJcbiAqL1xuY29uc3QgY2xhbXAgPSAobnVtID0gcmVxdWlyZWQoJ251bScpLCBtaW4gPSByZXF1aXJlZCgnbWluJyksIG1heCA9IHJlcXVpcmVkKCdtYXgnKSkgPT4gTWF0aC5taW4oTWF0aC5tYXgobnVtLCBtaW4pLCBtYXgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFtcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYXRoL2NsYW1wLmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuLyoqXG4gKiBUYWtlcyBhIHZhbHVlIG9yIGEgZnVuY3Rpb24gYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgZnVuY3Rpb24sIG9yIHRoZSB2YWx1ZVxuICogQHBhcmFtIHsqfEZ1bmN0aW9ufSB2YWx1ZSwgdGhlIHZhbHVlIG9yIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSB2YWx1ZVxuICogQHJldHVybnMgeyp9IEEgdmFsdWVcbiAqL1xuY29uc3QgZnVuY09yVmFsdWUgPSAodmFsdWUgPSByZXF1aXJlZCgndmFsdWUnKSkgPT4ge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiB2YWx1ZSgpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmNPclZhbHVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZhbHVlL2Z1bmNPclZhbHVlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==