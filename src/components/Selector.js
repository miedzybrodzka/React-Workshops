import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Login';
import MenuAppBar from './MenuAppBar';
import Calendar from './Calendar';
import Bundle from './Bundle';
import Settings from './Settings';

const Selector = () => {
    return (
        <Router>
            <Switch>
                <Route path={'/calendar'}>
                    <MenuAppBar />
                    <Calendar />
                </Route>
                <Route path='/bundle' >
                    <MenuAppBar />
                    <Bundle />
                </Route>
                <Route path='/settings' >
                    <MenuAppBar/>
                    <Settings />
                </Route>
                <Route path='/' >
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default Selector;
