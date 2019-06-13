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
        <header className="header">
          <h1 className="uit-maititle">Development use only</h1>
        </header>

        <div className="wrapper">
          {/*
					<Grid />
					<Lists />
					<Colours />
					<Typography />
					<Scrollbars />
          */}

          <h1>title</h1>
          <p>This is a test</p>

          <div className="grid">
            <div className="col-12">
              <div className="toggle-group">
                <input
                  type="checkbox"
                  name="on-off-switch"
                  id="on-off-switch"
                  defaultChecked=""
                  tabIndex="1"
                />
                <label htmlFor="on-off-switch">
                  <span className="aural">Show:</span> Show Accessible Toggle
                  Switch
                </label>
                <div className="onoffswitch pull-right" aria-hidden="true">
                  <div className="onoffswitch-label">
                    <div className="onoffswitch-inner"> </div>
                    <div className="onoffswitch-switch"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="uit-footer">footer</footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
