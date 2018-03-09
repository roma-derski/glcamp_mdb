import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import './index.css';
import App from './App';
import DashBoard from './pages/DashBoard';
import Form from './pages/Form';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import { store } from "./store";

const Basic = () => (
    <Provider store={store}>
        <Router>
            <div className="wrap">
                <Switch>
                    <Route exact path="/top/:id" component={DashBoard} />
                    <Redirect exact from="/" to="/top/1" component={DashBoard} />
                    <Route exact path="/filmlist" component={App} />
                    <Route path="/flmedit/:id" component={Form} />
                </Switch>
            </div>
        </Router>
    </Provider>
  );

ReactDOM.render(<Basic />, document.getElementById('root'));
registerServiceWorker();
