import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Authprovider/AuthContext";


const MyService =()=>{
    
    const {user} = use(AuthContext);
    const[services,setServices] = useState([]);
    
    
    console.log(user)
    console.log(services)


    useEffect(()=>{
        if(!user?.email) return;

        fetch(`http://localhost:3000/models/email/${user.email}`)
        .then(res=>res.json())
        .then(data=>setServices(data.result))
        .catch(err=>console.log(err));
    },[user]);


    return(

         <div className="mt-20 px-5 mb-20">
                    <h1 className=" text-center mb-10 text-xl font-bold">My Booking</h1>
        
                    <div className="p-2 border-2">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr className="">
                                    <th>Serial_on</th>
                                    <th>Service Name</th>
                                    <th>Price</th>
                                    <th>Update service</th>
                                    <th>Delete service</th>
                                </tr>
                            </thead>
        
                        <tbody>
                            {services.map((service,id) => (
                                <tr key={service._id}>
                                    <td>{id+1}</td>
                                    <td>{service.serviceName}</td>
                                    <td>{service.price}</td>
        
                                    <td>
                                        <button className="btn btn-sm bg-cyan-500 text-white">
                                            Update
                                        </button>
                                    </td>

                                     <td>
                                        <button className="btn btn-sm bg-red-500 text-white">
                                            Delete
                                        </button>
                                    </td>


                                </tr>
                            ))}
                        </tbody>
        
        
                        </table>
        
                    </div>
        
                </div>

    )

}

export default MyService;

