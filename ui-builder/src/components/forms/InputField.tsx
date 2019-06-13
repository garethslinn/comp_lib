import * as React from 'react';
import * as utils from '../utils/utils';

interface InputField {
  type: string;
  isLarge: boolean;
  isDisabled: boolean;
  isError: boolean;
  placeHolder: string;
  label: string;
  children: any
}

export const InputField: React.FunctionComponent<InputField> = props => {
  const fieldSize = props.isLarge ? '' : '-sm';
  const error = props.isError ? 'error' : '';
  const disabled = props.isDisabled ? 'disabled' : '';
  const elementFormId = utils.keygen();

  return (
    <fieldset>
      {props.type == 'text' && (
        <React.Fragment>
          <label
            className={
              'text-field-label' + fieldSize + ' ' + error + ' ' + disabled
            }
            htmlFor={elementFormId}
          >
            {props.label}
          </label>
          <span>
            <input
              id={elementFormId}
              disabled={props.isDisabled}
              placeholder={props.placeHolder}
              type="text"
              className={'text-field text-field' + fieldSize + ' ' + error}
            />
            {props.isError && (
              <i
                className={
                  'text-field-icon icon-warning-a text-field-icon' +
                  fieldSize + ' ' + error + ' ' + disabled
                }
              />
            )}
            <div className={'text-field-description' + fieldSize}>{props.children}</div>
          </span>
        </React.Fragment>
      )}

      {props.type === 'date' && <h2>Date</h2>}

      {props.type === 'password' && <h2>Password</h2>}
    </fieldset>
  );
};
