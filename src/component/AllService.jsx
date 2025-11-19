import { div } from "framer-motion/client";
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ServiceApp from "./ServiceApp";


const AllService = ()=>{

    const data = useLoaderData()
    console.log("data:",data)

    const [services,setServices] = useState(data);

    const [min,setMin] = useState("");
    const [max,setMax] = useState("");

    const handleFilter = ()=>{

        const filtered = data.filter(service=>service.price >= Number(min)&& service.price <= Number(max));
        setServices(filtered);
    }


return(
    <div>
        <div className="text-3xl text-center font-bold mt-10">
                    All Services
        </div>
        <p className="text-center mb-10">
            Explore All Services
        </p>


        <div className="flex flex-row justify-center items-center gap-2">
            <input 
            type="number" 
            value={min}
            onChange={(e)=> setMin(e.target.value)}
            placeholder="min" 
            className="input w-20 rounded-md" />

            <input 
            type="number"
            value={max} 
            onChange={(e)=> setMax(e.target.value)}
            placeholder="max" 
            className="input w-20  rounded-md" />

            <button 
            onClick={handleFilter}
            className="btn btn-primary text-white">
                Filter
            </button>

        </div>

        <div className="p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-40 mb-40">
            {services.map(service => <ServiceApp key={service._id} service={service}></ServiceApp> )}
        </div>

        
    </div>
 )
}


export default AllService;