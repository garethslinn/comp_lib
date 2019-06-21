import * as React from 'react';
interface Button {
    action: () => void;
    buttonType: string;
    isButtonSmall: boolean;
    isBlock: boolean;
    isButtonWithIcon: boolean;
    isButtonDisabled: boolean;
}
export declare const Button: React.FunctionComponent<Button>;
export {};
