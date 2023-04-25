import React, { useEffect, useState } from "react";
import BookingAppointment from "../BookingAppointment/BookingAppointment";
import AvailableOptions from "./AvailableOptions/AvailableOptions";

const AvailableAppointments = ({ selectedDate, footer }) => {
  const [options, setOptions] = useState([]);
  const [treatement, setTreatement] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => {
        setOptions(data);
      });
  }, []);

  return (
    <section>
      <div className="my-6">{footer}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6 ">
        {options.map((option) => (
          <AvailableOptions
            key={option._id}
            availableOption={option}
            setTreatement={setTreatement}
          />
        ))}
      </div>

      {treatement && <BookingAppointment treatement={treatement} selectedDate={selectedDate} setTreatement={setTreatement} />}
    </section>
  );
};

export default AvailableAppointments;
