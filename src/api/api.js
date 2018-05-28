import data from './data.json';

const SORT_HIGH = 'sort_high';
const SORT_LOW = 'sort_low';


function searchHotels(sortOrder) {
  const lowSortFunc = (a, b) => a.price > b.price;
  if(sortOrder === SORT_LOW) {
    return data.sort(lowSortFunc);
  } else if(sortOrder === SORT_HIGH) {
    return data.sort(lowSortFunc).reverse();
  } else {
    return data;
  }
}

export { searchHotels, SORT_HIGH, SORT_LOW };