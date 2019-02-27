(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 1487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UDTreeView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_treebeard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1078);
/* harmony import */ var react_treebeard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_treebeard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_fetch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var UDTreeView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UDTreeView, _React$Component);

  function UDTreeView(props) {
    var _this;

    _classCallCheck(this, UDTreeView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UDTreeView).call(this, props));
    _this.state = {
      data: _this.props.node
    };
    _this.onToggle = _this.onToggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(UDTreeView, [{
    key: "onToggle",
    value: function onToggle(node, toggled) {
      Object(_services_fetch_service__WEBPACK_IMPORTED_MODULE_2__[/* fetchPost */ "b"])('/api/internal/component/element/' + this.props.id, {
        nodeId: node.id
      }, function (data) {
        node.children = data;

        if (this.state.cursor) {
          this.state.cursor.active = false;
        }

        node.active = true;

        if (node.children) {
          node.toggled = toggled;
        }

        this.setState({
          cursor: node
        });
      }.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      react_treebeard__WEBPACK_IMPORTED_MODULE_1__["decorators"].Header = function (_ref) {
        var style = _ref.style,
            node = _ref.node;
        var iconType = node.icon;
        var iconClass = "fa fa-".concat(iconType);
        var iconStyle = {
          marginRight: '5px'
        };
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: style.base,
          id: node.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: style.title
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: iconClass,
          style: iconStyle
        }), node.name));
      };

      var style = {
        tree: {
          base: {
            listStyle: 'none',
            backgroundColor: this.props.backgroundColor,
            margin: 0,
            marginTop: '5px',
            padding: 0,
            color: this.props.fontColor,
            fontFamily: 'lucida grande ,tahoma,verdana,arial,sans-serif',
            fontSize: '14px'
          },
          node: {
            base: {
              position: 'relative'
            },
            link: {
              cursor: 'pointer',
              position: 'relative',
              padding: '0px 5px',
              display: 'block'
            },
            activeLink: {
              background: this.props.activeBackgroundColor
            },
            toggle: {
              base: {
                position: 'relative',
                display: 'inline-block',
                verticalAlign: 'top',
                marginLeft: '-5px',
                height: '24px',
                width: '24px'
              },
              wrapper: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '-7px 0 0 -7px',
                height: '14px'
              },
              height: 14,
              width: 14,
              arrow: {
                fill: this.props.toggleColor,
                strokeWidth: 0
              }
            },
            header: {
              base: {
                display: 'inline-block',
                verticalAlign: 'top',
                color: this.props.fontColor
              },
              connector: {
                width: '2px',
                height: '12px',
                borderLeft: 'solid 2px black',
                borderBottom: 'solid 2px black',
                position: 'absolute',
                top: '0px',
                left: '-21px'
              },
              title: {
                lineHeight: '24px',
                verticalAlign: 'middle'
              }
            },
            subtree: {
              listStyle: 'none',
              paddingLeft: '19px'
            },
            loading: {
              color: '#E2C089'
            }
          }
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_treebeard__WEBPACK_IMPORTED_MODULE_1__["Treebeard"], {
        data: this.state.data,
        onToggle: this.onToggle,
        style: style
      });
    }
  }]);

  return UDTreeView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

}]);
//# sourceMappingURL=ud-tree-view.98b6e0fc72b16353d581.bundle.map