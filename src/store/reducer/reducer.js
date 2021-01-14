const CURRENCY_SYMBOL_RUB = '0x20BD';
const CURRENCY_SYMBOL_USD = '0xFF04';
const CURRENCY_SYMBOL_EUR = '0x20AC';

const initialState = {
  tickets: [],
  checkboxesState: [
    {name: 'Все', id: 'stops-all', checked: true, value: '-1'},
    {name: 'Без пересадок', id: 'stops-0', checked: false, value: '0'},
    {name: '1 пересадка', id: 'stops-1', checked: false, value: '1'},
    {name: '2 пересадки', id: 'stops-2', checked: false, value: '2'},
    {name: '3 пересадки', id: 'stops-3', checked: false, value: '3'}
  ],
  currencySymbol: '0x20BD',
  currencyBase: 'RUB',
  currencyRate: 1,
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

      let currencySymbol = '';

      if (newCurrencyBase === 'RUB') {
        currencySymbol = CURRENCY_SYMBOL_RUB;
      } else if (newCurrencyBase === 'USD') {
        currencySymbol = CURRENCY_SYMBOL_USD;
      } else {
        currencySymbol = CURRENCY_SYMBOL_EUR;
      }
      
      return ({ 
        ...state,
        currencyBase: newCurrencyBase,
        currencyRate: rates[newCurrencyBase],
        currencySymbol
      });

    case 'SET_CHECKBOX_STATUS':
      const checkboxesState = [ ...state.checkboxesState ];
      const checkboxValue = action.checkboxValue;
      let onlyCase = action.onlyCase;

      if (checkboxValue === '-1') {
        onlyCase = true;
      }
      
      if (onlyCase) {
        checkboxesState.forEach(checkbox => {
          if (checkbox.value !== checkboxValue) {
            checkbox.checked = false;
          } else {
            checkbox.checked = true;
          }
        })         
      } else {
        const checkboxToChange = checkboxesState.find(checkbox => checkbox.value === checkboxValue);

        checkboxToChange.checked = !checkboxToChange.checked;

        checkboxesState[0].checked = false;
      }

      return { ...state, checkboxesState };


      case 'TOGGLE_MODAL/BUY':
        return { ...state, modalBuyActive: !state.modalBuyActive };
        

      case 'TOGGLE_MODAL/SUCCESS':
        return ({
          ...state,
          modalBuyActive: false,
          modalSuccess: !state.modalSuccess
        })

    default:
      return state;
    
  }
}

export default reducer;