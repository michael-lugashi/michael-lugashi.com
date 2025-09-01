import ScrollIndicator from './ScrollIndicator';
import meDoodle from '../assets/images/me-doodle.png';
import StripedBox from './StripedBox';

const Header = () => {
  return (
    <div className="text-brown-p relative h-screen flex flex-col justify-center">
      <h1 className="text-6xl mb-4 z-10">
        Hi, my <br></br>name is <span className="font-black">Michael</span>
      </h1>
      <h2 className="text-3xl mb-40 z-10">
        I am a <span className="font-black">Fullstack Engineer</span>
      </h2>
      <ScrollIndicator />
      <img src={meDoodle} alt="me-doodle" className="absolute w-1/3 max-w-[350px] right-1/10 z-10" />
      <StripedBox className="absolute h-52 right-0 w-3/4 z-0" />
    </div>
  );
};

export default Header;
