import React, { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthContext";
import { Link } from "react-router";
import { div } from "framer-motion/client";

const MyProfile=()=>{

    const {user} = useContext(AuthContext);
    
    if(!user){
        return <p>Loading profile.....</p>
    }


    return(
        <div className="flex flex-col justify-center items-center">
        <div className="border-2 p-4 min-w-[300px] flex flex-col justify-center items-center mt-30 mb-30">

            <div className="bg-emerald-400 border-2 rounded-full">
                <img 
                className="w-20 h-20 rounded-full p-1" 
                src={user?.photoURL} alt="" />
            </div>

            <div className="text-center mt-5">
                <h1 className="text-xl font-bold">{user.displayName}</h1>
                <p className="text-xl font-bold">{user.email}</p>
            </div>

            <Link to="/update">
                <button className="rounded-md btn btn-primary mt-10">Update Profile</button>
            </Link>
                
        </div>
    </div>
    )



}


export default MyProfile;