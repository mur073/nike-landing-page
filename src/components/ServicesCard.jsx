import PropTypes from 'prop-types';

const ServicesCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-[64px]">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt="" />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  );
};

ServicesCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
};

export default ServicesCard;
