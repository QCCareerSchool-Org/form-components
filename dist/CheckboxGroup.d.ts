import * as React from 'react';
export interface IOption {
    name: string | JSX.Element;
    value: string;
}
interface IProps {
    label?: string | JSX.Element;
    setName: string;
    options: IOption[];
    selectedOptions: string[];
    disabledOptions?: string[];
    valid: boolean | string;
    changeFunc: (event: React.ChangeEvent<any>) => void;
    blurFunc?: (event: React.FocusEvent<any>) => void;
    wrapperClassName?: string;
    labelClassName?: string;
    fancy?: boolean;
}
export default class CheckboxGroup extends React.Component<IProps> {
    render(): JSX.Element;
    private helpText;
}
export {};
