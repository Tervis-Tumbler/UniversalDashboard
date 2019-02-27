(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 1489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UdCounter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ud_icon_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var react_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var react_interval__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_interval__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _error_card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _ud_link_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);
/* harmony import */ var _basics_text_size_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(595);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_7__);
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




var numeral = __webpack_require__(1306);








var UdCounter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UdCounter, _React$Component);

  function UdCounter() {
    var _this;

    _classCallCheck(this, UdCounter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UdCounter).call(this));
    _this.state = {
      value: 0,
      errorMessage: "",
      hasError: false
    };
    return _this;
  }

  _createClass(UdCounter, [{
    key: "loadData",
    value: function loadData() {
      if (!this.props.id || this.props.id === "") {
        return;
      }

      Object(_services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_2__[/* fetchGet */ "a"])("/api/internal/component/element/".concat(this.props.id), function (json) {
        if (json.error) {
          this.setState({
            hasError: true,
            errorMessage: json.error.message
          });
        } else {
          this.setState({
            hasError: false,
            value: json
          });
        }
      }.bind(this));
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadData();
      this.pubSubToken = pubsub_js__WEBPACK_IMPORTED_MODULE_7___default.a.subscribe(this.props.id, this.onIncomingEvent.bind(this));
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      if (event.type === "syncElement") {
        this.loadData();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      pubsub_js__WEBPACK_IMPORTED_MODULE_7___default.a.unsubscribe(this.pubSubToken);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.id !== this.props.id) {
        this.loadData();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_error_card_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          message: this.state.errorMessage,
          title: this.props.title,
          id: this.props.id,
          key: this.props.id
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_interval__WEBPACK_IMPORTED_MODULE_3___default.a, {
          timeout: this.props.refreshInterval * 1000,
          enabled: this.props.autoRefresh,
          callback: this.loadData.bind(this)
        })];
      }

      var icon = null;

      if (this.props.icon !== 'none') {
        var em = "6em";

        if (this.props.value == null) {
          em = "4em";
        }

        icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ud_icon_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
        });
      }

      var value = numeral(this.state.value).format(this.props.format);
      var content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(this.props.textAlignment, "-align")
      }, icon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basics_text_size_jsx__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        size: this.props.textSize
      }, value));
      var actions = null;

      if (this.props.links) {
        var links = this.props.links.map(function (x, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ud_link_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, x, {
            key: x.url
          }));
        });
        actions = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card-action"
        }, links);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card ud-counter",
        id: this.props.id,
        style: {
          background: this.props.backgroundColor,
          color: this.props.fontColor
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title"
      }, this.props.title), content), actions, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_interval__WEBPACK_IMPORTED_MODULE_3___default.a, {
        timeout: this.props.refreshInterval * 1000,
        enabled: this.props.autoRefresh,
        callback: this.loadData.bind(this)
      }));
    }
  }]);

  return UdCounter;
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
//# sourceMappingURL=ud-counter.98b6e0fc72b16353d581.bundle.map