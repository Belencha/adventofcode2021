import logo from './adventofcode-logo.png';
import './App.css';
import Day1 from './days/day01/Day1';
import Day1SecondHalf from './days/day01/Day1SecondHalf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className='content'>
          <p><Day1 /></p>
          <p><Day1SecondHalf /></p>
        </section>
      </header>
    </div>
  );
}

export default App;
