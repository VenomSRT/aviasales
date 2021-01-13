import axios from 'axios';
const TICKETS_URL = 'tickets.json';
const CURRENCY_URL = 'https://api.exchangeratesapi.io/latest?base=';

export function getData() {
    return axios.get(TICKETS_URL)
            .then(response => response.data)
}

export function getRate(base) {
    return axios.get(CURRENCY_URL + base)
            .then(response => response.data)
}
