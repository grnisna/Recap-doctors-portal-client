import React from "react";

const Reviews = ({ review }) => {
  const { name, image, description, location } = review;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{description}</p>

        {/* -----------------------------------------
      
        
        
        
        
        ----- */}

        {/* <div className="flex justify-evenly itmes-center my-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} alt="" />
            </div>
          </div>

          <div></div>
          <div>
            <h1 className="text-2xl">{location}</h1>
            <h1>{name}</h1>
          </div>
        </div> */}

        <div className="card-actions ">
          <img src={image} className="w-20" alt="" />
          <div>
            <h1 className="text-2xl">{location}</h1>
            <p>{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
