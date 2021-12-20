import logo from './adventofcode-logo.png';
import './App.css';
import Day1 from './days/day01/Day1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='content'>
          <Day1 />
        </p>
      </header>
    </div>
  );
}

export default App;
