import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Typography from '../styleGuide/Typography';
import '../styles/app.css';

storiesOf('Typography', module)
  .add(
    'Fonts',
    () => (
     <Typography />
    )
  );



