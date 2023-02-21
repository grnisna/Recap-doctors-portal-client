import React from 'react';

import clock from '../../../../assets/icons/clock.svg';
import phone from '../../../../assets/icons/phone.svg';
import marker from '../../../../assets/icons/marker.svg';
import InfoCard from '../InfoCard/InfoCard';


const InfoCards = () => {

    const cardData = [
        {
            id:1,
            heading:'Opening Hours',
            description:'Open at 9.00 am to 6.00 pm',
            icon: clock,
            bgClass:'bg-primary'
        },
        {
            id:2,
            heading:'Visits Out Location',
            description:'Narayanganj, Bangladesh',
            icon: marker,
            bgClass:'bg-neutral'
        },
        {
            id:3,
            heading:'Contact us Now',
            description:'+880 1811 509963',
            icon: phone,
            bgClass:'bg-primary'
        },
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                cardData.map(card => <InfoCard 
                
                    key={card.id}
                    card = {card}
                    ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;