import React, { FunctionComponent } from 'react';
import { ConfirmButtonProps } from './ConfirmButton.types';

import * as Styled from './ConfirmButton.style';

const ConfirmButton: FunctionComponent<ConfirmButtonProps> = ({
    children,
    confirmed,
    onConfirm,
    ...rest
}: ConfirmButtonProps) => {
    return (
        <Styled.ConfirmButton 
            {...rest} 
            confirmed={confirmed}
            onClick={onConfirm}>
                {children}
        </Styled.ConfirmButton>
    );
}

export default ConfirmButton;