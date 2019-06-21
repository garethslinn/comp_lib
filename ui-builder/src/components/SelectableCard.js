"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.SelectableCard = function (props) {
    var isDisabled = props.isDisabled, title = props.title, description = props.description;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { disabled: isDisabled, onClick: props.action, className: "selectable-card" },
            React.createElement("div", { className: "title" }, title),
            React.createElement("p", { className: "description" }, description))));
};
