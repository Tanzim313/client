import { div } from "framer-motion/client";
import React, { useState } from "react";

const Review =({isOpen,setIsOpen,selectedBook,user})=>{


        const [rating,setRating] = useState(5);
        const [message,setMessage] = useState("");


        if(!isOpen||!selectedBook) return null;


        const submitReview=(e)=>{
            e.preventDefault();

            fetch(`https://serveron.vercel.app/reviews`,{
                method:"POST",

                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    serviceId: selectedBook.serviceId,
                    rating:Number(rating),
                    message,
                    userName:user.displayName,
                    userEmail: user.email,
                    userPhoto: user.photoURL,
                    date: new Date(),
                })
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log("Review saved:",data);
                setIsOpen(false);
            })
            .catch((err)=>console.log(err))
        };


    return(
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
            <form 
            onSubmit={submitReview}
            className="bg-white w-80 p-5 rounded shadow-md"
            >
                <h2 className="text-lg font-bold mb-3">
                    Review:{selectedBook?.serviceDetails?.serviceName}
                </h2>

                <label className="font-semibold text-sm">Rating(1-5)</label>
                <input
                    type="number"
                    min="1"
                    max="5"
                    className="input input-bordered w-full mb-3"
                    value={rating}
                    onChange={(e)=>setRating(e.target.value)}
                />

                <label className="font-semibold text-sm ">Your Review</label>
                <textarea
                    className="textarea textarea-bordered w-full mb-3" 
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                ></textarea>

                <button className="btn btn-primary w-full">submit</button>

                <button
                    className="btn btn-error w-full mt-2"
                    onClick={()=>setIsOpen(false)}
                    type="button"
                >
                    close
                </button>
            </form>
    </div>
    )
}

export default Review;