import * as React from 'react';
interface IProps {
    type: 'text' | 'number' | 'email' | 'tel';
    label?: string | JSX.Element;
    name: string;
    id: string;
    value: string;
    valid: boolean | string;
    placeholder: string;
    autoComplete?: string;
    maxLength?: number;
    changeFunc: (event: React.ChangeEvent<any>) => void;
    blurFunc?: (event: React.FocusEvent<any>) => void;
}
export default class Input extends React.Component<IProps> {
    render(): JSX.Element;
    private helpText;
}
export {};
