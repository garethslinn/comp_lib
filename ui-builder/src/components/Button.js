"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Button = function (props) {
    var buttonType = props.buttonType, isButtonSmall = props.isButtonSmall, isButtonWithIcon = props.isButtonWithIcon, isButtonDisabled = props.isButtonDisabled, isBlock = props.isBlock, action = props.action, children = props.children;
    var buttonSize = isButtonSmall ? '-sm' : '';
    var block = isBlock ? 'block' : '';
    var buttonIcon = isButtonWithIcon ? 'button-icon' : '';
    return (React.createElement("button", { disabled: isButtonDisabled, onClick: action, className: 'button button-' + buttonType + buttonSize + ' ' + buttonIcon + ' ' + block }, children));
};
