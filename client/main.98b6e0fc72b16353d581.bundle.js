/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"0":"vendors~ud-chart~ud-date-time~ud-grid~ud-monitor","1":"vendors~ud-chart~ud-grid~ud-monitor","2":"vendors~ud-chart~ud-monitor","4":"ud-card","5":"ud-chart","6":"ud-monitor","7":"ud-tree-view","8":"ud-input","9":"ud-counter","10":"ud-html","11":"ud-grid","12":"ud-date-time","13":"ud-element","14":"ud-image-carousel","15":"ud-terminal","16":"ud-loading","17":"ud-page-cycler","18":"ud-modal","20":"vendors~ud-tree-view","21":"vendors~ud-grid","22":"vendors~ud-card","23":"vendors~ud-terminal","24":"vendors~font-awesome","25":"vendors~line-awesome","26":"vendors~ud-counter"}[chunkId]||chunkId) + "." + "98b6e0fc72b16353d581" + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([381,19]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchPostRaw; });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);

var fetchGet = function fetchGet(url, success, history) {
  fetch(Object(config__WEBPACK_IMPORTED_MODULE_0__[/* getApiPath */ "a"])() + url, {
    credentials: 'include'
  }).then(function (response) {
    if (response.status === 401 && history) {
      history.push("/login");
      throw new Error('Redirecting to login');
    } else if (response.status === 200) {
      response.text().then(function (text) {
        try {
          return JSON.parse(text);
        } catch (_unused) {
          return text;
        }
      }).then(success);
    } else {
      throw new Error(response.statusText);
    }
  }).catch(function (e) {
    console.log(e);
  });
};
var fetchPost = function fetchPost(url, data, success) {
  if (!success) {
    success = function success() {};
  }

  fetch(Object(config__WEBPACK_IMPORTED_MODULE_0__[/* getApiPath */ "a"])() + url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'include'
  }).then(function (response) {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }).then(success).catch(function (e) {
    console.log(e);
  });
};
var fetchPostRaw = function fetchPostRaw(url, data, success) {
  if (!success) {
    success = function success() {};
  }

  fetch(Object(config__WEBPACK_IMPORTED_MODULE_0__[/* getApiPath */ "a"])() + url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'text/plain'
    },
    body: data,
    credentials: 'include'
  }).then(function (response) {
    if (response.status === 200) {
      return response.text();
    } else {
      throw new Error(response.statusText);
    }
  }).then(success).catch(function (e) {
    console.log(e);
  });
};

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p =  document.getElementsByTagName('base')[0].href;
window.baseUrl =  document.getElementsByTagName('base')[0].href.replace(window.location.origin, "").replace(/\/$/, "");;

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ud_icon_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ErrorCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorCard, _React$Component);

  function ErrorCard() {
    _classCallCheck(this, ErrorCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorCard).apply(this, arguments));
  }

  _createClass(ErrorCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        title: this.props.title,
        id: this.props.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        s: 12,
        className: "black-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ud_icon_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: "exclamation-triangle",
        style: {
          color: 'red'
        }
      }), " ", this.props.message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, this.props.location))));
    }
  }]);

  return ErrorCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/app/public-path.js
var public_path = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/@babel/polyfill/lib/index.js
var lib = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/materialize-css/dist/js/materialize.js
var materialize = __webpack_require__(327);

// EXTERNAL MODULE: ./node_modules/whatwg-fetch/fetch.js
var fetch = __webpack_require__(330);

// EXTERNAL MODULE: ./node_modules/promise-polyfill/promise.js
var promise = __webpack_require__(151);
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./src/app/services/fetch-service.jsx
var fetch_service = __webpack_require__(14);

// EXTERNAL MODULE: ./src/app/services/render-service.jsx + 2 modules
var render_service = __webpack_require__(58);

// EXTERNAL MODULE: ./src/app/production.jsx
var production = __webpack_require__(45);

// CONCATENATED MODULE: ./src/app/basics/lazy-element.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var lazy_element_LazyElement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LazyElement, _React$Component);

  function LazyElement() {
    var _this;

    _classCallCheck(this, LazyElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LazyElement).call(this));
    _this.state = {
      loading: true
    };
    return _this;
  }

  _createClass(LazyElement, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      $.getScript(Object(production["a" /* getApiPath */])() + "/api/internal/javascript/" + this.props.component.assetId, function () {
        this.setState({
          loading: false
        });
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.loading) {
        return react_default.a.createElement("div", null);
      }

      return Object(render_service["a" /* default */])(this.props.component, this.props.history, true);
    }
  }]);

  return LazyElement;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/app/services/universal-dashboard-service.jsx
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var UniversalDashboardService = {
  components: [],
  register: function register(type, component) {
    var existingComponent = this.components.find(function (x) {
      return x.type === type;
    });
    if (!existingComponent) this.components.push({
      type: type,
      component: component
    });
  },
  get: fetch_service["a" /* fetchGet */],
  post: fetch_service["b" /* fetchPost */],
  subscribe: PubSub.subscribe,
  unsubsribe: PubSub.unsubscribe,
  publish: PubSub.publishSync,
  renderComponent: function renderComponent(component, history, dynamicallyLoaded) {
    var _this = this;

    if (component == null) return react_default.a.createElement(react_default.a.Fragment, null);

    if (Array.isArray(component)) {
      return component.map(function (x) {
        return _this.renderComponent(x, history);
      });
    }

    var existingComponent = this.components.find(function (x) {
      return x.type === component.type;
    });

    if (existingComponent != null) {
      return react_default.a.createElement(existingComponent.component, _objectSpread({}, component, {
        key: component.id,
        history: history
      }));
    } else if (component.isPlugin && !dynamicallyLoaded) {
      return react_default.a.createElement(lazy_element_LazyElement, {
        component: component,
        key: component.id,
        history: history
      });
    }

    return Object(render_service["b" /* internalRenderComponent */])(component, history);
  }
};
// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Redirect.js + 2 modules
var Redirect = __webpack_require__(1500);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Route.js
var Route = __webpack_require__(1483);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Switch.js + 1 modules
var Switch = __webpack_require__(1502);

// EXTERNAL MODULE: ./src/app/error-card.jsx
var error_card = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/react-interval/lib/index.js
var react_interval_lib = __webpack_require__(35);
var react_interval_lib_default = /*#__PURE__*/__webpack_require__.n(react_interval_lib);

// CONCATENATED MODULE: ./src/app/ud-page.jsx
function ud_page_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ud_page_typeof = function _typeof(obj) { return typeof obj; }; } else { ud_page_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ud_page_typeof(obj); }

function ud_page_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ud_page_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ud_page_createClass(Constructor, protoProps, staticProps) { if (protoProps) ud_page_defineProperties(Constructor.prototype, protoProps); if (staticProps) ud_page_defineProperties(Constructor, staticProps); return Constructor; }

function ud_page_possibleConstructorReturn(self, call) { if (call && (ud_page_typeof(call) === "object" || typeof call === "function")) { return call; } return ud_page_assertThisInitialized(self); }

function ud_page_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ud_page_getPrototypeOf(o) { ud_page_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ud_page_getPrototypeOf(o); }

function ud_page_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ud_page_setPrototypeOf(subClass, superClass); }

function ud_page_setPrototypeOf(o, p) { ud_page_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ud_page_setPrototypeOf(o, p); }







var ud_page_UdPage =
/*#__PURE__*/
function (_React$Component) {
  ud_page_inherits(UdPage, _React$Component);

  function UdPage() {
    var _this;

    ud_page_classCallCheck(this, UdPage);

    _this = ud_page_possibleConstructorReturn(this, ud_page_getPrototypeOf(UdPage).call(this));
    _this.state = {
      components: [],
      hasError: false,
      errorMessage: ""
    };
    return _this;
  }

  ud_page_createClass(UdPage, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        errorMessage: error.message
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      if (this.props.dynamic) {
        this.loadDynamicPage();
      } else {
        this.loadStaticPage();
      }
    }
  }, {
    key: "loadStaticPage",
    value: function loadStaticPage() {
      Object(fetch_service["a" /* fetchGet */])("/api/internal/dashboard/page/".concat(this.props.name), function (json) {
        if (json.error) {
          this.setState({
            errorMessage: json.error.message,
            hasError: true
          });
        } else {
          this.setState({
            components: json.components,
            hasError: false
          });
        }
      }.bind(this));
    }
  }, {
    key: "loadDynamicPage",
    value: function loadDynamicPage() {
      if (!this.props.match) {
        return;
      }

      var queryParams = {};

      for (var k in this.props.match.params) {
        if (this.props.match.params.hasOwnProperty(k)) {
          queryParams[k] = this.props.match.params[k];
        }
      }

      var esc = encodeURIComponent;
      var query = Object.keys(queryParams).map(function (k) {
        return esc(k) + '=' + esc(queryParams[k]);
      }).join('&');
      Object(fetch_service["a" /* fetchGet */])("/api/internal/component/element/".concat(this.props.id, "?").concat(query), function (json) {
        if (json.error) {
          this.setState({
            errorMessage: json.error.message,
            hasError: true
          });
        } else {
          this.setState({
            components: json,
            hasError: false
          });
        }
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return react_default.a.createElement(error_card["default"], {
          message: this.state.errorMessage,
          id: this.props.id,
          title: "An error occurred on this page"
        });
      }

      if (!this.state.components || !this.state.components.map) {
        var parameterName = this.props.dynamic ? "Endpoint" : "Content";
        return react_default.a.createElement(error_card["default"], {
          message: "There was an error with your ".concat(parameterName, " for this page. You need to return at least one component from the ").concat(parameterName, ".")
        });
      }

      var childComponents = this.state.components.map(function (x) {
        return Object(render_service["a" /* default */])(x, this.props.history);
      }.bind(this));
      return react_default.a.createElement("div", null, childComponents, react_default.a.createElement(react_interval_lib_default.a, {
        timeout: this.props.refreshInterval * 1000,
        enabled: this.props.autoRefresh,
        callback: this.loadData.bind(this)
      }));
    }
  }]);

  return UdPage;
}(react_default.a.Component);


// EXTERNAL MODULE: ./src/app/ud-navbar.jsx + 1 modules
var ud_navbar = __webpack_require__(85);

// EXTERNAL MODULE: ./src/app/ud-link.jsx
var ud_link = __webpack_require__(39);

// CONCATENATED MODULE: ./src/app/ud-footer.jsx
function ud_footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ud_footer_typeof = function _typeof(obj) { return typeof obj; }; } else { ud_footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ud_footer_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ud_footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ud_footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ud_footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) ud_footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) ud_footer_defineProperties(Constructor, staticProps); return Constructor; }

function ud_footer_possibleConstructorReturn(self, call) { if (call && (ud_footer_typeof(call) === "object" || typeof call === "function")) { return call; } return ud_footer_assertThisInitialized(self); }

function ud_footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ud_footer_getPrototypeOf(o) { ud_footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ud_footer_getPrototypeOf(o); }

function ud_footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ud_footer_setPrototypeOf(subClass, superClass); }

function ud_footer_setPrototypeOf(o, p) { ud_footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ud_footer_setPrototypeOf(o, p); }




var ud_footer_UdFooter =
/*#__PURE__*/
function (_React$Component) {
  ud_footer_inherits(UdFooter, _React$Component);

  function UdFooter() {
    ud_footer_classCallCheck(this, UdFooter);

    return ud_footer_possibleConstructorReturn(this, ud_footer_getPrototypeOf(UdFooter).apply(this, arguments));
  }

  ud_footer_createClass(UdFooter, [{
    key: "render",
    value: function render() {
      if (this.props.footer == null) {
        return react_default.a.createElement("footer", {
          className: "page-footer ud-footer",
          style: {
            backgroundColor: this.props.backgroundColor,
            color: this.props.fontColor
          }
        }, react_default.a.createElement("div", {
          className: "footer-copyright"
        }, react_default.a.createElement("div", {
          className: "container"
        }, react_default.a.createElement("a", {
          className: "grey-text text-lighten-4 right",
          href: "http://www.poshud.com"
        }, "Created with PowerShell Universal Dashboard"))));
      } else {
        var links = null;

        if (this.props.footer.links) {
          links = this.props.footer.links.map(function (x, i) {
            return react_default.a.createElement(ud_link["default"], _extends({}, x, {
              key: x.url,
              className: "grey-text text-lighten-4"
            }));
          });
        }

        var backgroundColor = this.props.footer.backgroundColor ? this.props.footer.backgroundColor : this.props.backgroundColor;
        var fontColor = this.props.footer.fontColor ? this.props.footer.fontColor : this.props.fontColor;
        return react_default.a.createElement("footer", {
          className: "page-footer ud-footer",
          style: {
            backgroundColor: backgroundColor,
            color: fontColor
          }
        }, react_default.a.createElement("div", {
          className: "footer-copyright"
        }, react_default.a.createElement("div", {
          className: "container"
        }, this.props.footer.copyright, react_default.a.createElement("div", {
          className: "right"
        }, links), react_default.a.createElement("a", {
          className: "grey-text text-lighten-4 right",
          href: "http://www.poshud.com"
        }, "Created with PowerShell Universal Dashboard"))));
      }
    }
  }]);

  return UdFooter;
}(react_default.a.Component);


// EXTERNAL MODULE: ./node_modules/pubsub-js/src/pubsub.js
var pubsub = __webpack_require__(13);
var pubsub_default = /*#__PURE__*/__webpack_require__.n(pubsub);

// EXTERNAL MODULE: ./node_modules/@aspnet/signalr/dist/esm/index.js + 18 modules
var esm = __webpack_require__(114);

// EXTERNAL MODULE: ./src/app/services/toaster.jsx
var toaster = __webpack_require__(82);

// EXTERNAL MODULE: ./src/app/ud-icon.jsx
var ud_icon = __webpack_require__(43);

// CONCATENATED MODULE: ./src/app/ud-designer.jsx
function ud_designer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ud_designer_typeof = function _typeof(obj) { return typeof obj; }; } else { ud_designer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ud_designer_typeof(obj); }

function ud_designer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ud_designer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ud_designer_createClass(Constructor, protoProps, staticProps) { if (protoProps) ud_designer_defineProperties(Constructor.prototype, protoProps); if (staticProps) ud_designer_defineProperties(Constructor, staticProps); return Constructor; }

function ud_designer_possibleConstructorReturn(self, call) { if (call && (ud_designer_typeof(call) === "object" || typeof call === "function")) { return call; } return ud_designer_assertThisInitialized(self); }

function ud_designer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ud_designer_getPrototypeOf(o) { ud_designer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ud_designer_getPrototypeOf(o); }

function ud_designer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ud_designer_setPrototypeOf(subClass, superClass); }

function ud_designer_setPrototypeOf(o, p) { ud_designer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ud_designer_setPrototypeOf(o, p); }



var UdTerminal = react_default.a.lazy(function () {
  return Promise.all(/* import() | ud-terminal */[__webpack_require__.e(23), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, 1494));
});

var ud_designer_UDDesigner =
/*#__PURE__*/
function (_React$Component) {
  ud_designer_inherits(UDDesigner, _React$Component);

  function UDDesigner() {
    var _this;

    ud_designer_classCallCheck(this, UDDesigner);

    _this = ud_designer_possibleConstructorReturn(this, ud_designer_getPrototypeOf(UDDesigner).call(this));
    _this.state = {
      open: false
    };
    return _this;
  }

  ud_designer_createClass(UDDesigner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $(this.modal).modal();
    }
  }, {
    key: "toggleTerminal",
    value: function toggleTerminal() {
      $(this.modal).modal(this.state.open ? 'close' : 'open');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return [react_default.a.createElement("div", {
        className: "fixed-action-btn"
      }, react_default.a.createElement("a", {
        className: "btn-floating btn-large red",
        onClick: this.toggleTerminal.bind(this),
        id: "btnDesignTerminal"
      }, react_default.a.createElement("i", {
        className: "large fa fa-terminal"
      }))), react_default.a.createElement("div", {
        ref: function ref(modal) {
          return _this2.modal = modal;
        },
        className: "modal bottom-sheet"
      }, react_default.a.createElement("div", {
        className: "modal-content"
      }, react_default.a.createElement("h4", null, react_default.a.createElement(ud_icon["default"], {
        icon: 'terminal'
      }), "  Design Terminal"), react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdTerminal, null), " ")))];
    }
  }]);

  return UDDesigner;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/app/ud-dashboard.jsx
function ud_dashboard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ud_dashboard_typeof = function _typeof(obj) { return typeof obj; }; } else { ud_dashboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ud_dashboard_typeof(obj); }

function ud_dashboard_extends() { ud_dashboard_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ud_dashboard_extends.apply(this, arguments); }

function ud_dashboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ud_dashboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ud_dashboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) ud_dashboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) ud_dashboard_defineProperties(Constructor, staticProps); return Constructor; }

function ud_dashboard_possibleConstructorReturn(self, call) { if (call && (ud_dashboard_typeof(call) === "object" || typeof call === "function")) { return call; } return ud_dashboard_assertThisInitialized(self); }

function ud_dashboard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ud_dashboard_getPrototypeOf(o) { ud_dashboard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ud_dashboard_getPrototypeOf(o); }

function ud_dashboard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ud_dashboard_setPrototypeOf(subClass, superClass); }

function ud_dashboard_setPrototypeOf(o, p) { ud_dashboard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ud_dashboard_setPrototypeOf(o, p); }










var UdLoadingComponent = react_default.a.lazy(function () {
  return __webpack_require__.e(/* import() | ud-loading */ 16).then(__webpack_require__.bind(null, 1495));
});
var UdPageCyclerComponent = react_default.a.lazy(function () {
  return __webpack_require__.e(/* import() | ud-page-cycler */ 17).then(__webpack_require__.bind(null, 1501));
});
var UdModalComponent = react_default.a.lazy(function () {
  return __webpack_require__.e(/* import() | ud-modal */ 18).then(__webpack_require__.bind(null, 1496));
});
var UdErrorCardComponent = react_default.a.lazy(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 38));
});



var ud_dashboard_UdDashboard =
/*#__PURE__*/
function (_React$Component) {
  ud_dashboard_inherits(UdDashboard, _React$Component);

  function UdDashboard() {
    var _this2;

    ud_dashboard_classCallCheck(this, UdDashboard);

    _this2 = ud_dashboard_possibleConstructorReturn(this, ud_dashboard_getPrototypeOf(UdDashboard).call(this));
    _this2.state = {
      dashboard: null,
      hasError: false,
      error: null,
      pausePageCycle: false,
      redirectToLogin: false,
      loading: true,
      location: null,
      authenticated: false,
      sessionId: '',
      design: false
    };
    return _this2;
  }

  ud_dashboard_createClass(UdDashboard, [{
    key: "connectWebSocket",
    value: function connectWebSocket(sessionId) {
      var connection = new esm["a" /* HubConnectionBuilder */]().withUrl(Object(production["a" /* getApiPath */])() + '/dashboardhub').configureLogging(esm["b" /* LogLevel */].Information).build();
      connection.on('reload', function (data) {
        window.location.reload(true);
      });
      connection.on('setState', function (componentId, state) {
        pubsub_default.a.publish(componentId, {
          type: "setState",
          state: state
        });
      });
      connection.on('showToast', function (model) {
        toaster["a" /* default */].show(model);
      });
      connection.on('hideToast', function (id) {
        toaster["a" /* default */].hide(id);
      });
      connection.on('requestState', function (componentId, requestId) {
        pubsub_default.a.publish(componentId, {
          type: "requestState",
          requestId: requestId
        });
      });
      connection.on('removeElement', function (componentId) {
        pubsub_default.a.publish(componentId, {
          type: "removeElement",
          componentId: componentId
        });
      });
      connection.on('clearElement', function (componentId) {
        pubsub_default.a.publish(componentId, {
          type: "clearElement",
          componentId: componentId
        });
      });
      connection.on('syncElement', function (componentId) {
        pubsub_default.a.publish(componentId, {
          type: "syncElement",
          componentId: componentId
        });
      });
      connection.on('addElement', function (componentId, elements) {
        if (componentId == null) return;
        pubsub_default.a.publish(componentId, {
          type: "addElement",
          componentId: componentId,
          elements: elements
        });
      });
      connection.on('showModal', function (props) {
        pubsub_default.a.publish("modal.open", props);
      });
      connection.on('closeModal', function () {
        pubsub_default.a.publish("modal.close", {});
      });
      connection.on('redirect', function (url, newWindow) {
        if (newWindow) {
          window.open(url);
        } else {
          window.location.href = url;
        }
      });
      pubsub_default.a.subscribe('element-event', function (e, data) {
        if (data.type === "requestStateResponse") {
          connection.invoke("requestStateResponse", data.requestId, data.state);
        }

        if (data.type === "clientEvent") {
          connection.invoke("clientEvent", data.eventId, data.eventName, data.eventData, this.state.location).catch(function (e) {
            toaster["a" /* default */].show({
              message: e.message,
              icon: 'fa fa-times-circle',
              iconColor: '#FF0000'
            });
          });
        }

        if (data.type === "unregisterEvent") {
          connection.invoke("unregisterEvent", data.eventId);
        }
      }.bind(this));

      var _this = this;

      connection.start().then(function (x) {
        _this.connection = connection;
        window.UniversalDashboard.webSocket = connection;
        connection.invoke("setSessionId", sessionId);
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadData();
    }
  }, {
    key: "relayEvent",
    value: function relayEvent(json) {
      var events = JSON.parse(json);
      events.map(function (event) {
        pubsub_default.a.publish(event.id, event);
      });
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        error: error
      });
    }
  }, {
    key: "togglePausePageCycle",
    value: function togglePausePageCycle() {
      this.setState({
        pausePageCycle: !this.state.pausePageCycle
      });
    }
  }, {
    key: "loadStylesheet",
    value: function loadStylesheet(url) {
      var styles = document.createElement('link');
      styles.rel = 'stylesheet';
      styles.type = 'text/css';
      styles.media = 'screen';
      styles.href = url;
      document.getElementsByTagName('head')[0].appendChild(styles);
    }
  }, {
    key: "loadJavascript",
    value: function loadJavascript(url) {
      var jsElm = document.createElement("script");
      jsElm.type = "application/javascript";
      jsElm.src = url;
      document.body.appendChild(jsElm);
    }
  }, {
    key: "loadData",
    value: function loadData() {
      Object(fetch_service["a" /* fetchGet */])("/api/internal/dashboard", function (json) {
        var dashboard = json.dashboard;
        document.title = dashboard.title;

        if (dashboard.fontIconStyle == 'FontAwesome') {
          __webpack_require__.e(/* import() | font-awesome */ 24).then(__webpack_require__.t.bind(null, 1497, 7));
        } else {
          __webpack_require__.e(/* import() | line-awesome */ 25).then(__webpack_require__.t.bind(null, 1498, 7));
        }

        if (dashboard.stylesheets) dashboard.stylesheets.map(this.loadStylesheet.bind(this));
        if (dashboard.scripts) dashboard.scripts.map(this.loadJavascript.bind(this));

        if (dashboard.geolocation) {
          this.getLocation();
        }

        this.connectWebSocket(json.sessionId);
        this.setState({
          dashboard: dashboard,
          loading: false,
          sessionId: json.sessionId,
          authenticated: json.authenticated,
          design: dashboard.design
        });
      }.bind(this), this.props.history);
    }
  }, {
    key: "getLocation",
    value: function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var name = "location";
          var positionJson = {
            coords: {
              accuracy: position.coords.accuracy,
              altitude: position.coords.altitude,
              altitudeAccuracy: position.coords.altitudeAccuracy,
              heading: position.coords.heading,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              speed: position.coords.speed
            },
            timestamp: new Date(position.timestamp).toJSON()
          };
          var value = JSON.stringify(positionJson);
          value = btoa(value);
          document.cookie = name + "=" + (value || "") + "; path=/";
          this.setState({
            location: value
          });
        }.bind(this));
      }
    }
  }, {
    key: "getDefaultHomePage",
    value: function getDefaultHomePage() {
      return this.state.dashboard.pages.find(function (page) {
        return page.defaultHomePage === true;
      });
    }
  }, {
    key: "redirectToHomePage",
    value: function redirectToHomePage() {
      var defaultHomePage = this.getDefaultHomePage();

      if (defaultHomePage == null) {
        defaultHomePage = this.state.dashboard.pages[0];
      }

      if (defaultHomePage != null && defaultHomePage.url == null) {
        return react_default.a.createElement(Redirect["a" /* default */], {
          to: window.baseUrl + "/".concat(defaultHomePage.name.replace(/ /g, "-"))
        });
      } else if (defaultHomePage.url != null && defaultHomePage.url.indexOf(":") === -1) {
        return react_default.a.createElement(Redirect["a" /* default */], {
          to: defaultHomePage.url
        });
      } else if (defaultHomePage.name == null) {
        return react_default.a.createElement(react["Suspense"], {
          fallback: react_default.a.createElement("div", null)
        }, react_default.a.createElement(UdErrorCardComponent, {
          message: "Your first page needs to be a static page or a dynamic page without a variable in the URL."
        }));
      } else {
        return react_default.a.createElement(Redirect["a" /* default */], {
          to: window.baseUrl + "/".concat(defaultHomePage.name.replace(/ /g, "-"))
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return react_default.a.createElement(react["Suspense"], {
          fallback: react_default.a.createElement("div", null)
        }, react_default.a.createElement(UdErrorCardComponent, {
          message: this.state.error.message,
          location: this.state.error.stackTrace
        }));
      }

      if (this.state.loading) {
        return react_default.a.createElement(react["Suspense"], {
          fallback: react_default.a.createElement("div", null)
        }, react_default.a.createElement(UdLoadingComponent, null));
      }

      var dynamicPages = this.state.dashboard.pages.map(function (x) {
        if (!x.dynamic) return null;

        if (!x.url.startsWith("/")) {
          x.url = "/" + x.url;
        }

        return react_default.a.createElement(Route["a" /* default */], {
          path: window.baseUrl + x.url,
          render: function render(props) {
            return react_default.a.createElement(ud_page_UdPage, ud_dashboard_extends({
              id: x.id,
              dynamic: true
            }, props, {
              autoRefresh: x.autoRefresh,
              refreshInterval: x.refreshInterval,
              key: props.location.key
            }));
          }
        });
      });
      var staticPages = this.state.dashboard.pages.map(function (x) {
        if (x.dynamic) return null;
        return react_default.a.createElement(Route["a" /* default */], {
          exact: true,
          path: window.baseUrl + '/' + x.name.replace(/ /g, "-"),
          render: function render(props) {
            return react_default.a.createElement(ud_page_UdPage, ud_dashboard_extends({
              dynamic: false
            }, x, props, {
              autoRefresh: x.autoRefresh,
              refreshInterval: x.refreshInterval,
              key: props.location.key
            }));
          }
        });
      });
      return [react_default.a.createElement("header", null, react_default.a.createElement(ud_navbar["a" /* default */], {
        backgroundColor: this.state.dashboard.navBarColor,
        fontColor: this.state.dashboard.navBarFontColor,
        text: this.state.dashboard.title,
        links: this.state.dashboard.navbarLinks,
        logo: this.state.dashboard.navBarLogo,
        pages: this.state.dashboard.pages,
        togglePaused: this.togglePausePageCycle.bind(this),
        showPauseToggle: this.state.dashboard.cyclePages,
        history: this.props.history,
        authenticated: this.state.authenticated,
        navigation: this.state.dashboard.navigation
      })), react_default.a.createElement("main", {
        style: {
          background: this.state.dashboard.backgroundColor,
          color: this.state.dashboard.fontColor
        }
      }, react_default.a.createElement(Switch["a" /* default */], null, staticPages, dynamicPages, react_default.a.createElement(Route["a" /* default */], {
        exact: true,
        path: "/",
        render: this.redirectToHomePage.bind(this)
      }))), react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdModalComponent, null)), react_default.a.createElement(ud_footer_UdFooter, {
        backgroundColor: this.state.dashboard.navBarColor,
        fontColor: this.state.dashboard.navBarFontColor,
        footer: this.state.dashboard.footer,
        demo: this.state.dashboard.demo
      }), react_default.a.createElement(Route["a" /* default */], {
        path: "/",
        render: function (x) {
          return react_default.a.createElement(react["Suspense"], {
            fallback: react_default.a.createElement("div", null)
          }, react_default.a.createElement(UdPageCyclerComponent, {
            history: x.history,
            pages: this.state.dashboard.pages,
            cyclePages: this.state.dashboard.cyclePages && !this.state.pausePageCycle,
            cyclePagesInterval: this.state.dashboard.cyclePagesInterval
          }));
        }.bind(this)
      }), this.state.design ? react_default.a.createElement(ud_designer_UDDesigner, null) : react_default.a.createElement("span", null)];
    }
  }]);

  return UdDashboard;
}(react_default.a.Component);


// EXTERNAL MODULE: ./node_modules/react-router-dom/es/BrowserRouter.js + 2 modules
var BrowserRouter = __webpack_require__(1499);

// CONCATENATED MODULE: ./src/app/App.jsx
function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }





var App_App =
/*#__PURE__*/
function (_React$Component) {
  App_inherits(App, _React$Component);

  function App() {
    App_classCallCheck(this, App);

    return App_possibleConstructorReturn(this, App_getPrototypeOf(App).apply(this, arguments));
  }

  App_createClass(App, [{
    key: "render",
    value: function render() {
      var regex = new RegExp('^' + window.baseUrl + '(?!.*(\/login))(?!.*(\/license)).*$');
      return react_default.a.createElement(BrowserRouter["a" /* default */], null, react_default.a.createElement("div", {
        className: "ud-dashboard"
      }, react_default.a.createElement(Route["a" /* default */], {
        path: regex,
        component: ud_dashboard_UdDashboard
      })));
    }
  }]);

  return App;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/app/index.jsx










 // To add to window

if (!window.Promise) {
  window.Promise = promise_default.a;
}

window.UniversalDashboard = UniversalDashboardService;
var styles = document.createElement('link');
styles.rel = 'stylesheet';
styles.type = 'text/css';
styles.media = 'screen';
styles.href = Object(production["a" /* getApiPath */])() + "/api/internal/dashboard/theme";
document.getElementsByTagName('head')[0].appendChild(styles);
Object(react_dom["render"])(react_default.a.createElement(App_App, null), document.getElementById('app'));

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UdLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var UdIconComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 43));
});

var UdLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UdLink, _React$Component);

  function UdLink() {
    _classCallCheck(this, UdLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(UdLink).apply(this, arguments));
  }

  _createClass(UdLink, [{
    key: "render",
    value: function render() {
      var target = this.props.openInNewWindow ? "_blank" : "_self";
      var style = {
        color: this.props.color
      };

      if (this.props.icon) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: this.props.url,
          target: target,
          className: this.props.className + " ud-link",
          style: style
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
          fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...")
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UdIconComponent, {
          icon: this.props.icon
        }), " ", this.props.text));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: this.props.url,
          target: target,
          className: this.props.className + " ud-link",
          style: style
        }, this.props.text);
      }
    }
  }]);

  return UdLink;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UdIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var UdIcon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UdIcon, _React$Component);

  function UdIcon() {
    _classCallCheck(this, UdIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(UdIcon).apply(this, arguments));
  }

  _createClass(UdIcon, [{
    key: "render",
    value: function render() {
      var iconClass = "fa fa-".concat(this.props.icon);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: iconClass,
        style: this.props.style
      });
    }
  }]);

  return UdIcon;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getApiPath; });
/* unused harmony export getWsApiPath */
function getApiPath() {
  return window.baseUrl;
}
function getWsApiPath() {
  var protocol = "ws://";

  if (window.location.protocol.toLowerCase().startsWith("https")) {
    protocol = "wss://";
  }

  return protocol + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-materialize/lib/index.js
var lib = __webpack_require__(32);

// EXTERNAL MODULE: ./src/app/error-card.jsx
var error_card = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/react-interval/lib/index.js
var react_interval_lib = __webpack_require__(35);
var react_interval_lib_default = /*#__PURE__*/__webpack_require__.n(react_interval_lib);

// EXTERNAL MODULE: ./src/app/services/fetch-service.jsx
var fetch_service = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/pubsub-js/src/pubsub.js
var pubsub = __webpack_require__(13);
var pubsub_default = /*#__PURE__*/__webpack_require__.n(pubsub);

// CONCATENATED MODULE: ./src/app/ud-column.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var ud_column_UdColumn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UdColumn, _React$Component);

  function UdColumn(props) {
    var _this;

    _classCallCheck(this, UdColumn);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UdColumn).call(this, props));
    _this.state = {
      hasError: false,
      errorMessage: "",
      components: props.components
    };
    return _this;
  }

  _createClass(UdColumn, [{
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      if (event.type === "syncElement") {
        this.loadData();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      pubsub_default.a.unsubscribe(this.pubSubToken);
    }
  }, {
    key: "loadData",
    value: function loadData() {
      Object(fetch_service["a" /* fetchGet */])("/api/internal/component/element/".concat(this.props.id), function (data) {
        if (data.error) {
          this.setState({
            hasError: true,
            errorMessage: data.error.message
          });
          return;
        }

        this.setState({
          components: data
        });
      }.bind(this));
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.state.components || this.state.components.length == 0) {
        this.loadData();
        this.pubSubToken = pubsub_default.a.subscribe(this.props.id, this.onIncomingEvent.bind(this));
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        errorMessage: error.message
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return react_default.a.createElement(error_card["default"], {
          message: this.state.message
        });
      }

      if (this.props.error) {
        return react_default.a.createElement(error_card["default"], {
          message: this.props.error.message
        });
      }

      if (this.state.components == null) {
        return react_default.a.createElement("div", null);
      }

      var components = this.state.components.map(function (comp) {
        return renderComponent(comp, this.props.history);
      }.bind(this));
      return react_default.a.createElement(lib["Col"], {
        s: 12,
        l: this.props.size,
        key: this.props.id,
        className: "ud-column"
      }, components, react_default.a.createElement(react_interval_lib_default.a, {
        timeout: this.props.refreshInterval * 1000,
        enabled: this.props.autoRefresh,
        callback: this.loadData.bind(this)
      }));
    }
  }]);

  return UdColumn;
}(react_default.a.Component);


// EXTERNAL MODULE: ./src/app/ud-navbar.jsx + 1 modules
var ud_navbar = __webpack_require__(85);

// CONCATENATED MODULE: ./src/app/ud-row.jsx
function ud_row_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ud_row_typeof = function _typeof(obj) { return typeof obj; }; } else { ud_row_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ud_row_typeof(obj); }

function ud_row_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ud_row_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ud_row_createClass(Constructor, protoProps, staticProps) { if (protoProps) ud_row_defineProperties(Constructor.prototype, protoProps); if (staticProps) ud_row_defineProperties(Constructor, staticProps); return Constructor; }

function ud_row_possibleConstructorReturn(self, call) { if (call && (ud_row_typeof(call) === "object" || typeof call === "function")) { return call; } return ud_row_assertThisInitialized(self); }

function ud_row_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ud_row_getPrototypeOf(o) { ud_row_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ud_row_getPrototypeOf(o); }

function ud_row_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ud_row_setPrototypeOf(subClass, superClass); }

function ud_row_setPrototypeOf(o, p) { ud_row_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ud_row_setPrototypeOf(o, p); }









var ud_row_UdRow =
/*#__PURE__*/
function (_React$Component) {
  ud_row_inherits(UdRow, _React$Component);

  function UdRow(props) {
    var _this;

    ud_row_classCallCheck(this, UdRow);

    _this = ud_row_possibleConstructorReturn(this, ud_row_getPrototypeOf(UdRow).call(this, props));
    _this.state = {
      hasError: false,
      errorMessage: "",
      columns: props.columns
    };
    return _this;
  }

  ud_row_createClass(UdRow, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.pubSubToken = pubsub_default.a.subscribe(this.props.id, this.onIncomingEvent.bind(this));
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      if (event.type === "syncElement") {
        this.loadData();
      }
    }
  }, {
    key: "loadData",
    value: function loadData() {
      Object(fetch_service["a" /* fetchGet */])("/api/internal/component/element/".concat(this.props.id), function (data) {
        if (data.error) {
          this.setState({
            hasError: true,
            errorMessage: data.error.message
          });
          return;
        }

        this.setState({
          columns: data
        });
      }.bind(this));
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.state.columns) {
        this.loadData();
        this.pubSubToken = pubsub_default.a.subscribe(this.props.id, this.onIncomingEvent.bind(this));
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        errorMessage: error.message
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return react_default.a.createElement(error_card["default"], {
          message: this.state.message
        });
      }

      if (this.props.error) {
        return react_default.a.createElement(error_card["default"], {
          message: this.props.error.message
        });
      }

      if (this.state.columns == null) {
        return react_default.a.createElement("div", null);
      }

      var children = this.state.columns.map(function (x, i) {
        return renderComponent(x, this.props.history);
      }.bind(this));
      return react_default.a.createElement(lib["Row"], {
        key: this.props.id,
        className: "ud-row"
      }, children, react_default.a.createElement(react_interval_lib_default.a, {
        timeout: this.props.refreshInterval * 1000,
        enabled: this.props.autoRefresh,
        callback: this.loadData.bind(this)
      }));
    }
  }]);

  return UdRow;
}(react_default.a.Component);


// CONCATENATED MODULE: ./src/app/services/render-service.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return internalRenderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderComponent; });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var UdCardComponent = react_default.a.lazy(function () {
  return Promise.all(/* import() | ud-card */[__webpack_require__.e(22), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, 1484));
});
var UdChartComponent = react_default.a.lazy(function () {
  return Promise.all(/* import() | ud-chart */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 1485));
});
var UdMonitorComponent = react_default.a.lazy(function () {
  return Promise.all(/* import() | ud-monitor */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, 1486));
});
var UdLinkComponent = react_default.a.lazy(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 39));
});
var UdErrorCardComponent = react_default.a.lazy(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 38));
});
var UdTreeViewComponent = react_default.a.lazy(function () {
  return Promise.all(/* import() | ud-tree-view */[__webpack_require__.e(20), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 1487));
});
var UdInputComponent = react_default.a.lazy(function () {
  return __webpack_require__.e(/* import() | ud-input */ 8).then(__webpack_require__.bind(null, 1488));
});
var UdCounterComponent = react_default.a.lazy(function () {
  return Promise.all(/* import() | ud-counter */[__webpack_require__.e(26), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, 1489));
});
var UdHtmlComponent = react_default.a.lazy(function () {
  return __webpack_require__.e(/* import() | ud-html */ 10).then(__webpack_require__.bind(null, 1490));
});
var UdGridComponent = react_default.a.lazy(function () {
  return Promise.all(/* import() | ud-grid */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(21), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, 1503));
});
var UdDateTimeComponent = react_default.a.lazy(function () {
  return Promise.all(/* import() | ud-date-time */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, 1491));
});
var UdElementComponent = react_default.a.lazy(function () {
  return __webpack_require__.e(/* import() | ud-element */ 13).then(__webpack_require__.bind(null, 1492));
});
var UdImageCarouselComponent = react_default.a.lazy(function () {
  return __webpack_require__.e(/* import() | ud-image-carousel */ 14).then(__webpack_require__.bind(null, 1493));
});
var UdTerminal = react_default.a.lazy(function () {
  return Promise.all(/* import() | ud-terminal */[__webpack_require__.e(23), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, 1494));
});
function internalRenderComponent(component, history) {
  if (!component) return null;

  switch (component.type) {
    case "card":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdCardComponent, _extends({}, component, {
        key: component.id
      })));

    case "chart":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdChartComponent, _extends({}, component, {
        key: component.id
      })));

    case "column":
      return react_default.a.createElement(ud_column_UdColumn, _extends({}, component, {
        key: component.id,
        history: history
      }));

    case "counter":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdCounterComponent, _extends({}, component, {
        key: component.id
      })));

    case "datetime":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdDateTimeComponent, _extends({}, component, {
        key: component.id
      })));

    case "element":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdElementComponent, _extends({}, component, {
        key: component.key,
        history: history
      })));

    case "error":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdErrorCardComponent, _extends({}, component, {
        key: component.id
      })));

    case "link":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdLinkComponent, _extends({}, component, {
        key: component.id
      })));

    case "grid":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdGridComponent, _extends({}, component, {
        key: component.id
      })));

    case "rawHtml":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null, "Loading...")
      }, react_default.a.createElement(UdHtmlComponent, _extends({}, component, {
        key: component.id
      })));

    case "input":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdInputComponent, _extends({}, component, {
        key: component.id,
        history: history
      })));

    case "Monitor":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdMonitorComponent, _extends({}, component, {
        key: component.id
      })));

    case "navbar":
      return react_default.a.createElement(ud_navbar["a" /* default */], _extends({}, component, {
        key: component.id
      }));

    case "row":
      return react_default.a.createElement(ud_row_UdRow, _extends({}, component, {
        key: component.id,
        history: history
      }));

    case "treeview":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdTreeViewComponent, _extends({}, component, {
        key: component.id,
        history: history
      })));

    case "imageCarousel":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdImageCarouselComponent, _extends({}, component, {
        key: component.id
      })));

    case "terminal":
      return react_default.a.createElement(react["Suspense"], {
        fallback: react_default.a.createElement("div", null)
      }, react_default.a.createElement(UdTerminal, _extends({}, component, {
        key: component.id
      })));
  }
}
function renderComponent(component, history, dynamicallyLoaded) {
  return window.UniversalDashboard.renderComponent(component, history, dynamicallyLoaded);
}

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(377);
/* harmony import */ var izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(izitoast_dist_css_iziToast_min_css__WEBPACK_IMPORTED_MODULE_1__);


var toaster = {
  show: function show(model) {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.show(model);
  },
  hide: function hide(id) {
    var toast = document.querySelector('#' + id);
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.hide({}, toast);
  },
  info: function info(model) {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.info(model);
  },
  success: function success(model) {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.success(model);
  },
  warning: function warning(model) {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.warning(model);
  },
  error: function error(model) {
    izitoast_dist_js_iziToast_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.error(model);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (toaster);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-router-dom/es/Link.js
var Link = __webpack_require__(1482);

// EXTERNAL MODULE: ./src/app/ud-icon.jsx
var ud_icon = __webpack_require__(43);

// EXTERNAL MODULE: ./src/app/services/fetch-service.jsx
var fetch_service = __webpack_require__(14);

// CONCATENATED MODULE: ./src/app/ud-navigation.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ud_navigation_UdNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UdNavigation, _React$Component);

  function UdNavigation(props) {
    var _this;

    _classCallCheck(this, UdNavigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UdNavigation).call(this, props));
    _this.state = {
      paused: false,
      content: props.content
    };
    return _this;
  }

  _createClass(UdNavigation, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.customNavigation && this.props.content === null) {
        Object(fetch_service["a" /* fetchGet */])("/api/internal/component/element/".concat(this.props.id), function (data) {
          this.setState({
            content: data
          });
        }.bind(this));
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      $(".collapsible").collapsible();

      if (this.props.fixed) {
        $(".button-collapse").sideNav({
          menuWidth: this.props.width,
          closeOnClick: true
        });
      } else {
        $(".menu-button").sideNav({
          menuWidth: this.props.width,
          closeOnClick: true
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $(".collapsible").collapsible();

      if (this.props.fixed) {
        $(".button-collapse").sideNav({
          menuWidth: this.props.width,
          closeOnClick: true
        });
      } else {
        $(".menu-button").sideNav({
          menuWidth: this.props.width,
          closeOnClick: true
        });
      }
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(e, item) {
      if (item.hasCallback) {
        e.preventDefault();
        PubSub.publish('element-event', {
          type: "clientEvent",
          eventId: item.id,
          eventName: 'onClick'
        });
      }
    }
  }, {
    key: "onTogglePauseCycling",
    value: function onTogglePauseCycling() {
      this.props.togglePaused();
      this.setState({
        paused: !this.state.paused
      });
    }
  }, {
    key: "renderDefaultNavigation",
    value: function renderDefaultNavigation() {
      if (!this.props.pages || this.props.pages.length === 1) return react_default.a.createElement("div", null);
      var links = this.props.pages.map(function (x, i) {
        if (x.name == null) return null;
        return react_default.a.createElement("li", {
          key: x.name
        }, react_default.a.createElement(Link["a" /* default */], {
          to: window.baseUrl + "/" + x.name.replace(/ /g, "-")
        }, react_default.a.createElement(ud_icon["default"], {
          icon: x.icon
        }), " ", x.name));
      });
      var pauseToggle = null;

      if (this.props.showPauseToggle) {
        var pauseIcon = this.state.paused ? "play-circle" : "pause-circle";
        var words = this.state.paused ? "Cycle Pages" : "Pause Page Cycling";
        pauseToggle = [react_default.a.createElement("li", null, react_default.a.createElement("div", {
          class: "divider"
        })), react_default.a.createElement("li", null, react_default.a.createElement("a", {
          href: "#!",
          onClick: this.onTogglePauseCycling.bind(this)
        }, react_default.a.createElement(ud_icon["default"], {
          icon: pauseIcon
        }), " ", words))];
      }

      return [react_default.a.createElement("div", {
        className: "side-nav ud-page-navigation",
        id: "navigation"
      }, react_default.a.createElement("div", {
        className: "nav-wrapper"
      }, react_default.a.createElement("ul", {
        className: "right",
        style: {
          width: '100%'
        }
      }, links, pauseToggle))), react_default.a.createElement("a", {
        href: "#",
        className: "menu-button",
        "data-activates": "navigation",
        style: {
          marginLeft: '25px',
          fontSize: '2.1rem'
        }
      }, react_default.a.createElement(ud_icon["default"], {
        icon: "bars"
      }))];
    }
  }, {
    key: "renderSideNavItem",
    value: function renderSideNavItem(item) {
      var _this2 = this;

      if (item.divider) {
        return react_default.a.createElement("li", {
          key: item.id
        }, react_default.a.createElement("div", {
          className: "divider"
        }));
      }

      var itemClass = "";

      if (item.subheader) {
        itemClass = "subheader";
      }

      var icon = null;

      if (item.icon !== 'none') {
        icon = react_default.a.createElement("i", {
          className: "fa fa-".concat(item.icon)
        });
      }

      if (item.children == null) {
        if (item.url === null) {
          return react_default.a.createElement("li", {
            key: item.id
          }, react_default.a.createElement("a", {
            href: "#",
            onClick: function (e) {
              this.onItemClick(e, item);
            }.bind(this),
            className: itemClass
          }, icon, " ", item.text));
        } else if (item.url.startsWith("http") || item.url.startsWith("https")) {
          return react_default.a.createElement("li", {
            key: item.id
          }, react_default.a.createElement("a", {
            href: item.url,
            className: itemClass
          }, icon, " ", item.text));
        } else {
          return react_default.a.createElement("li", {
            key: item.id
          }, react_default.a.createElement(Link["a" /* default */], {
            to: window.baseUrl + "/" + item.url.replace(/ /g, "-")
          }, react_default.a.createElement(ud_icon["default"], {
            icon: item.icon
          }), " ", item.text));
        }
      } else {
        var children = item.children.map(function (x) {
          return _this2.renderSideNavItem(x);
        });
        return react_default.a.createElement("li", {
          className: "no-padding"
        }, react_default.a.createElement("ul", {
          className: "collapsible collapsible-accordion"
        }, react_default.a.createElement("li", null, react_default.a.createElement("a", {
          className: "collapsible-header"
        }, item.text), react_default.a.createElement("div", {
          className: "collapsible-body"
        }, react_default.a.createElement("ul", null, children)))));
      }
    }
  }, {
    key: "renderCustomNavigation",
    value: function renderCustomNavigation() {
      var _this3 = this;

      if (this.props.none) {
        return react_default.a.createElement("div", null);
      }

      var sideNavClass = "side-nav ud-page-navigation";
      var toggleButton = react_default.a.createElement("a", {
        href: "#",
        className: "menu-button",
        "data-activates": "navigation",
        style: {
          marginLeft: '25px',
          fontSize: '2.1rem'
        }
      }, react_default.a.createElement(ud_icon["default"], {
        icon: "bars"
      }));

      if (this.props.fixed) {
        sideNavClass += " fixed";
        toggleButton = react_default.a.createElement("a", {
          href: "#",
          className: "button-collapse",
          "data-activates": "navigation",
          style: {
            marginLeft: '25px',
            fontSize: '2.1rem'
          }
        }, react_default.a.createElement(ud_icon["default"], {
          icon: "bars"
        }));
        ;
      }

      var children = [];

      if (this.state.content) {
        children = this.state.content.map(function (item) {
          return _this3.renderSideNavItem(item);
        });
      }

      return [react_default.a.createElement("div", {
        className: sideNavClass,
        id: "navigation"
      }, react_default.a.createElement("div", {
        className: "nav-wrapper"
      }, react_default.a.createElement("ul", {
        className: "right",
        style: {
          width: '100%'
        }
      }, children))), toggleButton];
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.customNavigation) {
        return this.renderCustomNavigation();
      } else {
        return this.renderDefaultNavigation();
      }
    }
  }]);

  return UdNavigation;
}(react_default.a.Component);


// EXTERNAL MODULE: ./src/app/ud-link.jsx
var ud_link = __webpack_require__(39);

// CONCATENATED MODULE: ./src/app/ud-navbar.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ud_navbar_UdNavbar; });
function ud_navbar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ud_navbar_typeof = function _typeof(obj) { return typeof obj; }; } else { ud_navbar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ud_navbar_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ud_navbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ud_navbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ud_navbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) ud_navbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) ud_navbar_defineProperties(Constructor, staticProps); return Constructor; }

function ud_navbar_possibleConstructorReturn(self, call) { if (call && (ud_navbar_typeof(call) === "object" || typeof call === "function")) { return call; } return ud_navbar_assertThisInitialized(self); }

function ud_navbar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ud_navbar_getPrototypeOf(o) { ud_navbar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ud_navbar_getPrototypeOf(o); }

function ud_navbar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ud_navbar_setPrototypeOf(subClass, superClass); }

function ud_navbar_setPrototypeOf(o, p) { ud_navbar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ud_navbar_setPrototypeOf(o, p); }






var ud_navbar_UdNavbar =
/*#__PURE__*/
function (_React$Component) {
  ud_navbar_inherits(UdNavbar, _React$Component);

  function UdNavbar() {
    ud_navbar_classCallCheck(this, UdNavbar);

    return ud_navbar_possibleConstructorReturn(this, ud_navbar_getPrototypeOf(UdNavbar).apply(this, arguments));
  }

  ud_navbar_createClass(UdNavbar, [{
    key: "signOut",
    value: function signOut() {
      Object(fetch_service["a" /* fetchGet */])("/api/internal/signout", function () {
        this.props.history.push("/login");
      }.bind(this));
    }
  }, {
    key: "homePage",
    value: function homePage() {
      return this.props.pages.find(function (page) {
        return page.defaultHomePage === true;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var links = null;

      if (this.props.links) {
        links = this.props.links.map(function (x) {
          return react_default.a.createElement("li", {
            key: x.url
          }, react_default.a.createElement(ud_link["default"], x));
        });
      }

      var logo = null;

      if (this.props.logo) {
        logo = react_default.a.createElement("img", {
          id: this.props.logo.attributes.id,
          src: this.props.logo.attributes.src,
          height: this.props.logo.attributes.height,
          width: this.props.logo.attributes.width,
          style: {
            paddingLeft: '10px',
            verticalAlign: "middle"
          }
        });
      }

      var dPage = this.homePage();

      if (dPage == null) {
        dPage = this.props.pages[0];
      }

      var href = dPage.name;

      if (href != null) {
        href = window.baseUrl + "/".concat(dPage.name.replace(/ /g, "-"));
      }

      return react_default.a.createElement("nav", {
        style: {
          backgroundColor: this.props.backgroundColor,
          color: this.props.fontColor
        },
        className: "ud-navbar"
      }, react_default.a.createElement(ud_navigation_UdNavigation, _extends({
        pages: this.props.pages,
        togglePaused: this.props.togglePaused,
        showPauseToggle: this.props.showPauseToggle
      }, this.props.navigation, {
        customNavigation: this.props.navigation != null
      })), react_default.a.createElement("a", {
        href: href,
        style: {
          paddingLeft: '10px',
          fontSize: '2.1rem'
        }
      }, logo, "  ", react_default.a.createElement("span", null, this.props.text)), this.props.authenticated ? react_default.a.createElement("a", {
        href: "#!",
        onClick: this.signOut.bind(this),
        className: "right",
        style: {
          paddingRight: '10px'
        },
        id: "signoutLink"
      }, react_default.a.createElement("span", null, "Sign Out")) : react_default.a.createElement(react_default.a.Fragment, null), react_default.a.createElement("ul", {
        id: "nav-mobile",
        className: "right hide-on-med-and-down"
      }, links));
    }
  }]);

  return UdNavbar;
}(react_default.a.Component);



/***/ })

/******/ });
//# sourceMappingURL=main.98b6e0fc72b16353d581.bundle.map