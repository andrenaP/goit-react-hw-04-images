import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ onClick }) {
  return (
    <button type="click" onClick={onClick} className="Button-to-load">
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
