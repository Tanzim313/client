import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    role: "Home Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I booked a plumbing service through Mr.ServeOn and the plumber arrived within 30 minutes. Excellent service and very professional!",
  },
  {
    id: 2,
    name: "Fatema Akter",
    role: "Office Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The cleaning team did an amazing job! My office looks spotless now. Highly recommended for anyone looking for trusted cleaners.",
  },
  {
    id: 3,
    name: "Mehedi Hasan",
    role: "Shop Owner",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Affordable and quick! I booked an electrician and he fixed everything perfectly. I’ll definitely use this service again.",
  },
];

const CoustomerRev = () => {
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
                {testimonials.map((item,index)=>(
                    <motion.div
                        key={item.id}
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
                                src={item.image}
                                alt={item.name}
                                className="w-24 rounded-full mb-4 border-4 border-[#33ccff] shadow-md "

                                whileHover={
                                    {
                                        scale:1.2,

                                    }
                                }

                                transition={{type:"spring",stiffness:400}}
                            ></motion.img>

                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <p className="text-sm text-gray-500 mb-3">{item.role}</p>
                            <p className="text-gray-700 italic leading-relaxed">
                                {item.text}
                                </p>
                        </div>

                    </motion.div>
                ))}

            </div>
    </div>


  );
};

export default CoustomerRev;
