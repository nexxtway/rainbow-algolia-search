import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import BookDetail from './pages/book-detail';

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/book-detail" component={BookDetail} />
            <Redirect to="/" />
        </Switch>
    );
};

export default AppRoutes;
