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

          <Toggle id="1" size="sm" label="Label" isDisabled={false} />
          <Toggle id="2" size="sm" label="Label" isDisabled={false} />


          <div className="grid">
            <div className="col-12">
              <Range
                min={10}
                max={50}
                hasTooltip={true}
                step={0.1}
                size="sm"
                showValue={false}
                forceWidth={0}
              />
            </div>

            <div className="col-12">
              <Range
                  min={10}
                  max={50}
                  hasTooltip={false}
                  step={0.1}
                  size="md"
                  showValue={false}
                  forceWidth={50}
              />
            </div>

            <div className="col-12">
              <Range
                  min={10}
                  max={50}
                  hasTooltip={false}
                  step={0.1}
                  size="lg"
                  showValue={true}
                  forceWidth={30}
              />
            </div>
          </div>


        </div>
        <footer className="uit-footer">footer</footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
