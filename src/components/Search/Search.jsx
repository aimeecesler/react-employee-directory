import React, { Component } from "react";

class Search extends Component {
  handleChange = (event) => {
    console.log("Change");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            name="search"
            type="text"
            className="form-control"
            id="search"
            placeholder="Search"
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default Search;
