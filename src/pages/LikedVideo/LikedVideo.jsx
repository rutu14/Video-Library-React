import { useEffect, useState } from "react";
import { Loader,LikedCard } from "../../components";
import { useLikedVideoActions } from "../../context";

const LikedVideo = () => {

    const { state, getLikedVideo } = useLikedVideoActions();
    const { loader, likedVideoInfo } = state;
    const [ emptyPage,setEmptyPage ] = useState(false);

    useEffect(() => {
        getLikedVideo();
    },[])

    useEffect(() => {
        setEmptyPage(likedVideoInfo.length === 0 ? true : false )
    },[likedVideoInfo])


    return(
        <main className="main-container">

            <section className="video-section">
                <section className="video-section-title">
                    <h3 className="text3 medium text-capitalize font-color">Liked Videos</h3>
                </section>
            </section>

            {loader && <section className="loader-section"><Loader/></section>}

            { emptyPage && <section className="text3 light loader-section font-color">Click some hearts to view here!💖</section>} 
            

            <section className="grid-3-cols m-t20 home-page-grid">                            
                {likedVideoInfo && likedVideoInfo.map( (liked) => (<LikedCard key={liked._id} video={liked}/> ))}
            </section>
        </main>
    );
}

export { LikedVideo }