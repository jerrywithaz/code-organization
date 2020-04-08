import { TUser } from "__generated__/graphql/types";

export type UsersListProps = {
    onUserClick: () => void
};

export type UsersListQueryData = {
    users: Pick<TUser, "id" | "name" | "address">[];
};

export type UsersListAddUserMutationData = {
    addUser: Pick<TUser, "id" | "name" | "address">;
};