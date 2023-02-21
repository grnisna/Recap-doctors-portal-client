import React from 'react';
import qoute from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import Reviews from '../Reviews/Reviews';



const HomeTestimonial = () => {

    const reviews = [
        {
            id:1,
            name:'Winsone Herry',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',           
            image:people1,
            location:'California'
        },
        {
            id:2,
            name:'Dollar Mahmud',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',    
          
            image:people2,
            location:'California'
        },
        {
            id:3,
            name:'Mx Sie ST',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',    
            
            image:people3,
            location:'California'
        },
    ]



    return (
        <div className='my-12' >

            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl text-primary'>Testimonials</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={qoute} className='w-32' alt="" />
                </div>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3' >
                {
                    reviews.map(review => <Reviews 

                        key={review.id}
                        review={review}

                        />)
                }

            </div>
        </div>
    );
};

export default HomeTestimonial;