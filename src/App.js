import './App.css';
import MockmanEs from 'mockman-js';
import { Route, Routes } from 'react-router';
import { Home, LoginPage, SignUpPage } from './pages';
import { PageLayout, AuthPageLayout, PrivateRoute } from './utils';

function App() {
  return (
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
			<Route path='watchlist' element={<Home/>}/>
			<Route path='history' element={<Home/>}/>
		</Route>

	</Routes>
  );
}

export default App;
