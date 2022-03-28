import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from "./server";
import { UserProvider,VideoProvider } from './context';

makeServer();

ReactDOM.render(
  	<React.StrictMode>
	  	<BrowserRouter>
		  	<UserProvider>
		  	<VideoProvider>
    			<App />
			</VideoProvider>
			</UserProvider>
		</BrowserRouter>
  	</React.StrictMode>,
  document.getElementById('root')
);