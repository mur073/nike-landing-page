import PropTypes from 'prop-types';

const Button = ({ label, icon, backgroundColor, borderColor, textColor }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${backgroundColor} ${borderColor}`}
    >
      <span className={`${textColor}`}>{label}</span>
      {icon && <img src={icon} alt="" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: 'bg-coral-red',
  borderColor: 'border-coral-red',
  textColor: 'text-white',
  fullWidth: 'w-full',
};

export default Button;
