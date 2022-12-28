import logo from "./logo.svg";
import "./App.css";
import "./assets/mero.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <input type="text" class="result" value="0" disabled/>
        <div class="calculator-button">
        <button type="button" class="operator1" value="+">+</button>
        <button type="button" class="operator2" value="-">-</button>
        <button type="button" class="operator3" value="*">&times;</button>
        <button type="button" class="operator4" value="/">&divide;</button>

        <button type="button" value="7">7</button>
        <button type="button" value="8">8</button>
        <button type="button" value="9">9</button>

        <button type="button" class="button1" value="1">1</button>
        <button type="button" class="button2" value="2">2</button>
        <button type="button" class="button3" value="3">3</button>

        <button type="button" class="button4" value="4">4</button>
        <button type="button" class="button5" value="5">5</button>
        <button type="button" class="button6" value="6">6</button>


        <button type="button0" value="0">0</button>
        <button type="button" class="decimal" value=".">.</button>
        <button type="button" class="all-clear" value="all-clear">C</button>

        <button type="button" class="equal-sign" value="=">=</button>
        </div>
      </div>
  </div>
  );
}

export default App;
