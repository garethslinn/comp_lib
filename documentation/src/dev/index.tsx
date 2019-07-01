import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import { Provider } from "react-redux";
import Store from "../Store";
import App from "../dev/app";

export function Entry() {
    return (
        <Provider store={Store}>
            <App />
        </Provider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Entry />, rootElement);
