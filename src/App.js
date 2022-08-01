import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login";
import Contact from "./components/Contact";
import AuthContext from "./context/AuthContext";
import AuthProvider from "./context/AuthProvider";
import AboutMeModif from "./pages/AboutMeModif";
import SkillsModif from "./pages/SkillsModif";
import StudiesModif from "./pages/StudiesModif";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <AuthContext.Consumer>
            {
              context => (
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/aboutmodif" element={<AboutMeModif />} />
                <Route path="/skillsmodif" element={<SkillsModif />} />
                <Route path="/studiesmodif" element={<StudiesModif />} />
              </Routes>
              )
            }
          </AuthContext.Consumer>
          <footer>
            <Contact />
          </footer>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
