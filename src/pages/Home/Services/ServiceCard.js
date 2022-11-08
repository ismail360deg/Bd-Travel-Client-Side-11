import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className=" bg-slate-300 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <p className='text-2xl text-orange-600 font-semibold'>Price: {name}</p>
                <p >
                    {
                        description.length > 200 ?
                            <>{description.slice(0, 150) + '...'}  </>
                            :
                            description
                    }
                </p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: {price}</p>
                <div className="card-actions justify-end">
                    <Link >
                        <button className="btn btn-primary">Details</button>
                    </Link>
                    {/* <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link> */}
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;