// import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./sections/Navbar"
import Wrapper from "./sections/Wrapper"
import Footer from "./sections/Footer"
import Background from './components/Background'
import Search from "./pages/Search"
import MyList from "./pages/MyList"
import About from "./pages/About"
import Pokemon from "./pages/Pokemon"

const App = () => {
  return (
    <div className="max-w-full overflow-hidden h-screen">
      <Background />
      <BrowserRouter>
        <div className="z-1 h-screen w-screen bg-slate-900 opacity-95 backdrop-blur-50 border border-slate-800 grid grid-rows-[10vh_auto_10vh] grid-cols-1">
          <Navbar />
          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<About />} path="/about" />
            <Route element={<Pokemon />} path="/pokemon/:id" />
            <Route element={<Navigate to="/pokemon/1" />} path="*" />
          </Routes>
        </div>
      </BrowserRouter>
      <Wrapper />
      <Footer />
    </div>
  )
}

export default App