webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Calculator/index.js":
/*!****************************************!*\
  !*** ./components/Calculator/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculator.module.scss */ "./components/Calculator/Calculator.module.scss");
/* harmony import */ var _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\valdi\\imc\\components\\Calculator\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Calculator() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      altura = _useState[0],
      setAltura = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      peso = _useState2[0],
      setPeso = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      imc = _useState3[0],
      setImc = _useState3[1];

  function calculateImc() {
    var alturam = altura / 100; //altura para metros

    setImc((peso / (alturam * alturam)).toFixed(2));
  }

  function verificaImc() {
    if (imc < 18.5) return "Abaixo do peso!";
    if (imc < 24.9) return "Abaixo do peso!";
    if (imc < 29.9) return "Sobre!";
    if (imc < 34.9) return "Obesidade grau 1!";
    if (imc < 39.9) return "Obesidade grau 2!";
    return "Obesidade grau 3";
  }

  return __jsx("div", {
    className: _Calculator_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.calculator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, " Calculadora "), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "column",
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Altura em cm",
    variant: "filled",
    fullWidth: true,
    type: "number",
    value: altura,
    onChange: function onChange(_ref) {
      var target = _ref.target;
      return setAltura(target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    label: "Peso em Kg",
    variant: "filled",
    fullWidth: true,
    type: "number",
    value: peso,
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setPeso(target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: function onClick() {
      return calculateImc();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, " Calcular ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, " O seu IMC \xE9: ", imc, " kg/m2 ")))));
}

_s(Calculator, "EBpdILrJoq+yDe3VJ/dEabpqs64=");

_c = Calculator;
/* harmony default export */ __webpack_exports__["default"] = (Calculator);

var _c;

$RefreshReg$(_c, "Calculator");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3IiLCJ1c2VTdGF0ZSIsImFsdHVyYSIsInNldEFsdHVyYSIsInBlc28iLCJzZXRQZXNvIiwiaW1jIiwic2V0SW1jIiwiY2FsY3VsYXRlSW1jIiwiYWx0dXJhbSIsInRvRml4ZWQiLCJ2ZXJpZmljYUltYyIsInN0eWxlcyIsImNhbGN1bGF0b3IiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLFVBQVQsR0FBdUI7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsRUFEakI7QUFBQSxNQUNaQyxNQURZO0FBQUEsTUFDSkMsU0FESTs7QUFBQSxtQkFFS0Ysc0RBQVEsRUFGYjtBQUFBLE1BRVpHLElBRlk7QUFBQSxNQUVOQyxPQUZNOztBQUFBLG1CQUdHSixzREFBUSxFQUhYO0FBQUEsTUFHWkssR0FIWTtBQUFBLE1BR1BDLE1BSE87O0FBTW5CLFdBQVNDLFlBQVQsR0FBMEI7QUFDdkIsUUFBTUMsT0FBTyxHQUFHUCxNQUFNLEdBQUcsR0FBekIsQ0FEdUIsQ0FDUzs7QUFDaENLLFVBQU0sQ0FBQyxDQUFDSCxJQUFJLElBQUVLLE9BQU8sR0FBQ0EsT0FBVixDQUFMLEVBQXlCQyxPQUF6QixDQUFpQyxDQUFqQyxDQUFELENBQU47QUFDRjs7QUFFRCxXQUFTQyxXQUFULEdBQXVCO0FBQ25CLFFBQUtMLEdBQUcsR0FBRyxJQUFYLEVBQWtCLE9BQU8saUJBQVA7QUFDbEIsUUFBS0EsR0FBRyxHQUFHLElBQVgsRUFBa0IsT0FBTyxpQkFBUDtBQUNsQixRQUFLQSxHQUFHLEdBQUcsSUFBWCxFQUFrQixPQUFPLFFBQVA7QUFDbEIsUUFBS0EsR0FBRyxHQUFHLElBQVgsRUFBa0IsT0FBTyxtQkFBUDtBQUNsQixRQUFLQSxHQUFHLEdBQUcsSUFBWCxFQUFrQixPQUFPLG1CQUFQO0FBQ2xCLFdBQU8sa0JBQVA7QUFDSDs7QUFHRCxTQUNJO0FBQUssYUFBUyxFQUFFTSw4REFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUksTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsUUFBMUI7QUFBbUMsV0FBTyxFQUFFLENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQVcsU0FBSyxFQUFDLGNBQWpCO0FBQWdDLFdBQU8sRUFBQyxRQUF4QztBQUFpRCxhQUFTLE1BQTFEO0FBQTJELFFBQUksRUFBQyxRQUFoRTtBQUF5RSxTQUFLLEVBQUVYLE1BQWhGO0FBQXdGLFlBQVEsRUFBRztBQUFBLFVBQUdZLE1BQUgsUUFBR0EsTUFBSDtBQUFBLGFBQWdCWCxTQUFTLENBQUNXLE1BQU0sQ0FBQ0MsS0FBUixDQUF6QjtBQUFBLEtBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyREFBRDtBQUFXLFNBQUssRUFBQyxZQUFqQjtBQUE4QixXQUFPLEVBQUMsUUFBdEM7QUFBK0MsYUFBUyxNQUF4RDtBQUF5RCxRQUFJLEVBQUMsUUFBOUQ7QUFBdUUsU0FBSyxFQUFFWCxJQUE5RTtBQUFvRixZQUFRLEVBQUc7QUFBQSxVQUFHVSxNQUFILFNBQUdBLE1BQUg7QUFBQSxhQUFnQlQsT0FBTyxDQUFDUyxNQUFNLENBQUNDLEtBQVIsQ0FBdkI7QUFBQSxLQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixFQU9JLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsU0FBSyxFQUFDLFNBQWxDO0FBQTRDLGFBQVMsTUFBckQ7QUFBc0QsV0FBTyxFQUFFO0FBQUEsYUFBTVAsWUFBWSxFQUFsQjtBQUFBLEtBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosQ0FQSixFQVVJLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBMkJGLEdBQTNCLFlBREosQ0FWSixDQUZKLENBREosQ0FESjtBQXFCSDs7R0ExQ1FOLFU7O0tBQUFBLFU7QUE0Q01BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY3M2NmODE3YmVkYzdhMmQyYTdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FsY3VsYXRvci5tb2R1bGUuc2NzcydcclxuXHJcbmZ1bmN0aW9uIENhbGN1bGF0b3IgKCkge1xyXG4gICAgY29uc3QgW2FsdHVyYSwgc2V0QWx0dXJhXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtwZXNvLCBzZXRQZXNvXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtpbWMsIHNldEltY10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVJbWMgKCkgIHtcclxuICAgICAgIGNvbnN0IGFsdHVyYW0gPSBhbHR1cmEgLyAxMDAgICAgLy9hbHR1cmEgcGFyYSBtZXRyb3NcclxuICAgICAgIHNldEltYygocGVzby8oYWx0dXJhbSphbHR1cmFtKSkudG9GaXhlZCgyKSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2ZXJpZmljYUltYyAoKXtcclxuICAgICAgICBpZiAoIGltYyA8IDE4LjUgKSByZXR1cm4gXCJBYmFpeG8gZG8gcGVzbyFcIlxyXG4gICAgICAgIGlmICggaW1jIDwgMjQuOSApIHJldHVybiBcIkFiYWl4byBkbyBwZXNvIVwiXHJcbiAgICAgICAgaWYgKCBpbWMgPCAyOS45ICkgcmV0dXJuIFwiU29icmUhXCJcclxuICAgICAgICBpZiAoIGltYyA8IDM0LjkgKSByZXR1cm4gXCJPYmVzaWRhZGUgZ3JhdSAxIVwiXHJcbiAgICAgICAgaWYgKCBpbWMgPCAzOS45ICkgcmV0dXJuIFwiT2Jlc2lkYWRlIGdyYXUgMiFcIlxyXG4gICAgICAgIHJldHVybiBcIk9iZXNpZGFkZSBncmF1IDNcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsY3VsYXRvcn0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgPiBDYWxjdWxhZG9yYSA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIkFsdHVyYSBlbSBjbVwiIHZhcmlhbnQ9XCJmaWxsZWRcIiBmdWxsV2lkdGggdHlwZT1cIm51bWJlclwiIHZhbHVlPXthbHR1cmF9IG9uQ2hhbmdlPXsgKHsgdGFyZ2V0IH0pID0+IHNldEFsdHVyYSh0YXJnZXQudmFsdWUpIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiUGVzbyBlbSBLZ1wiIHZhcmlhbnQ9XCJmaWxsZWRcIiBmdWxsV2lkdGggdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwZXNvfSBvbkNoYW5nZT17ICh7IHRhcmdldCB9KSA9PiBzZXRQZXNvKHRhcmdldC52YWx1ZSkgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGZ1bGxXaWR0aCBvbkNsaWNrPXsoKSA9PiBjYWxjdWxhdGVJbWMoKX0+IENhbGN1bGFyIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT4gTyBzZXUgSU1DIMOpOiB7aW1jfSBrZy9tMiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvciJdLCJzb3VyY2VSb290IjoiIn0=