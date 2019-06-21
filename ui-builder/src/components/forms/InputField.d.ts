import * as React from 'react';
interface InputField {
    type: string;
    isLarge: boolean;
    isDisabled: boolean;
    isError: boolean;
    placeHolder: string;
    elementFormId: string;
    label: string;
    children: any;
}
export declare const InputField: React.FunctionComponent<InputField>;
export {};
