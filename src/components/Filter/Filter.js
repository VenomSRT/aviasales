import React from 'react';
import './Filter.css';

export const Filter = () => {
    return (
        <aside className="filter d-inline-block col-lg-3 shadow p-3 mb-5 bg-white rounded">
            <h3 className="filter__currency-title fs-4">Валюта</h3>
            <div className="filter__currency-buttons container btn-group btn-group-lg p-0">
                <button className="filter__currency-button btn btn-primary active">RUB</button>
                <button className="filter__currency-button btn btn-primary">USD</button>
                <button className="filter__currency-button btn btn-primary">EUR</button>
            </div>

            <h3 className="filter__stops-title pt-4 fs-4">Количество пересадок</h3>
            <div className="filter__stops-checkboxes">
                <label htmlFor="all-stops" className="filter__stops-label checkbox-label form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="filter__stops-checkbox form-check-input col-lg-2" id="all-stops"/>
                    <div className="filter__checkbox-description col-lg-6">Все</div>
                    <div className="filter__case-only col-lg-3 invisible">Только</div>
                </label>

                <label htmlFor="wo-stops" className="filter__stops-label checkbox-label form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="filter__stops-checkbox form-check-input col-lg-1" id="wo-stops"/>
                    <div className="filter__checkbox-description col-lg-6">Без пересадок</div>
                    <div className="filter__case-only check-only col-lg-3 text-uppercase fw-bolder">Только</div>
                </label>

                <label htmlFor="one-stop" className="filter__stops-label checkbox-label form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="filter__stops-checkbox form-check-input col-lg-2" id="one-stop"/>
                    <div className="filter__checkbox-description col-lg-6">1 пересадка</div>
                    <div className="filter__case-only check-only col-lg-3 text-uppercase fw-bolder">Только</div>
                </label>

                <label htmlFor="two-stops" className="filter__stops-label checkbox-label form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="filter__stops-checkbox form-check-input col-lg-2" id="two-stops"/>
                    <div className="filter__checkbox-description col-lg-6">2 пересадки</div>
                    <div className="filter__case-only check-only col-lg-3 text-uppercase fw-bolder">Только</div>
                </label>

                <label htmlFor="three-stops" className="filter__stops-label checkbox-label form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="filter__stops-checkbox form-check-input col-lg-2" id="three-stops"/>
                    <div className="filter__checkbox-description col-lg-6">3 пересадки</div>
                    <div className="filter__case-only check-only col-lg-3 text-uppercase fw-bolder">Только</div>
                </label>
            </div>
        </aside>
    )
}