import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from '../pages/Home';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
    <div>
        <h1>test</h1>

        <Router>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/one'>Page 1</Link></li>
                <li><Link to='/two'>Page 2</Link></li>
            </ul>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/one" component={Page1} />
                <Route exact path="/two" component={Page2} />
            </div>
        </Router>
    </div>

    , document.getElementById('root')
);
