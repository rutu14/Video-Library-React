import './App.css';
import MockmanEs from 'mockman-js';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
		<Routes>
			<Route path='mock' element={<MockmanEs/>}/>
		</Routes>
	</>

  );
}

export default App;
