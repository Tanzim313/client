import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {motion} from "framer-motion";
import BookingModal from "./BookingModal";
import { AuthContext } from "../Authprovider/AuthContext";
import Swal from "sweetalert2";
import { div } from "framer-motion/client";
import { FaQuoteLeft } from "react-icons/fa";
import Loader from "./Loader";



const ServiceDetails =()=>{

    const data = useLoaderData();
    const model = data?.result;
   
    

    const {user} = useContext(AuthContext);
    const [loading,setLoading]=useState(true);


    const [isModalOpen, setIsModalOpen] = useState(false); 

    const openModal = () =>{
        
        if(model.created_by === user?.email){

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });

            return;
        }
        
        setIsModalOpen(true);
    }
   
    const closeModal = () => setIsModalOpen(false);

    const {
        serviceName,
        category,
        price,
        description,
        img,
        providerName,
        email
    } = model;

    console.log("modelData:",model)


    const [reviews,setReviews] = useState([]);

    const serviceId = model._id;

    useEffect(()=>{
        
        setLoading(true); 

        fetch(`https://serveron.vercel.app/reviews/${serviceId}`)
        .then(res=>res.json())
        .then(data=>{
            console.log("revth:",data);
            setReviews(data.reviews);

            setLoading(false);
        })
        .catch(err=>{
            setLoading(false);
        })
    },[serviceId])

    if (loading) {
        return (
            <Loader/>
        );
    }

    return(
        <div className="mt-20 mb-20 sm:px-10">
        <div className=" flex flex-col sm:flex-row  justify-center items-center">
            <div>
                <img className="w-[300px] h-[500px]" src={img} alt="" />
            </div>

            <div className="w-[300px] h-[500px] p-4 text-black bg-white flex flex-col justify-center items-center text-center">
                <h1 className="text-xl font-bold ">{serviceName}</h1>
                <p className="mt-2 mb-2">{description}</p>

            <div className="flex justify-between mb-4 mt-4 gap-20 ">
                <h5 className="bg-cyan-500 p-1 rounded-md text-black font-bold">{category}</h5>
                <h5  className="bg-cyan-500 p-1 rounded-md text-black font-bold">{price}</h5>
            </div>

                <p className="text-center text-xl font-bold">{providerName}</p>
                <p className="text-center">{email}</p>

           <motion.button
                    className="mt-4 shadow btn bg-[#33ccff] font-bold  w-40 text-white" 
                    whileHover={{
                        scale:1.2,
                    }}
                    whileTap={{
                        scale:1.8,
                    }}

                    onClick={openModal}
                    
                    >
                    Book now
            </motion.button>
           
           
            </div>

        </div>

        <BookingModal

        service={model}
        isOpen={isModalOpen}
        onClose={closeModal}
      />


      <div>

        <h2 className="text-center mt-10 mb-10 font-bold text-2xl">Customer Reviews</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20">
                        
                        {reviews.map((item,index)=>(
                            <motion.div
                                key={item._id}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition relative overflow-hidden border border-[#e0f7ff]"
                                initial={{opacity:0,y:60}}
                                whileInView={{opacity:1,y:0}}
                                transition={{
                                    duration:0.6,
                                    delay:index*0.2,
                                    type:"spring",
                                    stiffness:120,
                                }}
        
                                viewport={{once:true}}
                                whileHover={{
                                    scale:1.05,
                                    rotate:1,
                                    transition:{type:"spring",stiffness:500,damping:12},
                                }}
                            >
                                <motion.div
                                    className="absolute top-4 left-4"
                                    animate={{rotate:[0,5,-5,0]}}
                                    transition={{
                                        repeat:Infinity,
                                        duration:5,
                                        ease:"easeInOut",
                                    }}
                                >
        
                                    <FaQuoteLeft className="text-4xl text-[#33ccff] opacity-20" />
        
                                </motion.div>
        
        
                                <div className="flex flex-col items-center text-center mt-8">
                                    <motion.img
                                        src={item.userPhoto}
                                        alt={item.serviceName}
                                        className="w-24 rounded-full mb-4 border-4 border-[#33ccff] shadow-md "
        
                                        whileHover={
                                            {
                                                scale:1.2,
        
                                            }
                                        }
        
                                        transition={{type:"spring",stiffness:400}}
                                    ></motion.img>
        
                                    <h3 className="text-xl font-semibold">{item.userName}</h3>
                                    <p className="text-sm text-gray-500 mb-3">{item.rating}</p>
                                    <p className="text-gray-700 italic leading-relaxed">
                                        {item.message}
                                        </p>
                                </div>
        
                            </motion.div>
                        ))}
        
                    </div>

      </div>


    </div>
    )

}


export default ServiceDetails;

