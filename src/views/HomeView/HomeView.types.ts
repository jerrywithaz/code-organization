import { RouteChildrenProps } from 'react-router-dom';

export type HomeViewParams = {

};

export type HomeViewSearchParams = {
    code?: string
};

export type HomeViewProps =  RouteChildrenProps<HomeViewParams> & {

};