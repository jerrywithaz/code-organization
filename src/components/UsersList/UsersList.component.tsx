import React, { FunctionComponent } from 'react';
import { useGetUsersList, useAddNewUser } from './UsersList.hooks';
import { UsersListProps } from './UsersList.types';

import * as Styled from './UsersList.style';

const UsersList: FunctionComponent<UsersListProps> = ({
    onUserClick
}: UsersListProps) => {

    const { data, error, loading } = useGetUsersList();
    const [ 
        addUser, 
        { 
            data: addedUser , 
            loading: addingUser 
        }
    ] = useAddNewUser();

    if (data) {
        return (
            <Styled.UsersList>
                {data.users.map((user) => (
                    <Styled.User 
                        onClick={onUserClick}>
                            {user.name}
                    </Styled.User>
                ))}
            </Styled.UsersList>
        );
    }
    else {
        return loading && !error ? <div>Loading</div> : <div>Error</div>;
    }

};

export default UsersList;