import { FaClock, FaHeart, FaShieldAlt, FaUser } from "react-icons/fa";
const features = [
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: "Compassionate Care",
    description: "Our caregivers treat your loved ones like family, with genuine warmth."
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Fully Vetted",
    description: "Rigorous background checks and verified credentials for your peace of mind."
  },
  {
    icon: <FaClock className="w-8 h-8" />,
    title: "24/7 Availability",
    description: "Round-the-clock support and flexible scheduling to fit your life."
  },
  {
    icon: <FaUser className="w-8 h-8" />,
    title: "10,000+ Families",
    description: "A growing community built on successful matches and happy families."
  }
];

const AboutUsSection = () => {
  return (
    <section className="bg-base-200 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Why Choose Care.xyz?
          </h2>
          
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            We understand that finding the right care for your loved ones is deeply personal. 
            That&apos;s why we&apos;ve built a platform based on trust, quality, and compassion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-base-100 border border-base-300 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-base-content mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base-content/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;