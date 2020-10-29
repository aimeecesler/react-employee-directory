import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <input
            name="search"
            type="text"
            className="form-control"
            id="search"
            placeholder="Search"
          />
        </div>
      </form>
    );
  }
}

export default Search;
