import React from "react";
import img3 from "../assets/img3.png";

import {motion} from "framer-motion";
import { Link, useLoaderData } from "react-router";



const ServiceApp =({service})=>{

    const {serviceName,category,price,img,_id} = service
    console.log("service:",service);

    return(
        <div className="">
        
            <motion.div
                key={service._id}
                className="rounded shadow p-4 min-w-[250px] min-h-[400px] border-2 flex flex-col justify-center items-center"
                

                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1,y:0}}
                transition={{duration:0.6,delay:service._id*0.1,ease:"easeOut"}}
                whileHover={{scale:1.15,boxShadow:"0px 10px 25px rgba(0,0,0,0.2)"}}

                animate={{
                        scale: 1,
                        transition: { duration: 1 }
                        }}

            
            >

                <motion.div
                    className="min-w-[200px] p-4"
                    whileHover={{rotate:3,scale:1.05}}
                    transition={{type:"spring",stiffness:200}}
                >
                    <motion.img
                        className="rounded"
                        src={img}
                        alt={serviceName}

                        initial={{scale:0.8,opacity:0}}
                        whileInView={{scale:1.1,opacity:1}}
                        transition={{duration:0.8}}
                    >

                    </motion.img>

                </motion.div>

                 <div>
                    <div className="items-center flex justify-between gap-12 mt-4">
                        <p className="shadow border-2 min-w-20 bg-cyan-600 text-center min-h-7 flex justify-center items-center  rounded-full text-white font-bold">
                            {category}</p>
                        <p className="shadow border-2 min-w-20 bg-cyan-600 text-center min-h-7 flex justify-center items-center  rounded-full text-white font-bold ">
                            {price}</p>
                    </div>

                    <h1 className="text-center mt-4 mb-4 text-3xl font-bold ">
                        {serviceName}
                    </h1>
                </div>
                
              <Link to={`/service-details/${_id}`}>
                <motion.div>
                    <motion.button
                    className="shadow btn bg-[#33ccff] font-bold  w-40 text-white" 
                    whileHover={{
                        scale:1.2,
                    }}
                    whileTap={{
                        scale:1.8,
                    }}
                    >
                        Views Details
                    </motion.button>
                </motion.div>
            </Link>



                
                
            </motion.div>
        
    </div>
    )


}

export default ServiceApp;