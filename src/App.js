import React, { Component } from "react";
import "./App.css";
// import Dataviz from "./Dataviz";
import Singleviz from "./components/singleviz";
import FilterViz from "./components/filterViz";

// function App(){
//    const vizList = [
//      "http://public.tableau.com/views/RegionalSampleWorkbook/Flights",
//      "http://public.tableau.com/views/RegionalSampleWorkbook/Obesity",
//      "http://public.tableau.com/views/RegionalSampleWorkbook/College",
//      "http://public.tableau.com/views/RegionalSampleWorkbook/Stocks",
//      "http://public.tableau.com/views/RegionalSampleWorkbook/Storms"
//    ];
//     const dataViz = vizList.map((number, index) => (
//       <Dataviz url={number} index={index}/>
//     ));

//   return (
//     <div className="App-header">
//       {dataViz}
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState(
      {
        count: this.state.count === 4 ? 0 : this.state.count + 1
      },
      () => {
        console.log("callback", this.state.count);
      }
    );
    console.log("callbackout", this.state.count);
  }
  decrement() {
    this.setState({
      count: this.state.count === 0 ? 4 : this.state.count - 1
    });
  }

  render() {
    return (
      <div className="App-header">
        {/* <Singleviz count={this.state.count} /> */}
        <FilterViz />
        <div>
          <button onClick={this.decrement}>Previous</button>
          <button onClick={this.increment}>Next</button>
        </div>
      </div>
    );
  }
}
