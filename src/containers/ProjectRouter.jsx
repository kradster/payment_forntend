import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Welcome from '../components/Welcome'
import Dashboard from '../containers/Dashboard'
import NotFound from '../components/NotFound';

export default class ProjectRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}
