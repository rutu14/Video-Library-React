import './App.css';
import MockmanEs from 'mockman-js';
import { Route, Routes } from 'react-router';
import { Navigation } from './components';

function App() {
  return (
    <>
		<Navigation/>
		<Routes>
			<Route path='mock' element={<MockmanEs/>}/>
		</Routes>
	</>

  );
}

export default App;
