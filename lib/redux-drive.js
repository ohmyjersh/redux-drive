(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define('redux-drive', [], factory);
  else if (typeof exports === 'object') exports['redux-drive'] = factory();
  else root['redux-drive'] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter,
          /******/
        });
        /******/
      }
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.generationDefinition = exports.createReducer = undefined;

        var _reduxDrive = __webpack_require__(1);

        exports.createReducer = _reduxDrive.createReducer;
        exports.generationDefinition = _reduxDrive.generationDefinition;

        /***/
      },
      /* 1 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        exports.createReducer = exports.generationDefinition = exports.createAction = undefined;

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _makeItLikeAFunction = __webpack_require__(2);

        var _makeItLikeAFunction2 = _interopRequireDefault(
          _makeItLikeAFunction
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var createAction = (exports.createAction = function createAction(type) {
          var payload =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : null;
          return {
            type: type,
            payload: payload,
          };
        });

        var generationDefinition = (exports.generationDefinition = function generationDefinition(
          definedActions
        ) {
          return Object.keys(definedActions).reduce(
            function(acc, curr) {
              acc.actionTypes[curr] = curr;
              var _definedActions$curr = definedActions[curr],
                payload = _definedActions$curr.payload,
                reduce = _definedActions$curr.reduce;

              acc.reduce = reduce;
              acc.actions[
                (0, _makeItLikeAFunction2.default)(curr)
              ] = function() {
                return typeof payload === 'function'
                  ? createAction(curr, payload.apply(undefined, arguments)) // when a function
                  : payload
                    ? createAction(curr, payload) // just create the payload
                    : createAction(curr);
              }; // everthing else

              return acc;
            },
            {
              actionTypes: {},
              actions: {},
            }
          );
        });
        var createReducer = (exports.createReducer = function createReducer() {
          for (
            var _len = arguments.length,
              definedActions = Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            definedActions[_key - 1] = arguments[_key];
          }

          var _ref =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {},
            initialState = _ref.initialState;

          return function() {
            var state =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : initialState;
            var action = arguments[1];

            return definedActions.reduce(function(state, currDef) {
              return currDef.hasOwnProperty(action.type) &&
                !!currDef[action.type].func
                ? currDef[action.type].func(state, action.payload)
                : !!action.payload
                  ? _extends({}, state, action.payload)
                  : _extends({}, state);
            }, state);
          };
        });

        /***/
      },
      /* 2 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _camelize = __webpack_require__(3);

        var _camelize2 = _interopRequireDefault(_camelize);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = function(name) {
          return name.includes('_')
            ? (0, _camelize2.default)(name.toLowerCase().replace(/_/g, ' '))
                .split(' ')
                .join('')
            : (0, _camelize2.default)(name)
                .split(' ')
                .join('');
        };

        /***/
      },
      /* 3 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        exports.default = function(str) {
          return str
            .replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
              return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
            })
            .replace(/\s+/g, '');
        };

        /***/
      },
      /******/
    ]
  );
});
//# sourceMappingURL=redux-drive.js.map
