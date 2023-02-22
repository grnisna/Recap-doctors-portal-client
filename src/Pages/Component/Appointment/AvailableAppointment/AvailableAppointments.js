import React, { useEffect, useState } from "react";
import AvailableOptions from "./AvailableOptions/AvailableOptions";

const AvailableAppointments = ({ selectedDate, footer }) => {
  const [options, setOptions] = useState([]);
  console.log(options);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      });
  }, []);

  return (
    <div>
      <div className="my-6">{footer}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6 ">
        {options.map((option) => (
          <AvailableOptions key={option._id} availableOption={option} />
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
