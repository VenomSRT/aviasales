import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrencyRate, filterTickets } from '../../store/actions';
import './Filter.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const currencyButtons = document.querySelectorAll('.filter__currency-button')
    const currencyBase = useSelector(state => {
        return state.currencyBase;
    });

    const stopsCheckboxes = useRef([]);
    const onlyCases = useRef([]);

    useEffect(() => {
        stopsCheckboxes.current = document.querySelectorAll('.filter__stops-checkbox');
        
        stopsCheckboxes.current.forEach(checkbox => {
          checkbox.addEventListener('focus', handleChecks);
        })

        onlyCases.current = document.querySelectorAll('.filter__case-only');

        onlyCases.current.forEach(element => {
          element.addEventListener('click', handleOnlyCases);
        })
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

    function handleChecks(e) {
      let checkedStops = [];
        console.log(e.target.value);

        if (Array.from(stopsCheckboxes.current).every(checkbox => !checkbox.checked)) {
          checkedStops = 'all';
        } else if (e.target.value === '-1') {
          stopsCheckboxes.current.forEach(checkbox => {
              if (checkbox !== e.target) {
                  checkbox.checked = false;
              }
          })

          checkedStops = 'all';
        } else {
            stopsCheckboxes.current[0].checked = false;

            checkedStops = [];

            stopsCheckboxes.current.forEach(checkbox => {
              if (checkbox.checked) {
                checkedStops.push(checkbox.value);
              }
            })
        }

        console.log(checkedStops);

        dispatch(filterTickets(checkedStops));
    }

    function handleOnlyCases(e) {
      e.preventDefault();
      const nearestCheckbox = e.target.parentNode.firstChild;

      stopsCheckboxes.current.forEach(checkbox => {
        if (checkbox !== nearestCheckbox) {
          checkbox.checked = false;
        } else {
          checkbox.checked = true;
        }
      })

      dispatch(filterTickets([nearestCheckbox.value]));
    }

    return (
      <aside className="filter d-inline-block col-lg-3">
        <div className="filter__container shadow p-3 mb-5 bg-white rounded">
          <h3 className="filter__currency-title fs-4">Валюта</h3>
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
  
          <h3 className="filter__stops-title pt-4 fs-4">Количество пересадок</h3>
          <div className="filter__stops-checkboxes">
            <label
              htmlFor="all-stops"
              className="filter__stops-label checkbox-label form-check-label container d-flex justify-content-between"
            >
              <input
                type="checkbox"
                className="filter__stops-checkbox form-check-input col-lg-2"
                id="all-stops"
                value="-1"
              />
              <div className="filter__checkbox-description col-lg-6">Все</div>
              <div className="filter__case-only col-lg-3 invisible">Только</div>
            </label>
  
            <label
              htmlFor="wo-stops"
              className="filter__stops-label checkbox-label form-check-label container d-flex justify-content-between"
            >
              <input
                type="checkbox"
                className="filter__stops-checkbox form-check-input col-lg-1"
                id="wo-stops"
                value="0"
              />
              <div className="filter__checkbox-description col-lg-6">
                Без пересадок
              </div>
              <div className="filter__case-only check-only col-lg-3 text-uppercase fw-bolder">
                Только
              </div>
            </label>
  
            <label
              htmlFor="one-stop"
              className="filter__stops-label checkbox-label form-check-label container d-flex justify-content-between"
            >
              <input
                type="checkbox"
                className="filter__stops-checkbox form-check-input col-lg-2"
                id="one-stop"
                value="1"
              />
              <div className="filter__checkbox-description col-lg-6">
                1 пересадка
              </div>
              <div className="filter__case-only check-only col-lg-3 text-uppercase fw-bolder">
                Только
              </div>
            </label>
  
            <label
              htmlFor="two-stops"
              className="filter__stops-label checkbox-label form-check-label container d-flex justify-content-between"
            >
              <input
                type="checkbox"
                className="filter__stops-checkbox form-check-input col-lg-2"
                id="two-stops"
                value="2"
              />
              <div className="filter__checkbox-description col-lg-6">
                2 пересадки
              </div>
              <div className="filter__case-only check-only col-lg-3 text-uppercase fw-bolder">
                Только
              </div>
            </label>
  
            <label
              htmlFor="three-stops"
              className="filter__stops-label checkbox-label form-check-label container d-flex justify-content-between"
            >
              <input
                type="checkbox"
                className="filter__stops-checkbox form-check-input col-lg-2"
                id="three-stops"
                value="3"
              />
              <div className="filter__checkbox-description col-lg-6">
                3 пересадки
              </div>
              <div className="filter__case-only check-only col-lg-3 text-uppercase fw-bolder">
                Только
              </div>
            </label>
          </div>
        </div>
      </aside>
    );
}