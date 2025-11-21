import { div, tr } from "framer-motion/client";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthContext";
import Swal from "sweetalert2";
import Review from "./Review";


const MyBooking =()=>{

    const {user} = use(AuthContext);
    const [booking,setBooking] = useState([]);

    
    
    
    useEffect(()=>{
        if(!user?.email) return;

        fetch(`https://serveron.vercel.app/booking/${user.email}`)
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

    fetch(`https://serveron.vercel.app/booking/${id}`,{
    
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

//modal:

const [isOpen,setIsOpen] = useState(false);
const [selectedBook,setSelectedBook] = useState(null);


const handleReview = (item) => {

    setSelectedBook(item);
    setIsOpen(true);
  
};


   




    return(

        <div className="mt-20 px-5 mb-20 ">
            <h1 className=" text-center mb-10 text-xl font-bold">My Booking</h1>

            <div className="p-2 border-2 overflow-x-auto">
                <table className=" table table-zebra w-full">
                    <thead>
                        <tr className="">
                            <th>Serial_on</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Booking</th>
                            <th>Action</th>
                            <th>Review</th>
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

                            <td>
                                
                                <button
                                    onClick={()=>handleReview(item)}
                                    className="btn btn-sm bg-cyan-500 text-white">
                                    Review
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <Review
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedBook={selectedBook}
            user={user}>
        </Review>


        </div>

    )

}

export default MyBooking;