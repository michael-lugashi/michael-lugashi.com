import useColorMode from '../hooks/useDarkMode';
import Sun from '../assets/svgs/Sun';
import Moon from '../assets/svgs/Moon';

const ThemeToggleBar: React.FC<{ className: string }> = ({ className }) => {
  const { isDarkMode, toggleColorMode } = useColorMode();

  return (
    <button
      type="button"
      onClick={toggleColorMode}
      className={`${className} flex flex-col laptop:flex-row items-center justify-center laptop:gap-4 cursor-pointer hover:scale-110 transition-all duration-200`}
      aria-label="Toggle color mode"
    >
      <span className="text-gray-p tracking-[0.3em] text-xs laptop:text-sm">CLICK ME</span>
      <div className="h-px w-40 bg-gray-p hidden laptop:block" />
      {isDarkMode ? (
        <Moon className="w-20 h-20 laptop:w-38 laptop:h-38 order-first laptop:order-last text-gray-p" />
      ) : (
        <Sun className="w-20 h-20 laptop:w-38 laptop:h-38 order-first laptop:order-last text-brown-s" />
      )}
    </button>
  );
};

export default ThemeToggleBar;
