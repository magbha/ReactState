import React, { Component } from "react";
import pic from "../pic.png";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { go: 0, toggel: false };
  }

    
  show = () => {
    this.setState({
      toggel : ! this.state.toggel ,
      go : this.state.toggel ?  this.start : null    
    });
  }

  start = () => { setInterval(() => {
    this.setState({go : this.state.go + 1})
  }, 1000);}


  render() {
    return (
      <div>
        <button onClick={this.show}>Toggel</button>
        {this.state.toggel ? (
          <div>
            <h3>Name : Mohamed</h3>
            <h3>Age : 19</h3>
            <h3>Proffetion : Web-Developer</h3>
            {this.state.go === null ? this.start() : null}
            <h1>{this.state.go}</h1>
            <img src={pic} alt="this is a photoo" />
          </div>
        ) : null}
      </div>
    );
  }
}
