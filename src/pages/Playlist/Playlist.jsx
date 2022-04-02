import { useEffect } from "react";
import { AddFolder } from "../../asset";
import { CreatePlaylist, PlaylistCard } from "../../components";
import { usePlaylist } from "../../context";
import { useModalOperations } from "../../utils";
import './playlist.css';

const Playlist = () => {
    
    const { isOpen, closeOperation, openOperation } = useModalOperations();
    const { state, getPlaylist , deletePlaylist } = usePlaylist();
    const { loader, playlistInfo } = state;

    useEffect( () => {
        getPlaylist()
    },[]);

    return(
        <main className="main-container">            
            <section className="video-section">
                <section className="video-section-title">
                    <h3 className="text3 medium text-capitalize">View your Playlists</h3>
                </section>
                <button className="btn add-section cp" onClick={openOperation}>
                    <AddFolder width={30} height={30} /> 
                    <span className="add-section-text">Add Playlist</span>
                </button>
            </section>

            {loader && <section className="loader-section"><Loader/></section>}

            { emptyPage && <section className="text3 light loader-section">Add Playlists to play ▶</section>} 


            {isOpen && <CreatePlaylist close={closeOperation} /> }

            <section className="grid-4-cols m-t20 " >                
                {playlistInfo && playlistInfo.map((playlist)=>( <PlaylistCard key={playlist._id} getPlaylist={getPlaylist} deletePlaylist={deletePlaylist} playlist={playlist}/> ))}
            </section>
                
        </main>
    );
}

export { Playlist }