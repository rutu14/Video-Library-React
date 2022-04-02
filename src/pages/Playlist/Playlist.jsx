import { useEffect, useState } from "react";
import { AddFolder } from "../../asset";
import { CreatePlaylist, Loader, PlaylistCard } from "../../components";
import { usePlaylist } from "../../context";
import { useModalOperations } from "../../utils";
import './playlist.css';

const Playlist = () => {
    
    const { isOpen, closeOperation, openOperation } = useModalOperations();
    const { state, getPlaylist , deletePlaylist } = usePlaylist();
    const { loader, playlistInfo } = state;
    const [ emptyPage,setEmptyPage ] = useState(false);

    useEffect( () => {
        getPlaylist()
    },[]);

    useEffect(() => {
        setEmptyPage(playlistInfo === null ? true : playlistInfo.length === 0 ? true : false )
    },[playlistInfo])

    return(
        <main className="main-container">            

            {loader && <section className="loader-section"><Loader/></section>}

            { emptyPage && <section className="text3 light loader-section">Add Playlists to play ▶</section>} 

            <section className="video-section">
                <section className="video-section-title">
                    <h3 className="text3 medium text-capitalize">View your Playlists</h3>
                </section>
                <button className="btn add-section cp" onClick={openOperation}>
                    <AddFolder width={30} height={30} /> 
                    <span className="add-section-text">Add Playlist</span>
                </button>
            </section>

            {isOpen && <CreatePlaylist close={closeOperation} /> }

            <section className="grid-3-cols m-t20 page-align home-page-grid" >                
                {playlistInfo && playlistInfo.map((playlist)=>( <PlaylistCard key={playlist._id} getPlaylist={getPlaylist} deletePlaylist={deletePlaylist} playlist={playlist}/> ))}
            </section>
                
        </main>
    );
}

export { Playlist }