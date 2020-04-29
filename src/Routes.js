import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Cart from "./components/cart";
import ProductBody from './components/mainProducts';
import MiniDrawer from './components/dashboardNavigation';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={ProductBody} />
                    <Route path="/Cart" component={Cart} />
                    <Route path="/Dashboard" component={MiniDrawer} />
                </Switch>
            </Router>
        )
    }
}