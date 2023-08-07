import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

export default function ImageGalleryItem(props) {
  const { smallPicture, alt, onClick, largeImage } = props;
  return (
    <li className="galleryItem" onClick={() => onClick(largeImage)}>
      <img src={smallPicture} alt={alt} className="galleryImg" />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  smallPicture: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};
