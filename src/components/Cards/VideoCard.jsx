import { useNavigate } from "react-router";
import { DeleteIcon, LikeIcon, TimeIcon, ViewIcon } from "../../asset";
import { timeInHoursAndMinutes, useLikeStatus } from "../../utils";
import { useEffect } from "react";
import { useLikedVideoActions } from "../../context";

const VideoCard = ({ video, videoLength, playlistId, deletePlaylistVideo }) => {
    const navigate = useNavigate();
    const{
        _id,
        title,
        description,
        creator, 
        videoContent, 
        time,
        viewCounts } = video;

    const convertedTime = timeInHoursAndMinutes(time);

    const deleteVideo = () => {
        if ( videoLength !== 1){
            deletePlaylistVideo( playlistId, _id );
        }else{
            deletePlaylistVideo( playlistId, _id );
            navigate('/playlist');
        }
    } 

    const { state:likedVideo } = useLikedVideoActions(); 
    const { likedVideoInfo } = likedVideo;
    const { colorChange, setColorChange, likedStatus } = useLikeStatus();

    const handleLikedVideo = () => {
        likedStatus(video,_id)
    }

    useEffect( () =>{
        if(likedVideoInfo){
            const matchFound = likedVideoInfo.findIndex( (video) => video._id === _id );
            { matchFound !== -1 ? setColorChange('likeColor') : setColorChange(" ") };
        }
    },[])

    return(
        <div className="card card-box-shadow video-card">
            <img className="card-img video-card-img" alt={`${title}`} src={videoContent}/>
            <span className='time-info'>
                <TimeIcon width={14} height={14}/>
                <span className='time-value'>{convertedTime}</span>
            </span>
            <section className="video-card-details">
                <div className='card-contents-below video-card-info'>
                    <ViewIcon width={23} height={23}/>
                    <span className='view-count-text'>{viewCounts}K</span>
                    <span className='creator-text'> | {creator}</span>
                </div>
                <section className="video-card-btn-section">
                    <button className={`btn aside-btns cp ${colorChange}`} onClick={handleLikedVideo}>
                            <LikeIcon width={29} height={29} />
                    </button>
                    <button className="btn card-delete video-card-delete cp" onClick={deleteVideo} >
                        <DeleteIcon width={30} height={30}/>
                    </button>  
                </section> 
            </section>                        
        </div>
    );
}

export { VideoCard }