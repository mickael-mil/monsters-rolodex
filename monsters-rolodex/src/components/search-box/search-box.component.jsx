import React from "react";

import "./search-box.styles.css"

// functional component, don't access to state, easier to read with props and renders.
export const SearchBox = ({placeholder, handleChange }) => (
  <input
    className='search'
    type="search"
    placeholder= {placeholder}
    onChange={handleChange}
  />
);