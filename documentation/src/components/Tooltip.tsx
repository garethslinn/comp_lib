import React, {useState} from "react";

interface Props {
  position: string;
  children: any;
  type: string;
  message: any;
  forceWidth: number;
}

export const Tooltip: React.FunctionComponent<Props> = (props:any) => {

  const { type, children, message, position, forceWidth } = props;
  const rangeWidth = forceWidth ? forceWidth + 'px' : 'auto';
  const style = {
    width: rangeWidth
  };
  const [activeState, setActive] = useState(false);
  const show = (isActive: boolean) => {
    setActive(isActive)
  };

  return (
      <span className="tooltip" onMouseLeave={() => show(false)}>
        {activeState && (
            <div
                className={`tooltip-content tooltip-${position} 
                tooltip-${type}`}
                style={style}
            >
              <div className="tooltip-message">{message}</div>
            </div>
        )}
        <span className="tooltip-trigger" onMouseOver={() => show(true)}>
          {children}
        </span>
      </span>
  );
};


export class Tooltip1 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  show = (activeState: boolean) => {
    this.setState({ isVisible: activeState });
  };

  render() {
    const { type, children, message, position, forceWidth } = this.props;
    const { show } = this;
    const rangeWidth = forceWidth ? forceWidth + 'px' : 'auto';
    const style = {
      width: rangeWidth
    };

    return (
      <span className="tooltip" onMouseLeave={() => show(false)}>
        {this.state.isVisible && (


          <div

            className={`tooltip-content tooltip-${position} tooltip-${type}`} style={style}
          >
            <div className="tooltip-message">{message}</div>
          </div>
        )}
        <span className="tooltip-trigger" onMouseOver={() => show(true)}>
          {children}
        </span>
      </span>
    );
  }
}

export default Tooltip;
