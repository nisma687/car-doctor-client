import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate,useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    // console.log(user);
    const location =useLocation();
    //  console.log(location.pathname);
    if(user?.email)
    {
        return children;
    }
    if(loading)
    {
        return <div>
        <progress className="progress w-56"></progress>
        </div>
    }
    return <Navigate state={location.pathname}
     to="/login" replace={true} />;
};

export default PrivateRoute;