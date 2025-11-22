import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Authprovider/AuthContext";
import Swal from "sweetalert2";
import Loader from "./Loader";


const MyService =()=>{
    
    const {user} = use(AuthContext);
    const[services,setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    
    console.log(user)
    console.log(services)


    useEffect(()=>{
        if(!user?.email) return;

        setLoading(true);

        fetch(`https://serveron.vercel.app/models/email/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false);
            setServices(data.result);
        })
        .catch(err=>{
            setLoading(false);
            console.log(err)
        });
    },[user]);


    const navigate = useNavigate()


    const handleDelete =(e)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
}).then((result) => {
    if (result.isConfirmed) {

        fetch(`https://serveron.vercel.app/models/${e}`,{

            method: "DELETE",
            headers:{
                    "Content-Type":"application/json",
            },

        })
        .then(res=>res.json())
        .then(data=>{

            navigate('/service')


            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });

            console.log(data)
        })
        .catch(err=>{
            console.log(err)
        })

        

    }
    });

}

    if (loading) {
        return <Loader />;
    }


    return(

         <div className="mt-20 px-5 mb-20">
                    <h1 className=" text-center mb-10 text-xl font-bold">My Services</h1>
        
                    <div className="p-2 border-2 overflow-x-auto">
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
                                    <Link to={`/update-service/${service._id}`}>
                                        <button className="btn btn-sm bg-cyan-500 text-white">
                                            Update
                                        </button>
                                    </Link>
                                    </td>

                                     <td>
                                        <button
                                        onClick={()=>handleDelete(service._id)}
                                         className="btn btn-sm bg-red-500 text-white">
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

