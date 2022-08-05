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

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/store */ \"./src/store.js\");\n/* harmony import */ var _src_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/router */ \"./src/router.js\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _src_pages_Post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/pages/Post */ \"./src/pages/Post.js\");\n\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3000;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()(); // app.use(express.static(\"./build\"));\n\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, \"./build\")));\napp.get(\"/*\", (req, res) => {\n  const context = {};\n  const store = (0,_src_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  store.dispatch((0,_src_store__WEBPACK_IMPORTED_MODULE_6__.initializeSession)()); // const test = router.filter((route) => {\n  //   console.log(route.path, req.url);\n  //   if (route.path === req.url) {\n  //     console.log(route.path);\n  //   } else {\n  //     console.log(\"not found\");\n  //   }\n  // });\n  // when route.path is dynamic like /post/:id generate a new route object\n\n  var a;\n  const test = _src_router__WEBPACK_IMPORTED_MODULE_7__[\"default\"].filter(route => {\n    if (route.path.includes(\":id\")) {\n      return true;\n    }\n\n    return false;\n  }).map(route => {\n    const newRoute = { ...route\n    };\n    const p = req.url.split(\"/\");\n    const id = p[p.length - 1];\n    a = id;\n    newRoute.path = route.path.replace(\":id\", id);\n    return newRoute;\n  }).filter(route => {\n    if (route.path === req.url) {\n      return true;\n    }\n\n    return false;\n  }).map(route => route.element).filter(route => route.serverFetch).map(route => store.dispatch(route.serverFetch(a)));\n  const dataRequire = _src_router__WEBPACK_IMPORTED_MODULE_7__[\"default\"].filter(route => req.url === route.path).map(route => route.element).filter(route => route.serverFetch).map(route => store.dispatch(route.serverFetch()));\n  Promise.all([...dataRequire, ...test]).then(() => {\n    const jsx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_8__.StaticRouter, {\n      location: req.url,\n      context: context\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n    const app = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default().renderToString(jsx);\n    const reduxState = store.getState();\n    res.writeHead(200, {\n      \"Content-Type\": \"text/html\"\n    });\n    res.end(htmlTemplate(app, reduxState));\n  }).catch(err => {\n    console.log(err);\n  });\n});\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\nfunction htmlTemplate(reactDom, reduxState) {\n  return ` <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"utf-8\">\n            <title>React SSR</title>\n        </head>\n        \n        <body>\n            <div id=\"app\">${reactDom}</div>\n            <script>\n                window.REDUX_DATA = ${JSON.stringify(reduxState)}\n            </script>\n            <script  src=\"./app.bundle.js\"></script>\n        </body>\n        </html>\n    `;\n}\n\n//# sourceURL=webpack://react-ssr/./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\n\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Routes, null, _router__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(route => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {\n    key: route.path,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(route.element, null),\n    path: `${route.path}`\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://react-ssr/./src/App.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAPI\": () => (/* binding */ fetchAPI),\n/* harmony export */   \"fetchAPI2\": () => (/* binding */ fetchAPI2),\n/* harmony export */   \"fetchPost\": () => (/* binding */ fetchPost)\n/* harmony export */ });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction fetchAPI() {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"https://jsonplaceholder.typicode.com/posts\").then(response => response.json()).then(data => data);\n}\nfunction fetchAPI2() {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://jsonplaceholder.typicode.com/posts/1`).then(response => response.json()).then(data => {\n    return data;\n  });\n}\nfunction fetchPost(id) {\n  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json()).then(data => data);\n}\n\n//# sourceURL=webpack://react-ssr/./src/api.js?");

/***/ }),

/***/ "./src/pages/About.js":
/*!****************************!*\
  !*** ./src/pages/About.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n\n\n\n\nconst About = props => {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    props.fetchDataAbout();\n  }, [props]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"About\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, props.posts.userId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, props.posts.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, props.posts.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, props.posts.body)));\n};\n\nAbout.serverFetch = () => {\n  return (0,_store__WEBPACK_IMPORTED_MODULE_2__.fetchDataAbout)();\n};\n\nconst mapStateToProps = state => ({\n  posts: state.data\n}); // const mapDispatchToProps = {\n//   fetchDataAbout,\n// };\n\n\nconst mapDispatchToProps = state => ({\n  fetchDataAbout: _store__WEBPACK_IMPORTED_MODULE_2__.fetchDataAbout\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(About));\n\n//# sourceURL=webpack://react-ssr/./src/pages/About.js?");

/***/ }),

/***/ "./src/pages/Contact.js":
/*!******************************!*\
  !*** ./src/pages/Contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Contact = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Contact\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n//# sourceURL=webpack://react-ssr/./src/pages/Contact.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n\n\n\n\n\nconst Home = props => {\n  // useEffect(() => {\n  //   if (props.posts.length <= 0) {\n  //     props.fetchData();\n  //   }\n  // }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, props.posts.map(post => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    key: post.id,\n    to: `/post/${post.id}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    key: post.id\n  }, post.title)))));\n};\n\nHome.serverFetch = _store__WEBPACK_IMPORTED_MODULE_3__.fetchData;\n\nconst mapStateToProps = state => ({\n  posts: state.data\n});\n\nconst mapDispatchToProps = {\n  fetchData: _store__WEBPACK_IMPORTED_MODULE_3__.fetchData\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Home));\n\n//# sourceURL=webpack://react-ssr/./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/NotFound.js":
/*!*******************************!*\
  !*** ./src/pages/NotFound.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst NotFound = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"NotFound\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);\n\n//# sourceURL=webpack://react-ssr/./src/pages/NotFound.js?");

/***/ }),

/***/ "./src/pages/Post.js":
/*!***************************!*\
  !*** ./src/pages/Post.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Post = props => {\n  const {\n    id\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    props.fetchPostData(id);\n  }, [props]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"About\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, props.posts.userId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, props.posts.id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, props.posts.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, props.posts.body)));\n};\n\nPost.serverFetch = id => {\n  return (0,_store__WEBPACK_IMPORTED_MODULE_2__.fetchPostData)(id);\n};\n\nconst mapStateToProps = state => ({\n  posts: state.data\n}); // const mapDispatchToProps = {\n//   fetchPostData,\n// };\n\n\nconst mapDispatchToProps = {\n  fetchPostData: _store__WEBPACK_IMPORTED_MODULE_2__.fetchPostData\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Post));\n\n//# sourceURL=webpack://react-ssr/./src/pages/Post.js?");

/***/ }),

/***/ "./src/pages/Secret.js":
/*!*****************************!*\
  !*** ./src/pages/Secret.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Secret = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Secret\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Secret);\n\n//# sourceURL=webpack://react-ssr/./src/pages/Secret.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/About */ \"./src/pages/About.js\");\n/* harmony import */ var _pages_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Contact */ \"./src/pages/Contact.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/NotFound */ \"./src/pages/NotFound.js\");\n/* harmony import */ var _pages_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Post */ \"./src/pages/Post.js\");\n/* harmony import */ var _pages_Secret__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Secret */ \"./src/pages/Secret.js\");\n\n\n\n\n\n\n // const Home = React.lazy(() => import(\"./pages/Home\"));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: \"/\",\n  element: _pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}, {\n  path: \"/about\",\n  element: _pages_About__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: \"/contact\",\n  element: _pages_Contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: \"/secret\",\n  element: _pages_Secret__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}, {\n  path: \"/post/:id\",\n  element: _pages_Post__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, {\n  path: \"*\",\n  element: _pages_NotFound__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}]);\n\n//# sourceURL=webpack://react-ssr/./src/router.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData),\n/* harmony export */   \"fetchDataAbout\": () => (/* binding */ fetchDataAbout),\n/* harmony export */   \"fetchPostData\": () => (/* binding */ fetchPostData),\n/* harmony export */   \"initializeSession\": () => (/* binding */ initializeSession)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\n\nconst initializeSession = () => ({\n  type: \"INITIALIZE_SESSION\"\n});\n\nconst storeData = data => ({\n  type: \"STORE_DATA\",\n  data\n});\n\nconst fetchData = () => dispatch => (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI)().then(data => dispatch(storeData(data)));\nconst fetchDataAbout = () => dispatch => {\n  return (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchAPI2)().then(data => dispatch(storeData(data)));\n};\nconst fetchPostData = id => dispatch => {\n  return (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchPost)(id).then(data => dispatch(storeData(data)));\n}; // export const fetchPostData = (id) => (dispatch) =>\n//   fetchPost(id).then((data) => dispatch(storeData(data)));\n\nconst sessionReducer = function () {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"INITIALIZE_SESSION\":\n      return true;\n\n    default:\n      return state;\n  }\n};\n\nconst dataReducer = function () {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"STORE_DATA\":\n      return action.data;\n\n    default:\n      return state;\n  }\n};\n\nconst reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  loggedIn: sessionReducer,\n  data: dataReducer\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialState => (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, initialState, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default()))));\n\n//# sourceURL=webpack://react-ssr/./src/store.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;