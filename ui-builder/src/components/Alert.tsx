import * as React from 'react';

interface Alert {
  action: () => void;
  alertType: string;
  iconType: string;
  children: any;
}
export const Alert: React.FunctionComponent<Alert> = (props) => {
    return (
      <div onClick={props.action} className={'alert ' + props.alertType}>
        <div>{props.children}</div>
      </div>
    );
}
