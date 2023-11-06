import axios from "axios";
import { useEffect, useState } from "react";


const useNumber = () => {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        axios.get('https://car-doctor-server-liard-three.vercel.app/number',{withCredentials:true})
        .then(res=>setNumber(res.data))

    }, []);
   return number;
};

export default useNumber;