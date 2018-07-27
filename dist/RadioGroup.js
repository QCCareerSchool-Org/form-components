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
var RadioGroup = /** @class */ (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioGroup.prototype.render = function () {
        var _this = this;
        var wrapperClassName;
        var inputClassName;
        var labelClassName;
        if (this.props.fancy) {
            wrapperClassName = 'custom-control custom-radio';
            inputClassName = 'custom-control-input';
            labelClassName = 'custom-control-label';
        }
        else {
            wrapperClassName = 'form-check';
            inputClassName = 'form-check-input';
            labelClassName = 'form-check-label';
        }
        if (this.props.wrapperClassName) {
            wrapperClassName += ' ' + this.props.wrapperClassName;
        }
        var inputs = this.props.options.map(function (opt, index) { return (React.createElement("div", { className: wrapperClassName, key: index },
            React.createElement("input", { type: 'radio', className: inputClassName, name: _this.props.setName, onChange: _this.props.changeFunc, value: opt.value, checked: _this.props.selectedOption === opt.value, id: _this.props.setName + '-' + opt.value }),
            React.createElement("label", { className: labelClassName, htmlFor: _this.props.setName + '-' + opt.value }, opt.name))); });
        return (React.createElement("div", { className: 'form-group' },
            typeof this.props.label !== 'undefined' ? React.createElement("label", { className: this.props.labelClassName }, this.props.label) : '',
            inputs,
            this.helpText()));
    };
    RadioGroup.prototype.helpText = function () {
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
    return RadioGroup;
}(React.Component));
export default RadioGroup;
//# sourceMappingURL=RadioGroup.js.map