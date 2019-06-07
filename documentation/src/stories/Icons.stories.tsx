import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Icons from '../styleGuide/Icons';
import '../styles/app.css';

storiesOf('Icons', module)
  .add(
    'Available',
    () => (
     <Icons />
    ),
    { info: { inline: true } },
  );



