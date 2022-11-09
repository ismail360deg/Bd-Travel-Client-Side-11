import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const ServicesDetails = useLoaderData()
    return (
        <div>
            <div className='mb-8 mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-500'>

                <div className=" bg-slate-300 card card-compact w-96 text-gray-700 shadow-xl">

                    {
                        ServicesDetails.map((ServicesDetails) => (
                            <Link>

                                <figure><img src={ServicesDetails.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <p className='text-2xl text-orange-600 font-semibold'>Price: {ServicesDetails.name}</p>
                                    <p>{ServicesDetails.description}</p>
                                    <p className='text-2xl text-orange-600 font-semibold'>Price: {ServicesDetails.price}</p>
                                </div>
                                <Link to={'/doubleSection'}>
                                    < button className="btn btn-primary">Add Review</button>
                                </Link>
                            </Link>

                        ))}

                </div>
            </div>
        </div >
    );
};

export default ServicesDetails;


// className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"

// className="mb-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-00"








//  <Link
//                                 key={ServicesDetails._id}
//                                 rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
//                                 <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={ServicesDetails.img} alt='' />
//                                 <div className="p-6 space-y-2">
//                                     <h3 className="text-2xl text-orange-600 font-semibold">{ServicesDetails.name}</h3>

//                                     <p>{ServicesDetails.description}</p>

//                                     <span className="text-2xl text-orange-600 font-semibold">{ServicesDetails.price}</span>

//                                 </div>
//                                 <button className="btn btn-primary">Details</button>
//                             </Link>
