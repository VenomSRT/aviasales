import React from 'react';
import { Ticket } from '../Ticket/TIcket'
import { store } from "../../store/store";

export const Tickets = (props) => {
    console.log(store.getState());
    // const tickets = store.getState().tickets;

    return (
        <ul className="tickets col-lg-9 px-5">
            {props?.tickets?.length > 0 && 
                props?.tickets?.map(ticket => 
                    <Ticket key={ticket.id} ticketData={ticket}/>    
                )            
            }
        </ul>
    )
}