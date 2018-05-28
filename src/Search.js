import React from 'react';
import './Search.css';
import { searchHotels, SORT_LOW, SORT_HIGH } from './api';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sort: SORT_HIGH };

    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(event) {
    this.setState({ sort: event.target.value });
  }

  render() {
    const hotelResults = searchHotels(this.state.sort);

    return (
      <div className="Search">
        <h2 className="Search-title">
          <strong onClick={this.handleBlah}>5</strong> hotels in <strong>Sydney</strong>.
        </h2>
        <div className="Search-sort">
          Sort by <select value={this.state.sort} onChange={this.handleSortChange}>
            <option value={SORT_HIGH}>Price high-low</option>
            <option value={SORT_LOW}>Price low-high</option>
          </select>
        </div>
        <SearchResults results={hotelResults} />
      </div>
    );
  }
}

const SearchResults = ({ results }) => {
  if(!Array.isArray(results)) return null;

  return (
    <div>
      {results.map(result => 
        <div key={result.id}>{result.title}</div>
      )}
    </div>
  );
};

export default Search;