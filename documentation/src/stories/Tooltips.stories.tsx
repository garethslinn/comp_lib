import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tooltip } from '../components/Tooltip';
import '../styles/app.css';
import '../styles/story-book.css';

storiesOf('Tooltip', module)

    .add(
        'Primary - bullets',
        () => (
            <div className="grid-center">
                <div className="col4">

                    <Tooltip position="left" forceWidth={320} type="primary" message={
                        <div className="">
                            <ul className="list-bullets">
                                <li className="bullet-1">This is a list item This is a list item. more text here</li>
                                <li className="bullet-2">This is a list item</li>
                                <li className="bullet-3">This is a list item</li>
                                <li className="bullet-4">This is a list item</li>
                                <li className="bullet-5">This is a list item</li>
                                <li className="bullet-6">This is a list item</li>
                                <li className="bullet-7">This is a list item</li>
                                <li className="bullet-8">This is a list item</li>
                                <li className="bullet-9">This is a list item</li>
                                <li className="bullet-10">This is a list item</li>
                            </ul>
                            <p className="label-large">Title (optional) Title (optional) Title (optional)</p>
                            <p className="label-small">Subtitle (optional)</p>
                        </div>
                    }>
                        <div className="label-large bold">Target</div>
                    </Tooltip>
                </div>
            </div>
        ),
        { info: { inline: true } },
    )


    .add(
    'Primary - top',
    () => (
      <div className="grid-center">
        <div className="col4">
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
        </div>
      </div>
    ),
    { info: { inline: true } },
  )

  .add(
    'Primary - right',
    () => (
      <div className="grid-center">
        <div className="col4">
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
        </div>
      </div>
    ),
    { info: { inline: true } },
  )

  .add(
    'Primary - bottom',
    () => (
      <div className="grid-center">
        <div className="col4">
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
        </div>
      </div>
    ),
    { info: { inline: true } },
  )

  .add(
    'Primary - left',
    () => (
      <div className="grid-center">
        <div className="col4">
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
        </div>
      </div>
    ),
    { info: { inline: true } },
  )

  .add(
    'Secondary - top',
    () => (
      <div className="grid-center">
        <div className="col4">
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
        </div>
      </div>
    ),
    { info: { inline: true } },
  )

  .add(
    'Secondary - right',
    () => (
      <div className="grid-center">
        <div className="col4">
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
        </div>
      </div>
    ),
    { info: { inline: true } },
  )

  .add(
    'Secondary - bottom',
    () => (
      <div className="grid-center">
        <div className="col4">
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
        </div>
      </div>
    ),
    { info: { inline: true } },
  )

  .add(
    'Secondary - left',
    () => (
      <div className="grid-center">
        <div className="col4">
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
        </div>
      </div>
    ),
    { info: { inline: true } },
  );
