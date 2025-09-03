import './App.css';
import Header from './components/Header';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="min-h-screen bg-white-p">
      <div className="px-8 laptop:px-16 max-w-[1500px] mx-auto">
        <Header />
        <AboutMe />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
