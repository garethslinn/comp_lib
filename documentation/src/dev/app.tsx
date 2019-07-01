import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Page1 from './page1';
import { BrowserRouter as  Router, Switch, Route, Link } from 'react-router-dom';


class Home extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div>HOME</div>
                <div><Link to='/one'>Goto Page One</Link></div>
                <div><Link to='/two'>Goto Page Two</Link></div>
            </div>);
    }
}

class One extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div>ONE</div>
                <Link to='/'>Goto Home</Link>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Page1} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

class Two extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div>TWO</div>
                <Link to='/'>Goto Home</Link>
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/one" component={One} />
            <Route exact path="/two" component={Two} />
        </div>
    </Router>

    , document.getElementById('root')
);