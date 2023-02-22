import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointment/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState( new Date());

    let footer = <p  className='text-center text-primary text-3xl font-bold' >Please pick a day.</p>;
    if (selectedDate) {
      footer = <p className='text-center text-secondary text-3xl font-bold' > You picked : {format(selectedDate, 'PP')}.</p>;
    }
    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <AvailableAppointments selectedDate={selectedDate} footer={footer}  />
        </div>
    );
};

export default Appointment;