/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createContact = () => {\n  const main = document.querySelector('#Content');\n  const container = document.createElement('div');\n  container.classList.add('contact-container', 'container', 'border', 'rounded', 'text-center');\n  const temp = document.createElement('h2');\n  temp.classList.add('h2', 'title');\n  temp.innerHTML = 'Get In Contact With Mr. Bonanza!';\n  container.appendChild(temp);\n  main.appendChild(container);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHome = () => {\n  const main = document.querySelector('#Content');\n  const container = document.createElement('div');\n  container.classList.add('home-container', 'container', 'border', 'rounded', 'text-center');\n  let temp = document.createElement('h2');\n  temp.classList.add('h2', 'title');\n  temp.innerHTML = 'Bonanza\\'s Banana Emporium';\n  container.appendChild(temp);\n  temp = document.createElement('div');\n  temp.classList.add('row', 'my-5', 'mx-3');\n  const maintext = document.createElement('p');\n  maintext.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quod expedita temporibus sequi dicta ad, numquam vero dolores earum voluptatem voluptates animi natus amet molestias modi totam provident illo commodi tempore atque! In eveniet, accusantium ut ea veritatis nihil illum labore temporibus! Ea quam modi praesentium, aliquid quas alias esse!';\n  temp.appendChild(maintext);\n  container.appendChild(temp);\n  main.appendChild(container);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst content = document.querySelector('#Content');\nconst btncontainer = document.createElement('div');\nbtncontainer.classList.add('btngroup', 'row', 'mx-5', 'my-5');\nconst btnhome = document.createElement('button');\nbtnhome.classList.add('btn', 'btn-primary', 'col', 'mx-1', 'btnread');\nbtnhome.innerHTML = 'Home';\nconst btnmenu = document.createElement('button');\nbtnmenu.classList.add('btn', 'btn-primary', 'col', 'mx-1', 'btnread');\nbtnmenu.innerHTML = 'Menu';\nconst btncontact = document.createElement('button');\nbtncontact.classList.add('btn', 'btn-primary', 'col', 'mx-1', 'btnread');\nbtncontact.innerHTML = 'Contact Us';\nbtncontainer.appendChild(btnhome);\nbtncontainer.appendChild(btnmenu);\nbtncontainer.appendChild(btncontact);\ncontent.appendChild(btncontainer);\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\nbtnhome.addEventListener('click', () => {\n  const ModulePage = document.querySelector('.container');\n  content.removeChild(ModulePage);\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n});\nbtnmenu.addEventListener('click', () => {\n  const ModulePage = document.querySelector('.container');\n  content.removeChild(ModulePage);\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n});\nbtncontact.addEventListener('click', () => {\n  const ModulePage = document.querySelector('.container');\n  content.removeChild(ModulePage);\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenu = () => {\n  const main = document.querySelector('#Content');\n  const container = document.createElement('div');\n  container.classList.add('menu-container', 'container', 'border', 'rounded', 'text-center');\n  let temp = document.createElement('h2');\n  temp.classList.add('h2', 'title');\n  temp.innerHTML = 'Bonanza\\'s Special Menu';\n  container.appendChild(temp);\n  temp = document.createElement('p');\n  temp.classList.add('h4', 'mx-3', 'my-5');\n  temp.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt quod expedita temporibus sequi dicta ad, numquam vero dolores earum voluptatem voluptates animi natus amet molestias modi totam provident illo commodi tempore atque! In eveniet, accusantium ut ea veritatis nihil illum labore temporibus! Ea quam modi praesentium, aliquid quas alias esse!';\n  container.appendChild(temp);\n  main.appendChild(container);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;