import { useAuth } from "hooks";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ redirectTo = '/', component: Component }) => { 
    const { isLoggedIn, isRefresing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefresing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};