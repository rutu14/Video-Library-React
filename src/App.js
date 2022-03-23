import './App.css';
import MockmanEs from 'mockman-js';

function App() {
  return (
    <>
		<Routes>
			<Route path='home' element={<App/>}/>
			<Route index element={<App/>}/>
			<Route path='mock' element={<MockmanEs/>}/>
		</Routes>
	</>

  );
}

export default App;
