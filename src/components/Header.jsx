import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails } from '../../store/reducers/UserSlice';

const Header = () => {
  const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithRedirect(); 
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  if (isAuthenticated && user && !isLoading) {
    dispatch(setUserLoginDetails({
      name: user.name,
      email: user.email,
      photo: user.picture,
    }));
    console.log("User Name:", user.name);
    console.log("User Email:", user.email);
    console.log("User Photo:", user.picture);
  }

  return (
    <div className="h-[12vh] w-full flex items-center justify-between fixed top-0 left-0 bg-[#090b13] py-2 px-4">
      <div className="flex gap-5 justify-between items-center h-full w-[60%] px-5">
        <div className="logo h-full w-[20%]"></div>
        <nav className="w-auto flex gap-4">
          <div className="linkwarper">
            <i className="ri-home-4-line"></i>
            <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>Home</NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-search-line"></i>
            <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>Search</NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-add-large-line"></i>
            <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>Watchlist</NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-star-fill"></i>
            <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>Original</NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-movie-2-ai-fill"></i>
            <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>Movies</NavLink>
          </div>
          <div className="linkwarper">
            <i className="ri-tv-fill"></i>
            <NavLink to="/home" className={({ isActive }) => isActive ? "Navlink active" : "Navlink"}>Series</NavLink>
          </div>
        </nav>
      </div>
      <div onClick={handleLogin} className="Login px-7 py-2 border text-white capitalize font-semibold hover:bg-white hover:text-black cursor-pointer">Login</div>
    </div>
  );
};

export default Header;
