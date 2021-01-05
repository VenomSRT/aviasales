import React from 'react';
import './Filter.css';

export const Filter = () => {
    return (
        <div className="d-inline-block col-lg-3 shadow p-3 mb-5 bg-white rounded">
            <h3 className="fs-4">Валюта</h3>
            <div className="container btn-group btn-group-lg p-0">
                <button className="filter__button btn btn-primary active">RUB</button>
                <button className="filter__button btn btn-primary">USD</button>
                <button className="filter__button btn btn-primary">EUR</button>
            </div>

            <h3 className="pt-4 fs-4">Количество пересадок</h3>
            <div className="filter__checkbox-container">
                <label htmlFor="all-stops" className="checkbox-label form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="form-check-input col-lg-2" id="all-stops"/>
                    <div className="col-lg-6">Все</div>
                    <div className="col-lg-3 invisible">Только</div>
                </label>

                <label htmlFor="wo-stops" className="checkbox-label form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="form-check-input col-lg-1" id="wo-stops"/>
                    <div className="col-lg-6">Без пересадок</div>
                    <div className="check-only col-lg-3 text-uppercase fw-bolder">Только</div>
                </label>

                <label htmlFor="one-stop" className="checkbox-label form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="form-check-input col-lg-2" id="one-stop"/>
                    <div className="col-lg-6">1 пересадка</div>
                    <div className="check-only col-lg-3 text-uppercase fw-bolder">Только</div>
                </label>

                <label htmlFor="two-stops" className="checkbox-label form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="form-check-input col-lg-2" id="two-stops"/>
                    <div className="col-lg-6">2 пересадки</div>
                    <div className="check-only col-lg-3 text-uppercase fw-bolder">Только</div>
                </label>

                <label htmlFor="three-stops" className="checkbox-label form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="form-check-input col-lg-2" id="three-stops"/>
                    <div className="col-lg-6">3 пересадки</div>
                    <div className="check-only col-lg-3 text-uppercase fw-bolder">Только</div>
                </label>
            </div>
        </div>
    )
}