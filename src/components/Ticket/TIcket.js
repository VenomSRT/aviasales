import React from 'react';
import airlineLogo from '../../images/airline.png';
import planeImage from '../../images/plane.png';

export const Ticket = ({ ticketData }) => {
    return (
        <li className="row shadow px-2 py-0 mb-3 bg-white rounded">
            <div className="col-lg-4 d-flex flex-column px-2 py-3">
                <div className="p-2 text-center">
                    <img src={airlineLogo} alt="airline logo" className="w-75"/>
                </div>

                <button className="btn btn-warning p-3">
                    Купить за {ticketData.price}
                </button>
            </div>
            <div className="col-lg-8 px-2 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="display-4">{ticketData.departure_time}</div>
                    
                    <div className="d-flex flex-column flex-grow-1 px-2">
                        <span className="m-auto">{ticketData.stops} пересадка</span>
                        <img className="w-100" src={planeImage} alt="plane" />
                    </div>

                    <div className="display-4">{ticketData.arrival_time}</div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="ticket__deprture-info">
                        <div className="ticket__origin-name">{`${ticketData.origin}, ${ticketData.origin_name}`}</div>
                        <div className="text-muted">{ticketData.departure_date}</div>
                    </div>

                    <dib className="ticket__arrival-info">
                        <div className="ticket__destination-name">{`${ticketData.destination_name}, ${ticketData.destination}`}</div>
                        <div className="text-muted">{ticketData.arrival_date}</div>
                    </dib>
                </div>
            </div>
        </li>
    )
}