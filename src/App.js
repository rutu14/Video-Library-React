import './App.css';
import MockmanEs from 'mockman-js';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home/Home';
import { PageLayout } from './utils/PageLayout';

function App() {
  return (
	<Routes>
	 	<Route path='/' element={<PageLayout/>}>
		 	<Route index element={<Home/>}/>
		 	<Route path='home' element={<Home/>}/>
			<Route path='mock' element={<MockmanEs/>}/>
		</Route>
	</Routes>
  );
}

export default App;
