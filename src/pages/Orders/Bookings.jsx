
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const {user}=useContext(AuthContext);
    const [orders,setOrders]=useState([]);
   
    const handleDelete=(id)=>{
       
        console.log(id);
        const proceed= confirm('Are you sure you want to delete?');
        if(proceed)
        {
            fetch(`http://localhost:5000/orders/${id}`,
            {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0)
            {
                alert('deleted successfully');
                // window.location.reload();
               const remaining= orders.filter(order=>order._id!==id);
                setOrders(remaining);
            }
        })
        }
    }
    const handleConfirm=(id)=>{
        console.log('confirm',id);
        fetch(`http://localhost:5000/orders/${id}`,
        {
        method:'PATCH',
        headers:{
            'content-type':'application/json'},
        body:JSON.stringify({status:'confirmed'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount >0)
        {
            alert('confirmed successfully');
            const remaining= orders.filter(order=>order._id!==id);
            const confirmed=orders.find(order=>order._id===id);
            confirmed.status='confirmed';
            const newOrders=[...remaining,confirmed];
            setOrders(newOrders);
            
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle the error, show an error message to the user, etc.
      });
    }
    const url=`http://localhost:5000/orders?email=${user?.email}`;
    useEffect(()=>{

        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div>
        <h2 className="text-5xl mt-5 mb-5">
           your Orders: {orders.length}
        </h2>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Date</th>
        <th>Email</th>
        
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        orders.map(order=><BookingRow key={order._id}
            handleDelete={handleDelete}
            handleConfirm={handleConfirm}
             order={order}></BookingRow>)
     }
     
     
    
    </tbody>
   
    
  </table>
</div>
    </div>
    );
};

export default Bookings;