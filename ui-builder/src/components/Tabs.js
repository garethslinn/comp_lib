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
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this_1 = _super.call(this, props) || this;
        _this_1.select = function (i) {
            var _this = _this_1;
            return function () {
                _this.setState({
                    active: i,
                });
            };
        };
        _this_1.tabs = function () {
            var children = _this_1.props.children;
            var active = _this_1.state.active;
            return React.Children.map(children, function (item, i) {
                if (i % 2 === 0) {
                    var selected = active === i ? 'active' : '';
                    var isDisabled = !!item.match(/-disabled-/);
                    var removeFlag = function () {
                        return item.replace('-disabled-', '');
                    };
                    return (React.createElement("button", { role: "tab", disabled: isDisabled, onClick: _this_1.select(i), className: selected + " tab" }, removeFlag()));
                }
            });
        };
        _this_1.state = {
            active: 0
        };
        return _this_1;
    }
    Tabs.prototype.content = function () {
        var children = this.props.children;
        var active = this.state.active;
        return React.Children.map(children, function (item, i) {
            if (i - 1 === active) {
                return React.createElement("div", { className: "content" }, item);
            }
        });
    };
    Tabs.prototype.render = function () {
        var _a = this.props, isTabSmall = _a.isTabSmall, isBasic = _a.isBasic;
        var tabSize = isTabSmall ? '-sm' : '-lg';
        var basic = isBasic ? 'tabs-basic' : '';
        return (React.createElement("div", { role: "tabgroup", className: "tabs tabs" + tabSize + " " + basic },
            this.tabs(),
            this.content()));
    };
    return Tabs;
}(React.Component));
exports.Tabs = Tabs;
