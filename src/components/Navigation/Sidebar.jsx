import { Link } from 'react-router-dom';
import { HistoryFolder, Home, LikeFolder, Logout, PlaylistFolder, PrivateFolder, WatchlistFolder } from '../../asset';
import useMediaQuery from '../../utils/mediaQuery';

const Sidebar = () => {
    
    const isMobile = useMediaQuery(600);

    const MobileSidebar = () => {
        return(
        <div class="sidebar">
            <div className="icon-holder">
                <Link to={'/'} class="btn-icon" href="#" >
                    <Home width={32} height={32}/>
                </Link>
                <Link to={'/'} class="btn-icon" href="#" >
                    <LikeFolder width={32} height={32}/>
                </Link>
                <Link to={'/'} class="btn-icon" href="#" >
                    <PlaylistFolder width={32} height={32}/>
                </Link>
                <Link to={'/'} class="btn-icon" href="#" >
                    <WatchlistFolder width={32} height={32}/>
                </Link>
                <Link to={'/'} class="btn-icon" href="#" >
                    <HistoryFolder width={32} height={32}/>
                </Link>
                <Link to={'/'} class="btn-icon" href="#" >
                    <Logout width={32} height={32}/>
                </Link>
            </div>
            <Link to={'/'} class="btn-icon acc" href="#" >
                <PrivateFolder width={32} height={32}/>
            </Link>
        </div>
        );
    }

    return(<>
        {isMobile ? <MobileSidebar/>
            : <div class="sidebar">
            <div className="icon-holder">
                <Link to={'/'} class="btn-icon" href="#" >
                    <Home width={40} height={40} />
                </Link>
                <Link to={'/'} class="btn-icon" href="#" >
                    <LikeFolder width={40} height={40} />
                </Link>
                <Link to={'/'} class="btn-icon" href="#" >
                    <PlaylistFolder width={40} height={40}/>
                </Link>
                <Link to={'/'} class="btn-icon" href="#" >
                    <WatchlistFolder width={40} height={40}/>
                </Link>
                <Link to={'/'} class="btn-icon" href="#" >
                    <HistoryFolder width={40} height={40} stroke-width={2}/>
                </Link>
            </div>
            <Link to={'/'} class="btn-icon acc" href="#" >
                <PrivateFolder width={40} height={40} />
            </Link>
        </div>}
        </>
    );
}
export { Sidebar }