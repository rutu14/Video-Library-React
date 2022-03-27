import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { VideoProvider } from './context/videoContext';
import { makeServer } from "./server";

makeServer();

ReactDOM.render(
  	<React.StrictMode>
	  	<BrowserRouter>
		  <VideoProvider>
    		<App />
			</VideoProvider>
		</BrowserRouter>
  	</React.StrictMode>,
  document.getElementById('root')
);