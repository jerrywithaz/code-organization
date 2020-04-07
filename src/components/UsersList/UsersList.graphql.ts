import { gql } from 'apollo-boost';

export const USERS_LIST_QUERY = gql`
    query UsersListQuery {
        users {
            id,
            name,
            address
        }
    }
`;

export const USERS_LIST_ADD_USER_MUTATION = gql`
    mutation UsersListAddUserMutation {
        addUser() {
            id,
            name,
            address
        }
    }
`;