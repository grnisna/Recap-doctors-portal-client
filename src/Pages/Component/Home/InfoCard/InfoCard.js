import React from "react";

const InfoCard = ({card}) => {
    const {heading, description, icon,bgClass} = card;
  return (
    <div className={`card card-side bg-base-100 shadow-xl ${bgClass}  p-6 text-white`}>
      <figure>
        <img
          src={icon}
          alt="Movie"
          className="w-16"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
