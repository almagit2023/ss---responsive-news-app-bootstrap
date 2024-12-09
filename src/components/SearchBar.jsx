import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <form className="d-flex mb-4" onSubmit={onSearchSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search news..."
        value={searchTerm}
        onChange={onSearchChange}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
