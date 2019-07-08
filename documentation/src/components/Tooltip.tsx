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