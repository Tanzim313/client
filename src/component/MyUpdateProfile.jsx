import { div } from "framer-motion/client";
import React, { use, useState } from "react";
import { AuthContext } from "../Authprovider/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";


const MyUpdate =()=>{


    const {user,updateUser}=use(AuthContext);


    const[edit,setEdit] = useState(false);
    const[name,setName] = useState(user?.displayName||"");
    const[email,setEmail] = useState(user?.email||"")
    const[photo,setPhoto] = useState(user?.photoURL||"");
    const [message,setMessage] = useState("");


    const handleUpdate=(e)=>{
        e.preventDefault();
        updateUser({displayName:name,photoURL:photo,email:email})
        .then(()=>{
            toast.success('Successfully Save!')
            setMessage("profile updated successfully!");
            setEdit(false);
        })
        .catch(()=>setMessage("error updating profile"));
    };


    return(
        <div className="flex flex-col justify-center items-center mt-10 ">
            <Toaster
            position="top-center"
            reverseOrder={false}/>

            <h1 className="text-4xl font-bold">Update Profile</h1>

             <form onSubmit={handleUpdate} className="rounded-md flex flex-col gap-3 w-80 border-2 p-4 mt-20 mb-20">
                <input 
                placeholder="USER NAME"
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                type="text" className="input input-bordered"
                required
                />

                <input
                placeholder="USER EMAIL" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                type="email" 
                className="input input-bordered"
                required
                />


                <input
                placeholder="USER PHOTO" 
                value={photo} 
                onChange={(e)=>setPhoto(e.target.value)} 
                type="text" 
                className="input input-bordered"
                required
                />

                <button type="submit" className="btn btn-success rounded-md">save</button>
                <Link to="/profile">
                    <button type="button" className="btn btn-warning rounded-md w-full" onClick={()=>setEdit(false)}>Cancel</button>
                </Link>
            </form>
            
        </div>
    )
}

export default MyUpdate;