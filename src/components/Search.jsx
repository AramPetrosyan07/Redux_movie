import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchFilter } from "store/slices/moviesSlice";
import "../style/Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  const handleSearch = (value) => {
    const newCategory = movies.filter((el) =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(handleSearchFilter(newCategory));
  };

  return (
    <div className="mainSearch">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
