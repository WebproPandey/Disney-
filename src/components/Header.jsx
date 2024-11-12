import { Link, NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div className="h-[12vh] w-full  flex items-center justify-between  fixed  top-0  left-0 bg-[#090b13] py-2 px-4" >
       <div className="flex  gap-5 justify-between  items-center h-full  w-[60%] px-5 ">
        <div className="logo h-full w-[20%] "></div>
        <nav className="w-auto flex  gap-4">
          <div className="linkwarper">
           <i className="ri-home-4-line"></i>
           <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>Home</NavLink>
          </div>
          <div className="linkwarper">
           <i className="ri-search-line"></i>
           <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>Serach</NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-add-large-line"></i>
            <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>Watchlist</NavLink>
           </div>
           <div className="linkwarper">
             <i className="ri-star-fill"></i>
             <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>original</NavLink>
           </div>
           <div className="linkwarper">
            <i className="ri-movie-2-ai-fill"></i>
            <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>move</NavLink>
           </div>
           <div className="linkwarper">
            <i className="ri-tv-fill"></i>
            <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>series</NavLink>
            </div>

       </nav>
       </div>
       <div className="profile border h-full w-[5%] rounded-full "></div>
    </div>
  )
}

export default Header