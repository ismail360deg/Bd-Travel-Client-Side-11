import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import Services from '../Services/Services';
import Team from '../Team/Team';
import PageTitle from '../../../contexts/PageTitle'

const Home = () => {
    return (
        <div>
            <PageTitle title='Home'> </PageTitle>
            <Banner></Banner>
            <Services></Services>
            <Destination></Destination>
            <Team></Team>
        </div>
    );
};

export default Home;