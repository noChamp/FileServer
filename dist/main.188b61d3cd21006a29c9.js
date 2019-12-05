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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/audio/audio.js":
/*!***************************************!*\
  !*** ./src/components/audio/audio.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.createAudio = function (lesson) {
    
    const element = document.createElement('audio');        
    element.setAttribute('type', 'audio/mp3');
    element.setAttribute('src', `https://my-cors-proxy.mycorsproxy.workers.dev/?url=https%3A%2F%2Fdocs.google.com%2Fuc%3Fexport%3Dopen%26id%3D${lesson.audio}`);
    element.setAttribute('controls', '');
    element.innerHTML = 'Your browser does not support the <code>audio</code> element.'

    return element;
}


/***/ }),

/***/ "./src/components/document/document.js":
/*!*********************************************!*\
  !*** ./src/components/document/document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.createDocument = function (lesson) {
    
    const element = document.createElement('iframe');
    element.setAttribute('width', '1366px');
    element.setAttribute('height', '623px');
    element.setAttribute('frameborder', '0');
    element.setAttribute('src', `https://view.officeapps.live.com/op/embed.aspx?src=https://drive.google.com/uc%3Fexport%3Ddownload%26id%3D${lesson.text}`);

    return element;
}


/***/ }),

/***/ "./src/components/title/title.js":
/*!***************************************!*\
  !*** ./src/components/title/title.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {


exports.createTitle = function (lesson) {
    
    const element = document.createElement('h1');        
    element.innerHTML = 'שיעורו השבועי של הרב רוזנבלום';
    element.innerHTML = element.innerHTML + "<br/>" + lesson.parasha + " " + lesson.year + " " + lesson.location

    return element;
}


/***/ }),

/***/ "./src/components/video/video.js":
/*!***************************************!*\
  !*** ./src/components/video/video.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.createVideo = function (lesson) {
    
    const element = document.createElement('iframe');
    element.setAttribute('frameborder', '0');
    element.setAttribute('src', `http://www.youtube.com/embed/${lesson.video}`);

    return element;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson.json */ "./src/lesson.json");
var _lesson_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./lesson.json */ "./src/lesson.json", 1);
/* harmony import */ var _components_title_title_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/title/title.js */ "./src/components/title/title.js");
/* harmony import */ var _components_title_title_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_title_title_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_video_video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/video/video.js */ "./src/components/video/video.js");
/* harmony import */ var _components_video_video_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_video_video_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_audio_audio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/audio/audio.js */ "./src/components/audio/audio.js");
/* harmony import */ var _components_audio_audio_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_audio_audio_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_document_document_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/document/document.js */ "./src/components/document/document.js");
/* harmony import */ var _components_document_document_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_document_document_js__WEBPACK_IMPORTED_MODULE_4__);






function component() {
    const element = document.createElement('div');

    element.appendChild(_components_title_title_js__WEBPACK_IMPORTED_MODULE_1___default.a.createTitle(_lesson_json__WEBPACK_IMPORTED_MODULE_0__));
    element.appendChild(_components_video_video_js__WEBPACK_IMPORTED_MODULE_2___default.a.createVideo(_lesson_json__WEBPACK_IMPORTED_MODULE_0__));
    element.appendChild(_components_audio_audio_js__WEBPACK_IMPORTED_MODULE_3___default.a.createAudio(_lesson_json__WEBPACK_IMPORTED_MODULE_0__));
    element.appendChild(_components_document_document_js__WEBPACK_IMPORTED_MODULE_4___default.a.createDocument(_lesson_json__WEBPACK_IMPORTED_MODULE_0__));

    return element;
}
  
document.body.appendChild(component());


/***/ }),

/***/ "./src/lesson.json":
/*!*************************!*\
  !*** ./src/lesson.json ***!
  \*************************/
/*! exports provided: id, parasha, year, video, audio, text, location, date, thumbnail, teaser, document, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"123456\",\"parasha\":\"וירא\",\"year\":\"תש\\\"פ\",\"video\":\"AKqSvjYWCx8\",\"audio\":\"1sG4MO932N5MmC9NKzALAyQ7MrUmyqc3n\",\"text\":\"1RTqeN7TTSYpqTXH2d32tuXarbwJDJAUQ\",\"location\":\"בני ברק\",\"date\":\"3.2.15\",\"thumbnail\":\"\",\"teaser\":\"מה רצתה שרה?\",\"document\":\"doc/pdf\"}");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXVkaW8vYXVkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZG9jdW1lbnQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGl0bGUvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlkZW8vdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQSxvRDtBQUNBO0FBQ0EsZ0pBQWdKLGFBQWE7QUFDN0o7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZJQUE2SSxZQUFZOztBQUV6SjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7O0FBRUEsaUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBOztBQUVBO0FBQ0E7QUFDQSxnRUFBZ0UsYUFBYTs7QUFFN0U7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ2E7QUFDQTtBQUNBO0FBQ0k7O0FBRXBEO0FBQ0E7O0FBRUEsd0JBQXdCLGlFQUFLLGFBQWEseUNBQU07QUFDaEQsd0JBQXdCLGlFQUFLLGFBQWEseUNBQU07QUFDaEQsd0JBQXdCLGlFQUFLLGFBQWEseUNBQU07QUFDaEQsd0JBQXdCLHVFQUFHLGdCQUFnQix5Q0FBTTs7QUFFakQ7QUFDQTs7QUFFQSIsImZpbGUiOiJtYWluLjE4OGI2MWQzY2QyMTAwNmEyOWM5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzLmNyZWF0ZUF1ZGlvID0gZnVuY3Rpb24gKGxlc3Nvbikge1xyXG4gICAgXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTsgICAgICAgIFxyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYXVkaW8vbXAzJyk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgYGh0dHBzOi8vbXktY29ycy1wcm94eS5teWNvcnNwcm94eS53b3JrZXJzLmRldi8/dXJsPWh0dHBzJTNBJTJGJTJGZG9jcy5nb29nbGUuY29tJTJGdWMlM0ZleHBvcnQlM0RvcGVuJTI2aWQlM0Qke2xlc3Nvbi5hdWRpb31gKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250cm9scycsICcnKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJ1lvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSA8Y29kZT5hdWRpbzwvY29kZT4gZWxlbWVudC4nXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwiZXhwb3J0cy5jcmVhdGVEb2N1bWVudCA9IGZ1bmN0aW9uIChsZXNzb24pIHtcclxuICAgIFxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEzNjZweCcpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICc2MjNweCcpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZyYW1lYm9yZGVyJywgJzAnKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBgaHR0cHM6Ly92aWV3Lm9mZmljZWFwcHMubGl2ZS5jb20vb3AvZW1iZWQuYXNweD9zcmM9aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjJTNGZXhwb3J0JTNEZG93bmxvYWQlMjZpZCUzRCR7bGVzc29uLnRleHR9YCk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwiXHJcbmV4cG9ydHMuY3JlYXRlVGl0bGUgPSBmdW5jdGlvbiAobGVzc29uKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpOyAgICAgICAgXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICfXqdeZ16LXldeo15Ug15TXqdeR15XXoteZINep15wg15TXqNeRINeo15XXlteg15HXnNeV150nO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBlbGVtZW50LmlubmVySFRNTCArIFwiPGJyLz5cIiArIGxlc3Nvbi5wYXJhc2hhICsgXCIgXCIgKyBsZXNzb24ueWVhciArIFwiIFwiICsgbGVzc29uLmxvY2F0aW9uXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIiwiZXhwb3J0cy5jcmVhdGVWaWRlbyA9IGZ1bmN0aW9uIChsZXNzb24pIHtcclxuICAgIFxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZyYW1lYm9yZGVyJywgJzAnKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBgaHR0cDovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2xlc3Nvbi52aWRlb31gKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuIiwiaW1wb3J0IGxlc3NvbiBmcm9tICcuL2xlc3Nvbi5qc29uJztcclxuaW1wb3J0IHRpdGxlIGZyb20gJy4vY29tcG9uZW50cy90aXRsZS90aXRsZS5qcyc7XHJcbmltcG9ydCB2aWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8vdmlkZW8uanMnO1xyXG5pbXBvcnQgYXVkaW8gZnJvbSAnLi9jb21wb25lbnRzL2F1ZGlvL2F1ZGlvLmpzJztcclxuaW1wb3J0IGRvYyBmcm9tICcuL2NvbXBvbmVudHMvZG9jdW1lbnQvZG9jdW1lbnQuanMnO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUuY3JlYXRlVGl0bGUobGVzc29uKSk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZpZGVvLmNyZWF0ZVZpZGVvKGxlc3NvbikpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChhdWRpby5jcmVhdGVBdWRpbyhsZXNzb24pKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZURvY3VtZW50KGxlc3NvbikpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcbiAgXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9