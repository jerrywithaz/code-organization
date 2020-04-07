import { useQuery, useMutation } from "@apollo/react-hooks";
import { USERS_LIST_QUERY, USERS_LIST_ADD_USER_MUTATION } from "./UsersList.graphql";
import { UsersListQueryData, UsersListAddUserMutationData } from "./UsersList.types";

export function useGetUsersList() {
    return useQuery<UsersListQueryData>(USERS_LIST_QUERY);
};

export function useAddNewUser() {
    return useMutation<UsersListAddUserMutationData>(USERS_LIST_ADD_USER_MUTATION);
};