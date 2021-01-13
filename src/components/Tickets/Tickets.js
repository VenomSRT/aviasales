import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Ticket } from '../Ticket/TIcket';

export const Tickets = () => {
    const checkboxesState = useSelector(state => {
        return state.checkboxesState;
    });
    const tickets = useSelector(state => {
        return state.tickets;
    })
    const currencyRate = useSelector(state => {
        return state.currencyRate;
    })

    const [ filteredTickets, setFilteredTickets ] = useState([]);


    useEffect(filterTickets, [])
    
    function filterTickets () {
        if (checkboxesState[0].checked || checkboxesState.every(checkbox => !checkbox.checked)) {
            setFilteredTickets([...tickets]);
        } else {
            const filtered = tickets.filter(ticket => checkboxesState.some(checkbox =>  (checkbox.checked && +checkbox.value === ticket.stops)))

            setFilteredTickets(filtered);
        }  
    }
    
    function calculateCurrency () {
        filteredTickets.forEach(ticket => ticket.price = ticket.price * currencyRate);
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