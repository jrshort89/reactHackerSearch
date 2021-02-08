import React from "react";
import { useSelector } from "react-redux";

export default function SearchResults() {
  const searchText = useSelector((state) => state.currentSearch);

  return (
    <div>
      {searchText?.map((hit, index) => (
        <div key={index}>
          <a target="_blank" rel="noreferrer" href={hit.url}>
            {hit.title}
          </a>
        </div>
      ))}
    </div>
  );
}
