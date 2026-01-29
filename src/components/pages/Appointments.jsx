
import AppointmentCard from '../home/appointmenttable/AppointmentCard';
import AppointmentTable from '../home/appointmenttable/Appointmenttable';
import BookingLink from '../home/appointmenttable/BookingLink';



const Appointments = () => {
    return (
        <div className='w-full '>
     <AppointmentCard></AppointmentCard>
   <BookingLink></BookingLink>
            <AppointmentTable></AppointmentTable>
        </div>
    );
};

export default Appointments;