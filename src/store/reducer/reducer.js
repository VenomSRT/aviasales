const initialState = {
  tickets: [],
  currency: 'RUB',
  error: null,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_TICKETS_SUCCESS':      
      let tickets = [...action.payload];
      return { ...state, tickets};
      

    case 'LOAD_TICKETS_ERROR': 
      console.log('error');

      return state;

    default: 
      console.log('default');

      return state
    
  }
}

export default reducer;