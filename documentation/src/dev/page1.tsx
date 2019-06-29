import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../styles/app.css';

class Page1 extends React.Component {
  render() {

    return (
      <div>

          <h1>tile</h1>
          <h2>sub title</h2>
        <h1>tile</h1>
        <h2>sub title</h2>

      </div>
    );
  }
}

ReactDOM.render(<Page1 />, document.getElementById('root'));
