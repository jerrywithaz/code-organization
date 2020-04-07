import React, { FunctionComponent } from 'react';
import { ButtonAnimationProps } from './ButtonAnimation.types';

import * as Styled from './ButtonAnimation.style';

/**
 * The Animation Effect for a Suited Button.
 */
const ButtonAnimation: FunctionComponent<ButtonAnimationProps> = ({
    animate
}: ButtonAnimationProps) => {

    if (animate) {
        return (
            <Styled.ButtonAnimation/>
        );
    }

    return null;
    
};

export default ButtonAnimation;