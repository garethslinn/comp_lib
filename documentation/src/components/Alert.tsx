import * as React from 'react';

interface Alert {
  action: () => void;
  alertType: string;
  iconType: string;
  children: any;
}
export const Alert: React.FunctionComponent<Alert> = (props:any) => {
    const { action, alertType, children } = props;
    return (
      <div onClick={action} className={'alert ' + alertType}>
        <div>{children}</div>
      </div>
    );
};
