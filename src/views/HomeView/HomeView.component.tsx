import React, { FunctionComponent } from 'react';
import useSearchParams from 'hooks/useSearchParams';
import Button from 'components/Button';
import { HomeViewProps, HomeViewSearchParams } from './HomeView.types';

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
            <Button>Welcome</Button>
        </Styled.HomeView>
    );

}

export default HomeView;