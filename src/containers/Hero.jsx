import { useState } from 'react';
import { arrowRight } from '../assets/icons';

import { Button, ShoeCard } from '../components';
import { shoes, statistics } from '../constants';

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(shoes[0].bigShoe);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>

        <Button label="Show now" icon={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-bold font-falaquin">{item.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoe} alt="shoe" width={610} height={500} className="object-contain relative z-10" />

        <div className="flex sm:gap-6 gap-4 absolute bottom-[-5%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={`hero-shoe-${index}`}>
              <ShoeCard image={shoe} changeMainShoeImg={(shoe) => setBigShoe(shoe)} mainShoe={bigShoe} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
