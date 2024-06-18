import PropTypes from 'prop-types';

const ShoeCard = ({ image, changeMainShoeImg, mainShoe }) => {
  const handleClick = () => {
    if (mainShoe !== image.bigShoe) {
      changeMainShoeImg(image.bigShoe);
    }
  };

  return (
    <div
      className={`rounded-xl border-2 ${mainShoe === image.bigShoe ? 'border-coral-red' : 'border-none'} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={image.thumbnail} alt="" width={127} height={103} className="object-contain" />
      </div>
    </div>
  );
};

ShoeCard.propTypes = {
  image: PropTypes.object.isRequired,
  changeMainShoeImg: PropTypes.func.isRequired,
  mainShoe: PropTypes.string.isRequired,
};

export default ShoeCard;
