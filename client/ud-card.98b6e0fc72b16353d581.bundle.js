(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 1484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UdCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _basics_text_size_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(595);
/* harmony import */ var _services_render_service_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(782);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var UdLinkComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 39));
});
var UdIconComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 43));
}); // const hljs = React.lazy(() => import('highlight.js' /* webpackChunkName: "highlight.js" */))

var UdCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UdCard, _React$Component);

  function UdCard() {
    _classCallCheck(this, UdCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(UdCard).apply(this, arguments));
  }

  _createClass(UdCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      highlight_js__WEBPACK_IMPORTED_MODULE_4___default.a.initHighlightingOnLoad();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.pubSubToken = pubsub_js__WEBPACK_IMPORTED_MODULE_3___default.a.subscribe(this.props.id, this.onIncomingEvent.bind(this));
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      if (event.type === "syncElement") {
        this.loadData();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var actions = null;

      if (this.props.links) {
        var links = this.props.links.map(function (x, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
            fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...")
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UdLinkComponent, _extends({}, x, {
            key: x.url
          })));
        });
        actions = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card-action"
        }, links);
      }

      var highlight = null;

      if (this.props.language) {
        // <Suspense fallback={<div>Loading...</div>}>
        //     {hljs.initHighlightingOnLoad()}
        // </Suspense>
        highlight = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
          className: this.props.language
        }, this.props.text);
      } else if (this.props.text != null) {
        highlight = this.props.text.split('\r\n').map(function (line) {
          return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, line), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)];
        });
      } else if (this.props.content != null) {
        highlight = this.props.content.map(function (x) {
          if (x.type != null) {
            return Object(_services_render_service_jsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(x);
          }

          return x;
        }.bind(this));
      }

      var icon = null;

      if (this.props.icon !== 'none') {
        var em = "6em";

        if (this.props.text == null && this.props.content == null) {
          em = "4em";
        }

        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
          fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...")
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UdIconComponent, {
          icon: this.props.icon,
          style: {
            opacity: 0.05,
            float: 'left',
            marginLeft: '70px',
            fontSize: em,
            position: 'absolute',
            top: '20px',
            color: this.props.fontColor
          }
        }));
      }

      highlight = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(this.props.textAlignment, "-align")
      }, icon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basics_text_size_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        size: this.props.textSize
      }, highlight));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card ud-card",
        key: this.props.id,
        id: this.props.id,
        style: {
          background: this.props.backgroundColor,
          color: this.props.fontColor
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title"
      }, this.props.title), highlight), actions);
    }
  }]);

  return UdCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextSize; });
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



var TextSize =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextSize, _React$Component);

  function TextSize() {
    _classCallCheck(this, TextSize);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextSize).apply(this, arguments));
  }

  _createClass(TextSize, [{
    key: "render",
    value: function render() {
      if (this.props.size == "Small") {
        return this.props.children;
      }

      if (this.props.size == "Medium") {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, this.props.children);
      }

      if (this.props.size == "Large") {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, this.props.children);
      }
    }
  }]);

  return TextSize;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

}]);
//# sourceMappingURL=ud-card.98b6e0fc72b16353d581.bundle.map