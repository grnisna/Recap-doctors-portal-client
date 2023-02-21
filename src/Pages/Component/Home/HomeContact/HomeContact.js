import React from "react";
import bgImage from "../../../../assets/images/appointment.png";

const HomeContact = () => {
  return (
    
      <div className="hero min-h-screen bg-base-100 " style={{
        backgroundImage: `url(${bgImage})`,
      }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <div className="text-center lg:text-left">
                  <h1 className=" font-bold text-primary text-center">Contact Us</h1>
                  <p className="py-6 text-3xl text-center">Stay Connected With Us</p>
                </div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-primary"  placeholder="Your Comments Here..."></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomeContact;
