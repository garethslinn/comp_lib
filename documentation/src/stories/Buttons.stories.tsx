import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/Button';
import { func } from '../../.storybook/func';
import '../styles/app.css';

storiesOf('Buttons', module)
  .add(
    'Primary',
    () => (
      <Button
        action={func}
        buttonType="primary"
        isButtonSmall={false}
        isButtonWithIcon={false}
        isButtonDisabled={false}
        isBlock={false}
      >
        <span>Active</span>
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Primary as block',
    () => (
      <Button
        action={func}
        buttonType="primary"
        isButtonSmall={false}
        isButtonWithIcon={false}
        isButtonDisabled={false}
        isBlock={true}
      >
        <span>Active</span>
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Secondary',
    () => (
      <Button
        action={func}
        buttonType="secondary"
        isButtonSmall={false}
        isButtonWithIcon={false}
        isButtonDisabled={false}
        isBlock={false}
      >
        <span>Active</span>
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Secondary as block',
    () => (
      <Button
        action={func}
        buttonType="secondary"
        isButtonSmall={false}
        isButtonWithIcon={false}
        isButtonDisabled={false}
        isBlock={true}
      >
        <span>Active</span>
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Primary disabled',
    () => (
      <Button
        action={func}
        buttonType="primary"
        isButtonSmall={false}
        isButtonWithIcon={false}
        isButtonDisabled={true}
        isBlock={false}
      >
        <span>Disabled</span>
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Primary - small',
    () => (
      <Button
        action={func}
        buttonType="primary"
        isButtonSmall={true}
        isButtonWithIcon={false}
        isButtonDisabled={false}
        isBlock={false}
      >
        <span>Active</span>
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Primary - small - block',
    () => (
      <Button
        action={func}
        buttonType="primary"
        isButtonSmall={true}
        isButtonWithIcon={false}
        isBlock={true}
        isButtonDisabled={false}
      >
        <span>Active</span>
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Secondary - small',
    () => (
      <Button
        action={func}
        buttonType="secondary"
        isButtonSmall={true}
        isButtonWithIcon={false}
        isButtonDisabled={false}
        isBlock={false}
      >
        <span>Active</span>
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Primary disabled - small',
    () => (
      <Button
        action={func}
        buttonType="primary"
        isButtonSmall={true}
        isButtonWithIcon={false}
        isButtonDisabled={true}
        isBlock={false}
      >
        <span>Disabled</span>
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Tertiary',
    () => (
      <Button
        action={func}
        buttonType="tertiary"
        isButtonSmall={false}
        isButtonWithIcon={false}
        isButtonDisabled={false}
        isBlock={false}
      >
        <span>Active</span>
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Tertiary - disabled',
    () => (
      <Button
        action={func}
        buttonType="tertiary"
        isButtonSmall={false}
        isButtonWithIcon={false}
        isButtonDisabled={true}
        isBlock={false}
      >
        <span>Disabled</span>
      </Button>
    ),
    { info: { inline: true } },
  )

  .add(
    'Secondary with icon',
    () => (
      <Button
        action={func}
        buttonType="secondary"
        isButtonSmall={false}
        isButtonWithIcon={true}
        isButtonDisabled={false}
        isBlock={false}
      >
        Active
        <span className="icon icon-close-lg" />
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Secondary with icon - disabled',
    () => (
      <Button
        action={func}
        buttonType="secondary"
        isButtonSmall={false}
        isButtonWithIcon={true}
        isButtonDisabled={true}
        isBlock={false}
      >
        Active
        <span className="icon icon-close-lg" />
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Primary with icon - small',
    () => (
      <Button
        action={func}
        buttonType="primary"
        isButtonSmall={true}
        isButtonWithIcon={true}
        isButtonDisabled={false}
        isBlock={false}
      >
        Active
        <span className="icon icon-close-lg" />
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Secondary with icon - small',
    () => (
      <Button
        action={func}
        buttonType="secondary"
        isButtonSmall={true}
        isButtonWithIcon={true}
        isButtonDisabled={false}
        isBlock={false}
      >
        Active
        <span className="icon icon-close-lg" />
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Link Button',
    () => (
      <Button
        action={func}
        buttonType="quaternary"
        isButtonSmall={false}
        isButtonWithIcon={false}
        isButtonDisabled={false}
        isBlock={false}
      >
        <span>Active</span>
      </Button>
    ),
    { info: { inline: true } },
  )
  .add(
    'Link Button - disabled',
    () => (
      <Button
        action={func}
        buttonType="quaternary"
        isButtonSmall={true}
        isButtonWithIcon={false}
        isButtonDisabled={true}
        isBlock={false}
      >
        <span>Disabled</span>
      </Button>
    ),
    { info: { inline: true } },
  );
