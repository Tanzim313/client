import { div } from "framer-motion/client";
import React from "react";
import { useLoaderData } from "react-router";
import ServiceApp from "./ServiceApp";


const AllService = ()=>{

    const data = useLoaderData()
    console.log("data:",data)


return(
    <div>
        <div className="text-3xl text-center font-bold mt-10">
                    All Services
        </div>
        <p className="text-center mb-10">
            Explore All Services
        </p>

        <div className="p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-40 mb-40">
            {data.map(service => <ServiceApp key={service._id} service={service}></ServiceApp> )}
        </div>

        
    </div>
 )
}


export default AllService;