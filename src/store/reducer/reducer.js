const initialState = {
  tickets: [],
  filteredTickets: [],
  currencySymbol: '0x20BD',
  currencyBase: 'RUB',
  modalActive: true,
  error: null,
}


function reducer(state = initialState, action) {
  switch (action.type) {

    case 'LOAD_TICKETS_SUCCESS':      
      const tickets = action.payload.map((ticket, i) => ({...ticket, id: i}));

      tickets.sort((ticket_1, ticket_2) => ticket_1.price - ticket_2.price);

      return { ...state, tickets, filteredTickets: tickets};

      
    case 'LOAD_TICKETS_ERROR': 
      return { ...state, error: action.payload};


    case 'SET_CURRENCY_PRICE':
      const {newCurrencyBase, rates} = action;

      const filteredTicketsNewPrice = state.filteredTickets.map(ticket => (
        {
          ...ticket,
          price: ticket.price * rates[newCurrencyBase]
        }
      ))

      const ticketsNewPrice = state.tickets.map(ticket => (
        {
          ...ticket,
          price: ticket.price * rates[newCurrencyBase]
        }
      ))

      return ({ 
        ...state,
        tickets: ticketsNewPrice,
        filteredTickets: filteredTicketsNewPrice,
        currencyBase: newCurrencyBase
      });
      

    case 'SET_CURRENCY_SYMBOL/USD':
      return { ...state, currencySymbol: '0xFF04' }

    case 'SET_CURRENCY_SYMBOL/RUB':
      return { ...state, currencySymbol: '0x20BD' }

    case 'SET_CURRENCY_SYMBOL/EUR':
      return { ...state, currencySymbol: '0x20AC' }

    case 'FILTER_TICKETS':
      let filteredTickets = [];

      if (action.checkedStops === '-1') {
        filteredTickets = [...state.tickets];
      } else {
        for(let value of action.checkedStops) {
          filteredTickets = filteredTickets.concat(state.tickets.filter(ticket => ticket.stops === +value));
        }
      }

      filteredTickets.sort((ticket_1, ticket_2) => ticket_1.price - ticket_2.price);

      return { ...state, filteredTickets };


    default:
      return state;
    
  }
}

export default reducer;