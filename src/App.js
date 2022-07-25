import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import React from "react"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
          <footer>
          <Contact/>
          </footer>
        </BrowserRouter>
    </div>
  );
}
export default App;
