import './App.css';
import Header from './pages/Header';
import NavBar from './pages/NavBar';
import ContactMe from './pages/ContactMe';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import projects from './assets/data/projects.json';
import useScrollIntoView from './hooks/useScrollIntoView';

function App() {
  const [ContactMeRef, handleScrollToContactMe] = useScrollIntoView();

  return (
    <div className="min-h-screen bg-white-p">
      <NavBar handleScrollToContactMe={handleScrollToContactMe} />
      <div className="px-4 tablet:px-8 laptop:px-16 max-w-[1500px] flex flex-col gap-40 mx-auto pb-20">
        <Header />
        <Projects projects={projects} />
        <AboutMe />
        <ContactMe ref={ContactMeRef} />
      </div>
    </div>
  );
}

export default App;
