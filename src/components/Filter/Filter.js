import React from 'react';

export const Filter = () => {
    return (
        <div className="col-lg-4">
            <h3 className="">Валюта</h3>
            <div className="container btn-group btn-group-lg">
                <button className="filter__button btn btn-secondary checked">RUB</button>
                <button className="filter__button btn btn-secondary">USD</button>
                <button className="filter__button btn btn-secondary">EUR</button>
            </div>

            <h3 className="filter__title">Количество пересадок</h3>
            <div className="filter__checkbox-container">
                <label htmlFor="#" className="form-check-label container">
                    <input type="checkbox" className="form-check-input col"/>
                    <span className="col">Все</span>
                    <span className="col">Только</span>
                </label>

                <label htmlFor="#" className="form-check-label container">
                    <input type="checkbox" className="form-check-input col"/>
                    <span className="col">Без пересадок</span>
                    <span className="col">Только</span>
                </label>

                <label htmlFor="#" className="form-check-label container">
                    <input type="checkbox" className="form-check-input col"/>
                    <span className="col">1 пересадка</span>
                    <span className="col">Только</span>
                </label>

                <label htmlFor="#" className="form-check-label container">
                    <input type="checkbox" className="form-check-input col"/>
                    <span className="col">2 пересадки</span>
                    <span className="col">Только</span>
                </label>

                <label htmlFor="#" className="form-check-label container">
                    <input type="checkbox" className="form-check-input col"/>
                    <span className="col">3 пересадки</span>
                    <span className="col">Только</span>
                </label>
            </div>
        </div>
    )
}