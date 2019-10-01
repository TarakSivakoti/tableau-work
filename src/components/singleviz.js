import React, { Component } from "react";

let viz = undefined;
class Singleviz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vizUrl: [
        "http://public.tableausoftware.com/views/WorldIndicators/GDPpercapita",
        "http://public.tableau.com/views/RegionalSampleWorkbook/Flights",
        "http://public.tableau.com/views/RegionalSampleWorkbook/Obesity",
        "http://public.tableau.com/views/RegionalSampleWorkbook/College",
        "http://public.tableau.com/views/RegionalSampleWorkbook/Stocks",
        "http://public.tableau.com/views/RegionalSampleWorkbook/Storms"
     
      ]
    };
  }
  componentDidMount() {
    this.initViz();
  }
  componentDidUpdate() {
    this.initViz();
  }
  initViz = () => {
    const vizUrl = this.state.vizUrl[this.props.count];
    const vizContainer = this.vizContainer;
    if (viz) {
      // If a viz object exists, delete it.
      viz.dispose();
    }
    viz = new window.tableau.Viz(vizContainer, vizUrl);
  };

  render() {
    return (
      <div
        ref={div => {
          this.vizContainer = div;
        }}
      ></div>
    );
  }
}

export default Singleviz;
