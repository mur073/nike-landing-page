import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import { Button } from '../components';

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap max-xl:flex-col-reverse gap-10 max-container xl:items-center">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg">
          <span className="text-coral-red">Special</span> offer
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus optio aspernatur ratione recusandae, quo
          commodi ab eos, eveniet aliquid modi culpa id vel quod eligendi molestiae nemo! Tempora, autem.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores explicabo voluptatibus architecto,
          porro animi.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" icon={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
