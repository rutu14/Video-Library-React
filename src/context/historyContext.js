import axios from "axios"
import React, { createContext, useContext, useReducer } from "react";
import { historyVideoReducer } from "../reducer";

const defaultValue = {
    loader: false,
    historyVideoInfo: [],
    error: false,
    errorMsg: null
};

const HistoryVideoContext = createContext(defaultValue);

const HistoryVideoProvider = ({ children }) => {

    const [ state, dispatch  ] = useReducer(historyVideoReducer, defaultValue);

    const getHistoryVideo = async () => {
        try {
            dispatch({ type: "HISTORY_VIDEO_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.get( '/api/user/history', config)
            console.log( data.history )
            dispatch({ type: "HISTORY_VIDEO_SUCCESS", payload: data.history })
        } catch (error) {
            dispatch({ type: "HISTORY_VIDEO_ERROR", payload: error })
        }
    }
      
    const addHistoryVideo = async( video ) => {
        try {
          dispatch({ type: "HISTORY_VIDEO_REQUEST" })
          const token = localStorage.getItem("token");
          const config = { headers: { 'authorization': token } };
          const { data } = await axios.post( '/api/user/history',{ video }, config )
          console.log( data.history )
          dispatch({ type: "HISTORY_VIDEO_SUCCESS", payload: data.history })
        } catch (error) {
            dispatch({ type: "HISTORY_VIDEO_ERROR", payload: error })
        }
    }

    const deleteHistoryVideo = async ( videoId ) => {
        try {
            dispatch({ type: "HISTORY_VIDEO_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.delete( `/api/user/history/${videoId}`, config );
            dispatch({ type: "HISTORY_VIDEO_SUCCESS", payload: data.history })          
        } catch (error) {
            dispatch({ type: "HISTORY_VIDEO_ERROR", payload: error })
        }
    }

    const deleteAllHistoryVideo = async ( videoId ) => {
        try {
            dispatch({ type: "HISTORY_VIDEO_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.delete( '/api/user/history/all', config );
            dispatch({ type: "HISTORY_VIDEO_SUCCESS", payload: data.history })          
        } catch (error) {
            dispatch({ type: "HISTORY_VIDEO_ERROR", payload: error })
        }
    }
        
    return <HistoryVideoContext.Provider value={ { state, getHistoryVideo, addHistoryVideo, deleteHistoryVideo, deleteAllHistoryVideo } }>
                {children}
            </HistoryVideoContext.Provider>
    
}

const useHistoryVideoActions = () => useContext(HistoryVideoContext);

export { HistoryVideoProvider, useHistoryVideoActions };