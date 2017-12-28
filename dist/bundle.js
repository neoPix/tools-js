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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dom_event__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__math_clamp__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__string_random__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tools_required__ = __webpack_require__(0);
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
  commandBus: __WEBPACK_IMPORTED_MODULE_7__async_commandBus__["a" /* default */],
  // dom
  event: __WEBPACK_IMPORTED_MODULE_8__dom_event__["a" /* default */],
  // math
  clamp: __WEBPACK_IMPORTED_MODULE_9__math_clamp__["a" /* default */],
  // string
  random: __WEBPACK_IMPORTED_MODULE_10__string_random__["a" /* default */],
  // tools
  required: __WEBPACK_IMPORTED_MODULE_11__tools_required__["a" /* default */]
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
/* 13 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzJkN2U5YWY0OThjNzAwM2VkZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9hc0FycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcnJheS9taXhNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmluZy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL3NsZWVwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMvZXhlY3V0aW9uRHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL3Byb21pc2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXN5bmMvcmV0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL2NvbW1hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FzeW5jL2NvbW1hbmRCdXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC9jbGFtcC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlZCIsImZpZWxkIiwiRXJyb3IiLCJhc0FycmF5IiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsIm1peE1hcCIsImNiIiwiYXJncyIsImxlbmd0aCIsImFycmF5cyIsIm1hcCIsIm1heExlbiIsImNvbXBvc2UiLCJwb3MiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJ2YWx1ZSIsImNvbmNhdCIsInJhbmRvbSIsIk1hdGgiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJ0b1N0cmluZyIsInN1YnN0ciIsInNsZWVwIiwiZGVsYXkiLCJQcm9taXNlIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJleGVjdXRpb25EdXJhdGlvbiIsInByb21pc2lmeSIsInJldHJ5IiwiY29tbWFuZCIsImNvbW1hbmRCdXMiLCJldmVudCIsImNsYW1wIiwiZnVuYyIsIm5hbWUiLCJyYW5kb21TdHJpbmciLCJjb25zb2xlIiwidGltZSIsInJlc3VsdCIsInRpbWVFbmQiLCJyZWplY3QiLCJlcnIiLCJkYXRhIiwidGltZXMiLCJ0cmllZCIsInRyeU9uY2UiLCJwcm9jZXNzIiwidW5kbyIsIkNvbW1hbmRHZW5lcmF0b3IiLCJkb2luZyIsInVuZG9pbmciLCJzdGF0ZSIsImNtZENsYXNzIiwiZG8iLCJPYmplY3QiLCJmcmVlemUiLCJub29wIiwiQ29tbWFuZEJ1c0dlbmVyYXRvciIsInNpemUiLCJydW5uaW5nIiwicG9zaXRpb24iLCJjb21tYW5kcyIsImJ1cyIsInNwbGljZSIsInNoaWZ0IiwicHVzaCIsIm5ld1Bvc2l0aW9uIiwicmVkbyIsImV2ZW50cyIsImVsbXMiLCJldnRzIiwiYWRkIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibnVtIiwibWluIiwibWF4Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7QUFLQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVcsR0FBK0I7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXRCRCxTQUFTLE9BQVQsQ0FBc0I7QUFBRSxR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QUFuRSx3RUFBQTNFLENBQVMsTUFBVCxDQUFtRTtBQUFBLE1BQWpENEUsSUFBaUQsdUVBQTFDLHdFQUFBNUUsQ0FBUyxNQUFULENBQTBDO0FBQUEsTUFBeEJRLEVBQXdCLHVFQUFuQix3RUFBQVIsQ0FBUyxJQUFULENBQW1COztBQUN4RixNQUFNNkUsTUFBTSxzRUFBQXRFLENBQU8sVUFBQ3VFLE9BQUQsRUFBVXpDLEtBQVY7QUFBQSxXQUFvQnlDLFFBQVFDLGdCQUFSLENBQXlCMUMsS0FBekIsRUFBZ0M3QixFQUFoQyxDQUFwQjtBQUFBLEdBQVAsQ0FBWjtBQUNBLE1BQU13RSxTQUFTLHNFQUFBekUsQ0FBTyxVQUFDdUUsT0FBRCxFQUFVekMsS0FBVjtBQUFBLFdBQW9CeUMsUUFBUUcsbUJBQVIsQ0FBNEI1QyxLQUE1QixFQUFtQzdCLEVBQW5DLENBQXBCO0FBQUEsR0FBUCxDQUFmO0FBQ0FxRSxNQUFJRixJQUFKLEVBQVVDLElBQVY7QUFDQSxTQUFPLFlBQU07QUFDWEksV0FBT0wsSUFBUCxFQUFhQyxJQUFiO0FBQ0QsR0FGRDtBQUdELENBUEQ7O0FBU0EseURBQWVGLE1BQWYsRTs7Ozs7Ozs7QUNuQkE7O0FBRUE7Ozs7Ozs7QUFPQSxJQUFNcEMsUUFBUSxTQUFSQSxLQUFRO0FBQUEsTUFBQzRDLEdBQUQsdUVBQU8sd0VBQUFsRixDQUFTLEtBQVQsQ0FBUDtBQUFBLE1BQXdCbUYsR0FBeEIsdUVBQThCLHdFQUFBbkYsQ0FBUyxLQUFULENBQTlCO0FBQUEsTUFBK0NvRixHQUEvQyx1RUFBcUQsd0VBQUFwRixDQUFTLEtBQVQsQ0FBckQ7QUFBQSxTQUF5RXNCLEtBQUs2RCxHQUFMLENBQVM3RCxLQUFLOEQsR0FBTCxDQUFTRixHQUFULEVBQWNDLEdBQWQsQ0FBVCxFQUE2QkMsR0FBN0IsQ0FBekU7QUFBQSxDQUFkOztBQUVBLHlEQUFlOUMsS0FBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMmQ3ZTlhZjQ5OGM3MDAzZWRmOSIsIi8qKlxuICogVGhyb3dzIGlmIGEgcmVxdWlyZWQgZmllbGQgaXMgZW1wdHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCwgVGhlIG5hbWUgb2YgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5jb25zdCByZXF1aXJlZCA9IChmaWVsZCA9IHJlcXVpcmVkKCdmaWVsZCcpKSA9PiB7IHRocm93IG5ldyBFcnJvcihgJHtmaWVsZH0gaXMgcmVxdWlyZWRgKTsgfTtcblxuZXhwb3J0IGRlZmF1bHQgcmVxdWlyZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9vbHMvcmVxdWlyZWQuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBlbGVtZW50IHRvIGFuIGFycmF5IGlmIGl0IGlzbid0IGFscmVhZHkgb25lXG4gKiBAcGFyYW0geyp8QXJyYXl9IGl0ZW0gVGhlIGl0ZW0gdG8gdHJhbnNmb3JtIHRvIGFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXl9IEFuIGFycmF5XG4gKi9cbmNvbnN0IGFzQXJyYXkgPSAoaXRlbSA9IHJlcXVpcmVkKCdpdGVtJykpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkgPT09IHRydWUpIHJldHVybiBpdGVtO1xuICByZXR1cm4gW2l0ZW1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXNBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcnJheS9hc0FycmF5LmpzIiwiaW1wb3J0IGFzQXJyYXkgZnJvbSAnLi9hc0FycmF5JztcbmltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbi8qKlxuICogQ3JlYXRlZCBhIGZ1bmN0aW9uIHRvIG1peCBhbmQgbWFwIG11bHRpcGxlIGFycmF5c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGNhbGwgb24gZXZlcnkgY29tYmluYWlzb25cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gRnVuY3Rpb24gdG8gbWFwIG11bHRpcGxlIGFycmF5c1xuICovXG5jb25zdCBtaXhNYXAgPSAoY2IgPSByZXF1aXJlZCgnY2InKSkgPT4gKC4uLmFyZ3MpID0+IHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hvdWxkIGJlIGNhbGxlZCB3aXRoIGF0IGxlYXN0IDIgdmFsdWVzJyk7XG4gIH1cbiAgY29uc3QgYXJyYXlzID0gYXJncy5tYXAoYXNBcnJheSk7XG4gIGNvbnN0IG1heExlbiA9IGFycmF5cy5sZW5ndGggLSAxO1xuICBjb25zdCBjb21wb3NlID0gKHBvcyA9IDAsIHZhbHVlcyA9IFtdKSA9PlxuICAgIGFycmF5c1twb3NdLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHBvcyA8IG1heExlbikge1xuICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChjb21wb3NlKHBvcyArIDEsIHZhbHVlcy5jb25jYXQoW3ZhbHVlXSkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2MuY29uY2F0KFtjYiguLi52YWx1ZXMuY29uY2F0KFt2YWx1ZV0pKV0pO1xuICAgIH0sIFtdKTtcbiAgcmV0dXJuIGNvbXBvc2UoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1peE1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcnJheS9taXhNYXAuanMiLCIvKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSBzdHJpbmdcbiAqIEBwYXJhbSB7aW50fSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBhIHJhbmRvbSBzdHJpbmdcbiAqL1xuY29uc3QgcmFuZG9tID0gKGxlbmd0aCA9IDgpID0+IChNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9WQUxVRSkudG9TdHJpbmcoMzYpLnN1YnN0cigwLCBsZW5ndGgpO1xuXG5leHBvcnQgZGVmYXVsdCByYW5kb207XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RyaW5nL3JhbmRvbS5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbi8qKlxuICogU2V0cyBhIHByb2Nlc3MgYXNsZWVwIGZvciBhIGRlZmluZWQgcGVyaW9kXG4gKiBAcGFyYW0ge2ludH0gZGVsYXkgVGhlIGRlbGF5IHRvIHNsZWVwIGZvclxuICogQHJldHVybnMge1Byb21pc2U8dW5kZWZpbmVkPn0gQSBwcm9taXNlIHJlc29sdmluZyBvbmNlIHRoZSBkZWxheSBoYXMgcGFzc2VkXG4gKi9cbmNvbnN0IHNsZWVwID0gKGRlbGF5ID0gcmVxdWlyZWQoJ2RlbGF5JykpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSkpO1xuXG5leHBvcnQgZGVmYXVsdCBzbGVlcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9zbGVlcC5qcyIsIi8vIGFycmF5XG5pbXBvcnQgYXNBcnJheSBmcm9tICcuL2FycmF5L2FzQXJyYXknO1xuaW1wb3J0IG1peE1hcCBmcm9tICcuL2FycmF5L21peE1hcCc7XG4vLyBhc3luY1xuaW1wb3J0IGV4ZWN1dGlvbkR1cmF0aW9uIGZyb20gJy4vYXN5bmMvZXhlY3V0aW9uRHVyYXRpb24nO1xuaW1wb3J0IHByb21pc2lmeSBmcm9tICcuL2FzeW5jL3Byb21pc2lmeSc7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi9hc3luYy9zbGVlcCc7XG5pbXBvcnQgcmV0cnkgZnJvbSAnLi9hc3luYy9yZXRyeSc7XG5pbXBvcnQgY29tbWFuZCBmcm9tICcuL2FzeW5jL2NvbW1hbmQnO1xuaW1wb3J0IGNvbW1hbmRCdXMgZnJvbSAnLi9hc3luYy9jb21tYW5kQnVzJztcbi8vIGRvbVxuaW1wb3J0IGV2ZW50IGZyb20gJy4vZG9tL2V2ZW50Jztcbi8vIG1hdGhcbmltcG9ydCBjbGFtcCBmcm9tICcuL21hdGgvY2xhbXAnO1xuLy8gcmFuZG9tXG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vc3RyaW5nL3JhbmRvbSc7XG4vLyB0b29sc1xuaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4vdG9vbHMvcmVxdWlyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGFycmF5XG4gIGFzQXJyYXksXG4gIG1peE1hcCxcbiAgLy8gYXN5bmNcbiAgZXhlY3V0aW9uRHVyYXRpb24sXG4gIHByb21pc2lmeSxcbiAgc2xlZXAsXG4gIHJldHJ5LFxuICBjb21tYW5kLFxuICBjb21tYW5kQnVzLFxuICAvLyBkb21cbiAgZXZlbnQsXG4gIC8vIG1hdGhcbiAgY2xhbXAsXG4gIC8vIHN0cmluZ1xuICByYW5kb20sXG4gIC8vIHRvb2xzXG4gIHJlcXVpcmVkLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5pbXBvcnQgcmFuZG9tU3RyaW5nIGZyb20gJy4uL3N0cmluZy9yYW5kb20nO1xuXG4vKipcbiAqIERpc3BsYXlzIHRoZSBkdXJhdGlvbiBvZiBleGVjdXRpb24gb2YgYSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHRpbWVyLCBkZWZhdWx0KHVuZGVmaW5lZClcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0IG9mIGZ1bmNcbiAqL1xuY29uc3QgZXhlY3V0aW9uRHVyYXRpb24gPSAoZnVuYyA9IHJlcXVpcmVkKCdmdW5jJyksIG5hbWUgPSByYW5kb21TdHJpbmcoKSkgPT4gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgY29uc29sZS50aW1lKG5hbWUpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmdW5jKC4uLmFyZ3MpO1xuICBjb25zb2xlLnRpbWVFbmQobmFtZSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleGVjdXRpb25EdXJhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9leGVjdXRpb25EdXJhdGlvbi5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGEgcHJvbWlzZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbFxuICogQHJldHVybnMge0Z1bmN0aW9ufSBUaGUgZnVuY3Rpb24gcmV0dXJuaW5nIGEgY2FsbGJhY2tcbiAqL1xuY29uc3QgcHJvbWlzaWZ5ID0gKGZ1bmMgPSByZXF1aXJlZCgnZnVuYycpKSA9PiAoLi4uYXJncykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gZnVuYyguLi5hcmdzLCAoZXJyLCBkYXRhKSA9PiB7XG4gIGlmIChlcnIpIHJlamVjdChlcnIpO1xuICBlbHNlIHJlc29sdmUoZGF0YSk7XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb21pc2lmeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9wcm9taXNpZnkuanMiLCJpbXBvcnQgcmVxdWlyZWQgZnJvbSAnLi4vdG9vbHMvcmVxdWlyZWQnO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4vc2xlZXAnO1xuXG4vKipcbiAqIFRyaWVzIHRvIHJ1biB0aGUgY2FsbGJhY2sgYSBkZWZpbmVkIG51bWJlciBvZiB0aW1lLFxuICogdGhyb3dzIHdoZW4gdGhlIG51bWJlciBvZiB0cmllcyBpcyBleGNlZWRlZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IgVGhlIGZ1bmN0aW9uIHRvIHJ1blxuICogQHBhcmFtIHtpbnR9IHRpbWVzIFRoZSBudW1iZXIgb2YgdGltZSB0byB0cnkgcnVubmluZyB0aCBjYWxsYmFjaywgZGVmYXVsdCgyKVxuICogQHBhcmFtIHtpbnR9IGRlbGF5IFRoZSBkZWxheSBiZXR3ZWVuIGVhY2ggY2FsbCwgZGVmYXVsdCgwKVxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgb2YgYSB2YWxpZCBjYWxsYmFja1xuICovXG5jb25zdCByZXRyeSA9IGFzeW5jIChjYiA9IHJlcXVpcmVkKCdjYicpLCB7IHRpbWVzID0gMiwgZGVsYXkgPSAwIH0gPSB7fSkgPT4ge1xuICBsZXQgdHJpZWQgPSAwO1xuICBjb25zdCB0cnlPbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgY2IoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0cmllZCArPSAxO1xuICAgICAgaWYgKHRyaWVkIDwgdGltZXMpIHtcbiAgICAgICAgYXdhaXQgc2xlZXAoZGVsYXkpO1xuICAgICAgICByZXR1cm4gdHJ5T25jZSgpO1xuICAgICAgfVxuICAgICAgZS50cmllZCA9IHRyaWVkO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB0cnlPbmNlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9yZXRyeS5qcyIsImltcG9ydCByZXF1aXJlZCBmcm9tICcuLi90b29scy9yZXF1aXJlZCc7XG5pbXBvcnQgbm9vcCBmcm9tICcuLi90b29scy9ub29wJztcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBjb21tYW5kIGVsZW1lbnQgYmFzZWQgb24gYSBkbyBhbmQgdW5kbyBtZXRob2RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb2Nlc3MgVGhlIG1ldGhvZCBjYWxsZWQgdG8gcHJvY2VzcyB0aGUgY29tbWFuZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gdW5kbyBUaGUgbWV0aG9zIGNhbGxlZCB0byByZXZlcnNlIHRoZSBwcm9jZXNzXG4gKiBAcmV0dXJucyB7Q29tbWFuZH0gVGhlIGNvbW1hbmQgY2xhc3NcbiAqL1xuY29uc3QgY29tbWFuZCA9IChwcm9jZXNzID0gcmVxdWlyZWQoJ3Byb2Nlc3MnKSwgdW5kbyA9IG5vb3ApID0+XG4gIGZ1bmN0aW9uIENvbW1hbmRHZW5lcmF0b3IoLi4uYXJncykge1xuICAgIGxldCBkb2luZyA9IG51bGw7XG4gICAgbGV0IHVuZG9pbmcgPSBudWxsO1xuICAgIGNvbnN0IHN0YXRlID0ge307XG4gICAgY29uc3QgY21kQ2xhc3MgPSB7XG4gICAgICAvKipcbiAgICAgICAqIEV4ZWN1dGVzIHRoZSBjb21tYW5kXG4gICAgICAgKiBAcmV0dXJucyB7Kn0gVGhlIGNvbW1hbmQgcmVzdWx0XG4gICAgICAgKi9cbiAgICAgIGFzeW5jIGRvKCkge1xuICAgICAgICBpZiAodW5kb2luZyAhPT0gbnVsbCkge1xuICAgICAgICAgIGF3YWl0IHVuZG9pbmc7XG4gICAgICAgICAgdW5kb2luZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZG9pbmcgPSBwcm9jZXNzKHN0YXRlLCAuLi5hcmdzKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZG9pbmc7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBFeGVjdXRlcyBhIHJldmVyc2UgY29tbWVuZCB0byByZXR1cm4gdG8gdGhlIHByZXZpb3VzIHN0YXRlXG4gICAgICAgKiBAcmV0dXJucyB7Kn0gVGhlIHJldmVyc2UgY29tbWFuZCByZXN1bHRcbiAgICAgICAqL1xuICAgICAgYXN5bmMgdW5kbygpIHtcbiAgICAgICAgaWYgKGRvaW5nID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21tYW5kIG5lZWRzIHRvIGJlIGRvbmUgYmVmb3JlIGJlaW5nIHVuZG9uZScpO1xuICAgICAgICB9XG4gICAgICAgIHVuZG9pbmcgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IGRvaW5nO1xuICAgICAgICAgIHJldHVybiB1bmRvKHN0YXRlLCAuLi5hcmdzKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdW5kb2luZztcbiAgICAgICAgZG9pbmcgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSxcbiAgICB9O1xuICAgIE9iamVjdC5mcmVlemUoY21kQ2xhc3MpO1xuICAgIHJldHVybiBjbWRDbGFzcztcbiAgfTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFuZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9jb21tYW5kLmpzIiwiY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBub29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Rvb2xzL25vb3AuanMiLCIvKipcbiAqIEdlbmVyYXRlcyBhIENvbW1hbmRCdXMgYWJsZSB0byBkbywgdW5kbyBhbmQgcmVkbyBhIGNvbW1hbmQgc3VpdGVcbiAqIEBwYXJhbSB7aW50fSBzaXplIFRoZSBtYXggc2l6ZSBvZiB0aGUgY29tbWFuZCBidXNcbiAqIEByZXR1cm5zIHtDb21tYW5kQnVzfSBBbiBpbnN0YW5jZSBvZiBhIGJ1cyBvZiBjb21tYW5kXG4gKi9cbmZ1bmN0aW9uIENvbW1hbmRCdXNHZW5lcmF0b3Ioc2l6ZSA9IDEwKSB7XG4gIGxldCBydW5uaW5nID0gbnVsbDtcbiAgbGV0IHBvc2l0aW9uID0gMDtcbiAgY29uc3QgY29tbWFuZHMgPSBbXTtcbiAgY29uc3QgYnVzID0ge1xuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtpbnR9IFRoZSBwb3NpdGlvbiBpbiB0aGUgYnVzXG4gICAgICovXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge2ludH0gVGhlIGN1cnJlbnQgc2l6ZSBvZiB0aGUgYnVzXG4gICAgICovXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gY29tbWFuZHMubGVuZ3RoO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogRXhleHV0ZXMgYSBjb21tYW5kIGFuZCBwdXNoIGl0IGluIHRoIGJ1c1xuICAgICAqIEBwYXJhbSB7Q29tbWFuZH0gY29tbWFuZCBBIGNvbW1hbmQgdG8gYWRkIGluIHRoZSBidXNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQ+fSBBIHByb21pc2UgdG8gdGhlIGVuZCBvZiB0aGUgY29tbWFuZFxuICAgICAqL1xuICAgIGFzeW5jIGRvKGNvbW1hbmQpIHtcbiAgICAgIHJ1bm5pbmcgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBydW5uaW5nO1xuICAgICAgICBjb21tYW5kcy5zcGxpY2UocG9zaXRpb24gKyAxLCBzaXplKTtcbiAgICAgICAgaWYgKGNvbW1hbmRzLmxlbmd0aCA9PT0gc2l6ZSkge1xuICAgICAgICAgIGNvbW1hbmRzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tbWFuZHMucHVzaChjb21tYW5kKTtcbiAgICAgICAgcG9zaXRpb24gPSBjb21tYW5kcy5sZW5ndGggLSAxO1xuICAgICAgICBhd2FpdCBjb21tYW5kLmRvKCk7XG4gICAgICB9KSgpO1xuICAgICAgYXdhaXQgcnVubmluZztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuZG9lcyB0aGUgbGFzdCBhY3Rpb24gcHVzaGVkIGluIHRoZSBidXNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx1bmRlZmluZWQ+fSBBIHByb21pc2UgdG8gdGhlIGVuZCBvZiB0aGUgY29tbWFuZFxuICAgICAqL1xuICAgIGFzeW5jIHVuZG8oKSB7XG4gICAgICBydW5uaW5nID0gKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgcnVubmluZztcbiAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSBwb3NpdGlvbiAtIDE7XG4gICAgICAgIGlmIChuZXdQb3NpdGlvbiA+PSAwKSB7XG4gICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzW3Bvc2l0aW9uXTtcbiAgICAgICAgICBhd2FpdCBjb21tYW5kLnVuZG8oKTtcbiAgICAgICAgICBwb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgICAgYXdhaXQgcnVubmluZztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlZG9lcyB0aGUgbGFzdCBhY3Rpb24gdW5kb25lIGZyb20gdGhlIGJ1c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZD59IEEgcHJvbWlzZSB0byB0aGUgZW5kIG9mIHRoZSBjb21tYW5kXG4gICAgICovXG4gICAgYXN5bmMgcmVkbygpIHtcbiAgICAgIHJ1bm5pbmcgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBydW5uaW5nO1xuICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uICsgMTtcbiAgICAgICAgaWYgKG5ld1Bvc2l0aW9uIDwgY29tbWFuZHMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgY29tbWFuZCA9IGNvbW1hbmRzW25ld1Bvc2l0aW9uXTtcbiAgICAgICAgICBhd2FpdCBjb21tYW5kLmRvKCk7XG4gICAgICAgICAgcG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICAgIGF3YWl0IHJ1bm5pbmc7XG4gICAgfSxcbiAgfTtcblxuICBPYmplY3QuZnJlZXplKGJ1cyk7XG5cbiAgcmV0dXJuIGJ1cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWFuZEJ1c0dlbmVyYXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3luYy9jb21tYW5kQnVzLmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcbmltcG9ydCBtaXhNYXAgZnJvbSAnLi4vYXJyYXkvbWl4TWFwJztcblxuLyoqXG4gKiBTdWJzY3JpYmVzIGEgc2luZ2xlIG9yIG11bHRpcGxlIGV2ZW50cyBvbiBhIHNpbmdsZSBvciBtdWx0aXBsZSBlbGVtZW50c1xuICogQHBhcmFtIHtIVE1MRWxlbWVudHxBcnJheTxIVE1MRWxlbWVudD59IGVsbXMsIFRoZSBkb20gZWxlbWVudCB0byBhdHRhY2ggZXZlbnRzIG9uXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheTxzdHJpbmc+fSBldnRzLCB0aGUgZXZlbnRzIHRvIGF0dGFjaFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2IsIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGV2ZW50IG9jY3Vyc1xuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIGFsbG93aW5nIHRvIHVuc3Vic2NyaWJlIGFsbCB0aGUgZXZlbnRzXG4gKi9cbmNvbnN0IGV2ZW50cyA9IChlbG1zID0gcmVxdWlyZWQoJ2VsbXMnKSwgZXZ0cyA9IHJlcXVpcmVkKCdldnRzJyksIGNiID0gcmVxdWlyZWQoJ2NiJykpID0+IHtcbiAgY29uc3QgYWRkID0gbWl4TWFwKChlbGVtZW50LCBldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYikpO1xuICBjb25zdCByZW1vdmUgPSBtaXhNYXAoKGVsZW1lbnQsIGV2ZW50KSA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKSk7XG4gIGFkZChlbG1zLCBldnRzKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZW1vdmUoZWxtcywgZXZ0cyk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZG9tL2V2ZW50LmpzIiwiaW1wb3J0IHJlcXVpcmVkIGZyb20gJy4uL3Rvb2xzL3JlcXVpcmVkJztcblxuLyoqXG4gKiBDbGFtcHMgYSBudW1iZXIgYmV0d2VlbiBhIG1pbiBhbmQgYSBtYXggdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW0gVGhlIG51bWJlciB0byBjbGFtcFxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBUaGUgbWluIG51bWJlciB0byBjbGFtcCB3aXRoXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFRoZSBtYXggbnVtYmVyIHRvIGNsYW1wIHdpdGhcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBjbGFtcGVkIG51bWJlclxuICovXG5jb25zdCBjbGFtcCA9IChudW0gPSByZXF1aXJlZCgnbnVtJyksIG1pbiA9IHJlcXVpcmVkKCdtaW4nKSwgbWF4ID0gcmVxdWlyZWQoJ21heCcpKSA9PiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYW1wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGgvY2xhbXAuanMiXSwic291cmNlUm9vdCI6IiJ9