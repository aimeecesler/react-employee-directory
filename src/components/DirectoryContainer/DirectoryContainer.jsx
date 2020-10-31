import React, { Component } from "react";
import Search from "../Search/Search";
import Table from "../Table/Table";
// import axios from "axios";
import "./style.css";
import employees from "../../employees.json";

class DirectoryContainer extends Component {
  state = {
    errorMessage: "",
    employees: employees,
    display: false,
    headers: [
      {
        text: "First Name",
        label: "firstName",
        sortOrder: "asc",
      },
      {
        text: "Last Name",
        label: "lastName",
        sortOrder: "asc",
      },
      {
        text: "Email Address",
        label: "emailAddress",
        sortOrder: "asc",
      },
      {
        text: "Phone Number",
        label: "phoneNumber",
        sortOrder: "asc",
      },
      {
        text: "Birth Date",
        label: "DOB",
        sortOrder: "asc",
      },
    ],
  };

  // ALTERNATIVE API CALL TO USE INSTEAD OF EMPLOYEES.JSON
  // componentDidMount() {
  //   axios
  //     .get("https://randomuser.me/api/?results=40")
  //     .then((res) => {
  //       const employeeArray = [];
  //       res.data.results.map((employee) => {
  //         return employeeArray.push({
  //           firstName: employee.name.first,
  //           lastName: employee.name.last,
  //           image: employee.picture.thumbnail,
  //           emailAddress: employee.email,
  //           phoneNumber: employee.phone,
  //           DOB: employee.dob.date,
  //         });
  //       });
  //       this.setState({
  //         employees: employeeArray,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function to check if a field includes the searched parameters
  searchFunction = (searchInput, searchCategory) => (key) =>
    key[searchCategory].includes(searchInput);

  // sets the state when the input field is changed
  handleSearch = (searchInput, searchCategory) => {
    // error message if a category is not selected
    if (searchCategory === "") {
      this.setState({
        errorMessage: "You must select a category in order to search.",
        display: true,
      });
    } else {
      this.setState({
        display: false,
        employees: this.state.employees.filter(
          this.searchFunction(searchInput, searchCategory)
        ),
      });
    }
  };

  // sorts and sets the state when a column is selected for sorting
  // sets the sortOrder item for the category so that the next button click will yield the reverse order
  handleSort = (category, order, index) => {
    if (order === "asc") {
      let newHeaders = [...this.state.headers];
      let selectedHeader = { ...newHeaders[index] };
      selectedHeader.sortOrder = "desc";
      newHeaders[index] = selectedHeader;
      this.setState({
        employees: this.state.employees.sort(this.ascSortFunction(category)),
        headers: newHeaders,
      });
    } else if (order === "desc") {
      let newHeaders = [...this.state.headers];
      let selectedHeader = { ...newHeaders[index] };
      selectedHeader.sortOrder = "asc";
      newHeaders[index] = selectedHeader;
      this.setState({
        employees: this.state.employees.sort(this.descSortFunction(category)),
        headers: newHeaders,
      });
    }
  };

  // function to actually sort the data in ascending order
  ascSortFunction = (category) => (a, b) =>
    a[category] === b[category] ? 0 : a[category] < b[category] ? -1 : 1;

  // function to actually sort the data in descending order
  descSortFunction = (category) => (a, b) =>
    a[category] === b[category] ? 0 : a[category] < b[category] ? 1 : -1;

  // updates state when the reset button is clicked, hides the error message and sets employees back to the original list
  handleReset = (event) => {
    this.setState({
      display: false,
      employees: employees,
    });
  };

  // render page content
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row main-header mb-5">
            <div className="col-sm-12 my-auto">
              <h1 className="ml-3" id="banner-header">
                Employee Directory
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-12">
              <h3>
                Click on carrots to filter by heading or use the search box to
                narrow your results.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <Search
                handleSearch={this.handleSearch}
                categories={this.state.headers}
                error={this.state.errorMessage}
                display={this.state.display}
                handleReset={this.handleReset}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
              <Table data={this.state} handleSort={this.handleSort} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DirectoryContainer;
