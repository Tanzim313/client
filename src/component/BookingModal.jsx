import React, { use, useState } from "react";
import { AuthContext } from "../Authprovider/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const BookingModal =({service,isOpen,onClose})=>{

    const [bookingDate,setBookingDate] = useState("");
    
    const {user} = use(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();

        const bookingData={
            userEmail: user?.email,
            serviceId: service._id,
            bookingDate,
            price: service.price,
        }
   


    fetch("https://serveron.vercel.app/booking",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(bookingData),
    })
    .then((res)=>res.json())
    .then((data)=>{
        onClose();
    })
    .catch((err)=>{
        console.error("Error",err);
    });
};

    if (!isOpen) return null;


    const handleToast=()=>{
        toast.success('Successfully toasted!')
    } 

    return(
        <div className="fixed inset-2 bg-black/30 flex justify-center items-center">

            <div><Toaster/></div>

            <div className="flex flex-col justify-center items-center text-center  w-[280px] bg-white p-6 rounded-md shadow">
                
                <h2 className="text-xl font-bold mb-3 text-center text-black">
                    Book: {service.serviceName}
                </h2>

                <p className="text-center mb-2 text-gray-600">Price:{service.price}</p>

                <form onSubmit={handleSubmit} action="">
                    <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-[250px] border p-4">

                    <label className="label">UserEmail</label>
                    <input type="Email" value={user.email} className="input" readOnly/>

                    
                    <label>Booking Date</label>
                    <input 
                    type="date"
                    value={bookingDate}
                    onChange={(e)=> setBookingDate(e.target.value)}
                    required
                    className="input w-full mb-2"></input>
                   


                    <button onClick={handleToast} type="submit" className="btn btn-neutral mt-4">Confirm Booking </button>
                    
                     <button className="btn btn-neutral mt-4" onClick={onClose}>Close</button>
                    
                    </fieldset>
                    
                    
                </form>
                
            </div>
        </div>
    )


}

export default BookingModal;