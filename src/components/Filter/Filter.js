import React from 'react';

export const Filter = () => {
    return (
        <div className="col-lg-3 shadow py-3 px-2 mb-5 bg-white rounded">
            <h3 className="">Валюта</h3>
            <div className="container btn-group btn-group-lg p-0">
                <button className="filter__button btn btn-primary checked">RUB</button>
                <button className="filter__button btn btn-primary">USD</button>
                <button className="filter__button btn btn-primary">EUR</button>
            </div>

            <h3 className="pt-3">Количество пересадок</h3>
            <div className="filter__checkbox-container">
                <label htmlFor="#" className="form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="form-check-input col-lg-2"/>
                    <div className="col-lg-6">Все</div>
                    <div className="col-lg-3 invisible">Только</div>
                </label>

                <label htmlFor="#" className="form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="form-check-input col-lg-1"/>
                    <div className="col-lg-6">Без пересадок</div>
                    <div className="col-lg-3">Только</div>
                </label>

                <label htmlFor="#" className="form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="form-check-input col-lg-2"/>
                    <div className="col-lg-6">1 пересадка</div>
                    <div className="col-lg-3">Только</div>
                </label>

                <label htmlFor="#" className="form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="form-check-input col-lg-2"/>
                    <div className="col-lg-6">2 пересадки</div>
                    <div className="col-lg-3">Только</div>
                </label>

                <label htmlFor="#" className="form-check-label container d-flex justify-content-between">
                    <input type="checkbox" className="form-check-input col-lg-2"/>
                    <div className="col-lg-6">3 пересадки</div>
                    <div className="col-lg-3">Только</div>
                </label>
            </div>
        </div>
    )
}