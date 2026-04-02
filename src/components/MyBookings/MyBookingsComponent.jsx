'use client';

import { removeBooking } from '@/action/booking';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const MyBookingsComponent = ({ bookings = [] }) => {
    const router = useRouter();
    const handleCancelBooking = (bookingId, email) => {
        Swal.fire({
            title: "Cancel Booking?",
            text: "Are you sure you want to cancel this booking? This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Cancel Booking",
            cancelButtonText: "Keep Booking"
        }).then(async (result) => {
            if (result.isConfirmed) {
                // TODO: Call your cancel API here
                const res = await removeBooking(bookingId, email);
                if (res.success) {
                    Swal.fire({
                        title: "Cancelled!",
                        text: "Your booking has been cancelled successfully.",
                        icon: "success"
                    });
                    router.refresh();
                } else {
                    Swal.fire({
                        title: "Failed!",
                        text: "Your booking could not be cancelled.",
                        icon: "error"
                    });
                }

            }
        });
    };

    const getStatusStyle = (status) => {
        switch (status?.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-700 border-yellow-300';
            case 'confirmed':
                return 'bg-blue-100 text-blue-700 border-blue-300';
            case 'completed':
                return 'bg-green-100 text-green-700 border-green-300';
            case 'cancelled':
                return 'bg-red-100 text-red-700 border-red-300';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-300';
        }
    };

    if (!bookings || bookings.length === 0) {
        return (
            <div className="text-center py-20">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-2xl font-semibold text-base-content mb-2">No Bookings Yet</h3>
                <p className="text-base-content/60">You haven&apos;t made any bookings yet.</p>
                <Link href={'/services'} className='btn btn-primary rounded-full px-8 font-black shadow-lg shadow-primary/20 capitalize'>Go to Services</Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-base-content mb-8">My Bookings</h2>

            <div className="grid gap-6">
                {bookings.map((booking) => (
                    <div
                        key={booking._id}
                        className="bg-base-100 border border-base-300 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-all"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            {/* Left Side - Service Info */}
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image className='object-cover object-center w-20 h-20 rounded-2xl' src={booking.image} alt={booking.serviceTitle} width={150} height={150} />
                                    <div>
                                        <h3 className="text-2xl font-bold text-base-content">
                                            {booking.serviceTitle}
                                        </h3>
                                        <p className="text-base-content/60 flex items-center gap-2">
                                            <FaCalendarAlt /> {new Date(booking.serviceDate).toLocaleDateString('en-US', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-2 text-base-content/70 mb-4">
                                    <FaMapMarkerAlt className="mt-1 text-primary" />
                                    <div>
                                        <p className="font-medium">
                                            {booking.area}, {booking.district}, {booking.division}
                                        </p>
                                    </div>
                                </div>

                                {/* Duration & Cost */}
                                <div className="flex flex-wrap gap-6">
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-primary" />
                                        <span className="font-medium">{booking.duration} Hours</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMoneyBillWave className="text-primary" />
                                        <span className="font-semibold text-lg">
                                            ৳{booking.totalCost.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Status & Action */}
                            <div className="flex flex-col items-end gap-4">
                                <div className={`px-5 py-2 rounded-2xl border text-sm font-semibold uppercase tracking-widest ${getStatusStyle(booking.status)}`}>
                                    {booking.status}
                                </div>

                                {booking.status?.toLowerCase() === 'pending' && (
                                    <button
                                        onClick={() => handleCancelBooking(booking._id, booking.email)}
                                        className="btn btn-error btn-outline rounded-2xl flex items-center gap-2 hover:bg-red-50"
                                    >
                                        <FaTimes />
                                        Cancel Booking
                                    </button>
                                )}

                                {booking.status?.toLowerCase() === 'cancelled' && (
                                    <div className="text-red-500 text-sm font-medium">Booking Cancelled</div>
                                )}
                            </div>
                        </div>

                        {/* Notes (if any) */}
                        {booking.notes && (
                            <div className="mt-6 pt-6 border-t border-base-300">
                                <p className="text-sm text-base-content/60 mb-1">Special Notes:</p>
                                <p className="text-base-content/80 italic">"{booking.notes}"</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookingsComponent;