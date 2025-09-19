import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import New from './pages/New';
import Best from './pages/Best';
import Qna from './pages/Qna';
import ShopDetail from './pages/ShopDetail';

function App() {
  return (
    <div className="wrap">
      <Navbar/>

      <main className="main">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/:id' element={<ShopDetail/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/best' element={<Best/>}/>
          <Route path='/qna' element={<Qna/>}/>
        </Routes>
      </main>

      <footer className="site-footer">
        <small>&copy; {new Date().getFullYear()} SPWO</small>
      </footer>
    </div>
  );
}

export default App;
