import React, { FunctionComponent } from 'react';
import extractText from 'utils/dom/extractText';
import { ButtonProps } from './Button.types';
import { createButtonHoverEffect } from './Button.utils';
import ButtonAnimation from './components/ButtonAnimation';

import * as Styled from './Button.style';

const Button: FunctionComponent<ButtonProps> = ({
    children = null,
    type = "button",
    ...rest
}: ButtonProps) => {

    function onMouseEnter(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        createButtonHoverEffect(true);
    }

    function onMouseLeave(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        createButtonHoverEffect(false);
    }
    
    const text = extractText();
    
    return (
        <Styled.Button 
            {...rest} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
            type={type}>
                <ButtonAnimation 
                    animate={true}/>
                <Styled.ButtonText>
                    {children}
                </Styled.ButtonText>
        </Styled.Button>
    );

};

export default Button;