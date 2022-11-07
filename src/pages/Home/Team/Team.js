import React from 'react';
import team1 from '../../../assets/team1.jpg'
import team2 from '../../../assets/team2.jpg'
import team3 from '../../../assets/team3.jpg'

const Team = () => {
    return (
        <section className="py-6 mb-8 mt-8 bg-gray-600 text-gray-100">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our Team at Your Service</h1>
                <p className="max-w-2xl text-center dark:text-gray-400">All this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teach- ings of the great explorer of the truth, the master-builder of human happiness. No one rejects dislikes or avoids pleasures itself because it is all pleasure but because those who do not know how pursue those who fail their duty through weakness of will, which is the same as saying.</p>
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={team1} />
                        <p className="text-xl font-semibold leading-tight">Ruby Valentina</p>
                        <p className="dark:text-gray-400">IMMIGRATION CONSULTANTS</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={team2} />
                        <p className="text-xl font-semibold leading-tight">Roman Frederick</p>
                        <p className="dark:text-gray-400">REGIONAL MANAGER, OPERATIONS</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={team3} />
                        <p className="text-xl font-semibold leading-tight">Reggie Hunter</p>
                        <p className="dark:text-gray-400">FOUNDER & MANAGING PARTNER</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;