import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className=" bg-slate-300 card card-compact w-96 text-gray-700 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <p className='text-2xl text-orange-600 font-semibold'> {name}</p>
                <p >
                    {
                        description.length > 100 ?
                            <>{description.slice(0, 100) + '...'}  </>
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