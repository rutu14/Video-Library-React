import { Outlet } from "react-router"
import { Navigation, Sidebar } from "../components"
import { useMediaQuery } from './';


const AuthPageLayout = () => {
    const mobileView = useMediaQuery(600);

    const MobileView = () => {
        return(
            <div>
                <Navigation/>
                <Outlet/>
            </div>
        )
    }

    const DesktopView = () => {
        return(
            <div className="wrapper">
                <Navigation/>
                <Sidebar/>
                <Outlet/>
            </div>
        )
    }

    return(<>{ mobileView ? <MobileView/> : <DesktopView/> }</>);
}

export { AuthPageLayout }