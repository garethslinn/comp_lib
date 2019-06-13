import * as React from 'react';
// @ts-ignore
import Slider from 'react-rangeslider';
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

interface Context {}

export class Range extends React.Component<Props, State> {
  constructor(props: Props, context: Context) {
    super(props, context);
    this.state = {
      value: 12.5,
    };
  }

  handleChange = (value: number) => {
    this.setState({
      value: value,
    });
  };

  render() {
    const { value } = this.state;
    const { min, max, hasTooltip, step, size, forceWidth } = this.props;
    const displayValue = <div className="range-value">{ parseInt(String(value)) }</div>;

    const rangeWidth = forceWidth ? forceWidth + '%' : 'auto';
    const style = {
      width: rangeWidth,
    };

    return (
      <div className={`slider range-` + size} style={style}>
        <Slider
          min={min}
          max={max}
          tooltip={hasTooltip}
          step={step}
          value={value}
          onChange={this.handleChange}
        />
        {displayValue}
      </div>
    );
  }
}

export default Range;
