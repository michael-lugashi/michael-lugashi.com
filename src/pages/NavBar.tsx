import Github from '../assets/svgs/Github';
import LinkedIn from '../assets/svgs/LinkedIn';
import TextBubble from '../assets/svgs/TextBubble';

interface NavBarProps {
  handleScrollToContactMe: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ handleScrollToContactMe }) => {
  return (
    // <nav className="sticky top-0 z-50 bg-white-p/70 backdrop-blur-sm">
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-white-p via-white-p/70 to-transparent">
      <div className="px-4 tablet:px-8 laptop:px-16 max-w-[1500px] pb-6 mx-auto h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 text-brown-s">
          <a
            href="https://github.com/michael-lugashi?tab=repositories"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brown-p transition-all duration-300 hover:scale-115 hover:drop-shadow-[0_0_10px_theme(colors.brown-s)]"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-lugashi/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brown-p transition-all duration-300 hover:scale-115 hover:drop-shadow-[0_0_10px_theme(colors.brown-s)]"
          >
            <LinkedIn />
          </a>
        </div>
        <a
          onClick={handleScrollToContactMe}
          aria-label="Contact"
          className="hover:text-brown-p cursor-pointer flex flex-row text-brown-s transition-all duration-300 hover:scale-115 hover:drop-shadow-[0_0_10px_theme(colors.brown-s)]"
        >
          <TextBubble className="w-6 h-7 mr-1" />
          <span className="font-bold text-xl"> Hire Me!</span>
        </a>
      </div>
      {/* <div className="pointer-events-none absolute inset-x-0 -bottom-8 backdrop-blur-sm  h-8 bg-gradient-to-b from-white-p/70 via-white-p/50 to-transparent"></div> */}
    </nav>
  );
};

export default NavBar;
