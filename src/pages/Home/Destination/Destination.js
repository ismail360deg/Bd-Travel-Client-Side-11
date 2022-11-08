import React from 'react';

const Destination = () => {
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
                    <p className="text-sm sm:text-base">Clients</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                    <p className="text-sm sm:text-base">Followers on social media</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
                    <p className="text-sm sm:text-base">Guide Place</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">45</p>
                    <p className="text-sm sm:text-base">Countries</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
                    <p className="text-sm sm:text-base">Years of experience</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">7</p>
                    <p className="text-sm sm:text-base">Work place</p>
                </div>
            </div>
        </section>
    );
};

export default Destination;