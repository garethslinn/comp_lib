import * as React from 'react';

interface Tooltip {
  position: string;
  children: any;
  type: string
}

export class Tooltip extends React.Component<Tooltip, {}> {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  show = (activeState) => {
    this.setState({ isVisible: activeState });
  };

  render() {
    const { type, children, message, position } = this.props;
    const { show } = this;
    return (
      <span className="tooltip" onMouseLeave={() => show(false)}>
        {this.state.isVisible && (
          <div className={`tooltip-content tooltip-${position} tooltip-${type}`}>
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
