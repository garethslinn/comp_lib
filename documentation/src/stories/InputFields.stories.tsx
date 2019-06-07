import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InputField } from '../components/forms/InputField';
import { func } from '../../.storybook/func';
import '../styles/app.css';

storiesOf('Input fields', module)
  .add(
    'regular size',
    () => (
      <InputField
        label="Form label"
        isError={false}
        isDisabled={false}
        type="text"
        isLarge={false}
        placeHolder="Input Field"
      />
    ),
    { info: { inline: true } },
  )
  .add(
    'regular size - error',
    () => (
      <InputField
        label="Form label"
        isError={true}
        isDisabled={false}
        type="text"
        isLarge={false}
        placeHolder="Input Field"
      />
    ),
    { info: { inline: true } },
  )
  .add(
    'regular size - disabled',
    () => (
      <InputField
        label="Form label"
        isError={false}
        isDisabled={true}
        type="text"
        isLarge={false}
        placeHolder="Input Field"
      />
    ),
    { info: { inline: true } },
  )
  .add(
    'larger size',
    () => (
      <InputField
        label="Form label"
        isError={false}
        isDisabled={false}
        type="text"
        isLarge={true}
        placeHolder="Input Field"
      />
    ),
    { info: { inline: true } },
  )
  .add(
    'larger size - error',
    () => (
      <InputField
        label="Form label"
        isError={true}
        isDisabled={false}
        type="text"
        isLarge={true}
        placeHolder="Input Field"
      />
    ),
    { info: { inline: true } },
  )
  .add(
    'larger size - disabled',
    () => (
      <InputField
        label="Form label"
        isError={false}
        isDisabled={true}
        type="text"
        isLarge={true}
        placeHolder="Input Field"
      />
    ),
    { info: { inline: true } },
  );
