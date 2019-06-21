import * as React from 'react';
interface SelectableCard {
    action: () => void;
    title: string;
    description: string;
    isDisabled: boolean;
}
export declare const SelectableCard: React.FunctionComponent<SelectableCard>;
export {};
