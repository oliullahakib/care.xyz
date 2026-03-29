'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaClock, FaHeart, FaShieldAlt, FaUser } from "react-icons/fa";

const slides = [
  {
    title: "Compassionate Care",
    subtitle: "Right at Your Home",
    description: "Finding quality care for your loved ones has never been easier.",
    motivation: "Every family deserves care that feels like home.",
    icon: <FaHeart className="w-16 h-16" />,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop", // Warm caregiver with elderly
  },
  {
    title: "Trusted Caregivers",
    subtitle: "Background Verified",
    description: "All our caregivers go through rigorous screening and training.",
    motivation: "Peace of mind starts with trust.",
    icon: <FaShieldAlt className="w-16 h-16" />,
    image: "https://maidqatar.com/wp-content/uploads/2025/08/Trusted-Caregivers-Nurses-in-Qatar-scaled.jpg", // Professional caregiver helping senior
  },
  {
    title: "Supporting Families",
    subtitle: "Across Bangladesh",
    description: "Join 10,000+ families who trust us with their loved ones.",
    motivation: "Together, we make caregiving easier and more meaningful.",
    icon: <FaUser className="w-16 h-16" />,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop", // Family with elderly parent
  },
  {
    title: "24/7 Availability",
    subtitle: "We're Always Here",
    description: "Flexible scheduling and round-the-clock support when you need it most.",
    motivation: "Care doesn't wait — and neither do we.",
    icon: <FaClock className="w-16 h-16" />,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop", // Caring moment at home
  },
];

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[620px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center
            ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/70" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
            <div className="flex justify-center mb-8">
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl">
                {slide.icon}
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight">
              {slide.title}
            </h1>

            <p className="text-2xl md:text-3xl text-white/90 mb-6 font-light">
              {slide.subtitle}
            </p>

            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80">
              {slide.description}
            </p>

            {/* Motivation Line */}
            <div className="inline-block bg-white/10 backdrop-blur-md px-10 py-4 rounded-2xl border border-white/30">
              <p className="text-xl italic font-medium text-white">
                "{slide.motivation}"
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-5 pb-8">
              <Link href={'/services'} className="btn btn-lg bg-white text-primary hover:bg-white/95 font-semibold px-10 py-4 rounded-2xl text-lg shadow-2xl transition-all">
                Find Care Now
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-10 scale-110' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;