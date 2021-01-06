import { getData } from '../api/api';

export const loadTickets = () => {
    return dispatch => {
        getData()
            .then(data => {
                dispatch(loadTicketsSuccess(data.tickets))
            })
            .catch(err => {
                dispatch(loadTicketsError(err))
            })
    }
}

const loadTicketsSuccess = tickets => ({   
    type: "LOAD_TICKETS_SUCCESS",
    payload: tickets
})  

const loadTicketsError = error => ({
    type: "LOAD_TICKETS_ERROR",
    payload: error
})