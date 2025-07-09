// import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./sections/Navbar"
import Footer from "./sections/Footer"
import Background from "./components/Background"
import "./scss/index.scss"
import Search from "./pages/Search"
import MyList from "./pages/MyList"
import About from "./pages/About"
import Pokemon from "./pages/Pokemon"

const App = () => {
  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<About />} path="/about" />
            <Route element={<Pokemon />} path="/pokemon/:id" />
            <Route element={<Navigate to="/pokemon/1" />} path="*" />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App