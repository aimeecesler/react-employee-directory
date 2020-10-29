import React from 'react';

const SortButton = (props) => {
    return (
        <th scope="col">
        <button
          className="btn font-weight-bold"
          onClick={() => props.handleSort(props.label)}
        >
          {props.text} <i className="fas fa-sort"></i>
        </button>
      </th>
    );
};

export default SortButton;