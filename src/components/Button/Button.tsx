import React, { FunctionComponent } from 'react';
import { ButtonProps } from './Button.types';
import { createHoverEffect } from './Button.utils';

import * as Styled from './Button.style';

const Button: FunctionComponent<ButtonProps> = ({
    children,
    type = "button",
    ...rest
}: ButtonProps) => {

    function onMouseEnter(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        createHoverEffect(true);
    }

    function onMouseLeave(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        createHoverEffect(false);
    }

    return (
        <Styled.Button 
            {...rest} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
            type={type}>
                <Styled.ButtonAnimation/>
                <Styled.ButtonText>
                    {children}
                </Styled.ButtonText>
        </Styled.Button>
    );

};

export default Button;