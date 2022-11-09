import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='mb-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-500'>
                {
                    services.slice(0, 3).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>
            <div className=" flex justify-center items-start">
                <Link to={'/servicesDetails'}>
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-slate-500 text-gray-200">All Service</button>
                </Link>

            </div>
        </div>
    );
};

export default Services;