import PropTypes from 'prop-types';
import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt="" width={280} height={280} />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-montserrat font-semibold text-coral-red leading-normal text-2lx">{price}</p>
    </div>
  );
};

PopularProductCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default PopularProductCard;
