import React from 'react';
import './Search.css';
import { SORT_LOW, SORT_HIGH } from '../api';
import SearchResults from './SearchResults';

const Search = ({ sort, hotels, onChange }) => {  
  return (
    <div className="Search">
      <div className="Search-header">
        <h2 className="Search-title">
          <strong>{hotels.length}</strong> hotels in <strong>Sydney</strong>.
        </h2>
        <div className="Search-sort">
          Sort by <select value={sort} onChange={e => onChange(e.target.value)}>
            <option value={SORT_HIGH}>Price high-low</option>
            <option value={SORT_LOW}>Price low-high</option>
          </select>
        </div>
      </div>
      <SearchResults results={hotels} />
    </div>
  );
}

export default Search;