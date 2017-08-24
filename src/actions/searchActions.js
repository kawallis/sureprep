import {CITY_AIRPORTCODE_UPDATE, GET_AIRPORTS_OR_CITIES} from '../constants/ActionTypes';
import getCityOrAirports from '../api/api';

export function updateForm(value) {
  return {
    type: CITY_AIRPORTCODE_UPDATE,
    payload: {
        searchQuery: value,
        destinations: getCityOrAirports(value)
    }}
}
