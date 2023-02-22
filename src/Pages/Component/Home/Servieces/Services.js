import React from 'react';
import imageOne from '../../../../assets/images/fluoride.png';
import imageTwo from '../../../../assets/images/cavity.png';
import imageThree from '../../../../assets/images/whitening.png';
import Service from '../Service/Service';

const Services = () => {

    const servicesData = [
        {
            id:1,
            serviceName:'Fluoride Treatment',
            image:imageOne,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:2,
            serviceName:'Cavity Filling',
            image:imageTwo,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:3,
            serviceName:'Teeth Whitening',
            image:imageThree,
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]


    return (
        <div className='my-14'>
            <h3 className='text-center text-primary lg:text-xl' >Our Services</h3>
            <h2 className='text-center lg:text-3xl  text-xl' > Services We Provided</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-5' >
                {
                    servicesData.map(service => <Service 
                        key={service.id}
                        service={service}

                        />)
                }
            </div>

        </div>
    );
};

export default Services;