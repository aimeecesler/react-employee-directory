import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
  };

  handleChange = (event) => {
    console.log("Change");
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    this.props.handleSearch(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
    this.props.handleSearch(this.state.search);
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
