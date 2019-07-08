import * as React from 'react';

interface Props {
  id: string;
  label: string;
  name: string;
  isChecked: boolean;
  isDisabled: boolean;
  isSmall: boolean;
}

export const RadioButton: React.FunctionComponent<Props> = (props:any) => {
    const { id, label, name, isChecked, isDisabled, isSmall} = props;
    const radioSize = isSmall? '-sm' : '-lg';
    const labelSize = isSmall? '.label-medium' : 'label-large';

    return (
        <label className={`radio-label radio` + radioSize}>
            <input type="radio" id={id} name={name} className="radio"
                   defaultChecked={isChecked}
                   disabled={isDisabled}/>
            <span className={labelSize}>{label}</span>
        </label>
    );
};

