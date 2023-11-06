import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{

        fetch('https://car-doctor-server-liard-three.vercel.app/services')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setServices(data);
        })


    },[])
    return (
        <div>
            <div className="space-y-2">
                <h3 className="text-xl text-orange-600 font-semibold text-center">Service</h3>
                <h1 className="text-4xl text-black font-semibold text-center">Our Service Area</h1>
                <p className="text-center font-extralight">The majority have suffered alteration in some form, by injected humour,
                <br></br>
                 or randomised words which do not look even slightly believable. </p>


            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1
            gap-3 ">
               
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;