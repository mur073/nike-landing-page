import PropTypes from 'prop-types';
import { star } from '../assets/icons';

const CustomerCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={imgURL} alt="" height={120} width={120} className="rounded-full object-cover" />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="" width={24} height={24} className="object-contain" />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  );
};

CustomerCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  customerName: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default CustomerCard;
