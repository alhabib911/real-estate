import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/rent' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
