import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../styles/app.css';

import { Button } from '../components/Button';
import { Range } from '../components/Range';
import { Tabs } from '../components/Tabs';
import { SelectableCard } from '../components/SelectableCard';
import { Tooltip } from '../components/Tooltip';
import { RadioButton } from '../components/RadioButton';
import { Toggle } from '../components/Toggle';
//import Icons from '../styleGuide/Icons';

class App extends React.Component {
  render() {
    const func = () => {
      return true;
    };

    return (
      <div>

          <h1>tile</h1>
          <h2>sub title</h2>
        <h1>tile</h1>
        <h2>sub title</h2>
        <div className="grid-center">
          <div className="col12">
            <Tooltip position="left" forceWidth={320} type="secondary" message={
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
              hover
            </Tooltip>
          </div>
        </div>



        <div className="wrapper">
          <nav className="nav">

            <p>nav</p>
          </nav>

          <div className="container">
            <header className="header">
              <h1>1 West End Avenue</h1>

            </header>

            <main className="main">
              <aside className="control-panel">controls here</aside>
              <div className="output">
                <div className="content-grid">
                  <div className="col">
                    <h2>column</h2>
                  </div>
                  <div className="col">
                    <h2>column</h2>
                  </div>
                  <div className="col">
                    <h2>column</h2>
                  </div>


                </div>

              </div>
            </main>

            <div className="control-bar">
              <p>add buttons here</p>
            </div>

            <footer className="footer">
              <p>
                Copyright 2019 AIG Investments AI. All rights reserved. By using
                this system you agree to our Terms & Conditions
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
