const BASE_URL = '../data/tickets.json';

export function getData() {
    return fetch(BASE_URL)
            .then(response => response.json())
            .then(data => data.tickets)
}
