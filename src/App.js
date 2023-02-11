import logo from './logo.svg';
import './App.css';
import BioData from './BioData';

function App() {
  return (
    <div className="App">
      <BioData name='himanshu' gender='male' />
      <BioData name='nutan' gender='female' />
    </div>
  );
}

export default App;
