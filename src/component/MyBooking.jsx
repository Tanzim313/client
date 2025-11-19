import { div, tr } from "framer-motion/client";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthContext";
import Swal from "sweetalert2";


const MyBooking =()=>{

    const {user} = use(AuthContext);
    const [booking,setBooking] = useState([]);

    useEffect(()=>{
        if(!user?.email) return;

        fetch(`http://localhost:3000/booking/${user.email}`)
        .then((res)=>res.json())
        .then((data)=>setBooking(data.result))
        .catch((err)=>console.log(err));
    },[user]);

    const handleDelete2 =(id)=>{
            
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

    fetch(`http://localhost:3000/booking/${id}`,{
    
                method: "DELETE",
                headers:{
                        "Content-Type":"application/json",
                },
    
            })
            .then(res=>res.json())
            .then(data=>{
    
    
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
                            <th>Booking</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                <tbody>
                    {booking.map((item,id)=>(
                        <tr key={item._id}>
                            <td>{id+1}</td>
                            <td>{item.serviceDetails?.serviceName}</td>
                            <td>{item.price}</td>
                            <td>{item.bookingDate}</td>

                            <td>
                                <button 
                                    onClick={()=>handleDelete2(item._id)}
                                    className="btn btn-sm bg-red-500 text-white">
                                    Cancel
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

export default MyBooking;