import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About/About';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CadastroProduto from './pages/Produto/CadastroProduto';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <Navbar />
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cadastroProduto' element={<CadastroProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
