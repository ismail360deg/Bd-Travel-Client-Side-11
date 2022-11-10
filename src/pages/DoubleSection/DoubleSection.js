import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const DoubleSection = () => {
    const { _id, name, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.fullName.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            serviceId: _id,
            services: name,
            price,
            email,
            message: message
        }

        // if (message.length > 50) {
        //     alert('Message should be  50 characters or longer')
        // }
        // else {

        // }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))

    }

    return (
        <section className=" mb-36 py-6 bg-gray-500 text-gray-50">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <h1 className="text-2xl text-gray-900 font-bold">{name}</h1>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <span>{description}</span>
                        </p>
                        <p className="flex items-center text-2xl text-gray-900 font-bold">
                            <span>Price: {price}</span>
                        </p>
                        <Link to={'/servicesDetails'}>
                            <button className="btn btn-primary mt-4">Back Page</button>
                        </Link>
                    </div>
                </div>

                {
                    user?.uid ?

                        <>
                            <form onSubmit={handleReview} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                                <label className="block">
                                    <span className="mb-1">Product Name</span>
                                    <input
                                        name='fullName'
                                        type="text"
                                        placeholder="Product Name"
                                        className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800" />
                                </label>

                                <label className="block">
                                    <span className="mb-1">Email address</span>
                                    <input
                                        name='email'
                                        type="email"
                                        defaultValue={user?.email}
                                        placeholder="Your Email"
                                        className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
                                        readOnly />
                                </label>

                                <label className="block">
                                    <span className="mb-1">Message</span>
                                    <textarea
                                        name='message' rows="3" placeholder="Your Message" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800" required></textarea>
                                </label>

                                <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
                            </form>

                        </>
                        :
                        <>




                            <Link to='/login' className='mr-5 font-semibold hover:text-gray-900 btn btn-primary mt-4'>Please login to add a review</Link>

                        </>
                }

            </div>
            <Review></Review>
        </section>
    );
};

export default DoubleSection;


