import * as React from 'react';
interface State {
    active: number;
}
interface Props {
    isTabSmall: boolean;
    isBasic: boolean;
    children: any;
}
export declare class Tabs extends React.Component<Props, State> {
    constructor(props: Props);
    select: (i: number) => () => void;
    tabs: () => JSX.Element[];
    content(): JSX.Element[];
    render(): JSX.Element;
}
export {};
