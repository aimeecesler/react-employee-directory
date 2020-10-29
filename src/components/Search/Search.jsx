import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    searchCategory: "",
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
        <div class="form-group">
          <label for="searchCategory">Choose a Category to Search:</label>
          <select class="form-control" id="searchCategory">
            {this.props.categories.map((category, index) => (
              <option value={category.label} key={index}>
                {category.text}
              </option>
            ))}
          </select>
        </div>
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
