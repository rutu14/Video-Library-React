import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { AddIcon, InfoIcon, LikeIcon, PlayIcon, TimeIcon, ViewIcon, WatchlistFolder } from '../../asset';
import { useHistoryVideoActions, useLikedVideoActions, useUserActions, useWatchLaterActions } from '../../context';
import { timeInHoursAndMinutes, useModalOperations, useLikeStatus } from '../../utils';
import { AddtoPlaylist } from '../../components';
import './homecard.css';

const HomeCard = ({cardValue}) => {

    const{
        _id,
        title,
        description,
        creator, 
        videoContent, 
        time,
        viewCounts } = cardValue;

    const convertedTime = timeInHoursAndMinutes(time);

    const navigate = useNavigate();    
    const [ userCheck, setUserCheck ] = useState(true);

    const { state:user } = useUserActions();
    const { tokenPresent } = user; 
    const { state:likedVideo } = useLikedVideoActions(); 
    const { likedVideoInfo } = likedVideo;
    const { addHistoryVideo } = useHistoryVideoActions();
    const { addWatchLater } = useWatchLaterActions();


    const { isOpen, closeOperation, openOperation } = useModalOperations(); 
    const { colorChange, setColorChange, likedStatus } = useLikeStatus();

    useEffect( () => {
        if(!userCheck){
            navigate('login')
        }
    },[ userCheck ]);

    const verifyUser = () => tokenPresent ? true : setUserCheck(false);

    const handleAddtoPlaylist = () => {
        const user = verifyUser();
        if ( user ){
            openOperation();
        }
    }
    
    const handleLikedVideo = () => {
        const user = verifyUser();
        if(user){
            likedStatus(cardValue,_id)
        }
    }

    const handleWatchLater = () => {
        const user = verifyUser();
        if(user){
            addWatchLater(cardValue);
        }
    }

    const handleHistory = () => {
        if(tokenPresent){
            addHistoryVideo(cardValue);
        }
    }

    useEffect( () =>{
        if(likedVideoInfo){
            const matchFound = likedVideoInfo.findIndex( (video) => video._id === _id );
            { matchFound !== -1 ? setColorChange('likeColor') : setColorChange(" ") };
        }
    },[])

    return(<>
        <div className="card card-box-shadow m-t20 home-card">
            <button className='btn play-action cp' onClick={handleHistory} >
                <PlayIcon width={48} height={48} />
            </button>
            <span className='time-info'>
                <TimeIcon width={14} height={14}/>
                <span className='time-value'>{convertedTime}</span>
            </span>
            <img className="card-img video-part" alt={`${title}`} src={videoContent}/>
            <div className='card-contents-aside'>
                <button className='btn aside-btns cp'>
                    <InfoIcon width={29} height={29} title={description} />
                </button>
                <button className='btn aside-btns cp' onClick={handleWatchLater}>
                    <WatchlistFolder width={29} height={29} />
                </button>
                <button className={`btn aside-btns cp ${colorChange}`} onClick={handleLikedVideo}>
                    <LikeIcon width={29} height={29} />
                </button>
                <button className='btn aside-btns cp'  onClick={handleAddtoPlaylist}>
                    <AddIcon width={29} height={29} />
                </button>
            </div>
            {isOpen && ( <AddtoPlaylist close={closeOperation} cardValue={cardValue} /> )}
            <div className='card-contents-below'>
                <ViewIcon width={23} height={23}/>
                <span className='view-count-text'>{viewCounts}K</span>
                <span className='creator-text'> | {creator}</span>
            </div>
        </div> 
        </>
    );
}

export { HomeCard }