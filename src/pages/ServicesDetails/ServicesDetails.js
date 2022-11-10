import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageTitle from '../../contexts/PageTitle';

const ServicesDetails = () => {
    const ServicesDetails = useLoaderData()
    return (
        <>
            <PageTitle title='Service'> </PageTitle>

            <div>

                <div className="mb-8 mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-500 bg-slate-300 card card-compact  text-gray-700 shadow-xl">


                    {
                        ServicesDetails.map((ServicesDetails) => (
                            <Link
                                key={ServicesDetails._id}
                            // to={`/servicesDetails/${ServicesDetails._id}`}
                            >

                                <figure><img src={ServicesDetails.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <p className='text-2xl text-orange-600 font-semibold'>Price: {ServicesDetails.name}</p>
                                    <p>{ServicesDetails.description}</p>
                                    <p className='text-2xl text-orange-600 font-semibold'>Price: {ServicesDetails.price}</p>
                                </div>

                                <Link to={`/doubleSection/${ServicesDetails._id}`}>
                                    < button className="btn btn-primary">All Details</button>
                                </Link>

                            </Link>

                        ))}


                </div>
            </div>
        </>
    );
};

export default ServicesDetails;

