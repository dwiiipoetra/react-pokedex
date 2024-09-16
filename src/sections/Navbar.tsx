import {useEffect} from 'react'
import pokeballIcon from "../assets/pokeball-icon.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  const navigationRoutes = [
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "My List",
      route: "/list",
    },
    {
      name: "About",
      route: "/about",
    },
  ];

  const ul = (index: number) => {
    const underlines = document.querySelectorAll<HTMLElement>(".underline")
    for (let i=0; i<underlines.length; i++) {
      underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)"
    }
  }

  useEffect(() => {
    const index = navigationRoutes.findIndex(({route}) =>
      location.pathname.includes(route)
    )
    ul(index)
  }, [location.pathname, navigationRoutes])

  return (
    <nav className="grid grid-cols-[5rem_auto_5rem] border-b border-slate-700">
      <div className="flex justify-center items-center">
        <img className="cursor-pointer h-12" src={pokeballIcon} alt="pokeball icon" />
      </div>
      <div className="border border-t-0 border-b-0 border-slate-700 px-80">
        <ul className="grid grid-cols-[repeat(5,_20%)] h-full list-none z-1 relative">
          <div className="underline block absolute z-0 bottom-0 bg-white w-[20%] h-[calc(4px/2)] mix-blend-mode-[initial] pointer-events-none transition-all duration-[500ms] ease-in-out"></div>
          <div className="underline block absolute z-0 bottom-0 bg-white w-[20%] h-[calc(4px/2)] mix-blend-mode-[initial] pointer-events-none transition-all duration-[500ms] ease-in-out"></div>
          <div className="underline block absolute z-0 bottom-0 bg-white w-[20%] h-[calc(4px/2)] mix-blend-mode-[initial] pointer-events-none transition-all duration-[500ms] ease-in-out"></div>
          {
            navigationRoutes.map(({name, route}, index) => {
              return (
              <Link className="text-white flex justify-center items-center border-b border-transparent" to={route} key={index}>
                <li className="uppercase cursor-pointer tracking-[0.2rem]">{name}</li>
              </Link>
              )
            })
          }
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <GiHamburgerMenu className="text-white text-[2rem] cursor-pointer"/>
      </div>
    </nav>
  )
}

export default Navbar