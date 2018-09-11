import React from 'react';
import Login from './../../components/pages/login/login';

const PrivateRouteHOC = (Component) => {
    const PrivateRoute = () => {
        if (sessionStorage.token) {
            return <Component />;
        } else {
            return <Login />;
        }
    }
    return PrivateRoute;
};

export default PrivateRouteHOC;
