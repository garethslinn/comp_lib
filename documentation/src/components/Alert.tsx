import * as React from 'react';

interface Props {
  action: () => void;
  alertType: string;
  iconType: string;
  children: any;
}
export const Alert: React.FunctionComponent<Props> = (props:any) => {
    const { action, alertType, children } = props;
    return (
      <div onClick={action} className={'alert ' + alertType}>
        <div>{children}</div>
      </div>
    );
};
