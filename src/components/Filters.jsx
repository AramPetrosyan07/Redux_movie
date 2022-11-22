import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { handleSearchFilter } from "store/slices/moviesSlice";
import "../style/Filters.css";

const Filters = () => {
  const { movies } = useSelector((state) => state.movies);
  const [ganres, setGanres] = useState([]);
  const [date, setDate] = useState([]);
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();

  const createObjectsForSelect = (arr) => {
    return arr.map((el) => ({ value: el, label: el }));
  };

  useEffect(() => {
    let ganresArr = Array.from(
      new Set(movies.map((item) => item.genre.split(", ")).flat())
    );
    let dateArr = Array.from(new Set(movies.map((el) => el.data)));

    setGanres(createObjectsForSelect(ganresArr));
    setDate(createObjectsForSelect(dateArr));
  }, [movies.length]);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    if (typeof selectedOption[0]?.value === "string") {
      let filterByGanres = movies.filter((el) =>
        el.genre.includes(selectedOption[0].value)
      );
      dispatch(handleSearchFilter(filterByGanres));
    } else if (typeof selectedOption[0]?.value === "number") {
      let filterByGanres = movies.filter(
        (el) => el.data === selectedOption[0].value
      );
      dispatch(handleSearchFilter(filterByGanres));
    }
    if (selectedOption.length === 0) {
      dispatch(handleSearchFilter([]));
    }
  };

  const customStyles = {
    option: (provided) => ({
      ...provided,
      padding: 10,
    }),
    control: () => ({
      width: 220,
      backgroundColor: "#393255",
      display: "flex",
      borderRadius: 10,
      color: "white",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  const animatedComponents = makeAnimated();
  return (
    <div className="main_filters">
      <div className="filter_data_container">
        <Select
          styles={customStyles}
          components={animatedComponents}
          options={selected.length < 1 ? ganres : []}
          onChange={handleChange}
          placeholder="Select Ganre"
          isMulti
        />
        <Select
          styles={customStyles}
          components={animatedComponents}
          options={
            selected.length < 1 ? date.sort((a, b) => b.value - a.value) : []
          }
          onChange={handleChange}
          placeholder="Select Date"
          isMulti
        />
      </div>
    </div>
  );
};

export default Filters;
