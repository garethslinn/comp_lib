import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from '../components/Tabs';
import { func } from '../../.storybook/func';
import '../styles/app.css';

storiesOf('Tabs', module)
  .add(
    'Tabs - large',
    () => (
      <Tabs isTabSmall={false} isBasic={false}>
        Option 1
        <span>
          <p>This is content for the first tab</p>
        </span>
        Option 2
        <span>
          <p>This is content for the second tab</p>
        </span>
        Option 3
        <span>
          <p>This is content for the third tab</p>
        </span>
        Option 4 -disabled-
        <span>
          <p>This is content for the forthvtab</p>
        </span>
      </Tabs>
    ),
    { info: { inline: true } },
  )
  .add(
    'Tabs - small',
    () => (
      <Tabs isTabSmall={true} isBasic={false}>
        Option 1
        <span>
          <p>This is content for the first tab</p>
        </span>
        Option 2
        <span>
          <p>This is content for the second tab</p>
        </span>
        Option 3
        <span>
          <p>This is content for the third tab</p>
        </span>
        Option 4 -disabled-
        <span>
          <p>This is content for the forthvtab</p>
        </span>
      </Tabs>
    ),
    { info: { inline: true } },
  )
  .add(
    'Tabs - basic - large',
    () => (
      <Tabs isTabSmall={false} isBasic={true}>
        Option 1
        <span>
          <p>This is content for the first tab</p>
        </span>
        Option 2
        <span>
          <p>This is content for the second tab</p>
        </span>
        Option 3
        <span>
          <p>This is content for the third tab</p>
        </span>
        Option 4 -disabled-
        <span>
          <p>This is content for the forthvtab</p>
        </span>
      </Tabs>
    ),
    { info: { inline: true } },
  )
  .add(
    'Tabs - basic - small',
    () => (
      <Tabs isTabSmall={true} isBasic={true}>
        Option 1
        <span>
          <p>This is content for the first tab</p>
        </span>
        Option 2
        <span>
          <p>This is content for the second tab</p>
        </span>
        Option 3
        <span>
          <p>This is content for the third tab</p>
        </span>
        Option 4 -disabled-
        <span>
          <p>This is content for the forthvtab</p>
        </span>
      </Tabs>
    ),
    { info: { inline: true } },
  );
