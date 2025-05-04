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
            { name: "Sunset", colour: ["red", "blue"] },
            { name: "Ocean", colour: ["#0077be", "#00c6fb"] },
            { name: "Forest", colour: ["#228B22", "#6B8E23"] },
            { name: "Lavender", colour: ["#E6E6FA", "#D8BFD8"] },
            { name: "Fire", colour: ["#FF4500", "#FFD700"] },
            { name: "Ice", colour: ["#00FFFF", "#E0FFFF"] },
            { name: "Peach", colour: ["#FFDAB9", "#FFB6C1"] },
            { name: "Night Sky", colour: ["#191970", "#8A2BE2"] },
            { name: "Mint", colour: ["#98FF98", "#AAF0D1"] },
            { name: "Sand", colour: ["#C2B280", "#F4A460"] },
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
