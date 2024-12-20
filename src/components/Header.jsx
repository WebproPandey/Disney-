import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector  } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
} from "../../store/reducers/UserSlice";
import { useEffect , useState } from "react";
import Logout from "./Logout";
import Search from "./Search";

const Header = () => {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } =
    useAuth0();
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    if (isAuthenticated && user && !isLoading) {
      dispatch(
        setUserLoginDetails({
          name: user.name,
          email: user.email,
          photo: user.picture,
        })
      );
    }
  }, [isAuthenticated, user, isLoading]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithRedirect();
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  useEffect(() => {
    if (isAuthenticated && user && !isLoading) {
      dispatch(
        setUserLoginDetails({
          name: user.name,
          email: user.email,
          photo: user.picture,
        })
      );
    }
  }, [isAuthenticated, user, isLoading, dispatch]);
  
  const [isSearchVisible, setIsSearchVisible] =  useState(false);

  const toggleSearchHandler = (e) => {
    setIsSearchVisible((prevState) => !prevState);
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);


  return (
    <div className="h-[12vh] w-full flex items-center justify-between fixed top-0 left-0 z-[11] bg-[#090b13] py-2 px-4">
    <div className="flex gap-5 items-center  h-full w-[60%] sm:w-full md:w-[60%] md:px-5 relative  ">
      <div className="logo h-full w-[60%] md:w-[15%] lg:w-[10%]  "></div>
  
      {isAuthenticated && (
        <nav className="hidden md:flex w-auto gap-4">
          <div className="linkwarper">
            <i className="ri-home-4-line"></i>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "Navlink active" : "Navlink"
              }
            >
              Home
            </NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-add-large-line"></i>
            <NavLink
              to="/watchlist"
              className={({ isActive }) =>
                isActive ? "Navlink active" : "Navlink"
              }
            >
              Watchlist
            </NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-star-fill"></i>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "Navlink active" : "Navlink"
              }
            >
              Original
            </NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-movie-2-ai-fill"></i>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "Navlink active" : "Navlink"
              }
            >
              Movies
            </NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-tv-fill"></i>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "Navlink active" : "Navlink"
              }
            >
              Series
            </NavLink>
          </div>
          <div onClick={toggleSearchHandler} className="linkwarper">
            <i className="ri-search-line cursor-pointer"></i>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "Navlink active" : "Navlink"
              }
            >
              Search
            </NavLink>
          </div>
          {isSearchVisible && <Search />}
        </nav>
      )}
    </div>
  
    {!isAuthenticated ? (
      <div
        onClick={handleLogin}
        className="Login px-7 py-2 border text-white capitalize font-semibold hover:bg-white hover:text-black cursor-pointer"
      >
        Login
      </div>
    ) : (
      <>     
      <div className="md:hidden">
      <button className="text-white text-2xl" onClick={toggleMenu} >
        <i className="ri-menu-line"></i>
      </button>
      {isMenuOpen && 
      (
      <div className="absolute top-[12vh] right-0 z-[99] bg-gradient-to-l from-[#090b13]/70 to-[#4a5568]/30 py-2 w-[35%] pl-4 flex flex-col gap-2">
          <div className="linkwarper">
            <i className="ri-home-4-line"></i>
            <NavLink to="/home">Home</NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-add-large-line"></i>
            <NavLink to="/watchlist">Watchlist</NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-star-fill"></i>
            <NavLink to="/home">Original</NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-movie-2-ai-fill"></i>
            <NavLink to="/home">Movies</NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-tv-fill"></i>
            <NavLink to="/home">Series</NavLink>
          </div>
          <div onClick={toggleSearchHandler} className="linkwarper">
            <i className="ri-search-line cursor-pointer"></i>
            <NavLink to="/">Search</NavLink>
          </div>
        </div>
      )}
      </div> 
      <Logout />

    </>
    )}
  </div>
  
  );
};

export default Header;
