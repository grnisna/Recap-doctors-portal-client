import React from "react";

const InfoCard = ({card}) => {
    const {heading, description, icon,bgClass} = card;
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}  lg:p-4 p-2 text-white`}>
      <figure>
        <img
          src={icon}
          alt="Movie"
          className="lg:w-16 w-14"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-center">{heading}</h2>
        <p className="lg:text-l text-center text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
