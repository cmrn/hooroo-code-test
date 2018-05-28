import React from 'react';
import './Search.css';
import { searchHotels, SORT_LOW, SORT_HIGH } from './api';
import SearchResults from './SearchResults';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sort: SORT_HIGH, hotels: searchHotels(SORT_HIGH)};

    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(event) {
    const newSort = event.target.value;
    this.setState({ sort: newSort, hotels: searchHotels(newSort) });
  }

  render() {
    return (
      <div className="Search">
        <div className="Search-header">
          <h2 className="Search-title">
            <strong>5</strong> hotels in <strong>Sydney</strong>.
          </h2>
          <div className="Search-sort">
            Sort by <select value={this.state.sort} onChange={this.handleSortChange}>
              <option value={SORT_HIGH}>Price high-low</option>
              <option value={SORT_LOW}>Price low-high</option>
            </select>
          </div>
        </div>
        <SearchResults results={this.state.hotels} />
      </div>
    );
  }
}

export default Search;