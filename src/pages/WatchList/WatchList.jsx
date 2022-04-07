import { useEffect, useState } from "react";
import { DeleteIcon } from "../../asset"
import { Loader, WatchLaterCard } from "../../components"
import { useWatchLaterActions } from "../../context";

const WatchList = () => {
    const { state, getWatchLater, deleteWatchLater, deleteAllWatchLater } = useWatchLaterActions();
    const { loader, watchLaterInfo } = state;
    const [ emptyPage,setEmptyPage ] = useState(false);

    useEffect(() => {
        getWatchLater();
    },[])

    useEffect(() => {
        setEmptyPage(watchLaterInfo.length === 0 ? true : false )
    },[watchLaterInfo])

    const clearWatchLater = () => deleteAllWatchLater();

    return(
        <main className="main-container"> 

            <section className="video-section">
                <section className="video-section-title">
                    <h3 className="text3 medium text-capitalize font-color">WatchLater</h3>
                </section>
                <button className="btn add-section video-section-btn cp" onClick={clearWatchLater}>                    
                        <span className="video-section-text">Clear WatchLater</span>
                        <DeleteIcon width={20} height={20} /> 
                    </button>
            </section>           

            {loader && <section className="loader-section"><Loader/></section>}

            { emptyPage && <section className="text3 light loader-section font-color">Add Playlists to play ▶</section>} 

            <section className="grid-3-cols m-t20 page-align home-page-grid" >                
                {watchLaterInfo && watchLaterInfo.map((video)=>( <WatchLaterCard key={video._id} video={video} deleteWatchLater={deleteWatchLater}/> ))}
            </section>
            
        </main>
    )
}

export { WatchList }