import { useNavigate } from "react-router";
import { DeleteIcon, TimeIcon } from "../../asset";
import { timeInHoursAndMinutes } from "../../utils";

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

    return(
        <div className="card card-box-shadow home-card video-card">
            <img className="card-img video-card-img" alt={`${title}`} src={videoContent}/>
            <span className='time-info video-card-time'>
                <TimeIcon width={14} height={14}/>
                <span className='time-value'>{convertedTime}</span>
            </span>
            <button className="btn card-delete video-card-delete cp" onClick={deleteVideo} >
                <DeleteIcon width={30} height={30}/>
            </button>   
        </div>
    );
}

export { VideoCard }