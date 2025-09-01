import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-white-p">
      <div className="px-8 laptop:px-16 max-w-[1500px] mx-auto">
        <Header />
      </div>
    </div>
  );
}

export default App;
