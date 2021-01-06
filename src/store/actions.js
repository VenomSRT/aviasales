export const loadTickets = () => ({ type: "LOAD_TICKETS" });

export const loadTicketsSuccess = tickets => (
    {   
        type: "LOAD_TICKETS_SUCCESS",
        tickets 
    }
)

export const loadTicketsError = () => ({ type: "LOAD_TICKETS_ERROR" })