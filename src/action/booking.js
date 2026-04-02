"use server"
import { dbConnect, collections } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";


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

export const getBookingsByUser = async (email) => {
    // check user exist or not
    const userExist = await (await dbConnect(collections.USERS)).findOne({ email });
    if (!userExist) {
        return {
            success: false,
            message: "User not found"
        }
    }
    try {
        const db = await dbConnect(collections.BOOKING);
        const bookings = await db.find({ email }).toArray();
        return { success: true, data: bookings };
    } catch (error) {
        console.log(error);
        return { success: false, message: "Failed to get bookings" };
    }
}
export const removeBooking = async (id,email) => {
        // check user exist or not
    const userExist = await (await dbConnect(collections.USERS)).findOne({ email });
    if (!userExist) {
        return {
            success: false,
            message: "User not found"
        }
    }
    try {
        const db = await dbConnect(collections.BOOKING);
        const query = { _id: new ObjectId(id), email };
        const result = await db.deleteOne(query);
        return { success: Boolean(result.deletedCount), message: "Booking deleted successfully" };
    } catch (error) {
        console.log(error);
        return { success: false, message: "Failed to delete booking" };
    }
}