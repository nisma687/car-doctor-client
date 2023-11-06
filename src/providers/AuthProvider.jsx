import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout=()=>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser => {
                const userEmail=currentUser?.email || user?.email;

                const loggedUser={email:userEmail};
                setUser(currentUser);
                console.log('currentUser is:',currentUser);
                setLoading(false);
                // if user exists then issue a token
                if(currentUser)
                {
                    
                    axios.post('https://car-doctor-server-liard-three.vercel.app/jwt',loggedUser,{withCredentials:true})
                    .then(res=>{
                        console.log('token response',res.data)
                    })
                    // console.log(currentUser);
                }
             else
             {
                axios.post('https://car-doctor-server-liard-three.vercel.app/logout',
                loggedUser,
                {withCredentials:true})
                .then(res=>{
                    console.log('logout response',res.data)
                })
             }
           
          });
        return ()=>{
            return unsubscribe();
        }


    },[])
  
    const authInfo={
        user,loading,createUser,signIn,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;