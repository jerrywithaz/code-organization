import { ButtonProps } from "../Button";

export type ConfirmButtonProps = ButtonProps & {
    confirmed: boolean;
    onConfirm?: () => void;
};