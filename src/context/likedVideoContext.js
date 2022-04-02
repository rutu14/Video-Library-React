import axios from "axios"
import React, { createContext, useContext, useReducer } from "react";
import { likedVideoReducer } from "../reducer";

const defaultValue = {
    loader: false,
    likedVideoInfo: [],
    likeStatus: [],
    error: false,
    errorMsg: null
};

const LikedVideoContext = createContext(defaultValue);

const LikedVideoProvider = ({ children }) => {

    const [ state, dispatch  ] = useReducer(likedVideoReducer, defaultValue);

    const getLikedVideo = async () => {
        try {
            dispatch({ type: "LIKED_VIDEO_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.post( '/api/user/likes', config)
            dispatch({ type: "LIKED_VIDEO_SUCCESS", payload: data.likes })
        } catch (error) {
            dispatch({ type: "LIKED_VIDEO_ERROR", payload: error })
        }
    }
      
    const addLikedVideo = async( video ) => {
        try {
          dispatch({ type: "LIKED_VIDEO_REQUEST" })
          const token = localStorage.getItem("token");
          const config = { headers: { 'authorization': token } };
          const { data } = await axios.post( '/api/user/likes',{ video }, config )
          dispatch({ type: "LIKED_VIDEO_SUCCESS", payload: data.likes })
        } catch (error) {
            dispatch({ type: "LIKED_VIDEO_ERROR", payload: error })
        }
    }

    const deleteLikedVideo = async ( videoId ) => {
        try {
            dispatch({ type: "LIKED_VIDEO_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.delete( `/api/user/likes/${videoId}`, config );
            dispatch({ type: "LIKED_VIDEO_SUCCESS", payload: data.likes })          
        } catch (error) {
            dispatch({ type: "LIKED_VIDEO_ERROR", payload: error })
        }
    }

    const addLikeStatus = ( videoId ) => {
        dispatch({ type: "LIKED_VIDEO_ADD" , payload: videoId });
    }

    const removeLikeStatus = ( videoId ) => {
        dispatch({ type: "LIKED_VIDEO_REMOVE" , payload: videoId });
    }
        
    return <LikedVideoContext.Provider value={ { state , addLikeStatus, removeLikeStatus, getLikedVideo, addLikedVideo, deleteLikedVideo } }>
                {children}
            </LikedVideoContext.Provider>
    
}

const useLikedVideoActions = () => useContext(LikedVideoContext);

export { LikedVideoProvider, useLikedVideoActions };