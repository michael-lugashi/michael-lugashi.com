import './App.css';
import Header from './pages/Header';
import NavBar from './pages/NavBar';
import ContactMe from './pages/ContactMe';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import projects from './assets/data/projects.json';
import useScrollIntoView from './hooks/useScrollIntoView';
import ThemeToggleBar from './components/ThemeToggleBar';
import NotificationsProvider from './contexts/NotificationProvider';
import StickyContainer from './components/StickyContainer';
import ParallaxContainer from './components/ParallaxContainer';
import { useRef } from 'react';

function App() {
  const [ContactMeRef, handleScrollToContactMe] = useScrollIntoView();
  const headerSectionRef = useRef<HTMLDivElement>(null);

  return (
    <NotificationsProvider>
      <div className="min-h-screen bg-white-p dark:bg-black-p">
        <NavBar handleScrollToContactMe={handleScrollToContactMe} />

        <div className="relative px-4 tablet:px-8 laptop:px-16 max-w-[1500px] flex flex-col gap-40 mx-auto pb-20">
          {/* Sticky Theme Toggle */}
          <StickyContainer
            triggerRef={headerSectionRef}
            startOffset={0}
            endOffset={1}
            behavior="scroll"
            className="fixed top-17 right-6 laptop:right-1/12 desktop:right-1/7 short:top-[7vh] tall:top-[20vh] z-20"
          >
            <ThemeToggleBar />
          </StickyContainer>
          {/* Header section with Parallax */}
          <ParallaxContainer speed={1.5} direction="up" className="will-change-transform relative">
            <Header ref={headerSectionRef} />
          </ParallaxContainer>

          <Projects projects={projects} />
          <AboutMe />
          {/* for the header of the contact me section to not be faded by navbar a padding top was added and the margin top was added to offset the padding top */}
          <ContactMe ref={ContactMeRef} className="pt-20 -mt-20" />
        </div>
      </div>
    </NotificationsProvider>
  );
}

export default App;
