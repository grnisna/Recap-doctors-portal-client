import { format } from "date-fns";
import React from "react";

const BookingAppointment = ({ treatement, selectedDate, setTreatement }) => {
  const { name, slots } = treatement;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log( name, email, phone, date,slot);

    setTreatement(null)
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg  font-bold">
            Service Name:{" "}
            <span className="text-secondary font-bold"> {name} </span>
          </h3>
          {/* <h3 className=" font-bold">
              Selected Date:
              <span className="text-secondary"> {date}</span>
            </h3> */}

          <form onSubmit={handleBooking} className="grid grid-col-1 gap-3 mt-10">
            <input type="text" value={date} className="input w-full" disabled />

            <select name='slot' className="select select-bordered w-full ">
              {slots &&
                slots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
            </select>

            <input
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
              name="name"
            />
            <input
              type="email"
              placeholder="Your email"
              className="input w-full input-bordered"
              name='email'
            />
            <input
              type="text"
              placeholder="Your phone number"
              className="input w-full input-bordered"
              name='phone'
            />
            <input
              className=" btn input-bordered btn-success  w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingAppointment;
