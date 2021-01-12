const initialState = {
  tickets: [],
  checkboxesStatus: [
    {'Все': true},
    {'Без пересадок': false},
    {'1 пересадка': false},
    {'2 пересадки': false},
    {'3 пересадки': false}
  ],
  currencySymbol: '0x20BD',
  currencyBase: 'RUB',
  modalBuyActive: false,
  modalSuccess: false,
  error: null
}


function reducer(state = initialState, action) {
  switch (action.type) {

    case 'LOAD_TICKETS_SUCCESS':      
      const tickets = action.payload.map((ticket, i) => ({...ticket, id: i}));

      return { ...state, tickets};

      
    case 'LOAD_TICKETS_ERROR': 
      return { ...state, error: action.payload};


    case 'SET_CURRENCY_PRICE':
      const {newCurrencyBase, rates} = action;
      const priceCalculator = tickets => {
        return tickets.map(ticket => (
          {
            ...ticket,
            price: ticket.price * rates[newCurrencyBase]
          }
        ))
      }

      const filteredTicketsNewPrice = priceCalculator(state.filteredTickets);
      const ticketsNewPrice = priceCalculator(state.tickets)

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

    case 'SET_CHECKBOX_STATUS':
      const checkboxesStatus = [ ...state.checkboxesStatus ];
      const checkboxValue = action.checkboxValue;
      let onlyCase = action.onlyCase;

      console.log(checkboxValue);
      console.log(onlyCase);

      if (checkboxValue === 'Все') {
        onlyCase = true;
      }
      
      if (onlyCase) {
        console.log('only case');
        for (let i = 0; i < checkboxesStatus.length; i++) {
          const checkboxKey = Object.keys(checkboxesStatus[i])[0];
          
          if (checkboxValue !== checkboxKey) {
            checkboxesStatus[i][checkboxKey] = false;
          } else {
            checkboxesStatus[i][checkboxKey] = true;
          }
        }
      } else {
        const checkboxToCheck = checkboxesStatus.find(checkbox => checkbox.hasOwnProperty(checkboxValue));

        checkboxToCheck[checkboxValue] = !checkboxToCheck[checkboxValue];

        checkboxesStatus[0]['Все'] = false;
      }
        
        
        //filteredTickets = state.tickets.filter(ticket =>        action.checkedStops.some(stop => ticket.stops === +stop))
        // for(let value of action.checkedStops) {
        //   filteredTickets = filteredTickets.concat(state.tickets.filter(ticket => ticket.stops === +value));
        // }

        console.log(checkboxesStatus);
      
      
      return { ...state, checkboxesStatus };

      case 'TOGGLE_MODAL/BUY':
        return { ...state, modalBuyActive: !state.modalBuyActive };

      case 'TOGGLE_MODAL/SUCCESS':
        return { ...state, modalBuyActive: false, modalSuccess: true}

    default:
      return state;
    
  }
}

export default reducer;