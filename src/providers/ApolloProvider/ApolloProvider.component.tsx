import React, { FunctionComponent } from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider as Provider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    dataIdFromObject: o => o.id
  })
});


const ApolloProvider: FunctionComponent = ({
    children
}) => {
    return (
        <Provider client={client}>
            {children}
        </Provider>
    );
};

export { client };
export default ApolloProvider;