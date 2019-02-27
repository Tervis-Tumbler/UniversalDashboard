(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 1495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Loading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading() {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this));
    _this.state = {
      loadingOpts: true,
      showSplash: true,
      textColor: '#FFFFFF',
      backgroundColor: "#252525",
      text: "PowerShell Universal Dashboard",
      cancelData: false
    };
    return _this;
  }

  _createClass(Loading, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {//this.loadData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.state.cancelData = true;
    }
  }, {
    key: "setColors",
    value: function setColors() {
      $('.loadingWrapper').css('color', this.state.textColor);
      $('.loadingWrapper').css('background-color', this.state.backgroundColor); // $('.ud-dashboard').css('background-color', this.state.backgroundColor);
      // $('.ud-dashboard').css('color', this.state.textColor);
    }
  }, {
    key: "loadData",
    value: function loadData() {
      Object(_services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_3__[/* fetchGet */ "a"])("/api/internal/dashboard/loadingoptions", function (json) {
        if (this.state.cancelData) {
          return;
        }

        var propsToSet = Object.assign({}, this.state);

        if (json.showSplash !== null && json.showSplash !== undefined) {
          propsToSet.showSplash = json.showSplash;
        }

        if (json.backgroundColor && json.backgroundColor !== null) {
          propsToSet.backgroundColor = json.backgroundColor.htmlColor;
        }

        if (json.textColor) {
          propsToSet.textColor = json.textColor.htmlColor;
        }

        if (json.text) {
          propsToSet.text = json.text;
        }

        propsToSet.loadingOpts = false;

        if (!this.state.cancelData) {
          this.setState(propsToSet);
        }

        this.setColors();
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loadingWrapper",
        style: {
          height: '100%',
          width: '100%',
          display: 'flex'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        style: {
          height: '90vh',
          minHeight: '90vh',
          display: !this.state.loadingOpts && this.state.showSplash ? 'block' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "valign-wrapper center-align",
        style: {
          height: '90vh'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, this.state.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "indeterminate"
      }))))));
    }
  }]);

  return Loading;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

}]);
//# sourceMappingURL=ud-loading.98b6e0fc72b16353d581.bundle.map