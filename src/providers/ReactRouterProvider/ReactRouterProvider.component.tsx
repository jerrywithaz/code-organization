import React, { FunctionComponent } from 'react';
import { Router as BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const ReactRouterProvider: FunctionComponent = ({
    children
}) => {
    return (
        <BrowserRouter history={createBrowserHistory()}>
            {children}
        </BrowserRouter>
    );
};

export default ReactRouterProvider;