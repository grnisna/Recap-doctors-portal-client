import React from "react";

const AvailableOptions = ({ availableOption, setTreatement }) => {
  const { name, slots } = availableOption;

  return (
    <div className="card shadow-xl">
      <div className="card-body lg:w-96 w-52 mx-auto text-center">
        <h2 className="text-xl font-bold text-primary text-center ">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length === 0
            ? "No space"
            : `${slots.length} ${slots.length > 1 ? "spaces" : " space"}`}{" "}
          available{" "}
        </p>
        <div className="card-actions justify-center">
          <label 
          htmlFor="my-modal-3" 
          className="btn btn-primary"
          onClick={()=> setTreatement(availableOption)}
          disabled = {slots.length === 0}
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableOptions;
