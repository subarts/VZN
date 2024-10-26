import {Navigate, Outlet} from 'react-router-dom';


export const ProtectedRoute = ({isAllowed, redirectPath = '/', children}:any) => {

        if(isAllowed == false){
            return <Navigate to={redirectPath} replace/>
        }

    return children ? children : <Outlet />;
};