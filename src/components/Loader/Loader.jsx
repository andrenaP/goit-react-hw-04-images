import './Loader.css';
import { Audio } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Audio
      height="100vh"
      width="100vw"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass="Audio-class"
    />
  );
}
