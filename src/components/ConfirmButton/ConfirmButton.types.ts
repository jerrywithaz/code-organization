import { ButtonProps } from "../Button";

export type ConfirmButtonProps = ButtonProps & {
    /** Whether or not this button has been confirmed. */
    confirmed: boolean;
    /** The event handler for when the `ConfirmButton` is clicked. */
    onConfirm?: () => void;
};