import * as React from 'react';
import { keygen } from './utils/utils';

interface Toggle {
  size: string;
  label: string;
  isDisabled: boolean;
}

export const Toggle: React.FunctionComponent<Toggle> = (props: any) => {
  const { size, label, isDisabled } = props;
  const id = keygen();
  return (
    <label className={`toggle toggle-` + size} htmlFor={id}>
      <input id={id} type="checkbox" disabled={isDisabled} />
      <span className="toggle-text">{label}</span>
    </label>
  );
};
