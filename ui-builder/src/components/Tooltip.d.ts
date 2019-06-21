import * as React from 'react';
interface State {
    isVisible: boolean;
}
interface Props {
    position: string;
    children: any;
    type: string;
    message: any;
}
export declare class Tooltip extends React.Component<Props, State> {
    constructor(props: Props);
    show: (activeState: boolean) => void;
    render(): JSX.Element;
}
export default Tooltip;
