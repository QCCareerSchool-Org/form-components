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
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.render = function () {
        var className;
        if (this.props.fancy) {
            className = 'custom-select';
        }
        else {
            className = 'form-control';
        }
        if (typeof this.props.valid === 'string') {
            className += ' is-invalid';
        }
        else if (this.props.valid === true) {
            className += ' is-valid';
        }
        var label;
        if (typeof this.props.label === 'undefined') {
            label = null;
        }
        else {
            label = React.createElement("label", { htmlFor: this.props.id }, this.props.label);
        }
        var items = this.props.opts.map(function (item, index) { return (React.createElement("option", { key: index, value: item.value }, item.name)); });
        var value;
        if (this.props.value !== null) {
            value = this.props.value;
        }
        else if (this.props.opts.length) {
            value = this.props.opts[0].value;
        }
        return (React.createElement("div", { className: 'form-group' },
            label,
            React.createElement("select", { className: className, id: this.props.id, name: this.props.name, value: value, autoComplete: this.props.autoComplete, onChange: this.props.changeFunc, onBlur: this.props.blurFunc }, items),
            this.helpText()));
    };
    Select.prototype.helpText = function () {
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
    return Select;
}(React.Component));
export default Select;
//# sourceMappingURL=Select.js.map