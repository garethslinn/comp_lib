"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.RadioButton = function (props) {
    var id = props.id, label = props.label, name = props.name, isChecked = props.isChecked, isDisabled = props.isDisabled, isSmall = props.isSmall;
    var radioSize = isSmall ? '-sm' : '-lg';
    var labelSize = isSmall ? '.label-medium' : 'label-large';
    return (React.createElement("label", { className: "radio-label radio" + radioSize },
        React.createElement("input", { type: "radio", id: id, name: name, className: "radio", defaultChecked: isChecked, disabled: isDisabled }),
        React.createElement("span", { className: labelSize }, label)));
};
