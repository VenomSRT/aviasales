const BASE_URL = 'tickets.json';

export function getData() {
    return fetch(BASE_URL)
            .then(response => {
                if (!response.ok) {
                    throw response;
                }

                return response.json()
            })
            .then(data => data.tickets)
            .catch(e => console.log(e))
}
