"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_rangeslider_1 = require("react-rangeslider");
require("react-rangeslider/lib/index.css");
var Range = (function (_super) {
    __extends(Range, _super);
    function Range(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleChange = function (value) {
            _this.setState({
                value: value,
            });
        };
        _this.state = {
            value: 12.5,
        };
        return _this;
    }
    Range.prototype.render = function () {
        var value = this.state.value;
        var _a = this.props, min = _a.min, max = _a.max, hasTooltip = _a.hasTooltip, step = _a.step, size = _a.size, forceWidth = _a.forceWidth, showValue = _a.showValue;
        var displayValue = showValue ? React.createElement("div", { className: "range-value" }, parseInt(String(value))) : '';
        var rangeWidth = forceWidth ? forceWidth + '%' : 'auto';
        var style = {
            width: rangeWidth,
        };
        return (React.createElement("div", { className: "slider range-" + size, style: style },
            React.createElement(react_rangeslider_1.default, { min: min, max: max, tooltip: hasTooltip, step: step, value: value, onChange: this.handleChange }),
            displayValue));
    };
    return Range;
}(React.Component));
exports.Range = Range;
exports.default = Range;
