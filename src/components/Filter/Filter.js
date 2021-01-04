import React from 'react';

export const Filter = () => {
    return (
        <div className="filter">
            <h3 className="filter__title">Валюта</h3>
            <div className="filter__button-container">
                <button className="filter__button checked">RUB</button>
                <button className="filter__button">USD</button>
                <button className="filter__button">EUR</button>
            </div>

            <h3 className="filter__title">Количество пересадок</h3>
            <div className="filter__checkbox-container">
                <label htmlFor="#" className="filter__label">
                    <input type="checkbox" className="filter__checkbox"/>
                    <span className="filter__description">Все</span>
                    <span className="filter__only-case">Только</span>
                </label>

                <label htmlFor="#" className="filter__label">
                    <input type="checkbox" className="filter__checkbox"/>
                    <span className="filter__description">Без пересадок</span>
                    <span className="filter__only-case">Только</span>
                </label>

                <label htmlFor="#" className="filter__label">
                    <input type="checkbox" className="filter__checkbox"/>
                    <span className="filter__description">1 пересадка</span>
                    <span className="filter__only-case">Только</span>
                </label>

                <label htmlFor="#" className="filter__label">
                    <input type="checkbox" className="filter__checkbox"/>
                    <span className="filter__description">2 пересадки</span>
                    <span className="filter__only-case">Только</span>
                </label>

                <label htmlFor="#" className="filter__label">
                    <input type="checkbox" className="filter__checkbox"/>
                    <span className="filter__description">3 пересадки</span>
                    <span className="filter__only-case">Только</span>
                </label>
            </div>
        </div>
    )
}