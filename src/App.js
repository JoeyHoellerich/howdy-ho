import './App.css';
import Navbar from './components/Navbar';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
      <PersistentDrawerLeft />
      </div>
    </div>
  );
}

export default App;
