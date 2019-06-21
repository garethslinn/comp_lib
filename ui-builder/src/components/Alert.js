"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Alert = function (props) {
    var action = props.action, alertType = props.alertType, children = props.children;
    return (React.createElement("div", { onClick: action, className: 'alert ' + alertType },
        React.createElement("div", null, children)));
};
