"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Highlighter = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'hoverHighlight'
  }, children, /*#__PURE__*/_react.default.createElement("style", {
    jsx: true
  }, "\n          .hoverHighlight {\n            filter: brightness(1);\n            background-color: red;\n            transition: all 1s;\n            width: 100%;\n            height: 100%;\n          }\n          .hoverHighlight:hover {\n            filter: brightness(1.5);\n            transition: all 1s;\n          }\n        "));
};

var _default = Highlighter;
exports.default = _default;