import { Link } from 'react-router-dom';
import { HistoryFolder, Home, LikeFolder, Logout, PlaylistFolder, WatchlistFolder } from '../../asset';
import { useUserActions } from '../../context';
import { useMediaQuery } from '../../utils';

const Sidebar = () => {
    
    const mobileView = useMediaQuery(600);
    const { state, signout } = useUserActions();
    const { tokenPresent } = state;

    const MobileSidebar = () => {
        return(
        <div className="sidebar">
            <div className="icon-holder">
                <Link to={'/'} className="btn-icon">
                    <Home width={32} height={32}/>
                </Link>
                <Link to={'liked'} className="btn-icon">
                    <LikeFolder width={32} height={32}/>
                </Link>
                <Link to={'playlist'} className="btn-icon">
                    <PlaylistFolder width={32} height={32}/>
                </Link>
                <Link to={'watchlist'} className="btn-icon">
                    <WatchlistFolder width={32} height={32}/>
                </Link>
                <Link to={'history'} className="btn-icon">
                    <HistoryFolder width={32} height={32}/>
                </Link>
                { tokenPresent
                    ?   <button className="mobile-avatar btn-icon" onClick={signout}>
                            <Logout width={32} height={32}/>
                        </button>
                    : " "
                }
            </div>
        </div>
        );
    }

    return(<>
        {mobileView ? <MobileSidebar/>
            : <div className="sidebar">
                <div className="icon-holder">
                    <Link to={'/'} className="btn-icon">
                        <Home width={40} height={40}/>
                    </Link>
                    <Link to={'liked'} className="btn-icon">
                        <LikeFolder width={40} height={40}/>
                    </Link>
                    <Link to={'playlist'} className="btn-icon">
                        <PlaylistFolder width={40} height={40}/>
                    </Link>
                    <Link to={'watchlist'} className="btn-icon">
                        <WatchlistFolder width={40} height={40}/>
                    </Link>
                    <Link to={'history'} className="btn-icon">
                        <HistoryFolder width={40} height={40}/>
                    </Link>                
                </div>
            </div>}
        </>
    );
}
export { Sidebar }