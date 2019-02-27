(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 1493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UdImageCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var UdImageCarousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UdImageCarousel, _React$Component);

  function UdImageCarousel(props) {
    var _this;

    _classCallCheck(this, UdImageCarousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UdImageCarousel).call(this, props));
    _this.onCarouselButtonClick = _this.onCarouselButtonClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      slideUrlLink: null
    };
    return _this;
  }

  _createClass(UdImageCarousel, [{
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
    key: "onCarouselButtonClick",
    value: function onCarouselButtonClick(props) {
      var currentButtonParentId = props.id;
      var activeSlideHref = jquery__WEBPACK_IMPORTED_MODULE_2___default()("#".concat(currentButtonParentId, " .carousel-item.active"))[0].attributes.href.value;
      this.setState({
        slideUrlLink: activeSlideHref
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // Carousel Items.
      var carouselItems = this.props.items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          href: item.url,
          style: {
            backgroundColor: item.backgroundColor,
            backgroundImage: "url(".concat(item.backgroundImage, ")"),
            backgroundRepeat: item.backgroundRepeat,
            backgroundSize: item.backgroundSize,
            backgroundPosition: item.backgroundPosition,
            color: item.fontColor
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "".concat(item.titlePosition, "-align"),
          style: {
            color: item.fontColor,
            marginTop: '3em',
            fontSize: '48px',
            fontWeight: '800'
          }
        }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "".concat(item.textPosition, "-align"),
          style: {
            color: item.fontColor,
            marginTop: '1.5em',
            fontSize: '36px',
            fontWeight: '500'
          }
        }, item.text));
      }); // Main carousel options.

      var options = {
        fullWidth: this.props.fullWidth,
        indicators: this.props.showIndecators,
        onCycleTo: function onCycleTo() {
          if (_this2.props.autoCycle) {
            _this2.onCarouselButtonClick(_this2.props);

            setTimeout(function () {
              jquery__WEBPACK_IMPORTED_MODULE_2___default()("#".concat(_this2.props.id)).carousel('next');
            }, _this2.props.speed);
          } else {
            _this2.onCarouselButtonClick(_this2.props);
          }
        } // Fix item button on main carousel.

      };
      var btn = null;

      if (this.props.fixButton) {
        btn = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          class: "btn waves-effect white grey-text darken-text-2",
          href: this.state.slideUrlLink,
          target: "_blank"
        }, this.props.buttonText);
      }

      ; // Set the width and height of the carousel container 

      jquery__WEBPACK_IMPORTED_MODULE_2___default()("div#".concat(this.props.id, ".carousel.carousel-slider")).css({
        "width": "".concat(this.props.width),
        "height": "".concat(this.props.height)
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
        carouselId: this.props.id,
        options: options,
        fixedItem: btn
      }, carouselItems);
    }
  }]);

  return UdImageCarousel;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

}]);
//# sourceMappingURL=ud-image-carousel.98b6e0fc72b16353d581.bundle.map