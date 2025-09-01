import ScrollIndicator from './ScrollIndicator';
import meDoodle from '../assets/images/me-doodle.png';

const Header = () => {
  return (
    <div className="text-brown-p relative">
      <h1 className="text-6xl mb-4">
        Hi, my <br></br>name is <span className="font-bold">Michael</span>
      </h1>
      <h2 className="text-3xl mb-40">I am a Fullstack Engineer</h2>
      <ScrollIndicator />
      <img src={meDoodle} alt="me-doodle" className="absolute w-1/3 top-0 right-1/10" />
    </div>
  );
};

export default Header;
