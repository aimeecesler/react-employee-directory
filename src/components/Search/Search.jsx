import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    searchCategory: "",
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    this.props.handleSearch(event.target.value, this.state.searchCategory);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.search, this.state.searchCategory);
  };

  selectCategory = (event) => {
    this.setState({ searchCategory: event.target.value });
  };

  handleResetClick = (event) => {
    document.getElementById("search-form").reset();
    this.props.handleReset();
  };

  render() {
    return (
      <form id="search-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <select
            ref="category"
            className="form-control"
            id="searchCategory"
            onChange={this.selectCategory}
            value={this.state.searchCategory}
          >
            <option value="">Choose a Category to Search</option>
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
            onChange={this.handleInputChange}
          />
        </div>
        <div className="text-center mb-2">
          <button type="submit" className="btn btn-primary mr-1">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger ml-1"
            onClick={this.handleResetClick}
          >
            Reset
          </button>
        </div>

        <div
          className="alert alert-danger"
          role="alert"
          style={{ opacity: this.props.display ? 1 : 0 }}
        >
          {this.props.error}
        </div>
      </form>
    );
  }
}

export default Search;
