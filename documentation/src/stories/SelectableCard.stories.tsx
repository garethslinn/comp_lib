import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SelectableCard } from '../components/SelectableCard';
import { func } from '../../.storybook/func';
import '../styles/app.css';

storiesOf('SelectableCards', module)
  .add(
    'Normal',
    () => (
      <SelectableCard
        action={func}
        title="Selectable Card State"
        description="Lorem ipsum dolor sit amet, consectetur"
        isDisabled={false}
      >
        <span>Active</span>
      </SelectableCard>
    ),
    { info: { inline: true } },
  )

  .add(
    'Disabled',
    () => (
      <SelectableCard
        action={func}
        title="Selectable Card State"
        description="Lorem ipsum dolor sit amet, consectetur"
        isDisabled={true}
      >
        <span>Disabled</span>
      </SelectableCard>
    ),
    { info: { inline: true } },
  );
