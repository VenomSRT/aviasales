import React from 'react';
import airlineLogo from '../../images/airline.png';

export const Ticket = ({ ticketData }) => {
    return (
        <li className="ticket">
            <div className="ticket__block-left">
                <div className="ticket__image-container">
                    <img src={airlineLogo} alt="airline logo" className="ticket__image"/>
                </div>

                <button className="ticket__button">
                    Купить за {ticketData.price}
                </button>
            </div>
            <div className="ticket__block-right">
                <div className="ticket__time-details">
                    <div className="ticket__departure">{ticketData.deprature_time}</div>
                    
                    <div className="stops">
                        {ticketData.stops}
                    </div>

                    <div className="ticket__arrival">{ticketData.arrival_time}</div>
                </div>

                <div className="ticket__date-details">
                    <div className="ticket__deprture-info">
                        <div className="ticket__origin-name">{ticketData.origin_name}</div>
                        <div className="ticket__departure-date">{ticketData.detarture_date}</div>
                    </div>

                    <dib className="ticket__arrival-info">
                        <div className="ticket__destination-name">{ticketData.destination_name}</div>
                        <div className="ticket__arrival-date">{ticketData.arrival_date}</div>
                    </dib>
                </div>
            </div>
        </li>
    )
}