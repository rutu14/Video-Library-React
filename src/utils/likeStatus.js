import { useState } from "react";
import { useLikedVideoActions } from "../context";

const useLikeStatus = () => {
    const { state:likedVideo, addLikeStatus, removeLikeStatus, addLikedVideo, deleteLikedVideo } = useLikedVideoActions(); 
    const { likeStatus } = likedVideo;
    const [ colorChange, setColorChange ] = useState(" ");
    const idPresent = (id) => likeStatus?.some( (videoPresent) => videoPresent.id == id);
    const idPresentIndex = (id) => likeStatus?.find( videoPresent => videoPresent.id === id);

    const likedStatus = (videoValue, videoId) => {
            const matchFound = idPresent(videoId);
            if( !matchFound ){
                addLikedVideo(videoValue);
                setColorChange('likeColor');
                addLikeStatus(videoId);
            }else{
                const matchh = idPresentIndex(videoId);
                if( matchh.status ){
                    deleteLikedVideo(videoId);
                    setColorChange(' ');
                    removeLikeStatus(videoId);
                }else{
                    addLikedVideo(videoValue);
                    setColorChange('likeColor');
                    addLikeStatus(videoId);
                }
            }          
    }

    return { colorChange, setColorChange, likedStatus}
}

export { useLikeStatus }