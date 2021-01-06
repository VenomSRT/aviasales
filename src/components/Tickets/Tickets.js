import React from "react";
import { useSelector } from 'react-redux';
import { Ticket } from '../Ticket/TIcket';

export const Tickets = () => {
    const tickets = useSelector(state => {
        return state.tickets;
    });

    return (
        <ul className="tickets col-lg-9 px-5">
            {tickets.length > 0 && 
                tickets.map(ticket => 
                    <Ticket key={ticket.id} ticketData={ticket}/>    
                )            
            }
        </ul>
    )
}