import React, { FunctionComponent } from 'react';
import { useGetUsersList, useAddNewUser } from './UsersList.hooks';
import { UsersListProps } from './UsersList.types';

import * as Styled from './UsersList.style';

const UsersList: FunctionComponent<UsersListProps> = ({
    onUserClick
}: UsersListProps) => {

    const { 
        data: usersListData, 
        error: usersListError , 
        loading: usersListLoading 
    } = useGetUsersList();
    const [ 
        addUser, 
        addUserResult
    ] = useAddNewUser();
    const {
        data: addedUserData, 
        error: addedUserError , 
        loading: addedUserLoading
    } = addUserResult;

    if (usersListData) {
        return (
            <Styled.UsersList>
                {usersListData.users.map((user) => (
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