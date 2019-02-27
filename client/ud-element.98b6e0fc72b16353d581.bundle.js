(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 1492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UdElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_render_service_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var react_interval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var react_interval__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_interval__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _error_card_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var UdElement =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UdElement, _React$Component);

  function UdElement() {
    var _this;

    _classCallCheck(this, UdElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UdElement).call(this));
    _this.state = {
      hidden: false
    };
    return _this;
  }

  _createClass(UdElement, [{
    key: "isGuid",
    value: function isGuid(str) {
      if (str == null) {
        return false;
      }

      if (str[0] === "{") {
        str = str.substring(1, str.length - 1);
      }

      var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
      var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return regexGuid.test(str);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.isGuid(this.props.id)) {
        this.pubSubToken = pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.subscribe(this.props.id, this.onIncomingEvent.bind(this));
      }
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      if (event.type === "removeElement") {
        this.setState({
          hidden: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.hidden && this.pubSubToken != null) {
        pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.unsubscribe(this.pubSubToken);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.pubSubToken != null) {
        console.log(this.pubSubToken);
        pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.unsubscribe(this.pubSubToken);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hidden) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UDElementContent, this.props);
    }
  }]);

  return UdElement;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



var UDElementContent =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(UDElementContent, _React$Component2);

  function UDElementContent(props) {
    var _this2;

    _classCallCheck(this, UDElementContent);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(UDElementContent).call(this, props));
    _this2.state = {
      content: props.content,
      tag: props.tag,
      attributes: props.attributes,
      events: props.events,
      loading: true,
      hasError: false,
      errorMessage: ''
    };
    return _this2;
  }

  _createClass(UDElementContent, [{
    key: "loadData",
    value: function loadData() {
      Object(_services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_3__[/* fetchGet */ "a"])("/api/internal/component/element/" + this.props.id, function (data) {
        if (data.error) {
          this.setState({
            hasError: true,
            errorMessage: data.error.message
          });
          return;
        }

        this.setState({
          content: data,
          loading: false
        });
      }.bind(this));
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
    key: "componentWillMount",
    value: function componentWillMount() {
      this.pubSubToken = pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.subscribe(this.props.id, this.onIncomingEvent.bind(this));

      if (this.props.hasCallback) {
        this.loadData();
      } else {
        if (this.props.js) {
          $.getScript(Object(config__WEBPACK_IMPORTED_MODULE_4__[/* getApiPath */ "a"])() + "/api/internal/javascript/" + this.props.js, function () {
            this.setState({
              loading: false
            });
          }.bind(this));
        } else {
          this.setState({
            loading: false
          });
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.tag === 'input' && this.state.attributes != null && this.state.attributes["type"] === 'text') {
        Materialize.updateTextFields();
      }

      $('.collapsible').collapsible();

      if (this.state.tag === 'select') {
        $(this.refs.element).material_select(this.onUserEvent.bind(this));
      }

      if (this.props.onMount) {
        eval(this.props.onMount);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.tag === 'input' && this.state.attributes != null && this.state.attributes["type"] === 'text') {
        Materialize.updateTextFields();
      }
    }
  }, {
    key: "onTextboxChanged",
    value: function onTextboxChanged(e) {
      var val = e.target.value;
      this.state.attributes.value = val;
      this.setState({
        attributes: this.state.attributes
      });
    }
  }, {
    key: "onCheckboxChanged",
    value: function onCheckboxChanged(e) {
      var val = e.target.value;
      val = e.target.checked;
      this.state.attributes.checked = val;
      this.setState({
        attributes: this.state.attributes
      });

      for (var i = 0; i < this.state.events.length; i++) {
        if (this.state.events[i].event === 'onChange') {
          var event = this.state.events[i];
          pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.publish('element-event', {
            type: "clientEvent",
            eventId: event.id,
            eventName: 'onChange',
            eventData: val
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.props.preventUnregister) {
        if (this.state.events != null) {
          for (var i = 0; i < this.state.events.length; i++) {
            pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.publish('element-event', {
              type: "unregisterEvent",
              eventId: this.state.events[i].id
            });
          }
        }

        if (this.props.hasCallback) {
          pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.publish('element-event', {
            type: "unregisterEvent",
            eventId: this.props.id
          });
        }
      }

      pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.unsubscribe(this.pubSubToken);
    }
  }, {
    key: "onIncomingEvent",
    value: function onIncomingEvent(eventName, event) {
      if (event.type === "setState") {
        this.setState(event.state);
      } else if (event.type === "requestState") {
        Object(_services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_3__[/* fetchPost */ "b"])("/api/internal/component/element/sessionState/".concat(event.requestId), this.state);
      } else if (event.type === "removeElement") {
        this.setState({
          hidden: true
        });
      } else if (event.type === "addElement") {
        var content = this.state.content;

        if (content == null) {
          content = [];
        }

        content = content.concat(event.elements);
        this.setState({
          content: content
        });
      } else if (event.type === "clearElement") {
        this.setState({
          content: null
        });
      } else if (event.type === "syncElement") {
        this.loadData();
      }
    }
  }, {
    key: "onUserEvent",
    value: function onUserEvent(event, e) {
      var eventName = null;
      var val = null;

      if (this.state.tag === 'select') {
        val = new Array();

        for (var item in this.refs.element.selectedOptions) {
          if (isNaN(item)) continue;
          var value = this.refs.element.selectedOptions[item].value;
          val.push(value);
        }

        if (val.length === 1) {
          val = val[0];
        } else {
          val = JSON.stringify(val);
        }

        for (var i = 0; i < this.state.events.length; i++) {
          if (this.state.events[i].event === 'onChange') {
            event = this.state.events[i];
          }
        }

        eventName = 'onChange';
      } else {
        eventName = event.event;
        val = e.target.value;

        if (val != null && val.checked != null) {
          val = e.target.checked;
        }
      }

      this.state.attributes.value = val;
      this.setState(this.state);
      pubsub_js__WEBPACK_IMPORTED_MODULE_2___default.a.publish('element-event', {
        type: "clientEvent",
        eventId: event.id,
        eventName: eventName,
        eventData: val
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hidden) {
        return null;
      }

      if (this.state.hasError) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_error_card_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
          message: this.state.errorMessage
        });
      }

      if (this.props.error) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_error_card_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
          message: this.props.error.message
        });
      }

      if (this.state.loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      }

      if (this.props.js) {
        return Object(_services_render_service_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_objectSpread({
          type: this.props.componentName
        }, this.props.props), this.props.history);
      }

      var children = null;

      if (this.state.content && this.state.content.map) {
        children = this.state.content.map(function (x) {
          if (x.type != null) {
            return Object(_services_render_service_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(x, this.props.history);
          }

          return x;
        }.bind(this));
      } else if (this.state.content) {
        children = this.state.content;
      }

      var attributes = this.state.attributes;

      if (attributes == null) {
        attributes = {};
      }

      if (attributes.id == null) {
        attributes.id = this.props.id;
      }

      if (this.state.events != null && this.state.events.map) {
        this.state.events.map(function (event) {
          attributes[event.event] = function (e) {
            this.onUserEvent(event, e);
          }.bind(this);

          return null;
        }.bind(this));
      }

      if (this.state.tag === "input") {
        if (attributes.type === "text" || attributes.type === "password") {
          attributes.onChange = this.onTextboxChanged.bind(this);
        }

        if (attributes.type === "checkbox") {
          attributes.onChange = this.onCheckboxChanged.bind(this);
        }
      }

      if (this.state.tag === "textarea") {
        attributes.onChange = this.onTextboxChanged.bind(this);
      }

      attributes.ref = 'element';
      attributes.key = this.props.key;
      this.element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.state.tag, attributes, children);
      return [this.element, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_interval__WEBPACK_IMPORTED_MODULE_5___default.a, {
        timeout: this.props.refreshInterval * 1000,
        enabled: this.props.autoRefresh,
        callback: this.loadData.bind(this)
      })];
    }
  }]);

  return UDElementContent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ })

}]);
//# sourceMappingURL=ud-element.98b6e0fc72b16353d581.bundle.map