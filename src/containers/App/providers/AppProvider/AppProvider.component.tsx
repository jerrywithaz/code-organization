import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'app-redux/configureStore';

const store = configureStore({});

/**
 * The top-level app redux provider for managing global state
 * such as auth or alerts.
 */
const AppProvider: FunctionComponent = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export { store };
export default AppProvider;