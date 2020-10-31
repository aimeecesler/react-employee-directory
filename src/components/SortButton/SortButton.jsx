import React from 'react';

const SortButton = (props) => {
    return (
        <th scope="col">
        <button
          className="btn font-weight-bold"
          id={props.id}
          order={props.data.sortOrder}
          onClick={() => props.handleSort(props.data.label, props.data.sortOrder, props.id)}
        >
          {props.data.text} <i className="fas fa-sort"></i>
        </button>
      </th>
    );
};

export default SortButton;