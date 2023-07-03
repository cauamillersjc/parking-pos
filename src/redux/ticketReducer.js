export const Types = {
    TICKET: '@ticket',
}

const initialState = {
    ticket: {
        id: 0,
        code: '',
        entrance: '',
        exit: '',
        permanence: 0,
        plate: '',
        status: 0,
    }
};

export const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.TICKET:
            return {
                ...state,
                ticket: action.ticket
            };
        default:
            return state;
    }
}

export const Creators = {
    addTicketAction: (ticket) => ({
        type: Types.TICKET,
        ticket
    })
}