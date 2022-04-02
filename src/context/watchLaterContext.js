import axios from "axios"
import React, { createContext, useContext, useReducer } from "react";
import { watchLaterReducer } from "../reducer";

const defaultValue = {
    loader: false,
    watchLaterInfo: [],
    error: false,
    errorMsg: null
};

const WatchLaterContext = createContext(defaultValue);

const WatchLaterProvider = ({ children }) => {

    const [ state, dispatch  ] = useReducer(watchLaterReducer, defaultValue);

    const getWatchLater = async () => {
        try {
            dispatch({ type: "WATCH_LATER_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.get( '/api/user/watchlater', config)
            dispatch({ type: "WATCH_LATER_SUCCESS", payload: data.watchlater })
        } catch (error) {
            dispatch({ type: "WATCH_LATER_ERROR", payload: error })
        }
    }
      
    const addWatchLater = async( video ) => {
        try {
            dispatch({ type: "WATCH_LATER_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.post( '/api/user/watchlater',{ video }, config )
            dispatch({ type: "WATCH_LATER_SUCCESS", payload: data.watchlater })
        } catch (error) {
            dispatch({ type: "WATCH_LATER_ERROR", payload: error })
        }
    }

    const deleteWatchLater = async ( videoId ) => {
        try {
            dispatch({ type: "WATCH_LATER_REQUEST" })
            const token = localStorage.getItem("token");
            const config = { headers: { 'authorization': token } };
            const { data } = await axios.delete( `/api/user/watchlater/${videoId}`, config );
            dispatch({ type: "WATCH_LATER_SUCCESS", payload: data.watchlater })          
        } catch (error) {
            dispatch({ type: "WATCH_LATER_ERROR", payload: error })
        }
    }

    const deleteAllWatchLater = () => dispatch({ type: "WATCH_LATER_DELETE_ALL" });
        
    return <WatchLaterContext.Provider value={ { state, getWatchLater, addWatchLater, deleteWatchLater, deleteAllWatchLater } }>
                {children}
            </WatchLaterContext.Provider>
    
}

const useWatchLaterActions = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLaterActions };