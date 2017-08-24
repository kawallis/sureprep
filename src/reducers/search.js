import * as types from '../constants/ActionTypes';

const initialState = {
  searchQuery: null,
  destinations: [],
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case types.CITY_AIRPORTCODE_UPDATE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}