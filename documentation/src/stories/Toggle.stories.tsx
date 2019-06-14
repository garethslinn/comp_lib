import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Toggle } from '../components/Toggle';
import '../styles/app.css';

storiesOf('Toggle', module)
  .add('Small', () => <Toggle id="id1" size="sm" label="Label" isDisabled={false} />, {
    info: { inline: true },
  })
  .add('Medium', () => <Toggle id="id2" size="md" label="Label" isDisabled={false} />, {
    info: { inline: true },
  })
  .add('Large', () => <Toggle id="id3" size="lg" label="Label" isDisabled={false} />, {
    info: { inline: true },
  })
  .add('Disabled', () => <Toggle id="id4" size="lg" label="Label" isDisabled={true} />, {
    info: { inline: true },
  });
