import React from 'react';
import { Route } from 'react-router-dom';
import HomeView from './HomeView.component';

const HomeViewRoute = () => {
    return (
        <Route
            exact={true}
            path={["/", "/home"]}
            component={HomeView}/>
    );
};

export default HomeViewRoute;
