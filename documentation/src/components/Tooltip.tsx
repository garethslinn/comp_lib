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

export class Tooltip extends React.Component<Props, State> {
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
    const { type, children, message, position } = this.props;
    const { show } = this;
    return (
      <span className="tooltip" onMouseLeave={() => show(false)}>
        {this.state.isVisible && (
          <div
            className={`tooltip-content tooltip-${position} tooltip-${type}`}
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
