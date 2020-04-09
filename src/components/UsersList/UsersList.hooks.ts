import { useQuery, useMutation } from "@apollo/react-hooks";
import { USERS_LIST_QUERY, USERS_LIST_ADD_USER_MUTATION } from "./UsersList.graphql";
import { UsersListQueryData, UsersListAddUserMutationData } from "./UsersList.types";

/**
 * Uses the `USERS_LIST_QUERY` apollo query.
 */
export function useGetUsersListQuery() {
    return useQuery<UsersListQueryData>(USERS_LIST_QUERY);
};

/**
 * Uses the `USERS_LIST_ADD_USER_MUTATION` apollo mutation.
 */
export function useAddNewUserMutation() {
    return useMutation<UsersListAddUserMutationData>(USERS_LIST_ADD_USER_MUTATION, {
        notifyOnNetworkStatusChange: true,
        refetchQueries: [{ query: USERS_LIST_QUERY }]
    });
};