import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserView from 'views/UserView';
import HomeView from 'views/HomeView';
import { BASE_PATH, HOME_PATH, USER_PATH } from 'views/paths';

/**
 * The Application Routes via React Router
 */
const AppRoutes: FunctionComponent = () => {
    return (
        <Switch>
            <Route
                exact
                path={BASE_PATH}
                component={HomeView} />
            <Route
                exact
                path={HOME_PATH}
                component={HomeView} />
            <Route
                exact
                path={USER_PATH}
                component={UserView} />
        </Switch>
    );
};

export default AppRoutes;