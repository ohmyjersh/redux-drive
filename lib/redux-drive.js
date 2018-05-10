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

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
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

              acc.reducers[curr] = reduce;
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
              reducers: {},
            }
          );
        });
        // export const createReducer = (definedActions, initialState = {}) => {
        //   let definedActionsArr = Array.isArray(definedActions)
        //     ? definedActions
        //     : [definedActions];
        //   let stateFunc = Array.isArray(initialState)
        //     ? updateArrayState
        //     : isObject(initialState)
        //       ? updateObjectState
        //       : updatePrimitiveState;
        //   return (state = initialState, action) => {
        //     return definedActionsArr.reduce((state, currDef) => {
        //       if (currDef.actionTypes[action.type]) {
        //         let reducerFunc =
        //           typeof currDef.reducers[action.type] === 'function'
        //             ? currDef.reducers[action.type]
        //             : stateFunc;
        //         return reducerFunc(state, action.payload);
        //       }
        //       return stateFunc(state);
        //     }, state);
        //   };
        // };

        var createReducer = (exports.createReducer = function createReducer(
          definedActions
        ) {
          var initialState =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};

          var definedActionsArr = Array.isArray(definedActions)
            ? definedActions
            : [definedActions];
          var stateFunc = Array.isArray(initialState)
            ? updateArrayState
            : isObject(initialState)
              ? updateObjectState
              : updatePrimitiveState;
          return function() {
            var state =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : initialState;
            var action = arguments[1];

            return definedActionsArr
              .filter(function(x) {
                return x.actionTypes.hasOwnProperty(action.type);
              })
              .reduce(function(state, currDef) {
                var reducerFunc =
                  typeof currDef.reducers[action.type] === 'function'
                    ? currDef.reducers[action.type]
                    : stateFunc;
                return reducerFunc(state, action.payload);
              }, state);
          };
        });

        var updatePrimitiveState = function updatePrimitiveState(
          state,
          payload
        ) {
          return payload === false || payload === 0 || payload
            ? payload
            : state;
        };

        var updateArrayState = function updateArrayState(state, payload) {
          return !!payload
            ? [].concat(_toConsumableArray(state), _toConsumableArray(payload))
            : [].concat(_toConsumableArray(state));
        };

        var updateObjectState = function updateObjectState(state, payload) {
          return !!payload ? _extends({}, state, payload) : _extends({}, state);
        };

        var isObject = function isObject(obj) {
          return obj === Object(obj);
        };

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
