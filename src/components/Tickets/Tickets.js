import React from 'react';
import { Ticket } from '../Ticket/TIcket'

export const Tickets = ({tickets}) => {

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