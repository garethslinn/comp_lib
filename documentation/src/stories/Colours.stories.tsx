import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Colours from '../styleGuide/Colours';
import '../styles/app.css';

storiesOf('Colours', module)
  .add(
    'swatch',
    () => (
     <Colours />
    )
  );



