import axios from "axios"
import React, { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "../reducer";

const defaultValue = {
    loader: false,
    playlistInfo: [ ],
    playlistVideoInfo: [],
    error: false,
    errorMsg: null
};

const PlaylistContext = createContext(defaultValue);

const PlaylistProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(playlistReducer, defaultValue);

    const getPlaylist = async ( ) => {
        try {
            dispatch({ type: "PLAYLIST_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.get( '/api/user/playlists', config );
            dispatch({ type: "PLAYLIST_SUCCESS", payload: data.playlists })          
        } catch (error) {
            dispatch({ type: "PLAYLIST_ERROR", payload: error.response.data.errors[0] })
        }
    }

    const addPlaylist = async ( playlist ) => {
        try {
            dispatch({ type: "PLAYLIST_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            if( state.playlistInfo.length === 0 ){
                const { data } = await axios.post( '/api/user/playlists',{ playlist }, config );
                dispatch({ type: "PLAYLIST_SUCCESS", payload: data.playlists })     
            }else{
                const matchFound = state.playlistInfo.findIndex((playlistPresent) => playlistPresent._id === playlist._id);
                if( matchFound === -1 ) {
                    const { data } = await axios.post( '/api/user/playlists',{ playlist }, config );
                    dispatch({ type: "PLAYLIST_SUCCESS", payload: data.playlists }) 
                }else{                    
                    dispatch({ type: "PLAYLIST_SUCCESS_MATCH" })                    
                }                 
            }                  
        } catch (error) {
            dispatch({ type: "PLAYLIST_ERROR", payload: error.response.data.errors[0] })
        }
    }

    const deletePlaylist = async ( playlistId ) => {
        try {
            dispatch({ type: "PLAYLIST_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.delete( `/api/user/playlists/${playlistId}`, config );
            dispatch({ type: "PLAYLIST_SUCCESS", payload: data.playlists })          
        } catch (error) {
            dispatch({ type: "PLAYLIST_ERROR", payload: error.response.data.errors[0] })
        }
    }

    const getPlaylistVideos = async ( playlistId ) => {
        try {
            dispatch({ type: "PLAYLIST_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.post( `/api/user/playlists/${playlistId}`, config );
            dispatch({ type: "PLAYLIST_VIDEO_SUCCESS", payload: data.playlist })          
        } catch (error) {
            dispatch({ type: "PLAYLIST_ERROR", payload: error })
        }
    }

    const addPlaylistVideos = async ( playlistId, video ) => {
        try {
            dispatch({ type: "PLAYLIST_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.post( `/api/user/playlists/${playlistId}`,{ video: video }, config );
            dispatch({ type: "PLAYLIST_VIDEO_SUCCESS", payload: data.playlist })     
        } catch (error) {
            console.log(error.response.data)
            dispatch({ type: "PLAYLIST_ERROR", payload: error })
        }
    }

    const deletePlaylistVideo = async ( playlistId, videoId ) => {
        try {
            dispatch({ type: "PLAYLIST_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.delete( `/api/user/playlists/${playlistId}/${videoId}`, config );
            dispatch({ type: "PLAYLIST_VIDEO_SUCCESS", payload: data.playlists })          
        } catch (error) {
            dispatch({ type: "PLAYLIST_ERROR", payload: error })
        }
    }
        
    return <PlaylistContext.Provider value={ { state , dispatch, getPlaylist , addPlaylist, deletePlaylist, getPlaylistVideos, addPlaylistVideos, deletePlaylistVideo } }>
                {children}
            </PlaylistContext.Provider>
    
}

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };