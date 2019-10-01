import React, { Component } from "react";

let viz = undefined;
const containerStyle = {
    width: '800px',
    height: '700px'
};
const controlStyle = {
    marginTop: '42px',
    marginBottom: '53px'
};
const dropdownStyle = {
    borderRadius: '12px',
    width: '100px',
    height: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    background: 'aliceblue'
}
const spanStyle = {
    fontWeight: 'bold',
    color: 'darkorange',
    fontSize: '120%',
    fontFamily: 'sans-serif'

}
class FilterViz extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        this.initViz();
    }
    componentDidUpdate() {
        this.initViz();
    }


    initViz = () => {
        const url = "http://public.tableau.com/views/RegionalSampleWorkbook/College";
        const options = {
            "Academic Year": "",
            hideTabs: true
        };
        var containerDiv = document.getElementById("vizContainer");
        viz = new window.tableau.Viz(containerDiv, url, options);

    }

    yearFilter(event) {
        if (viz) {
            var sheet = viz.getWorkbook().getActiveSheet();
            if (event.target.value === "") {
                sheet.clearFilterAsync("Academic Year");
            } else {
                sheet.applyFilterAsync("Academic Year", event.target.value, window.tableau.FilterUpdateType.REPLACE);
            }
        }
    }

    render() {
        return (
            <div>
                <div id="controls" style={controlStyle}>
                    <span style={spanStyle}>Year: </span> <select id="changeYear" onChange={this.yearFilter} style={dropdownStyle}>
                        <option value="">All</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                    </select>
                </div>
                <div id="vizContainer" style={containerStyle}></div>
            </div>
        );
    }
}

export default FilterViz;
