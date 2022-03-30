import { useEffect, useState } from "react";
import { AddFolder } from "../../asset";
import { usePlaylist } from "../../context";
import { useModalOperations } from "../../utils";
import { CreatePlaylist } from "../../components";

export const AddtoPlaylist = ({ close, cardValue}) => {

    const { isOpen, closeOperation, openOperation } = useModalOperations();
    const [ playlistSelection, setPlaylistSelection ] = useState({ playlistName: " ", playlistId: " " });
    const { state, addPlaylistVideos } = usePlaylist();
    const { playlistInfo } = state;

    const changedValue = (e) => {
        setPlaylistSelection( (prev) => ({ ...prev, playlistName: e.target.name, playlistId: e.target.id }))
        addPlaylistVideos(e.target.id,cardValue)
        close();
    }

    return(
        <>
        <section className="modal-backdrop add-to-playlist-backdrop" >
            <div className="modal-dialog add-to-playlist-dialog">
                <button className="btn close-modal close-modal-add-playlist add-to-playlist-btn-border cp" onClick={close}>✕</button>
                <section className="text4 medium add-to-playlist-modal">
                <section className="add-to-playlist-btn-section">
                    {playlistInfo && playlistInfo.map( (playlist) => (
                        <button id={playlist._id} className="btn text4 playlist-btn add-to-playlist-btn-border cp" key={playlist._id} name={playlist.title} type="button" onClick={changedValue}>{playlist.title}</button>
                    ))} 
                    </section>
                    <button className="btn add-section add-to-playlist-btn-border cp" onClick={openOperation}>
                        <AddFolder width={30} height={30} /> 
                        <span className="add-section-text">Create Playlist</span>
                    </button>                   
                </section>
            </div>
        </section>  
        {isOpen && <CreatePlaylist close={closeOperation} /> }
        </>     
    );
}