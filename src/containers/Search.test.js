import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';
import * as api from '../api/api';

const data = [
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

const apiPromise = Promise.resolve(data);

beforeEach(() => {
  Math.random = jest.fn(() => 0.0487723387081509); // react-star uses a random number
  api.searchHotels = jest.fn().mockImplementation(() => apiPromise);
});

it('defaults sort order to high', () => {
  const render = renderer.create(<Search />);
  expect(render.root.children[0].props.sort).toEqual(api.SORT_HIGH);
});

it('calls search API with default sort when mounted', () => {
  const render = renderer.create(<Search />);
  expect(api.searchHotels).toBeCalledWith(api.SORT_HIGH);
});

it('renders a blank list before search promise resolves', () => {
  const render = renderer.create(<Search />);
  expect(render.toJSON()).toMatchSnapshot();
});

it('renders the hotel list once search promise resolves', async () => {
  const render = renderer.create(<Search />);
  await apiPromise;
  expect(render.toJSON()).toMatchSnapshot();
});

it('calls search API again when sort order changes', () => {
  const render = renderer.create(<Search />);
  render.root.children[0].props.onChange(api.SORT_LOW);
  expect(api.searchHotels.mock.calls.length).toEqual(2);
  expect(api.searchHotels).lastCalledWith(api.SORT_LOW);
});

it('updates sort prop when sort is changed', () => {
  const render = renderer.create(<Search />);
  expect(render.root.children[0].props.sort).toEqual(api.SORT_HIGH);
  render.root.children[0].props.onChange(api.SORT_LOW);
  expect(render.root.children[0].props.sort).toEqual(api.SORT_LOW);
});