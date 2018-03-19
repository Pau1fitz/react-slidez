module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./Slideshow.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./Slideshow.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Arrows = function Arrows(props) {

	return _react2.default.createElement(
		'div',
		{ className: 'arrows' },
		_react2.default.createElement('span', { onClick: props.decreaseCount, className: 'arrow btn-arrow btn-arrow-left' }),
		_react2.default.createElement('span', { onClick: props.increaseCount, className: 'arrow btn-arrow btn-arrow-right' })
	);
};

exports.default = Arrows;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Arrows = __webpack_require__(2);

var _Arrows2 = _interopRequireDefault(_Arrows);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slideshow = function (_Component) {
	_inherits(Slideshow, _Component);

	function Slideshow(props) {
		_classCallCheck(this, Slideshow);

		var _this = _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).call(this, props));

		_this.state = {
			currentSlide: typeof props.defaultIndex === 'undefined' ? 0 : props.defaultIndex,
			slideInterval: typeof props.slideInterval === 'undefined' ? 2000 : props.slideInterval,
			showIndex: typeof props.showIndex === 'undefined' ? true : props.showIndex,
			showArrows: typeof props.showArrows === 'undefined' ? true : props.showArrows,
			effect: typeof props.effect === 'undefined' ? true : props.effect,
			autoplay: typeof props.autoplay === 'undefined' ? true : props.autoplay,
			enableKeyboard: typeof props.enableKeyboard === 'undefined' ? true : props.enableKeyboard,
			slides: typeof props.slides !== 'undefined' && props.slides.length > 0 ? props.slides : props.children
		};

		_this.runSlideShow = _this.runSlideShow.bind(_this);
		_this.autoSlideshow = _this.autoSlideshow.bind(_this);
		_this.restartSlideshow = _this.restartSlideshow.bind(_this);
		_this.increaseCount = _this.increaseCount.bind(_this);
		_this.decreaseCount = _this.decreaseCount.bind(_this);
		_this.handleKeyboard = _this.handleKeyboard.bind(_this);
		return _this;
	}

	_createClass(Slideshow, [{
		key: 'componentDidMount',
		value: function componentDidMount() {

			if (this.state.autoplay) this.runSlideShow();

			if (this.state.enableKeyboard) document.addEventListener('keydown', this.handleKeyboard);
		}
	}, {
		key: 'handleKeyboard',
		value: function handleKeyboard(e) {
			e.keyCode === 37 ? this.decreaseCount() : e.keyCode === 39 ? this.increaseCount() : null;
		}
	}, {
		key: 'runSlideShow',
		value: function runSlideShow() {
			var intervalId = setInterval(this.autoSlideshow, this.state.slideInterval);
			this.setState({
				intervalId: intervalId
			});
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.state.intervalId);
			document.removeEventListener('keydown', this.handleKeyboard);
		}
	}, {
		key: 'autoSlideshow',
		value: function autoSlideshow() {
			this.setState({
				currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
			});
		}
	}, {
		key: 'restartSlideshow',
		value: function restartSlideshow() {
			clearInterval(this.state.intervalId);
			this.runSlideShow();
		}
	}, {
		key: 'increaseCount',
		value: function increaseCount() {

			this.state.effect === 'left' ? this.setState({
				effect: 'right'
			}) : this.state.effect === 'bounce-left' ? this.setState({
				effect: 'bounce-right'
			}) : null;

			this.state.autoplay ? this.restartSlideshow() : null;
			this.setState({
				currentSlide: (this.state.currentSlide + 1) % this.state.slides.length
			});
		}
	}, {
		key: 'decreaseCount',
		value: function decreaseCount() {

			this.state.effect === 'right' ? this.setState({
				effect: 'left'
			}) : this.state.effect === 'bounce-right' ? this.setState({
				effect: 'bounce-left'
			}) : null;

			this.state.autoplay ? this.restartSlideshow() : null;

			var currentSlide = void 0;
			currentSlide = this.state.currentSlide === 0 ? this.state.slides.length - 1 : currentSlide = this.state.currentSlide - 1;
			this.setState({
				currentSlide: currentSlide
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    slides = _state.slides,
			    showIndex = _state.showIndex,
			    effect = _state.effect,
			    showArrows = _state.showArrows;


			var slideEffect = effect === undefined ? 'fade' : effect;
			var slideShowSlides = void 0;

			if (!this.props.children) {
				slideShowSlides = slides.map(function (slide, i) {
					return _react2.default.createElement('li', { className: 'slide ' + effect + ' ' + (_this2.state.currentSlide === i ? "showing-" + slideEffect : ""), key: i, style: { backgroundImage: 'url(' + slide + ')' } });
				});
			} else {
				slideShowSlides = slides.map(function (slide, i) {
					return _react2.default.createElement(
						'li',
						{ className: 'slide ' + effect + ' ' + (_this2.state.currentSlide === i ? "showing-" + slideEffect : ""), key: i },
						slide
					);
				});
			}

			return _react2.default.createElement(
				'div',
				{ style: { position: 'absolute', height: this.props.height || '100%', width: this.props.width || '100%' } },
				_react2.default.createElement(
					'div',
					{ className: 'slideshow-container' },
					_react2.default.createElement(
						'ul',
						{ className: 'slides' },
						slideShowSlides
					),
					showArrows && _react2.default.createElement(_Arrows2.default, { decreaseCount: this.decreaseCount, increaseCount: this.increaseCount }),
					showIndex && _react2.default.createElement(
						'div',
						{ className: 'show-index' },
						_react2.default.createElement(
							'p',
							null,
							this.state.currentSlide + 1 + ' / ' + slides.length
						)
					)
				)
			);
		}
	}]);

	return Slideshow;
}(_react.Component);

exports.default = Slideshow;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "html,\r\nbody {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbackground: #000;\r\n}\r\n\r\n.slideshow-container {\r\n\tposition: absolute;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\n.slides {\r\n\tposition: relative;\r\n\theight: 100%;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tlist-style-type: none;\r\n\toverflow: hidden;\r\n}\r\n\r\n.slide {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\topacity: 0;\r\n\tz-index: 1;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n}\r\n\r\n.showing-fade {\r\n\topacity: 1;\r\n\tz-index: 2;\r\n\tanimation-duration: 1s;\r\n\tanimation-name: slide-fade;\r\n}\r\n\r\n@keyframes slide-fade {\r\n\tfrom {\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\tto {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n\r\n.showing-right {\r\n\topacity: 1;\r\n\tanimation-duration: 1s;\r\n\tanimation-name: slide-right;\r\n}\r\n\r\n\r\n@keyframes slide-right {\r\n\tfrom {\r\n\t\tleft: -50%;\r\n\t}\r\n\r\n\tto {\r\n\t\tleft: 0;\r\n\t}\r\n}\r\n\r\n.showing-left {\r\n\topacity: 1;\r\n\tanimation-duration: 1s;\r\n\tanimation-name: slide-left;\r\n}\r\n\r\n@keyframes slide-left {\r\n\tfrom {\r\n\t\tleft: 100%;\r\n\t}\r\n\r\n\tto {\r\n\t\tleft: 0;\r\n\t}\r\n}\r\n\r\n.showing-top {\r\n\topacity: 1;\r\n\tanimation-duration: 1s;\r\n\tanimation-name: slide-top;\r\n}\r\n\r\n@keyframes slide-top {\r\n\tfrom {\r\n\t\ttop: 100%;\r\n\t}\r\n\r\n\tto {\r\n\t\ttop: 0;\r\n\t}\r\n}\r\n\r\n.showing-bottom {\r\n\topacity: 1;\r\n\tanimation-duration: 1s;\r\n\tanimation-name: slide-bottom;\r\n}\r\n\r\n@keyframes slide-bottom {\r\n\tfrom {\r\n\t\ttop: -100%;\r\n\t}\r\n\r\n\tto {\r\n\t\ttop: 0;\r\n\t}\r\n}\r\n\r\n.showing-bounce-left {\r\n\topacity: 1;\r\n\tanimation-duration: 1s;\r\n\tanimation-name: slide-bounce-left;\r\n}\r\n\r\n@keyframes slide-bounce-left {\r\n\t0%{\r\n\t\tleft: 100%;\r\n\t}\r\n\t50%{\r\n\t\tleft: -20%;\r\n\t}\r\n\t100%{\r\n\t\tleft: 0;\r\n\t}\r\n}\r\n\r\n.showing-bounce-right {\r\n\topacity: 1;\r\n\tanimation-duration: 1s;\r\n\tanimation-name: slide-bounce-right;\r\n}\r\n\r\n@keyframes slide-bounce-right {\r\n\t0%{\r\n\t\tleft: -100%;\r\n\t}\r\n\t50%{\r\n\t\tleft: 20%;\r\n\t}\r\n\t100%{\r\n\t\tleft: 0;\r\n\t}\r\n}\r\n\r\n.show-index {\r\n\tcolor: #fff;\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tz-index: 100;\r\n\tleft: 50%;\r\n\tfont-size: 28px;\r\n\tfont-family: 'Slabo 27px', serif;\r\n}\r\n\r\nbutton:focus {\r\n    outline: none;\r\n}\r\n\r\n.btn-arrow {\r\n\tcolor: transparent;\r\n\tdisplay: block;\r\n\tfont-size: 5px;\r\n\tline-height: 0;\r\n\t-moz-transition: all 0.3s;\r\n\t-o-transition: all 0.3s;\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tz-index: 10;\r\n\tcursor: pointer;\r\n\theight: 50px;\r\n\twidth: 50px;\r\n\tborder-radius: 50%;\r\n\tpadding: 5px;\r\n\tz-index: 10000;\r\n}\r\n\r\n.btn-arrow:hover, .btn-arrow:focus {\r\n\tbackground: rgba(256, 256, 256, 0.1);\r\n}\r\n\r\n.btn-arrow:hover::before, .btn-arrow:hover::after, .btn-arrow:focus::before, .btn-arrow:focus::after {\r\n\tbackground: rgba(256, 256, 256, 0.5);\r\n}\r\n\r\n.btn-arrow::before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tbackground: rgba(256,256,256, 0.6);\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 6em;\r\n\theight: 2em;\r\n}\r\n\r\n.btn-arrow::after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tbackground: rgba(256,256,256, 0.6);\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 2em;\r\n\theight: 6em;\r\n}\r\n.btn-arrow.btn-arrow-left {\r\n\t-moz-transform: rotate(-45deg);\r\n\t-ms-transform: rotate(-45deg);\r\n\t-webkit-transform: rotate(-45deg);\r\n\ttransform: rotate(-45deg);\r\n\tleft: 5%;\r\n}\r\n.btn-arrow.btn-arrow-left::before, .btn-arrow.btn-arrow-left::after {\r\n\ttop: 18px;\r\n\tleft: 18px;\r\n}\r\n.btn-arrow.btn-arrow-right {\r\n\t-moz-transform: rotate(135deg);\r\n\t-ms-transform: rotate(135deg);\r\n\t-webkit-transform: rotate(135deg);\r\n\ttransform: rotate(135deg);\r\n\tright: 5%;\r\n}\r\n.btn-arrow.btn-arrow-right::before, .btn-arrow.btn-arrow-right::after {\r\n\ttop: 18px;\r\n\tleft: 18px;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);