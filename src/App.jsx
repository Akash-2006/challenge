import React, { Component, createElement } from "react";
import "./App.css";
class Colorbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="colour"
        style={{ backgroundColor: this.props.Color }}
      ></div>
    );
  }
}

class ColorComponets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="colur-box">
        {this.props.colours.map((colur, index) => {
          return <Colorbox Color={colur} key={index} />;
        })}
      </div>
    );
  }
}
class Color extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.colour.map((colour, id) => {
      return (
        <div
          className="contnet"
          key={id}
          onClick={() => this.props.changeColour(colour.colour)}
        >
          <ColorComponets colours={colour.colour} />
          <p>{colour.name}</p>
        </div>
      );
    });
  }
}

class LeftSide extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="left">
        <Color
          colour={[
            { name: "Sunset", colour: ["#FF5E62", "#FF9966"] },
            { name: "Ocean", colour: ["#0077be", "#00c6fb"] },
            { name: "Forest", colour: ["#0B6623", "#7BA05B"] },
            { name: "Lavender", colour: ["#B57EDC", "#E6E6FA"] },
            { name: "Fire", colour: ["#FF512F", "#F09819"] },
            { name: "Ice", colour: ["#74ebd5", "#ACB6E5"] },
            { name: "Peach", colour: ["#FFDAB9", "#FF7F50"] },
            { name: "Night Sky", colour: ["#0F2027", "#2C5364"] },
            { name: "Mint", colour: ["#98FF98", "#66CDAA"] },
            { name: "Sand", colour: ["#EDC9AF", "#C2B280"] },
            { name: "Aurora", colour: ["#FF9A9E", "#FAD0C4"] },
            { name: "Galaxy", colour: ["#654EA3", "#EAafc8"] },
            { name: "Emerald", colour: ["#50C878", "#008000"] },
            { name: "Sunrise", colour: ["#FFCF71", "#2376DD"] },
            { name: "Blush", colour: ["#FF6F91", "#FF9671"] },
            { name: "Amethyst", colour: ["#9D50BB", "#6E48AA"] },
            { name: "Coral Reef", colour: ["#FF7E5F", "#FEB47B"] },
            { name: "Skyline", colour: ["#1488CC", "#2B32B2"] },
            { name: "Meadow", colour: ["#56ab2f", "#a8e063"] },
            { name: "Rose Gold", colour: ["#B76E79", "#FFC1CC"] },
            { name: "Dusk", colour: ["#2C3E50", "#FD746C"] },
            { name: "Aurora Borealis", colour: ["#00C9FF", "#92FE9D"] },
            { name: "Berry", colour: ["#8E2DE2", "#4A00E0"] },
            { name: "Flamingo", colour: ["#F7797D", "#FBD786"] },
          ]}
          changeColour={this.props.changeColour}
        />
      </div>
    );
  }
}
class RightSide extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="right">
        <ColorComponets colours={this.props.colours} />
      </div>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { curentCombination: ["green", "blue"] };
    this.changeColour = this.changeColour.bind(this);
  }
  changeColour(combination) {
    this.setState((prev) => {
      prev.curentCombination = combination;
      return prev;
    });
  }
  render() {
    return (
      <div id="main">
        <LeftSide changeColour={this.changeColour} />
        <RightSide colours={this.state.curentCombination} />
      </div>
    );
  }
}

export default App;
