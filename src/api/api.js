const TICKETS_URL = 'tickets.json';
const CURRENCY_URL = 'https://api.exchangeratesapi.io/latest?base=';

export function getData() {
    return fetch(TICKETS_URL)
            .then(response => response.json())
}

export function getRate(base) {
    return fetch(CURRENCY_URL + base)
            .then(response => response.json())
}
