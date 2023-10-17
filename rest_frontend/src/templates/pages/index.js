import {Outlet} from "react-router-dom";
import * as d3 from "d3";

const Index = () => {
    const drawChart = () => {
        const data = [12, 5, 6, 6, 9, 10];

        const svg = d3.select("body")
            .append("svg")
            .attr("width", 700)
            .attr("height", 300);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 300 - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");
    }
    return (
        <div className='row'>Index Page</div>
    );

    // return (<div className="row">{drawChart()}</div>);


};
export default Index;