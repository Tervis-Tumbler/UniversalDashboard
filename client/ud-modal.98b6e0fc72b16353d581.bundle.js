(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 1496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UdModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_render_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var UdModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UdModal, _React$Component);

  function UdModal(props) {
    var _this;

    _classCallCheck(this, UdModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UdModal).call(this, props));
    _this.state = {
      bottomSheet: false,
      fixedFooter: false,
      header: null,
      content: null,
      footer: null,
      backgroundColor: null,
      fontColor: null
    };
    _this.loading = true;
    return _this;
  }

  _createClass(UdModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.openToken = PubSub.subscribe('modal.open', this.onOpen.bind(this));
      this.closeToken = PubSub.subscribe('modal.close', this.onClose.bind(this));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.loading) {
        return;
      }

      $(this.modal).modal({
        opacity: this.state.opacity,
        dismissible: this.state.dismissible
      });
      $(this.modal).modal('open');
      this.loading = true;
    }
  }, {
    key: "onOpen",
    value: function onOpen(eventName, props) {
      this.loading = false;
      this.setState(props);
    }
  }, {
    key: "onClose",
    value: function onClose() {
      $(this.modal).modal('close');
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.openToken != null) {
        PubSub.unsubscribe(this.openToken);
      }

      if (this.closeToken != null) {
        PubSub.unsubscribe(this.closeToken);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = "modal";

      if (this.state.bottomSheet) {
        className += " bottom-sheet";
      }

      if (this.state.fixedFooter) {
        className += " modal-fixed-footer";
      }

      var header = null;

      if (this.state.header != null) {
        header = this.state.header.map(function (x) {
          return Object(_services_render_service__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(x);
        });
      }

      var content = null;

      if (this.state.content != null) {
        content = this.state.content.map(function (x) {
          return Object(_services_render_service__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(x);
        });
      }

      var footer = null;

      if (this.state.footer != null) {
        if (this.state.footer.map) {
          footer = this.state.footer.map(function (x) {
            return Object(_services_render_service__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(x);
          });
        } else {
          footer = Object(_services_render_service__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this.state.footer);
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className,
        ref: function ref(modal) {
          return _this2.modal = modal;
        },
        style: {
          color: this.state.fontColor,
          backgroundColor: this.state.backgroundColor
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content"
      }, header, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "modal-footer"
      }, footer));
    }
  }]);

  return UdModal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

}]);
//# sourceMappingURL=ud-modal.98b6e0fc72b16353d581.bundle.map