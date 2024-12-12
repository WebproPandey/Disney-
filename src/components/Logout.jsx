import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";


const Logout = () => {
    const { user, logout } = useAuth0();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <div className="h-full relative flex items-center justify-center">
      <div
      className="profilebox h-[8vh] w-[8vh] border rounded-full bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: `url(${user.picture})` }}
      onClick={toggleDropdown}
      ></div>

  {isDropdownOpen && (
    <div className="absolute top-[10vh] right-4 md:right-8 lg:right-12 w-30  md:w-[20vw]  bg-white shadow-lg rounded-md p-2 md:p-4">
      <div className="flex justify-end">
        <i
          className="ri-close-large-fill text-gray-600 cursor-pointer hover:text-gray-900"
          onClick={() => setIsDropdownOpen(false)}
        ></i>
      </div>
      <div className="text-center mb-4">
        <img
          src={user.picture}
          alt="Profile"
          className="h-12 w-12 sm:h-8 sm:w-8 rounded-full mx-auto"
        />
        <p className="font-semibold text-gray-800 mt-2 text-sm sm:text-base">{user.name}</p>
        <p className="text-xs sm:text-sm text-gray-600">{user.email}</p>
      </div>
      <button
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        className="w-full py-2 bg-gray-900 text-white rounded-md hover:bg-[#090b13] text-sm sm:text-base"
      >
        Log Out
      </button>
    </div>
  )}
</div>

    );
  
}

export default Logout