(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 1488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _services_render_service_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58);
/* harmony import */ var _ud_input_field_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(549);
/* harmony import */ var _services_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82);
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

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));
    _this.state = {
      fields: props.fields,
      newContent: [],
      loading: false,
      canSubmit: !props.validate
    };
    return _this;
  }

  _createClass(Input, [{
    key: "onValueChanged",
    value: function onValueChanged(fieldName, value) {
      var fields = this.state.fields.map(function (x) {
        if (x.name === fieldName) {
          x.value = value;
        }

        return x;
      });
      this.setState({
        fields: fields
      });
    }
  }, {
    key: "onValidating",
    value: function onValidating(fieldName) {
      var fields = this.state.fields.map(function (x) {
        if (x.name === fieldName) {
          x.validating = true;
        }

        return x;
      }.bind(this));
      this.setState({
        fields: fields
      });
    }
  }, {
    key: "onValidateComplete",
    value: function onValidateComplete(fieldName, errorMessage) {
      var valid = true;
      var fields = this.state.fields.map(function (x) {
        if (x.name === fieldName) {
          x.validating = false;
          x.validationError = errorMessage;
        }

        if (x.validationError) {
          valid = false;
        }

        return x;
      }.bind(this));
      this.setState({
        fields: fields,
        canSubmit: valid
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      if (!this.state.canSubmit) return;
      this.setState({
        loading: true
      });
      Object(_services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_2__[/* fetchPost */ "b"])("/api/internal/component/input/".concat(this.props.id), this.state.fields, function (res) {
        if (res.error) {
          _services_toaster__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].error({
            message: res.error.message
          });

          _this2.setState({
            loading: false
          });

          return;
        }

        res.map(function (x) {
          if (x.type === "toast") {
            Materialize.toast(x.text, x.duration);

            if (x.clearInput) {
              var fields = this.state.fields.map(function (x) {
                if (x.type == "checkbox") {
                  x.value = false;
                }

                if (x.type == "textbox") {
                  x.value = '';
                }

                if (x.type == "select") {
                  x.value = '';
                }

                if (x.type == "password") {
                  x.value = '';
                }

                if (x.type == "textarea") {
                  x.value = '';
                }

                return x;
              });
              this.setState({
                fields: fields
              });
            }
          }

          if (x.type === "redirect") {
            if (x.route.toLowerCase().startsWith("http") || x.route.toLowerCase().startsWith("http")) {
              window.location.href = x.route;
            }

            this.props.history.push(x.route);
          }

          if (x.type === "content") {
            this.setState({
              newContent: x.components
            });
          }
        }.bind(_this2));

        _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.loading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card ud-input",
          key: this.props.id,
          style: {
            background: this.props.backgroundColor,
            color: this.props.fontColor
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card-content"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "card-title"
        }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "center-align"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Preloader"], {
          size: "big"
        }))));
      }

      if (this.state.newContent.length > 0) {
        return this.state.newContent.map(function (content) {
          return Object(_services_render_service_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(content);
        });
      }

      var fields = this.state.fields.map(function (x) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ud_input_field_jsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _extends({
          validate: _this3.props.validate,
          key: x.name
        }, x, {
          fontColor: _this3.props.fontColor,
          onValueChanged: _this3.onValueChanged.bind(_this3),
          onValidating: _this3.onValidating.bind(_this3),
          onValidateComplete: _this3.onValidateComplete.bind(_this3),
          onEnter: _this3.onSubmit.bind(_this3)
        }));
      });
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

      var submit = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#!",
        id: "btn".concat(this.props.id),
        className: "btn",
        onClick: this.onSubmit.bind(this)
      }, this.props.submitText);

      if (!this.state.canSubmit) {
        submit = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#!",
          id: "btn".concat(this.props.id),
          className: "btn disabled"
        }, this.props.submitText);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card ud-input",
        key: this.props.id,
        style: {
          background: this.props.backgroundColor,
          color: this.props.fontColor
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title"
      }, this.props.title), fields, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        s: 12,
        className: "right-align"
      }, submit))), actions);
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UdInputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(550);
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_debounce_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_fetch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var UdInputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UdInputField, _React$Component);

  function UdInputField() {
    var _this2;

    _classCallCheck(this, UdInputField);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(UdInputField).call(this));
    _this2.state = {
      file: ''
    };
    return _this2;
  }

  _createClass(UdInputField, [{
    key: "onSelectChanged",
    value: function onSelectChanged(field, e) {
      this.props.onValueChanged(field.name, e.target.value);
    }
  }, {
    key: "onRadioChanged",
    value: function onRadioChanged(field, e) {
      this.props.onValueChanged(field.name, e.currentTarget.value);
    }
  }, {
    key: "onTextFieldChange",
    value: function onTextFieldChange(field, e) {
      this.props.onValueChanged(field.name, e.target.value);
    }
  }, {
    key: "onCheckboxChanged",
    value: function onCheckboxChanged(field, e) {
      this.props.onValueChanged(field.name, e.target.checked);
    }
  }, {
    key: "onFileChanged",
    value: function onFileChanged(field, e) {
      var file = e.target;
      var fileContent = "";
      var reader = new FileReader();

      var _this = this;

      reader.onload = function (e) {
        fileContent = reader.result;

        _this.props.onValueChanged(field.name, fileContent);
      };

      reader.readAsText(file.files[0]);
      var file = e.target.files[0].name;
      this.setState({
        file: file
      });
    }
  }, {
    key: "onValidateField",
    value: function onValidateField(field, e) {
      if (!this.props.validate) return;

      if (this.props.required && (!e.target.value || e.target.value === "")) {
        this.props.onValidateComplete(field.name, "".concat(field.name, " is required."));
        return;
      }

      this.props.onValidating(field.name);
      Object(_services_fetch_service__WEBPACK_IMPORTED_MODULE_3__[/* fetchPost */ "b"])("/api/internal/component/input/validate/".concat(field.validationEndpoint, "/").concat(field.name), e.target.value, function (result) {
        if (result.error != null) {
          var message = this.props.validationErrorMessage;

          if (!message || message === "") {
            message = result.error.message;
          }

          this.props.onValidateComplete(field.name, message);
        } else {
          this.props.onValidateComplete(field.name);
        }
      }.bind(this));
    }
  }, {
    key: "setupDatePicker",
    value: function setupDatePicker() {
      var comp = this;
      $(this.datetime).pickadate({
        selectYears: 100,
        clearText: this.props.clearText,
        okText: this.props.okText,
        cancelText: this.props.cancelText,
        closeOnSelect: true,
        onSet: function onSet(e) {
          // you can use any of the pickadate options here
          var val = this.get('select', 'dd-mm-yyyy');
          comp.onTextFieldChange({
            name: comp.props.name
          }, {
            target: {
              value: val
            }
          }); // auto close on select
          //this.close();
        }
      });
    }
  }, {
    key: "setupTimePicker",
    value: function setupTimePicker() {
      var comp = this;
      $(this.datetime).pickatime({
        clearText: this.props.clearText,
        okText: this.props.okText,
        cancelText: this.props.cancelText,
        closeOnSelect: true,
        onSet: function onSet(e) {
          var val = this.get('select');
          comp.onTextFieldChange({
            name: comp.props.name
          }, {
            target: {
              value: val
            }
          }); // auto close on select

          this.close();
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (Materialize && Materialize.updateTextFields) {
        Materialize.updateTextFields();
      }

      if (this.props.type === 'date') {
        this.setupDatePicker();
      }

      if (this.props.type === 'time') {
        this.setupTimePicker();
      }

      if (this.props.type === 'select') {
        $('.select-wrapper').parent().removeClass("col");
      }
    }
  }, {
    key: "updateTextField",
    value: function updateTextField() {
      if (this.textField != null) {
        var $this = this.textField;

        if (element.value.length > 0 || $(element).is(':focus') || element.autofocus || $this.attr('placeholder') !== null) {
          $this.siblings('label').addClass('active');
        } else if (element.validity) {
          $this.siblings('label').toggleClass('active', element.validity.badInput === true);
        } else {
          $this.siblings('label').removeClass('active');
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateTextField();

      if (this.props.type === 'date') {
        this.setupDatePicker();
      }

      if (this.props.type === 'time') {
        this.setupTimePicker();
      }

      $('.tooltipped').tooltip();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (e.keyCode == 13) {
        this.props.onEnter(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var field = {
        name: this.props.name,
        type: this.props.type,
        value: this.props.value,
        placeholder: this.props.placeholder,
        validOptions: this.props.validOptions,
        validating: this.props.validating,
        validationError: this.props.validationError,
        validationEndpoint: this.props.validationEndpoint
      };

      if (field.type === 'textbox' || field.type === 'password') {
        var type = field.type == 'textbox' ? 'text' : 'password';
        var validationIcon = null;

        if (this.props.validating) {
          validationIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fa fa-circle-o-notch fa-spin fa-fw tooltipped prefix",
            "data-tooltip": "Validating..."
          });
        } else if (this.props.validationError != null) {
          validationIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fa fa-times-circle tooltipped red-text prefix",
            "data-tooltip": this.props.validationError
          });
        }

        var textfield = null;

        if (this.props.debounceTimeout == null) {
          textfield = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            id: field.name,
            name: field.name,
            type: type,
            onChange: function onChange(e) {
              return _this3.onTextFieldChange(field, e);
            },
            value: field.value,
            onBlur: function onBlur(e) {
              return _this3.onValidateField(field, e);
            },
            onKeyDown: this.onKeyDown.bind(this),
            ref: function ref(_ref) {
              return _this3.textField;
            }
          });
        } else {
          textfield = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_debounce_input__WEBPACK_IMPORTED_MODULE_2__["DebounceInput"], {
            id: field.name,
            name: field.name,
            onChange: function onChange(e) {
              return _this3.onTextFieldChange(field, e);
            },
            value: field.value,
            debounceTimeout: this.props.debounceTimeout,
            onKeyDown: this.onKeyDown.bind(this)
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "input-field"
        }, validationIcon, textfield, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          id: field.name + 'label',
          htmlFor: field.name,
          style: {
            color: this.props.fontColor
          }
        }, field.placeholder ? field.placeholder[0] : field.name));
      }

      if (field.type === 'textarea') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "input-field"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          className: "materialize-textarea",
          id: field.name,
          name: field.name,
          type: "textarea",
          onChange: function onChange(e) {
            return _this3.onTextFieldChange(field, e);
          },
          value: field.value,
          onKeyDown: this.onKeyDown.bind(this)
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          id: field.name + 'label',
          htmlFor: field.name,
          style: {
            color: this.props.fontColor
          }
        }, field.placeholder ? field.placeholder[0] : field.name));
      }

      if (field.type === 'checkbox') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "checkbox",
          id: field.name,
          name: field.name,
          onChange: function onChange(e) {
            return _this3.onCheckboxChanged(field, e);
          },
          value: field.value
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          id: field.name + 'label',
          htmlFor: field.name,
          style: {
            color: this.props.fontColor
          }
        }, field.placeholder ? field.placeholder[0] : field.name));
      }

      if (field.type === 'date') {
        return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          id: field.name + 'label',
          htmlFor: field.name,
          style: {
            color: this.props.fontColor
          }
        }, field.placeholder ? field.placeholder[0] : field.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          className: "datepicker",
          id: field.name,
          onChange: function onChange(e) {
            return _this3.onTextFieldChange(field, e);
          },
          value: field.value,
          ref: function ref(datetime) {
            return _this3.datetime = datetime;
          }
        })];
      }

      if (field.type == 'time') {
        return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          id: field.name + 'label',
          htmlFor: field.name,
          style: {
            color: this.props.fontColor
          }
        }, field.placeholder ? field.placeholder[0] : field.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          className: "timepicker",
          id: field.name,
          onChange: function onChange(e) {
            return _this3.onTextFieldChange(field, e);
          },
          value: field.value,
          ref: function ref(datetime) {
            return _this3.datetime = datetime;
          }
        })];
      }

      if (field.type == 'switch') {
        var on = 'On';
        var off = 'Off';

        if (field.placeholder && field.placeholder.length === 2) {
          on = field.placeholder[0];
          off = field.placeholder[1];
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "switch"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, off, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "checkbox",
          id: field.name,
          name: field.name,
          onChange: function onChange(e) {
            return _this3.onCheckboxChanged(field, e);
          },
          value: field.value
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "lever"
        }), on));
      }

      if (field.type == 'select') {
        var options = null;

        if (field.validOptions != null) {
          options = field.validOptions.map(function (option, i) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
              value: option
            }, option);
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          type: "select",
          label: field.placeholder ? field.placeholder[0] : field.name,
          onChange: function onChange(e) {
            return _this3.onSelectChanged(field, e);
          },
          defaultValue: field.value
        }, options);
      }

      if (field.type == 'radioButtons') {
        var usePlaceholder = false;

        if (field.placeholder && field.placeholder.length == field.validOptions.length) {
          usePlaceholder = true;
        }

        var self = this;
        var options = field.validOptions.map(function (option, i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            name: field.name,
            type: "radio",
            id: option,
            value: option,
            onChange: function onChange(e) {
              return self.onRadioChanged(field, e);
            }
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: option
          }, usePlaceholder ? field.placeholder[i] : option));
        });
        return options;
      }

      if (field.type == 'file') {
        var self = this;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "file-field input-field"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "btn"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, field.placeholder ? field.placeholder[0] : field.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "file",
          onChange: function onChange(e) {
            return self.onFileChanged(field, e);
          }
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "file-path-wrapper"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: "file-path validate",
          type: "text",
          value: this.state.file
        })));
      }
    }
  }]);

  return UdInputField;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(610),
    DebounceInput = _require.DebounceInput;

DebounceInput.DebounceInput = DebounceInput;

module.exports = DebounceInput;

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebounceInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(611);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DebounceInput = exports.DebounceInput = function (_React$PureComponent) {
  _inherits(DebounceInput, _React$PureComponent);

  function DebounceInput(props) {
    _classCallCheck(this, DebounceInput);

    var _this = _possibleConstructorReturn(this, (DebounceInput.__proto__ || Object.getPrototypeOf(DebounceInput)).call(this, props));

    _this.onChange = function (event) {
      event.persist();

      var oldValue = _this.state.value;

      _this.setState({ value: event.target.value }, function () {
        var value = _this.state.value;


        if (value.length >= _this.props.minLength) {
          _this.notify(event);
          return;
        }

        // If user hits backspace and goes below minLength consider it cleaning the value
        if (oldValue.length > value.length) {
          _this.notify(_extends({}, event, { target: _extends({}, event.target, { value: '' }) }));
        }
      });
    };

    _this.onKeyDown = function (event) {
      var onKeyDown = _this.props.onKeyDown;


      if (event.key === 'Enter') {
        _this.forceNotify(event);
      }
      // Invoke original onKeyDown if present
      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    _this.onBlur = function (event) {
      var onBlur = _this.props.onBlur;


      _this.forceNotify(event);
      // Invoke original onBlur if present
      if (onBlur) {
        onBlur(event);
      }
    };

    _this.createNotifier = function (debounceTimeout) {
      if (debounceTimeout < 0) {
        _this.notify = function () {
          return null;
        };
      } else if (debounceTimeout === 0) {
        _this.notify = _this.doNotify;
      } else {
        var debouncedChangeFunc = (0, _lodash2.default)(function (event) {
          _this.isDebouncing = false;
          _this.doNotify(event);
        }, debounceTimeout);

        _this.notify = function (event) {
          _this.isDebouncing = true;
          debouncedChangeFunc(event);
        };

        _this.flush = function () {
          return debouncedChangeFunc.flush();
        };

        _this.cancel = function () {
          _this.isDebouncing = false;
          debouncedChangeFunc.cancel();
        };
      }
    };

    _this.doNotify = function () {
      var onChange = _this.props.onChange;


      onChange.apply(undefined, arguments);
    };

    _this.forceNotify = function (event) {
      if (!_this.isDebouncing) {
        return;
      }

      if (_this.cancel) {
        _this.cancel();
      }

      var value = _this.state.value;
      var minLength = _this.props.minLength;


      if (value.length >= minLength) {
        _this.doNotify(event);
      } else {
        _this.doNotify(_extends({}, event, { target: _extends({}, event.target, { value: value }) }));
      }
    };

    _this.state = {
      value: props.value || ''
    };

    _this.isDebouncing = false;
    return _this;
  }

  _createClass(DebounceInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.createNotifier(this.props.debounceTimeout);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var value = _ref.value,
          debounceTimeout = _ref.debounceTimeout;

      if (this.isDebouncing) {
        return;
      }
      if (typeof value !== 'undefined' && this.state.value !== value) {
        this.setState({ value: value });
      }
      if (debounceTimeout !== this.props.debounceTimeout) {
        this.createNotifier(debounceTimeout);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.flush) {
        this.flush();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          element = _props.element,
          _onChange = _props.onChange,
          _value = _props.value,
          _minLength = _props.minLength,
          _debounceTimeout = _props.debounceTimeout,
          forceNotifyByEnter = _props.forceNotifyByEnter,
          forceNotifyOnBlur = _props.forceNotifyOnBlur,
          onKeyDown = _props.onKeyDown,
          onBlur = _props.onBlur,
          inputRef = _props.inputRef,
          props = _objectWithoutProperties(_props, ['element', 'onChange', 'value', 'minLength', 'debounceTimeout', 'forceNotifyByEnter', 'forceNotifyOnBlur', 'onKeyDown', 'onBlur', 'inputRef']);

      var maybeOnKeyDown = void 0;
      if (forceNotifyByEnter) {
        maybeOnKeyDown = { onKeyDown: this.onKeyDown };
      } else if (onKeyDown) {
        maybeOnKeyDown = { onKeyDown: onKeyDown };
      } else {
        maybeOnKeyDown = {};
      }

      var maybeOnBlur = void 0;
      if (forceNotifyOnBlur) {
        maybeOnBlur = { onBlur: this.onBlur };
      } else if (onBlur) {
        maybeOnBlur = { onBlur: onBlur };
      } else {
        maybeOnBlur = {};
      }

      var maybeRef = inputRef ? { ref: inputRef } : {};

      return _react2.default.createElement(element, _extends({}, props, {
        onChange: this.onChange,
        value: this.state.value
      }, maybeOnKeyDown, maybeOnBlur, maybeRef));
    }
  }]);

  return DebounceInput;
}(_react2.default.PureComponent);

DebounceInput.defaultProps = {
  element: 'input',
  type: 'text',
  onKeyDown: undefined,
  onBlur: undefined,
  value: undefined,
  minLength: 0,
  debounceTimeout: 100,
  forceNotifyByEnter: true,
  forceNotifyOnBlur: true,
  inputRef: undefined
};

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)))

/***/ })

}]);
//# sourceMappingURL=ud-input.98b6e0fc72b16353d581.bundle.map