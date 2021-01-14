import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrencyRate, setChecks } from '../../store/actions';
import './Filter.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const currencyButtons = document.querySelectorAll('.filter__currency-button')
    const currencyBase = useSelector(state => {
      return state.currencyBase;
    });
    const checkboxesState = useSelector(state => {
      return state.checkboxesState;
    });
    const stopsCheckboxes = useRef([]);

    useEffect(() => {
      stopsCheckboxes.current = document.querySelectorAll('.filter__stops-checkbox');
      
      stopsCheckboxes.current.forEach(checkbox => {
        checkbox.addEventListener('change', handleChecks);
      })

      return function removeEvents() {
        stopsCheckboxes.current.forEach(checkbox => {
          checkbox.removeEventListener('change', handleChecks);
        })
      }
    }, [])

    useEffect(() => {
      currencyButtons.forEach(button => {
        if (button.textContent !== currencyBase) {
          button.classList.remove('active');
        } else {
          button.classList.add('active');
        }
      })
    })
    
    function handleCurrency(e) {
      const newCurrencyBase = e.target.textContent;

      dispatch(loadCurrencyRate(currencyBase, newCurrencyBase));
    }

    
    let onlyCase = false;

    function handleChecks(e, value) {
      let checkboxValue = value || e.target.value;
      console.log(checkboxesState);
      dispatch(setChecks(checkboxValue, onlyCase));

      onlyCase = false;
    }

    function handleOnlyCase(e) {
      const checkboxValue = e.target.dataset.checkboxValue;
      onlyCase = true;
      handleChecks(null, checkboxValue);
    }

    return (
      <aside className="filter d-inline-block col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-9 px-0">
        <div className="filter__container shadow p-2 mb-5 bg-white rounded">
          <h3 className="filter__currency-title fs-5">Валюта</h3>
          <div className="filter__currency-buttons container btn-group btn-group-lg p-0">
            <button
              className="filter__currency-button btn btn-primary active"
              onClick={(e) => handleCurrency(e)}
            >
              RUB
            </button>
            <button
              className="filter__currency-button btn btn-primary"
              onClick={(e) => handleCurrency(e)}
            >
              USD
            </button>
            <button
              className="filter__currency-button btn btn-primary"
              onClick={(e) => handleCurrency(e)}
            >
              EUR
            </button>
          </div>
  
          <h3 className="filter__stops-title pt-4 fs-5">Количество пересадок</h3>
          <div className="filter__stops-checkboxes d-flex flex-column">
            {checkboxesState.map(({name, id, value, checked}) => {
              return (
                <div
                  className="filter__checkbox-container container d-flex justify-content-between px-1 col-sm-10 col-md-10 col-xl-11"
                  key={id}
                >
                  <input
                    type="checkbox"
                    className="filter__stops-checkbox form-check-input col-lg-2"
                    id={id}
                    value={value}
                    checked={checked}
                  />

                  <label className="filter__stops-label checkbox-label form-check-label col-lg-6 col-sm-6" htmlFor={id}>
                    {name}
                  </label>

                  <div
                    className="filter__case-only check-only col-lg-3 text-uppercase fw-bolder"
                    data-checkbox-value={value}
                    onClick={(e) => handleOnlyCase(e)}
                  >
                    Только
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </aside>
    );
}