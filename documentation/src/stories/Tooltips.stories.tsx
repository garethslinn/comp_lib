import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tooltip, Tooltips } from '../components/Tooltip';
import '../styles/app.css';
import '../styles/story-book.css';

storiesOf('Tooltip', module).add(
  'Primary - top',
  () => (

        <Tooltip
          position="top"
          type="primary"
          message={
            <div>
              <div className="label-large bold">Hide your password</div>
              <div className="label-medium">
                To reveal the content again click again on the icon.
              </div>
            </div>
          }
        >
          <div className="label-large bold">Target</div>
        </Tooltip>

  ),
  { info: { inline: true } },
)

    .add(
        'Primary - right',
        () => (

            <Tooltip
                position="right"
                type="primary"
                message={
                    <div>
                        <div className="label-large bold">Hide your password</div>
                        <div className="label-medium">
                            To reveal the content again click again on the icon.
                        </div>
                    </div>
                }
            >
                <div className="label-large bold">Target</div>
            </Tooltip>

        ),
        { info: { inline: true } },
    )

    .add(
        'Primary - bottom',
        () => (

            <Tooltip
                position="bottom"
                type="primary"
                message={
                    <div>
                        <div className="label-large bold">Hide your password</div>
                        <div className="label-medium">
                            To reveal the content again click again on the icon.
                        </div>
                    </div>
                }
            >
                <div className="label-large bold">Target</div>
            </Tooltip>

        ),
        { info: { inline: true } },
    )

    .add(
        'Primary - left',
        () => (

            <Tooltip
                position="left"
                type="primary"
                message={
                    <div>
                        <div className="label-large bold">Hide your password</div>
                        <div className="label-medium">
                            To reveal the content again click again on the icon.
                        </div>
                    </div>
                }
            >
                <div className="label-large bold">Target</div>
            </Tooltip>

        ),
        { info: { inline: true } },
    )



    .add(
        'Secondary - top',
        () => (

            <Tooltip
                position="top"
                type="secondary"
                message={
                    <div>
                        <div className="label-large bold">Hide your password</div>
                        <div className="label-medium">
                            To reveal the content again click again on the icon.
                        </div>
                    </div>
                }
            >
                <div className="label-large bold">Target</div>
            </Tooltip>

        ),
        { info: { inline: true } },
    )

    .add(
        'Secondary - right',
        () => (

            <Tooltip
                position="right"
                type="secondary"
                message={
                    <div>
                        <div className="label-large bold">Hide your password</div>
                        <div className="label-medium">
                            To reveal the content again click again on the icon.
                        </div>
                    </div>
                }
            >
                <div className="label-large bold">Target</div>
            </Tooltip>

        ),
        { info: { inline: true } },
    )

    .add(
        'Secondary - bottom',
        () => (

            <Tooltip
                position="bottom"
                type="secondary"
                message={
                    <div>
                        <div className="label-large bold">Hide your password</div>
                        <div className="label-medium">
                            To reveal the content again click again on the icon.
                        </div>
                    </div>
                }
            >
                <div className="label-large bold">Target</div>
            </Tooltip>

        ),
        { info: { inline: true } },
    )

    .add(
        'Secondary - left',
        () => (

            <Tooltip
                position="left"
                type="secondary"
                message={
                    <div>
                        <div className="label-large bold">Hide your password</div>
                        <div className="label-medium">
                            To reveal the content again click again on the icon.
                        </div>
                    </div>
                }
            >
                <div className="label-large bold">Target</div>
            </Tooltip>

        ),
        { info: { inline: true } },
    )
