/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n    const menuIconUnactive = document.querySelector(\"#menuIconUnactive\");\r\n    const menuIconActive = document.querySelector(\"#menuIconActive\");\r\n    const menuBurger = document.querySelector(\"#menuBurger\");\r\n\r\n    document.querySelector(\"#menuIconActive\").addEventListener(\"click\", e => {\r\n        e.preventDefault();\r\n        menuIconActive.classList.add(\"hidden\");\r\n        menuBurger.classList.remove(\"hidden\");\r\n    });\r\n\r\n    document.querySelector(\"#menuIconUnactive\").addEventListener(\"click\", e => {\r\n        e.preventDefault();\r\n        menuIconActive.classList.remove(\"hidden\");\r\n        menuBurger.classList.add(\"hidden\");\r\n    });\r\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;