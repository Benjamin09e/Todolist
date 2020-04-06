import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Products from './views/product/Product';
import ElectroMenager from './views/Electro/Electro';
import Office from './views/office/Office';
import Form from './components/form/Form';
import liste from './components/liste/Liste';


class Routes extends Component {

    render() {

        return (
            <BrowserRouter>
                <Switch >
                    <Route
                        path="/Form"
                        component={Form}
                        exact
                    />

                    <Route
                        path="/Liste"
                        component={liste}
                        exact
                    />
                    <Route
                        path="/Greenoffice"
                        component={Office}
                        exact
                    />
                    <Route
                        path="/Product"
                        component={Products}
                        exact
                    />
                    <Route
                        path="/Electro"
                        component={ElectroMenager}
                        exact
                    />
                </Switch>
            </BrowserRouter>

        );
    }

}
export default Routes;