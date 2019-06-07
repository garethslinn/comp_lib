import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Alert } from '../components/Alert';
import { func } from '../../.storybook/func';
import '../styles/app.css';

storiesOf('Alert', module)
  .add(
    'Information',
    () => (
      <Alert action={func} alertType="information" iconType="secondary">
        <span>Information</span>
      </Alert>
    ),
    { info: { inline: true } },
  )
  .add(
    'Confirmation',
    () => (
      <Alert action={func} alertType="confirmation" iconType="secondary">
        <span>Confirmation</span>
      </Alert>
    ),
    { info: { inline: true } },
  )
  .add(
    'Notification',
    () => (
      <Alert action={func} alertType="notification" iconType="darkgrey">
        <span>Notification</span>
      </Alert>
    ),
    { info: { inline: true } },
  )
  .add(
    'Error',
    () => (
      <Alert action={func} alertType="error" iconType="secondary">
        <span>Error</span>
      </Alert>
    ),
    { info: { inline: true } },
  );
