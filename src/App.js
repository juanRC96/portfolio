import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from "react"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
