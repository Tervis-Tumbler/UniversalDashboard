(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 1486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UdMonitor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667);
/* harmony import */ var _services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var react_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var react_interval__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_interval__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _error_card_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _ud_link_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);
/* harmony import */ var _ud_input_field_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(549);
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










var UdMonitor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UdMonitor, _React$Component);

  function UdMonitor(props) {
    var _this;

    _classCallCheck(this, UdMonitor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UdMonitor).call(this, props));
    _this.state = {
      chartData: null,
      errorMessage: "",
      hasError: false,
      fields: props.filterFields
    };
    return _this;
  }

  _createClass(UdMonitor, [{
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
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var queryString = "";

      if (this.state.fields != null) {
        queryString = "?";

        for (var i = 0; i < this.state.fields.length; i++) {
          var field = this.state.fields[i];
          queryString += field.name + "=" + escape(field.value) + "&";
        }

        queryString = queryString.substr(0, queryString.length - 1);
      }

      Object(_services_fetch_service_jsx__WEBPACK_IMPORTED_MODULE_2__[/* fetchGet */ "a"])("/api/internal/component/element/".concat(this.props.id).concat(queryString), function (data) {
        if (!this.refs.chart) return;

        if (data.error) {
          this.setState({
            hasError: true,
            errorMessage: data.error.message
          });
          return;
        }

        var chart = this.refs.chart.chartInstance;

        if (chart == null) {
          console.log("Missing chart reference! " + JSON.stringify(data));
          return;
        }

        if (data.length) {
          for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            chart.data.datasets[i].data.push(dataItem);

            if (chart.data.datasets[i].data.length > this.props.dataPointRetention) {
              chart.data.datasets[i].data.shift();
            }
          }
        } else {
          chart.data.datasets[0].data.push(data);

          if (chart.data.datasets[0].data.length > this.props.dataPointRetention) {
            chart.data.datasets[0].data.shift();
          }
        }

        chart.update();
      }.bind(this));
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadData();
      this.pubSubToken = pubsub_js__WEBPACK_IMPORTED_MODULE_7___default.a.subscribe(this.props.id, this.onIncomingEvent.bind(this));
    }
  }, {
    key: "renderArea",
    value: function renderArea(data, options) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Area"], {
        ref: "chart",
        data: data,
        options: options
      });
    }
  }, {
    key: "renderDoughnut",
    value: function renderDoughnut(data, options) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__[/* Doughnut */ "c"], {
        ref: "chart",
        data: data,
        options: options
      });
    }
  }, {
    key: "renderBar",
    value: function renderBar(data, options) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__[/* Bar */ "b"], {
        ref: "chart",
        data: data,
        options: options
      });
    }
  }, {
    key: "renderLine",
    value: function renderLine(data, options) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__[/* Line */ "e"], {
        ref: "chart",
        data: data,
        options: options
      });
    }
  }, {
    key: "renderRadar",
    value: function renderRadar(data, options) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Radar, {
        ref: "chart",
        data: data,
        options: options
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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

      var datasets = new Array();

      for (var i = 0; i < this.props.labels.length; i++) {
        var dataset = {
          label: this.props.labels[i],
          backgroundColor: this.props.chartBackgroundColor[i],
          borderColor: this.props.chartBorderColor[i],
          borderWidth: this.props.borderWidth,
          data: []
        };
        datasets.push(dataset);
      }

      var data = {
        datasets: datasets
      };
      var fields = null;

      if (this.state.fields != null) {
        fields = this.state.fields.map(function (x) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ud_input_field_jsx__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], _extends({
            key: x.name
          }, x, {
            fontColor: _this2.props.fontColor,
            onValueChanged: _this2.onValueChanged.bind(_this2),
            debounceTimeout: 300
          }));
        });
      }

      var options = this.props.options;

      if (options) {
        if (options.scales) {
          options.scales.xAxes = [{
            type: "time",
            time: {
              // round: 'day'
              tooltipFormat: 'll HH:mm'
            },
            scaleLabel: {
              display: true
            }
          }];
        } else {
          options.scales = {
            xAxes: [{
              type: "time",
              time: {
                // round: 'day'
                tooltipFormat: 'll HH:mm'
              },
              scaleLabel: {
                display: true
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true
              }
            }]
          };
        }
      } else {
        options = {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              type: "time",
              time: {
                // round: 'day'
                tooltipFormat: 'll HH:mm'
              },
              scaleLabel: {
                display: true
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true
              }
            }]
          },
          layout: {
            padding: {
              bottom: 25
            }
          },
          maintainAspectRatio: true
        };
      }

      if (this.props.width !== null && this.props.height !== null) {
        var cardStyle = {
          background: this.props.backgroundColor,
          color: this.props.fontColor,
          width: this.props.width,
          height: this.props.height,
          marginBottom: '3rem'
        };
        options.maintainAspectRatio = false;
      } else if (this.props.width !== null && this.props.height === null) {
        var cardStyle = {
          background: this.props.backgroundColor,
          color: this.props.fontColor,
          width: this.props.width
        };
      } else if (this.props.width === null && this.props.height !== null) {
        return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_error_card_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          message: 'Width property is missing',
          key: this.props.id,
          id: this.props.id,
          title: this.props.title
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_interval__WEBPACK_IMPORTED_MODULE_3___default.a, {
          timeout: this.props.refreshInterval * 1000,
          enabled: this.props.autoRefresh,
          callback: this.loadData.bind(this)
        })];
      } else {
        var cardStyle = {
          background: this.props.backgroundColor,
          color: this.props.fontColor
        };
      }

      var chart = null;

      switch (this.props.chartType) {
        // Bar
        case 0:
          chart = this.renderBar(data, options);
          break;
        // Line

        case 1:
          chart = this.renderLine(data, options);
          break;
        // Area

        case 2:
          chart = this.renderArea(data, options);
          break;
        // Doughnut

        case 3:
          chart = this.renderDoughnut(data, options);
          break;
        // Radar

        case 3:
          chart = this.renderRadar(data, options);
          break;
      }

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
        className: "card ud-monitor",
        id: this.props.id,
        key: this.props.id,
        style: {
          background: cardStyle.background,
          color: cardStyle.color,
          marginBottom: cardStyle.marginBottom
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content",
        style: {
          width: cardStyle.width,
          height: cardStyle.height
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "card-title"
      }, this.props.title), chart, fields, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_interval__WEBPACK_IMPORTED_MODULE_3___default.a, {
        timeout: this.props.refreshInterval * 1000,
        enabled: this.props.autoRefresh,
        callback: this.loadData.bind(this)
      })), actions);
    }
  }]);

  return UdMonitor;
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

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 402,
	"./af.js": 402,
	"./ar": 403,
	"./ar-dz": 404,
	"./ar-dz.js": 404,
	"./ar-kw": 405,
	"./ar-kw.js": 405,
	"./ar-ly": 406,
	"./ar-ly.js": 406,
	"./ar-ma": 407,
	"./ar-ma.js": 407,
	"./ar-sa": 408,
	"./ar-sa.js": 408,
	"./ar-tn": 409,
	"./ar-tn.js": 409,
	"./ar.js": 403,
	"./az": 410,
	"./az.js": 410,
	"./be": 411,
	"./be.js": 411,
	"./bg": 412,
	"./bg.js": 412,
	"./bm": 413,
	"./bm.js": 413,
	"./bn": 414,
	"./bn.js": 414,
	"./bo": 415,
	"./bo.js": 415,
	"./br": 416,
	"./br.js": 416,
	"./bs": 417,
	"./bs.js": 417,
	"./ca": 418,
	"./ca.js": 418,
	"./cs": 419,
	"./cs.js": 419,
	"./cv": 420,
	"./cv.js": 420,
	"./cy": 421,
	"./cy.js": 421,
	"./da": 422,
	"./da.js": 422,
	"./de": 423,
	"./de-at": 424,
	"./de-at.js": 424,
	"./de-ch": 425,
	"./de-ch.js": 425,
	"./de.js": 423,
	"./dv": 426,
	"./dv.js": 426,
	"./el": 427,
	"./el.js": 427,
	"./en-au": 428,
	"./en-au.js": 428,
	"./en-ca": 429,
	"./en-ca.js": 429,
	"./en-gb": 430,
	"./en-gb.js": 430,
	"./en-ie": 431,
	"./en-ie.js": 431,
	"./en-nz": 432,
	"./en-nz.js": 432,
	"./eo": 433,
	"./eo.js": 433,
	"./es": 434,
	"./es-do": 435,
	"./es-do.js": 435,
	"./es-us": 436,
	"./es-us.js": 436,
	"./es.js": 434,
	"./et": 437,
	"./et.js": 437,
	"./eu": 438,
	"./eu.js": 438,
	"./fa": 439,
	"./fa.js": 439,
	"./fi": 440,
	"./fi.js": 440,
	"./fo": 441,
	"./fo.js": 441,
	"./fr": 442,
	"./fr-ca": 443,
	"./fr-ca.js": 443,
	"./fr-ch": 444,
	"./fr-ch.js": 444,
	"./fr.js": 442,
	"./fy": 445,
	"./fy.js": 445,
	"./gd": 446,
	"./gd.js": 446,
	"./gl": 447,
	"./gl.js": 447,
	"./gom-latn": 448,
	"./gom-latn.js": 448,
	"./gu": 449,
	"./gu.js": 449,
	"./he": 450,
	"./he.js": 450,
	"./hi": 451,
	"./hi.js": 451,
	"./hr": 452,
	"./hr.js": 452,
	"./hu": 453,
	"./hu.js": 453,
	"./hy-am": 454,
	"./hy-am.js": 454,
	"./id": 455,
	"./id.js": 455,
	"./is": 456,
	"./is.js": 456,
	"./it": 457,
	"./it.js": 457,
	"./ja": 458,
	"./ja.js": 458,
	"./jv": 459,
	"./jv.js": 459,
	"./ka": 460,
	"./ka.js": 460,
	"./kk": 461,
	"./kk.js": 461,
	"./km": 462,
	"./km.js": 462,
	"./kn": 463,
	"./kn.js": 463,
	"./ko": 464,
	"./ko.js": 464,
	"./ky": 465,
	"./ky.js": 465,
	"./lb": 466,
	"./lb.js": 466,
	"./lo": 467,
	"./lo.js": 467,
	"./lt": 468,
	"./lt.js": 468,
	"./lv": 469,
	"./lv.js": 469,
	"./me": 470,
	"./me.js": 470,
	"./mi": 471,
	"./mi.js": 471,
	"./mk": 472,
	"./mk.js": 472,
	"./ml": 473,
	"./ml.js": 473,
	"./mr": 474,
	"./mr.js": 474,
	"./ms": 475,
	"./ms-my": 476,
	"./ms-my.js": 476,
	"./ms.js": 475,
	"./my": 477,
	"./my.js": 477,
	"./nb": 478,
	"./nb.js": 478,
	"./ne": 479,
	"./ne.js": 479,
	"./nl": 480,
	"./nl-be": 481,
	"./nl-be.js": 481,
	"./nl.js": 480,
	"./nn": 482,
	"./nn.js": 482,
	"./pa-in": 483,
	"./pa-in.js": 483,
	"./pl": 484,
	"./pl.js": 484,
	"./pt": 485,
	"./pt-br": 486,
	"./pt-br.js": 486,
	"./pt.js": 485,
	"./ro": 487,
	"./ro.js": 487,
	"./ru": 488,
	"./ru.js": 488,
	"./sd": 489,
	"./sd.js": 489,
	"./se": 490,
	"./se.js": 490,
	"./si": 491,
	"./si.js": 491,
	"./sk": 492,
	"./sk.js": 492,
	"./sl": 493,
	"./sl.js": 493,
	"./sq": 494,
	"./sq.js": 494,
	"./sr": 495,
	"./sr-cyrl": 496,
	"./sr-cyrl.js": 496,
	"./sr.js": 495,
	"./ss": 497,
	"./ss.js": 497,
	"./sv": 498,
	"./sv.js": 498,
	"./sw": 499,
	"./sw.js": 499,
	"./ta": 500,
	"./ta.js": 500,
	"./te": 501,
	"./te.js": 501,
	"./tet": 502,
	"./tet.js": 502,
	"./th": 503,
	"./th.js": 503,
	"./tl-ph": 504,
	"./tl-ph.js": 504,
	"./tlh": 505,
	"./tlh.js": 505,
	"./tr": 506,
	"./tr.js": 506,
	"./tzl": 507,
	"./tzl.js": 507,
	"./tzm": 508,
	"./tzm-latn": 509,
	"./tzm-latn.js": 509,
	"./tzm.js": 508,
	"./uk": 510,
	"./uk.js": 510,
	"./ur": 511,
	"./ur.js": 511,
	"./uz": 512,
	"./uz-latn": 513,
	"./uz-latn.js": 513,
	"./uz.js": 512,
	"./vi": 514,
	"./vi.js": 514,
	"./x-pseudo": 515,
	"./x-pseudo.js": 515,
	"./yo": 516,
	"./yo.js": 516,
	"./zh-cn": 517,
	"./zh-cn.js": 517,
	"./zh-hk": 518,
	"./zh-hk.js": 518,
	"./zh-tw": 519,
	"./zh-tw.js": 519
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 559;

/***/ })

}]);
//# sourceMappingURL=ud-monitor.98b6e0fc72b16353d581.bundle.map