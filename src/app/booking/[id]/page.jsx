import BookingForm from "@/components/Booking/BookingComponent";
import { services } from "@/data/services";

const BookingPage = async({params}) => {
    const {id}= await params
    const service = services.find((service) => service.id === parseInt(id));
   
  return <BookingForm service={service}/>
}

export default BookingPage