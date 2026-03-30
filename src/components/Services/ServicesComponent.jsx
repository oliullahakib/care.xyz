import Link from 'next/link';
import { services } from '@/data/services';

const ServicesComponent = () => {
  return (
    <section className="bg-base-200 py-10 px-6">
      <div className="max-w-6xl mx-auto">
       <h1 className='text-4xl font-bold mb-5'>Services <span className='text-primary'>({services.length})</span></h1>
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-base-100 rounded-3xl overflow-hidden border border-base-300 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Background Image Header */}
              <div className="relative h-56">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/70" />
                
                {/* Icon */}
                <div className="absolute bottom-6 left-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-base-content mb-2">
                  {service.title}
                </h3>
                <p className="text-primary font-medium mb-4">{service.shortDesc}</p>
                
                <p className="text-base-content/70 leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>
                {/* Price & CTA */}
                <div className="pt-6 border-t border-base-300">
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold text-base-content">৳{service.price}</span>
                    <span className="text-base-content/60">/{service.priceUnit}</span>
                  </div>

                  <Link href={`/services/${service.id}`} className="btn btn-primary w-full text-lg py-3.5 rounded-2xl font-medium">
                    Book This Service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;