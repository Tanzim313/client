import { div, tr } from "framer-motion/client";
import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthContext";
import Swal from "sweetalert2";


const MyBooking =()=>{

    const {user} = use(AuthContext);
    const [booking,setBooking] = useState([]);

    //Review modal:

    const [isOpen,setIsOpen] = useState(false);
    const [selectedService,setSelectedService] = useState(null);
    const [rating,setRating] = useState(5);
    const [message,setMessage] = useState("");

    
    
    
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


//open modal:

const openReview=(service)=>{
    setSelectedService(service);
    setIsOpen(true);
};


//submit:

const submitReview=(e)=>{
    e.preventDefault();

    fetch(`https://serveron.vercel.app/booking/review/${selectedService._id}`,{
        method:"POST",

        headers:{
            "content-Type":"application/json",
        },

        body: JSON.stringify({
            rating,
            message,
            userId:user.uid,
        }),
    })
    .then((res)=>res.json())
    .then(()=>{
        setIsOpen(false);
    })
    .catch();
}





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
                                    onClick={()=>openReview(item.serviceDetails)}
                                    className="btn btn-sm bg-cyan-500 text-white">
                                    Review
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>


                </table>

            </div>


            {isOpen&&(
            <div className="fixed inset-2 bg-black/30 flex justify-center items-center">
                <form 
                    onSubmit={submitReview}
                    className="bg-white w-80 p-5 rounded shadow-md"
                >
                    <h2 className="text-lg font-bold mb-3">
                        Review:{selectedService?.serviceName}
                    </h2>

                    <label className="font-semibold text-sm">Rating(1-5)star</label>

                    <input 
                    type="number"
                    min="1"
                    max="5"
                    className="input input-bordered w-full  mb-3"
                    value={rating}
                    onChange={(e)=>setRating(e.target.value)}
                    />

                    <label className="font-semibold text-sm ">Your Review</label>

                    <textarea 
                    className="textarea textarea-bordered w-full mb-3"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                    ></textarea>

                    <button className="btn btn-primary w-full">
                        submit
                    </button>

                    <button
                    className="btn btn-error w-full mt-2"
                    onClick={()=>setIsOpen(false)} 
                    type="button">
                        close
                    </button>

                </form>
            </div>
        )}

        </div>

    )

}

export default MyBooking;