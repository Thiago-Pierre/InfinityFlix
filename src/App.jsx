import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Rotas
import Home from './pages/Home';
import Search from './pages/Search';
import Movie from './pages/Movie';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path="movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
