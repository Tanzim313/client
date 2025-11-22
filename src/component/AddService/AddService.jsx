import { div } from "framer-motion/client";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/AuthContext";
import Loader from "../Loader";
import toast, { Toaster } from "react-hot-toast";

const AddService =()=>{

    const {user} = use(AuthContext);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
            setTimeout(()=>{
                setLoading(false);
            },1000);
        },[])


    const handleSubmit = (e)=>{
        e.preventDefault()

        const formData ={
            serviceName: e.target.serviceName.value,
            category: e.target.category.value,
            price:e.target.price.value,
            description:e.target.description.value,
            img:e.target.img.value,
            providerName:e.target.providerName.value,
            email:e.target.email.value,
            created_at: new Date(),
            created_by: user.email
        };
        
        setLoading(true);
        fetch('https://serveron.vercel.app/models',{

            method: "POST",
            headers:{
                    "Content-Type":"application/json",
            },
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('Successfully added!')
            console.log(data)

        setTimeout(() => {
            setLoading(false);
            }, 500);
        })
        .catch(err=>{
            console.log(err)
        })


    }

    if (loading) {
        return (
            <Loader/>
        );
    }

    return(
        <div className="flex justify-center items-center p-20">
            <div className="mt-10"><Toaster/></div>
            <form  onSubmit={handleSubmit} action="">

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Add Service</legend>
                
                <label className="label">Service Name</label>
                <input 
                type="text"
                name="serviceName" 
                className="input" 
                placeholder="service Name" 
                />

                <label className="label">Category</label>
                <input 
                type="text" 
                name="category"
                className="input" 
                placeholder="Category" />

                <label className="label">Price</label>
                <input 
                type="text"
                name="price" 
                className="input" 
                placeholder="Price"/>

                <label className="label">Description</label>
                <input 
                type="text"
                name="description" 
                className="input" 
                placeholder="Description" />


                <label className="label">Image URL</label>
                <input 
                type="text" 
                name="img"
                className="input" 
                placeholder="Image URL" />
               
                
                <label className="label">Provider Name</label>
                <input 
                type="text"
                name="providerName" 
                className="input" 
                placeholder="Provider Name" />
                
                <label className="label">Email</label>
                <input 
                type="email"
                name="email" 
                className="input" 
                placeholder="Email" />

                <button type="submit" className="btn btn-neutral mt-4">Add Service</button>
            </fieldset>

            </form>
        </div>
    )
}

export default AddService;