'use client'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { IoIosSend } from "react-icons/io";
const ContactComponent = () => {
    const handleContact = (e)=>{
        e.preventDefault();
        alert("contact form submitted");
        e.target.reset();
    }
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We&apos;re here to help. Reach out to us for any inquiries, support, 
            or to find the right care solution for your loved ones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-8">Send us a Message</h3>
            
            <form onSubmit={handleContact} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="input input-bordered w-full bg-white/10 border-white/20 focus:border-indigo-400 text-white placeholder-gray-400" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="input input-bordered w-full bg-white/10 border-white/20 focus:border-indigo-400 text-white placeholder-gray-400" 
                    placeholder="+880 1XXX-XXXXXX" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="input input-bordered w-full bg-white/10 border-white/20 focus:border-indigo-400 text-white placeholder-gray-400" 
                  placeholder="your@email.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Needed</label>
                <select className="select select-bordered w-full bg-base-200 border-white/20 focus:border-indigo-400 text-accent">
                  <option value="">Select a service</option>
                  <option value="elderly-care">Elderly Care</option>
                  <option value="home-nursing">Home Nursing</option>
                  <option value="child-care">Child Care</option>
                  <option value="disability-support">Disability Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  className="textarea textarea-bordered w-full h-32 bg-white/10 border-white/20 focus:border-indigo-400 text-white placeholder-gray-400" 
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="btn btn-primary w-full text-lg py-3 bg-indigo-600 hover:bg-indigo-700 border-none"
              >
               <IoIosSend />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                    <FiPhone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <a href="tel:+8801234567890" className="text-lg hover:text-indigo-400 transition-colors">
                      +880 1234-567890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <a href="mailto:support@care.xyz" className="text-lg hover:text-indigo-400 transition-colors">
                      support@care.xyz
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                    <FiMapPin />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit Us</p>
                    <p className="text-lg leading-relaxed">
                      Kushtia, Khulna Division<br />
                      Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                    <FiClock />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Business Hours</p>
                    <p className="text-lg">Mon - Sun: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-gray-300 italic">
                Our team typically responds within 2 hours during business hours. 
                For urgent care needs, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;