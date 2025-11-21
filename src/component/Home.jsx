import React from "react";
import HeroSlider from "../component/HeroSlider";
import ServiceApp from "./ServiceApp";
import WhyChooseUs from "./WhyChooseUs";
import CoustomerRev from "./CoustomerRev";
import { motion, useScroll } from "framer-motion";
import { useLoaderData } from "react-router";


const Home =()=>{
    
    const data = useLoaderData();

    return(
        <motion.div>

            <HeroSlider></HeroSlider>

            <div className="p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-40 mb-40">
                        {data.map(service => <ServiceApp key={service._id} service={service}></ServiceApp> )}
            </div>

            <div className="flex flex-col justify-center items-center">

                <WhyChooseUs></WhyChooseUs>

                <CoustomerRev></CoustomerRev>

            </div>

        </motion.div>
    )


}

export default Home;