import { FaClock, FaHeart, FaShieldAlt, FaUser } from "react-icons/fa";


const AboutComponent = () => {
  return (
    <>
      {/* First Section: Dedicated to Excellence */}
      <section className="bg-[#0b1324] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Dedicated to{" "}
            <span className="text-indigo-400">Excellence</span> in Care
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Care.xyz was founded on a simple premise: everyone deserves access
            to high-quality, compassionate care. We connect families with the
            best caregivers in the nation.
          </p>
        </div>
      </section>

      {/* Second Section: Our Mission & Vision */}
      <section className="bg-base py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Mission + Vision Text */}
            <div className="space-y-12">
              {/* Our Mission */}
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-accent text-lg leading-relaxed">
                  To empower families by providing a seamless, trusted platform for
                  finding high-quality care services. We strive to set new standards
                  for safety, reliability, and compassion in the care industry.
                </p>
              </div>

              {/* Our Vision */}
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-accent text-lg leading-relaxed">
                  To be the world&apos;s most trusted partner in care, making it possible
                  for every individual to thrive in the comfort and safety of their own
                  home or chosen environment.
                </p>
              </div>
            </div>

            {/* Right: Values Cards */}
            <div className=" backdrop-blur-sm border border-white/10 rounded-3xl p-10">
              <div className="grid grid-cols-2 gap-6">
                {/* Trusted */}
                <div className="bg-white/5 hover:bg-white/10 transition-all rounded-2xl p-8 text-center shadow-2xl group">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center text-5xl mb-4 text-indigo-400 group-hover:scale-110 transition-transform">
                   <FaShieldAlt color="#2655D1" />
                  </div>
                  <h3 className="font-semibold text-xl">Trusted</h3>
                </div>

                {/* Compassionate */}
                <div className="bg-white/5 hover:bg-white/10 transition-all rounded-2xl p-8 text-center shadow-2xl group">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center text-5xl mb-4 text-pink-400 group-hover:scale-110 transition-transform">
                  <FaHeart color="#2655D1"/>
                  </div>
                  <h3 className="font-semibold text-xl">Compassionate</h3>
                </div>

                {/* Reliable */}
                <div className="bg-white/5 hover:bg-white/10 transition-all rounded-2xl p-8 text-center shadow-2xl group">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center text-5xl mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                 <FaClock color="#2655D1"/>
                  </div>
                  <h3 className="font-semibold text-xl">Reliable</h3>
                </div>

                {/* Expert */}
                <div className="bg-white/5 hover:bg-white/10 transition-all rounded-2xl p-8 text-center shadow-2xl group">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center text-5xl mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
                   <FaUser color="#2655D1"/>
                  </div>
                  <h3 className="font-semibold text-xl">Expert</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="bg-secondary/90 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 border-t border-b border-white/10 py-12">
          
          {/* Happy Families */}
          <div className="text-center md:border-r border-white/10 md:pr-8">
            <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
              10,000
              <span className="text-indigo-400">+</span>
            </h2>
            <p className="mt-3 text-sm tracking-widest text-blue-300 font-medium uppercase">
              HAPPY FAMILIES
            </p>
          </div>

          {/* Verified Caregivers */}
          <div className="text-center md:border-r border-white/10 md:px-8">
            <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
              5,000
              <span className="text-indigo-400">+</span>
            </h2>
            <p className="mt-3 text-sm tracking-widest text-blue-300 font-medium uppercase">
              VERIFIED CAREGIVERS
            </p>
          </div>

          {/* Care Hours Delivered */}
          <div className="text-center md:pl-8">
            <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter">
              50,000
              <span className="text-indigo-400">+</span>
            </h2>
            <p className="mt-3 text-sm tracking-widest text-blue-300 font-medium uppercase">
              CARE HOURS DELIVERED
            </p>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default AboutComponent;


