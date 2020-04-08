import { USER_PATH } from "./paths";

/**
 * Returns `/users/${id}`.
 * @param id the `user` id.
 */
export function createUserRoute(id: string) {
    return USER_PATH.replace(":id", id);
};