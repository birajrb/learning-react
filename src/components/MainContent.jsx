import React, { Component } from "react";

class MainContent extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <h1>
          {this.props.company.name + " "}
          <span className="badge badge-pill badge-primary">
            {this.props.company.address}
          </span>
        </h1>
        <div className="card">
          <div className="card-header">Our Team</div>
          <ul className="list-group list-group-flush">
            {this.props.company.members.map(name => {
              return (
                <li
                  key={name}
                  className={
                    name === this.props.company.leader
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default MainContent;
