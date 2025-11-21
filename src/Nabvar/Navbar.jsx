import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Authprovider/AuthContext";


const Navbar =()=>{

    const {user,signOutUser} = use(AuthContext);

    const handleSignOut =()=>{
        signOutUser()
        .then(()=>{})
        .catch(error=>{
            console.log(error)
        })
    }

    const links =( 
            <>
                        
            <li className="text-xl font-bold text-[#33ccff] "><NavLink to="/">Home</NavLink></li>
            <li className="text-xl font-bold text-[#33ccff] "><NavLink to="/service">Services</NavLink></li>
            { !user && <>
                        <li className="text-xl font-bold text-[#33ccff] "><NavLink to="/login">Login</NavLink></li>
                        <li className="text-xl font-bold text-[#33ccff]"><NavLink to="/register">Register</NavLink></li>
                        
                </>
            }
            {
                user && <>
                        <li className="text-xl font-bold text-[#33ccff]"><NavLink to="/profile">Profile</NavLink></li>
                        <li className="text-xl font-bold text-[#33ccff]"><NavLink to="/myservice">My Service</NavLink></li>
                        <li className="text-xl font-bold text-[#33ccff]"><NavLink to="/addService">Add Service</NavLink></li>
                        <li className="text-xl font-bold text-[#33ccff]"><NavLink to="/my-booking">My Booking</NavLink></li>
                </>
            }
    </>
    )

    const [theme,setTheme] = useState(localStorage.getItem('theme')||"Light")

    useEffect(()=>{
      const html = document.querySelector('html')
      html.setAttribute("data-theme",theme)
      localStorage.setItem("theme",theme)
    },[theme])


    const handleTheme=(checked)=>{
        
      setTheme(checked? "dark":"light")

      console.log(checked)
    }



    return(

        <div className="">
                <div className="navbar shadow-sm ">
  <div className=" navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-4 w-50 p-4 shadow absolute z-40">
        {links}
      </ul>
    </div>
    <a className="text-xl">
      <span className="text-[#33ccff] text-2xl sm:text-3xl italic font-bold ">Mr.</span>Serve<span>On</span></a>
  </div>
  <div className=" navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  
  <input 
  onChange={(e)=>handleTheme(e.target.checked)}
  type="checkbox" 
  defaultChecked className="toggle toggle-sm" />

  <div className="navbar-end">
   {user?
   <div className="flex gap-x-4 items-center">

<div className="tooltip tooltip-bottom" data-tip={user.displayName}>
   <img className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] rounded-full border-2 border-b-cyan-800 border-e-amber-400 border-l-blue-400 " src={user.photoURL} alt="" /> 
</div >


    <a onClick={handleSignOut} className="btn bg-[#33ccff] font-bold  w-20  text-black">Signout</a>
   </div>
   :<Link className="btn bg-[#33ccff] font-bold  w-20  text-black" to="/login">Login</Link>}
  </div>
</div>
        </div>

    );
};

export default Navbar;