import * as React from 'react';
export interface IOption {
    name: string | JSX.Element;
    value: string;
}
interface IProps {
    label?: string | JSX.Element;
    setName: string;
    options: IOption[];
    selectedOption: string;
    valid: boolean | string;
    changeFunc: (event: React.ChangeEvent<any>) => void;
    wrapperClassName?: string;
    labelClassName?: string;
    fancy?: boolean;
}
export default class RadioGroup extends React.Component<IProps> {
    render(): JSX.Element;
    private helpText;
}
export {};
