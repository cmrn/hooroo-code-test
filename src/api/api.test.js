import React from 'react';
import ReactDOM from 'react-dom';
import { searchHotels, SORT_LOW, SORT_HIGH } from './api';
import data from './data';

jest.mock('./data', () => [
  { "id": "middlest", "price": 329 },
  { "id": "lowest", "price": 123 },
  { "id": "highest", "price": 456 },
]);

it('sorts by low to high', async () => {
  const results = await searchHotels(SORT_LOW);
  expect(results[0].id).toEqual('lowest');
  expect(results[1].id).toEqual('middlest');
  expect(results[2].id).toEqual('highest');
});

it('sorts by high to low', async () => {
  const results = await searchHotels(SORT_HIGH);
  expect(results[0].id).toEqual('highest');
  expect(results[1].id).toEqual('middlest');
  expect(results[2].id).toEqual('lowest');
});