'use client';
import { useState } from 'react';
import { FaClock, FaShieldAlt, FaUser } from "react-icons/fa";

const ServiceDetails = ({ service }) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="bg-base-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="relative h-[420px] rounded-3xl overflow-hidden mb-12">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/40" />

          <div className="absolute bottom-0 left-0 p-10 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl">
                {service.icon}
              </div>
              <div>
                <h1 className="text-5xl font-bold">{service.title}</h1>
                <p className="text-xl text-white/80 mt-1">{service.shortDesc}</p>
              </div>
            </div>

            <div className="flex items-center gap-8 mt-8">
              <div>
                <p className="text-sm opacity-75">Starting from</p>
                <p className="text-4xl font-bold">৳{service.price}</p>
                <p className="text-sm">/{service.priceUnit}</p>
              </div>
              <button className="btn btn-primary btn-lg rounded-2xl px-10">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-base-300 mb-10">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-8 py-4 font-medium text-lg transition-all ${activeTab === "overview" ? "border-b-4 border-primary text-primary" : "text-base-content/70"}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={`px-8 py-4 font-medium text-lg transition-all ${activeTab === "details" ? "border-b-4 border-primary text-primary" : "text-base-content/70"}`}
          >
            What We Provide
          </button>
        </div>

        {/* Content Area */}
        {activeTab === "overview" && (
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold mb-6">About This Service</h2>
              <p className="text-base-content/80 leading-relaxed text-lg">
                {service.description}
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <FaClock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-base-content/70">{service?.minDuration} to {service?.maxDuration} hours</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaUser className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Suitable For</p>
                    <p className="text-base-content/70">{service?.suitableFor}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaShieldAlt className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Availability</p>
                    <p className="text-base-content/70">{service.availability}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-5">Key Highlights</h3>
              <ul className="space-y-4">
                {service.highlights.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-base-content/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "details" && (
          <div>
            <h2 className="text-3xl font-semibold mb-8">What We Provide</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.whatWeProvide.map((item, index) => (
                <div key={index} className="bg-base-200 p-6 rounded-2xl flex gap-4">
                  <div className="text-primary mt-1">
                    <FaShieldAlt />
                  </div>
                  <p className="text-base-content/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center bg-base-200 rounded-3xl p-12">
          <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
          <p className="text-base-content/70 mb-8 max-w-md mx-auto">
            Our team will match you with the best caregiver for your needs within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg rounded-2xl px-12">Book This Service</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;