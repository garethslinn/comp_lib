"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.InputField = function (props) {
    var fieldSize = props.isLarge ? '' : '-sm';
    var error = props.isError ? 'error' : '';
    var disabled = props.isDisabled ? 'disabled' : '';
    return (React.createElement("fieldset", null,
        props.type == 'text' && (React.createElement(React.Fragment, null,
            React.createElement("label", { className: 'text-field-label' + fieldSize + ' ' + error + ' ' + disabled, htmlFor: props.elementFormId }, props.label),
            React.createElement("span", null,
                React.createElement("input", { id: props.elementFormId, disabled: props.isDisabled, placeholder: props.placeHolder, type: "text", className: 'text-field text-field' + fieldSize + ' ' + error }),
                props.isError && (React.createElement("i", { className: 'text-field-icon icon-warning-a text-field-icon' +
                        fieldSize + ' ' + error + ' ' + disabled })),
                React.createElement("div", { className: 'text-field-description' + fieldSize }, props.children)))),
        props.type === 'date' && React.createElement("h2", null, "Date"),
        props.type === 'password' && React.createElement("h2", null, "Password")));
};
