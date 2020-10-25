webpackHotUpdate_N_E("pages/construction/[post]",{

/***/ "./src/pages/construction/[post].js":
/*!******************************************!*\
  !*** ./src/pages/construction/[post].js ***!
  \******************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout */ "./src/components/layout.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var _jsxFileName = "/mnt/c/Users/lacou/Desktop/DEV/Advanced Foam/Advanced-Foam/src/pages/construction/[post].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  var _postContent;

  return {
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      }
    },
    postTitle: {
      margin: theme.spacing(5)
    },
    postContent: (_postContent = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: theme.spacing(5),
      '& p': {
        margin: theme.spacing(2, 40, 2, 40),
        textAlign: 'justify',
        textJustify: 'inter-word'
      },
      '& img': {
        width: '500px',
        height: 'auto'
      }
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_postContent, theme.breakpoints.down('sm'), {
      '& p': {
        margin: theme.spacing(2, 5, 2, 5),
        textAlign: 'justify'
      },
      '& img': {
        width: '500px',
        height: 'auto'
      }
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_postContent, theme.breakpoints.down('xs'), {
      '& p': {
        margin: theme.spacing(2),
        textAlign: 'center'
      },
      '& img': {
        alignItems: 'center',
        align: 'center',
        width: '250px',
        height: 'auto'
      }
    }), _postContent)
  };
});
var __N_SSG = true;
function Post(_ref) {
  _s();

  var postData = _ref.postData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var classes = useStyles();

  if (!router.isFallback && !(postData === null || postData === void 0 ? void 0 : postData.slug)) {
    return __jsx(ErrorPage, {
      statusCode: 404,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 16
      }
    });
  }

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    domain: 'construction',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "h3",
    align: "center",
    color: "textPrimary",
    className: classes.postTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, postData.title.rendered), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.postContent,
    dangerouslySetInnerHTML: {
      __html: postData.content.rendered
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })));
}

_s(Post, "udxARlSzUQQ8jg2GSLXYjtUi3ZI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], useStyles];
});

_c = Post;

function getPosts(_x) {
  return _getPosts.apply(this, arguments);
}

function _getPosts() {
  _getPosts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPosts.apply(this, arguments);
}

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnN0cnVjdGlvbi9bcG9zdF0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidWwiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdFN0eWxlIiwicG9zdFRpdGxlIiwic3BhY2luZyIsInBvc3RDb250ZW50IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwidGV4dEFsaWduIiwidGV4dEp1c3RpZnkiLCJ3aWR0aCIsImhlaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsImFsaWduIiwiUG9zdCIsInBvc3REYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NlcyIsImlzRmFsbGJhY2siLCJzbHVnIiwidGl0bGUiLCJyZW5kZXJlZCIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRQb3N0cyIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFHQTtBQUVBO0FBTUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUFZO0FBQ3JDLGVBQVc7QUFDUEMsUUFBRSxFQUFFO0FBQ0FDLGNBQU0sRUFBRSxDQURSO0FBRUFDLGVBQU8sRUFBRSxDQUZUO0FBR0FDLGlCQUFTLEVBQUU7QUFIWDtBQURHLEtBRDBCO0FBU3JDQyxhQUFTLEVBQUU7QUFDUEgsWUFBTSxFQUFFRixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBREQsS0FUMEI7QUFZckNDLGVBQVc7QUFDUEMsYUFBTyxFQUFFLE1BREY7QUFFUEMsbUJBQWEsRUFBRSxRQUZSO0FBR1BDLGdCQUFVLEVBQUUsUUFITDtBQUlQUixZQUFNLEVBQUVGLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FKRDtBQUtQLGFBQU87QUFDSEosY0FBTSxFQUFFRixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLEVBQWpCLEVBQXFCLENBQXJCLEVBQXdCLEVBQXhCLENBREw7QUFFSEssaUJBQVMsRUFBRSxTQUZSO0FBR0hDLG1CQUFXLEVBQUU7QUFIVixPQUxBO0FBVVAsZUFBUztBQUNMQyxhQUFLLEVBQUUsT0FERjtBQUVMQyxjQUFNLEVBQUU7QUFGSDtBQVZGLCtHQWNOZCxLQUFLLENBQUNlLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBZE0sRUFjeUI7QUFDNUIsYUFBTztBQUNIZCxjQUFNLEVBQUVGLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FETDtBQUVISyxpQkFBUyxFQUFFO0FBRlIsT0FEcUI7QUFLNUIsZUFBUztBQUNMRSxhQUFLLEVBQUUsT0FERjtBQUVMQyxjQUFNLEVBQUU7QUFGSDtBQUxtQixLQWR6QiwyR0F3Qk5kLEtBQUssQ0FBQ2UsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0F4Qk0sRUF3QnlCO0FBQzVCLGFBQU87QUFDSGQsY0FBTSxFQUFFRixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLENBREw7QUFFSEssaUJBQVMsRUFBRTtBQUZSLE9BRHFCO0FBSzVCLGVBQVM7QUFDTEQsa0JBQVUsRUFBRSxRQURQO0FBRUxPLGFBQUssRUFBRSxRQUZGO0FBR0xKLGFBQUssRUFBRSxPQUhGO0FBSUxDLGNBQU0sRUFBRTtBQUpIO0FBTG1CLEtBeEJ6QjtBQVowQixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUF1RGUsU0FBU0ksSUFBVCxPQUNBO0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBRVgsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLE9BQU8sR0FBR3hCLFNBQVMsRUFBekI7O0FBRUEsTUFBSSxDQUFDc0IsTUFBTSxDQUFDRyxVQUFSLElBQXNCLEVBQUNKLFFBQUQsYUFBQ0EsUUFBRCx1QkFBQ0EsUUFBUSxDQUFFSyxJQUFYLENBQTFCLEVBQTJDO0FBQ3ZDLFdBQU8sTUFBQyxTQUFEO0FBQVcsZ0JBQVUsRUFDeEIsR0FERztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFJSDs7QUFDRCxTQUNBLE1BQUMsMERBQUQ7QUFBUSxVQUFNLEVBQUUsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsU0FBSyxFQUFDLFFBQS9CO0FBQXdDLFNBQUssRUFBQyxhQUE5QztBQUEyRCxhQUFTLEVBQUVGLE9BQU8sQ0FBQ2pCLFNBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkZjLFFBQVEsQ0FBQ00sS0FBVCxDQUFlQyxRQUExRyxDQURKLEVBRUksTUFBQyw4REFBRDtBQUNJLGFBQVMsRUFBRUosT0FBTyxDQUFDZixXQUR2QjtBQUVJLDJCQUF1QixFQUFFO0FBQ3pCb0IsWUFBTSxFQUFFUixRQUFRLENBQUNTLE9BQVQsQ0FBaUJGO0FBREEsS0FGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREEsQ0FEQTtBQWFIOztHQXpCdUJSLEk7VUFHTEcscUQsRUFDQ3ZCLFM7OztLQUpJb0IsSTs7U0FzRFRXLFE7Ozs7OytMQUFmLGlCQUF3QkMsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnN0cnVjdGlvbi9bcG9zdF0uYzU2NDBjYzE3Y2E0N2MwYzgzODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICB1c2VSb3V0ZXJcclxufSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQge1xyXG4gICAgbWFrZVN0eWxlc1xyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIFR5cG9ncmFwaHlcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgJ0BnbG9iYWwnOiB7XHJcbiAgICAgICAgdWw6IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwb3N0VGl0bGU6IHtcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICB9LFxyXG4gICAgcG9zdENvbnRlbnQ6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDUpLFxyXG4gICAgICAgICcmIHAnOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCA0MCwgMiwgNDApLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcclxuICAgICAgICAgICAgdGV4dEp1c3RpZnk6ICdpbnRlci13b3JkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyYgaW1nJzoge1xyXG4gICAgICAgICAgICB3aWR0aDogJzUwMHB4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bydcclxuICAgICAgICB9LFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICAgICAgICAnJiBwJzoge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDUsIDIsIDUpLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnanVzdGlmeScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICcmIGltZyc6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XHJcbiAgICAgICAgICAgICcmIHAnOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnJiBpbWcnOiB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe1xyXG4gICAgcG9zdERhdGF9KSB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBpZiAoIXJvdXRlci5pc0ZhbGxiYWNrICYmICFwb3N0RGF0YT8uc2x1Zykge1xyXG4gICAgICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGUgPSB7XHJcbiAgICAgICAgICAgIDQwNFxyXG4gICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgfVxyXG4gICAgcmV0dXJuICggICAgICAgICBcclxuICAgIDxMYXlvdXQgZG9tYWluPXsnY29uc3RydWN0aW9uJ30+XHJcbiAgICA8R3JpZCA+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgYWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInRleHRQcmltYXJ5XCJjbGFzc05hbWU9e2NsYXNzZXMucG9zdFRpdGxlfSA+e3Bvc3REYXRhLnRpdGxlLnJlbmRlcmVkfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucG9zdENvbnRlbnR9XHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgIF9faHRtbDogcG9zdERhdGEuY29udGVudC5yZW5kZXJlZFxyXG4gICAgICAgIH19Lz5cclxuICAgIDwvR3JpZD5cclxuPC9MYXlvdXQ+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtjb250ZXh0fSkge1xyXG4gICAgY29uc3Qgd3BDYXRlZ29yeUZpbHRlciA9IDE2O1xyXG5cclxuICAgIGNvbnN0IHtxdWVyeX0gPSBjb250ZXh0O1xyXG4gICAgY29uc3QgTElOSyA9IGBodHRwczovL3d3dy5hZHZhbmNlZGZvYW0uY29tL3dwLWpzb24vd3AvdjIvcG9zdHM/Y2F0ZWdvcmllcz0ke3dwQ2F0ZWdvcnlGaWx0ZXJ9JnNsdWc9JHtxdWVyeS5wb3N0fWA7XHJcbiAgICAvL2NvbnNvbGUubG9nKExJTkspO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vd3d3LmFkdmFuY2VkZm9hbS5jb20vd3AtanNvbi93cC92Mi9wb3N0cz9jYXRlZ29yaWVzPSR7d3BDYXRlZ29yeUZpbHRlcn0mc2x1Zz0ke3F1ZXJ5LnBvc3R9YCk7XHJcbiAgICAvL2NvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3d3dy4ke3F1ZXJ5LmRvbWFpbn0uYWR2YW5jZWRmb2FtLmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzP3NsdWc9JHtxdWVyeS5wb3N0fWApO1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YVswXTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc3REYXRhOiBwb3N0RGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRTdGF0aWNQcm9wcygpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcG9zdERhdGEubWFwKCh7IG5vZGUgfSkgPT4gYC9wb3N0cy8ke25vZGUuc2x1Z31gKSB8fCBbXSxcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRQb3N0cyhjb250ZXh0KSB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==