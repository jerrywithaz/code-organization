import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactRouterProvider from 'providers/ReactRouterProvider';
import ApolloProvider from 'providers/ApolloProvider';
import AppProvider from 'providers/AppProvider';
import HomeView from 'views/HomeView';
import UserView from 'views/UserView';
import {
  BASE_PATH,
  HOME_PATH,
  USER_PATH
} from 'views/paths';

function App() {
  return (
    <ApolloProvider>
      <ReactRouterProvider>
        <AppProvider>
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
        </AppProvider>
      </ReactRouterProvider>
    </ApolloProvider>
  );
}

export default App;
