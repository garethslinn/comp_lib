import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import { Provider } from "react-redux";
import Store from "./Store";
import Routes from "./components/Routes";

export function App() {
    return (
        <Provider store={Store}>
            <Routes />
        </Provider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
