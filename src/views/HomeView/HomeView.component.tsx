import React, { FunctionComponent } from 'react';
import { HomeViewProps, HomeViewSearchParams } from './HomeView.types';
import useSearchParams from '../../hooks/useSearchParams';

import * as Styled from './HomeView.style';

const HomeView: FunctionComponent<HomeViewProps> = ({
    location
}: HomeViewProps) => {

    const { 
        code 
    } = useSearchParams<HomeViewSearchParams>(location);

    return (
        <Styled.HomeView>
            Home Page - Invitiation Code: {code}
        </Styled.HomeView>
    );

}

export default HomeView;