import { AddIcon, InfoIcon, LikeIcon, PlayIcon, TimeIcon, ViewIcon, WatchlistFolder } from '../../asset';
import { timeInHoursAndMinutes } from '../../utils/timeConversion';
import './homecard.css'

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

    return(
        <div className="card card-box-shadow m-t20 home-card">
            <span className='play-action cp'>
                <PlayIcon width={48} height={48} />
            </span>
            <span className='time-info'>
                <TimeIcon width={14} height={14}/>
                <span className='time-value'>{convertedTime}</span>
            </span>
            <img className="card-img video-part" alt={`${title}`} src={videoContent}/>
            <div className='card-contents-aside'>
                <button className='btn aside-btns cp'>
                    <InfoIcon width={29} height={29} title={description} />
                </button>
                <button className='btn aside-btns cp'>
                    <WatchlistFolder width={29} height={29} />
                </button>
                <button className='btn aside-btns cp'>
                    <LikeIcon width={29} height={29} />
                </button>
                <button className='btn aside-btns cp'>
                    <AddIcon width={29} height={29} />
                </button>
            </div>
            <div className='card-contents-below'>
                <ViewIcon width={23} height={23}/>
                <span className='view-count-text'>{viewCounts}K</span>
                <span className='creator-text'> | {creator}</span>
            </div>
        </div> 
    );
}

export { HomeCard }