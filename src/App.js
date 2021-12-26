import logo from './adventofcode-logo.png';
import './App.css';
import Day1 from './days/day01/Day1';
import Day1SecondHalf from './days/day01/Day1SecondHalf';
import Day2 from './days/day02/Day2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className='content'>
          <p><Day1 /></p>
          <p><Day1SecondHalf /></p>
          <p><Day2 /></p>
        </section>
      </header>
    </div>
  );
}

export default App;
