import * as React from 'react';
export interface IOption {
    name: string;
    value: string;
}
interface IProps {
    label?: string | JSX.Element;
    opts: IOption[];
    name: string;
    id: string;
    value: string | null;
    valid: boolean | string;
    autoComplete?: string;
    changeFunc: (event: React.ChangeEvent<any>) => void;
    blurFunc?: (event: React.FocusEvent<any>) => void;
    wrapperClassName?: string;
    fancy?: boolean;
}
export default class Select extends React.Component<IProps> {
    render(): JSX.Element;
    private helpText;
}
export {};
