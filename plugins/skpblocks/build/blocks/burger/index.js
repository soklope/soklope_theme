/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/hamburgers/dist/hamburgers.min.css":
/*!*********************************************************!*\
  !*** ./node_modules/hamburgers/dist/hamburgers.min.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/burger/block.json":
/*!**************************************!*\
  !*** ./src/blocks/burger/block.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"skpblocks/burger","version":"0.1.0","title":"Burger","category":"skpblocks","icon":"menu","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"attributes":{"menuItems":{"type":"array","default":[{"label":"Home","url":"/"},{"label":"About","url":"/about"},{"label":"Services","url":"/services"},{"label":"Contact","url":"/contact"}]},"isOpen":{"type":"boolean","default":false}},"textdomain":"skpblocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/blocks/burger/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/burger/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hamburgers_dist_hamburgers_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hamburgers/dist/hamburgers.min.css */ "./node_modules/hamburgers/dist/hamburgers.min.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Edit({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: 'skp-burger'
  });
  const {
    menuItems,
    isOpen
  } = attributes;
  const [menuOpen, setMenuOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(isOpen);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setAttributes({
      isOpen: !menuOpen
    });
  };
  const updateMenuItem = (index, key, value) => {
    const newMenu = [...menuItems];
    newMenu[index][key] = value;
    setAttributes({
      menuItems: newMenu
    });
  };
  const addMenuItem = () => {
    setAttributes({
      menuItems: [...menuItems, {
        label: 'New Item',
        url: '#'
      }]
    });
  };
  const removeMenuItem = index => {
    const newMenu = menuItems.filter((_, i) => i !== index);
    setAttributes({
      menuItems: newMenu
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Menu Items', 'skpblocks'),
        initialOpen: true,
        children: [menuItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            marginBottom: '10px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'skpblocks'),
            value: item.label,
            onChange: value => updateMenuItem(index, 'label', value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'skpblocks'),
            value: item.url,
            onChange: value => updateMenuItem(index, 'url', value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            isDestructive: true,
            onClick: () => removeMenuItem(index),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove', 'skpblocks')
          })]
        }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "primary",
          onClick: addMenuItem,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Menu Item', 'skpblocks')
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        className: `hamburger hamburger--spin ${menuOpen ? 'is-active' : ''}`,
        onClick: toggleMenu,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "hamburger-box",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "hamburger-inner"
          })
        })
      }), menuOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("nav", {
        className: "burger-menu",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
          children: menuItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
              href: item.url,
              children: item.label
            })
          }, index))
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/burger/save.js":
/*!***********************************!*\
  !*** ./src/blocks/burger/save.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: 'skp-burger'
  });
  const {
    menuItems,
    isOpen
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      className: `hamburger hamburger--spin ${isOpen ? 'is-active' : ''}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "hamburger-box",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "hamburger-inner"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("nav", {
      className: "burger-menu",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
        className: "skp-page-container",
        children: menuItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: item.url,
            children: item.label
          })
        }, index))
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/burger/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/burger/style.scss ***!
  \**************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nCan't find stylesheet to import.\n\u001b[34m  ╷\u001b[0m\n\u001b[34m1 │\u001b[0m \u001b[31m@use '../css/utilities/all' as *\u001b[0m;\n\u001b[34m  │\u001b[0m \u001b[31m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\u001b[0m\n\u001b[34m  ╵\u001b[0m\n  src\\blocks\\burger\\style.scss 1:1  root stylesheet\n    at tryRunOrWebpackError (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\HookWebpackError.js:86:9)\n    at __webpack_require_module__ (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5301:12)\n    at __webpack_require__ (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5258:18)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5330:20\n    at symbolIterator (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\tapable\\lib\\Hook.js:18:14)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5236:43\n    at symbolIterator (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5198:16\n    at symbolIterator (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3485:9)\n    at timesSync (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5166:15\n    at symbolIterator (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3527:9)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5112:8\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:3531:6\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Cache.js:111:20)\n    at ItemCacheFacade.store (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\CacheFacade.js:141:15)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:3530:11\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Cache.js:95:34\n    at Array.<anonymous> (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\cache\\MemoryCachePlugin.js:45:13)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Cache.js:95:19\n    at Hook.eval [as callAsync] (eval at create (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Cache.js:79:18)\n    at ItemCacheFacade.get (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:3498:9)\n    at codeGen (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5100:11)\n    at symbolIterator (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5130:14\n    at processQueue (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\util\\processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nCan't find stylesheet to import.\n\u001b[34m  ╷\u001b[0m\n\u001b[34m1 │\u001b[0m \u001b[31m@use '../css/utilities/all' as *\u001b[0m;\n\u001b[34m  │\u001b[0m \u001b[31m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\u001b[0m\n\u001b[34m  ╵\u001b[0m\n  src\\blocks\\burger\\style.scss 1:1  root stylesheet\n    at Object.<anonymous> (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[1]!C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[2]!C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[3]!C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\src\\blocks\\burger\\style.scss:1:7)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:494:10\n    at Hook.eval [as call] (eval at create (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\tapable\\lib\\Hook.js:14:14)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5303:39\n    at tryRunOrWebpackError (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\HookWebpackError.js:81:7)\n    at __webpack_require_module__ (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5301:12)\n    at __webpack_require__ (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5258:18)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5330:20\n    at symbolIterator (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\tapable\\lib\\Hook.js:18:14)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5236:43\n    at symbolIterator (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5198:16\n    at symbolIterator (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3485:9)\n    at timesSync (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5166:15\n    at symbolIterator (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3527:9)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5112:8\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:3531:6\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Cache.js:111:20)\n    at ItemCacheFacade.store (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\CacheFacade.js:141:15)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:3530:11\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Cache.js:95:34\n    at Array.<anonymous> (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\cache\\MemoryCachePlugin.js:45:13)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Cache.js:95:19\n    at Hook.eval [as callAsync] (eval at create (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Cache.js:79:18)\n    at ItemCacheFacade.get (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:3498:9)\n    at codeGen (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5100:11)\n    at symbolIterator (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\Compilation.js:5130:14\n    at processQueue (C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\webpack\\lib\\util\\processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[1]!C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\postcss-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[2]!C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[4].use[3]!C:\\laragon\\www\\soklope\\wp-content\\plugins\\skpblocks\\src\\blocks\\burger\\style.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nCan't find stylesheet to import.\\n\\u001b[34m  ╷\\u001b[0m\\n\\u001b[34m1 │\\u001b[0m \\u001b[31m@use '../css/utilities/all' as *\\u001b[0m;\\n\\u001b[34m  │\\u001b[0m \\u001b[31m^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\\u001b[0m\\n\\u001b[34m  ╵\\u001b[0m\\n  src\\\\blocks\\\\burger\\\\style.scss 1:1  root stylesheet\");");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************************!*\
  !*** ./src/blocks/burger/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/burger/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/burger/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/burger/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/burger/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map