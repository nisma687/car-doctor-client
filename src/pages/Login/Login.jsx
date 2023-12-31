
import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg"
// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import { useLocation } from "react-router-dom";

import { useNavigate } from 
"react-router-dom";
import useAuth from "../../hooks/useAuth";
// import axios from 'axios';


const Login = () => {
  const {signIn}=useAuth();
  // const {signIn}=useContext(AuthContext);
  const location=useLocation();
  console.log(location);
  const navigate=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    // console.log(email,password);
    signIn(email,password)
    .then(res=>{
        const loggedInUser=res.user;

        console.log(loggedInUser);
        // const user={email};
        navigate(location?.state? location?.state : "/")
        // get access token
      //  axios.post('https://car-doctor-server-liard-three.vercel.app/jwt',user,{withCredentials:true})
      //  .then(res=>{
      //   console.log(res.data);
      //   if(res.data.success)
      //   {
      //     navigate(location?.state? location?.state : "/")
      //   }

      //  })



    })
    .catch((error)=>{
        console.log(error.message);
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-12">
        <img src={loginImg} alt=""  />
     
     

    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    
      <form
      onSubmit={handleLogin}

       className="card-body">
      <h1 className="text-2xl font-bold text-center">Login </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"
          name="email" 
          placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" 
          name="password"
          placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
        <input type="submit"
        className="btn btn-primary"
         value="Login" />
        
        </div>
      </form>
      <p className="text-center font-semibold mb-4">New to car doctors?<Link to="/signUp" className="underline text-orange-600">Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;