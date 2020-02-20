import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Book from './pages/book';

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/book/:id" component={Book} />
            <Redirect to="/" />
        </Switch>
    );
};

export default AppRoutes;
