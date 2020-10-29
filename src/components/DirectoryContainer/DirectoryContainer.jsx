import React from "react";
import Search from "../Search/Search";
import Table from "../Table/Table";
import "./style.css"

const DirectoryContainer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row main-header mb-5">
          <div className="col-sm-12 text-center my-5">
            <h1>Employee Directory</h1>
            <h3>
              Click on carrots to filter by heading or use the search box to
              narrow your results.
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4 text-center">
            <Search />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectoryContainer;
