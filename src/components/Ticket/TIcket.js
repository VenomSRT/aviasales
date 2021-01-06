import React from 'react';
import airlineLogo from '../../images/airline.png';
import planeImage from '../../images/plane.png';

export const Ticket = ({ ticketData }) => {
    return (
        <li className="ticket row shadow px-2 py-0 mb-3 bg-white rounded">
            <div className="ticket__left-section col-lg-4 d-flex flex-column px-2 py-3">
                <div className="ticket__image-container p-2 text-center">
                    <img src={airlineLogo} alt="airline logo" className="ticket__image w-75"/>
                </div>

                <button className="ticket__button-buy btn btn-warning p-3 text-white fw-bolder">
                    Купить за {ticketData.price}
                </button>
            </div>
            
            <div className="ticket__right-section col-lg-8 px-2 py-3">
                <div className="ticket__times-container d-flex justify-content-between align-items-center">
                    <div className="ticket__departure-time fs-1 col-lg-2">{ticketData.departure_time}</div>
                    
                    <div className="ticket__stops-container d-flex flex-column px-2 col-lg-6">
                        <span className="ticket__stops-desctiption m-auto fs-5">
                            {`${ticketData.stops} ${
                                ((ticketData.stops === 0 || ticketData.stops > 4) && 'пересадок')
                                || ((ticketData.stops > 1 && ticketData.stops < 5) && 'пересадки')
                                || (ticketData.stops === 1 && 'пересадка')
                            }`}
                        </span>
                        <img className="ticket__stops-image w-100" src={planeImage} alt="plane" />
                    </div>

                    <div className="ticket__arrival-time fs-1 col-lg-2">{ticketData.arrival_time}</div>
                </div>

                <div className="ticket__left-section d-flex justify-content-between">
                    <div className="ticket__deprture-info">
                        <div className="ticket__origin-name">{`${ticketData.origin}, ${ticketData.origin_name}`}</div>
                        <div className="ticket__departure-date text-muted">{ticketData.departure_date}</div>
                    </div>

                    <div className="ticket__arrival-info">
                        <div className="ticket__destination-name">{`${ticketData.destination_name}, ${ticketData.destination}`}</div>
                        <div className="ticket__arrival-date text-muted">{ticketData.arrival_date}</div>
                    </div>
                </div>
            </div>
        </li>
    )
}