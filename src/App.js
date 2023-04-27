import "./styles.css";
import { Component } from "react";
import Counter from "./components/Counter";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
