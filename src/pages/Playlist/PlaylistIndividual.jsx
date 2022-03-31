import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { DeleteIcon } from "../../asset";
import { Loader, VideoCard } from "../../components";
import { usePlaylist } from "../../context";
import './playlist.css';

const PlaylistIndividual = () => {
    const {playlistId} = useParams();
    const navigate = useNavigate();
    const { state, getPlaylistVideos, deletePlaylistVideo, deletePlaylist } = usePlaylist();
    const { loader, playlistVideoInfo } = state;

    useEffect( () => {
        getPlaylistVideos(playlistId);
    },[]);
    
    const { title, description, videos } = playlistVideoInfo;

    const deletePlaylistNow = () => {
        deletePlaylist(playlistId);
        navigate('/playlist');
    }

    return(
        <main className="main-container">

            {loader && <Loader/>}
            <section className="video-section">
                <section className="video-section-title">
                    <h3 className="text3 medium text-capitalize">{title}</h3>
                    <h3 className="text4 regular">{description}</h3>
                </section>
                <button className="btn add-section video-section-btn cp" onClick={deletePlaylistNow}>                    
                    <span className="video-section-text">Delete Playlist</span>
                    <DeleteIcon width={20} height={20} /> 
                </button>
            </section>

            <section className="grid-4-cols m-t20 " >                
                {videos && videos.map((video)=>( <VideoCard key={video._id} videoLength={videos.length} playlistId={playlistId} deletePlaylistVideo={deletePlaylistVideo} video={video}/> ))}
            </section>
                
        </main>
    );
}

export { PlaylistIndividual }