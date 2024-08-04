import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from "./pages/Homepage";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Favourite from './pages/Favourite';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/project' element={<Project/>} />
        <Route path='/fav' element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
