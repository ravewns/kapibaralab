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

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/assets/styles/styles.scss */ \"./src/assets/styles/styles.scss\");\n\nconst sendBtn = document.getElementById('btn-send');\nconst name = document.getElementById('request-input-name');\nconst surname = document.getElementById('request-input-surname');\nconst patronymic = document.getElementById('request-input-patronymic');\nconst form = document.getElementById(\"form\");\n\nconst xhr = new XMLHttpRequest();\nxhr.open(\"POST\", \"http://httpbin.org/post\"); // Простая эмуляция успешного запроса на Backend.\n\nfunction handleForm(event) {\n    event.preventDefault();\n}\nform.addEventListener('submit', handleForm);\n\nsendBtn.onclick = function () {\n    if (name.value && surname.value && patronymic.value) {\n        xhr.onload = () => {\n            if (xhr.status === 200) {\n                form.style.display = 'none';\n                document.getElementById('req-title').style.display = 'none';\n                document.getElementById('req-description').style.display = 'none';\n                document.getElementById('req-success-block').style.display = 'flex';\n            } else {\n                alert('Ошибка запроса. Повторите позже.')\n            }\n        };\n        xhr.send('Фамилия - ' + surname.value + ' Имя - ' + name.value + ' Отчество - ' + patronymic.value);\n    }\n}\n\n\n//# sourceURL=webpack://kapibaralab/./main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-SemiBold.ttf */ \"./src/assets/fonts/Montserrat-SemiBold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Medium.ttf */ \"./src/assets/fonts/Montserrat-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Regular.ttf */ \"./src/assets/fonts/Montserrat-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Bolditalic.ttf */ \"./src/assets/fonts/Montserrat-Bolditalic.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/main/banner.png */ \"./src/assets/images/main/banner.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../images/gallery/4_m.png */ \"./src/assets/images/gallery/4_m.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../images/main/banner_mob.png */ \"./src/assets/images/main/banner_mob.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body {\n  margin: 0;\n  padding: 0;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  scroll-behavior: smooth;\n}\n\n.container {\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\nh1, h2, p {\n  margin: 0;\n}\n\n@font-face {\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  font-family: \"Montserrat\";\n  font-weight: 700;\n}\n@font-face {\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  font-family: \"Montserrat\";\n  font-weight: 500;\n}\n@font-face {\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  font-family: \"Montserrat\";\n  font-weight: 600;\n}\n@font-face {\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  font-family: \"Montserrat\";\n  font-weight: 400;\n}\n@font-face {\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  font-family: \"Montserrat\";\n  font-style: italic;\n  font-weight: 400;\n}\n.container.header {\n  padding: 55px 0 55px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.container.header .header-logo {\n  display: flex;\n  align-items: center;\n  height: 29px;\n}\n.container.header .header-logo-text {\n  max-width: 210px;\n  font-size: 14px;\n  margin-left: 24px;\n}\n.container.header .header-menu ul {\n  display: flex;\n  padding: 0;\n}\n.container.header .header-menu ul li {\n  list-style: none;\n  margin-right: 48px;\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.container.header .header-menu ul li a {\n  padding: 8px 24px;\n  border-radius: 4px;\n  transition: 0.3s;\n  text-decoration: none;\n  color: black;\n}\n.container.header .header-menu ul li :hover {\n  background-color: rgb(233, 234, 249);\n  color: rgb(79, 88, 201);\n  transition: 0.3s;\n}\n.container.header .header-menu ul li:last-child {\n  margin-right: 0;\n}\n.container.header .header-phone {\n  display: flex;\n  align-items: center;\n}\n.container.header .header-phone .header-phone-icon {\n  margin-right: 8px;\n}\n.container.header .header-phone .header-phone-info .header-phone-info-numbers {\n  font-size: 18px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.container.header .header-phone .header-phone-info .header-phone-info-numbers a {\n  text-decoration: none;\n  color: black;\n  transition: 0.3s;\n}\n.container.header .header-phone .header-phone-info .header-phone-info-numbers :hover {\n  color: rgb(79, 88, 201);\n  transition: 0.3s;\n}\n\n.banner {\n  width: 100%;\n  height: 560px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.banner .container {\n  position: relative;\n}\n.banner .container .banner-info .banner-info-block {\n  position: absolute;\n  bottom: calc(50% - 375px);\n}\n.banner .container .banner-info .banner-info-block .banner-info-block-text {\n  font-size: 48px;\n  font-weight: 700;\n  padding: 12px 18px;\n  border-radius: 8px;\n}\n.banner .container .banner-info .banner-info-block .one {\n  width: 587px;\n  color: white;\n  background-color: rgb(115, 123, 225);\n  border-bottom-left-radius: 0;\n}\n.banner .container .banner-info .banner-info-block .two {\n  width: 394px;\n  color: rgb(115, 123, 225);\n  background-color: white;\n  border-top-left-radius: 0;\n}\n\n.welcome-title-text {\n  padding: 96px 0 96px 0;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 140%;\n  font-style: italic;\n}\n\n.lab {\n  background: linear-gradient(0deg, rgb(233, 234, 249), rgb(245, 245, 255) 100%);\n  padding: 48px 0 48px 0;\n}\n.lab .container .lab-title {\n  font-size: 36px;\n  font-weight: 600;\n  margin-bottom: 36px;\n}\n.lab .container .lab-content {\n  display: flex;\n  justify-content: space-between;\n}\n.lab .container .lab-content .lab-info {\n  width: 1020px;\n}\n.lab .container .lab-content .lab-info .lab-description .lab-description-text {\n  font-size: 21px;\n  margin-bottom: 18px;\n}\n.lab .container .lab-content .lab-info .lab-description :last-child {\n  margin-bottom: 36px;\n}\n.lab .container .lab-content .lab-btn {\n  border: none;\n  width: 245px;\n  height: 53px;\n  padding: 12px 18px;\n  box-sizing: border-box;\n  background-color: rgb(115, 123, 225);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 21px;\n  text-decoration: none;\n}\n.lab .container .lab-content .lab-btn-icon svg {\n  width: 30px;\n  margin-top: 10px;\n}\n.lab .container .lab-image img {\n  width: 332px;\n  height: 314px;\n  border-radius: 8px;\n}\n\n.gallery .container {\n  padding-top: 96px;\n}\n.gallery .container .gallery-title {\n  margin-bottom: 48px;\n  font-size: 36px;\n  font-weight: 600;\n}\n.gallery .container .gallery-block {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-gap: 21px;\n}\n.gallery .container .gallery-block .gallery-item {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  margin: 0;\n}\n.gallery .container .gallery-block .gallery-item img {\n  width: 100%;\n}\n.gallery .container .gallery-block .gallery-item-1 {\n  grid-column-start: 1;\n  grid-column-end: 5;\n  grid-row-start: 1;\n  grid-row-end: 4;\n}\n.gallery .container .gallery-block .gallery-item-2 {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 3;\n  grid-row-end: 5;\n}\n.gallery .container .gallery-block .gallery-item-3 {\n  grid-column-start: 3;\n  grid-column-end: 5;\n  grid-row-start: 3;\n  grid-row-end: 5;\n}\n.gallery .container .gallery-block .gallery-item-4 {\n  grid-column-start: 5;\n  grid-column-end: 9;\n  grid-row-start: 1;\n  grid-row-end: 3;\n}\n.gallery .container .gallery-block .gallery-item-5 {\n  grid-column-start: 5;\n  grid-column-end: 7;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n.gallery .container .gallery-block .gallery-item-6 {\n  grid-column-start: 7;\n  grid-column-end: 9;\n  grid-row-start: 2;\n  grid-row-end: 3;\n}\n.gallery .container .gallery-block .gallery-item-7 {\n  grid-column-start: 5;\n  grid-column-end: 9;\n  grid-row-start: 3;\n  grid-row-end: 4;\n}\n\n.request {\n  padding-top: 72px;\n}\n.request .container {\n  width: 100%;\n  height: 448px;\n  padding: 48px 0 48px 0;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border-radius: 8px;\n  background: linear-gradient(0deg, rgb(233, 234, 249), rgb(245, 245, 255) 100%);\n}\n.request .container .request-success {\n  display: none;\n  align-items: center;\n}\n.request .container .request-success .request-success-text {\n  font-size: 24px;\n  font-weight: 600;\n  text-align: start;\n  margin-left: 35px;\n  max-width: 700px;\n  color: rgb(115, 123, 225);\n}\n.request .container .request-title {\n  font-size: 36px;\n  font-weight: 600;\n  margin-bottom: 48px;\n}\n.request .container .request-description {\n  max-width: 1020px;\n  font-size: 21px;\n  margin-bottom: 48px;\n}\n.request .container .request-inputs {\n  display: flex;\n  margin-bottom: 48px;\n}\n.request .container .request-inputs input {\n  width: 248px;\n  height: 27px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-right: 19px;\n  font-size: 21px;\n  font-weight: 400;\n  outline: none;\n  border: 2px solid transparent;\n}\n.request .container .request-inputs input:focus-visible {\n  border: 2px solid rgb(115, 123, 225);\n}\n.request .container .request-inputs input::placeholder {\n  font-size: 21px;\n}\n.request .container .request-inputs input:invalid:focus-visible {\n  border-color: red;\n}\n.request .container .request-btn {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 12px 18px;\n  box-sizing: border-box;\n  font-size: 21px;\n  width: 188px;\n  height: 53px;\n  background-color: rgb(115, 123, 225);\n  color: white;\n}\n.request .container .request-btn .request-btn-icon svg {\n  margin-top: 5px;\n  width: 25px;\n}\n.request .container .req-btn-block {\n  display: flex;\n  justify-content: center;\n}\n\n.footer {\n  margin-top: 96px;\n  background-color: rgb(79, 88, 201);\n}\n.footer .container .footer-info {\n  height: 150px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.footer .container .footer-info .footer-info-rights {\n  color: white;\n}\n\n@media screen and (max-width: 1425px) {\n  .container.header {\n    padding: 30px 0 30px 0;\n    margin: 0 15px;\n  }\n  .container {\n    padding: 0 18px 0 18px;\n  }\n}\n@media screen and (max-width: 1320px) {\n  .lab .container .lab-content .lab-image {\n    margin-left: 20px;\n  }\n}\n@media screen and (max-width: 1274px) {\n  .header .container .header-phone .header-phone-info {\n    display: none;\n  }\n  .header .container .header-logo .header-logo-text {\n    display: none;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .gallery .container .gallery-block {\n    grid-gap: 10px;\n  }\n}\n@media screen and (max-width: 899px) {\n  .container.header {\n    align-items: normal;\n  }\n  .container.header nav {\n    display: none;\n  }\n  .container.header .header-logo {\n    flex-direction: column;\n    align-items: normal;\n  }\n  .container.header .header-logo .header-logo-text {\n    max-width: 300px;\n    margin-left: 0;\n  }\n  .container.header .header-phone .header-phone-info {\n    display: none;\n  }\n  .banner {\n    background-position: center;\n    height: 282px;\n  }\n  .banner .container .banner-info .banner-info-block {\n    bottom: calc(50% - 335px);\n  }\n  .banner .container .banner-info .banner-info-block .one {\n    width: 318px;\n  }\n  .banner .container .banner-info .banner-info-block .two {\n    width: 250px;\n  }\n  .banner .container .banner-info .banner-info-block .banner-info-block-text {\n    font-size: 24px;\n  }\n  .welcome-title {\n    display: flex;\n    justify-content: center;\n  }\n  .welcome-title .container .welcome-title-text {\n    font-size: 18px;\n    padding: 73px 0 30px 0;\n  }\n  .lab {\n    padding: 24px 0 24px 0;\n  }\n  .lab .container .lab-title {\n    font-size: 28px;\n  }\n  .lab .container .lab-content {\n    flex-direction: column;\n    align-items: center;\n  }\n  .lab .container .lab-content .lab-info {\n    order: 2;\n    max-width: 100%;\n  }\n  .lab .container .lab-content .lab-info .lab-description .lab-description-text {\n    font-size: 18px;\n    line-height: 140%;\n  }\n  .lab .container .lab-content .lab-image {\n    order: 1;\n    margin-bottom: 24px;\n    margin-left: 0;\n  }\n  .gallery .container {\n    padding-top: 30px;\n  }\n  .gallery .container .gallery-title {\n    margin-bottom: 24px;\n    font-size: 28px;\n  }\n  .gallery .container .gallery-block {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n  }\n  .gallery .container .gallery-block .gallery-item img {\n    width: 324px;\n    height: 243px;\n  }\n  .gallery .container .gallery-block .gallery-item-2 {\n    display: none;\n  }\n  .gallery .container .gallery-block .gallery-item-4 img {\n    content: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n  }\n  .gallery .container .gallery-block .gallery-item-7 {\n    display: none;\n  }\n  .request .container {\n    padding: 0 18px;\n    height: 607px;\n    align-items: normal;\n    text-align: start;\n  }\n  .request .container .request-success {\n    flex-direction: column;\n  }\n  .request .container .request-success .request-success-text {\n    text-align: center;\n    margin-left: 0;\n    max-width: 300px;\n    font-size: 18px;\n  }\n  .request .container .request-success .request-success-icon {\n    margin-bottom: 25px;\n  }\n  .request .container .request-title {\n    font-size: 28px;\n    max-width: 150px;\n    margin-bottom: 36px;\n  }\n  .request .container .request-description {\n    font-size: 18px;\n    line-height: 140%;\n    margin-bottom: 36px;\n  }\n  .request .container .form .request-inputs {\n    flex-direction: column;\n    margin-bottom: 15px;\n  }\n  .request .container .form .request-inputs .request-input {\n    margin-bottom: 19px;\n  }\n  .request .container .form .request-inputs .request-input input {\n    width: calc(100% - 30px);\n    margin-right: 0;\n  }\n  .footer {\n    margin-top: 30px;\n    padding: 24px 0;\n  }\n  .footer .container .footer-info {\n    flex-direction: column;\n    justify-content: space-evenly;\n    text-align: center;\n  }\n  .footer .container .footer-info .footer-info-rights {\n    order: 2;\n  }\n  .footer .container .footer-info .footer-info-rights .footer-info-logo {\n    order: 1;\n  }\n}\n@media screen and (max-width: 590px) {\n  .banner {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\n  }\n}\n@media screen and (max-width: 375px) {\n  .banner .container .banner-info .banner-info-block .one {\n    width: 249px;\n  }\n}\n@media screen and (max-width: 355px) {\n  .lab .container .lab-image img {\n    width: 300px;\n    height: 265px;\n  }\n  .request .container {\n    height: 650px;\n  }\n  .gallery .container .gallery-block .gallery-item img {\n    width: 280px;\n    height: 200px;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kapibaralab/./src/assets/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://kapibaralab/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://kapibaralab/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kapibaralab/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kapibaralab/./src/assets/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kapibaralab/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kapibaralab/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kapibaralab/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kapibaralab/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kapibaralab/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kapibaralab/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Bolditalic.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Bolditalic.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./src/assets/fonts/Montserrat-Bolditalic.ttf\";\n\n//# sourceURL=webpack://kapibaralab/./src/assets/fonts/Montserrat-Bolditalic.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Medium.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Medium.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./src/assets/fonts/Montserrat-Medium.ttf\";\n\n//# sourceURL=webpack://kapibaralab/./src/assets/fonts/Montserrat-Medium.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./src/assets/fonts/Montserrat-Regular.ttf\";\n\n//# sourceURL=webpack://kapibaralab/./src/assets/fonts/Montserrat-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-SemiBold.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Montserrat-SemiBold.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./src/assets/fonts/Montserrat-SemiBold.ttf\";\n\n//# sourceURL=webpack://kapibaralab/./src/assets/fonts/Montserrat-SemiBold.ttf?");

/***/ }),

/***/ "./src/assets/images/gallery/4_m.png":
/*!*******************************************!*\
  !*** ./src/assets/images/gallery/4_m.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./src/assets/images/main/4_m.png\";\n\n//# sourceURL=webpack://kapibaralab/./src/assets/images/gallery/4_m.png?");

/***/ }),

/***/ "./src/assets/images/main/banner.png":
/*!*******************************************!*\
  !*** ./src/assets/images/main/banner.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./src/assets/images/main/banner.png\";\n\n//# sourceURL=webpack://kapibaralab/./src/assets/images/main/banner.png?");

/***/ }),

/***/ "./src/assets/images/main/banner_mob.png":
/*!***********************************************!*\
  !*** ./src/assets/images/main/banner_mob.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"./src/assets/images/main/banner_mob.png\";\n\n//# sourceURL=webpack://kapibaralab/./src/assets/images/main/banner_mob.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;