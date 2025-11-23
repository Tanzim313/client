import React, { useEffect, useState } from "react";
import HeroSlider from "../component/HeroSlider";
import ServiceApp from "./ServiceApp";
import WhyChooseUs from "./WhyChooseUs";
import CoustomerRev from "./CoustomerRev";
import { motion, useScroll } from "framer-motion";
import { useLoaderData } from "react-router";
import Loader from "./Loader";



const Home =()=>{

    
    const data = useLoaderData() ;


    console.log("datath:",data);

    const [reviews,setReviews] = useState([]);
    const [topServices,setTopServices] = useState([]);

    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        
        setLoading(true);


        fetch("https://serveron.vercel.app/reviews")
        .then(res=>res.json())
        .then(dataRe=>{
             console.log("dataRe:",dataRe.result)
            setReviews(Array.isArray(dataRe.result)?dataRe.result:[]);

            setTimeout(()=>{
                setLoading(false);
            },1200)
        })

    },[]);

    useEffect(()=>{
        
    if(!loading) return;


        const serviceRating = data.map(service=>{
            const matchReviews = reviews.filter(
                r => r.serviceId === service._id
            );

            const avgRating = 
            matchReviews.length>0 
                ?matchReviews.reduce((sum,r)=>sum+r.rating,0)/matchReviews.length:0;

             console.log(`${service.serviceName} - avg Rating:`, avgRating);

            return {...service,averageRating:avgRating};
        });

        const topS = serviceRating
        .sort((a,b)=>b.averageRating-a.averageRating)
        .slice(0,6);

        setTopServices(topS);

        

    },[reviews,data,loading]);

    if (loading) {
        return (
            <Loader/>
        );
    }

    return(
        <motion.div>

            <HeroSlider></HeroSlider>

            <div className="p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-40 mb-40">
                        {topServices.map(service => <ServiceApp key={service._id} service={service}></ServiceApp> )}
            </div>

            <div className="flex flex-col justify-center items-center">

                <WhyChooseUs></WhyChooseUs>

                <CoustomerRev></CoustomerRev>

            </div>

        </motion.div>
    )


}

export default Home;