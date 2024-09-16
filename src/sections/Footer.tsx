// import React from 'react'
// import pokeballIcon from "../assets/pokeball-icon.png"
// import { GiHamburgerMenu } from "react-icons/gi"

const Footer = () => {
  return (
    <footer className="grid grid-cols-[5rem_auto_5rem] border-t border-slate-700">
      <div className="flex justify-center items-center">
        {/* <img className="cursor-pointer h-12" src={pokeballIcon} alt="pokeball icon" /> */}
      </div>
      <div className="border border-t-0 border-b-0 border-slate-700"></div>
      <div className="flex justify-center items-center">
        {/* <GiHamburgerMenu className="text-white text-[2rem] cursor-pointer"/> */}
      </div>
    </footer>
  )
}

export default Footer