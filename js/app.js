/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/web/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_babel-loader@8.2.5@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted() {
    let loca = localStorage.getItem('CurrentIdentity');

    if (loca) {
      this.$store.dispatch('ActionsSetUserType', loca);
    } else {
      this.$store.dispatch('ActionsSetUserType', 'employer');
    }
  }

});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/head/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_babel-loader@8.2.5@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/components/head/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    save: {
      type: String,
      // 返回事件
      default: ''
    },
    bgColor: {
      type: String,
      // 背景颜色
      default: '#1F75D9'
    }
  },
  watch: {
    bgColor(val) {
      console.log(val);
      this.$refs.navBar.$el.style.setProperty('--bgBackground', val);
    }

  },

  mounted() {},

  methods: {
    clickLeft(val) {
      if (val) {
        this.$emit('previousStep');
      } else {
        this.$router.go(-1);
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"14510dbf-vue-loader-template\"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"14510dbf-vue-loader-template"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_babel-loader@8.2.5@babel-loader/lib!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    attrs: {
      id: "app"
    }
  }, [_c("router-view", {
    directives: [{
      name: "wechat-title",
      rawName: "v-wechat-title",
      value: _vm.$route.meta.title,
      expression: "$route.meta.title"
    }]
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"14510dbf-vue-loader-template\"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/head/index.vue?vue&type=template&id=eca10f1a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"14510dbf-vue-loader-template"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_babel-loader@8.2.5@babel-loader/lib!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/components/head/index.vue?vue&type=template&id=eca10f1a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("van-nav-bar", {
    ref: "navBar",
    class: _vm.bgColor ? "bgColor" : "",
    attrs: {
      title: _vm.$route.meta.title,
      "left-arrow": "",
      fixed: "",
      placeholder: "",
      "safe-area-inset-top": ""
    },
    on: {
      "click-left": function ($event) {
        return _vm.clickLeft(_vm.save);
      }
    }
  });
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--7-oneOf-1-2!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n#app {\r\n  background-color: #f6f7fb;\r\n  position: relative;\r\n  min-height: 100vh;\n}\nimg {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/head/index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/components/head/index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bgColor[data-v-eca10f1a] {\n  --bgBackground: #1F75D9;\n  border: none;\n}\n.bgColor[data-v-eca10f1a] .van-nav-bar {\n  background-color: var(--bgBackground);\n}\n.bgColor[data-v-eca10f1a] .van-nav-bar .van-icon-arrow-left.van-nav-bar__arrow {\n  color: #fff;\n}\n.bgColor[data-v-eca10f1a] .van-nav-bar .van-nav-bar__title {\n  color: #fff;\n}\n.bgColor[data-v-eca10f1a] .van-nav-bar::after {\n  border: none;\n}\n[data-v-eca10f1a] .van-icon-arrow-left.van-nav-bar__arrow {\n  color: #3F3F3F;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.3@vue-style-loader??ref--7-oneOf-1-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--7-oneOf-1-2!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--7-oneOf-1-2!../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css& */ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/_vue-style-loader@4.1.3@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/lib/addStylesClient.js").default
var update = add("2799bad0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/head/index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.3@vue-style-loader??ref--11-oneOf-1-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/components/head/index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!../../../node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less& */ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/head/index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/_vue-style-loader@4.1.3@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/lib/addStylesClient.js").default
var update = add("55300902", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css& */ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css&");
/* harmony import */ var _node_modules_vue_loader_15_10_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/_vue-loader@15.10.0@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.10.0@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_10_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!../node_modules/_babel-loader@8.2.5@babel-loader/lib!../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css&":
/*!******************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_vue-style-loader@4.1.3@vue-style-loader??ref--7-oneOf-1-0!../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--7-oneOf-1-2!../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css& */ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"14510dbf-vue-loader-template"}!../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!../node_modules/_babel-loader@8.2.5@babel-loader/lib!../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"14510dbf-vue-loader-template\"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/head/index.vue":
/*!***************************************!*\
  !*** ./src/components/head/index.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_eca10f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=eca10f1a&scoped=true& */ "./src/components/head/index.vue?vue&type=template&id=eca10f1a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/head/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_eca10f1a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less& */ "./src/components/head/index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less&");
/* harmony import */ var _node_modules_vue_loader_15_10_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.10.0@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_10_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_eca10f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_eca10f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eca10f1a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/head/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/head/index.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/head/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/_babel-loader@8.2.5@babel-loader/lib!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/head/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/head/index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less&":
/*!*************************************************************************************************!*\
  !*** ./src/components/head/index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eca10f1a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-style-loader@4.1.3@vue-style-loader??ref--11-oneOf-1-0!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!../../../node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less& */ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/head/index.vue?vue&type=style&index=0&id=eca10f1a&scoped=true&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eca10f1a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eca10f1a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eca10f1a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_eca10f1a_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/head/index.vue?vue&type=template&id=eca10f1a&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/head/index.vue?vue&type=template&id=eca10f1a&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eca10f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"14510dbf-vue-loader-template"}!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/_babel-loader@8.2.5@babel-loader/lib!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=eca10f1a&scoped=true& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"14510dbf-vue-loader-template\"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/head/index.vue?vue&type=template&id=eca10f1a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eca10f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_eca10f1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/contractInstantiation.js":
/*!**************************************!*\
  !*** ./src/contractInstantiation.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_casinoContract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/util/casinoContract.js */ "./src/util/casinoContract.js");
/* harmony import */ var _util_getWeb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/util/getWeb.js */ "./src/util/getWeb.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "./node_modules/_web3@1.7.5@web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/util.js */ "./src/util/util.js");
/*
 * @Author: lbt666 '1319451895@qq.com'
 * @Date: 2022-08-25 10:26:26
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-09-22 12:00:13
 * @Description: 
 */





let WEB = '';
init();

function init() {
  window.onload = async () => {
    WEB = Object(_util_getWeb_js__WEBPACK_IMPORTED_MODULE_1__["newBlockchainConnection"])(web3__WEBPACK_IMPORTED_MODULE_2___default.a.givenProvider || window.ethereum);
    await _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('ActionsSetWEB3', WEB);
    await content();
  };
}

async function content() {
  await WEB.eth.requestAccounts().then(async (res, err) => {
    if (!err) {
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('ActionsGetAddress', res[0]); // 实例化srs

      let srscontractInstance = new WEB.eth.Contract(_util_casinoContract_js__WEBPACK_IMPORTED_MODULE_0__["erc20ABI"], _util_casinoContract_js__WEBPACK_IMPORTED_MODULE_0__["srsAddress"]);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('ActionsSetsrscontractInstance', srscontractInstance); // 实例化USDT合约

      let usdtContractInstance = new WEB.eth.Contract(_util_casinoContract_js__WEBPACK_IMPORTED_MODULE_0__["erc20ABI"], _util_casinoContract_js__WEBPACK_IMPORTED_MODULE_0__["usdtAddress"]);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('ActionsSetUsdtContractInstance', usdtContractInstance); // 转账合约

      let TrContractInstance = new WEB.eth.Contract(_util_casinoContract_js__WEBPACK_IMPORTED_MODULE_0__["bondABI"], _util_casinoContract_js__WEBPACK_IMPORTED_MODULE_0__["transferAddress"]);
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('ActionsSetTransfer', TrContractInstance);
      await getBalanceOfSRS(srscontractInstance, res[0]);
      await getBalanceOfUSDT(usdtContractInstance, res[0]);
    }
  });
} // SRS授权余额


async function getBalanceOfSRS(contractInstance, val) {
  let balance = await contractInstance.methods.allowance(val, _util_casinoContract_js__WEBPACK_IMPORTED_MODULE_0__["transferAddress"]).call();
  balance = _util_util_js__WEBPACK_IMPORTED_MODULE_4__["KeepDecimal"](balance / Math.pow(10, 18), 4);
  _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('ActionsSetSRSbalance', balance);
} // USDT授权余额


async function getBalanceOfUSDT(contractInstance, val) {
  let balance = await contractInstance.methods.allowance(val, _util_casinoContract_js__WEBPACK_IMPORTED_MODULE_0__["transferAddress"]).call();
  balance = _util_util_js__WEBPACK_IMPORTED_MODULE_4__["KeepDecimal"](balance / Math.pow(10, 18), 4);
  _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('ActionsSetUSDTbalance', balance);
}

/***/ }),

/***/ "./src/lang/en_us.js":
/*!***************************!*\
  !*** ./src/lang/en_us.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 英语
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/lang/index.js":
/*!***************************!*\
  !*** ./src/lang/index.js ***!
  \***************************/
/*! exports provided: i18n, vantLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vantLocales", function() { return vantLocales; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@2.7.8@vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-i18n */ "./node_modules/_vue-i18n@8.27.2@vue-i18n/dist/vue-i18n.esm.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/_vant@2.12.48@vant/es/index.js");
/* harmony import */ var vant_lib_locale_lang_en_US__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vant/lib/locale/lang/en-US */ "./node_modules/_vant@2.12.48@vant/lib/locale/lang/en-US.js");
/* harmony import */ var vant_lib_locale_lang_en_US__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vant_lib_locale_lang_en_US__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vant_lib_locale_lang_zh_CN__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vant/lib/locale/lang/zh-CN */ "./node_modules/_vant@2.12.48@vant/lib/locale/lang/zh-CN.js");
/* harmony import */ var vant_lib_locale_lang_zh_CN__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vant_lib_locale_lang_zh_CN__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vant_lib_locale_lang_zh_HK__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vant/lib/locale/lang/zh-HK */ "./node_modules/_vant@2.12.48@vant/lib/locale/lang/zh-HK.js");
/* harmony import */ var vant_lib_locale_lang_zh_HK__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vant_lib_locale_lang_zh_HK__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vant_lib_locale_lang_vi_VN__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vant/lib/locale/lang/vi-VN */ "./node_modules/_vant@2.12.48@vant/lib/locale/lang/vi-VN.js");
/* harmony import */ var vant_lib_locale_lang_vi_VN__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vant_lib_locale_lang_vi_VN__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _en_us__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en_us */ "./src/lang/en_us.js");
/* harmony import */ var _zh_cn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zh_cn */ "./src/lang/zh_cn.js");
/* harmony import */ var _zh_hk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./zh_hk */ "./src/lang/zh_hk.js");
/* harmony import */ var _vi_vn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vi-vn */ "./src/lang/vi-vn.js");
/*
 * @Author: lbt666 1319451895@qq.com
 * @Date: 2022-06-23 14:24:00
 * @LastEditors: lbt666 1319451895@qq.com
 * @LastEditTime: 2022-06-23 14:32:02
 * @Description: 
 */











vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_i18n__WEBPACK_IMPORTED_MODULE_1__["default"]);
const messages = {
  en: { ...vant_lib_locale_lang_en_US__WEBPACK_IMPORTED_MODULE_3___default.a,
    ..._en_us__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  zh: { ...vant_lib_locale_lang_zh_CN__WEBPACK_IMPORTED_MODULE_4___default.a,
    ..._zh_cn__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  hk: { ...vant_lib_locale_lang_zh_HK__WEBPACK_IMPORTED_MODULE_5___default.a,
    ..._zh_hk__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  vi: { ...vant_lib_locale_lang_vi_VN__WEBPACK_IMPORTED_MODULE_6___default.a,
    ..._vi_vn__WEBPACK_IMPORTED_MODULE_10__["default"]
  }
};
const i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_1__["default"]({
  locale: 'zh',
  // 设置默认语言
  messages: messages // 设置资源文件对象

}); // 更新vant组件库本身的语言变化，支持国际化

function vantLocales(lang) {
  if (lang === 'en') {
    vant__WEBPACK_IMPORTED_MODULE_2__["Locale"].use(lang, vant_lib_locale_lang_en_US__WEBPACK_IMPORTED_MODULE_3___default.a);
  } else if (lang === 'zh') {
    vant__WEBPACK_IMPORTED_MODULE_2__["Locale"].use(lang, vant_lib_locale_lang_zh_CN__WEBPACK_IMPORTED_MODULE_4___default.a);
  } else if (lang === 'hk') {
    vant__WEBPACK_IMPORTED_MODULE_2__["Locale"].use(lang, vant_lib_locale_lang_zh_HK__WEBPACK_IMPORTED_MODULE_5___default.a);
  } else if (lang === 'zh') {
    vant__WEBPACK_IMPORTED_MODULE_2__["Locale"].use(lang, vant_lib_locale_lang_vi_VN__WEBPACK_IMPORTED_MODULE_6___default.a);
  }
}



/***/ }),

/***/ "./src/lang/vi-vn.js":
/*!***************************!*\
  !*** ./src/lang/vi-vn.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 越语
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/lang/zh_cn.js":
/*!***************************!*\
  !*** ./src/lang/zh_cn.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 简体中文
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/lang/zh_hk.js":
/*!***************************!*\
  !*** ./src/lang/zh_hk.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 繁体中午
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@2.7.8@vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vant */ "./node_modules/_vant@2.12.48@vant/es/index.js");
/* harmony import */ var vant_lib_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vant/lib/index.css */ "./node_modules/_vant@2.12.48@vant/lib/index.css");
/* harmony import */ var vant_lib_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vant_lib_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lang */ "./src/lang/index.js");
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/util.js */ "./src/util/util.js");
/* harmony import */ var _util_bridge_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/bridge.js */ "./src/util/bridge.js");
/* harmony import */ var vue_bus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-bus */ "./node_modules/_vue-bus@1.2.1@vue-bus/dist/vue-bus.esm.js");
/* harmony import */ var _contractInstantiation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contractInstantiation */ "./src/contractInstantiation.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/head */ "./src/components/head/index.vue");
/*
 * @Author: lbt666 1319451895@qq.com
 * @Date: 2022-06-23 14:24:00
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-10-09 09:16:16
 * @Description: 
 */










 // import VConsole from 'vconsole';


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_bus__WEBPACK_IMPORTED_MODULE_9__["default"]); // 全局组件挂载

vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('heads', _components_head__WEBPACK_IMPORTED_MODULE_11__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$util = _util_util_js__WEBPACK_IMPORTED_MODULE_7__;
vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$bridge = _util_bridge_js__WEBPACK_IMPORTED_MODULE_8__;
vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$store = _store__WEBPACK_IMPORTED_MODULE_3__["default"];
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vant__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(__webpack_require__(/*! vue-wechat-title */ "./node_modules/_vue-wechat-title@2.0.7@vue-wechat-title/vue-wechat-title.js"));
Object(_lang__WEBPACK_IMPORTED_MODULE_6__["vantLocales"])(_lang__WEBPACK_IMPORTED_MODULE_6__["i18n"].locale);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].config.productionTip = false; // let NODE_ENV = process.env.NODE_ENV === 'production' ? false : true
// if (NODE_ENV) {
//   new VConsole();
// }

new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]),
  router: _router__WEBPACK_IMPORTED_MODULE_2__["default"],
  i18n: _lang__WEBPACK_IMPORTED_MODULE_6__["i18n"],
  store: _store__WEBPACK_IMPORTED_MODULE_3__["default"]
}).$mount("#app");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@2.7.8@vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/_vue-router@3.5.4@vue-router/dist/vue-router.esm.js");
/*
 * @Author: lbt666 1319451895@qq.com
 * @Date: 2022-06-23 14:24:01
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-08-24 17:54:07
 * @Description: 
 */


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  routes: [{
    path: "/",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! @/view/user/detailed.vue */ "./src/view/user/detailed.vue")),
    meta: {
      title: '收益明细'
    }
  }, {
    path: "/GoldCoin",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! @/view/user/GoldCoin.vue */ "./src/view/user/GoldCoin.vue")),
    meta: {
      title: '星币明细'
    }
  }, {
    path: "/market",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! @/view/market */ "./src/view/market/index.vue")),
    meta: {
      title: '市场'
    }
  }, {
    path: "/earnestMoney",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! @/view/earnestMoney */ "./src/view/earnestMoney/index.vue")),
    meta: {
      title: '保证金'
    }
  }, {
    path: "/browser",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! @/view/browser */ "./src/view/browser/index.vue")),
    meta: {
      title: 'Dapp'
    }
  }, {
    path: "/chooseIdentity",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! @/view/chooseIdentity */ "./src/view/chooseIdentity/index.vue")),
    meta: {
      title: '身份选择'
    }
  }, {
    path: "/information",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! @/view/information */ "./src/view/information/index.vue")),
    meta: {
      title: '基本信息'
    }
  }, {
    path: "/myNeeds",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! @/view/myNeeds */ "./src/view/myNeeds/index.vue")),
    meta: {
      title: '我的需求'
    }
  }, {
    path: "/myService",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! @/view/myService */ "./src/view/myService/index.vue")),
    meta: {
      title: '我的服务'
    }
  }, {
    path: "/demandDetails",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! @/view/demandDetails */ "./src/view/demandDetails/index.vue")),
    meta: {
      title: '需求详情'
    }
  }, {
    path: "/improveInformation",
    component: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! @/view/improveInformation */ "./src/view/improveInformation/index.vue")),
    meta: {
      title: '完善参与信息'
    }
  }],
  mode: 'hash',
  base: "/web/",

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }

}));

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@2.7.8@vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/_vuex@3.6.2@vuex/dist/vuex.esm.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/store/state.js");
/*
 * @Author: lbt666 '1319451895@qq.com'
 * @Date: 2022-06-29 16:27:22
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-08-25 10:37:49
 * @Description: 
 */



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
const store = new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: _state__WEBPACK_IMPORTED_MODULE_2__["default"],
  mutations: {
    getAddress(state, payload) {
      state.address = payload;
    },

    setWEB3(state, payload) {
      state.WEB3 = payload;
    },

    setSRSContract(state, payload) {
      state.SRScontract = payload;
    },

    setUSDTcontract(state, payload) {
      state.USDTcontract = payload;
    },

    setSRSbalance(state, payload) {
      state.SRSbalance = payload;
    },

    setUSDTbalance(state, payload) {
      state.USDTbalance = payload;
    },

    setUserType(state, payload) {
      state.CurrentIdentity = payload;
    },

    setTransfer(state, payload) {
      state.transfer = payload;
    }

  },
  actions: {
    ActionsGetAddress(context, playload) {
      context.commit("getAddress", playload);
    },

    ActionsSetWEB3(context, playload) {
      context.commit("setWEB3", playload);
    },

    ActionsSetSRSbalance(context, playload) {
      context.commit("setSRSbalance", playload);
    },

    ActionsSetUSDTbalance(context, playload) {
      context.commit("setUSDTbalance", playload);
    },

    ActionsSetUsdtContractInstance(context, playload) {
      context.commit("setUSDTcontract", playload);
    },

    ActionsSetsrscontractInstance(context, playload) {
      context.commit("setSRSContract", playload);
    },

    ActionsSetUserType(context, playload) {
      context.commit("setUserType", playload);
    },

    ActionsSetTransfer(context, playload) {
      context.commit("setTransfer", playload);
    }

  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/store/state.js":
/*!****************************!*\
  !*** ./src/store/state.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * @Author: lbt666 '1319451895@qq.com'
 * @Date: 2022-06-29 16:27:22
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-08-16 14:41:33
 * @Description: 
 */
let state = {
  address: null,
  WEB3: null,
  BaseURL_env_dev: 'http://192.168.3.107:8101/',
  BaseURL_env_pro: 'http://dapp-api.starshow.cc/inviter/',
  SRScontract: null,
  USDTcontract: null,
  transfer: null,
  SRSbalance: null,
  USDTbalance: null,
  CurrentIdentity: 'employer' // 当前身份

};
/* harmony default export */ __webpack_exports__["default"] = (state);

/***/ }),

/***/ "./src/util/bond.json":
/*!****************************!*\
  !*** ./src/util/bond.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"name\":\"TransferToken\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"name\":\"transferToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdrawToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ "./src/util/bridge.js":
/*!****************************!*\
  !*** ./src/util/bridge.js ***!
  \****************************/
/*! exports provided: isInSmxApp, isInWeiXin, isInIos, checkBridgeReady, callhandler, registerhandler, getUserToken, goBack, showExtract, closeWeb, topViewStatus, checkUserLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInSmxApp", function() { return isInSmxApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInWeiXin", function() { return isInWeiXin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInIos", function() { return isInIos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBridgeReady", function() { return checkBridgeReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callhandler", function() { return callhandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerhandler", function() { return registerhandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserToken", function() { return getUserToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goBack", function() { return goBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showExtract", function() { return showExtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeWeb", function() { return closeWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topViewStatus", function() { return topViewStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkUserLogin", function() { return checkUserLogin; });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/_core-js@3.23.5@core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);


/**
 * 和 webview交互 ,这段代码是固定的，必须要放到js中. 官方文档 https://github.com/marcuswestin/WebViewJavascriptBridge
 * @param {function} callback
 */
function setupWebViewJavascriptBridge(callback) {
  //Android直接判断即可 , 在ios上不存在 window.WebViewJavascriptBridge 变量
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge);
  } //后续代码是为了ios适用, 所以会导致在普通浏览器上 window.WVJBCallbacks 非空, 非webview中(没有bridge的情况下)尝试调用bridge方法会导致该数组内容激增


  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }

  window.WVJBCallbacks = [callback];
  const WVJBIframe = document.createElement("iframe");
  WVJBIframe.style.display = "none";
  WVJBIframe.src = "wvjbscheme://__BRIDGE_LOADED__";
  setTimeout(() => {
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(() => {
      document.documentElement.removeChild(WVJBIframe);
    }, 0);
  }, 0);
} //是否在线上三门峡APP中, 2.0.0以及以上版本100%可靠. 低于2.0.0的版本在ios上100%可靠.


const isInSmxApp = !!navigator.userAgent.match(/SmxOnline/i); //当前是否在微信里面

const isInWeiXin = !!navigator.userAgent.match(/MicroMessenger/i); //当前是否是ios系统

const isInIos = !!navigator.userAgent.match(/ipad|iphone|ipod/i);
/**
 * bridge是否准备好了? 如果准备好了就直接返回promise<resolved>
 * @param wait 当 wait == true 时, 如果bridge没有准备好,就反复尝试检测一段时间,等到准备好之后再 resolve; 如果wait==false并且bridge没准备好,则直接reject
 * @returns {Promise}
 */

const checkBridgeReady = (wait = true) => {
  if (window.isBridgeReady) {
    return Promise.resolve(true);
  } else if (window.isBridgeReady === false) {
    return Promise.reject(false);
  } else if (isInWeiXin) {
    // 如果在微信,直接视为 false
    window.isBridgeReady = false;
    return Promise.reject(false);
  } else if (wait === false) {
    return Promise.reject(false);
  } else {
    return new Promise((resolve, reject) => {
      let count = 0;
      const timer = setInterval(() => {
        count++;

        if (count > 5) {
          // 大概等 5 秒
          clearInterval(timer); //注入标志位

          window.isBridgeReady = false;
          reject(new Error(`放弃循环检测!(尝试重复${count}次后,仍未检测到bridge准备好)`));
        }

        if (window.isBridgeReady) {
          clearInterval(timer);
          resolve(true);
        }
      }, 1000);
    });
  }
};
/**
 * js调用 app 方法
 * @param {String} name
 * @param {String | Object} data
 */

async function callhandler(name, data = undefined) {
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(bridge => {
      if (!bridge) resolve("");
      bridge.callHandler(name, data, res => {
        if (typeof res === "string" && res.length > 0) {
          //{"code":200,"data":略,"msg":"成功"}
          try {
            let obj = JSON.parse(res);

            if (obj.code === 200) {
              resolve(obj.data);
            } else {
              reject(obj);
            }
          } catch (e) {
            reject(e);
          }
        } else {
          reject(res || "");
        }
      });
    });
  });
}
/**
 * APP调用 js 方法
 * @param {String} name
 * @param {String | Object} data
 */

async function registerhandler(name, callback) {
  return new Promise((resolve, reject) => {
    setupWebViewJavascriptBridge(function (bridge) {
      if (!bridge) reject("bridge不存在");
      bridge.registerHandler(name, function (data, responseCallback) {
        callback(data, responseCallback);
        resolve(data, responseCallback);
      });
    });
  });
} // registerhandler (name, callback) {
//   setupWebViewJavascriptBridge(function (bridge) {
//     bridge.registerHandler(name, function (data, responseCallback) {
//       callback(data, responseCallback)
//     })
//   })
// }

/**
 * 获取token
 */

async function getUserToken() {
  return callhandler("getUserToken");
}
/**
 * 返回
 */

async function goBack() {
  return callhandler("goBack");
}
/**
 * 调用提取保证金弹框(app调js)
 */

async function showExtract() {
  return registerHandler("showExtract");
}
/**
 * 关闭webView，回到首页
 */

async function closeWeb() {
  return callhandler("closeWeb");
}
/**
 * 隐藏显示导航条
 * @param string flag show显示 , hide隐藏
 */

async function topViewStatus(flag) {
  return callhandler("topViewStatus", flag);
} // 是否登录

async function checkUserLogin() {
  return callhandler("checkLogin");
}

/***/ }),

/***/ "./src/util/casinoContract.js":
/*!************************************!*\
  !*** ./src/util/casinoContract.js ***!
  \************************************/
/*! exports provided: srsAddress, usdtAddress, erc20ABI, bondABI, transferAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "srsAddress", function() { return srsAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usdtAddress", function() { return usdtAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erc20ABI", function() { return erc20ABI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bondABI", function() { return bondABI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferAddress", function() { return transferAddress; });
/* harmony import */ var _bond_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bond.json */ "./src/util/bond.json");
var _bond_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./bond.json */ "./src/util/bond.json", 1);
/* harmony import */ var _erc20_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./erc20.json */ "./src/util/erc20.json");
var _erc20_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./erc20.json */ "./src/util/erc20.json", 1);
/*
 * @Author: lbt666 '1319451895@qq.com'
 * @Date: 2022-08-25 10:24:36
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-10-09 09:17:37
 * @Description: 
 */
let NODE_ENV =  true ? true : undefined;


let srsAddress, usdtAddress, transferAddress, bondABI, erc20ABI;
erc20ABI = _erc20_json__WEBPACK_IMPORTED_MODULE_1__;
bondABI = _bond_json__WEBPACK_IMPORTED_MODULE_0__;

if (NODE_ENV) {
  // 测试
  srsAddress = '0x35cfabf2a59bb94d63ae84300d9f9c7ff80e5061';
  usdtAddress = '0x387eec3a24a935bf6af5790e6481f93aeb1f5f93';
  transferAddress = '0xae98BFa6F403Cdd5735a7D053cfCDeE0D59C6b0c';
} else {
  // 正式
  console.log = function () {};

  srsAddress = '0xc7bd7465229AdD37fd0a2aA108075cac854772d6';
  usdtAddress = '';
}



/***/ }),

/***/ "./src/util/erc20.json":
/*!*****************************!*\
  !*** ./src/util/erc20.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name_\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol_\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"inviter\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapV2Pair01\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapV2Pair02\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"uniswapV2Router\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]");

/***/ }),

/***/ "./src/util/getWeb.js":
/*!****************************!*\
  !*** ./src/util/getWeb.js ***!
  \****************************/
/*! exports provided: newBlockchainConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newBlockchainConnection", function() { return newBlockchainConnection; });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/_web3@1.7.5@web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/*
 * @Author: lbt666 '1319451895@qq.com'
 * @Date: 2022-08-25 10:27:10
 * @LastEditors: lbt666 '1319451895@qq.com'
 * @LastEditTime: 2022-08-25 10:49:16
 * @Description: 
 */

let hasProviderEnded = false;
function newBlockchainConnection(webSocketProvider) {
  const web3Instant = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(webSocketProvider);
  window.web3 = web3Instant;
  hasProviderEnded = false;
  let provider = web3Instant.currentProvider;
  provider.on('connect', () => console.log("已连接"));
  provider.on('error', err => console.log('error', err));
  provider.on('chainChanged', chainId => {
    console.log('chainChanged', chainId);
  });
  provider.on('accountsChanged', chainId => {
    location.reload(); // localStorage.removeItem('sign')
    // localStorage.removeItem('signDestry')
    // localStorage.removeItem('token')

    console.log('accountsChanged', chainId);
  });
  provider.on('disconnect', async () => {
    console.log("disconnect");
    if (hasProviderEnded) return;
    hasProviderEnded = true; // provider.reset();
    // removing all the listeners of provider.

    provider.removeAllListeners("connect");
    provider.removeAllListeners("error");
    provider.removeAllListeners("chainChanged");
    provider.removeAllListeners("accountsChanged");
    provider.removeAllListeners("end");
  });
  return web3Instant;
}

/***/ }),

/***/ "./src/util/util.js":
/*!**************************!*\
  !*** ./src/util/util.js ***!
  \**************************/
/*! exports provided: plusXing, accMul, operation, getUnixToDate, copy, KeepDecimal, bidStatus, taskStatusTips, CurrentUserStatus, taskType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plusXing", function() { return plusXing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accMul", function() { return accMul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operation", function() { return operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnixToDate", function() { return getUnixToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeepDecimal", function() { return KeepDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bidStatus", function() { return bidStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskStatusTips", function() { return taskStatusTips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserStatus", function() { return CurrentUserStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskType", function() { return taskType; });
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vant */ "./node_modules/_vant@2.12.48@vant/es/index.js");

/**
 * 方法说明
 * @method 地址格式化
 * @param {str, frontLen, endLen, cha, chaNum} 字符串 起始 结束 标识 标识长度
 * @return {返回值类型} String
 */

function plusXing(str, frontLen, endLen, cha, chaNum) {
  var len = chaNum || str.length - frontLen - endLen;
  var xing = '';

  for (var i = 0; i < len; i++) {
    xing += cha;
  }

  return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
} // 乘法精度解决

function accMul(arg1, arg2) {
  var m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();

  try {
    m += s1.split(".")[1].length;
  } catch (e) {}

  try {
    m += s2.split(".")[1].length;
  } catch (e) {}

  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
} // js计算精度 ===================
// 判断obj是否为一个整数

let isInteger = obj => {
  return Math.floor(obj) === obj;
};
/*
* 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
* @param floatNum {number} 小数
* @return {object}
*   {times:100, num: 314}
*/


let toInteger = floatNum => {
  var ret = {
    times: 1,
    num: 0
  };

  if (isInteger(floatNum)) {
    ret.num = floatNum;
    return ret;
  }

  var strfi = floatNum + '';
  var dotPos = strfi.indexOf('.');
  var len = strfi.substr(dotPos + 1).length;
  var times = Math.pow(10, len);
  var intNum = parseInt(floatNum * times + 0.5, 10);
  ret.times = times;
  ret.num = intNum;
  return ret;
};
/*
* 核心方法，实现加减乘除运算，确保不丢失精度
* 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
*
* @param a {number} 运算数1
* @param b {number} 运算数2
* @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）
*
*/


function operation(a, b, op) {
  var o1 = toInteger(a);
  var o2 = toInteger(b);
  var n1 = o1.num;
  var n2 = o2.num;
  var t1 = o1.times;
  var t2 = o2.times;
  var max = t1 > t2 ? t1 : t2;
  var result = null;

  switch (op) {
    case 'add':
      if (t1 === t2) {
        // 两个小数位数相同
        result = n1 + n2;
      } else if (t1 > t2) {
        // o1 小数位 大于 o2
        result = n1 + n2 * (t1 / t2);
      } else {
        // o1 小数位 小于 o2
        result = n1 * (t2 / t1) + n2;
      }

      return result / max;

    case 'subtract':
      if (t1 === t2) {
        result = n1 - n2;
      } else if (t1 > t2) {
        result = n1 - n2 * (t1 / t2);
      } else {
        result = n1 * (t2 / t1) - n2;
      }

      return result / max;

    case 'multiply':
      result = n1 * n2 / (t1 * t2);
      return result;

    case 'divide':
      result = n1 / n2 * (t2 / t1);
      return result;
  }
} // 加减乘除的四个接口
// let add = (a, b) => {
//   return operation(a, b, 'add')
// }
// let subtract = (a, b) => {
//   return operation(a, b, 'subtract')
// }
// let multiply = (a, b) => {
//   return operation(a, b, 'multiply')
// }
// let divide = (a, b) => {
//   return operation(a, b, 'divide')
// }
//format为“yyyy-mm-dd”、“yyyy/mm/dd”
//str传时间戳
//例： getUnixToDate('yyyy-mm-dd',"1618934400000")
//返回："2021-04-21"

function getUnixToDate(format, str, mark = '.') {
  if (!str) return;
  let stringLength = str.toString().length;
  let oDate = new Date(parseInt(stringLength === 13 ? str : str * 1000)),
      oYear = oDate.getFullYear(),
      oMonth = oDate.getMonth() + 1,
      oDay = oDate.getDate(),
      oHour = oDate.getHours(),
      oMin = oDate.getMinutes(),
      oSec = oDate.getSeconds(),
      oTime = '';

  if (format == 'yyyy-mm-dd hh:mm:ss') {
    oTime = oYear + mark + getzf(oMonth) + mark + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin) + ':' + getzf(oSec);
  } else if (format == 'yyyy-mm-dd hh:mm') {
    oTime = oYear + mark + getzf(oMonth) + mark + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin);
  } else if (format == 'mm-dd hh:mm') {
    oTime = getzf(oMonth) + mark + getzf(oDay) + ' ' + getzf(oHour) + ':' + getzf(oMin);
  } else if (format == 'yyyy-mm-dd') {
    oTime = oYear + mark + getzf(oMonth) + mark + getzf(oDay);
  }

  return oTime;
} //补0操作  

function getzf(num) {
  if (parseInt(num) < 10) {
    num = '0' + num;
  }

  return num;
}
/**
 * 方法说明
 * @method 复制
 * @param {val} String 要复制的字符串
 * @return {void}
 */


function copy(val) {
  let domInput = document.createElement('input');
  domInput.value = val;
  document.body.appendChild(domInput);
  domInput.select();
  document.execCommand("Copy");
  Object(vant__WEBPACK_IMPORTED_MODULE_0__["Toast"])('复制成功');
  domInput.remove();
}
function KeepDecimal(num, decimal = 2) {
  if (!num) return 0;
  return parseFloat(num.toFixed(decimal));
}
function bidStatus(val) {
  switch (val) {
    case 1:
      return '发布需求';
      break;

    case 2:
      return '更新需求';
      break;

    case 3:
      return '暂停需求';
      break;

    case 4:
      return '关闭需求';
      break;

    case 5:
      return '公开需求';
      break;

    case 6:
      return '完成需求';
      break;

    case 7:
      return '删除需求';
      break;

    case 8:
      return '参与竞标';
      break;

    case 9:
      return '备选竞标';
      break;

    case 10:
      return '淘汰竞标';
      break;

    case 11:
      return '选中竞标';
      break;

    case 12:
      return '服务方取消';
      break;

    case 13:
      return '服务方支付完保证金';
      break;

    case 14:
      return '服务方取消保证金支付';
      break;

    case 15:
      return '需求方支付项目款';
      break;
  }
}
function taskStatusTips(CurrentIdentity, my_status, status) {
  if (CurrentIdentity === 'serve') {
    switch (my_status && status === 0) {
      case -1:
        return '待参与';
        break;

      case 0:
        return '已参与';
        break;

      case 1:
        return '参与中';
        break;

      case 2:
        return '已完成';
        break;

      case 3:
        return '已结束';
        break;

      default:
        return seatus1(status);
        break;
    }
  } else {
    return seatus1(status);
  }

  function seatus1(status) {
    switch (status) {
      case 0:
        return '匹配中';
        break;

      case 1:
        return '服务中';
        break;

      case 2:
        return '已完成';
        break;

      case 3:
        return '暂停需求';
        break;

      case 4:
        return '关闭需求';
        break;
    }
  }
}
function CurrentUserStatus(val) {
  switch (val) {
    case 0:
      return '选标中';
      break;

    case 1:
      return '已备选';
      break;

    case 2:
      return '已淘汰';
      break;

    case 3:
      return '未中标';
      break;

    case 4:
      return '已放弃';
      break;

    case 5:
      return '已中标';
      break;

    case 6:
      return '服务中';
      break;
  }
}
function taskType(val) {
  switch (val) {
    case 1:
      return '代码审计';
      break;

    case 2:
      return '讲师招募';
      break;

    case 3:
      return '智能合约';
      break;
  }
}

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=app.js.map