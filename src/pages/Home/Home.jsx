import { Loader, HomeCard } from "../../components";
import { useGetVideos, usePlaylist } from "../../context";
import './home.css'

const Home = () => {
    
    const { videos } = useGetVideos();
    const { loader, info } = videos;
    const { state , dispatch } = usePlaylist();

    return(
        <main className="main-container home-page">            
        
            {loader && <Loader/>}
            <section className="grid-3-cols home-contents-gap home-page-grid">
                {info && info.map( (details) => (<HomeCard key={details._id} cardValue={details}/>))}
            </section>
        </main>
    );
}

export { Home }