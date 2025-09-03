import ScrollIndicator from './ScrollIndicator';
import meDoodle from '../assets/images/me-doodle.png';
import StripedBox from './StripedBox';

const Header = () => {
  return (
    <div className="text-brown-p relative min-h-screen flex flex-col justify-center items-center laptop:items-start">
      <div className="relative laptop:absolute w-full laptop:w-1/3 pt-20 laptop:right-1/10 z-10">
        <img
          src={meDoodle}
          alt="me-doodle"
          className="m-auto w-2/3 min-w-[200px] max-w-[250px] laptop:max-w-[350px] laptop:w-full"
        />
        <StripedBox className="block absolute top-2/3 -translate-y-1/2 left-0 laptop:hidden h-25 w-full -z-10" />
      </div>
      <StripedBox className="laptop:absolute hidden laptop:block h-52 right-0 w-3/4 z-0" />
      <h1 className="text-3xl mt-2 laptop:mt-0 laptop:text-6xl mb-4 z-10">
        Hi, my <br className="laptop:block hidden" /> name is
        <span className="font-black">
          Michael<span className="font-black text-brown-s">.</span>
        </span>
      </h1>
      <h2 className="hidden laptop:block text-3xl mb-40 z-10">
        I am a <span className="font-black">Fullstack Engineer</span>
      </h2>
      <ScrollIndicator />
    </div>
  );
};

export default Header;
