import * as React from 'react';
interface Alert {
    action: () => void;
    alertType: string;
    iconType: string;
    children: any;
}
export declare const Alert: React.FunctionComponent<Alert>;
export {};
