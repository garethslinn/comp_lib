import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../styles/app.css';

import { Button } from '../components/Button';
import {Alert} from "../components/Alert";
import {Tabs} from "../components/Tabs";
import {SelectableCard} from "../components/SelectableCard";
import {Tooltip} from "../components/Tooltip";
//import Icons from '../styleGuide/Icons';

class App extends React.Component {
  render() {
    const func = () => {
      return true;
    };

      return (
      <div>
        <header className="header">
          <h1 className="uit-main-title">Development use only</h1>
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

          <Tabs isTabSmall={false}>
            test1
            <span>
              <p>This is content for the first tab</p>
            </span>
            test2
            <span>
              <p>This is content for the second tab</p>
            </span>
            test -disabled-
            <span>
              <p>This is content for the third tab</p>
            </span>
          </Tabs>

          <Button
              action={func}
              buttonType="primary"
              isButtonSmall
              isButtonWithIcon
              isButtonDisabled={false}
              isBlock={false}
          >
            Active
            <span className="icon icon-close-lg" />
          </Button>

          <Alert action={func} alertType="notification" iconType="darkgrey">
            <span>Notification</span>
          </Alert>

          <SelectableCard
              action={func}
              title="Selectable Card State"
              description="Lorem ipsum dolor sit amet, consectetur"
              isDisabled={false}
          >
            <span>Active</span>
          </SelectableCard>







        </div>
        <footer className="uit-footer">footer</footer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
