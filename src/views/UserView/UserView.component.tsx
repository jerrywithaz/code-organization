import React, { FunctionComponent } from 'react';
import { UserViewProps } from './UserView.types';

import * as Styled from './UserView.style';

const UserView: FunctionComponent<UserViewProps> = ({
    match
}: UserViewProps) => {
    return (
        <Styled.UserView>
            User Id: {match?.params.id}
        </Styled.UserView>
    );
};

export default UserView;