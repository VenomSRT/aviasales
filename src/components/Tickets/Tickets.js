import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Ticket } from '../Ticket/TIcket';

export const Tickets = () => {
    const checkboxesStatus = useSelector(state => {
        return state.checkboxesStatus;
    });
    const tickets = useSelector(state => {
        return state.tickets;
    })

    const [ filteredTickets, setFilteredTickets ] = useState([]);

    
    function filterTickets () {
        if (checkboxesStatus[0]['Все']) {
            setFilteredTickets([...tickets]);
        } else {
            tickets
            .filter(ticket => checkboxesStatus
                .some(stop => ticket.stops === +stop))
                .sort((ticket_1, ticket_2) => ticket_1.price - ticket_2.price);
        }
        
    }
    
        
        
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