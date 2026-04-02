"use server"
import { dbConnect, collections } from "@/lib/dbConnect"


export const createBooking = async (bookingData) => {
    // check user exist or not
    const userExist = await (await dbConnect(collections.USERS)).findOne({ email: bookingData.email });
    if (!userExist) {
        return {
            success: false,
            message: "User not found"
        }
    }
    try {
        const db = await dbConnect(collections.BOOKING);
        const newBooking = { ...bookingData, status: "pending", createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
        const result = await db.insertOne(newBooking);
        return { success: Boolean(result.insertedId), message: "Booking created successfully" };
    } catch (error) {
        console.log(error);
        return { success: false, message: "Failed to create booking" };
    }
}
