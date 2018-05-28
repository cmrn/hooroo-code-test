import React from 'react';
import { searchHotels, SORT_HIGH } from '../api';
import Search from '../components/Search';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sort: SORT_HIGH, hotels: [] };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadHotels(this.state.sort);
  }

  handleChange(newSort) {
    this.setState({ sort: newSort });
    this.loadHotels(newSort);
  }

  async loadHotels(sort) {
    const hotels = await searchHotels(sort);
    this.setState({ hotels });
  }

  render() {
    return <Search {...this.state} onChange={this.handleChange} />;
  }
}

export default SearchContainer;