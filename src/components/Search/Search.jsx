import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    searchCategory: "",
  };

  // handles any change in the input field, updates the local search states
  // calls the handleSearch function which updates the main employees state
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    this.props.handleSearch(event.target.value, this.state.searchCategory);
  };

  // handles a full submit on the form if the user clicks the submit button or enter on their keyboard
  // this really only comes into play if the user copy/pastes something in the input, otherwise it live searches as they type
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.search, this.state.searchCategory);
  };

  // updates the local category if the dropdown selection is changed
  selectCategory = (event) => {
    this.setState({ searchCategory: event.target.value });
  };

  // resets the form and calls the handleReset function if the rest button is clicked
  handleResetClick = (event) => {
    document.getElementById("search-form").reset();
    this.setState({search:"", searchCategory: ""})
    this.props.handleReset();
  };

  // renders the search form and the error alert
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
