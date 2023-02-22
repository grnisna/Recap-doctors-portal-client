import React from "react";
import treatement from '../../../../assets/images/treatment.png';



const ChildCard = () => {
  return (
    <div className="hero bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 mx-auto">
        <img
          src={treatement}
          className="  mx-auto rounded-lg shadow-2xl"
          alt="treatetment"
        />
        </div>
        <div className="lg:w-1/2">
          <h1 className="lg:text-5xl text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ChildCard;
