import MockmanEs from 'mockman-js';
import { Route, Routes } from 'react-router';
import { HistoryVideo, Home, LikedVideo, LoginPage, Playlist, PlaylistIndividual, SignUpPage, WatchList } from './pages';
import { PageLayout, AuthPageLayout, PrivateRoute } from './utils';
import { ToastContainer } from 'react-toastify';

function App() {
	const storedTheme = localStorage.getItem("theme");
  return (<>
	<Routes>
		<Route element={<AuthPageLayout/>}>
			<Route path='login' element={<LoginPage/>}/>
			<Route path='signup' element={<SignUpPage/>}/>
		</Route>

	 	<Route path='/' element={<PageLayout/>}>
		 	<Route index element={<Home/>}/>
		 	<Route path='home' element={<Home/>}/>	
			<Route path='mock' element={<MockmanEs/>}/>
		</Route>
		
		<Route element={<PrivateRoute/>}>
			<Route path='watchlist' element={<WatchList/>}/>
			<Route path='history' element={<HistoryVideo/>}/>
			<Route path='playlist' element={<Playlist/>}/>
			<Route path='playlist/:playlistId' element={<PlaylistIndividual/>}/>
			<Route path='liked' element={<LikedVideo/>}/>
		</Route>
	</Routes>
	<ToastContainer theme={storedTheme} position="bottom-center" autoClose={2000} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
	</>
  );
}

export default App;
