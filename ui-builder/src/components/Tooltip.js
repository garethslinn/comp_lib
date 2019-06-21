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
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.show = function (activeState) {
            _this.setState({ isVisible: activeState });
        };
        _this.state = {
            isVisible: false,
        };
        return _this;
    }
    Tooltip.prototype.render = function () {
        var _a = this.props, type = _a.type, children = _a.children, message = _a.message, position = _a.position;
        var show = this.show;
        return (React.createElement("span", { className: "tooltip", onMouseLeave: function () { return show(false); } },
            this.state.isVisible && (React.createElement("div", { className: "tooltip-content tooltip-" + position + " tooltip-" + type },
                React.createElement("div", { className: "tooltip-message" }, message))),
            React.createElement("span", { className: "tooltip-trigger", onMouseOver: function () { return show(true); } }, children)));
    };
    return Tooltip;
}(React.Component));
exports.Tooltip = Tooltip;
exports.default = Tooltip;
