webpackHotUpdate_N_E("pages/about",{

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Navigation */ "./src/components/Navigation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_Post_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/Post.css */ "./styles/Post.css");
/* harmony import */ var _styles_Post_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Post_css__WEBPACK_IMPORTED_MODULE_11__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var _default = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("title", null, "Advanced Foam - ".concat(this.props.post.title.rendered)), __jsx("meta", {
        name: "Advanced Foam Inc. - ".concat(this.props.post.title.rendered),
        content: "Advanced Foam Inc. - ".concat(this.props.post.title.rendered)
      }), __jsx("meta", {
        charSet: "utf-8"
      }), __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx("h1", {
        classname: "post__title"
      }, this.props.post.title.rendered), __jsx("article", {
        className: "post",
        dangerouslySetInnerHTML: {
          __html: this.props.post.content.rendered
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    // Resolve promise and set initial props.
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("http://www.advancedfoam.com/wp-json/wp/v2/pages?slug=".concat('about'));

              case 2:
                response = _context.sent;
                return _context.abrupt("return", {
                  post: response.data[0]
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbInByb3BzIiwicG9zdCIsInRpdGxlIiwicmVuZGVyZWQiLCJfX2h0bWwiLCJjb250ZW50IiwiY29udGV4dCIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7NkJBaUJXO0FBQ1AsYUFDRSxNQUFDLDhDQUFELFFBQ0UsTUFBQyxnREFBRCxRQUNFLCtDQUEyQixLQUFLQSxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEtBQWhCLENBQXNCQyxRQUFqRCxFQURGLEVBRUU7QUFBTSxZQUFJLGlDQUEwQixLQUFLSCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JDLEtBQWhCLENBQXNCQyxRQUFoRCxDQUFWO0FBQ2MsZUFBTyxpQ0FBMEIsS0FBS0gsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxLQUFoQixDQUFzQkMsUUFBaEQ7QUFEckIsUUFGRixFQUlFO0FBQU0sZUFBTyxFQUFDO0FBQWQsUUFKRixFQUtFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCLFFBTEYsQ0FERixFQVFFLE1BQUMsOERBQUQsT0FSRixFQVNFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQThCLEtBQUtILEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsS0FBaEIsQ0FBc0JDLFFBQXBELENBVEYsRUFVRTtBQUNFLGlCQUFTLEVBQUMsTUFEWjtBQUVFLCtCQUF1QixFQUFHO0FBQ3hCQyxnQkFBTSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkksT0FBaEIsQ0FBd0JGO0FBRFI7QUFGNUIsUUFWRixDQURGO0FBa0JEOzs7QUEvQkQ7OytOQUM4QkcsTzs7Ozs7Ozt1QkFHTEMsNkNBQUssQ0FBQ0MsR0FBTixnRUFBbUUsT0FBbkUsRTs7O0FBQWpCQyx3QjtpREFHQztBQUNMUixzQkFBSSxFQUFFUSxRQUFRLENBQUNDLElBQVQsQ0FBYyxDQUFkO0FBREQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFUa0JDLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmM2YmIxN2ZlN2VhYmE2NWU5MGJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbidcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMvUG9zdC5jc3NcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLy8gUmVzb2x2ZSBwcm9taXNlIGFuZCBzZXQgaW5pdGlhbCBwcm9wcy5cclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCBjb250ZXh0ICkge1xyXG5cclxuICAgIC8vIE1ha2UgcmVxdWVzdCBmb3IgcG9zdHMuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCggYGh0dHA6Ly93d3cuYWR2YW5jZWRmb2FtLmNvbS93cC1qc29uL3dwL3YyL3BhZ2VzP3NsdWc9JHsnYWJvdXQnfWAgKVxyXG5cclxuICAgIC8vIFJldHVybiBvdXIgb25seSBpdGVtIGluIGFycmF5IGZyb20gcmVzcG9uc2UgdG8gcG9zdHMgb2JqZWN0IGluIHByb3BzLlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zdDogcmVzcG9uc2UuZGF0YVswXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPntgQWR2YW5jZWQgRm9hbSAtICR7dGhpcy5wcm9wcy5wb3N0LnRpdGxlLnJlbmRlcmVkfWB9PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9e2BBZHZhbmNlZCBGb2FtIEluYy4gLSAke3RoaXMucHJvcHMucG9zdC50aXRsZS5yZW5kZXJlZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtgQWR2YW5jZWQgRm9hbSBJbmMuIC0gJHt0aGlzLnByb3BzLnBvc3QudGl0bGUucmVuZGVyZWR9YH0gLz5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uLz5cclxuICAgICAgICA8aDEgY2xhc3NuYW1lPVwicG9zdF9fdGl0bGVcIj57IHRoaXMucHJvcHMucG9zdC50aXRsZS5yZW5kZXJlZCB9PC9oMT5cclxuICAgICAgICA8YXJ0aWNsZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicG9zdFwiXHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHtcclxuICAgICAgICAgICAgX19odG1sOiB0aGlzLnByb3BzLnBvc3QuY29udGVudC5yZW5kZXJlZFxyXG4gICAgICAgICAgfSB9IC8+XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=