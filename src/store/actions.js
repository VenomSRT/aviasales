import { getData, getRate } from '../api/api';

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
    type: 'LOAD_TICKETS_SUCCESS',
    payload: tickets
})  

const loadTicketsError = error => ({
    type: 'LOAD_TICKETS_ERROR',
    payload: error
})

export const loadCurrencyRate = (currencyBase, newCurrencyBase) => {
    return dispatch => {
        getRate(currencyBase)
            .then(data => {
                dispatch(setCurrencyPrice(newCurrencyBase, data.rates));
                dispatch(setCurrencySymbol(newCurrencyBase));
            })
            .catch(err => {
                dispatch(setCurrencyPriceError(err))
            })
    }
}

const setCurrencyPrice = (newCurrencyBase, rates) => ({ 
    type: 'SET_CURRENCY_PRICE',
    newCurrencyBase,
    rates
});

const setCurrencyPriceError = error => ({
    type: 'SET_CURRENCY/ERROR',
    payload: error
})

const setCurrencySymbol = newCurrencyBase => ({
    type: `SET_CURRENCY_SYMBOL/${newCurrencyBase}`
})