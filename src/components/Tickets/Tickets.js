import React from "react";
import { useSelector } from 'react-redux';
import { Ticket } from '../Ticket/TIcket';

export const Tickets = () => {
    const filteredTickets = useSelector(state => {
        return state.filteredTickets;
    });

    return (
        <ul className="tickets col-lg-9 px-5">
            {filteredTickets.length > 0 && 
                filteredTickets.map(ticket => 
                    <Ticket key={ticket.id} ticketData={ticket}/>    
                )            
            }
        </ul>
    )
}