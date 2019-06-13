import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Toggle } from '../components/Toggle';
import '../styles/app.css';

storiesOf('Toggle', module)
  .add('Small', () => <Toggle size="sm" label="Label" isDisabled={false} />, {
    info: { inline: true },
  })
  .add('Medium', () => <Toggle size="md" label="Label" isDisabled={false} />, {
    info: { inline: true },
  })
  .add('Large', () => <Toggle size="lg" label="Label" isDisabled={false} />, {
    info: { inline: true },
  })
  .add('Disabled', () => <Toggle size="lg" label="Label" isDisabled={true} />, {
    info: { inline: true },
  });
