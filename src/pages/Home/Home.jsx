import { Loader } from "../../components";
import { HomeCard } from "../../components";
import { useGetVideos } from "../../context";
import './home.css'

const Home = () => {
    
    const { videos } = useGetVideos();
    const { loader, info, error } = videos;

    return(
        <main className="main-container home-page">
            {loader && <Loader/>}
            <section className="grid-3-cols home-page-grid">
                {info && info.map( (details) => (<HomeCard key={details._id} cardValue={details}/>))}
            </section>
        </main>
    );
}

export { Home }