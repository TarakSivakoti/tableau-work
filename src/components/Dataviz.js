import React, { Component } from "react";
import tableau from "tableau-api";

class Dataviz extends Component {
  componentDidMount() {
    this.createViz();
  }

  createViz=()=> {
    var vizDiv = document.getElementById("vizContainer" + this.props.index);
    const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Flights";
    var viz = new tableau.Viz(vizDiv, this.props.url);
  }

  render() {
    const id='vizContainer'+this.props.index
    return <div id={id}></div>;
  }
}

export default Dataviz;
