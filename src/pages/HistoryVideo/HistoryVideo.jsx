import { useEffect, useState } from "react";
import { DeleteIcon } from "../../asset";
import { HistoryCard, Loader } from "../../components";
import { useHistoryVideoActions } from "../../context";

const HistoryVideo = () => {
    const { state, getHistoryVideo, deleteHistoryVideo, deleteAllHistoryVideo } = useHistoryVideoActions();
    const { loader, historyVideoInfo } = state;
    const [ emptyPage,setEmptyPage ] = useState(false);

    useEffect(() => {
        getHistoryVideo();
    },[])
    
    console.log("History",historyVideoInfo)

    useEffect(() => {
        setEmptyPage(historyVideoInfo.length === 0 ? true : false )
    },[historyVideoInfo])

    const clearHistory = () => deleteAllHistoryVideo();

    return(
        <main className="main-container page-align">

        {loader && <section className="loader-section"><Loader/></section>}

        { emptyPage && <section className="text3 light loader-section">Watch Your history 🕐</section>} 

        <section className="video-section">
                <section className="video-section-title">
                    <h3 className="text3 medium text-capitalize">History</h3>
                </section>
                <button className="btn add-section video-section-btn cp" onClick={clearHistory}>                    
                    <span className="video-section-text">Clear History</span>
                    <DeleteIcon width={20} height={20} /> 
                </button>
        </section>

        <section className="grid-3-cols m-t20 home-page-grid">                            
            {historyVideoInfo && historyVideoInfo.map( (history) => (<HistoryCard key={history._id} video={history} deleteHistoryVideo={deleteHistoryVideo} /> ))}
        </section>
        </main>
    );
}

export { HistoryVideo }