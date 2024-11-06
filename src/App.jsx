import './styles.css'
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Price from './pages/Price';
import Currencies from './pages/Currencies';
import NavBar from './components/NavBar'

export default function App() {
  return (
    <div className="App">

        <NavBar />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/price/:symbol' element={<Price />} />
            <Route path='/currencies' element={<Currencies />} />
        </Routes>

    </div>
  );
}