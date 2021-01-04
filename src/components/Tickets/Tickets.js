import React from 'react';
import { Ticket } from '../Ticket/TIcket'

export const Tickets = ({tickets}) => {

    return (
        <div className="tickets">
            {tickets.length > 0 && 
                tickets.map(ticket => 
                    <Ticket key={ticket.id} ticketData={ticket}/>    
                )            
            }
        </div>
    )
}