import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "../../assets/user.png";
import { AuthContext } from "../../authentication/AuthProvider";
import Logo from '../../assets/images/logo.jpg';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = ()=> {
        logOut()
        .then()
        .catch()

  }

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/career">Join Us</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      
      
    </>
  );
  return (
    <div className="navbar bg-slate-300 h-32 flex items-center mb-2">
      <div className="h-full flex items-center"> 
        <img src={Logo} alt="Logo" className="h-full w-80 rounded-full" /> 
      </div>
      
      
      <div className="navbar-start">
        
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      
      <div className="navbar-end flex items-center">
        {user && (
          <>
            <div className="flex flex-col items-end mr-2">
              <span className="text-sm font-bold">{user.displayName}</span>
            </div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || userDefaultPicture} alt="User Avatar" />
              </div>
            </label>
          </>
        )}
        {user ? (
          <button onClick={handleSignOut} className="btn bg-red-400 text-white px-4 py-2 rounded block text-center ml-2">Sign Out</button>
        ) : (
          <Link
            to="/login"
            className="bg-red-400 text-white px-4 py-2 rounded block text-center ml-2"
          >
            Login/Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
