import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, services, price, email, serviceId } = review;
    const [reviewService, setReviewService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [serviceId])



    return (

        <div className="mb-8 mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  bg-slate-300 card card-compact  text-gray-700 shadow-xl">

            {
                reviewService?.img &&
                <figure><img src={reviewService.img} alt="Shoes" /></figure>
            }

            <div className="card-body">
                <p className='text-2xl text-orange-600 font-semibold'> {services}</p>
                <p>{price}</p>
                <p className='text-2xl text-orange-600 font-semibold'>{email}</p>
            </div>

            <Link>
                < button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
            </Link>

        </div>


    );
};

export default ReviewRow;