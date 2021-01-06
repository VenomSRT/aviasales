import { getData } from "../../api/api";

const initialState = {
  tickets: [],
  currency: 'RUB'
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_TICKETS': 
      return dispatch => {
        console.log('load');
        getData()
          .then(data => dispatch({type: 'LOAD_TICKETS_SUCCESS'}))
          .catch(err => dispatch({type: 'LOAD_TICKETS_ERROR'}))
      }

    case 'LOAD_TICKETS_SUCCESS': 
      /*const sortedTickets = [...state.tickets]
        .sort((ticket1, ticket2) => ticket1.price - ticket2.price)        
        .forEach((element, i) => { element.id = i });*/
      {
        console.log('success');

        return state;
      }
      

    case 'LOAD_TICKETS_ERROR': {
      console.log('error');

      return state
    }

    default: {
      console.log('default');
      return state
    };
  }
}

export default reducer;