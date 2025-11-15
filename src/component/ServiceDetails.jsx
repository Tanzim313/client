import React, { useState } from "react";
import { useLoaderData } from "react-router";
import {motion} from "framer-motion";
import BookingModal from "./BookingModal";

const ServiceDetails =()=>{

    const data = useLoaderData();
    const model = data?.result;


    const [isModalOpen, setIsModalOpen] = useState(false); 

    const openModal = () => setIsModalOpen(true);
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


    </div>
    )

}


export default ServiceDetails;

