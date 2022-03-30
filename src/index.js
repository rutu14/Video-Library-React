import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from "./server";
import { PlaylistProvider, UserProvider,VideoProvider } from './context';

makeServer();

ReactDOM.render(
  	<React.StrictMode>
	  	<BrowserRouter>
		  	<UserProvider>
			<PlaylistProvider>
		  	<VideoProvider>
    			<App />
			</VideoProvider>
			</PlaylistProvider>
			</UserProvider>
		</BrowserRouter>
  	</React.StrictMode>,
  document.getElementById('root')
);