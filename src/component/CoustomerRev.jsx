import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";


const CoustomerRev = () => {

    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch("https://serveron.vercel.app/reviews")
        .then(res=>res.json())
        .then(data=>{
            if(data.success){

            const topRev = data.result
            .sort((a,b)=>b.rating-a.rating)
            .slice(0,6);

            setReviews(topRev);
            }

        //setReviews(data.result);
        })
    },[])

  return (
    
    <div className="py-20 bg-[#f0faff] overflow-hidden">
            <motion.h2
                className="text-4xl font-extrabold text-center mb-12 text-[#33ccff]"
                initial={{opacity:0,y:-40}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.7,ease:"easeOut"}}
                viewport={{once:true}}
            >

                What Our <span className="text-black">Customers Say</span>
            </motion.h2>


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


  );
};

export default CoustomerRev;
