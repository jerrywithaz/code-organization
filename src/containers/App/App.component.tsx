import React from 'react';
import ReactRouterProvider from './providers/ReactRouterProvider';
import ApolloProvider from './providers/ApolloProvider';
import AppProvider from './providers/AppProvider';
import ThemeProvider from './providers/ThemeProvider';
import AppWrapper from './components/AppWrapper';
import AppRoutes from './components/AppRoutes';

/**
 * The Root Application.
 */
function App() {
  return (
    <ApolloProvider>
      <ReactRouterProvider>
        <AppProvider>
          <ThemeProvider>
            <AppWrapper>
              <AppRoutes />
            </AppWrapper>
          </ThemeProvider>
        </AppProvider>
      </ReactRouterProvider>
    </ApolloProvider>
  );
}

export default App;
