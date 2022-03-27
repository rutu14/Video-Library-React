import axios from "axios"
import React, { createContext, useContext, useEffect, useState } from "react";

const defaultValue = { videos: {
    loader: false,
    info: [],
    error: []
} };

const VideoContext = createContext(defaultValue);

const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState({ loader: true, info: [], error: [] });

    useEffect(() => { getVideos();}, []);

    const getVideos = async () => {
        try{
            setVideos(( existing ) => ({ ...existing, loader: true }) )
            const { data } = await axios.get("/api/videos");            
            const data1 = [ ...data.videos ];
            setVideos(( existing ) => ({ ...existing, loader: false, info: data1 }) )
        }
        catch(error){
            setVideos(( existing ) => ({ ...existing, loader: false, error:error }) )
        }
    }    
    return <VideoContext.Provider value={{ videos: videos }}>
                {children}
            </VideoContext.Provider>
    
}

const useGetVideos = () => useContext(VideoContext);

export { VideoProvider, useGetVideos };