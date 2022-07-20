import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from "react"
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className='contenedor-navbar'>
            <Navbar/>
          </div> 
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
