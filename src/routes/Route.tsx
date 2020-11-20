import React from 'react';
import {
    RouteProps as ReactDomRouterProps,
    Route as ReactDomRoute,
} from 'react-router-dom';

interface RouteProps extends ReactDomRouterProps {
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => (
    <ReactDomRoute {...rest} render={() => <Component />} />
);

export default Route;
