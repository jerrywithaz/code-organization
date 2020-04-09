export type OpenModalAction = {
    type: "MODAL/OPEN"
};

export type CloseModalAction = {
    type: "MODAL/CLOSE"
};

export type ModalAction = OpenModalAction | CloseModalAction;

export type ModalState = {
    open: boolean
};