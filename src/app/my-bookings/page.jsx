import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getBookingsByUser } from "@/action/booking";
import MyBookingsComponent from "@/components/MyBookings/MyBookingsComponent";

const MyBookingsPage = async () => {
    const session = await getServerSession(authOptions);
  const email = session?.user?.email
 const data = await getBookingsByUser(email)
 const bookings = data?.data?.map((booking)=>({...booking,_id:booking._id.toString()}))
  return <MyBookingsComponent bookings={bookings}/>
}

export default MyBookingsPage