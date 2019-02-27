(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 1307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.RowDefinition = exports.ColumnDefinition = exports.plugins = exports.utils = exports.settingsComponentObjects = exports.selectors = exports.constants = exports.components = exports.actions = undefined;

var _index = __webpack_require__(1308);

var _index2 = _interopRequireDefault(_index);

var _actions = __webpack_require__(393);

var actions = _interopRequireWildcard(_actions);

var _components = __webpack_require__(752);

var _components2 = _interopRequireDefault(_components);

var _constants = __webpack_require__(760);

var constants = _interopRequireWildcard(_constants);

var _dataSelectors = __webpack_require__(389);

var selectors = _interopRequireWildcard(_dataSelectors);

var _settingsComponentObjects = __webpack_require__(664);

var _settingsComponentObjects2 = _interopRequireDefault(_settingsComponentObjects);

var _utils = __webpack_require__(1407);

var _utils2 = _interopRequireDefault(_utils);

var _core = __webpack_require__(751);

var _core2 = _interopRequireDefault(_core);

var _legacyStyle = __webpack_require__(1408);

var _legacyStyle2 = _interopRequireDefault(_legacyStyle);

var _local = __webpack_require__(1409);

var _local2 = _interopRequireDefault(_local);

var _position = __webpack_require__(1419);

var _position2 = _interopRequireDefault(_position);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = {
  CorePlugin: _core2.default,
  LegacyStylePlugin: _legacyStyle2.default,
  LocalPlugin: _local2.default,
  PositionPlugin: _position2.default
};

var ColumnDefinition = _components2.default.ColumnDefinition;
var RowDefinition = _components2.default.RowDefinition;

var connect = _utils2.default.connect;

exports.default = _index2.default;
exports.actions = actions;
exports.components = _components2.default;
exports.constants = constants;
exports.selectors = selectors;
exports.settingsComponentObjects = _settingsComponentObjects2.default;
exports.utils = _utils2.default;
exports.plugins = plugins;
exports.ColumnDefinition = ColumnDefinition;
exports.RowDefinition = RowDefinition;
exports.connect = connect;

/***/ }),

/***/ 1308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pickBy2 = __webpack_require__(654);

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _forIn2 = __webpack_require__(1314);

var _forIn3 = _interopRequireDefault(_forIn2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(781);

var _reactRedux = __webpack_require__(780);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = __webpack_require__(751);

var _core2 = _interopRequireDefault(_core);

var _initializer = __webpack_require__(1395);

var _initializer2 = _interopRequireDefault(_initializer);

var _listenerUtils = __webpack_require__(1406);

var _actions = __webpack_require__(393);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Griddle = function (_Component) {
  _inherits(Griddle, _Component);

  function Griddle(props) {
    _classCallCheck(this, Griddle);

    var _this = _possibleConstructorReturn(this, (Griddle.__proto__ || Object.getPrototypeOf(Griddle)).call(this, props));

    _this.getStoreKey = function () {
      return _this.props.storeKey || Griddle.storeKey || 'store';
    };

    var _props$core = props.core,
        core = _props$core === undefined ? _core2.default : _props$core,
        _props$storeKey = props.storeKey,
        storeKey = _props$storeKey === undefined ? Griddle.storeKey || 'store' : _props$storeKey;

    var _init$call = _initializer2.default.call(_this, core),
        initialState = _init$call.initialState,
        reducer = _init$call.reducer,
        reduxMiddleware = _init$call.reduxMiddleware;

    var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
    _this.store = (0, _redux.createStore)(reducer, initialState, composeEnhancers(_redux.applyMiddleware.apply(undefined, _toConsumableArray(reduxMiddleware))));

    _this.provider = (0, _reactRedux.createProvider)(storeKey);

    _this.storeListener = new _listenerUtils.StoreListener(_this.store);
    (0, _forIn3.default)(_this.listeners, function (listener, name) {
      _this.storeListener.addListener(listener, name, { events: _this.events, selectors: _this.selectors });
    });
    return _this;
  }

  _createClass(Griddle, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var newState = (0, _pickBy3.default)(nextProps, function (value, key) {
        return _this2.props[key] !== value;
      });

      // Only update the state if something has changed.
      if (Object.keys(newState).length > 0) {
        this.store.dispatch(actions.updateState(newState));
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      // As relevant property updates are captured in `componentWillReceiveProps`.
      // return false to prevent the the entire root node from being deleted.
      return false;
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        components: this.components,
        settingsComponentObjects: this.settingsComponentObjects,
        events: this.events,
        selectors: this.selectors,
        storeKey: this.getStoreKey(),
        storeListener: this.storeListener
      };
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.components.Layout) {
        return null;
      }

      return _react2.default.createElement(
        this.provider,
        { store: this.store },
        _react2.default.createElement(this.components.Layout, null)
      );
    }
  }]);

  return Griddle;
}(_react.Component);

Griddle.childContextTypes = {
  components: _propTypes2.default.object.isRequired,
  settingsComponentObjects: _propTypes2.default.object,
  events: _propTypes2.default.object,
  selectors: _propTypes2.default.object,
  storeKey: _propTypes2.default.string,
  storeListener: _propTypes2.default.object
};


Griddle.storeKey = 'store';

exports.default = Griddle;

/***/ }),

/***/ 1309:
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(750),
    castPath = __webpack_require__(568),
    isIndex = __webpack_require__(566),
    isObject = __webpack_require__(395),
    toKey = __webpack_require__(548);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ 1310:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(683),
    getSymbolsIn = __webpack_require__(1311),
    keysIn = __webpack_require__(556);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 1311:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(602),
    getPrototype = __webpack_require__(655),
    getSymbols = __webpack_require__(684),
    stubArray = __webpack_require__(685);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 1312:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(395),
    isPrototype = __webpack_require__(606),
    nativeKeysIn = __webpack_require__(1313);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 1313:
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 1314:
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(609),
    castFunction = __webpack_require__(1315),
    keysIn = __webpack_require__(556);

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : baseFor(object, castFunction(iteratee), keysIn);
}

module.exports = forIn;


/***/ }),

/***/ 1315:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(570);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ 1316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1317);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36), __webpack_require__(656)(module)))

/***/ }),

/***/ 1317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ 1318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

/***/ }),

/***/ 1319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 1320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

/***/ }),

/***/ 1321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(_ref) {
  var value = _ref.value,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      style = _ref.style,
      className = _ref.className;
  return _react2.default.createElement(
    'td',
    {
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      style: style,
      className: className
    },
    value
  );
};

exports.default = Cell;

/***/ }),

/***/ 1322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _dataSelectors = __webpack_require__(389);

var _valueUtils = __webpack_require__(593);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasWidthOrStyles(cellProperties) {
  return cellProperties.hasOwnProperty('width') || cellProperties.hasOwnProperty('styles');
}

function getCellStyles(cellProperties, originalStyles) {
  if (!hasWidthOrStyles(cellProperties)) {
    return originalStyles;
  }

  var styles = originalStyles;

  // we want to take griddle style object styles, cell specific styles
  if (cellProperties.hasOwnProperty('style')) {
    styles = Object.assign({}, styles, originalStyles, cellProperties.style);
  }

  if (cellProperties.hasOwnProperty('width')) {
    styles = Object.assign({}, styles, { width: cellProperties.width });
  }

  return styles;
}

var mapStateToProps = function mapStateToProps() {
  var cellPropertiesSelector = (0, _dataSelectors.cellPropertiesSelectorFactory)();
  return function (state, props) {
    return {
      value: (0, _dataSelectors.cellValueSelector)(state, props),
      customComponent: (0, _dataSelectors.customComponentSelector)(state, props),
      cellProperties: cellPropertiesSelector(state, props),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Cell'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Cell')
    };
  };
};

var ComposedCellContainer = function ComposedCellContainer(OriginalComponent) {
  return (0, _compose2.default)((0, _griddleConnect.connect)(mapStateToProps), (0, _mapProps2.default)(function (props) {
    return _extends({}, props.cellProperties.extraData, props, {
      className: (0, _valueUtils.valueOrResult)(props.cellProperties.cssClassName, props) || props.className,
      style: getCellStyles(props.cellProperties, props.style),
      value: props.customComponent ? _react2.default.createElement(props.customComponent, _extends({}, props.cellProperties.extraData, props)) : props.value
    });
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = ComposedCellContainer;

/***/ }),

/***/ 1323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type(_extends({}, props, { children: children }));
    }
    return type(props);
  }

  var Component = type;

  if (children) {
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  }

  return _react2.default.createElement(Component, props);
};

exports.default = createEagerElementUtil;

/***/ }),

/***/ 1324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isClassComponent = __webpack_require__(1325);

var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && ("production" === 'production' || !Component.propTypes));
};

exports.default = isReferentiallyTransparentFunctionComponent;

/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
};

exports.default = isClassComponent;

/***/ }),

/***/ 1326:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(657),
    baseRest = __webpack_require__(753),
    baseUniq = __webpack_require__(756),
    isArrayLikeObject = __webpack_require__(758);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),

/***/ 1327:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(547),
    isArguments = __webpack_require__(565),
    isArray = __webpack_require__(390);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 1328:
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 1329:
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(1330),
    defineProperty = __webpack_require__(695),
    identity = __webpack_require__(570);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 1330:
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 1331:
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 1332:
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(1333);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 1333:
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(694),
    baseIsNaN = __webpack_require__(1334),
    strictIndexOf = __webpack_require__(1335);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 1334:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 1335:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 1336:
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 1337:
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(688),
    noop = __webpack_require__(757),
    setToArray = __webpack_require__(601);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ 1338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),

/***/ 1339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnDefinition = function (_Component) {
  _inherits(ColumnDefinition, _Component);

  function ColumnDefinition() {
    _classCallCheck(this, ColumnDefinition);

    return _possibleConstructorReturn(this, (ColumnDefinition.__proto__ || Object.getPrototypeOf(ColumnDefinition)).apply(this, arguments));
  }

  _createClass(ColumnDefinition, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return ColumnDefinition;
}(_react.Component);

ColumnDefinition.propTypes = {
  //The name of the column that this definition applies to.
  id: _propTypes2.default.string.isRequired,

  //The order that this column appears in. If not specified will just use the order that they are defined
  order: _propTypes2.default.number,

  //Determines whether or not the user can disable this column from the settings.
  locked: _propTypes2.default.bool,

  //The css class name, or a function to generate a class name from props, to apply to the header for the column.
  headerCssClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),

  //The css class name, or a function to generate a class name from props, to apply to this column.
  cssClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),

  //The display name for the column. This is used when the name in the column heading and settings should be different from the data passed in to the Griddle component.
  title: _propTypes2.default.string,

  //The component that should be rendered instead of the standard column data. This component will still be rendered inside of a TD element.
  customComponent: _propTypes2.default.func,

  //The component that should be used instead of the normal title
  customHeadingComponent: _propTypes2.default.func,

  //Can this column be filtered
  filterable: _propTypes2.default.bool,

  //Can this column be sorted
  sortable: _propTypes2.default.bool,

  //What sort type this column uses - magic string :shame:
  sortType: _propTypes2.default.string,

  //Any extra data that should be passed to each instance of this column
  extraData: _propTypes2.default.object,

  //The width of this column -- this is string so things like % can be specified
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

  //The number of cells this column should extend. Default is 1.
  colSpan: _propTypes2.default.number,

  // Is this column visible
  visible: _propTypes2.default.bool,

  // Is this column metadta
  isMetadata: _propTypes2.default.bool
};
exports.default = ColumnDefinition;

/***/ }),

/***/ 1340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var Cell = _ref.Cell,
      griddleKey = _ref.griddleKey,
      columnIds = _ref.columnIds,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      style = _ref.style,
      className = _ref.className;
  return _react2.default.createElement(
    'tr',
    {
      key: griddleKey,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      style: style,
      className: className
    },
    columnIds && columnIds.map(function (c) {
      return _react2.default.createElement(Cell, {
        key: c + '-' + griddleKey,
        griddleKey: griddleKey,
        columnId: c,
        style: style,
        className: className
      });
    })
  );
};

exports.default = Row;

/***/ }),

/***/ 1341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _dataSelectors = __webpack_require__(389);

var _valueUtils = __webpack_require__(593);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ComposedRowContainer = function ComposedRowContainer(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      columnIds: (0, _dataSelectors.columnIdsSelector)(state),
      rowProperties: (0, _dataSelectors.rowPropertiesSelector)(state),
      rowData: (0, _dataSelectors.rowDataSelector)(state, props),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Row'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Row')
    };
  }), (0, _mapProps2.default)(function (props) {
    var components = props.components,
        rowProperties = props.rowProperties,
        className = props.className,
        otherProps = _objectWithoutProperties(props, ['components', 'rowProperties', 'className']);

    return _extends({
      Cell: components.Cell,
      className: (0, _valueUtils.valueOrResult)(rowProperties.cssClassName, props) || props.className
    }, otherProps);
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = ComposedRowContainer;

/***/ }),

/***/ 1342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RowDefinition = function (_Component) {
  _inherits(RowDefinition, _Component);

  function RowDefinition() {
    _classCallCheck(this, RowDefinition);

    return _possibleConstructorReturn(this, (RowDefinition.__proto__ || Object.getPrototypeOf(RowDefinition)).apply(this, arguments));
  }

  _createClass(RowDefinition, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return RowDefinition;
}(_react.Component);

RowDefinition.propTypes = {
  //Children can be either a single column definition or an array
  //of column definition objects
  //TODO: get this prop type working again
  /*children: PropTypes.oneOfType([
    PropTypes.instanceOf(ColumnDefinition),
    PropTypes.arrayOf(PropTypes.instanceOf(ColumnDefinition))
  ]),*/
  //The column value that should be used as the key for the row
  //if this is not set it will make one up (not efficient)
  rowKey: _propTypes2.default.string,

  //The column that will be known used to track child data
  //By default this will be "children"
  childColumnName: _propTypes2.default.string,

  //The css class name, or a function to generate a class name from props, to apply to this row.
  cssClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};
exports.default = RowDefinition;

/***/ }),

/***/ 1343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = exports.Table = function Table(_ref) {
  var TableHeading = _ref.TableHeading,
      TableBody = _ref.TableBody,
      Loading = _ref.Loading,
      NoResults = _ref.NoResults,
      style = _ref.style,
      className = _ref.className,
      dataLoading = _ref.dataLoading,
      visibleRows = _ref.visibleRows;
  return dataLoading ? Loading && _react2.default.createElement(Loading, null) : visibleRows > 0 ? _react2.default.createElement(
    'table',
    { style: style, className: className },
    TableHeading && _react2.default.createElement(TableHeading, null),
    TableBody && _react2.default.createElement(TableBody, null)
  ) : NoResults && _react2.default.createElement(NoResults, null);
};

exports.default = Table;

/***/ }),

/***/ 1344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function TableBody(_ref) {
  var rowIds = _ref.rowIds,
      Row = _ref.Row,
      style = _ref.style,
      className = _ref.className;
  return _react2.default.createElement(
    'tbody',
    { style: style, className: className },
    rowIds && rowIds.map(function (k, i) {
      return _react2.default.createElement(Row, { key: k, griddleKey: k, index: i });
    })
  );
};

exports.default = TableBody;

/***/ }),

/***/ 1345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ComposedTableBodyContainer = function ComposedTableBodyContainer(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object,
    selectors: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      visibleRowIds: (0, _dataSelectors.visibleRowIdsSelector)(state),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'TableBody'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'TableBody')
    };
  }), (0, _mapProps2.default)(function (props) {
    var components = props.components,
        otherProps = _objectWithoutProperties(props, ['components']);

    return _extends({
      Row: props.components.Row
    }, otherProps);
  }))(function (_ref) {
    var Row = _ref.Row,
        visibleRowIds = _ref.visibleRowIds,
        style = _ref.style,
        className = _ref.className;
    return _react2.default.createElement(OriginalComponent, {
      rowIds: visibleRowIds,
      Row: Row,
      style: style,
      className: className
    });
  });
};

exports.default = ComposedTableBodyContainer;

/***/ }),

/***/ 1346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeading = function TableHeading(_ref) {
  var columnTitles = _ref.columnTitles,
      columnIds = _ref.columnIds,
      TableHeadingCell = _ref.TableHeadingCell,
      style = _ref.style,
      className = _ref.className;

  var headingCells = columnIds && columnTitles && columnTitles.map(function (t, i) {
    return _react2.default.createElement(TableHeadingCell, { key: columnIds[i], title: t, columnId: columnIds[i] });
  });

  return _react2.default.createElement(
    'thead',
    { style: style, className: className },
    _react2.default.createElement(
      'tr',
      null,
      headingCells
    )
  );
};

exports.default = TableHeading;

/***/ }),

/***/ 1347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ComposedContainerComponent = function ComposedContainerComponent(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object,
    selectors: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      columnTitles: (0, _dataSelectors.columnTitlesSelector)(state),
      columnIds: (0, _dataSelectors.columnIdsSelector)(state),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'TableHeading'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'TableHeading')
    };
  }), (0, _mapProps2.default)(function (props) {
    var components = props.components,
        otherProps = _objectWithoutProperties(props, ['components']);

    return _extends({
      TableHeadingCell: components.TableHeadingCell
    }, otherProps);
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = ComposedContainerComponent;

/***/ }),

/***/ 1348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeadingCell = function TableHeadingCell(_ref) {
  var title = _ref.title,
      columnId = _ref.columnId,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      icon = _ref.icon,
      style = _ref.style,
      className = _ref.className;
  return _react2.default.createElement(
    'th',
    {
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      style: style,
      className: className
    },
    title
  );
};

exports.default = TableHeadingCell;

/***/ }),

/***/ 1349:
/***/ (function(module, exports, __webpack_require__) {

var createFlow = __webpack_require__(761);

/**
 * This method is like `_.flow` except that it creates a function that
 * invokes the given functions from right to left.
 *
 * @static
 * @since 3.0.0
 * @memberOf _
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flow
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flowRight([square, _.add]);
 * addSquare(1, 2);
 * // => 9
 */
var flowRight = createFlow(true);

module.exports = flowRight;


/***/ }),

/***/ 1350:
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(689);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),

/***/ 1351:
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),

/***/ 1352:
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(662),
    getData = __webpack_require__(764),
    getFuncName = __webpack_require__(765),
    lodash = __webpack_require__(1353);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),

/***/ 1353:
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(662),
    LodashWrapper = __webpack_require__(659),
    baseLodash = __webpack_require__(661),
    isArray = __webpack_require__(390),
    isObjectLike = __webpack_require__(520),
    wrapperClone = __webpack_require__(1354);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),

/***/ 1354:
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(662),
    LodashWrapper = __webpack_require__(659),
    copyArray = __webpack_require__(766);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),

/***/ 1355:
/***/ (function(module, exports, __webpack_require__) {

var createFlow = __webpack_require__(761);

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = createFlow();

module.exports = flow;


/***/ }),

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(657);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */
function flattenDeep(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, INFINITY) : [];
}

module.exports = flattenDeep;


/***/ }),

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(756);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),

/***/ 1358:
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(1359),
    flatRest = __webpack_require__(762);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ 1359:
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(749),
    hasIn = __webpack_require__(693);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ 1360:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1361);


/***/ }),

/***/ 1361:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(767),
    createAssigner = __webpack_require__(768),
    keysIn = __webpack_require__(556);

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

module.exports = assignIn;


/***/ }),

/***/ 1362:
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(546),
    isArrayLike = __webpack_require__(533),
    isIndex = __webpack_require__(566),
    isObject = __webpack_require__(395);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 1363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Obsolete
var EnhancedHeadingCell = function EnhancedHeadingCell(OriginalComponent) {
  return OriginalComponent;
};

exports.default = EnhancedHeadingCell;

/***/ }),

/***/ 1364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposedContainerComponent = function ComposedContainerComponent(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object
  }),
  //TODO: Should we use withHandlers here instead? I realize that's not 100% the intent of that method
  (0, _mapProps2.default)(function (props) {
    return {
      TableHeading: props.components.TableHeading,
      TableBody: props.components.TableBody,
      Loading: props.components.Loading,
      NoResults: props.components.NoResults
    };
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      dataLoading: (0, _dataSelectors.dataLoadingSelector)(state),
      visibleRows: (0, _dataSelectors.visibleRowCountSelector)(state),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Table'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Table')
    };
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = ComposedContainerComponent;

/***/ }),

/***/ 1365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component(_ref) {
  var Table = _ref.Table,
      Pagination = _ref.Pagination,
      Filter = _ref.Filter,
      SettingsWrapper = _ref.SettingsWrapper,
      Style = _ref.Style,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { className: className, style: style },
    Style && _react2.default.createElement(Style, null),
    _react2.default.createElement(Filter, null),
    _react2.default.createElement(SettingsWrapper, null),
    _react2.default.createElement(Table, null),
    _react2.default.createElement(Pagination, null)
  );
};

exports.default = component;

/***/ }),

/***/ 1366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedLayout = function EnhancedLayout(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Layout'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Layout')
    };
  }), (0, _mapProps2.default)(function (props) {
    return {
      Table: props.components.Table,
      Pagination: props.components.Pagination,
      Filter: props.components.Filter,
      SettingsWrapper: props.components.SettingsWrapper,
      Style: props.components.Style,
      className: props.className,
      style: props.style
    };
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = EnhancedLayout;

/***/ }),

/***/ 1367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(_ref) {
  var Next = _ref.Next,
      Previous = _ref.Previous,
      PageDropdown = _ref.PageDropdown,
      style = _ref.style,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { style: style, className: className },
    Previous && _react2.default.createElement(Previous, null),
    PageDropdown && _react2.default.createElement(PageDropdown, null),
    Next && _react2.default.createElement(Next, null)
  );
};

exports.default = Pagination;

/***/ }),

/***/ 1368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EnhancedPaginationContainer = function EnhancedPaginationContainer(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Pagination'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Pagination')
    };
  }), (0, _mapProps2.default)(function (props) {
    var components = props.components,
        otherProps = _objectWithoutProperties(props, ['components']);

    return _extends({
      Next: components.NextButton,
      Previous: components.PreviousButton,
      PageDropdown: components.PageDropdown
    }, otherProps);
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = EnhancedPaginationContainer;

/***/ }),

/***/ 1369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Filter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Filter.__proto__ || Object.getPrototypeOf(Filter)).call.apply(_ref, [this].concat(args))), _this), _this.setFilter = function (e) {
      _this.props.setFilter(e.target.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', {
        type: 'text',
        name: 'filter',
        placeholder: this.props.placeholder,
        onChange: this.setFilter,
        style: this.props.style,
        className: this.props.className
      });
    }
  }]);

  return Filter;
}(_react.Component);

Filter.propTypes = {
  setFilter: _propTypes2.default.func,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string
};
exports.default = Filter;

/***/ }),

/***/ 1370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _compositionUtils = __webpack_require__(531);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EnhancedFilter = function EnhancedFilter(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    events: _propTypes2.default.object
  }), (0, _mapProps2.default)(function (_ref) {
    var onFilter = _ref.events.onFilter,
        props = _objectWithoutProperties(_ref, ['events']);

    return _extends({}, props, {
      setFilter: (0, _compositionUtils.combineHandlers)([onFilter, props.setFilter])
    });
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = EnhancedFilter;

/***/ }),

/***/ 1371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _dataSelectors = __webpack_require__(389);

var _actions = __webpack_require__(393);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedFilter = function EnhancedFilter(OriginalComponent) {
  return (0, _griddleConnect.connect)(function (state, props) {
    return {
      placeholder: (0, _dataSelectors.textSelector)(state, { key: 'filterPlaceholder' }),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Filter'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Filter')
    };
  }, { setFilter: _actions.setFilter })(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = EnhancedFilter;

/***/ }),

/***/ 1372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SettingsToggle = function SettingsToggle(_ref) {
  var onClick = _ref.onClick,
      text = _ref.text,
      style = _ref.style,
      className = _ref.className;
  return _react2.default.createElement(
    "button",
    {
      onClick: onClick,
      type: "button",
      style: style,
      className: className
    },
    text
  );
};

exports.default = SettingsToggle;

/***/ }),

/***/ 1373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _dataSelectors = __webpack_require__(389);

var _actions = __webpack_require__(393);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhancedSettingsToggle = function enhancedSettingsToggle(OriginalComponent) {
  return (0, _compose2.default)((0, _griddleConnect.connect)(function (state, props) {
    return {
      text: (0, _dataSelectors.textSelector)(state, { key: 'settingsToggle' }),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'SettingsToggle'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'SettingsToggle')
    };
  }, {
    toggleSettings: _actions.toggleSettings
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, _extends({}, props, {
      onClick: props.toggleSettings
    }));
  });
};

exports.default = enhancedSettingsToggle;

/***/ }),

/***/ 1374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is a component that wraps all of the other settings components ( SettingsToggle, Settings, etc).
// All of the settings views will be hiddne if isEnabled = false
var SettingsWrapper = function SettingsWrapper(_ref) {
  var SettingsToggle = _ref.SettingsToggle,
      Settings = _ref.Settings,
      isEnabled = _ref.isEnabled,
      isVisible = _ref.isVisible,
      style = _ref.style,
      className = _ref.className;
  return isEnabled ? _react2.default.createElement(
    'div',
    { style: style, className: className },
    SettingsToggle && _react2.default.createElement(SettingsToggle, null),
    isVisible && _react2.default.createElement(Settings, null)
  ) : null;
};

exports.default = SettingsWrapper;

/***/ }),

/***/ 1375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedSettingsWrapper = function EnhancedSettingsWrapper(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object
  }), (0, _mapProps2.default)(function (props) {
    return {
      Settings: props.components.Settings,
      SettingsToggle: props.components.SettingsToggle
    };
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      isEnabled: (0, _dataSelectors.isSettingsEnabledSelector)(state),
      isVisible: (0, _dataSelectors.isSettingsVisibleSelector)(state),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'SettingsWrapper'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'SettingsWrapper')
    };
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = EnhancedSettingsWrapper;

/***/ }),

/***/ 1376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is responsible for rendering the individual settings sections
var Settings = function Settings(_ref) {
  var settingsComponents = _ref.settingsComponents,
      style = _ref.style,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { style: style, className: className },
    settingsComponents && settingsComponents.map(function (SettingsComponent, i) {
      return SettingsComponent && _react2.default.createElement(
        'div',
        { key: SettingsComponent.key || i },
        _react2.default.createElement(SettingsComponent, null)
      );
    })
  );
};

exports.default = Settings;

/***/ }),

/***/ 1377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getSettingsComponentsArrayFromObject(settingsObject, settingsComponents) {
  //TODO: determine if we need to make this faster
  return settingsObject ? Object.keys(settingsObject).sort(function (a, b) {
    var oa = settingsObject[a],
        ob = settingsObject[b];
    return (oa && oa.order || 0) - (ob && ob.order || 0);
  }).map(function (key) {
    return settingsObject[key] && (settingsObject[key].component || settingsComponents && settingsComponents[key]);
  }) : null;
}

var EnhancedSettings = function EnhancedSettings(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object,
    settingsComponentObjects: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Settings'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Settings')
    };
  }), (0, _mapProps2.default)(function (props) {
    var components = props.components,
        settingsComponentObjects = props.settingsComponentObjects,
        otherProps = _objectWithoutProperties(props, ['components', 'settingsComponentObjects']);

    return _extends({
      settingsComponents: getSettingsComponentsArrayFromObject(settingsComponentObjects, components.SettingsComponents)
    }, otherProps);
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = EnhancedSettings;

/***/ }),

/***/ 1378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _withState = __webpack_require__(1379);

var _withState2 = _interopRequireDefault(_withState);

var _withHandlers = __webpack_require__(594);

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _dataSelectors = __webpack_require__(389);

var _actions = __webpack_require__(393);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposedPageSizeSettings = (0, _compose2.default)((0, _griddleConnect.connect)(function (state) {
  return {
    pageSize: (0, _dataSelectors.pageSizeSelector)(state)
  };
}, {
  setPageSize: _actions.setPageSize
}), (0, _withState2.default)('value', 'updateValue', ''), (0, _withHandlers2.default)({
  onChange: function onChange(props) {
    return function (e) {
      props.updateValue(e.target.value);
    };
  },
  onSave: function onSave(props) {
    return function (e) {
      props.setPageSize(props.value);
    };
  }
}))(function (_ref) {
  var pageSize = _ref.pageSize,
      onChange = _ref.onChange,
      onSave = _ref.onSave;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('input', { type: 'text', onChange: onChange, defaultValue: pageSize }),
    _react2.default.createElement(
      'button',
      { type: 'button', onClick: onSave },
      'Save'
    )
  );
});

exports.default = ComposedPageSizeSettings;

/***/ }),

/***/ 1379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _createHelper = __webpack_require__(590);

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = __webpack_require__(591);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withState = function withState(stateName, stateUpdaterName, initialState) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    return function (_Component) {
      _inherits(_class2, _Component);

      function _class2() {
        var _temp, _this, _ret;

        _classCallCheck(this, _class2);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
        }, _this.updateStateValue = function (updateFn, callback) {
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
            };
          }, callback);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _class2.prototype.render = function render() {
        var _extends2;

        return factory(_extends({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[stateUpdaterName] = this.updateStateValue, _extends2)));
      };

      return _class2;
    }(_react.Component);
  };
};

exports.default = (0, _createHelper2.default)(withState, 'withState');

/***/ }),

/***/ 1380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _withHandlers = __webpack_require__(594);

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _dataSelectors = __webpack_require__(389);

var _actions = __webpack_require__(393);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  label: { clear: 'both' }
};

var ComposedColumnSettings = (0, _compose2.default)((0, _griddleConnect.connect)(function (state) {
  return {
    visibleColumns: (0, _dataSelectors.visibleColumnPropertiesSelector)(state),
    hiddenColumns: (0, _dataSelectors.hiddenColumnPropertiesSelector)(state)
  };
}, {
  toggleColumn: _actions.toggleColumn
}), (0, _withHandlers2.default)({
  onToggle: function onToggle(_ref) {
    var toggleColumn = _ref.toggleColumn;
    return function (event) {
      toggleColumn(event.target.name);
    };
  }
}))(function (_ref2) {
  var visibleColumns = _ref2.visibleColumns,
      hiddenColumns = _ref2.hiddenColumns,
      onToggle = _ref2.onToggle;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Visible Columns'
      ),
      Object.keys(visibleColumns).map(function (v) {
        return _react2.default.createElement(
          'label',
          {
            htmlFor: visibleColumns[v].id,
            key: visibleColumns[v].id,
            style: style.label
          },
          _react2.default.createElement('input', {
            type: 'checkbox',
            name: visibleColumns[v].id,
            checked: true,
            onChange: onToggle
          }),
          visibleColumns[v].title || visibleColumns[v].id
        );
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        'Hidden Columns'
      ),
      Object.keys(hiddenColumns).map(function (v) {
        return _react2.default.createElement(
          'label',
          {
            key: hiddenColumns[v].id,
            htmlFor: hiddenColumns[v].id,
            style: style.label
          },
          _react2.default.createElement('input', {
            type: 'checkbox',
            name: hiddenColumns[v].id,
            onChange: onToggle,
            defaultChecked: false
          }),
          hiddenColumns[v].title || hiddenColumns[v].id
        );
      })
    )
  );
});

exports.default = ComposedColumnSettings;

/***/ }),

/***/ 1381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextButton = function NextButton(_ref) {
  var hasNext = _ref.hasNext,
      onClick = _ref.onClick,
      style = _ref.style,
      className = _ref.className,
      text = _ref.text;
  return hasNext ? _react2.default.createElement(
    "button",
    { type: "button", onClick: onClick, style: style, className: className },
    text
  ) : null;
};

exports.default = NextButton;

/***/ }),

/***/ 1382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _compositionUtils = __webpack_require__(531);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var enhance = function enhance(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    events: _propTypes2.default.object
  }), (0, _mapProps2.default)(function (_ref) {
    var onNext = _ref.events.onNext,
        props = _objectWithoutProperties(_ref, ['events']);

    return _extends({}, props, {
      onClick: (0, _compositionUtils.combineHandlers)([onNext, props.onClick])
    });
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = enhance;

/***/ }),

/***/ 1383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = __webpack_require__(384);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = function enhance(OriginalComponent) {
  return (0, _griddleConnect.connect)(function (state, props) {
    return {
      text: (0, _dataSelectors.textSelector)(state, { key: 'next' }),
      hasNext: (0, _dataSelectors.hasNextSelector)(state, props),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'NextButton'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'NextButton')
    };
  })(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = enhance;

/***/ }),

/***/ 1384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { style: style, className: className },
    'Loading\u2026'
  );
};

exports.default = Loading;

/***/ }),

/***/ 1385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoadingContainer = (0, _compose2.default)((0, _getContext2.default)({
  components: _propTypes2.default.object
}), (0, _griddleConnect.connect)(function (state) {
  return {
    className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Loading'),
    style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Loading')
  };
}), (0, _mapProps2.default)(function (props) {
  var components = props.components,
      otherProps = _objectWithoutProperties(props, ['components']);

  return _extends({
    Loading: components.Loading
  }, otherProps);
}));

exports.default = LoadingContainer;

/***/ }),

/***/ 1386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoResults = function NoResults(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { style: style, className: className },
    'No results found.'
  );
};

exports.default = NoResults;

/***/ }),

/***/ 1387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NoResultsContainer = function NoResultsContainer(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state) {
    return {
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'NoResults'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'NoResults')
    };
  }), (0, _mapProps2.default)(function (props) {
    var components = props.components,
        otherProps = _objectWithoutProperties(props, ['components']);

    return _extends({
      NoResults: components.NoResults
    }, otherProps);
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = NoResultsContainer;

/***/ }),

/***/ 1388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviousButton = function PreviousButton(_ref) {
  var hasPrevious = _ref.hasPrevious,
      onClick = _ref.onClick,
      style = _ref.style,
      className = _ref.className,
      text = _ref.text;
  return hasPrevious ? _react2.default.createElement(
    "button",
    { type: "button", onClick: onClick, style: style, className: className },
    text
  ) : null;
};

exports.default = PreviousButton;

/***/ }),

/***/ 1389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _compositionUtils = __webpack_require__(531);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var enhance = function enhance(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    events: _propTypes2.default.object
  }), (0, _mapProps2.default)(function (_ref) {
    var onPrevious = _ref.events.onPrevious,
        props = _objectWithoutProperties(_ref, ['events']);

    return _extends({}, props, {
      onClick: (0, _compositionUtils.combineHandlers)([onPrevious, props.onClick])
    });
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = enhance;

/***/ }),

/***/ 1390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = __webpack_require__(384);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = function enhance(OriginalComponent) {
  return (0, _griddleConnect.connect)(function (state, props) {
    return {
      text: (0, _dataSelectors.textSelector)(state, { key: 'previous' }),
      hasPrevious: (0, _dataSelectors.hasPreviousSelector)(state, props),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'PreviousButton'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'PreviousButton')
    };
  })(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = enhance;

/***/ }),

/***/ 1391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFinite2 = __webpack_require__(658);

var _isFinite3 = _interopRequireDefault(_isFinite2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** Gets a range from a single value.
 * TODO: Could probably make this take a predicate to avoid running through the loop twice */
var getRange = function getRange(number) {
  if (!(0, _isFinite3.default)(number)) {
    return [0];
  }

  return Array(number).fill().map(function (_, i) {
    return i + 1;
  });
};

var PageDropdown = function (_Component) {
  _inherits(PageDropdown, _Component);

  function PageDropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PageDropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PageDropdown.__proto__ || Object.getPrototypeOf(PageDropdown)).call.apply(_ref, [this].concat(args))), _this), _this.setPage = function (e) {
      _this.props.setPage(parseInt(e.target.value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PageDropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentPage = _props.currentPage,
          maxPages = _props.maxPages;


      return _react2.default.createElement(
        'select',
        {
          onChange: this.setPage,
          value: currentPage,
          style: this.props.style,
          className: this.props.className
        },
        getRange(maxPages).map(function (num) {
          return _react2.default.createElement(
            'option',
            { key: num, value: num },
            num
          );
        })
      );
    }
  }]);

  return PageDropdown;
}(_react.Component);

PageDropdown.propTypes = {
  maxPages: _propTypes2.default.number,
  currentPage: _propTypes2.default.number,
  setPage: _propTypes2.default.func,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
};
exports.default = PageDropdown;

/***/ }),

/***/ 1392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _dataSelectors = __webpack_require__(389);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _griddleConnect.connect)(function (state, props) {
  return {
    maxPages: (0, _dataSelectors.maxPageSelector)(state, props),
    currentPage: (0, _dataSelectors.currentPageSelector)(state, props),
    className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'PageDropdown'),
    style: (0, _dataSelectors.stylesForComponentSelector)(state, 'PageDropdown')
  };
});

exports.default = enhance;

/***/ }),

/***/ 1393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _compositionUtils = __webpack_require__(531);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var enhance = function enhance(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    events: _propTypes2.default.object
  }), (0, _mapProps2.default)(function (_ref) {
    var onGetPage = _ref.events.onGetPage,
        props = _objectWithoutProperties(_ref, ['events']);

    return _extends({}, props, {
      setPage: (0, _compositionUtils.combineHandlers)([onGetPage, props.setPage])
    });
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = enhance;

/***/ }),

/***/ 1394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var styleConfig = {
  icons: {
    TableHeadingCell: {
      sortDescendingIcon: '▼',
      sortAscendingIcon: '▲'
    }
  },
  classNames: {
    Cell: 'griddle-cell',
    Filter: 'griddle-filter',
    Loading: 'griddle-loadingResults',
    NextButton: 'griddle-next-button',
    NoResults: 'griddle-noResults',
    PageDropdown: 'griddle-page-select',
    Pagination: 'griddle-pagination',
    PreviousButton: 'griddle-previous-button',
    Row: 'griddle-row',
    RowDefinition: 'griddle-row-definition',
    Settings: 'griddle-settings',
    SettingsToggle: 'griddle-settings-toggle',
    Table: 'griddle-table',
    TableBody: 'griddle-table-body',
    TableHeading: 'griddle-table-heading',
    TableHeadingCell: 'griddle-table-heading-cell',
    TableHeadingCellAscending: 'griddle-heading-ascending',
    TableHeadingCellDescending: 'griddle-heading-descending'
  },
  styles: {}
};

exports.default = {
  styleConfig: styleConfig,

  pageProperties: {
    currentPage: 1,
    pageSize: 10
  },
  enableSettings: true,
  textProperties: {
    filterPlaceholder: 'Filter',
    next: 'Next',
    previous: 'Previous',
    settingsToggle: 'Settings'
  }
};

/***/ }),

/***/ 1395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _flatten2 = __webpack_require__(763);

var _flatten3 = _interopRequireDefault(_flatten2);

var _compact2 = __webpack_require__(1396);

var _compact3 = _interopRequireDefault(_compact2);

var _pickBy2 = __webpack_require__(654);

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _merge2 = __webpack_require__(1397);

var _merge3 = _interopRequireDefault(_merge2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _compositionUtils = __webpack_require__(531);

var _columnUtils = __webpack_require__(771);

var _rowUtils = __webpack_require__(772);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

module.exports = function initializer(defaults) {
  if (!this) throw new Error('this missing!');

  var _ref = defaults || {},
      defaultReducer = _ref.reducer,
      components = _ref.components,
      settingsComponentObjects = _ref.settingsComponentObjects,
      selectors = _ref.selectors,
      defaultStyleConfig = _ref.styleConfig,
      defaultInitialState = _objectWithoutProperties(_ref, ['reducer', 'components', 'settingsComponentObjects', 'selectors', 'styleConfig']);

  var _props = this.props,
      _props$plugins = _props.plugins,
      plugins = _props$plugins === undefined ? [] : _props$plugins,
      _props$data = _props.data,
      data = _props$data === undefined ? [] : _props$data,
      rowPropertiesComponent = _props.children,
      _props$events = _props.events,
      userEvents = _props$events === undefined ? {} : _props$events,
      _props$styleConfig = _props.styleConfig,
      userStyleConfig = _props$styleConfig === undefined ? {} : _props$styleConfig,
      userComponents = _props.components,
      _props$renderProperti = _props.renderProperties,
      userRenderProperties = _props$renderProperti === undefined ? {} : _props$renderProperti,
      userSettingsComponentObjects = _props.settingsComponentObjects,
      _props$reduxMiddlewar = _props.reduxMiddleware,
      reduxMiddleware = _props$reduxMiddlewar === undefined ? [] : _props$reduxMiddlewar,
      _props$listeners = _props.listeners,
      listeners = _props$listeners === undefined ? {} : _props$listeners,
      userInitialState = _objectWithoutProperties(_props, ['plugins', 'data', 'children', 'events', 'styleConfig', 'components', 'renderProperties', 'settingsComponentObjects', 'reduxMiddleware', 'listeners']);

  var rowProperties = (0, _rowUtils.getRowProperties)(rowPropertiesComponent);
  var columnProperties = (0, _columnUtils.getColumnProperties)(rowPropertiesComponent);

  // Combine / compose the reducers to make a single, unified reducer
  var reducer = (0, _compositionUtils.buildGriddleReducer)([defaultReducer].concat(_toConsumableArray(plugins.map(function (p) {
    return p.reducer;
  }))));

  // Combine / Compose the components to make a single component for each component type
  this.components = (0, _compositionUtils.buildGriddleComponents)([components].concat(_toConsumableArray(plugins.map(function (p) {
    return p.components;
  })), [userComponents]));

  this.settingsComponentObjects = Object.assign.apply(Object, [_extends({}, settingsComponentObjects)].concat(_toConsumableArray(plugins.map(function (p) {
    return p.settingsComponentObjects;
  })), [userSettingsComponentObjects]));

  this.events = Object.assign.apply(Object, [{}, userEvents].concat(_toConsumableArray(plugins.map(function (p) {
    return p.events;
  }))));

  this.selectors = plugins.reduce(function (combined, plugin) {
    return _extends({}, combined, plugin.selectors);
  }, _extends({}, selectors));

  var styleConfig = _merge3.default.apply(undefined, [_extends({}, defaultStyleConfig)].concat(_toConsumableArray(plugins.map(function (p) {
    return p.styleConfig;
  })), [userStyleConfig]));

  // TODO: This should also look at the default and plugin initial state objects
  var renderProperties = Object.assign.apply(Object, [{
    rowProperties: rowProperties,
    columnProperties: columnProperties
  }].concat(_toConsumableArray(plugins.map(function (p) {
    return p.renderProperties;
  })), [userRenderProperties]));

  // TODO: Make this its own method
  var initialState = _merge3.default.apply(undefined, [defaultInitialState].concat(_toConsumableArray(plugins.map(function (p) {
    return p.initialState;
  })), [userInitialState, {
    data: data,
    renderProperties: renderProperties,
    styleConfig: styleConfig
  }]));

  var sanitizedListeners = (0, _pickBy3.default)(listeners, function (value) {
    return typeof value === 'function';
  });
  this.listeners = plugins.reduce(function (combined, plugin) {
    return _extends({}, combined, (0, _pickBy3.default)(plugin.listeners, function (value) {
      return typeof value === 'function';
    }));
  }, sanitizedListeners);

  return {
    initialState: initialState,
    reducer: reducer,
    reduxMiddleware: (0, _compact3.default)([].concat(_toConsumableArray((0, _flatten3.default)(plugins.map(function (p) {
      return p.reduxMiddleware;
    }))), _toConsumableArray(reduxMiddleware)))
  };
};

/***/ }),

/***/ 1396:
/***/ (function(module, exports) {

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = compact;


/***/ }),

/***/ 1397:
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(1398),
    createAssigner = __webpack_require__(768);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ 1398:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(597),
    assignMergeValue = __webpack_require__(770),
    baseFor = __webpack_require__(609),
    baseMergeDeep = __webpack_require__(1399),
    isObject = __webpack_require__(395),
    keysIn = __webpack_require__(556);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ 1399:
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(770),
    cloneBuffer = __webpack_require__(1400),
    cloneTypedArray = __webpack_require__(1401),
    copyArray = __webpack_require__(766),
    initCloneObject = __webpack_require__(1403),
    isArguments = __webpack_require__(565),
    isArray = __webpack_require__(390),
    isArrayLikeObject = __webpack_require__(758),
    isBuffer = __webpack_require__(603),
    isFunction = __webpack_require__(599),
    isObject = __webpack_require__(395),
    isPlainObject = __webpack_require__(1404),
    isTypedArray = __webpack_require__(604),
    toPlainObject = __webpack_require__(1405);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ 1400:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(392);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(37)(module)))

/***/ }),

/***/ 1401:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(1402);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 1402:
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(682);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 1403:
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(660),
    getPrototype = __webpack_require__(655),
    isPrototype = __webpack_require__(606);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 1404:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(532),
    getPrototype = __webpack_require__(655),
    isObjectLike = __webpack_require__(520);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 1405:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(767),
    keysIn = __webpack_require__(556);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ 1406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StoreListener = exports.StoreListener = function StoreListener(store) {
    var _this = this;

    _classCallCheck(this, StoreListener);

    this.removeListener = function (name) {
        if (_this.unsubscribers.hasOwnProperty(name)) {
            _this.unsubscribers[name]();
            delete _this.unsubscribers[name];
            return true;
        } else {
            return false;
        }
    };

    this.addListener = function (listener, name, otherArgs) {
        // attempt to unsubscribe an existing listener if the new 
        // listener name matches
        // if no name is provided, do nothing
        name && _this.removeListener(name);
        var unsubscribe = function () {
            var oldState = void 0;
            return _this.store.subscribe(function () {
                var newState = _this.store.getState();
                listener(oldState, newState, _extends({}, otherArgs));
                oldState = newState;
            });
        }();
        // if name was provided, add the unsubscribe
        // otherwise this is an "anonymous" listener
        name && (_this.unsubscribers[name] = unsubscribe);
        return unsubscribe;
    };

    this.hasListener = function (name) {
        return _this.unsubscribers.hasOwnProperty(name);
    };

    this.store = store;
    this.unsubscribers = {};
}

// Adds a listener to the store.
// Will attempt to remove an existing listener if the name
// matches that of an existing listener.
// If no name is provided this is an anonymous lister, it
// is not registered in the list of unsubscribe functions,
// returns the unsubscribe function so it can still be handled
// manually if desired.
;

/***/ }),

/***/ 1407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _columnUtils = __webpack_require__(771);

var columnUtils = _interopRequireWildcard(_columnUtils);

var _compositionUtils = __webpack_require__(531);

var compositionUtils = _interopRequireWildcard(_compositionUtils);

var _dataUtils = __webpack_require__(665);

var dataUtils = _interopRequireWildcard(_dataUtils);

var _rowUtils = __webpack_require__(772);

var rowUtils = _interopRequireWildcard(_rowUtils);

var _sortUtils = __webpack_require__(663);

var sortUtils = _interopRequireWildcard(_sortUtils);

var _griddleConnect = __webpack_require__(384);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  columnUtils: columnUtils,
  compositionUtils: compositionUtils,
  dataUtils: dataUtils,
  rowUtils: rowUtils,
  sortUtils: sortUtils,
  connect: _griddleConnect.connect
};

/***/ }),

/***/ 1408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  styleConfig: {
    classNames: {
      Layout: 'griddle griddle-container'
    }
  },
  components: {
    Style: function Style() {
      return _react2.default.createElement(
        'style',
        { type: 'text/css' },
        '\n          .griddle-container{\n            border:1px solid #DDD;\n          }\n\n          .griddle .top-section{\n            clear:both;\n            display:table;\n            width:100%;\n          }\n\n          .griddle .griddle-filter{\n            float:left;\n            width:50%;\n            text-align:left;\n            color:#222;\n            min-height:1px;\n          }\n\n          .griddle .griddle-settings-toggle{\n            float:left;\n            width:50%;\n            text-align:right;\n          }\n\n          .griddle .griddle-settings{\n            background-color:#FFF;\n            border:1px solid #DDD;\n            color:#222;\n            padding:10px;\n            margin-bottom:10px;\n          }\n\n          .griddle .griddle-settings .griddle-columns{\n            clear:both;\n            display:table;\n            width:100%;\n            border-bottom:1px solid #EDEDED;\n            margin-bottom:10px;\n          }\n\n          .griddle .griddle-settings .griddle-column-selection{\n            float:left;\n            width:20%;\n          }\n          .griddle table{\n            width:100%;table-layout:fixed;\n          }\n\n          .griddle th{\n            background-color:#EDEDEF;\n            border:0px;\n            border-bottom:1px solid #DDD;\n            color:#222;\n            padding:5px;\n          }\n\n          .griddle td{\n            padding:5px;\n            background-color:#FFF;\n            border-top-color:#DDD;\n            color:#222;\n          }\n\n          .griddle .footer-container{\n            padding:0px;\n            background-color:#EDEDED;\n            border:0px;\n            color:#222;\n          }\n\n          .griddle .griddle-previous, .griddle .griddle-page, .griddle .griddle-next{\n            float:left;\n            width:33%;\n            min-height:1px;\n            margin-top:5px;\n          }\n\n          .griddle .griddle-page{\n            text-align:center;\n          }\n\n          .griddle .griddle-next{\n            text-align:right;\n          }\n\n        '
      );
    }
  }
};

/***/ }),

/***/ 1409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(1410);

var _components2 = _interopRequireDefault(_components);

var _reducers = __webpack_require__(1418);

var reducer = _interopRequireWildcard(_reducers);

var _localSelectors = __webpack_require__(399);

var selectors = _interopRequireWildcard(_localSelectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: _components2.default,
  reducer: reducer,
  selectors: selectors
};

/***/ }),

/***/ 1410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TableBodyContainer = __webpack_require__(1411);

var _TableBodyContainer2 = _interopRequireDefault(_TableBodyContainer);

var _RowContainer = __webpack_require__(1412);

var _RowContainer2 = _interopRequireDefault(_RowContainer);

var _NextButtonContainer = __webpack_require__(1413);

var _NextButtonContainer2 = _interopRequireDefault(_NextButtonContainer);

var _PreviousButtonContainer = __webpack_require__(1414);

var _PreviousButtonContainer2 = _interopRequireDefault(_PreviousButtonContainer);

var _PageDropdownContainer = __webpack_require__(1415);

var _PageDropdownContainer2 = _interopRequireDefault(_PageDropdownContainer);

var _TableContainer = __webpack_require__(1416);

var _TableContainer2 = _interopRequireDefault(_TableContainer);

var _TableHeadingCellContainer = __webpack_require__(1417);

var _TableHeadingCellContainer2 = _interopRequireDefault(_TableHeadingCellContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  TableBodyContainer: _TableBodyContainer2.default,
  RowContainer: _RowContainer2.default,
  NextButtonContainer: _NextButtonContainer2.default,
  PreviousButtonContainer: _PreviousButtonContainer2.default,
  PageDropdownContainer: _PageDropdownContainer2.default,
  TableContainer: _TableContainer2.default,
  TableHeadingCellContainer: _TableHeadingCellContainer2.default // TODO: Obsolete; remove
};

/***/ }),

/***/ 1411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _localSelectors = __webpack_require__(399);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposedTableBodyContainer = function ComposedTableBodyContainer(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object,
    selectors: _propTypes2.default.object
  }), (0, _mapProps2.default)(function (props) {
    return _extends({
      Row: props.components.Row,
      visibleRowIdsSelector: props.selectors.visibleRowIdsSelector
    }, props);
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      visibleRowIds: props.visibleRowIdsSelector(state),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'TableBody'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'TableBody')
    };
  })
  // withHandlers({
  //   Row: props => props.components.Row
  // })
  )(function (_ref) {
    var Row = _ref.Row,
        visibleRowIds = _ref.visibleRowIds,
        style = _ref.style,
        className = _ref.className;
    return _react2.default.createElement(OriginalComponent, {
      rowIds: visibleRowIds,
      Row: Row,
      style: style,
      className: className
    });
  });
};

exports.default = ComposedTableBodyContainer;

/***/ }),

/***/ 1412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _localSelectors = __webpack_require__(399);

var _valueUtils = __webpack_require__(593);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ComposedRowContainer = function ComposedRowContainer(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      columnIds: (0, _localSelectors.columnIdsSelector)(state),
      rowProperties: (0, _localSelectors.rowPropertiesSelector)(state),
      rowData: (0, _localSelectors.rowDataSelector)(state, props),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'Row'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'Row')
    };
  }), (0, _mapProps2.default)(function (props) {
    var components = props.components,
        rowProperties = props.rowProperties,
        className = props.className,
        otherProps = _objectWithoutProperties(props, ['components', 'rowProperties', 'className']);

    return _extends({
      Cell: components.Cell,
      className: (0, _valueUtils.valueOrResult)(rowProperties.cssClassName, props) || props.className
    }, otherProps);
  }))(function (_ref) {
    var Cell = _ref.Cell,
        columnIds = _ref.columnIds,
        griddleKey = _ref.griddleKey,
        style = _ref.style,
        className = _ref.className;
    return _react2.default.createElement(OriginalComponent, {
      griddleKey: griddleKey,
      columnIds: columnIds,
      Cell: Cell,
      className: className,
      style: style
    });
  });
};

exports.default = ComposedRowContainer;

/***/ }),

/***/ 1413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = __webpack_require__(384);

var _localSelectors = __webpack_require__(399);

var _actions = __webpack_require__(393);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = function enhance(OriginalComponent) {
  return (0, _griddleConnect.connect)(function (state) {
    return {
      text: (0, _localSelectors.textSelector)(state, { key: 'next' }),
      hasNext: (0, _localSelectors.hasNextSelector)(state),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'NextButton'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'NextButton')
    };
  }, {
    getNext: _actions.getNext
  })(function (props) {
    return _react2.default.createElement(OriginalComponent, _extends({}, props, { onClick: props.getNext }));
  });
};

exports.default = enhance;

/***/ }),

/***/ 1414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = __webpack_require__(384);

var _localSelectors = __webpack_require__(399);

var _actions = __webpack_require__(393);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = function enhance(OriginalComponent) {
  return (0, _griddleConnect.connect)(function (state) {
    return {
      text: (0, _localSelectors.textSelector)(state, { key: 'previous' }),
      hasPrevious: (0, _localSelectors.hasPreviousSelector)(state),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'PreviousButton'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'PreviousButton')
    };
  }, {
    getPrevious: _actions.getPrevious
  })(function (props) {
    return _react2.default.createElement(OriginalComponent, _extends({}, props, { onClick: props.getPrevious }));
  });
};

exports.default = enhance;

/***/ }),

/***/ 1415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _griddleConnect = __webpack_require__(384);

var _reselect = __webpack_require__(592);

var _localSelectors = __webpack_require__(399);

var _actions = __webpack_require__(393);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = function enhance(OriginalComponent) {
  return (0, _griddleConnect.connect)(function (state) {
    return {
      maxPages: (0, _localSelectors.maxPageSelector)(state),
      currentPage: (0, _localSelectors.currentPageSelector)(state),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'PageDropdown'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'PageDropdown')
    };
  }, {
    setPage: _actions.setPage
  })(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = enhance;

/***/ }),

/***/ 1416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _localSelectors = __webpack_require__(399);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposedContainerComponent = function ComposedContainerComponent(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    components: _propTypes2.default.object
  }), (0, _mapProps2.default)(function (props) {
    return {
      TableHeading: props.components.TableHeading,
      TableBody: props.components.TableBody,
      Loading: props.components.Loading,
      NoResults: props.components.NoResults
    };
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      dataLoading: (0, _localSelectors.dataLoadingSelector)(state),
      visibleRows: (0, _localSelectors.visibleRowCountSelector)(state),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'Table'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'Table')
    };
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = ComposedContainerComponent;

/***/ }),

/***/ 1417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TableHeadingCellContainer = __webpack_require__(759);

var _TableHeadingCellContainer2 = _interopRequireDefault(_TableHeadingCellContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Obsolete
var EnhancedHeadingCell = _TableHeadingCellContainer2.default;

exports.default = EnhancedHeadingCell;

/***/ }),

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRIDDLE_INITIALIZED = GRIDDLE_INITIALIZED;
exports.GRIDDLE_LOADED_DATA = GRIDDLE_LOADED_DATA;
exports.GRIDDLE_SET_PAGE_SIZE = GRIDDLE_SET_PAGE_SIZE;
exports.GRIDDLE_SET_PAGE = GRIDDLE_SET_PAGE;
exports.GRIDDLE_NEXT_PAGE = GRIDDLE_NEXT_PAGE;
exports.GRIDDLE_PREVIOUS_PAGE = GRIDDLE_PREVIOUS_PAGE;
exports.GRIDDLE_SET_FILTER = GRIDDLE_SET_FILTER;
exports.GRIDDLE_SET_SORT = GRIDDLE_SET_SORT;

var _immutable = __webpack_require__(541);

var _immutable2 = _interopRequireDefault(_immutable);

var _localSelectors = __webpack_require__(399);

var _dataReducer = __webpack_require__(769);

var dataReducers = _interopRequireWildcard(_dataReducer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GRIDDLE_INITIALIZED(state) {
  return dataReducers.GRIDDLE_INITIALIZED(state);
}
/** Sets the Griddle data
 * @param {Immutable} state - Immutable state object
 * @param {Object} action - the action object to work with
 *
 * This simply wraps dataReducer
 */
function GRIDDLE_LOADED_DATA(state, action) {
  return dataReducers.GRIDDLE_LOADED_DATA(state, action);
}

/** Sets the page size
 * @param {Immutable} state - Immutable state object
 * @param {Object} action - the action object to work with
 *
 * This simply wraps dataReducer
 */
function GRIDDLE_SET_PAGE_SIZE(state, action) {
  return dataReducers.GRIDDLE_SET_PAGE_SIZE(state, action);
}

/** Sets the current page
 * @param {Immutable} state - Immutable state object
 * @param {Object} action - the action object to work with
 *
 * This simply wraps dataReducer
 */
function GRIDDLE_SET_PAGE(state, action) {
  return dataReducers.GRIDDLE_SET_PAGE(state, action);
}

function GRIDDLE_NEXT_PAGE(state, action) {
  var maxPage = (0, _localSelectors.maxPageSelector)(state);
  var currentPage = (0, _localSelectors.currentPageSelector)(state);

  if (currentPage < maxPage) {
    return state.setIn(['pageProperties', 'currentPage'], currentPage + 1);
  }

  return state;
}

function GRIDDLE_PREVIOUS_PAGE(state, action) {
  var currentPage = (0, _localSelectors.currentPageSelector)(state);

  if (currentPage > 0) {
    return state.setIn(['pageProperties', 'currentPage'], currentPage - 1);
  }

  return state;
}

/** Sets the current filter
 * @param {Immutable} state - Immutable state object
 * @param {Object} action - the action object to work with
 *
 */
function GRIDDLE_SET_FILTER(state, action) {
  return state.set('filter', action.filter && _immutable2.default.fromJS(action.filter)).setIn(['pageProperties', 'currentPage'], 1);
};

/** Sets the sort options
 * @param {Immutable} state - Immutable state object
 * @param {Object} action - the action object to work with
 *
 * This simply wraps dataReducer
 */
function GRIDDLE_SET_SORT(state, action) {
  return dataReducers.GRIDDLE_SET_SORT(state, action);
};

/***/ }),

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _components = __webpack_require__(1420);

var _components2 = _interopRequireDefault(_components);

var _reducers = __webpack_require__(1426);

var reducer = _interopRequireWildcard(_reducers);

var _initialState = __webpack_require__(774);

var _initialState2 = _interopRequireDefault(_initialState);

var _selectors = __webpack_require__(1428);

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PositionPlugin = function PositionPlugin(config) {
  return {
    initialState: _extends({}, _initialState2.default, {
      positionSettings: Object.assign({}, _initialState2.default.positionSettings, config)
    }),
    components: _components2.default,
    reducer: reducer,
    selectors: selectors
  };
};

exports.default = PositionPlugin;

/***/ }),

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pagination = __webpack_require__(1421);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _SpacerRow = __webpack_require__(773);

var _SpacerRow2 = _interopRequireDefault(_SpacerRow);

var _TableBody = __webpack_require__(1422);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableEnhancer = __webpack_require__(1423);

var _TableEnhancer2 = _interopRequireDefault(_TableEnhancer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Pagination: _Pagination2.default,
  SpacerRow: _SpacerRow2.default,
  TableBody: _TableBody2.default,
  TableEnhancer: _TableEnhancer2.default
};

/***/ }),

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We're not going to be displaying a pagination bar for infinite scrolling.
var PaginationComponent = function PaginationComponent(props) {
  return _react2.default.createElement('span', null);
};

exports.default = PaginationComponent;

/***/ }),

/***/ 1422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SpacerRow = __webpack_require__(773);

var _SpacerRow2 = _interopRequireDefault(_SpacerRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function TableBody(_ref) {
  var rowIds = _ref.rowIds,
      Row = _ref.Row;
  return _react2.default.createElement(
    'tbody',
    null,
    _react2.default.createElement(_SpacerRow2.default, { placement: 'top' }),
    rowIds && rowIds.map(function (r) {
      return _react2.default.createElement(Row, { key: r, griddleKey: r });
    }),
    _react2.default.createElement(_SpacerRow2.default, { placement: 'bottom' })
  );
};

exports.default = TableBody;

/***/ }),

/***/ 1423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _actions = __webpack_require__(1424);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Table = function Table(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    selectors: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    var _props$selectors = props.selectors,
        tableHeightSelector = _props$selectors.tableHeightSelector,
        tableWidthSelector = _props$selectors.tableWidthSelector,
        rowHeightSelector = _props$selectors.rowHeightSelector;

    return {
      TableHeight: tableHeightSelector(state),
      TableWidth: tableWidthSelector(state),
      RowHeight: rowHeightSelector(state)
    };
  }, {
    setScrollPosition: _actions.setScrollPosition
  }), (0, _mapProps2.default)(function (props) {
    var selectors = props.selectors,
        restProps = _objectWithoutProperties(props, ['selectors']);

    return restProps;
  }))(function (_Component) {
    _inherits(_class2, _Component);

    function _class2(props, context) {
      _classCallCheck(this, _class2);

      var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props, context));

      _this._scroll = function () {
        var _this$props = _this.props,
            setScrollPosition = _this$props.setScrollPosition,
            RowHeight = _this$props.RowHeight;
        var scrollTop = _this.state.scrollTop;


        if (_this._scrollable && Math.abs(_this._scrollable.scrollTop - scrollTop) >= RowHeight) {
          setScrollPosition(_this._scrollable.scrollLeft, _this._scrollable.scrollWidth, _this._scrollable.clientWidth, _this._scrollable.scrollTop, _this._scrollable.scrollHeight, _this._scrollable.clientHeight);
          _this.setState({ scrollTop: _this._scrollable.scrollTop });
        }
      };

      _this.state = { scrollTop: 0 };
      return _this;
    }

    _createClass(_class2, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            TableHeight = _props.TableHeight,
            TableWidth = _props.TableWidth;

        var scrollStyle = {
          'overflow': TableHeight && TableWidth ? 'scroll' : null,
          'overflowY': TableHeight && !TableWidth ? 'scroll' : null,
          'overflowX': !TableHeight && TableWidth ? 'scroll' : null,
          'height': TableHeight ? TableHeight : null,
          'width': TableWidth ? TableWidth : null,
          'display': 'inline-block'
        };

        return _react2.default.createElement(
          'div',
          { ref: function ref(_ref) {
              return _this2._scrollable = _ref;
            }, style: scrollStyle, onScroll: this._scroll },
          _react2.default.createElement(OriginalComponent, this.props)
        );
      }
    }]);

    return _class2;
  }(_react.Component));
};

exports.default = Table;

/***/ }),

/***/ 1424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setScrollPosition = setScrollPosition;

var _constants = __webpack_require__(1425);

function setScrollPosition(xScrollPosition, xScrollMax, xVisible, yScrollPosition, yScrollMax, yVisible) {
  return {
    type: _constants.XY_POSITION_CHANGED,
    xScrollPosition: xScrollPosition,
    xScrollMax: xScrollMax,
    xVisible: xVisible,
    yScrollPosition: yScrollPosition,
    yScrollMax: yScrollMax,
    yVisible: yVisible
  };
}

/***/ }),

/***/ 1425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var XY_POSITION_CHANGED = exports.XY_POSITION_CHANGED = 'XY_POSITION_CHANGED';

/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XY_POSITION_CHANGED = XY_POSITION_CHANGED;
exports.GRIDDLE_SET_FILTER_AFTER = GRIDDLE_SET_FILTER_AFTER;

var _utils = __webpack_require__(1427);

function XY_POSITION_CHANGED(state, action) {
  var height = state.getIn(['currentPosition', 'height']) || 0;
  var width = state.getIn(['currentPosition', 'width']) || 0;

  return state.setIn(['currentPosition', 'xScrollChangePosition'], action.xScrollPosition || 0).setIn(['currentPosition', 'yScrollChangePosition'], action.yScrollPosition || 0).setIn(['currentPosition', 'height'], action.height || height).setIn(['currentPosition', 'width'], action.width || width);
}

function GRIDDLE_SET_FILTER_AFTER(state, action, helpers) {
  return state.setIn(['currentPosition', 'xScrollChangePosition'], 0).setIn(['currentPosition', 'yScrollChangePosition'], 0);
}

/***/ }),

/***/ 1427:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldUpdateDrawnRows = shouldUpdateDrawnRows;
exports.setCurrentPosition = setCurrentPosition;
exports.updatePositionProperties = updatePositionProperties;
exports.updateRenderedData = updateRenderedData;

var _immutable = __webpack_require__(541);

var _immutable2 = _interopRequireDefault(_immutable);

var _initialState = __webpack_require__(774);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shouldUpdateDrawnRows(action, state) {
  var height = state.getIn(['currentPosition', 'height']);
  var width = state.getIn(['currentPosition', 'width']);

  // If the containers have changed size, update drawn rows.
  if (height != action.yVisible || width != action.xVisible) return true;

  var yScrollChangePosition = state.getIn(['currentPosition', 'yScrollChangePosition']);
  var rowHeight = state.getIn(['positionConfig', 'rowHeight']);

  // Get the current visible record count.
  var visibleRecordCount = getVisibleRecordCount(state);

  // Get the count of rendered rows.
  var startDisplayIndex = state.getIn(['currentPosition', 'renderedStartDisplayIndex']);
  var endDisplayIndex = state.getIn(['currentPosition', 'renderedEndDisplayIndex']);
  var renderedRecordCount = endDisplayIndex - startDisplayIndex;

  // Calculate the height of a third of the difference.
  var rowDifferenceHeight = rowHeight * (renderedRecordCount - visibleRecordCount) / 3;

  return Math.abs(action.yScrollPosition - yScrollChangePosition) >= rowDifferenceHeight;
}

function setCurrentPosition(state, yScrollPosition, xScrollPosition) {
  return state.setIn(['currentPosition', 'yScrollChangePosition'], yScrollPosition).setIn(['currentPosition', 'xScrollChangePosition'], xScrollPosition);
}

function updatePositionProperties(action, state, force) {
  if (!action.force && !shouldUpdateDrawnRows(action, state) && !_immutable2.default.is(state.get('currentPosition'), (0, _initialState2.default)().get('currentPosition'))) {
    return state; // Indicate that this shouldn't result in an emit.
  }

  var sizeUpdatedState = state.setIn(['currentPosition', 'height'], action.yVisible ? action.yVisible * 1.2 : state.getIn(['currentPosition', 'height'])).setIn(['currentPosition', 'width'], action.xVisible || state.getIn(['currentPosition', 'width']));

  var visibleRecordCount = getVisibleRecordCount(sizeUpdatedState);
  var visibleDataLength = helpers.getDataSetSize(sizeUpdatedState);

  var rowHeight = sizeUpdatedState.getIn(['positionConfig', 'rowHeight']);

  var verticalScrollPosition = action.yScrollPosition || 0;
  var horizontalScrollPosition = action.xScrollPosition || 0;

  // Inspired by : http://jsfiddle.net/vjeux/KbWJ2/9/
  var renderedStartDisplayIndex = Math.max(0, Math.floor(Math.floor(verticalScrollPosition / rowHeight) - visibleRecordCount * 0.25));
  var renderedEndDisplayIndex = Math.min(Math.floor(renderedStartDisplayIndex + visibleRecordCount * 2), visibleDataLength - 1) + 1;

  return setCurrentPosition(sizeUpdatedState, verticalScrollPosition, horizontalScrollPosition).setIn(['currentPosition', 'renderedStartDisplayIndex'], renderedStartDisplayIndex).setIn(['currentPosition', 'renderedEndDisplayIndex'], renderedEndDisplayIndex).setIn(['currentPosition', 'visibleDataLength'], visibleDataLength);
}

function updateRenderedData(state) {
  var startDisplayIndex = state.getIn(['currentPosition', 'renderedStartDisplayIndex']);
  var columns = helpers.getDataColumns(state, data);
  var data = helpers.getDataSet(state);

  return state.set('renderedData', helpers.getVisibleDataColumns(data.skip(startDisplayIndex).take(state.getIn(['currentPosition', 'renderedEndDisplayIndex']) - startDisplayIndex), columns));
}

/***/ }),

/***/ 1428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visibleRowIdsSelector = exports.visibleDataSelector = exports.currentPageDataSelector = exports.bottomSpacerSelector = exports.topSpacerSelector = exports.endIndexSelector = exports.startIndexSelector = exports.verticalScrollChangeSelector = exports.hoizontalScrollChangeSelector = exports.visibleDataLengthSelector = exports.visibleRecordCountSelector = exports.tableWidthSelector = exports.tableHeightSelector = exports.currentHeightSelector = exports.rowHeightSelector = exports.positionSettingsSelector = undefined;

var _reselect = __webpack_require__(592);

var _localSelectors = __webpack_require__(399);

var positionSettingsSelector = exports.positionSettingsSelector = function positionSettingsSelector(state) {
  return state.get('positionSettings');
};
var rowHeightSelector = exports.rowHeightSelector = function rowHeightSelector(state) {
  return state.getIn(['positionSettings', 'rowHeight']);
};
var currentHeightSelector = exports.currentHeightSelector = function currentHeightSelector(state) {
  return state.getIn(['currentPosition', 'height']);
};

var tableHeightSelector = exports.tableHeightSelector = function tableHeightSelector(state) {
  return state.getIn(['positionSettings', 'tableHeight']);
};
var tableWidthSelector = exports.tableWidthSelector = function tableWidthSelector(state) {
  return state.getIn(['positionSettings', 'tableWidth']);
};

// From what i can tell from the original virtual scrolling plugin...
// 1. We want to get the visible record count
// 2. Get the size of the dataset we're working with (whether thats local or remote)
// 3. Figure out the renderedStart and End display index
// 4. Show only the records that'd fall in the render indexes

/** Gets the number of viisble rows based on the height of the container and the rowHeight
 */
var visibleRecordCountSelector = exports.visibleRecordCountSelector = (0, _reselect.createSelector)(rowHeightSelector, currentHeightSelector, function (rowHeight, currentHeight) {
  return Math.ceil(currentHeight / rowHeight);
});

var visibleDataLengthSelector = exports.visibleDataLengthSelector = (0, _reselect.createSelector)(_localSelectors.sortedDataSelector, function (sortedData) {
  return sortedData.size;
});

var hoizontalScrollChangeSelector = exports.hoizontalScrollChangeSelector = function hoizontalScrollChangeSelector(state) {
  return state.getIn(['currentPosition', 'xScrollChangePosition']) || 0;
};
var verticalScrollChangeSelector = exports.verticalScrollChangeSelector = function verticalScrollChangeSelector(state) {
  return state.getIn(['currentPosition', 'yScrollChangePosition']) || 0;
};

var startIndexSelector = exports.startIndexSelector = (0, _reselect.createSelector)(verticalScrollChangeSelector, rowHeightSelector, visibleRecordCountSelector, function (verticalScrollPosition, rowHeight, visibleRecordCount) {
  // Inspired by : http://jsfiddle.net/vjeux/KbWJ2/9/
  return Math.max(0, Math.floor(Math.floor(verticalScrollPosition / rowHeight) - visibleRecordCount * 0.25));
});

var endIndexSelector = exports.endIndexSelector = (0, _reselect.createSelector)(startIndexSelector, visibleRecordCountSelector, visibleDataLengthSelector, function (startDisplayIndex, visibleRecordCount, visibleDataLength) {
  // Inspired by : http://jsfiddle.net/vjeux/KbWJ2/9/
  return Math.min(Math.floor(startDisplayIndex + visibleRecordCount * 2), visibleDataLength - 1) + 1;
});

var topSpacerSelector = exports.topSpacerSelector = (0, _reselect.createSelector)(rowHeightSelector, startIndexSelector, function (rowHeight, startIndex) {
  return rowHeight * startIndex;
});

var bottomSpacerSelector = exports.bottomSpacerSelector = (0, _reselect.createSelector)(rowHeightSelector, visibleDataLengthSelector, endIndexSelector, function (rowHeight, visibleDataLength, endIndex) {
  return rowHeight * (visibleDataLength - endIndex);
});

/** Gets the current page of data
 * Won't be memoized :cry:
 */
var currentPageDataSelector = exports.currentPageDataSelector = function currentPageDataSelector() {
  return (0, _reselect.createSelector)(_localSelectors.sortedDataSelector, startIndexSelector, endIndexSelector, function (sortedData, startDisplayIndex, endDisplayIndex) {
    return sortedData.skip(startDisplayIndex).take(endDisplayIndex - startDisplayIndex);
  }).apply(undefined, arguments);
};

/** Get the visible data (and only the columns that are visible)
 */
var visibleDataSelector = exports.visibleDataSelector = (0, _reselect.createSelector)(currentPageDataSelector, _localSelectors.visibleColumnsSelector, function (currentPageData, visibleColumns) {
  return getVisibleDataForColumns(currentPageData, visibleColumns);
});

/** Gets the griddleIds for the visible rows */
var visibleRowIdsSelector = exports.visibleRowIdsSelector = (0, _reselect.createSelector)(currentPageDataSelector, function (currentPageData) {
  return currentPageData.map(function (c) {
    return c.get('griddleKey');
  });
});

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.mergeConnectParametersWithOptions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(780);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// This method appends options onto existing connect parameters
var mergeConnectParametersWithOptions = exports.mergeConnectParametersWithOptions = function mergeConnectParametersWithOptions(originalConnect, newOptions) {
  var _originalConnect = _slicedToArray(originalConnect, 4),
      mapStateFromProps = _originalConnect[0],
      mapDispatchFromProps = _originalConnect[1],
      mergeProps = _originalConnect[2],
      options = _originalConnect[3];

  return [mapStateFromProps, mapDispatchFromProps, mergeProps, _extends({}, options, newOptions)];
};

var griddleConnect = function griddleConnect() {
  for (var _len = arguments.length, connectOptions = Array(_len), _key = 0; _key < _len; _key++) {
    connectOptions[_key] = arguments[_key];
  }

  return function (OriginalComponent) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props, context) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props, context));

        var newOptions = mergeConnectParametersWithOptions(connectOptions, { storeKey: context.storeKey });
        _this.ConnectedComponent = _reactRedux.connect.apply(undefined, _toConsumableArray(newOptions))(OriginalComponent);
        return _this;
      }

      _createClass(_class, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(this.ConnectedComponent, this.props);
        }
      }]);

      return _class;
    }(_react2.default.Component), _class.contextTypes = {
      storeKey: _propTypes2.default.string
    }, _temp;
  };
};

exports.connect = griddleConnect;

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = compose;
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createHelper = __webpack_require__(590);

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = __webpack_require__(591);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getContext = function getContext(contextTypes) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    var GetContext = function GetContext(ownerProps, context) {
      return factory(_extends({}, ownerProps, context));
    };

    GetContext.contextTypes = contextTypes;

    return GetContext;
  };
};

exports.default = (0, _createHelper2.default)(getContext, 'getContext');

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createHelper = __webpack_require__(590);

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = __webpack_require__(591);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapProps = function mapProps(propsMapper) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    return function (props) {
      return factory(propsMapper(props));
    };
  };
};

exports.default = (0, _createHelper2.default)(mapProps, 'mapProps');

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cellPropertiesSelector = exports.cellPropertiesSelectorFactory = exports.rowPropertiesSelector = exports.rowDataSelector = exports.cellValueSelector = exports.visibleRowCountSelector = exports.visibleRowIdsSelector = exports.columnTitlesSelector = exports.columnIdsSelector = exports.textSelector = exports.isSettingsVisibleSelector = exports.isSettingsEnabledSelector = exports.customHeadingComponentSelector = exports.customComponentSelector = exports.classNamesForComponentSelector = exports.stylesForComponentSelector = exports.iconsForComponentSelector = exports.iconByNameSelector = exports.sortPropertyByIdSelector = exports.hiddenColumnPropertiesSelector = exports.hiddenColumnsSelector = exports.visibleColumnPropertiesSelector = exports.visibleColumnsSelector = exports.metaDataColumnsSelector = exports.sortedColumnPropertiesSelector = exports.allColumnsSelector = exports.sortColumnsSelector = exports.filterSelector = exports.hasNextSelector = exports.maxPageSelector = exports.hasPreviousSelector = exports.renderPropertiesSelector = exports.recordCountSelector = exports.currentPageSelector = exports.pageSizeSelector = exports.dataLoadingSelector = exports.dataSelector = undefined;

var _union2 = __webpack_require__(1326);

var _union3 = _interopRequireDefault(_union2);

var _isFinite2 = __webpack_require__(658);

var _isFinite3 = _interopRequireDefault(_isFinite2);

var _isEqual2 = __webpack_require__(676);

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _immutable = __webpack_require__(541);

var _immutable2 = _interopRequireDefault(_immutable);

var _reselect = __webpack_require__(592);

var _maxSafeInteger = __webpack_require__(1338);

var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var createDeepEqualSelector = (0, _reselect.createSelectorCreator)(_reselect.defaultMemoize, _isEqual3.default);

//import { createSelector } from 'reselect';

/** Gets the full dataset currently tracked by Griddle */
var dataSelector = exports.dataSelector = function dataSelector(state) {
  return state.get('data');
};

var dataLoadingSelector = exports.dataLoadingSelector = (0, _reselect.createSelector)(dataSelector, function (data) {
  return !data;
});

/** Gets the page size */
var pageSizeSelector = exports.pageSizeSelector = function pageSizeSelector(state) {
  return state.getIn(['pageProperties', 'pageSize']);
};

/** Gets the current page */
var currentPageSelector = exports.currentPageSelector = function currentPageSelector(state) {
  return state.getIn(['pageProperties', 'currentPage']);
};

/** Gets the record count */
var recordCountSelector = exports.recordCountSelector = function recordCountSelector(state) {
  return state.getIn(['pageProperties', 'recordCount']);
};

/** Gets the render properties */
var renderPropertiesSelector = exports.renderPropertiesSelector = function renderPropertiesSelector(state) {
  return state.get('renderProperties');
};

/** Determines if there are previous pages */
var hasPreviousSelector = exports.hasPreviousSelector = (0, _reselect.createSelector)(currentPageSelector, function (currentPage) {
  return currentPage > 1;
});

/** Gets the max page size
 */
var maxPageSelector = exports.maxPageSelector = (0, _reselect.createSelector)(pageSizeSelector, recordCountSelector, function (pageSize, recordCount) {
  var calc = recordCount / pageSize;

  var result = calc > Math.floor(calc) ? Math.floor(calc) + 1 : Math.floor(calc);

  return (0, _isFinite3.default)(result) ? result : 1;
});

/** Determines if there are more pages available. Assumes pageProperties.maxPage is set by the container */
var hasNextSelector = exports.hasNextSelector = (0, _reselect.createSelector)(currentPageSelector, maxPageSelector, function (currentPage, maxPage) {
  return currentPage < maxPage;
});

/** Gets current filter */
var filterSelector = exports.filterSelector = function filterSelector(state) {
  return state.get('filter') || '';
};

/** Gets the current sortColumns */
var sortColumnsSelector = exports.sortColumnsSelector = function sortColumnsSelector(state) {
  return state.get('sortColumns') || [];
};

/** Gets all the columns */
var allColumnsSelector = exports.allColumnsSelector = (0, _reselect.createSelector)(dataSelector, renderPropertiesSelector, function (data, renderProperties) {
  var dataColumns = !data || data.size === 0 ? [] : data.get(0).keySeq().toJSON();

  var columnPropertyColumns = renderProperties && renderProperties.size > 0 ?
  // TODO: Make this not so ugly
  Object.keys(renderProperties.get('columnProperties').toJSON()) : [];

  return (0, _union3.default)(dataColumns, columnPropertyColumns);
});

/** Gets the column properties objects sorted by order
 */
var sortedColumnPropertiesSelector = exports.sortedColumnPropertiesSelector = (0, _reselect.createSelector)(renderPropertiesSelector, function (renderProperties) {
  return renderProperties && renderProperties.get('columnProperties') && renderProperties.get('columnProperties').size !== 0 ? renderProperties.get('columnProperties').sortBy(function (col) {
    return col && col.get('order') || _maxSafeInteger2.default;
  }) : null;
});

/** Gets metadata column ids
 */
var metaDataColumnsSelector = exports.metaDataColumnsSelector = (0, _reselect.createSelector)(sortedColumnPropertiesSelector, function (sortedColumnProperties) {
  return sortedColumnProperties ? sortedColumnProperties.filter(function (c) {
    return c.get('isMetadata');
  }).keySeq().toJSON() : [];
});

/** Gets the visible columns either obtaining the sorted column properties or all columns
 */
var visibleColumnsSelector = exports.visibleColumnsSelector = (0, _reselect.createSelector)(sortedColumnPropertiesSelector, allColumnsSelector, function (sortedColumnProperties, allColumns) {
  return sortedColumnProperties ? sortedColumnProperties.filter(function (c) {
    var isVisible = c.get('visible') || c.get('visible') === undefined;
    var isMetadata = c.get('isMetadata');
    return isVisible && !isMetadata;
  }).keySeq().toJSON() : allColumns;
});

/** TODO: add tests and docs
 */
var visibleColumnPropertiesSelector = exports.visibleColumnPropertiesSelector = (0, _reselect.createSelector)(visibleColumnsSelector, renderPropertiesSelector, function () {
  var visibleColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var renderProperties = arguments[1];
  return visibleColumns.map(function (c) {
    var columnProperty = renderProperties.getIn(['columnProperties', c]);
    return columnProperty && columnProperty.toJSON() || { id: c };
  });
});

/** Gets the possible columns that are currently hidden */
var hiddenColumnsSelector = exports.hiddenColumnsSelector = (0, _reselect.createSelector)(visibleColumnsSelector, allColumnsSelector, metaDataColumnsSelector, function (visibleColumns, allColumns, metaDataColumns) {
  var removeColumns = [].concat(_toConsumableArray(visibleColumns), _toConsumableArray(metaDataColumns));

  return allColumns.filter(function (c) {
    return removeColumns.indexOf(c) === -1;
  });
});

/** TODO: add tests and docs
 */
var hiddenColumnPropertiesSelector = exports.hiddenColumnPropertiesSelector = (0, _reselect.createSelector)(hiddenColumnsSelector, renderPropertiesSelector, function () {
  var hiddenColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var renderProperties = arguments[1];
  return hiddenColumns.map(function (c) {
    var columnProperty = renderProperties.getIn(['columnProperties', c]);

    return columnProperty && columnProperty.toJSON() || { id: c };
  });
});

/** Gets the sort property for a given column */
var sortPropertyByIdSelector = exports.sortPropertyByIdSelector = function sortPropertyByIdSelector(state, _ref) {
  var columnId = _ref.columnId;

  var sortProperties = state.get('sortProperties');
  var individualProperty = sortProperties && sortProperties.size > 0 && sortProperties.find(function (r) {
    return r.get('id') === columnId;
  });

  return individualProperty && individualProperty.toJSON() || null;
};

/** Gets the icons property from styles */
var iconByNameSelector = exports.iconByNameSelector = function iconByNameSelector(state, _ref2) {
  var name = _ref2.name;

  return state.getIn(['styleConfig', 'icons', name]);
};

/** Gets the icons for a component */
var iconsForComponentSelector = exports.iconsForComponentSelector = function iconsForComponentSelector(state, componentName) {
  var icons = state.getIn(['styleConfig', 'icons', componentName]);
  return icons && icons.toJS ? icons.toJS() : icons;
};

/** Gets a style for a component */
var stylesForComponentSelector = exports.stylesForComponentSelector = function stylesForComponentSelector(state, componentName) {
  var style = state.getIn(['styleConfig', 'styles', componentName]);
  return style && style.toJS ? style.toJS() : style;
};

/** Gets a classname for a component */
var classNamesForComponentSelector = exports.classNamesForComponentSelector = function classNamesForComponentSelector(state, componentName) {
  var classNames = state.getIn(['styleConfig', 'classNames', componentName]);
  return classNames && classNames.toJS ? classNames.toJS() : classNames;
};

/** Gets a custom component for a given column
* TODO: Needs tests
*/
var customComponentSelector = exports.customComponentSelector = function customComponentSelector(state, _ref3) {
  var columnId = _ref3.columnId;

  return state.getIn(['renderProperties', 'columnProperties', columnId, 'customComponent']);
};

/** Gets a custom heading component for a given column
* TODO: Needs tests
*/
var customHeadingComponentSelector = exports.customHeadingComponentSelector = function customHeadingComponentSelector(state, _ref4) {
  var columnId = _ref4.columnId;

  return state.getIn(['renderProperties', 'columnProperties', columnId, 'customHeadingComponent']);
};

var isSettingsEnabledSelector = exports.isSettingsEnabledSelector = function isSettingsEnabledSelector(state) {
  var enableSettings = state.get('enableSettings');

  return enableSettings === undefined ? true : enableSettings;
};

var isSettingsVisibleSelector = exports.isSettingsVisibleSelector = function isSettingsVisibleSelector(state) {
  return state.get('showSettings');
};

var textSelector = exports.textSelector = function textSelector(state, _ref5) {
  var key = _ref5.key;

  return state.getIn(['textProperties', key]);
};

/** Gets the column ids for the visible columns
*/
var columnIdsSelector = exports.columnIdsSelector = (0, _reselect.createSelector)(renderPropertiesSelector, visibleColumnsSelector, function (renderProperties, visibleColumns) {
  var offset = 1000;
  // TODO: Make this better -- This is pretty inefficient
  return visibleColumns.map(function (k, index) {
    return {
      id: renderProperties.getIn(['columnProperties', k, 'id']) || k,
      order: renderProperties.getIn(['columnProperties', k, 'order']) || offset + index
    };
  }).sort(function (first, second) {
    return first.order - second.order;
  }).map(function (item) {
    return item.id;
  });
});

/** Gets the column titles for the visible columns
 */
var columnTitlesSelector = exports.columnTitlesSelector = (0, _reselect.createSelector)(columnIdsSelector, renderPropertiesSelector, function (columnIds, renderProperties) {
  return columnIds.map(function (k) {
    return renderProperties.getIn(['columnProperties', k, 'title']) || k;
  });
});

/** Gets the griddleIds for the visible rows */
var visibleRowIdsSelector = exports.visibleRowIdsSelector = (0, _reselect.createSelector)(dataSelector, function (currentPageData) {
  return currentPageData ? currentPageData.map(function (c) {
    return c.get('griddleKey');
  }) : new _immutable2.default.List();
});

/** Gets the count of visible rows */
var visibleRowCountSelector = exports.visibleRowCountSelector = (0, _reselect.createSelector)(visibleRowIdsSelector, function (visibleRowIds) {
  return visibleRowIds.size;
});

// TODO: Needs tests and jsdoc
var cellValueSelector = exports.cellValueSelector = function cellValueSelector(state, props) {
  var griddleKey = props.griddleKey,
      columnId = props.columnId;

  var cellProperties = cellPropertiesSelector(state, props);

  //TODO: Make Griddle key a string in data utils
  var lookup = state.getIn(['lookup', griddleKey.toString()]);

  var value = state.get('data').get(lookup).getIn(columnId.split('.'));
  var type = !!cellProperties ? cellProperties.type : 'string';
  switch (type) {
    case 'date':
      return value.toLocaleDateString();
    case 'string':
    default:
      return value;
  }
};

// TODO: Needs jsdoc
var rowDataSelector = exports.rowDataSelector = function rowDataSelector(state, _ref6) {
  var griddleKey = _ref6.griddleKey;

  var rowIndex = state.getIn(['lookup', griddleKey.toString()]);
  return state.get('data').get(rowIndex).toJSON();
};

/** Gets the row render properties
 */
var rowPropertiesSelector = exports.rowPropertiesSelector = function rowPropertiesSelector(state) {
  var row = state.getIn(['renderProperties', 'rowProperties']);

  return row && row.toJSON() || {};
};

/** Gets the column render properties for the specified columnId
 */
var cellPropertiesSelectorFactory = exports.cellPropertiesSelectorFactory = function cellPropertiesSelectorFactory() {
  var immutableCellPropertiesSelector = function immutableCellPropertiesSelector(state, _ref7) {
    var columnId = _ref7.columnId;

    var item = state.getIn(['renderProperties', 'columnProperties', columnId]);

    return item && item.toJSON() || {};
  };

  return createDeepEqualSelector(immutableCellPropertiesSelector, function (item) {
    return item;
  });
};

var cellPropertiesSelector = exports.cellPropertiesSelector = cellPropertiesSelectorFactory();

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNext = getNext;
exports.getPrevious = getPrevious;
exports.setPage = setPage;
exports.setFilter = setFilter;
exports.setSortColumn = setSortColumn;
exports.toggleSettings = toggleSettings;
exports.toggleColumn = toggleColumn;
exports.setPageSize = setPageSize;
exports.updateState = updateState;

var _constants = __webpack_require__(760);

function getNext() {
  return {
    type: _constants.GRIDDLE_NEXT_PAGE
  };
}

function getPrevious() {
  return {
    type: _constants.GRIDDLE_PREVIOUS_PAGE
  };
}

function setPage(pageNumber) {
  return {
    type: _constants.GRIDDLE_SET_PAGE,
    pageNumber: pageNumber
  };
}

function setFilter(filter) {
  return {
    type: _constants.GRIDDLE_SET_FILTER,
    filter: filter
  };
}

function setSortColumn(sortProperties) {
  return {
    type: _constants.GRIDDLE_SET_SORT,
    sortProperties: sortProperties
  };
}

function toggleSettings() {
  return {
    type: _constants.GRIDDLE_TOGGLE_SETTINGS
  };
}

function toggleColumn(columnId) {
  return {
    type: _constants.GRIDDLE_TOGGLE_COLUMN,
    columnId: columnId
  };
}

function setPageSize(pageSize) {
  return {
    type: _constants.GRIDDLE_SET_PAGE_SIZE,
    pageSize: pageSize
  };
}

function updateState(newState) {
  return {
    type: _constants.GRIDDLE_UPDATE_STATE,
    newState: newState
  };
}

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textSelector = exports.cellPropertiesSelector = exports.rowPropertiesSelector = exports.classNamesForComponentSelector = exports.stylesForComponentSelector = exports.iconsByNameSelector = exports.iconsForComponentSelector = exports.rowDataSelector = exports.cellValueSelector = exports.columnTitlesSelector = exports.columnIdsSelector = exports.hiddenColumnsSelector = exports.visibleRowCountSelector = exports.visibleRowIdsSelector = exports.visibleDataSelector = exports.currentPageDataSelector = exports.sortedDataSelector = exports.hasPreviousSelector = exports.hasNextSelector = exports.visibleColumnsSelector = exports.sortedColumnPropertiesSelector = exports.allColumnsSelector = exports.maxPageSelector = exports.filteredDataSelector = exports.metaDataColumnsSelector = exports.renderPropertiesSelector = exports.sortMethodSelector = exports.sortPropertiesSelector = exports.filterSelector = exports.pageSizeSelector = exports.currentPageSelector = exports.dataLoadingSelector = exports.dataSelector = undefined;

var _isFinite2 = __webpack_require__(658);

var _isFinite3 = _interopRequireDefault(_isFinite2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _immutable = __webpack_require__(541);

var _immutable2 = _interopRequireDefault(_immutable);

var _reselect = __webpack_require__(592);

var _sortUtils = __webpack_require__(663);

var _dataUtils = __webpack_require__(665);

var _dataSelectors = __webpack_require__(389);

var dataSelectors = _interopRequireWildcard(_dataSelectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/** Gets the entire data set
 * @param {Immutable} state - state object
 */
var dataSelector = exports.dataSelector = function dataSelector(state) {
  return state.get('data');
};

var dataLoadingSelector = exports.dataLoadingSelector = dataSelectors.dataLoadingSelector;

/** Gets the current page from pageProperties
 * @param {Immutable} state - state object
 */
var currentPageSelector = exports.currentPageSelector = function currentPageSelector(state) {
  return state.getIn(['pageProperties', 'currentPage']);
};

/** Gets the currently set page size
 * @param {Immutable} state - state object
 */
var pageSizeSelector = exports.pageSizeSelector = function pageSizeSelector(state) {
  return state.getIn(['pageProperties', 'pageSize']);
};

/** Gets the currently set filter
 */
var filterSelector = exports.filterSelector = function filterSelector(state) {
  return state.get('filter') || '';
};

var sortPropertiesSelector = exports.sortPropertiesSelector = function sortPropertiesSelector(state) {
  return state.get('sortProperties');
};

var sortMethodSelector = exports.sortMethodSelector = function sortMethodSelector(state) {
  return state.get('sortMethod');
};

var renderPropertiesSelector = exports.renderPropertiesSelector = function renderPropertiesSelector(state) {
  return state.get('renderProperties');
};

var metaDataColumnsSelector = exports.metaDataColumnsSelector = dataSelectors.metaDataColumnsSelector;

var columnPropertiesSelector = function columnPropertiesSelector(state) {
  return state.getIn(['renderProperties', 'columnProperties']);
};

var substringSearch = function substringSearch(value, filter) {
  if (!filter) {
    return true;
  }

  var filterToLower = filter.toLowerCase();
  return value && value.toString().toLowerCase().indexOf(filterToLower) > -1;
};

var filterable = function filterable(columnProperties, key) {
  if (key === 'griddleKey') {
    return false;
  }
  if (columnProperties) {
    if (columnProperties.get(key) === undefined || columnProperties.getIn([key, 'filterable']) === false) {
      return false;
    }
  }
  return true;
};

var textFilterRowSearch = function textFilterRowSearch(columnProperties, filter) {
  return function (row) {
    return row.keySeq().some(function (key) {
      if (!filterable(columnProperties, key)) {
        return false;
      }
      return substringSearch(row.get(key), filter);
    });
  };
};

var objectFilterRowSearch = function objectFilterRowSearch(columnProperties, filter) {
  return function (row, i, data) {
    return row.keySeq().every(function (key) {
      if (!filterable(columnProperties, key)) {
        return true;
      }
      var keyFilter = filter.get(key);
      switch (typeof keyFilter === 'undefined' ? 'undefined' : _typeof(keyFilter)) {
        case 'string':
          return substringSearch(row.get(key), keyFilter);
          break;
        case 'function':
          return keyFilter(row.get(key), i, data);
          break;
        default:
          return true;
          break;
      }
    });
  };
};

/** Gets the data filtered by the current filter
 */
var filteredDataSelector = exports.filteredDataSelector = (0, _reselect.createSelector)(dataSelector, filterSelector, columnPropertiesSelector, function (data, filter, columnProperties) {
  if (!filter || !data) {
    return data;
  }

  switch (typeof filter === 'undefined' ? 'undefined' : _typeof(filter)) {
    case 'string':
      return data.filter(textFilterRowSearch(columnProperties, filter));
    case 'object':
      return data.filter(objectFilterRowSearch(columnProperties, filter));
    case 'function':
      return data.filter(filter);
    default:
      return data;
  }
});

/** Gets the max page size
 */
var maxPageSelector = exports.maxPageSelector = (0, _reselect.createSelector)(pageSizeSelector, filteredDataSelector, function (pageSize, data) {
  var total = data ? data.size : 0;
  var calc = total / pageSize;

  var result = calc > Math.floor(calc) ? Math.floor(calc) + 1 : Math.floor(calc);

  return (0, _isFinite3.default)(result) ? result : 1;
});

var allColumnsSelector = exports.allColumnsSelector = (0, _reselect.createSelector)(dataSelector, function (data) {
  return !data || data.size === 0 ? [] : data.get(0).keySeq().toJSON();
});

/** Gets the column properties objects sorted by order
 */
var sortedColumnPropertiesSelector = exports.sortedColumnPropertiesSelector = dataSelectors.sortedColumnPropertiesSelector;

/** Gets the visible columns either obtaining the sorted column properties or all columns
 */
var visibleColumnsSelector = exports.visibleColumnsSelector = dataSelectors.visibleColumnsSelector;

/** Returns whether or not this result set has more pages
 */
var hasNextSelector = exports.hasNextSelector = (0, _reselect.createSelector)(currentPageSelector, maxPageSelector, function (currentPage, maxPage) {
  return currentPage < maxPage;
});

/** Returns whether or not there is a previous page to the current data
 */
var hasPreviousSelector = exports.hasPreviousSelector = function hasPreviousSelector(state) {
  return state.getIn(['pageProperties', 'currentPage']) > 1;
};

/** Gets the data sorted by the sort function specified in render properties
 *  if no sort method is supplied, it will use the default sort defined in griddle
 */
var sortedDataSelector = exports.sortedDataSelector = (0, _reselect.createSelector)(filteredDataSelector, sortPropertiesSelector, renderPropertiesSelector, sortMethodSelector, function (filteredData, sortProperties, renderProperties) {
  var sortMethod = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _sortUtils.defaultSort;

  if (!sortProperties) {
    return filteredData;
  }

  return sortProperties.reverse().reduce(function (data, sortColumnOptions) {
    var columnProperties = renderProperties && renderProperties.get('columnProperties').get(sortColumnOptions.get('id'));

    var sortFunction = columnProperties && columnProperties.get('sortMethod') || sortMethod;

    return sortFunction(data, sortColumnOptions.get('id'), sortColumnOptions.get('sortAscending'));
  }, filteredData);
});

/** Gets the current page of data
 */
var currentPageDataSelector = exports.currentPageDataSelector = (0, _reselect.createSelector)(sortedDataSelector, pageSizeSelector, currentPageSelector, function (sortedData, pageSize, currentPage) {
  if (!sortedData) {
    return [];
  }

  return sortedData.skip(pageSize * (currentPage - 1)).take(pageSize);
});

/** Get the visible data (and only the columns that are visible)
 */
var visibleDataSelector = exports.visibleDataSelector = (0, _reselect.createSelector)(currentPageDataSelector, visibleColumnsSelector, function (currentPageData, visibleColumns) {
  return (0, _dataUtils.getVisibleDataForColumns)(currentPageData, visibleColumns);
});

/** Gets the griddleIds for the visible rows */
var visibleRowIdsSelector = exports.visibleRowIdsSelector = (0, _reselect.createSelector)(currentPageDataSelector, function (currentPageData) {
  return currentPageData ? currentPageData.map(function (c) {
    return c.get('griddleKey');
  }) : new _immutable2.default.List();
});

/** Gets the count of visible rows */
var visibleRowCountSelector = exports.visibleRowCountSelector = (0, _reselect.createSelector)(visibleRowIdsSelector, function (visibleRowIds) {
  return visibleRowIds.size;
});

/** Gets the columns that are not currently visible
 */
var hiddenColumnsSelector = exports.hiddenColumnsSelector = (0, _reselect.createSelector)(visibleColumnsSelector, allColumnsSelector, metaDataColumnsSelector, function (visibleColumns, allColumns, metaDataColumns) {
  var removeColumns = [].concat(_toConsumableArray(visibleColumns), _toConsumableArray(metaDataColumns));

  return allColumns.filter(function (c) {
    return removeColumns.indexOf(c) === -1;
  });
});

/** Gets the column ids for the visible columns
*/
var columnIdsSelector = exports.columnIdsSelector = (0, _reselect.createSelector)(visibleDataSelector, renderPropertiesSelector, function (visibleData, renderProperties) {
  if (visibleData.size > 0) {
    return Object.keys(visibleData.get(0).toJSON()).map(function (k) {
      return renderProperties.getIn(['columnProperties', k, 'id']) || k;
    });
  }
});

/** Gets the column titles for the visible columns
 */
var columnTitlesSelector = exports.columnTitlesSelector = dataSelectors.columnTitlesSelector;
var cellValueSelector = exports.cellValueSelector = dataSelectors.cellValueSelector;
var rowDataSelector = exports.rowDataSelector = dataSelectors.rowDataSelector;
var iconsForComponentSelector = exports.iconsForComponentSelector = dataSelectors.iconsForComponentSelector;
var iconsByNameSelector = exports.iconsByNameSelector = dataSelectors.iconsForComponentSelector;
var stylesForComponentSelector = exports.stylesForComponentSelector = dataSelectors.stylesForComponentSelector;
var classNamesForComponentSelector = exports.classNamesForComponentSelector = dataSelectors.classNamesForComponentSelector;

var rowPropertiesSelector = exports.rowPropertiesSelector = dataSelectors.rowPropertiesSelector;
var cellPropertiesSelector = exports.cellPropertiesSelector = dataSelectors.cellPropertiesSelector;
var textSelector = exports.textSelector = dataSelectors.textSelector;

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flowRight2 = __webpack_require__(1349);

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _flow2 = __webpack_require__(1355);

var _flow3 = _interopRequireDefault(_flow2);

var _pickBy2 = __webpack_require__(654);

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _flattenDeep2 = __webpack_require__(1356);

var _flattenDeep3 = _interopRequireDefault(_flattenDeep2);

var _uniq2 = __webpack_require__(1357);

var _uniq3 = _interopRequireDefault(_uniq2);

var _pick2 = __webpack_require__(1358);

var _pick3 = _interopRequireDefault(_pick2);

var _extend2 = __webpack_require__(1360);

var _extend3 = _interopRequireDefault(_extend2);

exports.extendArray = extendArray;
exports.combineHandlers = combineHandlers;
exports.getPropertiesByEnding = getPropertiesByEnding;
exports.getObjectWherePropertyEndsWith = getObjectWherePropertyEndsWith;
exports.composeReducer = composeReducer;
exports.composeReducers = composeReducers;
exports.getKeysForObjects = getKeysForObjects;
exports.isKeyGriddleHook = isKeyGriddleHook;
exports.removeHooksFromObject = removeHooksFromObject;
exports.removeKeyNamePartFromObject = removeKeyNamePartFromObject;
exports.getBeforeHooksFromObject = getBeforeHooksFromObject;
exports.getBeforeReduceHooksFromObject = getBeforeReduceHooksFromObject;
exports.getAfterHooksFromObject = getAfterHooksFromObject;
exports.getAfterReduceHooksFromObject = getAfterReduceHooksFromObject;
exports.composeReducerObjects = composeReducerObjects;
exports.callReducerWithBeforeAfterPipe = callReducerWithBeforeAfterPipe;
exports.buildGriddleReducer = buildGriddleReducer;
exports.getReducersByWordEnding = getReducersByWordEnding;
exports.wrapMethodsByWordEnding = wrapMethodsByWordEnding;
exports.combineAndEnhanceComponents = combineAndEnhanceComponents;
exports.combineAndEnhanceContainers = combineAndEnhanceContainers;
exports.combineAndWrapWithContainerComponents = combineAndWrapWithContainerComponents;
exports.buildGriddleComponents = buildGriddleComponents;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Extends an array rather than known list of objects */
//TODO: Look at using object.assign
function extendArray(objects) {
  //return an empty object if we don't have anything to combine
  if (!objects) {
    return {};
  }

  //add empty object to the beginning for Object.extend
  objects.unshift({});

  //Buid the combined object
  var combinedObject = _extend3.default.apply(this, objects);

  //TODO: why are we doing this? is it necessary
  objects.shift();

  //return the combined object
  return combinedObject;
}

function combineHandlers(functionArray) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    functionArray.forEach(function (func) {
      return !!func && func.apply(undefined, args);
    });
  };
}

//from MDN
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

/**
 * Finds properties on an object that end in specified word
 * @param {string} ending - The string that properties should be found ending with
 * @param {Object} object - The object to find keys on
 */
function getPropertiesByEnding(ending, object) {
  return Object.keys(object).filter(function (name) {
    return name.endsWith(ending);
  });
}

/** Creates a new object containing only properties that end with specified ending
 * @param {string} ending - The string that properties should be found ending with
 * @param {Object} object - The object to find keys on
 */
function getObjectWherePropertyEndsWith(ending, object) {
  var keys = getPropertiesByEnding(ending, object);

  return (0, _pick3.default)(object, keys);
}

/** Creates a new reducer by taking the output of the first reducer as state to the second
 * @param {Object} currentReducer - reducerMethod (state, action) to that we want to run as the state parameter for second reducer
 * @param {Object} previousReducer - reducerMethod (state, action) to run second
 */
function composeReducer(nextReducer, previousReducer) {
  // compose the reducers when both parameters are functions
  if (typeof nextReducer === 'function' && typeof previousReducer === 'function') {
    return function (state, action) {
      return previousReducer(nextReducer(state, action), action);
    };
  }

  // return the nextReducer
  return nextReducer;
}

/** Creates a composed reducer method from an array of reducer methods
 * @param {Object <array>} reducers - An array of reducer methods to compose
 */
function composeReducers(reducers) {
  // flip the array (since we want to apply from left-to-right and compose each reducer
  return reducers.reverse().reduce(function (previous, next) {
    return composeReducer(next, previous);
  }, {});
}

/** Obtains all the unique keys between an array of objects
 * @param {Object <array>} objects - An array of objects
 */
function getKeysForObjects(objects) {
  return (0, _uniq3.default)((0, _flattenDeep3.default)(objects.map(function (o) {
    return Object.keys(o);
  })));
}

/** Determines if a given key is a Griddle hook reducer
 * @param {string} key - the key to check if it refers to a Griddle hook
 */
function isKeyGriddleHook(key) {
  return key === 'BEFORE_REDUCE' || key === 'AFTER_REDUCE' || key.endsWith('AFTER') || key.endsWith('BEFORE');
}

/** Removes Griddle hooks from a reducer object
 * @param {Object} reducerObject - The reducer object to remove hooks from
 */
function removeHooksFromObject(reducerObject) {
  return (0, _pickBy3.default)(reducerObject, function (value, key) {
    if (isKeyGriddleHook(key)) {
      return false;
    }

    return true;
  });
}

/** Removes a given string from any key on the object that contains that string
 * @param {Object} reducer object - the reducer object to update keys on
 * @param {string} keyString - the string to remove from all keys
*/
function removeKeyNamePartFromObject(reducerObject, keyString) {
  return Object.keys(reducerObject).reduce(function (previous, current) {
    previous[current.replace(keyString, '')] = reducerObject[current];
    return previous;
  }, {});
}

/** Gets an object that consists of only the _BEFORE hooks. _BEFORE will be removed from the key.
 * @param {Object} reducerObject - the reducer to get the _BEFORE hooks from
 */
function getBeforeHooksFromObject(reducerObject) {
  return removeKeyNamePartFromObject((0, _pickBy3.default)(reducerObject, function (value, key) {
    return key.endsWith('BEFORE');
  }), '_BEFORE');
}

/** Gets an object that consists of only the BEFORE_REDUCE hooks.
 * @param {Object} reducerObject - the reducer to get the BEFORE_REDUCE hooks from
 */
function getBeforeReduceHooksFromObject(reducerObject) {
  return (0, _pickBy3.default)(reducerObject, function (value, key) {
    return key === 'BEFORE_REDUCE';
  });
}

/** Gets an object that conists of only the _AFTER hooks. _AFTER will be removed from the key
 * @param {Object} reducerObject - the reducer to get the _AFTER hooks from
 */
function getAfterHooksFromObject(reducerObject) {
  return removeKeyNamePartFromObject((0, _pickBy3.default)(reducerObject, function (value, key) {
    return key.endsWith('AFTER');
  }), '_AFTER');
}

/** Gets an object that conists of only the AFTER_REDUCE hooks.
 * @param {Object} reducerObject - the reducer to get the AFTER_REDUCE hooks from
 */
function getAfterReduceHooksFromObject(reducerObject) {
  return (0, _pickBy3.default)(reducerObject, function (value, key) {
    return key === 'AFTER_REDUCE';
  });
}

/** Combines the given reducer objects left to right
 * @param {Object <array>} reducerObjects - An array containing objects consisting of reducer methods as properties
 */
function composeReducerObjects(reducerObjects) {
  if (reducerObjects.length < 1) return null;

  return reducerObjects.reverse().reduce(function (previous, next) {
    // if we don't have any reducers in previous object continue with next
    if (previous === null) {
      return next;
    }

    //mutate the previous object by composing the reducer methods
    for (var key in next) {
      previous[key] = composeReducer(next[key], previous[key]);
    }

    return previous;
  }, null);
}

/** Builds a new reducer that composes hooks and extends standard reducers between reducerObjects
 * @param {Object <array>} reducers - An array of reducerObjects
 * Note: this used to be exported, but the same properties are available from buildGriddleReducer.
 * TODO: This method should be broken down a bit -- it's doing too much currently
 */
function buildGriddleReducerObject(reducerObjects) {
  var reducerMethodsWithoutHooks = [];
  var beforeHooks = [];
  var afterHooks = [];

  var beforeReduceAll = [];
  var afterReduceAll = [];

  if (reducerObjects.length > 0) {
    // remove the hooks and extend the object
    for (var key in reducerObjects) {
      var reducer = reducerObjects[key];
      reducerMethodsWithoutHooks.push(removeHooksFromObject(reducer));
      beforeHooks.push(getBeforeHooksFromObject(reducer));
      afterHooks.push(getAfterHooksFromObject(reducer));
      beforeReduceAll.push(getBeforeReduceHooksFromObject(reducer));
      afterReduceAll.push(getAfterReduceHooksFromObject(reducer));
    }
  }

  var composedBeforeHooks = composeReducerObjects(beforeHooks);
  var composedAfterHooks = composeReducerObjects(afterHooks);

  var composedBeforeReduceAll = composeReducerObjects(beforeReduceAll);
  var composedAfterReduceAll = composeReducerObjects(afterReduceAll);

  // combine the reducers without hooks
  var combinedReducer = extendArray(reducerMethodsWithoutHooks);

  var composed = composeReducerObjects([composedBeforeReduceAll, composedBeforeHooks, combinedReducer, composedAfterHooks, composedAfterReduceAll]);

  return composed;
}

/** Builds a composed method containing the before / after reduce calls
 * @param {Object} reduceObject - The reducer that contains the composed reducer methods
 * @param {Object} state - The store state
 * @param {object} action - The action payload information
*/
function callReducerWithBeforeAfterPipe(reducerObject, state, action) {
  var noop = function noop(passThroughState) {
    return passThroughState;
  };
  var before = reducerObject.hasOwnProperty('BEFORE_REDUCE') ? reducerObject.BEFORE_REDUCE : noop;
  var after = reducerObject.hasOwnProperty('AFTER_REDUCE') ? reducerObject.AFTER_REDUCE : noop;

  var call = action.type && reducerObject[action.type] && reducerObject[action.type] || reducerObject.GRIDDLE_INITIALIZED || noop;

  var partialCall = function (partialAction) {
    return function (partialState) {
      return call(partialState, partialAction);
    };
  }(action);

  var method = (0, _flow3.default)([before, partialCall, after]);

  return method(state);
}

/** Builds a griddleReducer function from a series of reducerObjects
 * @param {Object <array>} reducers - An array of reducerObjects
*/
function buildGriddleReducer(reducerObjects) {
  var reducerObject = buildGriddleReducerObject(reducerObjects);
  var reducer = function reducer(state, action) {
    return callReducerWithBeforeAfterPipe(reducerObject, state, action);
  };
  Object.assign(reducer, reducerObject);
  return reducer;
}

/** Gets all reducers by a specific wordEnding
 * @param {array <Object>} reducers - An array of reducer objects
 * @param {string} ending - the wordEnding for the reducer name
 */
function getReducersByWordEnding(reducers, ending) {
  return reducers.reduce(function (previous, current) {
    var keys = Object.keys(current).filter(function (name) {
      return name.endsWith(ending);
    });

    var reducer = pick(current, keys);

    //TODO: clean this up it's a bit hacky
    for (var key in current) {
      if (!key.endsWith(ending)) {
        continue;
      }

      var keyWithoutEnding = key.replace('_' + ending, "");
      //make a new method that pipes output of previous into state of current
      //this is to allow chaining these
      var hasPrevious = previous.hasOwnProperty(keyWithoutEnding) && typeof previous[keyWithoutEnding] === 'function';
      var previousReducer = hasPrevious ? previous[keyWithoutEnding] : undefined;

      var currentReducer = reducer[key];

      reducer[keyWithoutEnding] = wrapReducer(currentReducer, previousReducer);
    }

    //override anything in previous (since this now calls previous to make sure we have helpers from both);
    return extend(previous, reducer);
  }, {});
}

/** Wraps all methods in another method by name and word ending
  * @param {array<Object>} componentObjectArray - An array of component objects
  * @param {string} ending - the word ending to determine what is a enhancer method
  * @param {string} keyReplaceString - the word ending to apply when replacing the 'ending' parameter. Defaults to ''
*/
function wrapMethodsByWordEnding(componentArray, wordEnding) {
  var keyReplaceString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  return componentArray.reduce(function (previous, current) {
    var newObject = {};

    for (var key in current) {
      var keyWithoutEnhancer = key.replace(wordEnding, keyReplaceString);

      if (key.endsWith(wordEnding) && (previous.hasOwnProperty(keyWithoutEnhancer) || current.hasOwnProperty(keyWithoutEnhancer))) {
        // Determine if we are working with an HoC that wraps another HoC
        newObject[keyWithoutEnhancer] = keyWithoutEnhancer.endsWith('Container') || keyWithoutEnhancer.endsWith('Enhancer') ?
        // If we are enhancing a container or enhancer flow this stuff since it's likely an HoC
        (0, _flowRight3.default)(current[key], current[keyWithoutEnhancer] || previous[keyWithoutEnhancer]) :
        // Wrap the current component in the Enhancer or container
        current[key](current[keyWithoutEnhancer] || previous[keyWithoutEnhancer]);
      }
    }

    return (0, _pickBy3.default)(Object.assign(previous, current, newObject), function (v, k) {
      return !k.endsWith(wordEnding);
    });
  }, {});
}

/** Gets a new components object with component per component name
 * @param {array<Object>} componentObjectArray - An array of component objects
*/
function combineAndEnhanceComponents(componentArray) {
  return wrapMethodsByWordEnding(componentArray, 'Enhancer');
}

function combineAndEnhanceContainers(componentArray) {
  return wrapMethodsByWordEnding(componentArray, 'ContainerEnhancer', 'Container');
}

/** Gets a new component object with containers wrapping standard components
  (this is the same as enhance but just applying different naming conventions)
 * @param {array<Object>} componentObjectArray - An array of component objects
*/
function combineAndWrapWithContainerComponents(componentArray) {
  return wrapMethodsByWordEnding(componentArray, 'Container');
}

/** Wraps components in their containers and enhancers
 * @param {array<Object>} componentObjectArray - An array of component objects
*/
function buildGriddleComponents(componentArray) {
  //enhance the containers
  var withEnhancedContainers = combineAndEnhanceContainers(componentArray);

  //enhance the components
  var withEnhancedComponents = combineAndEnhanceComponents([withEnhancedContainers]);

  //wrap the components with the container
  var withWrappedComponents = combineAndWrapWithContainerComponents([withEnhancedComponents]);

  return withWrappedComponents;
}

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },

    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    keySeq: function() {
      return Range(0, this.size);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(686),
    baseKeysIn = __webpack_require__(1312),
    isArrayLike = __webpack_require__(533);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var createHelper = function createHelper(func, helperName) {
  var setDisplayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var noArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (false) { var _ret; }

  return func;
};

exports.default = createHelper;

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createEagerElementUtil = __webpack_require__(1323);

var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

var _isReferentiallyTransparentFunctionComponent = __webpack_require__(1324);

var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFactory = function createFactory(type) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  return function (p, c) {
    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
  };
};

exports.default = createFactory;

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function defaultEqualityCheck(a, b) {
  return a === b;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (lastArgs === null || lastArgs.length !== args.length || !args.every(function (value, index) {
      return equalityCheck(value, lastArgs[index]);
    })) {
      lastResult = func.apply(undefined, args);
    }
    lastArgs = args;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    memoizeOptions[_key2 - 1] = arguments[_key2];
  }

  return function () {
    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      funcs[_key3] = arguments[_key3];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      return resultFunc.apply(undefined, arguments);
    }].concat(memoizeOptions));

    var selector = function selector(state, props) {
      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      var params = dependencies.map(function (dependency) {
        return dependency.apply(undefined, [state, props].concat(args));
      });
      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
    };

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      values[_key5] = arguments[_key5];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueOrResult = valueOrResult;
function valueOrResult(arg) {
  if (typeof arg === 'function') {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return arg.apply(null, args);
  }
  return arg;
}

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _createEagerFactory = __webpack_require__(591);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

var _createHelper = __webpack_require__(590);

var _createHelper2 = _interopRequireDefault(_createHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapValues = function mapValues(obj, func) {
  var result = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  /* eslint-enable no-restricted-syntax */
  return result;
};

var withHandlers = function withHandlers(handlers) {
  return function (BaseComponent) {
    var _class, _temp2, _initialiseProps;

    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    return _temp2 = _class = function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
      }

      _class.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
        this.cachedHandlers = {};
      };

      _class.prototype.render = function render() {
        return factory(_extends({}, this.props, this.handlers));
      };

      return _class;
    }(_react.Component), _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.cachedHandlers = {};
      this.handlers = mapValues(typeof handlers === 'function' ? handlers(this.props) : handlers, function (createHandler, handlerName) {
        return function () {
          var cachedHandler = _this2.cachedHandlers[handlerName];
          if (cachedHandler) {
            return cachedHandler.apply(undefined, arguments);
          }

          var handler = createHandler(_this2.props);
          _this2.cachedHandlers[handlerName] = handler;

          if (false) {}

          return handler.apply(undefined, arguments);
        };
      });
    }, _temp2;
  };
};

exports.default = (0, _createHelper2.default)(withHandlers, 'withHandlers');

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(692),
    baseIteratee = __webpack_require__(567),
    basePickBy = __webpack_require__(749),
    getAllKeysIn = __webpack_require__(1310);

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(687);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 656:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(602),
    isFlattenable = __webpack_require__(1327);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(392);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = root.isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

module.exports = isFinite;


/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(660),
    baseLodash = __webpack_require__(661);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(395);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 661:
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(660),
    baseLodash = __webpack_require__(661);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.defaultSort = defaultSort;
exports.setSortProperties = setSortProperties;
exports.getSortIconProps = getSortIconProps;
/* Sorts the given data by the specified column
 * @parameter {array<object>} data - The data to sort
 * @parameter {string} column - the name of the column to sort
 * @parameter {boolean optional} sortAscending - whether or not to sort this column in ascending order
 *
 * TODO: Needs tests!
 */
function defaultSort(data, column) {
  var sortAscending = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  return data.sort(function (original, newRecord) {
    var columnKey = column.split('.');
    var originalValue = original.hasIn(columnKey) && original.getIn(columnKey) || '';
    var newRecordValue = newRecord.hasIn(columnKey) && newRecord.getIn(columnKey) || '';

    //TODO: This is about the most cheezy sorting check ever.
    //Make it better
    if (originalValue === newRecordValue) {
      return 0;
    } else if (originalValue > newRecordValue) {
      return sortAscending ? 1 : -1;
    } else {
      return sortAscending ? -1 : 1;
    }
  });
}

function setSortProperties(_ref) {
  var setSortColumn = _ref.setSortColumn,
      sortProperty = _ref.sortProperty,
      columnId = _ref.columnId;

  return function () {
    if (sortProperty === null) {
      setSortColumn({ id: columnId, sortAscending: true });
      return;
    }

    var newSortProperty = _extends({}, sortProperty, {
      sortAscending: !sortProperty.sortAscending
    });

    setSortColumn(newSortProperty);
  };
}

function getSortIconProps(props) {
  var sortProperty = props.sortProperty,
      sortAscendingIcon = props.sortAscendingIcon,
      sortDescendingIcon = props.sortDescendingIcon;
  var sortAscendingClassName = props.sortAscendingClassName,
      sortDescendingClassName = props.sortDescendingClassName;


  if (sortProperty) {
    return sortProperty.sortAscending ? {
      icon: sortAscendingIcon,
      iconClassName: sortAscendingClassName
    } : {
      icon: sortDescendingIcon,
      iconClassName: sortDescendingClassName
    };
  }

  // return null so we don't render anything if no sortProperty
  return null;
}

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.components = undefined;

var _PageSizeSettings = __webpack_require__(1378);

var _PageSizeSettings2 = _interopRequireDefault(_PageSizeSettings);

var _ColumnChooser = __webpack_require__(1380);

var _ColumnChooser2 = _interopRequireDefault(_ColumnChooser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = exports.components = {
  pageSizeSettings: _PageSizeSettings2.default,
  columnChooser: _ColumnChooser2.default
};

exports.default = {
  pageSizeSettings: { order: 1 },
  columnChooser: { order: 2 }
};

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getIncrementer = getIncrementer;
exports.transformData = transformData;
exports.getVisibleDataForColumns = getVisibleDataForColumns;
exports.hasColumnProperties = hasColumnProperties;
exports.hasData = hasData;
exports.addColumnPropertiesWhenNoneExist = addColumnPropertiesWhenNoneExist;

var _immutable = __webpack_require__(541);

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//From Immutable docs - https://github.com/facebook/immutable-js/wiki/Predicates
function keyInArray(keys) {
  var keySet = _immutable2.default.Set(keys);
  return function (v, k) {

    return keySet.has(k);
  };
}

function getIncrementer(startIndex) {
  var key = startIndex;
  return function () {
    return key++;
  };
}

function isImmutableConvertibleValue(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || value === null || value instanceof Date;
}

// From https://github.com/facebook/immutable-js/wiki/Converting-from-JS-objects#custom-conversion
function fromJSGreedy(js) {
  return isImmutableConvertibleValue(js) ? js : Array.isArray(js) ? _immutable2.default.Seq(js).map(fromJSGreedy).toList() : _immutable2.default.Seq(js).map(fromJSGreedy).toMap();
}

function transformData(data, renderProperties) {
  if (!data) {
    return {};
  }

  var hasCustomRowId = renderProperties.rowProperties && renderProperties.rowProperties.rowKey;

  // Validate that the first item in our data has the custom Griddle key
  if (hasCustomRowId && data.length > 0 && !data[0].hasOwnProperty(renderProperties.rowProperties.rowKey)) {
    throw new Error('Griddle: Property \'' + renderProperties.rowProperties.rowKey + '\' doesn\'t exist in row data. Please specify a rowKey that exists in <RowDefinition>');
  }

  var list = [];
  var lookup = {};

  data.forEach(function (rowData, index) {
    var map = fromJSGreedy(rowData);

    // if this has a row key use that -- otherwise use Griddle key
    var key = hasCustomRowId ? rowData[renderProperties.rowProperties.rowKey] : index;

    // if our map object already has griddleKey use that -- otherwise add key as griddleKey
    var keyedData = map.has('griddleKey') ? map : map.set('griddleKey', key);

    list.push(keyedData);
    lookup[key] = index;
  });

  return {
    data: new _immutable2.default.List(list),
    lookup: new _immutable2.default.Map(lookup)
  };
}

/** Gets the visible data based on columns
 *  @param (List<Map>) data - data collection
 *  @param (array<string>) columns - list of columns to display
 *
 *  TODO: Needs tests
 */
function getVisibleDataForColumns(data, columns) {
  if (data.size < 1) {
    return data;
  }

  var dataColumns = data.get(0).keySeq().toArray();

  var metadataColumns = dataColumns.filter(function (item) {
    return columns.indexOf(item) < 0;
  });

  //if columns are specified but aren't in the data
  //make it up (as null). We will append this column
  //to the resultant data
  var magicColumns = columns.filter(function (item) {
    return dataColumns.indexOf(item) < 0;
  }).reduce(function (original, item) {
    original[item] = null;return original;
  }, {});
  //combine the metadata and the "magic" columns
  var extra = data.map(function (d, i) {
    return new _immutable2.default.Map(Object.assign(magicColumns));
  });

  var result = data.map(function (d) {
    return d.filter(keyInArray(columns));
  });

  return result.mergeDeep(extra).map(function (item) {
    return item.sortBy(function (val, key) {
      return columns.indexOf(key) > -1 ? columns.indexOf(key) : MAX_SAFE_INTEGER;
    });
  });
}

/* TODO: Add documentation and tests for this whole section!*/

/** Does this initial state object have column properties?
 * @param (object) stateObject - a non-immutable state object for initialization
 *
 * TODO: Needs tests
 */
function hasColumnProperties(stateObject) {
  return stateObject.hasOwnProperty('renderProperties') && stateObject.renderProperties.hasOwnProperty('columnProperties') && Object.keys(stateObject.renderProperties.columnProperties).length > 0;
}

/** Does this initial state object have data?
 * @param (object) stateObject - a non-immutable state object for initialization
 */
function hasData(stateObject) {
  return !!stateObject.data && stateObject.data.length > 0;
}

/** Gets a new state object (not immutable) that has columnProperties if none exist
 * @param (object) stateObject - a non-immutable state object for initialization
 *
 * TODO: Needs tests
 */
function addColumnPropertiesWhenNoneExist(stateObject) {
  if (!hasData(stateObject) || hasColumnProperties(stateObject)) {
    return stateObject;
  }

  return _extends({}, stateObject, {
    renderProperties: {
      columnProperties: Object.keys(stateObject.data[0]).reduce(function (previous, current) {
        previous[current] = { id: current, visible: true };

        return previous;
      }, {})
    }
  });
}

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(607),
    baseSet = __webpack_require__(1309),
    castPath = __webpack_require__(568);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(571),
    eq = __webpack_require__(546);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _components = __webpack_require__(752);

var _components2 = _interopRequireDefault(_components);

var _dataReducer = __webpack_require__(769);

var reducer = _interopRequireWildcard(_dataReducer);

var _dataSelectors = __webpack_require__(389);

var selectors = _interopRequireWildcard(_dataSelectors);

var _actions = __webpack_require__(393);

var actions = _interopRequireWildcard(_actions);

var _settingsComponentObjects = __webpack_require__(664);

var _settingsComponentObjects2 = _interopRequireDefault(_settingsComponentObjects);

var _initialState = __webpack_require__(1394);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CorePlugin = _extends({
  components: _components2.default,
  settingsComponentObjects: _settingsComponentObjects2.default,
  reducer: reducer,
  selectors: selectors,
  actions: actions
}, _initialState2.default);

exports.default = CorePlugin;

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Cell = __webpack_require__(1321);

var _Cell2 = _interopRequireDefault(_Cell);

var _CellContainer = __webpack_require__(1322);

var _CellContainer2 = _interopRequireDefault(_CellContainer);

var _ColumnDefinition = __webpack_require__(1339);

var _ColumnDefinition2 = _interopRequireDefault(_ColumnDefinition);

var _Row = __webpack_require__(1340);

var _Row2 = _interopRequireDefault(_Row);

var _RowContainer = __webpack_require__(1341);

var _RowContainer2 = _interopRequireDefault(_RowContainer);

var _RowDefinition = __webpack_require__(1342);

var _RowDefinition2 = _interopRequireDefault(_RowDefinition);

var _Table = __webpack_require__(1343);

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = __webpack_require__(1344);

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableBodyContainer = __webpack_require__(1345);

var _TableBodyContainer2 = _interopRequireDefault(_TableBodyContainer);

var _TableHeading = __webpack_require__(1346);

var _TableHeading2 = _interopRequireDefault(_TableHeading);

var _TableHeadingContainer = __webpack_require__(1347);

var _TableHeadingContainer2 = _interopRequireDefault(_TableHeadingContainer);

var _TableHeadingCell = __webpack_require__(1348);

var _TableHeadingCell2 = _interopRequireDefault(_TableHeadingCell);

var _TableHeadingCellContainer = __webpack_require__(759);

var _TableHeadingCellContainer2 = _interopRequireDefault(_TableHeadingCellContainer);

var _TableHeadingCellEnhancer = __webpack_require__(1363);

var _TableHeadingCellEnhancer2 = _interopRequireDefault(_TableHeadingCellEnhancer);

var _TableContainer = __webpack_require__(1364);

var _TableContainer2 = _interopRequireDefault(_TableContainer);

var _Layout = __webpack_require__(1365);

var _Layout2 = _interopRequireDefault(_Layout);

var _LayoutContainer = __webpack_require__(1366);

var _LayoutContainer2 = _interopRequireDefault(_LayoutContainer);

var _Pagination = __webpack_require__(1367);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _PaginationContainer = __webpack_require__(1368);

var _PaginationContainer2 = _interopRequireDefault(_PaginationContainer);

var _Filter = __webpack_require__(1369);

var _Filter2 = _interopRequireDefault(_Filter);

var _FilterEnhancer = __webpack_require__(1370);

var _FilterEnhancer2 = _interopRequireDefault(_FilterEnhancer);

var _FilterContainer = __webpack_require__(1371);

var _FilterContainer2 = _interopRequireDefault(_FilterContainer);

var _SettingsToggle = __webpack_require__(1372);

var _SettingsToggle2 = _interopRequireDefault(_SettingsToggle);

var _SettingsToggleContainer = __webpack_require__(1373);

var _SettingsToggleContainer2 = _interopRequireDefault(_SettingsToggleContainer);

var _SettingsWrapper = __webpack_require__(1374);

var _SettingsWrapper2 = _interopRequireDefault(_SettingsWrapper);

var _SettingsWrapperContainer = __webpack_require__(1375);

var _SettingsWrapperContainer2 = _interopRequireDefault(_SettingsWrapperContainer);

var _Settings = __webpack_require__(1376);

var _Settings2 = _interopRequireDefault(_Settings);

var _SettingsContainer = __webpack_require__(1377);

var _SettingsContainer2 = _interopRequireDefault(_SettingsContainer);

var _settingsComponentObjects = __webpack_require__(664);

var _NextButton = __webpack_require__(1381);

var _NextButton2 = _interopRequireDefault(_NextButton);

var _NextButtonEnhancer = __webpack_require__(1382);

var _NextButtonEnhancer2 = _interopRequireDefault(_NextButtonEnhancer);

var _NextButtonContainer = __webpack_require__(1383);

var _NextButtonContainer2 = _interopRequireDefault(_NextButtonContainer);

var _Loading = __webpack_require__(1384);

var _Loading2 = _interopRequireDefault(_Loading);

var _LoadingContainer = __webpack_require__(1385);

var _LoadingContainer2 = _interopRequireDefault(_LoadingContainer);

var _NoResults = __webpack_require__(1386);

var _NoResults2 = _interopRequireDefault(_NoResults);

var _NoResultsContainer = __webpack_require__(1387);

var _NoResultsContainer2 = _interopRequireDefault(_NoResultsContainer);

var _PreviousButton = __webpack_require__(1388);

var _PreviousButton2 = _interopRequireDefault(_PreviousButton);

var _PreviousButtonEnhancer = __webpack_require__(1389);

var _PreviousButtonEnhancer2 = _interopRequireDefault(_PreviousButtonEnhancer);

var _PreviousButtonContainer = __webpack_require__(1390);

var _PreviousButtonContainer2 = _interopRequireDefault(_PreviousButtonContainer);

var _PageDropdown = __webpack_require__(1391);

var _PageDropdown2 = _interopRequireDefault(_PageDropdown);

var _PageDropdownContainer = __webpack_require__(1392);

var _PageDropdownContainer2 = _interopRequireDefault(_PageDropdownContainer);

var _PageDropdownEnhancer = __webpack_require__(1393);

var _PageDropdownEnhancer2 = _interopRequireDefault(_PageDropdownEnhancer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = {
  Cell: _Cell2.default,
  CellContainer: _CellContainer2.default,
  ColumnDefinition: _ColumnDefinition2.default,
  Row: _Row2.default,
  RowContainer: _RowContainer2.default,
  RowDefinition: _RowDefinition2.default,
  Table: _Table2.default,
  TableBody: _TableBody2.default,
  TableBodyContainer: _TableBodyContainer2.default,
  TableHeading: _TableHeading2.default,
  TableHeadingContainer: _TableHeadingContainer2.default,
  TableHeadingCell: _TableHeadingCell2.default,
  TableHeadingCellContainer: _TableHeadingCellContainer2.default,
  TableHeadingCellEnhancer: _TableHeadingCellEnhancer2.default,
  TableContainer: _TableContainer2.default,
  Layout: _Layout2.default,
  LayoutContainer: _LayoutContainer2.default,
  NextButton: _NextButton2.default,
  NextButtonEnhancer: _NextButtonEnhancer2.default,
  NextButtonContainer: _NextButtonContainer2.default,
  Loading: _Loading2.default,
  LoadingContainer: _LoadingContainer2.default,
  NoResults: _NoResults2.default,
  NoResultsContainer: _NoResultsContainer2.default,
  PageDropdown: _PageDropdown2.default,
  PageDropdownContainer: _PageDropdownContainer2.default,
  PageDropdownEnhancer: _PageDropdownEnhancer2.default,
  Pagination: _Pagination2.default,
  PaginationContainer: _PaginationContainer2.default,
  PreviousButton: _PreviousButton2.default,
  PreviousButtonEnhancer: _PreviousButtonEnhancer2.default,
  PreviousButtonContainer: _PreviousButtonContainer2.default,
  Filter: _Filter2.default,
  FilterEnhancer: _FilterEnhancer2.default,
  FilterContainer: _FilterContainer2.default,
  SettingsToggle: _SettingsToggle2.default,
  SettingsToggleContainer: _SettingsToggleContainer2.default,
  SettingsWrapper: _SettingsWrapper2.default,
  SettingsWrapperContainer: _SettingsWrapperContainer2.default,
  Settings: _Settings2.default,
  SettingsContainer: _SettingsContainer2.default,
  SettingsComponents: _settingsComponentObjects.components,
  Style: function Style() {
    return null;
  }
};

exports.default = components;

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(570),
    overRest = __webpack_require__(754),
    setToString = __webpack_require__(755);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(1328);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(1329),
    shortOut = __webpack_require__(1331);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(680),
    arrayIncludes = __webpack_require__(1332),
    arrayIncludesWith = __webpack_require__(1336),
    cacheHas = __webpack_require__(681),
    createSet = __webpack_require__(1337),
    setToArray = __webpack_require__(601);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 757:
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(533),
    isObjectLike = __webpack_require__(520);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _withHandlers = __webpack_require__(594);

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _dataSelectors = __webpack_require__(389);

var _actions = __webpack_require__(393);

var _compositionUtils = __webpack_require__(531);

var _sortUtils = __webpack_require__(663);

var _valueUtils = __webpack_require__(593);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultTableHeadingCellContent = function DefaultTableHeadingCellContent(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName;
  return _react2.default.createElement(
    'span',
    null,
    title,
    icon && _react2.default.createElement(
      'span',
      { className: iconClassName },
      icon
    )
  );
};

var EnhancedHeadingCell = function EnhancedHeadingCell(OriginalComponent) {
  return (0, _compose2.default)((0, _getContext2.default)({
    events: _propTypes2.default.object,
    selectors: _propTypes2.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return _extends({
      sortProperty: (0, _dataSelectors.sortPropertyByIdSelector)(state, props),
      customHeadingComponent: (0, _dataSelectors.customHeadingComponentSelector)(state, props),
      cellProperties: (0, _dataSelectors.cellPropertiesSelector)(state, props),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'TableHeadingCell'),
      sortAscendingClassName: (0, _dataSelectors.classNamesForComponentSelector)(state, 'TableHeadingCellAscending'),
      sortDescendingClassName: (0, _dataSelectors.classNamesForComponentSelector)(state, 'TableHeadingCellDescending'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'TableHeadingCell')
    }, (0, _dataSelectors.iconsForComponentSelector)(state, 'TableHeadingCell'));
  }, function (dispatch, _ref2) {
    var onSort = _ref2.events.onSort;
    return {
      setSortColumn: (0, _compositionUtils.combineHandlers)([onSort, (0, _compose2.default)(dispatch, _actions.setSortColumn)])
    };
  }), (0, _withHandlers2.default)(function (props) {
    return {
      onClick: props.cellProperties.sortable === false ? function () {
        return function () {};
      } : props.events.setSortProperties || _sortUtils.setSortProperties
    };
  }),
  //TODO: use with props on change or something more performant here
  (0, _mapProps2.default)(function (props) {
    var iconProps = (0, _sortUtils.getSortIconProps)(props);
    var title = props.customHeadingComponent ? _react2.default.createElement(props.customHeadingComponent, _extends({}, props.cellProperties.extraData, props, iconProps)) : _react2.default.createElement(DefaultTableHeadingCellContent, _extends({ title: props.title }, iconProps));
    var className = (0, _valueUtils.valueOrResult)(props.cellProperties.headerCssClassName, props) || props.className;
    var style = _extends({}, props.cellProperties.sortable === false || { cursor: 'pointer' }, props.style);

    return _extends({}, props.cellProperties.extraData, props, iconProps, {
      title: title,
      style: style,
      className: className
    });
  }))(function (props) {
    return _react2.default.createElement(OriginalComponent, props);
  });
};

exports.default = EnhancedHeadingCell;

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GRIDDLE_SET_FILTER = exports.GRIDDLE_SET_FILTER = 'GRIDDLE_SET_FILTER';
var GRIDDLE_SET_FILTER_BY_COLUMN = exports.GRIDDLE_SET_FILTER_BY_COLUMN = 'GRIDDLE_SET_FILTER_BY_COLUMN';
var GRIDDLE_SET_PAGE = exports.GRIDDLE_SET_PAGE = 'GRIDDLE_SET_PAGE';
var GRIDDLE_FILTER_REMOVED = exports.GRIDDLE_FILTER_REMOVED = 'GRIDDLE_FILTER_REMOVED';
var GRIDDLE_SET_SORT = exports.GRIDDLE_SET_SORT = 'GRIDDLE_SET_SORT';
var GRIDDLE_LOAD_DATA = exports.GRIDDLE_LOAD_DATA = 'GRIDDLE_LOAD_DATA';
var GRIDDLE_LOADED_DATA = exports.GRIDDLE_LOADED_DATA = 'GRIDDLE_LOADED_DATA';
var GRIDDLE_NEXT_PAGE = exports.GRIDDLE_NEXT_PAGE = 'GRIDDLE_NEXT_PAGE';
var GRIDDLE_PREVIOUS_PAGE = exports.GRIDDLE_PREVIOUS_PAGE = 'GRIDDLE_PREVIOUS_PAGE';
var GRIDDLE_GET_PAGE = exports.GRIDDLE_GET_PAGE = 'GRIDDLE_GET_PAGE';
var GRIDDLE_PAGE_LOADED = exports.GRIDDLE_PAGE_LOADED = 'GRIDDLE_PAGE_LOADED';
var GRIDDLE_SET_PAGE_SIZE = exports.GRIDDLE_SET_PAGE_SIZE = 'GRIDDLE_SET_PAGE_SIZE';
var GRIDDLE_INITIALIZE = exports.GRIDDLE_INITIALIZE = 'GRIDDLE_INITIALIZE';
var GRIDDLE_INITIALIZED = exports.GRIDDLE_INITIALIZED = 'GRIDDLE_INITIALIZED';
var GRIDDLE_REMOVED = exports.GRIDDLE_REMOVED = 'GRIDDLE_REMOVED';
var GRIDDLE_TOGGLE_COLUMN = exports.GRIDDLE_TOGGLE_COLUMN = 'GRIDDLE_TOGGLE_COLUMN';
var GRIDDLE_ROW_TOGGLED = exports.GRIDDLE_ROW_TOGGLED = 'GRIDDLE_ROW_TOGGLED';
var GRIDDLE_ROW_SELECTION_TOGGLED = exports.GRIDDLE_ROW_SELECTION_TOGGLED = 'GRIDDLE_ROW_SELECTION_TOGGLED';
var GRIDDLE_TOGGLE_SETTINGS = exports.GRIDDLE_TOGGLE_SETTINGS = 'GRIDDLE_TOGGLE_SETTINGS';
var GRIDDLE_UPDATE_STATE = exports.GRIDDLE_UPDATE_STATE = 'GRIDDLE_UPDATE_STATE';

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

var LodashWrapper = __webpack_require__(659),
    flatRest = __webpack_require__(762),
    getData = __webpack_require__(764),
    getFuncName = __webpack_require__(765),
    isArray = __webpack_require__(390),
    isLaziable = __webpack_require__(1352);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return flatRest(function(funcs) {
    var length = funcs.length,
        index = length,
        prereq = LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
        var wrapper = new LodashWrapper([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];

      var funcName = getFuncName(func),
          data = funcName == 'wrapper' ? getData(func) : undefined;

      if (data && isLaziable(data[0]) &&
            data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
            !data[4].length && data[9] == 1
          ) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = (func.length == 1 && isLaziable(func))
          ? wrapper[funcName]()
          : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 && isArray(value)) {
        return wrapper.plant(value).value();
      }
      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

module.exports = createFlow;


/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(763),
    overRest = __webpack_require__(754),
    setToString = __webpack_require__(755);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(657);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(1350),
    noop = __webpack_require__(757);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(1351);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),

/***/ 766:
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(750),
    baseAssignValue = __webpack_require__(571);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(753),
    isIterateeCall = __webpack_require__(1362);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRIDDLE_INITIALIZED = GRIDDLE_INITIALIZED;
exports.GRIDDLE_LOADED_DATA = GRIDDLE_LOADED_DATA;
exports.GRIDDLE_SET_PAGE_SIZE = GRIDDLE_SET_PAGE_SIZE;
exports.GRIDDLE_SET_PAGE = GRIDDLE_SET_PAGE;
exports.GRIDDLE_SET_FILTER = GRIDDLE_SET_FILTER;
exports.GRIDDLE_SET_SORT = GRIDDLE_SET_SORT;
exports.GRIDDLE_TOGGLE_SETTINGS = GRIDDLE_TOGGLE_SETTINGS;
exports.GRIDDLE_TOGGLE_COLUMN = GRIDDLE_TOGGLE_COLUMN;
exports.GRIDDLE_UPDATE_STATE = GRIDDLE_UPDATE_STATE;

var _immutable = __webpack_require__(541);

var _immutable2 = _interopRequireDefault(_immutable);

var _dataUtils = __webpack_require__(665);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
 * State
 * ------------------
 *  data {Immutable.List} - the data that the grid is displaying
 *  loading {boolean} - is the data currently loading
 *  renderProperties {Immutable.Map} - the properties that determine how the grid should be displayed
 *  pageProperties {Immutable.Map} - the metadata for paging information
 *  .-- currentPage {int} - The current, visible page
 *  .-- pageSize {int} - The number of records to display
 *  sortProperties {Immutable.List} - the metadata surrounding sort
 *  .-- id {string} - the column id
 *  .-- sortAscending {boolean} - the direction of the sort. Index matches that of sortColumns
 **/


function isColumnVisible(state, columnId) {
  var hasRenderProperty = state.getIn(['renderProperties', 'columnProperties', columnId]);
  var currentlyVisibleProperty = state.getIn(['renderProperties', 'columnProperties', columnId, 'visible']);

  // if there is a render property and visible is not set, visible is true
  if (hasRenderProperty && currentlyVisibleProperty === undefined) {
    return true;
  }

  // if there is no render property currently and visible is not set
  if (!hasRenderProperty && currentlyVisibleProperty === undefined) {
    return false;
  }

  return currentlyVisibleProperty;
}

/** Sets the default render properties
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
 *
 * TODO: Consider renaming this to be more in line with what it's actually doing (setting render properties)
*/
function GRIDDLE_INITIALIZED(initialState) {
  var tempState = Object.assign({}, initialState);
  tempState = (0, _dataUtils.addColumnPropertiesWhenNoneExist)(tempState);
  //TODO: could probably make this more efficient by removing data
  // making the rest of the properties initial state and
  // setting the mapped data on the new initial state immutable object
  if (initialState.data && initialState.data.length > 0) {
    var transformedData = (0, _dataUtils.transformData)(initialState.data, initialState.renderProperties);
    tempState.data = transformedData.data;
    tempState.lookup = transformedData.lookup;
  }

  return _immutable2.default.fromJS(tempState);
}

/** Sets the griddle data
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
*/
function GRIDDLE_LOADED_DATA(state, action) {
  var transformedData = (0, _dataUtils.transformData)(action.data, state.get('renderProperties').toJSON());

  return state.set('data', transformedData.data).set('lookup', transformedData.lookup).set('loading', false);
}

/** Sets the current page size
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
*/
function GRIDDLE_SET_PAGE_SIZE(state, action) {
  return state.setIn(['pageProperties', 'currentPage'], 1).setIn(['pageProperties', 'pageSize'], action.pageSize);
}

/** Sets the current page
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
*/
function GRIDDLE_SET_PAGE(state, action) {
  return state.setIn(['pageProperties', 'currentPage'], action.pageNumber);
}

/** Sets the filter
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
*/
function GRIDDLE_SET_FILTER(state, action) {
  return state.set('filter', action.filter);
}

/** Sets sort properties
 * @param {Immutable} state- Immutable previous state object
 * @param {Object} action - The action object to work with
*/
function GRIDDLE_SET_SORT(state, action) {
  // turn this into an array if it's not already
  var sortProperties = action.sortProperties.hasOwnProperty('length') ? action.sortProperties : [action.sortProperties];

  return state.set('sortProperties', new _immutable2.default.fromJS(sortProperties));
}

/** Sets the settings visibility to true / false depending on the current property
 */
function GRIDDLE_TOGGLE_SETTINGS(state, action) {
  // if undefined treat as if it's false
  var showSettings = state.get('showSettings') || false;

  return state.set('showSettings', !showSettings);
}

function GRIDDLE_TOGGLE_COLUMN(state, action) {
  // flips the visible state if the column property exists
  var currentlyVisible = isColumnVisible(state, action.columnId);

  return state.getIn(['renderProperties', 'columnProperties', action.columnId]) ? state.setIn(['renderProperties', 'columnProperties', action.columnId, 'visible'], !currentlyVisible) :

  // if the columnProperty doesn't exist, create a new one and set the property to true
  state.setIn(['renderProperties', 'columnProperties', action.columnId], new _immutable2.default.Map({ id: action.columnId, visible: true }));
}

var defaultRenderProperties = _immutable2.default.fromJS({});
function GRIDDLE_UPDATE_STATE(state, action) {
  var _action$newState = action.newState,
      data = _action$newState.data,
      newState = _objectWithoutProperties(_action$newState, ['data']);

  var mergedState = state.mergeDeep(_immutable2.default.fromJS(newState));
  if (!data) {
    return mergedState;
  }

  var renderProperties = state.get('renderProperties', defaultRenderProperties).toJSON();
  var transformedData = (0, _dataUtils.transformData)(data, renderProperties);

  return mergedState.set('data', transformedData.data).set('lookup', transformedData.lookup);
}

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(571),
    eq = __webpack_require__(546);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getColumnProperties = getColumnProperties;
var offset = 1000;

/** Gets a column properties object from an array of columnNames
 * @param {Array<string>} columns - array of column names
 */
function getColumnPropertiesFromColumnArray(columnProperties, columns) {
  return columns.reduce(function (previous, current, i) {
    previous[current] = { id: current, order: offset + i };
    return previous;
  }, columnProperties);
}

/** Gets the column properties object from a react component (rowProperties) that contains child component(s) for columnProperties.
 *    If no properties are found, it will work return a column properties object based on the all columns array
 * @param {Object} rowProperties - An React component that contains the rowProperties and child columnProperties components
 * @param {Array<string> optional} allColumns - An optional array of colummn names. This will be used to generate the columnProperties when they are not defined in rowProperties
 */
function getColumnProperties(rowProperties) {
  var allColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var children = rowProperties && rowProperties.props && rowProperties.props.children;
  var columnProperties = {};

  // Working against an array of columnProperties
  if (Array.isArray(children)) {
    // build one object that contains all of the column properties keyed by id
    children.reduce(function (previous, current, i) {
      if (current) {
        previous[current.props.id] = _extends({ order: offset + i }, current.props);
      }
      return previous;
    }, columnProperties);

    // Working against a lone, columnProperties object
  } else if (children && children.props) {
    columnProperties[children.props.id] = _extends({ order: offset }, children.props);
  }

  if (Object.keys(columnProperties).length === 0 && allColumns) {
    getColumnPropertiesFromColumnArray(columnProperties, allColumns);
  }

  return columnProperties;
}

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRowProperties = getRowProperties;
/** Gets a row properties object from a rowProperties component
 * @param {Object} rowPropertiesComponent - A react component that contains rowProperties as props
*/
function getRowProperties(rowPropertiesComponent) {
    if (!rowPropertiesComponent) return null;

    var rowProps = Object.assign({}, rowPropertiesComponent.props);
    delete rowProps.children;

    if (!rowProps.hasOwnProperty('childColumnName')) {
        rowProps.childColumnName = 'children';
    }

    return rowProps;
}

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleConnect = __webpack_require__(384);

var _compose = __webpack_require__(386);

var _compose2 = _interopRequireDefault(_compose);

var _mapProps = __webpack_require__(388);

var _mapProps2 = _interopRequireDefault(_mapProps);

var _getContext = __webpack_require__(387);

var _getContext2 = _interopRequireDefault(_getContext);

var _withHandlers = __webpack_require__(594);

var _withHandlers2 = _interopRequireDefault(_withHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var spacerRow = (0, _compose2.default)((0, _getContext2.default)({
  selectors: _propTypes2.default.object
}), (0, _griddleConnect.connect)(function (state, props) {
  var _props$selectors = props.selectors,
      topSpacerSelector = _props$selectors.topSpacerSelector,
      bottomSpacerSelector = _props$selectors.bottomSpacerSelector;
  var placement = props.placement;


  return {
    spacerHeight: placement === 'top' ? topSpacerSelector(state, props) : bottomSpacerSelector(state, props)
  };
}), (0, _mapProps2.default)(function (props) {
  return {
    placement: props.placement,
    spacerHeight: props.spacerHeight
  };
}))((_temp = _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',


    // shouldComponentUpdate(nextProps) {
    //   const { currentPosition: oldPosition, placement: oldPlacement } = this.props;
    //   const { currentPosition, placement } = nextProps;
    //
    //   return oldPosition !== currentPosition || oldPlacement !== placement;
    // }

    value: function render() {
      var _props = this.props,
          placement = _props.placement,
          spacerHeight = _props.spacerHeight;

      var spacerRowStyle = {
        height: spacerHeight + 'px'
      };

      return _react2.default.createElement('tr', { key: placement + '-' + spacerHeight, style: spacerRowStyle });
    }
  }]);

  return _class;
}(_react.Component), _class.propTypes = {
  placement: _propTypes2.default.string,
  spacerHeight: _propTypes2.default.number
}, _class.defaultProps = {
  placement: 'top' }, _temp));

exports.default = spacerRow;

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = {
  renderedData: [],
  currentPosition: {
    height: 500,
    width: 500,
    xScrollChangePosition: 0,
    yScrollChangePosition: 0,
    renderedStartDisplayIndex: 0,
    renderedEndDisplayIndex: 16,
    visibleDataLength: 16
  },
  positionSettings: {
    // The height of the table
    tableHeight: '70%',
    // The width of the table
    tableWidth: null,
    // The minimum row height
    rowHeight: 30,
    // The minimum column width
    defaultColumnWidth: null,
    // Whether or not the header should be fixed
    fixedHeader: true,
    // Disable pointer events while scrolling to improve performance
    disablePointerEvents: false
  }
};

exports.default = initialState;

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(2);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/PropTypes.js


var subscriptionShape = prop_types_default.a.shape({
  trySubscribe: prop_types_default.a.func.isRequired,
  tryUnsubscribe: prop_types_default.a.func.isRequired,
  notifyNestedSubs: prop_types_default.a.func.isRequired,
  isSubscribed: prop_types_default.a.func.isRequired
});

var storeShape = prop_types_default.a.shape({
  subscribe: prop_types_default.a.func.isRequired,
  dispatch: prop_types_default.a.func.isRequired,
  getState: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return react["Children"].only(this.props.children);
    };

    return Provider;
  }(react["Component"]);

  if (false) {}

  Provider.propTypes = {
    store: storeShape.isRequired,
    children: prop_types_default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);

  return Provider;
}

/* harmony default export */ var components_Provider = (createProvider());
// EXTERNAL MODULE: ./node_modules/react-redux/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(1319);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(81);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
function Subscription_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    Subscription_classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function connectAdvanced_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function connectAdvanced_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function connectAdvanced_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    browser_default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      connectAdvanced_inherits(Connect, _Component);

      function Connect(props, context) {
        connectAdvanced_classCallCheck(this, Connect);

        var _this = connectAdvanced_possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        browser_default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        browser_default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(react["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(react["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {}

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/redux/es/index.js + 15 modules
var es = __webpack_require__(781);

// EXTERNAL MODULE: ./node_modules/react-redux/node_modules/lodash-es/_freeGlobal.js
var _freeGlobal = __webpack_require__(1320);

// CONCATENATED MODULE: ./node_modules/react-redux/node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ var _root = (root);

// CONCATENATED MODULE: ./node_modules/react-redux/node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ var _Symbol = (Symbol);

// CONCATENATED MODULE: ./node_modules/react-redux/node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/react-redux/node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/react-redux/node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ./node_modules/react-redux/node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: ./node_modules/react-redux/node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: ./node_modules/react-redux/node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ./node_modules/react-redux/node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js



function verifyPlainObject(value, displayName, methodName) {
  if (!lodash_es_isPlainObject(value)) {
    warning(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}

      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return Object(es["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js
var mergeProps_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return mergeProps_extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) {}
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      warning('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js
function selectorFactory_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = selectorFactory_objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js
var connect_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function connect_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? shallowEqual : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? shallowEqual : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? shallowEqual : _ref2$areMergedPropsE,
        extraOptions = connect_objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, connect_extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ var connect_connect = (createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js
/* concated harmony reexport Provider */__webpack_require__.d(__webpack_exports__, "Provider", function() { return components_Provider; });
/* concated harmony reexport createProvider */__webpack_require__.d(__webpack_exports__, "createProvider", function() { return createProvider; });
/* concated harmony reexport connectAdvanced */__webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return connectAdvanced; });
/* concated harmony reexport connect */__webpack_require__.d(__webpack_exports__, "connect", function() { return connect_connect; });






/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/lodash-es/_freeGlobal.js
var _freeGlobal = __webpack_require__(1318);

// CONCATENATED MODULE: ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ var _root = (root);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ var _Symbol = (Symbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(1316);

// CONCATENATED MODULE: ./node_modules/redux/es/createStore.js



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore_createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore_createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!lodash_es_isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}
// CONCATENATED MODULE: ./node_modules/redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
// CONCATENATED MODULE: ./node_modules/redux/es/combineReducers.js




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!lodash_es_isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {}

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
// CONCATENATED MODULE: ./node_modules/redux/es/bindActionCreators.js
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
// CONCATENATED MODULE: ./node_modules/redux/es/compose.js
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
// CONCATENATED MODULE: ./node_modules/redux/es/applyMiddleware.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
// CONCATENATED MODULE: ./node_modules/redux/es/index.js
/* concated harmony reexport createStore */__webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore_createStore; });
/* concated harmony reexport combineReducers */__webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* concated harmony reexport bindActionCreators */__webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* concated harmony reexport applyMiddleware */__webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* concated harmony reexport compose */__webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {}



/***/ })

}]);
//# sourceMappingURL=vendors~ud-grid.98b6e0fc72b16353d581.bundle.map