import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    console.log(service);
    const {img,price,title,_id} = service;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="image" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p className="text-xl text-orange-500">Price: ${price}</p>
    <div className="card-actions justify-between">
     <Link to={`/checkout/${_id}`}>
     <button className="btn btn-primary">Book Now</button>
     </Link>
      <button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;