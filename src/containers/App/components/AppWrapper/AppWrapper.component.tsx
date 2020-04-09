import React, { FunctionComponent } from 'react';

import * as Styled from './AppWrapper.style';

const AppWrapper: FunctionComponent = ({
    children
}) => {
    return (
        <Styled.AppWrapper>
            {children}
        </Styled.AppWrapper>
    );
};

export default AppWrapper;