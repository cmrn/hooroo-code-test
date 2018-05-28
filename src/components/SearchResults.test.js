import React from 'react';
import renderer from 'react-test-renderer';
import SearchResults from './SearchResults';

beforeEach(() => {
  Math.random = jest.fn(() => 0.0487723387081509); // react-star uses a random number
})

const hotels = [
  {
  "id": "cxd650nuyo",
  "title": "Courtyard by Marriott Sydney-North Ryde",
  "address": "7-11 Talavera Rd, North Ryde",
  "image": "https://unsplash.it/145/125/?random1",
  "rating": 4,
  "ratingType": "self",
  "promotion": "Exclusive Deal",
  "roomName": "Deluxe Balcony Room",
  "price": 329,
  "savings": 30,
  "freeCancellation": true
  }, {
  "id": "mesq6mggyn",
  "title": "Primus Hotel Sydney",
  "address": "339 Pitt St, Sydney",
  "image": "https://unsplash.it/145/125/?random2",
  "rating": 5,
  "ratingType": "self",
  "promotion": "Exclusive Deal",
  "roomName": "Deluxe King",
  "price": 375,
  "savings": 28,
  "freeCancellation": true
  }
];

it('renders the hotels', () => {
  const tree = renderer.create(
    <SearchResults hotels={hotels} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders an empty div when the array is empty', () => {
  const tree = renderer.create(
    <SearchResults hotels={[]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('allows a className to be set', () => {
  const tree = renderer.create(
    <SearchResults hotels={[]} className="AdditionalClass" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('passes other props through', () => {
  const tree = renderer.create(
    <SearchResults hotels={[]} aria-label="test" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});