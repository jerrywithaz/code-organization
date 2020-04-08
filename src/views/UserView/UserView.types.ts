import { RouteChildrenProps } from "react-router-dom";

export type UserViewParams = {
    id: string;
};

export type UserViewProps = RouteChildrenProps<UserViewParams> & {

};