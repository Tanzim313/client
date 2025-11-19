import { div } from "framer-motion/client";
import React from "react";
import { useLoaderData } from "react-router";

const UpdateService=()=>{

    const data = useLoaderData()
    const service = data.result;

    console.log("service-updated:",service)


    const handleUpdated =(e)=>{

         e.preventDefault()

        const formData ={
            serviceName: e.target.serviceName.value,
            category: e.target.category.value,
            price:e.target.price.value,
            description:e.target.description.value,
            img:e.target.img.value,
            providerName:e.target.providerName.value,
            email:e.target.email.value,
        };

        fetch(`http://localhost:3000/models/${service._id}`,{

            method: "PUT",
            headers:{
                    "Content-Type":"application/json",
            },
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })


    }

    return(
        <div className="flex justify-center items-center p-20">
                    <form  onSubmit={handleUpdated} action="">
        
                    <fieldset className="min-w-xs fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <legend className="fieldset-legend">Update Service</legend>
                        
                        <label className="label">Service Name</label>
                        <input 
                        type="text"
                        defaultValue={service.serviceName}
                        name="serviceName" 
                        className="input" 
                        placeholder="service Name" 
                        />
        
                        <label className="label">Category</label>
                        <input 
                        type="text" 
                        defaultValue={service.category}
                        name="category"
                        className="input" 
                        placeholder="Category" />
        
                        <label className="label">Price</label>
                        <input 
                        type="text"
                        defaultValue={service.price}
                        name="price" 
                        className="input" 
                        placeholder="Price"/>
        
                        <label className="label">Description</label>
                        <input 
                        type="text"
                        defaultValue={service.description}
                        name="description" 
                        className="input h-[100px]" 
                        placeholder="Description" />
        
        
                        <label className="label">Image URL</label>
                        <input 
                        type="text" 
                        defaultValue={service.img}
                        name="img"
                        className="input" 
                        placeholder="Image URL" />
                       
                        
                        <label className="label">Provider Name</label>
                        <input 
                        type="text"
                        defaultValue={service.providerName}
                        name="providerName" 
                        className="input" 
                        placeholder="Provider Name" />
                        
                        <label className="label">Email</label>
                        <input 
                        type="email"
                        defaultValue={service.email}
                        name="email" 
                        className="input" 
                        placeholder="Email" />
        
                        <button type="submit" className="btn btn-neutral mt-4">Update Service</button>
                    </fieldset>
        
                    </form>
                </div>
    )



}

export default UpdateService;