'use client';

import { useState, useMemo } from 'react';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';
import divisions from "@/data/division.json"
import locationData from "@/data/location.json"
const BookingForm = ({ service }) => {
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    const [duration, setDuration] = useState(service?.minDuration || 8);
    const [serviceDate, setServiceDate] = useState('');
    const [notes, setNotes] = useState('');

    // Filter districts based on selected division
    const filteredDistricts = useMemo(() => {
        if (!selectedDivision || !service) return [];
        return [...new Set(
            locationData
                .filter(item => item.region === selectedDivision)
                .map(item => item.district)
        )].sort();
    }, [selectedDivision]);

    // Filter areas based on selected district
    const filteredAreas = useMemo(() => {
        if (!selectedDivision || !selectedDistrict) return [];
        const districtData = locationData.find(
            item => item.region === selectedDivision && item.district === selectedDistrict
        );
        return districtData ? districtData.covered_area : [];
    }, [selectedDivision, selectedDistrict]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const bookingData = {
            serviceId: service?.id,
            serviceTitle: service?.title,
            division: selectedDivision,
            district: selectedDistrict,
            area: selectedArea,
            duration: duration,
            totalCost: service?.price * duration,
            serviceDate,
            notes,
        };

        console.log("Booking Data:", bookingData);
        alert(`Booking request for ${service?.title} submitted successfully!`);
        // TODO: Send to your backend API
    };

    // Generate duration options between minDuration and maxDuration
    const durationOptions = useMemo(() => {
        const min = service?.minDuration || 4;
        const max = service?.maxDuration || 24;
        const options = [];
        for (let i = min; i <= max; i++) {
            options.push(i);
        }
        return options;
    }, [service]);

    return (
        <div className="md:min-w-2xl min-w-full mx-auto bg-base-100 rounded-3xl shadow-xl p-8 md:p-10 border border-base-200">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-base-content mb-2">
                    Book {service?.title || 'Care Service'}
                </h2>
                <p className="text-base-content/60">Tell us where and when you need care</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Service Duration */}
                <div>
                    <label className="text-sm font-medium text-base-content mb-2 flex items-center gap-2">
                        <FaClock className="text-primary" />
                        Duration (Hours)
                    </label>
                    <select
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="select select-bordered w-full rounded-2xl h-14 bg-base-200 border-base-300 focus:border-primary text-lg"
                        required
                    >
                        {durationOptions.map((hrs) => (
                            <option key={hrs} value={hrs}>
                                {hrs} Hours
                            </option>
                        ))}
                    </select>
                    <p className="text-xs text-base-content/50 mt-1">
                        Available from {service?.minDuration} to {service?.maxDuration} hours
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Division */}
                    <div>
                        <label className="text-sm font-medium text-base-content mb-2 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-primary" /> Division
                        </label>
                        <select
                            value={selectedDivision}
                            onChange={(e) => {
                                setSelectedDivision(e.target.value);
                                setSelectedDistrict('');
                                setSelectedArea('');
                            }}
                            className="select select-bordered w-full rounded-2xl h-14 bg-base-200 border-base-300 focus:border-primary"
                            required
                        >
                            <option value="">Select Division</option>
                            {divisions.map((div) => (
                                <option key={div} value={div}>{div}</option>
                            ))}
                        </select>
                    </div>

                    {/* District / City */}
                    <div>
                        <label className="text-sm font-medium text-base-content mb-2 flex items-center gap-2">
                            <FaMapMarkerAlt className="text-primary" /> District / City
                        </label>
                        <select
                            value={selectedDistrict}
                            onChange={(e) => {
                                setSelectedDistrict(e.target.value);
                                setSelectedArea('');
                            }}
                            disabled={!selectedDivision}
                            className="select select-bordered w-full rounded-2xl h-14 bg-base-200 border-base-300 focus:border-primary disabled:opacity-50"
                            required
                        >
                            <option value="">Select District</option>
                            {filteredDistricts.map((district) => (
                                <option key={district} value={district}>{district}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Area */}
                <div>
                    <label className="text-sm font-medium text-base-content mb-2 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-primary" /> Area
                    </label>
                    <select
                        value={selectedArea}
                        onChange={(e) => setSelectedArea(e.target.value)}
                        disabled={!selectedDistrict}
                        className="select select-bordered w-full rounded-2xl h-14 bg-base-200 border-base-300 focus:border-primary disabled:opacity-50"
                        required
                    >
                        <option value="">Select Area</option>
                        {filteredAreas.map((area) => (
                            <option key={area} value={area}>{area}</option>
                        ))}
                    </select>
                </div>

                {/* Preferred Date */}
                <div>
                    <label className="text-sm font-medium text-base-content mb-2 flex items-center gap-2">
                        <FaCalendarAlt className="text-primary" /> Preferred Service Date
                    </label>
                    <input
                        type="date"
                        value={serviceDate}
                        onChange={(e) => setServiceDate(e.target.value)}
                        className="input input-bordered w-full rounded-2xl h-14 bg-base-200 border-base-300 focus:border-primary"
                        required
                    />
                </div>

                {/* Additional Notes */}
                <div>
                    <label className="block text-sm font-medium text-base-content mb-2">
                        Additional Notes / Special Requirements
                    </label>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="E.g., Need newborn care, baby needs special formula, elderly has diabetes..."
                        className="textarea textarea-bordered w-full h-28 rounded-2xl bg-base-200 border-base-300 focus:border-primary"
                    />
                </div>
                {/* price calculation  */}
                <div className='w-full bg-base-200 min-h-24 rounded-2xl p-3'>
                    <h1 className='text-2xl font-bold text-base-content border-b-2 border-gray-300'>Price Calculation</h1>
                    <div className='flex justify-between'>
                        <span className='text-lg font-bold'>Duration:</span>
                        <span className='text-xl text-primary font-bold'>{duration} hours</span>
                    </div>
                    <div className='flex justify-between border-b-2 border-gray-300 pb-3'>
                        <span className='font-bold'>Service Cost:</span>
                        <p>{service.price}tk <span>/per hours</span> </p>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-lg font-bold'>Total Coast:</span>
                        <span className='text-2xl text-primary font-bold'>{service.price*duration}tk</span>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-full h-14 rounded-2xl text-lg font-bold shadow-xl mt-6"
                >
                    Confirm Booking for {service?.title}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;