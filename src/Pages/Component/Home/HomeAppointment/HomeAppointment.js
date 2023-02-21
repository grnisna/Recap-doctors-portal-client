import React from 'react';
import bgAppointment from '../../../../assets/images/appointment.png';
import doctor from '../../../../assets/images/doctor.png';


const HomeAppointment = () => {
    return (
        <div className="hero g-base-100" style={{
            background:`url(${bgAppointment})`,
            backgroundSize:'cover',

        }} >
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mx-auto lg:block hidden ">
        <img
          src={doctor}
          className="  max-w-lg mx-auto lg:mb-[-18px] "
          alt="treatetment"
        />
        </div>
        <div className="w-1/2 py-10 lg:py-none text-white ">
          <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <button className=" btn bg-gradient-to-r from-primary to-secondary hober:from-secondary hover:to-primary border-base-100 border-none text-white animate-pulse hover:animate-none ">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default HomeAppointment;