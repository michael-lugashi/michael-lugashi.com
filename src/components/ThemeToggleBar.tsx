import { useSpring, animated } from '@react-spring/web';
import useColorMode from '../hooks/useDarkMode';
import Sun from '../assets/svgs/Sun';
import Moon from '../assets/svgs/Moon';

const ThemeToggleBar: React.FC = () => {
  const { isDarkMode, toggleColorMode } = useColorMode();

  // Spring animation to slide down from above
  const springProps = useSpring({
    from: { transform: 'translateY(-200px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.button
      type="button"
      onClick={toggleColorMode}
      style={springProps}
      className="flex flex-col laptop:flex-row items-center justify-center laptop:gap-4 cursor-pointer hover:scale-110 transition-all duration-200 !z-[9999]"
      aria-label="Toggle color mode"
    >
      <span className="text-gray-p tracking-[0.3em] text-xs laptop:text-sm">CLICK ME</span>
      <div className="h-px w-40 bg-gray-p hidden laptop:block" />
      {isDarkMode ? (
        <Moon className="w-20 h-20 laptop:w-38 laptop:h-38 order-first laptop:order-last text-gray-p" />
      ) : (
        <Sun className="w-20 h-20 laptop:w-38 laptop:h-38 order-first laptop:order-last text-brown-s" />
      )}
    </animated.button>
  );
};

export default ThemeToggleBar;
