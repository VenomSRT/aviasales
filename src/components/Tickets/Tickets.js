import React from "react";
import { useSelector } from 'react-redux';
import { Ticket } from '../Ticket/TIcket';

export const Tickets = () => {
    const tickets = useSelector(state => {
        return state.tickets;
    });

    const filteredTickets = useSelector(state => {
        return state.filteredTickets;
    });

    const ticketsToRender = filteredTickets.length ? filteredTickets : tickets;

    return (
        <ul className="tickets col-lg-9 px-5">
            {ticketsToRender.length > 0 && 
                ticketsToRender.map(ticket => 
                    <Ticket key={ticket.id} ticketData={ticket}/>    
                )            
            }
        </ul>
    )
}