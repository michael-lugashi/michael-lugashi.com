import Github from '../assets/svgs/Github';
import LinkedIn from '../assets/svgs/LinkedIn';
import TextBubble from '../assets/svgs/TextBubble';
import cvPdf from '../assets/pdfs/cv-michael_lugashi.pdf';
import CvBadge from '../assets/svgs/CvBadge';
import { trackSocialClick, trackDownload, trackScrollToSection } from '../config/analytics';
interface NavBarProps {
  handleScrollToContactMe: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ handleScrollToContactMe }) => {
  const className =
    'hover:text-brown-p dark:hover:text-pink-p tablet:active:scale-90 active:scale-130 text-brown-s dark:text-pink-p transition-all duration-300 hover:scale-115 hover:drop-shadow-[0_0_10px_theme(colors.brown-s)] dark:hover:drop-shadow-[0_0_10px_theme(colors.pink-p)] cursor-pointer';

  const handleGithubClick = () => {
    trackSocialClick('github', 'https://github.com/michael-lugashi?tab=repositories');
  };

  const handleLinkedInClick = () => {
    trackSocialClick('linkedin', 'https://www.linkedin.com/in/michael-lugashi/');
  };

  const handleCvClick = () => {
    trackDownload('cv-michael_lugashi.pdf', 'pdf');
  };

  const handleContactClick = () => {
    trackScrollToSection('contact');
    handleScrollToContactMe();
  };
  return (
    // <nav className="sticky top-0 z-50 bg-white-p/70 backdrop-blur-sm">
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b dark:from-black-p dark:via-black-p/70 from-white-p via-white-p/70 to-transparent">
      <div className="px-4 tablet:px-8 laptop:px-16 max-w-[1500px] pb-6 mx-auto h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <a
            href="https://github.com/michael-lugashi?tab=repositories"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            onClick={handleGithubClick}
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-lugashi/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            onClick={handleLinkedInClick}
          >
            <LinkedIn />
          </a>
          <a href={cvPdf} aria-label="CV" target="_blank" className={className} onClick={handleCvClick}>
            <CvBadge className="w-5" />
          </a>
        </div>
        <a onClick={handleContactClick} aria-label="Contact" className={`${className} flex flex-row`}>
          <TextBubble className="w-6 h-7 mr-1 scale-x-[-1] -rotate-[5deg]" />
          <span className="font-bold text-xl"> Hire Me!</span>
        </a>
      </div>
      {/* <div className="pointer-events-none absolute inset-x-0 -bottom-8 backdrop-blur-sm  h-8 bg-gradient-to-b from-white-p/70 via-white-p/50 to-transparent"></div> */}
    </nav>
  );
};

export default NavBar;
