import AboutUsSection from "@/components/Home/AboutUs/AboutUsSection";
import BannerCarousel from "@/components/Home/Banner/BannerCarousel";
import ServicesOverview from "@/components/Home/ServicesOverview/ServicesOverview";
import TestimonialComponent from "@/components/Home/Testimonial/TestimonialComponet";


export default function Home() {
  return (
    <>
    <BannerCarousel/>
    <AboutUsSection/>
    <ServicesOverview/>
    <TestimonialComponent/>
    </>
  );
}
