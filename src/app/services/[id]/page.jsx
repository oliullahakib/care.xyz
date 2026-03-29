import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import { services } from "@/data/services";

const serviceDetails = async({params}) => {
    const {id} = await params;
    const service = services.find((service) => service.id === parseInt(id));
  return <ServiceDetails service={service}/>
}

export default serviceDetails