import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Alert, RadioButton} from '../components/RadioButton';
import { func } from '../../.storybook/func';
import '../styles/app.css';

storiesOf('Radio Buttons', module)

  .add(
    'large buttons',
    () => (
        <fieldset>
            <RadioButton
                isSmall={false}
                id={'radio_r1'}
                name={'radio1'}
                isChecked={true}
                isDisabled={false}
                label={'Option1'}
            />

            <RadioButton
                isSmall={false}
                id={'radio_r2'}
                name={'radio1'}
                isChecked={false}
                isDisabled={false}
                label={'Option2'}
            />

            <RadioButton
                isSmall={false}
                id={'radio_r3'}
                name={'radio1'}
                isChecked={false}
                isDisabled={false}
                label={'Option3'}
            />

            <RadioButton
                isSmall={false}
                id={'radio_r4'}
                name={'radio1'}
                isChecked={false}
                isDisabled={true}
                label={'Option4'}
            />
        </fieldset>

    ),
    { info: { inline: true } },
  ).add(
    'small buttons',
    () => (
        <fieldset>
            <RadioButton
                isSmall={true}
                id={'radio_r1'}
                name={'radio2'}
                isChecked={true}
                isDisabled={false}
                label={'Option1'}
            />

            <RadioButton
                isSmall={true}
                id={'radio_r2'}
                name={'radio2'}
                isChecked={false}
                isDisabled={false}
                label={'Option2'}
            />

            <RadioButton
                isSmall={true}
                id={'radio_r3'}
                name={'radio2'}
                isChecked={false}
                isDisabled={false}
                label={'Option3'}
            />

            <RadioButton
                isSmall={true}
                id={'radio_r4'}
                name={'radio2'}
                isChecked={false}
                isDisabled={true}
                label={'Option4'}
            />
        </fieldset>

    ),
    { info: { inline: true } },
)
