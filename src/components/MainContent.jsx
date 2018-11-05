import React, { Component } from "react";

class MainContent extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <h1>{this.props.company.name}</h1>
      </div>
    );
  }
}

export default MainContent;
