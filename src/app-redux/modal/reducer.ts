import produce, { Draft } from 'immer';
import { ModalState, ModalAction } from './types';

export const initialState: ModalState = {
    open: false
};

const modalReducer = (
    state: ModalState = initialState, 
    action: ModalAction
) =>
    produce(state, (draft: Draft<ModalState>) => {
        switch (action.type) {
            case "MODAL/OPEN":
                draft.open = true;
                break;

            case "MODAL/CLOSE":
                draft.open = false;
                break;
        }
    });

export default modalReducer;