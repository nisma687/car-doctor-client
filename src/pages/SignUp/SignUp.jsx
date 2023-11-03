import { Link } from "react-router-dom";
import loginImg from "../../../assets/images/login/login.svg"
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const SignUp = () => {
  const {createUser}=useContext(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const confirmPassword=form.confirmPassword.value;
        const name=form.name.value;
        console.log(email,confirmPassword,name);
        createUser(email,confirmPassword)
        .then(res=>{
            const user=res.user;
            console.log(user);
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
            onSubmit={handleSignUp}
      
             className="card-body">
            <h1 className="text-2xl font-bold text-center">SignUp </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"
                name="name" 
                placeholder="Your Name" className="input input-bordered" required />
              </div>
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
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" 
                name="confirmPassword"
                placeholder="Confirm password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                
              <input type="submit"
              className="btn btn-primary"
               value="Sign Up" />
              
              </div>
            </form>
            <p className="text-center font-semibold mb-4">Already Have an account?<Link to="/login" className="underline text-orange-600">Log In</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;