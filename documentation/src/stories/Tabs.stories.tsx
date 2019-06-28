import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs } from '../components/Tabs';
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
    'Tabs - grouped - small',
    () => (
      <Tabs isTabSmall={true} isBasic={false} isGrouped={true}>
        Option 1<span />
        Option 2<span />
        Option 3 -disabled-
        <span />
        Option 4<span />
      </Tabs>
    ),
    { info: { inline: true } },
  )
  .add(
    'Tabs - grouped with icons - small',
    () => (
      <Tabs isTabSmall={true} isBasic={false} isGrouped={true} isIcon={true}>
        icon-sliders<span />
        icon-image<span />
        icon-reports -disabled-
        <span />
        icon-graph<span />
      </Tabs>
    ),
    { info: { inline: true } },
  )
    .add(
        'Tabs - no divison - grouped with icons - small',
        () => (
            <Tabs isTabSmall={true} isBasic={false} isGrouped={true} isIcon={true} isCombined={true}>
                icon-sliders<span />
                icon-image<span />
                icon-reports -disabled-
                <span />
                icon-graph<span />
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
