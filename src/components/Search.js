import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import { useDispatch } from "react-redux";
import * as searchActions from "../redux/actions/search";
import axios from "axios";

export default function Search() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const searchInputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${searchInput}`)
      .then((res) => {
        dispatch(searchActions.addSearchHistory(searchInput, res.data.hits));
      });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <TextField onChange={(event) => searchInputHandler(event)} />
        <TextField type="submit" />
      </form>
    </div>
  );
}
