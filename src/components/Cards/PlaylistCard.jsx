import { Link } from "react-router-dom";
import { DeleteIcon } from "../../asset";

const PlaylistCard = ({ getPlaylist, deletePlaylist, playlist }) => {
    const {
        _id,
        title,
        description,
        videos } = playlist;

    const deletePlaylistNow = () => {
        deletePlaylist(_id);
        getPlaylist();
    }

    return(
        <div className="card card-box-shadow home-card">
            <div className='card-detail'>
                <section className="card-text">
                    { videos.length !== 0 
                    ? <Link to={`${_id}`} className="td heading3 text-capital card-text-title cp" role={'button'}>{title}</Link>
                    : <span to={`${_id}`} className="heading3 text-capital card-text-title">{title}</span>
                    }
                    <span>{description}</span>
                </section>
                <button className="btn card-delete cp" onClick={deletePlaylistNow}>
                    <DeleteIcon width={30} height={30}/>
                </button>
            </div>
            <div className='card-video'>
                {videos.length === 0 
                    ? <span className="heading3 medium text-capital">Empty Playlist</span>
                    : <span>
                        <img className="card-img card-video-display" alt={`${videos[0].title}`} src={videos[0].videoContent}/>
                        <span className="card-video-text">+ <span>{`${videos.length-1}`}</span></span>
                    </span>
                }
            </div>    
        </div>
    );
}

export { PlaylistCard }