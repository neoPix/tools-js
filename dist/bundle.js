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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__patterns_command__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__patterns_commandBus__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__patterns_emitter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cache_cache__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dom_event__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__math_clamp__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__string_random__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tools_required__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__value_funcOrValue__ = __webpack_require__(16);
// array


// async




// patterns



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
  // patterns
  command: __WEBPACK_IMPORTED_MODULE_6__patterns_command__["a" /* default */],
  commandBus: __WEBPACK_IMPORTED_MODULE_7__patterns_commandBus__["a" /* default */],
  emitter: __WEBPACK_IMPORTED_MODULE_8__patterns_emitter__["a" /* default */],
  // cache
  cache: __WEBPACK_IMPORTED_MODULE_9__cache_cache__["a" /* default */],
  // dom
  event: __WEBPACK_IMPORTED_MODULE_10__dom_event__["a" /* default */],
  // math
  clamp: __WEBPACK_IMPORTED_MODULE_11__math_clamp__["a" /* default */],
  // string
  random: __WEBPACK_IMPORTED_MODULE_12__string_random__["a" /* default */],
  // tools
  required: __WEBPACK_IMPORTED_MODULE_13__tools_required__["a" /* default */],
  // value
  funcOrValue: __WEBPACK_IMPORTED_MODULE_14__value_funcOrValue__["a" /* default */]
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Generates a new EventEmitter
 * @returns {EventEmitter} An event emitter
 */
function EventEmitterGenerator() {
  var listenners = new Map();
  /**
   * The event emitter class
   */

  var EventEmitter = function () {
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);
    }

    _createClass(EventEmitter, [{
      key: 'once',

      /**
       * Registers an event listener called only once
       * @param {string} eventName The name of the event
       * @param {Function} cb The function to call when the event is emitted
       * @returns {Function} A function to unregister
       */
      value: function once() {
        var _this = this;

        var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('eventName');
        var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('cb');

        var unregister = this.on(eventName, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          cb.apply(_this, args);
          unregister();
        });
        return unregister;
      }
      /**
       * Registers an event listener
       * @param {string} eventName The name of the event
       * @param {Function} cb The function to call when the event is emitted
       * @returns {Function} A function to unregister
       */

    }, {
      key: 'on',
      value: function on() {
        var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('eventName');
        var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('cb');

        if (listenners.has(eventName) === false) {
          listenners.set(eventName, new Set());
        }
        listenners.get(eventName).add(cb);
        return this.off.bind(this, eventName, cb);
      }
      /**
       * Unregister an event listener
       * @param {string} eventName The name of the event
       * @param {Function} cb The function called when the event is emitted
       * @returns {EventEmitter} The current event emiter
       */

    }, {
      key: 'off',
      value: function off() {
        var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('eventName');
        var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('cb');

        if (listenners.has(eventName) === true) {
          var set = listenners.get(eventName);
          set.delete(cb);
          if (set.size === 0) {
            listenners.delete(eventName);
          }
        }
        return this;
      }
      /**
       * Emit an event
       * @param {string} eventName The event to emit
       * @param {Array<*>} args The arguments applied
       * @return {EventEmitter} The current event emiter
       */

    }, {
      key: 'emit',
      value: function emit() {
        var _this2 = this;

        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object(__WEBPACK_IMPORTED_MODULE_0__tools_required__["a" /* default */])('eventName');

        if (listenners.has(eventName) === true) {
          listenners.get(eventName).forEach(function (cb) {
            return cb.apply(_this2, args);
          });
        }
        return this;
      }
    }]);

    return EventEmitter;
  }();

  EventEmitter.prototype.addEventListener = EventEmitter.prototype.on;
  EventEmitter.prototype.removeEventListener = EventEmitter.prototype.off;

  return new EventEmitter();
}

/* harmony default export */ __webpack_exports__["a"] = (EventEmitterGenerator);

/***/ }),
/* 13 */
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
      cache.clear();
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2Q0YzA5ZGE5MDY2Yzk4MzgxNjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9hc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9taXhNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL3NsZWVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMvZXhlY3V0aW9uRHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL3Byb21pc2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMvcmV0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhdHRlcm5zL2NvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhdHRlcm5zL2NvbW1hbmRCdXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhdHRlcm5zL2VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhY2hlL2NhY2hlLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vZXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGgvY2xhbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlL2Z1bmNPclZhbHVlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwiZmllbGQiLCJFcnJvciIsImFzQXJyYXkiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwibWl4TWFwIiwiY2IiLCJhcmdzIiwibGVuZ3RoIiwiYXJyYXlzIiwibWFwIiwibWF4TGVuIiwiY29tcG9zZSIsInBvcyIsInZhbHVlcyIsInJlZHVjZSIsImFjYyIsInZhbHVlIiwiY29uY2F0IiwicmFuZG9tIiwiTWF0aCIsIk51bWJlciIsIk1BWF9WQUxVRSIsInRvU3RyaW5nIiwic3Vic3RyIiwic2xlZXAiLCJkZWxheSIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsImV4ZWN1dGlvbkR1cmF0aW9uIiwicHJvbWlzaWZ5IiwicmV0cnkiLCJjb21tYW5kIiwiY29tbWFuZEJ1cyIsImVtaXR0ZXIiLCJjYWNoZSIsImV2ZW50IiwiY2xhbXAiLCJmdW5jT3JWYWx1ZSIsImZ1bmMiLCJuYW1lIiwicmFuZG9tU3RyaW5nIiwiY29uc29sZSIsInRpbWUiLCJyZXN1bHQiLCJ0aW1lRW5kIiwicmVqZWN0IiwiZXJyIiwiZGF0YSIsInRpbWVzIiwidHJpZWQiLCJ0cnlPbmNlIiwicHJvY2VzcyIsInVuZG8iLCJDb21tYW5kR2VuZXJhdG9yIiwiZG9pbmciLCJ1bmRvaW5nIiwic3RhdGUiLCJjbWRDbGFzcyIsImRvIiwiT2JqZWN0IiwiZnJlZXplIiwibm9vcCIsIkNvbW1hbmRCdXNHZW5lcmF0b3IiLCJzaXplIiwicnVubmluZyIsInBvc2l0aW9uIiwiY29tbWFuZHMiLCJidXMiLCJzcGxpY2UiLCJzaGlmdCIsInB1c2giLCJuZXdQb3NpdGlvbiIsInJlZG8iLCJFdmVudEVtaXR0ZXJHZW5lcmF0b3IiLCJsaXN0ZW5uZXJzIiwiTWFwIiwiRXZlbnRFbWl0dGVyIiwiZXZlbnROYW1lIiwidW5yZWdpc3RlciIsIm9uIiwiYXBwbHkiLCJoYXMiLCJzZXQiLCJTZXQiLCJnZXQiLCJhZGQiLCJvZmYiLCJiaW5kIiwiZGVsZXRlIiwiZm9yRWFjaCIsInByb3RvdHlwZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FjaGVHZW5lcmF0b3IiLCJsb2FkZXIiLCJ2YWxpZGl0eSIsIkluZmluaXR5IiwiY2FjaGVNYW5hZ2VyIiwia2V5IiwiRGF0ZSIsIm5vdyIsInJlbW92ZSIsImNsZWFyIiwiZXZlbnRzIiwiZWxtcyIsImV2dHMiLCJlbGVtZW50IiwibnVtIiwibWluIiwibWF4IiwiRnVuY3Rpb24iXSwibWFwcGlu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O0FBQUEsTUFBd0JnSCxHQUF4Qix1RUFBOEIsd0VBQUFoSCxDQUFTLEtBQVQsQ0FBOUI7QUFBQSxNQUErQ2lILEdBQS9DLHVFQUFxRCx3RUFBQWpILENBQVMsS0FBVCxDQUFyRDtBQUFBLFNBQXlFc0IsS0FBSzBGLEdBQUwsQ0FBUzFGLEtBQUsyRixHQUFMLENBQVNGLEdBQVQsRUFBY0MsR0FBZCxDQUFULEVBQTZCQyxHQUE3QixDQUF6RTtBQUFBLENBQWQ7O0FBRUEseURBQWV6RSxLQUFmLEU7Ozs7Ozs7O0FDWEE7O0FBRUE7Ozs7O0FBS0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLEdBQStCO0FBQUEsTUFBOUJ0QixLQUE4Qix1RUFBdEIsd0VBQUFuQixDQUFTLE9BQVQsQ0FBc0I7O0FBQ2pELE1BQUltQixpQkFBaUIrRixRQUFyQixFQUErQjtBQUM3QixXQUFPL0YsT0FBUDtBQUNEO0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBTEQ7O0FBT0EseURBQWVzQixXQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdkNGMwOWRhOTA2NmM5ODM4MTYyIiwiLyoqXG4gKiBUaHJvd3MgaWYgYSByZXF1aXJlZCBmaWVsZCBpcyBlbXB0eVxuICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkLCBUaGUgbmFtZSBvZiB0aGUgcmVxdWlyZWQgZmllbGRcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmNvbnN0IHJlcXVpcmVkID0gKGZpZWxkID0gcmVxdWlyZWQoJ2ZpZWxkJykpID0+IHsgdGhyb3cgbmV3IEVycm9yKGAke2ZpZWxkfSBpcyByZXF1aXJlZGApOyB9O1xuXG5leHBvcnQgZGVmYXVsdCByZXF1aXJlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90b29scy9yZXF1aXJlZC5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGVsZW1lbnQgdG8gYW4gYXJyYXkgaWYgaXQgaXNuJ3QgYWxyZWFkeSBvbmVcbiAqIEBwYXJhbSB7KnxBcnJheX0gaXRlbSBUaGUgaXRlbSB0byB0cmFuc2Zvcm0gdG8gYXJyYXlcbiAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXlcbiAqL1xuY29uc3QgYXNBcnJheSA9IChpdGVtID0gcmVxdWlyZWQoJ2l0ZW0nKSkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSA9PT0gdHJ1ZSkgcmV0dXJuIGl0ZW07XG4gIHJldHVybiBbaXRlbV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FycmF5L2FzQXJyYXkuanMiLCJpbXBvcnQgYXNBcnJheSBmcm9tICcuL2FzQXJyYXknO1xuaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuLyoqXG4gKiBDcmVhdGVkIGEgZnVuY3Rpb24gdG8gbWl4IGFuZCBtYXAgbXVsdGlwbGUgYXJyYXlzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gY2FsbCBvbiBldmVyeSBjb21iaW5haXNvblxuICogQHJldHVybnMge0Z1bmN0aW9ufSBGdW5jdGlvbiB0byBtYXAgbXVsdGlwbGUgYXJyYXlzXG4gKi9cbmNvbnN0IG1peE1hcCA9IChjYiA9IHJlcXVpcmVkKCdjYicpKSA9PiAoLi4uYXJncykgPT4ge1xuICBpZiAoYXJncy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaG91bGQgYmUgY2FsbGVkIHdpdGggYXQgbGVhc3QgMiB2YWx1ZXMnKTtcbiAgfVxuICBjb25zdCBhcnJheXMgPSBhcmdzLm1hcChhc0FycmF5KTtcbiAgY29uc3QgbWF4TGVuID0gYXJyYXlzLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGNvbXBvc2UgPSAocG9zID0gMCwgdmFsdWVzID0gW10pID0+XG4gICAgYXJyYXlzW3Bvc10ucmVkdWNlKChhY2MsIHZhbHVlKSA9PiB7XG4gICAgICBpZiAocG9zIDwgbWF4TGVuKSB7XG4gICAgICAgIHJldHVybiBhY2MuY29uY2F0KGNvbXBvc2UocG9zICsgMSwgdmFsdWVzLmNvbmNhdChbdmFsdWVdKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoW2NiKC4uLnZhbHVlcy5jb25jYXQoW3ZhbHVlXSkpXSk7XG4gICAgfSwgW10pO1xuICByZXR1cm4gY29tcG9zZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWl4TWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FycmF5L21peE1hcC5qcyIsIi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHN0cmluZ1xuICogQHBhcmFtIHtpbnR9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGEgcmFuZG9tIHN0cmluZ1xuICovXG5jb25zdCByYW5kb20gPSAobGVuZ3RoID0gOCkgPT4gKE1hdGgucmFuZG9tKCkgKiBOdW1iZXIuTUFYX1ZBTFVFKS50b1N0cmluZygzNikuc3Vic3RyKDAsIGxlbmd0aCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHJpbmcvcmFuZG9tLmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuLyoqXG4gKiBTZXRzIGEgcHJvY2VzcyBhc2xlZXAgZm9yIGEgZGVmaW5lZCBwZXJpb2RcbiAqIEBwYXJhbSB7aW50fSBkZWxheSBUaGUgZGVsYXkgdG8gc2xlZXAgZm9yXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQ+fSBBIHByb21pc2UgcmVzb2x2aW5nIG9uY2UgdGhlIGRlbGF5IGhhcyBwYXNzZWRcbiAqL1xuY29uc3Qgc2xlZXAgPSAoZGVsYXkgPSByZXF1aXJlZCgnZGVsYXknKSkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNsZWVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FzeW5jL3NsZWVwLmpzIiwiLy8gYXJyYXlcbmltcG9ydCBhc0FycmF5IGZyb20gJy4vYXJyYXkvYXNBcnJheSc7XG5pbXBvcnQgbWl4TWFwIGZyb20gJy4vYXJyYXkvbWl4TWFwJztcbi8vIGFzeW5jXG5pbXBvcnQgZXhlY3V0aW9uRHVyYXRpb24gZnJvbSAnLi9hc3luYy9leGVjdXRpb25EdXJhdGlvbic7XG5pbXBvcnQgcHJvbWlzaWZ5IGZyb20gJy4vYXN5bmMvcHJvbWlzaWZ5JztcbmltcG9ydCBzbGVlcCBmcm9tICcuL2FzeW5jL3NsZWVwJztcbmltcG9ydCByZXRyeSBmcm9tICcuL2FzeW5jL3JldHJ5Jztcbi8vIHBhdHRlcm5zXG5pbXBvcnQgY29tbWFuZCBmcm9tICcuL3BhdHRlcm5zL2NvbW1hbmQnO1xuaW1wb3J0IGNvbW1hbmRCdXMgZnJvbSAnLi9wYXR0ZXJucy9jb21tYW5kQnVzJztcbmltcG9ydCBlbWl0dGVyIGZyb20gJy4vcGF0dGVybnMvZW1pdHRlcic7XG4vLyBhc3luY1xuaW1wb3J0IGNhY2hlIGZyb20gJy4vY2FjaGUvY2FjaGUnO1xuLy8gZG9tXG5pbXBvcnQgZXZlbnQgZnJvbSAnLi9kb20vZXZlbnQnO1xuLy8gbWF0aFxuaW1wb3J0IGNsYW1wIGZyb20gJy4vbWF0aC9jbGFtcCc7XG4vLyByYW5kb21cbmltcG9ydCByYW5kb20gZnJvbSAnLi9zdHJpbmcvcmFuZG9tJztcbi8vIHRvb2xzXG5pbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi90b29scy9yZXF1aXJlZCc7XG4vLyB2YWx1ZVxuaW1wb3J0IGZ1bmNPclZhbHVlIGZyb20gJy4vdmFsdWUvZnVuY09yVmFsdWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGFycmF5XG4gIGFzQXJyYXksXG4gIG1peE1hcCxcbiAgLy8gYXN5bmNcbiAgZXhlY3V0aW9uRHVyYXRpb24sXG4gIHByb21pc2lmeSxcbiAgc2xlZXAsXG4gIHJldHJ5LFxuICAvLyBwYXR0ZXJuc1xuICBjb21tYW5kLFxuICBjb21tYW5kQnVzLFxuICBlbWl0dGVyLFxuICAvLyBjYWNoZVxuICBjYWNoZSxcbiAgLy8gZG9tXG4gIGV2ZW50LFxuICAvLyBtYXRoXG4gIGNsYW1wLFxuICAvLyBzdHJpbmdcbiAgcmFuZG9tLFxuICAvLyB0b29sc1xuICByZXF1aXJlZCxcbiAgLy8gdmFsdWVcbiAgZnVuY09yVmFsdWUsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcbmltcG9ydCByYW5kb21TdHJpbmcgZnJvbSAnLi4vc3RyaW5nL3JhbmRvbSc7XG5cbi8qKlxuICogRGlzcGxheXMgdGhlIGR1cmF0aW9uIG9mIGV4ZWN1dGlvbiBvZiBhIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdGltZXIsIGRlZmF1bHQodW5kZWZpbmVkKVxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgb2YgZnVuY1xuICovXG5jb25zdCBleGVjdXRpb25EdXJhdGlvbiA9IChmdW5jID0gcmVxdWlyZWQoJ2Z1bmMnKSwgbmFtZSA9IHJhbmRvbVN0cmluZygpKSA9PiBhc3luYyAoLi4uYXJncykgPT4ge1xuICBjb25zb2xlLnRpbWUobmFtZSk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZ1bmMoLi4uYXJncyk7XG4gIGNvbnNvbGUudGltZUVuZChuYW1lKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4ZWN1dGlvbkR1cmF0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FzeW5jL2V4ZWN1dGlvbkR1cmF0aW9uLmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYSBwcm9taXNlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFRoZSBmdW5jdGlvbiByZXR1cm5pbmcgYSBjYWxsYmFja1xuICovXG5jb25zdCBwcm9taXNpZnkgPSAoZnVuYyA9IHJlcXVpcmVkKCdmdW5jJykpID0+ICguLi5hcmdzKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBmdW5jKC4uLmFyZ3MsIChlcnIsIGRhdGEpID0+IHtcbiAgaWYgKGVycikgcmVqZWN0KGVycik7XG4gIGVsc2UgcmVzb2x2ZShkYXRhKTtcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvbWlzaWZ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FzeW5jL3Byb21pc2lmeS5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi9zbGVlcCc7XG5cbi8qKlxuICogVHJpZXMgdG8gcnVuIHRoZSBjYWxsYmFjayBhIGRlZmluZWQgbnVtYmVyIG9mIHRpbWUsXG4gKiB0aHJvd3Mgd2hlbiB0aGUgbnVtYmVyIG9mIHRyaWVzIGlzIGV4Y2VlZGVkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBUaGUgZnVuY3Rpb24gdG8gcnVuXG4gKiBAcGFyYW0ge2ludH0gdGltZXMgVGhlIG51bWJlciBvZiB0aW1lIHRvIHRyeSBydW5uaW5nIHRoIGNhbGxiYWNrLCBkZWZhdWx0KDIpXG4gKiBAcGFyYW0ge2ludH0gZGVsYXkgVGhlIGRlbGF5IGJldHdlZW4gZWFjaCBjYWxsLCBkZWZhdWx0KDApXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdCBvZiBhIHZhbGlkIGNhbGxiYWNrXG4gKi9cbmNvbnN0IHJldHJ5ID0gYXN5bmMgKGNiID0gcmVxdWlyZWQoJ2NiJyksIHsgdGltZXMgPSAyLCBkZWxheSA9IDAgfSA9IHt9KSA9PiB7XG4gIGxldCB0cmllZCA9IDA7XG4gIGNvbnN0IHRyeU9uY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBjYigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRyaWVkICs9IDE7XG4gICAgICBpZiAodHJpZWQgPCB0aW1lcykge1xuICAgICAgICBhd2FpdCBzbGVlcChkZWxheSk7XG4gICAgICAgIHJldHVybiB0cnlPbmNlKCk7XG4gICAgICB9XG4gICAgICBlLnRyaWVkID0gdHJpZWQ7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHRyeU9uY2UoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJldHJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FzeW5jL3JldHJ5LmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcbmltcG9ydCBub29wIGZyb20gJy4uL3Rvb2xzL25vb3AnO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGNvbW1hbmQgZWxlbWVudCBiYXNlZCBvbiBhIGRvIGFuZCB1bmRvIG1ldGhvZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvY2VzcyBUaGUgbWV0aG9kIGNhbGxlZCB0byBwcm9jZXNzIHRoZSBjb21tYW5kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB1bmRvIFRoZSBtZXRob3MgY2FsbGVkIHRvIHJldmVyc2UgdGhlIHByb2Nlc3NcbiAqIEByZXR1cm5zIHtDb21tYW5kfSBUaGUgY29tbWFuZCBjbGFzc1xuICovXG5jb25zdCBjb21tYW5kID0gKHByb2Nlc3MgPSByZXF1aXJlZCgncHJvY2VzcycpLCB1bmRvID0gbm9vcCkgPT5cbiAgZnVuY3Rpb24gQ29tbWFuZEdlbmVyYXRvciguLi5hcmdzKSB7XG4gICAgbGV0IGRvaW5nID0gbnVsbDtcbiAgICBsZXQgdW5kb2luZyA9IG51bGw7XG4gICAgY29uc3Qgc3RhdGUgPSB7fTtcbiAgICBjb25zdCBjbWRDbGFzcyA9IHtcbiAgICAgIC8qKlxuICAgICAgICogRXhlY3V0ZXMgdGhlIGNvbW1hbmRcbiAgICAgICAqIEByZXR1cm5zIHsqfSBUaGUgY29tbWFuZCByZXN1bHRcbiAgICAgICAqL1xuICAgICAgYXN5bmMgZG8oKSB7XG4gICAgICAgIGlmICh1bmRvaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgYXdhaXQgdW5kb2luZztcbiAgICAgICAgICB1bmRvaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBkb2luZyA9IHByb2Nlc3Moc3RhdGUsIC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkb2luZztcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEV4ZWN1dGVzIGEgcmV2ZXJzZSBjb21tZW5kIHRvIHJldHVybiB0byB0aGUgcHJldmlvdXMgc3RhdGVcbiAgICAgICAqIEByZXR1cm5zIHsqfSBUaGUgcmV2ZXJzZSBjb21tYW5kIHJlc3VsdFxuICAgICAgICovXG4gICAgICBhc3luYyB1bmRvKCkge1xuICAgICAgICBpZiAoZG9pbmcgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbW1hbmQgbmVlZHMgdG8gYmUgZG9uZSBiZWZvcmUgYmVpbmcgdW5kb25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgdW5kb2luZyA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgZG9pbmc7XG4gICAgICAgICAgcmV0dXJuIHVuZG8oc3RhdGUsIC4uLmFyZ3MpO1xuICAgICAgICB9KSgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1bmRvaW5nO1xuICAgICAgICBkb2luZyA9IG51bGw7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LFxuICAgIH07XG4gICAgT2JqZWN0LmZyZWV6ZShjbWRDbGFzcyk7XG4gICAgcmV0dXJuIGNtZENsYXNzO1xuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tYW5kO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhdHRlcm5zL2NvbW1hbmQuanMiLCJjb25zdCBub29wID0gKCkgPT4ge307XG5cbmV4cG9ydCBkZWZhdWx0IG5vb3A7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9vbHMvbm9vcC5qcyIsIi8qKlxuICogR2VuZXJhdGVzIGEgQ29tbWFuZEJ1cyBhYmxlIHRvIGRvLCB1bmRvIGFuZCByZWRvIGEgY29tbWFuZCBzdWl0ZVxuICogQHBhcmFtIHtpbnR9IHNpemUgVGhlIG1heCBzaXplIG9mIHRoZSBjb21tYW5kIGJ1c1xuICogQHJldHVybnMge0NvbW1hbmRCdXN9IEFuIGluc3RhbmNlIG9mIGEgYnVzIG9mIGNvbW1hbmRcbiAqL1xuZnVuY3Rpb24gQ29tbWFuZEJ1c0dlbmVyYXRvcihzaXplID0gMTApIHtcbiAgbGV0IHJ1bm5pbmcgPSBudWxsO1xuICBsZXQgcG9zaXRpb24gPSAwO1xuICBjb25zdCBjb21tYW5kcyA9IFtdO1xuICBjb25zdCBidXMgPSB7XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge2ludH0gVGhlIHBvc2l0aW9uIGluIHRoZSBidXNcbiAgICAgKi9cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7aW50fSBUaGUgY3VycmVudCBzaXplIG9mIHRoZSBidXNcbiAgICAgKi9cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBjb21tYW5kcy5sZW5ndGg7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBFeGV4dXRlcyBhIGNvbW1hbmQgYW5kIHB1c2ggaXQgaW4gdGggYnVzXG4gICAgICogQHBhcmFtIHtDb21tYW5kfSBjb21tYW5kIEEgY29tbWFuZCB0byBhZGQgaW4gdGhlIGJ1c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZD59IEEgcHJvbWlzZSB0byB0aGUgZW5kIG9mIHRoZSBjb21tYW5kXG4gICAgICovXG4gICAgYXN5bmMgZG8oY29tbWFuZCkge1xuICAgICAgcnVubmluZyA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHJ1bm5pbmc7XG4gICAgICAgIGNvbW1hbmRzLnNwbGljZShwb3NpdGlvbiArIDEsIHNpemUpO1xuICAgICAgICBpZiAoY29tbWFuZHMubGVuZ3RoID09PSBzaXplKSB7XG4gICAgICAgICAgY29tbWFuZHMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb21tYW5kcy5wdXNoKGNvbW1hbmQpO1xuICAgICAgICBwb3NpdGlvbiA9IGNvbW1hbmRzLmxlbmd0aCAtIDE7XG4gICAgICAgIGF3YWl0IGNvbW1hbmQuZG8oKTtcbiAgICAgIH0pKCk7XG4gICAgICBhd2FpdCBydW5uaW5nO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5kb2VzIHRoZSBsYXN0IGFjdGlvbiBwdXNoZWQgaW4gdGhlIGJ1c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZD59IEEgcHJvbWlzZSB0byB0aGUgZW5kIG9mIHRoZSBjb21tYW5kXG4gICAgICovXG4gICAgYXN5bmMgdW5kbygpIHtcbiAgICAgIHJ1bm5pbmcgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBydW5uaW5nO1xuICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uIC0gMTtcbiAgICAgICAgaWYgKG5ld1Bvc2l0aW9uID49IDApIHtcbiAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZHNbcG9zaXRpb25dO1xuICAgICAgICAgIGF3YWl0IGNvbW1hbmQudW5kbygpO1xuICAgICAgICAgIHBvc2l0aW9uID0gbmV3UG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgIH0pKCk7XG4gICAgICBhd2FpdCBydW5uaW5nO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVkb2VzIHRoZSBsYXN0IGFjdGlvbiB1bmRvbmUgZnJvbSB0aGUgYnVzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5kZWZpbmVkPn0gQSBwcm9taXNlIHRvIHRoZSBlbmQgb2YgdGhlIGNvbW1hbmRcbiAgICAgKi9cbiAgICBhc3luYyByZWRvKCkge1xuICAgICAgcnVubmluZyA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHJ1bm5pbmc7XG4gICAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gcG9zaXRpb24gKyAxO1xuICAgICAgICBpZiAobmV3UG9zaXRpb24gPCBjb21tYW5kcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBjb21tYW5kID0gY29tbWFuZHNbbmV3UG9zaXRpb25dO1xuICAgICAgICAgIGF3YWl0IGNvbW1hbmQuZG8oKTtcbiAgICAgICAgICBwb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgICAgYXdhaXQgcnVubmluZztcbiAgICB9LFxuICB9O1xuXG4gIE9iamVjdC5mcmVlemUoYnVzKTtcblxuICByZXR1cm4gYnVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tYW5kQnVzR2VuZXJhdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhdHRlcm5zL2NvbW1hbmRCdXMuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG5ldyBFdmVudEVtaXR0ZXJcbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IEFuIGV2ZW50IGVtaXR0ZXJcbiAqL1xuZnVuY3Rpb24gRXZlbnRFbWl0dGVyR2VuZXJhdG9yKCkge1xuICBjb25zdCBsaXN0ZW5uZXJzID0gbmV3IE1hcCgpO1xuICAvKipcbiAgICogVGhlIGV2ZW50IGVtaXR0ZXIgY2xhc3NcbiAgICovXG4gIGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGNhbGxlZCBvbmx5IG9uY2VcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gdW5yZWdpc3RlclxuICAgICAqL1xuICAgIG9uY2UoZXZlbnROYW1lID0gcmVxdWlyZWQoJ2V2ZW50TmFtZScpLCBjYiA9IHJlcXVpcmVkKCdjYicpKSB7XG4gICAgICBjb25zdCB1bnJlZ2lzdGVyID0gdGhpcy5vbihldmVudE5hbWUsICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB1bnJlZ2lzdGVyKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB1bnJlZ2lzdGVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gdW5yZWdpc3RlclxuICAgICAqL1xuICAgIG9uKGV2ZW50TmFtZSA9IHJlcXVpcmVkKCdldmVudE5hbWUnKSwgY2IgPSByZXF1aXJlZCgnY2InKSkge1xuICAgICAgaWYgKGxpc3Rlbm5lcnMuaGFzKGV2ZW50TmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGxpc3Rlbm5lcnMuc2V0KGV2ZW50TmFtZSwgbmV3IFNldCgpKTtcbiAgICAgIH1cbiAgICAgIGxpc3Rlbm5lcnMuZ2V0KGV2ZW50TmFtZSkuYWRkKGNiKTtcbiAgICAgIHJldHVybiB0aGlzLm9mZi5iaW5kKHRoaXMsIGV2ZW50TmFtZSwgY2IpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiBUaGUgZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIGV2ZW50IGlzIGVtaXR0ZWRcbiAgICAgKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBUaGUgY3VycmVudCBldmVudCBlbWl0ZXJcbiAgICAgKi9cbiAgICBvZmYoZXZlbnROYW1lID0gcmVxdWlyZWQoJ2V2ZW50TmFtZScpLCBjYiA9IHJlcXVpcmVkKCdjYicpKSB7XG4gICAgICBpZiAobGlzdGVubmVycy5oYXMoZXZlbnROYW1lKSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzZXQgPSBsaXN0ZW5uZXJzLmdldChldmVudE5hbWUpO1xuICAgICAgICBzZXQuZGVsZXRlKGNiKTtcbiAgICAgICAgaWYgKHNldC5zaXplID09PSAwKSB7XG4gICAgICAgICAgbGlzdGVubmVycy5kZWxldGUoZXZlbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXQgYW4gZXZlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIFRoZSBldmVudCB0byBlbWl0XG4gICAgICogQHBhcmFtIHtBcnJheTwqPn0gYXJncyBUaGUgYXJndW1lbnRzIGFwcGxpZWRcbiAgICAgKiBAcmV0dXJuIHtFdmVudEVtaXR0ZXJ9IFRoZSBjdXJyZW50IGV2ZW50IGVtaXRlclxuICAgICAqL1xuICAgIGVtaXQoZXZlbnROYW1lID0gcmVxdWlyZWQoJ2V2ZW50TmFtZScpLCAuLi5hcmdzKSB7XG4gICAgICBpZiAobGlzdGVubmVycy5oYXMoZXZlbnROYW1lKSA9PT0gdHJ1ZSkge1xuICAgICAgICBsaXN0ZW5uZXJzLmdldChldmVudE5hbWUpLmZvckVhY2goY2IgPT4gY2IuYXBwbHkodGhpcywgYXJncykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcbiAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmY7XG5cbiAgcmV0dXJuIG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyR2VuZXJhdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhdHRlcm5zL2VtaXR0ZXIuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuLyoqXG4gKiBDcmVhdGVzIGEgY2FjaGUgbWFuYWdlciBpbnN0YW5jZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbG9hZGVyIFRoZSBsb2FkaW5nIG1ldGhvZCB1c2VkIHRvIGxvYWQgZGF0YVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbGlkaXR5IFRoZSBkdXJhdGlvbiBmb3Igd2hpY2ggdGhlIGNhY2hlIGlzIHZhbGlkXG4gKiBAcmV0dXJucyB7Q2FjaGVNYW5hZ2VyfSBBIGNhY2hlIG1hbmFnZW1lbnQgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gY2FjaGVHZW5lcmF0b3IobG9hZGVyID0gcmVxdWlyZWQoJ2xvYWRlcicpLCB2YWxpZGl0eSA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCBjYWNoZU1hbmFnZXIgPSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgZnJvbSBjYWNoZSwgY3JlYXRlcyBvbiBpZiBlbXB0eVxuICAgICAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gdGhlIG9iamVjdCBpbiBjYWNoZVxuICAgICAqIEByZXR1cm5zIHsqfSBUaGUgb2JqZWN0IGluIGNhY2hlXG4gICAgICovXG4gICAgZ2V0KGtleSkge1xuICAgICAgaWYgKGNhY2hlLmhhcyhrZXkpID09PSBmYWxzZSB8fCBEYXRlLm5vdygpID49IGNhY2hlLmdldChrZXkpLnZhbGlkaXR5KSB7XG4gICAgICAgIGNhY2hlLnNldChrZXksIHtcbiAgICAgICAgICBpdGVtOiBsb2FkZXIoa2V5KSxcbiAgICAgICAgICB2YWxpZGl0eTogRGF0ZS5ub3coKSArIHZhbGlkaXR5LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KS5pdGVtO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBvYmplY3QgZnJvbSBjYWNoZSB1c2luZyBpdCdzIGtleVxuICAgICAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gdGhlIG9iamVjdCBpbiBjYWNoZVxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgY2FjaGUuZGVsZXRlKGtleSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGl0ZW0gZnJvbSB0aGUgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtpbnR9IFRoZSBzaXplIG9mIHRoZSBjYWNoZVxuICAgICAqL1xuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIGNhY2hlLnNpemU7XG4gICAgfSxcbiAgfTtcblxuICBPYmplY3QuZnJlZXplKGNhY2hlTWFuYWdlcik7XG5cbiAgcmV0dXJuIGNhY2hlTWFuYWdlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FjaGVHZW5lcmF0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2FjaGUvY2FjaGUuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuaW1wb3J0IG1peE1hcCBmcm9tICcuLi9hcnJheS9taXhNYXAnO1xuXG4vKipcbiAqIFN1YnNjcmliZXMgYSBzaW5nbGUgb3IgbXVsdGlwbGUgZXZlbnRzIG9uIGEgc2luZ2xlIG9yIG11bHRpcGxlIGVsZW1lbnRzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fEFycmF5PEhUTUxFbGVtZW50Pn0gZWxtcywgVGhlIGRvbSBlbGVtZW50IHRvIGF0dGFjaCBldmVudHMgb25cbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IGV2dHMsIHRoZSBldmVudHMgdG8gYXR0YWNoXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYiwgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZXZlbnQgb2NjdXJzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gYWxsb3dpbmcgdG8gdW5zdWJzY3JpYmUgYWxsIHRoZSBldmVudHNcbiAqL1xuY29uc3QgZXZlbnRzID0gKGVsbXMgPSByZXF1aXJlZCgnZWxtcycpLCBldnRzID0gcmVxdWlyZWQoJ2V2dHMnKSwgY2IgPSByZXF1aXJlZCgnY2InKSkgPT4ge1xuICBjb25zdCBhZGQgPSBtaXhNYXAoKGVsZW1lbnQsIGV2ZW50KSA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKSk7XG4gIGNvbnN0IHJlbW92ZSA9IG1peE1hcCgoZWxlbWVudCwgZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpKTtcbiAgYWRkKGVsbXMsIGV2dHMpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZShlbG1zLCBldnRzKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kb20vZXZlbnQuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuXG4vKipcbiAqIENsYW1wcyBhIG51bWJlciBiZXR3ZWVuIGEgbWluIGFuZCBhIG1heCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG51bSBUaGUgbnVtYmVyIHRvIGNsYW1wXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBtaW4gbnVtYmVyIHRvIGNsYW1wIHdpdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggVGhlIG1heCBudW1iZXIgdG8gY2xhbXAgd2l0aFxuICogQHJldHVybnMge251bWJlcn0gVGhlIGNsYW1wZWQgbnVtYmVyXG4gKi9cbmNvbnN0IGNsYW1wID0gKG51bSA9IHJlcXVpcmVkKCdudW0nKSwgbWluID0gcmVxdWlyZWQoJ21pbicpLCBtYXggPSByZXF1aXJlZCgnbWF4JykpID0+IE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhbXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWF0aC9jbGFtcC5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbi8qKlxuICogVGFrZXMgYSB2YWx1ZSBvciBhIGZ1bmN0aW9uIGFuZCByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIGZ1bmN0aW9uLCBvciB0aGUgdmFsdWVcbiAqIEBwYXJhbSB7KnxGdW5jdGlvbn0gdmFsdWUsIHRoZSB2YWx1ZSBvciBhIGZ1bmN0aW9uIHJldHVybmluZyB0aGUgdmFsdWVcbiAqIEByZXR1cm5zIHsqfSBBIHZhbHVlXG4gKi9cbmNvbnN0IGZ1bmNPclZhbHVlID0gKHZhbHVlID0gcmVxdWlyZWQoJ3ZhbHVlJykpID0+IHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gdmFsdWUoKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jT3JWYWx1ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92YWx1ZS9mdW5jT3JWYWx1ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=