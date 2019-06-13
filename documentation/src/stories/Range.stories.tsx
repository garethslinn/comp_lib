import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Range } from '../components/Range';
import { func } from '../../.storybook/func';
import '../styles/app.css';

storiesOf('Range selector', module)
  .add(
    'small',
    () => (
        <Range
            min={10}
            max={50}
            hasTooltip={false}
            step={0.1}
            size="sm"
            showValue={false}
            forceWidth={0}
        />
    ),
    { info: { inline: true } },
  )
    .add(
        'medium',
        () => (
            <Range
                min={10}
                max={50}
                hasTooltip={false}
                step={0.1}
                size="md"
                showValue={false}
                forceWidth={0}
            />
        ),
        { info: { inline: true } },
    )
    .add(
        'large',
        () => (
            <Range
                min={10}
                max={50}
                hasTooltip={false}
                step={0.1}
                size="lg"
                showValue={false}
                forceWidth={0}
            />
        ),
        { info: { inline: true } },
    )
    .add(
        'with tooltip',
        () => (
            <Range
                min={10}
                max={50}
                hasTooltip={true}
                step={0.1}
                size="sm"
                showValue={false}
                forceWidth={0}
            />
        ),
        { info: { inline: true } },
    )
    .add(
        'range value',
        () => (
            <Range
                min={10}
                max={50}
                hasTooltip={false}
                step={0.1}
                size="sm"
                showValue={true}
                forceWidth={0}
            />
        ),
        { info: { inline: true } },
    )
    .add(
        'tooltip and range value',
        () => (
            <Range
                min={10}
                max={50}
                hasTooltip={true}
                step={0.1}
                size="sm"
                showValue={true}
                forceWidth={0}
            />
        ),
        { info: { inline: true } },
    )
    .add(
        'forced with of 50%',
        () => (
            <Range
                min={10}
                max={50}
                hasTooltip={false}
                step={0.1}
                size="sm"
                showValue={false}
                forceWidth={50}
            />
        ),
        { info: { inline: true } },
    )
    .add(
        'forced with of 25%',
        () => (
            <Range
                min={10}
                max={50}
                hasTooltip={false}
                step={0.1}
                size="sm"
                showValue={false}
                forceWidth={25}
            />
        ),
        { info: { inline: true } },
    )
    .add(
        'Step of 10',
        () => (
            <Range
                min={10}
                max={100}
                hasTooltip={false}
                step={10}
                size="sm"
                showValue={false}
                forceWidth={0}
            />
        ),
        { info: { inline: true } },
    )
