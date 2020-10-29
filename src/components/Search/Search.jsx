import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    searchCategory: "",
  };

  handleInputChange = (event) => {
    console.log("Change");
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    this.props.handleSearch(event.target.value, this.state.searchCategory);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
    this.props.handleSearch(this.state.search, this.state.searchCategory);
  };

  selectCategory = (event) => {
    this.setState({searchCategory: event.target.value})  
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <select
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
            <p className="text-danger">{this.props.error}</p>
      </form>
    );
  }
}

export default Search;
