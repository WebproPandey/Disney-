import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails } from '../../store/reducers/UserSlice';

const Header = () => {
  const { user, loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();
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

  // Dispatch user details to Redux store if authenticated
  if (isAuthenticated && user && !isLoading) {
    dispatch(setUserLoginDetails({
      name: user.name,
      email: user.email,
      photo: user.picture,
    }));
  }

  return (
    <div className="h-[12vh] w-full flex items-center justify-between fixed top-0 left-0 bg-[#090b13] py-2 px-4">
      <div className="flex gap-5 justify-between items-center h-full w-[50%] md:lg:min-w-[60%] lg:min-w-[60%] px-5">
        <div className="logo h-full md:w-[20%] lg:w-[20%]"></div>

        {/* Render navigation links only if user is authenticated */}
        {isAuthenticated && (
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
        )}
      </div>
      
      {!isAuthenticated ? (
        <div onClick={handleLogin} className="Login px-7 py-2 border text-white capitalize font-semibold hover:bg-white hover:text-black cursor-pointer">
          Login
        </div>
      ) : (
        <>
          <div
            className="profilebox h-[8vh] w-[8vh] border rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${user.picture})` }}
          ></div>
          <div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="Logout hidden px-7 py-2 border text-white capitalize font-semibold hover:bg-white hover:text-black cursor-pointer"
          >
            Log Out
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
