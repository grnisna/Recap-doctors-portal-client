import React from "react";
import chair from "../../../../assets/images/chair.png";
import bgImage from "../../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div className="hero lg:h-[500px]" style={{
        backgroundImage:`url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div
        className="hero-content flex-col lg:flex-row-reverse "
        
      >
        <div className="">
          <img
            src={chair}
            className=" rounded-lg shadow-2xl"
            alt="dentist chair"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className=" btn bg-gradient-to-r from-primary to-secondary hober:from-secondary hover:to-primary border-base-100 hover:border-white text-white animate-pulse hover:animate-none ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
