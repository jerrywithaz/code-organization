import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactRouterProvider from '../../providers/ReactRouterProvider';
import ApolloProvider from '../../providers/ApolloProvider';
import HomeView from '../../views/HomeView';

function App() {
  return (
    <ApolloProvider>
      <ReactRouterProvider>
        <Switch>
          <Route
            exact={true}
            path={["/", "/home"]}
            component={HomeView}/>
        </Switch>
      </ReactRouterProvider>
    </ApolloProvider>
  );
}

export default App;
