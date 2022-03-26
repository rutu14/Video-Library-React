import { Link } from 'react-router-dom';
import { HistoryFolder, Home, LikeFolder, Logout, PlaylistFolder, PrivateFolder, WatchlistFolder } from '../../asset';
import useMediaQuery from '../../utils/mediaQuery';

const Sidebar = () => {
    
    const isMobile = useMediaQuery(600);

    const MobileSidebar = () => {
        return(
        <div className="sidebar">
            <div className="icon-holder">
                <Link to={'/'} className="btn-icon">
                    <Home width={32} height={32}/>
                </Link>
                <Link to={'/'} className="btn-icon">
                    <LikeFolder width={32} height={32}/>
                </Link>
                <Link to={'/'} className="btn-icon">
                    <PlaylistFolder width={32} height={32}/>
                </Link>
                <Link to={'/'} className="btn-icon">
                    <WatchlistFolder width={32} height={32}/>
                </Link>
                <Link to={'/'} className="btn-icon">
                    <HistoryFolder width={32} height={32}/>
                </Link>
                <Link to={'/'} className="btn-icon">
                    <Logout width={32} height={32}/>
                </Link>
            </div>
            <Link to={'/'} className="btn-icon bottom-icon">
                <PrivateFolder width={32} height={32}/>
            </Link>
        </div>
        );
    }

    return(<>
        {isMobile ? <MobileSidebar/>
            : <div class="sidebar">
                <div className="icon-holder">
                    <Link to={'/'} className="btn-icon">
                        <Home width={40} height={40} />
                    </Link>
                    <Link to={'/'} className="btn-icon">
                        <LikeFolder width={40} height={40} />
                    </Link>
                    <Link to={'/'} className="btn-icon">
                        <PlaylistFolder width={40} height={40}/>
                    </Link>
                    <Link to={'/'} className="btn-icon">
                        <WatchlistFolder width={40} height={40}/>
                    </Link>
                    <Link to={'/'} className="btn-icon">
                        <HistoryFolder width={40} height={40} stroke-width={2}/>
                    </Link>
                </div>
                <Link to={'/'} className="btn-icon acc">
                    <PrivateFolder width={40} height={40} />
                </Link>
            </div>}
        </>
    );
}
export { Sidebar }