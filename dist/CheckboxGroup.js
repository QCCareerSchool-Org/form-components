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
var CheckboxGroup = /** @class */ (function (_super) {
    __extends(CheckboxGroup, _super);
    function CheckboxGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxGroup.prototype.render = function () {
        var _this = this;
        var wrapperClassName;
        var inputClassName;
        var labelClassName;
        if (this.props.fancy) {
            wrapperClassName = 'custom-control custom-checkbox';
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
            React.createElement("input", { type: 'checkbox', className: inputClassName, name: _this.props.setName, onChange: _this.props.changeFunc, onBlur: _this.props.blurFunc, value: opt.value, checked: _this.props.selectedOptions.indexOf(opt.value) > -1, disabled: typeof _this.props.disabledOptions !== 'undefined' && _this.props.disabledOptions.indexOf(opt.value) !== -1, id: _this.props.setName + '-' + opt.value }),
            React.createElement("label", { className: labelClassName, htmlFor: _this.props.setName + '-' + opt.value }, opt.name),
            _this.helpText())); });
        return (React.createElement("div", { className: 'form-group' },
            typeof this.props.label !== 'undefined' ? React.createElement("label", { className: this.props.labelClassName }, this.props.label) : '',
            inputs));
    };
    CheckboxGroup.prototype.helpText = function () {
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
    return CheckboxGroup;
}(React.Component));
export default CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map