import ScrollIndicator from '../components/ScrollIndicator';
import meDoodle from '../assets/images/me-doodle.png';
import StripedBox from '../components/StripedBox';
import StripedText from '../components/StripedText';

const Header = ({ ref }: { ref: React.RefObject<HTMLDivElement | null> }) => {
  return (
    <div
      ref={ref}
      className="text-brown-p dark:text-pink-p relative min-h-screen flex flex-col justify-center items-center laptop:items-start"
    >
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
        <StripedText>
          Hi, my <br className="laptop:block hidden" /> name is{' '}
          {/* The {' '} is used to ensure a space is rendered between "is" and the next element, the prettier formatter won't just let me leave a space */}
        </StripedText>
        <span className="font-black text-brown-p dark:text-pink-p text-shadow-white-p text-shadow-2xl">
          Michael<span className="font-black text-brown-s">.</span>
        </span>
      </h1>
      <h2 className="hidden laptop:block text-3xl mb-40 z-10">
        <StripedText>I am a </StripedText>
        <span className="font-black">Fullstack Engineer</span>
      </h2>
      <ScrollIndicator />
    </div>
  );
};

export default Header;
