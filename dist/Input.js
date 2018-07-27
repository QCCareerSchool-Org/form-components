var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var classes = 'form-control';
        if (typeof this.props.valid === 'string') {
            classes += ' is-invalid';
        }
        else if (this.props.valid === true) {
            classes += ' is-valid';
        }
        var label;
        if (typeof this.props.label === 'undefined') {
            label = null;
        }
        else {
            label = React.createElement("label", { htmlFor: this.props.id }, this.props.label);
        }
        return (React.createElement("div", { className: 'form-group' },
            label,
            React.createElement("input", { className: classes, type: this.props.type, name: this.props.name, id: this.props.id, value: this.props.value, placeholder: this.props.placeholder, autoComplete: this.props.autoComplete, maxLength: this.props.maxLength, onChange: this.props.changeFunc, onBlur: this.props.blurFunc }),
            this.helpText()));
    };
    Input.prototype.helpText = function () {
        if (this.props.valid === false) {
            return null;
        }
        else if (this.props.valid === true) {
            return React.createElement("small", { className: 'form-text text-success' }, "\u2713");
        }
        else {
            return React.createElement("small", { className: 'form-text text-danger' },
                "\u2716 ",
                this.props.valid);
        }
    };
    return Input;
}(React.Component));
export default Input;
//# sourceMappingURL=Input.js.map