
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Rnavbar from './components/Rnavbar';
import LandingPage from './components/LandingPage';
import Todo from './components/Todo';
import { useState } from 'react';
import Passwordgenerate from './components/Passwordgenerate';
// import Password from './components/Password';

function App() {
  const [logo, setlogo] = useState(true)
  const [themeicon, setthemeicon] = useState(true)
  const setdarktheme = () => {
    document.querySelector("body").setAttribute("theme", "dark")
  }
  const setlighttheme = () => {
    document.querySelector("body").setAttribute("theme", "light")
  }
  const changetheme = () => {
    themeicon ?
      setdarktheme() || setlogo(false) || setthemeicon(false) :
      setlighttheme() || setlogo(true) || setthemeicon(true);
  }
  return (
    <>
      <BrowserRouter>
        <Rnavbar changetheme={changetheme} logo={logo} themeicon={themeicon} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/password" element={<Passwordgenerate />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
