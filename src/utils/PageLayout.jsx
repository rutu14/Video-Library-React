import { Outlet } from "react-router";
import { Navigation, Sidebar } from "../components";

const PageLayout = () => {
    return(
        <div className="wrapper">
            <Navigation/>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export {PageLayout}