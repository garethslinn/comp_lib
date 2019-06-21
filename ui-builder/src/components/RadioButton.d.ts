import * as React from 'react';
interface RadioButton {
    id: string;
    label: string;
    name: string;
    isChecked: boolean;
    isDisabled: boolean;
    isSmall: boolean;
}
export declare const RadioButton: React.FunctionComponent<RadioButton>;
export {};
