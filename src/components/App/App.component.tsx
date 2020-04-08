import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactRouterProvider from 'providers/ReactRouterProvider';
import ApolloProvider from 'providers/ApolloProvider';
import HomeView from 'views/HomeView';
import UserView from 'views/UserView';

function App() {
  return (
    <ApolloProvider>
      <ReactRouterProvider>
        <Switch>
          <Route
            exact
            path={"/"}
            component={HomeView} />
          <Route
            exact
            path={"/home"}
            component={HomeView} />
          <Route
            exact
            path={"/users/:id"}
            component={UserView} />
        </Switch>
      </ReactRouterProvider>
    </ApolloProvider>
  );
}

export default App;
