import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Destination></Destination>
            <Team></Team>
        </div>
    );
};

export default Home;