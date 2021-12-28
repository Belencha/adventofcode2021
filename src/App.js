import logo from './adventofcode-logo.png';
import './App.css';
import Day1 from './days/day01/Day1';
import Day1SecondHalf from './days/day01/Day1SecondHalf';
import Day2 from './days/day02/Day2';
import Day2SecondHalf from './days/day02/Day2SecondHalf';
import Day3 from './days/day03/Day3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section className='content'>
          <p>Day 1 done (<Day1 /><Day1SecondHalf />)</p>
          <p>Day 2 done (<Day2 /><Day2SecondHalf />)</p>
          <p>Day 3... in progress... <Day3 /></p>
        </section>
      </header>
    </div>
  );
}

export default App;
