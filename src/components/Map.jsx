import React, { Component } from "react";
import * as d3 from "d3";
import * as topojson from "topojson";
import us from "./map_data/us.json";
import usStateNames from "./map_data/us-state-names.tsv";
import cityCsv from "./map_data/cities.csv";
import sumCsv from "./map_data/grouped_by_and_sum.csv";
import "./map_data/map.css";
class Map extends Component {
  state = {
    name_id_map: {},
    id_name_map: {},
    cities: [],
    g: null,
    dot: null
  };
  data = async () => {
    const name_id_map = {};
    const id_name_map = {};
    const cities = [];
    const r1 = await d3.tsv(usStateNames, function(obj, index) {
      name_id_map[obj.name] = obj;
      id_name_map[obj.id] = obj;
    });
    const r2 = await d3.csv(cityCsv, function(obj, index) {
      cities.push(obj);
    });
    const r3 = await d3.csv(sumCsv, function(obj, index) {
      Object.assign(name_id_map[obj.state], obj);
    });
    const state = {
      name_id_map,
      id_name_map,
      cities
    };
    this.setState(state);
    return { r1, r2, r3 };
  };
  componentDidMount() {
    const that = this;
    var width = 960,
      height = 500,
      active = d3.select(null);

    var projection = d3
      .geoAlbersUsa()
      .scale(1000)
      .translate([width / 2, height / 2]);
    var zoomed = false;
    var path = d3.geoPath().projection(projection);
    var svg = d3
      .select("svg")
      .attr("width", width)
      .attr("height", height);
    var tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
    this.data().then(draw);

    function draw(obj) {
      // console.log(obj);
      var features = topojson.feature(us, us.objects.states).features;
      svg
        .append("rect")
        .attr("class", "background")
        .attr("width", width)
        .attr("height", height)
        .on("click", reset);

      that.state.g = svg
        .append("g")
        .attr("class", "states")
        .style("stroke-width", "1.5px");

      that.state.g
        .selectAll("path")
        .data(features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", "feature")
        .attr("style", function(d) {
          // console.log(that);
          var opa = that.state.id_name_map[d.id].sum / 106605;
          opa = Math.round(opa * 100) / 100;
          var res = `opacity: ${opa};`;
          if (opa <= 0.1) {
            res = `opacity: 0.5; fill: yellow;`;
          }
          return res;
        })
        .on("click", clicked)
        .on("mouseover", function(d) {
          if (zoomed) {
            return;
          }
          // console.log(d)
          tooltip
            .transition()
            .duration(200)
            .style("opacity", 0.9);
          tooltip
            .html(
              `${that.state.id_name_map[d.id].name}: ${
                that.state.id_name_map[d.id].sum
              }`
            )
            .style("left", d3.event.pageX + "px")
            .style("top", d3.event.pageY - 28 + "px");
        })
        .on("mouseout", function(d) {
          // if (!zoomed) { return }
          tooltip
            .transition()
            .duration(500)
            .style("opacity", 0);
        });
      that.state.dot = that.state.g
        .append("g")
        .attr("class", "cities")
        .attr("class", "dp_none");
      // g
      that.state.dot
        .selectAll("circle")
        .data(that.state.cities)
        .enter()
        .append("circle", ".city")
        .attr(
          "cx",
          d => (projection([d.lng, d.lat]) ? projection([d.lng, d.lat])[0] : 0)
        )
        .attr(
          "cy",
          d => (projection([d.lng, d.lat]) ? projection([d.lng, d.lat])[1] : 0)
        )
        .attr("r", "1px")
        .attr("stroke", "purple")
        .attr("fill", "red")
        .attr("stroke-width", "0.5px")
        .on("mouseover", function(d) {
          tooltip
            .transition()
            .duration(200)
            .style("opacity", 0.9);
          tooltip
            .html(`${d.city}: ${d.sum}`)
            .style("left", d3.event.pageX + "px")
            .style("top", d3.event.pageY - 28 + "px");
        })
        .on("mouseout", function(d) {
          tooltip
            .transition()
            .duration(500)
            .style("opacity", 0);
        });
      that.state.g
        .append("path")
        .datum(
          topojson.mesh(us, us.objects.states, function(a, b) {
            return a !== b;
          })
        )
        .attr("class", "mesh")
        .attr("d", path);
    }
    function clicked(d) {
      if (active.node() === this) return reset();
      zoomed = true;
      tooltip.transition().style("opacity", 0);
      // dot.attr("opacity", 1)
      that.state.dot.classed("dp_none", false);
      active.classed("active", false);
      active = d3.select(this).classed("active", true);

      var bounds = path.bounds(d),
        dx = bounds[1][0] - bounds[0][0],
        dy = bounds[1][1] - bounds[0][1],
        x = (bounds[0][0] + bounds[1][0]) / 2,
        y = (bounds[0][1] + bounds[1][1]) / 2,
        scale = 0.9 / Math.max(dx / width, dy / height),
        translate = [width / 2 - scale * x, height / 2 - scale * y];

      that.state.g
        .transition()
        .duration(750)
        .style("stroke-width", 1.5 / scale + "px")
        .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
    }

    function reset() {
      zoomed = false;
      active.classed("active", false);
      active = d3.select(null);
      that.state.dot.classed("dp_none", true);
      that.state.g
        .transition()
        .duration(750)
        .style("stroke-width", "1.5px")
        .attr("transform", "");
    }
  }
  render() {
    return (
      <div style={{ width: "100%", height: "30%px" }}>
        <h1>Total number of refugees settled down in States in 2002-2018</h1>
        <svg />
      </div>
    );
  }
}
export default Map;
