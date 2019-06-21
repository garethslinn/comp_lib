import * as React from 'react';
import 'react-rangeslider/lib/index.css';
interface State {
    value: number;
}
interface Props {
    min: number;
    max: number;
    step: number;
    hasTooltip: boolean;
    showValue: boolean;
    size: string;
    forceWidth: number;
}
interface Context {
}
export declare class Range extends React.Component<Props, State> {
    constructor(props: Props, context: Context);
    handleChange: (value: number) => void;
    render(): JSX.Element;
}
export default Range;
