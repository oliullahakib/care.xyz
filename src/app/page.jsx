import AboutUsSection from "@/components/Home/AboutUs/AboutUsSection";
import BannerCarousel from "@/components/Home/Banner/BannerCarousel";
import ServicesOverview from "@/components/Home/ServicesOverview/ServicesOverview";
import TestimonialComponent from "@/components/Home/Testimonial/TestimonialComponet";

export const metadata = {
  title: "Home",
  description: "Every care in a single place.Less hassle more care",
};
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
