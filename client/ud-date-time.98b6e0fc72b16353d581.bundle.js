(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 1491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateTime; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(382);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DateTime =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateTime, _React$Component);

  function DateTime() {
    _classCallCheck(this, DateTime);

    return _possibleConstructorReturn(this, _getPrototypeOf(DateTime).apply(this, arguments));
  }

  _createClass(DateTime, [{
    key: "render",
    value: function render() {
      var y = this.props.value;
      var moment2 = moment__WEBPACK_IMPORTED_MODULE_1___default()(y);

      if (moment2.isValid) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, moment2.format(this.props.dateTimeFormat));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, y);
    }
  }]);

  return DateTime;
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
//# sourceMappingURL=ud-date-time.98b6e0fc72b16353d581.bundle.map