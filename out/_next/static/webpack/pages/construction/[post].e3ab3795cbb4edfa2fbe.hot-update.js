webpackHotUpdate_N_E("pages/construction/[post]",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./src/components/layout.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "/mnt/c/Users/lacou/Desktop/DEV/Advanced Foam/Advanced-Foam/src/pages/construction/[post].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_postContent, theme.breakpoints.down('sm'), {
      '& p': {
        margin: theme.spacing(2, 5, 2, 5),
        textAlign: 'justify'
      },
      '& img': {
        width: '500px',
        height: 'auto'
      }
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_postContent, theme.breakpoints.down('xs'), {
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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
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

  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    domain: 'construction',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
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
  }, postData.title.rendered), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], useStyles];
});

_c = Post;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbnN0cnVjdGlvbi9bcG9zdF0uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidWwiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdFN0eWxlIiwicG9zdFRpdGxlIiwic3BhY2luZyIsInBvc3RDb250ZW50IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwidGV4dEFsaWduIiwidGV4dEp1c3RpZnkiLCJ3aWR0aCIsImhlaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsImFsaWduIiwiUG9zdCIsInBvc3REYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NlcyIsImlzRmFsbGJhY2siLCJzbHVnIiwidGl0bGUiLCJyZW5kZXJlZCIsIl9faHRtbCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBR0E7QUFFQTtBQU1BLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsU0FBWTtBQUNyQyxlQUFXO0FBQ1BDLFFBQUUsRUFBRTtBQUNBQyxjQUFNLEVBQUUsQ0FEUjtBQUVBQyxlQUFPLEVBQUUsQ0FGVDtBQUdBQyxpQkFBUyxFQUFFO0FBSFg7QUFERyxLQUQwQjtBQVNyQ0MsYUFBUyxFQUFFO0FBQ1BILFlBQU0sRUFBRUYsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQURELEtBVDBCO0FBWXJDQyxlQUFXO0FBQ1BDLGFBQU8sRUFBRSxNQURGO0FBRVBDLG1CQUFhLEVBQUUsUUFGUjtBQUdQQyxnQkFBVSxFQUFFLFFBSEw7QUFJUFIsWUFBTSxFQUFFRixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLENBSkQ7QUFLUCxhQUFPO0FBQ0hKLGNBQU0sRUFBRUYsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxFQUFpQixFQUFqQixFQUFxQixDQUFyQixFQUF3QixFQUF4QixDQURMO0FBRUhLLGlCQUFTLEVBQUUsU0FGUjtBQUdIQyxtQkFBVyxFQUFFO0FBSFYsT0FMQTtBQVVQLGVBQVM7QUFDTEMsYUFBSyxFQUFFLE9BREY7QUFFTEMsY0FBTSxFQUFFO0FBRkg7QUFWRiwrR0FjTmQsS0FBSyxDQUFDZSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQWRNLEVBY3lCO0FBQzVCLGFBQU87QUFDSGQsY0FBTSxFQUFFRixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREw7QUFFSEssaUJBQVMsRUFBRTtBQUZSLE9BRHFCO0FBSzVCLGVBQVM7QUFDTEUsYUFBSyxFQUFFLE9BREY7QUFFTEMsY0FBTSxFQUFFO0FBRkg7QUFMbUIsS0FkekIsMkdBd0JOZCxLQUFLLENBQUNlLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBeEJNLEVBd0J5QjtBQUM1QixhQUFPO0FBQ0hkLGNBQU0sRUFBRUYsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxDQURMO0FBRUhLLGlCQUFTLEVBQUU7QUFGUixPQURxQjtBQUs1QixlQUFTO0FBQ0xELGtCQUFVLEVBQUUsUUFEUDtBQUVMTyxhQUFLLEVBQUUsUUFGRjtBQUdMSixhQUFLLEVBQUUsT0FIRjtBQUlMQyxjQUFNLEVBQUU7QUFKSDtBQUxtQixLQXhCekI7QUFaMEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBdURlLFNBQVNJLElBQVQsT0FDQTtBQUFBOztBQUFBLE1BQVhDLFFBQVcsUUFBWEEsUUFBVztBQUVYLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUd4QixTQUFTLEVBQXpCOztBQUVBLE1BQUksQ0FBQ3NCLE1BQU0sQ0FBQ0csVUFBUixJQUFzQixFQUFDSixRQUFELGFBQUNBLFFBQUQsdUJBQUNBLFFBQVEsQ0FBRUssSUFBWCxDQUExQixFQUEyQztBQUN2QyxXQUFPLE1BQUMsU0FBRDtBQUFXLGdCQUFVLEVBQ3hCLEdBREc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBSUg7O0FBQ0QsU0FDQSxNQUFDLDBEQUFEO0FBQVEsVUFBTSxFQUFFLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBQyxRQUEvQjtBQUF3QyxTQUFLLEVBQUMsYUFBOUM7QUFBMkQsYUFBUyxFQUFFRixPQUFPLENBQUNqQixTQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJGYyxRQUFRLENBQUNNLEtBQVQsQ0FBZUMsUUFBMUcsQ0FESixFQUVJLE1BQUMsOERBQUQ7QUFDSSxhQUFTLEVBQUVKLE9BQU8sQ0FBQ2YsV0FEdkI7QUFFSSwyQkFBdUIsRUFBRTtBQUN6Qm9CLFlBQU0sRUFBRVIsUUFBUSxDQUFDUyxPQUFULENBQWlCRjtBQURBLEtBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURBLENBREE7QUFhSDs7R0F6QnVCUixJO1VBR0xHLHFELEVBQ0N2QixTOzs7S0FKSW9CLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29uc3RydWN0aW9uL1twb3N0XS5lM2FiMzc5NWNiYjRlZGZhMmZiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIHVzZVJvdXRlclxyXG59IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCB7XHJcbiAgICBtYWtlU3R5bGVzXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgVHlwb2dyYXBoeVxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICAnQGdsb2JhbCc6IHtcclxuICAgICAgICB1bDoge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBvc3RUaXRsZToge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg1KSxcclxuICAgIH0sXHJcbiAgICBwb3N0Q29udGVudDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgICAgICAgJyYgcCc6IHtcclxuICAgICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDQwLCAyLCA0MCksXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2p1c3RpZnknLFxyXG4gICAgICAgICAgICB0ZXh0SnVzdGlmeTogJ2ludGVyLXdvcmQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJiBpbWcnOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgICAgICAgICcmIHAnOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgNSwgMiwgNSksXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdqdXN0aWZ5JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyYgaW1nJzoge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc1MDBweCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcclxuICAgICAgICAgICAgJyYgcCc6IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICcmIGltZyc6IHtcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcyNTBweCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSkpO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7XHJcbiAgICBwb3N0RGF0YX0pIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGlmICghcm91dGVyLmlzRmFsbGJhY2sgJiYgIXBvc3REYXRhPy5zbHVnKSB7XHJcbiAgICAgICAgcmV0dXJuIDxFcnJvclBhZ2Ugc3RhdHVzQ29kZSA9IHtcclxuICAgICAgICAgICAgNDA0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCAgICAgICAgIFxyXG4gICAgPExheW91dCBkb21haW49eydjb25zdHJ1Y3Rpb24nfT5cclxuICAgIDxHcmlkID5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFByaW1hcnlcImNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N0VGl0bGV9ID57cG9zdERhdGEudGl0bGUucmVuZGVyZWR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N0Q29udGVudH1cclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgX19odG1sOiBwb3N0RGF0YS5jb250ZW50LnJlbmRlcmVkXHJcbiAgICAgICAgfX0vPlxyXG4gICAgPC9HcmlkPlxyXG48L0xheW91dD5cclxuICAgIClcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe2NvbnRleHR9KSB7XHJcbiAgICBjb25zdCB3cENhdGVnb3J5RmlsdGVyID0gMTY7XHJcblxyXG4gICAgY29uc3Qge3F1ZXJ5fSA9IGNvbnRleHQ7XHJcbiAgICBjb25zdCBMSU5LID0gYGh0dHBzOi8vd3d3LmFkdmFuY2VkZm9hbS5jb20vd3AtanNvbi93cC92Mi9wb3N0cz9jYXRlZ29yaWVzPSR7d3BDYXRlZ29yeUZpbHRlcn0mc2x1Zz0ke3F1ZXJ5LnBvc3R9YDtcclxuICAgIC8vY29uc29sZS5sb2coTElOSyk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly93d3cuYWR2YW5jZWRmb2FtLmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzP2NhdGVnb3JpZXM9JHt3cENhdGVnb3J5RmlsdGVyfSZzbHVnPSR7cXVlcnkucG9zdH1gKTtcclxuICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vd3d3LiR7cXVlcnkuZG9tYWlufS5hZHZhbmNlZGZvYW0uY29tL3dwLWpzb24vd3AvdjIvcG9zdHM/c2x1Zz0ke3F1ZXJ5LnBvc3R9YCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhWzBdO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcG9zdERhdGE6IHBvc3REYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBhbGxQb3N0cyA9IGF3YWl0IGdldFN0YXRpY1Byb3BzKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBwb3N0RGF0YS5tYXAoKHsgbm9kZSB9KSA9PiBgL3Bvc3RzLyR7bm9kZS5zbHVnfWApIHx8IFtdLFxyXG4gICAgZmFsbGJhY2s6IHRydWUsXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=