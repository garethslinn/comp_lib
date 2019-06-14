import * as React from 'react';

interface Toggle {
    id: any;
    size: string;
    label: string;
    isDisabled: boolean;
}

export const Toggle: React.FunctionComponent<Toggle> = (props: any) => {
    const { size, label, isDisabled, id } = props;

    return (
        <label className={`toggle toggle-` + size} htmlFor={id}>
            <input id={id} type="checkbox" disabled={isDisabled} />
            <span className="toggle-text">{label}</span>
        </label>
    );
};
