import React, { Component } from "react";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

class App extends Component {
  state = {
    company: {
      name: "Biraj's Company",
      address: "archalbot",
      members: ["pradish", "biraj"]
    }
  };
  render() {
    return (
      <React.Fragment>
        <NavBar companyName={this.state.company.name} />
        <MainContent company={this.state.company} />
      </React.Fragment>
    );
  }
}

export default App;
