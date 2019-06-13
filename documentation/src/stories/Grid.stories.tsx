import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '../styleGuide/Grid';
import '../styles/app.css';

storiesOf('Grid', module)
  .add(
    'variants',
    () => (
     <Grid />
    )
  );



