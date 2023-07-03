import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/css/main.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {RootCmp} from './root-cmp'
import * as serviceWorkerRegistration from './service_worker/serviceWorkerRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import {ThemeProvider} from "react-bootstrap";
import { Provider } from 'react-redux'
import {store} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <ThemeProvider dir="rtl" lang="he">
                <RootCmp/>
            </ThemeProvider>
        </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();
