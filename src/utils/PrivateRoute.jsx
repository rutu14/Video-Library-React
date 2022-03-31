import { Navigate, Outlet } from "react-router";
import { Navigation, Sidebar } from "../components";
import { useUserActions } from "../context";

export const PrivateRoute = () => {
    const { state } = useUserActions();
    const { tokenPresent } = state;

    return tokenPresent 
            ?   <div className="wrapper">
                    <Navigation/>
                    <Sidebar/>
                    <Outlet/>
                </div>  
            :   <Navigate to="/login" />;
}