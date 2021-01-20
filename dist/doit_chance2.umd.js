(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["doit_chance2"] = factory();
	else
		root["doit_chance2"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85ec");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "350b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Logo_01.7db9d92d.png";

/***/ }),

/***/ "4d10":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_45b92326_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f15");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_45b92326_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_45b92326_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "50a4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6d62":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo.d4c9e882.png";

/***/ }),

/***/ "6f15":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "714c":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALeSURBVEhLlZX7S5NRGMffXXRuzZaykmZKKaWVN9KmaWqkaGjYTbOSamEICWmkVmR3NQKLpShqVGZ4S7d1oxKz8JZFP0QURFSQl/Lf+HaeY7Pt3fvK+uHDdp7ne77nfc95zvMKjyZm4YpjbAb9I5PoffUDPUPfZCGNbXTKba4r88aNXcMoLK6AeXMWYuJTEB4RjdCwSFlIE2dOx9bcQlTVtqF/eNLd2D42jcorLVD7+EAQBKhUKmh1ehgCjAg0BslCGl+NH59DxCSkouPZp3/GZKpQKLnxXssJ1DU7YO14iZa+CdxyvJeFNNfvvEBlTStMIWHcPGpDMt8ibhxnTuPB0jP186vJYR+dRvvTjx7xvuGfWLFyNfc5ffU2jwlq9dwW0IGIJ4g5eakJuflHJHNl525yn5w9Fj5m/wWErIrwEIqhVzcuM7HfIcl8bbOdbacvEtO2wTE+M2e8LjZRUuykzfYOiw2B7AHWSOaJa21P+GFuTMnkJcuNCyzlkmKCDsOcms2ECmTvPCipIZq6R6BfvISVaQxsbM6Cxo7xX0hKzyERp6zaCjt7GoJyrtrm3jH4GwK8My6pqIMP2zencWR0AhKSMzlUmq5ar4wfvvmNyw0P5g3FBLALIi47r4zvPv6ApUHBHoZzKHDR2u2mJ7wyto1MobHzNS8xgvoC6fy0OpSfb3DTOvmvPSbuP/8MjUbLjXcVlUpqCEnjrB1FkmLi0LGzvJekZOQt2Cat9wahW6TH2lgz13FjuQtCPTmU3Uqqhp6h75IaJ5IXRO9v4AOxmPY3jPVlek1xTkx1fQeUSiXSs3fzqhKW/215ZCIWU0l1DnzxiEuxvaCY+1iOX+BjIf9wGQ+sj0vCjfYBySdfCFp4/9EqqNRq6PT+aO1/y+MCJYxBJnZACr4A3feIqHhksE9O3r4SWUhjCg3ncwiNn9atvvk3r2vwKw6UnEKwi9Bb6MA2bclBTZPNpX/M4g/NQM/FGhLAXwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "853d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2726520e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b172");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2726520e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_2726520e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "85ec":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9c29":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_5fb16b02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("50a4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_5fb16b02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_5fb16b02_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b172":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cc74":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKJSURBVEhLtZXvS1NRGMev7oc2My0zXLOczGJaJovEIpAUepElmKQmFK2hYmpFWYbRRCrFFkI/xERxVNN0U6aZkUUaK9ubyKCwgiyKzH/j6Z6HuNxzz7neFHzxeXOf7/PZOc+5504YDS/ASqApHnk7D4OTczAU+smtq6EpLnOdB5t9Bzhy9kFr5wg3w4MrDk7Pw4Onn6CmwQOCIEjoDQboGHgNfROfxZ38YfrkMGKy5eJjtbBxUyrExMZRYkGIgIREM6TY7NDY5qX6lDBid3sfGKOiwRQTC5bNNi46nR7i164H79gM1SuHEZuTU3F1dY3t4JuY5XLwiAsz+QWlVK8cSuzpGceGJIuVCinpfTwDptVrwJKShvPmZShxifMsio+Kb4L8uRL/1Bxs3eaA6FUmuO2b5GYk8XDoF2Rl54LBGAU3up8wQTnkjSgoduIiqupbuBlJ3P/8i3jiSZCwwQy9o++ZoJIm8ZCJOD1zF7cuia/eCUBEZCRkZOVA8M1vJqgk8OoHvjk6vR684syVdUmcu/8wrqDy3HUmpEbegRLsqb7YxtRQPPjyGxjF2ZKQ79ksE1Ljys2H2LM3/5B4W+ldorj51gAGtjv2UEUtuobCECdelGTrFuh/8ZWqoZhcYSI+fuoyVdTCP/UdrGkZOOe7j0JUDcU7d+eBwWCEax3DVPF/KCytwEWdqHVTz1Fsz8zGXyVX1VnnXhJkUURcWFbJiqvqW7G4XOLXJUKnf5oVE+6Pf4STp5ugvOLCkqi55MFZy6UESazGvUAYuv7hHfvAzfBYVOw600xtmXxHeoLvuFkli4rJJ9FqS0cpOdyi8mr82+JllWiOgsyvoaVb9fOohqZ4uayQeAH+Ane3drpnnUW1AAAAAElFTkSuQmCC"

/***/ }),

/***/ "cf4e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/signature.77d5dcf4.png";

/***/ }),

/***/ "d59e":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAF5SURBVEhLY9hw7Nn/NQcf/l++5xZZeO2hR/9BZsAww9QVh/8bWzr/l1PSIAtb2Hv+n7HmOMJAn9Dk/wwMDBTh4NgchIFWTj5YFZGCrZ18cRsoIi79X1pOGQWLS8n9Z2JiRlGHjPEaWNu7+P/iHVdRcO+8Hf/5BIRQ1CFjvAa2z9jwf92RJ/8nLz3wv3/h7v+rDzz4P2P1sf/8giIo6pAxQQNX7rv7X0VD/7+wmOT/mWtOUMdARVXt/wJCokDDjlPHQE090/+SMor/Z609SbmBMEkYpsjAwvop/6csO4iC6/uX/eflE0RRh4zxGkgOxmugsrruf11ja7wYpAZZD8lhiI7bpm9A0YPXwLDEQmA4TsaLwxILUPTgNdDWNeB/QFQmVoysDhmT7WVkdcgYr4FO3uH/w5OKsGJkdcgYr4HkYBQD7VwDsSoiBdu7ByMMrOqc/5+VlQ2rQmIwKxs7sAxdgjAQRExcvO9/dkUPWRhUvMEMgxtIPfzsPwANsoWn2owmIAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "e9eb":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABoSURBVEhLY9hw7Nl/WmDaG8zAwEA13Dt/Bx0MpjYeNRiO4QZXdS2gGl666wbCYGyxSy5GSRV2boFUwzPXnBjKkUdtTHuD47NrqIbnb76AMBhbsiEXoyS35PxGquGFWy8N5cijLn72HwAqGwV6EY9magAAAABJRU5ErkJggg=="

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"650bb173-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=4c266dab&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"main"},[_c('div',{staticClass:"container"},[_c('Header'),_c('Main'),_c('Footer')],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=4c266dab&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"650bb173-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=template&id=45b92326&scoped=true&
var Headervue_type_template_id_45b92326_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Headervue_type_template_id_45b92326_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"nav"},[_c('div',{staticClass:"nav__logo"},[_c('img',{attrs:{"src":__webpack_require__("350b"),"width":"30","height":"30"}})]),_c('div',{staticClass:"nav_burger"},[_c('span')])])}]


// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=template&id=45b92326&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: "Header"
});
// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Header.vue?vue&type=style&index=0&id=45b92326&scoped=true&lang=css&
var Headervue_type_style_index_0_id_45b92326_scoped_true_lang_css_ = __webpack_require__("4d10");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Header.vue






/* normalize component */

var component = normalizeComponent(
  components_Headervue_type_script_lang_js_,
  Headervue_type_template_id_45b92326_scoped_true_render,
  Headervue_type_template_id_45b92326_scoped_true_staticRenderFns,
  false,
  null,
  "45b92326",
  null
  
)

/* harmony default export */ var Header = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"650bb173-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Main.vue?vue&type=template&id=5fb16b02&scoped=true&
var Mainvue_type_template_id_5fb16b02_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex"},[_vm._m(0),_c('div',{staticClass:"main__updated"},[_c('div',{staticClass:"main__updated--date"},[_c('p',[_vm._v("Дані оновлені "+_vm._s(new Date().toLocaleDateString())+" о "+_vm._s(new Date().getHours())+":"+_vm._s(new Date().getMinutes()))])]),_vm._m(1)])])}
var Mainvue_type_template_id_5fb16b02_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"block"},[_c('div',{staticClass:"main__title"},[_c('h1',[_vm._v("Паспорт громадянина "),_c('br'),_vm._v(" України")])]),_c('div',{staticClass:"main__info"},[_c('div',{staticClass:"main__info--left side"},[_c('img',{attrs:{"src":__webpack_require__("6d62")}})]),_c('div',{staticClass:"main__info--right side"},[_c('div',{staticClass:"main__right--date"},[_c('p',[_vm._v("Дата "),_c('br'),_vm._v(" народження: "),_c('br'),_vm._v(" 14.07.2002")])]),_c('div',{staticClass:"main__right--number"},[_vm._v(" Номер: "),_c('br'),_vm._v(" 001738565 ")]),_c('div',{staticClass:"main__right--signature"},[_c('img',{attrs:{"src":__webpack_require__("cf4e")}})])])]),_c('div',{staticClass:"main__fio"},[_c('div',{staticClass:"main__name--title"},[_c('p',[_vm._v("Перекупко "),_c('br'),_vm._v(" Артем "),_c('br'),_vm._v(" Юрійович")])]),_c('div',{staticClass:"main__name--circle"},[_c('span')])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main__updated--circle"},[_c('span'),_c('span'),_c('span'),_c('span'),_c('span')])}]


// CONCATENATED MODULE: ./src/components/Main.vue?vue&type=template&id=5fb16b02&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Mainvue_type_script_lang_js_ = ({
  name: "Main"
});
// CONCATENATED MODULE: ./src/components/Main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mainvue_type_script_lang_js_ = (Mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Main.vue?vue&type=style&index=0&id=5fb16b02&scoped=true&lang=css&
var Mainvue_type_style_index_0_id_5fb16b02_scoped_true_lang_css_ = __webpack_require__("9c29");

// CONCATENATED MODULE: ./src/components/Main.vue






/* normalize component */

var Main_component = normalizeComponent(
  components_Mainvue_type_script_lang_js_,
  Mainvue_type_template_id_5fb16b02_scoped_true_render,
  Mainvue_type_template_id_5fb16b02_scoped_true_staticRenderFns,
  false,
  null,
  "5fb16b02",
  null
  
)

/* harmony default export */ var Main = (Main_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"650bb173-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=template&id=2726520e&scoped=true&
var Footervue_type_template_id_2726520e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Footervue_type_template_id_2726520e_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_c('ul',{staticClass:"menu"},[_c('li',{staticClass:"menu__item"},[_c('img',{attrs:{"src":__webpack_require__("d59e")}}),_c('p',[_vm._v("Документи")])]),_c('li',{staticClass:"menu__item"},[_c('img',{attrs:{"src":__webpack_require__("714c")}}),_c('p',[_vm._v("Послуги")])]),_c('li',{staticClass:"menu__item"},[_c('img',{attrs:{"src":__webpack_require__("cc74")}}),_c('p',[_vm._v("Повідомлення")])]),_c('li',{staticClass:"menu__item"},[_c('img',{attrs:{"src":__webpack_require__("e9eb")}}),_c('p',[_vm._v("Меню")])])])])}]


// CONCATENATED MODULE: ./src/components/Footer.vue?vue&type=template&id=2726520e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  name: "Footer"
});
// CONCATENATED MODULE: ./src/components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Footer.vue?vue&type=style&index=0&id=2726520e&scoped=true&lang=css&
var Footervue_type_style_index_0_id_2726520e_scoped_true_lang_css_ = __webpack_require__("853d");

// CONCATENATED MODULE: ./src/components/Footer.vue






/* normalize component */

var Footer_component = normalizeComponent(
  components_Footervue_type_script_lang_js_,
  Footervue_type_template_id_2726520e_scoped_true_render,
  Footervue_type_template_id_2726520e_scoped_true_staticRenderFns,
  false,
  null,
  "2726520e",
  null
  
)

/* harmony default export */ var Footer = (Footer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  components: {
    Footer: Footer,
    Main: Main,
    Header: Header
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (App);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=doit_chance2.umd.js.map