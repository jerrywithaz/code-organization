import styled from 'styled-components';
import Button from '../Button';
import { ConfirmButtonProps } from './ConfirmButton.types';

export const ConfirmButton = styled(Button)<ConfirmButtonProps>`
    ${props => `
        background: ${props.confirmed ? "red" : "blue"};
    `}
`;