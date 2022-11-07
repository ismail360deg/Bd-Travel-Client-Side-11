import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import ServicesCard from '../ServicesCard/ServicesCard';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesCard></ServicesCard>
            <Destination></Destination>
            <Team></Team>
        </div>
    );
};

export default Home;