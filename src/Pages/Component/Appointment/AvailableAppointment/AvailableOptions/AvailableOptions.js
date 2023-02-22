import React from "react";

const AvailableOptions = ({ availableOption }) => {
  const { name, slots } = availableOption;

  return (
    <div className="card shadow-xl">
      <div className="card-body lg:w-96 w-52 mx-auto text-center">
        <h2 className="text-xl font-bold text-primary text-center ">{name}</h2>
        <p>{ slots.length > 0 ? slots[0] : "Try another day" }</p>
        <p>{ slots.length === 0 ? 'No space' : `${slots.length} ${ slots.length > 1 ? 'spaces' : " space"}`    } available </p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">BOOK APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default AvailableOptions;
