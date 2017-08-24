import airport from '../data/airports.json';

export default function getCityOrAirports(value) {
    if(value === '') return [];
    let matches = airport.filter(item => {
        if(item.city.toLowerCase().includes(value) || item.iata.toLowerCase().includes(value) || item.name.toLowerCase().includes(value)) {
            return item;
        }
    }, []);
    return matches
}