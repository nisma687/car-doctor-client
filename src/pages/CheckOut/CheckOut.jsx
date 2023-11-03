import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const CheckOut = () => {
    const data=useLoaderData();
    console.log(data);
    const{title,price,_id,img}=data;
    console.log(img);
    const {user}=useContext(AuthContext);
    console.log(user);
    const handleOrder=(e)=>{
        e.preventDefault();
        const form=e.target;
        const FirstName=form.firstName.value;
        const LastName=form.lastName.value;
        const Phone=form.phone.value;
        const Email=form.email.value;
        const payment=form.payment.value;
        const comment=form.comment.value;
        const date=form.date.value;
        console.log(FirstName,LastName,Phone,Email,payment,comment,date);
        const order={
            name:FirstName+' '+LastName,
            email:Email,
            phone:Phone,
            payment:payment,
            comment:comment,
            serviceId:_id,
            title,
            date,
            img
  
        }
        console.log(order);
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type' :'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                alert('Order Successfully Done');
                
                window.location.reload();
            }
        })

    }
    return (
        <div className="mb-5 mt-5">
        
        <div>
        <h2 className="text-xl font-semibold">Book Services:{title}</h2>
        </div>
        <div className="mt-5 mb-5">
        <div className="hero min-h-screen bg-base-200 p-4">
  <div className=" w-1/2 lg:w-3/4 ">
   
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100  ">
      <form onSubmit={handleOrder}
      className="card-body ">
        <div className="form-control flex-row gap-2">
            <div className="w-1/2">
          
            <input type="text" placeholder="First Name" 
            name="firstName"
            className="input input-bordered w-full " required />
            </div>
           <div className="w-1/2">
         
           <input type="text"
              name="lastName"
            placeholder="Last Name" className="input input-bordered w-full" required />
           </div>
           <div className="w-1/2">
         
         <input type="date"
            name="date"
          placeholder="Date of the service" className="input input-bordered w-full" required />
         </div>
        </div>
        <div className="form-control flex-row gap-2 mt-2">
            <div className="w-1/2">
          
            <input type="text"
            name="phone"
             placeholder="Your Phone Number" className="input input-bordered w-full " required />
            </div>
           <div className="w-1/2">
         
           <input type="email"
           defaultValue={user?.email}
           name="email"
           placeholder="Your Email" className="input input-bordered w-full" required />
           </div>
        </div>
        <div className="mt-2 mb-2">
        <input type="text" placeholder="payment"
        name="payment"
        defaultValue={'$'+price}
         className="input input-bordered input-info w-full max-w-full " />
        </div>
        
        <div className="mt-2 mb-2">
        <input type="text" 
        name="comment"
        placeholder="Type here" className="input input-bordered input-info w-full max-w-full " />
        </div>
       
        <div className="form-control mt-6">
          <input type="submit"className="btn btn-primary" value="Order Confirm" />
        
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        </div>
        
    );
};

export default CheckOut;