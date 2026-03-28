import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Sarah Rahman",
    role: "MOTHER OF 2",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Care.xyz has been a lifesaver! The babysitters are professional, caring, and my kids absolutely love them. The booking process is so easy and I love being able to track everything online."
  },
  {
    id: 2,
    name: "Kamal Hossain",
    role: "CARING FOR ELDERLY FATHER",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Finding care for my elderly father was stressful until I found Care.xyz. The caregiver assigned to us is patient, kind, and professional. My father has regained his independence and happiness."
  },
  {
    id: 3,
    name: "Fatema Begum",
    role: "RECOVERING FROM SURGERY",
    image: "https://images.unsplash.com/photo-1580489944761-09be1ec59862?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "After my knee surgery, I needed help at home. The caregiver from Care.xyz was wonderful - helping with exercises, medications, and even cooking. I recovered so much faster with their support."
  }
];

const TestimonialComponent = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Families Say
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of happy families who trust Care.xyz for their loved ones&apos; well-being.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-base-200 border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} size={22} />
                ))}
              </div>

              {/* Quote Icon */}
              <div className="text-indigo-200 mb-4">
                <FaQuoteLeft size={28} />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed grow text-[15.5px]">
                {testimonial.text}
              </p>

              {/* Divider */}
              <div className="my-8 border-t border-gray-100"></div>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-indigo-600 text-sm font-medium tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;