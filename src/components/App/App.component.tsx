import React from 'react';
import { Switch } from 'react-router-dom';
import ReactRouterProvider from 'providers/ReactRouterProvider';
import ApolloProvider from 'providers/ApolloProvider';
import { HomeViewRoute } from 'views/HomeView';

function App() {
  return (
    <ApolloProvider>
      <ReactRouterProvider>
        <Switch>
          <HomeViewRoute/>
        </Switch>
      </ReactRouterProvider>
    </ApolloProvider>
  );
}

export default App;
