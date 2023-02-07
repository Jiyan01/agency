import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './navbar/Navbar';
import Home from './home/Home'
import About from './about/About';
import Works from './works/Works'
import StudyCase from './studycase/StudyCase';

import React, {  useState } from "react";

import { createContext } from "react";
export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
<ThemeContext.Provider value={{ theme, toggleTheme}}> 
  <div className='App' id={theme}>
<BrowserRouter>
<Navbar />
    <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/works" element={<Works/>} exact/>
        <Route path="/works/:title-study-case" element={<StudyCase />} />
    </Routes>
</BrowserRouter>
</div>
</ThemeContext.Provider>
  )
}

export default App