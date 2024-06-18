import { shoe8 } from '../assets/images';
import { Button } from '../components';

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex items-center justify-between max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg">
          We provide you <span className="text-coral-red">Super Quality </span>
          Shoes
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus optio aspernatur ratione recusandae, quo
          commodi ab eos, eveniet aliquid modi culpa id vel quod eligendi molestiae nemo! Tempora, autem.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, molestiae!
        </p>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
