const initialState = {
  tickets: [],
  filteredTickets: [],
  currencySymbol: '',
  currencyBase: 'RUB',
  modalActive: true,
  error: null,
}


function reducer(state = initialState, action) {
  switch (action.type) {

    case 'LOAD_TICKETS_SUCCESS':      
      const tickets = action.payload.map((ticket, i) => ({...ticket, id: i}));

      tickets.sort((ticket_1, ticket_2) => ticket_1.price - ticket_2.price);

      return { ...state, tickets};

      
    case 'LOAD_TICKETS_ERROR': 
      return { ...state, error: action.payload};


    case 'SET_CURRENCY_PRICE':
      const {newCurrencyBase, rates} = action;

      const ticketsNewPrice = state.tickets.map(ticket => {
        
        return {
          ...ticket,
          price: ticket.price * rates[newCurrencyBase]
        }
      })

      return ({ 
        ...state,
        tickets: ticketsNewPrice,
        currencyBase: newCurrencyBase
      });
      

    case 'SET_CURRENCY_SYMBOL/USD':
      return { ...state, currencySymbol: '0xFF04' }

    case 'SET_CURRENCY_SYMBOL/RUB':
      return { ...state, currencySymbol: '0x20BD' }

    case 'SET_CURRENCY_SYMBOL/EUR':
      return { ...state, currencySymbol: '0x20AC' }

    default:
      return state
    
  }
}

export default reducer;