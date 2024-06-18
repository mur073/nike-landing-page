import { ServicesCard } from '../components';
import { services } from '../constants';

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServicesCard key={service.imgURL} {...service} />
      ))}
    </section>
  );
};

export default Services;
