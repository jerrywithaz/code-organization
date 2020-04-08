import React, { FunctionComponent } from 'react';
import { useGetUsersList, useAddNewUser } from './UsersList.hooks';
import { UsersListProps } from './UsersList.types';

import * as Styled from './UsersList.style';

const UsersList: FunctionComponent<UsersListProps> = ({
    onUserClick
}: UsersListProps) => {

    const { 
        data: usersList, 
        error: usersListError , 
        loading: usersListLoading 
    } = useGetUsersList();
    const [ 
        addUser, 
        addUserResult
    ] = useAddNewUser();
    const {
        data: addedUser, 
        error: addedUserError , 
        loading: addedUserLoading
    } = addUserResult;

    if (usersList) {
        return (
            <Styled.UsersList>
                {usersList.users.map((user) => (
                    <Styled.User 
                        onClick={onUserClick}>
                            {user.name}
                    </Styled.User>
                ))}
            </Styled.UsersList>
        );
    }
    else {
        return usersListLoading && !usersListError ? <div>Loading</div> : <div>Error</div>;
    }

};

export default UsersList;