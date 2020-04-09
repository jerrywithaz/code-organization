import produce, { Draft } from 'immer';
import { AuthState, AuthAction } from './types';

export const initialState: AuthState = {
    authenticated: false
};

const authReducer = (
    state: AuthState = initialState, 
    action: AuthAction
) =>
    produce(state, (draft: Draft<AuthState>) => {
        switch (action.type) {
            case "AUTH/LOGIN":
                draft.authenticated = true;
                break;

            case "AUTH/LOGOUT":
                draft.authenticated = false;
                break;
        }
    });

export default authReducer;