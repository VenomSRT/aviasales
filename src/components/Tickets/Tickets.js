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

    useEffect(filterTickets, [checkboxesState, tickets]);
    useEffect(calculateCurrency, [currencyRate]);
    
    function filterTickets () {
        let filteredTickets = [];

        if (checkboxesState[0].checked || checkboxesState.every(checkbox => !checkbox.checked)) {
            filteredTickets = [...tickets];
        } else {
            filteredTickets = tickets.filter(ticket => checkboxesState.some(checkbox =>  (checkbox.checked && +checkbox.value === ticket.stops)))            
        }

        filteredTickets.sort((ticket1, ticket2) => ticket1.price - ticket2.price);
        
        setFilteredTickets(filteredTickets);
    }
    
    function calculateCurrency () {
        const recalculatedTickets = filteredTickets.map(ticket => ({
            ...ticket,
            price: ticket.price * currencyRate
        }));

        setFilteredTickets(recalculatedTickets);
    }
        
    return (
        <ul className="tickets col-xxl-6 col-md-6 col-lg-7 col-sm-9 px-4">
            {filteredTickets.length > 0 && 
                filteredTickets.map(ticket => 
                    <Ticket key={ticket.id} ticketData={ticket}/>    
                )            
            }
        </ul>
    )
}