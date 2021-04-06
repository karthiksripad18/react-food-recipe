import React, {FunctionComponent} from 'react';
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { useSelector } from 'react-redux';
import {
    selectUserName
  } from './redux/userSlice';

import Login from './components/Login';
import Home from './components/Home';

const PrivateRoute = ({component: Component, path}: {component: FunctionComponent, path: string}) => {
    const location = useLocation();
    const userName = useSelector(selectUserName);
    return (
        <Route exact path={path}>
            {
                userName? 
                <Component />
                :
                <Redirect to ={{pathname: "/login", state: {from: location}}} />
            }
        </Route>
    );
}

const Routes = () => {
    return (
        <Switch>
            <Route path="/login"><Login /></Route>
            <PrivateRoute path="/" component={Home} />
        </Switch>
    )
};

export default Routes;