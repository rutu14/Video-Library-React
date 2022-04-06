import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from "./server";
import { HistoryVideoProvider, LikedVideoProvider, PlaylistProvider, UserProvider,VideoProvider, WatchLaterProvider } from './context';

makeServer();

ReactDOM.render(
  	<React.StrictMode>
	  	<BrowserRouter>
		  	<UserProvider>
			<WatchLaterProvider>
			<PlaylistProvider>
			<LikedVideoProvider>
			<HistoryVideoProvider>
		  	<VideoProvider>
    			<App />
			</VideoProvider>
			</HistoryVideoProvider>
			</LikedVideoProvider>
			</PlaylistProvider>
			</WatchLaterProvider>  
			</UserProvider>
		</BrowserRouter>
  	</React.StrictMode>,
  document.getElementById('root')
);