import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaUserCheck, FaClock, FaMoneyBillWave } from "react-icons/fa";


const cardVariants = {
    hidden: {opacity:0,y:50},
    visible: (index)=>({
        opacity:1,
        y:0,

        transition:{
            duration:0.6,
            delay:index*0.2,
            type:"spring",
            stiffness:120,
        }
    })
}


const WhyChooseUs = () => {

    const Cards = [
        {
            icon: <FaTools className="text-5xl text-[#33ccff] mx-auto mb-4" />,
            title: "Expert Service providers",
            desc:"Our electricians, plumbers, and cleaners are highly trained and verified professionals.",
        },
        {
            icon:<FaClock className="text-5xl text-[#33ccff] mx-auto mb-4" />,
            title: "Quick Response",
            desc:"Book your service easily and get a fast response from nearby professionals.",
        },
        {
            icon:<FaUserCheck className="text-5xl text-[#33ccff] mx-auto mb-4" />,
            title: "Affordable Pricing",
            desc: "Get transparent and competitive prices without any hidden charges.",
        },{
            icon:<FaMoneyBillWave className="text-5xl text-[#33ccff] mx-auto mb-4" />,
            title:"Customer Satisfaction",
            desc:"100% satisfaction guaranteed — we value your trust and feedback.",
        },
    ];


    return (
        <div className="py-20 bg-[#f9f9f9] text-center overflow-hidden">

            <motion.h2
            className="text-4xl font-extrabold text-[#33ccff] mb-12"
            initial={{opacity:0,y:-50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.8,ease:"easeOut"}}
            viewport={{once:true}}
            >
                Why Choose <span className="text-black">Mr.ServeOn</span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 lg:px-20">
                {Cards.map((card,index)=>(
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition cursor-pointer"
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true}}

                            whileHover={{
                                scale:1.08,
                                rotate: 1,
                                transition:{type:"spring",stiffness:600,damping:10},
                            }}
                        >

                            {card.icon}

                            <h3 className="text-2xl font-bold mb-2 text-[#33ccff]">{card.title}</h3>
                            <p className="text-gray-600 font-semibold">{card.desc}</p>
                            

                        </motion.div>
                ))}

            </div>
        
        </div>
    );
};

export default WhyChooseUs;
