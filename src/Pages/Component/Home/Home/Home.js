import React from 'react';
import Banner from '../Banner/Banner';
import ChildCard from '../ChildCard/ChildCard';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import HomeContact from '../HomeContact/HomeContact';
import HomeTestimonial from '../HomeTestimonial/HomeTestimonial';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Servieces/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <InfoCards/>
            <Services/>
            <ChildCard/>
            <HomeAppointment/>
            <HomeTestimonial/>
            <HomeContact/>
        </div>
    );
};

export default Home;