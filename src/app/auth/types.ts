export type LoginAction = {
    type: "AUTH/LOGIN"
};

export type LogoutAction = {
    type: "AUTH/LOGOUT"
};

export type AuthAction = LoginAction | LogoutAction;

export type AuthState = {
    authenticated: boolean
};